import { ReactElement } from "react"
import Navbar from "./navbar"

const Root = ({children}: {
    children: ReactElement
}) => {
  return (
    <div className="min-h-[100vh]">
        <Navbar />
        <main className="py-6">
            {children}
        </main>
        {/* footer */}
    </div>
  )
}

export default Root