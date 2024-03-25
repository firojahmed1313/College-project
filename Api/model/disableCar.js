import mongoose from "mongoose";

const disableCarSchema=new mongoose.Schema({
    carOwner:{
        type: String,
        require: true,
    },
    num_of_seat:{
        type: String,
        require: true,
    },
    vehicle:{
        type: String,
        require: true,
    },
    vehicleNo:{
        type: String,
        require: true,
    },
    category:{
        type: String,
        require: true,
    },
    licence_id:{
        type: String,
        require: true,
    },
    phoneNumber:{
        type: String,
        require: true,
    },
    rent:{
        type: String,
        require: true,
    },
    from:{
        type: String,
        require: true,
    },
    dest:{
        type: String,
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
})

export const DisableCar= mongoose.model.DisableCar || new mongoose.model("DisableCar",disableCarSchema);