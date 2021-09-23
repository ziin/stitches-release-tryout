import { Button } from './components/Button'
import { otherTheme } from './styles'

function App() {
  return (
    <div>
      <h1>Hello Stitches</h1>
      <Button>Primary</Button>

      <div className={otherTheme}>
        <Button>Primary With Theme</Button>
      </div>
    </div>
  )
}

export default App
