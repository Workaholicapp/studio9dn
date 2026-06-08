import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization", "apikey", "X-Client-Info"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
const healthHandler = (c: any) => c.json({ status: "ok" });
app.get("/make-server-e2a17c29/health", healthHandler);
app.get("/health", healthHandler);

// Admin Creation/Password Reset endpoint
const signupHandler = async (c: any) => {
  try {
    const body = await c.req.json();
    const { email, password, name } = body;

    console.log(`Attempting admin signup for: ${email}`);

    const authorizedEmails = ['studio9dn@gmail.com', 'info@studio9dn.com'];
    if (!authorizedEmails.includes(email)) {
      return c.json({ error: 'Unauthorized email address. Only designated admins can sign up.' }, 403);
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    // 1. Try to create the user
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name: name || 'Admin' },
      email_confirm: true
    });

    if (error) {
      console.log(`Initial creation error: ${error.message} (Status: ${error.status})`);
      
      // If user already exists, update them
      if (error.message?.toLowerCase().includes("registered") || 
          error.message?.toLowerCase().includes("exists") || 
          error.status === 422) {
        
        const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
        if (listError) return c.json({ error: 'System error: Could not verify existing account.' }, 500);

        const existingUser = users.find(u => u.email?.toLowerCase() === email.toLowerCase());
        
        if (existingUser) {
          const { data: updateData, error: updateError } = await supabase.auth.admin.updateUserById(
            existingUser.id,
            { 
              password: password, 
              email_confirm: true,
              user_metadata: { ...existingUser.user_metadata, name: name || 'Admin' }
            }
          );

          if (updateError) return c.json({ error: `Update failed: ${updateError.message}` }, 400);
          
          return c.json({ 
            success: true, 
            message: "Admin account recognized. Password updated successfully.", 
            user: updateData.user 
          });
        }
      }
      return c.json({ error: `Auth System Error: ${error.message}` }, 400);
    }

    return c.json({ success: true, message: "Admin account created successfully.", data });

  } catch (err: any) {
    console.error('Signup crash:', err);
    return c.json({ error: `Server Exception: ${err.message}` }, 500);
  }
};

app.post("/make-server-e2a17c29/signup", signupHandler);
app.post("/signup", signupHandler);

// Submit Application Endpoint
const submitAppHandler = async (c: any) => {
  const body = await c.req.json();
  const id = crypto.randomUUID();
  const key = `application:${Date.now()}:${id}`;
  await kv.set(key, { ...body, id, createdAt: new Date().toISOString() });
  return c.json({ success: true, id });
};
app.post("/make-server-e2a17c29/applications", submitAppHandler);
app.post("/applications", submitAppHandler);

// Get Applications Endpoint (Protected)
const getAppsHandler = async (c: any) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    if (!accessToken) return c.json({ error: 'No authorization provided' }, 401);

    const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!);
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    if (error || !user) return c.json({ error: 'Invalid or expired session' }, 401);

    const applications = await kv.getByPrefix('application:');
    applications.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return c.json(applications);
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
};
app.get("/make-server-e2a17c29/applications", getAppsHandler);
app.get("/applications", getAppsHandler);

// Portfolio Submission Endpoint
const portfolioHandler = async (c: any) => {
  try {
    const body = await c.req.parseBody();
    const file = body['file'];
    const name = body['name'] as string;
    const email = body['email'] as string;
    const message = body['message'] as string;

    if (!file || !(file instanceof File)) return c.json({ error: 'Portfolio file required' }, 400);

    const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
    const bucketName = 'make-e2a17c29-portfolios';

    const { data: buckets } = await supabase.storage.listBuckets();
    if (!buckets?.some(b => b.name === bucketName)) {
      await supabase.storage.createBucket(bucketName, { public: false });
    }

    const timestamp = Date.now();
    const fileName = `${timestamp}_${name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${file.name.split('.').pop()}`;
    const { error: uploadError } = await supabase.storage.from(bucketName).upload(fileName, file, { contentType: file.type });

    if (uploadError) return c.json({ error: 'Storage upload failed' }, 500);

    const id = crypto.randomUUID();
    await kv.set(`application:${timestamp}:${id}`, {
      id, name, email, projectType: 'Portfolio Submission', message, createdAt: new Date().toISOString(),
      hasAttachment: true, attachmentPath: fileName, bucketName
    });

    return c.json({ success: true, id });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
};
app.post("/make-server-e2a17c29/portfolio", portfolioHandler);
app.post("/portfolio", portfolioHandler);

// Get Attachment URL Endpoint (Protected)
const attachmentHandler = async (c: any) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    if (!accessToken) return c.json({ error: 'Unauthorized' }, 401);

    const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!);
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    if (error || !user) return c.json({ error: 'Unauthorized' }, 401);

    const { path, bucket } = await c.req.json();
    const supabaseAdmin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
    const { data, error: signedUrlError } = await supabaseAdmin.storage.from(bucket).createSignedUrl(path, 3600);

    if (signedUrlError) return c.json({ error: signedUrlError.message }, 400);
    return c.json({ url: data.signedUrl });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
};
app.post("/make-server-e2a17c29/attachment-url", attachmentHandler);
app.post("/attachment-url", attachmentHandler);

Deno.serve(app.fetch);
