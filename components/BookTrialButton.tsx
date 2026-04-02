"use client";

import { useContactModal } from "@/components/ContactModal";

interface BookTrialButtonProps {
  program?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BookTrialButton({ program, className, children }: BookTrialButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button
      onClick={() => openModal(program)}
      className={className}
    >
      {children || "Book a FREE First Lesson"}
    </button>
  );
}
