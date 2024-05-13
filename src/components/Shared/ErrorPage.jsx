import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <h1 className="border border-yellow-600 p-10 rounded-2xl text-5xl w-fit">
        Oppsss!!!
      </h1>
      <br />
      <br />

      <Link to="/">
        <button className="py-5 px-10 hover:bg-slate-200 border duration-300 text-slate-600 rounded-xl text-xl font-bold">
          Go to home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
