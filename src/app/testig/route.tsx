
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
            event_name: 'whoa whoa whoa',
            description: 'the description',
            event_datetime: (new Date()).toISOString(),
            door_time: (new Date()).toISOString(),
            price: 10000,
            url: 'https://rvamusiccalendar.com',
            image_url: 'https://rvamusiccalendar.com',
            venue_name: 'The Camel',
            name: 'The Camel',
            street_address: '123 the street',
            artists: [
                {
                    artistName: 'artist name',
                },
                {
                    artistName: 'artist name',
                },
                {
                    artistName: 'artist name',
                },
            ],
        },
        {
            event_name: 'whoa whoa whoa',
            description: 'the description',
            event_datetime: (new Date()).toISOString(),
            door_time: (new Date()).toISOString(),
            price: 10000,
            url: 'https://rvamusiccalendar.com',
            image_url: 'https://rvamusiccalendar.com',
            venue_name: 'The Camel',
            name: 'The Camel',
            street_address: '123 the street',
            artists: [
                { artistName: 'Hip Hop Henry' },
                { artistName: 'Billy Crystal Fingers' }
            ],
        },
        {
            event_name: 'whoa whoa whoa',
            description: 'the description',
            event_datetime: (new Date()).toISOString(),
            door_time: (new Date()).toISOString(),
            price: 10000,
            url: 'https://rvamusiccalendar.com',
            image_url: 'https://rvamusiccalendar.com',
            venue_name: 'The Camel',
            name: 'The Camel',
            street_address: '123 the street',
            artists: [
                { artistName: 'Brookhouse' },
                { artistName: 'Dawning' },
                { artistName: 'Brian Caperton' }
            ],
        },
    ];

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
                {
                    name: `${font}Black`,
                    data: fontDataBlack,
                    weight: 900,
                },
            ],
        }
    );
}