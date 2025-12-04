interface Score {
  username: string;
  score: number;
  id: number;
}

// LLM generated code as placeholder leaderboard values

function generateName(): string {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const vowels = "aeiou";

  function syllable(): string {
    const c1 = consonants[Math.floor(Math.random() * consonants.length)];
    const v = vowels[Math.floor(Math.random() * vowels.length)];
    const addC2 = Math.random() < 0.5;
    const c2 = addC2
      ? consonants[Math.floor(Math.random() * consonants.length)]
      : "";
    return c1 + v + c2;
  }

  const name = syllable() + syllable();
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const leaderboard: Score[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  username: generateName(),
  score: Math.floor(Math.random() * 10000),
})).sort((a, b) => b.score - a.score);

export function useLeaderboard(): Score[] {
  return leaderboard;
}
