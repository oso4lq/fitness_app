// src/store/features/userSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import { AppDispatch } from "../store";

interface UserState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

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

export const logOutUser = createAsyncThunk("user/logOutUser", async (_, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.isAuthenticated = !!action.payload;
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logInUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      //@ts-ignore
      .addCase(logInUser.rejected, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      //@ts-ignore
      .addCase(logOutUser.rejected, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      });
  }
});

export const { setUser } = userSlice.actions;

export const initializeAuthListener = () => (dispatch: AppDispatch) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(setUser(null));
    }
  });
};

export const userReducer = userSlice.reducer;
