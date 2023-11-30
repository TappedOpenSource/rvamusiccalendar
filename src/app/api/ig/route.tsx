import { ImageResponse } from "next/og";

export async function POST(req: Request) {
    return new ImageResponse(
        (
            <div>
                <p>hello world</p>
            </div>
        ),
        {
            width: 1080,
            height: 1080,
        }
    );
}