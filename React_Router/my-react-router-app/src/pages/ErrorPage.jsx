import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    //  console.log(error);
    // return <h1>404 - Page Not Found</h1>;
    
    const handleGoBack = () => {
        // window.history.back();
        navigate(-1);
    };
    
  if (error.status === 404) {
    return (
      <section className=" error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        {/* NavLink use karne par pura back ho jayega starting par chala jayega */}
        {/* <NavLink to="/" className="btn">
          Go Back To HomePage
        </NavLink> */}

        {/* isiliye mai function bana duga one page back hone ke liye */}
        <button className="btn" onClick={handleGoBack}>
          Go Back
        </button>
      </section>
    );
  }
  console.log(error);
}