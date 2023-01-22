import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { filterTypeBy, resetFilter } from '../cards/cardsSlice';
import fireIcon from './../../assets/fire.webp';
import waterIcon from './../../assets/water.webp';
import grassIcon from './../../assets/grass.webp';
import poisonIcon from './../../assets/poison.webp';
import bugIcon from './../../assets/bug.webp';
import flyingIcon from './../../assets/flying.webp';
import normalIcon from './../../assets/normal.webp';
import groundIcon from './../../assets/ground.webp';
import rockIcon from './../../assets/rock.webp';
import fairyIcon from './../../assets/fairy.webp';
import steelIcon from './../../assets/steel.webp';
import iceIcon from './../../assets/ice.webp';
import ghostIcon from './../../assets/ghost.webp';
import dragonIcon from './../../assets/dragon.webp';
import fightingIcon from './../../assets/fighting.webp';
import psychicIcon from './../../assets/psychic.webp';
import electricIcon from './../../assets/electric.webp';
import styles from './FilterTypes.module.css';

export function FilterTypes() {
    const dispatch = useAppDispatch();

    function handleChange(type: string) {
        dispatch(filterTypeBy(type));
    }

    function handleResetFilter() {
        dispatch(resetFilter());
    }

    return (
        <div className={`${styles.filterTypes} mb-4`}>
            <span className="fs-6 fw-bold" onClick={() => handleResetFilter()}>
                Tous
            </span>
            <img
                src={fireIcon}
                alt="fire icon"
                width="25"
                height="25"
                onClick={() => handleChange('fire')}
            />
            <img
                src={waterIcon}
                alt="water icon"
                width="25"
                height="25"
                onClick={() => handleChange('water')}
            />
            <img
                src={grassIcon}
                alt="grass icon"
                width="25"
                height="25"
                onClick={() => handleChange('grass')}
            />
            <img
                src={poisonIcon}
                alt="poison icon"
                width="25"
                height="25"
                onClick={() => handleChange('poison')}
            />
            <img
                src={bugIcon}
                alt="bug icon"
                width="25"
                height="25"
                onClick={() => handleChange('bug')}
            />
            <img
                src={flyingIcon}
                alt="flying icon"
                width="25"
                height="25"
                onClick={() => handleChange('flying')}
            />
            <img
                src={normalIcon}
                alt="normal icon"
                width="25"
                height="25"
                onClick={() => handleChange('normal')}
            />
            <img
                src={groundIcon}
                alt="ground icon"
                width="25"
                height="25"
                onClick={() => handleChange('ground')}
            />
            <img
                src={rockIcon}
                alt="rock icon"
                width="25"
                height="25"
                onClick={() => handleChange('rock')}
            />
            <img
                src={fairyIcon}
                alt="fairy icon"
                width="25"
                height="25"
                onClick={() => handleChange('fairy')}
            />
            <img
                src={steelIcon}
                alt="steel icon"
                width="25"
                height="25"
                onClick={() => handleChange('steel')}
            />
            <img
                src={iceIcon}
                alt="ice icon"
                width="25"
                height="25"
                onClick={() => handleChange('ice')}
            />
            <img
                src={ghostIcon}
                alt="ghost icon"
                width="25"
                height="25"
                onClick={() => handleChange('ghost')}
            />
            <img
                src={dragonIcon}
                alt="dragon icon"
                width="25"
                height="25"
                onClick={() => handleChange('dragon')}
            />
            <img
                src={fightingIcon}
                alt="fighting icon"
                width="25"
                height="25"
                onClick={() => handleChange('fighting')}
            />
            <img
                src={psychicIcon}
                alt="psychic icon"
                width="25"
                height="25"
                onClick={() => handleChange('psychic')}
            />
            <img
                src={electricIcon}
                alt="electric icon"
                width="25"
                height="25"
                onClick={() => handleChange('electric')}
            />
        </div>
    );
}
