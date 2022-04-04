// importing useHistory hook from server
import { useNavigate } from "react-router-dom";
//  importing style
import "./Error.css";
function Error() {
  const navigate = useNavigate();
  
  const redirect = () => {
    navigate("/");
  };

  return (
    <div className="error-page">
      <h1>SORRY!!!</h1>
      <h3>It's not your fault! We didn't find the product</h3>
      <button onClick={redirect}>Go Back</button>
    </div>
  );
}

export default Error;
