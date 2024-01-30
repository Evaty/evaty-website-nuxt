// Check if a given date is today
export function isToday(someDate: Date): boolean {
  const today = new Date()
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  )
}

// Check if a time span represents a full day
export function isFullDay(start: Date, end: Date): boolean {
  return start.getHours() === end.getHours() && start.getMinutes() === end.getMinutes()
}

export function isSameDay(start: Date, end: Date): boolean {
  return (
      start.getDate() === end.getDate() &&
      start.getMonth() === end.getMonth() &&
      start.getFullYear() === end.getFullYear()
  )
}
