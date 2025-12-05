import emojiRegex from "emoji-regex";
import { number, object, string, type InferType } from "yup";

export const leaderboardSchema = object({
username: string().matches(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed")
.max(16, "Must be 16 characters or fewer")
    .required(),

    
  score: number().integer().positive().required(),
  //я використовую рядок для дати, так як зі збереженням дат в js виникає купа проблем
  date: string().default(() => new Date().toISOString()),
  id: string().default(() => crypto.randomUUID()),

    // я не знав що в форму додати тож почав додавати рандомні приколи
  emoji: string().test("is-one-emoji", "Must be exactly one emoji", (value) => {
      if (!value) return false;
      const matches = [...value.matchAll(emojiRegex())];
      return matches.length === 1 && matches[0][0] === value;
    }),

  borderColor: string().matches(/^#?[0-9A-Fa-f]{6}$/, 'Not a hex color').default("#FFFFFF"),

});

export type LeaderboardEntry = InferType<typeof leaderboardSchema>;
