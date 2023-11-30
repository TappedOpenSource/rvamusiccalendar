import { RVAEvent } from "@/types/event";

const colorMap = {
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
};

export default function Poster({ events }: {
    events: RVAEvent[]
}) {
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                paddingTop: "2rem",
                paddingBottom: "2rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                color: "#fff",

            }}
        >
            <div style={{
                display: 'flex',
                width: 1442.26,
                height: 1529.52,
                left: -276,
                top: -176.57,
                position: 'absolute',
                filter: 'blur(7px)',
            }}>
                <div style={{ width: 1174.44, height: 1430.96, left: 267.82, top: 98.56, position: 'absolute', background: '#0080DD', boxShadow: '200px 200px 200px ', filter: 'blur(200px)' }}></div>
                <div style={{ width: 547.09, height: 788.40, left: 875.06, top: 132, position: 'absolute', background: '#003EB6', boxShadow: '200px 200px 200px ', filter: 'blur(200px)' }}></div>
                <div style={{ width: 758.43, height: 554.81, left: 651.21, top: 721.69, position: 'absolute', background: '#6300C6', boxShadow: '250px 250px 250px ', filter: 'blur(250px)' }}></div>
                {/* <div style={{ width: 746.32, height: 1205.57, left: 10, top: 10, position: 'absolute', background: '#6300C6', boxShadow: '200px 200px 200px ', filter: 'blur(200px)' }}></div> */}
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    display: "flex",
                }}
            >
                <p>{dateString}</p>
            </div>
            <h1
                style={{
                    fontSize: "8rem",
                    fontWeight: "bold",
                    fontFamily: "RubikBlack",
                    wordBreak: "break-word",
                }}
            >RVA Music Calendar</h1>
            {events.length === 0 && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <h3
                        style={{
                            fontSize: "4rem",
                            fontWeight: "bold",
                            fontFamily: "RubikBold",
                        }}
                    >{`No events today :(`}</h3>
                </div>
            )}
            {events.map((event, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        paddingBottom: "2rem",
                    }}
                >
                    <h3
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                            fontFamily: "RubikBold",
                            wordBreak: "break-word",
                            marginBottom: "0",
                            marginTop: "0",
                        }}
                    >
                        {event.event_name}
                    </h3>
                    <h3
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            fontFamily: "RubikBold",
                            wordBreak: "break-word",
                            marginBottom: "0",
                            marginTop: "0",
                            opacity: 0.6,
                            color: "#ccc",
                        }}
                    >{event.artists.map(({ artistName }) => artistName).join(', ')}</h3>
                    <p
                        style={{
                            fontSize: "1.3rem",
                            marginTop: "0",
                            marginBottom: "0",
                        }}
                    >{
                            (event.door_time.split(":").slice(0, 2).join(':'))
                        } @ {
                            event.name ?? event.venue_name
                        } {event.street_address}</p>
                </div>
            ))}
            <div
                style={{
                    position: "absolute",
                    bottom: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    fontFamily: "RubikBold",
                }}
            >
                <p>@RVAMusicCalendar</p>
                <div style={{ width: "1rem" }} />
                <p>bit.ly/rvamusiccalendar</p>
            </div>
        </div>
    );
}
