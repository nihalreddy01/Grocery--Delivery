export default function Loading({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="flex-center min-h-[220px] bg-white rounded-2xl border border-app-border">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full border-4 border-app-border border-t-app-green animate-spin" />
        <span className="text-sm text-zinc-600">{message}</span>
      </div>
    </div>
  );
}
