'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

export default function UpgradeModal({ 
  isOpen, 
  onClose, 
  onUpgradeLater,
  title = "Free Tier Reached",
  description = "Upgrade to Pro to add more transactions"
}) {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsAnimating(true), 50);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
      onUpgradeLater?.();
    }, 300);
  };

  const handleUpgradeToPro = () => {
    setIsAnimating(false);
    setTimeout(() => {
      router.push('/upgradePro');
    }, 300);
  };

  const handleUpgradeLater = () => {
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0 border-0 shadow-2xl">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div 
          className={`relative bg-background rounded-2xl border transition-all duration-300 ${
            isAnimating 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          {/* Content */}
          <div className="p-8 text-center">
            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {title}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {/* Upgrade Later Button */}
              <Button
                variant="outline"
                onClick={handleUpgradeLater}
                className="flex-1"
              >
                Upgrade Later
              </Button>

              {/* Upgrade to Pro Button */}
              <Button
                onClick={handleUpgradeToPro}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                Upgrade to Pro
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-t-2xl"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Example usage component
export function UpgradeModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center bg-white rounded-xl shadow-lg p-8 border">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Upgrade Modal Demo</h1>
        <p className="text-gray-600 mb-6">Click the button below to see the modal in action</p>
        
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
        >
          Show Upgrade Modal
        </Button>

        <div className="mt-6 text-sm text-gray-500">
          <p>Features demonstrated:</p>
          <ul className="mt-2 space-y-1">
            <li>• Smooth fade-in animation</li>
            <li>• ShadCN UI components</li>
            <li>• Single close button (no duplicates)</li>
            <li>• Hover effects on buttons</li>
          </ul>
        </div>

        <UpgradeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpgradeLater={() => {
            console.log('User chose to upgrade later');
            setIsModalOpen(false);
          }}
        />
      </div>
    </div>
  );
}