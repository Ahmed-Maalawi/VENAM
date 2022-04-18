export class Customer {

    public id: number | null;
    public name:string | null; 
    public address:string[] | null; 
    public email:string | null; 
    public wishList:object[] | null; 
    public token:string | null; 
    public Cart: object[] | null; 
    public cardId:string | null;
    public phoneNumber:string | null;
    public orders:object[] | null;

    constructor(
        // id:number,
        // name:string, 
        // address:string[], 
        // email:string, 
        // wishList:object[], 
        // token:string, 
        // Cart: object[], 
        // cardId:string,
        // phoneNumber:string,
        // orders:object[]
    )
    {
        // this.id = id;
        // this.name = name;
        // this.address = address;
        // this.email = email;
        // this.wishList = wishList;
        // this.token = token;
        // this.Cart = Cart;
        // this.cardId = cardId;
        // this.phoneNumber = phoneNumber;
        // this.orders = orders;

        this.id = null;
        this.name = null;
        this.address = null;
        this.email = null;
        this.wishList = null;
        this.token = null;
        this.Cart = null;
        this.cardId = null;
        this.phoneNumber = null;
        this.orders = null;
    }
}
