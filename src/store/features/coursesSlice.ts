import { CoursesStateType, CoursType, setCurrentWorkoutType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CoursesStateType = {
  pickedIDsCourses: [],
  currentCourseData: null,
  currentWorkoutData: null,
  currentWorkoutIndex: null,
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
    setCurrentWorkoutData: (state, action: PayloadAction<setCurrentWorkoutType>) => {
      state.currentWorkoutData = action.payload.data;
      state.currentWorkoutIndex = (Number(action.payload.index) + 1);
    },
  },
});

export const {
  setPickedIDsCourses,
  setCurrentCourseData,
  setCurrentWorkoutData,
} = coursesSlice.actions;
export const usersCoursesReducer = coursesSlice.reducer;
