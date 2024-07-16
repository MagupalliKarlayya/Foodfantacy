import { useEffect, useState } from "react";

export default Isonline = () => {
  const [Isonlineoroffline, setIsonlineoroffline] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsonlineoroffline(true);
    });
    window.addEventListener("offline", () => {
      setIsonlineoroffline(false);
    });

    return () => {
      window.removeEventListener("online", () => {
        setIsonlineoroffline(true);
      });
      window.removeEventListener("offline", () => {
        setIsonlineoroffline(false);
      });
    };
  }, []);
  return Isonlineoroffline;
};
