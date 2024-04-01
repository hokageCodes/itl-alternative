// MultiStepForm.tsx

"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const formSteps = [
  { title: "Nominator's Information", fields: ["Nominator's Name", "Nominator's Telephone Number", "Nominator's Email"] },
  { title: "Nominee's Information", fields: ["Nominee's Name", "Nominee's Email"] },
  { title: 'Nomination Details', fields: ['Nomination Category', 'Explanation', 'Web Links and Supporting Documentation'] },
];

// Sample categories for the dropdown
const nominationCategories = [
  'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5',
  'Category 6', 'Category 7', 'Category 8', 'Category 9', 'Category 10'
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="bg-bg min-h-screen py-24">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
        {/* Banner or Heading */}
        <h1 className="text-2xl font-black text-center mb-8 text-textPrimary">The Impact Awards Nomination Form</h1>

        {/* Stepper */}
        <ol className="flex items-center w-full text-sm font-medium text-center text-text-Primary dark:text-gray-400 sm:text-base mb-8">
          {formSteps.map((step, index) => (
            <li key={index} className={`flex md:w-full items-center ${currentStep === index ? 'text-text-Primary dark:text-textPrimary font-bold' : ''}`}>
              <span className="flex items-center">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM5.364 8.636a1 1 0 0 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                </svg>
                {step.title}
              </span>
            </li>
          ))}
        </ol>

        {/* Step Title */}
        <h2 className="text-xl font-bold mb-4">{formSteps[currentStep].title}</h2>

        {/* Form Fields */}
        <div>
          {formSteps[currentStep].fields.map((field, index) => (
            <motion.div key={index}>
              {field === 'Nomination Category' ? (
                <div className="mb-4">
                  <label className="block font-medium mb-1">{field}</label>
                  <select className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {nominationCategories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="mb-4">
                  <label className="block font-medium mb-1 text-textPrimary">{field}</label>
                  {field === 'Explanation' ? (
                    <textarea className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-pruple-500 h-32 resize-none"></textarea>
                  ) : (
                    <input className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500" type="text" placeholder={field} />
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 0 && (
            <button onClick={previousStep} className="bg-ctaBg hover:bg-gray-400 text-bg font-bold py-2 px-4 rounded">
              Back
            </button>
          )}
          {currentStep < formSteps.length - 1 && (
            <button onClick={nextStep} className="bg-ctaBg hover:bg-ctaHover text-white font-bold py-2 px-4 rounded">
              Next
            </button>
          )}
          {currentStep === formSteps.length - 1 && (
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          )}
        </div>
        {/* Support Contact */}
      </div>
      <div className="mt-8 text-center text-gray-900 font-bold">
        Need assistance? Contact support at support@example.com.
      </div>
    </div>
  );
};

export default MultiStepForm;
