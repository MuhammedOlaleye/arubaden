import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/home/hero-section'
import FeaturedPackagesSection from '@/components/home/featured-packages-section'
import BrandIntroSection from '@/components/home/brand-intro-section'
import DestinationsSection from '@/components/home/destinations-section'
import WhyArubadanSection from '@/components/home/why-arubaden-section'
import PlanTripSection from '@/components/home/plan-trip-section'
import TestimonialsSection from '@/components/home/testimonials-section'
import JournalSection from '@/components/home/journal-section'
import NewsletterSection from '@/components/home/newsletter-section'
import CtaBanner from '@/components/cta-banner'
import StatsStrip from '@/components/home/stats-strip'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedPackagesSection />
        <BrandIntroSection />
        <StatsStrip />
        <DestinationsSection />
        <WhyArubadanSection />
        <PlanTripSection />
        <TestimonialsSection />
        <JournalSection />
        <NewsletterSection />
        <CtaBanner
          eyebrow="Ready to start?"
          title="Your exceptional journey begins with a single conversation"
          description="Tell us where you want to go. We will take care of everything else."
          primaryLabel="Book Your Next Escape"
          secondaryLabel="Explore Destinations"
        />
      </main>
      <Footer />
    </>
  )
}
