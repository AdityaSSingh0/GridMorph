
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight 
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-energify-blue flex items-center justify-center">
                <div className="h-5 w-5 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-medium tracking-tight">GridMorph</span>
            </Link>
            
            <p className="text-gray-600 text-sm max-w-xs">
              Revolutionizing energy distribution through blockchain, IoT, and AI for a sustainable future.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="h-9 w-9 rounded-full bg-gray-100 hover:bg-energify-blue text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-gray-100 hover:bg-energify-blue text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-gray-100 hover:bg-energify-blue text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-gray-100 hover:bg-energify-blue text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Dashboard', 'Trading', 'Organization', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-energify-blue transition-colors flex items-center gap-1 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              {['P2P Energy Trading', 'Smart Contracts', 'IoT Monitoring', 'AI Predictions', 'Dynamic Pricing', 'Blockchain Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-energify-blue transition-colors flex items-center gap-1 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-energify-blue mt-0.5" />
                <span className="text-gray-600">GLBITM, Greatar Noida</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-energify-blue" />
                <span className="text-gray-600">+91-6328797XX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-energify-blue" />
                <span className="text-gray-600">info@GridMorph.network</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} GridMorph. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-energify-blue text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-energify-blue text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-energify-blue text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
