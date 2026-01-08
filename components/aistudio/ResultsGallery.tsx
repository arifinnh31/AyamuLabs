import Image from "next/image";

export default function ResultsGallery() {
  const results = [
    {
      seed: "8392104",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRSJE6x2ggxTEyZ-HVDPK_nyJg1e8yBHBoFxuffxlsTwKwXPznvXdr72w78EFBX0AeAUgZFLWQBJbNGad41fryavlnNi1aEhKc3OyX9g0SMSf4R7jZkpKpwsshuTiIv4GLYcmDmnYIW7e3F2sZ-DcnHB6APzX7C-pIGPBRoj6ZelnuzQyfvdcrhAwEaDO6wN7glLIPcsiMQLd7V8Pksukdtj4oV44xiNFz0346qlK3EiUFIJYEZMh6ISNBP0j5GPET8-s5r1cSsQ",
    },
    {
      seed: "8392105",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYrMk2W8iqe8tla1SnBKAzvEKtDdttOD1p1KnCzgHHlrgs0GrV82GZQrwUf_gVAEzjfPGZ0R4VKyjKdW5GJ1nXooNMVWQMAkAMogyWVyDXr4Kb4T-nMRhBN3mIPNpGHCYH9AFzAu_IK3WyVjxX8jluDosa_Yx_FNSpN202kGVi66hTIFyCk5VgpzN0OAwt_3UlgaMkAP2rlgS6kjtNru6Uvpe1GxpTop2wSEZ5us6sh4X7aZHFRHc-SqcAtsrz8ekCqPWomV3aOQ",
    },
    {
      seed: "8392106",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgDYpvSKmaxN8t8YWu3SjAt9cRZZheJwjLzFc7M3OpxJf-sAk5_zJMEddJL41eF0HuDkG0ZcSw15rxGt6ohjy9TwbdyxMd33UbIEWn-6i1pKkKCsQIETndwb2j3ocJ8CDKKFEkS_LjDzn2YE4hH5FKNTv90wzhR9kfxzLiQowqPdvuKCJ84GkRwlor7xlIOTUsMpY9A1DzLqB9BLXhVOvbLABg0Udy1lqbuy0BZimBwPThGtvdckgqsTDazfWp7XG8nsqJIi0twg",
    },
    {
      seed: "8392107",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9EpUap08SAILaTaOkMHzi4sLzTSP82h-olWATL72tK5_CIq1ycfaxabvrXV6I-5gf66lHu7oo0SDN9r7KMwby5k5VnPoozGBxy8K54HmWgP-IA5yhFYId7pwRTo3x_m394GmJaTN6JM5UdwC-Si2NSGYv1LON4af2aYQag7S5Qgxu5MxTUoCCoUSUmtvYcrT-K99LK8h221up9IJQLK6E0oLipXlA4yiiIXCXD98q7N4n3ca-Hq86SXFcsAyHvrrsp9abR_rGVg",
    },
  ];

  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <span className="material-icons-round text-primary">grid_view</span>{" "}
          Results
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
          Batch ID: #AY-9283
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 group relative"
          >
            <div className="aspect-square bg-gray-100 dark:bg-gray-800 relative">
              <Image
                alt={`Generated Variation ${index + 1}`}
                className="w-full h-full object-cover"
                src={result.src}
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button
                  className="bg-white/90 p-2 rounded-full hover:scale-110 transition shadow-lg text-gray-800 cursor-pointer"
                  title="Upscale"
                >
                  <span className="material-icons-round text-xl">hd</span>
                </button>
                <button
                  className="bg-white/90 p-2 rounded-full hover:scale-110 transition shadow-lg text-gray-800 cursor-pointer"
                  title="Favorite"
                >
                  <span className="material-icons-round text-xl">
                    favorite_border
                  </span>
                </button>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                Seed: {result.seed}
              </span>
              <button className="text-primary hover:text-primary-hover font-bold text-sm flex items-center gap-1 transition cursor-pointer">
                Download{" "}
                <span className="material-icons-round text-base">download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/50 rounded-lg flex items-start gap-3">
        <span className="material-icons-round text-primary mt-0.5">info</span>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <p className="font-bold mb-1">AyamuLabs Generation Policy</p>
          <p>
            These generated images are intended for ideation and reference only.
            Please ensure all final artwork follows the studio&apos;s &quot;One
            Brand, Multi-Creator&quot; guidelines and refine the output to match
            the AyamuLabs official style guide manually if used for production
            assets.
          </p>
        </div>
      </div>
    </div>
  );
}
