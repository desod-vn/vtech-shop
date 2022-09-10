import http from '@/utils/http'

const PATH = '/SanPham/';

export const list = (params = {}) => http.post(PATH + 'search-spv1', params);