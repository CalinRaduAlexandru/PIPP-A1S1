// Mock data for Psihologia Educației (PHED)
// Structură ușor de editat: capitole → subcapitole → quizuri (id-uri)
// Întrebările sunt mock și pot fi înlocuite rapid după nevoie.

window.PHED_CONTENT = {
  capitole: [
    {
      id: "phed-u1",
      titlu: "U1. Introducere în psihologie educațională",
      subcapitole: [
        { id: "phed-u1-s0", titlu: "Introducere generală", quizuri: ["phed-u1-q0"] },
        { id: "phed-u1-s1", titlu: "Rolul și obiectivele disciplinei", quizuri: ["phed-u1-q1"] },
        { id: "phed-u1-s2", titlu: "Relația cu practica didactică", quizuri: ["phed-u1-q2"] },
      ],
    },
    {
      id: "phed-u2",
      titlu: "U2. Dezvoltarea cognitivă și a limbajului",
      subcapitole: [
        { id: "phed-u2-s1", titlu: "Etape cognitive cheie", quizuri: ["phed-u2-q1"] },
        { id: "phed-u2-s2", titlu: "Achiziția limbajului", quizuri: ["phed-u2-q2"] },
      ],
    },
    {
      id: "phed-u3",
      titlu: "U3. Dezvoltarea socială, emoțională și morală",
      subcapitole: [
        { id: "phed-u3-s1", titlu: "Competențe socio-emoționale", quizuri: ["phed-u3-q1"] },
        { id: "phed-u3-s2", titlu: "Stadii ale dezvoltării morale", quizuri: ["phed-u3-q2"] },
      ],
    },
    {
      id: "phed-u5",
      titlu: "U5. Personalitatea elevului",
      subcapitole: [
        { id: "phed-u5-s1", titlu: "Trăsături și stiluri de personalitate", quizuri: ["phed-u5-q1"] },
        { id: "phed-u5-s2", titlu: "Implicații în învățare", quizuri: ["phed-u5-q2"] },
      ],
    },
    {
      id: "phed-u6",
      titlu: "U6. Teoriile învățării",
      subcapitole: [
        { id: "phed-u6-s1", titlu: "Behaviorism", quizuri: ["phed-u6-q1"] },
        { id: "phed-u6-s2", titlu: "Constructivism și socio-constructivism", quizuri: ["phed-u6-q2"] },
      ],
    },
    {
      id: "phed-u7",
      titlu: "U7. Rolul factorilor non-cognitivi în învățare",
      subcapitole: [
        { id: "phed-u7-s1", titlu: "Motivație și mindset", quizuri: ["phed-u7-q1"] },
        { id: "phed-u7-s2", titlu: "Emoții și autoreglare afectivă", quizuri: ["phed-u7-q2"] },
      ],
    },
    {
      id: "phed-u8",
      titlu: "U8. Autoreglarea procesului de învățare",
      subcapitole: [
        { id: "phed-u8-s1", titlu: "Metacogniție și strategie", quizuri: ["phed-u8-q1"] },
        { id: "phed-u8-s2", titlu: "Monitorizare și feedback", quizuri: ["phed-u8-q2"] },
      ],
    },
    {
      id: "phed-u9",
      titlu: "U9. Ergonomia activității școlare",
      subcapitole: [
        { id: "phed-u9-s1", titlu: "Climat și spațiu de învățare", quizuri: ["phed-u9-q1"] },
        { id: "phed-u9-s2", titlu: "Factori de oboseală și prevenție", quizuri: ["phed-u9-q2"] },
      ],
    },
    {
      id: "phed-u10",
      titlu: "U10. Gestionarea grupului de elevi",
      subcapitole: [
        { id: "phed-u10-s1", titlu: "Dinamici de grup și roluri", quizuri: ["phed-u10-q1"] },
        { id: "phed-u10-s2", titlu: "Disciplină și managementul clasei", quizuri: ["phed-u10-q2"] },
      ],
    },
    {
      id: "phed-u11",
      titlu: "U11. Succes și eșec școlar",
      subcapitole: [
        { id: "phed-u11-s1", titlu: "Factori care susțin succesul", quizuri: ["phed-u11-q1"] },
        { id: "phed-u11-s2", titlu: "Intervenții pentru prevenirea eșecului", quizuri: ["phed-u11-q2"] },
      ],
    },
    {
      id: "phed-u13",
      titlu: "U13. Creativitatea",
      subcapitole: [
        { id: "phed-u13-s1", titlu: "Caracteristici ale creativității", quizuri: ["phed-u13-q1"] },
        { id: "phed-u13-s2", titlu: "Stimularea creativității la clasă", quizuri: ["phed-u13-q2"] },
      ],
    },
  ],
};

// Quizuri mock (câte unul per subcapitol, ușor de înlocuit)
window.PHED_QUIZ = [
  {
    id: "phed-u1-q0",
    title: "Introducere în psihologia educațională",
    questions: [
      {
        text: "Psihologia educațională investighează relația dintre:",
        options: [
          "Procese psihologice și practicile educaționale",
          "Climatul economic și hobby-uri",
          "Doar statistici despre elevi"
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u1-q1",
    title: "Rolul și obiectivele disciplinei",
    questions: [
      {
        text: "Psihologia educațională oferă:",
        options: ["Strategii pentru optimizarea învățării", "Doar statistici despre elevi", "Exclusiv teorii clinice"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u1-q2",
    title: "Relația cu practica didactică",
    questions: [
      {
        text: "Aplicarea psihologiei educaționale înseamnă:",
        options: ["Metode didactice aliniate nevoilor elevilor", "Ignorarea diferențelor individuale", "Predare exclusiv frontală"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u2-q1",
    title: "Etape cognitive cheie",
    questions: [
      {
        text: "Un reper cognitiv clasic este:",
        options: ["Operațiile formale", "Teoriile instinctuale", "Reflexele condiționate"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u2-q2",
    title: "Achiziția limbajului",
    questions: [
      {
        text: "Limbajul se dezvoltă prin:",
        options: ["Interacțiune socială și feedback", "Învățare strict genetică", "Izolare de mediul verbal"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u3-q1",
    title: "Competențe socio-emoționale",
    questions: [
      {
        text: "O abilitate socio-emoțională cheie este:",
        options: ["Reglarea emoțiilor", "Memorarea mecanică", "Blocarea empatiei"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u3-q2",
    title: "Stadii ale dezvoltării morale",
    questions: [
      {
        text: "Dezvoltarea morală avansează prin:",
        options: ["Interacțiune și negociere a regulilor", "Învățare pasivă", "Absența contextului social"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u5-q1",
    title: "Trăsături și stiluri de personalitate",
    questions: [
      {
        text: "Personalitatea influențează:",
        options: ["Stilul de învățare și motivația", "Doar înălțimea", "Exclusiv memoria pe termen scurt"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u5-q2",
    title: "Implicații în învățare",
    questions: [
      {
        text: "Un elev introvert are nevoie de:",
        options: ["Context de lucru care să reducă presiunea socială", "Expunere constantă la public", "Evaluări exclusiv orale"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u6-q1",
    title: "Behaviorism",
    questions: [
      {
        text: "Behaviorismul pune accent pe:",
        options: ["Condiționare și întărire", "Imaginație creativă", "Procese inconștiente"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u6-q2",
    title: "Constructivism",
    questions: [
      {
        text: "Constructivismul susține că învățarea:",
        options: ["Este construită activ de elev", "Se transmite pasiv", "E identică pentru toți elevii"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u7-q1",
    title: "Motivație și mindset",
    questions: [
      {
        text: "Un mindset de creștere încurajează:",
        options: ["Perseverența și învățarea din erori", "Evitarea provocărilor", "Renunțarea rapidă"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u7-q2",
    title: "Emoții și autoreglare",
    questions: [
      {
        text: "Autoreglarea emoțională ajută la:",
        options: ["Menținerea focusului în învățare", "Creșterea impulsivității", "Ignorarea feedback-ului"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u8-q1",
    title: "Metacogniție și strategie",
    questions: [
      {
        text: "Metacogniția înseamnă:",
        options: ["Monitorizarea propriilor procese cognitive", "Exersare mecanică fără reflecție", "Ignorarea progresului personal"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u8-q2",
    title: "Monitorizare și feedback",
    questions: [
      {
        text: "Feedback-ul eficient este:",
        options: ["Specific și imediat", "Vag și întârziat", "Inexistent"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u9-q1",
    title: "Climat și spațiu de învățare",
    questions: [
      {
        text: "Un climat pozitiv include:",
        options: ["Siguranță psihologică și suport", "Competitivitate agresivă", "Ambiguitate în reguli"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u9-q2",
    title: "Factori de oboseală",
    questions: [
      {
        text: "Oboseala poate fi redusă prin:",
        options: ["Pauze regulate și ergonomie", "Supraincărcare continuă", "Eliminarea activității fizice"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u10-q1",
    title: "Dinamici de grup și roluri",
    questions: [
      {
        text: "Rolurile de grup clar definite:",
        options: ["Fac cooperarea mai eficientă", "Cresc confuzia", "Elimină inițiativa elevilor"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u10-q2",
    title: "Managementul clasei",
    questions: [
      {
        text: "Un management bun al clasei presupune:",
        options: ["Reguli clare și consecvente", "Reacții imprevizibile", "Lipsa rutinei"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u11-q1",
    title: "Factori ai succesului",
    questions: [
      {
        text: "Succesul școlar e susținut de:",
        options: ["Sprijin familial și motivație", "Lipsa feedback-ului", "Uniformitate totală"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u11-q2",
    title: "Prevenirea eșecului",
    questions: [
      {
        text: "Eșecul poate fi prevenit prin:",
        options: ["Intervenții timpurii și personalizate", "Ignorarea dificultăților", "Excluderea elevilor"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u13-q1",
    title: "Caracteristici ale creativității",
    questions: [
      {
        text: "Creativitatea implică:",
        options: ["Originalitate și flexibilitate cognitivă", "Doar reproducere mecanică", "Evitarea riscului"],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u13-q2",
    title: "Stimularea creativității la clasă",
    questions: [
      {
        text: "Creativitatea elevilor crește prin:",
        options: ["Activități deschise și feedback constructiv", "Pedepse pentru idei neconforme", "Limitarea explorării"],
        answer: 0,
      },
    ],
  },
];

// Deckuri mock pentru PHED – doar primul capitol populat ca exemplu
window.PHED_FLASHCARDS = {
  "phed-u1": [
    {
      id: "phed-u1-deck1",
      title: "U1 – Flashcards introductive",
      cards: [
        {
          front: "Rolul psihologiei educaționale",
          back: "Oferă cadre teoretice și strategii practice pentru optimizarea învățării, motivației și climatului educațional.",
        },
        {
          front: "Două direcții cheie în practică",
          back: "1) Adaptarea predării la nevoile elevilor. 2) Susținerea motivației și a autoreglării lor.",
        },
        {
          front: "Un beneficiu imediat pentru profesori",
          back: "Înțelegerea factorilor care cresc engagement-ul elevilor și reduc comportamentele disruptive.",
        },
      ],
    },
  ],
};
