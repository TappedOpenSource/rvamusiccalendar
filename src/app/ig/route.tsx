import Poster from "@/components/Poster";
import { RVAEvent } from "@/types/event";
import { ImageResponse } from "next/og";

export const runtime = 'edge';

export async function POST(req: Request) {
    const { events } = await req.json() as { events: RVAEvent[] };
    console.log({ events });

    // const font = 'Rubik';
    // const fontDataRegular = await fetch(
    //     new URL(`../../../${font}/static/${font}-Regular.ttf`, import.meta.url)
    // ).then((res) => res.arrayBuffer());

    // const fontDataItalic = await fetch(
    //     new URL(`../../../${font}/static/${font}-Italic.ttf`, import.meta.url)
    // ).then((res) => res.arrayBuffer());

    // const fontDataBold = await fetch(
    //     new URL(`../../../${font}/static/${font}-Extraold.ttf`, import.meta.url)
    // ).then((res) => res.arrayBuffer());

    // console.log({ fontDataRegular, fontDataItalic, fontDataBold });

    return new ImageResponse(
        <Poster events={events} />,
        {
            width: 1080,
            height: 1080,
            // fonts: [
            //     {
            //         name: font,
            //         data: fontDataRegular,
            //     },
            //     {
            //         name: `${font}Italic`,
            //         data: fontDataItalic,
            //     },
            //     {
            //         name: `${font}Bold`,
            //         data: fontDataBold,
            //     },
            // ],
        }
    );
}