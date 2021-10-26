import React from 'react'
import SidebarData from "./SidebarData"
import {
    Grid,
    Avatar,
    makeStyles,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import {Link} from 'react-router-dom'
const Sidebar = ({children}) => {
    return (
        <>
          <Grid container justify="flex-start">
              <Grid item lg={2}>
               {
                  SidebarData.map((currValue) => {
                      const {title, path, icon} = currValue
                      return(
                          <ul>
                              <li style={{listStyle:'none'}}>
                                   <Link style={{textDecoration:'none',color:'black', padding:'50px',lineHeight:'3rem'}} to={path}>
                                   <span>{icon}</span>
                                   <span>{title}</span>
                                   </Link>
                              </li>
                          </ul>
                      )
                  })
               }
              </Grid>
              <Grid item={7}>
               {children}
              </Grid>
              {/* <Grid item={3}>
               {children}
              </Grid> */}
          </Grid>  
        </>
    )
}

export default Sidebar
