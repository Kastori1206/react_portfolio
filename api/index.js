import fetch from "node-fetch";
import { TOKEN, DATABASE_ID } from "../src/config";

// url/api/post 처럼 사용
export default async function postTodo(request, response) {
  if (request.method !== "POST") {
    return response.status(400).json("method Error");
  }
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "WorkPeriod",
          direction: "descending",
        },
      ],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const data = await res.json();

  return response.status(200).json(data);
}
