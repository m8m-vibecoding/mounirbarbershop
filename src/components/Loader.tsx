import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_URL } from '../translations';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [showLogo, setShowLogo] = useState(false);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    // Show logo after bands start revealing
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 400);

    // Trigger exit animation
    const exitTimer = setTimeout(() => {
      setShouldExit(true);
    }, 2200);

    // Complete loading state
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Color bands for the premium loading effect
  const bands = [
    { color: '#000000', delay: 0 },
    { color: '#3A2418', delay: 0.1 },
    { color: '#5A3825', delay: 0.2 },
    { color: '#A87932', delay: 0.3 },
    { color: '#C49A4A', delay: 0.4 },
  ];

  return (
    <AnimatePresence>
      {!shouldExit && (
        <motion.div
          id="loader-container"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F0F0F] overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          {/* Animated vertical bands background */}
          <div className="absolute inset-0 flex w-full h-full">
            {bands.map((band, idx) => (
              <motion.div
                key={idx}
                className="h-full flex-1"
                style={{ backgroundColor: band.color }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.8,
                  delay: band.delay,
                  ease: [0.25, 1, 0.5, 1],
                }}
              />
            ))}
          </div>

          {/* Centered Premium Content Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center p-6">
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  id="loader-logo-wrap"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative w-36 h-36 md:w-44 md:h-44 p-4 rounded-full bg-black/40 backdrop-blur-md border border-gold-dark/30 flex items-center justify-center shadow-2xl">
                    <img
                      src={LOGO_URL}
                      alt="Mounir Barbershop Logo"
                      className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(196,154,74,0.3)]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <motion.h1
                    id="loader-brand-name"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-6 font-display text-2xl md:text-3xl text-gold-warm tracking-[0.2em] uppercase font-bold"
                  >
                    Mounir Barbershop
                  </motion.h1>
                  <motion.div
                    id="loader-decor-line"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="h-[1px] bg-gold-dark mt-3"
                  />
                  <motion.p
                    id="loader-tagline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mt-3 text-xs tracking-[0.3em] uppercase text-white-off font-mono font-medium"
                  >
                    Bruxelles
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
