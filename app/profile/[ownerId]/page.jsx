import Image from "next/image";
import defaultProfile from "@/assets/images/default-profile.png";
import PostedPropertyGrid from "@/components/posted-property-grid";
import axios from "axios";
import { getSessionUser } from "@/utils/get-session-user";

export const metadata = {
  title: "Profile",
};

const ProfilePage = async ({ params }) => {
  const sessionUser = await getSessionUser();

  const { ownerId } = await params;
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/id/${ownerId}`);
  const { email, username, image } = data;
  
  return (
    <>
      <section className="flex flex-col gap-4 mx-auto py-6 px-4">
        <article className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex gap-x-6 w-max py-4 px-8 rounded-full border">
            <Image className="rounded-full" src={image || defaultProfile} alt={`${username} profile image`} width={48} height={48} />
            <div>
              <p className="font-bold">{username}</p>
              <p className="text-sm">{email}</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold">Posted Properties :</h2>
        </article>
        <PostedPropertyGrid userId={sessionUser?.userId} ownerId={ownerId} />
      </section>
    </>
  );
};

export default ProfilePage;