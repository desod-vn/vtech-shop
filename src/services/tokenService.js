import http from '@/utils/http'

const PATH = '/User/';

const TEST = {
  taiKhoan: 'anhkoy91',
  matKhau: 'Anhkoy1991'
}

export const getToken = (params = {}) => http.post(PATH + 'authenticate', TEST);