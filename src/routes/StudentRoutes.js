import { lazy } from 'react';

// project imports
import StudentLayout from 'layout/StudentLayout';
import Loadable from 'ui-component/Loadable';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const StudentHome = Loadable(lazy(() => import('views/student/StudentHome')));
const StudentProfile = Loadable(lazy(() => import('views/student/StudentProfile')));

// ==============================|| MAIN ROUTING ||============================== //

const StudentRoutes = {
    path: '/',
    element: <StudentLayout />,
    children: [
        {
            path: '/student/home',
            element: <StudentHome />
        },
        {
            path: '/student/profile',
            element: <StudentProfile />
        }
    ]
};

export default StudentRoutes;
