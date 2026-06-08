import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '/utils/supabase/info';

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  message: string;
};

export function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-e2a17c29/applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      toast.success('Application submitted successfully');
      reset();
    } catch (error) {
      console.error(error);
      toast.error('Failed to submit application. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-wide font-medium">Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors rounded-none"
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-wide font-medium">Email</label>
          <input
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
            className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors rounded-none"
            placeholder="Your email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <div className="space-y-2">
          <label className="text-sm uppercase tracking-wide font-medium">Phone</label>
          <input
            {...register('phone')}
            className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors rounded-none"
            placeholder="Your phone number"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-wide font-medium">Project Type</label>
          <input
            {...register('projectType', { required: 'Project type is required' })}
            className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors rounded-none"
            placeholder="e.g. Residential, Commercial"
          />
          {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
        </div>
      </div>

       <div className="grid md:grid-cols-2 gap-6">
         <div className="space-y-2">
          <label className="text-sm uppercase tracking-wide font-medium">Location</label>
          <input
            {...register('location', { required: 'Location is required' })}
            className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors rounded-none"
            placeholder="Project location"
          />
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-wide font-medium">Budget Range</label>
          <input
            {...register('budget')}
            className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors rounded-none"
            placeholder="Approximate budget"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm uppercase tracking-wide font-medium">Message</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors min-h-[100px] rounded-none resize-none"
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm disabled:opacity-50 font-medium"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}
