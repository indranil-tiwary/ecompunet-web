"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import {
  Network,
  Cpu,
  Shield,
  Monitor,
  Cog,
  Database,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Enterprise-grade networking solutions including LAN/WAN setup, fiber optics, and secure network architecture for large-scale operations.",
    href: "/services#network",
  },
  {
    icon: Cpu,
    title: "Industrial Automation",
    description:
      "Smart automation systems for manufacturing, process control, and real-time monitoring of industrial equipment and operations.",
    href: "/services#automation",
  },
  {
    icon: Shield,
    title: "Safety Systems",
    description:
      "Advanced safety devices and monitoring systems for heavy machinery, locomotives, and industrial environments.",
    href: "/services#safety",
  },
  {
    icon: Monitor,
    title: "LED Display Solutions",
    description:
      "Custom LED display boards and digital signage solutions for railways, factories, and corporate environments.",
    href: "/services#display",
  },
  {
    icon: Cog,
    title: "Machine Learning & AI",
    description:
      "Intelligent systems powered by ML algorithms for predictive maintenance, anomaly detection, and process optimization.",
    href: "/services#ml",
  },
  {
    icon: Database,
    title: "Software Development",
    description:
      "Custom software solutions including inventory management, ERP systems, and specialized industrial applications.",
    href: "/services#software",
  },
];

export function Services() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          label="Our Services"
          title="Comprehensive IT & Automation Solutions"
          description="From network infrastructure to intelligent automation, we provide end-to-end technology solutions tailored for enterprise needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} delay={index * 0.1}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-3 text-dark mb-3">{service.title}</h3>
              <p className="text-muted mb-4">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
