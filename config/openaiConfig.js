const { Configuration, OpenAIApi } = require('openai')
const { HttpsProxyAgent } = require("https-proxy-agent"); // 从包中解构导入 HttpsProxyAgent
require('dotenv').config()

const proxyAgent = new HttpsProxyAgent("http://127.0.0.1:10809"); // HTTP 代理地址

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  baseOptions: {
    httpsAgent: proxyAgent, // 注入代理配置
    proxy: false, // 禁用 Axios 的默认代理解析
  },
})

const openai = new OpenAIApi(configuration)

module.exports = openai