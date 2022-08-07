import React from "react";
import axios from "axios";
import {useEffect, useState} from "react"

const Rushing = () => {

  const {REACT_APP_APIKEY} = process.env;
  const [stats, setStats] = useState([])
  const [year, setYear] = useState(2021)

  const getTeam = () => {
    const options = {
      method: 'GET',
      url: `https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/rushing-stats/defense/${year}`,
      headers: {
        'X-RapidAPI-Key': REACT_APP_APIKEY,
        'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
      }
    };

    axios.request(options).then((response) => {
    	console.log(response.data)
      setStats(response.data)
    }).catch(function (error) {
    	console.error(error)
    });
  }

  useEffect(() => {
    getTeam()
  }, [year])

  return (
    <div className="main-content"> 
      <div className="title">
          <h1>Rushing stats by NFL team 
            <select id="year-selector" name="year" value={year}
            onChange={(e) => setYear(e.target.value)}>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </h1>
      </div>
      <div className="table-wrapper">
        <table className="stats">
          <tr>
            <th>Team</th>
            <th>Touchdowns</th>
            <th>Yards</th>
          </tr>
          {stats.map(({name, touchdowns, yards}) => {
            return (
              <tr>
                <td className="team-name"><b>{name}</b></td>
                <td>{touchdowns}</td>
                <td>{yards}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );

}

export default Rushing;