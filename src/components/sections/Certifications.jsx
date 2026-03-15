import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // eslint-disable-line no-unused-vars
import { FiX, FiExternalLink } from 'react-icons/fi'
import { certifications } from '../../data/portfolioData'
import { flipIn, staggerContainer } from '../../utils/animations'
import { resolveAssetUrl } from '../../utils/assetUrl'

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certifications" className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-accent-cyan tracking-[0.2em]">
            05 / CREDENTIALS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold gradient-text mt-3">
            Certifications
          </h2>
        </div>

        {/* Featured Certificate (IBM) */}
        {certifications.filter(c => c.issuer === 'IBM').map((cert) => (
          <motion.div
            key={cert.id}
            variants={flipIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-8 bg-bg-card border border-white/5 rounded-2xl overflow-hidden relative group hover:scale-[1.01] transition-all duration-300 cursor-pointer"
            style={{ '--cert-color': cert.color }}
            whileHover={{
              borderColor: `${cert.color}4D`,
              boxShadow: `0 0 40px ${cert.color}20`,
            }}
            onClick={() => setSelectedCert(cert)}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Certificate Image */}
              {cert.image && (
                <div className="relative w-full lg:w-1/2 h-56 lg:h-auto overflow-hidden bg-bg-elevated">
                  <img
                    src={resolveAssetUrl(cert.image)}
                    alt={cert.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-card/60 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent lg:hidden" />
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-mono text-yellow-400 border border-yellow-400/40 px-3 py-1.5 rounded-full backdrop-blur-sm bg-black/40">
                      ★ Featured
                    </span>
                  </div>
                  {/* View overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-mono text-accent-cyan border border-accent-cyan/40 px-5 py-2.5 rounded-lg backdrop-blur-sm bg-black/30">
                      View Certificate ↗
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center flex-1">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    {cert.logo ? (
                      <img src={resolveAssetUrl(cert.logo)} alt={cert.issuer} className="w-8 h-8 object-contain" />
                    ) : (
                      <span className="text-2xl">{cert.icon}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                      {cert.name}
                    </h3>
                    <p className="font-mono text-sm mt-1" style={{ color: cert.color }}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <p className="text-text-muted text-sm font-body leading-relaxed mt-4">
                  {cert.description}
                </p>
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted bg-white/5 rounded px-2 py-0.5">
                      {cert.platform}
                    </span>
                    <span className="font-mono text-xs text-text-muted">{cert.year}</span>
                  </div>
                  <span className="text-xs text-green-400">Verified ✓</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Remaining Certificates Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.filter(c => c.issuer !== 'IBM').map((cert) => (
            <motion.div
              key={cert.id}
              variants={flipIn}
              className="bg-bg-card border border-white/5 rounded-2xl overflow-hidden flex flex-col relative group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              style={{ '--cert-color': cert.color }}
              whileHover={{
                borderColor: `${cert.color}4D`,
                boxShadow: `0 0 30px ${cert.color}15`,
              }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image */}
              {cert.image && (
                <div className="relative w-full h-44 overflow-hidden bg-bg-elevated">
                  <img
                    src={resolveAssetUrl(cert.image)}
                    alt={cert.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                  {/* View overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-mono text-accent-cyan border border-accent-cyan/40 px-4 py-2 rounded-lg backdrop-blur-sm bg-black/30">
                      View Certificate ↗
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 overflow-hidden"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    {cert.logo ? (
                      <img src={resolveAssetUrl(cert.logo)} alt={cert.issuer} className="w-7 h-7 object-contain" />
                    ) : (
                      <span className="text-xl">{cert.icon}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-semibold text-white leading-snug">
                      {cert.name}
                    </h3>
                    <p className="font-mono text-xs mt-1" style={{ color: cert.color }}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted bg-white/5 rounded px-2 py-0.5">
                      {cert.platform}
                    </span>
                    <span className="font-mono text-xs text-text-muted">{cert.year}</span>
                  </div>
                  <span className="text-xs text-green-400">Verified ✓</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative z-10 max-w-4xl w-full bg-bg-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:border-accent-cyan/40 hover:text-accent-cyan transition-all"
              >
                <FiX size={18} />
              </button>

              {/* Certificate image */}
              {selectedCert.image && (
                <div className="w-full max-h-[60vh] overflow-hidden bg-white/5">
                  <img
                    src={resolveAssetUrl(selectedCert.image)}
                    alt={selectedCert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Details */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 overflow-hidden"
                    style={{ backgroundColor: `${selectedCert.color}20` }}
                  >
                    {selectedCert.logo ? (
                      <img src={resolveAssetUrl(selectedCert.logo)} alt={selectedCert.issuer} className="w-8 h-8 object-contain" />
                    ) : (
                      <span className="text-2xl">{selectedCert.icon}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {selectedCert.name}
                    </h3>
                    <p className="font-mono text-sm mt-1" style={{ color: selectedCert.color }}>
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>
                <p className="text-text-muted font-body mt-4 leading-relaxed">
                  {selectedCert.description}
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-xs text-text-muted bg-white/5 rounded-full px-3 py-1">
                    {selectedCert.platform}
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    {selectedCert.year}
                  </span>
                  <span className="text-xs text-green-400 ml-auto">Verified ✓</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
