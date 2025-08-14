// app/upgradePro/loading.jsx
import React from "react";

export default function UpgradeProLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">
          Loading Upgrade Pro...
        </h2>
      </div>
    </div>
  );
}