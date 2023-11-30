
import Poster from "@/components/Poster";
import { RVAEvent } from "@/types/event";
import { ImageResponse } from "next/og";

const width = 1080;
const height = 1080;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const runtime = 'edge';
export async function GET(req: Request) {
    const events: RVAEvent[] = [
        {
            id: 1,
            created_at: (new Date()).toISOString(),
            event_name: 'whoa whoa whoa',
            description: 'the description',
            event_datetime: (new Date()).toISOString(),
            door_time: (new Date()).toISOString(),
            price: 10000,
            url: 'https://rvamusiccalendar.com',
            image_url: 'https://rvamusiccalendar.com',
            source_id: '1234',
            googleCalendarEventId: '1234',
            venue: 123,
            stage: 'the stage',
        },
        {
            id: 1,
            created_at: (new Date()).toISOString(),
            event_name: 'whoa whoa whoa',
            description: 'the description',
            event_datetime: (new Date()).toISOString(),
            door_time: (new Date()).toISOString(),
            price: 10000,
            url: 'https://rvamusiccalendar.com',
            image_url: 'https://rvamusiccalendar.com',
            source_id: '1234',
            googleCalendarEventId: '1234',
            venue: 123,
            stage: 'the stage',
        },
        {
            id: 1,
            created_at: (new Date()).toISOString(),
            event_name: 'whoa whoa whoa',
            description: 'the description',
            event_datetime: (new Date()).toISOString(),
            door_time: (new Date()).toISOString(),
            price: 10000,
            url: 'https://rvamusiccalendar.com',
            image_url: 'https://rvamusiccalendar.com',
            source_id: '1234',
            googleCalendarEventId: '1234',
            venue: 123,
            stage: 'the stage',
        },
    ];

    const font = 'Rubik';
    const regularUrl = `${siteUrl}/${font}/static/${font}-Regular.ttf`;
    const italicUrl = `${siteUrl}/${font}/static/${font}-Italic.ttf`;
    const boldUrl = `${siteUrl}/${font}/static/${font}-ExtraBold.ttf`;

    const [fontDataRegular, fontDataItalic, fontDataBold] = await Promise.all([
        fetch(regularUrl).then((res) => res.arrayBuffer()),
        fetch(italicUrl).then((res) => res.arrayBuffer()),
        fetch(boldUrl).then((res) => res.arrayBuffer()),
    ]);

    return new ImageResponse(
        <Poster events={events} />,
        {
            debug: true,
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
            ],
        }
    );
}