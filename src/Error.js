import Header from "./Header";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="text_center error">
        <div>
          <h1>Opps!.... {err.status}</h1>
        </div>
        <div>
          <h1>{err.data}</h1>
        </div>
      </div>
    </>
  );
};

export default Error;
