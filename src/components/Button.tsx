interface ButtonProps {
    click: ()=>void,
    children: React.ReactNode
}

export default function Button(props: ButtonProps){
    return <button className="rounded-sm bg-teal-700 hover:bg-teal-800 active:bg-teal-900 m-1 px-2 text-white font-sans" onClick={props.click}>{props.children}</button>
}