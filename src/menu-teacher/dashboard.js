// assets
import { IconWindow, IconCalendarTime } from '@tabler/icons';
// constant
const icons = { IconWindow,IconCalendarTime  };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Quản lý',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Thời khóa biểu',
            type: 'item',
            url: '/teacher/classCalendar',
            icon: icons.IconCalendarTime,
            breadcrumbs: false
        },
        {
            id: 'classroom',
            title: 'Lớp học',
            type: 'item',
            url: '/teacher/class',
            icon: icons.IconWindow,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
