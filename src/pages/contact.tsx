import { useState } from "react";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation, Footer } from "../components";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState("contact");
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    try {
      // Using FormSubmit.co service
      const response = await fetch("https://formsubmit.co/irene.kiarie4@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.project,
          _subject: "New Design Inquiry from Website",
          _template: "table"
        })
      });
      
      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: "", email: "", project: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form error:", error);
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <div className={`min-h-screen ${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        <title>Contact | Irene Kiarie Interior Design</title>
        <meta name="description" content="Get in touch to discuss your interior design project" />
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
            Let's Create Something<br />Exceptional Together
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-2xl sm:text-3xl text-gray-600 mb-10 leading-relaxed">
                I'm always interested in discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-8 mb-10">
                <div>
                  <h2 className="text-3xl mb-4 font-light">Email</h2>
                  <a 
                    href="mailto:irene.kiarie4@gmail.com" 
                    className="text-2xl text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    irene.kiarie4@gmail.com
                  </a>
                </div>
                
                <div>
                  <h2 className="text-3xl mb-4 font-light">Phone</h2>
                  <a 
                    href="tel:+4917672973037" 
                    className="text-2xl text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    +49 176 7297 3037
                  </a>
                </div>
                
                <div>
                  <h2 className="text-3xl mb-4 font-light">Follow</h2>
                  <div className="flex gap-6">
                    <a href="https://www.linkedin.com/in/irene-wanjiku-kiarie-13ab2b332/" className="text-xl hover:text-amber-600 transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {formStatus.submitted ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-3xl font-light text-green-800 mb-4">Thank You!</h3>
                  <p className="text-xl text-green-700">
                    Your message has been sent successfully. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-2xl mb-3">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-2xl mb-3">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="project" className="block text-2xl mb-3">Project Details</label>
                    <textarea 
                      id="project" 
                      rows={6}
                      required
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full p-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                    ></textarea>
                  </div>
                  
                  {formStatus.error && (
                    <div className="text-red-600 text-xl">
                      There was a problem sending your message. Please try again.
                    </div>
                  )}
                  
                  <motion.button 
                    type="submit" 
                    disabled={formStatus.submitting}
                    className={`
                      bg-black text-white text-xl px-10 py-4 rounded-full 
                      transition-colors ${formStatus.submitting ? 'bg-gray-500' : 'hover:bg-gray-800'}
                    `}
                    whileHover={{ scale: formStatus.submitting ? 1 : 1.05 }}
                    whileTap={{ scale: formStatus.submitting ? 1 : 0.95 }}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}