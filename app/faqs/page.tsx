"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Faq {
  question: string;
  answer: string;
}


const faqs: Faq[] = [
  { question: "What is ITL Conference?", answer: "The ITL Conference is the largest gathering of Internationally Trained Lawyers in Canada, aimed at networking, learning, and advancing the profession." },
  { question: "How can I register?", answer: "Registration is available online through our website. Navigate to the registration section and fill in the required details." },
  { question: "How can I register?", answer: "Registration is available online through our website. Navigate to the registration section and fill in the required details." },
  { question: "How can I register?", answer: "Registration is available online through our website. Navigate to the registration section and fill in the required details." },
  { question: "How can I register?", answer: "Registration is available online through our website. Navigate to the registration section and fill in the required details." },
  { question: "How can I register?", answer: "Registration is available online through our website. Navigate to the registration section and fill in the required details." },
  { question: "How can I register?", answer: "Registration is available online through our website. Navigate to the registration section and fill in the required details." },
  { question: "How can I register?", answer: "Registration is available online through our website. Navigate to the registration section and fill in the required details." },
  // Add more FAQs as needed
];

const DISPLAY_LIMIT = 5; // Number of FAQs to display initially and to add on each "See More" click

const FaqItem = ({ faq }: { faq: Faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout onClick={toggleOpen} className="cursor-pointer border-b border-gray-200 py-8">
      <motion.header layout className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-textPrimary">{faq.question}</h3>
        <motion.svg animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.4 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </motion.svg>
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-2">
            <p>{faq.answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection = () => {
  const [displayCount, setDisplayCount] = useState(DISPLAY_LIMIT);
  const [searchTerm, setSearchTerm] = useState('');

  const showMoreFaqs = () => {
    setDisplayCount((prevCount) => prevCount + DISPLAY_LIMIT);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="bg-ctaBg py-4 mt-20 text-bg text-center font-bold">
        <h1 className="text-4xl">Frequently Asked Questions</h1>
        {/* Search Input */}
        <div className="mx-auto max-w-md mt-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      {/* FAQ Section */}
      <div className="p-6 bg-bg">
        <InfiniteScroll
          dataLength={displayCount}
          next={showMoreFaqs}
          hasMore={displayCount < filteredFaqs.length}
          loader={<h4>Loading...</h4>}
          scrollThreshold={0.9}
        >
          {filteredFaqs.slice(0, displayCount).map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default FaqSection;


