import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
  solutions: [
    { name: "Railway Systems", href: "/solutions#railway" },
    { name: "Manufacturing", href: "/solutions#manufacturing" },
    { name: "Enterprise IT", href: "/solutions#enterprise" },
    { name: "IoT Solutions", href: "/solutions#iot" },
  ],
  services: [
    { name: "Network Infrastructure", href: "/services#network" },
    { name: "Industrial Automation", href: "/services#automation" },
    { name: "Safety Systems", href: "/services#safety" },
    { name: "Software Development", href: "/services#software" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Facebook", href: "#", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="font-bold text-xl text-white">
                  Eastern<span className="text-primary-light">Compunet</span>
                </span>
              </Link>
              <p className="text-slate-400 mb-6 max-w-sm">
                Delivering innovative IT solutions and industrial automation
                for enterprise clients across India since 2005.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:info@easterncompunet.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary-light" />
                  info@easterncompunet.com
                </a>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary-light" />
                  +91 123 456 7890
                </a>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" />
                  <span>Jamshedpur, Jharkhand, India</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Eastern Compunet Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
