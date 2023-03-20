const OpenAI = require('openai')
const {Configuration, OpenAIApi} = OpenAI

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-8fPlkT0tIyZUeXr0mlMNgCyk",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/gpt', async (req, res) => {
    const { message } = req.body
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content:`${message}`}],
        max_tokens: 4000,
        temperature: 0,
    });
    console.log(response.data)
    if (response.data) {
        if (response.data.choices) {
            res.json({
                message: response.data.choices[0].message.content
            })
        }
    }
})

app.listen(port, () => {
    console.log('Example app port: ' + port);
})