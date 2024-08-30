"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Tiptap from "./Tiptap";
import { Button } from "./ui/button";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createPost } from "@/lib/actions";

export default function NewPost(): React.JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { status, data } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  const email = data?.user?.email;

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    const result = await createPost({ title, content, userEmail: email });

    // clear the form
    setTitle("");
    setContent("");
  }

  return (
    <>
      {status === "authenticated" ? (
        // I tried to use action={createPost} but it didn't work
        // because the TipTap component is not registered
        // so I used onClick={handleSubmit} instead
        <form className="flex flex-col items-start gap-4 lg:w-[895px] mobile:w-full mx-auto">
          <div className="grid min-w-full max-w-sm items-center gap-1.5 text-card-foreground">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              name="title"
              placeholder="Enter post title..."
              onChange={handleTitleChange}
            />
          </div>
          <Tiptap onChange={setContent} content={content} />
          <Button
            variant="secondary"
            size="default"
            type="submit"
            className="w-full"
            onClick={handleSubmit}
          >
            Publish Post
          </Button>
        </form>
      ) : (
        <></>
      )}
    </>
  );
}
