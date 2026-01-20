import dynamic from 'next/dynamic'
import { Hero, CredibilityBar } from '@/components/sections'
import { JsonLd } from '@/components/seo/JsonLd'

// Dynamic imports for below-the-fold components to reduce initial JS bundle
const Problems = dynamic(() => import('@/components/sections/Problems').then(mod => ({ default: mod.Problems })))
const ValueProposition = dynamic(() => import('@/components/sections/ValueProposition').then(mod => ({ default: mod.ValueProposition })))
const Services = dynamic(() => import('@/components/sections/Services').then(mod => ({ default: mod.Services })))
const Differentiator = dynamic(() => import('@/components/sections/Differentiator').then(mod => ({ default: mod.Differentiator })))
const Validation = dynamic(() => import('@/components/sections/Validation').then(mod => ({ default: mod.Validation })))
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks').then(mod => ({ default: mod.HowItWorks })))
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => ({ default: mod.FAQ })))
const ContactForm = dynamic(() => import('@/components/sections/ContactForm').then(mod => ({ default: mod.ContactForm })))

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
      <HowItWorks />
      <FAQ />
      <ContactForm />
    </>
  )
}
