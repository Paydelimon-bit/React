 import React from 'react';
 
 interface LayoutProps{
    children?:React.ReactNode;
 }
 
 function Layout({children}:LayoutProps){
    return (<div className="grid grid-cols-3 grid-rows-3 p-12 bg-sky-300 border-black border-2">
        {children}
    </div>
    )
 }

 export default Layout;