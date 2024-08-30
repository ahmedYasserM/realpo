"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

type ReadMoreButtonProps = {
  slug: string;
};

export default function ReadMoreButton({
  slug,
}: ReadMoreButtonProps): React.JSX.Element {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="ml-autotext-lg flex items-center w-fit self-end group"
      onClick={() => router.push(`/post/${slug}`)}
    >
      Read More
      <ChevronRight
        size={20}
        className="duration-300 ease-in-out group-hover:translate-x-2"
      />
    </Button>
  );
}
