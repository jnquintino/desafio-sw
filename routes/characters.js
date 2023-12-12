const express = require('express');
const router = express.Router();
const axios = require('axios');
const Character = require('../models/character');

router.get('/fetch', async (req, res) => {
	try {
		const response = await axios.get('https://swapi.dev/api/people/');
		const characters = response.data.results;
		await Character.insertMany(characters);
		res.status(200).json({ message: 'Dados salvos com sucesso!' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Erro ao salvar dados no MongoDB.' });
	}
});

router.get('/', async (req, res) => {
	try {
		const characters = await Character.find().sort({ name: 1 });
		res.status(200).json(characters);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Erro ao obter dados do MongoDB.' });
	}
});

module.exports = router;

