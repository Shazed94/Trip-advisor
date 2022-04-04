import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { firebaseStorage } from "../../firebase/config";
import "./Home.css";

function Home() {
  const [tripsData, setTripsData] = useState(null);
  const [isPending, setPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    setPending(true);
    firebaseStorage
      .collection("trips")
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          const data = [];
          snapshot.docs.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
          });
          setTripsData(data);
          setPending(false);
        } else {
          setErrorMsg("No tour data found! Refresh the page and try again");
          setPending(false);
        }
      });
  }, []);

  return (
    <div className="trip">
      <h1>Upcoming Trips</h1>
      {isPending && <div>Loading trip information... </div>}
      {errorMsg && <div>{errorMsg}</div>}
      {tripsData &&
        tripsData.map((trip) => (
          <div key={trip.id} className="tripStyle">
            <h3>{trip.title}</h3>
            <p>{trip.duration}</p>
            <p>{trip.desc}</p>
            <Link to={`/trips/${trip.id}`}>See more...</Link>
          </div>
        ))}
    </div>
  );
}

export default Home;
