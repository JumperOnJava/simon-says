import Button from "../components/Button"

export default function Home(){
    return <div className="justify-center align-middle flex flex-col w-64 gap-8">    
        <h1 className="text-4xl font-bold text-center">Simon Says</h1>
        <img src="/simon.png" className="invert"></img>
        <Button click={()=>{}}><span className="text-2xl block mb-1">Play game</span></Button>
    </div>
}