"use client";

import { ContactModalProvider } from "@/components/ContactModal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <ContactModalProvider>{children}</ContactModalProvider>;
}
