import { Route, Routes } from 'react-router-dom';
import InfiniteScroll_Example from './Components/InfiniteScrollingTypes/InfiniteScroll_Example';
import InfiniteScroll_Items from './Components/InfiniteScrollingTypes/InfiniteScroll_Items';

const App = () => {
  // useAuthorization();
  // useSignalR();
  // useGetSystemSettingByName('Update Information');

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <InfiniteScroll_Example />

          }
        >
        </Route>
        <Route path='InfiniteScroll_Items' element={<InfiniteScroll_Items />} />

      </Routes>
    
    </>
  );
};

export default App;
