import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const fetchCardsData = createAsyncThunk('cards/fetchCards', async () => {
    const res = await fetch('http://localhost:7000/api/cards', {
        method: 'GET',
    }).then((data) => data.json());
    return res;
});

export const toggleOwnedCard = createAsyncThunk(
    'cards/setAsOwner',
    async (cardId: string) => {
        const response = await fetch(
            `http://localhost:7000/api/cards/${cardId}`,
            { method: 'PATCH' }
        );
        return await response.json();
    }
);

interface CardsState {
    entities: any[];
    filterTypeBy: string;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    searchBy: string;
}

const initialState = {
    entities: [],
    filterTypeBy: '',
    loading: 'idle',
    searchBy: '',
} as CardsState;

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        searchByFn(state, action: PayloadAction<string>) {
            return {
                ...state,
                searchBy: action.payload,
            };
        },
        filterTypeBy(state, action: PayloadAction<string>) {
            return {
                ...state,
                filterTypeBy: action.payload,
            };
        },
        resetFilter(state) {
            return {
                ...state,
                searchBy: '',
                filterTypeBy: '',
            };
        },
        toggleOwnedCardFromStore(state, action: PayloadAction<string>) {
            return {
                ...state,
                entities: [...state.entities].map((card) => {
                    if (card._id === action.payload) {
                        return {
                            ...card,
                            isOwned: !card.isOwned,
                        };
                    }
                    return card;
                }),
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCardsData.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(fetchCardsData.fulfilled, (state, { payload }) => {
            state.entities = payload.sort(function (a: any, b: any) {
                if (a.pokedexId === Infinity) return 1;
                else if (isNaN(a.pokedexId)) return -1;
                else return a.pokedexId - b.pokedexId;
            });
            state.loading = 'succeeded';
        });
        builder.addCase(fetchCardsData.rejected, (state) => {
            state.loading = 'failed';
        });
    },
});
export const {
    filterTypeBy,
    searchByFn,
    resetFilter,
    toggleOwnedCardFromStore,
} = cardsSlice.actions;
export default cardsSlice.reducer;
