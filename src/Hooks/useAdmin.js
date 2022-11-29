

import { useState } from "react"
import { useEffect } from "react"


const useAdmin = email =>{
  const [isAdmin,setIsAdmin] = useState(false)
  const [isAdminLoading,setIsAdminLoading] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://hotel-web-server.vercel.app/user/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setIsAdmin(data.isAdmin)
            setIsAdminLoading(false)
        })
        }
    },[email])
    return [isAdmin,isAdminLoading];
}

export default useAdmin;