import React from 'react'
import Nav from "./Navbar";
import { NavLink } from 'react-router';

const Home = () => {
    return (
        <>
            <Nav/>
        <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto">
          <NavLink to="/details/1" className="card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
            <div
              className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
              }}
            ></div>
            <h1 className="hover:text-blue-400 text-center">
              lorem acsfvdfvc desb bgvbb
            </h1>
                
                    </NavLink>
        </div>
      </>
    );
}

export default Home