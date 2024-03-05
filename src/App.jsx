import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'
import theme from 'src/themes/theme'
import Routes from 'src/routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider>
        <Routes />
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default App
