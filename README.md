<h1 align="center">Welcome to imageprocessingapi- 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/gaz1697/ImageProcessingAPI-#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/gaz1697/ImageProcessingAPI-/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/gaz1697/ImageProcessingAPI-/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/gaz1697/imageprocessingapi-" />
  </a>
</p>

> hello everyone i am writing from vs on ubntu

### 🏠 [Homepage](https://github.com/gaz1697/ImageProcessingAPI-#readme)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## ENDPOINTS

```sh
  http://localhost:2400/api/images/
```

## URL

```sh
  will return a processed image with specified width and height
  http://localhost:2400/api/images/?filename=%22tree%22&width=500&height=500

  will return an error message because of missing file
  http://localhost:2400/api/images/?filename=%22trree%22&width=500&height=500

  will return an error message because of wrong inputs
  http://localhost:2400/api/images/?filename=%22tree%22&width=-1

  will return an error message because there is no inputs
  http://localhost:2400/api/images/
```

## Author

- Github: [@gaz1697](https://github.com/gaz1697)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/gaz1697/ImageProcessingAPI-/issues). You can also take a look at the [contributing guide](https://github.com/gaz1697/ImageProcessingAPI-/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [ISC](https://github.com/gaz1697/ImageProcessingAPI-/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
