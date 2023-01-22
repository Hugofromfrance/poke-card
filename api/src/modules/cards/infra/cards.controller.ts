/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from 'express';
import { CardsService } from '../domain/services/cards-service';
import { CardsRepository } from './reposotory/cards.repository';
import { CardViewModel } from './view-model/card.vew-model';

/**
 * Router Definition
 */
export const cardsRouter = express.Router();

/**
 * Router Variables
 */
const cardsService = new CardsService(new CardsRepository());

/**
 * Controller Definitions
 */
cardsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const cards = await cardsService.getCards();
        const jsonCards = cards.map((card) => CardViewModel.toJson(card));
        res.status(200).send(jsonCards);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});

cardsRouter.patch('/:id', async (req: Request, res: Response) => {
    try {
        const cards = await cardsService.toggleOwnedCard(req.params.id);
        res.status(200).send();
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});
