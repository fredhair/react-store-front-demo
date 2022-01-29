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

//Reducer types
export enum CartAction {
    ADD = "ADD",
    REMOVE = "REMOVE",
    REMOVE_ALL = "REMOVE_ALL",
}

export type CartActionState = {
    type: CartAction;
    payload: ICartListEntry
}

export const cartReducer = (state: CartList, action: CartActionState) => {
    switch (action.type) {
        case CartAction.ADD:
            return state.map(item => item.id === action.payload.id ? { id: item.id, count: item.count + action.payload.count } : item);
        case CartAction.REMOVE:
            return state.reduce((prevItems: CartList, item: ICartListEntry) => {
                if (item.id === action.payload.id) {
                    item.count -= action.payload.count;
                    return item.count > 0 ? [...prevItems, item] : prevItems;
                } else {
                    return [...prevItems, item];
                }
            }, []);
        case CartAction.REMOVE_ALL:
            return state.filter(item => item.id !== action.payload.id);
        default:
            //throw new Error();
            return state;
    
    }
}
