import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { MainPage } from "./pages/mainPage/MainPage";
import { FavouritesPage } from "./pages/favouritesPage/FavouritesPage";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/favourites" element={<FavouritesPage />}></Route>
                </Routes>
            </div>
        </RecoilRoot>
    );
}

export default App;
