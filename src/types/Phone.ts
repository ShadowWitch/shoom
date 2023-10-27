export interface Phone {
    id: string;
    name: string;
    brand: string;
    features: Feature;
    regular_price: number;
    offer_price: number;
    picture: string;
}

export interface Feature {
    model: string;
    cpu: string;
    ram: string;
    camera: Camera[] | string;
    storage: Storage[] | Storage | string;
    display: string;
    connection: string;
    battery: string;
    ports: string[];
}

export interface Storage {
    capacity: string;
}

export interface Camera {
    len: string;
}
