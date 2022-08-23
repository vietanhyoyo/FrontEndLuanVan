import { lazy } from 'react';

// project imports
import TeacherLayout from 'layout/TeacherLayout';
import Loadable from 'ui-component/Loadable';



// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')))
const TeacherClass = Loadable(lazy(() => import('views/teacher/TeacherClass')))
const ClassCalendar = Loadable(lazy(() => import('views/teacher/ClassCalendar')))
// ==============================|| MAIN ROUTING ||============================== //

const TeacherRoutes = {
    path: '/', 
    element: <TeacherLayout />,
    children: [
        {
            path: '/teacher/class',
            element: <TeacherClass />
        },
        {
            path: '/teacher/classCalendar',
            element: <ClassCalendar />
        }
    ]
};

export default TeacherRoutes;
