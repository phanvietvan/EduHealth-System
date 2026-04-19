import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import HealthRecordPage from './components/HealthRecordPage';
import VaccinationPage from './components/VaccinationPage';
import SchedulePage from './components/SchedulePage';
import AdminHealthEntry from './components/AdminHealthEntry';
import AdminVitalsEntry from './components/AdminVitalsEntry';
import AdminSidebar from './components/AdminSidebar';
import { profileService } from './services/api';

function App() {
  const [view, setViewState] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const baseHash = hash.split('-')[0];
    const validViews = ['landing', 'dashboard', 'profile', 'health', 'vaccination', 'schedule', 'admin-health', 'admin-vitals', 'admin-vaccine'];
    return validViews.includes(baseHash) ? hash : 'landing';
  });

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Default User ID for demo/no-auth context
  const currentUserId = 'HS2024001'; 

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // In a real app, this would be the logged-in user id
        // We'll fetch a profile to ensure we have real data from DB
        const response = await profileService.getProfile(currentUserId);
        setProfile(response.data);
      } catch (err) {
        console.error('Profile fetch error:', err);
        setError('Không thể kết nối đến máy chủ. Vui lòng kiểm tra backend.');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    window.history.replaceState({ view }, '', `#${view}`);
    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        setViewState(event.state.view);
      } else {
        const hash = window.location.hash.replace('#', '');
        const baseHash = hash.split('-')[0];
        setViewState(['landing', 'dashboard', 'profile', 'health', 'vaccination', 'schedule', 'admin-health', 'admin-vitals'].includes(baseHash) ? hash : 'landing');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const setView = (newView) => {
    if (newView !== view) {
      window.history.pushState({ view: newView }, '', `#${newView}`);
      setViewState(newView);
    }
  };

  const baseView = view.split('-')[0];
  const subView = view.split('-')[1] || 'basic';

  if (loading) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-teal-400 font-bold tracking-widest text-xs uppercase animate-pulse">Initializing EduHealth...</p>
      </div>
    </div>
  );

  if (baseView === 'profile') return <Profile setView={setView} profileData={profile} defaultTab={subView} />;
  if (baseView === 'health') return <HealthRecordPage setView={setView} profileData={profile} defaultTab={subView} />;
  if (baseView === 'vaccination') return <VaccinationPage setView={setView} profileData={profile} defaultTab={subView} />;
  if (baseView === 'schedule') return <SchedulePage setView={setView} profileData={profile} defaultTab={subView} />;
  
  // ADMIN Views
  if (baseView === 'admin' && subView === 'health') return (
    <div className="flex min-h-screen bg-[#020617]">
       {/* Sidebar for Admin Context */}
       <AdminSidebar view={view} setView={setView} />
       <main className="flex-1 md:ml-72 p-8">
          <AdminHealthEntry setView={setView} />
       </main>
    </div>
  );
  if (baseView === 'admin' && subView === 'vitals') return (
    <div className="flex min-h-screen bg-[#020617]">
       <AdminSidebar view={view} setView={setView} />
       <main className="flex-1 md:ml-72 p-8">
          <AdminVitalsEntry setView={setView} />
       </main>
    </div>
  );

  if (baseView === 'dashboard') {
    return (
      <div className="flex min-h-screen overflow-x-hidden bg-background text-on-background font-manrope animate-in fade-in duration-500">
        <AdminSidebar view={view} setView={setView} />

        {/* Main Canvas */}
        <main className="flex-1 md:ml-72 min-h-screen relative pb-20 bg-[#020617]">
          {/* TopNavBar */}
          <header className="fixed top-0 right-0 left-0 md:left-72 shadow-2xl z-30 flex justify-between items-center px-8 h-20 bg-slate-950/40 backdrop-blur-2xl border-b border-white/5">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
                <input className="bg-white/5 border border-white/5 rounded-xl pl-10 pr-6 py-2 text-sm text-slate-200 w-80 focus:ring-1 focus:ring-teal-400 transition-all placeholder:text-slate-600" placeholder="Nhập tên học sinh hoặc mã số nhân viên..." type="text"/>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-white leading-tight font-manrope">Y tá Thompson</p>
                  <p className="text-[10px] text-teal-400 font-black uppercase tracking-[0.1em]">Quản trị viên Cơ sở</p>
                </div>
                <div className="h-10 w-10 rounded-xl overflow-hidden border border-teal-400/30 cursor-pointer shadow-lg hover:border-teal-400 transition-all">
                  <img alt="Admin" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMXGsL97IwgT2i4T_n38_la1u9fak1PB7kMnVIXyl3JzlT21V5GYZ0nPE-NqrNWnMMXWzJpGHJu5Sh90HLNintvjB_aBujwCXh7H3OFwMHCpZvs7GCsiH9omxzABE_WhaxzexYanJrDzvX4N__WQYthK9O7qQrO_37tbcY3TKHT12-PhDI2AhJTB5fQLEnNioPBQ7bQs25nMG-c7es7nLbkNXJYDnekIvXFySLZhl8MwmVBia3PVnhAY0tcbAptoud7dJbMr95y9Fd"/>
                </div>
              </div>
            </div>
          </header>


          {/* Content Body */}
          <div className="mt-24 px-8 max-w-7xl mx-auto space-y-10">
            {/* Hero Header */}
            <section className="flex flex-col md:flex-row justify-between items-end gap-6 bg-gradient-to-r from-teal-400/5 to-transparent p-8 rounded-3xl border border-teal-400/10">
              <div className="space-y-2">
                <h1 className="text-5xl font-black tracking-tighter text-white">Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">Hub Center</span></h1>
                <p className="text-slate-400 font-medium text-lg max-w-lg leading-relaxed">Xin chào, Thompson. Hệ thống đã sẵn sàng cho các lượt khám và nhập liệu mới sáng nay.</p>
              </div>
              <div className="flex space-x-3">
                <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center space-x-4 bg-white/5 backdrop-blur-md">
                  <div className="h-12 w-12 rounded-lg bg-teal-400/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-teal-400" style={{ fontVariationSettings: "'FILL' 1" }}>thermostat</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Nhiệt độ cơ thể</p>
                    <p className="text-xl font-extrabold text-white">36.7°C</p>
                  </div>
                </div>
                <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center space-x-4 bg-white/5 backdrop-blur-md">
                  <div className="h-12 w-12 rounded-lg bg-amber-400/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Nhịp tim</p>
                    <p className="text-xl font-extrabold text-white">72 bpm</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bento Grid Stats */}
            <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-2 glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group bg-slate-900/40 cursor-pointer" onClick={() => setView('health-vitals')}>
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><span className="material-symbols-outlined text-9xl">monitoring</span></div>
                <div className="relative z-10">
                  <h3 className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-6">Chỉ số phát triển (BMI)</h3>
                  <div className="flex items-end space-x-4 h-32 mb-6">
                    <div className="w-full bg-slate-800 rounded-t-md h-[50%]"></div>
                    <div className="w-full bg-teal-400/40 rounded-t-md h-[60%]"></div>
                    <div className="w-full bg-slate-800 rounded-t-md h-[55%]"></div>
                    <div className="w-full bg-teal-400 rounded-t-md h-[80%]"></div>
                    <div className="w-full bg-slate-800 rounded-t-md h-[70%]"></div>
                    <div className="w-full bg-teal-400/60 rounded-t-md h-[40%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-4xl font-extrabold text-white">20.4</p>
                      <p className="text-xs text-teal-400 font-bold uppercase tracking-widest">Thể trạng: Bình thường</p>
                    </div>
                    <button className="material-symbols-outlined text-4xl text-white/10 group-hover:text-teal-400/40 transition-colors">trending_up</button>
                  </div>
                </div>
              </div>
              <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between bg-slate-900/40 hover:border-emerald-400/30 transition-all cursor-pointer" onClick={() => setView('vaccination-status')}>
                <div>
                  <span className="material-symbols-outlined text-emerald-400 mb-4 text-3xl">verified</span>
                  <h3 className="text-slate-400 font-bold uppercase text-xs tracking-widest">Tiêm chủng</h3>
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-white">12/15</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Số mũi đã hoàn thành</p>
                </div>
              </div>
              <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between bg-slate-900/40 hover:border-[#ff6b6b]/30 transition-all cursor-pointer" onClick={() => setView('schedule-reminder')}>
                <div>
                  <span className="material-symbols-outlined text-[#ff6b6b] mb-4 text-3xl">event_upcoming</span>
                  <h3 className="text-slate-400 font-bold uppercase text-xs tracking-widest">Sắp diễn ra</h3>
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-white">03</p>
                  <p className="text-xs text-[#ff6b6b] font-bold uppercase tracking-widest">Lịch trình trong tuần</p>
                </div>
              </div>
            </section>

            {/* Main Content Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Recent Activity */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-extrabold tracking-tight">Hoạt động gần đây</h2>
                  <button onClick={() => setView('health-history')} className="text-xs font-bold text-teal-400 uppercase tracking-widest hover:text-teal-200 transition-colors">Xem tất cả</button>
                </div>
                <div className="bg-slate-900/40 rounded-3xl overflow-hidden border border-white/5 backdrop-blur-sm">
                  <div className="divide-y divide-white/5">
                    {/* Log Item */}
                    <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group" onClick={() => setView('health-history')}>
                      <div className="flex items-center space-x-5">
                        <div className="h-12 w-12 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400">
                          <span className="material-symbols-outlined">stethoscope</span>
                        </div>
                        <div>
                          <p className="font-bold text-white group-hover:text-teal-400 transition-colors">Khám sức khỏe tổng quát</p>
                          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold font-manrope">Học kỳ I • Hoàn tất</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right hidden sm:block">
                          <p className="text-xs font-bold text-white">Xếp loại A</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-widest">BS. Trần Bạch Mã</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-600 group-hover:text-white transition-colors">chevron_right</span>
                      </div>
                    </div>
                    {/* Log Item */}
                    <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group" onClick={() => setView('vaccination-history')}>
                      <div className="flex items-center space-x-5">
                        <div className="h-12 w-12 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                          <span className="material-symbols-outlined">vaccines</span>
                        </div>
                        <div>
                          <p className="font-bold text-white group-hover:text-emerald-400 transition-colors">Tiêm phòng Uốn ván</p>
                          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Mũi 2 • Đã tiêm</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right hidden sm:block">
                          <p className="text-xs font-bold text-white">Y tá Maria</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-widest">Trạm y tế trường</p>
                        </div>
                        <span className="material-symbols-outlined text-slate-600 group-hover:text-white transition-colors">chevron_right</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Upcoming Highlights */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-extrabold tracking-tight">Tiếp theo</h2>
                </div>
                <div className="space-y-4">
                  <div className="glass-panel p-6 rounded-3xl border border-white/5 space-y-4 relative group bg-indigo-500/5 hover:border-indigo-400/50 transition-all cursor-pointer" onClick={() => setView('schedule-medical')}>
                    <div className="flex justify-between items-start">
                      <span className="bg-indigo-400/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border border-indigo-400/20">Lịch khám răng</span>
                      <span className="text-slate-500 text-xs font-bold">Thứ Hai</span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">Tái khám định kỳ</h4>
                    <p className="text-sm text-slate-400">Kiểm tra bộ phận nha khoa học đường tại BV Răng Hàm Mặt.</p>
                    <div className="pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <div className="h-6 w-6 rounded-full bg-indigo-400/20 flex items-center justify-center text-[10px] text-indigo-400 font-bold">PT</div>
                         <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest transition-colors font-manrope">BS. Phan Thành</span>
                      </div>
                      <button className="text-indigo-400 text-sm font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                        <span>Lịch</span>
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="mt-20 w-full py-12 border-t border-white/5 bg-slate-950/50">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-6 text-center">
              <p className="text-slate-600 font-manrope text-xs font-bold uppercase tracking-widest">© 2026 EduHealth Pro • Hệ thống Quản lý Y tế Học đường Toàn diện</p>
              <div className="flex space-x-8">
                <a className="text-slate-600 hover:text-teal-300 transition-colors text-xs font-bold uppercase tracking-widest" href="#">Chính sách</a>
                <a className="text-slate-600 hover:text-teal-300 transition-colors text-xs font-bold uppercase tracking-widest" href="#">Điều khoản</a>
                <a className="text-slate-600 hover:text-teal-300 transition-colors text-xs font-bold uppercase tracking-widest" href="#">Liên hệ</a>
              </div>
            </div>
          </footer>
        </main>

        {/* BottomNavBar (Mobile Only) */}
        <nav className="md:hidden fixed bottom-4 left-4 right-4 h-16 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 flex justify-around items-center px-6">
          <button onClick={() => setView('dashboard')} className={`${baseView === 'dashboard' ? 'text-teal-400' : 'text-slate-500'} flex flex-col items-center space-y-1`}>
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[9px] font-bold uppercase tracking-widest font-manrope font-manrope">Home</span>
          </button>
          <button onClick={() => setView('health')} className={`${baseView === 'health' ? 'text-teal-400' : 'text-slate-500'} flex flex-col items-center space-y-1`}>
            <span className="material-symbols-outlined">folder_shared</span>
            <span className="text-[9px] font-bold uppercase tracking-widest font-manrope">Health</span>
          </button>
          <button onClick={() => setView('schedule')} className={`${baseView === 'schedule' ? 'text-teal-400' : 'text-slate-500'} flex flex-col items-center space-y-1`}>
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-[9px] font-bold uppercase tracking-widest font-manrope">Schedule</span>
          </button>
          <button onClick={() => setView('profile')} className={`${baseView === 'profile' ? 'text-teal-400' : 'text-slate-500'} flex flex-col items-center space-y-1`}>
            <span className="material-symbols-outlined">person</span>
            <span className="text-[9px] font-bold uppercase tracking-widest font-manrope">Me</span>
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
            <a className="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1 font-manrope transition-all duration-300 cursor-pointer" onClick={() => setView('landing')}>Trang chủ</a>
            <div className="relative group/nav">
              <a className="flex items-center gap-1 text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300 cursor-pointer" onClick={() => setView('profile')}>
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
              <a className="flex items-center gap-1 text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300 cursor-pointer" onClick={() => setView('health')}>
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
              <a className="flex items-center gap-1 text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
                Tiêm chủng
                <span className="material-symbols-outlined text-sm transition-transform group-hover/vaccine:rotate-180">expand_more</span>
              </a>
              <div className="absolute left-0 top-full mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover/vaccine:opacity-100 group-hover/vaccine:visible transition-all duration-300 translate-y-2 group-hover/vaccine:translate-y-0 z-50 flex flex-col py-2 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent">
                  <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer">
                    <span className="material-symbols-outlined text-cyan-400 mt-0.5">event_upcoming</span>
                    <div>
                      <div className="text-sm font-bold text-white group-hover/item:text-cyan-400 transition-colors">Lịch tiêm sắp tới</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Nhắc nhở tiêm phòng</div>
                    </div>
                  </a>
                  <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer">
                    <span className="material-symbols-outlined text-emerald-400 mt-0.5">history</span>
                    <div>
                      <div className="text-sm font-bold text-white group-hover/item:text-emerald-400 transition-colors">Lịch sử tiêm</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Hồ sơ đã hoàn thành</div>
                    </div>
                  </a>
                  <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer">
                    <span className="material-symbols-outlined text-amber-400 mt-0.5">pending_actions</span>
                    <div>
                      <div className="text-sm font-bold text-white group-hover/item:text-amber-400 transition-colors">Trạng thái tiêm</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Đã tiêm / Chưa tiêm</div>
                    </div>
                  </a>
                  <a className="px-4 py-3 hover:bg-emerald-500/10 transition-colors group/item flex items-start gap-3 cursor-pointer border-t border-white/5 pt-3">
                    <span className="material-symbols-outlined text-[#ff6b6b] mt-0.5 animate-pulse">verified</span>
                    <div>
                      <div className="text-sm font-bold text-white group-hover/item:text-[#ff6b6b] transition-colors">Xác nhận Phụ huynh</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Đồng ý tiêm chủng</div>
                    </div>
                  </a>
              </div>
            </div>
            <div className="relative group/schedule">
              <a className="flex items-center gap-1 text-slate-400 font-medium font-manrope hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
                Lịch trình
                <span className="material-symbols-outlined text-sm transition-transform group-hover/schedule:rotate-180">expand_more</span>
              </a>
              <div className="absolute left-0 top-full mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover/schedule:opacity-100 group-hover/schedule:visible transition-all duration-300 translate-y-2 group-hover/schedule:translate-y-0 z-50 flex flex-col py-2 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:bg-transparent">
                  <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer">
                    <span className="material-symbols-outlined text-cyan-400 mt-0.5">calendar_clock</span>
                    <div>
                      <div className="text-sm font-bold text-white group-hover/item:text-cyan-400 transition-colors">Lịch khám</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Lịch hẹn y tế</div>
                    </div>
                  </a>
                  <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer">
                    <span className="material-symbols-outlined text-emerald-400 mt-0.5">vaccines</span>
                    <div>
                      <div className="text-sm font-bold text-white group-hover/item:text-emerald-400 transition-colors">Lịch tiêm</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Kế hoạch tiêm chủng</div>
                    </div>
                  </a>
                  <a className="px-4 py-3 hover:bg-white/5 transition-colors group/item flex items-start gap-3 cursor-pointer">
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
