type OrderPageProps = {
  params: {
    slug: string;
  };
};

export default function OrderPage({ params }: OrderPageProps) {
  return (
    <main className="flex flex-col gap-4">
      <h1>Order {params.slug}</h1>
    </main>
  );
}
