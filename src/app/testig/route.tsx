
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
            event_datetime: '2023-11-30T01:00:00+00:00',
            door_time: '19:00:00+00',
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
            event_datetime: '2023-11-30T01:00:00+00:00',
            door_time: '19:00:00+00',
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
            event_datetime: '2023-11-30T01:00:00+00:00',
            door_time: '19:00:00+00',
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
        {
            event_name: 'Brookhouse, Dawning, Brian Caperton',
            description: 'VENUE INFO: 1. All shows are standing room only unless otherwise notated2. No Smoking/Vaping permitted anywhere inside venue3. Bags/purses will be checked at the door4. Must have ID for entry 5. All tickets are picked up via will call starting at the time of doors6. Appropriate clothing required at all times (tops and bottoms covered)  ',
            event_datetime: '2023-11-30T01:00:00+00:00',
            door_time: '19:00:00+00',
            price: 10,
            url: 'https://www.etix.com/ticket/p/39175265/brookhousedawningbrian-caperton-richmond-the-camel?partner_id=240',
            image_url: 'https://thecamel.org/wp-content/uploads/2023/10/Brookhouse_220421698768591.jpeg',
            name: 'The Camel',
            venue_name: 'The Camel',
            street_address: '1621 W. BROAD STREET',
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