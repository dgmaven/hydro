import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="gradient-primary rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>

          <div className="relative z-10">
            {/* Main CTA */}
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Shape Malaysia's Hydrogen Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join HydrogenMalaysia today and unlock exclusive access to research, networking,
              and opportunities that will accelerate your clean energy journey.
            </p>

            {/* Membership Benefits Quick List */}
            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Instant Credibility</h4>
                <p className="text-sm text-blue-100">Association with Malaysia's hydrogen authority</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-semibold mb-2">Strategic Connections</h4>
                <p className="text-sm text-blue-100">Network with 150+ industry leaders</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold mb-2">Exclusive Insights</h4>
                <p className="text-sm text-blue-100">Access 200+ research papers & reports</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/join" className="btn-accent text-lg px-8 py-4">
                Become a Member Today
              </Link>
              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 border border-white/30 text-lg"
              >
                Learn More About Us
              </Link>
            </div>

            {/* Trust Indicator */}
            <p className="mt-8 text-blue-100 text-sm">
              ✓ No setup fees  •  ✓ Flexible membership tiers  •  ✓ Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
