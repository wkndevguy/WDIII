
export class Product {
    title:string
    description:string
    upc:string
    lowest_recorded_price:number
    highest_recorded_price:number
    images:Array<string>
    offers:Array<Offer>
    offer_choice:number
    key:string

    constructor(map = {
        title:"",
        description:"",
        upc:"",
        lowest_recorded_price:0,
        highest_recorded_price:0,
        images:[],
        offers:[],
        offer_choice:0,
        key:""
    }) {
        this.title = map.title;
        this.description = map.description;
        this.upc = map.upc;
        this.lowest_recorded_price = map.lowest_recorded_price;
        this.highest_recorded_price = map.highest_recorded_price;
        this.images = map.images;
        this.offers = map.offers.map(offer=>new Offer(offer));
    }
}

export class Offer {
    merchant:string
    price:number
    link:string
    updated_t:string

    constructor(map = {
        merchant:"",
        price:0,
        link:"",
        updated_t:""
    }) {
        this.merchant = map.merchant;
        this.price = map.price;
        this.link = map.link;
        this.updated_t = map.updated_t
    }
}