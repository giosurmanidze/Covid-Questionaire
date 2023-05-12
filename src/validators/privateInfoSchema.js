import * as yup from 'yup'

const validationSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან')
    .required('სახელი აუცილებელია'),
  last_name: yup
    .string()
    .min(2, 'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან')
    .required('გვარი აუცილებელია'),
  email: yup
    .string()
    .email('გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)')
    .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry\.ge$/, 'მეილის ფორმატი არასწორია')
    .required('მეილი აუცილებელია')
})

export default validationSchema
