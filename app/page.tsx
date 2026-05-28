"use client";

import { useState, useEffect } from 'react'
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from '@/components/services';
import Portafolio from '@/components/portafolio';
import Location from '@/components/location';
import WhatsAppButton from '@/components/whatsapp-button';

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="overflow-hidden">
      <Header scrolled={scrolled}/>
      <Hero />
      <Services />
      <Portafolio />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
