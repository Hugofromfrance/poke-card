import { Entity } from '../../../core/domain/Entity';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Stats } from '../value-objects/Stats';

interface ICard {
    _id: UniqueEntityID;
    pokedexId: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    stats: Stats;
    apiTypes: { name: string; image: string };
    isOwned: boolean;
}

export class Card extends Entity<ICard> {
    private constructor(props: ICard, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(props: ICard, id?: UniqueEntityID): Card {
        return new Card(props, id);
    }

    public toggleOwnedCard(): void {
        this.props.isOwned = !this.props.isOwned;
    }
}
