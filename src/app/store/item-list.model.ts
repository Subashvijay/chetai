export interface Item {
    id: number
    name: string,
    imgUrl: string,
    quantityType: 'Kg' | 'Ltr' | 'mg' | 'qty'
}

export interface AppState {
    items: Item[],
    count: number,
    myName: string
}