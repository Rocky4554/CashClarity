// "use client";

// import {
//   ArrowUpRight,
//   ArrowDownRight,
//   UserPen,
//   Trash2,
// } from "lucide-react";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { toast } from "sonner";

// import { Switch } from "@/components/ui/switch";
// import { CreateAccountDrawer } from "@/components/drawer/create-account-drawer";
// import { ConfirmationDialog } from "@/components/dialogBox/confirmDialogBox"; // Import the new component
// import useFetch from "@/hooks/use-fetch";
// import useRefreshAccounts from "@/reduxStore/hook/useRefreshAccounts";
// import {
//   updateDefaultAccount,
//   deleteAccount,
// } from "@/actions/account";

// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export function AccountCard({ account }) {
//   const { name, type, balance, id, isDefault } = account;
//   const refreshAccount = useRefreshAccounts();

//   const [editDrawerOpen, setEditDrawerOpen] = useState(false);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false); // New state for delete confirmation

//   const {
//     loading: updateDefaultLoading,
//     fn: updateDefaultFn,
//     data: updatedAccount,
//     error,
//   } = useFetch(updateDefaultAccount);

//   const {
//     loading: deleteAccountLoading,
//     fn: deleteAccountFn,
//     data: deletedAccount,
//     error: deleteAccountError,
//   } = useFetch(deleteAccount);

//   const handleDefaultChange = async (event) => {
//     event.preventDefault();
//     if (isDefault) {
//       toast.warning("You need at least 1 default account");
//       return;
//     }
//     await updateDefaultFn(id);
//   };

//   // Modified: Show confirmation dialog instead of browser confirm
//   const handleDeleteClick = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setShowDeleteConfirm(true);
//   };

//   // New: Handle actual deletion after confirmation
//   const handleConfirmDelete = async () => {
//     if (deleteAccountLoading) return;
//     await deleteAccountFn(id);
//     setShowDeleteConfirm(false);
//   };

//   // New: Handle cancel deletion
//   const handleCancelDelete = () => {
//     setShowDeleteConfirm(false);
//   };

//   useEffect(() => {
//     if (updatedAccount?.success) {
//       toast.success("Default account updated successfully");
//       try {
//         refreshAccount();
//         console.log("Refresh called after default account update");
//       } catch (error) {
//         console.error("Error refreshing accounts:", error);
//       }
//     }
//   }, [updatedAccount, refreshAccount]);

//   useEffect(() => {
//     if (error) {
//       toast.error(error.message || "Failed to update default account");
//     }
//   }, [error]);

//   useEffect(() => {
//     if (deletedAccount?.success) {
//       toast.success("Account deleted successfully");
//       try {
//         refreshAccount();
//         console.log("Refresh called after account deletion");
//       } catch (error) {
//         console.error("Error refreshing accounts:", error);
//       }
//     }
//   }, [deletedAccount, refreshAccount]);

//   useEffect(() => {
//     if (deleteAccountError) {
//       toast.error("Failed to delete account");
//       console.error(deleteAccountError);
//     }
//   }, [deleteAccountError]);

//   return (
//     <>
//       <Card className="hover:shadow-md transition-shadow group relative">
//         <Link href={`/account/${id}`}>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium capitalize">
//               {name}
//             </CardTitle>
//             <Switch
//               checked={isDefault}
//               onClick={handleDefaultChange}
//               disabled={updateDefaultLoading}
//             />
//           </CardHeader>
//           <CardContent>
//             <div className="flex justify-between items-center">
//               <div className="flex flex-col">
//                 <div className="text-2xl font-bold">
//                   ${parseFloat(balance).toFixed(2)}
//                 </div>
//                 <p className="text-xs text-muted-foreground mt-1">
//                   {type.charAt(0) + type.slice(1).toLowerCase()} Account
//                 </p>
//               </div>

//               <div className="flex flex-col items-end gap-2">
//                 {/* Edit Button */}
//                 <div
//                   className="flex items-center group/edit"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     e.preventDefault();
//                     setEditDrawerOpen(true);
//                   }}
//                   role="button"
//                   aria-label="Edit account"
//                 >
//                   <div className="relative flex items-center cursor-pointer">
//                     <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover/edit:opacity-70 transition-opacity rounded-sm z-0" />
//                     <UserPen className="h-4 w-4 text-blue-500 group-hover/edit:text-white z-10" />
//                     <span className="text-sm text-blue-500 ml-1 mr-1 group-hover/edit:text-white z-10">
//                       Edit Account
//                     </span>
//                   </div>
//                 </div>

//                 {/* Delete Button - Modified to show confirmation dialog */}
//                 <div
//                   className="flex items-center group/delete"
//                   onClick={handleDeleteClick}
//                   role="button"
//                   aria-label="Delete account"
//                 >
//                   <div className="relative flex items-center cursor-pointer">
//                     <div className="absolute inset-0 bg-red-500 opacity-0 group-hover/delete:opacity-70 transition-opacity rounded-sm z-0" />
//                     <Trash2 className="h-4 w-4 text-red-500 group-hover/delete:text-white z-10" />
//                     <span className="text-sm text-red-500 ml-1 mr-1 group-hover/delete:text-white z-10">
//                       Delete
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>

//           <CardFooter className="flex justify-between text-sm text-muted-foreground">
//             <div className="flex items-center">
//               <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
//               Income
//             </div>
//             <div className="flex items-center">
//               <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
//               Expense
//             </div>
//           </CardFooter>
//         </Link>
//       </Card>

//       {/* Edit Account Drawer */}
//       <CreateAccountDrawer
//         editMode
//         initialData={account}
//         open={editDrawerOpen}
//         onOpenChange={setEditDrawerOpen}
//         onSuccess={() => {
//           try {
//             refreshAccount();
//             console.log("Refresh called after edit success");
//           } catch (error) {
//             console.error("Error refreshing accounts after edit:", error);
//           }
//         }}
//       >
//         <button style={{ display: "none" }} aria-hidden="true" />
//       </CreateAccountDrawer>

//       {/* Delete Confirmation Dialog */}
//       <ConfirmationDialog
//         open={showDeleteConfirm}
//         onOpenChange={setShowDeleteConfirm}
//         title="Delete Account"
//         description={"Are you sure you want to delete ths account"}
//         confirmText="Yes, Delete"
//         cancelText="Cancel"
//         onConfirm={handleConfirmDelete}
//         onCancel={handleCancelDelete}
//         variant="destructive"
//         loading={deleteAccountLoading}
//       />
//     </>
//   );
// }


/////////////////////////

"use client";

import {
  ArrowUpRight,
  ArrowDownRight,
  UserPen,
  Trash2,
  Plus,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Switch } from "@/components/ui/switch";
import { CreateAccountDrawer } from "@/components/drawer/create-account-drawer";
import { ConfirmationDialog } from "@/components/dialogBox/confirmDialogBox"; // Import the new component
import useFetch from "@/hooks/use-fetch";
import useRefreshAccounts from "@/reduxStore/hook/useRefreshAccounts";
import {
  updateDefaultAccount,
  deleteAccount,
} from "@/actions/account";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AccountCard({ account }) {
  const { name, type, balance, id, isDefault } = account;
  const refreshAccount = useRefreshAccounts();
  const router = useRouter();

  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false); // New state for delete confirmation

  const {
    loading: updateDefaultLoading,
    fn: updateDefaultFn,
    data: updatedAccount,
    error,
  } = useFetch(updateDefaultAccount);

  const {
    loading: deleteAccountLoading,
    fn: deleteAccountFn,
    data: deletedAccount,
    error: deleteAccountError,
  } = useFetch(deleteAccount);

  const handleDefaultChange = async (event) => {
    event.preventDefault();
    if (isDefault) {
      toast.warning("You need at least 1 default account");
      return;
    }
    await updateDefaultFn(id);
  };

  // Modified: Show confirmation dialog instead of browser confirm
  const handleDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowDeleteConfirm(true);
  };

  // New: Handle actual deletion after confirmation
  const handleConfirmDelete = async () => {
    if (deleteAccountLoading) return;
    await deleteAccountFn(id);
    setShowDeleteConfirm(false);
  };

  // New: Handle cancel deletion
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  // New: Handle add transaction click
  const handleAddTransactionClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    router.push("/transaction/create");
  };

  useEffect(() => {
    if (updatedAccount?.success) {
      toast.success("Default account updated successfully");
      try {
        refreshAccount();
        console.log("Refresh called after default account update");
      } catch (error) {
        console.error("Error refreshing accounts:", error);
      }
    }
  }, [updatedAccount, refreshAccount]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update default account");
    }
  }, [error]);

  useEffect(() => {
    if (deletedAccount?.success) {
      toast.success("Account deleted successfully");
      try {
        refreshAccount();
        console.log("Refresh called after account deletion");
      } catch (error) {
        console.error("Error refreshing accounts:", error);
      }
    }
  }, [deletedAccount, refreshAccount]);

  useEffect(() => {
    if (deleteAccountError) {
      toast.error("Failed to delete account");
      console.error(deleteAccountError);
    }
  }, [deleteAccountError]);

  return (
    <>
      <Card className="hover:shadow-md transition-shadow group relative">
        <Link href={`/account/${id}`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium capitalize">
              {name}
            </CardTitle>
            <Switch
              checked={isDefault}
              onClick={handleDefaultChange}
              disabled={updateDefaultLoading}
            />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <div className="text-2xl font-bold">
                  ${parseFloat(balance).toFixed(2)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {type.charAt(0) + type.slice(1).toLowerCase()} Account
                </p>
              </div>

              <div className="flex flex-col items-end gap-2">
                {/* Edit Button */}
                <div
                  className="flex items-center group/edit"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setEditDrawerOpen(true);
                  }}
                  role="button"
                  aria-label="Edit account"
                >
                  <div className="relative flex items-center cursor-pointer">
                    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover/edit:opacity-70 transition-opacity rounded-sm z-0" />
                    <UserPen className="h-4 w-4 text-blue-500 group-hover/edit:text-white z-10" />
                    <span className="text-sm text-blue-500 ml-1 mr-1 group-hover/edit:text-white z-10">
                      Edit Account
                    </span>
                  </div>
                </div>

                {/* Add Transaction Button */}
                <div
                  className="flex items-center group/add"
                  onClick={handleAddTransactionClick}
                  role="button"
                  aria-label="Add transaction"
                >
                  <div className="relative flex items-center cursor-pointer">
                    <div className="absolute inset-0 bg-green-500 opacity-0 group-hover/add:opacity-70 transition-opacity rounded-sm z-0" />
                    <Plus className="h-4 w-4 text-green-500 group-hover/add:text-white z-10" />
                    <span className="text-sm text-green-500 ml-1 mr-1 group-hover/add:text-white z-10">
                      Add Transaction
                    </span>
                  </div>
                </div>

                {/* Delete Button - Modified to show confirmation dialog */}
                <div
                  className="flex items-center group/delete"
                  onClick={handleDeleteClick}
                  role="button"
                  aria-label="Delete account"
                >
                  <div className="relative flex items-center cursor-pointer">
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover/delete:opacity-70 transition-opacity rounded-sm z-0" />
                    <Trash2 className="h-4 w-4 text-red-500 group-hover/delete:text-white z-10" />
                    <span className="text-sm text-red-500 ml-1 mr-1 group-hover/delete:text-white z-10">
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              Income
            </div>
            <div className="flex items-center">
              <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
              Expense
            </div>
          </CardFooter>
        </Link>
      </Card>

      {/* Edit Account Drawer */}
      <CreateAccountDrawer
        editMode
        initialData={account}
        open={editDrawerOpen}
        onOpenChange={setEditDrawerOpen}
        onSuccess={() => {
          try {
            refreshAccount();
            console.log("Refresh called after edit success");
          } catch (error) {
            console.error("Error refreshing accounts after edit:", error);
          }
        }}
      >
        <button style={{ display: "none" }} aria-hidden="true" />
      </CreateAccountDrawer>

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        open={showDeleteConfirm}
        onOpenChange={setShowDeleteConfirm}
        title="Delete Account"
        description={"Are you sure you want to delete ths account"}
        confirmText="Yes, Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        variant="destructive"
        loading={deleteAccountLoading}
      />
    </>
  );
}