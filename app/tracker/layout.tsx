import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Tracker",
};

export default function TrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
