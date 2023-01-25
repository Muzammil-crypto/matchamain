import { Navbar } from "../Components/general/Navbar/Navbar";
import { QuizForm } from "../Components/general/Quiz/QuizForm";
import { Footer } from "./Section/Footer/Footer";
export default function Quiz() {
  return (
    <div className=" flex flex-col align-middle justify-center ">
      <Navbar />
      <QuizForm />
      <Footer />
    </div>
  );
}
