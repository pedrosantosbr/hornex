import { StaticImageData } from "next/image";

export type Game = {
    id: number;
    name: string;
    slug: string;
    thumbnail: StaticImageData;
}