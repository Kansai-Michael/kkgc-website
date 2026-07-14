import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dojo Rules & Etiquette | Kansai Karate Gold Coast",
  description:
    "Dojo etiquette and rules for students and parents at Kansai Karate Gold Coast, Upper Coomera. Everything you need to know before and during class — bowing, uniform, arrival, and parent responsibilities.",
  alternates: { canonical: "/dojo-rules" },
};

const studentRules = [
  "Upon arriving at the dojo, please wait in the outdoor waiting area — an instructor will invite you into class. If you are late, please enter and let the instructor know.",
  "Students are required to wear footwear to and from the dojo.",
  "No jewellery (watches, rings, earrings, bracelets, necklaces, piercings, etc.) is to be worn during training.",
  "Bring a drink bottle of water to all classes.",
  "Before class, please wait quietly in the outdoor seating area.",
  "Students should walk around the dojo at all times — running and sliding are not permitted.",
  "Upon greeting your instructor, bow and say “Osu”.",
  "At the beginning of class, stand at the edge of the mat and perform a standing bow (rei).",
  "During class and at any karate event, refer to the instructor as Sensei or Sempai.",
  "If you arrive late to class, kneel down at the edge of the mat and wait for the instructor to bow you in. Perform a kneeling bow before standing and joining the class.",
  "Only enter the dojo mat area in bare feet — shoes or socks are not to be worn on the training floor.",
  "Keep your uniform clean and pressed, your body clean, and your nails clipped.",
  "Be courteous at all times. There is to be no swearing or inappropriate language in the dojo or at any karate event.",
  "Carry out the instructor's directions to the best of your ability at all times.",
  "Students leaving before the class is finished must perform a full kneeling bow (rei) at the edge of the mat.",
  "Students wishing to leave the mat for a drink or to use the bathroom must ask the instructor for permission.",
  "At the end of class, students line up around the edge of the mat and perform a standing bow (rei).",
];

const parentRules = [
  "Please park on the street and not in the building complex.",
  "Assist and advise your child of their responsibilities as a student with the etiquette listed above.",
  "Please arrive before the designated start time so students can settle, focus, and warm up appropriately — nominally 5 minutes before the start time.",
  "Ensure children wait quietly before class starts or while other classes are on.",
  "Children should not be running around at any time while in the dojo.",
  "Parents are requested to wait outside the dojo during class time. One parent may accompany a Cub student in their class (no siblings).",
  "If you leave the dojo during class time, please return to the building to collect the student. Children will not be allowed to leave the building unattended.",
  "Please ensure you collect your child from class at the appointed finish time.",
  "Please follow all requests from instructors and other dojo assistants.",
  "Ensure students have their grading passport presented at the front desk the week after each grading.",
];

export default function DojoRulesPage() {
  return (
    <>
      <section className="bg-[#003087] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dojo Rules &amp; Etiquette</h1>
          <p className="text-xl text-white/80">
            Dojo etiquette for students and parents at Kansai Karate Gold Coast. These
            guidelines keep our classes safe, respectful, and focused — and they&apos;re part
            of the karate tradition we teach.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Intro */}
          <div className="bg-[#5B7DB1]/10 border border-[#5B7DB1]/30 rounded-lg px-6 py-5">
            <p className="text-gray-700">
              Etiquette (<span className="italic">reigi</span>) is at the heart of traditional
              karate. Please read through the points below with your child so everyone knows
              what to expect before, during, and after class.
            </p>
          </div>

          {/* For Students */}
          <div>
            <h2 className="text-2xl font-bold text-[#003087] mb-6">For Students</h2>
            <ol className="space-y-4">
              {studentRules.map((rule, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-[#003087] text-white text-sm font-bold flex items-center justify-center"
                  >
                    {i + 1}
                  </span>
                  <p className="text-gray-600 pt-1">{rule}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* For Parents */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-[#003087] mb-6">For Parents</h2>
            <ol className="space-y-4">
              {parentRules.map((rule, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFB800] text-[#001040] text-sm font-bold flex items-center justify-center"
                  >
                    {i + 1}
                  </span>
                  <p className="text-gray-600 pt-1">{rule}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Closing */}
          <div className="border-t border-gray-200 pt-8 text-gray-600">
            <p>
              Thank you for helping us maintain a positive, respectful training environment.
              If you have any questions about dojo etiquette, please speak with an instructor —
              we&apos;re always happy to help.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
