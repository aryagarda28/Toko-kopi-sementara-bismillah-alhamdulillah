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

      {/* Business profile card */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-amber-50/80 rounded-lg shadow-md p-6 md:p-8 border border-amber-100">
          <h2 className="font-playfair text-2xl text-amber-900 mb-3">Profil Usaha</h2>
          <p className="font-open-sans text-amber-900 leading-relaxed whitespace-pre-line">
            {`Awal saya mendirikan usaha ini dikarenakan saya terpaksa resign setelah selama 6 tahun saya bekerja di bank karena mengalami cedera meniskus yang mengharuskan saya menjalani operasi. Selama masa pemulihan muncul ide untuk membangun usaha ini. Berawal dari kecintaan saya terhadap kopi dan kebiasaan meracik sendiri, saya akhirnya memberanikan diri membuka usaha ini.

Nama “Kuphi” sendiri berasal dari cara saya menyebut kata ‘kopi’ saat bercanda dengan teman-teman di kantor. Karena terdengar unik dan khas, akhirnya saya memilih nama itu untuk brand saya. Saat ini usaha masih dijalankan secara online dari rumah.`}
          </p>
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
