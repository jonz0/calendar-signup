import { useEffect } from "react";
import styles from "../../styles/Admin.module.css";
import { API } from "aws-amplify";
import Menu from "../components/Menu";
import * as queries from "../graphql/queries";
import ManageUsers from "../components/ManageUsers";
import ManageAttendees from "../components/ManageAttendees";
import ManageClasses from "../components/ManageClasses";
import { useSelector, useDispatch } from "react-redux";
import { setManage } from "../features/class/adminSlice";

async function retrieveInactives() {
  const getInactives = await API.graphql({
    query: queries.listUsers,
    variables: {
      filter: { enroll: { attributeExists: false } },
    },
  });

  return getInactives.data.listUsers.items.resolve;
}

export default function admin() {
  const dispatch = useDispatch();
  const adminState = useSelector((state) => state.admin.value);

  useEffect(() => {
    if (adminState == "") {
      dispatch(setManage("Manage Attendees"));
    }
  }, []);

  return (
    <div className="page-container">
      <Menu selected="Admin" />
      <div className={styles.pageRight}>
        {adminState == "Manage Attendees" && <ManageAttendees />}
        {adminState == "Manage Users" && <ManageUsers />}
        {adminState == "Manage Classes" && <ManageClasses />}
      </div>
    </div>
  );
}
