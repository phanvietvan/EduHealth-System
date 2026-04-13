import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/40 backdrop-blur-xl border-b-[0.5px] border-slate-700/30 shadow-[0_0_20px_rgba(0,242,254,0.05)]">
      <div className="flex justify-between items-center px-8 h-16 w-full max-w-full">
        <div className="text-2xl font-thin tracking-tighter text-cyan-400 font-manrope">
          EduHealth
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1 font-manrope transition-colors duration-300" href="#">Dashboard</a>
          <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Patients</a>
          <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Research</a>
          <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Resources</a>
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
  );
};

export default Navbar;
