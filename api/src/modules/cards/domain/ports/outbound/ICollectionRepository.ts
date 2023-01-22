import { Card } from '../../entities/Card';

export interface ICardsRepository {
    findCards(): Promise<Card[]>;
    findCardById(id: string): Promise<Card>;
    saveCard(card: Card): Promise<void>;
}
