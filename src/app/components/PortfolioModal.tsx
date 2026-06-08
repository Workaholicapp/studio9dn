import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { X, Upload, Loader2 } from 'lucide-react';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  name: string;
  email: string;
  message: string;
  file: FileList;
};

export function PortfolioModal({ isOpen, onClose }: PortfolioModalProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [fileName, setFileName] = useState<string>('');

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message || '');
      
      if (data.file && data.file[0]) {
        formData.append('file', data.file[0]);
      } else {
        toast.error('Please select a file to upload');
        return;
      }

      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-e2a17c29/portfolio`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${publicAnonKey}`
        },
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Failed to submit portfolio');
      }

      toast.success('Portfolio submitted successfully!');
      reset();
      setFileName('');
      onClose();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || 'Failed to submit portfolio. Please try again.');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] bg-background border-border p-0 gap-0 overflow-hidden">
        <div className="p-6 border-b border-border flex justify-between items-center">
            <div>
                <DialogTitle className="text-xl uppercase tracking-widest font-medium font-[family-name:var(--font-secondary)]">
                    Submit Portfolio
                </DialogTitle>
                <DialogDescription className="text-muted-foreground mt-1 text-xs uppercase tracking-wide">
                    Join the Studio9DN Team
                </DialogDescription>
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wide font-medium text-muted-foreground">Full Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors rounded-none text-sm"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wide font-medium text-muted-foreground">Email Address</label>
              <input
                {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                })}
                className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors rounded-none text-sm"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wide font-medium text-muted-foreground">CV / Portfolio (PDF, Max 10MB)</label>
              <div className="relative">
                <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".pdf"
                    {...register('file', { 
                        required: 'File is required',
                        onChange: (e) => {
                            if (e.target.files && e.target.files[0]) {
                                setFileName(e.target.files[0].name);
                            }
                        }
                    })}
                />
                <label 
                    htmlFor="file-upload" 
                    className="flex items-center gap-3 w-full border border-dashed border-border p-4 cursor-pointer hover:bg-muted/30 transition-colors group"
                >
                    <div className="bg-muted w-8 h-8 flex items-center justify-center rounded-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Upload size={14} />
                    </div>
                    <span className="text-sm text-muted-foreground truncate">
                        {fileName || 'Click to upload PDF...'}
                    </span>
                </label>
              </div>
              {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wide font-medium text-muted-foreground">Brief Statement (Optional)</label>
              <textarea
                {...register('message')}
                className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors min-h-[80px] rounded-none resize-none text-sm"
                placeholder="Tell us about your approach to architecture..."
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-xs font-medium flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                    <Loader2 className="animate-spin" size={14} />
                    Uploading...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
