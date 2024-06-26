# MVP приложения для занятий фитнесом "SkyFitnessPro"

В этом репозитории реализован MVP приложения для занятий фитнесом "SkyFitnessPro", [макет в Figma](https://www.figma.com/design/2Vhk2Zdii1eM7rA0fWQExv/SkyFitnessPro?node-id=0-1&t=xqutd2kUutsYlO27-0)

## Разработка

Приложение разработано с помощью React и Next.js.

### Как разрабатывать

- Установите зависимости командой `npm i`
- Запустите dev сервер `npm run dev`
- Откройте адрес в браузере

### Стек и инструменты

TypeScript - базовый инструмент для реализации приложения.<br>
Для стилизации проекта должна быть использована библиотека Tailwind CSS.<br>
В качестве базы данных и инструмента для аутентификации пользователей Google Firebase.<br>
Конфигурация eslint - стандартная рекомендованная.<br>
Глобальное состояние добавлено в приложение с помощью Redux Toolkit.<br>
Для деплойя использован Netlify.<br>

### Пользовательские сценарии

- Страница курсов (главная).
На странице отображаются все курсы, имеющиеся в базе данных. Курсы отображаются вне зависимости от статуса авторизации пользователя. При нажатии на кнопку «Наверх» происходит скролл в самое начало страницы.

- Страница авторизации/регистрации.
Пользователь имеет возможность Войти в приложение или Зарегистрироваться. Если данные были введены некорректно, пользователю выводится сообщение об ошибке в соответствии с макетом. 

- Страница профиля пользователя.
На странице «Мой профиль» пользователь имеет возможность просматривать и редактировать свои данные (сменить пароль). Также пользователь может ознакомиться с приобретенными курсами, перейти на страницу конкретного курса и начать тренироваться по курсу. В курсе несколько тренировок, пользователь выбирает к какой хочет приступить (перейти на страницу тренировки) кликом по позиции в списке вызываемого модальном окне.

- Страница тренировки.
По клику на выбранную тренировку в своем профиле пользователь попадает на страницу, где может открывать материалы урока (видеоролики на ютубе). У тренировки может быть определенный набор упражнений, и пользователь имеет возможность заполнить свой прогресс по ним - внести число фактически выполненных подходов.