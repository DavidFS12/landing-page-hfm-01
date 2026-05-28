import { Card } from '@/components/ui/card'

const locations = [
  { name: 'Cayma', desc: 'Zona residencial premium con vista a la ciudad' },
  { name: 'Yanahuara', desc: 'Área de desarrollo moderno y seguridad garantizada' },
  { name: 'Sachaca', desc: 'Ubicación estratégica con fácil acceso vial' },
  { name: 'Selina', desc: 'Zona en expansión con oportunidades de inversión' },
]

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ubicación y Confianza
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Presente en las mejores zonas de Arequipa con proyectos de calidad reconocida
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="p-6 bg-white border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{location.name}</h3>
              <p className="text-muted-foreground">{location.desc}</p>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Nuestras Ubicaciones en Arequipa</h3>
          <div className="rounded-2xl overflow-hidden h-96 bg-muted border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.3906949626577!2d-71.53701!3d-16.404699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424aa0e6ceec6d%3A0x1234567890!2sArequipa%2C%20Peru!5e0!3m2!1ses!2spe!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-white rounded-2xl p-12 border border-border">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Por qué confiar en nosotros
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⭐',
                title: '15+ años de experiencia',
                desc: 'Trayectoria probada en construcción residencial de calidad',
              },
              {
                icon: '🏆',
                title: 'Proyectos premiados',
                desc: 'Reconocimientos en arquitectura y construcción sustentable',
              },
              {
                icon: '👥',
                title: '500+ familias satisfechas',
                desc: 'Clientes que confían en nuestra calidad y profesionalismo',
              },
              {
                icon: '✓',
                title: 'Certificaciones internacionales',
                desc: 'Cumplimiento de normas ISO y estándares internacionales',
              },
              {
                icon: '🔒',
                title: 'Garantía de construcción',
                desc: 'Garantía estructural de hasta 10 años en nuestros proyectos',
              },
              {
                icon: '💼',
                title: 'Equipo profesional',
                desc: 'Ingenieros y arquitectos especializados con vasta experiencia',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
