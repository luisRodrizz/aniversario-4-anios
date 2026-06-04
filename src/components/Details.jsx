import { motion } from 'framer-motion'
import { details } from '../data/anniversaryData'

export default function Details() {
  return (
    <section className="py-32 px-6 bg-charcoal/[0.02]">
      <div className="max-w-3xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-widest text-warm uppercase mb-4">
            Lo que amo
          </p>
          <h2 className="font-serif text-4xl font-light text-charcoal">
            Lo que me encanta de ti amor
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border border-charcoal/8 bg-cream px-7 py-6 hover:border-wine/30 hover:shadow-sm transition-all duration-500"
            >
              <p className="font-serif text-lg font-light text-charcoal/80 leading-snug">
                {detail}
              </p>
              {/* Línea acento */}
              <div className="w-5 h-px bg-wine/30 mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}