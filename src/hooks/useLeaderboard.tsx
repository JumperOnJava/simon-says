export function useLeaderboard() {
  const array = JSON.parse(localStorage.getItem("leaderboard")!) ?? {};
  return array;
}


