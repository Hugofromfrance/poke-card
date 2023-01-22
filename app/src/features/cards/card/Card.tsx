import React from 'react';
import { ICard } from '../../../App';
import styles from './Card.module.css';
import {
    toggleOwnedCard,
    toggleOwnedCardFromStore,
} from '../cardsSlice';
import { useAppDispatch } from '../../../app/hooks';
export function Card(props: any) {
    const card = props.card;
    const dispatch = useAppDispatch();
    function handleCardClick(cardId: string) {
        dispatch(toggleOwnedCard(cardId));
        dispatch(toggleOwnedCardFromStore(cardId));
    }

    return (
        <div className="col">
            <div
                className={`${styles.cursorPointer} card shadow-sm ${
                    !card.isOwned ? styles.notOwned : ''
                }`}
                onClick={() => handleCardClick(card._id)}
            >
                <img
                    className="mx-auto"
                    src={card.image}
                    alt={card.name}
                    width="150"
                />
                <div className="card-body">
                    <p className="card-text font-weight-bold">{card.name}</p>
                    <div>
                        <p>HP: {card.stats.HP}</p>
                    </div>
                    <div className="d-flex flex-row">
                        {card.apiTypes.map((type: ICard, index: number) => (
                            <img
                                key={`${card.image}${index}`}
                                src={type.image}
                                alt={type.name}
                                height="30"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
