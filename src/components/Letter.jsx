import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { letter } from '../data/anniversaryData'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Letter() {
  return (
    <section id="letter" className="py-32 px-6">
      <div className="max-w-lg mx-auto">
        {/* Etiqueta de sección */}
        <FadeIn>
          <p className="font-sans text-xs tracking-widest text-warm uppercase mb-16 text-center">
            Una carta
          </p>
        </FadeIn>

        {/* Saludo */}
        <FadeIn delay={0.1}>
          <p className="font-serif italic text-2xl text-charcoal mb-10 font-light">
            {letter.greeting}
          </p>
        </FadeIn>

        {/* Párrafos */}
        <div className="space-y-7">
          {letter.paragraphs.map((p, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.12}>
              <p className="font-serif text-lg font-light leading-relaxed text-charcoal/80">
                {p}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Cierre */}
        <FadeIn delay={0.5}>
          <div className="mt-14">
            <p className="font-serif italic text-base text-warm">{letter.closing}</p>
            <p className="font-sans text-xs tracking-widest text-warm mt-2">{letter.signature}</p>
          </div>
        </FadeIn>

        {/* Línea divisoria */}
        <FadeIn delay={0.6}>
          <div className="w-8 h-px bg-wine/40 mt-16 mx-auto" />
        </FadeIn>
      </div>
    </section>
  )
}