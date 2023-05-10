import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import ApiCaller from "./utils/ApiCaller";
import GetDays from "./utils/GetDays";
import "typeface-roboto";
import NavTopBar from "./components/NavTopbar";
import PanelLeft from "./components/PanelLeft";
import { isMobile } from "react-device-detect";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await ApiCaller();
      const days = await GetDays(response.list);
      setData(days);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const [isPanelActive, setIsPanelActive] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    isMobile && setIsPanelActive(false);
  }, []);

  const handleToTheTop = () => {
    window.location.href = "#";
  };

  if (isLoading) {
    return (
      <div className={`App ${isDark && 'dark'}`}>
        <div className="cursor-progress text-2xl flex flex-col h-screen justify-center text-center font-bold text-gray-700 dark:text-gray-200 transition-all duration-300">
          Loading...
        </div>
      </div>
    );
  }

  return (
    // Main div
    <div className={`App ${isDark && 'dark'}`}>
      <div className="bg-[#f3f4f6] dark:bg-[#1f2022] flex flex-row overflow-x-clip subpixel-antialiased h-[100vh] w-[100vw] min-h-[100vh] max-h-[100vh] transition-all duration-300">
      {/* Start */}
      <div id="container-start">
        <PanelLeft isPanelActive={isPanelActive} />
      </div>

      {/* Middle */}
      <div id="container-mid" className="flex flex-col grow w-full">
        <NavTopBar
          isPanelActive={isPanelActive}
          setIsPanelActive={setIsPanelActive}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <CardList data={data} isMobile={isMobile} isDark={isDark} />
      </div>
      </div>
    </div>
  );
}

export default App;
