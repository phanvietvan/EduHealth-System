import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

const Profile = ({ setView, defaultTab }) => {
  // Setup data local tạm thời (sau này sẽ ghép với API GET /api/profile/:id mà backend đã chuẩn bị)
  const [profileData, setProfileData] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@eduhealth.local',
    role: 'student',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9oW7M-yLmsR6sBJbLQMGvDnME_E_h8Hl5JOXwbBw3-nlYNSGPL9c1wMJTTifqXgBW2qfonbGVVSRtu5iPGTfCvB15qayK85QLV3Ef15H3YUC9QsSxalGdMLm__ZfdVp-aLW3dbeCwRmqyZWEzEHndYxgRxpoTfD2qFWk5adxq6NXwqvQuy0wZLKdv29OLYKXUbRo_wwB0bpm19w6dJ0zQELx3gOrcdo4HPnxGpvm_dpRrw-tdjl4JMmYhFKV8oHZPogwFc5yOfkk9',
    studentInfo: {
      studentCode: 'HS2024001',
      className: '12A1'
    },
    parentInfo: {
      parentName: 'Nguyễn Văn B',
      phoneNumber: '0901234567',
      relationship: 'Bố'
    },
    dateOfBirth: '2006-05-15',
    gender: 'Nam',
    address: '123 Đường Health, Quận 1, TP.HCM'
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSave = () => {
    setLoading(true);
    // Giả lập call API PUT /api/profile
    setTimeout(() => {
      setLoading(false);
      setSuccessMsg('Cập nhật thông tin thành công!');
      setTimeout(() => setSuccessMsg(''), 3000);
    }, 1000);
  };

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section) {
      setProfileData({ ...profileData, [section]: { ...profileData[section], [name]: value } });
    } else {
      setProfileData({ ...profileData, [name]: value });
    }
  };

  const activeTab = defaultTab || 'basic';

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-cyan-900/50 selection:text-cyan-100 font-manrope animate-in fade-in duration-500 pb-20">
      <Navbar setView={setView} currentView="profile" profileData={profileData} />

      <main className="pt-28 px-8 max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] opacity-20 blur-[100px] rounded-full bg-cyan-600/30 pointer-events-none"></div>
        <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] opacity-20 blur-[100px] rounded-full bg-teal-600/30 pointer-events-none"></div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[0.5px] border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="material-symbols-outlined text-xs">manage_accounts</span>
            ID: {profileData.studentInfo.studentCode}
          </div>
          <h1 className="text-5xl font-extrabold tracking-tighter text-white">Quản lý <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Hồ sơ</span></h1>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">Cập nhật thông tin cá nhân, định danh học sinh và phương thức liên lạc với phụ huynh để hệ thống y tế hỗ trợ tốt nhất.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
          {/* Cột trái: Ảnh đại diện & Basic Info */}
          <div className="col-span-1 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center space-y-4 bg-slate-900/50 backdrop-blur-md shadow-xl hover:border-white/10 transition-colors">
              <div 
                className="relative group cursor-pointer w-32 h-32 rounded-full overflow-hidden border-[3px] border-slate-700 hover:border-purple-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                onClick={() => setView('profile-avatar')}
              >
                <img src={profileData.avatar} alt="Avatar" className="w-full h-full object-cover group-hover:blur-sm transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40">
                  <span className="material-symbols-outlined text-white text-2xl mb-1">add_a_photo</span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Thay ảnh</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{profileData.name}</h3>
                <p className="text-xs text-cyan-400 uppercase tracking-widest mt-1 font-bold">{profileData.role === 'student' ? 'Học sinh' : 'Phụ huynh'}</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 bg-slate-900/50 backdrop-blur-md">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 pb-3">Liên hệ nhanh</h4>
              <div className="space-y-4 pt-1">
                <div className="group">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1 mb-1"><span className="material-symbols-outlined text-[14px]">mail</span> Email</label>
                  <input type="text" readOnly value={profileData.email} className="w-full bg-transparent text-slate-300 text-sm border-b border-white/10 py-1 outline-none font-medium" />
                </div>
                <div className="group">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1 mb-1"><span className="material-symbols-outlined text-[14px]">home_pin</span> Địa chỉ thường trú</label>
                  <input type="text" name="address" value={profileData.address} onChange={(e) => handleChange(e)} className="w-full bg-transparent text-white text-sm border-b border-white/10 py-1 focus:border-cyan-400 outline-none transition-colors font-medium" />
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Khung Tab */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            
            {/* Tabs Local Nav */}
            <div className="flex items-center space-x-6 border-b border-white/5 pb-0 mb-6 overflow-x-auto no-scrollbar">
              <button onClick={() => setView('profile-basic')} className={`whitespace-nowrap pb-3 text-xs font-bold tracking-widest uppercase transition-all ${activeTab === 'basic' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}>Cơ bản</button>
              <button onClick={() => setView('profile-student')} className={`whitespace-nowrap pb-3 text-xs font-bold tracking-widest uppercase transition-all ${activeTab === 'student' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-500 hover:text-slate-300'}`}>Học sinh</button>
              <button onClick={() => setView('profile-parent')} className={`whitespace-nowrap pb-3 text-xs font-bold tracking-widest uppercase transition-all ${activeTab === 'parent' ? 'text-[#ff6b6b] border-b-2 border-[#ff6b6b]' : 'text-slate-500 hover:text-slate-300'}`}>Phụ huynh</button>
              <button onClick={() => setView('profile-avatar')} className={`whitespace-nowrap pb-3 text-xs font-bold tracking-widest uppercase transition-all ${activeTab === 'avatar' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-slate-500 hover:text-slate-300'}`}>Ảnh đại diện</button>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Tab: Thông tin cơ bản */}
              {activeTab === 'basic' && (
                <div className="glass-panel p-8 rounded-2xl border border-cyan-400/20 space-y-6 bg-slate-900/50 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.05)]">
                  <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest border-l-2 border-cyan-400 pl-3">Cập nhật thông tin cá nhân</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Họ và tên</label>
                      <input type="text" name="name" value={profileData.name} onChange={(e) => handleChange(e)} className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all" />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Giới tính</label>
                      <div className="relative">
                        <select name="gender" value={profileData.gender} onChange={(e) => handleChange(e)} className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-cyan-400 outline-none transition-all appearance-none cursor-pointer">
                          <option value="Nam">Nam</option>
                          <option value="Nữ">Nữ</option>
                          <option value="Khác">Khác</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-sm">expand_more</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ngày sinh</label>
                      <input type="date" name="dateOfBirth" value={profileData.dateOfBirth} onChange={(e) => handleChange(e)} className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-cyan-400 outline-none transition-all [color-scheme:dark]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Thông tin học sinh */}
              {activeTab === 'student' && (
                <div className="glass-panel p-8 rounded-2xl border border-teal-400/20 space-y-6 bg-slate-900/50 backdrop-blur-md shadow-[0_0_30px_rgba(20,184,166,0.05)]">
                  <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest border-l-2 border-teal-400 pl-3">Thông tin định danh</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mã định danh (ID)</label>
                      <input type="text" name="studentCode" value={profileData.studentInfo.studentCode} onChange={(e) => handleChange(e, 'studentInfo')} className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-teal-400 outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lớp học</label>
                      <input type="text" name="className" value={profileData.studentInfo.className} onChange={(e) => handleChange(e, 'studentInfo')} className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-teal-400 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-start gap-3">
                    <span className="material-symbols-outlined text-teal-400">info</span>
                    <p className="text-sm text-slate-300">Thông tin định danh dùng để kết nối với cơ sở dữ liệu y tế toàn trường. Nếu có sai sót, vui lòng liên hệ phòng y tế.</p>
                  </div>
                </div>
              )}

              {/* Tab: Thông tin phụ huynh */}
              {activeTab === 'parent' && (
                <div className="glass-panel p-8 rounded-2xl border border-[#ff6b6b]/20 space-y-6 bg-slate-900/50 backdrop-blur-md shadow-[0_0_30px_rgba(255,107,107,0.05)] relative overflow-hidden group">
                  <div className="absolute -top-4 -right-4 p-8 pointer-events-none opacity-5"><span className="material-symbols-outlined text-9xl">admin_panel_settings</span></div>
                  <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest border-l-2 border-[#ff6b6b] pl-3 relative z-10">Dành cho Parent</h3>
                  <div className="grid grid-cols-1 gap-6 relative z-10">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Người giám hộ chính</label>
                      <input type="text" name="parentName" value={profileData.parentInfo.parentName} onChange={(e) => handleChange(e, 'parentInfo')} className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ff6b6b]/50 focus:border-[#ff6b6b]/50 outline-none transition-all" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Điện thoại liên hệ khẩn cấp</label>
                        <input type="text" name="phoneNumber" value={profileData.parentInfo.phoneNumber} onChange={(e) => handleChange(e, 'parentInfo')} className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ff6b6b]/50 outline-none transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mối quan hệ</label>
                        <input type="text" name="relationship" value={profileData.parentInfo.relationship} onChange={(e) => handleChange(e, 'parentInfo')} placeholder="Bố, Mẹ..." className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ff6b6b]/50 outline-none transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Ảnh đại diện */}
              {activeTab === 'avatar' && (
                <div className="glass-panel p-8 rounded-2xl border border-purple-400/20 space-y-6 bg-slate-900/50 backdrop-blur-md shadow-[0_0_30px_rgba(192,132,252,0.05)] text-center h-full flex flex-col items-center justify-center min-h-[300px] border-dashed">
                  <div className="w-20 h-20 rounded-full bg-purple-400/10 flex items-center justify-center text-purple-400 mb-2">
                    <span className="material-symbols-outlined text-4xl">cloud_upload</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Cập nhật Ảnh đại diện</h3>
                  <p className="text-sm text-slate-400 max-w-sm">Kéo thả ảnh của bạn vào đây, hoặc nhấn để chọn một tập tin từ máy tính. Kích thước tối đa 5MB (JPG, PNG).</p>
                  <button className="px-6 py-2 rounded-full border border-purple-400 text-purple-400 font-bold text-xs uppercase tracking-widest hover:bg-purple-400/10 transition-colors mt-4">
                    Chọn tệp tin
                  </button>
                </div>
              )}
            </div>

            {/* Nút lưu chung */}
            <div className="flex items-center gap-6 justify-end pt-4">
              {successMsg && <span className="text-xs text-teal-400 font-bold uppercase tracking-widest animate-in fade-in slide-in-from-right-4 flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span> {successMsg}</span>}
              <button 
                onClick={handleSave}
                disabled={loading}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:scale-105 text-slate-950 font-extrabold tracking-widest text-xs uppercase transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center gap-2 border border-cyan-400/50"
              >
                {loading ? <span className="material-symbols-outlined animate-spin text-sm">refresh</span> : <span className="material-symbols-outlined text-sm">save</span>}
                {loading ? 'ĐANG LƯU...' : 'LƯU HỒ SƠ'}
              </button>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
