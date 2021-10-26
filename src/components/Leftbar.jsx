import { makeStyles } from '@material-ui/styles'
import React from 'react'
import {Container,Grid,Typography} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import LeftbarData from '../pages/LeftbarData';
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({

}))
const Leftbar = () => {
  const classes = useStyles()
  return(
    <>
      <Grid container justify="flex-start">
              <Grid item lg={2}>
               {
                  LeftbarData.map((currValue) => {
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
              </Grid>
    </>
  )
}
export default Leftbar