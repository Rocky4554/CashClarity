"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";
import UpgradeModal from "../../upgradePro/components/upgradeModal";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CreateAccountDrawer } from "@/components/drawer/create-account-drawer";
import { cn } from "@/lib/utils";
import { createTransaction, updateTransaction } from "@/actions/transaction";
import { transactionSchema } from "@/app/lib/schema";
import { ReceiptScanner } from "./recipt-scanner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { updateActualCount } from "@/reduxStore/userSlice";
import { ProFeatureDialog } from "@/components/dialogBox/proDialogBox/pro-feature-dialog"; // Import the new component
import { ProFeatureWrapper } from "@/components/dialogBox/proDialogBox/pro-feature-wrapper"; // Import the wrapper component

export function AddTransactionForm({
  accounts,
  categories,
  editMode = false,
  initialData = null,
  user,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");

  const [mounted, setMounted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showProFeatureDialog, setShowProFeatureDialog] = useState(false); // New state for pro feature dialog
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const actualCount = useSelector((state) => state.user.actualCount);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getDefaultDate = () => {
    if (editMode && initialData) {
      return new Date(initialData.date);
    }
    return new Date(new Date().toDateString());
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    reset,
  } = useForm({
    resolver: zodResolver(transactionSchema),
    defaultValues:
      editMode && initialData
        ? {
            type: initialData.type,
            amount: initialData.amount.toString(),
            description: initialData.description,
            accountId: initialData.accountId,
            category: initialData.category,
            date: new Date(initialData.date),
            isRecurring: initialData.isRecurring,
            ...(initialData.recurringInterval && {
              recurringInterval: initialData.recurringInterval,
            }),
          }
        : {
            type: "EXPENSE",
            amount: "",
            description: "",
            accountId: accounts.find((ac) => ac.isDefault)?.id,
            date: getDefaultDate(),
            isRecurring: false,
          },
  });

  const {
    loading: transactionLoading,
    fn: transactionFn,
    data: transactionResult,
  } = useFetch(editMode ? updateTransaction : createTransaction);

  const checkLimitBeforeSubmission = () => {
    // Check limit immediately before form submission for new transactions
    if (!editMode && !user?.isPro && actualCount >= 5) {
      setShowModal(true);
      toast.error("You've reached your free plan limit of 5 transactions. Please upgrade to Pro.");
      return false; // Prevent submission
    }
    return true; // Allow submission
  };

  const onSubmit = (data) => {
    // Prevent double submission
    if (isSubmitting) {
      return;
    }

    // Check limit before processing for new transactions
    if (!checkLimitBeforeSubmission()) {
      return;
    }

    setIsSubmitting(true);

    const formData = {
      ...data,
      amount: parseFloat(data.amount),
    };

    if (editMode) {
      transactionFn(editId, formData);
    } else {
      transactionFn(formData);
    }
  };

  const handleScanComplete = (scannedData) => {
    if (scannedData) {
      setValue("amount", scannedData.amount.toString());
      setValue("date", new Date(scannedData.date));
      if (scannedData.description) {
        setValue("description", scannedData.description);
      }
      if (scannedData.category) {
        setValue("category", scannedData.category);
      }
      toast.success("Receipt scanned successfully");
    }
  };

  console.log('data', transactionResult);

  useEffect(() => {
    if (transactionResult?.success && !transactionLoading) {
      toast.success(
        editMode
          ? "Transaction updated successfully"
          : "Transaction created successfully"
      );

      // Update the Redux store with the new actualCount
      if (transactionResult.actualCount !== undefined) {
        dispatch(updateActualCount(transactionResult.actualCount));
        console.log("Updated actual count in store:", transactionResult.actualCount);
      }

      if (!editMode) {
        reset();
        // Check if user can still add more transactions
        const newCount = transactionResult.actualCount || actualCount + 1;
        if (user?.isPro || newCount < 5) {
          setShowConfirm(true);
        } else {
          // If they've reached the limit after this transaction, show upgrade modal
          setShowModal(true);
          toast.info("You've now reached your free plan limit. Upgrade to Pro to add more transactions.");
        }
      } else {
        router.push(`/account/${transactionResult.data.accountId}`);
      }

      setIsSubmitting(false);
    } else if (transactionResult?.error) {
      // Handle error case
      toast.error(transactionResult.error || "Failed to process transaction");
      setIsSubmitting(false);
    }
  }, [transactionResult, transactionLoading, editMode, user, actualCount, reset, router, dispatch]);

  // Reset submitting state if transaction loading changes
  useEffect(() => {
    if (!transactionLoading && isSubmitting) {
      setIsSubmitting(false);
    }
  }, [transactionLoading, isSubmitting]);

  const type = watch("type");
  const isRecurring = watch("isRecurring");
  const date = watch("date");

  const filteredCategories = categories.filter(
    (category) => category.type === type
  );

  const hasReachedLimit = mounted && !user?.isPro && actualCount >= 5;

  if (!mounted) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {hasReachedLimit && (
        <>
          <div 
            className="p-3 bg-red-50 border border-red-200 rounded-md cursor-pointer hover:bg-red-100 transition-colors"
            onClick={() => setShowModal(true)}
          >
            <p className="text-sm text-red-600">
              You've reached your free plan limit of 5 transactions ({actualCount} used).{" "}
              <span className="font-medium underline">Click here to upgrade to Pro.</span>
            </p>
          </div>
          <UpgradeModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title="Upgrade to Pro"
            description="You have reached the limit of 5 transactions on the free plan. Upgrade to Pro to add more transactions"
          />
        </>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {!editMode && (
          <ProFeatureWrapper
            isProUser={user?.isPro}
            onProRequired={() => setShowProFeatureDialog(true)}
          >
            <ReceiptScanner onScanComplete={handleScanComplete} />
          </ProFeatureWrapper>
        )}

        {/* Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Type</label>
          <Select
            onValueChange={(value) => setValue("type", value)}
            defaultValue={type}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EXPENSE">Expense</SelectItem>
              <SelectItem value="INCOME">Income</SelectItem>
            </SelectContent>
          </Select>
          {errors.type && (
            <p className="text-sm text-red-500">{errors.type.message}</p>
          )}
        </div>

        {/* Amount and Account */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount</label>
            <Input
              type="number"
              step="0.01"
              placeholder="0.00"
              {...register("amount")}
            />
            {errors.amount && (
              <p className="text-sm text-red-500">{errors.amount.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Account</label>
            <Select
              onValueChange={(value) => setValue("accountId", value)}
              defaultValue={getValues("accountId")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                {accounts.map((account) => (
                  <SelectItem key={account.id} value={account.id}>
                    {account.name} (${parseFloat(account.balance).toFixed(2)})
                  </SelectItem>
                ))}
                <CreateAccountDrawer>
                  <Button
                    variant="ghost"
                    className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  >
                    Create Account
                  </Button>
                </CreateAccountDrawer>
              </SelectContent>
            </Select>
            {errors.accountId && (
              <p className="text-sm text-red-500">{errors.accountId.message}</p>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <Select
            onValueChange={(value) => setValue("category", value)}
            defaultValue={getValues("category")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {filteredCategories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.category && (
            <p className="text-sm text-red-500">{errors.category.message}</p>
          )}
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full pl-3 text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "PPP") : <span>Pick a date</span>}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => setValue("date", date)}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.date && (
            <p className="text-sm text-red-500">{errors.date.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Description</label>
          <Input placeholder="Enter description" {...register("description")} />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Recurring */}
        <div className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <label className="text-base font-medium">Recurring Transaction</label>
            <div className="text-sm text-muted-foreground">
              Set up a recurring schedule for this transaction
            </div>
          </div>
          <Switch
            checked={isRecurring}
            onCheckedChange={(checked) => setValue("isRecurring", checked)}
          />
        </div>

        {/* Recurring Interval */}
        {isRecurring && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Recurring Interval</label>
            <Select
              onValueChange={(value) => setValue("recurringInterval", value)}
              defaultValue={getValues("recurringInterval")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select interval" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DAILY">Daily</SelectItem>
                <SelectItem value="WEEKLY">Weekly</SelectItem>
                <SelectItem value="MONTHLY">Monthly</SelectItem>
                <SelectItem value="YEARLY">Yearly</SelectItem>
              </SelectContent>
            </Select>
            {errors.recurringInterval && (
              <p className="text-sm text-red-500">
                {errors.recurringInterval.message}
              </p>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            className="w-full"
            disabled={transactionLoading || isSubmitting}
          >
            {transactionLoading || isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {editMode ? "Updating..." : "Creating..."}
              </>
            ) : editMode ? (
              "Update Transaction"
            ) : (
              "Create Transaction"
            )}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </div>
      </form>

      {/* Pro Feature Dialog for Receipt Scanner */}
      <ProFeatureDialog
        isOpen={showProFeatureDialog}
        onClose={() => setShowProFeatureDialog(false)}
        title="🤖 AI Receipt Scanner"
        description="Scan receipts with AI and automatically extract transaction details. This premium feature is available for Pro members only."
        feature="AI receipt scanning"
        redirectTo="/upgradePro" 
      />

      {/* Upgrade Modal - Always available to be triggered */}
      <UpgradeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Upgrade to Pro"
        description="You have reached the limit of 5 transactions on the free plan. Upgrade to Pro to add more transactions"
      />

      {mounted && showConfirm && (
        <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Transaction Added!</DialogTitle>
            </DialogHeader>
            <p>Do you want to go to your dashboard or add more transactions?</p>
            <DialogFooter className="pt-4">
              <Button
                variant="outline"
                onClick={() => router.push("/dashboard")}
              >
                Go to Dashboard
              </Button>
              <Button onClick={() => setShowConfirm(false)}>Add More</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}