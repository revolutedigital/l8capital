import {
  Hero,
  CredibilityBar,
  Problems,
  ValueProposition,
  Services,
  Differentiator,
  Validation,
  AboutUs,
  Partnership,
  Testimonials,
  HowItWorks,
  FAQ,
  ContactForm
} from '@/components/sections'
import { JsonLd } from '@/components/seo/JsonLd'

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
