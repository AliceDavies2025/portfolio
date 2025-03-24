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
      
      <section className="pt-32 pb-20 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-light mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About Me
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mb-16 sm:mb-20 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            With a strong foundation in interior design and a deep understanding of UX/UI 
            principles, I bring a unique perspective to my work.

            I excel in client relations, project management, and creating functional, aesthetically 
            compelling spaces.
            Now in UX/UI design, I apply the same user-centered approach, critical thinking, and 
            problem-solving to digital experiences. I blend research skills with a keen eye for design 
            to craft intuitive and visually engaging interfaces.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-24">

            
            <motion.div 
              className="relative h-[350px] sm:h-[450px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image 
                src="/profile.png" 
                alt="Irene Kiarie" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </motion.div>
          </div>
            
          

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-light mb-6">Ready to collaborate?</h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's work together to create something exceptional, whether it's a physical space or a digital experience.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-black text-white px-8 sm:px-10 py-4 rounded-full hover:bg-gray-800 transition-colors text-xl"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
