import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${username}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-5 bg-[#323232] text-white p-5 text-2xl">
      Github Followers: {data.followers}
      <br />
      <p className="text-lg mt-5">Bio: {data.bio}</p>
      <br />
      <img className="h-auto m-auto " src={data.avatar_url} alt="" />
    </div>
  );
}

export const githubInfoLoader = async ({ params }) => {
  const { username } = params;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    // Return an object with an error property if needed
    return { error: "Failed to fetch data" };
  }
};
