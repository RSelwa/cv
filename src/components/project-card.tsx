import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Project } from "@/types";

interface Props {
  title: string;
  description: Project["description"];
  tags: Project["techStack"];
  link?: string;
  customBullet?: Project["customBullet"];
  year?: Project["year"];
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  customBullet,
  year,
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-x-2 space-y-1">
          <CardTitle className="flex items-center gap-1.5 text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
            {year && (
              <>
                <span className="font-light">-</span>
                <Badge className="px-1 py-0 text-[10px]" variant="secondary">
                  {year}
                </Badge>
              </>
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {typeof description === "string" ? (
              <p>{description}</p>
            ) : (
              description?.map((desc) => {
                return (
                  <p key={desc} className="mb-1">
                    <span className="mr-2">{customBullet || "•"}</span>
                    {desc}
                  </p>
                );
              })
            )}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
