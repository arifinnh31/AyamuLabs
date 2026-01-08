import Image from "next/image";

const testimonials = [
  {
    quote:
      "The character design I got was absolutely adorable! The chicken motif was integrated so subtly and perfectly. AyamuLabs is the best!",
    name: "Luna Skye",
    role: "VTuber",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6v9ZPejwZ5EcqmMaM9jDvQLaUhYFZn28dFGbBg62tRgSXgfzFhqx5m4oCR8mna2jEDgYFNr9NZHmNJse1_3vswqr2og-ANQ165Rm690issETD3AueNTzPwDU_Hsd17aXGC8ulXKDMiEsbDjCMkxeGtzKtewKWy5TB8BUNIxMyG75gU6LANjPGI4bdeUxwCWrECq2_cKGKIlZ2F8aI9B0wUSoxmbLDfO-9djBSDN4n8F_rmiLDjQTTUs6cUG48rp1geojR3LeCzg",
    icon: "pets",
    iconBg: "bg-primary",
  },
  {
    quote:
      "Fast turnaround and incredible quality. The AI-assisted workflow really speeds things up without losing that human touch.",
    name: "Mark D.",
    role: "Game Developer",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcoJ5TuQ29WA0PxbHlSYow-AGZ5dvamekBXkbulJqzIaPpVMp7wqn7h01MKSpEqpurnLx-x315gG9rXEoW0KCvEAgAUQRwQnZVWccsqs1g5PvZCk46KI9HNMdiqz7SMe82H14n5U9qnVbn15_EPsRMA2u7WcbsgkwsCbIEr138BS9_fTdgpKoR7mAO0JcW9NQwpCrhvpUvLjdXmRcQe1OxDlZImmnLlxZxrwnzPzFPBHAXW3Y1dRQlBVb-JoSNpl4TPfI8HNqJJQ",
    icon: "brush",
    iconBg: "bg-secondary",
  },
  {
    quote:
      "I ordered a commission for my stream overlay and it's just perfect. So cute and clean! Will definitely order again.",
    name: "Chika Fujiwara",
    role: "Content Creator",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmXpK_O6YT-85VI5VaWTBd8QJP8nrsaGfY-evvz3wAjHmXfQTy84R_ZZwTbeEKV_-JqAYG9175bacSkszLv9XdotLEzYBjIHGIXkoi8N2I13R4mJwSZojNl_nw05NW6iZR3lQM2JGlvWoYSLzyVghFrXxLu99Hd2nxQub320WtoyTl6-rPnwmsI4HlwRNReXGzwBNoFRVI40QfXik1wivNxPOWNjCbvgZkvewGB4JE1g_Zr8WsGd2bWuo1w3QRrSxSIyW-_7ebYQ",
    icon: "star",
    iconBg: "bg-yellow-400",
  },
  {
    quote:
        "The commission process was so smooth! I loved receiving updates along the way. The final result exceeded my expectations.",
        name: "Aiko Tanaka",
        role: "Illustrator",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9HfN9n85kS1XmXazT4R5a984FXadGKTqxdk_mnTQE8jDAMqrV_YNBdkEhXj2IDIMdp9WY_biJFR6Qa-PQRr5OlZNoObwW9JS6KZRVf9yxl8HFWRD5M1eqzPnHyX5jxfVnp74c0q1CQWrDsfERaNszLb3YA5TO1B-AzBIItm-WDu6Zl3j7PtGAodaumMEt66MQOweFvvB6oxS__uZnJqHoX-yE9RWwshVxVpVeiWvhbsfDbVi0b4FFZkxsL0fl3_qpSoBb2A967g", // Reusing avatar for demo
        icon: "favorite",
        iconBg: "bg-pink-400"
  },
  {
      quote: "Simply amazing! The attention to detail is fantastic. The team at AyamuLabs were super friendly and helpful.",
      name: "Ryu Ken",
      role: "Streamer",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtgDfmCjogoHfAHwOs95xEePFgWckxdN836vEUr6ROTKtghZtzhw-n46xJN3Qqo_XOFyuiO0r2DILN0--Oy54uzZcG6z9ukdbZTojBspeqRwV2igBVCbWQEBTxk7RY19z6lWoBhuSaznhZkiRQmUOzQ4OEeSdQBzMDV8IVCSoYNqZF0rdz0qEBeus2ao4E972i764wPuuBvYtnx-sXbaAjZk9KzsgJKPJE_8VSeNhRfFBqjGLOCvZtXHZVsZJ7lbBaoBvLsfDZzw", // Reusing avatar
      icon: "thumb_up",
      iconBg: "bg-blue-500"
  },
  {
      quote: "If you need cute assets, this is the place to go! Affordable prices and top-tier quality. Highly recommended!",
      name: "Sunny Day",
      role: "Youtuber",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8TwJ4K-p4EgnBZSGLWiWq54lweQlcTuHu4w_Q3b1GP7e6SpSJnPNWZFrf541x19BiTB3RmpilClSYSfDfkDW8sbvWfT7W_8_Zy9XSNE1AyYT8MZMD3GyMl2wBbI_Af33NzM2lD5YZguXtuhPxNzlxgPLVhHk-FNLAzmHl6KTuWHCSMov-gZoXqPvbnYXvJ_UptpLLMRRdtyJuV6SrKYFEpIN8b-CAZTnctci5MiRDXxYZuiObZD_eM89ArLCass5UPHIXiL1P5A", // Reusing avatar
      icon: "auto_awesome",
      iconBg: "bg-purple-500"
  }
].slice(0, 3); // Keeping to 3 as per original design for now

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary/5 dark:bg-gray-800/30 relative overflow-hidden">
      <span className="material-icons-round absolute top-10 left-10 text-9xl text-primary/10 -rotate-12 select-none">
        format_quote
      </span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-display font-bold text-4xl text-center text-gray-900 dark:text-white mb-16">
          Happy <span className="text-secondary">Customers</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative ${
                index > 0 ? (index === 1 ? "mt-8 md:mt-0" : "mt-8 lg:mt-0") : ""
              }`}
            >
              <div
                className={`absolute -top-6 left-8 ${testimonial.iconBg} p-3 rounded-xl shadow-lg`}
              >
                <span className="material-icons-round text-white">
                  {testimonial.icon}
                </span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 italic mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-3 border-2 border-primary overflow-hidden relative">
                    <Image
                        src={testimonial.avatar}
                        alt="Customer Avatar"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
