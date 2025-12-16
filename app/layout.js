// CSS
import "./globals.css";

// Fonts
import { Lexend } from "next/font/google"
const lexend = Lexend({ subsets: ['latin']})

// Components
import MetaMaskProvider from "./components/Providers/MetaMaskProvider";
import StoreProvider from "./components/Providers/StoreProvider";
import TopNav from "./components/TopNav"

export const metadata = {
  title: "DAPP Exchange",
  description: "Your favorite peer to peer orderbook exchange",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <MetaMaskProvider>
        <html lang="en">
          <body className={`${lexend.className}`}>
            <main className="content">
              <TopNav />
              {children}
            </main>
          </body>
        </html>
      </MetaMaskProvider>
    </StoreProvider>
  );
}
