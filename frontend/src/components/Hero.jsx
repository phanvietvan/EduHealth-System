import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] opacity-40 blur-3xl rounded-full bg-secondary-container/20"></div>
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] opacity-30 blur-3xl rounded-full bg-primary-container/20"></div>
      <div className="container mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border-[0.5px] border-primary-fixed-dim/30 bg-primary-fixed-dim/5 text-primary-fixed-dim text-xs uppercase tracking-[0.2em] font-bold">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            Clinical Intelligence
          </div>
          <h1 className="text-[5rem] lg:text-[7rem] font-thin leading-none tracking-tighter text-primary font-headline">
            Kỷ Nguyên<br/>
            <span className="font-extrabold text-gradient">Y Tế Số</span><br/>
            Sắc Sảo
          </h1>
          <p className="text-on-surface-variant max-w-md text-lg font-medium leading-relaxed font-body">
            Elevate clinical decision-making with hyper-precise data visualization and AI-driven medical insights. Designed for the modern clinician.
          </p>
          <div className="flex items-center gap-6 pt-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-fixed font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform cyber-glow">
              Start Consultation
            </button>
            <button className="px-8 py-4 rounded-full border-[0.5px] border-primary/30 bg-surface-variant/20 backdrop-blur-md text-primary font-bold text-sm tracking-widest uppercase hover:bg-surface-variant/40 transition-all">
              View Research
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="relative z-20 glass-card p-4 rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
            <img 
              alt="Advanced Medical Visualization" 
              className="w-full h-auto rounded-lg grayscale group-hover:grayscale-0 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSe-uOHNDqMdtrsveLVThQ10RGmLeo9X-lahNku4N1D2GpQyTvcAB0Ys62o7Qv1COs02CkbEDoTnrmrzEf6pvY-iKdfobXuW7mYpw7auq376dJPY9z2MqRboVn-FRKQlpXVHn0ZsAZvsvupQz9oRl_XzD3YZFdEDHcnXel8zL-Nv8z4Y-J7awjQ7DdUjT7Lnnxf0eYdRAS8cSG-V77u1dvpZEoOgTjKdWN2BV_LDwtN5kYnieIHu7XytzI7b73KBYhEs5k-F3aSyGa"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 z-30 glass-card p-6 rounded-xl border-l-2 border-primary-fixed-dim cyber-glow w-64">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-primary-fixed-dim uppercase tracking-widest">Real-time Vitals</span>
              <span className="material-symbols-outlined text-primary-fixed-dim animate-pulse">favorite</span>
            </div>
            <div className="text-3xl font-extrabold text-primary mb-1">72 BPM</div>
            <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-primary-container"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
