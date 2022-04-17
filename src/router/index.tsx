import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Loading from '../components/Loader';

const Router: React.FC = () => {
    return (
        <Suspense fallback={Loading}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/:id" element={<Home/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default Router;
