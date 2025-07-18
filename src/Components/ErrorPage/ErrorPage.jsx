import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>OOPS!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back to</p> <Link to='/'><button>Home</button></Link>
                </div>
            }
            
        </div>
    );
};

export default ErrorPage;