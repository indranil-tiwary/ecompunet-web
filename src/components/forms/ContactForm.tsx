"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Network Infrastructure",
  "Industrial Automation",
  "Safety Systems",
  "LED Display Solutions",
  "Machine Learning & AI",
  "Software Development",
  "Other",
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-dark mb-2">
          Thank You for Reaching Out!
        </h3>
        <p className="text-muted">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-dark mb-2"
          >
            Full Name *
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-white transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
              errors.name ? "border-red-300" : "border-slate-200"
            )}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-dark mb-2"
          >
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-white transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
              errors.email ? "border-red-300" : "border-slate-200"
            )}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-dark mb-2"
          >
            Company Name *
          </label>
          <input
            {...register("company")}
            type="text"
            id="company"
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-white transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
              errors.company ? "border-red-300" : "border-slate-200"
            )}
            placeholder="Your Company"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-dark mb-2"
          >
            Phone Number
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-white transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
              "border-slate-200"
            )}
            placeholder="+91 123 456 7890"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-dark mb-2"
        >
          Service Interest *
        </label>
        <select
          {...register("service")}
          id="service"
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-white transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
            errors.service ? "border-red-300" : "border-slate-200"
          )}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-dark mb-2"
        >
          Message *
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-white transition-colors resize-none",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
            errors.message ? "border-red-300" : "border-slate-200"
          )}
          placeholder="Tell us about your project and requirements..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-5 h-5" />
          </>
        )}
      </Button>
    </form>
  );
}
