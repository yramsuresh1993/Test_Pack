import { Provider } from "react-redux"
import "./App.css"
import Posts from "./components/posts/Posts"
import store from "./redux/store"
function App() {
  console.log("hello")
  return (
    <Provider store={store}>
      <div className="container py-3">
        <Posts />
      </div>
    </Provider>
  )
}
export default App
