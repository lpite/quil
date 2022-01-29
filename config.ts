export let APIURL = "https://quil-api.herokuapp.com";
if (typeof window !== "undefined") {
  if (window.location.href === "http://localhost:8080/") {
    APIURL = "http://localhost:3000";
  }
}
