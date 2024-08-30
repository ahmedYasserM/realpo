import { fetchPost } from "@/lib/actions";

type PostPageProps = {
  params: { slug: string };
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = await fetchPost(slug);
  console.log(post);

  if (post.success === false) {
    return <div>Failed to fetch post</div>;
  }

  return (
    <div className="text-foreground mt-8 flex flex-col gap-4">
      <h1 className="text-3xl">{post.post!.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.post!.content }}></p>
    </div>
  );
}
