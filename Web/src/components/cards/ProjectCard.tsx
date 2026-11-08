import Image from "next/image";

type ProjectCardProps = {
  caption: string;
  image: string;
};

export default function ProjectCard({ caption, image }: ProjectCardProps) {
  return (
    <li>
      <figure>
        <Image src={image} alt="" width={30} height={30} />
        <figcaption>{caption}</figcaption>
      </figure>
    </li>
  );
}
