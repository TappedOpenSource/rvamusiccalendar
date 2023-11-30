import Poster from "@/components/Poster";
import { RVAEvent } from "@/types/event";
import { ImageResponse } from "next/og";

export async function POST(req: Request) {
    const { events } = await req.json() as { events: RVAEvent[] };
    console.log({ events });
    return new ImageResponse(
        <Poster events={events} />,
        {
            width: 1080,
            height: 1080,
        }
    );
}