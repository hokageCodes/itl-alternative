"use client";

import React, { useState, FormEvent } from 'react';
import Head from 'next/head';

const PreRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [otherLocation, setOtherLocation] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalLocation = location === "Other" ? otherLocation : location;
    console.log({ name, email, phoneNumber, finalLocation });
    // Here you'd typically send this data to a backend server for processing.
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-bg px-4 pt-16 md:pt-0">
        <div className="flex flex-col md:flex-row bg-bg rounded overflow-hidden max-w-4xl w-full">
          {/* Text Content */}
          <div className="p-8 space-y-4 md:w-1/2">
            <h2 className="text-2xl font-bold pt-24 text-textPrimary">Why Pre-Register?</h2>
            <p className='text-md'>Pre-registering for the ITL Conference gives you early access to tickets, exclusive updates, and more. Don&#39;t miss out on this opportunity to connect with industry leaders and peers.</p>
          </div>

          {/* Form */}
          <div className="p-8 md:border-l md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input id="name" name="name" type="text" required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input id="email" name="email" type="email" required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input id="phoneNumber" name="phoneNumber" type="tel" required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <select id="location" name="location" required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  value={location} onChange={(e) => setLocation(e.target.value)}>
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
              {location === "Other" && (
                <div>
                  <label htmlFor="otherLocation" className="block text-sm font-medium text-gray-700">Please Specify</label>
                  <input id="otherLocation" name="otherLocation" type="text" required={location === "Other"}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    value={otherLocation} onChange={(e) => setOtherLocation(e.target.value)} />
                </div>
              )}
              <button type="submit" className="w-full py-2 px-4 bg-ctaBg text-white hover:bg-ctaHover rounded focus:outline-none">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreRegister;
