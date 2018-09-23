'use strict'

const request = require('request')
const selfkey = require('selfkey.js')

const pass = {
	publicKey: '2b6a21dc440cebd4bb9b91b27014ace8aa91a0b9',
	privateKey: '8a35142ef030e2f89185c738b11b5a4fc13fe3663dffea64f00059fdf0b038d4'
}

const fail = {
	publicKey: '2b6a21dc440cebd4bb9b91b27014ace8aa91a0b9',
	privateKey: '8a35142ef030e2f89185c738b11b5a4fc13fe3663dffea64f00059aaaaaaaaaa'
}

async function runTest(keys) {
	try {
		const nonce = await selfkey.createNonce(64)
		const signature = await selfkey.createSignature(nonce, keys.privateKey)
		const publicKey = keys.publicKey
		const form = {
			nonce,
			signature,
			publicKey
		}
		const options = {
			url: 'http://localhost:3018/',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			form: form
		}
		request.post(options, (err, resp, body) => {
			if (err) return console.error(err)
			return console.info(body)
		})
	} catch (e) {
		return console.error(e)
	}
}

runTest(pass)
runTest(fail)
