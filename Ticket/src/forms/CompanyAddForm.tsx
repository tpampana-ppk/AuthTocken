import { useContext } from "react"
import { authTocken } from "../context/AuthContext"

const CompanyAddForm = () => {
  const tocken=useContext(authTocken);
  console.log(tocken)
  return (
    <>
      <p>{JSON.stringify(tocken)}</p>
    </>
  )
}

export default CompanyAddForm
