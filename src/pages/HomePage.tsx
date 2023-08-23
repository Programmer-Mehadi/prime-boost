import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <p className="my-10 text-blue-700 text-4xl font-bold">Home page</p>
      <div className="flex flex-col items-center gap-3">
        <button className="btn btn-secondary bg-green-700 border-0">
          <Link to="/landing-page/corporate">One</Link>
        </button>
        <button className="btn btn-secondary bg-green-700 border-0">Two</button>
        <button className="btn btn-secondary bg-green-700 border-0">
          Three
        </button>
        <button className="btn btn-secondary bg-green-700 border-0">
          Four
        </button>
        <button className="btn btn-secondary bg-green-700 border-0">
          Five
        </button>
        <button className="btn btn-secondary bg-green-700 border-0">Six</button>
        <button className="btn btn-secondary bg-green-700 border-0">
          Seven
        </button>
        <button className="btn btn-secondary bg-green-700 border-0">
          Eight
        </button>
        <button className="btn btn-secondary bg-green-700 border-0">
          Nine
        </button>
        <button className="btn btn-secondary bg-green-700 border-0">Ten</button>
      </div>
    </div>
  );
};

export default HomePage;
