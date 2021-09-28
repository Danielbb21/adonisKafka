import { Kafka, Consumer as KafkaConsumer } from "kafkajs";


interface IConsumer {
    groupId: string;
}

interface IConsume {
    topic: string;

}
const host = '127.0.0.1';

export default class Consumer {
    private consumer: KafkaConsumer;
    constructor({ groupId }: IConsumer) {
        const kafka = new Kafka({
            brokers: [`localhost:9092`],
            
        })  
        this.consumer = kafka.consumer({groupId});

    }

    public async consume({topic}: IConsume){
        await this.consumer.connect();
        await this.consumer.subscribe({topic});
        console.log(`Consumming topic ${topic}`);
        await this.consumer.run({
            eachMessage: async({topic, partition, message}) => {
                
                    const data =  JSON.parse(message.value!.toString());
                    const {user, bets, admins} = data;
                    console.log(user, bets, admins);
                
            }
        })
    }
}