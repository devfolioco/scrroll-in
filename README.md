# Scrroll In <img src = "/images/icon-32.png">
<p align = "center">
<img src = "https://forthebadge.com/images/badges/uses-html.svg"> <img src = "https://forthebadge.com/images/badges/uses-css.svg"> <img src = "https://forthebadge.com/images/badges/made-with-javascript.svg"> <br> <img src = "https://forthebadge.com/images/badges/built-with-love.svg">


[![All Contributors](https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square)](#contributors)

Never forget where you left a page.

<p float="left">

<a href="https://chrome.google.com/webstore/detail/scrroll-in/cjgjbjogfodppempgdlppgefojbcmjom?hl=en&gl=IN" target="_blank">
<img src="/images/chromewebstore.png" alt="Scrroll In - An extension to save scroll position of any webpage | Product Hunt Embed" style="height:64px;margin-right:20px;" height="64px" /></a>
<a href="https://www.producthunt.com/posts/scrroll-in?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrroll-in" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=169127&theme=light" alt="Scrroll In - An extension to save scroll position of any webpage | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>

</p>

> Contribute to this project during hacktoberfest and get exclusive limited edition Devfolio schwag if your pull requests gets merged. [Read more](https://devfolio.co/blog/hacktoberfest-2019-devfolio/)

## Motivation 💡

You must have been in a situation wherein you are reading a long article, but you don't have enough time to finish it, so you close the tab, and the next time you open the article again, you have no idea where you left it.

So this extension lets you save the scroll position of the webpage, so you can continue from exactly where you left.

I know there are a few extensions that already serve this purpose, but most of them either didn't work correctly or lacked the features that I needed, so I ended up creating my own.

## How it works? 🤔

Under the hood, this extension uses the [chrome localStorage API](https://developer.mozilla.org/en/DOM/Storage#localStorage) to store the scroll positions for different webpages. I avoided using sync storage due to its storage limitations ([read more](https://developer.chrome.com/apps/storage)). This extension creates an object which stores the URL as keys and the scroll position as values.

The functions for adding or updating, reading and deleting are in the files `save.js`, `get.js`, `update.js` and `delete.js` respectively, which are executed as content scripts from popup whenever the respective button is clicked.

The `background.js` handles switching icon color whenever a tab is changed, or the URL is updated.

The popup sheet is a Svelte app in the `popup` folder that controls the UI and the behaviour of the extension popup.

## Features 🚀

- You can **save** the scroll position of the page and then revisit the page at any time to continue where you left. 
- The extension also allows you to save **multiple scrolls** for the page. 
- You can **fetch** the last saved scroll.
- If you dont want a scroll you can **delete** it.
- Extension allows you to see all the saved scrolls arranged in the newly first order where you can **delete** any specific scroll or **clear all** the scrolls at once.
- You can use **update** the scroll which will update the last saved scroll with the current one.
- You can add customizable keyboard shortcuts to **save**, **fetch** or **delete** scrolls without having to open the extension popup.
- The extension **auto fetches** the last saved scroll position on page load, if page has any saved scroll.

 ✨<b> Watch the demo video [here](https://youtu.be/rziVn6J4Yao).</b>

## Development 💻

The JavaScript files in the extension are compiled using [rollup](https://rollupjs.org), and as of now the extension popup is written with Svelete which is also compiled via rollup. To run the extension locally follow these steps:

- Run `yarn` or `npm install` to install the dependencies.
- Then run `yarn dev` or `npm run dev` to build the extension in watch mode, you'll see a build folder created with all the necessary files for the extension to run.
- Visit `chrome://extensions` and turn on developer mode.
- Click on `Load unpacked` at the top left and select the `build` folder that was created with the `dev` command.
- Now you can go ahead and modify the js files and the Svelte app, the dev command would automatically build the updated files accordingly. You would be able to view the changes in the extension directly.
- If you change something in `background.js` you'll need to reload the extension for the changes to appear. For other files like `manifest.json` you would need to restart the dev server as well so that a fresh copy can be created.

## Contributing 🌏

All you need to know for contributing to this project is basic **JavaScript**, **HTML**, and **CSS**.

You can visit the issues page to find some relevant issues to contribute to or feel free to open a new issue for something that you think can be improved.

Also, if you have any doubts regarding any of the concepts or how to get started, feel free to drop me a message on [Twitter](https://twitter.com/psuranas) or the [Devfolio community Telegram group](https://t.me/devfolio).

## License

[![NPM](https://img.shields.io/github/license/devfolioco/scrroll-in)](https://github.com/devfolioco/scrroll-in/blob/master/LICENSE)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://prateeksurana.me"><img src="https://avatars3.githubusercontent.com/u/21277179?v=4" width="100px;" alt=""/><br /><sub><b>Prateek Surana</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=prateek3255" title="Code">💻</a> <a href="#design-prateek3255" title="Design">🎨</a> <a href="#content-prateek3255" title="Content">🖋</a> <a href="https://github.com/devfolioco/scrroll-in/commits?author=prateek3255" title="Documentation">📖</a></td>
    <td align="center"><a href="http://laylawrote.com"><img src="https://avatars3.githubusercontent.com/u/19983454?v=4" width="100px;" alt=""/><br /><sub><b>Layla Hedges</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=N7Layla" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/shikharsaxena98"><img src="https://avatars1.githubusercontent.com/u/21315618?v=4" width="100px;" alt=""/><br /><sub><b>shikharsaxena98</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=shikharsaxena98" title="Code">💻</a></td>
    <td align="center"><a href="http://adityaketkar.me"><img src="https://avatars0.githubusercontent.com/u/22611315?v=4" width="100px;" alt=""/><br /><sub><b>Aditya Ketkar</b></sub></a><br /><a href="#design-adityaketkar" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/DEBSUBHRO"><img src="https://avatars0.githubusercontent.com/u/42496309?v=4" width="100px;" alt=""/><br /><sub><b>DEBSUBHRA ROY</b></sub></a><br /><a href="#design-DEBSUBHRO" title="Design">🎨</a></td>
    <td align="center"><a href="http://aashisresume.firebaseapp.com"><img src="https://avatars2.githubusercontent.com/u/29084675?v=4" width="100px;" alt=""/><br /><sub><b>Aashis kumar</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=aesher9o1" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/RohitKaushal7"><img src="https://avatars2.githubusercontent.com/u/43717403?v=4" width="100px;" alt=""/><br /><sub><b>Rohit Kaushal</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=RohitKaushal7" title="Code">💻</a> <a href="#design-RohitKaushal7" title="Design">🎨</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://adi.surge.sh"><img src="https://avatars1.githubusercontent.com/u/15871340?v=4" width="100px;" alt=""/><br /><sub><b>Aditya Agarwal</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=itaditya" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/MitchMo"><img src="https://avatars2.githubusercontent.com/u/11459569?v=4" width="100px;" alt=""/><br /><sub><b>Mitch Moore</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=MitchMo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/underscoreanuj"><img src="https://avatars1.githubusercontent.com/u/30765911?v=4" width="100px;" alt=""/><br /><sub><b>Anuj Singh</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=underscoreanuj" title="Code">💻</a></td>
    <td align="center"><a href="http://www.gaberosedesign.com"><img src="https://avatars3.githubusercontent.com/u/7225212?v=4" width="100px;" alt=""/><br /><sub><b>Gabe</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=roseg43" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Alucard17"><img src="https://avatars1.githubusercontent.com/u/26205172?v=4" width="100px;" alt=""/><br /><sub><b>alucard17</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=alucard17" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/sharvari-raut-a62a99171"><img src="https://avatars1.githubusercontent.com/u/57194200?v=4" width="100px;" alt=""/><br /><sub><b>Sharvari Raut</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=sharur7" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/abstrekt"><img src="https://avatars0.githubusercontent.com/u/42478217?v=4" width="100px;" alt=""/><br /><sub><b>Samiran Konwar</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=abstrekt" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Parshwa52"><img src="https://avatars2.githubusercontent.com/u/48866201?v=4" width="100px;" alt=""/><br /><sub><b>Parshwa52</b></sub></a><br /><a href="https://github.com/devfolioco/scrroll-in/commits?author=Parshwa52" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/bislara"><img src="https://avatars1.githubusercontent.com/u/35392585?v=4" width="100px;" alt=""/><br /><sub><b>Biswajeet Sahoo</b></sub></a><br /><a href="#tool-bislara" title="Tools">🔧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!
