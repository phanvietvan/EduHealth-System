import React, { useState } from 'react';
import { healthService } from '../services/api';

const AdminHealthEntry = ({ setView }) => {
  const [formData, setFormData] = useState({
    userId: 'HS2024001', // Mock ID for now
    date: new Date().toISOString().split('T')[0],
    type: 'Khám tổng quát',
    provider: 'BS. Trần Bạch Mã',
    diagnosis: '',
    treatment: '',
    notes: '',
    status: 'Hoàn thành'
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await healthService.addConsultation(formData.userId, formData);
      setMessage('Đã lưu hồ sơ thành công!');
      setFormData({ ...formData, diagnosis: '', treatment: '', notes: '' });
    } catch (error) {
      setMessage('Lỗi khi lưu: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 glass-panel border border-white/10 rounded-3xl animate-in slide-in-from-bottom duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter">Nhập HS Lâm sàng</h2>
          <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest font-bold">Clinical Record Entry</p>
        </div>
        <button onClick={() => setView('dashboard')} className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {message && (
        <div className={`mb-6 p-4 rounded-xl text-sm font-bold ${message.includes('Lỗi') ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Mã học sinh</label>
            <input 
              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-teal-400 outline-none transition-all"
              value={formData.userId}
              onChange={(e) => setFormData({...formData, userId: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Ngày khám</label>
            <input 
              type="date"
              className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-teal-400 outline-none transition-all"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Loại hình khám</label>
          <select 
            className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-teal-400 outline-none transition-all"
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
          >
            <option className="bg-slate-900" value="Khám tổng quát">Khám tổng quát</option>
            <option className="bg-slate-900" value="Khám định kỳ">Khám định kỳ</option>
            <option className="bg-slate-900" value="Kiểm tra thị lực">Kiểm tra thị lực</option>
            <option className="bg-slate-900" value="Tư vấn tâm lý">Tư vấn tâm lý</option>
            <option className="bg-slate-900" value="Cấp cứu">Cấp cứu</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Chẩn đoán</label>
          <textarea 
            className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-teal-400 outline-none transition-all h-24"
            placeholder="Mô tả chẩn đoán bệnh lý..."
            value={formData.diagnosis}
            onChange={(e) => setFormData({...formData, diagnosis: e.target.value})}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Xử lý / Điều trị</label>
          <textarea 
            className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-teal-400 outline-none transition-all h-24"
            placeholder="Thuốc đã kê hoặc các bước xử lý..."
            value={formData.treatment}
            onChange={(e) => setFormData({...formData, treatment: e.target.value})}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-400 to-indigo-600 text-white font-black uppercase tracking-widest shadow-xl shadow-teal-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
        >
          {loading ? 'Đang xử lý...' : 'Lưu hồ sơ y tế'}
        </button>
      </form>
    </div>
  );
};

export default AdminHealthEntry;
