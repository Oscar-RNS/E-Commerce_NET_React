import { AppBar, Button, IconButton, Switch, Toolbar, Typography } from '@mui/material'

interface Props {
  darkMode : boolean
  handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange} : Props) {
  return ( 
    <AppBar position="static" sx={{mb: 4}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
         {/*<MenuIcon />*/}
        </IconButton>        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         E-Commerce
         <Switch checked={darkMode} onChange={handleThemeChange}/>
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar> 
  )
}
