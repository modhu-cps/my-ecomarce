'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Get in</span>
            <span className="text-[#F8FAFC]"> Touch</span>
          </h1>
          <p className="text-[#94A3B8] text-lg">
            We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {[
              {
                icon: Mail,
                title: 'Email',
                value: 'hello@mysticrise.co',
                link: 'mailto:hello@mysticrise.co'
              },
              {
                icon: Phone,
                title: 'Phone',
                value: '+1 (555) 123-4567',
                link: 'tel:+15551234567'
              },
              {
                icon: MapPin,
                title: 'Location',
                value: 'San Francisco, CA',
                link: '#'
              }
            ].map((item) => (
              <div key={item.title} className="flex items-start space-x-4">
                <div className="glass p-3 rounded-lg">
                  <item.icon size={20} className="text-[#00E5FF]" />
                </div>
                <div>
                  <h3 className="text-[#F8FAFC] font-medium mb-1">{item.title}</h3>
                  <a
                    href={item.link}
                    className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[#94A3B8] mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#00E5FF] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#94A3B8] mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#00E5FF] transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#00E5FF] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#00E5FF] transition-colors resize-none"
                  required
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
                  }
