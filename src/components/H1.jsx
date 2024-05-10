import { cn } from "../lib/utils"
import PropTypes from "prop-types"

export default function H1({children, className}) {
  return (
    <h1 className={cn("text-xl lg:text-2xl font-bold tracking-tight", className)}>{children}</h1>
  )
}

H1.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}