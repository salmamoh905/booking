
import {
  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/hotels" element ={<List/>}/>
      <Route path="/hotels/:id" element ={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <h1>welcome POWERFUL WOMAN</h1>
//     </div>
//   );
// }

export default App;
