import React from 'react';

const Features = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-thin tracking-tighter text-primary font-headline">Unparalleled<br/><span className="font-bold">Precision Tools</span></h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-primary-container to-transparent"></div>
          </div>
          <p className="text-on-surface-variant max-w-sm font-medium">The intersection of education and clinical excellence through high-fidelity digital infrastructure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl glass-card p-10 min-h-[400px] flex flex-col justify-end">
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-6xl text-primary-fixed-dim opacity-20 group-hover:opacity-100 transition-opacity duration-500">psychology</span>
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl font-bold text-primary">AI-Driven Analytics</h3>
              <p className="text-on-surface-variant max-w-md">Neural network diagnostic support that processes millions of data points in milliseconds for unprecedented clinical accuracy.</p>
              <a className="inline-flex items-center gap-2 text-primary-fixed font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all" href="#">
                Explore Intelligence <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
          </div>
          <div className="md:col-span-4 group glass-card p-10 rounded-xl flex flex-col items-center text-center justify-center border-t-2 border-secondary-container">
            <span className="material-symbols-outlined text-5xl text-secondary mb-6">vital_signs</span>
            <h3 className="text-2xl font-bold text-primary mb-4">Real-time Monitoring</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Continuous patient data streaming with sub-millisecond latency for critical care environments.</p>
          </div>
          <div className="md:col-span-4 glass-card p-1 rounded-xl overflow-hidden group">
            <img 
              alt="Smart Clinic" 
              className="w-full h-48 object-cover rounded-t-lg opacity-60 group-hover:opacity-100 transition-opacity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUo4mcgkPrWC_VZCMxlPG9cGAwStnuMv7gWEDvJH8kWJk38zUBv1krWVS6pF8rEVzgF0Zh5hF8V2EWEiFyDBVCPo4tddzZbFRz4EbJGr28hvDf9_silMSYu8zIoeAMOvYXx95JPEGz3pI-7XLu6Qe0HBWbLFLbEAuoFovbU5cAHwHnIcRSaxowy_8xz35ThpCo4XOiQ1X39PJK_Q-ZKrZ-0AE440tXrWNG8uyDogTRq3_PUdHYJMcxM6I7fOymfdqajtrxDy1THcJ_"
            />
            <div className="p-8 space-y-4">
              <h3 className="text-xl font-bold text-primary">Smart Clinic Integration</h3>
              <p className="text-on-surface-variant text-sm">Unified ecosystem connecting diagnostics, patient history, and hospital administration.</p>
            </div>
          </div>
          <div className="md:col-span-8 glass-card p-10 rounded-xl flex flex-col justify-center items-start space-y-8 bg-surface-container-low">
            <div className="grid grid-cols-2 w-full gap-8">
              <div>
                <div className="text-5xl font-extrabold text-primary tracking-tighter mb-2">99.8%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Diagnostic Accuracy</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-secondary tracking-tighter mb-2">12ms</div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Neural Response</div>
              </div>
            </div>
            <div className="h-[0.5px] w-full bg-outline-variant/30"></div>
            <p className="text-lg font-thin italic text-primary/80">"Redefining the boundary between human intuition and machine precision."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
