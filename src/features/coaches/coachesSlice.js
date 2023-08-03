// import {COACHES} from '../../app/shared/COACHES';

// export const selectAllCoaches = () => {
//     return COACHES;
// };

// export const selectCoachById = (id) => {
//     return COACHES.find((coach) => coach.id === parseInt(id));
// };

// export const selectFeaturedCoach = () => {
//     return COACHES.find((coach) => coach.featured);
// };

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';
import { COACHES } from '../../app/shared/COACHES';

// export const fetchCoaches = createAsyncThunk(
//     'coaches/fetchCoaches',
//     async () => {
//         const response = await fetch(baseUrl + 'coaches');
//         if (!response.ok) {
//             return Promise.reject('Unable to fetch, status: ' + response.status);
//         }
//         const data = await response.json();
//         return data;
//     }
// );

const initialState = {
    coachesArray: COACHES,
    isLoading: true,
    errMsg: ''
};

const coachesSlice = createSlice({
    name: 'coaches',
    initialState,
    // reducers: {},
    // extraReducers: {
    //     [fetchCoaches.pending]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [fetchCoaches.fulfilled]: (state, action) => {
    //         state.isLoading = false;
    //         state.errMsg = '';
    //         state.campsitesArray = mapImageURL(action.payload);
    //     },
    //     [fetchCoaches.rejected]: (state, action) => {
    //         state.isLoading = false;
    //         state.errMsg = action.error ? action.error.message : 'Fetch failed';
    //     }
    // }
});

export const coachesReducer = coachesSlice.reducer;

export const selectAllCoaches = (state) => {
    return COACHES
};

export const selectCoachById = (id) => (state) => {
    return state.coaches.coachesArray.find(
        (coach) => coach.id === parseInt(id)
    );
};

export const selectFeaturedCoach = (state) => {
    return {
        featuredItem: state.coaches.coachesArray.find(
            (coach) => coach.featured
        ),
        isLoading: state.coaches.isLoading,
        errMsg: state.coaches.errMsg
    };
};