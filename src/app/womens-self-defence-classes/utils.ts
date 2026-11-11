import { BOOKING_LINKS, PRICES } from "../constants/prices";

export const womenCourseDescription =
  "Women-only beginners self defence course in Glasgow. 4 weeks of Krav Maga at Kelvinhall from 7 January — safe, practical, all fitness levels. £40 / £30 students. Book today!";

export const womensSelfDefenceClasses = {
  monthAndYear: "January 2027",
  dayAndTime: "Thursdays, 6-7pm",
  startDate: "7th of January",
  startDateShort: "07/01",
  duration: "4 weeks",
  numberOfClasses: 4,
  price: `£${PRICES.wo_course_adult}`,
  studentsPrice: `£${PRICES.wo_course_student}`,
  ticketLink: BOOKING_LINKS.womenCourseAdult,
  studentTicketLink: BOOKING_LINKS.womenCourseStudent,
  location: "Glasgow Club Kelvinhall",
  googleLink: "https://maps.app.goo.gl/rExwC7cBVm6yZpb57",
};

export const mixedAdultCourseDescription =
  "Beginners Krav Maga course in Glasgow — 4 weeks at Kelvinhall. Mixed adult class, no experience needed. Limited spots for our January beginners self defence course.";

export const mixedAdultSelfDefenceClasses = {
  ticketLink:
    "https://scottish-krav-maga-systems-ltd.sumupstore.com/product/mixed-adult-krav-maga-beginners-4-week-course-january-2027",
};
