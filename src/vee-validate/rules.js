import { defineRule } from 'vee-validate'
import { required, email, min, max } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)

defineRule('regex_email', (value) => {
  if (!value || value === '') {
    return ''
  }
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry\.ge$/.test(value)) {
    return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)".'
  }
  return true
})

defineRule('regex_date', (value) => {
  if (value && !/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/.test(value)) {
    return 'შეიყვანეთ თარიღის სწორი ფორმატი.'
  }
  return true
})

defineRule('number', (value) => {
  if (isNaN(Number(value))) {
    return 'შეიყვანეთ რიცხვი სწორი ფორმატით.';
  }
  return true;
});

