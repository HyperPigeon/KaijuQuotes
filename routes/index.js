import axios from 'axios';
import { getRandomQuote, getRandomKaiju } from '../helpers.js'; 

const constructorMethod = (app) => {

  app.use("/", async (req, res) => {
    const quote = await getRandomQuote();
    const kaiju = await getRandomKaiju();
    if (quote) {
        res.render("homepage", {
          title: "Kaiju Quotes",
          content: `${quote}`,
          picture: kaiju["image"],
          name: kaiju["name"]
      });
    }
    else {
      res.render("homepage", {
        title: "Kaiju Quotes",
        content: "It is better to conquer yourself than to win a thousand battles.",
        picture: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/screenrant-sandbox-29.jpg",
        name: "Godzilla"
    });
    }

  });
};

export default constructorMethod;