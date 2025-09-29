// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import CtaButton from "@/components/ctaButton/ctabutton";
// import { FaArrowRight } from "react-icons/fa";
// import Orb from "@/components/Orb";

// const HeroSection = () => {
//   return (
//     <section className="pt-40 pb-20 px-4 bg-[#060010]">
//       <div className="container mx-auto text-center">
//         <div
//           style={{
//             width: "100%",
//             height: "600px",
//             position: "relative",
//             zIndex: 10,
//           }}
//         >
//           <Orb
//             hoverIntensity={0.5}
//             rotateOnHover={true}
//             hue={0}
//             forceHoverState={false}
//           />
//           <div >
//              <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
//             Manage Your Finances <br /> with Intelligence
//           </h1>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//             An AI-powered financial management platform that helps you track,
//             analyze, and optimize your spending with real-time insights.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <Link href="/dashboard">
//               <CtaButton text="Get Started" icon={<FaArrowRight />} />
//             </Link>
//           </div>
//           </div>
         
//         </div>
//         {/* <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
//           Manage Your Finances <br /> with Intelligence
//         </h1>
//         <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//           An AI-powered financial management platform that helps you track,
//           analyze, and optimize your spending with real-time insights.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <Link href="/dashboard">
           
//             <CtaButton text="Get Started" icon={<FaArrowRight />} />
//           </Link>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import CtaButton from "@/components/ctaButton/ctabutton";
import { FaArrowRight } from "react-icons/fa";
import Orb from "@/components/Orb";

const HeroSection = () => {
  return (
    <section className="pt-14 px-4 bg-neutral-900">
      <div className="container mx-auto text-center">
        <div className="w-full h-[600px] sm:h-[600px] relative flex items-center justify-center"
          // style={{
          //   width: "100%",
          //   height: "600px",
          //   position: "relative",
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
        >
          {/* Orb as background */}
         <div className="absolute -top-25 sm:top-0 left-0 w-full h-full z-[1]">
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>

          {/* Text content overlaid on top */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              
            }}
          >
            <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-hero-title antialiased">
              Manage Your Finances <br /> with Intelligence
            </h1>
            <p className="text-lg sm:text-xl text-sky-100 mb-8 mt-8 sm:mt-0 text-center max-w-2xl mx-auto">
              An AI-powered financial management platform that helps you track,
              analyze, and optimize your spending with real-time insights.
            </p>
            <div className="flex justify-center space-x-4 mt-10 sm:mt-0">
              <Link href="/dashboard">
                <CtaButton text="Get Started" icon={<FaArrowRight />} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;