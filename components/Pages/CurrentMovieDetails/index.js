import React from "react";

const CurrentMovie = (props) => {
  console.log(props.location.aboutProps, "data");

  return (
    <div class="col m4">
      <div class="card">
        <div class="card-image">
          <img src={props.location.aboutProps && props.location.aboutProps.Poster} style={{ height: 500 }} />
        </div>
        <div class="card-content">
          <span className="card-title">{props.location.aboutProps && props.location.aboutProps.Title}</span>
          <p>Year : {props.location.aboutProps && props.location.aboutProps.Year}</p>
          <p> Type:{props.location.aboutProps && props.location.aboutProps.Type}</p>
        </div>
      </div>
    </div>
  );
};
export default CurrentMovie;
