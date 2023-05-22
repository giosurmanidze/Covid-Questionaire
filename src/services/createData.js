import axiosInstance from '../config/index'

export const createData = async (data) => {
  try {
    const response = await axiosInstance.post('', data)
    return response
  } catch (error) {
    console.error(error)
  }
}
