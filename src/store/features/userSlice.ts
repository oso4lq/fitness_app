import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "@/lib/firebaseConfig";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  AuthErrorCodes,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { AppDispatch } from "../store";
import { FirebaseError } from "firebase/app";
import {
  NetworkError,
  errorFromFirebase,
  errorFromGeneric,
} from "@/types/types";

interface UserState {
  isAuthenticated: boolean;
  isCredentialsInvalid: boolean;
  isUserExists: boolean;
  genericError: NetworkError | null;
  loading: boolean;
  name: string | null;
  email: string | null;
}

interface SetUserPayload {
  isAuthenticated: boolean;
  name: string | null;
  email: string | null;
}

const emptyAuth: SetUserPayload = {
  isAuthenticated: false,
  name: null,
  email: null,
};

const initialState: UserState = {
  isAuthenticated: false,
  loading: false,
  isCredentialsInvalid: false,
  isUserExists: false,
  genericError: null,
  name: null,
  email: null,
};

export const logInUser = createAsyncThunk(
  "user/logInUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        isAuthenticated: true,
        name: userCredential.user.displayName,
        email: userCredential.user.email,
      };
    } catch (error: any) {
      if (error instanceof FirebaseError) {
        return rejectWithValue(errorFromFirebase(error));
      } else {
        return rejectWithValue(errorFromGeneric(error));
      }
    }
  }
);

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        isAuthenticated: true,
        name: userCredential.user.displayName,
        email: userCredential.user.email,
      };
    } catch (error: any) {
      if (error instanceof FirebaseError) {
        return rejectWithValue(errorFromFirebase(error));
      } else {
        return rejectWithValue(errorFromGeneric(error));
      }
    }
  }
);

export const logOutUser = createAsyncThunk(
  "user/logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SetUserPayload>) => {
      state.isAuthenticated = !!action.payload;
      if (action.payload) {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.isAuthenticated = action.payload.isAuthenticated;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.pending, (state) => {
        state.loading = true;
        state.isCredentialsInvalid = false;
        state.genericError = null;
      })
      .addCase(
        logInUser.fulfilled,
        (state, action: PayloadAction<SetUserPayload>) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.name = action.payload.name;
          state.email = action.payload.email;
        }
      )
      //@ts-ignore
      .addCase(
        logInUser.rejected,
        (state, action: PayloadAction<NetworkError>) => {
          state.loading = false;
          if (action.payload.code === AuthErrorCodes.INVALID_IDP_RESPONSE) {
            state.isCredentialsInvalid = true;
          } else {
            console.log("Generic error while login", action.payload);
            state.genericError = action.payload;
          }
        }
      )
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.isUserExists = false;
        state.genericError = null;
      })
      .addCase(
        signUpUser.fulfilled,
        (state, action: PayloadAction<SetUserPayload>) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.name = action.payload.name;
          state.email = action.payload.email;
        }
      )
      //@ts-ignore
      .addCase(
        signUpUser.rejected,
        (state, action: PayloadAction<NetworkError>) => {
          state.loading = false;
          if (action.payload.code === AuthErrorCodes.EMAIL_EXISTS) {
            state.isUserExists = true;
          } else {
            console.log("Generic error while login", action.payload);
            state.genericError = action.payload;
          }
        }
      )
      .addCase(logOutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.name = null;
        state.email = null;
        state.genericError = null;
        state.isCredentialsInvalid = false;
      })
      //@ts-ignore
      .addCase(
        logOutUser.rejected,
        (state, action: PayloadAction<NetworkError>) => {
          console.log("Generic error while login", action.payload);
          state.genericError = action.payload;
        }
      );
  },
});

export const { setUser } = userSlice.actions;

export const initializeAuthListener = () => (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          isAuthenticated: true,
          name: user.displayName,
          email: user.email,
        })
      );
    } else {
      dispatch(setUser(emptyAuth));
    }
  });
};

export const userReducer = userSlice.reducer;
