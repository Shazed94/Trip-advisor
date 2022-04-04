import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { firebaseStorage } from "../../firebase/config";
import "./trips.css";
import { useState } from "react";

function Trips() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trips, setTrips] = useState(null);
  const [isPending, setPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    setPending(true);
    firebaseStorage
      .collection("trips")
      .doc(id)
      .get()
      .then((res) => {
        if (!res.exists) {
          setErrorMsg("We didn't find the data in our server.");
          setPending(false);
        } else {
          setTrips(res.data());
          setPending(false);
        }
      });
  }, [id]);

  useEffect(() => {
    if (errorMsg) {
      navigate("/404");
    }
  }, [errorMsg, navigate]);

  return (
    <div style={{ height: "100vh", paddingBottom: "10px" }}>
      <h2 className="tourpage-heading">Individual Tour Page</h2>
      {isPending && <div>Fetching from server....</div>}
      {errorMsg && <div>couldn't fetch data {errorMsg}....</div>}
      {trips && (
        <div
          className="trips-container"
          style={{ margin: "20px auto", width: "60%" }}
        >
          <h2>{trips.title}</h2>
          <h3>{trips.location}</h3>
          <h4>{trips.duration}</h4>
          <p>{trips.desc}</p>
          <h3>{trips.price}</h3>
        </div>
      )}
    </div>
  );
}

export default Trips;
