'use client';

import { useState } from 'react';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    membershipType: 'corporate',
    organizationName: '',
    industry: '',
    contactName: '',
    position: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Join HydrogenMalaysia
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Become part of Malaysia's premier hydrogen industry association and unlock
              exclusive benefits that will accelerate your clean energy journey
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Membership Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '🎯',
                title: 'Industry Authority',
                description: 'Association with Malaysia\'s recognized hydrogen authority enhances your credibility',
              },
              {
                icon: '🤝',
                title: 'Exclusive Networking',
                description: 'Connect with 150+ member organizations, industry leaders, and decision-makers',
              },
              {
                icon: '📊',
                title: 'Research Access',
                description: 'Full access to 200+ research papers, technical reports, and market analysis',
              },
              {
                icon: '🎤',
                title: 'Event Participation',
                description: 'Discounted or complimentary access to 50+ annual conferences and workshops',
              },
              {
                icon: '📋',
                title: 'Policy Influence',
                description: 'Voice in policy development and direct engagement with government officials',
              },
              {
                icon: '🌟',
                title: 'Brand Visibility',
                description: 'Featured on our website, publications, and promotional materials',
              },
            ].map((benefit, index) => (
              <div key={index} className="card p-6">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-primary-500 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Membership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Corporate Membership */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="gradient-accent p-6 text-white text-center">
                <h3 className="text-2xl font-heading font-bold mb-2">Corporate</h3>
                <p className="text-blue-100">For established organizations</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary-500 mb-2">RM 15,000</div>
                  <div className="text-gray-600">per year</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Full research library access',
                    'Unlimited event registrations',
                    'Policy consultation rights',
                    'Premium brand visibility',
                    'Board nomination eligibility',
                    'Dedicated account manager',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SME Membership */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border-2 border-accent-500">
              <div className="gradient-primary p-6 text-white text-center relative">
                <div className="absolute top-0 right-0 bg-accent-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  POPULAR
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">SME</h3>
                <p className="text-blue-100">For growing businesses</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary-500 mb-2">RM 5,000</div>
                  <div className="text-gray-600">per year</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Full research library access',
                    '5 event registrations/year',
                    'Policy input opportunities',
                    'Standard brand visibility',
                    'Member directory listing',
                    'Email support',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Startup/Academic Membership */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-success-500 to-success-600 p-6 text-white text-center">
                <h3 className="text-2xl font-heading font-bold mb-2">Startup/Academic</h3>
                <p className="text-green-100">For innovators & educators</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary-500 mb-2">RM 2,000</div>
                  <div className="text-gray-600">per year</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Full research library access',
                    '3 event registrations/year',
                    'Networking opportunities',
                    'Member directory listing',
                    'Innovation showcase platform',
                    'Email support',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="section-title text-center mb-4">Membership Application</h2>
          <p className="text-center text-gray-600 mb-12">
            Complete the form below and our team will contact you within 2 business days
          </p>

          <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100">
            {/* Membership Type */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Membership Type <span className="text-red-500">*</span>
              </label>
              <select
                name="membershipType"
                value={formData.membershipType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              >
                <option value="corporate">Corporate (RM 15,000/year)</option>
                <option value="sme">SME (RM 5,000/year)</option>
                <option value="startup">Startup/Academic (RM 2,000/year)</option>
              </select>
            </div>

            {/* Organization Name */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Organization Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Your company or institution name"
              />
            </div>

            {/* Industry */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Industry Sector <span className="text-red-500">*</span>
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              >
                <option value="">Select your industry</option>
                <option value="energy">Energy & Utilities</option>
                <option value="transportation">Transportation</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="technology">Technology & Engineering</option>
                <option value="academic">Academic & Research</option>
                <option value="government">Government & Policy</option>
                <option value="consulting">Consulting & Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Contact Name */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Contact Person Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            {/* Position */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Position/Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Your job title"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="+60 12-345 6789"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                placeholder="Tell us about your organization's interest in hydrogen technology..."
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full btn-primary text-lg py-4">
              Submit Application
            </button>

            <p className="text-sm text-gray-600 text-center mt-6">
              By submitting this form, you agree to be contacted by HydrogenMalaysia regarding your membership application.
            </p>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Membership has opened doors we never thought possible. The connections alone are worth 10x the investment.",
                author: "Michael Tan",
                company: "H2 Innovations",
              },
              {
                quote: "Access to cutting-edge research and policy insights has been invaluable for our strategic planning.",
                author: "Dr. Sarah Ahmad",
                company: "Petronas Green Tech",
              },
              {
                quote: "The credibility boost from being associated with HydrogenMalaysia has significantly helped our fundraising efforts.",
                author: "James Wong",
                company: "TNB Energy Solutions",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="font-semibold text-primary-500">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
