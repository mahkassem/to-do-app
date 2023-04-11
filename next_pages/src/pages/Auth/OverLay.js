import React from 'react'
import classes from './OverLay.module.css'


export default function OverLay({children}) {
  return (
    <div className={classes.sky}>
      <div className={classes.photo}>
      {children}
      </div>
    </div>
  )
}
