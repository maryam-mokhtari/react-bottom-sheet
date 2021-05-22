const text = {
  SUBMIT: {
    FA: 'ثبت',
    EN: '',
  },
  CANCEL: {
    FA: 'انصراف',
    EN: '',
  },
  UNDERSTOOD: {
    FA: 'متوجه شدم',
    EN: '',
  },
  CONFIRMATION: {
    FA: 'شارژ کیف پول',
    EN: '',
  },
  CONFIRMATION_DESCRIPTION: {
    FA: 'شارژ کیف پول انجام خواهد شد. آیا مطمئن هستید؟',
    EN: '',
  },
  WALLET_CHARGE: {
    FA: 'شارژ کیف پول',
    EN: '',
  },
  TOMAN: {
    FA: 'تومان',
    EN: '',
  }
}

const Capitalize =  textString => textString[0].toUpperCase() + textString.substr(1).toLowerCase()

const localeText = (language = 'FA') =>
  Object.keys(text).reduce(
    (newText, key) => ({ ...newText, [key]: text[key][language] || Capitalize(key) }), {}
  )

export default localeText