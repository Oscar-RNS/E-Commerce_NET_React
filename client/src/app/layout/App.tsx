import Header from './Header';
import Catalog from '../../components/catalog/Catalog';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';

function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette : {
      mode : paletteType,
      background : {
       default: paletteType === 'light' ? '#f1f1f1' : '#bfbfbf'
      }
    } 
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <>    
      <ThemeProvider theme={theme}>
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
         <CssBaseline/>
           <Container>
             <Catalog/>
           </Container>
      </ThemeProvider> 
    </>
  )
}

export default App