/**
* 通过crypto-js实现 加解密工具
* AES、HASH(MD5、SHA256)、base64
*/
import CryptoJS from 'crypto-js'

const KEY = CryptoJS.enc.Utf8.parse('1234567812345678')
const IV = CryptoJS.enc.Utf8.parse('1234567812345678')

let key = CryptoJS.enc.Utf8.parse(KEY)
let iv = CryptoJS.enc.Utf8.parse(IV)
/**
 * Encrypt 返回加密后的字符串
 * @param {String} data 未加密的字符串
 */
export function Encrypt (data) { // 加密
  let encrypted = CryptoJS.AES.encrypt(data, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString() // 返回的是base64格式的密文
}
/**
 * Decrypt 返回原始的字符串
 * @param {String} encrypted 加密的字符串
 */
export function Decrypt (encrypted) { // 解密
  let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return decrypted.toString(CryptoJS.enc.Utf8)
}
/**
 * PrefixZero 补零函数
 * @param {Number} num  需要补零的数字
 * @param {Number} length 需要保留的数字长度
 */
export function PrefixZero (num, length = 2) {
  return (Array(length).join(0) + num).slice(-length)
}
