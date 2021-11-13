import dbConnection from "../../utils/dbConnect";
import Comment from "../../models/Comment";

dbConnection();

export default async function sendComments(req, res) {
  const { name, email, comment, slug } = req.body;
  const method = req.method;
  const commentObj = {
    comment: [
      {
        name: name,
        content: comment,
      },
    ],
    email,
    name,
  };
  if (method !== "POST") {
    res.status(400).json({
      status: "unsuccessful",
      message: "Wrong request type",
    });
  } else {
    const comment = await Comment.findOne({
      slug: slug,
    });
    if (!comment) {
      const comment = await Comment.create(req.body);
      if (comment) {
        const commentUpdate = await Comment.updateOne(
          { _id: comment._id },
          { $push: { comments: commentObj } }
        );
        res.status(200).json({
          status: "success",
          message: "Comment succesfully submitted. Thank you for being the first to comment",
        });
      }
    } else {
      const commentUpdate = await Comment.updateOne(
        { _id: comment._id },
        { $push: { comments: commentObj } }
      );

      res.status(200).json({
          status: 'success',
          message: 'Comment submitted successfully'
      })

//     const newComment ={
//         name: req.body.name,
//         content: req.body.comment
//     }

//     const commentUpdate = await Comment.updateOne({_id: comment._id, "comments._id": '6190041f00576deeb781765f'}, {$push :{"comments.$.comment": newComment}})
//     // const commentUpdate = await Comment.updateOne({_id: comment._id, "comments._id": '6190041f00576deeb781765f'}, {$push :{"comments.$.comment": {"name": "Testnow", "content": "Testagain"}}})
//    console.log(commentUpdate)
}
  }
}
