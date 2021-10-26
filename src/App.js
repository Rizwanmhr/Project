import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Navbar from './components/Navbar'
import Leftbar from './components/Leftbar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import {Container,Grid,Typography} from "@material-ui/core";
// import HomePage from './pages/HomePage'
// import Friends from './pages/Friends'
// import Lists from './pages/Lists'
// import Camera from './pages/Camera'
// import Videos from './pages/Videos'
// import Apps from './pages/Apps'
// import Collections from './pages/Collections'
// import MarketPlace from './pages/MarketPlace'
// import Settings from './pages/Settings'
// import Logout from './pages/Logout'
// import Sidebar from './pages/Sidebar'
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

}))
const App = () => {
  const classes = useStyles()
  return(
    <>
<Navbar />
<Grid container>
<Grid item sm={2}><Leftbar /></Grid>
<Grid item sm={7}><Feed /></Grid>
<Grid item sm={3}><Rightbar /></Grid>
</Grid>
{/* <Router>
    <Switch>
    <Sidebar>
    <Route path='/' exact component={HomePage} />
    <Route path='/friends' exact component={Friends} />
    <Route path='/lists' component={Lists} />
    <Route path='/camera' component={Camera} />
    <Route path='/videos' component={Videos} />
    <Route path='/apps' component={Apps} />
    <Route path='/collections' component={Collections} />
    <Route path='/marketplace' component={MarketPlace} />
    <Route path='/settings' component={Settings} />
    <Route path='/logout' component={Logout} />
    </Sidebar>
    </Switch>
    </Router> */}
    </>
  )
}
export default App