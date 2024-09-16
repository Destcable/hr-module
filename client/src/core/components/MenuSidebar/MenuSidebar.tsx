import { Menu } from 'react-admin';
import { sidebarItems } from '../../config/sidebar.config';

export const MenuSidebar = () => (
    <Menu>
        {sidebarItems.map((data, index) => <Menu.ResourceItem key={index} {...data} />)}
    </Menu>
);