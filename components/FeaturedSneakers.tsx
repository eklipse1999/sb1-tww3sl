import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featuredSneakers = [
  {
    id: 1,
    name: 'Eclipse Runner',
    brand: 'EKLIPSE',
    price: 150,
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    name: 'Lunar Boost',
    brand: 'EKLIPSE',
    price: 180,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  },
  {
    id: 3,
    name: 'Shadow Classic',
    brand: 'EKLIPSE',
    price: 120,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: 4,
    name: 'Nova Glide',
    brand: 'EKLIPSE',
    price: 140,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80',
  },
];

const FeaturedSneakers = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Featured EKLIPSE Sneakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredSneakers.map((sneaker) => (
          <Card key={sneaker.id} className="overflow-hidden bg-card text-card-foreground">
            <CardContent className="p-0">
              <Image
                src={sneaker.image}
                alt={sneaker.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{sneaker.name}</h3>
                <p className="text-sm text-muted-foreground">{sneaker.brand}</p>
                <p className="text-lg font-bold mt-2 text-accent">${sneaker.price}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-secondary hover:bg-secondary/90">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSneakers;