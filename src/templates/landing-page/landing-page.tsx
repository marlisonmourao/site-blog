import {
  CallToAction,
  CustomerStoreSection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from './sections'

export function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20 lg:gap-20">
      <HeroSection />
      <FeatureSection />

      <SupportSection />

      <CustomerStoreSection />

      <CallToAction />
    </article>
  )
}
