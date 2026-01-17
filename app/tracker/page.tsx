import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function TrackerListPage() {
  const mockOrders = [
    {
      id: "AYM-8821",
      title: "VTuber Model Rigging",
      status: "In Progress",
      progress: 65,
      date: "Oct 24, 2023",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfa0lLPfnbsw7cSxbTooGuyWdc0uPWPKUGwosBM0fXRbv1t1R3dosQwYqA7l-Ckot3-Ue3OCD9jqAbQMWIZssxBd5A06dO6GsqCZ2gge20J937PyVKncFuTR2Vn4BOgQSvEEiOESmTAqTedHC5cgjxIDD9-7n9KADDubMKCo4KWjNwEJr1j-Wz7JFJUfI6g5oQt4oMuVW4KKbCiQ6mIkigcGOGHAx-czqKr0hal88yfP-tv1uvD-oIOIS10rsAhBwD2Q3ctkWFQ",
      price: "$450.00"
    },
    {
       id: "AYM-7742",
       title: "Character Design Sheet",
       status: "Completed",
       progress: 100,
       date: "Sep 12, 2023",
       thumbnail: null,
       price: "$200.00"
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="grow min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 w-full">
        
        <div className="mb-8">
            <h1 className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-2">My Commissions</h1>
            <p className="text-gray-600 dark:text-gray-400">Track and manage your ongoing and past commissions.</p>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                            <th className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300">Commission</th>
                            <th className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 hidden sm:table-cell">Order ID</th>
                             <th className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 hidden md:table-cell">Date</th>
                            <th className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300">Status</th>
                            <th className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 text-right">Total</th>
                            <th className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {mockOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-800 relative overflow-hidden shrink-0">
                                            {order.thumbnail ? (
                                                <Image 
                                                    src={order.thumbnail} 
                                                    alt={order.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                 <div className="flex items-center justify-center h-full w-full text-gray-400 dark:text-gray-600">
                                                    <span className="material-icons-round text-lg">image</span>
                                                 </div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 dark:text-white">{order.title}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 sm:hidden">#{order.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-400 hidden sm:table-cell font-mono text-xs">
                                    #{order.id}
                                </td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-400 hidden md:table-cell">
                                    {order.date}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-full max-w-[80px] h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full ${order.progress === 100 ? 'bg-green-500' : 'bg-primary'}`} 
                                                style={{ width: `${order.progress}%` }}
                                            />
                                        </div>
                                        <span className={`text-xs font-bold ${order.progress === 100 ? 'text-green-600 dark:text-green-400' : 'text-primary'}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right font-bold text-gray-900 dark:text-white">
                                    {order.price}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={`/tracker/${order.id}`}>
                                        <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm">
                                            View Details
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {mockOrders.length === 0 && (
                <div className="p-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <span className="material-icons-round text-3xl">shopping_cart</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">No orders yet</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">You haven't placed any commissions yet.</p>
                    <Link href="/commission">
                        <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30">
                            Browes Commissions
                        </button>
                    </Link>
                </div>
            )}
        </div>

      </main>
      <Footer />
    </div>
  );
}
