<div align="center">

  <h1>Node-RED Template</h1>

  <p>
    A Node-RED embedded to ExpressJS template
  </p>

<!-- Badges -->
<p>

  <a href="https://github.com/DuckyMomo20012/node-red-template/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/DuckyMomo20012/node-red-template" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/DuckyMomo20012/node-red-template" alt="last update" />
  </a>
  <a href="https://github.com/DuckyMomo20012/node-red-template/network/members">
    <img src="https://img.shields.io/github/forks/DuckyMomo20012/node-red-template" alt="forks" />
  </a>
  <a href="https://github.com/DuckyMomo20012/node-red-template/stargazers">
    <img src="https://img.shields.io/github/stars/DuckyMomo20012/node-red-template" alt="stars" />
  </a>
  <a href="https://github.com/DuckyMomo20012/node-red-template/issues/">
    <img src="https://img.shields.io/github/issues/DuckyMomo20012/node-red-template" alt="open issues" />
  </a>
  <a href="https://github.com/DuckyMomo20012/node-red-template/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/DuckyMomo20012/node-red-template.svg" alt="license" />
  </a>
</p>

<h4>
    <a href="https://github.com/DuckyMomo20012/node-red-template/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/node-red-template">Documentation</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/node-red-template/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/node-red-template/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Features](#dart-features)
  - [Color Reference](#art-color-reference)
  - [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Run Locally](#running-run-locally)
  - [Running Tests](#test_tube-running-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Usage](#eyes-usage)
  - [Access Node-RED editor](#fast_forward-access-node-red-editor)
  - [Import flow](#inbox_tray-import-flow)
  - [Node-RED dashboard first setups](#one-node-red-dashboard-first-setups)
  - [Deploy flow](#rocket-deploy-flow)
- [Roadmap](#compass-roadmap)
- [Contributing](#wave-contributing)
  - [Code of Conduct](#scroll-code-of-conduct)
- [FAQ](#grey_question-faq)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<div align="center">
  <img src="https://placehold.co/600x400?text=Your+Screenshot+here" alt="screenshot" />
</div>

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.javascript.com/">Javascript</a></li>
    <li><a href="https://nodered.org/">Node-RED</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<!-- Features -->

### :dart: Features

- Feature 1.
- Feature 2.
- Feature 3.

<!-- Color Reference -->

### :art: Color Reference

| Color           | Hex                                                             |
| --------------- | --------------------------------------------------------------- |
| Primary Color   | ![#222831](http://via.placeholder.com/10/222831?text=+) #222831 |
| Secondary Color | ![#393E46](http://via.placeholder.com/10/393E46?text=+) #393E46 |
| Accent Color    | ![#00ADB5](http://via.placeholder.com/10/00ADB5?text=+) #00ADB5 |
| Text Color      | ![#EEEEEE](http://via.placeholder.com/10/EEEEEE?text=+) #EEEEEE |

<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to
your .env file.

`NODERED_USERNAME`: Username to log in to Node-RED editor.

`NODERED_PASSWORD`: Password to login to Node-RED editor.

E.g:

```
NODERED_USERNAME=admin
NODERED_PASSWORD=password
```

> **Note**: `NODERED_USERNAME` and `NODERED_PASSWORD` is **used for default
> user** (admin). You can add another users in file `bin/www`.

Read more about customizing users and other ways to generate passwords:
[Securing Node-RED](https://nodered.org/docs/user-guide/runtime/securing-node-red#editor--admin-api-security)

> **Note**: You change tweak Node-RED settings in file `bin/www`.

You can also checkout file `.env.example` to see all required environment
variables.

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

This project uses [Yarn](https://yarnpkg.com/) as package manager:

```bash
npm install --global yarn
```

<!-- Run Locally -->

### :running: Run Locally

Clone the project:

```bash
git clone https://github.com/DuckyMomo20012/node-red-template.git
```

Go to the project directory:

```bash
cd node-red-template
```

Install dependencies:

```bash
yarn
```

Start the server:

```bash
yarn start
```

OR:

Run with `nodemon`:

```bash
yarn test
```

---

Access server:

The server will run on: http://127.0.0.1:3000/red/

<!-- Running Tests -->

### :test_tube: Running Tests

To run tests, run the following command:

```bash
yarn test test
```

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project on Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

<!-- Usage -->

## :eyes: Usage

### :fast_forward: Access Node-RED editor

- Go to `http://127.0.0.1:3000/red/` to view the Node-RED editor.

  <details>
  <summary>Customizing Node-RED editor route</summary>

  ```javascript
  // bin/www
  const settings = {
  httpAdminRoot: '/editor',
  ...
  };
  ```

  </details>

> **Note**: Remember to deploy flow before accessing these routes.

- Go to `http://127.0.0.1:3000/api/ui/` to view web UI (from
  node-red-dashboard node).

  <details>
  <summary>Customizing Node-RED node route</summary>

  ```javascript
  // bin/www
  const settings = {
  httpNodeRoot: '/',
  ...
  };
  ```

  </details>

### :inbox_tray: Import flow

- Go to the hamburger button on the top right of the editor.
- Click the `Import` button.
- Then import file `flows.json` from folder `data`.

### :one: Node-RED dashboard first setups

- Change the web title in the`dashboard/site` tab (on the right-side panel).
- Change the web main color theme in the `dashboard/theme` tab.

### :rocket: Deploy flow

- Click the `Deploy` button in the Node-RED editor to deploy flow.
- After deploying, your flow will be saved in the `.node-red` folder.

> **Note**: File `flow.json` in the `.node-red` folder will be loaded for the
> next server run. So you can push this `.node-red` folder to your repo to save
> your work, instead of importing the file `flow.json` manually.

<details>
<summary>Customizing Node-RED user directory</summary>

```javascript
// bin/www
const settings = {
userDir: './.node-red-store', // relative to root folder, default $HOME/.node-red
...
};
```

</details>

<!-- Roadmap -->

## :compass: Roadmap

- [x] Todo 1.
- [ ] Todo 2.

<!-- Contributing -->

## :wave: Contributing

<a href="https://github.com/DuckyMomo20012/node-red-template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DuckyMomo20012/node-red-template" />
</a>

Contributions are always welcome!

<!-- Code of Conduct -->

### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/DuckyMomo20012/node-red-template/blob/main/CODE_OF_CONDUCT.md).

<!-- FAQ -->

## :grey_question: FAQ

- Question 1

  - Answer 1.

- Question 2

  - Answer 2.
  <!-- License -->

## :warning: License

Distributed under MIT license. See
[LICENSE](https://github.com/DuckyMomo20012/node-red-template/blob/main/LICENSE)
for more information.

<!-- Contact -->

## :handshake: Contact

Duong Vinh - [@duckymomo20012](https://twitter.com/duckymomo20012) - tienvinh.duong4@gmail.com

Project Link: [https://github.com/DuckyMomo20012/node-red-template](https://github.com/DuckyMomo20012/node-red-template).

<!-- Acknowledgments -->

## :gem: Acknowledgements

Here are useful resources and libraries that we have used in our projects:

- [Node-RED](https://nodered.org/): A powerful tool to build IoT applications.
- [Awesome Readme Template](https://github.com/Louis3797/awesome-readme-template):
  A detailed template to bootstrap your README file quickly.
