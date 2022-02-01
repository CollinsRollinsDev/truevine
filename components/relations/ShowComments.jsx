import React, { useState, useEffect, useRef } from "react";
import styles from "./ShowComments.module.css";
import Image from "next/image";
import { replyComment } from "../ApiRequests/getSermonPageBlogs";

const ShowComments = ({ slug, watcher, setWatcher }) => {
  const [reply, setReply] = useState(false);
  const [replyBtnText, setReplyBtnText] = useState("Reply");
  const [comments, setComments] = useState([]);
  const [presentClick, setPresentClick] = useState();
  const [loading, setLoading] = useState("Post Comment")
  const [error, setError] = useState(false)
  const [feedback, setFeedback] = useState()
  const [showSuccessMessage, setSuccessMessage] = useState(false)


  const commentEl = useRef();

  const getComments = async () => {
    const res = await fetch(`/api/get-comment?slug=${slug}`);
    const data = await res.json();
    setComments(data.data);
    console.log("runned now with slug:", slug);
  };

  console.log(comments);

  useEffect(() => {
    getComments();
    console.log(watcher);
    console.log("runned now with slug:", slug);
  }, [watcher]);

  const handleReplyClick = async (comment) => {
    setPresentClick(comment);
    reply ? setReply(false) : setReply(true);
    reply ? setReplyBtnText("Reply") : setReplyBtnText("Cancel");
  };

  console.log(presentClick, "present click")

  const handleCommentSubmission = () => {
      const commentId = presentClick._id;
    setError(false);
    setLoading(loading = "Posting Comment. Please Wait");

    const {value: comment} = commentEl.current;
    const name = "Admin Testing"
    const email = "Admin Email Testing"

    if(!comment || !name || !email){
      alert("Please add comment first")
      setError(true)
      setReplyBtnText("Reply")
      return;
    }

    const commentObj = {
      name, comment, slug, commentId
    }

    replyComment(commentObj).then((res) => {
      setLoading("Posting Comment. Please Wait");
      if(res.status === "success"){
        setWatcher(prevState => prevState + 1)
        setFeedback(res.message)
        setSuccessMessage(true);

        setReply(false);
        
        setLoading("Comment Successfully Posted!")
        setTimeout(() => {
          setSuccessMessage(false)
          setLoading("Post Comment");
        }, 3000);
      } else{
        setFeedback("Something went wrong. Try again later.")
        setSuccessMessage(true);
        setLoading("Oops! Error posting comment.")
        setTimeout(() => {
          setSuccessMessage(false)
          setLoading("Post Comment");
        }, 3000);
      }
     
    })
    setLoading("Post comment");

  }

  const dialogueBox = (
    <section>
      <div className={styles.textareaDiv}>
        <textarea
          ref={commentEl}
          // value={formData.comment}
          // onChange={onInputChange}
          className={styles.textarea}
          name="comment"
          placeholder="Comment"
        >
        {/* {presentClick ? `@${presentClick.name}, ` : null} */}
        </textarea>
      </div>

      <button
        type="button"
        onClick={handleCommentSubmission}
        className={styles.postComment}
      >
        {loading}
      </button>
    </section>
  );

  const displayComments = comments.comments
    ? comments.comments.map((comment, index) => {
        const replySlide = comment.comment.map((e, index) => {
          if (e._id === comment.comment[0]._id) {
            return;
          } else {
            return (
              <section key={index} className={styles.replyBox}>
                <div className={styles.avatarSpace}>
                <Image 
                src="/sermon2.jpg"
                alt=""
                layout="fill"
                quality={50}
                />
            </div>
                <div className={styles.textSpace}>
                  {e.name} says: <span>{e.content}</span>
                  {/* <div
                  onClick={() => handleReplyClick(e)}
                  className={styles.subReply}
                >
                  {presentClick === e ? replyBtnText : "Reply"}
                </div> */}
                {presentClick === e ? (
                  reply ? (
                    dialogueBox 
                  ) : null
                ) : null}
                </div>
              </section>
            );
          }
        });
        const firstSlide = (
          <section className={styles.overall}>
            <section key={index} className={styles.personComment}>
              <div className={styles.avatarSpace}>
                <Image src="/sermon2.jpg" alt="" layout="fill" quality={50} />
              </div>
              <div className={styles.textSpace}>
                <p>
                  {comment.comment[0].name} says:{" "}
                  <span>{comment.comment[0].content}</span>
                </p>
               
              </div>
            </section>
            {replySlide}
            <div
                  onClick={() => handleReplyClick(comment)}
                  className={styles.reply}
                >
                  {presentClick === comment ? replyBtnText : "Reply"}
                </div>
                {presentClick === comment ? (
                  reply ? (
                    dialogueBox 
                  ) : null
                ) : null}
          </section>
        );
        return firstSlide;
      })
    : null;

  return (
    <section className={styles.container}>
      <section className={styles.commentArea}>{displayComments}</section>
    </section>
  );
};

export default ShowComments;
