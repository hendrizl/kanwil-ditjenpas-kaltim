import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/PageLoader";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense fallback={null}>
        <PageLoader />
      </Suspense>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
