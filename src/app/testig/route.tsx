
import Poster from "@/components/Poster";
import { RVAEvent } from "@/types/event";
import { ImageResponse } from "next/og";

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

    return new ImageResponse(
        <Poster events={ events } />,
        {
            width: 1080,
            height: 1080,
        }
    );
}