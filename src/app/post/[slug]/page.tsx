import { fetchPost } from "@/lib/actions";

type PostPageProps = {
  params: { slug: string };
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = await fetchPost(slug);
  console.log(post);

  return <div className="text-white">Post Page {slug}</div>;
}
