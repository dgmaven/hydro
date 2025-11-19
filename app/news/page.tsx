'use client';

import { useState } from 'react';

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: 'Malaysia Announces RM2 Billion Hydrogen Investment Plan',
      category: 'policy',
      date: 'December 10, 2024',
      author: 'Ministry of Energy & Natural Resources',
      readTime: '5 min read',
      excerpt: 'The Malaysian government has unveiled a comprehensive RM2 billion investment package aimed at accelerating hydrogen infrastructure development across the nation over the next 5 years.',
      content: 'Full article content here...',
      image: '🏛️',
      featured: true,
    },
    {
      id: 2,
      title: 'New Research: Cost-Effective Hydrogen Storage Solutions',
      category: 'research',
      date: 'December 5, 2024',
      author: 'Universiti Malaya Research Team',
      readTime: '8 min read',
      excerpt: 'Groundbreaking study from Malaysian universities reveals innovative approaches to reduce hydrogen storage costs by up to 40% through advanced materials science.',
      content: 'Full article content here...',
      image: '🔬',
      featured: true,
    },
    {
      id: 3,
      title: 'HydrogenMalaysia Welcomes 15 New Industry Members',
      category: 'membership',
      date: 'November 28, 2024',
      author: 'HydrogenMalaysia Secretariat',
      readTime: '3 min read',
      excerpt: 'Leading corporations from energy, transportation, and technology sectors join our growing community of hydrogen pioneers, bringing total membership to over 150 organizations.',
      content: 'Full article content here...',
      image: '🤝',
      featured: false,
    },
    {
      id: 4,
      title: 'Green Hydrogen Production Facility Opens in Johor',
      category: 'industry',
      date: 'November 15, 2024',
      author: 'Industry Reporter',
      readTime: '6 min read',
      excerpt: 'Malaysia\'s first commercial-scale green hydrogen production facility begins operations, marking a significant milestone in the nation\'s clean energy transition.',
      content: 'Full article content here...',
      image: '🏭',
      featured: false,
    },
    {
      id: 5,
      title: 'Hydrogen-Powered Public Transport Pilot Program Launched',
      category: 'industry',
      date: 'November 1, 2024',
      author: 'Transport Authority',
      readTime: '4 min read',
      excerpt: 'Kuala Lumpur introduces 10 hydrogen fuel cell buses in a pioneering pilot program to test viability of hydrogen in public transportation.',
      content: 'Full article content here...',
      image: '🚌',
      featured: false,
    },
    {
      id: 6,
      title: 'Policy Brief: ASEAN Hydrogen Cooperation Framework',
      category: 'policy',
      date: 'October 20, 2024',
      author: 'HydrogenMalaysia Policy Team',
      readTime: '10 min read',
      excerpt: 'Analysis of the newly proposed ASEAN Hydrogen Cooperation Framework and its implications for Malaysian industry stakeholders.',
      content: 'Full article content here...',
      image: '📋',
      featured: false,
    },
  ];

  const researchPapers = [
    {
      title: 'Techno-Economic Analysis of Green Hydrogen Production in Malaysia',
      authors: 'Dr. Ahmad Razali, Prof. Siti Hajar, Dr. Lee Wei Ming',
      institution: 'Universiti Teknologi Malaysia',
      date: 'December 2024',
      downloads: 1250,
      type: 'Technical Report',
      pages: 45,
    },
    {
      title: 'Hydrogen Storage Solutions for Tropical Climates',
      authors: 'Dr. Sarah Chen, Dr. Mohammed Aziz',
      institution: 'Universiti Malaya',
      date: 'November 2024',
      downloads: 980,
      type: 'Research Paper',
      pages: 28,
    },
    {
      title: 'Safety Protocols for Hydrogen Infrastructure Development',
      authors: 'Ir. Rajesh Kumar, Ir. Fatimah Zahra',
      institution: 'Malaysian Standards Authority',
      date: 'October 2024',
      downloads: 2100,
      type: 'Guidelines',
      pages: 62,
    },
    {
      title: 'Market Opportunities: Hydrogen in Southeast Asia',
      authors: 'HydrogenMalaysia Research Division',
      institution: 'HydrogenMalaysia',
      date: 'September 2024',
      downloads: 1560,
      type: 'Market Analysis',
      pages: 38,
    },
  ];

  const filteredNews = activeTab === 'all'
    ? newsArticles
    : newsArticles.filter(article => article.category === activeTab);

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              News & Research
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Stay informed with the latest developments, insights, and research
              from Malaysia's hydrogen industry
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title mb-8">Featured Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {newsArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="card overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="aspect-video bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-8xl">
                  {article.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary-500 mb-3 group-hover:text-accent-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <div>{article.author}</div>
                      <div>{article.date}</div>
                    </div>
                    <button className="text-accent-600 font-medium hover:text-accent-700 flex items-center">
                      Read more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All News with Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title mb-8">Latest Updates</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All News
            </button>
            <button
              onClick={() => setActiveTab('policy')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'policy'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Policy & Regulation
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'research'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Research & Innovation
            </button>
            <button
              onClick={() => setActiveTab('industry')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'industry'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Industry News
            </button>
            <button
              onClick={() => setActiveTab('membership')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'membership'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Member Updates
            </button>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="h-2 gradient-accent rounded-t-xl"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {article.category}
                    </span>
                    <span className="text-4xl">{article.image}</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-500 mb-2 group-hover:text-accent-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="section-title mb-2">Research Library</h2>
              <p className="text-gray-600">
                Access peer-reviewed papers, technical reports, and industry analysis
              </p>
            </div>
            <div className="mt-4 md:mt-0 bg-accent-50 text-accent-700 px-4 py-2 rounded-lg font-medium">
              📚 200+ Publications Available
            </div>
          </div>

          <div className="space-y-4">
            {researchPapers.map((paper, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-16 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                        📄
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-primary-500 mb-2">
                          {paper.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{paper.authors}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                            </svg>
                            {paper.institution}
                          </span>
                          <span>📅 {paper.date}</span>
                          <span>📊 {paper.pages} pages</span>
                          <span>⬇️ {paper.downloads.toLocaleString()} downloads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium text-center">
                      {paper.type}
                    </span>
                    <button className="btn-outline text-sm py-2">
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Member Access CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center">
            <svg className="w-16 h-16 text-accent-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-500 mb-3">
              Members-Only Research Access
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Join HydrogenMalaysia to unlock full access to our entire research library,
              including exclusive technical reports and market analysis
            </p>
            <a href="/join" className="btn-accent">
              Become a Member
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest hydrogen industry news and research
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-accent-500 focus:outline-none"
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-sm text-blue-100 mt-4">
            ✓ Monthly updates  •  ✓ No spam  •  ✓ Unsubscribe anytime
          </p>
        </div>
      </section>
    </>
  );
}
