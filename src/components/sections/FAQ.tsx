'use client'

import { FAQ_ITEMS } from '@/lib/constants'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui'
import { motion } from 'framer-motion'

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white dark:bg-primary-900" aria-labelledby="faq-heading">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="faq-heading" className="heading-2 text-primary-900 dark:text-white">Perguntas frequentes</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-secondary-50 dark:bg-primary-800 rounded-2xl shadow-sm border border-secondary-200 dark:border-primary-700 p-6 md:p-8">
            <Accordion type="single" defaultValue={['faq-0']}>
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger value={`faq-${index}`}>{item.question}</AccordionTrigger>
                  <AccordionContent value={`faq-${index}`}>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
