'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';
import Navbar from '@/components/me/navbar';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    defaultValues: { name: '', email: '', message: '' },
    mode: 'onBlur',
  });

  const onSubmit = async (values: ContactFormValues) => {
    // TODO maybe I do need a backend
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      alert('Thanks for reaching out! I’ll get back to you soon.');
      form.reset();
    } else {
      alert('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <div>
        <Navbar className="bg-black" />
      </div>
      <div className="min-h-screen flex flex-col items-center pt-24 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>

        <div className="w-full max-w-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your Name"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="you@example.com"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="How can I help you?"
                        rows={5}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </div>

        <footer className="mt-auto py-8 flex space-x-6">
          <a
            href="https://www.linkedin.com/in/lughan-ross/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 hover:opacity-80" />
          </a>
          <a href="mailto:royaltross.lr@gmail.com" aria-label="Email">
            <Mail className="h-6 w-6 hover:opacity-80" />
          </a>
        </footer>
      </div>
    </>
  );
}
