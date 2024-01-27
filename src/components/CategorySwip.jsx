// import { donut, coffe_cup, hot_cup, juice_cup, swipImage } from "../assets";

// const CATEGORYS = [
//   { id: 1, icon: donut, img: swipImage, name: "الحلويات", modern: true },
//   {
//     id: 2,
//     icon: coffe_cup,
//     img: swipImage,
//     name: "القهوة المقطرة",
//     modern: true,
//   },
//   {
//     id: 3,
//     icon: juice_cup,
//     img: swipImage,
//     name: "مشروبات باردة",
//     modern: true,
//   },
//   {
//     id: 3,
//     icon: hot_cup,
//     img: swipImage,
//     name: "مشروبات ساخنة",
//     modern: true,
//   },
// ];

// const CategorySwip = () => {
//   return (
//     <div className="flex items-center justify-between mt-4">
//       {CATEGORYS.map(({ id, icon, img, name, modern }) => {
//         return (
//           <div key={id} className="relative w-20 rounded-full">
//             <img src={img} className="w-full rounded-full" />
//             <div className="inset-0 absolute w-full h-full bg-[#000000B2] rounded-full"></div>
//             {modern && (
//               <p className="bg-[#FCBD1F] text-[8px] h-[17px] items-center font-normal text-center w-9 rounded-lg px-[10px] absolute left-[50%] bottom-[-20%] translate-x-[-50%]">
//                 جديد
//               </p>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CategorySwip;
