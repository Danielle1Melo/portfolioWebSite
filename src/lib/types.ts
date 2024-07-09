import type { StaticImageData } from "next/image"

export type TechDetails = {
    logo: string | StaticImageData;
    // darkModeLogo?: string | StaticImageData;
    label: string;
}