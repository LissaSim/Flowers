import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {useHttp} from "../../hooks/http.js";

const initialState = {
    flowers:[],
    promotionFlowers: [],
    value: ""
};

export const fetchFlowers = createAsyncThunk(
    "flowers/flowersFetched",
    () => {
        const {request} = useHttp();
        return request("http://localhost:5174/flowers")
    }
)

const flowersSlice = createSlice({
    name: 'flowers',
    initialState,
    reducers: {
        findFlowers: (state, action) => {
            state.value = action.payload
        },
        resetFilters: (state) => {
            state.value = ""
        },
        addSale: (state) => {
            state.promotionFlowers = state.flowers
                .filter(flower => flower.title.includes('roses'))
                // .map(flower => ({
                //     ...flower,
                //     discountPrice: (flower.price * 0.85).toFixed(2)
                // }));
        }
        // addSale: (state) => {
        //     state.promotionFlowers = state.flowers.filter(flower => flower.title.includes('roses'));
        // }
    },
    extraReducers: (builder) => {
        builder
            // .addCase(fetchFlowers.pending)
            .addCase(fetchFlowers.fulfilled, (state, action) => {
                state.flowers = action.payload
            })
            // .addCase(fetchFlowers.rejected)
    }
});

const {actions, reducer} = flowersSlice;

export default reducer;
export const {
    findFlowers,
    resetFilters,
    addSale
} = actions;