import { ProductGridSkeleton } from '@/components/ui/LoadingSkeleton';

export default function Loading() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-48 skeleton mb-8" />
        <ProductGridSkeleton count={6} />
      </div>
    </div>
  );
}
