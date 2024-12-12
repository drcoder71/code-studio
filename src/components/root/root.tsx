import { ReactElement } from "react"
import Navbar from "./navbar"

const Root = ({children}: {
    children: ReactElement
}) => {
  return (
    <div className="min-h-[100vh]">
        <Navbar />
        {children}
        {/* footer */}
    </div>
  )
}

export default Root