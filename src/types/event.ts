
export type RVAEvent = {
    event_name: string,
    description: string,
    event_datetime: string,
    door_time: string,
    price: number,
    url: string,
    image_url: string,
    venue_name: string;
    name: string;
    street_address: string,
    artists: { artistName: string }[],
};