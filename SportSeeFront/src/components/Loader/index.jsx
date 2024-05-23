function Loader() {
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <svg className="animate-spin" viewBox="0 0 50 50">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#e60000', stopOpacity: 1 }}
            />
            <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="transparent"
          r="5"
          cx="25"
          cy="25"
        />
      </svg>
    </section>
  );
}

export default Loader;
