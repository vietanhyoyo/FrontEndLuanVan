import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')))
const AdminAccount = Loadable(lazy(() => import('views/admin/AdminAccount')))
const TeacherAccount = Loadable(lazy(() => import('views/admin/TeacherAccount')))
const StudentAccount = Loadable(lazy(() => import('views/admin/StudentAccount')))
const AdminProfile = Loadable(lazy(() => import('views/admin/AdminProflie')))
const ClassManager = Loadable(lazy(() => import('views/admin/ClassManager')))
const SchoolYear = Loadable(lazy(() => import('views/admin/SchoolYear')))
const UpdateTeacher = Loadable(lazy(() => import('views/admin/UpdateTeacher')))
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/manager/admin',
            element: <AdminAccount />
        },
        {
            path: '/manager/teacher',
            element: <TeacherAccount />
        },
        {
            path: '/manager/student',
            element: <StudentAccount />
        },
        {
            path: '/manager/profile',
            element: <AdminProfile />
        },
        {
            path: '/manager/class',
            element: <ClassManager />
        },
        {
            path: '/manager/school-year',
            element: <SchoolYear />
        },
        {
            path: '/manager/update-teacher',
            element: <UpdateTeacher />
        }
    ]
};

export default MainRoutes;
