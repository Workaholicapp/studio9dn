import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { toast } from 'sonner';

type Application = {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  message: string;
  createdAt: string;
  hasAttachment?: boolean;
  attachmentPath?: string;
  bucketName?: string;
};

export function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);
  const [signupMode, setSignupMode] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchApplications(session.access_token);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchApplications(session.access_token);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchApplications = async (token: string) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-e2a17c29/applications`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'apikey': publicAnonKey
        }
      });
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      } else {
         const err = await response.json().catch(() => ({ error: 'Failed to fetch applications' }));
         toast.error(err.error || 'Failed to fetch applications');
      }
    } catch (error) {
      console.error(error);
      toast.error('Network error fetching applications');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Signed in successfully');
    }
    setLoading(false);
  };
  
  const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);

      const normalizedEmail = email.trim().toLowerCase();
      const authorizedEmails = ['studio9dn@gmail.com', 'info@studio9dn.com'];

      if (!authorizedEmails.includes(normalizedEmail)) {
        toast.error('Only authorized admin accounts can initialize.');
        setLoading(false);
        return;
      }

      if (password.length < 6) {
        toast.error('Password must be at least 6 characters.');
        setLoading(false);
        return;
      }

      try {
           const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-e2a17c29/signup`, {
            method: 'POST',
            body: JSON.stringify({ email: normalizedEmail, password, name: 'Admin' }),
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${publicAnonKey}`,
                'apikey': publicAnonKey
            }
           });
           
           const text = await response.text();
           let result;
           try {
               result = JSON.parse(text);
           } catch (e) {
               console.error('Failed to parse server response:', text);
               throw new Error('Server returned an invalid response. Please try again.');
           }

           if (!response.ok) {
               throw new Error(result.error || `Server Error (${response.status}): ${text}`);
           }
           
           if (result.success) {
               toast.success(result.message || 'Admin account ready!');
               
               // Attempt auto-login with the password just set
               const { error: loginError } = await supabase.auth.signInWithPassword({
                  email: normalizedEmail,
                  password,
                });

                if (loginError) {
                  toast.info('Account created/updated. Please sign in with your password.');
                  setSignupMode(false);
                } else {
                  toast.success('Logged in successfully!');
                }
           } else {
               toast.success('Admin account created! Please sign in.');
               setSignupMode(false);
           }
      } catch (err: any) {
          console.error('Signup error detail:', err);
          toast.error(err.message || 'Failed to process admin request');
      }
      setLoading(false);
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setApplications([]);
    toast.success('Signed out');
  };

  const handleDownload = async (app: Application) => {
    if (!app.hasAttachment || !app.attachmentPath || !app.bucketName || !session) return;
    
    try {
       const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-e2a17c29/attachment-url`, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${session.access_token}`,
              'apikey': publicAnonKey,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ path: app.attachmentPath, bucket: app.bucketName })
       });
       
       if (response.ok) {
           const { url } = await response.json();
           window.open(url, '_blank');
       } else {
           const err = await response.json();
           toast.error(err.error || 'Failed to get download link');
       }
    } catch (err) {
        toast.error('Error downloading file');
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-medium uppercase tracking-widest" style={{ fontFamily: 'var(--font-primary)' }}>Admin Access</h1>
            <p className="mt-2 text-muted-foreground" style={{ fontFamily: 'var(--font-primary)' }}>
                {signupMode ? 'Initialize or reset admin account' : 'Please sign in to view applications'}
            </p>
          </div>
          <form onSubmit={signupMode ? handleSignup : handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground" style={{ fontFamily: 'var(--font-primary)' }}>Admin Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@studio9dn.com"
                className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors"
                required
                style={{ fontFamily: 'var(--font-primary)' }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground" style={{ fontFamily: 'var(--font-primary)' }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors"
                required
                style={{ fontFamily: 'var(--font-primary)' }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-medium disabled:opacity-50"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              {loading ? 'Processing...' : (signupMode ? 'Initialize Admin' : 'Sign In')}
            </button>
            <div className="text-center">
                <button 
                    type="button" 
                    onClick={() => {
                        setSignupMode(!signupMode);
                        setEmail('');
                        setPassword('');
                    }}
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-primary)' }}
                >
                    {signupMode ? 'Back to Login' : 'Reset / Initialize Admin Account'}
                </button>
            </div>
          </form>
          
          {signupMode && (
            <div className="mt-8 p-4 bg-muted/30 border border-border text-[11px] text-muted-foreground leading-relaxed">
                <p className="font-medium mb-1 uppercase tracking-wider">Note:</p>
                This feature is only available for authorized admin emails (<strong>info@studio9dn.com</strong> or <strong>studio9dn@gmail.com</strong>). 
                If the account already exists, this will update its password.
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-border pb-8">
          <div>
              <h1 className="text-3xl font-medium uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-primary)' }}>Dashboard</h1>
              <p className="text-muted-foreground text-sm" style={{ fontFamily: 'var(--font-primary)' }}>Managing {applications.length} submissions</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 uppercase tracking-[0.2em] text-[10px] font-medium"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Sign Out
          </button>
        </div>

        <div className="grid gap-8">
          {applications.length === 0 ? (
            <div className="text-center py-24 border border-dashed border-border">
                <p className="text-muted-foreground uppercase tracking-widest text-xs">No applications found.</p>
            </div>
          ) : (
            applications.map((app) => (
              <div key={app.id} className="group border border-border p-8 hover:border-primary transition-all duration-500 bg-card">
                <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-medium uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-primary)' }}>{app.name}</h3>
                    <p className="text-sm text-primary font-medium" style={{ fontFamily: 'var(--font-primary)' }}>{app.email}</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] border border-border px-3 py-1 bg-muted/20">
                    {new Date(app.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mb-8">
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-[0.2em] mb-2">Phone</span>
                    <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-primary)' }}>{app.phone || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-[0.2em] mb-2">Location</span>
                    <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-primary)' }}>{app.location}</span>
                  </div>
                   <div>
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-[0.2em] mb-2">Project</span>
                    <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-primary)' }}>{app.projectType}</span>
                  </div>
                   <div>
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-[0.2em] mb-2">Budget</span>
                    <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-primary)' }}>{app.budget || 'N/A'}</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-border/50">
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-[0.2em] mb-3">Message / Details</span>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap mb-8 text-foreground/80 max-w-[80ch]" style={{ fontFamily: 'var(--font-primary)' }}>{app.message}</p>
                    
                    {app.hasAttachment && (
                        <button
                            onClick={() => handleDownload(app)}
                            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
                            style={{ fontFamily: 'var(--font-primary)' }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            Download Portfolio
                        </button>
                    )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
