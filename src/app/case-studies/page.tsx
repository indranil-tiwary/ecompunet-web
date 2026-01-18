"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/sections/CTABanner";
import {
  Train,
  Factory,
  Building2,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    icon: Train,
    category: "Railway Systems",
    title: "Real-Time Locomotive Monitoring for Indian Railways",
    client: "Indian Railways",
    challenge:
      "Indian Railways needed a comprehensive system to monitor locomotive performance and location across their vast network in real-time.",
    solution:
      "We developed and deployed a custom real-time monitoring system with GPS tracking, performance metrics collection, and a centralized dashboard for operations control.",
    results: [
      { metric: "500+", description: "Locomotives Monitored" },
      { metric: "30%", description: "Reduction in Breakdowns" },
      { metric: "99.9%", description: "System Uptime" },
    ],
    technologies: ["IoT Sensors", "Real-time Database", "Custom Dashboard"],
  },
  {
    id: 2,
    icon: Factory,
    category: "Manufacturing",
    title: "Process Automation for TATA Steel Plant",
    client: "TATA Steel Limited",
    challenge:
      "A major steel manufacturing plant needed to automate their production line to improve efficiency and reduce manual intervention.",
    solution:
      "Implemented comprehensive SCADA system with PLC integration, automated quality control checkpoints, and real-time production monitoring dashboards.",
    results: [
      { metric: "40%", description: "Downtime Reduction" },
      { metric: "25%", description: "Efficiency Improvement" },
      { metric: "50%", description: "Manual Tasks Automated" },
    ],
    technologies: ["SCADA", "PLC Programming", "HMI Design"],
  },
  {
    id: 3,
    icon: Building2,
    category: "Enterprise IT",
    title: "Campus Network Infrastructure for XLRI",
    client: "XLRI Jamshedpur",
    challenge:
      "XLRI required a complete network infrastructure overhaul to support their growing digital learning and administrative needs.",
    solution:
      "Designed and implemented a campus-wide fiber optic network with redundant connectivity, advanced security, and seamless Wi-Fi coverage across all facilities.",
    results: [
      { metric: "10x", description: "Bandwidth Increase" },
      { metric: "100%", description: "Campus Coverage" },
      { metric: "5000+", description: "Users Supported" },
    ],
    technologies: ["Fiber Optics", "Enterprise Networking", "Security Systems"],
  },
  {
    id: 4,
    icon: Train,
    category: "Safety Systems",
    title: "Anti-Collision System for Railway Yards",
    client: "Railway Division",
    challenge:
      "Railway yards faced safety challenges with locomotive movements, requiring an advanced collision prevention system.",
    solution:
      "Deployed IoT-based anti-collision system with proximity sensors, automated alerts, and integration with yard management systems.",
    results: [
      { metric: "Zero", description: "Collision Incidents" },
      { metric: "60%", description: "Safety Improvement" },
      { metric: "24/7", description: "Monitoring Coverage" },
    ],
    technologies: ["IoT Sensors", "Alert Systems", "Integration APIs"],
  },
  {
    id: 5,
    icon: Factory,
    category: "Industrial Automation",
    title: "Inventory Management System for Steel Plant",
    client: "Jindal Steel",
    challenge:
      "Managing inventory across multiple warehouses with real-time tracking and automated reordering was a significant challenge.",
    solution:
      "Custom inventory management software with barcode scanning, real-time stock tracking, automated alerts, and ERP integration.",
    results: [
      { metric: "35%", description: "Inventory Cost Reduction" },
      { metric: "Real-time", description: "Stock Visibility" },
      { metric: "90%", description: "Manual Entry Eliminated" },
    ],
    technologies: [
      "Custom Software",
      "Barcode Integration",
      "ERP Connectivity",
    ],
  },
  {
    id: 6,
    icon: Building2,
    category: "LED Solutions",
    title: "Digital Signage Network for Railway Stations",
    client: "Indian Railways",
    challenge:
      "Multiple railway stations needed modern passenger information displays with real-time train information updates.",
    solution:
      "Installed LED display boards across stations with centralized content management and real-time integration with train tracking systems.",
    results: [
      { metric: "100+", description: "Displays Installed" },
      { metric: "Real-time", description: "Information Updates" },
      { metric: "95%", description: "Passenger Satisfaction" },
    ],
    technologies: ["LED Displays", "CMS", "API Integration"],
  },
];

export default function CaseStudiesPage() {
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
              Case Studies
            </span>
            <h1 className="heading-1 text-dark mb-6">
              Real Results for Real Enterprises
            </h1>
            <p className="text-xl text-muted">
              Explore how we&apos;ve helped leading organizations transform their
              operations with innovative technology solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-primary">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "18+", label: "Years Experience" },
              { value: "99%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <Container>
          <SectionHeader
            label="Our Work"
            title="Featured Projects"
            description="A selection of our most impactful enterprise solutions."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={study.id} delay={index * 0.1} className="overflow-hidden">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <study.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {study.category}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-300" />
                </div>

                {/* Content */}
                <h3 className="heading-3 text-dark mb-2">{study.title}</h3>
                <p className="text-sm text-muted mb-4">Client: {study.client}</p>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-dark mb-1">
                      Challenge
                    </h4>
                    <p className="text-sm text-muted">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark mb-1">
                      Solution
                    </h4>
                    <p className="text-sm text-muted">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-slate-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-dark">
                      Results
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result) => (
                      <div key={result.description} className="text-center">
                        <div className="text-xl font-bold text-primary">
                          {result.metric}
                        </div>
                        <div className="text-xs text-muted">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
