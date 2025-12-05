import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

 const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white mb-6">
              
              <span>THAMPURAN</span>
            </a>
            <p className="text-neutral-400 max-w-md leading-relaxed">
              Thampuran Productions is a full-service creative agency dedicated to visual excellence. We combine technology with artistry to deliver stunning results for brands worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-neutral-400 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-neutral-400 hover:text-amber-500 transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-amber-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-neutral-900 rounded-full text-white hover:bg-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-900 rounded-full text-white hover:bg-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-900 rounded-full text-white hover:bg-amber-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-900 rounded-full text-white hover:bg-amber-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Thampuran Productions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;