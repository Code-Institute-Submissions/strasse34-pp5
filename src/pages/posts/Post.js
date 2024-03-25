import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import MoreDropdown from "../../components/MoreDropdown";
import RatingsAverageStar from "../../components/RatingsAverageStar";
import { axiosRes } from "../../api/axiosDefaults";

const Post = (props) => {
  // view just post details in PostPage
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    brand,
    model,
    production,
    other_details,
    my_experience,
    image,
    updated_at,
    postPage,
    ratings_average,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {}
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
    } catch (err) {}
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
    } catch (err) {}
  };

  return (
    <Card className={styles.Post}>
      <Card.Body className={styles.CardBodyAvatar}>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`} aria-label="View profile">
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`} aria-label="image">
        <Card.Img src={image} alt={brand} loading="lazy" />
      </Link>
      <Card.Body className={styles.CardBody}>
        <Row className={styles.PostBar}>
          <Col xs={12} md={3}>
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
            <Link to={`/posts/${id}`} aria-label="comments count">
              <i className="far fa-comments" />
            </Link>
            {comments_count}
          </Col>
          <Col xs={12} md={6} className="text-center">
            <RatingsAverageStar value={ratings_average} />
          </Col>
          <Col xs={12} md={3} className={styles.RatingText}>
            {ratings_average} / {comments_count} <span>Ratings</span>
          </Col>
        </Row>

        <div className={styles.PostContnet}>
          {(brand || model || other_details || production) && (
            <Card.Title className="text-center">
              {brand} {model} {other_details} {production}
            </Card.Title>
          )}
          {my_experience && <Card.Text>{my_experience}</Card.Text>}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
