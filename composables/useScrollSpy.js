import { ref, onMounted, onUnmounted } from "vue";

export function useScrollSpy() {
  const currentSection = ref("");

  onMounted(() => {
    const sections = document.querySelectorAll("main > div[id]");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.id;
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    onUnmounted(() => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    });
  });

  return { currentSection };
}
