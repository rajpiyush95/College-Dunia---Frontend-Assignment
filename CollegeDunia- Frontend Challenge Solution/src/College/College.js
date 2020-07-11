import React from "react";
import "../styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// function return an array with start components,taking ratings as input
const renderFilledStars = numStars => {
  let stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star isFilled={true} />);
  }
  for (let i = 0; i < 5 - numStars; i++) {
    stars.push(<Star isFilled={false} />);
  }
  return stars;
};

// star component, which based up on filled props sets the color drak or light
const Star = ({ isFilled }) => {
  return isFilled === true ? (
    <span className="star filled">
      {" "}
      <FontAwesomeIcon icon={faStar} />
    </span>
  ) : (
    <span className="star">
      {" "}
      <FontAwesomeIcon icon={faStar} />
    </span>
  );
};

const College = ({ Colleges }) => {
  return (
    <div className="main">
      {Colleges.map((data, index) => {
        return (
          <div key={data + index} className="ImageAndDetails">
            <div className="collegeImage">
              <img src="/Images/college.png" alt="NA" id="image" />
              <div id="promoted">PROMOTED</div>
              <div className="ratings">
                <div id="ratingsRemarks">
                  <div>
                    {data.rating}
                    <span>/5</span>
                  </div>
                  <div>{data.rating_remarks}</div>
                </div>
              </div>
              <div className="lowerTags">
                <p>{data.tags[0]}</p>
                <p>{data.tags[1]}</p>
                <p># {data.ranking}</p>
              </div>
            </div>
            <div className="Description">
              <div className="Des-left">
                <div className="star-name-container">
                  <p id="collegeName">
                    <span>{data.college_name} </span>
                  </p>
                  <div class="stars">{renderFilledStars(data.rating)}</div>
                </div>

                <p id="metroAndBus">
                  <span id="metro">{data.nearest_place[0]} | </span>
                  <span id="bus">{data.nearest_place[1]}</span>
                </p>
                <p id="famousPlaces">{data.famous_nearest_places}</p>
                <p id="offer">{data.offertext}</p>
              </div>
              <div className="Des-right">
                <div className="orgnalAndDiscount">
                  <p id="discountContent">
                    <span id="orignalPrice">Rs.{data.original_fees}</span>

                    <span id="discount"> {data.discount}%</span>
                  </p>
                  <p id="discounted">Rs. {data.discounted_fees}</p>
                  <p id="cycle">{data.fees_cycle}</p>
                  <p id="amenties">
                    {data.amenties[0]} . {data.amenties[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default College;
