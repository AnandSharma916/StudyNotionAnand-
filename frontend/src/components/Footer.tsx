import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="w-11/12 max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 border-b border-border pb-12">
          
          {/* Logo & Socials */}
          <div className="lg:col-span-2">
            <Link href="/">
              <span className="text-text-main text-3xl font-extrabold tracking-tight cursor-pointer">
                StudyNotion
              </span>
            </Link>
            <p className="text-text-muted mt-4 max-w-xs leading-relaxed">
              Empowering learners worldwide to master in-demand tech skills through interactive and expert-led courses.
            </p>
            <div className="flex items-center gap-4 mt-6 text-text-muted">
              <a href="#" className="hover:text-primary transition-colors text-xl"><FaFacebook /></a>
              <a href="#" className="hover:text-primary transition-colors text-xl"><FaTwitter /></a>
              <a href="#" className="hover:text-primary transition-colors text-xl"><FaInstagram /></a>
              <a href="#" className="hover:text-primary transition-colors text-xl"><FaLinkedin /></a>
              <a href="#" className="hover:text-primary transition-colors text-xl"><FaYoutube /></a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-text-main font-bold mb-4">Resources</h3>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              <li><Link href="/courses" className="hover:text-primary transition-colors">Course Catalog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cheatsheets</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Docs</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-text-main font-bold mb-4">Community</h3>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              <li><Link href="#" className="hover:text-primary transition-colors">Forums</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Discord Server</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Become a Teacher</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-text-main font-bold mb-4">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-text-muted">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-text-muted">
          <p>© {new Date().getFullYear()} StudyNotion. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-text-main transition-colors">Privacy Policy</Link>
            <span className="text-[#2C333F]">|</span>
            <Link href="#" className="hover:text-text-main transition-colors">Cookie Policy</Link>
            <span className="text-[#2C333F]">|</span>
            <Link href="#" className="hover:text-text-main transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
