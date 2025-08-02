"use client";

import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
// NextAuth
import { signIn, useSession, getProviders } from "next-auth/react";

const Header = () => {
  const [nextAuthProviders, setNextAuthProviders] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    const setAuthProviders = async () => {
      const authProviders = await getProviders();
      setNextAuthProviders(authProviders);
    };

    setAuthProviders();
  }, []);

  return (
    <>
      {nextAuthProviders && Object.values(nextAuthProviders).map(({id}, i) => (
        <button className={`${session ? "hidden" : "flex"} items-center gap-x-2 py-2 px-3 rounded-md bg-gray-700 hover:bg-gray-900 text-white`} key={i} onClick={() => signIn(id)}>
          <FaGoogle />
          <span>Sign In</span>
        </button>
      ))}
    </>
  );
};

export default Header;