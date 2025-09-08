// "use client";

// import { useState } from "react";
// import { CreateAccountDrawer } from "@/components/drawer/create-account-drawer";

// export function CreateAccountWrapper({ children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <CreateAccountDrawer
//       open={isOpen}
//       onOpenChange={setIsOpen}
//     >
//       {children}
//     </CreateAccountDrawer>
//   );
// }

/////////////

"use client";

import { useState } from "react";
import { CreateAccountDrawer } from "@/components/drawer/create-account-drawer";

export function CreateAccountWrapper({ children, onSuccess }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSuccess = (data) => {
    setIsOpen(false);
    // Call the parent's onSuccess with the account data for optimistic updates
    if (onSuccess) {
      onSuccess(data);
    }
  };

  return (
    <CreateAccountDrawer
      open={isOpen}
      onOpenChange={setIsOpen}
      onSuccess={handleSuccess}
    >
      {children}
    </CreateAccountDrawer>
  );
}