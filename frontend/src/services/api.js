import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const profileService = {
  getProfile: (id) => api.get(`/profile/${id}`),
  updateProfile: (id, data) => api.put(`/profile/${id}`, data),
};

export const healthService = {
  getRecord: (userId) => api.get(`/health-records/${userId}`),
  addVitals: (userId, vitalsData) => api.post(`/health-records/${userId}/vitals`, vitalsData),
  updateConditions: (userId, data) => api.put(`/health-records/${userId}/conditions`, data),
  addConsultation: (userId, data) => api.post(`/health-records/${userId}/consultation`, data),
};

export const vaccinationService = {
  getVaccinations: (userId) => api.get(`/vaccinations/${userId}`),
  addVaccination: (userId, data) => api.post(`/vaccinations/${userId}`, data),
  giveConsent: (id, data) => api.put(`/vaccinations/consent/${id}`, data),
  updateStatus: (id, data) => api.put(`/vaccinations/status/${id}`, data),
};

export const scheduleService = {
  getSchedules: (userId) => api.get(`/schedule/${userId}`),
  createSchedule: (data) => api.post('/schedule', data),
  updateStatus: (id, status) => api.put(`/schedule/${id}/status`, { status }),
};

export const dashboardService = {
  getOverview: () => api.get('/dashboard/overview'),
  getStats: () => api.get('/dashboard/stats'),
};

export default api;
