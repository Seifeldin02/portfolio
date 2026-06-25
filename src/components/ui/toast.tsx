'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType>({
  toast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, type: ToastType = 'info') => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-[100] flex max-w-sm flex-col gap-2 sm:left-auto sm:right-4"
        aria-live="polite"
        aria-atomic="true"
      >
        {toasts.map((t) => {
          const Icon = icons[t.type];
          return (
            <div
              key={t.id}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border backdrop-blur-sm',
                t.type === 'success' &&
                  'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200',
                t.type === 'error' &&
                  'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200',
                t.type === 'info' &&
                  'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'
              )}
            >
              <Icon size={18} className="shrink-0" />
              <p className="text-sm flex-1">{t.message}</p>
              <button
                onClick={() => dismiss(t.id)}
                className="inline-flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-md opacity-60 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label="Dismiss notification"
              >
                <X size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
