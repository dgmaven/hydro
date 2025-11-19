'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EventsPage() {
  const [filter, setFilter] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Malaysia Hydrogen Summit 2025',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Kuala Lumpur Convention Centre',
      type: 'Conference',
      attendees: '500+ Expected',
      price: 'RM 1,500 (RM 1,200 for members)',
      description: 'The premier annual gathering of Malaysia\'s hydrogen industry. Join 500+ leaders, policymakers, and innovators for 3 days of keynotes, panels, exhibitions, and networking.',
      status: 'Registration Open',
      highlights: [
        '20+ International Speakers',
        '50+ Exhibitors',
        'Policy Roundtable with Government',
        'Innovation Showcase',
        'Gala Dinner & Awards'
      ]
    },
    {
      id: 2,
      title: 'Green Hydrogen Technology Workshop',
      date: 'February 8, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Online (Zoom)',
      type: 'Workshop',
      attendees: '200+ Expected',
      price: 'RM 300 (Free for members)',
      description: 'Hands-on technical workshop covering the latest developments in green hydrogen production, storage, and distribution technologies.',
      status: 'Early Bird',
      highlights: [
        'Expert-led Technical Sessions',
        'Live Q&A',
        'Certificate of Participation',
        'Downloadable Resources'
      ]
    },
    {
      id: 3,
      title: 'Hydrogen Policy Roundtable',
      date: 'January 20, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Putrajaya International Convention Centre',
      type: 'Roundtable',
      attendees: 'Members Only',
      price: 'Free for members',
      description: 'Exclusive closed-door session with government officials and policymakers to discuss regulatory frameworks, incentives, and Malaysia\'s hydrogen roadmap.',
      status: 'Limited Seats',
      highlights: [
        'Direct Government Engagement',
        'Policy Input Opportunity',
        'Networking Lunch',
        'Working Group Formation'
      ]
    },
    {
      id: 4,
      title: 'Hydrogen Infrastructure Site Visit',
      date: 'April 12, 2025',
      time: '9:00 AM - 3:00 PM',
      location: 'Johor Industrial Park',
      type: 'Site Visit',
      attendees: '50 Participants',
      price: 'RM 500 (RM 300 for members)',
      description: 'Exclusive tour of Malaysia\'s first commercial green hydrogen production facility. See hydrogen technology in action.',
      status: 'Registration Open',
      highlights: [
        'Facility Tour',
        'Technical Presentations',
        'Safety Training',
        'Transportation Provided'
      ]
    }
  ];

  const pastEvents = [
    {
      title: 'Hydrogen Safety & Standards Conference',
      date: 'November 2024',
      attendees: '300+ Participants',
      gallery: '150+ Photos',
    },
    {
      title: 'Asia-Pacific Hydrogen Forum',
      date: 'September 2024',
      attendees: '450+ Participants',
      gallery: '200+ Photos',
    },
    {
      title: 'Hydrogen Innovation Showcase',
      date: 'July 2024',
      attendees: '250+ Participants',
      gallery: '100+ Photos',
    }
  ];

  const filteredEvents = filter === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.type.toLowerCase() === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Events & Activities
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Connect with industry leaders, gain insights, and stay ahead of the curve
              at our world-class hydrogen events
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="section-title mb-4 md:mb-0">Upcoming Events</h2>

            {/* Filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setFilter('conference')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'conference'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Conferences
              </button>
              <button
                onClick={() => setFilter('workshop')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'workshop'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Workshops
              </button>
              <button
                onClick={() => setFilter('roundtable')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'roundtable'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Roundtables
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="card overflow-hidden">
                <div className="md:flex">
                  {/* Event Date Badge */}
                  <div className="md:w-48 gradient-accent text-white p-8 flex flex-col justify-center items-center text-center">
                    <div className="text-3xl font-bold mb-2">
                      {event.date.split(' ')[1].replace(',', '')}
                    </div>
                    <div className="text-lg">
                      {event.date.split(' ')[0]} {event.date.split(' ')[2]}
                    </div>
                    <div className="mt-4 bg-white/20 px-3 py-1 rounded-full text-sm">
                      {event.type}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-8">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h3 className="text-2xl font-heading font-bold text-primary-500 mb-2">
                        {event.title}
                      </h3>
                      <span className="bg-success-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {event.status}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Event Info Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="text-gray-700">{event.time}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        </svg>
                        <span className="text-gray-700">{event.location}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                        <span className="text-gray-700">{event.attendees}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="text-gray-700">{event.price}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Event Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Register Button */}
                    <button className="btn-primary w-full md:w-auto">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title mb-4">Past Events</h2>
          <p className="text-gray-600 mb-12">
            View highlights and photos from our previous successful events
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="card p-6">
                <div className="aspect-video bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg mb-4 flex items-center justify-center text-white">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-500 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-3">{event.date}</p>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>👥 {event.attendees}</span>
                  <span>📸 {event.gallery}</span>
                </div>
                <Link href="/gallery" className="text-accent-600 font-medium hover:text-accent-700 flex items-center">
                  View Gallery
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-500 mb-4">
              Members Get Exclusive Benefits
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Free or heavily discounted access to all events, priority registration, and networking opportunities
            </p>
            <Link href="/join" className="btn-accent">
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
