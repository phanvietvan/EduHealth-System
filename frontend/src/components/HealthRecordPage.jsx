import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { healthService } from '../services/api';

const HealthRecordPage = ({ setView, profileData, defaultTab }) => {
  const activeTab = defaultTab || 'history';
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await healthService.getRecord('HS2024001');
        setRecord(response.data);
      } catch (error) {
        console.error('Fetch health record error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const latestVitals = record?.vitals?.[record.vitals.length - 1] || {};

  if (loading) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
       <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-cyan-900/50 selection:text-cyan-100 font-manrope animate-in fade-in duration-500 pb-20">
      <Navbar setView={setView} currentView={`health-${activeTab}`} profileData={profileData} />

      <main className="pt-28 px-8 max-w-6xl mx-auto space-y-10 relative z-10">
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] opacity-20 blur-[100px] rounded-full bg-cyan-600/30 pointer-events-none"></div>
        <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] opacity-20 blur-[100px] rounded-full bg-teal-600/30 pointer-events-none"></div>

        <div className="space-y-3">
          <h1 className="text-5xl font-extrabold tracking-tighter text-white">Hồ sơ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Sức khỏe</span></h1>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">Theo dõi chi tiết lịch sử khám bệnh, chỉ số sinh tồn và các ghi chú chuyên môn từ đội ngũ y tế.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
          <div className="col-span-1 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6 bg-slate-900/50 backdrop-blur-md">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest border-l-2 border-amber-400 pl-3">Chỉ số Sinh tồn</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-amber-400">height</span>
                          <span className="text-sm font-bold text-slate-300">Chiều cao</span>
                      </div>
                      <div className="text-xl font-black text-white">{latestVitals.height || '--'} <span className="text-xs text-slate-500">cm</span></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-amber-400">weight</span>
                          <span className="text-sm font-bold text-slate-300">Cân nặng</span>
                      </div>
                      <div className="text-xl font-black text-white">{latestVitals.weight || '--'} <span className="text-xs text-slate-500">kg</span></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#ff6b6b]">favorite</span>
                          <span className="text-sm font-bold text-slate-300">Nhịp tim</span>
                      </div>
                      <div className="text-xl font-black text-white">{latestVitals.heartRate || '--'} <span className="text-xs text-slate-500">bpm</span></div>
                  </div>
                </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-[#ff6b6b]/20 space-y-4 bg-red-950/20 backdrop-blur-md">
                <h3 className="text-sm font-bold text-[#ff6b6b] mb-2 uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined">sick</span> Bệnh nền / Dị ứng</h3>
                <ul className="space-y-2">
                    <li className="text-sm text-slate-300 flex items-start gap-2"><span className="material-symbols-outlined text-xs text-[#ff6b6b] mt-0.5">warning</span> Dị ứng Hải sản (mức độ khá)</li>
                    <li className="text-sm text-slate-300 flex items-start gap-2"><span className="material-symbols-outlined text-xs text-[#ff6b6b] mt-0.5">warning</span> Viêm mũi dị ứng thời tiết</li>
                </ul>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 space-y-6">
             {/* Tabs Local Nav */}
             <div className="flex items-center space-x-6 border-b border-white/5 pb-0 mb-6 overflow-x-auto no-scrollbar">
              <button onClick={() => setView('health-history')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'history' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}>Lịch sử</button>
              <button onClick={() => setView('health-checkup')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'checkup' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}>Khám định kỳ</button>
              <button onClick={() => setView('health-vitals')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'vitals' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-500 hover:text-slate-300'}`}>Sinh tồn</button>
              <button onClick={() => setView('health-allergies')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'allergies' ? 'text-[#ff6b6b] border-b-2 border-[#ff6b6b]' : 'text-slate-500 hover:text-slate-300'}`}>Bệnh nền / Dị ứng</button>
              <button onClick={() => setView('health-notes')} className={`whitespace-nowrap pb-3 text-[11px] font-bold tracking-widest uppercase transition-all ${activeTab === 'notes' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-slate-500 hover:text-slate-300'}`}>Ghi chú</button>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full">
              {/* Tab 1: Lịch sử khám bệnh */}
              {activeTab === 'history' && (
                 <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6 bg-slate-900/50 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.05)]">
                     <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-cyan-400 pl-3">Toàn bộ hồ sơ lâm sàng</h3>
                     </div>                     
                     <div className="space-y-4">
                         {[1, 2, 3].map((item) => (
                             <div key={item} className="p-5 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer">
                                 <div className="flex justify-between items-start mb-3">
                                     <div>
                                         <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/50 text-cyan-400 border border-cyan-400/20 text-[10px] uppercase font-bold tracking-widest mb-2">
                                             Khám bệnh
                                         </div>
                                         <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">Viêm họng cấp tính</h4>
                                     </div>
                                     <span className="text-xs text-slate-500 font-bold">04/02/2026</span>
                                 </div>
                                 <p className="text-sm text-slate-400 leading-relaxed">Học sinh bị sốt nhẹ, đau họng. Đã cấp thuốc hạ sốt và kháng viêm. Yêu cầu đeo khẩu trang.</p>
                             </div>
                         ))}
                     </div>
                 </div>
              )}

              {/* Tab 2: Khám định kỳ */}
              {activeTab === 'checkup' && (
                 <div className="glass-panel p-8 rounded-2xl border border-emerald-400/20 space-y-6 bg-slate-900/50 backdrop-blur-md shadow-[0_0_30px_rgba(52,211,153,0.05)]">
                     <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-emerald-400 pl-3">Kết quả khám tổng quát</h3>
                     </div>
                     <div className="space-y-4">
                         {[1, 2].map((item) => (
                             <div key={item} className="p-6 bg-emerald-950/10 border border-emerald-400/20 rounded-xl hover:bg-emerald-950/30 transition-colors group">
                                 <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                      <div className="h-10 w-10 rounded-full bg-emerald-950/50 text-emerald-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined">health_and_safety</span>
                                      </div>
                                      <div>
                                        <h4 className="text-base font-bold text-emerald-400">Khám sức khỏe Học kỳ I</h4>
                                        <span className="text-[10px] text-slate-400 uppercase tracking-widest">Năm học 2025-2026</span>
                                      </div>
                                    </div>
                                    <span className="text-xs font-bold text-emerald-400/60 bg-emerald-400/10 px-2 py-1 rounded">Xếp loại: A</span>
                                 </div>
                                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-emerald-400/10 text-center">
                                    <div>
                                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Thị lực</p>
                                      <p className="text-sm text-white font-bold">10/10</p>
                                    </div>
                                    <div>
                                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Tai Mũi Họng</p>
                                      <p className="text-sm text-white font-bold">Bình thường</p>
                                    </div>
                                    <div>
                                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Tim mạch</p>
                                      <p className="text-sm text-white font-bold">Bình thường</p>
                                    </div>
                                    <div>
                                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Da liễu</p>
                                      <p className="text-sm text-white font-bold">Tốt</p>
                                    </div>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
              )}

              {/* Tab 3: Sinh tồn (Biểu đồ) */}
              {activeTab === 'vitals' && (
                 <div className="glass-panel p-8 rounded-2xl border border-amber-400/20 space-y-6 bg-slate-900/50 backdrop-blur-md shadow-[0_0_30px_rgba(251,191,36,0.05)]">
                     <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-amber-400 pl-3">Biểu đồ Sinh trưởng</h3>
                     </div>
                     <div className="p-8 border border-amber-400/10 rounded-xl bg-amber-950/10 flex flex-col items-center justify-center min-h-[300px]">
                        <span className="material-symbols-outlined text-6xl text-amber-400/30 mb-4 animate-pulse">show_chart</span>
                        <h4 className="text-lg font-bold text-amber-400">Xu hướng BMI Ổn định</h4>
                        <p className="text-sm text-slate-400 mt-2 text-center max-w-sm">Tỷ lệ tăng trưởng chiều cao và cân nặng nằm trong bách phân vị thứ 75 của độ tuổi. Đạt chuẩn WHO.</p>
                     </div>
                 </div>
              )}

              {/* Tab 4: Bệnh nền */}
              {activeTab === 'allergies' && (
                 <div className="glass-panel p-8 rounded-2xl border border-[#ff6b6b]/20 space-y-6 bg-slate-900/50 backdrop-blur-md shadow-[0_0_30px_rgba(255,107,107,0.05)]">
                     <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-bold text-[#ff6b6b] uppercase tracking-widest border-l-2 border-[#ff6b6b] pl-3">Khuyến cáo Y tế Yếu nhân</h3>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-[#ff6b6b]/30 bg-red-950/20">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-[#ff6b6b]">set_meal</span>
                            <h4 className="text-sm font-bold text-white">Dị ứng Hải sản</h4>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed mb-4">Cấm tuyệt đối dùng các sản phẩm từ tôm, cua, mực trong căng tin trường.</p>
                          <div className="text-[10px] text-[#ff6b6b] uppercase font-bold tracking-widest bg-[#ff6b6b]/10 p-2 rounded">Cấp cứu: EpiPen (Có tại phòng y tế)</div>
                        </div>
                        <div className="p-6 rounded-xl border border-[#ff6b6b]/30 bg-red-950/20">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-[#ff6b6b]">air</span>
                            <h4 className="text-sm font-bold text-white">Viêm mũi dị ứng</h4>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed mb-4">Nhạy cảm với phấn hoa và bụi mịn. Hạn chế hoạt động ngoài trời khi AQI {'>'} 150.</p>
                        </div>
                     </div>
                 </div>
              )}

              {/* Tab 5: Ghi chú bác sĩ */}
              {activeTab === 'notes' && (
                 <div className="glass-panel p-8 rounded-2xl border border-purple-400/20 space-y-6 bg-slate-900/50 backdrop-blur-md shadow-[0_0_30px_rgba(192,132,252,0.05)]">
                     <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest border-l-2 border-purple-400 pl-3">Lời khuyên Chuyên môn</h3>
                     </div>
                     <div className="space-y-4">
                        <div className="p-6 border-l-4 border-purple-400 bg-purple-950/10 rounded-r-xl">
                          <p className="text-sm text-slate-200 italic leading-relaxed">"Học sinh có biểu hiện mỏi mắt khi học vào buổi chiều do cường độ ánh sáng màn hình. Tôi đã khuyến nghị gia đình mua thêm kính chống ánh sáng xanh và tuân thủ quy tắc 20-20-20."</p>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-purple-400/20 flex items-center justify-center text-[10px] text-purple-400 font-bold">BS</div>
                                <span className="text-xs font-bold text-slate-400">Dr. Thompson - Nhãn khoa</span>
                            </div>
                            <span className="text-[10px] text-slate-500 uppercase">2 Tuần trước</span>
                          </div>
                        </div>
                        <div className="p-6 border-l-4 border-purple-400 bg-purple-950/10 rounded-r-xl">
                          <p className="text-sm text-slate-200 italic leading-relaxed">"Dinh dưỡng ổn định, nhắc nhở học sinh uống đủ 2L nước mỗi ngày trong những tháng nắng nóng để tránh sốc nhiệt."</p>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-purple-400/20 flex items-center justify-center text-[10px] text-purple-400 font-bold">YT</div>
                                <span className="text-xs font-bold text-slate-400">Y tá Maria - Trưởng ca Y tế</span>
                            </div>
                            <span className="text-[10px] text-slate-500 uppercase">1 Tháng trước</span>
                          </div>
                        </div>
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

export default HealthRecordPage;
