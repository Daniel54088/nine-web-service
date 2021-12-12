# nine-web-service


<p align="center">
	<h1 align="center">Nine Web Service</h1>
</p>
<p align="center">
 <p>Made with: </p>
  <a href="https://github.com/nodejs/node"  alt="node js">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="node js">
  </a>
  <a href="https://github.com/facebook/react"  alt="react">
    <img src="https://img.shields.io/badge/react-%2320232a.svg  style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="node js">
  </a>
  <a href="https://dashboard.heroku.com/"  alt="heroku">
    <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" alt="node js">
  </a>

  

  

</p>

<!-- Used for the "back to top" links within the document -->
<div id="contents"></div>


## Getting started

**YARN install**

```sh
yarn 
```

**Start local server**

```sh
yarn dev
```


## Features

### Basic Overview

Importing the json url or json format contents to get the filtered data.

<img width=95% src="https://github.com/Daniel54088/nine-web-service/blob/main/media/overview.png">


### Expected Response
If the json url or json format conent is correct, the Output Result area will return the filtered response.

<img width=95% src="https://github.com/Daniel54088/nine-web-service/blob/main/media/positive.png">


### Error Handling
If the json url or json format conent is wrong, the Output Result area will return the error response.

<img width=95% src="https://github.com/Daniel54088/nine-web-service/blob/main/media/error.png">



```js
import { httpPost } from "axios-io-ts"

const promise = httpPost({
    url: "/test",
    data: {
        foo: "bar",
    },
})
```

as part of the default export e.g.

```ts
import axios from "axios-io-ts"

const promise = axios.get({
    url: "/test",
    data: {
        foo: "bar",
    },
})
```

or, with the client factory e.g.

```ts
import { httpClient } from "axios-io-ts"

const client = httpClient({ baseURL: "baseURL" }) // OR axios.create({ baseURL: "baseURL" })
const promise = client.post({
    url: "/test",
    data: {
        foo: "bar",
    },
})
```

<sub>[⇧ back to top](#contents)</sub>

### Data validation

Axios response data can be validated by providing an [io-ts](https://github.com/gcanti/io-ts) decoder to your request

```ts
import { httpGet } from "axios-io-ts"
import * as t from "io-ts"

const promise = httpGet({
    url: "/test",
    decoder: t.type({
        foo: t.string,
    }),
}).then((response) => response.data.foo) // strongly typed foo
```

<sub>[⇧ back to top](#contents)</sub>

### Error handling

If data validation fails, a `DecodeError` is thrown. You can catch this with `onDecodeError()`

```ts
import { httpGet, onDecodeError } from "axios-io-ts"
import * as t from "io-ts"

const promise = httpGet({
    url: "/test",
    decoder: t.type({
        foo: t.string,
    }),
})
    .then((response) => response.data.foo)
    .catch(onDecodeError((err) => handle(err)))
    .catch((other) => null)
```

<sub>[⇧ back to top](#contents)</sub>