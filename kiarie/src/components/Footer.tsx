import { FC } from 'react';
import Logo from './Logo';

const Footer: FC = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 px-5 md:px-8 lg:px-24 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <Logo size="sm" className="mb-3 mx-auto md:mx-0" />
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex gap-5 sm:gap-8">
          <a href="#" className="text-sm sm:text-base hover:text-gray-600">Instagram</a>
          <a href="#" className="text-sm sm:text-base hover:text-gray-600">Pinterest</a>
          <a href="#" className="text-sm sm:text-base hover:text-gray-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
