import { configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import ka from '@vee-validate/i18n/dist/locale/ka.json'
import { setLocale } from '@vee-validate/i18n'

configure({
  generateMessage: localize({
    ka: {
      ...ka,
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
setLocale('ka')
