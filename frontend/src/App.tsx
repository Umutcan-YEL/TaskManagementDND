import { useDispatch } from "react-redux";
import { gettasks } from "./services/redux/slices/TaskSlice";
import { AppDispatch } from "./services/redux/Store";
import { getboards } from "./services/redux/slices/BoardSlice";
import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { TaskState } from "./models/State";
const Home = lazy(() => import("./pages/Home"));

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getboards());
    dispatch(gettasks());
  }, []);

  const isLoading = useSelector((state: TaskState) => state.task.isLoading);
  console.log(isLoading);

  if (isLoading) {
    return (
      <div className="center">
        <span className="loader"></span>
      </div>
    );
  }

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
