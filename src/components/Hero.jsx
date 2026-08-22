import React from 'react';
import { Sparkles, Download, TerminalSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const Hero = ({ onOpenResume, onOpenTerminal }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-black text-white relative overflow-hidden">
      {/* Abstract Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 w-full relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          <Sparkles className="w-4 h-4"/> Machine Learning & GenAI
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
          PRODUCTION <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
            INTELLIGENCE
          </span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-10 font-light">
          Architecting robust ML pipelines, Edge Computer Vision (YOLOv8), and autonomous multi-step reasoning agents deployed on serverless cloud infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <button onClick={onOpenResume} className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <span className="relative z-10 flex items-center justify-center gap-2"><Download className="w-5 h-5"/> ACCESS RESUME</span>
          </button>
          
          <button onClick={onOpenTerminal} className="px-8 py-4 bg-black border border-white/20 text-white font-bold rounded-full hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2">
            <TerminalSquare className="w-5 h-5"/> INIT TERMINAL
          </button>
        </div>

        {/* Tech Stack Ticker / Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-16 opacity-70">
          {['AWS Lambda', 'YOLOv8', 'Agentic AI', 'RAG', 'Scikit-Learn', 'TensorFlow', 'MLOps'].map(tech => (
             <span key={tech} className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-200 text-sm font-medium tracking-wide">
               {tech}
             </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
