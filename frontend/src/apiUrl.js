let URL;
if (!PROXY_URI) {
  URL = "http://0.0.0.0:8000/";
} else {
  URL = PROXY_URI.replace("{{port}}", 8000);
}
export let apiUrl = URL;
