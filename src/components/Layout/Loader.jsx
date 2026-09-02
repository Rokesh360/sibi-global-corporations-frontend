import { useEffect, useState } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsVisible(false);
    }, 850);

    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="sgc-loader" role="status" aria-label="Loading">
      <div className="sgc-loader-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="sgc-loader-label">Sibi Global</p>
    </div>
  );
}
