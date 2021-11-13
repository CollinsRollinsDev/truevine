import React, { useState, useEffect, useRef } from 'react';
import styles from './CommentForm.module.css';


const CommentForm = () => {
    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setSuccessMessage] = useState(false)
    const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });

    useEffect(() => {
        setLocalStorage(window.localStorage);
        const initalFormData = {
          name: window.localStorage.getItem('name'),
          email: window.localStorage.getItem('email'),
          storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
        };
        setFormData(initalFormData);
      }, []);

      
  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  };


    return (
        <section className={styles.container}>
            
            <h3 className={styles.headingComment}>Leave a Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={formData.comment} onChange={onInputChange} className={styles.textarea} name="comment" placeholder="Comment" />
      </div>
      <div className={styles.inputDiv}>
        <input type="text" value={formData.name} onChange={onInputChange} className={styles.username} placeholder="Name" name="name" />
        <input type="email" value={formData.email} onChange={onInputChange} className={styles.email} placeholder="Email" name="email" />
      </div>
      <div className={styles.inputDiv2}>
        <div>
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className={styles.storeDataLabel} htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className={styles.errorArea}>All fields are mandatory</p>}
      <div className={styles.btnArea}>
        <button type="button" onClick={handlePostSubmission} className={styles.postComment}>Post Comment</button>
        {showSuccessMessage && <span className={styles.showSuccessMsg}>Comment submitted for review</span>}
      </div>
    </section>
    )
}

export default CommentForm
