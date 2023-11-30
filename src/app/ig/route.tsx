import { ImageResponse } from "next/og";

type Event = {
    id: number,
    created_at: string,
    event_name: string,
    description: string,
    event_datetime: string,
    door_time: string,
    price: number,
    url: string,
    image_url: string,
    source_id: string,
    googleCalendarEventId: string,
    venue: number;
    stage: string,
};

export async function POST(req: Request) {
    const { events } = await req.json() as { events: Event[] };
    console.log({ events });
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    color: "#fff",

                }}
            >
                <h1>RVA Music Calendar</h1>
                {events.map((event, index) => (
                    <div key={index}>
                        <h2>{event.event_name}</h2>
                        <h3>{event.stage}</h3>
                        <h4>{event.event_datetime}</h4>
                        <h5>{event.description}</h5>
                        <h6>{event.price}</h6>
                    </div>
                ))}
            </div>
        ),
        {
            width: 1080,
            height: 1080,
        }
    );
}