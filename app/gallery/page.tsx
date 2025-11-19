'use client';

import { useState } from 'react';

export default function GalleryPage() {
  const [selectedEvent, setSelectedEvent] = useState('all');

  const galleryItems = [
    {
      event: 'Malaysia Hydrogen Summit 2024',
      date: 'November 2024',
      category: 'conference',
      images: [
        { id: 1, title: 'Opening Ceremony', description: 'Minister delivering keynote address', emoji: '🎤' },
        { id: 2, title: 'Panel Discussion', description: 'Industry leaders discussing policy', emoji: '💼' },
        { id: 3, title: 'Exhibition Hall', description: 'Over 50 exhibitors showcasing technology', emoji: '🏢' },
        { id: 4, title: 'Networking Session', description: 'Participants exchanging ideas', emoji: '🤝' },
      ]
    },
    {
      event: 'Hydrogen Safety Workshop',
      date: 'October 2024',
      category: 'workshop',
      images: [
        { id: 5, title: 'Technical Training', description: 'Hands-on safety equipment demonstration', emoji: '🔧' },
        { id: 6, title: 'Group Exercise', description: 'Teams working on case studies', emoji: '👥' },
        { id: 7, title: 'Certificate Ceremony', description: 'Participants receiving certifications', emoji: '🎓' },
      ]
    },
    {
      event: 'Green Hydrogen Facility Visit',
      date: 'September 2024',
      category: 'sitevisit',
      images: [
        { id: 8, title: 'Production Facility', description: 'Tour of hydrogen production plant', emoji: '🏭' },
        { id: 9, title: 'Technology Showcase', description: 'Electrolyzer technology demonstration', emoji: '⚡' },
        { id: 10, title: 'Group Photo', description: 'All participants at the facility', emoji: '📸' },
      ]
    },
    {
      event: 'ASEAN Hydrogen Forum',
      date: 'August 2024',
      category: 'conference',
      images: [
        { id: 11, title: 'International Delegates', description: 'Representatives from 10 ASEAN nations', emoji: '🌏' },
        { id: 12, title: 'MOU Signing', description: 'Regional cooperation agreement', emoji: '🖊️' },
        { id: 13, title: 'Gala Dinner', description: 'Evening networking event', emoji: '🍽️' },
      ]
    },
    {
      event: 'Hydrogen Innovation Showcase',
      date: 'July 2024',
      category: 'exhibition',
      images: [
        { id: 14, title: 'Startup Pitches', description: 'Young innovators presenting solutions', emoji: '💡' },
        { id: 15, title: 'Demo Booths', description: 'Interactive technology demonstrations', emoji: '🎪' },
        { id: 16, title: 'Award Ceremony', description: 'Best innovation awards', emoji: '🏆' },
      ]
    },
    {
      event: 'Policy Roundtable Discussion',
      date: 'June 2024',
      category: 'roundtable',
      images: [
        { id: 17, title: 'Roundtable Session', description: 'Government and industry dialogue', emoji: '💬' },
        { id: 18, title: 'Working Groups', description: 'Collaborative policy development', emoji: '📋' },
      ]
    },
  ];

  const filteredGallery = selectedEvent === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedEvent);

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Event Gallery
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Relive the highlights from our industry events, workshops, and networking sessions
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-1">50+</div>
              <div className="text-gray-600">Events Hosted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-1">5,000+</div>
              <div className="text-gray-600">Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-1">1,500+</div>
              <div className="text-gray-600">Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-1">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <button
              onClick={() => setSelectedEvent('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedEvent === 'all'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedEvent('conference')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedEvent === 'conference'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Conferences
            </button>
            <button
              onClick={() => setSelectedEvent('workshop')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedEvent === 'workshop'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Workshops
            </button>
            <button
              onClick={() => setSelectedEvent('sitevisit')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedEvent === 'sitevisit'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Site Visits
            </button>
            <button
              onClick={() => setSelectedEvent('exhibition')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedEvent === 'exhibition'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Exhibitions
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="space-y-16">
            {filteredGallery.map((eventGallery, eventIndex) => (
              <div key={eventIndex}>
                {/* Event Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-heading font-bold text-primary-500 mb-2">
                    {eventGallery.event}
                  </h2>
                  <p className="text-gray-600 text-lg">{eventGallery.date}</p>
                </div>

                {/* Image Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventGallery.images.map((image) => (
                    <div
                      key={image.id}
                      className="card overflow-hidden group cursor-pointer hover:scale-105 transition-transform"
                    >
                      {/* Image Placeholder with Emoji */}
                      <div className="aspect-video bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-8xl">
                        {image.emoji}
                      </div>
                      {/* Image Info */}
                      <div className="p-4">
                        <h3 className="font-heading font-semibold text-lg text-primary-500 mb-1 group-hover:text-accent-600 transition-colors">
                          {image.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Event Highlights Videos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Malaysia Hydrogen Summit 2024 Highlights',
                duration: '5:30',
                views: '12K',
                emoji: '🎥',
              },
              {
                title: 'Green Hydrogen Facility Tour',
                duration: '8:45',
                views: '8.5K',
                emoji: '🎬',
              },
              {
                title: 'Innovation Showcase - Best Moments',
                duration: '6:15',
                views: '15K',
                emoji: '📹',
              },
              {
                title: 'ASEAN Forum International Collaboration',
                duration: '10:20',
                views: '9.2K',
                emoji: '🎞️',
              },
            ].map((video, index) => (
              <div key={index} className="card overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-9xl relative">
                  {video.emoji}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-10 h-10 text-primary-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-primary-500 mb-2 group-hover:text-accent-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>⏱️ {video.duration}</span>
                    <span>👁️ {video.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Follow Us on Social Media</h2>
            <p className="text-gray-600 text-lg">
              Stay connected and see real-time updates from our events
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { platform: 'LinkedIn', handle: '@HydrogenMalaysia', followers: '5.2K', icon: '💼' },
              { platform: 'Twitter', handle: '@HydrogenMY', followers: '3.8K', icon: '🐦' },
              { platform: 'Facebook', handle: 'HydrogenMalaysia', followers: '7.1K', icon: '📘' },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="card p-6 text-center hover:shadow-xl transition-shadow group"
              >
                <div className="text-5xl mb-3">{social.icon}</div>
                <h3 className="font-heading font-semibold text-lg text-primary-500 mb-1 group-hover:text-accent-600 transition-colors">
                  {social.platform}
                </h3>
                <p className="text-gray-600 mb-2">{social.handle}</p>
                <p className="text-sm text-gray-500">{social.followers} followers</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-500 mb-4">
              Be Part of Our Next Event
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Join us at upcoming conferences, workshops, and networking sessions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/events" className="btn-primary">
                View Upcoming Events
              </a>
              <a href="/join" className="btn-outline">
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
