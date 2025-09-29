"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";
import { WobbleCard } from "@/components/ui/wobble-card";
import Pricing from "@/components/pricing"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-neutral-50">
            Everything you need to manage your finances
          </h2>

          {/* Wobble Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-pink-800 min-h-[400px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className=" m:max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Create Multiple Accounts
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  Create separate accounts for personal spending, savings,
                  business expenses, and more.
                </p>
              </div>
              <img
                src="/images/account.png"
                width={600}
                height={600}
                alt="linear demo image"
                className="absolute -right-10 lg:-right-[2%] -bottom-5 sm:-bottom-5 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[400px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm ml-auto relative z-10">
                <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Smart Financial Dashboard
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                  Interactive graphs show spending patterns while recent
                  transactions keep you updated in real-time.
                </p>
              </div>

              <img
                src="/images/reacent.png"
                width={600}
                height={600}
                alt="linear demo image"
                className="absolute -left-10 sm:-left-[1%] -bottom-[0%] object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-rose-800 min-h-[400px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                AI powered smart receipt scanner
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  Never Miss a Transaction Add expenses on the go - quick,
                  simple, and always at your fingertips. <br/>.Say Goodbye to Manual
                  Entry Our AI-powered scanner reads receipts instantly. Just
                  snap, and we'll handle the rest.
                </p>
              </div>
              <img
                src="/images/trans.png"
                width={600}
                height={500}
                alt="linear demo image"
                className="absolute -right-10 sm:lg:-right-[2%] -bottom-1 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-green-900 min-h-[400px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm ml-auto relative z-10">
                <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Manage & Export with Ease
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                  Manage multiple accounts, track all transactions in real-time, and export data to Excel for accounting or tax purposes.Add or delete trnsactions according to your need.
                </p>
              </div>

              <img
                src="/images/Export.png"
                width={600}
                height={500}
                alt="linear demo image"
                className="absolute -left-10 sm:-left-[3%] -bottom-2 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>

          {/* 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card className="p-6" key={index}>
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </section>

      {/* How It Works Section */}
      {/* <section className="py-20 bg-neutral-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-neutral-50">
            How It Works
          </h2> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> */}
          {/* {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                 <HoverEffect items={howItWorksData} />
              // </div>
            ))} */}
{/* 
          <div className="max-w-8xl mx-auto px-4">
            <HoverEffect items={howItWorksData} />
          </div> */}
          {/* </div> */}
        {/* </div>
      </section> */}

      <section id="pricing" className="py-20">
        <Pricing/>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-neutral-50">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 transition duration-200 ease hover:-translate-y-1 hover:scale-110"
              >
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
