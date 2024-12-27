const openai = require('../config/openaiConfig')

const generateMeta = async (title) => {

  // await openai.listModels().then((res) => {
  //   console.log(res.data)
  // })

  // const response = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo", // 使用较低级别模型
  //   messages: [{ role: "user", content: "Hello, GPT!" }],
  // });
  // console.log(response.data);


  const description = await openai.createChatCompletion({
    model: "gpt-4o-mini",
    messages: [
      {
        role: 'user',
        content: `Come up with a description for a YouTube video called ${title}`
      }
    ],
    max_tokens: 100
  })

  console.log(description.data.choices[0].message)

  const tags = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{
      role: 'user',
      content:`come up with 10 keywords for a YouTube video called ${title}`
    }],
    max_tokens: 100
  })

  console.log(tags.data.choices[0].message)

}

const generateImage = async (desc) => {
  const response = await openai.createImage({
    prompt: desc,
    n: 1,
    size: "1024x1024",
  });

  console.log(response.data.data[0].url);
}

module.exports = { generateMeta, generateImage }