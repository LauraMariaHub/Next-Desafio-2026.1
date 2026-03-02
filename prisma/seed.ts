import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
await prisma.product.deleteMany();

const products = [
    {
      text: 'Sérum Blue Hydra',
      description: 'Potente concentrado de ácido hialurônico que devolve a elasticidade e o brilho natural da pele.',
      price: 98.00,
      imageUrl: '/produtos/SerumHydraItBlue.png',
      isBestSeller: true,
      createdAt: new Date(),
    },
    {
      text: 'Gel de Limpeza Deep Sea',
      description: 'Limpeza profunda com minerais marinhos que remove a oleosidade sem agredir a barreira cutânea.',
      price: 42.90,
      imageUrl: '/produtos/GeldeLimpezaItBlue.png',
      isBestSeller: true,
      createdAt: new Date(),
    },
    {
      text: 'Bruma Energizante',
      description: 'Refrescância instantânea para qualquer hora do dia. Hidrata e fixa a maquilhagem com leveza.',
      price: 55.00,
      imageUrl: '/produtos/BrumaItBlue.png',
      isBestSeller: false,
      createdAt: new Date(),
    },
    {
      text: 'Creme Aqua Defense',
      description: 'Barreira protetora contra a poluição urbana e luz azul, com textura em gel de rápida absorção.',
      price: 84.90,
      imageUrl: '/produtos/CremeItBlue.png',
      isBestSeller: true,
      createdAt: new Date(),
    },
    {
      text: 'Máscara de Reparação Noturna',
      description: 'Tratamento intensivo que regenera a pele durante o sono, acordando com um aspeto descansado.',
      price: 115.00,
      imageUrl: '/produtos/ReparacaoNoturnaItBlue.png',
      isBestSeller: true,
      createdAt: new Date(),
    },
    {
      text: 'Tónico Purificante Ocean',
      description: 'Equilibra o pH da pele e minimiza a aparência dos poros com extratos botânicos.',
      price: 48.00,
      imageUrl: '/produtos/TonicoItBlue.png',
      isBestSeller: false,
      createdAt: new Date(),
    },
    {
      text: 'Óleo Facial Glow Drop',
      description: 'Mistura de óleos leves que nutrem profundamente, ideal para massagem facial e hidratação extra.',
      price: 120.00,
      imageUrl: '/produtos/OleoItBlue.png',
      isBestSeller: false,
      createdAt: new Date(),
    },
    {
      text: 'Esfoliante Blue Sugar',
      description: 'Esfoliação suave com cristais biodegradáveis que revelam uma pele nova e macia.',
      price: 62.90,
      imageUrl: '/produtos/EsfolianteBlueSugarItBlue.png',
      isBestSeller: true,
      createdAt: new Date(),
    },
    {
      text: 'Balm Labial de Hidratação Máxima',
      description: 'Proteção e reparação para lábios secos com manteiga de karité e um toque de menta.',
      price: 29.90,
      imageUrl: '/produtos/BalmLabialItBlue.png',
      isBestSeller: false,
      createdAt: new Date(),
    },
    {
      text: 'Sérum Rejuvenescedor Retinol Blue',
      description: 'Fórmula avançada para reduzir rugas e uniformizar o tom da pele de forma segura.',
      price: 139.00,
      imageUrl: '/produtos/SerumRejuvenescedorItBlue.png',
      isBestSeller: true,
      createdAt: new Date(),
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });