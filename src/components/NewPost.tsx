"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Tiptap from "./Tiptap";
import { Button } from "./ui/button";
import { useState } from "react";

export default function NewPost(): React.JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    console.log({ title, content });
  }

  return (
    <form className="flex flex-col items-start gap-4 sm:w-3/4 mobile:w-full mx-auto">
      <div className="grid min-w-full max-w-sm items-center gap-1.5 text-card-foreground">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          name="title"
          placeholder="Enter post title..."
          onChange={handleTitleChange}
        />
      </div>
      <Tiptap updateHandler={setContent} />
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
  );
}
