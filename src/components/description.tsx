import { Project } from "@/types";
import React from "react";

type Props = {
  description: Project["description"];
  customBullet: Project["customBullet"];
};

const Description = ({ description, customBullet }: Props) => {
  return typeof description === "string" ? (
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
  );
};

export default Description;
