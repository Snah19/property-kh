import { poppins } from "@/fonts";
import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: {
    template: "%s | Property KH",
    default: "Property KH"
  },
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <header className="z-50 sticky top-0 border-b border-blue-500 bg-blue-700">
          <Header />
        </header>
        <main>
          {children}
        </main>
        <footer>

        </footer>
      </body>
    </html>
  );
}
