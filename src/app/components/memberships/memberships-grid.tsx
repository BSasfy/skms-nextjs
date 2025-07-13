import MembershipTile from "./membership-tile";

export default function MembershipsGrid() {
  return (
    <>
      <div className="text-center text-xl font-extrabold text-[#005EB8] uppercase">
        SKMS Membership Options
      </div>
      <div className="text-center text-3xl font-extrabold uppercase">
        Training plans
      </div>
      <div className="mt-3 w-20 justify-self-center border-2 border-b-blue-800"></div>
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
