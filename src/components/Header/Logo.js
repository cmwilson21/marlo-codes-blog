import Link from "next/link";
import profileImg from "@/public/mc-1.jpg";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-20 overflow-hidden mr-2">
        <Image
          src={profileImg}
          alt="Profile Picture - temporary image"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">MarloCodes</span>
    </Link>
  );
};

export default Logo;
