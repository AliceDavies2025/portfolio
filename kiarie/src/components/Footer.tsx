import { FC } from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="py-12 sm:py-16 md:py-20 px-5 md:px-8 lg:px-24 border-t">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Logo size="sm" className="mb-4 mx-auto md:mx-0" />
            <p className="text-gray-500 text-sm">Crafting beautiful, functional spaces that inspire and enhance life's everyday moments.</p>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:irene.kiarie4@gmail.com" 
                className="block text-gray-600 hover:text-amber-600 transition-colors"
              >
                irene.kiarie4@gmail.com
              </a>
              <a 
                href="tel:+4917672973037" 
                className="block text-gray-600 hover:text-amber-600 transition-colors"
              >
                +49 176 7297 3037
              </a>
              <p className="text-gray-600">Berlin, Germany</p>
            </div>
          </div>

          {/* Quick Links and Social */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <Link href="/projects" className="text-gray-600 hover:text-amber-600 transition-colors">Projects</Link>
              <Link href="/about" className="text-gray-600 hover:text-amber-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-amber-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Irene Kiarie. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">Instagram</a>
            <a href="#" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">Pinterest</a>
            <a href="#" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
