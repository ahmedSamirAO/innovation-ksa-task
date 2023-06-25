import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { getUserById, savePageTitle } from "../redux/actions";
import UserInformation from "../components/User/UserInformation";
import PostsComponents from "../components/Posts";

const User = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector(({ users }) =>
    users.users.find((user) => user.id.toString() === id)
  );

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(savePageTitle(user?.name));
  }, [dispatch, user]);

  return (
    <React.Fragment>
      {user?.id && (
        <React.Fragment>
          <Helmet title={user.name} />

          <UserInformation user={user} />
        </React.Fragment>
      )}
      <PostsComponents userId={id} />
    </React.Fragment>
  );
};

export default User;
