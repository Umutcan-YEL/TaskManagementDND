import { useDispatch } from "react-redux";
import { gettasks } from "./services/redux/slices/TaskSlice";
import { AppDispatch } from "./services/redux/Store";
import { getboards } from "./services/redux/slices/BoardSlice";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));

function App() {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(getboards());
  dispatch(gettasks());

  return (
    <Suspense
      fallback={
        <div className="center">
          <span className="loader"></span>
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

export default App;
