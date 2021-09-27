import Express from "express";
import Consumer from "./kafka/Consumer";

const consumer = new Consumer({groupId: 'teste1232'});
consumer.consume({topic: 'teste'});
consumer.consume({topic: 'teste456'})
const app = Express();

app.use(Express.json());

app.listen(3000, () => {
    console.log('Server running');
});
