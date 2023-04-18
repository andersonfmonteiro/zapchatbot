// => Chmando a lib que vai permitir criar o chatbot
const { Client } = require('whatsapp-web.js');

// ==> Chmando o gerador de Qrcodes
const qrcode = require('qrcode-terminal');

//guardando whatsapp na const cliente
const client = new Client({
    //authStrategy: new LocalAuth(),
})

//Gerando o qrcode
client.on('qr', qr => {
    qrcode.generate(qr, { small: true })
});

client.on('ready', () => {
    console.log('deu tudo certo! estamos conectados...')
});

client.initialize();

var nome = 'vyx99&&8*'

client.on('message', async message => {
    const contact = await message.getContact();

    if(message.body === 'Quero fazer um pedido') {
        message.reply('Ola tudo bem?');
        client.sendMessage(message.from,'Antes de começarmos, qual o seu nome?');
    }
    else if(message.body !== null && message.body !='Quero fazer um pedido' && nome==='vyx99&&8*' ) {
       nome = message.body;
        console.log(nome)
        client.sendMessage(message.from,`Ola ${nome}, seja bem vindo a nossa loja! Segue as opções:`)
        client.sendMessage(message.from, '1 - Fazer Pedido \n2 - Acompanhar Pedido \n3 - Ver Menu \n4 - Falar com um Atendente');    
    } 
    else if(message.body !== null && message.body === '1') {
        client.sendMessage(message.from, '1.1 - Pizza \n2.1 - Bebidas \n3.1 - Sobremesas \n0 - voltar par o menu inicial'); 
    }
    else if (message.body !== null && message.body === '1.1') {
        client.sendMessage(message.from, '1.1.1 - Frango \n1.1.2 - Palmito \n1.1.3 - Vegetariana \n0 - voltar par o menu inicial');
    }
    else if (message.body !== null && message.body === '0') {
        client.sendMessage(message.from, '1 - Fazer Pedido \n2 - Acompanhar Pedido \n3 - Ver Menu \n4 - Falar com um Atendente');
    }
    else if (message.body !== nukk && message.body === "4"){
        setTimeout(function(){
            message.reply(`${contact.number} seu contato já foi encaminhado para um dos nossos atendentes`);
            client.sendMessage('5595981212161@c.us',`Cliente esperando contato: https://wa.me ${contact.number}`);
        }, 1000 + Math.floor(Math.random() * 1000));
    }
});