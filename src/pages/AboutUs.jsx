import { useTranslation } from "react-i18next";
import Header from "../components/Header";

const AboutUs = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div className="min-h-screen h-full relative w-full bg-white pb-8">
      <Header />
      {/* About */}
      <h3 className="mt-14 mb-6 text-primary text-center text-xl font-bold">
        {t("contactus.aboutus")}
      </h3>
      <p
        className={`${
          language == "ar" ? "text-right" : "text-left"
        } w-[80%] mx-auto text-primary font-light leading-4 text-[14px]`}
      >
        {language == "ar" ? (
          <>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
            العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
            من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا وجب على
            المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور
            مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة
            له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن
            أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير
            منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.هذا
            النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
            العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
            من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا وجب على
            المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور
            مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة
            له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.هذا النص يمكن
            أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير
            منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.هذا
            النص هو مثال لنص
          </>
        ) : (
          <>
            This text is an example of text that can be replaced in the same
            space. This text was generated from the Arabic text generator, where
            you can generate such text or many other texts in addition to
            increasing the number of letters that the application generates. If
            you need a larger number of Paragraphs The Arabic text generator
            allows you to increase the number of paragraphs as you want. The
            text will not appear divided and does not contain linguistic errors.
            The Arabic text generator is useful for website designers in
            particular, as the client often needs to see a real picture of the
            website design. Hence, it is necessary to The designer can place
            temporary texts on the design to show the client the complete form.
            The role of the Arabic text generator is to save the designer the
            trouble of searching for alternative text that has nothing to do
            with the topic the design is talking about, so it appears in an
            inappropriate way. This text can be installed on any design without
            a problem. It looks like copied text, disorganized, unformatted, or
            even incomprehensible. Because it is still an alternative and
            temporary text. This text is an example of text that can be replaced
            in the same space. This text was generated from the Arabic text
            generator, where you can generate such text or many other texts in
            addition to increasing the number of letters that the application
            generates. If You need a larger number of paragraphs. The Arabic
            text generator allows you to increase the number of paragraphs as
            you want. The text will not appear divided and does not contain
            linguistic errors. The Arabic text generator is useful for website
            designers in particular, as the client often needs to see a real
            image of the design. The website. Hence, the designer must place
            temporary texts on the design to show the customer the complete
            form. The role of the Arabic text generator is to save the designer
            the trouble of searching for alternative text that is not related to
            the topic that the design is talking about, so it appears in an
            inappropriate way. This text can be installed. On any design without
            a problem it will not look like copied text, disorganized,
            unformatted, or even incomprehensible. Because it is still an
            alternative and temporary text. This text is an example of a text
          </>
        )}
      </p>
    </div>
  );
};

export default AboutUs;
