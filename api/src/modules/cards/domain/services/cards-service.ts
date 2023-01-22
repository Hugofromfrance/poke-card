import { Card } from '../entities/Card';
import { ICardsRepository } from '../ports/outbound/ICollectionRepository';

export class CardsService {
    constructor(private cardsRepository: ICardsRepository) {}

    async getCards(): Promise<Card[]> {
        return await this.cardsRepository.findCards();
    }

    async toggleOwnedCard(id: string): Promise<void> {
        const card = await this.cardsRepository.findCardById(id);
        card.toggleOwnedCard();
        await this.cardsRepository.saveCard(card);
    }
}
