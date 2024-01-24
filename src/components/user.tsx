import { UserProps } from "../types/user"

import { MdLocationPin } from "react-icons/md"
import { Link } from "react-router-dom"

export default function User({
    avatar_url,
    login,
    location,
    followers,
    following,
}: UserProps) {
    return (
        <div className="bg-cor-2 p-[2rem] rounded-[1rem] flex flex-col items-center justify-center gap-[1.2rem]">
            <img className="w-[140px] h-[140px] border  border-cor-borda rounded-[50%]" src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
                <p className="flex items-center gap-[0.4rem]">
                    <MdLocationPin className="fill-[#4ed8c7] size-[1.5rem]" />
                    <span className="text-[#9da5d1] font-bold">{location}</span>
                </p>
            )}
            <div className="flex">
                <div className="px-[1rem] flex flex-col gap-[0.4rem] border-r-[1px] border-[#9da5d1]">
                    <p>seguidores:</p>
                    <p className="bg-[#4ed8c7] py-[0.2rem] px-[0.4rem] rounde-[3px] text-center">{followers}</p>
                </div>
                <div className="px-[1rem] flex flex-col gap-[0.4rem]">
                    <p>seguindo:</p>
                    <p className="bg-[#4ed8c7] py-[0.2rem] px-[0.4rem] rounde-[3px] text-center">{following}</p>
                </div>
            </div>
            <Link className="text-center bg-[#644aff] p-[1rem] rounded-[5px] opacity-[0.8] hover:opacity-[1] transition-opacity duration-300
            " to={`/repos/${login}`}>Ver melhores projetos</Link>
        </div>
    )
}