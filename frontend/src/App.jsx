import React, { useState } from 'react';

function App() {
  const [view, setView] = useState('landing'); // 'landing' or 'dashboard'

  if (view === 'dashboard') {
    return (
      <div className="flex min-h-screen overflow-x-hidden bg-background text-on-background font-manrope animate-in fade-in duration-500">
        {/* SideNavBar */}
        <aside className="hidden md:flex flex-col h-screen w-72 bg-slate-950 border-r border-white/5 py-8 space-y-6 fixed left-0 top-0 z-40">
          <div className="px-8 space-y-1">
            <div className="text-xl font-bold text-white tracking-tighter cursor-pointer" onClick={() => setView('landing')}>EduHealth Pro</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">Clinical Sanctuary</div>
          </div>
          <nav className="flex-1 px-4 space-y-2">
            <a className="flex items-center space-x-3 px-4 py-3 bg-white/5 text-teal-400 font-bold border-r-4 border-teal-400 translate-x-1 duration-200" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm">Dashboard</span>
            </a>
            <a className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">insights</span>
              <span className="text-sm">Analytics</span>
            </a>
            <a className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">folder_shared</span>
              <span className="text-sm">Patient Records</span>
            </a>
            <a className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">biotech</span>
              <span className="text-sm">Clinical Trials</span>
            </a>
            <a className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm">Settings</span>
            </a>
          </nav>
          <div className="px-8 pb-4">
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-secondary to-secondary-container text-on-secondary text-sm font-bold shadow-lg shadow-secondary/10 hover:shadow-secondary/20 transition-all duration-300">
              New Consultation
            </button>
          </div>
          <div className="px-4 border-t border-white/5 pt-6 space-y-2">
            <a className="flex items-center space-x-3 px-4 py-2 text-slate-600 hover:text-teal-300 transition-colors text-xs font-medium uppercase tracking-widest" href="#">
              <span className="material-symbols-outlined">help_outline</span>
              <span>Support</span>
            </a>
            <button 
              onClick={() => setView('landing')}
              className="w-full flex items-center space-x-3 px-4 py-2 text-slate-600 hover:text-teal-300 transition-colors text-xs font-medium uppercase tracking-widest"
            >
              <span className="material-symbols-outlined">logout</span>
              <span>Log Out</span>
            </button>
          </div>
        </aside>

        {/* Main Canvas */}
        <main className="flex-1 md:ml-72 min-h-screen relative pb-20">
          {/* TopNavBar */}
          <header className="fixed top-0 right-0 left-0 md:left-72 z-30 flex justify-between items-center px-8 h-20 bg-slate-900/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(10,25,47,0.15)]">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                <input className="bg-surface-container-high border-none rounded-full pl-10 pr-6 py-2 text-sm text-slate-200 w-64 focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-slate-500" placeholder="Tìm kiếm hồ sơ hoặc dữ liệu..." type="text"/>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <button className="text-slate-400 hover:text-slate-200 transition-colors relative">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full border-2 border-surface"></span>
                </button>
                <div className="h-10 w-10 rounded-full overflow-hidden border border-secondary/30 cursor-pointer" onClick={() => setView('landing')}>
                  <img alt="Nurse Thompson" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMXGsL97IwgT2i4T_n38_la1u9fak1PB7kMnVIXyl3JzlT21V5GYZ0nPE-NqrNWnMMXWzJpGHJu5Sh90HLNintvjB_aBujwCXh7H3OFwMHCpZvs7GCsiH9omxzABE_WhaxzexYanJrDzvX4N__WQYthK9O7qQrO_37tbcY3TKHT12-PhDI2AhJTB5fQLEnNioPBQ7bQs25nMG-c7es7nLbkNXJYDnekIvXFySLZhl8MwmVBia3PVnhAY0tcbAptoud7dJbMr95y9Fd"/>
                </div>
                <div className="hidden lg:block text-right">
                  <p className="text-sm font-bold text-white leading-tight">Y tá Thompson</p>
                  <p className="text-[10px] text-teal-400 uppercase tracking-tighter">Quản lý Cơ sở</p>
                </div>
              </div>
            </div>
          </header>

          {/* Content Body */}
          <div className="mt-24 px-8 max-w-7xl mx-auto space-y-10">
            {/* Hero Header */}
            <section className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="space-y-2">
                <h1 className="text-5xl font-extrabold tracking-tighter text-white">Campus Health Hub</h1>
                <p className="text-on-primary-container font-medium text-lg max-w-md">Chào buổi sáng, Nurse Thompson. Đây là báo cáo tổng quan về tình trạng sức khỏe cộng đồng hôm nay.</p>
              </div>
              <div className="flex space-x-3">
                <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>thermostat</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Nhiệt độ trung bình</p>
                    <p className="text-xl font-extrabold text-white">36.7°C</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bento Grid Stats */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-6">Lưu lượng bệnh nhân 24h</h3>
                  <div className="flex items-end space-x-4 h-32 mb-6">
                    <div className="w-full bg-slate-800 rounded-t-md h-[40%] group-hover:h-[60%] transition-all duration-500"></div>
                    <div className="w-full bg-secondary/40 rounded-t-md h-[70%] group-hover:h-[80%] transition-all duration-500"></div>
                    <div className="w-full bg-slate-800 rounded-t-md h-[55%] group-hover:h-[65%] transition-all duration-500"></div>
                    <div className="w-full bg-secondary rounded-t-md h-[90%] group-hover:h-[95%] transition-all duration-500"></div>
                    <div className="w-full bg-slate-800 rounded-t-md h-[30%] group-hover:h-[50%] transition-all duration-500"></div>
                    <div className="w-full bg-secondary/60 rounded-t-md h-[65%] group-hover:h-[75%] transition-all duration-500"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-4xl font-extrabold text-white">124</p>
                      <p className="text-xs text-secondary font-medium">+12% so với hôm qua</p>
                    </div>
                    <span className="material-symbols-outlined text-4xl text-white/10">trending_up</span>
                  </div>
                </div>
              </div>
              <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-secondary mb-4">vaccines</span>
                  <h3 className="text-slate-400 font-bold uppercase text-xs tracking-widest">Tiêm chủng</h3>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">88%</p>
                  <p className="text-xs text-slate-500">Tỷ lệ hoàn thành học kỳ</p>
                </div>
              </div>
              <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-error mb-4">warning</span>
                  <h3 className="text-slate-400 font-bold uppercase text-xs tracking-widest">Ca cấp cứu</h3>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">02</p>
                  <p className="text-xs text-error font-medium">Cần xử lý ngay lập tức</p>
                </div>
              </div>
            </section>

            {/* Main Content Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Recent Clinic Logs */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-extrabold tracking-tight">Recent Clinic Logs</h2>
                  <button className="text-xs font-bold text-teal-400 uppercase tracking-widest hover:text-teal-200 transition-colors">Xem tất cả</button>
                </div>
                <div className="bg-surface-container-low rounded-3xl overflow-hidden">
                  <div className="divide-y divide-white/5">
                    {/* Log Item */}
                    <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-5">
                        <div className="h-12 w-12 rounded-full bg-surface-container-high flex items-center justify-center text-teal-400 font-bold text-sm">
                          NH
                        </div>
                        <div>
                          <p className="font-bold text-white group-hover:text-secondary transition-colors">Nguyễn Huy Hoàng</p>
                          <p className="text-xs text-slate-500">Sơ cứu chấn thương thể thao • 10:15 AM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right hidden sm:block">
                          <p className="text-xs font-bold text-white">Đã xử lý</p>
                          <p className="text-[10px] text-slate-500">BS. Minh</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-600 group-hover:text-white transition-colors">chevron_right</span>
                      </div>
                    </div>
                    {/* Log Item */}
                    <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-5">
                        <div className="h-12 w-12 rounded-full bg-surface-container-high flex items-center justify-center text-teal-400 font-bold text-sm">
                          TL
                        </div>
                        <div>
                          <p className="font-bold text-white group-hover:text-secondary transition-colors">Trần Lan Anh</p>
                          <p className="text-xs text-slate-500">Kiểm tra thị lực định kỳ • 09:45 AM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right hidden sm:block">
                          <p className="text-xs font-bold text-white">Đang chờ</p>
                          <p className="text-[10px] text-slate-500">Phòng 204</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-600 group-hover:text-white transition-colors">chevron_right</span>
                      </div>
                    </div>
                    {/* Log Item */}
                    <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-5">
                        <div className="h-12 w-12 rounded-full bg-surface-container-high flex items-center justify-center text-teal-400 font-bold text-sm">
                          PV
                        </div>
                        <div>
                          <p className="font-bold text-white group-hover:text-secondary transition-colors">Phạm Văn Nam</p>
                          <p className="text-xs text-slate-500">Tư vấn tâm lý • 09:00 AM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right hidden sm:block">
                          <p className="text-xs font-bold text-white">Hoàn thành</p>
                          <p className="text-[10px] text-slate-500">Y tá Thompson</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-600 group-hover:text-white transition-colors">chevron_right</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Upcoming Screenings */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-extrabold tracking-tight">Upcoming Screenings</h2>
                </div>
                <div className="space-y-4">
                  <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 relative group">
                    <div className="flex justify-between items-start">
                      <span className="bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Sức khỏe Tim mạch</span>
                      <span className="text-slate-500 text-xs">Ngày mai</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Khám sức khỏe lớp 12A</h4>
                    <p className="text-sm text-slate-400">45 học sinh dự kiến. Cần chuẩn bị máy đo ECG và thiết bị đo huyết áp.</p>
                    <div className="pt-4 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <img alt="Team" className="h-8 w-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3lJJyP7cUpndWrKxy9VS3yG0-N5fE8qHyfFVGsFybn0tcWoAU73Zfq3-nYMP2XE6Sm5fejPbhEVGiBcDLzR0JdcNGNC7Vpfo1P_pa2b4vm-Sxof82cRVY5uSDa6j7tXXlHfGtfO-XYkHdVYiPV5_TsYcij4yT9SPCmACcrDsEtw178ZLD3Lz3eZURSki_VMXx50z3YWwtymSW3sq_1pVbAplEefkNbgepEEKxvH26eu_oqvsfevpqZBsyXm0B7rBRpNdlVOI45sWb"/>
                        <img alt="Team" className="h-8 w-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAevSKGOZgrnrs_kJppjTPhnNPmiZqMPUeiEByC_s5Aedct-fcBeu4Fwgyf6JhkDkG_NkR3gcybdlReSkAUxNSMSKjmMDGIaOT8bMViV6t5nRpOJTuJZEaecMkz0Ak73SefWmxX3Q84WoROVhweQBFT0l-f3bqOWmtvhLb0HeCxxHzmvYLs5bwMwf4FGdkpFvuAcwk3bTKbr4UZAv4W7BDSrO57XR7O0JAgsdpPX7z9EkMtbu19Z0YBwsOrfxhhu2gpWzNs6_aeP3L3"/>
                        <div className="h-8 w-8 rounded-full bg-slate-800 border-2 border-surface flex items-center justify-center text-[10px] font-bold text-slate-400">+3</div>
                      </div>
                      <button className="text-secondary text-sm font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                        <span>Chi tiết</span>
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-surface-container-high p-6 rounded-2xl border border-white/5 space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="bg-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Nha khoa</span>
                      <span className="text-slate-500 text-xs">Thứ 6, 24 Thg 5</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Kiểm tra Răng miệng khối 6</h4>
                    <p className="text-sm text-slate-400">Hợp tác với Nha khoa Quốc tế Sunshine.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="mt-20 w-full py-12 border-t border-white/5 bg-slate-950">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-6">
              <p className="text-slate-600 font-manrope text-xs font-medium uppercase tracking-widest">© 2024 EduHealth. Precision Medical Systems.</p>
              <div className="flex space-x-8">
                <a className="text-slate-600 hover:text-teal-300 transition-colors text-xs font-medium uppercase tracking-widest" href="#">Privacy Policy</a>
                <a className="text-slate-600 hover:text-teal-300 transition-colors text-xs font-medium uppercase tracking-widest" href="#">Terms of Service</a>
                <a className="text-slate-600 hover:text-teal-300 transition-colors text-xs font-medium uppercase tracking-widest" href="#">Compliance</a>
                <a className="text-slate-600 hover:text-teal-300 transition-colors text-xs font-medium uppercase tracking-widest" href="#">Contact</a>
              </div>
            </div>
          </footer>
        </main>

        {/* BottomNavBar (Mobile Only) */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-slate-900/80 backdrop-blur-xl border-t border-white/5 z-50 flex justify-around items-center px-6">
          <button className="text-teal-400 flex flex-col items-center space-y-1">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-bold">Trang chủ</span>
          </button>
          <button className="text-slate-500 flex flex-col items-center space-y-1">
            <span className="material-symbols-outlined">folder_shared</span>
            <span className="text-[10px] font-bold">Hồ sơ</span>
          </button>
          <button className="text-slate-500 flex flex-col items-center space-y-1">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-[10px] font-bold">Lịch</span>
          </button>
          <button className="text-slate-500 flex flex-col items-center space-y-1">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="text-[10px] font-bold">Cá nhân</span>
          </button>
        </nav>
      </div>
    );
  }

  // ELSE: Render Landing Page
  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen animate-in fade-in duration-500">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/40 backdrop-blur-xl border-b-[0.5px] border-slate-700/30 shadow-[0_0_20px_rgba(0,242,254,0.05)]">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-full">
          <div className="text-2xl font-thin tracking-tighter text-cyan-400 font-manrope">
            EduHealth
          </div>
          <div className="hidden lg:flex items-center gap-10">
            <a className="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1 font-manrope transition-all duration-300" href="#">Trang chủ</a>
            <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Hồ sơ</a>
            <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Hồ sơ sức khỏe</a>
            <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Tiêm chủng</a>
            <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Lịch trình</a>
            <a className="text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300" href="#">Thông báo</a>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setView('dashboard')}
              className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer active:scale-95 flex items-center gap-1" title="Dashboard"
            >
              <span className="material-symbols-outlined">grid_view</span>
            </button>
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
        {/* Landing Hero Section */}
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
                <button 
                  onClick={() => setView('dashboard')}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-fixed font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform cyber-glow">
                  Dashboard
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
      </main>
    </div>
  );
}

export default App;
