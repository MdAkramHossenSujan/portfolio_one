import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTopButton =()=> {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past the first viewport height
      if (window.scrollY > window.innerHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed cursor-pointer right-8 md:right-8 lg:right-12 xl:right-16 bottom-10
        z-50
         border-gray-600 bg-base-300 border
        dark:bg-cyan-500 text-gray-900
        hover:bg-cyan-700 dark:hover:bg-cyan-400
        p-3 rounded-full
        shadow-lg
        transition transform hover:scale-105
      "
    >
      <HiArrowUp size={20} />
    </button>
  );
}
export default ScrollToTopButton;