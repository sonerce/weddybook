'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle2, Info, X, XCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from './button';

type ToastVariant = 'success' | 'error' | 'info';

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

type ToastInstance = ToastOptions & {
  id: string;
  createdAt: number;
};

interface ToastContextValue {
  toast: (options: ToastOptions) => void;
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | undefined>(
  undefined
);

const VARIANT_ICONS: Record<ToastVariant, React.ComponentType<{ className?: string }>> = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

const VARIANT_STYLES: Record<ToastVariant, string> = {
  success:
    'border-emerald-200/60 bg-emerald-50 text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-900/40 dark:text-emerald-100',
  error:
    'border-rose-200/60 bg-rose-50 text-rose-900 dark:border-rose-400/40 dark:bg-rose-900/40 dark:text-rose-100',
  info:
    'border-wedding-secondary-200/60 bg-white text-wedding-secondary-900 dark:border-slate-600 dark:bg-slate-900/60 dark:text-slate-100',
};

const DEFAULT_DURATION = 4200;

function ToastViewport({
  toasts,
  onDismiss,
}: {
  toasts: ToastInstance[];
  onDismiss: (id: string) => void;
}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (toasts.length === 0) {
      return;
    }

    const timers = toasts.map((toast) =>
      window.setTimeout(() => {
        onDismiss(toast.id);
      }, toast.duration ?? DEFAULT_DURATION)
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [toasts, onDismiss]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex flex-col items-center gap-3 px-4 pb-6 sm:items-end sm:px-6 sm:pb-8"
      role="log"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>,
    document.body
  );
}

function ToastItem({
  toast,
  onDismiss,
}: {
  toast: ToastInstance;
  onDismiss: (id: string) => void;
}) {
  const { id, title, description, variant = 'info' } = toast;
  const Icon = VARIANT_ICONS[variant];

  return (
    <div
      className={cn(
        'pointer-events-auto w-full max-w-sm origin-bottom animate-in slide-in-from-bottom-2 fade-in rounded-xl border shadow-lg transition-all focus-within:shadow-xl sm:max-w-md',
        VARIANT_STYLES[variant]
      )}
      role={variant === 'error' ? 'alert' : 'status'}
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
    >
      <div className="flex items-start gap-3 px-4 py-3">
        <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-current shadow-sm dark:bg-white/10">
          <Icon className="size-5" aria-hidden="true" />
          <span className="sr-only">{variant} notification</span>
        </span>
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold leading-none tracking-tight">
            {title}
          </p>
          {description ? (
            <p className="text-sm text-current/80">{description}</p>
          ) : null}
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="text-current/70 hover:text-current"
          onClick={() => onDismiss(id)}
          aria-label="Dismiss notification"
        >
          <X className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastInstance[]>([]);
  const idRef = React.useRef(0);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const toast = React.useCallback((options: ToastOptions) => {
    idRef.current += 1;
    const id = `toast-${idRef.current}`;

    setToasts((prev) => [
      ...prev,
      {
        id,
        createdAt: Date.now(),
        ...options,
      },
    ]);
  }, []);

  const value = React.useMemo(() => ({ toast, dismiss }), [toast, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
