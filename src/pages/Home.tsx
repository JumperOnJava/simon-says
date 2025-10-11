import Button from "../components/Button"
import Title from "../components/Title"

export default function Home(){
    return <div className="justify-center align-middle flex flex-col w-64 gap-8">    
        <Title size={4} className="font-bold text-center">Simon Says</Title>
        <img src="/simon.png" className="invert"></img>
        <Button click={()=>{}}><Title size={2} className="block mb-1">Play game</Title></Button>
    </div>
}