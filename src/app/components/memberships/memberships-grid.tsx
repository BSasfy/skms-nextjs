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
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        <MembershipTile />
        <MembershipTile />
        <MembershipTile />
        <MembershipTile />
        <MembershipTile />
        <MembershipTile />
      </div>
    </>
  );
}
