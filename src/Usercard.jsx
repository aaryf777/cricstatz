import React from 'react';

function Usercard(props) {
    let check = false;
    let searchVal = props.searchData;
    let nameVal = props.name;
    check = nameVal.toUpperCase().indexOf(searchVal.toUpperCase()) > -1 ? true : false;
    if (check) {
        return (
            <>
                <div className="card">
                    <div className="img-box">
                        <img src={props.dp} alt="dp" />
                    </div>
                    <div className="text-box">
                        <h2>{props.name}</h2>
                        <h3>Cricketer, {props.job}</h3>
                        <div className="user-info">
                            <div className="post">
                                <h4>Test</h4>
                                <p>{props.test}</p>
                            </div>
                            <div className="followers">
                                <h4>ODI</h4>
                                <p>{props.odi}</p>
                            </div>
                            <div className="rating">
                                <h4>T-20</h4>
                                <p>{props.t20}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
    else {
        return (
            <p></p>
        )
    }
}
export default Usercard;
