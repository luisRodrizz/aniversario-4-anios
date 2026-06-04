import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { timeline } from '../data/anniversaryData'

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`flex gap-8 md:gap-16 items-start ${isEven ? 'flex-row' : 'flex-row md:flex-row-reverse'}`}
    >
      {/* Contenido */}
      <div className={`flex-1 ${isEven ? 'text-left' : 'text-left md:text-right'}`}>
        {item.date && (
          <p className="font-sans text-xs tracking-widest text-warm uppercase mb-2">
            {item.date}
          </p>
        )}
        <h3 className="font-serif text-2xl font-light text-charcoal mb-3">
          {item.title}
        </h3>
        <p className="font-sans text-sm text-charcoal/60 leading-relaxed font-light">
          {item.description}
        </p>
        {item.image && (
          <div className="mt-5 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-w-xs h-48 object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        )}
      </div>

      {/* Punto central — solo en desktop */}
      <div className="hidden md:flex flex-col items-center pt-1">
        <div className="w-2 h-2 rounded-full bg-wine/50" />
        <div className="w-px flex-1 bg-wine/10 mt-2" />
      </div>

      {/* Espaciador para alternancia */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-32 px-6 bg-charcoal/[0.02]">
      <div className="max-w-2xl mx-auto">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-widest text-warm uppercase mb-4">
            Lo que hemos vivido
          </p>
          <h2 className="font-serif text-4xl font-light text-charcoal">
            Momentos
          </h2>
        </motion.div>

        {/* Items */}
        <div className="space-y-16">
          {timeline.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}