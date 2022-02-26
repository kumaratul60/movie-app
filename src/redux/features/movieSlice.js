import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";
import { APIKey } from "../../api/MovieApiKey";
/*  createAsyncThunk => It is a middleware which handle async task , it takes two argument one is simple string identifire for async action creator and second one is payload creator callback function  */

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchMovies",
  async () => {
    const searchMovie = "Harry";
    const res = await movieApi.get(
      `?apiKey=${APIKey}&s=${searchMovie}&type=movie`
    );

    return res.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchShows",
  async () => {
    const searchShow = "Friends";
    const res = await movieApi.get(
      `?apiKey=${APIKey}&s=${searchShow}&type=series`
    );

    return res.data;
  }
);

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
  "movies/fetchMoviesOrShowsDetails",
  async (id) => {
    try {
      const res = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
      return res.data;
    } catch (err) {
      console.log("erro API", err);
    }
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    /* defining action  which take two parameter: action,payload
     whenever we get the movies from payload we need to update the state of te movies
    {...state,payload}  // in old way
     */
    // addMovies: (state, { payload }) => {
    //   state.movies = payload; // *? in new way
    // },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  // extraReducers: extraReducers will use when you have a common method which you want to invoke but you have different types of action.
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
      console.log("details fetched $uccessfully");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;

// * if we want to fetch value or get value from store so how we can do that

// *? export const func = (state)=> state.nameOfSlice/Reducer.nameOfInitialState/property

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;

export default movieSlice.reducer;

/*
line no 14. differenciate the difference bitween redux & redux-toolkit , so in redux-toolkit it uses a internal library called IMME for mutatbility. 
*/
