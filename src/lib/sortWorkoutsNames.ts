import { Workout } from "@/types/types";

export const sortWorkoutsNames = (workoutsArray: Workout[]) => {

    const newWorkoutsArray = workoutsArray?.slice() 
    .sort((a: Workout, b: Workout) => {
      const getLessonNumber = (name: string) => {
        const regexp = /Урок (\d+)/; // Выражение для поиска тренировок, у которых название "Урок /номер/. ..."
        const match = name.match(regexp);
        return match ? parseInt(match[1]) : Number.MAX_SAFE_INTEGER; 
      };

      const lessonNumberA = getLessonNumber(a.name);
      const lessonNumberB = getLessonNumber(b.name);

      if (
        Number.isFinite(lessonNumberA) &&
        Number.isFinite(lessonNumberB)
      ) {
        return lessonNumberA - lessonNumberB; // Сортируем по номеру урока, если оба имеются
      }

      return 0; // Если номер урока не доступен в одном или обоих объектах, сохраняем текущий порядок
    })

    return newWorkoutsArray;
}
