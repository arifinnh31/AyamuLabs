import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Morning Egg Hug",
    category: "Illustration",
    date: "2 days ago",
    author: "Artist Yuu",
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8TwJ4K-p4EgnBZSGLWiWq54lweQlcTuHu4w_Q3b1GP7e6SpSJnPNWZFrf541x19BiTB3RmpilClSYSfDfkDW8sbvWfT7W_8_Zy9XSNE1AyYT8MZMD3GyMl2wBbI_Af33NzM2lD5YZguXtuhPxNzlxgPLVhHk-FNLAzmHl6KTuWHCSMov-gZoXqPvbnYXvJ_UptpLLMRRdtyJuV6SrKYFEpIN8b-CAZTnctci5MiRDXxYZuiObZD_eM89ArLCass5UPHIXiL1P5A",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcKKSm8lFpnqrvA-O05WalfGoQb77np0HQPkno417dIxnxfr7n3R5rdQihqWRH-_wrV_6b3AiC7yik-z6JcdP-E4WOc3IO1fBWENw4NedOOYoBmZrF6Vd9hWqUtASaW29xwQmQNVKELiMk4SY1mYX3z6PlpWr-beqT8HoKXefKJgJ4AY7nb2KEr8Pg_fv2UHzFXZ3ACdSHOtEKhSuxFbEJnjM31eZ2e1EvuaYqyvMzVreFrYc9hy63A8RDs8_FZLmOmbJkjHVOXQ",
    tagColor: "text-primary bg-primary/10",
  },
  {
    title: "Gamer Chick Emote Set",
    category: "Emotes",
    date: "1 week ago",
    author: "Artist Ken",
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9HfN9n85kS1XmXazT4R5a984FXadGKTqxdk_mnTQE8jDAMqrV_YNBdkEhXj2IDIMdp9WY_biJFR6Qa-PQRr5OlZNoObwW9JS6KZRVf9yxl8HFWRD5M1eqzPnHyX5jxfVnp74c0q1CQWrDsfERaNszLb3YA5TO1B-AzBIItm-WDu6Zl3j7PtGAodaumMEt66MQOweFvvB6oxS__uZnJqHoX-yE9RWwshVxVpVeiWvhbsfDbVi0b4FFZkxsL0fl3_qpSoBb2A967g",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuS_gML4UXt0o8KwOIU607n9wT2zHCUBEz6Bp52OFubv_vJpteKVtokdRVrQRMIz_ANslDNCskXKcFwNLnVGY7hNXl6LcykMI3uzKXjUKbVj7izjd_hQiGrSVDws44uRMtn21w7-kr0GoBnF1dzj6lF5QyylkIT_AiNowaG_3t9m_72aFv3oSSdTDvhCk6vogjpys4L4EX8XOxn0swbXJjHsfWfaLUC2Amy_DBWkhS1X9rJRX0xoC7FVH_CpwV_FEzKjhxbhpnrA",
    tagColor: "text-secondary bg-secondary/10",
  },
  {
    title: "Warrior Hen VTuber",
    category: "Live2D",
    date: "Just now",
    author: "Artist Sarah",
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtgDfmCjogoHfAHwOs95xEePFgWckxdN836vEUr6ROTKtghZtzhw-n46xJN3Qqo_XOFyuiO0r2DILN0--Oy54uzZcG6z9ukdbZTojBspeqRwV2igBVCbWQEBTxk7RY19z6lWoBhuSaznhZkiRQmUOzQ4OEeSdQBzMDV8IVCSoYNqZF0rdz0qEBeus2ao4E972i764wPuuBvYtnx-sXbaAjZk9KzsgJKPJE_8VSeNhRfFBqjGLOCvZtXHZVsZJ7lbBaoBvLsfDZzw",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbMdks8ttFQM3-3zlrPtNKfp1yGYiFK6pC2V8yLdPyKtsPDjP2565-k4vlbkizSKpPn0QWD61U_u-tq3CtrYqHdnPh8Nj8IFObyO4Tl5k5GWNcknOH3ykaQWVOQZZoEJCl1305mzRJyO_k1jYYCcUuCXTYu2Da-gMfRabUy1HtyoV2ZUi4xMMoj_Jx-_-s3eLdV4qSreHZn5mtBDQqL2ZW2HvaYYgpz9mzCaIYhiVqhVQAFmYlRLOveylQIPlOEZomnUF03CnMdw",
    tagColor: "text-blue-500 bg-blue-100 dark:bg-blue-900/30",
  },
];

export default function Portfolio() {
  return (
    <section
      className="py-20 bg-white dark:bg-surface-dark rounded-t-3xl shadow-inner relative"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-4">
            Featured <span className="text-primary">Clucks</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our gallery of freshly hatched artworks, crafted with love
            and a sprinkle of AI magic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-4/3">
                <Image
                  src={item.image}
                  alt={`Character Art: ${item.title}`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider ${item.tagColor}`}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image
                      src={item.authorAvatar}
                      alt="Artist Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    By {item.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-primary font-bold hover:text-yellow-600 transition-colors"
          >
            <span>View Full Gallery</span>
            <span className="material-icons-round">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
