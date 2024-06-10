import { CoursesStateType, CoursType, setCurrentWorkoutType, setExerciseQuantityType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CoursesStateType = {
  pickedIDsCourses: [],
  currentCourseData: null,
  currentWorkoutData: null,
  currentWorkoutIndex: null,
  currentExercisesQuantity: [],
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
      state.currentExercisesQuantity = [];
    },
    setExerciseQuantity(state, action: PayloadAction<setExerciseQuantityType>) {
      const { index, quantity } = action.payload;
      state.currentExercisesQuantity[index] = quantity;
    },
  },
});

export const {
  setPickedIDsCourses,
  setCurrentCourseData,
  setCurrentWorkoutData,
  setExerciseQuantity,
} = coursesSlice.actions;
export const usersCoursesReducer = coursesSlice.reducer;
