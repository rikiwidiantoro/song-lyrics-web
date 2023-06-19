import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Root from "./containers/Root/Root.container";
import Home from "./containers/Home/Home.container";
import NotFound from "./component/NotFound/NotFound.component";
import AllSong from "./containers/AllSong/AllSong.container";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<Root/>}
        >
          <Route
            index
            element={<Home/>}
          />
          <Route
            path="allsong"
            element={<AllSong/>}
          />
        </Route>
        <Route
          path="*"
          element={<NotFound/>}
        />
      </>
    )
  );
  return <RouterProvider router={router}/>;
}

export default App;
