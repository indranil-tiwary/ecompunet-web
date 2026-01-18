"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/sections/CTABanner";
import {
  Network,
  Cpu,
  Shield,
  Monitor,
  Cog,
  Database,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "network",
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Enterprise-grade networking solutions designed for reliability, security, and scalability.",
    features: [
      "LAN/WAN design and implementation",
      "Fiber optic network installation",
      "Network security and firewalls",
      "VPN and remote access solutions",
      "Network monitoring and management",
      "Bandwidth optimization",
    ],
  },
  {
    id: "automation",
    icon: Cpu,
    title: "Industrial Automation",
    description:
      "Smart automation systems that enhance operational efficiency and reduce manual intervention.",
    features: [
      "PLC programming and integration",
      "SCADA systems implementation",
      "Process control automation",
      "Motor control centers",
      "Instrumentation and sensors",
      "Real-time monitoring dashboards",
    ],
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety Systems",
    description:
      "Advanced safety solutions for heavy machinery and industrial environments.",
    features: [
      "Locomotive safety devices",
      "Anti-collision systems",
      "Emergency alert systems",
      "Safety interlocks",
      "Compliance monitoring",
      "Risk assessment and mitigation",
    ],
  },
  {
    id: "display",
    icon: Monitor,
    title: "LED Display Solutions",
    description:
      "Custom LED display boards and digital signage for various applications.",
    features: [
      "Railway information displays",
      "Factory floor displays",
      "Corporate digital signage",
      "Outdoor LED boards",
      "Content management systems",
      "Real-time data integration",
    ],
  },
  {
    id: "ml",
    icon: Cog,
    title: "Machine Learning & AI",
    description:
      "Intelligent systems powered by advanced algorithms for smarter operations.",
    features: [
      "Predictive maintenance",
      "Anomaly detection",
      "Pattern recognition",
      "Process optimization",
      "Computer vision solutions",
      "Data analytics and insights",
    ],
  },
  {
    id: "software",
    icon: Database,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your specific business requirements.",
    features: [
      "Inventory management systems",
      "ERP integration",
      "Custom web applications",
      "Mobile applications",
      "Database design and management",
      "API development and integration",
    ],
  },
];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="heading-1 text-dark mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl text-muted">
              From network infrastructure to intelligent automation, we provide
              end-to-end solutions designed for enterprise scale and reliability.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="heading-2 text-dark mb-4">{service.title}</h2>
                  <p className="text-lg text-muted mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-50">
        <Container>
          <SectionHeader
            label="Our Process"
            title="How We Work"
            description="A structured approach to delivering successful projects."
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your requirements, challenges, and objectives.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Creating detailed solutions tailored to your needs.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Expert deployment with minimal disruption to operations.",
              },
              {
                step: "04",
                title: "Support",
                description:
                  "Ongoing maintenance and 24/7 technical assistance.",
              },
            ].map((item, index) => (
              <Card key={item.step} delay={index * 0.1}>
                <span className="text-4xl font-bold text-primary/20">
                  {item.step}
                </span>
                <h4 className="font-semibold text-dark mt-2 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
