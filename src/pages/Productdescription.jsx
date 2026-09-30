import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Itemlist from './Items'

const Productdescription = () => {
  const { id } = useParams()
  const [showModal, setShowModal] = useState(false)
  const item = Itemlist.find((product) => String(product.id) === String(id))

  if (!item) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-2 text-gray-600">This item may have been removed or the link is incorrect.</p>
        <Link to="/Shop" className="mt-5 rounded-full bg-green-600 px-5 py-3 font-semibold text-white">Back to shop</Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl bg-gray-100">
          <img className="h-72 w-full object-cover sm:h-96" src={item.itemImg1} alt={item.pname} />
        </div>
        <section>
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">Fresh selection</p>
          <h1 className="mt-3 text-3xl font-extrabold uppercase text-gray-900 md:text-4xl">{item.pname}</h1>
          <p className="mt-4 leading-7 text-gray-600">{item.desc}</p>
          <p className="mt-6 text-3xl font-bold text-gray-900">{item.price}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => setShowModal(true)} className="rounded-full bg-yellow-500 px-6 py-3 font-bold text-white transition hover:bg-yellow-600">Add to Cart</button>
            <Link to="/Login" className="rounded-full bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700">Buy now</Link>
          </div>
        </section>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="presentation" onClick={() => setShowModal(false)}>
          <section role="dialog" aria-modal="true" aria-labelledby="order-title" className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <h2 id="order-title" className="text-xl font-bold text-gray-900">Add item to cart?</h2>
            <p className="mt-2 text-gray-600">Cart functionality is not connected yet. You can continue to sign in to place an order.</p>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="rounded-full border border-gray-300 px-5 py-2 font-semibold text-gray-700">Close</button>
              <Link to="/Login" onClick={() => setShowModal(false)} className="rounded-full bg-green-600 px-5 py-2 font-semibold text-white">Sign in</Link>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}

export default Productdescription
