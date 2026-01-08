import Image from "next/image";
import KanbanColumn from "./KanbanColumn";

export default function KanbanBoard() {
  const incomingCards = [
    {
      id: "#ORD-2941",
      title: "Chibi Character Design",
      price: 150,
      tags: [
        {
          label: "Illustration",
          color:
            "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300",
        },
        {
          label: "Priority",
          color:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
        },
      ],
      status: "incoming",
    },
    {
      id: "#ORD-2942",
      title: "VTuber Model Rigging",
      price: 800,
      borderColor: "border-l-blue-400",
      tags: [
        {
          label: "Live2D",
          color:
            "bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300",
        },
      ],
      status: "incoming",
    },
    {
      id: "#ORD-2945",
      title: "Background Art - SciFi",
      price: 200,
      tags: [
        {
          label: "Env Art",
          color:
            "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300",
        },
      ],
      status: "incoming",
    },
  ];

  const paidCards = [
    {
      id: "#ORD-2938",
      title: "Custom Discord Emotes",
      description: "Pack of 5 emotes. Chicken themed but moody.",
      tags: [
        {
          label: "Emotes",
          color:
            "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300",
        },
      ],
      status: "paid",
    },
    {
      id: "#ORD-2935",
      title: "Fanart - Genshin Impact",
      tags: [
        {
          label: "Illustration",
          color:
            "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300",
        },
      ],
      status: "paid",
    },
  ];

  const inProgressCards = [
    {
      id: "#ORD-2920",
      title: "LoRA Training - Style A",
      progress: 70,
      tags: [
        {
          label: "AI Model",
          color:
            "bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-300",
        },
      ],
      status: "in_progress",
      assignee:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-vyC7fVf9MZl2nxiCXn3bZ03cbL9P3ACc3r14j0Vi0xiOQKDXQrYfMarLE_4f48WEJMmp73fkQrF9qBQId5Dwxu6Z58_zDhucBwQxStaTgqm_6fPkseS83LhuLQ7WLg0jy6poMK3qhM5tQjyeTXDxW3_fxtsg0E0pl4Et03zYaVNn8PcRHfIciQQUdGrFp-m8fR7AD2_oz4vp-RsnaVhL7S1ElTq0H1O3sY9rgcwsykXSZEMV7GdSWZkET3kBtPWXMjgU2GQjDA",
      timeLeft: "2d left",
    },
    {
      id: "#ORD-2925",
      title: "Sketch Commission",
      progress: 30,
      tags: [
        {
          label: "Illustration",
          color:
            "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300",
        },
      ],
      status: "in_progress",
      assignee:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD20WQ_v_glUmW87RvDvcqRtWiUobwV9aVGEeHepBoDgfxFyLTiK7gGQqZbV9Cf9KdMrZGIMclXesE5-1o-KskrXwWKkxC_Y8-5nFVkeoGH5_IOigTKY8PK20jqDaQYgpi5HeozznOU-P_WiMM0xf4f5pwU2UgGM6I3OQbQIgb-r8S1cwf8qNmUxfHtSTM4z02-IgCcVOjL38Nq2bZMIRdT4GM5aIczGTwscCiys0nr1POJsopcrbnOVO8-XWVY3YKo2YAohaYtJA",
      timeLeft: "4d left",
    },
  ];

  const doneCards = [
    {
      id: "#ORD-2910",
      title: "Character Sheet - OC",
      tags: [],
      status: "done",
      assignee:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBKDW7z9-idnhzx8mNSg4z5uXR2NLO4VWYw0rxgs0xaZ4Q7K8ccE_rAnMpNwiaQ4skxEZ9r9P1-UPq2HvieT-vYhRt_7u4OVVX4PGwMFHTQ9Oa-aEG8dO3JUpd8_9VWnKtTD9x0eSuezXjcTANa9bP1agjly6D93xasJChOSkwwOOt_17rOZrREbVD8eznI13Ag5MlQcwwkKXczxvDiA14UXkv7npDqdrVpdw9mup6jnU2Ufty1L84KYzfwbR_2vxVHHkN5PXcdIQ",
      timeLeft: "2d ago",
    },
    {
      id: "#ORD-2905",
      title: "Twitch Overlay Pack",
      tags: [],
      status: "done",
      assignee:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCvj0WPzqcWxro_hkJtmt0BZNuVQrGBrwl-cw4tjnhU3kqAB5VIma68N56OZ44fv8pImHX47ifq21KE-cgusl_b4PK3UK4piJ0qsD6_Hvv-X-cUywOv5nnxDotnPHTuSLZ3RrF7SXxa2zgSwWzaDQXdsLspbwqwE8dXu8o5aKTJ_iZvOpxT2hgWsh5v79O_AaDwZYfx_Iy8em9-nHu2XJw7hKHDOqGOiD5MdajjmFaNLZ_--6i7Iwbu7z3ns3_5LrXBbsku2JRmsQ",
      timeLeft: "1w ago",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage commissions and internal AI-assisted tasks.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2 mr-2">
            <Image
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUqzVlwBokxDscBGIbn7yorJ4JYmrJJHAPH61yVms8RhGvB24nJJgRwyWJLJresUzxS5kTMQMm9-ojGQRLkRJHBrctROuX3rrPm6cPF-H0_B3J7wX-u8xufLVo39Wr55MIPlgKdr1pMUoG1R4ISmpSVRDaOLp8HffP7mzEhpP6Ic2-vPq_c6KGCY7qFLTWhEXA4tCuJo8BysLzIdcJaEZP583FpvuzQphVzDSrzcg8Y5sSm9Uq84EmtQ-Mu1aIRV2aOcWTUgBGig"
              width={32}
              height={32}
            />
            <Image
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY35ns0pTHSnlpg29DIxd_PjToiU8ekNC_VVKELe49eE8DCnbhRocbS3WgBA-HbXLNMneRWhjs2BC5X9_FyClZqfrXF2M-qRTYpVDcsqwqUnkx_cAUz2zqeinhYHh8OgwUIMLzKTXXp-ex6AA-4cfYVREEZZG0n4TCACrub45NsIm_QIk31nus8vrKH6v_S-fszEEQbvCx4a4Rt8IyNan3_G1EJ2IiHUTxYhBmY-wzAJ2E16WL6lM4uiHvvRU-BYDzt447dWmoeQ"
              width={32}
              height={32}
            />
            <Image
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_uTCSCeh0gbNZxNRzwn5brqOSojfFv1OT-PjRU8U8mUdaiqONqpvGZ2Z4q1NSERKDBkNDZN1GoAYqujQfCgvdFPXUUTVwCUgL4ohkgrF4svAA3Z1HqXZlHM-wLy5_ruUX5s53nUPxhjoF-drpC2egtYP45yj07Q-DGkl1lNErke7fWIIq9Gc09DmPyPBYhvBbnBtoPuFWd0z9WMQqn7oAAkMXpjE43xuSH2r8YYt6LaC5hut0Riko4SPHF3nUfTPnkUlFGh64YQ"
              width={32}
              height={32}
            />
            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-500">
              +4
            </div>
          </div>
          <button className="flex items-center gap-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm cursor-pointer">
            <span className="material-icons-round text-base">filter_list</span>{" "}
            Filter
          </button>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-yellow-500/30 transition-all transform hover:scale-105 cursor-pointer">
            <span className="material-icons-round text-base">add</span> New
            Order
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-w-[1000px] lg:min-w-0 pb-8 overflow-x-auto">
        <KanbanColumn
          title="Incoming"
          count={3}
          colorClass="bg-blue-400"
          bgClass="bg-blue-100 dark:bg-blue-900/30"
          textClass="text-blue-600 dark:text-blue-300"
          cards={incomingCards}
        />
        <KanbanColumn
          title="Paid"
          count={2}
          colorClass="bg-primary"
          bgClass="bg-yellow-100 dark:bg-yellow-900/30"
          textClass="text-yellow-700 dark:text-yellow-400"
          cards={paidCards}
        />
        <KanbanColumn
          title="In Progress"
          count={2}
          colorClass="bg-indigo-500"
          bgClass="bg-indigo-100 dark:bg-indigo-900/30"
          textClass="text-indigo-600 dark:text-indigo-300"
          cards={inProgressCards}
        />
        <KanbanColumn
          title="Done"
          count={5}
          colorClass="bg-green-500"
          bgClass="bg-green-100 dark:bg-green-900/30"
          textClass="text-green-600 dark:text-green-300"
          cards={doneCards}
        />
      </div>
    </>
  );
}
