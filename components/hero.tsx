"use client";

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/51123456789?text=Hola%2C%20me%20gustaría%20cotizar%20un%20proyecto%20residencial',
      '_blank'
    )
  }

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      {/* Background Image */}
      <Image
        src="/hero-building.png"
        alt="Edificio moderno en construcción"
        fill
        className="object-cover"
        priority
        quality={75}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance leading-tight">
            Construimos el futuro
            <br />
            <span className="text-accent">residencial de Arequipa</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 text-pretty max-w-2xl mx-auto">
            Especialistas en edificación de departamentos y edificios modernos con acabados premium
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              className="bg-accent hover:bg-accent/90 text-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.953 1.226l-.355.212-.368-.067c-1.264-.226-2.461-.696-3.467-1.413l-.42-.307-.43.127c-.163.049-.329.122-.495.214-.827.433-1.49 1.091-1.933 1.856-.158.28-.312.567-.456.859-.165.326-.32.657-.457.989-.344.782-.57 1.6-.657 2.422 0 .961.256 1.905.734 2.785.597 1.06 1.415 1.944 2.415 2.585 1.247.75 2.686 1.148 4.154 1.148.91 0 1.808-.147 2.68-.437.368-.126.728-.286 1.074-.474.295-.154.584-.326.863-.515l.327-.2.315.182c.306.176.614.347.92.509.934.482 1.89.788 2.846.899.96.11 1.91-.016 2.825-.368.565-.215 1.09-.52 1.56-.912.395-.338.768-.721 1.102-1.138.39-.503.716-1.057.964-1.648.16-.385.302-.781.422-1.183.277-.933.412-1.922.412-2.915 0-.776-.085-1.549-.253-2.31l-.114-.45.087-.035c.574-.231 1.101-.581 1.563-1.028.304-.292.576-.618.808-.968.138-.215.268-.44.387-.666.346-.646.533-1.37.533-2.115 0-1.025-.355-1.987-1.01-2.76-.466-.54-1.084-.945-1.77-1.186-.402-.14-.83-.215-1.264-.22zm5.904 5.71c.159.265.314.538.461.819.38.762.572 1.591.572 2.438 0 .847-.192 1.676-.572 2.438-.147.281-.302.554-.461.819-.278.436-.612.827-.994 1.166.35.022.703.01 1.056-.036 1.468-.178 2.85-.714 3.955-1.568.656-.515 1.221-1.147 1.681-1.87.298-.46.554-.946.757-1.457.252-.644.378-1.33.378-2.024 0-.694-.126-1.38-.378-2.024-.203-.511-.459-.997-.757-1.457-.46-.723-1.025-1.355-1.681-1.87-.648-.507-1.393-.885-2.197-1.12.164.29.318.592.459.903z" />
              </svg>
              Cotiza por WhatsApp
            </Button>
            <Button
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-6 text-lg font-semibold rounded-lg border border-white/30 transition-all"
            >
              Conocer más
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  )
}
