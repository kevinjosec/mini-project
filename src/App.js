
import Navbar from './Component/Navbar/Navbar';
import Body from './Component/Body/Body';
import Home from './Component/pages/Home/Home';
import Menu from './Component/pages/menu/Menu'
import Dmenu from './Component/pages/dmenu/Dmenu';
import Hamenu from './Component/Hamenu/Hamenu';
import Appbutton from './Component/pages/dmenu/Addbutton';
import Onln from './Component/pages/Onlnordr/Onlnordr';
import Connect from './Component/pages/Connect/Connect';
import {Cart} from './Component/pages/Cart/Cart'
import Review from './Component/pages/Review/Review';
import Recipe from './Component/pages/Recipe/Recipe';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {ShopContextProvider} from './Component/pages/ShopContext/ShopContext'; 
import { RecipeDesign } from './Component/pages/Recipe/RecipeDesign';
function App() {
  return (
    <ShopContextProvider>  
<Router>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/home" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/contact" element={<Connect/>}/>
    <Route path="/review" element={<Review/>}/>
    <Route path="/recipe/:id" element={<Recipe/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/online" element={<Onln/>}/>
    <Route path="/recipedesign" element={<RecipeDesign/>}/>
  </Routes>
 </Router>
 </ShopContextProvider>
  );
}

export default App;
