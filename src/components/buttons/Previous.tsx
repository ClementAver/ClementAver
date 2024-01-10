export default function Previous({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="btn-nav-slider previous"
    >
      <svg
        className="icon-nav-slider-previous"
        viewBox="0 0 23.53 39.99"
      >
        <polyline points="21.76 38.22 3.54 20 21.76 1.77" />
      </svg>
    </button>
  );
}
