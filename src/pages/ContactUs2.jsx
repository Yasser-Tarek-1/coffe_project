// import { useCallback, useEffect, useState } from "react";
// import { doc_icon, arrow_back } from "../assets";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import toast from "react-hot-toast";
// import { useSendMsgMutation } from "../store/apis/Messages";

// const ContactUs2 = () => {
//   const [sendMsg, { isLoading }] = useSendMsgMutation();
//   const {
//     t,
//     i18n: { language },
//   } = useTranslation();
//   const [messageTypse, setMessageTypse] = useState(2);
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [nameError, setNameError] = useState(null);
//   const [phone, setPhone] = useState("");
//   const [phoneError, setPhoneError] = useState(null);
//   const [msg, setMsg] = useState("");
//   const [msgError, setSmgError] = useState(null);

//   const msgCheckHandler = useCallback(() => {
//     if (name == "") {
//       setNameError("Name Requird");
//     } else {
//       setNameError(null);
//     }
//     if (phone == "") {
//       setPhoneError("Phone requird");
//     } else if (phone[0] != 5) {
//       setPhoneError("Phone must start with 5");
//     } else if (phone.length < 9 || phone.length > 9) {
//       setPhoneError("Phone must have 9 number only");
//     } else {
//       setPhoneError(null);
//     }
//     if (msg == "") {
//       setSmgError("Msg is requird");
//     } else {
//       setSmgError(null);
//     }
//   });

//   useEffect(() => {
//     msgCheckHandler();
//   }, [name, phone, msg, msgCheckHandler]);

//   const sendMsgHandler = () => {
//     msgCheckHandler();
//     if (phoneError != null && nameError != null && msgError != null) {
//       console.log("data is Suc");
//     } else {
//       console.log("data is error");
//     }

//     // sendMsg(msg)
//     //   .unwrap()
//     //   .then(() => {
//     //     navigate("/contactus/done");
//     //   })
//     //   .catch(() => {
//     //     toast.error("هنالك خطأ ما");
//     //   });
//   };

//   return (
//     <div className="min-h-screen h-full relative w-full bg-white pb-8">
//       {/* Head */}
//       <div className="w-full h-24 bg-base shadow-all rounded-b-lg flex items-center justify-between pt-12 px-4">
//         <div className="flex items-center gap-2">
//           <img src={doc_icon} alt="doc_icon" className="w-6" />
//           <h3 className="text-xl font-bold leading-6 text-primary">
//             {t("contactus.suggestions")}
//           </h3>
//         </div>
//         <button
//           className={language == "en" ? "rotate-[180deg]" : ""}
//           onClick={() => history.back(1)}
//         >
//           <img src={arrow_back} alt="arrow_back" className="w-5" />
//         </button>
//       </div>
//       {/* About */}
//       <p className="w-[80%] mx-auto my-16 text-center text-black font-medium leading-6 text-xl">
//         <span>{t("contactus.us")}</span> <span>(اسم المتجر)</span>{" "}
//         <span>{t("contactus.about")}</span>
//       </p>
//       {/* Form */}
//       <div className="flex items-center justify-center flex-col gap-4">
//         <button
//           onClick={() => setMessageTypse(1)}
//           name="complaint"
//           className={`w-[90%] block outline-none e font-medium shadow-all rounded-[11px] text-lg h-16 mx-auto
//           ${messageTypse == 1 ? "text-white bg-primary" : "text-black bg-bas"}
//           `}
//         >
//           {t("contactus.complaint")}
//         </button>
//         <button
//           onClick={() => setMessageTypse(2)}
//           name="suggestion"
//           className={`w-[90%] block outline-none e font-medium shadow-all rounded-[11px] text-lg h-16 mx-auto
//           ${messageTypse == 2 ? "text-white bg-primary" : "text-black bg-bas"}
//           `}
//         >
//           {t("contactus.suggestion")}
//         </button>
//       </div>
//       <form className="mt-12">
//         <div className="w-[90%] mx-auto mt-4">
//           <label className="font-normal text-[16px] text-primary">
//             {t("contactus.name")}
//           </label>
//           <input
//             placeholder={t("contactus.write")}
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="block w-full outline-none bg-base text-primary mx-auto rounded-lg h-12 placeholder:text-[16px] px-1 shadow-all"
//           />
//           <p className="text-xs text-[#ff0000] text-left mt-1">{nameError}</p>
//         </div>
//         <div className="w-[90%] mx-auto mt-4">
//           <label className="font-normal text-[16px] text-primary">
//             {t("contactus.phone")}
//           </label>
//           <div
//             className="h-12 bg-base shadow-all rounded-lg overflow-hidden flex items-center"
//             dir="ltr"
//           >
//             <p className="w-[20%] text-primary border-r border-r-[#d4d1d1] h-full flex items-center justify-center">
//               +966
//             </p>
//             <input
//               placeholder="554******"
//               type="number"
//               defaultValue="553558045"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="block w-[80%] outline-none bg-base mx-auto h-full placeholder:text-[16px] px-2 text-primary"
//             />
//           </div>
//           <p className="text-xs text-[#ff0000] text-left mt-1">{phoneError}</p>
//         </div>
//         <div className="w-[90%] mx-auto mt-4">
//           <label className="font-normal text-[16px] text-primary">
//             {t("contactus.text")}
//           </label>
//           <textarea
//             placeholder={t("contactus.write")}
//             type="text"
//             value={msg}
//             onChange={(e) => setMsg(e.target.value)}
//             className="block w-full outline-none bg-base text-primary mx-auto rounded-lg h-12 placeholder:text-[16px] p-1 shadow-all min-h-32"
//           />
//           <p className="text-xs text-[#ff0000] text-left mt-1">{msgError}</p>
//         </div>
//         <button
//           type="button"
//           onClick={sendMsgHandler}
//           className={`w-[90%] block mt-8 outline-none font-medium shadow-all rounded-[11px] text-lg h-16 mx-auto text-white bg-primary`}
//         >
//           {t("contactus.send")}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs2;
