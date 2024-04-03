import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
  return (
<footer className="bg-bg text-textPrimary">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex flex-col gap-4 items-center">
                  <img src="/logo.png" className="h-16 me-3" alt="Your Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">The ITL Conference</span>
                  <p className='text-center'>The largest gathering of Internationally Trained Lawyers (ITLs) in Canada.</p>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-textPrimary uppercase">Quick Links</h2>
                  <ul className="text-textPrimary font-medium">
                      <li className="">
                          <a href="/" className="hover:underline">Home</a>
                      </li>
                      <li>
                          <a href="#about-us" className="hover:underline">About</a>
                      </li>
                      <li>
                          <a href="/speakers" className="hover:underline">Speakers</a>
                      </li>
                      <li>
                          <a href="#schedule-section" className="hover:underline">Schedule</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-textPrimary uppercase">Follow us</h2>
                  <ul className="text-textPrimary font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Twitter</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-textPrimary">Legal</h2>
                  <ul className="text-textPrimary font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto border-textPrimary lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-textPrimary sm:text-center">© 2025 <a href="#" className="hover:underline">The ITL Conference</a>. All Rights Reserved.
          </span>
          {/* <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-textPrimary dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-purple ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045ZZm-3.885 3.437A9.7 9.7 0 0 0 16.984 16.4c.488-.656.906-1.38 1.236-2.173a6.088 6.088 0 0 1-1.4-.667c-.346-.252-.672-.52-.978-.809a5.248 5.248 0 0 1-1.363-1.86c-.386-.86-.666-1.764-.84-2.697-.017-.114-.036-.227-.052-.341-.186-.425-.308-.865-.353-1.306-.22-1.903.8-3.357.8-3.357s-1.518 1.667-2.57 2.57c-.757.554-1.313.718-1.313.718-1.243.536-1.425-1.046-1.425-1.046-.084-.283-.293-.475-.536-.495-.025-.004-.05-.006-.075-.006-.129 0-.254.071-.356.211-.044.063-.1.152-.166.255-.333.555-.88 1.471-.909 2.944-.022.979.214 1.925.685 2.808.386.757.935 1.472 1.57 2.126.498.525 1.042 1.04 1.619 1.532a9.56 9.56 0 0 0-2.19-.232c-.053 0-.107.003-.16.01-2.84.232-5.188 2.066-5.188 4.294 0 .436.09.85.244 1.238a9.823 9.823 0 0 0-1.854-.178c-.023 0-.046.004-.069.004-.333 0-.625-.109-.884-.294.049.166.086.332.107.5C.074 17.568 0 18.078 0 18.584c0 .883.446 1.661 1.127 2.116a10.014 10.014 0 0 0 4.717 1.19c5.152 0 8.635-3.788 8.635-7.08 0-.107-.004-.21-.008-.314A6.366 6.366 0 0 0 16.317 12c.287-.003.573-.028.855-.074a6.439 6.439 0 0 0 1.626-.453 10.032 10.032 0 0 0-2.425-.438c-.44.003-.88.047-1.32.135a6.757 6.757 0 0 1 2.786-4.173c-.994.557-2.058.964-3.167 1.194a10.023 10.023 0 0 0-3.882-.782ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-textPrimary dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-textPrimary hover:text-gray-900 ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </a>
          </div> */}
      </div>
    </div>
</footer>

  );
};

export default Footer;
