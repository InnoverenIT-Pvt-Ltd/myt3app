// import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
// import {
//   ArticleIcon,
//   CollapsIcon,
//   HomeIcon,
//   LogoIcon,
//   LogoutIcon,
//   UsersIcon,
//   VideosIcon,
// } from "./icons";

import SettingsIcon from '@mui/icons-material/Settings';
import FlightIcon from '@mui/icons-material/Flight';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const menuItems = [
  { id: 1, label: "Home",  link: "/" },
  { id: 2, label: "Manage Posts",  link: "/posts" },
  { id: 3, label: "Manage Users", link: "/users" },
  { id: 4, label: "Manage Tutorials", link: "/tutorials" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

//   const wrapperClasses = classNames(
//     "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
//     {
//       ["w-80"]: !toggleCollapse,
//       ["w-20"]: toggleCollapse,
//     }
//   );

//   const collapseIconClasses = classNames(
//     "p-4 rounded bg-light-lighter absolute right-0",
//     {
//       "rotate-180": toggleCollapse,
//     }
//   );

//   const getNavItemClasses = (menu) => {
//     return classNames(
//       "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
//       {
//         ["bg-light-lighter"]: activeMenu.id === menu.id,
//       }
//     );
//   };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      //className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",width:"48px" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            {/* <LogoIcon /> */}
            <span
            //   className={classNames("mt-2 text-lg font-medium text-text", 
            //   {
            //     hidden: toggleCollapse,
            //   })}
            >
               <FlightIcon/>
            </span>
          
          </div>

         
       
        </div>
        <div className="flex items-center pl-1 gap-4">
            {/* <LogoIcon /> */}
            <span
            //   className={classNames("mt-2 text-lg font-medium text-text", 
            //   {
            //     hidden: toggleCollapse,
            //   })}
            >
              <SettingsIcon/>
            </span>
          
          </div>
          <div className="flex items-center pl-1 gap-4">
            {/* <LogoIcon /> */}
            <span
            //   className={classNames("mt-2 text-lg font-medium text-text", 
            //   {
            //     hidden: toggleCollapse,
            //   })}
            >
              <DashboardIcon/>
            </span>
          
          </div>
          <div className="flex items-center pl-1 gap-4">
            {/* <LogoIcon /> */}
            <span
            //   className={classNames("mt-2 text-lg font-medium text-text", 
            //   {
            //     hidden: toggleCollapse,
            //   })}
            >
             <PrivacyTipIcon/>
            </span>
          
          </div>
          <div className="flex items-center pl-1 gap-4">
            {/* <LogoIcon /> */}
            <span
            //   className={classNames("mt-2 text-lg font-medium text-text", 
            //   {
            //     hidden: toggleCollapse,
            //   })}
            >
             <SwapVertIcon/>
            </span>
          
          </div>

          <div className="flex items-center pl-1 gap-4">
            {/* <LogoIcon /> */}
            <span
            //   className={classNames("mt-2 text-lg font-medium text-text", 
            //   {
            //     hidden: toggleCollapse,
            //   })}
            >
              <VideoLibraryIcon/>
            </span>
          
          </div>

          <div className="flex items-center pl-1 gap-4">
            {/* <LogoIcon /> */}
            <span
            //   className={classNames("mt-2 text-lg font-medium text-text", 
            //   {
            //     hidden: toggleCollapse,
            //   })}
            >
           <DeveloperBoardIcon/>
            </span>
          
          </div>

       
      </div>

      
   
    </div>
  );
};

export default Sidebar;