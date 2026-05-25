export default function GalleryLoading() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-48 skeleton mb-8" />
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton h-64 mb-4 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
