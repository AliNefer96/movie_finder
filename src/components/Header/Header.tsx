import React, { Fragment } from 'react';
import {Search} from '../Search/Search'


export const Header = () => {

return (
    <Fragment>
<table className="title">
          <tbody>
            <tr>
              <td>
                <img width="50" src="movie.svg" alt="icon"/>
              </td>
              <td width='8'/>
              <td>
                <h1>Movie Finder</h1>
              </td>
            </tr>
          </tbody>
        </table>
    <div>
        <Search></Search>
        </div>
        
        </Fragment>
);

};