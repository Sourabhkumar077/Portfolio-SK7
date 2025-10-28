"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Toast = {
  title: string;
  description?: string;
};

type ToastContextType = {
  toast: (toast: Toast) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (toast: Toast) => {
    setToasts((prev) => [...prev, toast]);
    // For simplicity, just log the toast. You can extend this to show UI notifications.
    console.log("Toast:", toast.title, toast.description);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* You can add toast UI components here */}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
