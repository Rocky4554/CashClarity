import SpinLoader from "@/components/spinLoader";
import ShimmerTextLoader from "@/components/textLoader";

export default function TestPage() {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-white">
    //   <div className="flex flex-col items-center space-y-4">
    //     <SpinLoader size="w-20 h-20" />
    //     <h2 className="text-xl font-semibold text-gray-700">
    //       Loading Transaction...
    //     </h2>
    //   </div>
    // </div>

     <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="loader" data-text="Loading Transaction..."></div>
      </div>
    </div>

    // <div className="flex items-center justify-center min-h-screen bg-white">
    //   <div className="flex flex-col items-center space-y-4">

    //   </div>
    // </div>

  );
}
