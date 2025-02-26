import { useAuth } from "@clerk/clerk-react"
import { Link } from "react-router"

const ProtectRoute = ({el}) => {
  const { isLoaded,isSignedIn } = useAuth()

  if (!isLoaded) return <h1>Loading...</h1>
  if (!isSignedIn) return <div className="flex w-screen h-screen items-center justify-center"><p> Acess Deniend! Go to Home<Link to='/'> [Click!]</Link></p></div>
  return el
}

export default ProtectRoute