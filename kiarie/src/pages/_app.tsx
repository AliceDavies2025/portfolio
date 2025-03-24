import type { AppProps } from 'next/app';
import { AnimatedLayout } from '../components';
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <AnimatedLayout>
        <Component {...pageProps} />
      </AnimatedLayout>
    </div>
  );
}

export default MyApp;
