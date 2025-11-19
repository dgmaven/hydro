export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Malaysia's Hydrogen Authority
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Since our establishment, HydrogenMalaysia has been at the forefront of driving
              hydrogen innovation, policy development, and industry collaboration across Malaysia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card p-8">
              <div className="text-accent-500 mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary-500 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To accelerate Malaysia's transition to a hydrogen-powered economy by fostering
                collaboration, driving innovation, and shaping policies that enable sustainable
                energy solutions for future generations.
              </p>
            </div>
            <div className="card p-8">
              <div className="text-success-500 mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary-500 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To establish Malaysia as a leading hydrogen hub in Southeast Asia, recognized
                globally for innovation, sustainability, and excellence in clean energy technology
                and implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Policy Advocacy',
                description: 'We work closely with government agencies to develop forward-thinking policies and regulations that support hydrogen industry growth.',
                icon: '📋',
              },
              {
                title: 'Research & Development',
                description: 'Publishing cutting-edge research and facilitating collaborations between academia and industry to advance hydrogen technology.',
                icon: '🔬',
              },
              {
                title: 'Industry Events',
                description: 'Organizing conferences, workshops, and networking sessions that bring together stakeholders from across the hydrogen value chain.',
                icon: '🎤',
              },
              {
                title: 'Member Support',
                description: 'Providing resources, connections, and platforms for our members to grow their hydrogen initiatives and businesses.',
                icon: '🤝',
              },
              {
                title: 'Public Education',
                description: 'Raising awareness about hydrogen technology benefits and applications through campaigns and educational programs.',
                icon: '📚',
              },
              {
                title: 'International Collaboration',
                description: 'Building partnerships with global hydrogen organizations to bring international expertise and opportunities to Malaysia.',
                icon: '🌏',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-heading font-semibold text-primary-500 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Member Organizations' },
              { number: '50+', label: 'Annual Events' },
              { number: '200+', label: 'Research Publications' },
              { number: '15+', label: 'Policy Contributions' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">Leadership Team</h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Our diverse leadership brings decades of experience in energy, policy, and technology
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dato\' Ahmad Ibrahim', role: 'President', background: 'Energy Policy Expert' },
              { name: 'Dr. Siti Nurhaliza', role: 'Vice President', background: 'Chemical Engineering' },
              { name: 'Ir. Lee Chong Wei', role: 'Technical Director', background: 'Infrastructure' },
              { name: 'Prof. Nurul Ain', role: 'Research Director', background: 'Renewable Energy' },
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {leader.name.split(' ')[0][0]}{leader.name.split(' ')[leader.name.split(' ').length-1][0]}
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-500 mb-1">
                  {leader.name}
                </h3>
                <p className="text-accent-600 font-medium mb-2">{leader.role}</p>
                <p className="text-sm text-gray-600">{leader.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Join Us in Shaping the Future</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Become part of Malaysia's hydrogen revolution and help build a sustainable energy future
          </p>
          <a href="/join" className="btn-accent text-lg">
            Become a Member
          </a>
        </div>
      </section>
    </>
  );
}
