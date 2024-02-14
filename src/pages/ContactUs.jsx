import { useState } from "react";
import { doc_icon, arrow_back } from "../assets";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useSendMsgMutation } from "../store/apis/Messages";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  const [sendMsg, { isLoading }] = useSendMsgMutation();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [messageTypse, setMessageTypse] = useState(2);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      sender_name: "",
      phone_number: "",
      message: "",
    },
    validationSchema: Yup.object({
      sender_name: Yup.string().required(t("contactus.form.required")),
      phone_number: Yup.string()
        .required(t("contactus.form.required"))
        .test(
          "is-first-number-five",
          t("contactus.form.phoneStart"),
          (value) => {
            if (!value) return false; // Handle empty string case
            const numStr = value.toString();
            const firstChar = numStr?.charAt(0);
            return parseInt(firstChar) === 5;
          }
        )
        .matches(/^[0-9]{9}$/, t("contactus.form.phoneNumber")),
      message: Yup.string().required(t("contactus.form.required")),
    }),
    onSubmit: (values) => {
      sendMsg({ ...values, message_type: messageTypse })
        .unwrap()
        .then(() => {
          setTimeout(() => {
            navigate("/contactus/done");
          }, 300);
        })
        .catch(() => {
          language == "ar"
            ? toast.error("هناك شئ غير صحيح")
            : toast.error("Something is wrong");
        });
    },
  });

  return (
    <div className="min-h-screen h-full relative w-full bg-white pb-8">
      {/* Head */}
      <div className="w-full h-24 bg-base shadow-all rounded-b-lg flex items-center justify-between pt-12 px-4">
        <div className="flex items-center gap-2">
          <img src={doc_icon} alt="doc_icon" className="w-6" />
          <h3 className="mt-[6px] text-xl font-bold leading-6 text-primary">
            {t("contactus.suggestions")}
          </h3>
        </div>
        <button
          className={language == "en" ? "rotate-[180deg]" : ""}
          onClick={() => history.back(1)}
        >
          <img src={arrow_back} alt="arrow_back" className="w-5" />
        </button>
      </div>
      {/* About */}
      <p className="w-[80%] mx-auto my-16 text-center text-black font-medium leading-6 text-xl">
        <span>{t("contactus.us")}</span> <span>(اسم المتجر)</span>{" "}
        <span>{t("contactus.about")}</span>
      </p>
      {/* Form */}
      <div className="flex items-center justify-center flex-col gap-4">
        <button
          onClick={() => setMessageTypse(1)}
          name="complaint"
          className={`w-[90%] block outline-none e font-medium shadow-all rounded-[11px] text-lg h-16 mx-auto
          ${messageTypse == 1 ? "text-white bg-primary" : "text-black bg-bas"}
          `}
        >
          {t("contactus.complaint")}
        </button>
        <button
          onClick={() => setMessageTypse(2)}
          name="suggestion"
          className={`w-[90%] block outline-none e font-medium shadow-all rounded-[11px] text-lg h-16 mx-auto
          ${messageTypse == 2 ? "text-white bg-primary" : "text-black bg-bas"}
          `}
        >
          {t("contactus.suggestion")}
        </button>
      </div>
      <form className="mt-12" onSubmit={formik.handleSubmit}>
        <div className="w-[90%] mx-auto mt-4">
          <label className="font-normal text-[16px] text-primary">
            {t("contactus.name")}
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sender_name}
            id="sender_name"
            name="sender_name"
            placeholder={t("contactus.write")}
            type="text"
            className="block w-full outline-none bg-base text-primary mx-auto rounded-lg h-12 placeholder:text-[16px] px-1 shadow-all"
          />
          {formik.touched.sender_name && formik.errors.sender_name ? (
            <p className="text-xs mt-[2px] text-[#ff0000]">
              {formik.errors.sender_name}
            </p>
          ) : null}
        </div>
        <div className="w-[90%] mx-auto mt-4">
          <label className="font-normal text-[16px] text-primary">
            {t("contactus.phone")}
          </label>
          <div
            className="h-12 bg-base shadow-all rounded-lg overflow-hidden flex items-center"
            dir="ltr"
          >
            <p className="w-[20%] text-primary border-r border-r-[#d4d1d1] h-full flex items-center justify-center">
              +966
            </p>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone_number}
              id="phone_number"
              name="phone_number"
              placeholder="554******"
              type="number"
              className="block w-[80%] outline-none bg-base mx-auto h-full placeholder:text-[16px] px-2 text-primary"
            />
          </div>{" "}
          {formik.touched.phone_number && formik.errors.phone_number ? (
            <p className="text-xs mt-[2px] text-[#ff0000]">
              {formik.errors.phone_number}
            </p>
          ) : null}
        </div>
        <div className="w-[90%] mx-auto mt-4">
          <label className="font-normal text-[16px] text-primary">
            {t("contactus.text")}
          </label>
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            id="message"
            name="message"
            placeholder={t("contactus.write")}
            type="text"
            className="block w-full outline-none bg-base text-primary mx-auto rounded-lg h-12 placeholder:text-[16px] p-1 shadow-all min-h-32"
          />
          {formik.touched.message && formik.errors.message ? (
            <p className="text-xs mt-[2px] text-[#ff0000]">
              {formik.errors.message}
            </p>
          ) : null}
        </div>
        <button
          type="submit"
          className={`w-[90%] block mt-8 outline-none font-medium shadow-all rounded-[11px] text-lg h-16 mx-auto text-white bg-primary`}
        >
          {t("contactus.send")}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
