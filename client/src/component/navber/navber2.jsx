import { useNavigate } from 'react-router-dom'
import ProfileInfo from '../../component/navber/profileinfo.jsx'
export default function Navber(){
    const navigate = useNavigate()
   
    return(
        <div className = 'bg-white  item-center flex  justify-between px-2  border-1 border-black h-16 max-sm:gap-2  max-sm:sticky max-sm:top-0 '>
            <h2 className="text-lg font-bold tracking-tighter text-black py-2 max-sm:text-md max-sm:pt-2 ">ZNOTE</h2>
           

        </div>
    )
}
