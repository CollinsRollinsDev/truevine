import dbConnection from "../../utils/dbConnect";
import Comment from "../../models/Comment";

dbConnection();

export default async function sendComments(req, res){
    const method = req.method;
    const { name, comment, slug, commentId} = req.body;
    console.log("incoming is: ", req.body);

        const newComment = {
          name: name,
          content: comment
        }

    if (method !== "POST"){
        res.status(400).json({
            status: "unsuccessful",
            message: "Wrong request type",
          });
    } else{
        const comment = await Comment.findOne({
            slug: slug,
          });

          if (!comment) {
            res.status(200).json({
                status: "failure",
                message: "Something went wrong. It seems we can't fine the exact comment field",
              });
          } else{
            const commentUpdate = await Comment.updateOne({_id: comment._id, "comments._id": commentId}, {$push :{"comments.$.comment": newComment}})
            // const commentUpdate = await Comment.updateOne({_id: comment._id, "comments._id": '6190041f00576deeb781765f'}, {$push :{"comments.$.comment": newComment}})
                  console.log(commentUpdate)

                  if(commentUpdate){
                    res.status(200).json({
                      status: "success",
                      message: "Reply to comment successful.",
                    });
                  }
          }
    }
}