// assets
import { IconBorderAll, IconBook2 } from '@tabler/icons';
// constant
const icons = { IconBorderAll, IconBook2 };

const dashboard = {
    id: 'dashboard',
    title: 'Góc học tập',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Nội dung môn học',
            type: 'item',
            url: '/student/lesson',
            icon: icons.IconBook2,
            breadcrumbs: false
        },
        {
            id: 'classroom',
            title: 'Lớp học',
            type: 'item',
            url: '/student/class',
            icon: icons.IconBorderAll,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
