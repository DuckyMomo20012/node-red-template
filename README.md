# Node-RED template:

A Node-RED embedded to ExpressJS

## Getting Started

First, install dependencies:

```bash
yarn
```

> If you have error: "node" is incompatible... Then add flag:
> `--ignore-engines`. E.g: `yarn add --ignore-engines PACKAGE_NAME`

## Run server:

Run the development server:

```bash
yarn dev
```

## First setup:

- First, create an `.env` file from `.env.example` and edit values.

OR

- You can copy from here:

```text
# Username to login to Node-RED editor
NODERED_USERNAME=
# Password to login to Node-RED editor
NODERED_PASSWORD=
```

> NOTE: NODERED_PASSWORD is just normal string. E.g: `password`.

- `NODERED_USERNAME` and `NODERED_PASSWORD` is **used for default user** (admin).
- You can add another users in file `bin/www`.

Read more about customizing user and other ways to generate password: [Securing Node-RED](https://nodered.org/docs/user-guide/runtime/securing-node-red#editor--admin-api-security)

- Then, you can run server:
```bash
yarn dev
```

> NOTE: You change tweak Node-RED settings in file `bin/www`

## Access Node-RED editor:

- Go to `http://127.0.0.1:1880/red/` to view Node-RED editor.

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

> NOTE: Remember to deploy flow before accessing these routes

- Go to `http://127.0.0.1:1880/api/ui/` to view web UI (from
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

## Import flow:

- Go to hamburger button on top right of editor.
- Click `Import` button.
- Then import your file `flows.json`.

## First setups:

- Change web title in `dashboard/site` tab (on the right side panel).
- Change web main color theme in `dashboard/theme` tab.

## Deploy flow:

- Click `Deploy` button in Node-RED editor to deploy flow.
- After deploying, your flow will be saved in `.node-red` folder.

> File `flow.json` in `.node-red` folder will be loaded for next server run. So
> you can push this `.node-red` folder to your repo to saved your work, instead
> of import file `flow.json` manually.

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

## Deploy to Heroku:

- User will be created by default:

```
username: admin
password: password
```

But **you can change it while deploying!**. Stay focus 👀.

You can change these defaults in file `app.json`.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## About project:

This is an adoption from Node-RED official example.
Read more: [Embedding into an existing app](https://nodered.org/docs/user-guide/runtime/embedding)

Read more about configurations for settings object: [Configuration](https://nodered.org/docs/user-guide/runtime/configuration)
