"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/sections/CTABanner";
import { Target, Eye, Heart, Users } from "lucide-react";

const timeline = [
  {
    year: "2005",
    title: "Company Founded",
    description:
      "Eastern Compunet was established in Jamshedpur with a vision to provide cutting-edge IT solutions.",
  },
  {
    year: "2010",
    title: "Railway Partnership",
    description:
      "Began our journey with Indian Railways, delivering real-time monitoring solutions.",
  },
  {
    year: "2015",
    title: "Industrial Expansion",
    description:
      "Expanded into industrial automation, partnering with major steel manufacturers.",
  },
  {
    year: "2020",
    title: "IoT & ML Integration",
    description:
      "Integrated machine learning and IoT capabilities into our solution portfolio.",
  },
  {
    year: "2024",
    title: "Enterprise Leader",
    description:
      "Recognized as a leading enterprise technology partner with 50+ major clients.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every solution we deliver, ensuring the highest quality standards.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical practices in all interactions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in working closely with our clients to understand and meet their unique needs.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "We continuously explore new technologies to provide cutting-edge solutions.",
  },
];

const leadership = [
  {
    name: "Founder & Director",
    role: "Managing Director",
    bio: "With over 25 years of experience in IT and industrial automation, leading the company's strategic vision.",
  },
  {
    name: "Technical Director",
    role: "Chief Technology Officer",
    bio: "Spearheading innovation and technical excellence across all projects and solutions.",
  },
  {
    name: "Operations Head",
    role: "Chief Operating Officer",
    bio: "Ensuring seamless delivery and operational excellence for all client engagements.",
  },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="heading-1 text-dark mb-6">
              Building Technology Solutions Since 2005
            </h1>
            <p className="text-xl text-muted">
              Eastern Compunet is a leading provider of IT solutions and
              industrial automation systems, serving enterprise clients across
              India with innovative technology solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-3 text-dark mb-3">Our Mission</h3>
              <p className="text-muted">
                To empower enterprises with innovative technology solutions that
                drive operational efficiency, enhance safety, and enable digital
                transformation across industries.
              </p>
            </Card>
            <Card delay={0.1}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-3 text-dark mb-3">Our Vision</h3>
              <p className="text-muted">
                To be the most trusted technology partner for enterprises,
                recognized for our innovation, reliability, and commitment to
                excellence in every solution we deliver.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50">
        <Container>
          <SectionHeader
            label="Our Journey"
            title="Two Decades of Innovation"
            description="From our humble beginnings to becoming a trusted enterprise partner."
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-white" />

                  {/* Content */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <span className="text-sm font-bold text-primary">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-dark mt-1 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding">
        <Container>
          <SectionHeader
            label="Our Values"
            title="What Drives Us"
            description="The core principles that guide everything we do."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} delay={index * 0.1} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-dark mb-2">{value.title}</h4>
                <p className="text-sm text-muted">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-slate-50">
        <Container>
          <SectionHeader
            label="Leadership"
            title="Meet Our Team"
            description="Experienced professionals driving innovation and excellence."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h4 className="font-semibold text-dark">{leader.name}</h4>
                <p className="text-sm text-primary mb-2">{leader.role}</p>
                <p className="text-sm text-muted">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
