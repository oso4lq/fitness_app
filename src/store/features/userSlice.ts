import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isAuthenticated: boolean;
}

const initialState: UserState = {
  isAuthenticated: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
    },
  },
});

// const PlaylistSlice = createSlice({
//   name: "playlist",
//   initialState,
//   reducers: {
//     setPlayList: (state, action: PayloadAction<trackType[]>) => {
//       state.playList = action.payload;
//       state.filteredPlaylist = state.playList;
//       state.shuffledPlaylist = [...action.payload].sort(
//         () => 0.5 - Math.random()
//       );
//     },
//     setCurrentTrack: (state, action: PayloadAction<SetCurrentTrackType>) => {
//       state.currentTrack = action.payload.currentTrack;
//     },
//     nextTrack: changeTrack(1),
//     previousTrack: changeTrack(-1),
//     shuffle: (state) => {
//       state.isShuffled = !state.isShuffled;
//     },
//     setActiveFilter: (
//       state,
//       action: PayloadAction<{
//         authors?: string[];
//         years?: string;
//         genres?: string[];
//         searchValue?: string;
//       }>
//     ) => {
//       state.activeFilters = {
//         authors: action.payload.authors || state.activeFilters.authors,
//         years: action.payload.years || null,
//         genres: action.payload.genres || state.activeFilters.genres,
//         searchValue:
//           action.payload.searchValue || state.activeFilters.searchValue,
//       };
//       state.filteredPlaylist = state.playList.filter((track) => {
//         const isAuthors =
//           state.activeFilters.authors.length > 0
//             ? state.activeFilters.authors.includes(track.author)
//             : true;
//         const isGenres =
//           state.activeFilters.genres.length > 0
//             ? state.activeFilters.genres.includes(track.genre)
//             : true;
//         return isAuthors && isGenres;
//       });
//     },
//   },
// });

// export const {
//   setPlayList,
//   setCurrentTrack,
//   nextTrack,
//   previousTrack,
//   shuffle,
//   setActiveFilter,
// } = PlaylistSlice.actions;

export const { logIn, logOut } = UserSlice.actions;

export const userReducer = UserSlice.reducer;
