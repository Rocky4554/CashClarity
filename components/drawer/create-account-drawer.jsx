"use client";

import { useState, useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { createAccount, EditAccount } from "@/actions/dashboard";
import { accountSchema } from "@/app/lib/schema";
import { useRouter } from "next/navigation";
import useRefreshAccounts from "@/reduxStore/hook/useRefreshAccounts";

export function CreateAccountDrawer({
  children,
  editMode = false,
  initialData = null,
  open,
  onOpenChange,
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const refreshAccount = useRefreshAccounts(); // redux to refresh user data

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      type: "CURRENT",
      balance: "",
      isDefault: false,
    },
  });

  const {
    loading: createLoading,
    fn: createFn,
    error: createError,
    data: created,
  } = useFetch(createAccount);

  const {
    loading: updateLoading,
    fn: updateFn,
    error: updateError,
    data: updated,
  } = useFetch(EditAccount);

  // Fill form when editing
  useEffect(() => {
    if (!initialData) return;
    setValue("name", initialData.name || "");
    setValue("type", initialData.type || "CURRENT");
    setValue("balance", initialData.balance?.toString() || "");
    setValue("isDefault", initialData.isDefault || false);
  }, [initialData, setValue]);

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      balance: parseFloat(data.balance),
    };

    if (isNaN(payload.balance)) {
      toast.error("Invalid balance amount");
      return;
    }

    if (editMode && initialData?.id) {
      await updateFn({ id: initialData.id, ...payload });
    } else {
      await createFn(payload);
    }
  };

  // Handle success for both create & update
  useEffect(() => {
    if (created?.success || updated?.success) {
      toast.success(
        created ? "Account created successfully" : "Account updated successfully"
      );
      reset();
      onOpenChange?.(false);
      refreshAccount();
    }
  }, [created, updated, reset, onOpenChange, refreshAccount]);

  // Handle errors
  useEffect(() => {
    if (createError || updateError) {
      toast.error(
        createError?.message ||
          updateError?.message ||
          "Failed to process account"
      );
    }
  }, [createError, updateError]);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {editMode ? "Edit Account" : "Create New Account"}
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Account Name
              </label>
              <Input
                id="name"
                placeholder="e.g., Main Checking"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="type" className="text-sm font-medium">
                Account Type
              </label>
              <Select
                onValueChange={(value) => setValue("type", value)}
                value={watch("type")}
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CURRENT">Current</SelectItem>
                  <SelectItem value="SAVINGS">Savings</SelectItem>
                </SelectContent>
              </Select>
              {errors.type && (
                <p className="text-sm text-red-500">{errors.type.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="balance" className="text-sm font-medium">
                Initial Balance
              </label>
              <Input
                id="balance"
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register("balance")}
              />
              {errors.balance && (
                <p className="text-sm text-red-500">{errors.balance.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="space-y-0.5">
                <label htmlFor="isDefault" className="text-base font-medium">
                  Set as Default
                </label>
                <p className="text-sm text-muted-foreground">
                  This account will be selected by default for transactions
                </p>
              </div>
              <Switch
                id="isDefault"
                checked={watch("isDefault")}
                onCheckedChange={(checked) => setValue("isDefault", checked)}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <DrawerClose asChild>
                <Button type="button" variant="outline" className="flex-1">
                  Cancel
                </Button>
              </DrawerClose>
              <Button
                type="submit"
                className="flex-1"
                disabled={createLoading || updateLoading}
              >
                {createLoading || updateLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {editMode ? "Updating..." : "Creating..."}
                  </>
                ) : editMode ? (
                  "Update Account"
                ) : (
                  "Create Account"
                )}
              </Button>
            </div>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
