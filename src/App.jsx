import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'src/contexts/theme'
import StoreProvider from 'src/redux/provider'
import Routes from 'src/routes'

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <ConfigProvider>
          <Routes />
        </ConfigProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
