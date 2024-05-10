import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Badge from "@/components/Badge";

const ProjectItem = ({
  title,
  description,
  image,
  imageAlt='',
  link,
  year,
  skills = [],
}) => {
  return (
    <li className="py-5 mb-10 bg-[#3f3030] p-12 rounded-lg">
      <p className="flex flex-wrap justify-between items-center w-full">
        <a
          href={link}
          target="_blank"
          className="flex gap-2 items-baseline link-text"
        >
          <span className="text-lg font-semibold leading-6">{title}</span>
          <ArrowUpRightIcon className="h-3 w-3" />
        </a>
        {year && <span className="text-sm">{year}</span>}
      </p>
      <div className="flex flex-wrap gap-2 justify-between  mt-4">
        {image && <Image src={image} height={150} alt={imageAlt} />}
        <p className={`${image ? 'xl:w-4/6 ' : ''}text-base text-stone-400`}>{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </li>
  );
};

export default ProjectItem;
