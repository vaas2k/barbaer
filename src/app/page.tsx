'use client'
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        <Hero />
        <Gallery />
        <div id="contact" className="py-12 md:py-16">
          <Contact />
        </div>
      </main>

    </div>
  );
}