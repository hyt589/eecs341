import React from "react";
import api from "./config";
import ErrorMessage from "../components/ErrorMessage";

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

const createURL = (prefix, endpoint, params) => {
  let url = new URL(`${api}${prefix}${endpoint}`);
  if (params !== undefined && params !== null && Object.keys(params) !== 0) {
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  }
  return url;
};

const createTable = (data) => {
  const tableRows = data.map((obj,i) => {
    return (
      <tr key={i+1}>
        {Object.keys(obj).map((key, i) => (
          <th key={i}>{obj[key]}</th>
        ))}
      </tr>
    );
  });
  let table = (
    <table className="table table-striped" key={0}>
      <thead className="thead-dark" key={-1}>
        <tr key={-2}>
          {Object.keys(data[0]).map((key, i) => (
            <th scope="col" key={i+1}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
  return table
};


export { enhancedFetch, createURL, createTable };
