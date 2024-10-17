"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Twitter, TikTok } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <section className="py-12 bg-card/50 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Connect With Us</h2>
        <p className="text-gray-300 mb-6">
          Follow us on social media for updates, style tips, and behind-the-scenes looks at upcoming releases. Join the community and stay ahead in the sneaker game.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-gray-300 hover:text-primary">
            <Instagram className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-300 hover:text-primary">
            <Twitter className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-300 hover:text-primary">
            <TikTok className="h-8 w-8" />
          </a>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            type="email"
            placeholder="Enter your email for updates"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="max-w-sm bg-background text-foreground"
          />
          <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;