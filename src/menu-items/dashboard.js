// assets
import { IconDashboard, IconWindow } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconWindow };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Quản lý',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Thống kê',
            type: 'item',
            url: '/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'classroom',
            title: 'Lớp học',
            type: 'item',
            url: '/manager/class',
            icon: icons.IconWindow,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
