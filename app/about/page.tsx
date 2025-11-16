import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-amber-50">
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        {/* Judul */}
        <h1 className="font-playfair text-4xl md:text-5xl text-amber-900 mb-8">
          Tentang Kami
        </h1>

        {/* Tagline singkat */}
        <p className="font-open-sans text-lg text-amber-900 mb-10 leading-relaxed">
          Kami percaya setiap biji kopi memiliki cerita — dari tanah, tangan, hingga cangkir Anda.
        </p>

        {/* ================ CARD PROFIL KUPHI (DI ATAS MAPS) ================ */}
        <div className="bg-amber-100 border border-amber-200 shadow-lg rounded-xl p-6 mb-10 text-left">
          <h2 className="font-playfair text-2xl text-amber-900 mb-3">
            Profil Kuphi Coffee
          </h2>
          <p className="font-open-sans text-amber-900 leading-relaxed">
            Awal saya mendirikan usaha ini adalah ketika saya terpaksa resign setelah selama enam tahun
            bekerja di bank karena mengalami cedera meniskus yang mengharuskan saya menjalani operasi.
            Selama masa pemulihan, muncul ide untuk membangun usaha sendiri. Berawal dari kecintaan saya
            terhadap kopi dan kebiasaan meracik kopi sendiri, saya akhirnya memberanikan diri membuka
            usaha ini. Nama “Kuphi” sendiri berasal dari cara saya menyebut kata “kopi” saat bercanda
            dengan teman-teman di kantor. Karena terdengar unik dan khas, akhirnya saya memilih nama
            tersebut untuk brand saya. Saat ini usaha Kuphi Coffee masih dijalankan secara online dari rumah.
          </p>
        </div>

        {/* ===================== LOKASI & MAPS ===================== */}
        <h2 className="font-playfair text-2xl md:text-3xl text-amber-900 mb-4">
          Lokasi Kami
        </h2>

        <p className="font-open-sans text-lg text-amber-900 mb-4">
          JL. Gading 9 No. 12, Komplek TNI AL, Kelapa Gading Barat, Jakarta Utara 14240
        </p>

        <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5250071029803!2d106.89356177423228!3d-6.193816393800119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f54da3d5e1c7%3A0xbac4f9ef6ed9a421!2sJl.%20Gading%209%2C%20RT.7%2FRW.9%2C%20Klapa%20Gading%20Barat%2C%20Kec.%20Klpa%20Gading%2C%20Jkt%20Utara%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2014240!5e0!3m2!1sen!2sid!4v1700152500000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Jl+Gading+9+No+12+Komplek+TNI+AL+Kelapa+Gading+Barat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-700 hover:underline mb-12 block"
        >
          Buka di Google Maps
        </a>
      </section>

      {/* Aksen background bawah */}
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
