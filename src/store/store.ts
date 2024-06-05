import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";
import { usersCoursesReducer } from "./features/coursesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      user: userReducer,
      usersCourses: usersCoursesReducer,
    }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
