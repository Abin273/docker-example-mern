const express = require("express");
const redis = require("redis")
const session = require("express-session")
const RedisStore = require("connect-redis").default;

const { connectDB } = require("./config/db");
const dressRouter = require('./routes/dressRoutes')
const userRouter = require("./routes/userRoutes");
const { REDIS_URL, REDIS_PORT, SESSION_SECRET } = require("./config/config");


const app = express();

let redisClient;
(
	async()=>{
		try {
			//Configure redis client
			redisClient = redis.createClient({
				url: `redis://${REDIS_URL}:${REDIS_PORT}`
			})
			redisClient.on("connect", ()=> console.log("Redis client connected..........."))
			await redisClient.connect()
		} catch (error) {
			console.log("error redis occured: ", error);	
		}
	}
)()

// Initialize store.
let redisStore = new RedisStore({ client: redisClient })

connectDB();

app.use(session({
	store: redisStore,
	secret: SESSION_SECRET,
	cookie: {
        secure: false, // if true only transmit cookie over https
		resave: false,
		saveUninitialized: false,
        httpOnly: true, // if true prevent client side JS from reading the cookie 
        maxAge: 30000 // session max age in miliseconds // 30000 ms = 30 s
    }
}))

app.use(express.json()) // parse req body

app.get("/", (req, res) => {
	console.log("hi");
	res.send("Hello ddd World123");
});

app.use("/api/v1/dresses", dressRouter);
app.use("/api/v1/users", userRouter);


PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
