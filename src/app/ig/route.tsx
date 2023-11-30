import { ImageResponse } from "next/og";

export async function POST(req: Request) {
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
                <p>hello world</p>
            </div>
        ),
        {
            width: 1080,
            height: 1080,
        }
    );
}