import dva from "dva";
import "./index.css";

// 1. Initialize
const app = dva({
    // history 的使用
    // history:require('history').createBrowserHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
