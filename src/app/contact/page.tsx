"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@easterncompunet.com", "support@easterncompunet.com"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 123 456 7890", "+91 987 654 3210"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Eastern Compunet Pvt. Ltd.", "Jamshedpur, Jharkhand, India"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 9AM - 1PM"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full">
              Contact Us
            </span>
            <h1 className="heading-1 text-dark mb-6">
              Let&apos;s Discuss Your Project
            </h1>
            <p className="text-xl text-muted">
              Ready to transform your enterprise with innovative technology
              solutions? Get in touch with our team for a free consultation.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card hover={false}>
                <h2 className="heading-3 text-dark mb-6">Send Us a Message</h2>
                <ContactForm />
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-sm text-muted">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="pb-16">
        <Container>
          <div className="bg-slate-200 rounded-2xl h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="text-slate-500">
                Interactive map would be displayed here
              </p>
              <p className="text-sm text-slate-400">
                Jamshedpur, Jharkhand, India
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Additional CTA */}
      <section className="pb-20">
        <Container>
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prefer to Talk?
            </h2>
            <p className="text-blue-200 mb-6">
              Schedule a call with our experts for a personalized consultation.
            </p>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 123 456 7890
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
