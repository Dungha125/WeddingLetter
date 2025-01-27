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
  title: "THIỆP MỜI DUYÊN HỢP x CHÍ LONG",
  description: "Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!",
  icons: {
    icon: "/SVG/logo.ico", // Đường dẫn favicon (Next.js tự động lấy từ /public)
  },
  openGraph: {
    title: "THIỆP MỜI DUYÊN HỢP x CHÍ LONG",
    description: "Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!",
    url: "https://thiepmoi-hoplong.vercel.app", // Đổi thành URL thực tế của bạn
    siteName: "Duyên Hợp x Chí Long",
    images: [
      {
        url: "https://www.google.com.vn/search?q=%E1%BA%A3nh&udm=2#vhid=deUcfIoz_OweRM&vssid=mosaic", // Ảnh preview khi chia sẻ link
        width: 1200,
        height: 630,
        alt: "Thiệp mời sự kiện Duyên Hợp x Chí Long",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THIỆP MỜI DUYÊN HỢP x CHÍ LONG",
    description: "Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!",
    images: ["https://www.google.com.vn/search?q=%E1%BA%A3nh&udm=2#vhid=deUcfIoz_OweRM&vssid=mosaic"], // Ảnh preview trên Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi"> {/* Đặt ngôn ngữ Tiếng Việt */}
      <head>
        {/* Meta tags bổ sung để hỗ trợ Messenger và Zalo */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="THIỆP MỜI DUYÊN HỢP x CHÍ LONG" />
        <meta property="og:description" content="Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!" />
        <meta property="og:image" content="https://www.google.com.vn/search?q=%E1%BA%A3nh&udm=2#vhid=deUcfIoz_OweRM&vssid=mosaic" />
        <meta property="og:url" content="https://thiepmoi-hoplong.vercel.app/" />
        <meta property="og:image:secure_url" content="https://thiepmoi-hoplong.vercel.app/SVG/preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Duyên Hợp x Chí Long" />
        <meta property="og:image:alt" content="Thiệp mời sự kiện Duyên Hợp x Chí Long" /> {/* Đảm bảo có mô tả hình ảnh */}
        
        {/* Thẻ Meta Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="THIỆP MỜI DUYÊN HỢP x CHÍ LONG" />
        <meta name="twitter:description" content="Hãy tham gia cùng chúng tôi trong sự kiện đặc biệt này!" />
        <meta name="twitter:image" content="https://www.google.com.vn/search?q=%E1%BA%A3nh&udm=2#vhid=deUcfIoz_OweRM&vssid=mosaic" /> {/* Fixed image URL */}

        {/* Thêm thẻ Meta cho các nền tảng khác nếu cần */}
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Đảm bảo tính tương thích di động */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
