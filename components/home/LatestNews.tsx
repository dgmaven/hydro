import Link from 'next/link';

export default function LatestNews() {
  const news = [
    {
      title: 'Malaysia Announces RM2 Billion Hydrogen Investment Plan',
      category: 'Policy',
      date: 'December 10, 2024',
      excerpt: 'The Malaysian government unveiled a comprehensive investment package aimed at accelerating hydrogen infrastructure development across the nation.',
      readTime: '5 min read',
    },
    {
      title: 'New Research: Cost-Effective Hydrogen Storage Solutions',
      category: 'Research',
      date: 'December 5, 2024',
      excerpt: 'Groundbreaking study from Malaysian universities reveals innovative approaches to reduce hydrogen storage costs by up to 40%.',
      readTime: '8 min read',
    },
    {
      title: 'HydrogenMalaysia Welcomes 15 New Industry Members',
      category: 'Membership',
      date: 'November 28, 2024',
      excerpt: 'Leading corporations from energy, transportation, and technology sectors join our growing community of hydrogen pioneers.',
      readTime: '3 min read',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="section-title">Latest News & Research</h2>
            <p className="section-subtitle">
              Stay updated with the latest developments in Malaysia's hydrogen sector
            </p>
          </div>
          <Link href="/news" className="btn-outline mt-4 md:mt-0">
            View All News
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article key={index} className="card group cursor-pointer">
              {/* Category Badge */}
              <div className="h-2 gradient-accent"></div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>

                <h3 className="text-xl font-heading font-semibold text-primary-500 mb-3 group-hover:text-accent-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <Link
                    href="/news"
                    className="text-accent-600 font-medium hover:text-accent-700 flex items-center group"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Research Papers Callout */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-500 mb-3">
                Access Our Research Library
              </h3>
              <p className="text-gray-600 text-lg">
                200+ peer-reviewed papers, technical reports, and industry analysis available to members
              </p>
            </div>
            <Link href="/news" className="btn-primary whitespace-nowrap">
              Browse Research
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
