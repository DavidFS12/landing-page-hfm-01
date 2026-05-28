'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const projects = [
  {
    id: 1,
    name: 'Torres Cayma Elegancia',
    location: 'Cayma, Arequipa',
    image: '/project-1.png',
    year: '2023',
    specs: '48 departamentos, 15 pisos',
  },
  {
    id: 2,
    name: 'Residencial Yanahuara Premium',
    location: 'Yanahuara, Arequipa',
    image: '/project-2.png',
    year: '2022',
    specs: '36 departamentos, 12 pisos',
  },
  {
    id: 3,
    name: 'Departamentos Sachaca Luxury',
    location: 'Sachaca, Arequipa',
    image: '/project-3.png',
    year: '2023',
    specs: '24 departamentos, 8 pisos',
  },
  {
    id: 4,
    name: 'Torres Cayma Elegancia',
    location: 'Cayma, Arequipa',
    image: '/project-1.png',
    year: '2023',
    specs: '48 departamentos, 15 pisos',
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros más emblemáticos edificios residenciales en las mejores zonas de Arequipa
          </p>
        </div>

        {/* Carousel */}
        <div className="mb-16">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-muted">
            <Image
              src={projects[currentSlide].image}
              alt={projects[currentSlide].name}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">{projects[currentSlide].name}</h3>
              <p className="text-gray-200 mb-4">{projects[currentSlide].location}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Galería de Proyectos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative h-72 rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <h4 className="mt-4 font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h4>
                <p className="text-sm text-muted-foreground">{project.location}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 border-t border-border">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Interesado en más detalles de algún proyecto?
          </p>
          <Button
            onClick={() => {
              window.open(
                'https://wa.me/51123456789?text=Hola%2C%20me%20gustaría%20información%20sobre%20sus%20proyectos',
                '_blank'
              )
            }}
            className="bg-accent hover:bg-accent/90 text-foreground px-8 py-6 text-lg font-semibold rounded-lg"
          >
            Consultar por WhatsApp
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Ubicación</p>
                  <p className="font-semibold text-foreground">{selectedProject.location}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Año</p>
                  <p className="font-semibold text-foreground">{selectedProject.year}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Especificaciones</p>
                  <p className="font-semibold text-foreground text-sm">{selectedProject.specs}</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Características</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Acabados de lujo con materiales premium</li>
                  <li>✓ Sistemas de seguridad avanzados</li>
                  <li>✓ Áreas comunes modernas</li>
                  <li>✓ Estacionamientos subterráneos</li>
                  <li>✓ Certificación de calidad estructural</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
