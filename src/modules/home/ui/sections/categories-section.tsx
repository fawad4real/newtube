'use client';
import { FilterCarousel } from '@/components/filter-carousel';
import { trpc } from '@/trpc/client';
import { Filter } from 'lucide-react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface CategoriesSectionProps {
  categoryId?: string;
}

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories.map(({ name, id }) => ({
    value: id,
    label: name,
  }));

  return (
    <FilterCarousel value={categoryId} data={data} />
  );
};

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<FilterCarousel isLoading />}>
      <ErrorBoundary fallback={<p>Something went wrong..</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};