import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Hubungi Kami
      </h1>
      <p className="text-gray-400 text-center max-w-xl mb-10">
        Kami adalah tim pecinta film yang siap menjawab pertanyaan, masukan,
        atau kerja sama dari Anda. Jangan ragu untuk menghubungi kami!
      </p>

      <div className="space-y-4 text-center">
        <p>
          Email:{" "}
          <a
            href="mailto:kontak@webfilm.com"
            className="text-blue-400 hover:underline">
            CineMax@Gmail.com
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a
            href="https://instagram.com/webfilm"
            target="_blank"
            className="text-blue-400 hover:underline">
            @Cinemax
          </a>
        </p>
        <p>Alamat: Jl. Film Raya No. 123, Jakarta</p>
      </div>

      <Link
        href="/"
        className="mt-10 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default Contact;
