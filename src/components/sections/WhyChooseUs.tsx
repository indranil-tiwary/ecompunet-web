"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";

const stats = [
  { value: 18, suffix: "+", label: "Years of Excellence", icon: Clock },
  { value: 200, suffix: "+", label: "Projects Completed", icon: Award },
  { value: 50, suffix: "+", label: "Enterprise Clients", icon: Users },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: CheckCircle2 },
];

const features = [
  {
    title: "Industry Expertise",
    description:
      "Deep domain knowledge in railways, manufacturing, and heavy industries with proven track record.",
  },
  {
    title: "End-to-End Solutions",
    description:
      "From consultation to implementation and support, we handle every aspect of your technology needs.",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance to ensure your operations run smoothly.",
  },
  {
    title: "Custom Development",
    description:
      "Tailored solutions designed specifically for your unique business requirements and challenges.",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {displayValue}
      {suffix}
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        {/* Stats Section */}
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <div className="text-sm text-blue-200 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Why Choose Us"
              title="Your Trusted Technology Partner"
              description="With nearly two decades of experience, we understand the unique challenges of enterprise technology and deliver solutions that drive real results."
              centered={false}
            />
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-slate-600 font-medium">
                    Certified Excellence
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-xl -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
