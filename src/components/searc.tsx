type SearchProps = {
    loadUser: (userName: string) =>Promise<void>
}
import { useState, KeyboardEvent } from "react"

import { BsSearch } from "react-icons/bs"

export default function Search ({loadUser}:SearchProps){
    const [userName,setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(userName)
        }
    }

    return(
        <div className="bg-cor-2 p-[2rem] rounded-[1rem] flex flex-col justify-center items-center gap-[1rem] mb-[1.5rem]">
            <h2>Busque po um usúario:</h2>
            <p className="text-center text-cor-3">Conheça seus melhores repositórios</p>
            <div className="flex gap[0.5rem] ">
                <input className="p-[0.6rem] rounded-[3px] border-0 text-cor-4 mr-2" type="text" placeholder="digite o nome do usuario" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown} />
                <button className=" p-[0.6rem] rounded-[3px] border-0 text-cor-4 bg-cor-5 cursor-pointer" onClick={() => loadUser(userName)}><BsSearch/></button>
            </div>
        </div>
    )
}