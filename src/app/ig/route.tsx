import Poster from "@/components/Poster";
import { RVAEvent } from "@/types/event";
import { ImageResponse } from "next/og";

const width = 1080;
const height = 1080;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const runtime = 'edge';


export async function POST(req: Request) {
    const { events } = await req.json() as { events: RVAEvent[] };
    console.log({ events });

    const font = 'Rubik';
    const regularUrl = `${siteUrl}/${font}/static/${font}-Regular.ttf`;
    const italicUrl = `${siteUrl}/${font}/static/${font}-Italic.ttf`;
    const boldUrl = `${siteUrl}/${font}/static/${font}-ExtraBold.ttf`;
    const blackUrl = `${siteUrl}/${font}/static/${font}-Black.ttf`;

    const [fontDataRegular, fontDataItalic, fontDataBold, fontDataBlack] = await Promise.all([
        fetch(regularUrl).then((res) => res.arrayBuffer()),
        fetch(italicUrl).then((res) => res.arrayBuffer()),
        fetch(boldUrl).then((res) => res.arrayBuffer()),
        fetch(blackUrl).then((res) => res.arrayBuffer()),
    ]);

    return new ImageResponse(
        <Poster events={events} />,
        {
            width,
            height,
            fonts: [
                {
                    name: font,
                    data: fontDataRegular,
                    style: 'normal',
                    weight: 400,
                },
                {
                    name: `${font}Italic`,
                    data: fontDataItalic,
                    style: 'italic',
                    weight: 400,
                },
                {
                    name: `${font}Bold`,
                    data: fontDataBold,
                    weight: 800,
                },
                {
                    name: `${font}Black`,
                    data: fontDataBlack,
                    weight: 900,
                },
            ],
        }
    );
}