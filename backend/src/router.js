export class Router {
  constructor() {
    this.routes = [];
  }

  add(method, pattern, handler, options = {}) {
    const keys = [];
    const source = pattern
      .split("/")
      .map((part) => {
        if (!part.startsWith(":")) return part;
        keys.push(part.slice(1));
        return "([^/]+)";
      })
      .join("/");
    this.routes.push({ method, regex: new RegExp(`^${source}$`), handler, options, pattern, keys });
  }

  get(pattern, handler, options) { this.add("GET", pattern, handler, options); }
  post(pattern, handler, options) { this.add("POST", pattern, handler, options); }
  put(pattern, handler, options) { this.add("PUT", pattern, handler, options); }
  patch(pattern, handler, options) { this.add("PATCH", pattern, handler, options); }
  delete(pattern, handler, options) { this.add("DELETE", pattern, handler, options); }

  match(method, pathname) {
    const decoded = pathname.split("/").map((part) => decodeURIComponent(part)).join("/");
    for (const route of this.routes) {
      if (route.method !== method) continue;
      const match = route.regex.exec(decoded);
      if (!match) continue;
      const params = {};
      route.keys.forEach((key, index) => { params[key] = match[index + 1]; });
      return { route, params };
    }
    return null;
  }
}
