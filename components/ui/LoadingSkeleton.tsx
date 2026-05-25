export function ProductCardSkeleton() {
  return (
    <div className="space-y-3">
      <div className="skeleton aspect-square rounded-2xl" />
      <div className="skeleton h-4 w-20" />
      <div className="skeleton h-5 w-3/4" />
      <div className="flex justify-between">
        <div className="skeleton h-5 w-16" />
        <div className="skeleton h-4 w-10" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
