const text = {
}

const Capitalize =  textString => textString[0].toUpperCase() + textString.substr(1).toLowerCase()

const localeText = (language = 'FA') =>
  Object.keys(text).reduce(
    (newText, key) => ({ ...newText, [key]: text[key][language] || Capitalize(key) }), {}
  )

export default localeText