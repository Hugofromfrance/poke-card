import { ValueObject } from '../../../core/domain/ValueObject';

export interface IStats {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
}

export class Stats extends ValueObject<IStats> {
    private constructor(props: IStats) {
        super(props);
    }

    public static create(props: IStats): Stats {
        return new Stats(props);
    }
}
