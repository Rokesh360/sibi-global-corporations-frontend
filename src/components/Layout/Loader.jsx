import { useEffect, useState } from "react";
import logo from "../../../public/assets/img/fav-icon.png";

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
      <div className="sgc-loader-content">
        <div className="sgc-loader-spinner">
          <img src={logo} alt="Sibi Global Corporation" />
        </div>
        <p>Loading</p>
      </div>
    </div>
  );
}
