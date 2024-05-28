import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

interface UserState {
  isAuthenticated: boolean;
  // new
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  // new
  user: null,
  loading: false,
  error: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logInUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(logInUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(logOutUser.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

// Async thunk for logging in
export const logInUser = createAsyncThunk(
  "user/logInUser",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for logging out
export const logOutUser = createAsyncThunk("user/logOutUser", async (_, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
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

// export const { logIn, logOut } = UserSlice.actions;

export const userReducer = UserSlice.reducer;
