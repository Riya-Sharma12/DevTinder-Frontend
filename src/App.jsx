import Body from "./components/body";
import {BrowserRouter, Routes , Route} from "react-router-dom"  ;
import Login from "./components/login";
import Profile from "./components/profile";
function App() {
  return (
<>
<BrowserRouter basename="/">
<Routes>
<Route path="/" element= {<Body></Body>}>
<Route path="/login" element={<Login></Login>} />
<Route path="/profile" element={<Profile></Profile>} />
{/* <Route path="/" element={} />
<Route path="/" element={} />
<Route path="/" element={} /> */}
</Route>
</Routes>
</BrowserRouter>
</>
  )
}
export default App;
