export default function MemberTestimonials() {
  const testimonials = [
    {
      quote: "HydrogenMalaysia's network and research capabilities have been instrumental in accelerating our clean energy initiatives. The connections we've made here are invaluable.",
      author: "Dr. Sarah Ahmad",
      position: "Head of Sustainability",
      company: "Petronas Green Technology",
      logo: "PT",
    },
    {
      quote: "As a startup, membership gave us credibility and access to industry leaders. We've secured partnerships and funding opportunities we couldn't have accessed otherwise.",
      author: "Michael Tan",
      position: "CEO & Founder",
      company: "H2 Innovations Sdn Bhd",
      logo: "H2",
    },
    {
      quote: "The policy insights and government connections through HydrogenMalaysia have been crucial for our infrastructure planning. They truly are the industry authority.",
      author: "James Wong",
      position: "Director of Strategy",
      company: "TNB Energy Solutions",
      logo: "TNB",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 to-accent-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What Our Members Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join over 150 organizations that trust HydrogenMalaysia as their industry partner
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Quote Icon */}
              <svg className="w-10 h-10 text-accent-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              {/* Quote */}
              <p className="text-lg text-blue-50 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg mr-4">
                  {testimonial.logo}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-blue-100">{testimonial.position}</div>
                  <div className="text-sm text-blue-200">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-blue-100 mb-6">Trusted by leading organizations including:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Petronas', 'TNB', 'UKM', 'MGTC', 'Shell', 'Linde'].map((company, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 font-semibold"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
