interface Product {
    _id: string;
    title:string;
    price:number;
    description:string;
    discountPercentage:number;
    imageUrl:string;
    productImage:{
        asset:{
            _ref:string;
        };
    };
    tags:string[];
    slug:{
        _type:"slug"
        current:string;
    };
}

