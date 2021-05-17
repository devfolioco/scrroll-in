import { executeSaveScroll, executeGetScroll, getLatestScrollItem } from './contentScripts';

function getUrlWithoutHash(url) {
  return url.split('?')[0];
}

const setActiveIcon = () => {
  chrome.action.setIcon({
    path: {
      16: '../images/icon-16.png',
      32: '../images/icon-32.png',
      48: '../images/icon-48.png',
      128: '../images/icon-128.png',
      256: '../images/icon-256.png',
    },
  });
};

const setInactiveIcon = () => {
  chrome.action.setIcon({
    path: {
      16: '../images/icon-16-inactive.png',
      32: '../images/icon-32-inactive.png',
      48: '../images/icon-48-inactive.png',
      128: '../images/icon-128-inactive.png',
      256: '../images/icon-256-inactive.png',
    },
  });
};

chrome.runtime.setUninstallURL('https://prateeksurana3255.typeform.com/to/VMfEV6');

chrome.runtime.onInstalled.addListener(details => {
  if (details.reason === 'install') {
    chrome.storage.local.set({ 'scroll-mark': {} });
  }
});

// const updateIcon = () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//     const url = getUrlWithoutHash(tabs[0].url);

//     chrome.storage.local.get('scroll-mark', data => {
//       const scrollMarkData = data['scroll-mark'];
//       if (!scrollMarkData.hasOwnProperty(url)) {
//         setInactiveIcon();
//       } else {
//         setActiveIcon();
//       }
//     });
//   });
// };

chrome.tabs.onActivated.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const url = getUrlWithoutHash(tabs[0].url);

    chrome.storage.local.get('scroll-mark', data => {
      const scrollMarkData = data['scroll-mark'];
      if (!scrollMarkData.hasOwnProperty(url)) {
        setInactiveIcon();
      } else {
        setActiveIcon();
      }
    });
  });
});

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.tabs.get(tabId, tab => {
    const url = getUrlWithoutHash(tab.url);

    if (url) {
      chrome.storage.local.get('scroll-mark', data => {
        const scrollMarkData = data['scroll-mark'];
        if (!scrollMarkData.hasOwnProperty(url)) {
          setInactiveIcon();
        } else {
          getLatestScrollItem(url).then(item => {
            executeGetScroll(tabId, item.uuid);
          });
          setActiveIcon();
        }
      });
    }
  });
});

chrome.runtime.onMessage.addListener(request => {
  if (request === 'setActive') {
    setActiveIcon();
  } else {
    setInactiveIcon();
  }
});

chrome.commands.onCommand.addListener(command => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const currentTabId = tabs[0].id;
    if (command === 'save-scroll') {
      executeSaveScroll(currentTabId);
    } else if (command === 'fetch-scroll') {
      chrome.tabs.get(currentTabId, tab => {
        const url = getUrlWithoutHash(tab.url);

        getLatestScrollItem(url).then(item => {
          if (item !== null) {
            executeGetScroll(currentTabId, item.uuid);
          }
        });
      });
    }
  });
});
