import Link from "next/link";

export default function MembershipTile({
  title,
  schedule,
  price,
  benefits,
  link,
  linkText = "Sign up",
}: {
  title: string;
  schedule?: string;
  price: string;
  benefits: string[];
  link: string;
  linkText?: string;
}) {
  return (
    <div className="group flex max-w-[408px] min-w-[307px] flex-1 flex-col rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-12 text-center transition-all hover:-translate-y-1 hover:border-red-500/50 hover:shadow-[0_0_40px_rgba(220,38,38,0.1)]">
      <div className="mb-3 flex flex-col text-lg">
        <div className="font-black text-white uppercase">{title}</div>
        {schedule && (
          <div className="text-md font-bold text-zinc-400">{schedule}</div>
        )}
      </div>

      <div className="mb-6 text-4xl font-black text-red-500">{price}</div>

      <ul className="mb-10 flex flex-col gap-2.5 pl-4 text-left">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex flex-row gap-2 text-zinc-400">
            <span className="material-symbols-outlined text-red-500">check</span>
            <div>{benefit}</div>
          </li>
        ))}
      </ul>
      <Link href={link} className="skms-btn self-center text-sm">
        {linkText}
        <span className="material-symbols-outlined text-base">arrow_forward</span>
      </Link>
    </div>
  );
}
