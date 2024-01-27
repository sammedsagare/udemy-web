import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userID } = useParams();
  return (
    <div className="text-center text-2xl bg-[#323232] text-white p-4">
      User: {userID}
    </div>
  );
}
