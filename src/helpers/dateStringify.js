/* eslint no-else-return: 0 */
/* eslint nonblock-statement-body-position:0 */
/* eslint curly:0 */

export default (date, day, month) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const days = [
    '',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const numeralDay = new Date(date).getDay() + 1
  const numeralMonth = new Date(date).getMonth()
  const numeralYear = new Date(date).getFullYear()

  if (day && month) {
    return `${months[numeralMonth]}-${days[numeralDay]}-${numeralYear}`
  } else if (day) {
    return `${months[numeralMonth]}-${numeralDay}-${numeralYear}`
  } else if (month) {
    return `${months[numeralMonth]}-${numeralDay}-${numeralYear}`
  } else
    return Error(
      'make sure you are passing correct parameters, sequance is date[Type Date], day[boolean], month[boolean] ',
    )
}
