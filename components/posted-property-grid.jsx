import PostedPropertyList from "@/components/posted-property-list";
import { Suspense } from "react";
import PropertyListFallback from "./property-list-fallback";
import axios from "axios";

const PostedPropertyGrid = async ({ userId, ownerId }) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/users/${ownerId}`);
  return (
    <div className="py-8 px-6 rounded-md shadow-md border">
      <Suspense fallback={<PropertyListFallback limit={12} />}>
        <PostedPropertyList data={data} userId={userId} ownerId={ownerId} />
      </Suspense>
    </div>
  );
};

export default PostedPropertyGrid;