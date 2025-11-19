export default function MembersPage() {
  const memberCategories = [
    {
      category: 'Energy & Utilities',
      members: [
        { name: 'Petronas', type: 'Corporate', logo: 'PT' },
        { name: 'Tenaga Nasional Berhad (TNB)', type: 'Corporate', logo: 'TNB' },
        { name: 'Sarawak Energy', type: 'Corporate', logo: 'SE' },
        { name: 'Malaysian Green Technology Corp', type: 'Corporate', logo: 'MGTC' },
      ]
    },
    {
      category: 'Technology & Engineering',
      members: [
        { name: 'Shell Malaysia', type: 'Corporate', logo: 'SH' },
        { name: 'Linde Malaysia', type: 'Corporate', logo: 'LM' },
        { name: 'Siemens Malaysia', type: 'Corporate', logo: 'SM' },
        { name: 'H2 Innovations Sdn Bhd', type: 'SME', logo: 'H2I' },
      ]
    },
    {
      category: 'Transportation',
      members: [
        { name: 'SPAD Malaysia', type: 'Corporate', logo: 'SPAD' },
        { name: 'Prasarana Malaysia', type: 'Corporate', logo: 'PM' },
        { name: 'Proton Holdings', type: 'Corporate', logo: 'PH' },
      ]
    },
    {
      category: 'Academic & Research',
      members: [
        { name: 'Universiti Malaya', type: 'Academic', logo: 'UM' },
        { name: 'Universiti Teknologi Malaysia', type: 'Academic', logo: 'UTM' },
        { name: 'Universiti Kebangsaan Malaysia', type: 'Academic', logo: 'UKM' },
        { name: 'Malaysian Institute of Hydrogen Technology', type: 'Research', logo: 'MIHT' },
      ]
    },
    {
      category: 'Startups & Innovation',
      members: [
        { name: 'GreenH2 Solutions', type: 'Startup', logo: 'GH2' },
        { name: 'HydroTech Innovators', type: 'Startup', logo: 'HTI' },
        { name: 'EcoFuel Systems', type: 'Startup', logo: 'EFS' },
        { name: 'Clean Energy Ventures', type: 'Startup', logo: 'CEV' },
      ]
    },
  ];

  const memberBenefits = [
    'Full access to research library and technical reports',
    'Discounted or complimentary event registration',
    'Member directory listing and networking opportunities',
    'Policy advocacy and government engagement',
    'Brand visibility on website and publications',
    'Exclusive member-only roundtables and briefings',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our Members
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Proudly representing 150+ organizations driving Malaysia's hydrogen revolution
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent-500 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Member Organizations</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent-500 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Startup Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent-500 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Academic Institutions</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent-500 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Fortune 500 Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Directory */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">Member Directory</h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Our diverse membership spans the entire hydrogen value chain, from production to end-use applications
          </p>

          <div className="space-y-12">
            {memberCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-heading font-bold text-primary-500 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-accent-500 mr-4 rounded"></span>
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow text-center"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                        {member.logo}
                      </div>
                      <h4 className="font-heading font-semibold text-lg text-primary-500 mb-2">
                        {member.name}
                      </h4>
                      <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                        {member.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* More Members Note */}
          <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-md">
            <p className="text-gray-600 text-lg">
              ...and 100+ more organizations across various sectors
            </p>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "HydrogenMalaysia has been instrumental in connecting us with key stakeholders and advancing our hydrogen initiatives.",
                author: "Dr. Sarah Ahmad",
                position: "Head of Sustainability",
                company: "Petronas Green Technology",
                logo: "PT",
              },
              {
                quote: "The networking opportunities and research access have exceeded our expectations. Best investment we've made.",
                author: "Michael Tan",
                position: "CEO & Founder",
                company: "H2 Innovations",
                logo: "H2I",
              },
              {
                quote: "Being part of HydrogenMalaysia gives us credibility and access to government policymakers that we couldn't get elsewhere.",
                author: "Prof. Dr. Ahmad Razali",
                position: "Director, Energy Research",
                company: "Universiti Malaya",
                logo: "UM",
              },
            ].map((testimonial, index) => (
              <div key={index} className="card p-8">
                <svg className="w-10 h-10 text-accent-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.logo}
                  </div>
                  <div>
                    <div className="font-semibold text-primary-500">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-accent-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
              Membership Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <svg className="w-6 h-6 text-success-400 mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-lg text-blue-50">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Membership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                tier: 'Corporate',
                price: 'RM 15,000/year',
                description: 'For established organizations',
                color: 'from-accent-500 to-accent-600',
              },
              {
                tier: 'SME',
                price: 'RM 5,000/year',
                description: 'For growing businesses',
                color: 'from-primary-500 to-primary-600',
                popular: true,
              },
              {
                tier: 'Startup/Academic',
                price: 'RM 2,000/year',
                description: 'For innovators & educators',
                color: 'from-success-500 to-success-600',
              },
            ].map((tier, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className={`bg-gradient-to-br ${tier.color} text-white p-6 text-center relative`}>
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-accent-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                      POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-heading font-bold mb-2">{tier.tier}</h3>
                  <p className="text-blue-100 mb-4">{tier.description}</p>
                  <div className="text-3xl font-bold">{tier.price}</div>
                </div>
                <div className="p-6 text-center">
                  <a href="/join" className="btn-primary w-full">
                    Learn More
                  </a>
                </div>
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
              Join Malaysia's Leading Hydrogen Community
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Connect with industry leaders, access exclusive research, and shape the future of clean energy in Malaysia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/join" className="btn-primary text-lg">
                Become a Member
              </a>
              <a href="/about" className="btn-outline text-lg">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
