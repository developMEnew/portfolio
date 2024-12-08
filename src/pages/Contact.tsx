import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
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
        {/* Rest of the Contact page content remains the same */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Get in Touch
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Send a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
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
                </div>

                <div>
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
                </div>

                <div>
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
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <h2 className="text-xl font-semibold text-white">Email</h2>
                </div>
                <a href="mailto:contact@hasitha.dev" className="text-gray-300 hover:text-blue-400 transition-colors">
                  dev.sandakelum@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                <h2 className="text-xl font-semibold text-white mb-4">Connect With Me</h2>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-600/20 transition-colors">
                    <Github className="w-6 h-6 text-gray-300 hover:text-blue-400" />
                  </a>
                  <a href="#" className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-600/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-gray-300 hover:text-blue-400" />
                  </a>
                  <a href="#" className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-600/20 transition-colors">
                    <Twitter className="w-6 h-6 text-gray-300 hover:text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}