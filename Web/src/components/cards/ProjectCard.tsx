import Image from "next/image";

type ProjectCardProps = {
  caption: string;
  image: string;
};

export default function ProjectCard({ caption, image }: ProjectCardProps) {
  return (
    <li className="project-card">
      <figure className="project-card-figure">
        <Image
          className="project-card-image"
          src={image}
          alt=""
          fill
          sizes="568px"
        />
        <figcaption className="project-card-caption">{caption}</figcaption>
      </figure>
    </li>
  );
}
