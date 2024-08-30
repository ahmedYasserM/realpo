import NewPost from "@/components/NewPost";
import Post from "@/components/SinglePost";
import { useQuery } from "@tanstack/react-query";
import { createPost } from "@/lib/actions";
import PostList from "@/components/PostList";

export default function Home() {
  return (
    <div className="pt-10 min-h-dvh">
      <NewPost />
      <PostList />
    </div>
  );
}
