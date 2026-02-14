"use client";

// Reusable skeleton building blocks
export function SkeletonBox({ width, height, borderRadius = "8px", className = "" }) {
  return (
    <div
      className={`bg-gray-200 dark:bg-white/10 ${className}`}
      style={{
        width,
        height,
        borderRadius,
        background: "linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
      }}
    />
  );
}

export function SkeletonText({ width = "100%", height = "14px", className = "" }) {
  return (
    <div
      className={`bg-gray-200 dark:bg-white/10 ${className}`}
      style={{
        width,
        height,
        borderRadius: "4px",
        background: "linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
      }}
    />
  );
}

export function SkeletonCard({ width = "185px", height = "278px" }) {
  return (
    <div style={{ flex: `0 0 ${width}` }}>
      <SkeletonBox width={width} height={height} />
      <div style={{ paddingTop: "20px", paddingLeft: "4px" }}>
        <SkeletonText width="80%" height="14px" />
        <div style={{ marginTop: "8px" }}>
          <SkeletonText width="50%" height="12px" />
        </div>
      </div>
    </div>
  );
}

// Homepage hero skeleton
export function SkeletonHero() {
  return (
    <div
      className="bg-gray-100 dark:bg-white/5"
      style={{
        width: "100%",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        gap: "16px",
      }}
    >
      <SkeletonText width="320px" height="32px" />
      <SkeletonText width="480px" height="18px" />
      <div style={{ marginTop: "12px" }}>
        <SkeletonBox width="500px" height="50px" borderRadius="30px" />
      </div>
    </div>
  );
}

// Horizontal scroll section skeleton
export function SkeletonSection({ cardCount = 7, cardWidth = "185px", cardHeight = "278px" }) {
  return (
    <div style={{ padding: "20px 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <SkeletonText width="200px" height="24px" />
          <SkeletonBox width="120px" height="32px" borderRadius="16px" />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            overflow: "hidden",
          }}
        >
          {Array.from({ length: cardCount }).map((_, i) => (
            <SkeletonCard key={i} width={cardWidth} height={cardHeight} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Grid page skeleton (movie/tvshow/people listing)
export function SkeletonGrid({ cardCount = 12, showSidebar = false }) {
  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "24px",
        display: "flex",
        gap: "24px",
      }}
    >
      {showSidebar && (
        <div
          className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10"
          style={{
            width: "260px",
            flexShrink: 0,
            borderRadius: "12px",
            padding: "20px",
            display: "none",
          }}
          // Hidden on mobile via media query - shown via CSS
        >
          <SkeletonText width="140px" height="20px" />
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonText key={i} width={`${60 + Math.random() * 40}%`} height="16px" />
            ))}
          </div>
        </div>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: "20px" }}>
          <SkeletonText width="220px" height="28px" />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "24px 16px",
          }}
        >
          {Array.from({ length: cardCount }).map((_, i) => (
            <div key={i}>
              <SkeletonBox width="100%" height="225px" />
              <div style={{ paddingTop: "10px" }}>
                <SkeletonText width="80%" height="14px" />
                <div style={{ marginTop: "6px" }}>
                  <SkeletonText width="50%" height="12px" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Awards page skeleton
export function SkeletonAwards() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>
      {/* Header */}
      <SkeletonBox width="100%" height="140px" borderRadius="16px" />
      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "24px",
          marginTop: "40px",
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10"
            style={{ borderRadius: "16px", padding: "28px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <SkeletonBox width="56px" height="56px" borderRadius="14px" />
              <div style={{ flex: 1 }}>
                <SkeletonText width="160px" height="18px" />
                <div style={{ marginTop: "6px" }}>
                  <SkeletonText width="100px" height="12px" />
                </div>
              </div>
            </div>
            <SkeletonText width="100%" height="14px" />
            <div style={{ marginTop: "6px" }}>
              <SkeletonText width="80%" height="14px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Movie detail page skeleton
export function SkeletonDetail() {
  return (
    <div className="bg-white dark:bg-primary">
      {/* Hero backdrop */}
      <div
        className="bg-gray-200 dark:bg-white/5"
        style={{ width: "100%", height: "450px", position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "40px",
            display: "flex",
            gap: "24px",
            alignItems: "flex-end",
          }}
        >
          <SkeletonBox width="185px" height="278px" borderRadius="12px" />
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <SkeletonText width="300px" height="32px" />
            <SkeletonText width="200px" height="16px" />
            <SkeletonText width="160px" height="16px" />
          </div>
        </div>
      </div>
      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "flex", gap: "40px" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
            <SkeletonText width="120px" height="20px" />
            <SkeletonText width="100%" height="14px" />
            <SkeletonText width="100%" height="14px" />
            <SkeletonText width="60%" height="14px" />
          </div>
          <div style={{ width: "260px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            <SkeletonText width="100%" height="16px" />
            <SkeletonText width="80%" height="16px" />
            <SkeletonText width="90%" height="16px" />
          </div>
        </div>
      </div>
    </div>
  );
}
