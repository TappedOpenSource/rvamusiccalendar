import { RVAEvent } from "@/types/event";

export default function Poster({ events }: {
    events: RVAEvent[]
}) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                paddingTop: "2rem",
                paddingLeft: "2rem",
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                color: "#fff",

            }}
        >
            <div style={{ display: 'flex', width: 1442.26, height: 1529.52, left: -276, top: -176.57, position: 'absolute' }}>
                <div style={{ width: 1174.44, height: 1430.96, left: 267.82, top: 98.56, position: 'absolute', background: '#0080DD', boxShadow: '200px 200px 200px ', filter: 'blur(200px)' }}></div>
                <div style={{ width: 746.32, height: 1205.57, left: 0, top: 0, position: 'absolute', background: '#6300C6', boxShadow: '300px 300px 300px ', filter: 'blur(300px)' }}></div>
                <div style={{ width: 547.09, height: 788.40, left: 875.06, top: 132, position: 'absolute', background: '#003EB6', boxShadow: '200px 200px 200px ', filter: 'blur(200px)' }}></div>
                <div style={{ width: 758.43, height: 554.81, left: 651.21, top: 721.69, position: 'absolute', background: '#6300C6', boxShadow: '250px 250px 250px ', filter: 'blur(250px)' }}></div>
            </div>
            <h1
                style={{
                    fontSize: "8rem",
                    fontWeight: "bold",
                    fontFamily: "RubikBold",
                    wordBreak: "break-word",
                }}
            >RVA Music Calendar</h1>
            {events.map((event, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <p>{index}</p>
                    <p>{event.event_name}</p>
                    <p>{event.stage}</p>
                    <p>{event.event_datetime}</p>
                    <p>{event.description}</p>
                    <p>{event.price}</p>
                </div>
            ))}
        </div>
    );
}
