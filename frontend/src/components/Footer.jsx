import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
