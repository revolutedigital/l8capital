import dynamic from 'next/dynamic'
import { Hero, CredibilityBar } from '@/components/sections'
import { JsonLd } from '@/components/seo/JsonLd'

// Below-fold sections: dynamic import to reduce initial JS bundle
// This defers ~50 KiB of JS until the user scrolls, improving FCP/LCP
const Problems = dynamic(() => import('@/components/sections/Problems').then(m => ({ default: m.Problems })))
const ValueProposition = dynamic(() => import('@/components/sections/ValueProposition').then(m => ({ default: m.ValueProposition })))
const Services = dynamic(() => import('@/components/sections/Services').then(m => ({ default: m.Services })))
const Differentiator = dynamic(() => import('@/components/sections/Differentiator').then(m => ({ default: m.Differentiator })))
const Validation = dynamic(() => import('@/components/sections/Validation').then(m => ({ default: m.Validation })))
const AboutUs = dynamic(() => import('@/components/sections/AboutUs').then(m => ({ default: m.AboutUs })))
const Partnership = dynamic(() => import('@/components/sections/Partnership').then(m => ({ default: m.Partnership })))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })))
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks').then(m => ({ default: m.HowItWorks })))
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(m => ({ default: m.FAQ })))
const ContactForm = dynamic(() => import('@/components/sections/ContactForm').then(m => ({ default: m.ContactForm })))

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <CredibilityBar />
      <Problems />
      <ValueProposition />
      <Services />
      <Differentiator />
      <Validation />
      <AboutUs />
      <Partnership />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <ContactForm />
    </>
  )
}
