import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import BaseTheme from 'config/chakra.config'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ColorModeScript />
      <ChakraProvider theme={BaseTheme}>
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </ChakraProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
