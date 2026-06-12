/**
 * Utility to handle smooth scrolling to home page sections under React Router HashRouter.
 */
export const handleScrollToSection = (e, targetId) => {
  const element = document.getElementById(targetId);
  if (element) {
    if (e) {
      e.preventDefault();
    }
    element.scrollIntoView({ behavior: "smooth" });
    // Update hash manually without triggering router reload
    window.location.hash = `#/#${targetId}`;
  }
};
