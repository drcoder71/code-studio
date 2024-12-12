import { LucideCodeXml } from "lucide-react"
import { Link } from "react-router-dom"

const LogoCommon = ({ className }: {
    className: string
}) => {
  return (
    <div>
        <Link to={'/'} className="text-popover inline-flex items-center justify-center gap-2 bg-primary text-2xl p-2 ${className}"><LucideCodeXml/> <span>Studio</span></Link>
    </div>
  )
}

export default LogoCommon