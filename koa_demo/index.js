"use strict";

const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
// const route = require('koa-route')
const Router = require("koa-router");
const userRouter = new Router();
const productRouter = new Router();
app.use(
  bodyParser({
    enableTypes: ["json", "text"],
  })
);

const users = {
  Kitty: {
    name: "Kitty",
    age: 3,
  },
};
userRouter.get("/user/:name", async (ctx) => {
  const { name } = ctx.params;
  console.log("name", name);
  if (users[name]) {
    ctx.body = users;
  } else {
    ctx.status = 404;
    ctx.body = `${name} not found`;
  }
});

userRouter.post("/user", async (ctx) => {
  const user = ctx.request.body;
  console.log("user", user);
  users[user.name] = user;
  ctx.status = 201; //created
  ctx.body = "Hello from post";
});

userRouter.put("/user/:name", async (ctx) => {
  const { name } = ctx.params;
  const user = ctx.request.body;
  users[name] = user;
  ctx.status = 200;
});

userRouter.delete("/user/:name", async (ctx) => {
    const {name} = ctx.params
    delete users[name]
    ctx.status = 200
});

app.use(userRouter.routes());

////product
// app.use(productRouter.get('/product', async ctx=>{
//     ctx.body = 'Hello'
// }))

// app.use(productRouter.post('/product', async ctx=>{
//     ctx.body = 'Hello from post'
// }))

// app.use(productRouter.routes())
// app.use(async (ctx,next)=>{
//     ctx.body = 'hello'
//     // console.log('hhhhhh',ctx.header)
//     // console.log(ctx.request.body)
//     // if(ctx.method ==='GET'){
//     //     ctx.set('cache-control', 'max-age=100')
//     // }
//     // await next()
//     // ctx.body += '!'
//     // });
// // app.use(async (ctx,next)=>{
// // ctx.body = `${ctx.text} , word`
// });

app.listen(3000);
