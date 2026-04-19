import React from 'react';
import Navbar from './Navbar';

const VaccinationPage = ({ setView, profileData, defaultTab }) => {
  const activeTab = defaultTab || 'upcoming';

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-cyan-900/50 selection:text-cyan-100 font-manrope animate-in fade-in duration-500 pb-20">
      <Navbar setView={setView} currentView={`vaccination-${activeTab}`} profileData={profileData} />

      <main className="pt-28 px-8 max-w-6xl mx-auto space-y-10 relative z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10 blur-[120px] rounded-full bg-emerald-600/50 pointer-events-none"></div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[0.5px] border-emerald-400/30 bg-emerald-400/5 text-emerald-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="material-symbols-outlined text-xs">vaccines</span>
            Chương trình Tiêm chủng Mở rộng
          </div>
          <h1 className="text-5xl font-extrabold tracking-tighter text-white">Quản lý <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Tiêm phòng</span></h1>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">Theo dõi lịch tiêm sắp tới, cập nhật trạng thái mũi tiêm và xét duyệt giấy xác nhận từ phụ huynh.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
          <div className="col-span-1 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6 bg-slate-900/50 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest border-l-2 border-emerald-400 pl-3">Tóm tắt Trạng thái</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">Đã hoàn thành</span>
                    <span className="text-lg font-black text-emerald-400">12</span>
                  </div>
                  <div className="p-4 bg-amber-950/20 border border-amber-500/20 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">Sắp tới</span>
                    <span className="text-lg font-black text-amber-400">02</span>
                  </div>
                  <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-xl flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">Cần xác nhận</span>
                    <span className="text-lg font-black text-red-500">01</span>
                  </div>
                </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 space-y-6">
             {/* Tabs Local Nav */}
             <div className="flex items-center space-x-6 border-b border-white/5 pb-0 mb-6 overflow-x-auto no-scrollbar">
              <button onClick={() => setView('vaccination-upcoming')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'upcoming' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}>Sắp tới</button>
              <button onClick={() => setView('vaccination-history')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'history' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}>Lịch sử</button>
              <button onClick={() => setView('vaccination-status')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'status' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-500 hover:text-slate-300'}`}>Trạng thái</button>
              <button onClick={() => setView('vaccination-confirm')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'confirm' ? 'text-[#ff6b6b] border-b-2 border-[#ff6b6b]' : 'text-slate-500 hover:text-slate-300'}`}>Xác nhận</button>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {activeTab === 'upcoming' && (
                <div className="space-y-4">
                  {[1, 2].map((item) => (
                    <div key={item} className="p-6 bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl relative overflow-hidden group hover:border-cyan-400/30 transition-all">
                      <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400"></div>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-cyan-400 text-sm">event</span>
                            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Dự kiến: 20/05/2026</span>
                          </div>
                          <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Tiêm phòng Uốn ván (VAT)</h4>
                          <p className="text-sm text-slate-400 mt-2 max-w-md">Mũi tiêm nhắc lại theo định kỳ của chương trình y tế học đường năm nay.</p>
                        </div>
                        <button className="px-5 py-2 rounded-xl bg-cyan-400/10 text-cyan-400 text-xs font-bold uppercase tracking-widest border border-cyan-400/20 hover:bg-cyan-400/20 transition-all">Chi tiết</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'history' && (
                <div className="glass-panel p-8 rounded-2xl border border-emerald-400/20 space-y-6 bg-slate-900/50 backdrop-blur-md">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-emerald-400 pl-3">Mũi tiêm đã hoàn thành</h3>
                  <div className="space-y-4">
                    <div className="p-5 bg-emerald-950/10 border border-emerald-400/20 rounded-xl flex items-center justify-between group hover:bg-emerald-950/20 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center">
                          <span className="material-symbols-outlined">done_all</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">SARS-CoV-2 (Mũi 3)</h4>
                          <p className="text-xs text-slate-500 font-bold mt-0.5">Tiêm tại: TYT Phường 12 • 15/05/2023</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-400/60 uppercase">Đã cấp chứng nhận</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'status' && (
                <div className="glass-panel p-8 rounded-2xl border border-amber-400/20 space-y-6 bg-slate-900/50 backdrop-blur-md">
                   <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-amber-400 pl-3">Tiến độ Tiêm chủng Quốc gia</h3>
                   <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                          <span className="text-slate-300">Hoàn thành cơ bản</span>
                          <span className="text-amber-400">85%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-400 w-[85%] shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                        </div>
                      </div>
                   </div>
                </div>
              )}

              {activeTab === 'confirm' && (
                <div className="glass-panel p-8 rounded-2xl border border-[#ff6b6b]/20 space-y-6 bg-slate-900/50 backdrop-blur-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5"><span className="material-symbols-outlined text-9xl">contract_edit</span></div>
                  <h3 className="text-sm font-bold text-[#ff6b6b] uppercase tracking-widest border-l-2 border-[#ff6b6b] pl-3 relative z-10">Xét duyệt sự đồng thuận</h3>
                  <div className="p-6 border border-[#ff6b6b]/30 bg-red-950/10 rounded-xl relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-lg font-bold text-white">Đồng ý tiêm VAT (Uốn ván)</h4>
                        <p className="text-sm text-slate-400 mt-1 italic">Vui lòng ký xác nhận cho học sinh tham gia đợt tiêm sắp tới tại trường.</p>
                      </div>
                      <span className="px-2 py-1 rounded bg-red-500/10 text-red-500 text-[10px] font-bold uppercase border border-red-500/20">Khẩn cấp</span>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-[#ff6b6b] to-red-500 text-white font-extrabold text-xs uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] transition-all shadow-[0_10px_20px_rgba(255,107,107,0.3)]">
                      Ký xác nhận điện tử
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VaccinationPage;
