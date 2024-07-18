import { FC, useMemo } from "react";
import { useGetUsers } from "./useGetUsers";

export const Users: FC = () => {
  const SERVER_HTTP_API = useMemo(() => `http://localhost:4000`, []);

  const shortPollingUsers = useGetUsers({
    SERVER_HTTP_API,
    delay: 3000,
    getType: "shortPolling",
  });

  const longPollingUsers = useGetUsers({
    SERVER_HTTP_API,
    delay: 0,
    getType: "longPolling",
  });

  return (
    <>
      <ul>
        <h2>Short Polling Users:</h2>
        {shortPollingUsers.map(({ id, firstName, lastName }) => (
          <li key={id}>{`${firstName} ${lastName} ${id}`}</li>
        ))}
      </ul>
      <ul>
        <h2>Long Polling Users:</h2>
        {longPollingUsers.map(({ id, firstName, lastName }) => (
          <li key={id}>{`${firstName} ${lastName} ${id}`}</li>
        ))}
      </ul>
    </>
  );
};
