"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full">
          {label}
        </span>
      )}
      <h2 className="heading-2 text-dark mb-4">{title}</h2>
      {description && (
        <p className={cn(
          "text-lg text-muted max-w-3xl",
          centered && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
