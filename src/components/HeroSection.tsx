import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, Play, Calendar, Sparkle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAudio } from '@/contexts/AudioContext';
import { motion } from 'framer-motion';
import { animations } from '@/utils/animation-utils';
import { GlowOverlay } from "@/components/ui/GlowOverlay";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { togglePlay, isPlaying, expandPlayer } = useAudio();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-b from-[#0c101c] to-[#161c2c] overflow-hidden select-none cursor-golden-cross">
      {/* Glow overlays */}
      <GlowOverlay color="gold" intensity="high" />
      <GlowOverlay color="byzantine" intensity="medium" className="top-1/3 left-1/2 w-[600px] h-[420px] -translate-x-1/2 -translate-y-1/2" />
      {/* Incense effect */}
      <div className="absolute left-1/2 top-[72%] -translate-x-1/2">
        <div className="incense">
          <div className="incense-smoke"></div>
          <div className="incense-smoke delay-400"></div>
        </div>
      </div>
      {/* Decorative illuminated overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-gold/20 via-transparent to-transparent animate-pulse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 w-full flex justify-center">
          <svg width="500" height="500" viewBox="0 0 100 100">
            <path d="M50 10 L50 90 M30 30 L70 30 M25 70 L75 70 M20 50 L80 50"
              stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="absolute top-0 left-1/3 w-32 h-full bg-gold/10 rotate-3 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-gold/10 via-transparent to-transparent" />
        <div className="absolute left-32 bottom-24 w-24 h-24 rounded-full bg-gold/10 blur-3xl animate-pulse opacity-75"></div>
        <div className="absolute right-24 bottom-40 w-24 h-24 rounded-full bg-byzantine/15 blur-3xl animate-pulse opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 py-16">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={animations.staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={animations.fadeIn}
            className="flex justify-center mb-6"
          >
            <span className="text-gold text-6xl animate-pulse glow-shadow drop-shadow-glow">☦</span>
          </motion.div>
          <motion.h1
            variants={animations.fadeIn}
            className="font-display text-5xl md:text-7xl font-extrabold text-gold/90 mb-5 drop-shadow-glow"
          >
            <span className="text-white block mb-2 animate-appear">Orthodox <span className="text-gold">Faith</span></span>
            <span className="block text-gold/95">Ancient Wisdom for Modern Times</span>
          </motion.h1>

          <motion.div variants={animations.fadeIn} className="flex justify-center my-5">
            <div className="w-52 h-2 rounded-full bg-gradient-to-r from-gold/15 via-gold/60 to-gold/15 animate-shimmer relative" />
          </motion.div>
          <motion.p
            variants={animations.fadeIn}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-body leading-relaxed drop-shadow"
          >
            Journey through millennia of sacred tradition, mystical beauty, and spiritual revelation.<br />
            <span className="text-gold/90">Welcome home to Eastern Orthodoxy.</span>
          </motion.p>
          <motion.div
            variants={animations.fadeIn}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-byzantine hover:bg-byzantine-dark text-white border border-gold/30 shadow-lg hover:shadow-2xl transition-all text-lg font-semibold animate-bounce-slow"
            >
              <Link to="/learn" className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                <span>Explore Teachings</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gold/60 text-gold bg-gold/5 hover:bg-gold/15 hover:border-gold shadow-lg transition-all text-lg font-semibold"
              onClick={() => {
                expandPlayer();
                togglePlay();
              }}
            >
              <div className="mr-2 relative">
                <Play className={`h-5 w-5 ${isPlaying ? 'animate-pulse' : ''}`} />
                {isPlaying && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold/80 rounded-full animate-ping" />
                )}
              </div>
              <span>{isPlaying ? 'Sacred Chants Playing' : 'Listen to Sacred Chants'}</span>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gold/30 text-gold/90 hover:bg-gold/10 hover:border-gold shadow-lg transition-all text-lg font-semibold"
            >
              <Link to="/calendar" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <span>Liturgical Calendar</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
