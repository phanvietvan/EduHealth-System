import React from 'react';

const CTA = () => {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="container mx-auto px-8">
        <div className="glass-card rounded-none p-16 flex flex-col items-center text-center space-y-10 border-y-[0.5px] border-outline-variant/30">
          <h2 className="text-5xl md:text-7xl font-thin tracking-tighter text-primary">Join the <span className="font-extrabold text-gradient">Clinical Luminary</span></h2>
          <p className="max-w-2xl text-on-surface-variant text-lg">Access the next generation of medical technology today. Seamless, secure, and purely professional.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 rounded-none border-[0.5px] border-primary-fixed-dim text-primary-fixed-dim font-bold tracking-widest uppercase hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all duration-500">
              Request Demo
            </button>
            <button className="px-12 py-5 rounded-none bg-primary text-on-primary font-bold tracking-widest uppercase hover:bg-primary-fixed transition-all duration-500">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
