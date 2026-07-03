import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';
import { Language, REVIEWS, OTHER_REVIEWERS, GENERAL_TRANSLATIONS } from '../translations';

interface ReviewsProps {
  currentLang: Language;
}

export default function Reviews({ currentLang }: ReviewsProps) {
  const t = GENERAL_TRANSLATIONS[currentLang];

  // Utility to render golden star SVGs based on rating value
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <Star
        key={idx}
        className={`w-4 h-4 ${idx < rating ? 'text-gold-warm fill-gold-warm' : 'text-white-off/20'}`}
      />
    ));
  };

  // Duplicate list of reviewers to make the ticker continuous and seamless
  const tickerReviewers = [...OTHER_REVIEWERS, ...OTHER_REVIEWERS, ...OTHER_REVIEWERS];

  return (
    <section
      id="reviews"
      className="bg-[#000000] py-24 lg:py-32 relative overflow-hidden border-b border-brown-leather/20"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-[800px] mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-gold-warm uppercase tracking-[0.2em] text-xs font-mono font-bold mb-4"
          >
            <MessageSquare className="w-4 h-4 text-gold-warm" />
            <span>{currentLang === 'FR' ? 'Preuve Sociale' : currentLang === 'EN' ? 'Social Proof' : 'Sociale bewijskracht'}</span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl text-white-off tracking-tight font-bold mb-6">
            {t.reviewsTitle}
          </h2>

          <p className="text-white-off/70 text-sm sm:text-base leading-relaxed max-w-[580px] mx-auto">
            {t.reviewsSubtitle}
          </p>
        </div>

        {/* Main Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#161616] border border-brown-leather/40 rounded p-6 lg:p-8 flex flex-col justify-between h-full relative"
            >
              {/* Gold Quote Decorative Watermark */}
              <div className="absolute top-6 right-6 font-display text-5xl text-gold-dark/10 font-black select-none leading-none">
                “
              </div>

              <div>
                {/* Stars and Platform source */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1">{renderStars(review.rating)}</div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-warm bg-gold-dark/10 px-2 py-0.5 rounded border border-gold-dark/25">
                    {review.source}
                  </span>
                </div>

                {/* Review Text comment */}
                <p className="text-white-off text-sm leading-relaxed mb-6 font-medium italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer identity */}
              <div className="border-t border-brown-leather/20 pt-4 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-brown-dark/40 border border-gold-dark/30 flex items-center justify-center font-display text-xs text-gold-warm font-bold uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-xs text-white-off font-semibold tracking-wider">
                    {review.name}
                  </h4>
                  <p className="text-[10px] text-white-off/50 uppercase tracking-widest">
                    Google Local Guide
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Discrete Infinite Scrolling Ticker (Other reviews without comment text) */}
      <div className="bg-[#0A0A0A] border-y border-brown-leather/20 py-6 overflow-hidden relative w-full">
        {/* Shadow masks at the left and right ends of ticker to create soft fading boundaries */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        {/* Ticker Header */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 mb-3">
          <p className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-gold-warm text-center md:text-left">
            📣 {t.reviewsTickerText}
          </p>
        </div>

        {/* CSS Ticker stream */}
        <div className="w-full overflow-hidden">
          <div className="animate-ticker py-2">
            {tickerReviewers.map((name, index) => (
              <div
                key={index}
                className="flex items-center space-x-2.5 mx-8 shrink-0 bg-[#161616]/60 border border-brown-leather/15 py-1.5 px-4 rounded-full"
              >
                <span className="text-xs text-white-off font-semibold font-sans">{name}</span>
                <div className="flex space-x-0.5">
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-3 h-3 text-gold-warm fill-gold-warm" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-gold-dark/60 font-bold">5.0</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
