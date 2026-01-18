"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <svg
          className="absolute bottom-0 left-0 w-full h-auto opacity-30"
          viewBox="0 0 1440 320"
          fill="none"
        >
          <path
            fill="url(#gradient)"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full">
              Trusted by Industry Leaders
            </span>
            <h1 className="heading-1 text-dark mb-6">
              Powering{" "}
              <span className="text-gradient">Enterprise Innovation</span>{" "}
              Through Technology
            </h1>
            <p className="text-lg text-muted mb-8 max-w-xl">
              We deliver cutting-edge IT solutions and industrial automation
              systems that transform how railways, manufacturing, and enterprises
              operate. From real-time monitoring to intelligent safety systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">
                  <Play className="mr-2 w-5 h-5" />
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-dark">18+</div>
                  <div className="text-sm text-muted">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-dark">200+</div>
                  <div className="text-sm text-muted">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-dark">50+</div>
                  <div className="text-sm text-muted">Enterprise Clients</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-10" />
              <div className="absolute inset-8 bg-gradient-to-br from-primary to-accent rounded-full opacity-20" />
              <div className="absolute inset-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-30" />

              {/* Center Content */}
              <div className="absolute inset-24 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient">IT</div>
                  <div className="text-sm text-muted mt-2">Solutions</div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="text-sm font-medium text-dark">Railways</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-20 left-0 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="text-sm font-medium text-dark">Automation</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -right-4 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="text-sm font-medium text-dark">IoT</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
