import Home from './pages/Home';
import './i18n';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem, FormControl, Box } from '@mui/material';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <Box sx={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
        <FormControl size="small">
          <Select
            value={i18n.language}
            onChange={changeLanguage}
            sx={{ 
              backgroundColor: 'white',
              minWidth: 100,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ccc'
              }
            }}
          >
            <MenuItem value="tr">TR</MenuItem>
            <MenuItem value="en">EN</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Home />
    </>
  )
}

export default App
