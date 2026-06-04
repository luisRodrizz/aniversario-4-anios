import { motion } from 'framer-motion'
import { meta } from '../data/anniversaryData'

export default function Hero() {
  const handleEnter = () => {
    document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl"
      >
        {/* Línea decorativa superior */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-12 h-px bg-wine mx-auto mb-10"
        />

        {/* Subtexto año */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-sans text-xs tracking-widest text-warm uppercase mb-4"
        >
          {meta.startDate} — hoy
        </motion.p>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-serif text-6xl md:text-8xl font-light text-charcoal leading-none mb-6"
        >
          {meta.heroTitle}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="font-sans text-sm text-warm font-light leading-relaxed max-w-sm mx-auto mb-14"
        >
          {meta.heroSubtitle}
        </motion.p>

        {/* Botón */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={handleEnter}
          className="font-sans text-xs tracking-widest uppercase text-charcoal border border-charcoal/30 px-8 py-3 hover:bg-charcoal hover:text-cream transition-all duration-500 cursor-pointer"
        >
          {meta.heroCta}
        </motion.button>

        {/* Línea decorativa inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-12 h-px bg-wine mx-auto mt-10"
        />
      </motion.div>
    </section>
  )
}