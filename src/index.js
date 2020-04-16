import App from './components/app';
import { ThemeProvider } from 'theme-ui'

import 'typeface-montserrat'
import 'typeface-roboto-mono'
import 'normalize-css'
import './style'
import theme from './theme'

const Root = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

export default Root
