import axiosInstance from '../axios/axiosInstance'

export const createData = (data) => {
  return axiosInstance.post('', data)
}
