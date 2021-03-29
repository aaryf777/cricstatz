import React from 'react';
import playerList from './mydata.json';
import {useParams} from 'react-router-dom';
function Displayprofile() {
  
    const {id} = useParams();
    let currPlayer = playerList[id];
    return (
        <>
       <div className = "player-card">
        <div className = "player-bio">
            <div className = "img-box">
                <img src = {currPlayer.profile} alt = "dhoni pic"/>
                <p>{currPlayer.name}</p>
                <span>{currPlayer.country}</span>
            </div>
            <div className = "bio-text">
                <div className = "personal-info">
                    <h4>Personal Information</h4>
                </div>
                
                <div className = "info">
                    <h4>Born</h4>
                    <div className = 'info-value'>
                    <p>{currPlayer.city}</p>
                    </div>
                </div>
                <div className = "info">
                    <h4>Age</h4>
                    <div className = 'info-value'>
                    <p>{currPlayer.age}</p>
                    </div>
                </div>
                <div className = "info">
                    <h4>Teams</h4>
                    <div className = 'info-value'>
                    <p>{currPlayer.team.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className = "batting-stat">
            <p>Batting Statistics</p>
        </div>
        <div className ="tableblock">
        <table className ="table" >
            <thead>
                <tr>
                    <th></th>
                    <th>Match</th>
                    <th>Inn</th>
                    <th>Runs</th>
                    <th>Avg</th>
                    <th>SR</th>
                    <th>HS</th>
                    <th>NO</th>
                    <th>100s</th>
                    <th>50s</th>
                    <th>Four</th>
                    <th>Six</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>Test</td>
                    <td>{currPlayer.test.batting.match}</td>
                    <td>{currPlayer.test.batting.inning}</td>
                    <td>{currPlayer.test.batting.runs}</td>
                    <td>{currPlayer.test.batting.average}</td>
                    <td>{currPlayer.test.batting['strike-rate']}</td>
                    <td>{currPlayer.test.batting['highest-score']}</td>
                    <td>{currPlayer.test.batting['not-out']}</td>
                    <td>{currPlayer.test.batting.hundred}</td>
                    <td>{currPlayer.test.batting.fifty}</td>
                    <td>{currPlayer.test.batting.four}</td>
                    <td>{currPlayer.test.batting.six}</td>
                </tr>
                <tr>
                    <td>ODI</td>
                    <td>{currPlayer.odi.batting.match}</td>
                    <td>{currPlayer.odi.batting.inning}</td>
                    <td>{currPlayer.odi.batting.runs}</td>
                    <td>{currPlayer.odi.batting.average}</td>
                    <td>{currPlayer.odi.batting['strike-rate']}</td>
                    <td>{currPlayer.odi.batting['highest-score']}</td>
                    <td>{currPlayer.odi.batting['not-out']}</td>
                    <td>{currPlayer.odi.batting.hundred}</td>
                    <td>{currPlayer.odi.batting.fifty}</td>
                    <td>{currPlayer.odi.batting.four}</td>
                    <td>{currPlayer.odi.batting.six}</td>
                </tr>
                <tr>
                    <td>T-20</td>
                    <td>{currPlayer.t20.batting.match}</td>
                    <td>{currPlayer.t20.batting.inning}</td>
                    <td>{currPlayer.t20.batting.runs}</td>
                    <td>{currPlayer.t20.batting.average}</td>
                    <td>{currPlayer.t20.batting['strike-rate']}</td>
                    <td>{currPlayer.t20.batting['highest-score']}</td>
                    <td>{currPlayer.t20.batting['not-out']}</td>
                    <td>{currPlayer.t20.batting.hundred}</td>
                    <td>{currPlayer.t20.batting.fifty}</td>
                    <td>{currPlayer.t20.batting.four}</td>
                    <td>{currPlayer.t20.batting.six}</td>
                </tr>
                <tr>
                    <td>IPL</td>
                    <td>{currPlayer.ipl.batting.match}</td>
                    <td>{currPlayer.ipl.batting.inning}</td>
                    <td>{currPlayer.ipl.batting.runs}</td>
                    <td>{currPlayer.ipl.batting.average}</td>
                    <td>{currPlayer.ipl.batting['strike-rate']}</td>
                    <td>{currPlayer.ipl.batting['highest-score']}</td>
                    <td>{currPlayer.ipl.batting['not-out']}</td>
                    <td>{currPlayer.ipl.batting.hundred}</td>
                    <td>{currPlayer.ipl.batting.fifty}</td>
                    <td>{currPlayer.ipl.batting.four}</td>
                    <td>{currPlayer.ipl.batting.six}</td>
                </tr>
            
            </tbody>
            </table>
        </div>
        <div className = "batting-stat">
            <p>Bowling Statistics</p>
        </div>
        <div className ="tableblock">
        <table className ="table" >
            <thead>
                <tr>
                    <th></th>
                    <th>Match</th>
                    <th>Inn</th>
                    <th>Ball</th>
                    <th>Runs</th>
                    <th>Wickets</th>
                    <th>BBF</th>
                    <th>Econ</th>
                    <th>Avg</th>
                    <th>5W</th>
                    
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>Test</td>
                    <td>{currPlayer.test.bowling.match}</td>
                    <td>{currPlayer.test.bowling.inning}</td>
                    <td>{currPlayer.test.bowling.balls}</td>
                    <td>{currPlayer.test.bowling.runs}</td>
                    <td>{currPlayer.test.bowling.wicket}</td>
                    <td>{currPlayer.test.bowling.bbf}</td>
                    <td>{currPlayer.test.bowling.economy}</td>
                    <td>{currPlayer.test.bowling.average}</td>
                    <td>{currPlayer.test.bowling['five-wickets']}</td>
                   
                </tr>
                <tr>
                    <td>ODI</td>
                    <td>{currPlayer.odi.bowling.match}</td>
                    <td>{currPlayer.odi.bowling.inning}</td>
                    <td>{currPlayer.odi.bowling.balls}</td>
                    <td>{currPlayer.odi.bowling.runs}</td>
                    <td>{currPlayer.odi.bowling.wicket}</td>
                    <td>{currPlayer.odi.bowling.bbf}</td>
                    <td>{currPlayer.odi.bowling.economy}</td>
                    <td>{currPlayer.odi.bowling.average}</td>
                    <td>{currPlayer.odi.bowling['five-wickets']}</td>
                   
                </tr>
                <tr>
                    <td>T-20</td>
                    <td>{currPlayer.t20.bowling.match}</td>
                    <td>{currPlayer.t20.bowling.inning}</td>
                    <td>{currPlayer.t20.bowling.balls}</td>
                    <td>{currPlayer.t20.bowling.runs}</td>
                    <td>{currPlayer.t20.bowling.wicket}</td>
                    <td>{currPlayer.t20.bowling.bbf}</td>
                    <td>{currPlayer.t20.bowling.economy}</td>
                    <td>{currPlayer.t20.bowling.average}</td>
                    <td>{currPlayer.t20.bowling['five-wickets']}</td>
                   
                </tr>
                <tr>
                    <td>IPL</td>
                    <td>{currPlayer.ipl.bowling.match}</td>
                    <td>{currPlayer.ipl.bowling.inning}</td>
                    <td>{currPlayer.ipl.bowling.balls}</td>
                    <td>{currPlayer.ipl.bowling.runs}</td>
                    <td>{currPlayer.ipl.bowling.wicket}</td>
                    <td>{currPlayer.ipl.bowling.bbf}</td>
                    <td>{currPlayer.ipl.bowling.economy}</td>
                    <td>{currPlayer.ipl.bowling.average}</td>
                    <td>{currPlayer.ipl.bowling['five-wickets']}</td>
                  
                </tr>
            
            </tbody>
            </table>
        </div>
        </div>
        </>

    );

}
export default Displayprofile;