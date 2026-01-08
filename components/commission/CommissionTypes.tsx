import Image from "next/image";

const commissionTypes = [
  {
    title: "Icon / Headshot",
    description: "Perfect for social media profiles and discord avatars. High impact, expressive faces.",
    price: "$35",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDo2M5ZuYwM8wLvgekT5ijJyrKMKNwANn7aWjr0dAPFHgyDctMCGsVdzdk5BPoNceAEZyTbfyLQUyUY5GSuSDXd-bzbta2ivS7JVH1OOA3GrAd4wLvRrNGkFNfTPyrqUBaWfNFHdjICyIbAVVTH-jJGizeLRg4ZLPTeXMkmF2bwohUxlf6Vtdu_4ZNtLJ1LkkRV0TZLQEj312S3ZS2xBsm9LbjW6Eg9DV4vaiq9pgOQlxN-do526kD4qyBesXsI9vBJz3GyHibZw",
    badge: "Popular",
    badgeColor: "bg-white/90 dark:bg-black/70",
  },
  {
    title: "Bust-up",
    description: "Focus on the character's expression and upper outfit details. Great for character sheets.",
    price: "$55",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTMcHcuTTVbX_mnRbe0Hmg_u120qvmm_ydZcVftyFkHu8dJXqevBh2xfTHK_Nd-PZtppDsSoA-TNeMqZ7-IpOdMtQsG-nGGgpeDkI-VlCfH27wZHUcARI3ozC5uSrfoXGJMw0OnIdypfmP04AZHcPHf5Z5L9TeTt-CPVYUfjIhrYMCXAqu4GUdT1JpU348XEk_szOa4hJtF_fHdC4BH9T4GY3ROBQFLODdkMaUd7JZusIkP-2VSz9LvcGtLGbkUcCEjeyKuqn3aQ",
  },
  {
    title: "Half-body",
    description: "Waist-up illustration allowing for dynamic poses and hand gestures.",
    price: "$80",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBls6P_QbJqFy4j5edpUYWzB0wiIE8LNAn3xJfkfeXxhjbcAv5PFecZkANwQqWD1bZgKybIY4z2jcynaoCN4WrZsPdLOoVOZe5WQdX47VdG1O1wPqILsiW9rSjfI_4cnhZ2GSLr-Umj-qPHFGywoYfafLr4SsHeRJk4b9hPNY0qGAE6-JtOpk-0i9rdg8_i8NlYwkIaC9aiXQfITkZADcp_cQaV3wGcu2lYxjlOTqEWEmu1RTIRHTTb0jynXf-M6NGG2SLyL1rH4w",
  },
  {
    title: "Full-body",
    description: "The complete character design from head to toe. Ideal for key visuals.",
    price: "$120",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC751n43XE72HTavmyIFUgd_ZnPFhMmuHvgRlRKZLfqB83ypVNkmWQ6qd8bk0Ti9S3-pLcBAhs5z9zRqm56G63-Otm3CB4J0rvto4L7AdN7VvmpGg5oHRtPdKOXe0jr4-Bkd7AL_PE6F8C3nnr01drOmTOKXqt8F6TO_fAXYtn1h5yPu1VmnHtdZF3QWrhLkJHu8-7deGpLjqyIASbfwL23gLPdjtJrqjAt4qOZNO3nXjjvHNgyAsSKkP7E9EdypZ3QKeQ_MWhdOA",
  },
  {
    title: "Live2D Model Art",
    description: "Ready-to-rig PSD file with separated layers for VTubing.",
    price: "$450",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA81XJsKWqiWlt-VAMFFogwbdFDDg6U1xdWd4c0ydj4o8PeS2C3OoSj7NvA2Byt1nznvXD_inAV3TldLLJ2RFbGwjpAh5E7JaCCrGQpff2VvREf4-GaZjYPIdasMFyEYjc6AbCTUw0JqJzVkWNnueVyhul-kHEBkiTAKzNvQY2IG-TuxgfmHh4S-5bEYF-iABCM10j18wpMRedI-VpDp8-f8KGZn4vaodJX1TQJ8vfiD1MhPz4udpTmcMD-Y38xADHGJNTNkUx-_A",
    highlight: true,
    badge: "Top Tier",
    badgeColor: "bg-linear-to-r from-purple-500 to-primary text-white",
  },
  {
    title: "Background Art",
    description: "Scenery, rooms, or fantasy landscapes to complement your characters.",
    price: "$100",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7wPFVOWrpeMoxrh6E6_iBwEAv6RdI-7DV1ll6aJ6C5kEP5qv-l3ALWqrfHCoUjHbuUuEYfMUgOfzF7jpIS44kCnvm2krKy-DFZTuPUzOLd8d0rdwfMQKEDeS-2C4-OGNFasneD9JlK8GNUljFpa6gf1Zh0RAhZw-YWFWFIEW0Li0K1E2W2pOhZfKrjtRZ4uBlUzoMYOxCWSeJGTXNbvNkaaAYgstiidLUTMjzHM1DG5vH9Qc5I0pFEkNerYzLM8fvcTFciqEgRw",
  },
];

type CommissionTypesProps = {
  onOpenModal: () => void;
};

export default function CommissionTypes({
  onOpenModal,
}: CommissionTypesProps) {
  return (
    <section className="py-20" id="direct-order">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Direct From Studio
          </span>
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mt-2 mb-4">
            Choose Your Commission Type
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Select a category below to see details and pricing. Direct orders
            allow for more customization and direct communication with our team.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {commissionTypes.map((type, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col ${
                type.highlight ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <div
                className={`h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 relative`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={type.image}
                    alt={`${type.title} Commission`}
                    fill
                    className="object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                {type.badge && (
                  <div
                    className={`absolute top-4 right-4 ${type.badgeColor} px-3 py-1 rounded-full text-xs font-bold ${
                        !type.highlight ? "text-gray-800 dark:text-white backdrop-blur" : ""
                    }`}
                  >
                    {type.badge}
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-1">
                  {type.description}
                </p>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-xs text-gray-400 uppercase font-semibold">
                      Starting at
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      {type.price}
                    </span>
                  </div>
                  <button className="w-full py-2.5 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-linear-to-r from-primary to-secondary rounded-full shadow-2xl">
            <button
              onClick={onOpenModal}
              className="px-12 py-5 bg-white dark:bg-surface-dark rounded-full text-xl font-bold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-3"
            >
              <span>Ready to order?</span>
              <span className="text-primary">Place Custom Direct Order</span>
              <span className="material-icons-round text-primary">
                arrow_forward
              </span>
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            By placing an order, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
}
