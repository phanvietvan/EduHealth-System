import React from 'react';

const Navbar = ({ setView, currentView, profileData }) => {

  const getNavClass = (viewName) => {
    return currentView === viewName
      ? "flex items-center gap-1 text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1 font-manrope transition-all duration-300 cursor-pointer"
      : "flex items-center gap-1 text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300 cursor-pointer pb-1 border-b-2 border-transparent";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/40 backdrop-blur-xl border-b-[0.5px] border-slate-700/30 shadow-[0_0_20px_rgba(0,242,254,0.05)]">
      <div className="flex justify-between items-center px-8 h-16 w-full max-w-full">
        <div className="text-2xl font-thin tracking-tighter text-cyan-400 font-manrope cursor-pointer" onClick={() => setView('landing')}>
          EduHealth
        </div>
        <div className="hidden lg:flex items-center gap-10">
          <a className={getNavClass('landing')} onClick={() => setView('landing')}>Trang chủ</a>
          <div className="relative group/nav">
            <a className={getNavClass('profile')} onClick={() => setView('profile')}>
              Hồ sơ
              <span className="material-symbols-outlined text-sm transition-transform group-hover/nav:rotate-180">expand_more</span>
            </a>
            <div className="absolute left-0 top-full mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 z-50 flex flex-col py-2 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent">
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('profile-student')}>
                  <span className="material-symbols-outlined text-cyan-400 mt-0.5">school</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-cyan-400 transition-colors">Thông tin học sinh</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Tên, lớp, mã HS</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('profile-parent')}>
                  <span className="material-symbols-outlined text-[#ff6b6b] mt-0.5">family_restroom</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-[#ff6b6b] transition-colors">Thông tin phụ huynh</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Dành cho Parent</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('profile-basic')}>
                  <span className="material-symbols-outlined text-teal-400 mt-0.5">manage_accounts</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-teal-400 transition-colors">Cập nhật cơ bản</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Đổi thông tin cá nhân</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('profile-avatar')}>
                  <span className="material-symbols-outlined text-purple-400 mt-0.5">add_a_photo</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-purple-400 transition-colors">Ảnh đại diện</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Thay Avatar</div>
                  </div>
                </a>
            </div>
          </div>
          <div className="relative group/health">
            <a className={getNavClass('health')} onClick={() => setView('health')}>
              Hồ sơ sức khỏe
              <span className="material-symbols-outlined text-sm transition-transform group-hover/health:rotate-180">expand_more</span>
            </a>
            <div className="absolute left-0 top-full mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover/health:opacity-100 group-hover/health:visible transition-all duration-300 translate-y-2 group-hover/health:translate-y-0 z-50 flex flex-col py-2 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent">
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('health-history')}>
                  <span className="material-symbols-outlined text-cyan-400 mt-0.5">medical_information</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-cyan-400 transition-colors">Lịch sử khám bệnh</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Toàn bộ hồ sơ lâm sàng</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('health-checkup')}>
                  <span className="material-symbols-outlined text-emerald-400 mt-0.5">monitor_heart</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-emerald-400 transition-colors">Kết quả khám định kỳ</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Các kỳ kiểm tra sức khỏe</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('health-vitals')}>
                  <span className="material-symbols-outlined text-amber-400 mt-0.5">scale</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-amber-400 transition-colors">Chiều cao / Cân nặng</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Biểu đồ sinh trưởng</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('health-allergies')}>
                  <span className="material-symbols-outlined text-[#ff6b6b] mt-0.5">sick</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-[#ff6b6b] transition-colors">Bệnh nền / Dị ứng</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Khuyến cáo y tế</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('health-notes')}>
                  <span className="material-symbols-outlined text-purple-400 mt-0.5">note_alt</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-purple-400 transition-colors">Ghi chú từ bác sĩ</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Lời khuyên chuyên môn</div>
                  </div>
                </a>
            </div>
          </div>
          <div className="relative group/vaccine">
            <a className={getNavClass('vaccination')} onClick={() => setView('vaccination')}>
              Tiêm chủng
              <span className="material-symbols-outlined text-sm transition-transform group-hover/vaccine:rotate-180">expand_more</span>
            </a>
            <div className="absolute left-0 top-full mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover/vaccine:opacity-100 group-hover/vaccine:visible transition-all duration-300 translate-y-2 group-hover/vaccine:translate-y-0 z-50 flex flex-col py-2 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent">
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('vaccination-upcoming')}>
                  <span className="material-symbols-outlined text-cyan-400 mt-0.5">event_upcoming</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-cyan-400 transition-colors">Lịch tiêm sắp tới</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Nhắc nhở tiêm phòng</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('vaccination-history')}>
                  <span className="material-symbols-outlined text-emerald-400 mt-0.5">history</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-emerald-400 transition-colors">Lịch sử tiêm</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Hồ sơ đã hoàn thành</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('vaccination-status')}>
                  <span className="material-symbols-outlined text-amber-400 mt-0.5">pending_actions</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-amber-400 transition-colors">Trạng thái tiêm</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Đã tiêm / Chưa tiêm</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-emerald-500/10 transition-colors group/item flex items-start gap-3 cursor-pointer border-t border-white/5 pt-3" onClick={() => setView('vaccination-confirm')}>
                  <span className="material-symbols-outlined text-[#ff6b6b] mt-0.5 animate-pulse">verified</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-[#ff6b6b] transition-colors">Xác nhận Phụ huynh</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Đồng ý tiêm chủng</div>
                  </div>
                </a>
            </div>
          </div>
          <div className="relative group/schedule">
            <a className={getNavClass('schedule')} onClick={() => setView('schedule')}>
              Lịch trình
              <span className="material-symbols-outlined text-sm transition-transform group-hover/schedule:rotate-180">expand_more</span>
            </a>
            <div className="absolute left-0 top-full mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover/schedule:opacity-100 group-hover/schedule:visible transition-all duration-300 translate-y-2 group-hover/schedule:translate-y-0 z-50 flex flex-col py-2 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent">
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('schedule-medical')}>
                  <span className="material-symbols-outlined text-cyan-400 mt-0.5">calendar_clock</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-cyan-400 transition-colors">Lịch khám</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Lịch hẹn y tế</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('schedule-vaccine')}>
                  <span className="material-symbols-outlined text-emerald-400 mt-0.5">vaccines</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-emerald-400 transition-colors">Lịch tiêm</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Kế hoạch tiêm chủng</div>
                  </div>
                </a>
                <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer" onClick={() => setView('schedule-reminder')}>
                  <span className="material-symbols-outlined text-amber-400 mt-0.5 animate-bounce">alarm_on</span>
                  <div>
                    <div className="text-sm font-bold text-white group-hover/item:text-amber-400 transition-colors">Nhắc lịch</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Reminder / Báo thức</div>
                  </div>
                </a>
            </div>
          </div>
          <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300 cursor-pointer">Thông báo</a>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setView('dashboard')}
            className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer active:scale-95 flex items-center gap-1" title="Bảng điều khiển Y tế"
          >
            <span className="material-symbols-outlined">grid_view</span>
          </button>
          
          {profileData ? (
            <div className="h-8 w-8 rounded-full overflow-hidden border border-cyan-400/50 hover:border-cyan-400 transition-colors cursor-pointer shadow-[0_0_10px_rgba(34,211,238,0.2)]" onClick={() => setView('profile')}>
              <img alt="User profile" className="w-full h-full object-cover" src={profileData.avatar} />
            </div>
          ) : (
            <button className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer active:scale-95">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
