import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { DefaultLayout } from '../layout';

const NotFound: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/notfound', { replace: true });
    }, []);
    return (
        <DefaultLayout>
            <p>Not Found</p>
            <Link to="/">
                <button>Back Home</button>
            </Link>
        </DefaultLayout>
    );
};

export default NotFound;
