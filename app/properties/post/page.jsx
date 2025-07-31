import PostPropertyForm from "@/components/post-property-form";

const PostProperty = () => {
  return (
    <section className="container max-w-2xl mx-auto py-24">
      <article className="m-4 md:m-0 py-8 px-6 border rounded-md shadow-md bg-white">
        <PostPropertyForm />
      </article>
    </section>
  );
};

export default PostProperty;