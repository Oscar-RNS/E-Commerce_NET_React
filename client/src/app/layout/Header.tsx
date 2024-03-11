import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, IconButton, List, Switch, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';

const pages = [
  {title: 'catalog', path:'/catalog'},
  {title: 'about', path:'/about'},
  {title: 'contact', path:'/contact'}
]

interface Props {
  darkMode : boolean
  handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange} : Props) {
  return ( 
    <AppBar position="static" sx={{mb: 4}}>
      <Toolbar>
    
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography
            component={NavLink}
            to='/'
            variant="h6"
            noWrap   
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'arial',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           E-Commerce  
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange}/> 
          </Box>
          
          <Box sx={{ flexGrow: 1 }} /> 
          <List sx={{display: 'flex'}}>      
           {pages.map(({title, path}) => (
            <Button 
              component={NavLink}
              to={path}
              key={path} 
              color="inherit"
            >  
            {title.toUpperCase()}
          </Button>
         ))}        
        </List> 
        <Box/>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <Button color="inherit" component={NavLink} to='/'>Login</Button>
        <Button color="inherit" component={NavLink} to='/'>Register</Button>
        </Box>
      </Toolbar>
    </AppBar> 
  )
}
