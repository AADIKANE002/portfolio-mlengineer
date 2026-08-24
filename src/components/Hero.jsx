import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Sparkles, Download, TerminalSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Hero = ({ onOpenResume, onOpenTerminal }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-black text-white relative overflow-hidden">
      {/* Abstract Glowing Orbs (Liveable Movement) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          x: [0, -60, 0],
          y: [0, 40, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-pink-600/30 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-4 w-full relative z-10 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.4)]"
        >
          <Sparkles className="w-4 h-4 animate-pulse"/> 
          <TypeAnimation
            sequence={[
              'Machine Learning', 2000,
              'Generative AI', 2000,
              'Computer Vision', 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight"
        >
          PRODUCTION <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
            INTELLIGENCE
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-10 font-light"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenResume} 
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
              <Download className="w-5 h-5"/> ACCESS RESUME
            </span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, borderColor: "rgba(168,85,247,0.8)", boxShadow: "0 0 20px rgba(168,85,247,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenTerminal} 
            className="px-8 py-4 bg-black border border-white/20 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2"
          >
            <TerminalSquare className="w-5 h-5 text-purple-400"/> INIT TERMINAL
          </motion.button>
        </motion.div>

        {/* Tech Stack Ticker / Tags */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.8 }
            }
          }}
          className="flex flex-wrap justify-center gap-3 mt-16 opacity-80"
        >
          {['AWS Lambda', 'YOLOv8', 'Agentic AI', 'RAG', 'Scikit-Learn', 'TensorFlow', 'MLOps'].map(tech => (
             <motion.span 
               key={tech} 
               variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
               whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.4)", color: "#fff" }}
               className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-200 text-sm font-medium tracking-wide cursor-default transition-colors duration-300"
             >
               {tech}
             </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
