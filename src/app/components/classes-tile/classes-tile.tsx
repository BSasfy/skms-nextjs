export default function ClassesTile({
  title,
  description,
  keyInfo,
  href,
  CTAtext,
  img,
}: {
  title: string;
  description: string;
  keyInfo: string;
  href: string;
  CTAtext: string;
  img: string;
}) {
  return (
    <div className="w-full bg-gray-100 p-6">
      <div>
        <h2>Classes</h2>
      </div>
    </div>
  );
}
