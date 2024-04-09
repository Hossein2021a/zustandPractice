"use client";

import { useGlobalData } from "../store/apistore";

function AsuncData() {
  const data = useGlobalData();

  return (
    <div>
      {data.isLoading && <div>isLoading...</div>}{" "}
      {data.posts.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}

export default AsuncData;
