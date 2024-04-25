import { ReactNode } from "react";
import '../css/Subheading.css';

// Defining SectionProps type
type SectionProps = {
  title?: string;       // Optional title property
  children?: ReactNode;   // Children as ReactNode
};

export const Subheading = ({ children, title}: SectionProps) => {
  return (
    <section className="subheading-section">
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <img src="https://pixabay.com/get/g2f5772e6927d607567776ab3fc292684ed3bd8a0ec974609a381f49778ce677cc6af4e0c8ee23a8b8ad96cd21ed27831.png" alt="Sample" />
    </section>
  );
};
