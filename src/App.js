import {BrowserRouter,Redirect,Switch,Route} from 'react-router-dom';
import Login from './Login/Login';
import HeyBud from './HeyBud';
import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import game from './GoDino';

const useStyles=makeStyles({

  header:{
      background:'#111111'
  },

  tabs:{
      color:'#FFFFFF',
      textDecoration:'none',
      marginRight:20,
      fontSize:20

  }

})
const App=() =>{
  const classes=useStyles();
    return (
    
    <div >
      <BrowserRouter>
  <AppBar className={classes.header} position='static'>
<Toolbar>
    
    <NavLink className={classes.tabs} to="./" exact>Home</NavLink>
    <NavLink className={classes.tabs} to="game" exact>Go Dino</NavLink>
        
    </Toolbar>    
</AppBar>
      
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path="/chat" component={HeyBud}/>
        <Route exact path="/game" component={game}/>
        <Redirect to='/'/>
      </Switch>
   
      </BrowserRouter>
      
    </div>
  );
}

export default App;
