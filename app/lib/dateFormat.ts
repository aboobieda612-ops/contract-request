export function toDate(value: string): Date | null {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/) // yyyy-mm-dd (API)
    ?? value.match(/^(\d{2})-(\d{2})-(\d{4})$/);         // dd-mm-yyyy
  if (!match) return null;

  const isISO = match[1].length === 4;
  const year = Number(isISO ? match[1] : match[3]);
  const month = Number(match[2]);
  const day = Number(isISO ? match[3] : match[1]);

  const date = new Date(year, month - 1, day); // month is 0-based

  // reject invalid dates like 31-02-2024
  return date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
    ? date
    : null;
}

export function getDateParts(value?: string) {
  if (!value) return null;
  const date = toDate(value);
  if (!date) return null;

  return {
    day: String(date.getDate()).padStart(2, '0'),
    month: String(date.getMonth() + 1).padStart(2, '0'),
    year: String(date.getFullYear()),
  };
}
export function getDateDiff(from?: string, to?: string) {
  if (!from || !to) return null;
  const start = toDate(from);
  const end = toDate(to);
  if (!start || !end) return null;

  // total days (UTC avoids daylight saving errors)
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  const days = Math.round(
    (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
      Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
      MS_PER_DAY
  );

  // calendar breakdown: years, months, days
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let remainingDays = end.getDate() - start.getDate();

  if (remainingDays < 0) {
    months--;
    // days in the month before the end month
    remainingDays += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return { days, years, months, remainingDays };
}
export function getHijriDate(
  value?: string | Date,
  calendar: 'islamic-umalqura' | 'islamic-civil' = 'islamic-umalqura'
) {
  if (!value) return null;
  const date = typeof value === 'string' ? toDate(value) : value;
  if (!date) return null;

  const parts = new Intl.DateTimeFormat('en-u-ca-' + calendar + '-nu-latn', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';

  return {
    day: get('day').padStart(2, '0'),
    month: get('month').padStart(2, '0'),
    year: get('year'),
  };
}