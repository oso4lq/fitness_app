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
