
export const required = (value) => {
  if (value.toString().trim().length === 0) {
    return true
  }
  return false
}

export const checkSpecialChars = (value) => {
  const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="
  for (let count = 0; count < specialChars.length; count += 1) {
    if (value.indexOf(specialChars[count]) > -1) {
      return true
    }
  }
  return false
}
