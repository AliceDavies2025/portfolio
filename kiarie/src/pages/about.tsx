import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation, Footer } from "../components";
import { motion } from "framer-motion";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <title>About Me | Irene Kiarie Portfolio</title>
        <meta name="description" content="Learn about Irene Kiarie's background in interior design and UX/UI" />
      </Head>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section className="min-h-screen pt-32 pb-20 px-5 sm:px-8 md:px-16 lg:px-24 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image Section */}
            <motion.div 
              className="relative h-[70vh] lg:h-[85vh] overflow-hidden order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image 
                src="/profile.png" 
                alt="Irene Kiarie" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className="space-y-8 lg:space-y-12 order-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h1 
                className="text-6xl sm:text-7xl lg:text-8xl font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                About Me
              </motion.h1>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <p className="text-2xl sm:text-3xl text-gray-600 leading-relaxed">
                  With a strong foundation in interior design and a deep understanding of UX/UI 
                  principles, I bring a unique perspective to my work.
                </p>
                
                <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed">
                  I excel in client relations, project management, and creating functional, aesthetically 
                  compelling spaces.
                </p>

                <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed">
                  My background bridges the physical and digital design worlds, allowing me to create 
                  holistic experiences that consider both aesthetic appeal and functional needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link 
                  href="/contact"
                  className="inline-block bg-black text-white px-8 py-4 text-lg rounded-full hover:bg-gray-800 transition-colors"
                >
                  Let's Work Together
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
