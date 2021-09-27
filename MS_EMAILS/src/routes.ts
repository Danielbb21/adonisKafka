import {response, Router} from 'express';
import Consumer from "./kafka/Consumer";

const consumer = new Consumer({groupId: 'teste1232'});
const routes = Router();

routes.post('/send', async (request, response) => {
    const data = await consumer.consume({topic: 'teste'});


})

export default routes;