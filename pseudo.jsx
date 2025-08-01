"use client";

import Image from "next/image";
import defaultProfile from "@/assets/images/default-profile.png";
// NextAuth
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  console.log(session.user.image);

  return (
    <>
      <Image className="w-8 h-8 rounded-full" src={session.user.image || defaultProfile} width={512} height={512} alt={`User Profile Picture`} />
    </>
  );
};

export default Header;