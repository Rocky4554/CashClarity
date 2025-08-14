import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { useRouter } from "next/navigation";
  
  export function ProFeatureDialog({
    isOpen,
    onClose,
    title = "Pro Feature",
    description = "This feature is available for Pro members only.",
    feature = "feature",
    redirectTo = "/upgrade-pro"
  }) {
    const router = useRouter();
  
    const handleUpgrade = () => {
      onClose();
      router.push(redirectTo);
    };
  
    const handleCancel = () => {
      onClose();
    };
  
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">{title}</DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <p className="text-center text-muted-foreground">
              {description}
            </p>
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">
                  ✨ Unlock Pro Features
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AI-powered receipt scanning</li>
                  <li>• Unlimited transactions</li>
                  <li>• Advanced analytics</li>
                  <li>• Priority support</li>
                </ul>
              </div>
            </div>
          </div>
  
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="w-full sm:w-auto"
            >
              Maybe Later
            </Button>
            <Button
              onClick={handleUpgrade}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Upgrade to Pro
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }