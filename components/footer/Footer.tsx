"use client"

import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="text-[#7F5283] bg-[#FEFBF6] pt-12 px-6 pb-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start lg:flex-nowrap lg:justify-between">
        {/* Logo and Conference Info */}
        <div className="flex flex-1 flex-col items-center lg:items-start mb-8 lg:mb-0">
          <Image src="/logo.png" width={100} height={100} alt="Logo" />
          <span className="font-bold text-2xl mt-2">The ITL Conference</span>
          <p className="mt-4 text-center lg:text-left">
            The largest gathering of Internationally Trained Lawyers (ITLs) in Canada.
          </p>
        </div>

        {/* Links */}
        <div className="flex-grow lg:flex lg:flex-grow-0 lg:justify-center space-x-0 lg:space-x-10 mb-8 lg:mb-0">
          <div className="text-center">
            <h6 className="font-bold">Quick Links</h6>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about-us" className="hover:text-gray-400">About</a></li>
              <li><a href="/speakers" className="hover:text-gray-400">Speakers</a></li>
              <li><a href="#" className="hover:text-gray-400">Schedule</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h6 className="font-bold">Resources</h6>
            <ul className="mt-2 space-y-2">
              <li><a href="/faqs" className="hover:text-gray-400">FAQ</a></li>
              <li><a href="pre-register" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links and Scroll to Top Button */}
        <div className="flex flex-1 flex-col items-center lg:items-end">
          <div>
            <h6 className="font-bold">Follow Us</h6>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            </div>
          </div>
          {showTopBtn && (
            <button onClick={goToTop} className="mt-4 p-2 rounded-full bg-[#7F5283] text-white hover:bg-[#9B6AA8]">
              <FaArrowUp size={24} />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
