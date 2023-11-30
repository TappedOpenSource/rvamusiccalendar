import { RVAEvent } from "@/types/event";

export default function Poster({ events }: {
    events: RVAEvent[]
}) {
    return (
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
                    <div
                        key={index}
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
                        <p>{index}</p> 
                        <h2>{event.event_name}</h2>
                        <h3>{event.stage}</h3>
                        <h4>{event.event_datetime}</h4>
                        <h5>{event.description}</h5>
                        <h6>{event.price}</h6>
                    </div>
                ))}
            </div>
    );
}
