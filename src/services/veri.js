import request from '../utils/request';

export function fetch({ payload }) {
  return request('/api/schools.courseManagement.get', payload);
}
