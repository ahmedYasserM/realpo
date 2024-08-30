"use client";

import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { createComment, fetchPostBySlug } from "@/lib/actions";

type CommentsInputProps = {
  slug: string;
};

export default function CommentsInput({ slug }: CommentsInputProps) {
  const [input, setInput] = useState<string>("");
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  const { data } = useSession();

  function handleButtonClick() { }

  return (
    <div className="flex items-center gap-4 w-full my-8">
      <Input type="text" value={input} onChange={handleInputChange} />
      <Button>Send</Button>
    </div>
  );
}
