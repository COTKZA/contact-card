import { type ReactNode } from "react"
import LetterGlitch from "../LetterGlitch"

export interface Props {
    children: ReactNode
}

const Container = ({ children }: Props) => {
    return (
        <main className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-b from-purple-700 to-purple-900 overflow-hidden">
            <div className="absolute inset-0 z-10">
                <LetterGlitch
                    glitchColors={["#1c2d23", "#3f9d6f", "#2f78a3"]}
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={true}
                    smooth={true}
                />
            </div>
            <div className="z-20">
                {children}
            </div>
        </main>
    )
}

export default Container