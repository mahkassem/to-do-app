import Image from "next/image";
import classes from "@/styles/Home.module.css";
import fs from "fs";
import axios from "axios";
import customAxios from "@/helper/customAxios";
import { useSelector } from "react-redux";
import users from "./../../data/users.json";
import { useRouter } from 'next/router'

///////
import { useDispatch } from "react-redux";
import { setAuthTrue, setAuthFalse, setUser } from "./../store";
import isValidSession from "./../helper/isValidSession";
import isValidToken from "./../helper/isValidToken";
import path from "path";

const dataFilePath = path.join(
  __dirname,
  `..`,
  `..`,
  `..`,
  `data`,
  `seasions.json`
);
////////

import TodoList from "@/components/todoListComponents/TodoList";
import {  useCallback, useState } from "react";

export async function getServerSideProps(context) {
  const { req, res } = context;

  // Get the session ID and token from the request cookies
  const sessionId = req.cookies.sessionId;
  const token = req.cookies.token;

  // Load the session data from the data file
  const seasions = JSON.parse(fs.readFileSync(dataFilePath));

  // Check if the session ID and token are valid
  let { name, id, password } = isValidToken(token);

  if (!isValidSession(sessionId, seasions) || !name) {
    // If not, redirect to the authentication page
    res.writeHead(302, { Location: "/Auth" });
    res.end();
    return { props: {} };
  }


  // get the todos of the user
  const userTodos = await customAxios({
    url: "http://localhost:4001/todos",
    method: `GET`,
    name,
    password,
  });

  ////// find matching user

  const myUser = users.find((u) => u.id == id);

  //////////////////////////
  return {
    props: {
      items: userTodos,
      user_id: id,
      name: name,
      password: password,
      user: myUser,
    },
  };
}
////////////////

export default function Home(props) {


  


  let router =useRouter();
  let dispatch = useDispatch();

  dispatch(setUser(props.user));
  dispatch(setAuthTrue());

  const userNow = useSelector((state) => state.user);
  const imgSrc = userNow.avatar;
  const [todos, setTodos] = useState(props.items);




  /// handlint the addition of todo items on the server
  const addHandler = useCallback(
    async (input, setItems) => {
      const response = await customAxios({
        url: "http://localhost:4001/todos",
        method: `POST`,
        name: props.name,
        password: props.password,
        input: input,
      });
      let newTodo = response.data;
      //// setting the todo list items both on client and on the server
      setTodos((p) => [...p, newTodo]);
      setItems((p) => [...p, newTodo]);
    },
    [props.name, props.password]
  );



  /////deleting the list items on the server

  const deleteHandler = useCallback(
    async (id) => {
      try {
        const responser = await axios.delete(
          `http://localhost:4001/todos/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `basic ${Buffer.from(
                `${props.name.split(` `)[0].toLowerCase().trim()}:${
                  props.password
                }`
              ).toString("base64")}`,
            },
          }
        );
        return responser;
      } catch (err) {
        console.log(err);
      }
    },
    [props]
  );


  ////handle the completion of the list items


  const completeToggleHandler = useCallback(
    async (id) => {
      try {
        const responser = await axios.put(
          `http://localhost:4001/todos/${id}`,{},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `basic ${Buffer.from(
                `${props.name.split(` `)[0].toLowerCase().trim()}:${
                  props.password
                }`
              ).toString("base64")}`,
            },
          }
        );
        return responser;
      } catch (err) {
        console.log(err);
      }
    },
    [props]
  );


  /////////////

  const logoutHandler = useCallback(() => {
   
    fetch("/api/redirect").then((response)=>{
    }).then(()=>{
        router.push(`/Auth`)
      dispatch(setAuthFalse());
      dispatch(setUser({}));
    })
  }, [dispatch,router]);


  return (
    <>
      <div className={classes.LogooutContainer}>
        <button onClick={logoutHandler}>Logoout</button>
      </div>
      <main className={classes.main}>
        <h2 className={classes.h2}>
          Hello {props.name.split(` `)[0]} .
          <Image width={80} height={80} alt="avatar" src={imgSrc} />
        </h2>

        <TodoList
          onAdd={addHandler}
          items={todos}
          user_Id={props.user_id}
          onDelete={deleteHandler}
          toggleCompletion={completeToggleHandler}
        />
      </main>
    </>
  );
}
