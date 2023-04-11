"use client";

import React from "react";
import styles from "./userCheckerContainer.module.css";
import Image from "next/image";
function UserChecker(props) {
  return (
    <>
      <div>
        {/* <input type="radio" name="option" value="1" /> */}

        <div className={styles.userChecker}>
          <label className={styles.container}>
            <input
              type="radio"
              name="user"
              value={props.name}
              onChange={props.onChange}
            />
            <span className={styles.checkmark}></span>
          </label>
          <Image
            className={styles.userImageForm}
            width={100}
            height={100}
            alt="user info"
            src={props.imgSrc}

            //   https://camo.githubusercontent.com/810b882bcc744bb9343c67319d6006f5e4d3b70ff9221bf20cd2ae34406aa2b4/68747470733a2f2f726f626f686173682e6f72672f7a75636b65722d70696e672e706e67
          />
          <p className={styles.userNameForm}>{props.name}</p>
        </div>
      </div>
    </>
  );
}

export default UserChecker;
