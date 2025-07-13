import Link from "next/link";

export default function MembershipTile() {
  return (
    <div className="flex flex-col bg-gray-100 px-8 py-16 text-center">
      <div>Adult unlimited training</div>
      <div>£55 per month</div>
      <ul className="list-disc">
        <li>Unlimited Training at all SKMS classes</li>
        <li>Classes three times a week</li>
        <li>Group lessons and sparring</li>
        <li>Suitable for all ages and fitness levels</li>
      </ul>
      <Link
        href="/memberships/adult-unlimited-training"
        className="rounded-sm bg-[#005EB8] px-4 py-2 text-sm text-white uppercase"
      >
        Sign up
        <span className="material-symbols-outlined pl-2">arrow_forward</span>
      </Link>
    </div>
  );
}
