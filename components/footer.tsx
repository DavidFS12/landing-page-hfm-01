export default function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">CONSTRUCTORA</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Especialistas en construcción residencial moderna con más de 15 años de experiencia en Arequipa.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.618.634-2.265 1.334A5.047 5.047 0 001.6 4.117c-.266.779-.337 1.81-.405 3.127C1.01 8.094 1 8.949 1 12s.015 3.906.072 5.181c.061 1.318.16 2.326.428 3.105.264.778.634 1.617 1.334 2.264.65.65 1.486 1.071 2.265 1.334.778.264 1.81.337 3.127.405 1.276.06 2.131.071 5.181.071s3.905-.015 5.182-.072c1.316-.061 2.324-.16 3.105-.428.778-.264 1.617-.634 2.264-1.334.65-.65 1.071-1.486 1.334-2.265.264-.778.337-1.81.405-3.127.06-1.276.071-2.131.071-5.181s-.015-3.906-.072-5.182c-.061-1.318-.16-2.324-.428-3.105A5.047 5.047 0 0022.883 1.6c-.778-.263-1.81-.337-3.127-.405C15.906 1.01 15.049 1 12 1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.735 0-9.563h3.554v1.346c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.574 4.251 4.963v4.827zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.926-1.715.155 0 .31 0 .465.049 1.144 0 1.915.762 1.915 1.715 0 .953-.77 1.715-1.926 1.715-.155 0-.31 0-.465-.049zm1.946 11.597H3.392V9.744h3.891v10.708zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.953 1.226l-.355.212-.368-.067c-1.264-.226-2.461-.696-3.467-1.413l-.42-.307-.43.127c-.163.049-.329.122-.495.214-.827.433-1.49 1.091-1.933 1.856-.158.28-.312.567-.456.859-.165.326-.32.657-.457.989-.344.782-.57 1.6-.657 2.422 0 .961.256 1.905.734 2.785.597 1.06 1.415 1.944 2.415 2.585 1.247.75 2.686 1.148 4.154 1.148.91 0 1.808-.147 2.68-.437.368-.126.728-.286 1.074-.474.295-.154.584-.326.863-.515l.327-.2.315.182c.306.176.614.347.92.509.934.482 1.89.788 2.846.899.96.11 1.91-.016 2.825-.368.565-.215 1.09-.52 1.56-.912.395-.338.768-.721 1.102-1.138.39-.503.716-1.057.964-1.648.16-.385.302-.781.422-1.183.277-.933.412-1.922.412-2.915 0-.776-.085-1.549-.253-2.31l-.114-.45.087-.035c.574-.231 1.101-.581 1.563-1.028.304-.292.576-.618.808-.968.138-.215.268-.44.387-.666.346-.646.533-1.37.533-2.115 0-1.025-.355-1.987-1.01-2.76-.466-.54-1.084-.945-1.77-1.186-.402-.14-.83-.215-1.264-.22zm5.904 5.71c.159.265.314.538.461.819.38.762.572 1.591.572 2.438 0 .847-.192 1.676-.572 2.438-.147.281-.302.554-.461.819-.278.436-.612.827-.994 1.166.35.022.703.01 1.056-.036 1.468-.178 2.85-.714 3.955-1.568.656-.515 1.221-1.147 1.681-1.87.298-.46.554-.946.757-1.457.252-.644.378-1.33.378-2.024 0-.694-.126-1.38-.378-2.024-.203-.511-.459-.997-.757-1.457-.46-.723-1.025-1.355-1.681-1.87-.648-.507-1.393-.885-2.197-1.12.164.29.318.592.459.903z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ejecución de Obras
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Acabados Premium
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Diseño Moderno
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Asesoría Integral
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-bold mb-6">Proyectos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#proyectos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Torres Cayma
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Yanahuara Premium
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sachaca Luxury
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ver todos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-primary-foreground/60 mb-1">Teléfono</p>
                <a href="tel:+51123456789" className="text-primary-foreground hover:underline">
                  +51 (1) 234-5678
                </a>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60 mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/51123456789"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-foreground hover:underline"
                >
                  +51 987-654-321
                </a>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60 mb-1">Email</p>
                <a href="mailto:info@constructora.com" className="text-primary-foreground hover:underline">
                  info@constructora.com
                </a>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60 mb-1">Ubicación</p>
                <p className="text-primary-foreground">Arequipa, Perú</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} CONSTRUCTORA AREQUIPA. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
