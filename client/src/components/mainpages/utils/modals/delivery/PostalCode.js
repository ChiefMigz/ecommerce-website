import { useEffect, useState } from "react";
import "./PostalCode.css";

const api_key = "";

const MyPostalCode = "";

const URL = "";

const PostalCodeForm = ({ showmodal }) => {
  const [postalCode, setPostalCode] = useState("");
  const [distance, setDistance] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    //make the get axiios request

    setDistance(`123 km`);
    setTimeout(() => {
      showmodal(false);
    }, 2000);
    setPostalCode("");
  };

  return (
    <div className="postalcode-maindiv">
      <div className="div-form-modal">
        <h3 className="modal-h3-div">  {'Verify delivery availability   🚛'}</h3>
      </div>

      {distance === "" ? (
        <form className="form-modal" onSubmit={onSubmit}>
          <p className="inp-modal"> Enter your postal code: </p>
          <input
            className="form-inp-modal"
            value={postalCode}
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
            placeholder={" Postal Code"}
          />
          <button className="sub-btn-modal" onSubmit={onSubmit}>
            {" "}
            {"Submit"}{" "}
          </button>
        </form>
      ) : (
        <h2> {distance} </h2>
      )}
    </div>
  );
};

export default PostalCodeForm;
