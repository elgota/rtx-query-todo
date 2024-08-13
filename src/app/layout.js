"use client"

import { Inter } from "next/font/google";
import "./globals.css";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/apiSlice";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <ApiProvider api={apiSlice}>

      <body className={inter.className}>
        {children}
      </body>
      </ApiProvider>
    </html>
  );
}
