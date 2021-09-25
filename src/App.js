import React, { useState } from 'react';

// Material UI
import { ThemeProvider } from '@mui/material/styles';

// Component
import { Navbar } from './component';

// Pages
import { Calendar, Classroom, Syllabus, Grade } from './pages';

// Constant
import { theme } from './constant';

const App = () => {
  const [activeMenu, setActiveMenu] = useState(1);

  const handleActiveMenu = (menu) => setActiveMenu(menu);

  const renderComponent = () => {
    switch (activeMenu) {
      case 0:
        return <Calendar />;
      case 1:
        return <Classroom />;
      case 2:
        return <Syllabus />;
      case 3:
        return <Grade />;
      default:
        return <Classroom />;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar activeMenu={activeMenu} handleActiveMenu={handleActiveMenu} />
      {renderComponent()}
    </ThemeProvider>
  );
};

export default App;
