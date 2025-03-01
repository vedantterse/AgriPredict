import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface FooterProps {
  companyName?: string;
  companyLogo?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  navigationLinks?: {
    title: string;
    href: string;
  }[];
}

const Footer = ({
  companyName = "AgriPredict AI",
  companyLogo = "/logo.svg",
  contactEmail = "contact@agripredictai.com",
  contactPhone = "+1 (555) 123-4567",
  address = "123 Innovation Drive, AgTech Valley, CA 94103",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  navigationLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ],
}: FooterProps) => {
  return (
    <footer className="w-full bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={companyLogo}
                alt={`${companyName} logo`}
                className="h-8 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=agripredict";
                }}
              />
              <h3 className="text-xl font-bold">{companyName}</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionizing agricultural price prediction with cutting-edge AI
              technology.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {navigationLinks.slice(4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-gray-400 mt-0.5" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-gray-400 mt-0.5" />
                <a
                  href={`tel:${contactPhone}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {contactPhone}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">{address}</span>
              </div>
            </div>
            <Button
              variant="outline"
              className="mt-4 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Contact Support
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
