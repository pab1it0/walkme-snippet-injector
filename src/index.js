import css from "./styles.css"

function init() {
  if (!window.addEventListener) return // Check for IE9+

  let options = INSTALL_OPTIONS
  let walkme

  function injectWalkmeSnippet() {
    walkme = document.createElement("script")
    walkme.type = "text/javascript"
    walkme.async = true
    walkme.src = `https://cdn.walkme.com/users/${options.walkmeUserGuid}/walkme_${options.walkmeUserGuid}_https.js`
    const s = document.getElementsByTagName("script")[0]
    s.parentNode.insertBefore(walkme, s)

    /* eslint no-underscore-dangle: ["error", { "allow": ["_walkmeConfig"] }] */
    window._walkmeConfig = { smartLoad: true }
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions: function setOptions(nextOptions) {
      options = nextOptions

      injectWalkmeSnippet()
    },
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectWalkmeSnippet)
  } else {
    injectWalkmeSnippet()
  }
}

init()
