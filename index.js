import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const imgURL = "https://scrimba.com/links/menu-image";

const response = await openai.chat.completions.create({
  model: "gpt-4-vision-preview",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "Based on this menu, please recommend meal options considering the following: I have a big appetite, am allergic to shellfish, and crave a dessert that's both sweet and tart. I'd like to keep my total spend under $30" },
        {
          type: "image_url",
          image_url: {
            url: imgURL
          }
        }
      ]
    }
  ]
});
console.log(response.choices[0]);

document.body.innerHTML = `<img src="${imgURL}" alt="Image to analyze">`;