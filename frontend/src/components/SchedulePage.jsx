import React from 'react';
import Navbar from './Navbar';

const SchedulePage = ({ setView, profileData, defaultTab }) => {
  const activeTab = defaultTab || 'medical';

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-cyan-900/50 selection:text-cyan-100 font-manrope animate-in fade-in duration-500 pb-20">
      <Navbar setView={setView} currentView={`schedule-${activeTab}`} profileData={profileData} />

      <main className="pt-28 px-8 max-w-6xl mx-auto space-y-10 relative z-10">
        <div className="absolute top-40 right-20 w-[300px] h-[300px] opacity-20 blur-[100px] rounded-full bg-amber-600/30 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6">
            <div className="space-y-3">
              <h1 className="text-5xl font-extrabold tracking-tighter text-white">Lịch trình <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Y tế</span></h1>
              <p className="text-slate-400 text-sm max-w-xl leading-relaxed">Tổng hợp lịch hẹn khám bệnh, lịch tiêm chủng và hiển thị nhắc nhở (reminders) một cách hệ thống.</p>
            </div>
            
            <button className="px-6 py-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">add_alert</span> Thiết lập nhắc nhở
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-3 space-y-6">
            {/* Tabs Local Nav */}
             <div className="flex items-center space-x-6 border-b border-white/5 pb-0 mb-6 overflow-x-auto no-scrollbar">
              <button onClick={() => setView('schedule-medical')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'medical' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}>Lịch khám bệnh</button>
              <button onClick={() => setView('schedule-vaccine')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'vaccine' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}>Lịch tiêm chủng</button>
              <button onClick={() => setView('schedule-reminder')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'reminder' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-500 hover:text-slate-300'}`}>Nhắc nhở y tế</button>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
               {activeTab === 'medical' && (
                 <div className="glass-panel p-8 rounded-2xl border border-cyan-400/20 bg-slate-900/50 backdrop-blur-md">
                    <div className="space-y-8 relative">
                       <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-cyan-400/10 rounded-full"></div>
                       <div className="relative pl-12">
                          <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm text-cyan-400">calendar_month</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em]">Thứ Hai - 04/05/2026</span>
                            <h4 className="text-xl font-bold text-white mt-1">Tái khám Răng Hàm Mặt</h4>
                            <p className="text-sm text-slate-400 mt-2 leading-relaxed">Kiểm tra định kỳ bộ phận nha khoa học đường tại Bệnh viện Răng Hàm Mặt TP.HCM.</p>
                          </div>
                       </div>
                    </div>
                 </div>
               )}

               {activeTab === 'vaccine' && (
                 <div className="glass-panel p-8 rounded-2xl border border-emerald-400/20 bg-slate-900/50 backdrop-blur-md">
                    <div className="space-y-8 relative">
                       <div className="absolute left-4 top-4 bottom-4 w-[1px] border-l border-dashed border-emerald-400/30 rounded-full"></div>
                       <div className="relative pl-12">
                          <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm text-emerald-400">vaccines</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-[0.2em]">Thứ Tư - 20/05/2026</span>
                            <h4 className="text-xl font-bold text-white mt-1">Đợt Tiêm VAT (Uốn ván)</h4>
                            <p className="text-sm text-slate-400 mt-2 leading-relaxed">Đợt tiêm chủng lớn toàn trường tại Sảnh y tế tầng 1.</p>
                          </div>
                       </div>
                    </div>
                 </div>
               )}

               {activeTab === 'reminder' && (
                 <div className="glass-panel p-8 rounded-2xl border border-amber-400/20 bg-slate-900/50 backdrop-blur-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {[1, 2].map(i => (
                         <div key={i} className="p-5 bg-amber-500/5 border border-amber-400/10 rounded-xl hover:border-amber-400/40 transition-all group">
                            <div className="flex items-center justify-between mb-3">
                               <div className="h-8 w-8 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                                  <span className="material-symbols-outlined text-sm">alarm_on</span>
                               </div>
                               <span className="text-[10px] font-bold text-slate-500 group-hover:text-amber-400 transition-colors uppercase">Hàng ngày</span>
                            </div>
                            <h4 className="font-bold text-white">Uống Vitamin C</h4>
                            <p className="text-xs text-slate-400 mt-1">Sau khi ăn sáng (08:00 AM)</p>
                         </div>
                       ))}
                    </div>
                 </div>
               )}
            </div>
          </div>

          <div className="col-span-1 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-md">
               <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 pb-3">Tháng 05/2026</h4>
               <div className="pt-4 grid grid-cols-7 gap-2 text-center">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                    <span key={d} className="text-[9px] font-bold text-slate-600">{d}</span>
                  ))}
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div key={i} className={`h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${i+1 === 4 ? 'bg-cyan-400 text-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : i+1 === 20 ? 'bg-emerald-400 text-slate-950' : 'text-slate-400 hover:bg-white/5'}`}>
                      {i + 1}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchedulePage;
