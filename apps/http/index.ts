import express from "express";
import { prismaClient } from "@repo/db/client";
import { password } from "bun";

const app = express();

app.get('/', async (req, res) => {
   const users =  await prismaClient.user.findMany();
   res.send(JSON.stringify(users));
})

app.post('/', async (req, res) => {
    const user = await prismaClient.user.create({
        data: {
            name: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.send(JSON.stringify(user))
})

app.listen(8080, () => {
    console.log("Server is running on port 8000");
})