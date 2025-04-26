import localFont from "next/font/local";
import "./globals.css";

const LineSeed = localFont({
  src: [
    {
      path: "../../public/LINESeedSansTH_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/LINESeedSansTH_W_Bd.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata = {
  title: "Portal | QWRTSDEV",
  description: "แหล่งรวมช่องทางและเนื้อหาที่น่าสนใจของ QWRTSDEV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
