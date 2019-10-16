const getUrlWithoutHash = (url) => {
  return url.split("?")[0];
}

const iconSet = (url) => {
  chrome.storage.local.get("scroll-mark")
    .then(data => {
      const scrollMarkData = data["scroll-mark"];
      if (!scrollMarkData.hasOwnProperty(url)) {
        setInactiveIcon();
      } else {
        setActiveIcon();
      }
    })
    .catch(err => console.log(err));
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ "scroll-mark": {} });
});

const updateIcon = () => {
  console.log("updated");
  chrome.tabs.query({ active: true, currentWindow: true })
    .then(tabs => {
      const url = getUrlWithoutHash(tabs[0].url);

      iconSet(url);
    })
    .catch(err => console.log(err));
};

chrome.tabs.onActivated.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true })
    .then(tabs => {
      const url = getUrlWithoutHash(tabs[0].url);

      iconSet(url);
    })
    .catch(err => console.log(err));
});

chrome.tabs.onUpdated.addListener((tabId, updateObj) => {
  chrome.tabs.get(tabId)
    .then(tab => {
      const url = getUrlWithoutHash(tab.url);

      if (url) {
        iconSet(url);
      }
    })
    .catch(err => console.log(err));
});

chrome.runtime.onMessage.addListener((request, sender) => {
  if (request === "setActive") {
    setActiveIcon();
  } else {
    setInactiveIcon();
  }
});

const setActiveIcon = () => {
  chrome.browserAction.setIcon({
    path: {
      "16": "images/icon-16.png",
      "32": "images/icon-32.png",
      "48": "images/icon-48.png",
      "128": "images/icon-128.png",
      "256": "images/icon-256.png"
    }
  });
};

const setInactiveIcon = () => {
  chrome.browserAction.setIcon({
    path: {
      "16": "images/icon-16-inactive.png",
      "32": "images/icon-32-inactive.png",
      "48": "images/icon-48-inactive.png",
      "128": "images/icon-128-inactive.png",
      "256": "images/icon-256-inactive.png"
    }
  });
};
