import config from './config/config.js';
import app from './config/express.js';

// 程式進入點，listen on port config.port
app.listen(config.port, () => {
  console.log(`server started on  port http://127.0.0.1:${config.port} (${config.env})`);
});

export default app;