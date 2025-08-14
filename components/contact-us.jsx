// import React, { useState } from 'react';
// import { Phone, Mail, MapPin } from 'lucide-react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = () => {
//     if (!agreedToPrivacy) {
//       alert('Please agree to the Privacy Policy');
//       return;
//     }
//     console.log('Form submitted:', formData);
//     // Handle form submission here
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex">
//       {/* Left side - Contact Info */}
//       <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
//         <div className="max-w-lg">
//           <p className="text-orange-400 text-sm font-medium mb-4">Contact Section</p>
//           <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
//             Get in touch
//           </h1>
//           <p className="text-gray-400 text-lg mb-12 leading-relaxed">
//             Write one or two welcoming sentences that encourage contact. Include your response time commitment and highlight your team's readiness to help.
//           </p>

//           {/* Contact Details */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <Phone className="w-5 h-5 text-gray-400" />
//               <span className="text-lg">(406) 555-0120</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Mail className="w-5 h-5 text-gray-400" />
//               <span className="text-lg">hello@example.com</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <MapPin className="w-5 h-5 text-gray-400" />
//               <span className="text-lg">192 Griffin Street, Gilbert, AZ 32521</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right side - Contact Form */}
//       <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
//         <div className="max-w-md w-full">
//           <div className="space-y-6">
//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Name"
//                 className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
//                 required
//               />
//             </div>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Email"
//                 className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors"
//                 required
//               />
//             </div>

//             {/* Message Field */}
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 placeholder="Type your message"
//                 rows={5}
//                 className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors resize-none"
//                 required
//               />
//             </div>

//             {/* Privacy Policy Checkbox */}
//             <div className="flex items-start space-x-3">
//               <input
//                 type="checkbox"
//                 id="privacy"
//                 checked={agreedToPrivacy}
//                 onChange={(e) => setAgreedToPrivacy(e.target.checked)}
//                 className="mt-1 w-4 h-4 text-orange-400 bg-gray-900 border-gray-700 rounded focus:ring-orange-400 focus:ring-2"
//               />
//               <label htmlFor="privacy" className="text-sm text-gray-400">
//                 By selecting this you agree to our{' '}
//                 <a href="#" className="text-orange-400 hover:text-orange-300 underline">
//                   Privacy Policy
//                 </a>
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="w-full bg-gray-200 text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black"
//             >
//               Send message
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

//////////

import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!agreedToPrivacy) {
      alert('Please agree to the Privacy Policy');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setAgreedToPrivacy(false);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* Left side - Contact Info */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 xl:p-16 flex flex-col justify-center">
        <div className="max-w-lg mx-auto lg:mx-0">
          <p className="text-orange-400 text-sm font-medium mb-3 sm:mb-4">Contact Section</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Get in touch
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
            Write one or two welcoming sentences that encourage contact. Include your response time commitment and highlight your team's readiness to help.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
              <span className="text-base sm:text-lg break-all">(406) 555-0120</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
              <span className="text-base sm:text-lg break-all">ultimatekller45@gmail.com</span>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 mt-1" />
              <span className="text-base sm:text-lg">192 Griffin Street, Gilbert, AZ 32521</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Contact Form */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 xl:p-16 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto lg:mx-0">
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-900 border border-green-600 text-green-100 rounded-lg text-sm sm:text-base">
              Thank you for your message! We'll get back to you within 24-48 hours.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-900 border border-red-600 text-red-100 rounded-lg text-sm sm:text-base">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors text-sm sm:text-base"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors text-sm sm:text-base"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                required
              />
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="privacy"
                checked={agreedToPrivacy}
                onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                className="mt-1 w-4 h-4 text-orange-400 bg-gray-900 border-gray-700 rounded focus:ring-orange-400 focus:ring-2 flex-shrink-0"
              />
              <label htmlFor="privacy" className="text-xs sm:text-sm text-gray-400">
                By selecting this you agree to our{' '}
                <a href="#" className="text-orange-400 hover:text-orange-300 underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-200 text-black py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;