import Link from "next/link";

export default function AIAssistantCard() {
  return (
    <div className="bg-linear-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-md p-6 text-white relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <span className="material-icons-round">auto_fix_high</span> AI
          Assistant
        </h3>
        <p className="text-indigo-100 text-sm mb-4">
          Generate reference poses or color palettes instantly.
        </p>
        <Link
          href="/aistudio"
          className="block w-full text-center py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-sm font-semibold transition-colors border border-white/20 cursor-pointer"
        >
          Open AI Lab
        </Link>
      </div>
      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full bg-white opacity-10"></div>
      <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-16 h-16 rounded-full bg-purple-400 opacity-20"></div>
    </div>
  );
}
