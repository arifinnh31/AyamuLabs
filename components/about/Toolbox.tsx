export default function Toolbox() {
  const tools = [
    { name: "Live2D Cubism", icon: "widgets", color: "bg-purple-100 text-purple-600" },
    { name: "Clip Studio Paint", icon: "brush", color: "bg-blue-100 text-blue-600" },
    { name: "Adobe Photoshop", icon: "photo_size_select_actual", color: "bg-indigo-100 text-indigo-600" },
    { name: "After Effects", icon: "movie_creation", color: "bg-pink-100 text-pink-600" },
    { name: "VTube Studio", icon: "face", color: "bg-green-100 text-green-600" },
    { name: "Blender", icon: "view_in_ar", color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <section className="py-20 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
            My <span className="text-primary">Toolbox</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            The software and magic spells I use to create digital masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${tool.color} transition-transform group-hover:scale-110`}>
                <span className="material-icons-round text-2xl">{tool.icon}</span>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                {tool.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
