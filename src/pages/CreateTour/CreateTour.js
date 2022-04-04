//  import hooks from react
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseStorage } from "../../firebase/config";

//  import styling
import "./CreateTour.css";

function CreateTour() {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tripInfo = {
      title,
      duration,
      price,
      desc,
      location: location.toLowerCase(),
    };
    await firebaseStorage.collection("trips").add(tripInfo);
    navigate("/");
  };

  // redirect users to home page

  return (
    <div className="create">
      <h2 className="form-title">Create New Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Tour Title:</span>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Tour duration:</span>
          <input
            name="duration"
            id="duration"
            cols="30"
            rows="10"
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
            required
          />
        </label>
        <label>
          <span>Description:</span>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="5"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            required
          ></textarea>
        </label>
        <label>
          <span>Total Cost:</span>
          <input
            type="text"
            name="price"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Tour Location:</span>
          <input
            type="text"
            name="location"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            required
          />
        </label>
        <button>Create Now</button>
      </form>
    </div>
  );
}

export default CreateTour;
