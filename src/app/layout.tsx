import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import Users from "@/components/users";
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
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center gap-14 p-24">
          <header className={"flex justify-between w-2/5"}>
            <h1 className={"text-4xl font-bold"}>My Very Awesome Blog Site!</h1>
            <div>
              <Users />
            </div>
          </header>
          <div className={"container flex p-24 border rounded-md"}>
            <div className={"w-64"}>
              <Suspense fallback={"loading.."}>
                <Navigation />
              </Suspense>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
