import { Card } from '../../domain/entities/Card';

export class CardViewModel {
    _id!: string;
    pokedexId!: number;
    name!: string;
    image!: string;
    sprite!: string;
    slug!: string;
    stats!: {
        HP: number;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
    };
    apiTypes!: { name: string; image: string };
    isOwned!: boolean;

    public static toJson(card: Card): CardViewModel {
        return {
            _id: card.props._id.toString(),
            image: card.props.image,
            name: card.props.name,
            pokedexId: card.props.pokedexId,
            slug: card.props.slug,
            sprite: card.props.sprite,
            stats: {
                attack: card.props.stats.props.attack,
                defense: card.props.stats.props.defense,
                HP: card.props.stats.props.HP,
                special_attack: card.props.stats.props.special_attack,
                special_defense: card.props.stats.props.special_defense,
                speed: card.props.stats.props.speed,
            },
            apiTypes: card.props.apiTypes,
            isOwned: card.props.isOwned,
        };
    }
}
