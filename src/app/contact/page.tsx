
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message cannot exceed 500 characters.",
  }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Simulate form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    // Here you would typically send the data to your backend
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
      variant: "default", // Use 'default' which maps to accent color (green) via CSS vars
    });
    form.reset(); // Reset form fields after successful submission
  }

  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Have questions or want to learn more? We'd love to hear from you.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="shadow-md">
             <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                    <Send className="h-6 w-6 text-primary" />
                    Send us a Message
                </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
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
                          <Input type="email" placeholder="your.email@example.com" {...field} />
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
                            placeholder="How can we help you?"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-150 ease-in-out group">
                    Send Message
                     <Send className="ml-2 h-4 w-4 transition-transform duration-150 ease-in-out group-hover:translate-x-1" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="shadow-sm">
             <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Contact Information
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">123 HR Way, Suite 400<br/>Metropolis, ST 54321</p>
                    </div>
                </div>
                 <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
                    </div>
                </div>
                 <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@hrcloudhub.com" className="text-muted-foreground hover:text-primary transition-colors">info@hrcloudhub.com</a>
                    </div>
                </div>
            </CardContent>
          </Card>
            <Card className="shadow-sm">
             <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Connect With Us
                </CardTitle>
            </CardHeader>
            <CardContent>
                 <div className="flex items-center justify-center md:justify-start gap-6">
                    <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                        <Facebook className="h-6 w-6" />
                    </Link>
                    <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-6 w-6" />
                    </Link>
                    <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-6 w-6" />
                    </Link>
                </div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Embedded Map (Optional) - Placeholder */}
      {/*
      <section>
        <h2 className="text-2xl font-bold text-center mb-6">Our Location</h2>
        <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
          { // Replace with actual map embed code (e.g., Google Maps iframe) }
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.142293787104!2d-73.98785838459305!3d40.75889497932686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c64801b9%3A0x86f6d9b4d5a8c37c!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1678886 Times Square Placeholder "
            width="100%"
            height="100%"
            style={{ border:0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </section>
      */}
    </div>
  );
}
