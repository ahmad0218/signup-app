import React from 'react';
import SignUp from './SignUp';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { useColorModes } from '@coreui/react'
import './scss/style.scss'

function App() {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
