import Modal from "../components/modal/Modal";
import { Link } from "react-router-dom";
import { home } from "../assets";

export const ContactMdl = () => {
  return (
    <div
      className="min-h-screen h-full relative bg-no-repeat bg-cover bg-center object-cover"
      style={{ backgroundImage: `url(${home})`, objectFit: "cover" }}
    >
      {/* Modal */}
      <Modal isOpen={true}>
        <div className="bg-primary text-secondary h-20 rounded-[11px] w-full flex items-center justify-center pb-4">
          <h3 className="text-[16px] font-medium ">(اسم المتجر )</h3>
        </div>
        <div className=" text-primary h-32 text-center flex items-center flex-col justify-center w-[60%] mx-auto">
          <p className="text-[14px] font-medium leading-4">
            نشكركم على مساعدتنا في رفع الخدمة المقدمة إليكم سوف يتم الرد عليكم
            في أقرب وقت ممكن
          </p>
          <Link to={"/"} className="underline font-semibold mt-2">
            الصفجة الرئيسية
          </Link>
        </div>
      </Modal>
    </div>
  );
};
