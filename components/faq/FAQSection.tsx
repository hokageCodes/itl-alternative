"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  // Include a few FAQs here for the landing page preview
  { question: "What is the ITL Conference?", answer: "The ITL Conference is the largest gathering of Internationally Trained Lawyers in Canada, offering networking opportunities, workshops, and keynotes from industry leaders." },
  { question: "What is the ITL Conference?", answer: "The ITL Conference is the largest gathering of Internationally Trained Lawyers in Canada, offering networking opportunities, workshops, and keynotes from industry leaders." },
  { question: "What is the ITL Conference?", answer: "The ITL Conference is the largest gathering of Internationally Trained Lawyers in Canada, offering networking opportunities, workshops, and keynotes from industry leaders." },
];

const FaqItem = ({ question, answer }: Faq) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout onClick={toggleOpen} className="cursor-pointer border-b-2 py-4">
      <motion.div layout initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }} className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">{question}</h4>
        <motion.span className="text-lg">
          {isOpen ? '−' : '+'}
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-bg"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function LandingFaqSection() {
  return (
    <div className="bg-ctaBg text-bg container mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold pt-12">Learn More About The ITL Conference</h2>
          <p className='max-w-[500px]'>Welcome to the FAQ section. Here, you will find answers to common questions about the ITL Conference, registration process, event details, and more. Explore the information to get the most out of your conference experience.</p>
        </div>
        <div className="lg:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} />
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link legacyBehavior href="/faqs" passHref>
          <a className="inline-block border text-white hover:bg-ctaHover rounded font-bold py-2 px-4 rounded transition-colors duration-300 mt-[30px]">
            See All Questions
          </a>
        </Link>
      </div>
    </div>
  );
}
