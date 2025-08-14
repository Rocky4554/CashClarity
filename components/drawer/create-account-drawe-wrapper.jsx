"use client";

import { useState } from "react";
import { CreateAccountDrawer } from "@/components/drawer/create-account-drawer";

export function CreateAccountWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CreateAccountDrawer
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      {children}
    </CreateAccountDrawer>
  );
}