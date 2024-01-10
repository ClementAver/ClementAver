export default function Next({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="btn-nav-slider next"
    >
      <svg
        className="icon-nav-slider-next"
        viewBox="0 0 23.53 39.99"
      >
        <polyline points="1.77 1.77 20 20 1.77 38.22" />
      </svg>
    </button>
  );
}
