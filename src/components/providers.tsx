"use client";

import type { ReactNode } from "react";

import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <KindeProvider>{children}</KindeProvider>;
}
