import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Top } from './Top';
import { DailyTop } from './daily/pages/DailyTop';
import { CategoryView } from './daily/pages/CategoryView';
import {DailyDetail} from './daily/pages/DailyDetail';
// import { Profile} from './profile/Profile';

// export {Switch} from 'react-router-dom';

export const App = () => {  
  return(
    <div className="layout_container__3sC0E">
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
              <Route path='/' element={<Top />} />
              <Route path='/daily' element={<DailyTop />} />
              <Route path='/daily/:id' element={<DailyDetail />} />
              <Route path='/daily/category/:cat' element={<CategoryView />}/>
              {/* <Route path='/profile' component={Profile}/> */}
              <Route render={() => <h4>not found...</h4>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )  
}
export default  App;
