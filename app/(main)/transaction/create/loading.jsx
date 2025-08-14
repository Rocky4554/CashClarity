// app/transaction/create/loading.jsx
import ShimmerTextLoader from "@/components/textLoader";

export default function Loading() {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-white">
    //   <div className="text-center">
    //     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
    //     <h2 className="text-xl font-semibold text-gray-700">
    //       Loading Transaction...
    //     </h2>
    //   </div>
    // </div>

    <div className="flex items-center justify-center min-h-screen bg-white">
          <div className="flex flex-col items-center space-y-4">
            <ShimmerTextLoader text="Loading Transaction..." />
          </div>
        </div>
  );
}