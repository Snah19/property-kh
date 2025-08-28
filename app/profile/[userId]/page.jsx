import User from "@/models/user";
import Image from "next/image";
import defaultProfile from "@/assets/images/default-profile.png";
import connectToMongoDB from "@/config/mongodb";
import PostedPropertyGrid from "@/components/posted-property-grid";

export const metadata = {
  title: "Profile",
};

const ProfilePage = async ({ params }) => {
  await connectToMongoDB();
  const { userId } = await params;
  const {username, email, image} = await User.findOne({_id: userId});
  
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
        <PostedPropertyGrid userId={userId} />
      </section>
    </>
  );
};

export default ProfilePage;