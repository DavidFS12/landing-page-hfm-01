"use client";

import { useState } from 'react'

interface HeaderProps {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className={`text-2xl font-bold transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
          CONSTRUCTORA
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center gap-8 ${scrolled ? 'text-foreground' : 'text-white'}`}>
          <button
            onClick={() => scrollToSection('servicios')}
            className="hover:opacity-70 transition-opacity font-medium"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('proyectos')}
            className="hover:opacity-70 transition-opacity font-medium"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection('ubicacion')}
            className="hover:opacity-70 transition-opacity font-medium"
          >
            Ubicación
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="hover:opacity-70 transition-opacity font-medium"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${scrolled ? 'text-primary' : 'text-white'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left font-medium text-foreground hover:text-primary"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="block w-full text-left font-medium text-foreground hover:text-primary"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('ubicacion')}
              className="block w-full text-left font-medium text-foreground hover:text-primary"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left font-medium text-foreground hover:text-primary"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
