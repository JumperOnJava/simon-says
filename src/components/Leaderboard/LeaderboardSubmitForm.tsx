import { useForm } from "react-hook-form";
import type { LeaderboardEntry } from "../../types/LeaderboardEntry";
import Title from "../Title";
import emojiRegex from "emoji-regex";
import Button from "../Button";
import "../../styles/Leaderboard.css";
import store from "../../store/store";
import { setEntry } from "../../store/leaderboardSlice";
import { useNavigate } from "react-router";

export function LeaderboardSubmitForm(props: { score: number; id: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeaderboardEntry>();

  const nav = useNavigate();
  const onSubmit = (data: LeaderboardEntry) => {
    store.dispatch(setEntry(data));
    nav(`/submission/${props.id}`);
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="submit-entry">
        <Title size={4}>Submit entry</Title>

        <form onSubmit={handleSubmit(onSubmit)} className="submit-form">
          <input
            className="input username-input"
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
              maxLength: {
                value: 16,
                message: "Must be 16 characters or fewer",
              },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: "Only letters, numbers, and underscores allowed",
              },
            })}
          />
          {errors.username && (
            <span className="error">{errors.username.message}</span>
          )}

          <div className="emoji-color-row">
            <input
              className="input emoji-input"
              type="text"
              placeholder="😆"
              {...register("emoji", {
                validate: (value) => {
                  const matches = [...value!.matchAll(emojiRegex())];
                  return value === "" ||
                    (matches.length <= 1 && matches[0][0] === value)
                    ? true
                    : "Must be only one emoji";
                },
              })}
            />

            <input
              className="input color-input"
              type="text"
              placeholder="FFFFFF"
              {...register("borderColor", {
                required: "Border color required",
                pattern: {
                  value: /^[0-9A-Fa-f]{6}$/,
                  message: "Not a hex color",
                },
                onChange: (e) => {
                  const val = e.target.value.startsWith("#")
                    ? e.target.value
                    : `#${e.target.value}`;
                  e.target.style.borderColor = val;
                },
              })}
            />
            <input
              {...register("score", { value: props.score })}
              type="hidden"
            />
            <input
              {...register("date", { value: new Date().toISOString() })}
              type="hidden"
            />
            <input {...register("id", { value: props.id })} type="hidden" />
          </div>
          {errors.emoji && (
            <span className="error">{errors.emoji.message}</span>
          )}
          {errors.borderColor && (
            <span className="error">{errors.borderColor.message}</span>
          )}

          <Title size={1} className="score-label">
            Score: {props.score}
          </Title>

          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}
