import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { finalMessage } from '../data/anniversaryData'

export default function FinalMessage() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-40 px-6">
      <div className="max-w-lg mx-auto text-center">
        {/* Línea decorativa */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-12 h-px bg-wine mx-auto mb-14"
        />

        {/* Mensaje principal */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-snug mb-12"
        >
          {finalMessage.text}
        </motion.p>

        {/* Botón para carta final */}
        {!open && (
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onClick={() => setOpen(true)}
            className="font-sans text-xs tracking-widest uppercase text-wine border border-wine/30 px-8 py-3 hover:bg-wine hover:text-cream transition-all duration-500 cursor-pointer"
          >
            {finalMessage.ctaLabel}
          </motion.button>
        )}

        {/* Carta expandible */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="text-left mt-16 border-l-2 border-wine/20 pl-8">
                <p className="font-sans text-xs tracking-widest text-warm uppercase mb-8">
                  {finalMessage.lastLetter.title}
                </p>
                <div className="space-y-6">
                  {finalMessage.lastLetter.paragraphs.map((p, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
                      className="font-serif text-lg font-light text-charcoal/80 leading-relaxed"
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="font-serif italic text-warm text-base mt-10"
                >
                  {finalMessage.lastLetter.closing}
                </motion.p>
              </div>

              {/* Botón cerrar */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                onClick={() => setOpen(false)}
                className="font-sans text-xs tracking-widest text-charcoal/40 uppercase mt-12 hover:text-charcoal transition-colors duration-300 cursor-pointer"
              >
                Cerrar
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Firma final */}
        {!open && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20"
          >
            <div className="w-8 h-px bg-wine/30 mx-auto mb-6" />
            <p className="font-sans text-xs tracking-widest text-warm/50 uppercase">
              Con amor · io {new Date().getFullYear()}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}