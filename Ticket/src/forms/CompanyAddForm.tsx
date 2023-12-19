import { useContext } from "react";
import { authTocken } from "../context/AuthContext";

const CompanyAddForm = () => {
  const { tocken } = useContext(authTocken);

  return (
    <>
      {tocken && <input value={tocken} />}
    </>
  );
};

export default CompanyAddForm;
