import React, { useState, useEffect, useRef } from 'react';
import styles from './CommentForm.module.css';
import { submitComment } from '../ApiRequests/getSermonPageBlogs';


const CommentForm = ({slug, setWatcher, nameField, emailField}) => {
    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setSuccessMessage] = useState(false)
    const [loading, setLoading] = useState("Post Comment")
    // const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef()

    const [feedback, setFeedback] = useState()

    const onInputChange = () => {

    }

    useEffect(() => {
     nameEl.current.value = window.localStorage.getItem('name');
     emailEl.current.value = window.localStorage.getItem('email');
    }, [])

    const handleCommentSubmission = () => {
      setError(false);
      setLoading(loading = "Posting Comment. Please Wait");

      const {value: comment} = commentEl.current
      const {value: name} = nameEl.current
      const {value: email} = emailEl.current
      const {checked: storeData} = storeDataEl.current

      if(!comment || !name || !email){
        setError(true)
        return;
      }

      const commentObj = {
        name, email, comment, slug
      }

      if(storeData){
        window.localStorage.setItem("name", name);
        window.localStorage.setItem("email", email);
      } else{
        window.localStorage.removeItem("name", name);
        window.localStorage.removeItem("email", email);
      }

      submitComment(commentObj).then((res) => {
        setLoading("Posting Comment. Please Wait");
        if(res.status === "success"){
          setWatcher(prevState => prevState + 1)
          setFeedback(res.message)
          setSuccessMessage(true);
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

    return (
        <section className={styles.container}>
            <h3 className={styles.headingComment}>Leave a Reply</h3>
      <div className={styles.textareaDiv}>

        <textarea ref={commentEl} 
        // value={formData.comment} 
        // onChange={onInputChange} 
        className={styles.textarea} 
        name="comment" 
        placeholder="Comment" />

      </div>
      <div className={styles.inputDiv}>
        <input type="text"
         ref={nameEl} 
        //  value={formData.name}
        // onChange={onInputChange} 
        className={styles.username} 
        placeholder="Name" 
        name="name" 
        />
        <input type="email"
        ref={emailEl}
        //  value={formData.email}
        //  onChange={onInputChange} 
         className={styles.email} 
         placeholder="Email" 
         name="email" 
         />
      </div>
      <div className={styles.inputDiv2}>
        <div>
          <input 
          // checked={formData.storeData} 
          // onChange={onInputChange} 
          ref={storeDataEl}
          type="checkbox" 
          id="storeData" 
          name="storeData" 
          value="true" 
          />
          
          <label className={styles.storeDataLabel} htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className={styles.errorArea}>All fields are mandatory</p>}
      <div className={styles.btnArea}>
        <button 
        type="button"
        onClick={handleCommentSubmission} 
        className={styles.postComment}
        >
          {loading}
          </button>
        {showSuccessMessage && <span className={styles.showSuccessMsg}>{feedback}</span>}
      </div>
    </section>
    )
}

export default CommentForm
