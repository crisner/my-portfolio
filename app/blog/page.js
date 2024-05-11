import {
  ArrowUpRightIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Blog() {
  const variables = { host: process.env.HASHNODE_HOST };
  const { data } = await fetch(process.env.HASHNODE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.HASHNODE_TOKEN,
    },
    body: JSON.stringify({
      query: `
          query Publication(
            $host: String
          ) {
            publication(
              host: $host
            ) {
              id
              title
              displayTitle
              url
              author {
                name
              }
              posts(first: 900) {
                edges {
                  node {
                    id
                    title
                    url
                    brief
                    readTimeInMinutes
                    publishedAt
                  }
                }
                totalDocuments
              }
            } 
          }
      `,
      variables,
    }),
    next: { revalidate: 100 },
  }).then(async (res) => {
    return res.json();
  });

  let posts = data?.publication?.posts?.edges;
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <section className="mx-auto lg:mx-0 relative left-full -translate-x-full">
      <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Blog</h2>
      <div className="mx-auto max-w-2xl gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none">
        {posts.map(({ node: post }) => (
          <article
            key={post.id}
            className="flex flex-col items-start justify-between py-5 mb-5 bg-[#3f3030] p-12 rounded-lg"
          >
            <div className="group relative">
              <h3 className="text-lg font-semibold leading-6">
                <a
                  href={post.url}
                  target="_blank"
                  className="link-text flex gap-2 items-baseline"
                >
                  <span className="absolute inset-0" />
                  {post.title}
                  <ArrowUpRightIcon className="h-3 w-3" />
                </a>
              </h3>
              <p className="line-clamp-3 text-sm leading-6 mt-2">
                {post.brief}
              </p>
              <div className="flex justify-end mt-1 text-xs w-full">
                <time dateTime={post.publishedAt} className="text-stone-500">
                  {new Date(post.publishedAt).toLocaleDateString(
                    "en-us",
                    options
                  )}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Link href="/" className="flex items-center gap-2 mt-16">
        <small>Go to home page</small>
        <ArrowLongRightIcon className="h-6 w-6" />
      </Link>
    </section>
  );
}
