// import { useContext } from "react"
// import { context } from "../context/authContext"
import { useAuth } from "../context/authContext"

export function Home(){

    const {user, logout, loading} = useAuth()

    const handleLogOut = async () => {
        try{
            await logout()
        }
        catch (error){
            console.error(error)
        }
    }

    if(loading) return <h1>Loading</h1>

    return (
        <div>
            <h1>Welcome {user.displayName || user.email}</h1>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}

