import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import styles from "../../styles/CommentCreateEditForm.module.css";

import EditStars from "../../components/EditStars";
import { axiosRes } from "../../api/axiosDefaults";
import FormGroup from "react-bootstrap/FormGroup";

// create edit form for comments
function CommentEditForm(props) {
  const { id, content, stars, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(content);
  const [formStars, setFormStars] = useState(stars);

  const handleStarChange = (star) => {
    setFormStars(star);
  };

  const handleContentChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
        stars: formStars,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                stars: formStars,
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {}
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleContentChange}
          rows={2}
        />
      </Form.Group>

      <FormGroup>
        <EditStars value={formStars} handleChange={handleStarChange} />
        <p>Want you rate again?</p>
      </FormGroup>

      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!formContent.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
