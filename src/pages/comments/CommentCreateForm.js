import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import StarRating from "../../components/StarRating";
import { axiosRes } from "../../api/axiosDefaults";
import { FormGroup } from "react-bootstrap";
// import { fetchUpdatedRatingAverage } from "../../utils/utils";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const [stars, setStars] = useState(0);
  const [errors, setErrors] = useState({});
  const [nonFieldErrors, setNonFieldErrors] = useState([]);

  const handleStarChange = (star) => {
    setStars(star);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
        stars,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
      setStars(0);
      console.log({ content, post, stars });
      // await fetchUpdatedRatingAverage(post.id, setPost);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        if (err.response?.data && err.response.data.non_field_errors) {
          setNonFieldErrors(err.response.data.non_field_errors);
        } else {
          setErrors(err.response?.data || {});
        }
      }
    }
  };

  console.log(errors);

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="My experience..."            
            as="textarea"
            value={content}
            onChange={handleContentChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <FormGroup className={styles.StarRatingCont}>
        <StarRating
          value={stars}          
          handleChange={handleStarChange}
        />
        <p>Rate this car befor posting!</p>
      </FormGroup>
      {nonFieldErrors.length > 0 && (
        <Alert variant="danger">
          {nonFieldErrors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </Alert>
      )}

      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
