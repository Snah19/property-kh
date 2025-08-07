import { poppins } from "@/fonts";
import "./globals.css";
import 'photoswipe/dist/photoswipe.css';
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextAuthProvider from "@/components/next-auth-provider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { NotificationProvider } from "@/contexts/notification-context";

export const metadata = {
  title: {
    template: "Property KH | %s",
    default: "Property KH"
  },
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property'
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <NotificationProvider>
        <html lang="en">
          <body className={`${poppins.className} flex flex-col min-h-screen`}>
            <header className="z-50 sticky top-0 border-b border-blue-500 bg-blue-700">
              <Header />
            </header>
            <main className="flex-1">
              {children}
            </main>
            <footer className="py-4 bg-gray-200">
              <Footer />
            </footer>
            <ToastContainer />
          </body>
        </html>
      </NotificationProvider>
    </NextAuthProvider>
  );
}
