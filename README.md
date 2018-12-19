# selfkey-service

SelfKey Service

## Install

Clone, install and run - requires NodeJS

`git clone git@github.com:SelfKeyFoundation/selfkey-service.git`

`cd selfkey-service`

`npm install`

`npm run dev`

## Usage

Send a `POST` request to the service endpoint '/' with a nonce, signature and ethereum address in the body using the following fields:

```
nonce: <nonce value>
signature: <signature value>
publicKey: <ethereum address>
```

To create the data you can use the functions in the `selfkey-lib` library - also see the test file for an example of this.

## Docker

Build the container and run it - forward the port as you see fit

`docker build .`

`docker run -p 3018:3018 <container id>`

## Test

Make sure the service is running first

`npm run test`

## Contributing

Please see the [contributing notes](CONTRIBUTING.md)

## License

[The GPL-3.0 License](http://opensource.org/licenses/GPL-3.0)

Copyright (c) 2018 SelfKey Foundation [https://selfkey.org/](https://selfkey.org/)
