import MembershipTile from "./membership-tile";

export default function MembershipsGrid() {
  return (
    <>
      <div className="text-center text-4xl font-extrabold text-[#005EB8] uppercase">
        SKMS Membership Options
      </div>
      <div className="text-center text-4xl font-extrabold uppercase">
        Training plans
      </div>
      <div className="mt-6 mb-9 w-20 justify-self-center border-2 border-[#005EB8]"></div>
      <div className="mt-10 grid grid-cols-1 gap-4 justify-self-center px-4 max-sm:px-4 md:grid-cols-2 lg:grid-cols-3">
        <MembershipTile
          title="Kelvinhall Only"
          schedule="Monday 6:30pm - 7:30pm"
          price="£40 per month"
          benefits={[
            "Unlimited Training at all SKMS classes",
            "Classes three times a week",
            "Group lessons and sparring",
            "Suitable for all ages and fitness levels",
          ]}
          link="https://pay.gocardless.com/BRT0001CQG4JRNG"
        />

        <MembershipTile
          title="Adult unlimited training"
          schedule="Wednesdays, Thursdays, Saturdays"
          price="£55 per month"
          benefits={[
            "Unlimited Training at all SKMS classes",
            "Classes three times a week",
            "Group lessons and sparring",
            "Suitable for all ages and fitness levels",
          ]}
          link="https://pay.gocardless.com/BRT00006C8G2QD6"
        />
        <MembershipTile
          title="Premium membership"
          schedule="All classes, plus extras"
          price="£110 per month"
          benefits={[
            "Everything from the unlimited training plan",
            "One private lesson per month",
            "A new t-shirt every 6 months",
          ]}
          link="https://pay.gocardless.com/BRT0003ZMSPPQ60"
        />
        <MembershipTile
          title="Student unlimited training"
          price="£45 per month"
          benefits={[
            "Unlimited Training at all SKMS classes",
            "Classes three times a week",
            "Group lessons and sparring",
            "Suitable for all ages and fitness levels",
          ]}
          link="https://pay.gocardless.com/BRT00006M8Y0VBP"
        />
        <MembershipTile
          title="Private tuition"
          price="£70 per hour"
          benefits={[
            "Senior instructor with 40+ years of experience and multiple Martial Arts background",
            "Optional female assistant instructor for female members",
            "Fit around your schedule",
          ]}
          link="https://www.sumupbookings.com/scottish-krav-maga-systems-ltd"
        />
        <MembershipTile
          title="Corporate bookings"
          price="From £800"
          benefits={[
            "Any amount of participants",
            "We come to you or we can recommend venues",
            "Minimum 2 instructors, a male and a female",
            "Low cardio, no gym clothes required",
          ]}
          link="mailto:info@scotkravmaga.co.uk"
          linkText="Inquire now"
        />
      </div>
    </>
  );
}
