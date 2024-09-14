import { useRouteError,Link} from "react-router-dom";

const Error = () => {
    const {status,statusText , error: {message}} = useRouteError();
    return (
        <div className="error-page">
            <h1>Oops Something Went Wrong ! </h1>
            <h2>Error {status} : {statusText} </h2>
            <h3>{message}</h3>
            <Link to="/"><button>Return to Home</button></Link>
        </div>
    )
};

export default Error;

