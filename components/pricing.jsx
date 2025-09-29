// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Check } from "lucide-react";

// // Utility function for class names
// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// // Pricing data
// const pricingTiers = [
//   {
//     name: 'Free',
//     id: 'tier-free',
//     priceMonthly: '$0',
//     description: "Perfect for personal finance management",
//     features: [
//       'Up to 3 accounts',
//       '100 transactions per month',
//       'Basic analytics',
//       'Email support',
//       'Mobile app access'
//     ],
//     featured: false,
//     buttonText: 'Get Started Free',
//     ctaLink: '/dashboard'
//   },
//   {
//     name: 'Pro',
//     id: 'tier-pro',
//     priceMonthly: '$9.99',
//     description: 'Best for individuals and small businesses',
//     features: [
//       'Unlimited accounts',
//       'Unlimited transactions',
//       'Advanced analytics & insights',
//       'AI-powered receipt scanning',
//       'Priority support',
//       'Export to Excel/CSV',
//       'Custom categories',
//       'Multi-device sync'
//     ],
//     featured: true,
//     buttonText: 'Start 14-Day Free Trial',
//     ctaLink: '/dashboard'
//   },
// //   {
// //     name: 'Business',
// //     id: 'tier-business',
// //     priceMonthly: '$29.99',
// //     description: 'For teams and growing businesses',
// //     features: [
// //       'Everything in Pro',
// //       'Team collaboration (up to 10 users)',
// //       'Advanced reporting',
// //       'API access',
// //       'Dedicated account manager',
// //       'Custom integrations',
// //       'Priority feature requests',
// //       'White-label options'
// //     ],
// //     featured: false,
// //     buttonText: 'Contact Sales',
// //     ctaLink: '/contact'
// //   }
// ];

// const Pricing = ({
//   tiers = pricingTiers,
//   title = "",
//   subtitle = "Choose the right plan for you",
//   description = "Start free and scale as you grow. All plans include our core features with no hidden fees.",
//   showBackground = true
// }) => {
//   return (
//     <section id="pricing" className="py-20 bg-neutral-900 relative overflow-hidden">
//       {/* Background decoration */}
//       {showBackground && (
//         <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
//           <div
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//             className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-500 to-purple-600 opacity-10 animate-pulse"
//           />
//         </div>
//       )}

//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="mx-auto max-w-4xl text-center mb-16">
//           <h2 className="text-base font-semibold leading-7 text-blue-400 mb-2">
//             {title}
//           </h2>
//           <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
//             {subtitle}
//           </p>
//           <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
//             {description}
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {tiers.map((tier, tierIdx) => (
//             <div
//               key={tier.id}
//               className={classNames(
//                 tier.featured
//                   ? 'relative bg-neutral-800 ring-2 ring-blue-500 shadow-2xl scale-105'
//                   : 'bg-neutral-800/50 ring-1 ring-neutral-700',
//                 'rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring-blue-500/50'
//               )}
//             >
//               {/* Featured badge */}
//               {tier.featured && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full">
//                   <span className="text-white px-4 py-1 text-sm font-semibold animate-pulse">
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               {/* Plan name */}
//               <h3 className="text-xl font-semibold text-blue-400 mb-4">
//                 {tier.name}
//               </h3>

//               {/* Price */}
//               <div className="mb-6">
//                 <span className="text-5xl font-bold text-white">
//                   {tier.priceMonthly}
//                 </span>
//                 <span className="text-neutral-400 text-lg">/month</span>
//               </div>

//               {/* Description */}
//               <p className="text-neutral-300 mb-8">
//                 {tier.description}
//               </p>

//               {/* Features */}
//               <ul className="space-y-3 mb-8">
//                 {tier.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 group">
//                     <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
//                     <span className="group-hover:text-white transition-colors">
//                       {feature}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               {/* CTA Button */}
//               <Link href={tier.ctaLink || '/dashboard'}>
//                 <Button
//                   className={classNames(
//                     tier.featured
//                       ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg'
//                       : 'bg-neutral-700 hover:bg-neutral-600 text-white',
//                     'w-full transition-all duration-200 transform hover:scale-105'
//                   )}
//                 >
//                   {tier.buttonText}
//                 </Button>
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* Additional info */}
//         <div className="text-center mt-12">
//           <p className="text-neutral-500 text-sm">
//             All plans include 14-day free trial • Cancel anytime • No credit card required
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;

"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Pricing = ({
  tiers,
  title = "",
  subtitle = "Choose the right plan for you",
  description = "Start free and scale as you grow. All plans include our core features with no hidden fees.",
  showBackground = false,
  onCheckout,
}) => {
  return (
    <section
      id="pricing"
      className="py-12 relative overflow-hidden"
    >
      {showBackground && (
        <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[50rem] bg-gradient-to-tr from-blue-500 to-purple-600 opacity-10 animate-pulse"
          />
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-sm font-semibold leading-6 text-neutral-900 mb-1">
            {title}
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black mb-3">
            {subtitle}
          </p>
          <p className="text-base text-neutral-700 max-w-xl mx-auto">
            {description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-12 max-w-5xl">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "relative bg-neutral-800 ring-2 ring-blue-500 shadow-xl scale-105"
                    : "bg-neutral-800 ring-1 ring-neutral-700",
                  "rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:ring-blue-500/50",
                  "w-[260px] sm:w-[300px]"
                )}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full">
                    <span className="text-white px-3 py-0.5 text-xs font-semibold animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-lg font-semibold text-blue-400 mb-3">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">
                    ₹{tier.priceMonthly}
                  </span>
                  <span className="text-neutral-400 text-sm">/month</span>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-sm mb-6">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 text-sm">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={classNames(
                        "flex items-start gap-2 group",
                        feature.included
                          ? "text-neutral-300"
                          : "text-neutral-500 line-through"
                      )}
                    >
                      {feature.included ? (
                        <Check className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      ) : (
                        <span className="h-4 w-4 flex-shrink-0 mt-0.5 text-red-400">
                          ✗
                        </span>
                      )}
                      <span className="group-hover:text-white transition-colors">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {/* CTA Button */}
                {tier.name === "Pro" && onCheckout ? (
                  <Button
                    onClick={onCheckout}
                    className={classNames(
                      tier.featured
                        ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                        : "bg-neutral-700 hover:bg-neutral-600 text-white",
                      "w-full text-sm py-2"
                    )}
                  >
                    {tier.buttonText}
                  </Button>
                ) : (
                  <Link href={tier.ctaLink || "/dashboard"}>
                    <Button
                      className={classNames(
                        tier.featured
                          ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                          : "bg-neutral-700 hover:bg-neutral-600 text-white",
                        "w-full text-sm py-2"
                      )}
                    >
                      {tier.buttonText}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        {/* <div className="text-center mt-8">
          <p className="text-neutral-500 text-xs">
            All plans include 14-day free trial • Cancel anytime • No credit
            card required
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
