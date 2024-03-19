export interface Data {
    id: string;
    type: string;
}
export interface Links {
    self?: string;
    related?: string;
    jsonOutput?: string;
}
export declare type Relationship = {
    data: Data;
    links: Links;
};
export declare type TerraformCloudData<Attributes> = Data & {
    attributes: Attributes;
    relationships?: Record<string, Relationship>;
    links?: Links;
};
export declare type Page = {
    number: number;
    size: number;
};
export interface Params<T, Attributes> {
    data: {
        type: T;
        attributes: Attributes;
    };
}
