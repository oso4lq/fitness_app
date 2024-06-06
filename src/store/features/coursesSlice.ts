import { CoursesStateType, CoursType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CoursesStateType = {
  pickedIDsCourses: [],
  currentCourseData: null,
};

const coursesSlice = createSlice({
  name: "usersCourses",
  initialState,
  reducers: {
    setPickedIDsCourses: (state, action: PayloadAction<string[]>) => {
      state.pickedIDsCourses = action.payload || [];
    },
    setCurrentCourseData: (state, action: PayloadAction<null | CoursType>) => {
      state.currentCourseData = action.payload;
    },
  },
});

export const { setPickedIDsCourses, setCurrentCourseData } =
  coursesSlice.actions;
export const usersCoursesReducer = coursesSlice.reducer;
