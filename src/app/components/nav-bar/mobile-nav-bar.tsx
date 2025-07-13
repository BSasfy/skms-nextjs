import Link from "next/link";

export default function MobileNavBar() {
  return (
    <div className="fixed top-[85px] left-0 flex h-[90vh] w-full items-center bg-[#181818]">
      <ul className="flex w-full flex-col text-center font-medium">
        <li className="content-center">
          <Link
            href="/"
            className="block px-3 py-2 text-3xl font-thin text-[#FFFBF2] hover:text-blue-500 lg:text-3xl"
          >
            Home
            <span className="material-symbols-outlined pl-2">
              arrow_forward
            </span>
          </Link>
        </li>
        <li className="content-center">
          <Link
            href="/trial"
            className="block px-3 py-2 text-3xl font-thin text-[#FFFBF2] hover:bg-transparent hover:text-blue-500 lg:text-3xl"
          >
            Book a Trial Class
            <span className="material-symbols-outlined pl-2">
              arrow_forward
            </span>
          </Link>
        </li>
        <li className="content-center">
          <Link
            href="/timetable"
            className="block px-3 py-2 text-3xl font-thin text-[#FFFBF2] hover:bg-transparent hover:text-blue-500 lg:text-3xl"
          >
            Beginners Courses
            <span className="material-symbols-outlined pl-2">
              arrow_forward
            </span>
          </Link>
        </li>
        <li className="content-center">
          <Link
            href="/classes"
            className="block px-3 py-2 text-3xl font-thin text-[#FFFBF2] hover:bg-transparent hover:text-blue-500 lg:text-3xl"
          >
            Mixed Adult
            <span className="material-symbols-outlined pl-2">
              arrow_forward
            </span>
          </Link>
        </li>
        <li className="content-center">
          <Link
            href="/womens-self-defence-classes"
            className="block px-3 py-2 text-3xl font-thin text-[#FFFBF2] hover:bg-transparent hover:text-blue-500 lg:text-3xl"
          >
            Women Only
            <span className="material-symbols-outlined pl-2">
              arrow_forward
            </span>
          </Link>
        </li>
        <li className="content-center">
          <Link
            href="/kids-krav-maga"
            className="block px-3 py-2 text-3xl font-thin text-[#FFFBF2] hover:bg-transparent hover:text-blue-500 lg:text-3xl"
          >
            Kids Classes
            <span className="material-symbols-outlined pl-2">
              arrow_forward
            </span>
          </Link>
        </li>
        <li className="content-center">
          <Link
            href="/join"
            className="block px-3 py-2 text-3xl font-thin text-[#FFFBF2] hover:bg-transparent hover:text-blue-500 lg:text-3xl"
          >
            Prices
            <span className="material-symbols-outlined pl-2">
              arrow_forward
            </span>
          </Link>
        </li>
        <li className="content-center">
          <Link
            href="/shop"
            className="block px-3 py-2 text-3xl font-thin text-[#FFFBF2] hover:bg-transparent hover:text-blue-500 lg:text-3xl"
          >
            Shop
            <span className="material-symbols-outlined pl-2">
              arrow_forward
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
