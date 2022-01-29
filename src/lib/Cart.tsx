//The reason I personally mix type and interface is because a type is just an alias,
//suitable for function signatures, aliasing simple types e.g. Id = int64 etc.
//I tend to use types to make code easier to read & shorten declarations.
//An interface is a contract, it describes the required members
//i.e. data and functions that allow a type to fulfill that contract.

export type AddToCartCallback = (id: number, count: number) => void;
export type RemoveFromCartCallback = (id: number, count: number) => void;

export interface ICartListEntry {
    id: number;
    count: number;
}

export type CartList = Array<ICartListEntry>