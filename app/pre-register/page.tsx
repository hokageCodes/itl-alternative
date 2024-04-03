"use client";

import React, { useState, FormEvent, useEffect } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import Loader from '@/components/loader/Loader';

const firestore = getFirestore(app);

const SuccessComponent: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="p-8 mt-24 md:border-l md:w-2/3">
    <div className="flex items-center justify-center text-green-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 19a9 9 0 100-18 9 9 0 000 18zM9 5a1 1 0 112 0v5a1 1 0 11-2 0V5zm1 11a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="text-center text-lg font-semibold text-green-500">Thank you for submitting!</div>
    <div className="text-center mt-4">
      <button onClick={onBack} className="text-blue-500 underline">Go back home</button>
    </div>
  </div>
);

const PreRegister: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [otherLocation, setOtherLocation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating data loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalLocation = location === 'Other' ? otherLocation : location;

    // Reset previous error and success messages
    setError('');
    setSuccess(false);

    try {
      // Validate input fields
      if (!name || !email || !phoneNumber || !location) {
        setError('Please fill out all required fields.');
        return;
      }

      // Set loading state to true while processing
      setLoading(true);

      // Add data to Firestore
      await addDoc(collection(firestore, 'preRegistrations'), {
        name,
        email,
        phoneNumber,
        location: finalLocation,
        timestamp: new Date(),
      });

      // Reset form fields after submission
      setName('');
      setEmail('');
      setPhoneNumber('');
      setLocation('');
      setOtherLocation('');

      // Set success message
      setSuccess(true);
    } catch (error) {
      console.error('Error submitting pre-registration:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      // Set loading state back to false after processing
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    // Define what to do when user clicks on "Go back home" button
    // You can navigate back to home or perform any other action
    window.location.href = "/";
  };

  return (
    <>
      {
        isLoading ? (
          <Loader />
        ):
        (
          <div className="min-h-screen flex justify-center items-center bg-bg px-4 pt-16 md:pt-0">
            <div className="flex flex-col md:flex-row bg-bg rounded overflow-hidden max-w-4xl w-full">
              {/* Text Content */}
              <div className="p-8 space-y-4 md:w-1/2">
                <h2 className="text-2xl font-bold pt-24 text-textPrimary">Why Pre-Register?</h2>
                <p className="text-md">
                  Pre-registering for the ITL Conference gives you early access to tickets, exclusive updates, and more. Don&#39;t miss out on this opportunity to connect with industry leaders and peers.
                </p>
              </div>

              {/* Form or Success Component */}
              {success ? (
                <SuccessComponent onBack={handleGoBack} />
              ) : (
                <div className="p-8 md:border-l md:w-2/3">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <div className="text-red-500">{error}</div>}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                      <select
                        id="location"
                        name="location"
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      >
                        <option value="">Select Province or Territory</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Northwest Territories">Northwest Territories</option>
                        <option value="Nunavut">Nunavut</option>
                        <option value="Yukon">Yukon</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {location === 'Other' && (
                      <div>
                        <label htmlFor="otherLocation" className="block text-sm font-medium text-gray-700">Please Specify</label>
                        <input
                          id="otherLocation"
                          name="otherLocation"
                          type="text"
                          required={location === 'Other'}
                          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                          value={otherLocation}
                          onChange={(e) => setOtherLocation(e.target.value)}
                        />
                      </div>
                    )}
                    <button
                      type="submit"
                      className={`w-full py-2 px-4 bg-ctaBg text-white hover:bg-ctaHover rounded focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={loading}
                    >
                      {loading ? 'Loading...' : 'Submit'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )
      }
    </>
  );
};

export default PreRegister;
