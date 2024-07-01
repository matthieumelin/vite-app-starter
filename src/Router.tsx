import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomeScreen from '@screens/WelcomeScreen'
import routes from '@routes';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={routes.WELCOME} element={<WelcomeScreen />} />
        </Routes>
    </BrowserRouter>    
  )
}

export default Router