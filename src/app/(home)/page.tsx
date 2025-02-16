import { HydrateClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { PageClient } from "./client";

export default async function Home() {
  void await trpc.hello.prefetch({ text: "Fawad" });

  return (
    <HydrateClient>
      <Suspense fallback={<div>loading...</div>}>
        <ErrorBoundary fallback={<div>error</div>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
