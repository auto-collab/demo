// -------- COOKIES --------
// Size limit: ~4KB
// Expiration: Can be set manually using 'max-age' or 'expires'
// Accessible by both client (JavaScript) and server (via HTTP headers)
// Automatically sent with every HTTP request to the same domain
// Best for: Authentication, session tracking, and remembering users across requests

function SetCookie() {
  console.log("Storing new cookie...");
  document.cookie = "demoCookieKey=demoCookieValue; path=/; max-age=3600";
  console.log(`Stored cookie: ${document.cookie}`);
}

// -------- LOCAL STORAGE --------
// Size limit: ~5MB (much larger than cookies)
// Does not expire automatically — persists until manually cleared
// Accessible only by the client (JavaScript); not sent to server
// Best for: Saving persistent data like user preferences, dark mode, drafts, etc.
function SetLocalStorage() {
  console.log("Storing local storage...");
  localStorage.setItem("demoLocalStorageKey", "demoLocalStorageValue");
  console.log(
    `New local storage item: ${localStorage.getItem("demoLocalStorageKey")}`
  );
}

// -------- SESSION STORAGE --------
// Size limit: ~5MB (same as localStorage)
// Automatically expires when the tab or browser window is closed
// Accessible only by the client (JavaScript); not sent to server
// Best for: Storing temporary data during a single tab session (e.g., form steps)
function SetSessionStorage() {
  console.log("Storing session storage...");
  sessionStorage.setItem("demoSessionStorageKey", "demoSessionStorageValue");
  console.log(
    `New session storage item: ${localStorage.getItem("demoLocalStorageKey")}`
  );
}
