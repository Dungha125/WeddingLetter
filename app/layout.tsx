import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THIỆP MỜI DUYÊN HỢP x BẢO LONG",
  description: "Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!",
  icons: {
    icon: "/SVG/logo.ico", // Đường dẫn favicon (Next.js tự động lấy từ /public)
  },
  openGraph: {
    title: "THIỆP MỜI DUYÊN HỢP x BẢO LONG",
    description: "Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!",
    url: "https://thiepmoi-hoplong.vercel.app/", // Đổi thành URL thực tế của bạn
    siteName: "Duyên Hợp x Bảo Long",
    images: [
      {
        url: "@/public/img/50x75 .JPG", // Ảnh preview khi chia sẻ link
        width: 1200,
        height: 630,
        alt: "Thiệp mời sự kiện Duyên Hợp x Bảo Long",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THIỆP MỜI DUYÊN HỢP x BẢO LONG",
    description: "Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!",
    images: ["@/public/img/50x75 .JPG"], // Ảnh preview trên Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
