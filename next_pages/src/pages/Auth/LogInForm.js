import React, { useState, useRef, useCallback, useEffect } from "react";
import classes from "./LoginForm.module.css";
import { CSSTransition } from "react-transition-group";
import UserChecker from "@/components/userChecker";
import { useDispatch } from "react-redux";
import { setAuthTrue, setUser } from "../../store/index";
import { useRouter } from "next/router";
///////////////////////////////////

export default function LogInForm({ users }) {
  const [authState, setAuthState] = useState(`Log in`);
  const [password, setPassword] = useState(``);
  const [inProp, setInProp] = useState(false);
  const [userName, setUserName] = useState(``);
  const confirmPassinputRef = useRef();
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const router = useRouter();

  //////////////////////////////////////////////
  ///  useRef hook for react-transition-animation/////////
  const nodeRef = useRef(null);
  const formRef = useRef();
  //////////////////////////////////////////////

  const dispatch = useDispatch();

  //////////// handling choosing the avatar
  const changeHandler = useCallback((e) => {
    setUserName(e.target.value);
  }, []);
  ////////////

  const submitHandler = useCallback(
    async (e) => {
      // making sure log in mode
      if (authState == `Log in`) {
        e.preventDefault();
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        };

        // verifing user data on the server
        const res = await fetch("/api/auth", {
          ...options,
          body: JSON.stringify({ name: `${userName}`, password }),
        });

        try {
          if (res.ok) {
            console.log("Logged in successfully");
            dispatch(setAuthTrue());

            let activeUser = users.find((u) => u.name == userName);

            activeUser && dispatch(setUser(activeUser));
            router.push(`/`);
          } else {
            setPasswordIsValid(false);
            console.error("Login failed");
          }
        } catch (err) {
          console.error("An error occurred", error);
        }
      } else {
        setAuthState(`Log in`);
      }
    },

    [userName, router, password, authState, dispatch, users]
  );

  //////// handle the style in case of input  //////
  const getOutLineStyle = useCallback(() => {
    return passwordIsValid
      ? {}
      : { border: `1px solid red`, borderRadius: `10px` };
  }, [passwordIsValid]);

  const getHrStyle = useCallback(() => {
    return passwordIsValid
      ? {}
      : { backgroundColor: `red`, boxShadow: ` -1px 0px 10px 2px red` };
  }, [passwordIsValid]);
/// using CCtransition to make animation and making sure 
//the elements will be removed from the dom
  return (
    <CSSTransition
      classNames={{
        enter: classes.formenter,
        enterActive: classes.formenterActive,
        enterDone: classes.formenterDone,
        exit: classes.formexit,
        exitActive: classes.formexitActive,
        exitDone: classes.formexitDone,
      }}
      timeout={{
        enter: 500,
        exit: 500,
      }}
      in={!inProp}
      nodeRef={formRef}
    >
      <form
        ref={formRef}
        onSubmit={submitHandler}
        className={`${classes.form_container} ${classes.form}`}
      >
        <div className={classes.center_container}>
          <div className={classes.login_signup}>
            <p
              onClick={() => {
                setAuthState(`Log in`);
                setInProp(false);
              }}
            >
              <span className={`${authState === "Log in" && classes.chosen}`}>
                log in
              </span>
            </p>
            <p
              onClick={() => {
                setAuthState(`Sign up`);
                setInProp(true);
              }}
            >
              <span className={`${authState === "Sign up" && classes.chosen}`}>
                sign up
              </span>
            </p>
          </div>
        </div>

        <CSSTransition
          classNames={{
            enter: classes.enter,
            enterActive: classes.enterActive,
            enterDone: classes.enterDone,
            exit: classes.exit,
            exitActive: classes.exitActive,
            exitDone: classes.exitDone,
          }}
          nodeRef={nodeRef}
          timeout={{
            enter: 500,
            exit: 500,
          }}
          unmountOnExit
          in={inProp}
        >
          <>
            <section ref={nodeRef}>
              <div className={classes.name_section}>
                <div className={classes.name_container}>
                  <input
                    type="name"
                    className={classes.name_input}
                    placeholder="First Name"
                  />
                  <hr className={classes.hrPink} />
                </div>
                <div className={classes.name_container}>
                  <input
                    type="name"
                    className={classes.name_input}
                    placeholder="Lasl Name"
                  />
                  <hr className={classes.hrPink} />
                </div>
              </div>
              <div style={{ marginTop: 60 }}>
                <input
                  type="email"
                  className={classes.email_input}
                  placeholder="Enter your email or user name"
                />
                <hr />
              </div>
            </section>
          </>
        </CSSTransition>
        {/* the content of the login form */}
        {authState == `Log in` && users !== null && (
          <>
            {users.map((user) => (
              <UserChecker
                key={user.id}
                name={user.name}
                onChange={changeHandler}
                imgSrc={user.avatar}
              />
            ))}
          </>
        )}

        <div>
          <input
            type="password"
            className={classes.password_input}
            placeholder="PASSWORD"
            value={password}
            style={getOutLineStyle()}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <hr style={getHrStyle()} />
          <div className={classes.forget_password_container}>
            {authState === `Log in` && <p>forgot your password ?</p>}{" "}
          </div>
        </div>

        <CSSTransition
          classNames={{
            enter: classes.enter,
            enterActive: classes.enterActive,
            enterDone: classes.enterDone,
            exit: classes.exit,
            exitActive: classes.exitActive,
            exitDone: classes.exitDone,
          }}
          timeout={{
            enter: 500,
            exit: 500,
          }}
          unmountOnExit
          in={inProp}
          nodeRef={confirmPassinputRef}
        >
          <div ref={confirmPassinputRef}>
            <input
              type="password"
              className={classes.password_input}
              placeholder="CONFIRM PASSWORD"
            />
            <hr />
          </div>
        </CSSTransition>

        <div className={classes.center_container}>
          <button type="submit" className={classes.form_button}>
            {authState}
          </button>
        </div>
      </form>
    </CSSTransition>
  );
}
