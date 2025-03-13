import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const StatItem = ({ value, label, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    setCount(0);

    const steps = 30;
    const stepValue = value / steps;
    const stepTime = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      const newValue = Math.min(Math.round(stepValue * current), value);
      setCount(newValue);

      if (current >= steps) {
        clearInterval(timer);
        setCount(value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="stat-item">
      <div className="stat-value">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default function StatsCounter() {
  return (
    <div className="stats-container">
      <div className="stats-grid">
        <StatItem value={1200} label="Clients" suffix="+" />
        <StatItem value={10} label="Countries" />
        <StatItem value={750000} label="Trips" suffix="+" />
        <StatItem value={60000} label="Drivers" suffix="+" />
      </div>
    </div>
  );
}


