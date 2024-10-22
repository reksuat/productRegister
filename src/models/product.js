import { Schema, model } from "mongoose";

const productSchema = new Schema ({

productName: {
    type: String,
    required: true
},
amount: {
    type: Number,
    required: true
},
value: {
    type: Number,
    required: true
},
expirationDate: {
    type: Date,
    required: true
}
})

const Product = model("Product", productSchema);

export default Product;
