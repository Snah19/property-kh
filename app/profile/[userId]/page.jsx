import User from "@/models/user";
import Property from "@/models/property";
import Image from "next/image";
import defaultProfile from "@/assets/images/default-profile.png";
import PostedPropertyList from "@/components/posted-property-list";
import { getSessionUser } from "@/utils/get-session-user";
import PropertyList from "@/components/property-list";

const { default: connectToMongoDB } = require("@/config/mongodb");

const ProfilePage = async ({ params }) => {
  await connectToMongoDB();
  const { userId } = await params;

  const sessionUser = await getSessionUser();

  const {username, email, image} = await User.findOne({_id: userId});
  const properties = await Property.find({owner: userId});
  
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

        <div className="py-8 px-6 rounded-md shadow-md border">
          {userId === sessionUser.userId ? (
            <PostedPropertyList properties={properties} />
          ) : (
            <PropertyList properties={properties} />
          )}
          
        </div>
      </section>
    </>
  );
};

export default ProfilePage;