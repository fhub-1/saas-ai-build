import type { Metadata } from "next";
 import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Provider } from "@/components/provider";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Montserrat({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: "JK | SaaS AI",
  description: "my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body
      className={cn(
        'flex min-h-screen flex-col font-sans antialiased',
        inter.variable,
        playfair.variable
      )}
      >
        <Provider>
          <main className="grow">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
