import sleep from "../utils/sleep";
import { GameContext, type SliceColor } from "../types/GameState";
import { randomSliceColor } from "../utils/combination";

export default function createGameplay(
  context: GameContext,
  endGameCallback: () => void
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function emptyFunc(_color: SliceColor) {
    console.log("called empty function");
  }

  ////////////////////////////////

  function setInputHandler(handler: (color: SliceColor) => void) {
    context.logicRef.current.actions.inputColor = handler;
  }

  ////////////////////////////////

  async function start() {
    if (context.logicRef.current.phase !== "inactive") {
      console.log("Game is active already");
      return;
    }

    console.log("click start");

    let level = 1;
    const logic = context.logicRef.current;

    ////////////////

    async function phaseDisplay() {
      logic.phase = "display";
      setInputHandler(emptyFunc);

      console.log(`started displaying level ${level};`);
      context.setVisual((state) => ({
        ...state,
        activeSlice: null,
      }));

      await sleep(500);
      for (let i = 0; i < level; i++) {
        const color = logic.combination[i];
        console.log(`level ${level}; combination[${i}] = ${color}`);

        context.setVisual((state) => ({
          ...state,
          activeSlice: color,
        }));

        await sleep(500);

        context.setVisual((state) => ({
          ...state,
          activeSlice: null,
        }));

        await sleep(200);
      }

      console.log(`finished displaying level ${level};`);
    }

    ////////////////

    async function phaseInput(): Promise<boolean> {
      const combination = logic.combination;

      console.log(`started inputing level ${level};`);
      console.log(combination);

      for (let i = 0; i < level; i++) {
        const expectedColor = combination[i];
        console.log(`required color: ${expectedColor}`);

        const responseColor = await new Promise<SliceColor>(setInputHandler);

        if (responseColor !== expectedColor) {
          console.log(`failed ${responseColor} != ${expectedColor};`);
          setInputHandler(emptyFunc);
          return false;
        }
      }

      setInputHandler(emptyFunc);
      console.log(`finished inputing level ${level};`);
      return true;
    }

    ////////////////

    while (true) {
      await phaseDisplay();

      const success = await phaseInput();

      if (success) {
        console.log(`finished level ${level};`);
      } else {
        console.log(`failed level ${level};`);
        endGameCallback();
        break;
      }

      level++;

      context.setVisual((state) => ({
        ...state,
        currentLevel: level,
      }));

      logic.combination.push(randomSliceColor());
    }
  }

  context.logicRef.current.actions.start = start;
}
