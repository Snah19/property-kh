import BookmarkedPropertyList from "@/components/bookmarked-property-list";
import { Suspense } from "react";
import PropertyListFallback from "@/components/property-list-fallback";

export const metadata = {
  title: "Bookmarks",
};

const BookmarkPage = () => {
  return (
    <section className="container mx-auto py-6 px-4">
      <h1 className="mb-4 text-2xl font-bold">Bookmarks</h1>
      <Suspense fallback={<PropertyListFallback limit={8} />}>
        <BookmarkedPropertyList />
      </Suspense>
    </section>
  );
};

export default BookmarkPage;