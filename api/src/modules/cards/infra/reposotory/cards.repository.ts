import { ObjectId } from 'mongodb';
import { Card } from '../../domain/entities/Card';
import { ICardsRepository } from '../../domain/ports/outbound/ICollectionRepository';
import { CardMapper } from '../mapper/card.mapper';
import { db } from './../../../../db/mongodb';

export class CardsRepository implements ICardsRepository {
    async findCards(): Promise<Card[]> {
        const cards = await db.collection('cards').find({}).toArray();
        return cards.map((card) => CardMapper.toDomain(card));
    }

    async findCardById(id: string): Promise<Card> {
        const card = await db
            .collection('cards')
            .findOne({ _id: new ObjectId(id) });
        return CardMapper.toDomain(card);
    }

    async saveCard(card: Card): Promise<void> {
        await db
            .collection('cards')
            .updateOne(
                { _id: new ObjectId(card.props._id.toString()) },
                { $set: CardMapper.toPersistence(card) }
            );
    }
}
