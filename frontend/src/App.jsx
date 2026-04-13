import React from 'react';

function App() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/40 backdrop-blur-xl border-b-[0.5px] border-slate-700/30 shadow-[0_0_20px_rgba(0,242,254,0.05)]">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-full">
          <div className="text-2xl font-thin tracking-tighter text-cyan-400 font-manrope">
            EduHealth
          </div>
          <div className="hidden lg:flex items-center gap-12">
            {/* Dropdown: Dashboard */}
            <div className="relative group px-2">
              <button className="flex items-center gap-1 text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1 font-manrope transition-all duration-300 py-4">
                Dashboard
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              
              {/* Menu con */}
              <div className="absolute left-0 top-full hidden group-hover:block w-64 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                  <a href="#" className="block px-6 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">Tổng quan hệ thống</a>
                  <a href="#" className="block px-6 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">Thống kê nhanh (số học sinh, sự cố, thuốc)</a>
                  <a href="#" className="block px-6 py-3 text-sm font-bold text-red-400 hover:bg-red-500/10 transition-colors border-t border-white/5">Cảnh báo hôm nay</a>
                </div>
              </div>
            </div>
            {/* Dropdown: Sự cố y tế */}
            <div className="relative group px-2">
              <button className="flex items-center gap-1 text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300 py-4">
                Sự cố y tế
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              
              {/* Menu con */}
              <div className="absolute left-0 top-full hidden group-hover:block w-56 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                  <a href="#" className="block px-6 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">Ghi nhận sự cố mới</a>
                  <a href="#" className="block px-6 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">Danh sách sự cố</a>
                  <a href="#" className="block px-6 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors">Xử lý sự cố</a>
                  <a href="#" className="block px-6 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors border-t border-white/5">Lịch sử sự cố</a>
                </div>
              </div>
            </div>
            <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Thuốc</a>
            <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Tiêm chủng</a>
            <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Khám bệnh</a>
            <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Báo cáo</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer active:scale-95">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer active:scale-95">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden border-[0.5px] border-outline-variant/30">
              <img 
                alt="User profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9oW7M-yLmsR6sBJbLQMGvDnME_E_h8Hl5JOXwbBw3-nlYNSGPL9c1wMJTTifqXgBW2qfonbGVVSRtu5iPGTfCvB15qayK85QLV3Ef15H3YUC9QsSxalGdMLm__ZfdVp-aLW3dbeCwRmqyZWEzEHndYxgRxpoTfD2qFWk5adxq6NXwqvQuy0wZLKdv29OLYKXUbRo_wwB0bpm19w6dJ0zQELx3gOrcdo4HPnxGpvm_dpRrw-tdjl4JMmYhFKV8oHZPogwFc5yOfkk9"
              />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0 hero-gradient"></div>
          {/* Asymmetric Floating Visuals */}
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
              {/* Floating Overlay Card */}
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

        {/* Features Bento Grid */}
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
              {/* Feature 1 */}
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
              {/* Feature 2 */}
              <div className="md:col-span-4 group glass-card p-10 rounded-xl flex flex-col items-center text-center justify-center border-t-2 border-secondary-container">
                <span className="material-symbols-outlined text-5xl text-secondary mb-6">vital_signs</span>
                <h3 className="text-2xl font-bold text-primary mb-4">Real-time Monitoring</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Continuous patient data streaming with sub-millisecond latency for critical care environments.</p>
              </div>
              {/* Feature 3 */}
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
              {/* Feature 4 (Large Textual Anchor) */}
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

        {/* CTA Section */}
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
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 w-full py-12 border-t-[0.5px] border-slate-800/30">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-wrap justify-center gap-12">
            <a className="text-slate-600 font-manrope font-medium text-xs uppercase tracking-widest hover:text-purple-300 transition-all duration-500 drop-shadow-[0_0_8px_rgba(221,183,255,0.4)]" href="#">Privacy Policy</a>
            <a className="text-slate-600 font-manrope font-medium text-xs uppercase tracking-widest hover:text-purple-300 transition-all duration-500 drop-shadow-[0_0_8px_rgba(221,183,255,0.4)]" href="#">Terms of Service</a>
            <a className="text-slate-600 font-manrope font-medium text-xs uppercase tracking-widest hover:text-purple-300 transition-all duration-500 drop-shadow-[0_0_8px_rgba(221,183,255,0.4)]" href="#">HIPAA Compliance</a>
          </div>
          <div className="text-slate-600 font-manrope font-medium text-xs uppercase tracking-widest">
            © 2024 EduHealth Clinical. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
