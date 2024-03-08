import imageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";
export const client = createClient({
    projectId: "lysgbnfy",
    dataset: "production",
    apiVersion: "2024-02-11",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source)
}