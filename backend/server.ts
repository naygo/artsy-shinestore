import 'reflect-metadata';
import express from 'express';
import './src/database';
import cors from 'cors';
const path = require('path');

import { router } from './src/routes';

const app = express();

app.use(cors());
app.use(express.json({ limit: '99999999mb' }));
app.use('/static', express.static(__dirname + '/assets'));

app.use(router);

app.use(express.static(path.join(__dirname, '../frontend/dist')))

app.get('/*', (req, res) => {
    return res.sendFile(path.join(__dirname, '../frontend'))
})

app.listen(3000, () => console.log('Servidor rodando!'));