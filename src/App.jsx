import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'src/contexts/theme'
import Routes from 'src/routes'

function App() {
  return (
    <ThemeProvider>
      <ConfigProvider>
        <Routes />
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default App
