import { getSessionUser } from "@/utils/get-session-user";
import PostPropertyForm from "@/components/post-property-form";
import { Wobble } from 'ldrs/react';
import { Suspense } from "react";

export const metadata = {
  title: "Post Property",
};

const PostProperty = async () => {
  const { userId } = await getSessionUser();
  return (
    <section className="container max-w-2xl mx-auto py-24">  
        <Suspense fallback={<div className="text-center"><Wobble size="45" speed="0.9" color="gray" /></div>}>
          <article className="m-4 md:m-0 py-8 px-6 border rounded-md shadow-md bg-white">
            <PostPropertyForm userId={userId} />
          </article>
        </Suspense>
    </section>
  );
};

export default PostProperty;