import { CoursesStateType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CoursesStateType = {
  pickedIDsCourses: [],
};

const coursesSlice = createSlice({
  name: "usersCourses",
  initialState,
  reducers: {
    setPickedIDsCourses: (state, action: PayloadAction<string[]>) => {
      state.pickedIDsCourses = action.payload;
    },
  },
});

export const {
    setPickedIDsCourses,
  } = coursesSlice.actions;
  export const usersCoursesReducer = coursesSlice.reducer;