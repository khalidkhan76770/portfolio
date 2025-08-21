export default function ProjectCard({ title, description, image, link, github, tech = [] }) {
  return (
    <div className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold mb-1 text-lg">{title}</h3>
        <p className="text-sm text-gray-600 flex-1">{description}</p>
        {tech.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-3 text-xs">
            {tech.map((t) => (
              <li key={t} className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                {t}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 space-x-4 text-sm font-medium">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
