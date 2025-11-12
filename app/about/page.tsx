import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-amber-50">
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl text-amber-900 mb-8">Tentang Kami</h1>
        <p className="font-open-sans text-lg text-amber-900 mb-12 text-balance leading-relaxed">
          Kami percaya setiap biji kopi memiliki cerita — dari tanah, tangan, hingga cangkir Anda.
        </p>
      </section>
        {/* Location */}
        <section className="max-w-4xl mx-auto px-4 py-6 text-center">
          <h2 className="font-playfair text-2xl text-amber-900 mb-2">Lokasi</h2>
          <p className="font-open-sans text-amber-900">Jl. Gading 12 No. 12, Komplek TNI AL, Kelapa Gading Barat, Jakarta Utara 14240</p>

          <div className="mt-4">
            <div className="w-full rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Kuphi Location"
                src="https://www.google.com/maps?q=Jl.+Gading+12+No.+12,+Komplek+TNI+AL,+Kelapa+Gading+Barat,+Jakarta+Utara+14240&output=embed"
                className="w-full h-[360px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      {/* Decorative Coffee Beans Background */}
      <div className="relative h-64 opacity-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coffee-qDDnjyQFqu4EU5aJnd5hbDOH3jb5oS.jpg"
          alt="Coffee Beans"
          fill
          className="object-cover"
        />
      </div>
    </main>
  )
}
