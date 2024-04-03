"use client"

import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  [key: string]: string;
}

interface ErrorData {
  [key: string]: string;
}

const formSteps = [
  { title: "Nominator's Information", fields: ["Nominator's Name", "Nominator's Telephone Number", "Nominator's Email"] },
  { title: "Nominee's Information", fields: ["Nominee's Name", "Nominee's Email"] },
  { title: 'Nomination Details', fields: ['Nomination Category', 'Reason(s) for nominating', 'Web Links and Supporting Documentation'] },
];

const nominationCategories = [
  'Diversity Champion', 'Community Impact Award', 'Leadership in Legal Education Award', 'Trailblazer in Technology Award', 'Lifetime Achievement Award',
  'Rising Star Award', 'Mentorship Excellence Award', 'Innovative Recruitment Award', 'Entrepreneurial Excellence Award', 'The Nobel Award'
];

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<ErrorData>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const validateFields = (): boolean => {
    const currentFields = formSteps[currentStep].fields;
    const currentFormData = { ...formData };
    const currentErrors: ErrorData = {};

    let isValid = true;

    currentFields.forEach(field => {
      if (!currentFormData[field]) {
        currentErrors[field] = `${field} is required`;
        isValid = false;
      }
    });

    setErrors(currentErrors);
    return isValid;
  };

  const nextStep = (): void => {
    if (validateFields()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const previousStep = (): void => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (): void => {
    if (validateFields()) {
      setLoading(true);

      // Simulate form submission
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, field: string): void => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-bg min-h-screen py-24">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-black text-center mb-8 text-textPrimary">The Impact Awards Nomination Form</h1>

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

        <h2 className="text-xl font-bold mb-4">{formSteps[currentStep].title}</h2>

        <div>
          {formSteps[currentStep].fields.map((field, index) => (
            <motion.div key={index}>
              {field === 'Nomination Category' ? (
                <div className="mb-4">
                  <label className="block font-medium mb-1">{field}</label>
                  <select
                    className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData[field] || ''}
                    onChange={(e) => handleInputChange(e, field)}
                  >
                    <option value="">Select</option>
                    {nominationCategories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="mb-4">
                  <label className="block font-medium mb-1 text-textPrimary">{field}</label>
                  {field === 'Explanation' ? (
                    <textarea
                      className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none"
                      value={formData[field] || ''}
                      onChange={(e) => handleInputChange(e, field)}
                    ></textarea>
                  ) : (
                    <input
                      className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                      type="text"
                      placeholder={field}
                      value={formData[field] || ''}
                      onChange={(e) => handleInputChange(e, field)}
                    />
                  )}
                </div>
              )}
              {errors[field] && <div className="text-red-500">{errors[field]}</div>}
            </motion.div>
          ))}
        </div>

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
            <button onClick={handleSubmit} className="bg-ctaBg hover:bg-ctaHover text-white font-bold py-2 px-4 rounded">
              {loading ? 'Loading...' : 'Submit'}
            </button>
          )}
        </div>

        <div className="mt-8 text-center text-gray-900 font-bold">
          Need assistance? Contact support at info@itlconference.ca.
        </div>

        {success && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Success!</h2>
              <p className="text-gray-700 mb-4">Your nomination has been submitted successfully.</p>
              <button onClick={() => setSuccess(false)} className="bg-ctaBg hover:bg-ctaHover text-white font-bold py-2 px-4 rounded"><a href="/">Go Back Home</a></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
