import 'reflect-metadata';
import express from 'express';
import './database';
import cors from 'cors';

import  dotenv from 'dotenv';
dotenv.config();

import { router } from './routes';

const app = express();

app.use(express.json({ limit: '99999999mb' }));
app.use(cors());
app.use('/static', express.static(__dirname + '/assets'));
app.use(router);

app.listen(3000, () => console.log('Servidor rodando!'));
