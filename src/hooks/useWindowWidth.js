import { useState, useEffect } from "react";

export default function useWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        // window.addEventListener('resize',()=>{
        //     setWidth(window.innerWidth)
        // })
        const resize = () => {
            setWidth(window.innerWidth)
        }

        //딱한번호출 []
        window.addEventListener('resize',resize)
    
        return () => {
            //리사이즈될때마다호출
            window.removeEventListener('resize', resize)
        }
    },[])

    return width
}