import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-start border-2 border-red-400">
      <div className="self-start flex flex-col gap-8  border-2 border-blue-400">
        {[42, 49, 53].map((p) => (
          <Link
            href={`/${p}`}
            className="underline text-blue-500"
            target="_blank"
          >
            {p}
          </Link>
        ))}
      </div>
    </div>
  );
}
