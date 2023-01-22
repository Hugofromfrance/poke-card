import { Card } from '../../domain/entities/Card';
import { Stats } from '../../domain/value-objects/Stats';

export class CardMapper {
    public static toDomain(card: any): Card {
        return Card.create({
            _id: card._id,
            image: card.image,
            name: card.name,
            pokedexId: card.pokedexId,
            slug: card.slug,
            sprite: card.sprite,
            stats: Stats.create({
                attack: card.stats.attack,
                defense: card.stats.defense,
                HP: card.stats.HP,
                special_attack: card.stats.special_attack,
                special_defense: card.stats.special_defense,
                speed: card.stats.speed,
            }),
            apiTypes: card.apiTypes,
            isOwned: Boolean(card.isOwned),
        });
    }

    public static toPersistence(card: Card): any {
        return {
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
            isOwned: Boolean(card.props.isOwned),
        };
    }
}
