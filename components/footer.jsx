// export const Footer = () => {
//   return (
//     <div className="relative mt-16 bg-deep-purple-accent-400">
//       <svg
//         className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
//         preserveAspectRatio="none"
//         viewBox="0 0 1440 54"
//       >
//         <path
//           fill="currentColor"
//           d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
//         />
//       </svg>
//       <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
//         <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
//           <div className="md:max-w-md lg:col-span-2">
//             <a
//               href="/"
//               aria-label="Go home"
//               title="Company"
//               className="inline-flex items-center"
//             >
//               <svg
//                 className="w-8 text-teal-accent-400"
//                 viewBox="0 0 24 24"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeMiterlimit="10"
//                 stroke="currentColor"
//                 fill="none"
//               >
//                 <rect x="3" y="1" width="7" height="12" />
//                 <rect x="3" y="17" width="7" height="6" />
//                 <rect x="14" y="1" width="7" height="6" />
//                 <rect x="14" y="11" width="7" height="12" />
//               </svg>
//               <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
//                 Company
//               </span>
//             </a>
//             <div className="mt-4 lg:max-w-sm">
//               <p className="text-sm text-deep-purple-50">
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                 accusantium doloremque laudantium, totam rem aperiam.
//               </p>
//               <p className="mt-4 text-sm text-deep-purple-50">
//                 Eaque ipsa quae ab illo inventore veritatis et quasi architecto
//                 beatae vitae dicta sunt explicabo.
//               </p>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
//             <div>
//               <p className="font-semibold tracking-wide text-teal-accent-400">
//                 Category
//               </p>
//               <ul className="mt-2 space-y-2">
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     News
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     World
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Games
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     References
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <p className="font-semibold tracking-wide text-teal-accent-400">
//                 Cherry
//               </p>
//               <ul className="mt-2 space-y-2">
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Web
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     eCommerce
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Business
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Entertainment
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Portfolio
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <p className="font-semibold tracking-wide text-teal-accent-400">
//                 Apples
//               </p>
//               <ul className="mt-2 space-y-2">
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Media
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Brochure
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Nonprofit
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Educational
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Projects
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <p className="font-semibold tracking-wide text-teal-accent-400">
//                 Business
//               </p>
//               <ul className="mt-2 space-y-2">
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Infopreneur
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Personal
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Wiki
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
//                   >
//                     Forum
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
//           <p className="text-sm text-gray-100">
//             © Copyright 2020 Lorem Inc. All rights reserved.
//           </p>
//           <div className="flex items-center mt-4 space-x-4 sm:mt-0">
//             <a
//               href="/"
//               className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
//             >
//               <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                 <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
//               </svg>
//             </a>
//             <a
//               href="/"
//               className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
//             >
//               <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
//                 <circle cx="15" cy="15" r="4" />
//                 <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
//               </svg>
//             </a>
//             <a
//               href="/"
//               className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
//             >
//               <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
//                 <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact-us";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    // Restore body scroll when modal is closed
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className="relative bg-gray-900">
        {/*the curved part*/}
        <svg
          className="absolute top-0 w-full h-4 -mt-3 sm:-mt-5 sm:h-6 md:-mt-10 md:h-16 text-gray-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-8 sm:pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          {/*logo and footer links */}
          <div className="grid gap-8 sm:gap-12 lg:gap-16 row-gap-6 sm:row-gap-10 mb-6 sm:mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
            {/*logo and description*/}
            <div className="text-center sm:text-left md:max-w-md lg:col-span-2">
              <Link
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center justify-center sm:justify-start"
              >
                <Image
                  src="/images/logo5.png"
                  alt="Logo"
                  width={100}
                  height={1000}
                  className="h-12 sm:h-16 w-auto object-contain"
                />
              </Link>
              <div className="mt-3 sm:mt-4 lg:max-w-sm">
                <p className="text-sm sm:text-base tracking-wide text-gray-100">
                  Clear the fog,
                </p>
                <p className="text-sm sm:text-base tracking-wide text-gray-100">
                  Master your Money.
                </p>
              </div>
            </div>

            {/*Footer Links*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:col-span-4">
              {/* Pages */}
              <div className="text-center sm:text-left">
                <p className="font-semibold tracking-wide text-gray-100 text-sm sm:text-base mb-3">
                  Pages
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-sm sm:text-base transition-colors duration-300 text-gray-300 hover:text-gray-100"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="text-sm sm:text-base transition-colors duration-300 text-gray-300 hover:text-gray-100"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/transaction/create"
                      className="text-sm sm:text-base transition-colors duration-300 text-gray-300 hover:text-gray-100"
                    >
                      Add Transaction
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Account */}
              <div className="text-center sm:text-left">
                <p className="font-semibold tracking-wide text-gray-100 text-sm sm:text-base mb-3">
                  Account
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/sign-in"
                      className="text-sm sm:text-base transition-colors duration-300 text-gray-300 hover:text-gray-100"
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sign-up"
                      className="text-sm sm:text-base transition-colors duration-300 text-gray-300 hover:text-gray-100"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/upgradePro"
                      className="text-sm sm:text-base transition-colors duration-300 text-gray-300 hover:text-gray-100"
                    >
                      CashClarity Pro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm sm:text-base transition-colors duration-300 text-gray-300 hover:text-gray-100"
                    >
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact US */}
              <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                <p className="font-semibold tracking-wide text-gray-100 text-sm sm:text-base mb-4">
                  Get in Touch
                </p>
                <button
                  onClick={openContactModal}
                  className="contact-btn group relative inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  <span>Contact Us</span>
                  <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center pt-4 sm:pt-5 pb-6 sm:pb-10 border-t border-gray-700">
            <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
              Made with love by RAUNAK. All rights reserved.
            </p>

            <div className="flex items-center justify-center sm:justify-end space-x-4">
              {/* Twitter Icon */}
              <Link
                href="/dashboard"
                className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 sm:h-5"
                >
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6
        c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1
        C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1
        c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14
        c0-0.2,0-0.4,0-0.6C22.5,6.4,23.3,5.5,24,4.6z"
                  />
                </svg>
              </Link>
              {/* Instagram Icon */}
              <Link
                href="/dashboard"
                className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
              >
                <svg
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  className="h-5 sm:h-6"
                >
                  <circle cx="15" cy="15" r="4" />
                  <path
                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10
        C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1
        c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                  />
                </svg>
              </Link>
              {/* Facebook Icon */}
              <Link
                href="/dashboard"
                className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 sm:h-5"
                >
                  <path
                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788
        c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22
        c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z"
                  />
                </svg>
              </Link>

              {/* GitHub Icon - Updated to modern Link */}
              <Link
                href="https://github.com/Rocky4554"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 sm:h-6"
                >
                  <path
                    d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.29 3.438 9.78 8.205 11.387
        0.6 0.113 0.82-0.26 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338
        0.726-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.756-1.333-1.756-1.09-0.745
        0.083-0.729 0.083-0.729 1.205 0.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807
        1.304 3.492 0.997 0.108-0.775 0.418-1.304 0.76-1.604-2.665-0.304-5.467-1.332-5.467-5.931
        0-1.31 0.468-2.381 1.236-3.221-0.124-0.303-0.536-1.523 0.117-3.176 0 0 1.008-0.322
        3.301 1.23a11.5 11.5 0 0 1 3.003-0.403c1.02 0.005 2.045 0.137 3.003 0.403
        2.291-1.553 3.297-1.23 3.297-1.23 0.655 1.653 0.243 2.873 0.12 3.176
        0.77 0.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.48 5.921
        0.43 0.372 0.814 1.102 0.814 2.222 0 1.604-0.015 2.896-0.015 3.286
        0 0.32 0.216 0.694 0.825 0.576C20.565 22.074 24 17.59 24 12.3
        24 5.67 18.63 0.3 12 0.3z"
                  />
                </svg>
              </Link>

              {/* LinkedIn Icon - Updated to modern Link */}
              <Link
                href="https://www.linkedin.com/in/raunak-kumar54/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-gray-300 hover:text-gray-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 sm:h-6"
                >
                  <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4V7h-4v17zM8 7h3.8v2.3h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.8 2.6 4.8 5.9V24h-4v-8.1c0-2-.1-4.6-2.8-4.6s-3.2 2.1-3.2 4.4V24h-4V7z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={closeContactModal}
          />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-6xl bg-black rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden animate-slide-in flex flex-col"
            style={{ maxHeight: "95vh" }}
          >
            {/* Close Button */}
            <button
              onClick={closeContactModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Scrollable Contact Form Container */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;