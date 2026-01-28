import { useMemo, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaAward,
  FaShieldAlt,
  FaCloud,
  FaChartLine,
  FaGraduationCap,
  FaAws,
  FaCode,
  FaEye,
  FaGlobe,
  FaTrophy,
  FaTimes,
} from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import { CERTIFICATIONS, CERTIFICATE_OF_COMPETITION } from '../../config/certifications';
import certCompeImg from '../../assets/Cert-Compe.jpg';
import compeImg from '../../assets/Compe.jpg';
import devconImg from '../../assets/Devcon.jpg';

const COMPETITION_IMAGE_MAP = {
  'Cert-Compe.jpg': certCompeImg,
  'Compe.jpg': compeImg,
};

/** Certificate images from assets (e.g. Devcon.jpg). Used by Preview certificate. */
const CERT_IMAGE_MAP = {
  'Devcon.jpg': devconImg,
};

const issuerIconMap = {
  'Asian Development Bank (ADB)': FaShieldAlt,
  'Oracle': FaCloud,
  'Cisco': FaChartLine,
  'Pilipinas Shell Foundation, Inc.': FaGraduationCap,
  'Amazon Web Services (AWS)': FaAws,
  'DEVCON Philippines': FaCode,
};

function getIconForIssuer(issuer) {
  return issuerIconMap[issuer] ?? FaAward;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Certifications() {
  const [competitionModalOpen, setCompetitionModalOpen] = useState(false);
  const MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

  const openCompetitionModal = useCallback(() => setCompetitionModalOpen(true), []);
  const closeCompetitionModal = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCompetitionModalOpen(false);
  }, []);

  useEffect(() => {
    if (!competitionModalOpen) return;
    const onEscape = (e) => {
      if (e.key === 'Escape') closeCompetitionModal();
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [competitionModalOpen, closeCompetitionModal]);

  const sorted = useMemo(
    () =>
      [...CERTIFICATIONS].sort((a, b) => {
        const parse = (s) => {
          const [month, year] = String(s).split(' ');
          const m = MONTHS[month] ?? 0;
          return (parseInt(year, 10) || 0) * 12 + m;
        };
        return parse(b.issued) - parse(a.issued);
      }),
    []
  );

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <SectionHeading
          title="Certifications"
          subtitle="Professional credentials and learning achievements."
          centered
        />

        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <button
            type="button"
            onClick={openCompetitionModal}
            className="inline-flex items-center gap-3 rounded-xl border-2 border-amber-400 dark:border-amber-500 bg-amber-50 dark:bg-amber-900/20 px-6 py-4 text-gray-900 dark:text-white font-semibold shadow-md hover:shadow-lg hover:bg-amber-100 dark:hover:bg-amber-900/30 hover:border-amber-500 dark:hover:border-amber-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <span>Competition</span>
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {sorted.map((cert) => {
            const Icon = getIconForIssuer(cert.issuer);
            const previewUrl =
              cert.certificatePdf ||
              cert.credentialUrl ||
              (cert.certificateImage && CERT_IMAGE_MAP[cert.certificateImage]);
            const websiteUrl = cert.issuerUrl || cert.credentialUrl;

            const btnBase =
              'inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';

            return (
              <motion.article
                key={cert.id}
                variants={cardVariants}
                className="group relative flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 shadow-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600/50 transition-all duration-300 overflow-hidden"
              >
                {/* Accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity"
                  aria-hidden
                />

                <div className="pl-5 pr-4 py-4 flex flex-col flex-1">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5">
                        {cert.issuer}
                      </p>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p>
                      Issued {cert.issued}
                      {cert.expires && (
                        <span className="text-gray-500 dark:text-gray-500"> · Expires {cert.expires}</span>
                      )}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs font-mono text-gray-500 dark:text-gray-500">
                        ID {cert.credentialId}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {previewUrl ? (
                      <a
                        href={previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnBase} bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600`}
                      >
                        <FaEye className="w-4 h-4 shrink-0" aria-hidden />
                        Preview certificate
                      </a>
                    ) : (
                      <span
                        role="button"
                        aria-disabled="true"
                        className={`${btnBase} cursor-not-allowed bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400`}
                        title="Add credentialUrl or certificatePdf in config to enable"
                      >
                        <FaEye className="w-4 h-4 shrink-0" aria-hidden />
                        Preview certificate
                      </span>
                    )}
                    {websiteUrl ? (
                      <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnBase} border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-400 dark:hover:border-blue-500 focus:ring-blue-500`}
                      >
                        <FaGlobe className="w-4 h-4 shrink-0" aria-hidden />
                        Link to website
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {competitionModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCompetitionModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="competition-modal-title"
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl overflow-hidden my-8"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-600" aria-hidden />
              <div className="pl-6 pr-12 py-6">
                <button
                  type="button"
                  onClick={closeCompetitionModal}
                  className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                    <FaTrophy className="w-7 h-7 text-amber-600 dark:text-amber-400" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-3">
                      {CERTIFICATE_OF_COMPETITION.role}
                    </p>
                    <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-1">
                      {CERTIFICATE_OF_COMPETITION.event}
                    </p>
                    <p className="text-base font-semibold text-amber-600 dark:text-amber-400 mb-2">
                      {CERTIFICATE_OF_COMPETITION.prize}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Issued {CERTIFICATE_OF_COMPETITION.issued}
                    </p>
                  </div>
                </div>

                {CERTIFICATE_OF_COMPETITION.images && CERTIFICATE_OF_COMPETITION.images.length > 0 && (
                  <div
                    className={
                      CERTIFICATE_OF_COMPETITION.images.length === 1
                        ? 'mt-4'
                        : 'mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'
                    }
                  >
                    {CERTIFICATE_OF_COMPETITION.images.map((key, idx) => {
                      const src = COMPETITION_IMAGE_MAP[key];
                      if (!src) return null;
                      return (
                        <a
                          key={key}
                          href={src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700/50 cursor-pointer hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                          title="Open full size in new tab"
                        >
                          <img
                            src={src}
                            alt={`Huawei ICT Competition 2025–2026 Philippines, image ${idx + 1}`}
                            className="w-full h-auto object-contain max-h-[320px] sm:max-h-[360px] object-center pointer-events-none"
                          />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
