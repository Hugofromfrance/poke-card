import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { searchByFn } from '../cards/cardsSlice';

export function Search() {
    const { searchBy } = useAppSelector((state) => state.cards);
    const dispatch = useAppDispatch();

    function handleChange(event: { target: { value: string } }) {
        dispatch(searchByFn(event.target.value));
    }

    return (
        <div className="d-flex align-items-center mb-4">
            <input
                type="text"
                value={searchBy}
                className="form-control"
                id="search"
                placeholder="Search a pokemon ..."
                onChange={handleChange}
            ></input>
        </div>
    );
}
