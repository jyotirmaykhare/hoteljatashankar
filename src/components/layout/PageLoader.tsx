// Shown for the brief moment a lazy-loaded page chunk is downloading
// (see the React.lazy() routes in App.tsx). Kept intentionally simple —
// on a fast connection this rarely has time to render at all.
export default function PageLoader() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center">
      <div
        className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin"
        role="status"
        aria-label="Loading page"
      />
    </div>
  );
}
