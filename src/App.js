import icon from './icon.png';
import apple from './apple_store_img.svg';
import android from './android_store_img.png';
import './App.css';
import React from "react"

function App() {
  const appleDownloadLink = "https://apps.apple.com/us/app/devoted-shia-prayer-app/id1669847190?itscg=30200&itsct=apps_box_link&mttnsubad=1669847190";
  const androidDownloadLink = "https://play.google.com/store/apps/details?id=com.ttm.devoted&pcampaignid=web_share";
  return (
    <div className="root">
      <ContextBasedRedirect aLink={androidDownloadLink} iLink={appleDownloadLink} />
      <div className="body">
        <div className="header">
          <h1>Devoted</h1>
          <h3>Shia Prayer App</h3>
        </div>
        <img src={icon} className="app-logo" alt="logo" />
        <p>
          Download for free
          <br />
          Available on iOS and Android
        </p>
        <a href={appleDownloadLink}>
          <img src={apple} className="download-button" alt="apple_download_img_button" />
        </a>
        <a href={androidDownloadLink}>
          <img src={android} className="download-button" alt="android_download_img_button" />
        </a>
      </div>
    </div>
  );
}
const ContextBasedRedirect = ({ aLink, iLink }) => {
  if (typeof window !== "undefined") {
    if (/Android/i.test(navigator.userAgent)) {
      window.location.replace(aLink)
    }
    else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.replace(iLink)
    }
  }
  return " "
};

export default App;
