/**
 * Required External Modules
 */
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './src/middleware/error.middleware';
import { cardsRouter } from './src/modules/cards/infra/cards.controller';

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

export const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 *  App Controllers
 */

app.use('/api/cards', cardsRouter);

/**
 *  Error Handler
 */
app.use(errorHandler);
