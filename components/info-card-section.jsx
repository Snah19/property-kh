import Link from "next/link";

const info = [
  {
    id: "for-renters",
    headline: "For Renters",
    body: "Find your dream rental property. Bookmark properties and contact owners.",
    link: "/properties",
    linkTitle: "Browse Properties"
  },
  {
    id: "for-property-owners",
    headline: "For Property Owners",
    body: "List your properties and reach potential tenants",
    link: "/properties/post",
    linkTitle: "Post Property"
  }
];

const InfoCardSection = () => {
  return (
    <section>
      <article className="container-xl lg:container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {info.map(({id, headline, body, link, linkTitle}) => (
            <div className={`flex flex-col justify-between p-6 rounded-lg shadow-md ${id === "for-renters" ? "bg-gray-100" : "bg-blue-100"}`} key={id}>
              <div>
                <h2 className="text-2xl font-bold text-gray-600">
                  {headline}
                </h2>
                <p className="mt-2 mb-4">
                  {body}
                </p>
              </div>
              <Link className={`inline-block py-2 px-4 rounded-lg ${id === "for-renters" ? "bg-black hover:bg-gray-700" : "bg-blue-500 hover:bg-blue-600" } text-white`} href={link}>
                {linkTitle}
              </Link>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default InfoCardSection;