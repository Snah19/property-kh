import PostedPropertyList from "@/components/posted-property-list";
import { Suspense } from "react";
import PropertyListFallback from "./property-list-fallback";

const PostedPropertyGrid = ({ userId }) => {
  return (
    <div className="py-8 px-6 rounded-md shadow-md border">
      <Suspense fallback={<PropertyListFallback limit={12} />}>
        <PostedPropertyList userId={userId} />
      </Suspense>
    </div>
  );
};

export default PostedPropertyGrid;