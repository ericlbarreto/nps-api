import 'reflect-metadata';
import express from 'express';
import { initializeDataSource } from './database';
import { router } from './routes';

initializeDataSource();
const app = express();

app.use(express.json());

app.use(router);

export { app }