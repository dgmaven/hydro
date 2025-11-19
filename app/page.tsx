import Link from 'next/link';
import Hero from '@/components/home/Hero';
import Statistics from '@/components/home/Statistics';
import ValuePropositions from '@/components/home/ValuePropositions';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import LatestNews from '@/components/home/LatestNews';
import MemberTestimonials from '@/components/home/MemberTestimonials';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <ValuePropositions />
      <UpcomingEvents />
      <LatestNews />
      <MemberTestimonials />
      <CTASection />
    </>
  );
}
