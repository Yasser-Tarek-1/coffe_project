import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-4 text-6xl font-semibold text-[#373873]">404</h1>
      <p className="mb-4 text-lg text-gray-600">أُووبس! يبدو أنك ضائع.</p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-[#373873]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600">
        دعونا نعيدك إلى{" "}
        <Link to="/" className="text-blue-500">
          الصفحة الرئسية
        </Link>
        .
      </p>
    </div>
  );
};

export default ErrorPage;
