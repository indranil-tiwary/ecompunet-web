"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const clients = [
  { name: "TATA Steel", abbr: "TATA" },
  { name: "Indian Railways", abbr: "IR" },
  { name: "XLRI", abbr: "XLRI" },
  { name: "SAIL", abbr: "SAIL" },
  { name: "MECON", abbr: "MECON" },
  { name: "Jindal Steel", abbr: "JSW" },
];

export function TrustedBy() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-muted uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="w-24 h-16 bg-white rounded-lg border border-slate-200 flex items-center justify-center transition-all group-hover:shadow-md group-hover:border-primary/20">
                <span className="text-xl font-bold text-slate-400 group-hover:text-primary transition-colors">
                  {client.abbr}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
