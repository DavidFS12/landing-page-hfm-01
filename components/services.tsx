import { Card } from '@/components/ui/card'

const services = [
  {
    icon: '🏗️',
    title: 'Ejecución de Obras',
    description: 'Construcción de edificios residenciales modernos con tecnología de punta y supervisión permanente',
  },
  {
    icon: '✨',
    title: 'Acabados Premium',
    description: 'Acabados de lujo con materiales importados y mano de obra especializada en cada detalle',
  },
  {
    icon: '🏢',
    title: 'Seguridad Estructural',
    description: 'Diseños sísmicos certificados y estructuras garantizadas para máxima estabilidad',
  },
  {
    icon: '📐',
    title: 'Diseño Moderno',
    description: 'Espacios arquitectónicos contemporáneos que maximizan la funcionalidad y estética',
  },
  {
    icon: '⏱️',
    title: 'Entrega a Tiempo',
    description: 'Proyectos ejecutados dentro de cronogramas establecidos con máxima profesionalidad',
  },
  {
    icon: '🤝',
    title: 'Asesoría Integral',
    description: 'Acompañamiento completo desde el diseño hasta la entrega final del proyecto',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones completas en construcción residencial con enfoque en calidad, seguridad y satisfacción del cliente
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <Card className="h-full p-8 bg-white border border-border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 pt-20 border-t border-border">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Proceso Constructivo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '01', label: 'Diseño y Planificación', desc: 'Análisis detallado del proyecto' },
              { number: '02', label: 'Preparación del Sitio', desc: 'Acondicionamiento del terreno' },
              { number: '03', label: 'Construcción', desc: 'Ejecución con supervisión técnica' },
              { number: '04', label: 'Entrega Final', desc: 'Inspección y entrega de obra' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-3 opacity-20">
                  {step.number}
                </div>
                <h4 className="font-bold text-foreground mb-2">{step.label}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
