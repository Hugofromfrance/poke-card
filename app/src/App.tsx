import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { fetchCardsData } from './features/cards/cardsSlice';
import { Card } from './features/cards/card/Card';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Header } from './features/header/Header';
import { Search } from './features/search/Search';
import { FilterTypes } from './features/filter-types/FilterTypes';

export interface ICard {
    _id: string;
    pokedexId: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    stats: {
        HP: number;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
    };
}

const pokemonTypes = {
    fire: 'Feu',
    water: 'Eau',
    grass: 'Plante',
    poison: 'Poison',
    flying: 'Vol',
    bug: 'Insecte',
    normal: 'Normal',
    rock: 'Roche',
    ground: 'Sol',
    dragon: 'Dragon',
    steel: 'Acier',
    ice: 'Glace',
    fairy: 'Fée',
    ghost: 'Spectre',
    psychic: 'Psy',
    fighting: 'Combat',
    electric: 'Électrik',
};

type ObjectKey = keyof typeof pokemonTypes;

function App() {
    const { searchBy, filterTypeBy, entities, loading } = useAppSelector(
        (state) => state.cards
    );

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCardsData());
    }, [dispatch]);
    let filteredEntities = [...entities];
    const totalCards = entities.length;
    const ownedCards = entities.reduce((acc, card) => {
        if (card.isOwned) {
            acc++;
        }
        return acc;
    }, 0);

    if (searchBy.length) {
        filteredEntities = filteredEntities.filter((card) =>
            card.name.toLowerCase().includes(searchBy.toLowerCase())
        );
    }
    if (filterTypeBy.length) {
        filteredEntities = filteredEntities.filter((card) => {
            let isIn = false;
            card.apiTypes.forEach((element: { name: string }) => {
                if (
                    filterTypeBy &&
                    element.name.toLowerCase() ===
                        pokemonTypes[
                            filterTypeBy as ObjectKey
                        ].toLocaleLowerCase() &&
                    card.name.toLowerCase().includes(searchBy.toLowerCase())
                ) {
                    isIn = true;
                }
            });
            return isIn;
        });
    }

    if (loading === 'failed') return <p>Failed !</p>;
    if (loading === 'pending') {
        return (
            <div className="text-center  m-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    return (
        <Provider store={store}>
            <div className="container">
                <Header />
                <div className="d-flex flex-row">
                    <Search />
                    <div className="mx-auto mb-4">
                        <small className="fw-bold">Owned cards</small>
                        <br />
                        <small>
                            {ownedCards} / {totalCards}
                        </small>
                    </div>
                    <FilterTypes />
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                    {filteredEntities.map((card: ICard) => (
                        <Card key={card._id} card={card} />
                    ))}
                </div>
            </div>
        </Provider>
    );
}

export default App;
