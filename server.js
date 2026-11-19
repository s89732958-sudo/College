require('dotenv').config();
const app=require('./api/index');
app.use(require('express').static(require('path').join(__dirname,'public')));
const port=process.env.PORT||3000;
app.listen(port,()=>console.log('Digital Education Fund running on http://localhost:'+port));