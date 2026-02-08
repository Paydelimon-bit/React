 import React from 'react';
 import Nav from './Nav';
import Card from './card';
import CardRandom from './CardRandom';
 interface LayoutProps{
    children?:React.ReactNode;
 }
 
 function Layout({children}:LayoutProps){
   const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return (<div className="grid grid-cols-3 grid-rows-[auto_1fr_auto] p-12 bg-white border-black border-2 h-screen justify-between">
      <header className="col-start-1 col-end-4 border-b border-sky-400 border-2 pb-4 gap-2">
      <Nav />
      </header>
      <main>
         <Card h2="Tarjeta 1" h3="Primer tarjeta"/>
        <CardRandom valor={numeroAleatorio}/>
        <CardRandom valor={numeroAleatorio}/>
        <CardRandom valor={numeroAleatorio}/>

      </main>

        
    </div>
    )
 }

 export default Layout;