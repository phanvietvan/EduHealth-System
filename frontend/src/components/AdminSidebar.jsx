import React from 'react';

const AdminSidebar = ({ view, setView }) => {
  const baseView = view.split('-')[0];
  const subView = view.split('-')[1] || 'basic';

  const isActive = (v) => view === v;
  const isBaseActive = (bv) => baseView === bv;

  return (
    <aside className="hidden md:flex flex-col h-screen w-72 bg-slate-950 border-r border-white/5 py-8 space-y-6 fixed left-0 top-0 z-40">
      <div className="px-8 space-y-1">
        <div className="text-xl font-bold text-white tracking-tighter cursor-pointer flex items-center gap-2" onClick={() => setView('landing')}>
          <span className="material-symbols-outlined text-teal-400">admin_panel_settings</span>
          EduHealth Pro
        </div>
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Clinical Dashboard</div>
      </div>
      <nav className="flex-1 px-4 space-y-1 pt-4 overflow-y-auto no-scrollbar">
        <button 
          onClick={() => setView('dashboard')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive('dashboard') ? 'bg-teal-400/10 text-teal-400 font-bold border-r-2 border-teal-400' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900'}`}
        >
          <span className="material-symbols-outlined">analytics</span>
          <span className="text-sm">Báo cáo tổng quan</span>
        </button>

        <div className="py-2 px-4 text-[10px] font-black text-slate-600 uppercase tracking-widest mt-4">Quản lý Học sinh</div>
        <button className="w-full flex items-center space-x-3 px-4 py-2.5 text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all rounded-xl">
          <span className="material-symbols-outlined text-sm">person_search</span>
          <span className="text-sm">Tra cứu & Hồ sơ</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-2.5 text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all rounded-xl">
          <span className="material-symbols-outlined text-sm">family_restroom</span>
          <span className="text-sm">Liên hệ Phụ huynh</span>
        </button>

        <div className="py-2 px-4 text-[10px] font-black text-slate-600 uppercase tracking-widest mt-4">Công cụ y tế</div>
        <button 
          onClick={() => setView('admin-health')}
          className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl transition-all ${isActive('admin-health') ? 'bg-teal-400/10 text-teal-400' : 'text-slate-500 hover:text-teal-400 hover:bg-teal-400/5'}`}
        >
          <span className="material-symbols-outlined text-sm">edit_note</span>
          <span className="text-sm">Nhập HS lâm sàng</span>
        </button>
        <button 
          onClick={() => setView('admin-vitals')}
          className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl transition-all ${isActive('admin-vitals') ? 'bg-cyan-400/10 text-cyan-400' : 'text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/5'}`}
        >
          <span className="material-symbols-outlined text-sm">monitoring</span>
          <span className="text-sm">Chỉ số BMI & Thể trạng</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-2.5 text-slate-500 hover:text-emerald-400 hover:bg-emerald-400/5 transition-all rounded-xl">
          <span className="material-symbols-outlined text-sm">vaccines</span>
          <span className="text-sm">Cập nhật tiêm chủng</span>
        </button>

        <div className="py-2 px-4 text-[10px] font-black text-slate-600 uppercase tracking-widest mt-4">Điều phối & Nhắc nhở</div>
        <button className="w-full flex items-center space-x-3 px-4 py-2.5 text-slate-500 hover:text-amber-400 hover:bg-amber-400/5 transition-all rounded-xl">
          <span className="material-symbols-outlined text-sm">event_available</span>
          <span className="text-sm">Phê duyệt lịch khám</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-2.5 text-slate-500 hover:text-purple-400 hover:bg-purple-400/5 transition-all rounded-xl">
          <span className="material-symbols-outlined text-sm">campaign</span>
          <span className="text-sm">Gửi thông báo & Nhắc nợ</span>
        </button>
      </nav>
      <div className="px-8 pb-4">
        <button className="w-full py-4 rounded-2xl bg-gradient-to-br from-teal-400 to-indigo-600 text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-teal-900/40 hover:scale-[1.02] transition-all">
          Tạo phiên khám mới
        </button>
      </div>
      <div className="px-4 border-t border-white/5 pt-6 space-y-2">
        <button 
          onClick={() => setView('landing')}
          className="w-full flex items-center space-x-3 px-4 py-2 text-slate-600 hover:text-red-400 transition-colors text-xs font-medium uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-sm">power_settings_new</span>
          <span>Thoát Dashboard</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
