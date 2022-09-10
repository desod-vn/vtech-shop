import http from '@/utils/http'

const PATH = '/SanPham/';

export const list = (params = {}) => http.get(PATH + 'LoaiSanPham', {params});