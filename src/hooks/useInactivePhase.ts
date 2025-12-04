import { usePhaseState } from "./usePhaseState";

export function useInactivePhase(): () => void {
  const [phase, setPhase] = usePhaseState();

  if (phase == "inactive") {
    return () => {
      console.log("changing phase from inactive to display")
      return setPhase("display");
    };
  } else {
    return () => {};
  }
}
