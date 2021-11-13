const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    slug: {
        type: String,
        required: [true, "Please provide a first name"],
        // unique: [true, "Sorry, this slug already exist."],
      },
    comments:[
        {
            name: {
                type: String,
                required: [true, "Please provide a first name"],
            },
            email:{
                type: String,
                required: [true, "Please provide a first name"],
            },
            comment:[
             {
                name: {
                    type: String,
                    required: [true, "Please provide a first name"],
            },
            content: {
                type: String,
                    required: [true, "Please provide a first name"],
                    }
                 }
            ]
            
        },
        { timestamps: true }
    ]
},
{ timestamps: true });

module.exports = mongoose.models.Comment || mongoose.model("Comment", CommentSchema);