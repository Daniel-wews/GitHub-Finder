import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <section className="bg-cor-fundo h-full">
    <div className="text-white p-[2rem] max-w-lg	mx-auto">
    <h1 className="font-inter text-center">
      GitHub Finder
    </h1>
    <Outlet/>
    </div>
    </section>
  )
}