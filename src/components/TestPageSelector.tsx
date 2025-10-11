import Button from "./Button";

interface TestPageSelectorProps {
    pageSelectCallback: React.Dispatch<React.SetStateAction<"home" | "game" | "result">>
}

export default function TestPageSelector(props: TestPageSelectorProps){
    return <div>
              <Button click={() => props.pageSelectCallback("home")}>Start</Button>
              <Button click={() => props.pageSelectCallback("game")}>Game</Button>
              <Button click={() => props.pageSelectCallback("result")}>Result</Button>
            </div>
}