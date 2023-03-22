import { useState } from "react";
import ASIDE_LIST from "./data";
import FeedList from "./FeedList";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <nav>
        <div className="navContent">
          <div className="navInner">
            <div className="logoBox">
              <img src={`./images/instagram.png`} alt="logo" />
              <span className="mainLogo">westagram</span>
            </div>
            <div className="searchBox">
              <img
                src={`./images/search.png`}
                alt="search"
                className="searchImg"
              />
              <input
                type="text"
                placeholder="search"
                id="navsearchInput"
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
              {searchInput.length > 0 && (
                <div className="filterBox">
                  {/* <SearchId searchInput={searchInput} /> */}
                </div>
              )}
            </div>
            <div className="navIcon">
              <img src={`./images/explore.png`} alt="explore" />
              <img src={`./images/heart.png`} alt="heart" />
              <div className="navProfile">
                <img src={`./images/profile.png`} alt="profile" />
                <div className="hidemenu">
                  <ul>
                    <li>
                      <img src={`./images/profile.png`} alt="profile" />
                      프로필
                    </li>
                    <li>
                      <img src={`./images/save-instagram.png`} alt="save" />
                      저장됨
                    </li>
                    <li>
                      <img src={`./images/settings.png`} alt="settings" />
                      설정
                    </li>
                    <li className="logout">로그아웃</li>
                  </ul>
                </div>
                {/* <!--hidemenu --> */}
              </div>
              {/* <!--navProfile --> */}
            </div>
            {/* <!--navIcon --> */}
          </div>
          {/* <!--navInner --> */}
        </div>
        {/* <!--navContent --> */}
      </nav>

      <main>
        <div className="wrap">
          <div className="feeds">
            <FeedList />
          </div>
          {/* <!--feeds --> */}

          {/* <!-- mainRight --> */}

          {/* <!--mainRight --> */}
        </div>
        {/* <!--wrap --> */}
      </main>
    </>
  );
}

export default App;
