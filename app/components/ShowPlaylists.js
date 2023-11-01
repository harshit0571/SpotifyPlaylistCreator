import React, { useEffect } from "react";

const ShowPlaylists = () => {
  useEffect(async () => {
    const res = await axios.get("api/playlists");
    const data = await res.json();
    console.log(data);
  }, []);
  return <div>ShowPlaylists</div>;
};

export default ShowPlaylists;
