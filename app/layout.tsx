import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Blog App",
  description: "Simple blog with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="max-w-2xl mx-auto p-4">
        <Navbar />
        <main className="mt-4">{children}</main>
      </body>
    </html>
  );
}
