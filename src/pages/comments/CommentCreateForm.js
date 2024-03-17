import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import StarRating from "../../components/StarRating"; // Assuming you have defined StarRating component

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id, currentUser } =
    props;
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!content.trim()) {
        throw new Error("Comment field cannot be empty.");
      }

      // Send comment data
      const commentData = {
        content,
        post,
      };
      await axiosRes.post("/comments/", commentData);

      // If rating is not 0, send rating data
      if (rating !== 0) {
        const ratingData = {
          post,
          stars: rating,
        };
        await axiosRes.post("/ratings/", ratingData);
      }

      // Update state and reset form
      setComments((prevComments) => ({
        ...prevComments,
        results: [
          {
            content,
            owner: currentUser,
            created_at: new Date().toISOString(),
          },
          ...prevComments.results,
        ],
      }));
      setPost((prevPost) => ({
        ...prevPost,
        comments_count: prevPost.comments_count + 1,
      }));
      setContent("");
      setRating(0);
      setError(null);
    } catch (err) {
      if (err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setError(null); // Reset error when content or rating changes
  }, [content, rating]);

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
        {error && <p className="text-danger">{error}</p>}
      </Form.Group>

      {!currentUser || currentUser.username !== post.owner.username ? (
        <StarRating value={rating} onChange={setRating} />
      ) : null}

      <Button
        className="btn d-block ml-auto"
        disabled={!content.trim()}
        type="submit"
      >
        Post
      </Button>
    </Form>
  );
}

export default CommentCreateForm;
