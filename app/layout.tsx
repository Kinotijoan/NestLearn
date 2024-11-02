import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";


const poppinsFont = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});


export const metadata: Metadata = {
  title: "NestLearn",
  description: "NestLearn brings learning to life with endless stories, interactive lessons, and a world of resources for every young mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>

  );
}
