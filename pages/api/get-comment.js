import dbConnection from "../../utils/dbConnect";
import Comment from "../../models/Comment";

dbConnection();

export default async function getComments(req, res) {
  const method = req.method;
  const {slug} = req.query;
 
  if (method !== "GET") {
    res.status(400).json({
      status: "unsuccessful",
      message: "Wrong request type",
    });
  } else {
    const comment = await Comment.findOne({
      slug: slug,
    });
    if (!comment) {
        return;
    } else {
      console.log("fetched comments is: ",comment)
      res.status(200).json({
          status: 'success',
          data: comment
      })
}
  }
}
