import { configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'

configure({
  generateMessage: localize({
    en: {
      ...en,
      messages: {
        required: 'ველი სავალდებულოა',
        email: 'შეიყვანეთ სწორი მეილის ფორმატი',
        min: 'ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
        max: 'ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან'
      },
      names: {}
    }
  })
})
