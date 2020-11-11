export default function currentDate() {
  let date = new Date();
  let weekdayArr = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  let currentWeekday = weekdayArr[date.getDay()];
  let monthArr = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  let currentMonth = monthArr[date.getMonth()];
  let currentDay = date.getDate();
  let currentYear = date.getFullYear();
  return currentWeekday + ', ' + currentMonth + ' ' + currentDay + ', ' + currentYear;
}
