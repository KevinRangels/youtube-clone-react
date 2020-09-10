import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            {/* <SidebarRow icon={} title="Library" />
            <SidebarRow icon={} title="History" />
            <SidebarRow icon={} title="Your videos" />
            <SidebarRow icon={} title="Watch Later" />
            <SidebarRow icon={} title="Liked videos" />
            <SidebarRow icon={} title="Show more" /> */}
        </div>
    )
}

export default Sidebar
