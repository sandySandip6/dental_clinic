import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ServicesPreview from '@/components/ServicePreview'
import EmergencyBanner from '@/components/EmergencyBanner'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ServicesPreview />
        <EmergencyBanner />
      </main>
      <Footer />
      <FloatingButton />
    </>
  )
}









