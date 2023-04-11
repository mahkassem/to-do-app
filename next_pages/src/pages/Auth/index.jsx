import React from "react";
import LogInForm from "./LogInForm";
import OverLay from "./OverLay";

import fs from "fs";
import isValidSession from "./../../helper/isValidSession";
import isValidToken from "./../../helper/isValidToken";
import path from "path";

const  dataFilePath = path.join(
  __dirname,
  `..`,
  `..`,
  `..`,
  `data`,
  `seasions.json`
  );
  
  // import dataFilePath from "./../helper/dataPath";



export async function getServerSideProps(context) {
  const { req, res } = context;

  const response = await fetch(`http://localhost:4000/users`);
  let users = await response.json();

  const sessionId = req.cookies.sessionId;
  const token = req.cookies.token;
  const seasions = JSON.parse(fs.readFileSync(dataFilePath));
  let { name } = isValidToken(token);

  if (isValidSession(sessionId, seasions) && name) {
    // If not, redirect to the authentication page
    res.writeHead(302, { Location: "/" });
    res.end();
    return { props: {} };
  }

  return { props: { users: users } };
}
export default function Auth(props) {
  
  return (
    <OverLay>
      <LogInForm users={props.users} />
    </OverLay>
  );
}
