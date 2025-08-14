import ShimmerTextLoader from "@/components/textLoader";

export default function Loading() {
  return (
  
    <div className="flex items-center justify-center min-h-screen bg-white">
          <div className="flex flex-col items-center space-y-4">
            <ShimmerTextLoader text="Loading Accounts..." />
          </div>
        </div>
  );
}