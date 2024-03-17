import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    model,
    brand,
    other_details,
    my_experience,
    image,
    updated_at,
    ratings_average,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  // Function to generate star icons based on the rating average
  const generateStars = () => {
    const stars = [];
    // If ratings_average is null or not defined, return empty stars
    if (!ratings_average) {
      for (let i = 0; i < 5; i++) {
        stars.push(
          <i key={i} className="far fa-star" style={{ color: "gray" }}></i>
        );
      }
    } else {
      // Calculate the number of filled stars based on ratings_average
      const filledStars = Math.round(parseFloat(ratings_average));
      for (let i = 0; i < 5; i++) {
        if (i < filledStars) {
          stars.push(
            <i key={i} className="fas fa-star" style={{ color: "gold" }}></i>
          );
        } else {
          stars.push(
            <i key={i} className="far fa-star" style={{ color: "gray" }}></i>
          );
        }
      }
    }
    return stars;
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <div style={{ position: "relative" }}>
          {/* Image container */}
          <Card.Img src={image} alt={brand} />
          {/* Stars container */}
          <div className={styles.StarContainer}>{generateStars()}</div>
        </div>
      </Link>
      <Card.Body>
        {(brand || model || other_details) && (
          <Card.Title className="text-center">
            {brand} {model} {other_details}
          </Card.Title>
        )}
        {my_experience && <Card.Text>{my_experience}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
