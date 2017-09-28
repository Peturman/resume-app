export default function setCookie (key, value, iDay) {
  let oDate = new Date()
  oDate.setDate(oDate.getDate() + iDay)
  document.cookie = key + '=' + value + ';expires=' + oDate
}

export function removeCookie (key) {
  setCookie(key, '', -1)// 这里只需要把Cookie保质期退回一天便可以删除
}

export function getCookie (key) {
  let cookieArr = document.cookie.split('; ')
  for (let i = 0; i < cookieArr.length; i++) {
    let arr = cookieArr[i].split('=')
    if (arr[0] === key) {
      return arr[1]
    }
  }
  return false
}

// export default { setCookie, removeCookie, getCookie }
