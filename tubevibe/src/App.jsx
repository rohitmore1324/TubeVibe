// import Navbar from "./component/Navbar";
// import PlayingVideo from "./component/PlayingVideo";
// import Search from "./component/Search";
// import Home from "./component/Home";
// import { Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <div className="relative">
//       <Navbar />
//       <Routes>
//         <Route path="/" exact element={<Home />} />
//         <Route path="/search/:searchQuery" element={<Search />} />
//         <Route path="/video/:id" element={<PlayingVideo />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Search from "./component/Search";
import PlayingVideo from "./component/PlayingVideo";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";

function App() {
  const { loading } = useAuth();
  return (
    <div>
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
}

export default App;