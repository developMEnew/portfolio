import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AnimatedContainer } from '../components/AnimatedContainer';
import { AnimatedCard } from '../components/AnimatedCard';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/animations';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title="Contact | Hasitha Sandakelum"
        description="Get in touch with me for collaboration, opportunities, or just to say hello. I'm always open to discussing new projects and ideas."
        keywords="contact hasitha sandakelum, hire developer, web development contact"
      />
      <main className="pt-16 min-h-screen">
        <AnimatedContainer className="py-12">
          <motion.h1 
            className="text-4xl font-bold mb-8"
            variants={slideIn}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Get in Touch
            </span>
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <AnimatedCard delay={0.2}>
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={slideIn} transition={{ delay: 0.3 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                    required
                  />
                </motion.div>

                <motion.div variants={slideIn} transition={{ delay: 0.4 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                    required
                  />
                </motion.div>

                <motion.div variants={slideIn} transition={{ delay: 0.5 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                    required
                  />
                </motion.div>

                <motion.div variants={slideIn} transition={{ delay: 0.6 }}>
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </AnimatedCard>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <AnimatedCard delay={0.4}>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <h2 className="text-xl font-semibold text-white">Email</h2>
                </div>
                <a 
                  href="mailto:dev.sandakelum@gmail.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  dev.sandakelum@gmail.com
                </a>
              </AnimatedCard>

              {/* Social Links */}
              <AnimatedCard delay={0.6}>
                <h2 className="text-xl font-semibold text-white mb-4">Connect With Me</h2>
                <div className="flex gap-4">
                  <motion.a 
                    href="#" 
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-600/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-gray-300 hover:text-blue-400" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-600/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-gray-300 hover:text-blue-400" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-600/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 text-gray-300 hover:text-blue-400" />
                  </motion.a>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </AnimatedContainer>
      </main>
    </>
  );
}