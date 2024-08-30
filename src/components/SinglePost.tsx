import { Badge } from "./ui/badge";
import ReadMoreButton from "./ReadMoreButton";

type PostProps = {
  title: string;
  content: string;
  date: string; // ISO string
  author: string;
  slug: string;
};

export default function Post({
  title,
  content,
  date,
  author,
  slug,
}: PostProps): React.JSX.Element {
  return (
    <div className=" border border-border bg-card text-card-foreground mt-10 p-4 rounded-lg lg:w-[895px] mx-auto flex flex-col gap-4 flex-wrap">
      <div className="flex gap-1 flex-col sm:flex-row sm:items-center sm:gap-5">
        <h1 className="text-3xl ">{title}</h1>

        <div className="flex gap-2">
          <Badge>{author.split("@")[0]}</Badge>
          <Badge>{date}</Badge>
        </div>
      </div>
      <p
        className="text-muted-foreground text-sm"
        dangerouslySetInnerHTML={{ __html: content.substring(0, 190) }}
      ></p>

      {/* We will make the button in its own component,
         in order to not make the Post component a client component,
         to increase SEO */}
      <ReadMoreButton slug={slug} />
    </div>
  );
}
