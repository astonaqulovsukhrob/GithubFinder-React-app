import React from "react";

function Alert({ alert }) {
  return (
    alert !== null && (
      <>
        <div
          className={`mt-2 w-50 m-auto  alert alert-${alert.classType}`}
          role="alert"
        >
          <i className="fas fa-info-circle"></i>
          {alert.massage}
        </div>
      </>
    )
  );
}

export default Alert;
