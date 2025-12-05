import { usePhaseState } from "../usePhaseState";

export function useInactivePhase(): () => void {
  const [phase, setPhase] = usePhaseState();

  if (phase == "inactive") {
    return () => {
      setPhase("display");
    };
  } else {
    return () => {};
  }
}
