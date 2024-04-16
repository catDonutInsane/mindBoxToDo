import { Link } from "react-router-dom"
import { NavLink } from "../Links/NavLink"
import { useAppSelector } from "../../hooks/hooks"
import { ClearCompleteButton } from "../buttons/ClearCompleteButton"
export const NavBar =() =>{
   
    const {activeTaskCounter} = useAppSelector(state=>state.reducer)
    return(
        <div className="navbar">
            <div>
                {`${activeTaskCounter} left`}
            </div>
            <div className="navbar_links">
                <NavLink text={"all"} href={"/"}/>
                <NavLink text={"complete"} href={"/complete"}/>
                <NavLink text={"active"} href={"/active"}/>
            </div>
            
            <ClearCompleteButton/>
        </div>
    )
}