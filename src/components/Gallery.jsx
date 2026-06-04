import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { gallery } from '../data/anniversaryData'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  // Separar por tamaño para layout asimétrico
  const large = gallery.filter(g => g.size === 'large')
  const small = gallery.filter(g => g.size === 'small')

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-widest text-warm uppercase mb-4">
            Imágenes
          </p>
          <h2 className="font-serif text-4xl font-light text-charcoal">
            Nosotros
          </h2>
        </motion.div>

        {/* Layout asimétrico tipo editorial */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Imagen grande — ocupa 2 columnas */}
          {large[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1 }}
              className="col-span-2 row-span-2 overflow-hidden"
            >
              <img
                src={large[0].src}
                alt={large[0].alt}
                className="w-full h-64 md:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          )}

          {/* Imágenes pequeñas */}
          {small.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-36 md:h-44 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>

        {/* Nota bajo la galería */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="font-serif italic text-sm text-warm text-center mt-8"
        >
          Pasa el cursor para ver en color.
        </motion.p>
      </div>
    </section>
  )
}