# ChatGPT Search

Visit the app [https://gcoulby.github.io/chat-gpt-search](https://gcoulby.github.io/chat-gpt-search)

## About

This is a simple search engine for searching ChatGPT histories.

It uses the export feature of ChatGPT to create a parsable JSON file, which is then used to search for messages.

The search engine is built using Vue 3 and Tailwind CSS.

This requires "Chat history & training" to be enabled in the OpenAI settings.

## How to use

- Go to [https://chat.openai.com/](https://chat.openai.com/)
- Click on your profile picture in the bottom left, then settings.
- Click "Data Controls"
- Enable "Chat history & training" if it is not already enabled.
- Click "Export Chat History" and wait for the email.
- Download the JSON file from the email.
- Upload the JSON file to the search engine.
- Search for messages.

### Controlling the accuracy

The search engine uses fuse.js to search the messages. This means that it uses a fuzzy search algorithm to find messages that are similar to the search query, but not exactly the same. This can be useful for finding messages that you don't remember exactly, but can also return false positives. You can control the accuracy using the settings cog in the top right of the search results panel.

The settings panel provides 2 options: "Threshold" and "Distance". The "Threshold" option controls the minimum score that a message must have to be included in the search results. The "Distance" option controls the maximum distance that a message can be from the search query to be included in the search results. The default values are 0.6 and 300, respectively. It is worth experimenting with these values to find the best results for your search, though the default values should work well for most searches.

## Privacy

This search engine runs entirely in your browser. No data is sent to any server. The JSON file is parsed and searched in your browser using the HTML5 File API. The JSON file is not uploaded to any server.

## Credits

The search engine is built by [Graham Coulby](https://grahamcoulby.co.uk).

The source code is available on GitHub at [https://github.com/gcoulby/chat-gpt-search](https://github.com/gcoulby/chat-gpt-search)

The search engine uses [Vue 3](https://vuejs.org/) and [Tailwind CSS](https://tailwindcss.com/). and the search functionality is provided by [fuse.js](https://fusejs.io/).
