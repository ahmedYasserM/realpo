import { fetchPosts } from "@/lib/actions";
import PostType from "@/types/post";
import Post from "./SinglePost";

export default async function PostList() {
  const posts = await fetchPosts();

  return (
    <>
      {posts.success === true ? (
        posts.posts!.map((post: PostType) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              content={post.content}
              date={post.createdAt!.toISOString().split("T")[0]}
              author={post.userEmail!}
              slug={post.slug!}
            />
          );
        })
      ) : (
        <div>Failed to fetch posts</div>
      )}
    </>
  );
}
