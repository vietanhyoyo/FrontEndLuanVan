import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

// routing
import Routes from 'routes';
// defaultTheme
import themes from 'themes';
// project imports
import NavigationScroll from 'layout/NavigationScroll';

function App() {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <NavigationScroll>
        <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
