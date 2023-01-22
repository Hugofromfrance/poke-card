import { Db, MongoClient } from 'mongodb';
import { logger } from '../utils/winston';

export let db: Db;
export async function connectToCluster() {
    try {
        const mongoClient = new MongoClient(
            process.env.DB_CONN_STRING as string
        );
        const client = await mongoClient.connect();
        db = client.db(process.env.DB_NAME);
        logger.info('Successfully connected to mongo DB');
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}
