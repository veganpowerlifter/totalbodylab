import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchCampsites = createAsyncThunk(
    'programs/fetchPrograms',
    async () => {
        const response = await fetch(baseUrl + 'programs');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    programsArray: [],
    isLoading: true,
    errMsg: ''
};

const programsSlice = createSlice({
    name: 'programs',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPrograms.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPrograms.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.campsitesArray = mapImageURL(action.payload);
        },
        [fetchPrograms.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const campsitesReducer = programsSlice.reducer;

export const selectAllCampsites = (state) => {
    return state.programs.programsArray;
};

export const selectCampsiteById = (id) => (state) => {
    return state.programs.programsArray.find(
        (programs) => programs.id === parseInt(id)
    );
};

export const selectFeaturedCampsite = (state) => {
    return {
        featuredItem: state.programs.programsArray.find(
            (programs) => programs.featured
        ),
        isLoading: state.programs.isLoading,
        errMsg: state.programs.errMsg
    };
};