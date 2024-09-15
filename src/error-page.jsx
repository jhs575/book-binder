import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" h-[80vh] flex flex-col text-center justify-center align-middle">
      <h1 className="font-bold text-2xl my-10">Oops!</h1>
      <p>an unexpected error, Sorry</p>
      <p className="my-5">
        <i className="text-[#707070]">{error.status} {error.statusText || error.message}</i>
      </p>
    </div>
  );
}