import { FeatureSection } from '@/components/feature-section'
import { HeroSection } from '@/components/hero-section'
import { SupportSection } from '@/components/support-section'
import { CustomerStoreSection } from '@/customer-store-section'

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />

        <SupportSection />

        <CustomerStoreSection />
      </article>
    </>
  )
}
