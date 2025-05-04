import Body from "./components/body";
import {BrowserRouter, Routes , Route} from "react-router-dom"  ;
import Login from "./components/login";
import Profile from "./components/profile";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Feed from "./components/feed";
function App() {
  return (
<>
<Provider store={appStore}>
<BrowserRouter basename="/">
<Routes>
<Route path="/" element= {<Body></Body>}>
<Route path="/" element={<Feed/>} />
<Route path="/login" element={<Login></Login>} />
<Route path="/profile" element={<Profile></Profile>} />

</Route>
</Routes>
</BrowserRouter>
</Provider>
</>
  )
} 
export default App;
