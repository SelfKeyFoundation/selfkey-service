'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const selfkey = require('selfkey.js')

const app = express()

app.set('port', 3018)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('trust proxy', 1)

app.get('/', async (req, res) => {
	let nonce = await selfkey.createNonce(64)
	res.status(200).json({nonce: nonce})
})

app.post('/', async (req, res) => {
	try {
		const verifyResult = await selfkey.verifySignature(req.body.nonce, req.body.signature, req.body.publicKey)
		return res.status(200).json({message: verifyResult})
	} catch (e) {
		return res.status(400).json({message: e})
	}
})

app.listen(app.get('port'), () => console.log('SelfKey SVS running on port ' + app.get('port')))

module.exports = app
