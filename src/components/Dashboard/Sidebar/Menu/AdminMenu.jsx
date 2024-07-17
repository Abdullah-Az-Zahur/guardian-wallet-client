import React from "react";
import { FaUserCog } from "react-icons/fa";
import { BsFingerprint } from "react-icons/bs";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <div>
      <div>
        <MenuItem
          icon={FaUserCog}
          label="Manage Users"
          address="manage-users"
        />
      </div>
      
      <div>
        <MenuItem
          icon={FaUserCog}
          label="Payments"
          address="all-payments"
        />
      </div>
      <MenuItem icon={BsFingerprint} label="Responses" address="all-survey-history" />
      
    </div>
  );
};

export default AdminMenu;
