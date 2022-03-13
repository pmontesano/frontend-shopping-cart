import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import template from './template';

/**
 * Routers
 */
import { fetchData, render } from '../controllers/main';

const server = express();

server.use('/', express.static(path.join(__dirname, '../../build')));
server.use('/static', express.static(path.join(__dirname, '../../public')));
server.use(favicon(path.join(__dirname, '../../public', 'favicon.ico')));

/**
 * Mount routers
 */
server.get('/', fetchData, render(template));

server.listen(3000, () => console.log('Server started http://localhosts:3000'));
