"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function Card({ children, className, hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-white rounded-2xl p-6 md:p-8 border border-slate-100",
        hover && "transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
