import { app } from './index';
import { config } from 'dotenv';
import { logger } from './src/utils/winston';
import * as appInfo from './package.json';
import { connectToCluster } from './src/db/mongodb';

config();
const port = process.env.PORT || '3000';
app.listen(port, async () => {
    try {
        logger.info(`Listening on port ${process.env.PORT}`);
        logger.info(`PokeCard v${appInfo.version}`);
        await connectToCluster();
    } catch (error: any) {
        throw new Error(error);
    }
});
