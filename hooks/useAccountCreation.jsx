// hooks/useAccountCreation.js
"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

export function useAccountCreation(accounts = []) {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [creationStartTime, setCreationStartTime] = useState(null);
  const previousAccountCountRef = useRef(accounts.length);
  const previousAccountIdsRef = useRef(new Set(accounts.map(acc => acc.id)));

  // Track account changes
  useEffect(() => {
    const currentAccountCount = accounts.length;
    const currentAccountIds = new Set(accounts.map(acc => acc.id));
    const previousAccountCount = previousAccountCountRef.current;
    const previousAccountIds = previousAccountIdsRef.current;

    // Check if we have new accounts
    const hasNewAccounts = currentAccountCount > previousAccountCount;
    
    // Check if we have genuinely new account IDs (not temp IDs)
    const newAccountIds = [...currentAccountIds].filter(id => 
      !previousAccountIds.has(id) && !String(id).startsWith('temp-')
    );
    
    if (isCreatingAccount && (hasNewAccounts || newAccountIds.length > 0)) {
      console.log('New real account detected, stopping creation state');
      setIsCreatingAccount(false);
      setCreationStartTime(null);
    }

    // Update refs
    previousAccountCountRef.current = currentAccountCount;
    previousAccountIdsRef.current = currentAccountIds;
  }, [accounts, isCreatingAccount]);

  // Fallback timeout to prevent stuck loading states
  useEffect(() => {
    if (isCreatingAccount && creationStartTime) {
      const timeout = setTimeout(() => {
        const timeElapsed = Date.now() - creationStartTime;
        if (timeElapsed > 10000) { // 10 seconds
          console.log('Fallback: Stopping account creation state after timeout');
          setIsCreatingAccount(false);
          setCreationStartTime(null);
        }
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [isCreatingAccount, creationStartTime]);

  const startAccountCreation = useCallback(() => {
    console.log('Starting account creation');
    setIsCreatingAccount(true);
    setCreationStartTime(Date.now());
  }, []);

  const stopAccountCreation = useCallback(() => {
    console.log('Manually stopping account creation');
    setIsCreatingAccount(false);
    setCreationStartTime(null);
  }, []);

  return {
    isCreatingAccount,
    startAccountCreation,
    stopAccountCreation
  };
}