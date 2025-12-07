import type { LeaderboardEntry } from "../types/LeaderboardEntry";
import { emojis } from "./emoji";
import { SeedRandom } from "./random";

export function firstGenerateLeaderboard() {
  const storage = localStorage.getItem("leaderboard");
  if (storage) {
    return;
  }

  const ids = [...Array(10)].map(() => crypto.randomUUID());

  const database = {} as any;

  for (const id of ids) {
    database[id] = entryFromId(id);
  }

  localStorage.setItem("leaderboard", JSON.stringify(database));
}

function entryFromId(id: string = ""): LeaderboardEntry {
  const random = new SeedRandom(id);
  const entry: Partial<LeaderboardEntry> = {};

  entry.username = randomName(random);
  entry.id = id;
  entry.score = Math.floor(random.rand() * 50);
  entry.borderColor = [...Array(6)]
    .map(() => Math.floor(random.rand() * 16).toString(16))
    .join("");
  entry.date = new Date(
    Date.now() - 1000 * 3600 * 24 * 30 * random.rand()
  ).toISOString();
  entry.emoji = emojis[Math.floor(random.rand() * emojis.length)];

  return entry as LeaderboardEntry;
}

function randomName(r: SeedRandom): string {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const rand = (n: number) => Math.floor(r.rand() * n);
  let name = "";

  if (r.rand() < 0.5) {
    name += vowels[rand(vowels.length)];
  }
  const blocks = 1 + rand(3);
  for (let i = 0; i < blocks; i++) {
    name += consonants[rand(consonants.length)];
    name += vowels[rand(vowels.length)];
    if (r.rand() < 0.5) {
      name += consonants[rand(consonants.length)];
    }
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}
