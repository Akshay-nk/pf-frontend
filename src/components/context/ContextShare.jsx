import React, { createContext, useState } from 'react'

export const addProjectResponseContext=createContext()
function ContextShare({children}) {

 const [addProjectResponse,setAddProjectResponse]=useState({})

  return (
   <>

  <addProjectResponse.Provider value={{addProjectResponse, setAddProjectResponse}}>
    {children}
  </addProjectResponse.Provider>

   </>
  )
}

export default ContextShare