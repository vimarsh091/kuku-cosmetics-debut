import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Kuku Cosmetics! 💄",
        description: "You'll be the first to know when we launch.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto fade-in-left">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/90 backdrop-blur-sm border-rose-gold/20 focus:border-rose-gold text-deep-plum placeholder:text-muted-foreground rounded-full px-6 py-3 text-base shadow-soft"
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-luxury min-w-[120px] whitespace-nowrap"
        >
          {isSubmitting ? 'Joining...' : 'Notify Me'}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mt-3 text-center">
        Be the first to experience luxury redefined.
      </p>
    </form>
  );
};

export default NewsletterForm;