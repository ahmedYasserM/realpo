"use server";

import db from "@/db/db";
import { posts } from "@/db/schema";
import Post from "@/types/post";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";



// This function is used to store a new post in the database
export async function createPost({ title, content, userEmail }: Post) {
  "use server";

  const newPosts = await db
    .insert(posts)
    .values({
      title: title,
      content: content,
      slug: title.toLowerCase().replace(/\s/g, "-"),
      userEmail: userEmail,
    })
    .returning();

    revalidatePath("/")

  return newPosts.length > 0
    ? { success: true, post: newPosts[0] }
    : { success: false, message: "Failed to create post" };
}


// This function is used to fetch all posts from the database
export async function fetchPosts() {
  "use server";

  const allPosts = await db.select().from(posts).orderBy(desc(posts.createdAt));

  revalidatePath("/")

  return allPosts.length > 0 ? {success: true, posts: allPosts} : {success: false, message: "Failed to fetch posts"};
}


// This function is used to fetch a single post from the database using its slug
export async function fetchPost(slug: string) {
  "use server";

  const post = await db.select().from(posts).where(eq(posts.slug,slug));

  revalidatePath("/")

  return post.length > 0 ? {success: true, post: post[0]} : {success: false, message: "Failed to fetch post"};
}
