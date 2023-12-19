import { useState } from "react"
import AuthTocken from "./components/AuthTocken"
import { authTocken } from "./context/AuthContext"
import CompanyAddForm from "./forms/CompanyAddForm"
const App = () => {
  const [tocken,setTocken]=useState<string>('')
  const [auth,setAuth]=useState<boolean>(true);
  const handleSubmit = (tocken:string) =>{
        setTocken(tocken);
        setAuth(false)
  }

  return (
    <>
    {
      auth && <AuthTocken onSubmit={handleSubmit}/>
    }  
    <authTocken.Provider value={{tocken}}>
      <CompanyAddForm />
    </authTocken.Provider>
    </>
  )
}

export default App
