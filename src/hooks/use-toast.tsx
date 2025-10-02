import * as React from "react"

type Toast = {
  title: string;
  description: string;
};

type ToastContextType = {
  toast: (props: Toast) => void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toast = (props: Toast) => {
    // In a real app, you would have a toast implementation here.
    // For now, we'll just log to the console.
    console.log("Toast:", props.title, props.description);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
    </ToastContext.Provider>
  );
}
