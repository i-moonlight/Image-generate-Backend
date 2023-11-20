const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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",
});

const index = async (req, res, next) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "I advertiset this image to the customers. Provide me description as detail and long as possible.",
          },
          {
            type: "image_url",
            image_url: {
              // url: `${req.body.url}`,
              url: "https://storage.googleapis.com/interactive_ads/1234.png",
            },
          },
        ],
      },
    ],
  });

  console.log("-------------", response);

  return res.status(200).json({
    message: "success",
    data: response.choices[0],
  });
};

module.exports = {
  index,
};
