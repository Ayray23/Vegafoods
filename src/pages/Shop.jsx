import { Link } from "react-router-dom";
import Itemlist from './Items';

const Shop = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <header className="mx-auto mb-10 max-w-2xl text-center">
        <p className="font-semibold uppercase tracking-widest text-green-600">Featured products</p>
        <h1 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">Our Products</h1>
        <p className="mt-3 leading-7 text-gray-500">Explore the selection and find something delicious for your next meal.</p>
      </header>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-label="Products">
        {Itemlist.map((item) => (
          <article key={item.id} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative overflow-hidden bg-gray-100">
              <img src={item.itemImg1} alt={item.pname} loading="lazy" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute left-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">{item.discount} off</span>
            </div>
            <div className="p-5 text-center">
              <h2 className="min-h-12 font-bold uppercase tracking-wide text-gray-800">{item.pname}</h2>
              <div className="mt-2 flex items-center justify-center gap-3">
                <span className="text-lg font-extrabold text-gray-900">{item.price}</span>
                <span className="text-sm text-gray-400 line-through">{item.priceSlash}</span>
              </div>
              <Link to={`/Productdescription/${item.id}`} className="mt-5 inline-flex rounded-full bg-green-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">View details</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Shop;
