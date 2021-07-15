import React, { useEffect } from 'react'

const Alert = ({alert,removeAlert,list}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  },[list,removeAlert]);
  return (
    <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
  )
}

export default Alert
