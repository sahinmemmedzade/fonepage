import { Routes, Route } from 'react-router-dom'; // react-router-dom'dan Routes ve Route'ı içe aktar

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './page/Home';
import Blogs from './page/blogs';
import Page from './page/page';
import Shop from './page/shop';
import Featured from './page/featured';
import DetailPage from './component/DetailPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/page' element={<Page />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/featured" element={<Featured />} />
      <Route path='/DetailPage' element={<DetailPage/>} />
      </Routes>

      <div><Footer /></div>
    </div>
  );
}

export default App;
