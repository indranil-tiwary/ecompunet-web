"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/sections/CTABanner";
import { cn } from "@/lib/utils";
import {
  Train,
  Factory,
  Building2,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const industries = [
  {
    id: "railway",
    icon: Train,
    name: "Railway Systems",
    tagline: "Powering safe and efficient rail operations",
    description:
      "Comprehensive technology solutions for Indian Railways and private rail operators, focusing on safety, monitoring, and operational efficiency.",
    solutions: [
      {
        title: "Real-Time Locomotive Monitoring",
        description:
          "Track locomotive performance, location, and health metrics in real-time across your entire fleet.",
      },
      {
        title: "Safety Device Integration",
        description:
          "Advanced safety systems including anti-collision devices, speed monitoring, and emergency alerts.",
      },
      {
        title: "LED Information Displays",
        description:
          "Dynamic passenger information displays for stations and platforms with real-time updates.",
      },
      {
        title: "Network Infrastructure",
        description:
          "Robust networking solutions connecting stations, control rooms, and operational centers.",
      },
    ],
    stats: [
      { value: "500+", label: "Locomotives Monitored" },
      { value: "100+", label: "Stations Connected" },
      { value: "99.9%", label: "System Uptime" },
    ],
  },
  {
    id: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    tagline: "Smart automation for modern factories",
    description:
      "Industrial automation and monitoring solutions for steel plants, manufacturing units, and heavy industries.",
    solutions: [
      {
        title: "Process Automation",
        description:
          "End-to-end automation of manufacturing processes with PLC and SCADA integration.",
      },
      {
        title: "Predictive Maintenance",
        description:
          "ML-powered systems that predict equipment failures before they occur.",
      },
      {
        title: "Safety Systems",
        description:
          "Comprehensive safety solutions for heavy machinery and hazardous environments.",
      },
      {
        title: "Production Monitoring",
        description:
          "Real-time dashboards tracking production metrics, quality, and efficiency.",
      },
    ],
    stats: [
      { value: "40%", label: "Downtime Reduction" },
      { value: "25%", label: "Efficiency Gain" },
      { value: "50+", label: "Plants Automated" },
    ],
  },
  {
    id: "enterprise",
    icon: Building2,
    name: "Enterprise IT",
    tagline: "Technology backbone for modern enterprises",
    description:
      "Comprehensive IT infrastructure and software solutions for large organizations and institutions.",
    solutions: [
      {
        title: "Network Infrastructure",
        description:
          "Enterprise-grade LAN/WAN setup with security and redundancy built-in.",
      },
      {
        title: "Custom Software Development",
        description:
          "Tailored applications for inventory management, ERP, and business processes.",
      },
      {
        title: "Data Center Solutions",
        description:
          "Server infrastructure, virtualization, and cloud integration services.",
      },
      {
        title: "IT Support & Maintenance",
        description:
          "24/7 technical support and proactive maintenance for your IT infrastructure.",
      },
    ],
    stats: [
      { value: "50+", label: "Enterprise Clients" },
      { value: "1000+", label: "Endpoints Managed" },
      { value: "24/7", label: "Support Available" },
    ],
  },
  {
    id: "iot",
    icon: Cpu,
    name: "IoT Solutions",
    tagline: "Connected devices, smarter operations",
    description:
      "Internet of Things solutions that connect, monitor, and optimize operations across industries.",
    solutions: [
      {
        title: "Sensor Networks",
        description:
          "Deploy and manage networks of sensors for environmental and operational monitoring.",
      },
      {
        title: "Asset Tracking",
        description:
          "Real-time tracking of assets, vehicles, and equipment across locations.",
      },
      {
        title: "Remote Monitoring",
        description:
          "Monitor and control equipment remotely with secure IoT connectivity.",
      },
      {
        title: "Data Analytics",
        description:
          "Transform IoT data into actionable insights with advanced analytics.",
      },
    ],
    stats: [
      { value: "10K+", label: "Devices Connected" },
      { value: "1M+", label: "Data Points Daily" },
      { value: "Real-time", label: "Analytics" },
    ],
  },
];

export default function SolutionsPage() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

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
              Industry Solutions
            </span>
            <h1 className="heading-1 text-dark mb-6">
              Tailored Solutions for Your Industry
            </h1>
            <p className="text-xl text-muted">
              Deep domain expertise across railways, manufacturing, and
              enterprise sectors, delivering solutions that address your specific
              challenges.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Industry Tabs */}
      <section className="section-padding">
        <Container>
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all",
                  activeIndustry.id === industry.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                <industry.icon className="w-5 h-5" />
                {industry.name}
              </button>
            ))}
          </div>

          {/* Active Industry Content */}
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Industry Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <activeIndustry.icon className="w-8 h-8 text-primary" />
              </div>
              <h2 className="heading-2 text-dark mb-2">{activeIndustry.name}</h2>
              <p className="text-lg text-primary mb-4">
                {activeIndustry.tagline}
              </p>
              <p className="text-muted max-w-2xl mx-auto">
                {activeIndustry.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
              {activeIndustry.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Solutions Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {activeIndustry.solutions.map((solution, index) => (
                <Card key={solution.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-sm text-muted">{solution.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Discuss Your {activeIndustry.name} Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
