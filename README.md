# README #

##### Разработчики:
* Санечек Иванов
* Антон Гришин

### План действий фронт

0. Сделать страницу входа и страницу чата
0. Подготовить работу для вебсокета


# Список предложений

### Страница входа

* ~~Обновить градиент на логотипе. Она должна быть одна по всему логотипу.~~
* Регистрация разрешена только в онлайн режиме.
* В оффланй режиме будет выводиться сообщение, что возможен только вход. 
	* Чтобы не получилось дублирование ников и паролей. Без проверки нельзя разрешать регистрацию.
* ~~Валидация. Мин три символа логина. Мин 1 символ пароля.~~
* ~~Добавить отображение валидации. И системные сообщения.~~
* ~~После регистрация должна быть анимация смены экранов. Регистрация уезжает влево. А справа приезжает чат.~~
* ~~При выходе обратная анимация. Чат уезжает вправо. А регистрация выезжет слева.~~

### Страница чата

* В чате добавить кнопку выхода.
* Добавить индикатор сети.
* Заходишь на страницу, в поле с сооющениями крутится - идет загрузка сооющений.
* Они должны выстраиваться и скролл ехать плавно вниз за ними.
* Новые сооющения не должны появлятьсь чаще чем 1 в 3 секунды. Если их приходит больше, то они должны накапливаться и появляется плашка - Сооющений 10 - показать все.
* Время идет и соощения потихоньку оттуда заканчиваются.
* При вводе сооющения оно сразу появляется в поле сообщений. 
* В оффдейне так же.
* Когда приходят сообщения с сервера оно обновляться не должно. Все на реактивности.

### Разное
* Добавить кеш при повторном заходе и если сессия не закончена.
* Прикрутить смайлы?:)(Фразы арнольд шварцнегера:)
* Скины
* Добавить рандомные аватарки?
