/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Sunday = 'weekend',
  Monday = 'weekday',
  Tuesday = 'weekday',
  Wednesday = 'weekday',
  Thursday = 'weekday',
  Friday = 'weekday',
  Satterday = 'weekend',
}

function isWeekend(day: Week): boolean {
  return day === 'weekend';
}
