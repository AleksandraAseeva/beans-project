import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addReviews } from "../../Redux/review/reviewSlice";
import { FaStar } from "react-icons/fa";
import type { RootState } from "../../Redux/store";
import { ReviewInterface } from "../../Redux/review/reviewSlice";
import style from "./style.module.css";

export const AddReview = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const reviews = useSelector((state: RootState) => state.review.reviews);

  const getCurrentUserId = () => {
    let currentUserId = localStorage.getItem("currentUserId");
    if (!currentUserId) {
      currentUserId = uuidv4();
      localStorage.setItem("currentUserId", currentUserId);
    }
    return currentUserId;
  };

  const currentUserId = getCurrentUserId();

  const userReviewExists = reviews.some(
    (review: ReviewInterface) => review.user.userId === currentUserId
  );

  const handleAddTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length < 5 || name.trim().length < 4) {
      setError("Minimum allowed length is 4");
    } else if (text.trim().length > 100 || name.trim().length > 50) {
      setError("Maximum allowed task length is 100");
    } else if (rating === null) {
      setError("Please select a rating!");
    } else if (userReviewExists) {
      setError("Вы уже оставили отзыв!");
    } else {
      dispatch(
        addReviews({
          text,
          id: uuidv4(),
          user: { userId: currentUserId, userName: name },
          rating: rating,
        })
      );
      setText("");
      setName("");
    }
  };

  const handleUpdateTodoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (e.target.value.trim().length > 5 && e.target.value.trim().length < 50) {
      setError("");
    }
  };

  return (
    <form
      onSubmit={handleAddTaskSubmit}
      className={style.form}
      style={{
        border: isHovered ? "2px solid red" : "2px solid transparent",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style.formContainer}>
        <div className={style.formControl}>
          <label className={style.label}>
            <span>Имя:</span>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id={currentUserId}
              type="text"
              className={style.input}
              placeholder="ваше имя"
            />
          </label>
          <label className={style.label}>
            <span>Отзыв:</span>
            <textarea
              onChange={handleUpdateTodoChange}
              value={text}
              className={style.textarea}
              placeholder="Добавить отзыв..."
              rows={4}
            />
          </label>
          <div className={style.ratingContainer}>
            <p>Рейтинг:</p>
            <div className={style.stars}>
              {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                      className={style.radioInput}
                    />
                    <div
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <FaStar
                        size={25}
                        // className={style.star}
                        color={
                          currentRating <= (hover || rating || 0)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                      />
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        <button className={style.submitButton}>Add Todo</button>
      </div>
      {error && <p className={style.errorText}>{error}</p>}
    </form>
  );
};