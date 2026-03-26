import express from 'express';
import type { Request, Response } from 'express'

const rides = express.Router();

const jslist = {
    "cities": [
        { "name": "Tokyo", "country": "Japan" },
        { "name": "Jakarta", "country": "Indonesia" },
        { "name": "Delhi", "country": "India" },
        { "name": "Guangzhou", "country": "China" },
        { "name": "Mumbai", "country": "India" },
        { "name": "Manila", "country": "Philippines" },
        { "name": "Shanghai", "country": "China" },
        { "name": "São Paulo", "country": "Brazil" },
        { "name": "Seoul", "country": "South Korea" },
        { "name": "Mexico City", "country": "Mexico" },
        { "name": "Kolkata", "country": "India" },
        { "name": "Cairo", "country": "Egypt" },
        { "name": "Karachi", "country": "Pakistan" },
        { "name": "Dhaka", "country": "Bangladesh" },
        { "name": "New York City", "country": "USA" },
        { "name": "Beijing", "country": "China" },
        { "name": "Bangkok", "country": "Thailand" },
        { "name": "Shenzhen", "country": "China" },
        { "name": "Moscow", "country": "Russia" },
        { "name": "Buenos Aires", "country": "Argentina" },
        { "name": "Lagos", "country": "Nigeria" },
        { "name": "Bangalore", "country": "India" },
        { "name": "Ho Chi Minh City", "country": "Vietnam" },
        { "name": "Los Angeles", "country": "USA" },
        { "name": "Paris", "country": "France" },
        { "name": "London", "country": "United Kingdom" }
    ]
}


rides.get('/', (req: Request, res: Response) => {
    res.json(jslist);
})

export default rides