import React, { useEffect } from 'react'

const Alert = ({alert,removeAlert,list}) => {
  useEffect(() =>{
    const timeOut = setTimeout(() => {
      removeAlert();
    },3000)
    return () => clearTimeout(timeOut)
  },[list]);
  return (
    <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
  )
}

export default Alert
