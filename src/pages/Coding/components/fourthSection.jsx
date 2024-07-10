import React from "react";
import { TransText } from "../../../components";

export const FourthSection = () => {
  let cards = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-16 fill-white"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      title: "Master Classes",
      description: {
        en: `Join our master classes in UI/UX Design, learn personal branding skills, and get help with creating CVs and cover letters.`,
        ar: "انضم إلى فصول الماجستير لدينا في تصميم واجهة المستخدم / تجربة المستخدم (UI/UX Design)، وتعلم مهارات العلامة التجارية الشخصية، واحصل على مساعدة في إنشاء السيرة الذاتية ورسائل الغلاف.",
        fr: "Participez à nos master classes en UI/UX Design, apprenez des techniques de personal branding et bénéficiez d'une aide à la création de CV et de lettres de motivation.",
      },
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-16 fill-white"
        >
          <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
        </svg>
      ),
      title: "External Visits",
      description: {
        en: `Get inspired by visiting leading schools and institutions in the web industries.`,
        ar: "استلهم من خلال زيارة المدارس والمؤسسات الرائدة في صناعات تطوير الويب.",
        fr: "اختبر أفضل ما في العالمين من خلال التبديل بين دروس الوسائط والبرمجة.",
      },
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-16 fill-white"
        >
          <path
            fill-rule="evenodd"
            d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
      title: "Media and Code Crossover",
      description: {
        en : `Experience the best of both worlds by switching classes between media and code.`,
        fr : 'Découvrez le meilleur des deux mondes en alternant les cours entre le média et le code.',
        ar : 'اختبر أفضل ما في العالمين من خلال التبديل بين دروس الوسائط والبرمجة.'
        },
    },
  ];
  return (
    <div className="bg-gray-50 px-16 py-16 flex flex-col gap-8">
      {/* <h1 className="font-bold text-6xl text-center ">During the journey</h1> */}
      <div className="w-full text-center pb-10">
        <h1 className="text-xl">Testimonials</h1>
        <h1 className="text-5xl font-bold">During the journey</h1>
      </div>
      <div className="flex lg:flex-row flex-col gap-8 justify-center">
        {cards.map((element, index) => (
          <div
            key={index}
            className="lg:w-[25%] bg-beta p-8 flex flex-col justify-between gap-4 rounded-lg hover:scale-105 duration-300 "
          >
            {element.icon}
            <h1 className="text-3xl text-white">{element.title}</h1>
            <p className="text-white">{TransText(element.description) }</p>
          </div>
        ))}
      </div>
    </div>
  );
};
