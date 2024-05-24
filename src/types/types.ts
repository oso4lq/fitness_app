export type Exercise = {
  name: string;
  quantity: number;
};

export type Workout = {
  _id: string;
  exercises?: Exercise[];
  name: string;
  video: string;
};

export type WorkoutsData = {
  [key: string]: Workout;
};

export type CoursType = {
  _id: string;
  description: string;
  directions: string[];
  fitting: string[];
  nameEN: string;
  nameRU: string;
  order: number;
  workouts: string[];
};

export type CoursesDataType = {
  [key: string]: CoursType;
}