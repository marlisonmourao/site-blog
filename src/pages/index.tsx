import { CallToAction } from '@/components/sections-landing-page/call-to-action'
import { CustomerStoreSection } from '@/components/sections-landing-page/customer-store-section'
import { FeatureSection } from '@/components/sections-landing-page/feature-section'
import { HeroSection } from '@/components/sections-landing-page/hero-section'
import { SupportSection } from '@/components/sections-landing-page/support-section'

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />

        <SupportSection />

        <CustomerStoreSection />

        <CallToAction />
      </article>
    </>
  )
}
