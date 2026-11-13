/**
 * School facts the office still has to supply.
 *
 * Anything left as null or an empty list is simply not shown on the site,
 * so nothing unconfirmed is ever published. Fill a value in and the matching
 * section appears.
 */
export const SCHOOL = {
  // e.g. 2016
  foundedYear: null,

  // e.g. 'Kerala State Syllabus' or 'CBSE (Affiliation No. 000000)'
  board: null,

  // e.g. 'Hifz track available from Class 3'
  hifz: null,

  // Grade range per stage, e.g. 'Classes 1 to 4'
  grades: {
    primary: null,
    upperPrimary: null,
    highSchool: null,
  },

  // [{ name: 'Full name', role: 'Principal', photo: '/images/staff/name.jpg' }]
  leadership: [],

  // [{ time: '8:45 AM', label: 'Assembly and morning recitation' }]
  daySchedule: [],

  // e.g. '9:00 AM to 12:30 PM'
  timings: {
    preschool: null,
    school: null,
  },

  calendar: {
    // e.g. '2026 to 2027'
    year: null,
    // [{ label: 'School reopens', date: '1 June 2026' }]
    items: [],
    // Link to the calendar PDF
    pdf: null,
  },

  // [{ stage: 'Heavens Preschool', admission: '₹0', term: '₹0' }]
  fees: [],

  transport: {
    // e.g. 'Puthucode, Vadakkencherry, Alathur'
    routes: null,
    fee: null,
  },

  uniform: null,
  bookList: null,

  // [{ label: 'Recognition certificate', href: '/docs/recognition.pdf' }]
  documents: [],
};
