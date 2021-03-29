import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import data from './mydata.json';

import Usercard from './Usercard';
function Displaygit(props) {
    

    const [users, setUsers] = useState([]);
    const getApi = () => {

        setUsers(data);

    }
    useEffect(() => {

        getApi();

    }, []);

    return (
        <>
           
           <div className = "display-area">
                {
                    users.map((elem,ind) => {
                        return (
                           <Link to = {"/profile/"+ind} style = {{textDecoration:'none'}} >
                                <Usercard
                                    name={elem.name}
                                    job={elem.country}
                                    odi={elem.odi.batting.match}
                                    test={elem.test.batting.match}
                                    t20={elem.t20.batting.match}
                                    dp={elem.profile}
                                    path={elem.path}
                                    searchData = {props.userInp}
                                />
                           </Link>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Displaygit;