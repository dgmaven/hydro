import Link from 'next/link';

export default function UpcomingEvents() {
  const events = [
    {
      title: 'Malaysia Hydrogen Summit 2025',
      date: 'March 15-17, 2025',
      location: 'Kuala Lumpur Convention Centre',
      type: 'Conference',
      attendees: '500+ Expected',
      description: 'Join industry leaders, policymakers, and innovators for Malaysia\'s premier hydrogen event.',
      status: 'Registration Open',
    },
    {
      title: 'Green Hydrogen Technology Workshop',
      date: 'February 8, 2025',
      location: 'Online',
      type: 'Workshop',
      attendees: '200+ Expected',
      description: 'Hands-on technical workshop covering the latest in green hydrogen production and storage.',
      status: 'Early Bird',
    },
    {
      title: 'Hydrogen Policy Roundtable',
      date: 'January 20, 2025',
      location: 'Putrajaya',
      type: 'Roundtable',
      attendees: 'Members Only',
      description: 'Exclusive session with government officials to discuss regulatory frameworks and incentives.',
      status: 'Limited Seats',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">
              Connect, learn, and collaborate at our industry-leading events
            </p>
          </div>
          <Link href="/events" className="btn-outline mt-4 md:mt-0">
            View All Events
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="card">
              {/* Event Header */}
              <div className="gradient-primary p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <span className="bg-success-500 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.status}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-2">
                  {event.title}
                </h3>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span>{event.attendees}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                <Link
                  href="/events"
                  className="block text-center btn-primary"
                >
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
