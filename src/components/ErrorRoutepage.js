import { useRouteError } from "react-router-dom";

export const Errors = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div>{error.status}</div>
    </>
  );
};
