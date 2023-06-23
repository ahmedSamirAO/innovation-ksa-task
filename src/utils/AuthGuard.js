import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { loginUser } from "../redux/actions";
import { getCookie } from "./cookiesHandler";

function AuthGuard({ children }) {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathname = location.pathname.slice(1);
  const pathPartArr = pathname.split("/");
  const pagePath = pathPartArr[pathPartArr.length - 1];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const userId = getCookie("userId");

    if (userId) {
      setIsLoggedIn(true);
      dispatch(loginUser(userId));
    } else {
      setIsLoggedIn(false);
    }
    setIsLoaded(true);
  }, [dispatch]);

  if (isLoaded && !isLoggedIn && pagePath !== "login") {
    console.log("in redirect: ", isLoggedIn);

    return <Redirect to="/login" />;
  } else if (isLoaded && isLoggedIn && pagePath === "login") {
    return <Redirect to="/posts" />;
  }

  return children;
}

export default AuthGuard;
