import axios from 'axios';
import fs from "fs/promises";

const filePath = "static/kaijus.json";

const kaijus = await fs.readFile(filePath, 'utf8');

export const getRandomQuote = async () => {
    try {
        const response = await axios.get("https://api.quotable.io/random");
        return response.data.content
    } catch(error) {
        return undefined
    }
}

export const getRandomKaiju = async () => {
    let array = JSON.parse(kaijus)
    return array[array.length * Math.random() | 0]
}