import React from "react";

const enhancedFetch = (url, options, callback) => {
  fetch(url, options)
    .then(response => {
      response
        .json()
        .then(result => {
          callback(result);
        })
        .catch();
    })
    .catch();
};

const errorAlert = (
  <div className="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error:</strong> an error happened
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

export { enhancedFetch, errorAlert };
