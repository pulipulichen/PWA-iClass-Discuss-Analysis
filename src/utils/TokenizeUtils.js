
import PuliPostMessageAPI from './puli-post-message-api/puli-post-message-api.js'
let debug = false
let inited = false
let api

let url = 'https://pulipulichen.github.io/jieba-js/index.html?api=1'
if (location.href.startsWith('http://127.0.0.1:')) {
  url = 'http://127.0.0.1:5501/index.html?api=1'
}

export default {
  cache: {},
  generateKey (text) {
    if (Array.isArray(text)) {
      text = JSON.stringify(text)
    }
    return 'token-' + text
  },
  tokenize: async function (text, filter = {}) {
    
    this.init()
    let key = this.generateKey(text)
    if (this.cache[key]) {
      return this.cache[key]
    }
    
    let isArray = false
    if (Array.isArray(text)) {
      text = 'message\n' + text.join('\n')
      isArray = true
    }
    
    //console.log(data)
    let data = {
      inputText: text,
      ...filter
    }
    

    let result = await api.send(url, data, {
      debug
    })
    
    // console.log(isArray, {text}, result)

    if (isArray === true) {
      result = result.split('\n')
      // result.shift()
    }

    this.cache[key] = result
    return result
  },
  init () {
    if (inited === true) {
      return true
    }
    
    api = PuliPostMessageAPI()
    inited = true
  }
}