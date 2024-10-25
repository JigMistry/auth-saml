import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2">
      <Link href="https://login.microsoftonline.com/893417f7-0c97-4176-99d4-63a7a1f8b1ae/saml2">
        <button className="border p-2 bg-blue-800 text-white">Login with SAML</button>
      </Link>
    </div>
  );
}
