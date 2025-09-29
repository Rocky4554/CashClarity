
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
  showBackground = true,
  onCheckout,
}) => {
  return (
    <section
      id="pricing"
      className="py-12 bg-neutral-900 relative overflow-hidden"
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
          <h2 className="text-sm font-semibold leading-6 text-blue-400 mb-1">
            {title}
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            {subtitle}
          </p>
          <p className="text-base text-neutral-400 max-w-xl mx-auto">
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
                    : "bg-neutral-800/50 ring-1 ring-neutral-700",
                  "rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:ring-blue-500/50",
                  "w-[260px] sm:w-[280px] md:w-[300px]"
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
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-8">
          <p className="text-neutral-500 text-xs">
            All plans include 14-day free trial • Cancel anytime • No credit
            card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
