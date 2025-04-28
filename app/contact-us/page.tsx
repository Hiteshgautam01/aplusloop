"use client"

import React from 'react';
import { Banner } from '@/components/ContactUs/Banner';
import { ContactForm } from '@/components/ContactUs/ContactForm';

const ContactUsPage: React.FC = () => {
  const scrollToContact = () => {
    // Add a larger offset to account for the navbar
    const element = document.getElementById('contact-form');
    if (element) {
      const yOffset = -64; // 64px offset (16*4 as requested)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 mt-16">
      {/* Banner Section */}
      <Banner onContactClick={scrollToContact} />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Company Information - Improved Design */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Get in Touch</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We're here to help with any questions or concerns. Reach out through any of these channels and we'll respond as soon as possible.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:border-blue-200 transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 text-xl mb-3">Phone</h3>
                <a href="tel:+18881234567" className="text-blue-600 font-medium text-lg hover:text-blue-800 transition-colors">
                  +1 (888) 123-4567
                </a>
                <p className="text-slate-500 mt-2 text-sm">Monday-Friday, 9AM-5PM</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:border-blue-200 transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 text-xl mb-3">Email</h3>
                <a href="mailto:support@company.com" className="text-blue-600 font-medium text-lg hover:text-blue-800 transition-colors">
                  support@company.com
                </a>
                <p className="text-slate-500 mt-2 text-sm">Responses within 24 hours</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:border-blue-200 transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 text-xl mb-3">Office</h3>
                <address className="text-slate-700 not-italic text-lg">
                  123 Business Ave, Suite 100<br/>New York, NY 10001
                </address>
                <p className="text-slate-500 mt-2 text-sm">By appointment only</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div id="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;