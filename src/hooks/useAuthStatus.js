import { getAuth, onAuthStateChanged } from 'firebase/auth';
import  { useEffect, useState } from 'react'

export   function useAuthStatus()  {
  const [logedin,setLogedin] =useState(false);
  const [checkingStatus,setCheckingStatus] = useState(true);

  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setLogedin(true);
        console.log(logedin);
      }
      setCheckingStatus(false)
    });
 // eslint-disable-next-line 
  },[]);
  
  return {logedin,checkingStatus}
}


