"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Eastern Compunet transformed our railway monitoring systems. Their real-time tracking solution has significantly improved our operational efficiency and safety standards.",
    author: "Rajesh Kumar",
    role: "Chief Technology Officer",
    company: "Indian Railways Division",
  },
  {
    quote:
      "The industrial automation systems implemented by Eastern Compunet have reduced our downtime by 40%. Their team's expertise and support have been exceptional.",
    author: "Priya Sharma",
    role: "Plant Manager",
    company: "TATA Steel Limited",
  },
  {
    quote:
      "We've been working with Eastern Compunet for over 5 years. Their network infrastructure solutions are robust, and their support team is always responsive.",
    author: "Amit Patel",
    role: "IT Director",
    company: "XLRI Jamshedpur",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Say"
          description="Hear from the enterprises that trust us with their critical technology infrastructure."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="pt-4"
              >
                <blockquote className="text-xl md:text-2xl text-dark leading-relaxed mb-8">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-dark">
                      {testimonials[current].author}
                    </div>
                    <div className="text-sm text-muted">
                      {testimonials[current].role},{" "}
                      {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current
                        ? "bg-primary w-8"
                        : "bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-primary transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-primary transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
