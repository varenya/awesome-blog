import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/navigation";
import Users from "../components/users";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Server Components",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${inter.className}`}>
        <div className="flex p-4 bg-white mb-10">
          <div className="ml-auto">
            <Users />
          </div>
        </div>
        <main className="flex min-h-screen flex-col items-center gap-14">
          <header className={"text-center"}>
            <h1 className={"text-4xl font-bold font-nunito"}>
              My Very Awesome Blog Site!
            </h1>
          </header>
          <div className={"container grid grid-cols-3 gap-8"}>
            <div className="px-12 py-8 bg-white cols-span-1">
              <Suspense fallback={"loading.."}>
                <Navigation />
              </Suspense>
            </div>
            <div className="px-12 py-8 rounded-lg shadow-lg bg-white col-span-2">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}