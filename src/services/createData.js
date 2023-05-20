import axiosInstance from '../config/axiosInstance'

export const createData = async (data) => {
  try {
    const response = await axiosInstance.post('', data)
    return response
  } catch (error) {
    console.error(error)
  }
}
