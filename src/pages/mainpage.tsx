import { ReactNode } from "react";
import '../css/Mainpage.css'
import MultiStepForm from "../components/Forms/Multistepformatp1/Multistepform";
// Defining SectionProps type
type SectionProps = {
  title?: string,       // Optional title property
  children?: ReactNode   // Children as ReactNode
};

export const  Mainpage1  = ({ children, title = "subHeading" }: SectionProps) => {
  return (
    <section className="mainpage1-section">
    <h2>{title}</h2>
    <p>{children}</p>
    <MultiStepForm/>
  </section>
  );
};
