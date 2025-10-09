interface ButtonProps {
    click: ()=>void,
    children: React.ReactNode
}

export default function button(props: ButtonProps){
    return <button className="border border-black bg-gray-500 m-1 px-2 text-white" onClick={props.click}>{props.children}</button>
}