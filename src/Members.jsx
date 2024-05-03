// @ts-nocheck
import { useState, useEffect } from "react";
import MemberHeader from "./MemberHeader";
import MemberCard from "./MemberCard";
import Box from "@mui/material/Box";

const MEMBERS_API =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const Members = ({ searchParams }) => {
  const [members, setMembers] = useState([]);

  function searchObjects(data, query) {
    const lowercaseQuery = query.toLowerCase();

    return data.filter((obj) => {
      return Object.values(obj).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(lowercaseQuery);
        }
        return false;
      });
    });
  }
  console.log("Render on first load");
  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch(MEMBERS_API);
      const membersList = await response.json();
      localStorage.setItem("members", JSON.stringify(membersList));
      setMembers(membersList);
    };

    fetchMembers();
  }, []);

  useEffect(() => {
    const membersListFromStorage = JSON.parse(localStorage.getItem("members"));
    const result = searchObjects(membersListFromStorage, searchParams);
    console.log(result);
  }, [searchParams]);

  return members.length > 0 ? (
    <Box>
      <MemberHeader />
      {members.map((member) => {
        const { id, name, email, role } = member;
        return (
          <MemberCard key={id} id={id} name={name} email={email} role={role} />
        );
      })}
    </Box>
  ) : null;
};

export default Members;
