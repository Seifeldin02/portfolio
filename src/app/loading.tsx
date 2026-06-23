export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
        <p className="text-muted text-sm">Loading...</p>
      </div>
    </div>
  );
}
