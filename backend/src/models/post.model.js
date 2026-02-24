import mongoose, { Schema } from "mongoose";

const postSchema = new Schema (
    {

    },
    {
        timestamps: true
    }
)

export const Post = mongoose.model("Post", postSchema)