// app/(main)/dashboard/_components/ProductTourWrapper.jsx
"use client";

import dynamic from "next/dynamic";

const ProductTour = dynamic(() => import("@/components/Product-Tour/ProductTour.jsx"), {
  ssr: false,
});

export default function ProductTourWrapper({ user }) {
  return <ProductTour user={user} />;
}
