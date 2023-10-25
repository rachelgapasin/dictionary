import React from "react";

import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <section className="Images">
        <div className="row">
          {props.images.map((image, index) => {
            return (
              <div className="col-sm-4 p-2" key={index}>
                <a href={image.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={image.src.landscape}
                    alt={props.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
