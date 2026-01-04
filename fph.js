// Data model pentru Fundamentele Psihologiei (FPH)
// Fiecare capitol corespunde unui curs din suport,
// fiecare subcapitol are cel puțin un quiz asociat.

window.FLASH_BLOCK_STYLE =
  window.FLASH_BLOCK_STYLE ||
  "padding:24px 14px;border-radius:12px;border:1px solid rgba(148,163,184,0.18);background:rgba(15,23,42,0.35);display:grid;gap:8px; margin-bottom:12px;";
window.FLASH_TITLE_STYLE =
  window.FLASH_TITLE_STYLE ||
  "font-weight:800;color:#f8fafc;display:flex;align-items:center;gap:10px; margin-bottom: 2px;";
window.FLASH_PILL_LIST_STYLE =
  window.FLASH_PILL_LIST_STYLE ||
  "display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:10px;";
window.FLASH_PILL_BASE =
  window.FLASH_PILL_BASE ||
  "display:inline-flex;align-items:center;gap:8px;padding:6px 24px;border-radius:999px;font-weight:700;font-size:0.94rem;width:auto;max-width:100%;";
window.FLASH_PILL_VARIANTS = window.FLASH_PILL_VARIANTS || [
  "border:1px solid rgba(56,189,248,0.28);background:rgba(56,189,248,0.18);color:#e0f2fe;",
  "border:1px solid rgba(99,102,241,0.28);background:rgba(99,102,241,0.16);color:#eef2ff;",
  "border:1px solid rgba(34,197,94,0.28);background:rgba(34,197,94,0.16);color:#ecfdf5;",
  "border:1px solid rgba(251,191,36,0.28);background:rgba(251,191,36,0.14);color:#fff7ed;",
  "border:1px solid rgba(244,114,182,0.28);background:rgba(244,114,182,0.16);color:#fff1f2;",
  "border:1px solid rgba(168,85,247,0.28);background:rgba(168,85,247,0.16);color:#f5f3ff;",
  "border:1px solid rgba(148,163,184,0.28);background:rgba(148,163,184,0.16);color:#f8fafc;",
  "border:1px solid rgba(20,184,166,0.28);background:rgba(20,184,166,0.16);color:#ccfbf1;",
  "border:1px solid rgba(248,113,113,0.28);background:rgba(248,113,113,0.14);color:#ffe4e6;",
];

window.flashPillList = function (items) {
  const colorMap = (window.FLASH_PILL_COLOR_MAP =
    window.FLASH_PILL_COLOR_MAP || {});
  const namedVariants = (window.FLASH_PILL_NAMED_VARIANTS =
    window.FLASH_PILL_NAMED_VARIANTS || {
      cyan: window.FLASH_PILL_VARIANTS[0],
      indigo: window.FLASH_PILL_VARIANTS[1],
      emerald: window.FLASH_PILL_VARIANTS[2],
      amber: window.FLASH_PILL_VARIANTS[3],
      pink: window.FLASH_PILL_VARIANTS[4],
      violet: window.FLASH_PILL_VARIANTS[5],
      slate: window.FLASH_PILL_VARIANTS[6],
      teal: window.FLASH_PILL_VARIANTS[7],
      coral: window.FLASH_PILL_VARIANTS[8],
    });
  const getVariantForKey = (key) => {
    if (!key) {
      return null;
    }
    if (namedVariants[key]) {
      return namedVariants[key];
    }
    if (!colorMap[key]) {
      let hash = 0;
      for (let i = 0; i < key.length; i += 1) {
        hash = (hash * 31 + key.charCodeAt(i)) % 2147483647;
      }
      const index = Math.abs(hash) % window.FLASH_PILL_VARIANTS.length;
      colorMap[key] = window.FLASH_PILL_VARIANTS[index];
    }
    return colorMap[key];
  };
  const variants = [...window.FLASH_PILL_VARIANTS];
  for (let i = variants.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [variants[i], variants[j]] = [variants[j], variants[i]];
  }
  const pills = items
    .map((item, index) => {
      const text = typeof item === "string" ? item : item.text;
      const key = typeof item === "string" ? "" : item.key || item.color || "";
      const variant =
        getVariantForKey(key) || variants[index % variants.length];
      return `<span class="flash-pill" style="${window.FLASH_PILL_BASE}${variant}">${text}</span>`;
    })
    .join("");
  return `<div style="${window.FLASH_PILL_LIST_STYLE}">${pills}</div>`;
};

window.FPH_CONTENT = {
  capitole: [
    {
      id: "fph-cap1",
      titlu: "Curs 1. Obiectul și rațiunea de studiu ale psihologiei",
      subcapitole: [
        {
          id: "fph-cap1-sub1",
          titlu: "Informații introductive în psihologie",
          quizuri: ["fph-t1a"],
        },
        {
          id: "fph-cap1-sub2",
          titlu:
            "Principii fundamentale în psihologie după A. Cosmovici (1996) și P. P. Neveanu (1978)",
          quizuri: ["fph-t1b"],
        },
      ],
    },

    {
      id: "fph-cap2",
      titlu:
        "Curs 2. Instanțe ale vieții psihice (conștient, inconștient, subconștient)",
      subcapitole: [
        {
          id: "fph-cap2-sub1",
          titlu: "Conștiința",
          quizuri: ["fph-t2a"],
        },
        {
          id: "fph-cap2-sub2",
          titlu: "Inconștientul",
          quizuri: ["fph-t2c", "fph-t2d", "fph-t2e"],
        },
        {
          id: "fph-cap2-sub3",
          titlu: "Subconștientul",
          quizuri: ["fph-t2f"],
        },
        {
          id: "fph-cap2-sub4",
          titlu: "Relația conștient/ subconștient/ inconștient",
          quizuri: ["fph-t2g"],
        },
      ],
    },

    {
      id: "fph-cap3",
      titlu: "Curs 3. Premise neurofiziologice ale activității psihice",
      subcapitole: [
        {
          id: "fph-cap3-sub1",
          titlu: "Excitabilitate, informație și stimul",
          quizuri: ["fph-t3a", "fph-t3b", "fph-t3c"],
        },
        {
          id: "fph-cap3-sub2",
          titlu: "Sistemul nervos central și procese corticale",
          quizuri: ["fph-t3d", "fph-t3e"],
        },
        {
          id: "fph-cap3-sub3",
          titlu: "Anatomia Sistemului Nervos Central (SNC)",
          quizuri: ["fph-t3f"],
        },
        {
          id: "fph-cap3-sub4",
          titlu: "Neuronul, sinapsa și neurotransmițătorii",
          quizuri: ["fph-t3g", "fph-t3h", "fph-t3i"],
        },
      ],
    },
    {
      id: "fph-cap4",
      titlu: "Curs 4. Experimentarea conștientă a lumii",
      subcapitole: [
        {
          id: "fph-cap4-sub1",
          titlu: "Experimentare conștientă și procese cognitive / reglatorii",
          quizuri: ["fph-t4a", "fph-t4b", "fph-t4c", "fph-t4d"],
        },
        {
          id: "fph-cap4-sub2",
          titlu: "Integrare senzorială și principii multisenzoriale",
          quizuri: ["fph-t4e", "fph-t4f"],
        },
      ],
    },
    {
      id: "fph-cap5",
      titlu: "Curs 5A. Senzațiile",
      subcapitole: [
        {
          id: "fph-cap5-sub1",
          titlu: "Definirea și calitățile senzațiilor",
          quizuri: ["fph-t5a"],
        },
        {
          id: "fph-cap5-sub2",
          titlu: "Tipuri de senzații",
          quizuri: ["fph-t5b"],
        },
        {
          id: "fph-cap5-sub3",
          titlu: "Legile sensibilității",
          quizuri: ["fph-t5c", "fph-t5d"],
        },
      ],
    },
    {
      id: "fph-cap5b",
      titlu: "Curs 5B. Percepțiile",
      subcapitole: [
        {
          id: "fph-cap5b-sub1",
          titlu: "Definirea percepțiilor",
          quizuri: ["fph-t5ba", "fph-t5ba2"],
        },
        {
          id: "fph-cap5b-sub2",
          titlu:
            "Legi ale percepției (apud Popescu Neveanu, Zlate, Crețu, 1998)",
          quizuri: ["fph-t5bb", "fph-t5bc"],
        },
        {
          id: "fph-cap5b-sub3",
          titlu: "Forme ale percepției și iluzii perceptive",
          quizuri: ["fph-t5bd", "fph-t5be"],
        },
      ],
    },
    {
      id: "fph-cap6",
      titlu: "Curs 6. Reprezentările (schemele)",
      subcapitole: [
        {
          id: "fph-cap6-sub1",
          titlu: "Reprezentările: definiție și caracteristici și tipuri",
          quizuri: ["fph-t6a", "fph-t6b"],
        },
        {
          id: "fph-cap6-sub2",
          titlu: "Tipuri de reprezentări",
          quizuri: ["fph-t6c"],
        },
      ],
    },
    {
      id: "fph-cap7",
      titlu: "Curs 7. Memoria",
      subcapitole: [
        {
          id: "fph-cap7-sub1",
          titlu: "Definirea memoriei",
          quizuri: ["fph-t7a"],
        },
        {
          id: "fph-cap7-sub2",
          titlu: "Sisteme mnezice",
          quizuri: ["fph-t7b", "fph-t7c", "fph-t7d"],
        },
        {
          id: "fph-cap7-sub3",
          titlu: "Categorii și forme ale memoriei",
          quizuri: ["fph-t7e", "fph-t7f"],
        },
        {
          id: "fph-cap7-sub4",
          titlu: "Ponturi pentru optimizarea memoriei",
          quizuri: ["fph-t7g"],
        },
      ],
    },

    {
      id: "fph-cap8",
      titlu: "Curs 8. Gândirea",
      subcapitole: [
        {
          id: "fph-cap8-sub1",
          titlu: "Definirea gândirii",
          quizuri: ["fph-t8a"],
        },
        {
          id: "fph-cap8-sub2",
          titlu: "Operațiile gândirii",
          quizuri: ["fph-t8b", "fph-t8c"],
        },
        {
          id: "fph-cap8-sub3",
          titlu: "Produsele gândirii",
          quizuri: ["fph-t8d", "fph-t8e", "fph-t8f", "fph-t8g"],
        },
        {
          id: "fph-cap8-sub4",
          titlu: "Activitățile gândirii",
          quizuri: ["fph-t8h", "fph-t8i", "fph-t8j"],
        },
        {
          id: "fph-cap8-sub5",
          titlu: "Strategii de operare intelectuală",
          quizuri: ["fph-t8k"],
        },
        {
          id: "fph-cap8-sub6",
          titlu: "Gândire convergentă vs. divergentă",
          quizuri: ["fph-t8l"],
        },
      ],
    },
    {
      id: "fph-cap9",
      titlu: "Curs 9. Motivația",
      subcapitole: [
        {
          id: "fph-cap9-sub1",
          titlu: "Definirea motivației",
          quizuri: ["fph-t9a"],
        },
        {
          id: "fph-cap9-sub2",
          titlu: "Funcțiile motivației",
          quizuri: ["fph-t9b"],
        },
        {
          id: "fph-cap9-sub3",
          titlu: "Structuri motivaționale",
          quizuri: [
            "fph-t9c-intro",
            "fph-t9c1",
            "fph-t9c2",
            "fph-t9c3",
            "fph-t9c4",
            "fph-t9c5",
          ],
        },
        {
          id: "fph-cap9-sub4",
          titlu: "Structura și dinamica motivației",
          quizuri: ["fph-t9d1", "fph-t9d2"],
        },
        {
          id: "fph-cap9-sub5",
          titlu: "Teorii ale motivației",
          quizuri: ["fph-t9e1", "fph-t9e2", "fph-t9e3"],
        },
        {
          id: "fph-cap9-sub6",
          titlu: "Motivația pentru învățare",
          quizuri: ["fph-t9f1", "fph-t9f2"],
        },
      ],
    },
    {
      id: "fph-cap10",
      titlu: "Curs 10. Afectivitatea",
      subcapitole: [
        {
          id: "fph-cap10-sub1",
          titlu: "Definirea afectivității",
          quizuri: ["fph-t10a"],
        },

        {
          id: "fph-cap10-sub2",
          titlu: "Specificul proceselor afective",
          quizuri: ["fph-t10b", "fph-t10c", "fph-t10d", "fph-t10e"],
        },

        {
          id: "fph-cap10-sub3",
          titlu: "Structuri afectogene specifice",
          quizuri: [
            "fph-t10f", // Introducerea termenilor
            "fph-t10g", // Ton afectiv + Emoții + Dispoziții afective
            "fph-t10i", // Sentimente
            "fph-t10j", // Tipuri de sentimente
            "fph-t10k", // Pasiuni
          ],
        },

        {
          id: "fph-cap10-sub4",
          titlu: "Relația dintre afectivitate și motivație",
          quizuri: ["fph-t10l"],
        },
      ],
    },
    {
      id: "fph-cap11a",
      titlu: "Curs 11A. Voința",
      subcapitole: [
        {
          id: "fph-cap11a-sub1",
          titlu: "Definire și caracteristici ale voinței",
          quizuri: [
            "fph-t11a", // Definire și caracteristici ale voinței
            "fph-t11b", // Concepte esențiale despre voință
          ],
        },

        {
          id: "fph-cap11a-sub2",
          titlu: "Etapele actului voluntar",
          quizuri: [
            "fph-t11c", // Introducere și punere în context a etapelor actului voluntar
          ],
        },
      ],
    },
    {
      id: "fph-cap11b",
      titlu: "Curs 11B. Atenția",
      subcapitole: [
        {
          id: "fph-cap11b-sub1",
          titlu: "Definirea și specificul atenției",
          quizuri: [
            "fph-t11d", // Definirea atenției
          ],
        },

        {
          id: "fph-cap11b-sub2",
          titlu: "Tipuri de atenție",
          quizuri: [
            "fph-t11e", // Introducere: atenție involuntară, voluntară, postvoluntară
          ],
        },

        {
          id: "fph-cap11b-sub3",
          titlu: "Modalități de favorizare și educare a atenției voluntare",
          quizuri: [
            "fph-t11i", // Modalități de favorizare a atenției voluntare
            "fph-t11j", // Condiții necesare pentru educarea atenției voluntare
          ],
        },
      ],
    },
    {
      id: "fph-cap12",
      titlu: "Curs 12. Limbajul și comunicarea",
      subcapitole: [
        {
          id: "fph-cap12-sub1",
          titlu: "Limbajul: definiții și caracteristici",
          quizuri: ["fph-t12a", "fph-t12b"],
        },
        {
          id: "fph-cap12-sub2",
          titlu: "Funcțiile limbajului",
          quizuri: ["fph-t12c"],
        },
        {
          id: "fph-cap12-sub3",
          titlu: "Tipuri de limbaj",
          quizuri: ["fph-t12d", "fph-t12e", "fph-t12f", "fph-t12g"],
        },
      ],
    },
    {
      id: "fph-cap13",
      titlu: "Curs 13. Personalitatea",
      subcapitole: [
        {
          id: "fph-cap13-sub1",
          titlu: "Definirea personalității",
          quizuri: ["fph-t13a"],
        },
        {
          id: "fph-cap13-sub2",
          titlu: "Teorii ale personalității",
          quizuri: [
            "fph-t13b", // Gordon Allport – Teoria trăsăturilor
            "fph-t13c", // Cattell – 16 factori
            "fph-t13d", // Erikson – 8 stadii
            "fph-t13e", // Modelul Big Five
            "fph-t13f", // Modelul HEXACO
            "fph-t13g", // Abordarea structural-sistemică
          ],
        },
        {
          id: "fph-cap13-sub3",
          titlu: "Temperamentul",
          quizuri: ["fph-t13h"], //"fph-t13i"
        },
        {
          id: "fph-cap13-sub4",
          titlu: "Aptitudinile",
          quizuri: ["fph-t13j", "fph-t13k"],
        },
        {
          id: "fph-cap13-sub5",
          titlu: "Caracterul",
          quizuri: ["fph-t13l", "fph-t13m", "fph-t13n"],
        },
      ],
    },
  ],

  // De pornire: câte o singură întrebare pe fiecare subcapitol.
  // Ulterior poți adăuga întrebări în array-ul "questions" pentru fiecare topic.
  topics: [
    // Curs 1
    // Quiz 1   Informații introductive în psihologie
    {
      id: "fph-t1a",
      title: "Informații introductive în psihologie",
      questions: [
        {
          text: "Definește etimologia cuvântului <span class='tip'><strong>„psihologie”</strong><span class='tooltip-box'><strong>Spus simplu:</strong> termenul vine din greacă și combină două rădăcini: una despre „suflet/ minte”, alta despre „studiu/ știință”.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>psyche (gr.) = suflet, suflu</strong><span class='tooltip-box'><strong>Explicație:</strong> „psyche” trimite la suflet/ minte (în sens larg, interiorul omului).<br /><br /><strong>Exemplu:</strong> când spui „viață psihică”, te referi la trăiri, gânduri, stări interioare.</span></span>",
            "<span class='tip'><strong>logos (gr.) = cuvânt, știință</strong><span class='tooltip-box'><strong>Explicație:</strong> „logos” e folosit frecvent în sens de studiu/ știință/ explicație rațională.<br /><br /><strong>Exemplu:</strong> bio-logie = studiul vieții; socio-logie = studiul societății.</span></span>",
            "<span class='tip'><strong>psyche (gr.) = corp fizic, materie</strong><span class='tooltip-box'><strong>Distractor:</strong> „psyche” nu înseamnă corp fizic; se leagă de suflet/ minte.</span></span>",
            "<span class='tip'><strong>logos (gr.) = sentiment, trăire afectivă</strong><span class='tooltip-box'><strong>Distractor:</strong> „logos” nu înseamnă „sentiment”; are sens de „discurs/ rațiune/ studiu”.</span></span>",
          ],
          answer: [0, 1],
        },

        {
          text: "<span class='tip'><strong>Psihologia </strong><span class='tooltip-box'><strong>Spus simplu:</strong> psihologia este o știință: are obiect de studiu și metode prin care adună dovezi, nu doar păreri.</span></span>este:",
          multiple: false,
          options: [
            "<span class='tip'><strong>știința care se ocupă cu studiul conduitei umane</strong><span class='tooltip-box'><strong>Corect:</strong> psihologia investighează comportamentul (ce fac oamenii) și procesele care îl susțin (de ex., percepție, memorie, emoții, motivație).<br /><br /><strong>Exemplu:</strong> cum influențează stresul performanța la un examen.</span></span>",
            "<span class='tip'><strong>un ansamblu de credințe de simț comun despre comportament</strong><span class='tooltip-box'><strong>Distractor:</strong> simțul comun poate conține intuiții utile, dar nu e sistematic și nu verifică afirmațiile prin metode științifice.</span></span>",
            "<span class='tip'><strong>o disciplină exclusiv filosofică, fără metode științifice</strong><span class='tooltip-box'><strong>Distractor:</strong> psihologia modernă folosește metode (observație, experimente, chestionare, teste etc.).</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Definirea psihicului conform lui <span class='tip'><strong>Neveanu (1978)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> psihicul include conținuturi și procese interne și are roluri (funcții) prin care persoana se raportează la lume și la sine.</span></span> include ideea că psihicul:",
          multiple: true,
          options: [
            "<span class='tip'><strong>un ansamblu de stări, însușiri, fenomene și procese subiective</strong><span class='tooltip-box'><strong>Explicație:</strong> psihicul nu e un singur „lucru”, ci un ansamblu (emoții, gânduri, imagini mentale, dispoziții, trăsături etc.).<br /><br /><strong>Exemplu:</strong> anxietatea (stare), atenția (proces), optimismul (însușire).</span></span>",
            "<span class='tip'><strong>îndeplinește funcții de raportare la lume și la sine</strong><span class='tooltip-box'><strong>Explicație:</strong> psihicul te ajută să înțelegi ce se întâmplă în jur și ce se întâmplă „în tine”.<br /><br /><strong>Exemplu:</strong> îți dai seama că o situație e periculoasă (raportare la lume) și că ți-e frică (raportare la sine).</span></span>",
            "<span class='tip'><strong>îndeplinește funcții de orientare, reflectare și planificare mentală</strong><span class='tooltip-box'><strong>Explicație:</strong> psihicul te ajută să te orientezi (ce e relevant), să reflectezi (ce înseamnă), să planifici (ce urmează să faci).<br /><br /><strong>Exemplu:</strong> observi cerința (orientare), înțelegi ce se cere (reflectare), îți faci pașii de rezolvare (planificare).</span></span>",
            "<span class='tip'><strong>este redus la reacții reflexe automate, fără conținut subiectiv</strong><span class='tooltip-box'><strong>Distractor:</strong> definiția subliniază tocmai componenta subiectivă (trăiri/ procese interne), nu doar reflexe.</span></span>",
          ],
          answer: [0, 1, 2],
        },
      ],
    },
    // Quiz 2   Principiul determinismului
    {
      id: "fph-t1b",
      title: "Principii fundamentale în psihologie",
      questions: [
        // 1) Intro: relevanța principiilor
        {
          text: "De ce sunt importante <span class='tip'><strong>principiile fundamentale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunt „reguli de orientare” care te ajută să explici și să investighezi psihicul în mod coerent, nu doar să descrii ce vezi.</span></span> în psihologie? (după P.P. Neveanu, 1978)",
          multiple: false,
          options: [
            "<span class='tip'><strong>Oferă un cadru comun de explicare și cercetare a psihicului</strong><span class='tooltip-box'><strong>Idee:</strong> principiile spun „ce fel de lucru” este psihicul (de ex., are cauze, e sistem, se dezvoltă, e influențat social).</span></span>",
            "<span class='tip'><strong>Înlocuiesc complet observația și metodele științifice</strong><span class='tooltip-box'><strong>Distractor:</strong> principiile ghidează interpretarea, dar nu țin loc de date, măsurători și evaluare.</span></span>",
            "<span class='tip'><strong>Spun că psihicul apare la întâmplare și nu poate fi explicat</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice direct ideea de determinism și de explicație psihologică.</span></span>",
          ],
          answer: 0,
        },

        // 2) Enumerare: principiu — sintagmă
        {
          text: "Alege toate asocierile corecte <span class='tip'><strong>principiu – idee pe scurt</strong><span class='tooltip-box'><strong>Spus simplu:</strong> fiecare principiu rezumă o idee mare despre cum funcționează psihicul.</span></span>",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Principiul determinismului — psihicul are cauze</strong><span class='tooltip-box'><strong>Detaliu:</strong> faptele psihice se înscriu pe traiectoria unei cauzalități <strong>multiple</strong>, <strong>complexe</strong>, <strong>probabilistice</strong> (Cosmovici, 1996; Neveanu, 1978).</span></span>",
            "<span class='tip'><strong>Principiul organizării sistemice — psihicul este un sistem</strong><span class='tooltip-box'><strong>Detaliu:</strong> psihicul funcționează ca un ansamblu de elemente aflate într-o interacțiune ordonată; este <strong>deschis</strong>, <strong>dinamic</strong>, <strong>hipercomplex</strong>, <strong>autoreglabil</strong> (Cosmovici, 1996; Neveanu, 1978).</span></span>",
            "<span class='tip'><strong>Principiul dezvoltării — psihicul se transformă în timp</strong><span class='tooltip-box'><strong>Detaliu:</strong> psihicul nu rămâne „fix”; se schimbă de-a lungul vieții, construind pe achiziții anterioare.</span></span>",
            "<span class='tip'><strong>Principiul condiționării social-istorice — psihicul e modelat de context</strong><span class='tooltip-box'><strong>Detaliu:</strong> factorii sociali și contextul istoric/cultural mijlocesc formarea și manifestarea psihicului.</span></span>",
            "<span class='tip'><strong>Principiul întâmplării — psihicul nu are cauze identificabile</strong><span class='tooltip-box'><strong>Distractor:</strong> nu este o formulare de principiu aici; contrazice determinismul.</span></span>",
          ],
          answer: [0, 1, 2, 3],
        },

        // 3) Determinism: definiție
        {
          text: "Ce afirmă <span class='tip'><strong>principiul determinismului?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> evenimentele psihice nu „apar din nimic”; au cauze și condiții care le influențează.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Faptele psihice se înscriu pe traiectoria unei cauzalități</strong><span class='tooltip-box'><strong>Explicație:</strong> un gând/ emoție/ comportament apare într-un context și are factori care îl favorizează sau îl mențin.</span></span>",
            "<span class='tip'><strong>Faptele psihice apar la întâmplare și nu pot fi explicate</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de cauzalitate.</span></span>",
            "<span class='tip'><strong>Faptele psihice nu pot fi investigate științific</strong><span class='tooltip-box'><strong>Distractor:</strong> psihologia folosește metode tocmai pentru a testa explicații.</span></span>",
          ],
          answer: 0,
        },

        // 4) Determinism: multiple/complex/probabilistic
        {
          text: "Ce înseamnă că determinarea psihicului este <span class='tip'><strong>multiplă, complexă și probabilistică?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> de obicei nu există o singură cauză; mai mulți factori se combină, iar efectul nu e „automat” identic la toți.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Mai mulți factori interacționează, iar efectele depind de context și probabilitate</strong><span class='tooltip-box'><strong>Exemplu:</strong> stresul + lipsa somnului + presiunea socială pot crește riscul de anxietate, dar nu garantează același rezultat la toți.</span></span>",
            "<span class='tip'><strong>Fiecare fapt psihic are o singură cauză directă, identică pentru toți</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta ar descrie o cauzalitate simplă și rigidă.</span></span>",
            "<span class='tip'><strong>Relațiile cauzale sunt fixe și produc întotdeauna același efect</strong><span class='tooltip-box'><strong>Distractor:</strong> „probabilistic” înseamnă tocmai că nu e mecanic și invariabil.</span></span>",
          ],
          answer: 0,
        },

        // 5) Organizare sistemică:
        {
          text: "Conform principiului organizării sistemice, psihicul este un sistem <span class='tip'><strong>deschis, dinamic, hipercomplex și autoreglabil</strong><span class='tooltip-box'><strong>Spus simplu:</strong> psihicul funcționează ca un „ansamblu” care schimbă informații cu mediul, se modifică în timp, are multe niveluri interne și se poate regla prin feedback.</span></span>. Definește termenii:",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Deschis</strong> — este permeabil la schimburi cu mediul și cu ceilalți (informații, relații, cerințe)<span class='tooltip-box'><strong>Exemplu:</strong> feedbackul de la profesori/ colegi îți poate schimba motivația și strategiile de învățare.</span></span>",
            "<span class='tip'><strong>Dinamic</strong> — structura și funcțiile psihice se transformă în mod constant (prin învățare, adaptare, experiență)<span class='tooltip-box'><strong>Exemplu:</strong> pe măsură ce înveți, îți ajustezi strategiile și modul de rezolvare a problemelor.</span></span>",
            "<span class='tip'><strong>Hipercomplex</strong> — este organizat pe sisteme și subsisteme aflate în interacțiune<span class='tooltip-box'><strong>Exemplu:</strong> atenția, memoria și emoțiile se influențează reciproc într-o sarcină de examen.</span></span>",
            "<span class='tip'><strong>Autoreglabil</strong> — își ajustează funcționarea pe baza conexiunilor inverse (feedback)<span class='tooltip-box'><strong>Exemplu:</strong> dacă observi că nu reții, îți schimbi strategia (recapitulare, pauze, alt tip de exerciții).</span></span>",
            "<span class='tip'><strong>Autoreglabil</strong> — reacțiile psihice sunt complet fixe și independente de experiență<span class='tooltip-box'><strong>Distractor:</strong> autoreglarea înseamnă ajustare în funcție de rezultate și context, nu fixitate.</span></span>",
          ],
          answer: [0, 1, 2, 3],
        },
        // 8) Principiul dezvoltării: formulare generală
        {
          text: "Ce afirmă <span class='tip'><strong>principiul dezvoltării?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> psihicul nu „se oprește”; se transformă pe parcursul vieții.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Psihicul este într-o continuă transformare de-a lungul vieții</strong><span class='tooltip-box'><strong>Exemplu:</strong> de la copilărie la adolescență se schimbă controlul emoțional și modul de gândire.</span></span>",
            "<span class='tip'><strong>Psihicul se fixează definitiv la o anumită vârstă</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de transformare continuă.</span></span>",
          ],
          answer: 0,
        },

        // 10) Condiționare social-istorică: pragmatic/epistemic/axiologic
        {
          text: "Alege toate afirmațiile corecte despre omul ca subiect <span class='tip'><strong>pragmatic, epistemic și axiologic</strong><span class='tooltip-box'><strong>Spus simplu:</strong> omul acționează (pragmatic), cunoaște (epistemic) și evaluează prin valori (axiologic), într-un context social și istoric.</span></span>",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Subiect pragmatic</strong> — orientat spre acțiune practică și rezolvarea problemelor<span class='tooltip-box'><strong>Exemplu:</strong> alegi o strategie ca să te descurci într-o situație concretă (timp, resurse, obstacole).</span></span>",
            "<span class='tip'><strong>Subiect epistemic</strong> — capabil de cunoaștere, înțelegere și construire de sens<span class='tooltip-box'><strong>Exemplu:</strong> cauți explicații („de ce mi se întâmplă?”), înveți concepte, legi informații.</span></span>",
            "<span class='tip'><strong>Subiect axiologic</strong> — purtător și creator de valori, norme și criterii de evaluare<span class='tooltip-box'><strong>Exemplu:</strong> decizi ce e „corect/ important” și îți ghidezi alegerile după valori (dreptate, grijă, responsabilitate).</span></span>",
            "<span class='tip'><strong>Subiect pragmatic</strong> — reacționează automat, fără scop și fără control<span class='tooltip-box'><strong>Distractor:</strong> „pragmatic” înseamnă orientare spre scop și acțiune, nu automatism fără sens.</span></span>",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // Curs 2 – Instanțe ale vieții psihice test

    // S1. Conștient / Conștiință

    {
      id: "fph-t2a",
      title: "Conștiința ca experiență trăită și organizare mentală complexă",
      questions: [
        {
          text: "Andrei Cosmovici distinge două forme ale <span class='tip'><strong>conștiinței.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> conștiința poate fi orientată fie „spre lume”, fie „spre mine”.</span></span> Care sunt acestea?",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Conștiința implicită</strong> — orientarea către obiecte și situații din mediu<span class='tooltip-box'><strong>Spus simplu:</strong> ești atent(ă) la ce se întâmplă „în afară”.<br /><br /><strong>Exemplu:</strong> urmărești explicația profesorului sau traficul când traversezi.</span></span>",
            "<span class='tip'><strong>Conștiința reflexivă</strong> — orientarea asupra propriei persoane<span class='tooltip-box'><strong>Spus simplu:</strong> îți observi gândurile, emoțiile, intențiile.<br /><br /><strong>Exemplu:</strong> „Sunt anxios(ă) acum” sau „De ce m-a deranjat asta?”.</span></span>",
            "<span class='tip'><strong>Conștiința biologică</strong> — activitatea reflexelor simple<span class='tooltip-box'><strong>Distractor:</strong> reflexele sunt procese fiziologice; nu reprezintă categoria folosită aici pentru formele conștiinței.</span></span>",
          ],
          answer: [0, 1],
        },

        {
          text: "Conștiința poate fi descrisă ca o experimentare <span class='tip'><strong>subiectivă</strong><span class='tooltip-box'><strong>Ce înseamnă:</strong> este trăită personal, din „perspectiva mea”.<br /><br /><strong>Exemplu:</strong> aceeași situație poate fi resimțită diferit de două persoane.</span></span>, <span class='tip'><strong>structurată</strong><span class='tooltip-box'><strong>Ce înseamnă:</strong> nu e haotică; are organizare internă (atenție, sens, legături între idei).<br /><br /><strong>Exemplu:</strong> îți poți urmări un fir logic al gândurilor.</span></span>, <span class='tip'><strong>complexă</strong><span class='tooltip-box'><strong>Ce înseamnă:</strong> include mai multe componente (gânduri, emoții, intenții) care se influențează.<br /><br /><strong>Exemplu:</strong> emoția îți poate schimba interpretarea și decizia.</span></span> și <span class='tip'><strong>prezentă</strong><span class='tooltip-box'><strong>Ce înseamnă:</strong> se desfășoară „acum”, în timp real, cu implicare activă.<br /><br /><strong>Exemplu:</strong> îți ajustezi răspunsul pe loc în funcție de situație.</span></span>. Ce descrie cel mai bine această formulare?",
          multiple: false,
          options: [
            "<span class='tip'><strong>O experiență trăită personal, organizată și în timp real</strong><span class='tooltip-box'><strong>Idee-cheie:</strong> conștiința este trăire + organizare + funcționare în prezent.</span></span>",
            "<span class='tip'><strong>Un proces complet inconștient</strong><span class='tooltip-box'><strong>Distractor:</strong> inconștientul nu este trăire prezentă și accesibilă direct.</span></span>",
            "<span class='tip'><strong>O reacție automată, fără participare psihică</strong><span class='tooltip-box'><strong>Distractor:</strong> automatismul poate reduce implicarea conștientă, dar nu definește conștiința ca experiență trăită.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Conform lui Lev Vîgotski, conștiința este o construcție sistematică în care sunt implicate toate <span class='tip'><strong>procesele psihice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> conștiința nu e „un singur proces”, ci modul în care procesele lucrează împreună.<br /><br /><strong>Procese psihice (exemple):</strong> percepția, atenția, memoria, gândirea, limbajul, afectivitatea, voința.</span></span>. Ce idee surprinde cel mai bine această perspectivă?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Conștiința reunește și organizează procesele psihice într-un întreg coerent</strong><span class='tooltip-box'><strong>Exemplu:</strong> când rezolvi o problemă, folosești atenția (te concentrezi), memoria (îți amintești reguli), gândirea (faci pași logici), limbajul (formulezi), emoțiile (pot ajuta sau bloca) și voința (perseverezi).</span></span>",
            "<span class='tip'><strong>Conștiința se reduce la simpla percepție senzorială</strong><span class='tooltip-box'><strong>Distractor:</strong> percepția e doar o componentă; perspectiva sistemică spune că intervin mai multe procese.</span></span>",
            "<span class='tip'><strong>Conștiința este formată doar din procesele de limbaj</strong><span class='tooltip-box'><strong>Distractor:</strong> limbajul e important, dar nu e „tot” (mai intră atenția, memoria, afectivitatea etc.).</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Wundt descrie conștiința ca pe o <span class='tip'><strong>sinteză creatoare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> mintea nu doar adună „bucăți” de informație, ci le combină și le transformă în ceva nou.<br /><br /><strong>Idee-cheie:</strong> din elemente simple pot apărea experiențe psihice mai complexe și originale.</span></span>. Ce înseamnă aceasta?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Mintea combină și transformă informațiile, generând experiențe și înțelegeri noi</strong><span class='tooltip-box'><strong>Exemplu:</strong> din amintiri + emoții + interpretare, aceeași întâmplare poate deveni „o lecție”, nu doar un fapt reținut.</span></span>",
            "<span class='tip'><strong>Mintea doar copiază fidel ceea ce primește din exterior</strong><span class='tooltip-box'><strong>Distractor:</strong> ar descrie o minte „pasivă”; sinteza creatoare spune că mintea contribuie activ.</span></span>",
            "<span class='tip'><strong>Gândirea are loc fără legătură cu percepțiile sau emoțiile</strong><span class='tooltip-box'><strong>Distractor:</strong> în practică, percepțiile și emoțiile influențează ce observi, cum interpretezi și ce decizi.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    // S2. Inconștientul
    {
      id: "fph-t2c",
      title: "Inconștientul – definire",
      questions: [
        {
          text: "Inconștientul este descris ca depozitar al achizițiilor de natură <span class='tip'><strong>cognitivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> informații și „urme” mentale (cunoștințe, amintiri, deprinderi) care nu sunt în atenția ta acum, dar pot exista în fundal.<br /><br /><strong>Exemplu:</strong> știi o regulă învățată, dar nu te gândești la ea până nu ai nevoie.</span></span></span> și al aspectelor de factură <span class='tip'><strong>motivațional-afectivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nevoi, impulsuri, dorințe și trăiri emoționale care pot influența ce alegi și cum reacționezi, chiar fără să le „simți” clar conștient.<br /><br /><strong>Exemplu:</strong> o teamă veche poate face să eviți o situație, fără să îți dai imediat seama de ce.</span></span></span>, aflate în stare de <span class='tip'><strong>latență</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunt „în fundal” (nu sunt active în conștiință acum), dar pot deveni active în anumite condiții.<br /><br /><strong>Exemplu:</strong> o amintire revine brusc când auzi o melodie asociată cu ea.</span></span></span> Ce exprimă cel mai adecvat această descriere?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Inconștientul păstrează atât informații, cât și conținuturi afective care nu sunt în prezent conștiente</strong><span class='tooltip-box'><strong>Idee-cheie:</strong> nu e „gol”, ci conține atât componente cognitive, cât și motivaționale/ emoționale care pot rămâne în fundal.</span></span>",
            "<span class='tip'><strong>Inconștientul include doar informații senzoriale actuale</strong><span class='tooltip-box'><strong>Distractor:</strong> „actual” și strict senzorial ține mai mult de ceea ce percepi acum, nu de depozitarea în latență.</span></span>",
            "<span class='tip'><strong>Inconștientul se referă exclusiv la reacțiile motorii automate</strong><span class='tooltip-box'><strong>Distractor:</strong> reacțiile automate există, dar aici accentul este pe conținuturi psihice (cognitive și afective) aflate în fundal.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Se afirmă că inconștientul are un caracter <span class='tip'><strong>dinamic</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu e un „depozit inert”; conținuturile pot să se activeze, să se combine și să influențeze ce faci.</span></span></span>, predominant <span class='tip'><strong>afectiv</strong><span class='tooltip-box'><strong>Spus simplu:</strong> emoțiile, dorințele și tensiunile au un rol important în felul în care inconștientul influențează persoana.</span></span></span>, cu <span class='tip'><strong>potențial activator</strong><span class='tooltip-box'><strong>Spus simplu:</strong> poate declanșa sau orienta reacții (alegeri, atitudini, comportamente), chiar fără intenție conștientă clară.<br /><br /><strong>Exemplu:</strong> eviți o situație „din reflex” pentru că te-a pus cândva în dificultate.</span></span></span> Ce înseamnă aceasta?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Conținuturile inconștiente pot influența conduita, declanșând sau orientând reacțiile individului</strong><span class='tooltip-box'><strong>Exemplu:</strong> o stare difuză de anxietate poate face să interpretezi un mesaj neutru ca „amenințător” și să reacționezi defensiv.</span></span>",
            "<span class='tip'><strong>Conținuturile inconștiente sunt complet inactive și fără efect asupra comportamentului</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de „dinamic” și „activator”.</span></span>",
            "<span class='tip'><strong>Inconștientul acționează doar la nivel intelectual, fără implicare afectivă</strong><span class='tooltip-box'><strong>Distractor:</strong> formularea spune explicit „predominant afectiv”.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t2d",
      title: "Inconștientul la Sigmund Freud",
      questions: [
        {
          text: "În teoria lui Sigmund Freud, inconștientul este strâns legat de <span class='tip'><strong>instanțele vieții psihice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> Freud descrie psihicul ca având „părți” cu roluri diferite, care pot intra în conflict (impulsuri, reguli, negociere cu realitatea).</span></span></span> numite:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Sinele (Id)</strong><span class='tooltip-box'><strong>Rol:</strong> impulsuri și dorințe primare, orientate spre satisfacere imediată.<br /><br /><strong>Exemplu:</strong> „Vreau acum!”</span></span>, <span class='tip'><strong>Eul (Ego)</strong><span class='tooltip-box'><strong>Rol:</strong> mediază între dorințe și realitate, caută soluții posibile și acceptabile.<br /><br /><strong>Exemplu:</strong> „Nu pot acum; găsesc o variantă / aștept.”</span></span> și <span class='tip'><strong>Supraeul (Superego).</strong><span class='tooltip-box'><strong>Rol:</strong> reguli, valori și idealuri interiorizate (ce „e permis/ interzis”).<br /><br /><strong>Exemplu:</strong> vinovăție sau rușine după încălcarea unei reguli.</span></span></span>",
            "<span class='tip'><strong>Creierul drept, creierul stâng și trunchiul cerebral</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea sunt structuri neuroanatomice, nu instanțele psihice freudiene.</span></span>",
            "<span class='tip'><strong>Memoria de scurtă durată, memoria de lungă durată și memoria senzorială</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta este o clasificare a memoriei, nu modelul instanțelor la Freud.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce rol are <span class='tip'><strong>Sinele</strong><span class='tooltip-box'><strong>Spus simplu:</strong> partea „impulsivă” a psihicului, orientată spre plăcere și satisfacere imediată (dorințe, nevoi, tensiuni).</span></span></span> în raport cu inconștientul, în viziunea freudiană?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Reprezintă sursa principală a pulsiunilor și dorințelor inconștiente</strong><span class='tooltip-box'><strong>Exemplu:</strong> apare un impuls puternic, chiar dacă „nu e momentul potrivit”, iar apoi Eul încearcă să îl gestioneze.</span></span>",
            "<span class='tip'><strong>Coordonează exclusiv comportamentele conștiente, raționale</strong><span class='tooltip-box'><strong>Distractor:</strong> asta ar descrie mai degrabă funcții asociate cu Eul (Ego), nu cu Sinele.</span></span>",
            "<span class='tip'><strong>Este responsabil doar de autocontrolul moral</strong><span class='tooltip-box'><strong>Distractor:</strong> autocontrolul moral este asociat cu Supraeul.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t2e",
      title: "Inconștientul la Carl Gustav Jung",
      questions: [
        {
          text: "În modelul lui Carl Gustav Jung, cum se raportează <span class='tip'><strong>Egoul</strong><span class='tooltip-box'><strong>Spus simplu:</strong> centrul conștiinței — partea care spune „eu” aici și acum (gânduri conștiente, decizii asumate).</span></span></span>, <span class='tip'><strong>inconștientul personal</strong><span class='tooltip-box'><strong>Spus simplu:</strong> conținuturi legate de istoria ta: amintiri, experiențe, lucruri uitate sau reprimate.</span></span></span> și <span class='tip'><strong>inconștientul colectiv?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un nivel profund, comun oamenilor, care include modele universale de experiență (arhetipuri).</span></span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Egoul aparține conștiinței, inconștientul personal aparține istoriei individuale, iar inconștientul colectiv aparține umanității</strong><span class='tooltip-box'><strong>Idee-cheie:</strong> personal = din viața ta; colectiv = comun, universal.</span></span>",
            "<span class='tip'><strong>Toate trei sunt identice și îndeplinesc aceeași funcție psihică</strong><span class='tooltip-box'><strong>Distractor:</strong> la Jung sunt niveluri diferite, cu roluri diferite.</span></span>",
            "<span class='tip'><strong>Egoul face parte din inconștientul colectiv, iar celelalte două sunt forme ale conștiinței</strong><span class='tooltip-box'><strong>Distractor:</strong> Egoul este centrul conștiinței, nu al inconștientului colectiv.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Pentru Jung, inconștientul colectiv este:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Un depozit personal de amintiri din copilărie</strong><span class='tooltip-box'><strong>Distractor:</strong> asta ar descrie inconștientul <em>personal</em>, nu pe cel colectiv.</span></span>",
            "<span class='tip'><strong>Un nivel profund al psihicului populat cu arhetipuri</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „modele universale” care apar în multe culturi (în mituri, simboluri, povești).<br /><br /><strong>Exemplu:</strong> tema „eroului”, „mamei”, „înțeleptului”.</span></span>",
            "<span class='tip'><strong>O zonă strict legată de procesele de limbaj</strong><span class='tooltip-box'><strong>Distractor:</strong> conceptul este mai larg decât limbajul; ține de structuri și simboluri universale.</span></span>",
          ],
          answer: 1,
        },
        {
          text: "Care dintre următoarele exemple ilustrează mai bine ideea de <span class='tip'><strong>arhetip jungian?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un „tipar universal” de imagine/ rol/ temă care revine în culturi diferite, chiar dacă povestea concretă se schimbă.</span></span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>O regulă de gramatică învățată la școală</strong><span class='tooltip-box'><strong>Distractor:</strong> este o achiziție culturală explicită, nu un tipar universal simbolic.</span></span>",
            "<span class='tip'><strong>Imaginea eroului, a mamei sau a înțeleptului, prezentă în mituri, povești și simboluri din culturi diferite</strong><span class='tooltip-box'><strong>Corect:</strong> tocmai repetarea trans-culturală susține ideea de arhetip.</span></span>",
            "<span class='tip'><strong>Un cod de acces la contul unei platforme digitale</strong><span class='tooltip-box'><strong>Distractor:</strong> este un element tehnic, contextual, fără caracter universal simbolic.</span></span>",
          ],
          answer: 1,
        },
      ],
    },

    // S3. Subconștientul

    {
      id: "fph-t2f",
      title: "Subconștientul (preconștientul)",
      questions: [
        {
          text: "În perspectiva freudiană, <span class='tip'><strong>subconștientul (numit și preconștientul)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> o „zonă de trecere” între conștient și inconștient.<br /><br /><strong>Idee-cheie:</strong> include conținuturi care nu sunt în atenție acum, dar pot fi aduse relativ ușor în conștiință (cu puțin efort sau la un indiciu potrivit).<br /><br /><strong>Exemplu:</strong> îți amintești o informație când cineva îți dă un „hint”.</span></span></span> este:",
          multiple: false,
          options: [
            "<span class='tip'><strong>O zonă „tampon” între conștient și inconștient, depozitând amintiri și automatisme gata să devină conștiente</strong><span class='tooltip-box'><strong>Exemplu:</strong> îți vine în minte parola/ numele unui actor după câteva secunde de căutare sau după un indiciu.</span></span>",
            "<span class='tip'><strong>Identic cu inconștientul, fără nicio diferență funcțională</strong><span class='tooltip-box'><strong>Distractor:</strong> în această schemă, preconștientul este tocmai zona mai accesibilă, spre deosebire de inconștientul profund.</span></span>",
            "<span class='tip'><strong>Doar totalitatea reflexelor necondiționate</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexele necondiționate țin de funcționare neurofiziologică de bază, nu de conținuturi psihice „gata de acces”.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce tip de conținut este specific <span class='tip'><strong>subconștientului?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> lucruri pe care le știi/ le-ai învățat, dar nu le folosești acum; le poți reactiva relativ ușor.</span></span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Conținuturi complet inaccesibile conștiinței</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta descrie mai bine ideea de conținuturi inconștiente profunde (greu/ imposibil de adus direct în conștiință).</span></span>",
            "<span class='tip'><strong>Amintiri, deprinderi și scheme de acțiune care pot fi readuse relativ ușor în câmpul conștiinței</strong><span class='tooltip-box'><strong>Exemplu:</strong> regula de circulație pe care nu o „recitești” zilnic, dar o aplici automat și o poți explica dacă ești întrebat.</span></span>",
            "<span class='tip'><strong>Procese strict fiziologice, fără legătură cu trăirile psihice</strong><span class='tooltip-box'><strong>Distractor:</strong> subconștientul se referă la conținuturi psihice (amintiri, deprinderi), nu doar la funcții fiziologice.</span></span>",
          ],
          answer: 1,
        },
        {
          text: "În legătură cu subconștientul, ce caracterizează <span class='tip'><strong>atenția postvoluntară?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> după ce pornești cu efort (atenție voluntară), activitatea devine interesantă și atenția se menține aproape „de la sine”.<br /><br /><strong>Exemplu:</strong> începi greu să citești, dar după câteva pagini te prinde și continui fără să te mai forțezi.</span></span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Menținerea atenției fără efort conștient, datorită interesului pentru activitate</strong><span class='tooltip-box'><strong>Corect:</strong> componenta-cheie este trecerea de la efort la menținere spontană prin interes.</span></span>",
            "<span class='tip'><strong>Concentrarea forțată, cu consum mare de energie psihică</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie mai bine atenția voluntară (efort susținut), nu postvoluntară.</span></span>",
            "<span class='tip'><strong>Reacția automată declanșată de un stimul brusc</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie mai degrabă atenția involuntară (captată de un stimul puternic/ nou).</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t2g",
      title: "Relația conștient / subconștient / inconștient",
      questions: [
        {
          text: "Conștientul, subconștientul și inconștientul pot fi înțelese ca <span class='tip'><strong>repere ale unui continuum funcțional?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu sunt „cutii” complet separate; sunt niveluri care comunică și împreună susțin funcționarea psihică.</span></span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Trei sisteme complet separate între ele</strong><span class='tooltip-box'><strong>Distractor:</strong> formularea corectă accentuează continuitatea și interacțiunea, nu separarea totală.</span></span>",
            "<span class='tip'><strong>Repere ale unui continuum funcțional al vieții psihice, care împreună formează un sistem înalt funcțional</strong><span class='tooltip-box'><strong>Exemplu:</strong> o idee poate porni „din fundal” (subconștient), ajunge în atenție (conștient), iar unele influențe profunde pot orienta reacțiile (inconștient).</span></span>",
            "<span class='tip'><strong>Structuri strict anatomice ale creierului</strong><span class='tooltip-box'><strong>Distractor:</strong> aici vorbim despre niveluri/ funcții psihice, nu despre părți anatomice.</span></span>",
          ],
          answer: 1,
        },
        {
          text: "Visul este asociat în principal cu <span class='tip'><strong>care nivel al vieții psihice?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> în vis scade controlul conștient, iar conținuturile apar într-o formă mai puțin „filtrată” de voință și logică.</span></span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Conștientul</strong><span class='tooltip-box'><strong>Distractor:</strong> conștientul implică control voluntar și luciditate; în vis controlul voluntar este redus.</span></span>",
            "<span class='tip'><strong>Subconștientul</strong><span class='tooltip-box'><strong>Distractor:</strong> subconștientul include conținuturi relativ ușor accesibile prin efort conștient; visul nu apare prin „aducere voluntară” în atenție.</span></span>",
            "<span class='tip'><strong>Inconștientul</strong><span class='tooltip-box'><strong>Corect:</strong> visul apare în absența controlului conștient și poate exprima simbolic dorințe, conflicte și trăiri profunde.</span></span>",
          ],
          answer: 2,
        },
        {
          text: "Intuiția este frecvent explicată ca având sediul preponderent în <span class='tip'><strong>care nivel?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> intuiția pare „dintr-odată”, fără să poți descrie imediat pașii raționamentului.</span></span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Conștient</strong><span class='tooltip-box'><strong>Distractor:</strong> conștientul înseamnă, de regulă, analiză explicită și pași ușor de urmărit.</span></span>",
            "<span class='tip'><strong>Subconștient</strong><span class='tooltip-box'><strong>Distractor:</strong> poate contribui (prin deprinderi și automatisme), dar formularea cerută aici accentuează preponderent inconștientul.</span></span>",
            "<span class='tip'><strong>Inconștient</strong><span class='tooltip-box'><strong>Explicație:</strong> este descrisă uneori ca un „raționament cu premise inconștiente” (Cosmovici, 1996) — ajungi la concluzie, dar premisele/ pașii nu sunt complet conștientizați.<br /><br /><strong>Exemplu:</strong> „simți” că o soluție e bună înainte să poți argumenta complet de ce.</span></span>",
          ],
          answer: 2,
        },
      ],
    },

    // Curs 3 – Premise neurofiziologice ale activității psihice

    // S1. Excitabilitate, informație și stimul

    {
      id: "fph-t3a",
      title: "Excitabilitatea",
      questions: [
        {
          text: "Excitabilitatea este definită ca:",
          options: [
            "<span class='tip'><strong>Proprietatea materiei vii de a răspunde activ și selectiv la stimuli</strong><span class='tooltip-box'><strong>Spus simplu:</strong> organismul „simte” un stimul și își schimbă funcționarea (nu rămâne pasiv).<br /><br /><strong>Exemplu:</strong> pupila se micșorează la lumină puternică; retragi mâna la atingerea unui obiect fierbinte.</span></span>",
            "<span class='tip'><strong>Capacitatea materiei de a ocupa un loc în spațiu și de a avea masă</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie proprietăți fizice generale, nu o reacție biologică la stimul.</span></span>",
            "<span class='tip'><strong>Proprietatea exclusivă a mașinilor de a reacționa la comenzi</strong><span class='tooltip-box'><strong>Distractor:</strong> excitabilitatea este specifică materiei vii (organisme), nu dispozitivelor.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Când spunem că excitabilitatea presupune un răspuns <span class='tip'><strong>activ</strong><span class='tooltip-box'><strong>Spus simplu:</strong> apar modificări interne (în sistem nervos, mușchi, glande), nu doar „primești” stimulul.</span></span> și <span class='tip'><strong>selectiv</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu reacționezi la fel la orice; răspunsul depinde de tipul și intensitatea stimulului.</span></span>, înseamnă că:",
          options: [
            "<span class='tip'><strong>Organismul își adaptează răspunsul în funcție de natura și intensitatea stimulului</strong><span class='tooltip-box'><strong>Exemplu:</strong> la un zgomot mic doar întorci capul; la un zgomot puternic tresari și îți crește ritmul cardiac.</span></span>",
            "<span class='tip'><strong>Organismul reacționează identic la orice stimul, indiferent de context</strong><span class='tooltip-box'><strong>Distractor:</strong> ar contrazice ideea de răspuns selectiv.</span></span>",
            "<span class='tip'><strong>Organismul nu poate diferenția între stimuli interni și externi</strong><span class='tooltip-box'><strong>Distractor:</strong> organismul poate răspunde diferențiat atât la stimuli din mediu, cât și la cei din interior (ex.: foame, durere).</span></span>",
          ],
          answer: 0,
        },
      ],
    },
    {
      id: "fph-t3b",
      title: "Informația",
      questions: [
        {
          text: "Conform lui Popescu-Neveanu, informația este unul dintre cele trei aspecte de existență ale materiei, alături de <span class='tip'><strong>substanță</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „din ce e făcut” un lucru (componenta materială).</span></span> și <span class='tip'><strong>energie</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „ce poate produce schimbare” (mișcare, transformare, lucru mecanic).</span></span>. Ce exprimă cel mai bine rolul informației?",
          options: [
            "<span class='tip'><strong>Dimensiunea de organizare și semnificație a proceselor și stărilor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> informația înseamnă „cum e organizat” și „ce înseamnă” un semnal pentru un sistem.<br /><br /><strong>Exemplu:</strong> același sunet poate fi „alarmă” (pericol) sau „notificare” (neutru), în funcție de semnificație.</span></span>",
            "<span class='tip'><strong>Identică cu substanța fizică din care este alcătuit un obiect</strong><span class='tooltip-box'><strong>Distractor:</strong> substanța = material; informația = organizare/ semnificație.</span></span>",
            "<span class='tip'><strong>Doar o formă de energie mecanică</strong><span class='tooltip-box'><strong>Distractor:</strong> energia e capacitate de a produce lucru; informația este despre organizare și comunicare între sisteme.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Informația este descrisă ca element care conectează sisteme și facilitează activități complexe de <span class='tip'><strong>autoorganizare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sistemul își aranjează „singur” funcționarea internă.</span></span>, <span class='tip'><strong>autocontrol</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sistemul își dirijează acțiunile în funcție de scop.</span></span> și <span class='tip'><strong>autoreglaj</strong><span class='tooltip-box'><strong>Spus simplu:</strong> își menține sau își reface echilibrul (ajustează când apar abateri).</span></span>. Care afirmație surprinde cel mai bine această idee?",
          options: [
            "<span class='tip'><strong>Informația permite sistemelor să-și coordoneze funcționarea și să-și ajusteze răspunsurile în raport cu mediul</strong><span class='tooltip-box'><strong>Exemplu:</strong> când observi că ai greșit (feedback), schimbi strategia ca să obții un rezultat mai bun.</span></span>",
            "<span class='tip'><strong>Informația nu are niciun rol în funcționarea sistemelor biologice</strong><span class='tooltip-box'><strong>Distractor:</strong> comunicarea și reglarea sunt imposibile fără informație.</span></span>",
            "<span class='tip'><strong>Informația se referă doar la mesajele verbale dintre oameni</strong><span class='tooltip-box'><strong>Distractor:</strong> informația poate fi și non-verbală, senzorială, fiziologică (ex.: durere, temperatură, semnale neuronale).</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t3c",
      title: "Stimulul",
      questions: [
        {
          text: "Stimulul este definit ca „orice factor de mediu care declanșează modificări <span class='tip'><strong>reversibile</strong><span class='tooltip-box'><strong>Spus simplu:</strong> schimbări trecătoare, după care organismul poate reveni la starea inițială.</span></span> în materia vie”. Ce descrier corect stimulul?",
          options: [
            "<span class='tip'><strong>Un factor de mediu care produce modificări trecătoare în organism, fără a-l altera definitiv</strong><span class='tooltip-box'><strong>Exemplu:</strong> lumina puternică schimbă mărimea pupilei, apoi revine.</span></span>",
            "<span class='tip'><strong>Orice eveniment care distruge în mod ireversibil structura organismului</strong><span class='tooltip-box'><strong>Distractor:</strong> aici nu mai vorbim de stimul „obișnuit”, ci de afectare/ distrugere.</span></span>",
            "<span class='tip'><strong>Un factor care acționează doar asupra obiectelor neînsuflețite</strong><span class='tooltip-box'><strong>Distractor:</strong> stimulul este definit prin efect asupra materiei vii.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Stimulii pot fi caracterizați prin <span class='tip'><strong>natură</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce fel de stimul e (luminos, termic, chimic, mecanic).</span></span>, <span class='tip'><strong>intensitate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât de „puternic” acționează.</span></span>, <span class='tip'><strong>distribuție în spațiu</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pe ce zonă/ întindere acționează.</span></span> și <span class='tip'><strong>durată</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât timp acționează.</span></span>. Ce combinație descrie cel mai bine aceste caracteristici?",
          options: [
            "<span class='tip'><strong>Tipul stimulului, forța, zona asupra căreia acționează și timpul cât acționează</strong><span class='tooltip-box'><strong>Exemplu:</strong> lumină (natură) puternică (intensitate) pe tot câmpul vizual (distribuție) timp de 10 secunde (durată).</span></span>",
            "<span class='tip'><strong>Doar intensitatea și durata</strong><span class='tooltip-box'><strong>Distractor:</strong> lipsesc natura și distribuția, care contează și ele.</span></span>",
            "<span class='tip'><strong>Doar forma fizică și culoarea stimulului</strong><span class='tooltip-box'><strong>Distractor:</strong> nu acoperă toate dimensiunile standard ale stimulului.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Stimulii declanșează reacție când intensitatea lor atinge un anumit <span class='tip'><strong>prag</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un minim necesar ca organismul să „observe” stimulul.</span></span>. Aceasta înseamnă că:",
          options: [
            "<span class='tip'><strong>Sub un anumit nivel de intensitate, stimulul nu produce o reacție sesizabilă</strong><span class='tooltip-box'><strong>Exemplu:</strong> un sunet foarte slab poate să nu fie auzit deloc.</span></span>",
            "<span class='tip'><strong>Orice stimul, indiferent cât de slab, produce aceeași reacție</strong><span class='tooltip-box'><strong>Distractor:</strong> ar contrazice ideea de prag și de selectivitate.</span></span>",
            "<span class='tip'><strong>Organismul reacționează doar la stimuli de maximă intensitate</strong><span class='tooltip-box'><strong>Distractor:</strong> reacția apare și la intensități moderate, dacă depășesc pragul.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t3d",
      title: "Rolul și manifestarea sistemului nervos central",
      questions: [
        {
          text: "Sistemul nervos central are un rol esențial în:",
          options: [
            "<span class='tip'><strong>Stabilirea și menținerea relațiilor adaptative ale individului cu mediul</strong><span class='tooltip-box'><strong>Spus simplu:</strong> te ajută să te adaptezi: să percepi, să reacționezi, să înveți și să te reglezi.</span></span>",
            "<span class='tip'><strong>Asigurarea exclusivă a funcțiilor de digestie</strong><span class='tooltip-box'><strong>Distractor:</strong> digestia este coordonată mai ales de alte sisteme (inclusiv sistemul nervos autonom), nu „exclusiv” de SNC.</span></span>",
            "<span class='tip'><strong>Depozitarea mecanică a substanțelor nutritive</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta nu este o funcție a SNC.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Activitatea sistemului nervos central se manifestă prin <span class='tip'><strong>activitatea nervoasă superioară</strong><span class='tooltip-box'><strong>Spus simplu:</strong> funcții psihice precum percepția, atenția, memoria, gândirea, limbajul și reglarea comportamentului.</span></span>, bazată pe procese corticale precum <span class='tip'><strong>excitația</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activare nervoasă (crește „pornirea” unei zone).</span></span>, <span class='tip'><strong>inhibiția</strong><span class='tooltip-box'><strong>Spus simplu:</strong> frânare/ blocare selectivă (pentru control).</span></span> și <span class='tip'><strong>inducția</strong><span class='tooltip-box'><strong>Spus simplu:</strong> felul în care excitația și inhibiția se influențează și se redistribuie între zone.</span></span>. Ce idee reflectă cel mai bine această formulare?",
          options: [
            "<span class='tip'><strong>Funcționarea SNC presupune coordonarea fină a activării și frânării la nivel cortical</strong><span class='tooltip-box'><strong>Exemplu:</strong> te concentrezi (excitație focală) și blochezi distragerile (inhibiție).</span></span>",
            "<span class='tip'><strong>Funcționarea SNC este independentă de procesele corticale</strong><span class='tooltip-box'><strong>Distractor:</strong> activitatea nervoasă superioară se bazează pe procese corticale.</span></span>",
            "<span class='tip'><strong>SNC se ocupă doar de reflexe simple, fără implicarea cortexului</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexele simple există, dar aici vorbim explicit de funcții superioare.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t3e",
      title: "Procese corticale fundamentale",
      questions: [
        {
          text: "Excitația și inhibiția sunt procese nervoase fundamentale care, prin acțiune coordonată, susțin echilibrul funcționării psihice. Ce formulare surprinde corect această idee?",
          options: [
            "<span class='tip'><strong>Se completează reciproc și permit dozarea răspunsurilor psihice și comportamentale</strong><span class='tooltip-box'><strong>Exemplu:</strong> te activezi ca să răspunzi la o întrebare, dar îți inhibi impulsul de a întrerupe.</span></span>",
            "<span class='tip'><strong>Excitația este singurul proces important</strong><span class='tooltip-box'><strong>Distractor:</strong> fără inhibiție nu ai control, selecție și reglare eficientă.</span></span>",
            "<span class='tip'><strong>Inhibiția blochează definitiv orice activitate nervoasă</strong><span class='tooltip-box'><strong>Distractor:</strong> inhibiția este selectivă și temporară, cu rol de reglare.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Excitația poate fi definită ca:",
          options: [
            "<span class='tip'><strong>Activarea zonelor nervoase, facilitând transmiterea semnalelor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> crește disponibilitatea neuronilor de a transmite impulsuri.<br /><br /><strong>Exemplu:</strong> când ești atent, zonele relevante sunt mai „active”.</span></span>",
            "<span class='tip'><strong>Absența totală a activității nervoase</strong><span class='tooltip-box'><strong>Distractor:</strong> acesta ar descrie opusul activării.</span></span>",
            "<span class='tip'><strong>Proces exclusiv muscular</strong><span class='tooltip-box'><strong>Distractor:</strong> excitația este proces nervos (neuronal), nu muscular.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Inhibiția este definită ca proces care:",
          options: [
            "<span class='tip'><strong>Frânează și blochează selectiv activitatea, pentru reglare și control</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ajută să oprești/ reduci reacții nepotrivite.<br /><br /><strong>Exemplu:</strong> îți inhibi impulsul de a răspunde agresiv când ești frustrat.</span></span>",
            "<span class='tip'><strong>Amplifică nelimitat toate procesele de excitație</strong><span class='tooltip-box'><strong>Distractor:</strong> inhibiția este opusul amplificării.</span></span>",
            "<span class='tip'><strong>Elimină definitiv posibilitatea de răspuns a neuronilor</strong><span class='tooltip-box'><strong>Distractor:</strong> nu e definitivă, ci funcțională și reversibilă.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t3f",
      title: "Anatomia Sistemului Nervos Central",
      questions: [
        {
          text: "Sistemul nervos central este alcătuit în principal din:",
          options: [
            "<span class='tip'><strong>Encefal și măduva spinării</strong><span class='tooltip-box'><strong>Spus simplu:</strong> encefal = structurile nervoase din cutia craniană; măduva = „coloana” de legătură nervoasă în canalul vertebral.</span></span>",
            "<span class='tip'><strong>Creier, inimă și plămâni</strong><span class='tooltip-box'><strong>Distractor:</strong> inima și plămânii nu fac parte din SNC.</span></span>",
            "<span class='tip'><strong>Măduva spinării și sistemul muscular</strong><span class='tooltip-box'><strong>Distractor:</strong> sistemul muscular nu este componentă a SNC.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Encefalul poate fi definit ca:",
          options: [
            "<span class='tip'><strong>Ansamblul structurilor nervoase situate în cutia craniană</strong><span class='tooltip-box'><strong>Exemplu:</strong> include mari regiuni nervoase (emisfere, cerebel, trunchi cerebral).</span></span>",
            "<span class='tip'><strong>Orice formațiune nervoasă din afara craniului</strong><span class='tooltip-box'><strong>Distractor:</strong> encefalul este intracranian.</span></span>",
            "<span class='tip'><strong>Doar trunchiul cerebral, fără emisfere</strong><span class='tooltip-box'><strong>Distractor:</strong> trunchiul cerebral e parte, dar encefalul e ansamblul intracranian.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Măduva spinării este:",
          options: [
            "<span class='tip'><strong>Porțiunea de SNC din canalul vertebral, care leagă encefalul de restul corpului</strong><span class='tooltip-box'><strong>Exemplu:</strong> transmite comenzi motorii și aduce informații senzoriale.</span></span>",
            "<span class='tip'><strong>Structura responsabilă exclusiv de emoții</strong><span class='tooltip-box'><strong>Distractor:</strong> emoțiile implică rețele mai largi, nu măduva „exclusiv”.</span></span>",
            "<span class='tip'><strong>O simplă prelungire a sistemului muscular</strong><span class='tooltip-box'><strong>Distractor:</strong> este țesut nervos, nu muscular.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum diferențiem simplificat termenii <span class='tip'><strong>creier</strong><span class='tooltip-box'><strong>Spus simplu:</strong> organul fizic principal din craniu.</span></span>, <span class='tip'><strong>encefal</strong><span class='tooltip-box'><strong>Spus simplu:</strong> termen anatomic pentru ansamblul structurilor nervoase intracraniene.</span></span> și <span class='tip'><strong>minte</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activitatea psihică (procese, trăiri, funcționare mentală).</span></span>?",
          options: [
            "<span class='tip'><strong>Creierul = organ fizic, encefalul = ansamblu intracranian, mintea = activitate psihică</strong><span class='tooltip-box'><strong>Exemplu:</strong> creier/ encefal sunt „hardware”; mintea descrie „funcționarea” (atenție, memorie, gândire).</span></span>",
            "<span class='tip'><strong>Creierul și mintea sunt identice, encefalul e complet diferit</strong><span class='tooltip-box'><strong>Distractor:</strong> mintea nu e același lucru cu organul; encefalul este termen anatomic apropiat de „creier”.</span></span>",
            "<span class='tip'><strong>Mintea este o structură anatomică separată, în afara creierului</strong><span class='tooltip-box'><strong>Distractor:</strong> „mintea” nu este o structură anatomică distinctă.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t3g",
      title: "Neuronul",
      questions: [
        {
          text: "Neuronul este:",
          options: [
            "<span class='tip'><strong>Celula nervoasă, unitatea de bază a sistemului nervos</strong><span class='tooltip-box'><strong>Spus simplu:</strong> primește, procesează și transmite semnale nervoase.<br /><br /><strong>Exemplu:</strong> neuroni care transmit semnale de la ochi către creier.</span></span>",
            "<span class='tip'><strong>O celulă musculară responsabilă de contracție</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta descrie celula musculară, nu neuronul.</span></span>",
            "<span class='tip'><strong>O structură fără rol în transmiterea informației</strong><span class='tooltip-box'><strong>Distractor:</strong> transmiterea informației este rolul central al neuronului.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care este rolul <span class='tip'><strong>corpului celular</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „centrul” neuronului (ține neuronul în viață și integrează semnalele).</span></span>, al <span class='tip'><strong>dendritelor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „antene” care primesc semnale de la alți neuroni.</span></span> și al <span class='tip'><strong>axonului</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „cablu” care trimite semnalul mai departe.</span></span>?",
          options: [
            "<span class='tip'><strong>Corpul celular coordonează, dendritele primesc, axonul transmite</strong><span class='tooltip-box'><strong>Exemplu:</strong> primești semnale pe dendrite, sunt integrate în corpul celular, apoi pleacă prin axon.</span></span>",
            "<span class='tip'><strong>Dendritele transmit spre exterior, iar axonul recepționează</strong><span class='tooltip-box'><strong>Distractor:</strong> rolurile sunt inversate.</span></span>",
            "<span class='tip'><strong>Corpul celular are doar rol decorativ</strong><span class='tooltip-box'><strong>Distractor:</strong> corpul celular este esențial pentru funcționarea neuronului.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t3h",
      title: "Sinapsa",
      questions: [
        {
          text: "Sinapsa este:",
          options: [
            "<span class='tip'><strong>Regiunea de comunicare dintre un neuron și o altă celulă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> locul unde semnalul „trece” de la o celulă la alta.<br /><br /><strong>Exemplu:</strong> neuron → neuron sau neuron → mușchi.</span></span>",
            "<span class='tip'><strong>Zona de contact dintre doi mușchi</strong><span class='tooltip-box'><strong>Distractor:</strong> sinapsa e între celule nervoase (sau neuron și altă celulă), nu între mușchi.</span></span>",
            "<span class='tip'><strong>Spațiul gol dintre două oase</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta ar descrie o articulație, nu o sinapsă.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Neurotransmițătorii (mediatori chimici) sunt:",
          options: [
            "<span class='tip'><strong>Molecule eliberate în fanta sinaptică, care transmit semnalul între neuroni</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunt „mesageri chimici” care trec de la un neuron la altul.<br /><br /><strong>Exemplu:</strong> eliberare de dopamină într-o sinapsă.</span></span>",
            "<span class='tip'><strong>Celule nervoase cu rol de susținere</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta ar descrie mai degrabă celule gliale, nu neurotransmițători.</span></span>",
            "<span class='tip'><strong>Substanțe nutritive pentru energie musculară</strong><span class='tooltip-box'><strong>Distractor:</strong> neurotransmițătorii au rol de comunicare neuronală, nu nutriție musculară.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t3i",
      title: "Tipuri de neurotransmițători",
      questions: [
        {
          text: "Selectează exemple de <span class='tip'><strong>neurotransmițători</strong><span class='tooltip-box'><strong>Spus simplu:</strong> substanțe care ajută neuronii să comunice între ei.</span></span>:",
          multiple: true,
          options: [
            "<span class='tip'><strong>Dopamina</strong><span class='tooltip-box'><strong>Exemplu de rol:</strong> recompensă, motivație, controlul mișcării.</span></span>",
            "<span class='tip'><strong>Serotonina</strong><span class='tooltip-box'><strong>Exemplu de rol:</strong> dispoziție, somn, apetit.</span></span>",
            "<span class='tip'><strong>Endorfinele</strong><span class='tooltip-box'><strong>Exemplu de rol:</strong> reduc durerea, susțin starea de bine.</span></span>",
            "<span class='tip'><strong>Adrenalina</strong><span class='tooltip-box'><strong>Notă:</strong> are rol și de hormon, și de mediator în anumite căi; este asociată cu reacții de tip „luptă sau fugi”.</span></span>",
            "<span class='tip'><strong>Insulina</strong><span class='tooltip-box'><strong>Distractor:</strong> este hormon produs de pancreas, important în reglarea glicemiei; nu este folosită ca mediator sinaptic tipic.</span></span>",
          ],
          answer: [0, 1, 2, 3],
        },
      ],
    },
    // Curs 4 – Experimentarea conștientă a lumii

    // S1. Experimentare conștientă și procese cognitive/reglatorii

    {
      id: "fph-t4a",
      title: "Experimentarea conștientă a lumii",
      questions: [
        {
          text: "Ce presupune <span class='tip'><strong>experimentarea conștientă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> e felul în care „iei contact” cu lumea și cu tine: îți orientezi atenția, interpretezi ce se întâmplă și reacționezi intenționat.</span></span>?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Un proces activ prin care individul interpretează stimulii și reacționează adaptativ</strong><span class='tooltip-box'><strong>De ce:</strong> implică orientare voluntară, procesare a informației și comportamente potrivite situației.<br /><br /><strong>Exemplu:</strong> observi că cineva e supărat și îți adaptezi tonul/ răspunsul.</span></span>",
            "<span class='tip'><strong>O reacție automată fără implicare psihică</strong><span class='tooltip-box'><strong>Distractor:</strong> automatismul nu implică interpretare conștientă (ex.: reflexe, reacții foarte rapide).</span></span>",
            "<span class='tip'><strong>Un proces strict fiziologic, fără componentă mentală</strong><span class='tooltip-box'><strong>Distractor:</strong> experimentarea conștientă include interpretare, semnificație și decizie, nu doar schimbări ale corpului.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce exemplu ilustrează corect diferența dintre <span class='tip'><strong>stimuli externi</strong><span class='tooltip-box'><strong>Spus simplu:</strong> vin din mediul din afara corpului (sunet, lumină, atingere).</span></span> și <span class='tip'><strong>stimuli interni?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> vin din interior (stări corporale, emoții, durere, foame).</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Lumina și sunetele sunt stimuli externi; starea corporală și emoțiile sunt stimuli interni</strong><span class='tooltip-box'><strong>Exemplu:</strong> auzi o sirenă (extern) și simți tensiune/ frică (intern).</span></span>",
            "<span class='tip'><strong>Stimuli externi sunt doar emoțiile, iar cei interni doar percepțiile</strong><span class='tooltip-box'><strong>Distractor:</strong> emoțiile sunt interne, iar percepțiile apar din procesarea stimulilor (de obicei externi).</span></span>",
            "<span class='tip'><strong>Stimuli interni și externi sunt identici ca funcție</strong><span class='tooltip-box'><strong>Distractor:</strong> provin din surse diferite (mediu vs. corp/ trăire) și sunt procesați diferit în funcție de context.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Experimentarea conștientă este posibilă prin activarea <span class='tip'><strong>proceselor cognitive?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunt mecanismele prin care recepționezi, prelucrezi și înțelegi informația.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Permit cunoașterea, interpretarea și reprezentarea lumii</strong><span class='tooltip-box'><strong>Exemplu:</strong> percepi un obiect, îl recunoști, îl înțelegi și alegi ce faci cu el.</span></span>",
            "<span class='tip'><strong>Se ocupă doar de reglarea emoțiilor</strong><span class='tooltip-box'><strong>Distractor:</strong> reglarea emoțiilor ține mai ales de procese reglatorii (afectivitate/ motivație/ voință), nu „doar” de cognitiv.</span></span>",
            "<span class='tip'><strong>Nu au legătură cu comportamentele adaptative</strong><span class='tooltip-box'><strong>Distractor:</strong> fără interpretare cognitivă, comportamentele adaptative ar fi mult mai limitate.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t4b",
      title: "Procese cognitive",
      questions: [
        {
          text: "Ce înseamnă că procesele cognitive senzoriale sunt <span class='tip'><strong>primare?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunt primele „porți” prin care intră informația: contact direct cu stimulul.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Sunt primele care prelucrează informația, prin contact direct cu stimulii</strong><span class='tooltip-box'><strong>Exemplu:</strong> vezi o lumină, auzi un sunet, simți o atingere.</span></span>",
            "<span class='tip'><strong>Apar doar în situații complexe</strong><span class='tooltip-box'><strong>Distractor:</strong> dimpotrivă, apar permanent, inclusiv în situații simple (ex.: auzi un clopoțel).</span></span>",
            "<span class='tip'><strong>Necesită întotdeauna un efort mental ridicat</strong><span class='tooltip-box'><strong>Distractor:</strong> multe procese senzoriale sunt rapide și nu cer efort conștient mare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează exemple de <span class='tip'><strong>procese cognitive senzoriale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> procese legate de recepție și „imaginea” imediată a obiectelor.</span></span>:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Senzații, percepții, reprezentări</strong><span class='tooltip-box'><strong>Reprezentări:</strong> imagini mentale care păstrează forma/ structura a ceva perceput, chiar și când stimulul nu mai e prezent.<br /><br /><strong>Exemplu:</strong> îți imaginezi fața unei persoane după ce a plecat.</span></span>",
            "<span class='tip'><strong>Memorie, gândire, imaginație</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea sunt, de regulă, procese cognitive secundare (prelucrare la nivel mai „înalt”).</span></span>",
            "<span class='tip'><strong>Motivație și afectivitate</strong><span class='tooltip-box'><strong>Distractor:</strong> sunt procese reglatorii, nu senzoriale.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care afirmație descrie cel mai bine <span class='tip'><strong>procesele cognitive secundare?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> lucrează cu informația: o păstrează, o transformă, găsește sens și soluții.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Memoria, gândirea și imaginația prelucrează informația la un nivel superior, generând interpretări și soluții</strong><span class='tooltip-box'><strong>Exemplu:</strong> îți amintești o regulă, o aplici și găsești o rezolvare nouă.</span></span>",
            "<span class='tip'><strong>Procesele secundare detectează stimulii direct</strong><span class='tooltip-box'><strong>Distractor:</strong> detectarea directă e specifică mai ales proceselor senzoriale primare.</span></span>",
            "<span class='tip'><strong>Apar exclusiv în somn</strong><span class='tooltip-box'><strong>Distractor:</strong> memoria/ gândirea funcționează și în stare de veghe, în sarcini cotidiene.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Sistemele cognitive au două proprietăți fundamentale: <span class='tip'><strong>reprezentarea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți formezi modele mentale despre obiecte/ situații/ concepte.</span></span> și <span class='tip'><strong>calculul.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> operezi cu informații (compari, deduci, rezolvi probleme).</span></span> Aceasta înseamnă că:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Cunoașterea implică atât formarea de modele mentale, cât și prelucrarea logică a informației</strong><span class='tooltip-box'><strong>Exemplu:</strong> îți reprezinți problema și apoi alegi pașii de rezolvare.</span></span>",
            "<span class='tip'><strong>Cunoașterea se reduce la memorie</strong><span class='tooltip-box'><strong>Distractor:</strong> memoria e importantă, dar nu acoperă inferența, planificarea și rezolvarea de probleme.</span></span>",
            "<span class='tip'><strong>Gândirea nu implică operații mentale</strong><span class='tooltip-box'><strong>Distractor:</strong> gândirea presupune tocmai operații (analiză, comparație, inferență).</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t4c",
      title: "Procese reglatorii",
      questions: [
        {
          text: "Selectează procesele care fac parte din <span class='tip'><strong>procesele reglatorii</strong><span class='tooltip-box'><strong>Spus simplu:</strong> procese care dau energie, direcție și control comportamentului.</span></span>:",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Motivația</strong><span class='tooltip-box'><strong>Exemplu:</strong> de ce te apuci de învățat și cât reziști.</span></span>",
            "<span class='tip'><strong>Afectivitatea</strong><span class='tooltip-box'><strong>Exemplu:</strong> emoțiile care pot impulsiona sau bloca acțiunea.</span></span>",
            "<span class='tip'><strong>Voința</strong><span class='tooltip-box'><strong>Exemplu:</strong> continui un efort chiar dacă nu ai chef.</span></span>",
            "<span class='tip'><strong>Percepția</strong><span class='tooltip-box'><strong>Distractor:</strong> ține de procese cognitive senzoriale, nu de reglare.</span></span>",
            "<span class='tip'><strong>Senzația</strong><span class='tooltip-box'><strong>Distractor:</strong> proces senzorial primar (recepție), nu regulator.</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Procesele reglatorii (motivație, afectivitate, voință) au rolul principal de a:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Furniza energia și controlul necesare pentru procesarea informației și producerea comportamentelor</strong><span class='tooltip-box'><strong>Exemplu:</strong> motivația te pornește, emoțiile colorează decizia, voința te ține pe direcție.</span></span>",
            "<span class='tip'><strong>Se ocupa exclusiv de amintiri</strong><span class='tooltip-box'><strong>Distractor:</strong> amintirile țin în principal de memorie (cognitiv).</span></span>",
            "<span class='tip'><strong>Fi identice cu procesele senzoriale</strong><span class='tooltip-box'><strong>Distractor:</strong> senzorial = recepție, regulator = direcție/ control.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t4d",
      title: "Zone cerebrale implicate în procesarea informației",
      questions: [
        {
          text: "<span class='tip'><strong>Lobul frontal</strong><span class='tooltip-box'><strong>Spus simplu:</strong> implicat în funcții executive (planificare/ decizie), control motor și producerea limbajului.</span></span> este asociat cel mai tipic cu:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Planificare, control motor și vorbire</strong><span class='tooltip-box'><strong>Exemplu:</strong> îți planifici pașii, îți controlezi mișcările și formulezi răspunsul verbal.</span></span>",
            "<span class='tip'><strong>Auz exclusiv</strong><span class='tooltip-box'><strong>Distractor:</strong> auzul este asociat mai ales cu lobul temporal.</span></span>",
            "<span class='tip'><strong>Procesare vizuală primară</strong><span class='tooltip-box'><strong>Distractor:</strong> procesarea vizuală primară este asociată cu lobul occipital.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'><strong>Lobul parietal</strong><span class='tooltip-box'><strong>Spus simplu:</strong> integrează informații tactile și spațiale și contribuie la conștiința corporală.</span></span> este implicat mai ales în:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Integrarea senzațiilor tactile și orientarea spațială</strong><span class='tooltip-box'><strong>Exemplu:</strong> îți dai seama unde te-a atins cineva și unde e corpul tău în spațiu.</span></span>",
            "<span class='tip'><strong>Producerea vorbirii</strong><span class='tooltip-box'><strong>Distractor:</strong> producerea vorbirii e asociată mai ales cu zone frontale (ex.: aria Broca).</span></span>",
            "<span class='tip'><strong>Reflexe simple fără implicare corticală</strong><span class='tooltip-box'><strong>Distractor:</strong> integrarea tactilă și spațială implică procesare corticală.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'><strong>Lobul temporal</strong><span class='tooltip-box'><strong>Spus simplu:</strong> implicat în auz și recunoașterea unor tipare (ex.: fețe) și înțelegerea limbajului.</span></span> este responsabil, între altele, de:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Auz și recunoaștere facială</strong><span class='tooltip-box'><strong>Exemplu:</strong> recunoști vocea cuiva și îi identifici fața.</span></span>",
            "<span class='tip'><strong>Planificarea mișcărilor</strong><span class='tooltip-box'><strong>Distractor:</strong> planificarea este asociată mai ales cu lobul frontal.</span></span>",
            "<span class='tip'><strong>Procesare vizuală primară</strong><span class='tooltip-box'><strong>Distractor:</strong> vizualul primar este asociat cu lobul occipital.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care este funcția dominantă a <span class='tip'><strong>lobului occipital?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „centrul” principal al procesării vizuale.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Procesarea informației vizuale</strong><span class='tooltip-box'><strong>Exemplu:</strong> contur, culoare, mișcare (analiza vizuală de bază).</span></span>",
            "<span class='tip'><strong>Coordonarea motricității fine</strong><span class='tooltip-box'><strong>Distractor:</strong> coordonarea motorie fină este asociată mai mult cu circuite motorii și cerebel.</span></span>",
            "<span class='tip'><strong>Reglarea echilibrului emoțional</strong><span class='tooltip-box'><strong>Distractor:</strong> emoțiile implică rețele mai largi, nu o funcție principală occipitală.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'><strong>Cerebelul</strong><span class='tooltip-box'><strong>Spus simplu:</strong> coordonează mișcările, echilibrul și finețea execuțiilor motorii.</span></span> este responsabil în principal de:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Coordonarea mișcărilor și menținerea echilibrului</strong><span class='tooltip-box'><strong>Exemplu:</strong> mers stabil, mișcări precise, ajustări fine.</span></span>",
            "<span class='tip'><strong>Recunoașterea obiectelor</strong><span class='tooltip-box'><strong>Distractor:</strong> recunoașterea obiectelor implică în principal rețele vizuale și temporale.</span></span>",
            "<span class='tip'><strong>Interpretarea emoțiilor</strong><span class='tooltip-box'><strong>Distractor:</strong> emoțiile implică rețele limbice și corticale, nu funcția principală a cerebelului.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t4e",
      title: "Integrare senzorială și multisenzorială",
      questions: [
        {
          text: "Integrarea senzorială este procesul de organizare a senzațiilor din stimulare internă și externă pentru utilizarea eficientă a organismului. Ce idee surprinde cel mai bine această definiție?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Creierul combină și organizează informațiile din corp și mediu pentru comportamente eficiente</strong><span class='tooltip-box'><strong>Exemplu:</strong> îți coordonezi postura (intern) cu ce vezi/ auzi (extern) ca să reacționezi potrivit.</span></span>",
            "<span class='tip'><strong>Senzațiile sunt prelucrate separat și nu se influențează între ele</strong><span class='tooltip-box'><strong>Distractor:</strong> integrarea presupune tocmai combinare și organizare, nu izolare.</span></span>",
            "<span class='tip'><strong>Integrarea se referă exclusiv la auz</strong><span class='tooltip-box'><strong>Distractor:</strong> implică mai multe sisteme senzoriale, nu unul singur.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Integrarea multisenzorială înseamnă crearea unei reprezentări întregi a lumii pentru adaptare adecvată. Aceasta presupune:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Combinarea informațiilor din mai multe simțuri</strong><span class='tooltip-box'><strong>Exemplu:</strong> vezi buzele mișcându-se și auzi vocea, iar creierul le unește într-o singură percepție.</span></span>",
            "<span class='tip'><strong>Folosirea unui singur simț pentru toate sarcinile</strong><span class='tooltip-box'><strong>Distractor:</strong> multisenzorial = mai multe modalități simultan.</span></span>",
            "<span class='tip'><strong>Blocarea informațiilor vizuale</strong><span class='tooltip-box'><strong>Distractor:</strong> integrarea combină, nu „taie” în mod necesar o modalitate.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care este diferența formulată cel mai corect între <span class='tip'><strong>integrarea senzorială</strong><span class='tooltip-box'><strong>Spus simplu:</strong> organizarea informațiilor senzoriale (inclusiv din corp) pentru acțiune eficientă.</span></span> și <span class='tip'><strong>integrarea multisenzorială?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> combinarea informațiilor din modalități diferite (ex.: vizual + auditiv) într-o singură percepție.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Integrarea senzorială este un cadru mai larg (organizare senzorială pentru acțiune), iar integrarea multisenzorială este cazul în care se combină două sau mai multe simțuri</strong><span class='tooltip-box'><strong>Exemplu:</strong> îți reglezi postura (propriocepție) și folosești vederea; când combini și auzul cu vederea pentru aceeași sursă, vorbim clar de multisenzorial.</span></span>",
            "<span class='tip'><strong>Nu există nicio diferență</strong><span class='tooltip-box'><strong>Distractor:</strong> multisenzorialul subliniază explicit combinarea între modalități diferite.</span></span>",
            "<span class='tip'><strong>Multisenzorial se referă la activități fizice, iar senzorial la emoții</strong><span class='tooltip-box'><strong>Distractor:</strong> ambele țin de procesarea informației senzoriale, nu de această opoziție.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t4f",
      title: "Principiile integrării multisenzoriale",
      questions: [
        {
          text: "Ce afirmă <span class='tip'><strong>regula spațială?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> integrarea e mai ușoară când stimulii par să vină din același loc.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Stimulii se integrează mai eficient dacă provin din aceeași zonă spațială</strong><span class='tooltip-box'><strong>Exemplu:</strong> vezi o ușă închizându-se și sunetul pare să vină din același loc, deci le unești.</span></span>",
            "<span class='tip'><strong>Stimulii trebuie să fie cât mai îndepărtați unii de alții</strong><span class='tooltip-box'><strong>Distractor:</strong> distanța mare reduce probabilitatea să fie percepuți ca aparținând aceleiași surse.</span></span>",
            "<span class='tip'><strong>Spațiul nu influențează integrarea</strong><span class='tooltip-box'><strong>Distractor:</strong> locația este unul dintre criteriile cheie pentru „aceeași sursă”.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'><strong>regula temporală?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimulii se integrează mai bine dacă apar simultan sau aproape simultan.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Integrarea e facilitată dacă stimulii apar în același interval de timp</strong><span class='tooltip-box'><strong>Exemplu:</strong> vezi o minge lovind podeaua și auzi sunetul aproape în același moment.</span></span>",
            "<span class='tip'><strong>Integrarea e mai bună dacă stimulii apar la distanțe mari în timp</strong><span class='tooltip-box'><strong>Distractor:</strong> decalajul mare sugerează surse diferite.</span></span>",
            "<span class='tip'><strong>Timpul nu influențează procesarea</strong><span class='tooltip-box'><strong>Distractor:</strong> sincronizarea este un indicator major al integrării.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'><strong>principiul eficienței inverse?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> când fiecare stimul, separat, e slab, combinarea lor poate produce un răspuns mult mai puternic.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Stimulii slabi se pot integra foarte eficient, pentru că integrarea „compensează” lipsa de intensitate</strong><span class='tooltip-box'><strong>Exemplu:</strong> când e zgomot și auzi greu, faptul că vezi buzele mișcându-se te ajută să înțelegi.</span></span>",
            "<span class='tip'><strong>Stimulii puternici sunt singurii care se pot integra</strong><span class='tooltip-box'><strong>Distractor:</strong> principiul spune exact invers: efectul integrării e mai vizibil când stimulii sunt slabi separat.</span></span>",
            "<span class='tip'><strong>Integrarea nu depinde de puterea stimulului</strong><span class='tooltip-box'><strong>Distractor:</strong> intensitatea influențează cât de mult „câștigi” din combinare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează toate regulile integrării multisenzoriale:",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Regula spațială</strong><span class='tooltip-box'><strong>Spus simplu:</strong> aceeași locație → integrare mai ușoară.<br /><br /><strong>Exemplu:</strong> sunet și lumină din același loc par „același eveniment”.</span></span>",
            "<span class='tip'><strong>Regula temporală</strong><span class='tooltip-box'><strong>Spus simplu:</strong> apar împreună în timp → integrare mai ușoară.<br /><br /><strong>Exemplu:</strong> vezi și auzi aproape simultan o lovitură.</span></span>",
            "<span class='tip'><strong>Principiul eficienței inverse</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimulii slabi separat pot da un efect mare când sunt combinați.<br /><br /><strong>Exemplu:</strong> înțelegi mai bine vorbirea când și vezi fața vorbitorului.</span></span>",
            "<span class='tip'><strong>Principiul identității absolute</strong><span class='tooltip-box'><strong>Distractor:</strong> nu este o regulă standard a integrării multisenzoriale în această formulare.</span></span>",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // Curs 5 – Senzațiile

    // Subcapitol 1 – Senzația: definiție și calități

    {
      id: "fph-t5a",
      title: "Definirea senzației",
      questions: [
        {
          text: "Senzațiile sunt definite ca <span class='tip'><strong>procese cognitive primare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunt „prima treaptă” a cunoașterii: semnalizează ceva despre stimul înainte de interpretări complexe.<br /><br /><strong>Exemplu:</strong> „tare”, „rece”, „dulce”, „luminos”.</span></span>, prin care sunt semnalizate <span class='tip'><strong>caracteristici simple</strong><span class='tooltip-box'><strong>Spus simplu:</strong> proprietăți de bază ale stimulului (nu „ce este obiectul”, ci „cum este”).<br /><br /><strong>Exemplu:</strong> intensitate, culoare, temperatură, durată.</span></span> ale stimulilor, ca răspuns la acțiunea directă asupra <span class='tip'><strong>organelor de simț</strong><span class='tooltip-box'><strong>Spus simplu:</strong> receptori care primesc stimulul și trimit semnalul spre creier.<br /><br /><strong>Notă:</strong> în psihologie, ansamblul receptor + căi nervoase + zonă corticală se numește <strong>analizator</strong>.</span></span> Ce afirmație redă cel mai bine această idee?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Procese psihice complexe ce implică în primul rând gândirea logică</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie mai degrabă procese cognitive secundare (ex.: gândirea), nu senzațiile.</span></span>",
            "<span class='tip'><strong>Procese ce apar și în absența oricărui stimul extern sau intern</strong><span class='tooltip-box'><strong>Distractor:</strong> fără stimul nu vorbim de senzație, ci mai degrabă de <em>reprezentări</em> sau <em>imaginație</em>.</span></span>",
            "<span class='tip'><strong>Procese cognitive primare prin care sunt semnalizate caracteristicile simple ale stimulilor când aceștia acționează direct asupra organelor de simț</strong><span class='tooltip-box'><strong>Corect:</strong> senzația este răspunsul imediat la stimulare, înainte de interpretarea „ce este” stimulul.</span></span>",
          ],
          answer: 2,
        },

        {
          text: "Senzațiile se produc doar dacă:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Stimulul acționează direct asupra organelor de simț</strong><span class='tooltip-box'><strong>Corect:</strong> este necesară stimularea receptorilor (externă sau internă) pentru a apărea senzația.<br /><br /><strong>Exemplu:</strong> lumină pe retină, vibrații pe urechea internă, temperatură pe piele.</span></span>",
            "<span class='tip'><strong>Ne imaginăm stimulul</strong><span class='tooltip-box'><strong>Distractor:</strong> imaginarea produce reprezentări, nu senzații propriu-zise (nu există stimulare directă a receptorilor).</span></span>",
            "<span class='tip'><strong>Stimulul este extrem de puternic, altfel nu apare nicio senzație</strong><span class='tooltip-box'><strong>Distractor:</strong> nu trebuie să fie „extrem”; este suficient să depășească <em>pragul minimal</em> al analizatorului.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care sunt <span class='tip'><strong>calitățile unei senzații</strong><span class='tooltip-box'><strong>Spus simplu:</strong> felurile în care descriem o senzație: cât e de puternică, ce tip e, cât durează și ce „ton emoțional” are.</span></span>?",
          multiple: true,
          options: [
            "<span class='tip'><strong>Intensitatea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât de puternică e senzația.<br /><br /><strong>Exemplu:</strong> o lumină slabă vs. una orbitoare.</span></span>",
            "<span class='tip'><strong>Calitatea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „tipul” senzației, dat de analizator (vizual, auditiv etc.).<br /><br /><strong>Exemplu:</strong> roșu (vizual) vs. sunet acut (auditiv).</span></span>",
            "<span class='tip'><strong>Durata</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât timp se menține senzația.<br /><br /><strong>Exemplu:</strong> un sunet scurt vs. un zumzet prelungit.</span></span>",
            "<span class='tip'><strong>Tonalitatea afectivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „plăcut – neplăcut”, încărcătura emoțională asociată.<br /><br /><strong>Exemplu:</strong> miros plăcut vs. miros respingător.</span></span>",
          ],
          answer: [0, 1, 2, 3],
        },
      ],
    },

    // Subcapitol 2 – Tipuri de senzații
    {
      id: "fph-t5b",
      title: "Tipuri de senzații",
      questions: [
        {
          text: "După <span class='tip'><strong>natura conținutului informațional</strong><span class='tooltip-box'><strong>Spus simplu:</strong> de unde vine informația: din mediu, din interiorul corpului sau din poziția și mișcarea corpului.</span></span>, senzațiile pot fi:",
          multiple: true,
          options: [
            "<span class='tip'><strong>Senzații produse prin stimulare externă</strong><span class='tooltip-box'><strong>Exemplu:</strong> lumină, sunet, atingere, miros, gust.</span></span>",
            "<span class='tip'><strong>Senzații produse prin stimulare internă</strong><span class='tooltip-box'><strong>Exemplu:</strong> foame, sete, durere organică.</span></span>",
            "<span class='tip'><strong>Senzații despre poziția și mișcarea corpului</strong><span class='tooltip-box'><strong>Exemplu:</strong> simți poziția mâinii cu ochii închiși; simți rotația/ dezechilibrul.</span></span>",
            "<span class='tip'><strong>Senzații rezultate exclusiv din imaginație</strong><span class='tooltip-box'><strong>Distractor:</strong> imaginarea ține de reprezentări/ imaginație, nu de senzație (care cere stimulare a receptorilor).</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Selectează senzațiile produse prin <span class='tip'><strong>stimulare externă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> informația vine din mediul înconjurător.</span></span>:",
          multiple: true,
          options: [
            "<span class='tip'><strong>Vizuale</strong><span class='tooltip-box'><strong>Exemplu:</strong> lumină, culoare, strălucire.</span></span>",
            "<span class='tip'><strong>Auditive</strong><span class='tooltip-box'><strong>Exemplu:</strong> intensitatea sunetului, înălțime, timbru.</span></span>",
            "<span class='tip'><strong>Gustative</strong><span class='tooltip-box'><strong>Exemplu:</strong> dulce, acru, amar, sărat.</span></span>",
            "<span class='tip'><strong>Olfactive</strong><span class='tooltip-box'><strong>Exemplu:</strong> miros de fum, parfum, mâncare.</span></span>",
            "<span class='tip'><strong>Cutanate</strong><span class='tooltip-box'><strong>Exemplu:</strong> atingere, presiune, rece/ cald.</span></span>",
            "<span class='tip'><strong>Senzații de foame</strong><span class='tooltip-box'><strong>Distractor:</strong> foamea este o senzație <em>internă</em>, nu externă.</span></span>",
          ],
          answer: [0, 1, 2, 3, 4],
        },

        {
          text: "Selectează senzațiile produse prin <span class='tip'><strong>stimulare internă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> semnale din interiorul organismului.</span></span>:",
          multiple: true,
          options: [
            "<span class='tip'><strong>Foame</strong><span class='tooltip-box'><strong>Exemplu:</strong> senzație corporală care semnalizează nevoie de aport energetic.</span></span>",
            "<span class='tip'><strong>Sete</strong><span class='tooltip-box'><strong>Exemplu:</strong> semnal fiziologic legat de hidratare.</span></span>",
            "<span class='tip'><strong>Durere organică</strong><span class='tooltip-box'><strong>Exemplu:</strong> durere viscerală (ex.: stomac), nu durere de la atingerea pielii.</span></span>",
            "<span class='tip'><strong>Vibrații auditive</strong><span class='tooltip-box'><strong>Distractor:</strong> țin de stimulare externă (unde sonore), nu de interiorul corpului.</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Selectează senzațiile care informează despre <span class='tip'><strong>poziția și mișcarea corpului</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „unde sunt părțile corpului” și „cum se mișcă”.</span></span>:",
          multiple: true,
          options: [
            "<span class='tip'><strong>Proprioceptive</strong><span class='tooltip-box'><strong>Exemplu:</strong> simți postura trunchiului și a membrelor fără să te uiți.</span></span>",
            "<span class='tip'><strong>Chinestezice</strong><span class='tooltip-box'><strong>Exemplu:</strong> simți direcția și intensitatea mișcării (ridici brațul mai sus/ mai jos).</span></span>",
            "<span class='tip'><strong>De echilibru</strong><span class='tooltip-box'><strong>Exemplu:</strong> simți rotația/ dezechilibrul când te învârți.</span></span>",
            "<span class='tip'><strong>Gustative</strong><span class='tooltip-box'><strong>Distractor:</strong> gustul este o senzație externă (chimică), nu de poziție/ mișcare.</span></span>",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // Subcapitol 3 – Legile sensibilității (A) – raportul stimul–senzație
    {
      id: "fph-t5c",
      title: "Legile sensibilității – raport stimul–senzație",
      questions: [
        {
          text: "În secțiunea <span class='tip'><strong>Legile sensibilității – raport stimul–senzație</strong><span class='tooltip-box'><strong>Spus simplu:</strong> grupăm legile care descriu direct cum proprietățile stimulului dau naștere senzației.<br /><br /><strong>Notă:</strong> este o modalitate de a le ordona pentru învățare, nu o etichetă oficială din curs.</span></span> intră: <span class='tip'><strong>legea intensității</strong><span class='tooltip-box'><strong>Idee:</strong> praguri pentru apariție și diferențiere.</span></span>, <span class='tip'><strong>legea contrastului senzorial</strong><span class='tooltip-box'><strong>Idee:</strong> opușii se evidențiază reciproc.</span></span> și <span class='tip'><strong>legea semnificației</strong><span class='tooltip-box'><strong>Idee:</strong> stimulii importanți „se simt” mai puternic/ mai repede.</span></span> Ce au în comun aceste legi?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Descriu cum proprietățile stimulilor influențează direct apariția și intensitatea senzațiilor</strong><span class='tooltip-box'><strong>Corect:</strong> toate descriu efecte directe ale stimulului (intensitate, opoziție, relevanță) asupra senzației.</span></span>",
            "<span class='tip'><strong>Descriu exclusiv relațiile dintre analizatori diferiți</strong><span class='tooltip-box'><strong>Distractor:</strong> asta ține de legile <em>secundare</em> (interacțiunea analizatorilor).</span></span>",
            "<span class='tip'><strong>Se referă doar la modificări pe termen lung ale sistemului nervos</strong><span class='tooltip-box'><strong>Distractor:</strong> aici vorbim de raportul direct stimul → senzație, nu de schimbări lente în timp.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Conform <span class='tip'><strong>legii intensității</strong><span class='tooltip-box'><strong>Spus simplu:</strong> există un prag minim ca să simți stimulul și o diferență minimă ca să simți schimbarea dintre doi stimuli.</span></span>, senzația apare doar dacă stimulul depășește un anumit prag. În acest context, <span class='tip'><strong>pragul minimal absolut</strong><span class='tooltip-box'><strong>Exemplu:</strong> cel mai slab sunet/ cea mai slabă lumină pe care o poți detecta.</span></span> și <span class='tip'><strong>pragul diferențial</strong><span class='tooltip-box'><strong>Exemplu:</strong> cea mai mică diferență de volum pe care o sesizezi între două sunete.</span></span> indică faptul că:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Apariția senzației și modificarea ei depind de trecerea peste anumite praguri de intensitate</strong><span class='tooltip-box'><strong>Corect:</strong> un prag pentru detectare (minimal absolut) și un prag pentru diferențiere (diferențial).</span></span>",
            "<span class='tip'><strong>Senzațiile apar indiferent de intensitatea stimulului și nu depind de niciun prag</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice direct ideea de prag.</span></span>",
            "<span class='tip'><strong>Pragurile se referă numai la reacții motorii, nu și la senzații</strong><span class='tooltip-box'><strong>Distractor:</strong> pragurile sunt concepte de bază în psihofizică pentru senzații/percepție.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'><strong>legea contrastului senzorial</strong><span class='tooltip-box'><strong>Spus simplu:</strong> când compari „opus cu opus”, diferența devine mai evidentă.</span></span>?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Stimuli cu caracteristici opuse se scot reciproc în evidență, făcând senzațiile mai clare</strong><span class='tooltip-box'><strong>Exemplu:</strong> după ce ții mâna în apă rece, apa călduță poate părea mai caldă.</span></span>",
            "<span class='tip'><strong>Stimuli similari sunt întotdeauna percepuți ca identici</strong><span class='tooltip-box'><strong>Distractor:</strong> chiar stimuli similari pot fi diferențiați dacă depășesc pragul diferențial.</span></span>",
            "<span class='tip'><strong>Compararea între stimuli nu modifică felul în care sunt percepuți</strong><span class='tooltip-box'><strong>Distractor:</strong> tocmai comparația evidențiază contrastul.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Conform <span class='tip'><strong>legii semnificației</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimulii importanți pentru tine sunt detectați mai ușor și „ies în față”.</span></span>, ce se întâmplă cu sensibilitatea senzorială?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Sensibilitatea crește pentru stimulii care au o semnificație mare pentru individ</strong><span class='tooltip-box'><strong>Exemplu:</strong> îți auzi numele într-o conversație zgomotoasă mai ușor decât alte cuvinte.</span></span>",
            "<span class='tip'><strong>Sensibilitatea scade pentru stimulii importanți, deoarece sunt procesați automat</strong><span class='tooltip-box'><strong>Distractor:</strong> automatizarea nu înseamnă scădere a sensibilității; relevanța tinde să crească detectarea.</span></span>",
            "<span class='tip'><strong>Semnificația nu influențează apariția sau intensitatea senzațiilor</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice explicit legea semnificației.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează legile care explică modul în care proprietățile stimulilor (intensitate, opoziție, semnificație) influențează apariția senzațiilor:",
          multiple: true,
          options: [
            "<span class='tip'><strong>Legea intensității</strong><span class='tooltip-box'><strong>Idee:</strong> prag minimal absolut și prag diferențial.</span></span>",
            "<span class='tip'><strong>Legea contrastului senzorial</strong><span class='tooltip-box'><strong>Idee:</strong> opușii se evidențiază reciproc.</span></span>",
            "<span class='tip'><strong>Legea semnificației</strong><span class='tooltip-box'><strong>Idee:</strong> relevanța crește sensibilitatea.</span></span>",
            "<span class='tip'><strong>Legea adaptării</strong><span class='tooltip-box'><strong>Distractor:</strong> adaptarea descrie schimbarea sensibilității în timp, nu raportul direct stimul → senzație.</span></span>",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // Subcapitol 3 – Legile sensibilității (B) – adaptare și interacțiune
    {
      id: "fph-t5d",
      title: "Legile sensibilității – adaptare și interacțiune",
      questions: [
        {
          text: "În secțiunea <span class='tip'><strong>Legile sensibilității – adaptare și interacțiune</strong><span class='tooltip-box'><strong>Spus simplu:</strong> grupăm legile care explică schimbarea sensibilității în timp și influența dintre analizatori.<br /><br /><strong>Notă:</strong> este o modalitate de a le ordona pentru învățare, nu o etichetă oficială din curs.</span></span> sunt incluse: <span class='tip'><strong>legea adaptării</strong><span class='tooltip-box'><strong>Exemplu:</strong> mirosul devine „mai slab” după câteva minute.</span></span> și <span class='tip'><strong>legea interacțiunii analizatorilor</strong><span class='tooltip-box'><strong>Exemplu:</strong> ce vezi poate influența ce auzi.</span></span> Ce descriere surprinde cel mai bine rolul acestor legi?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Descriu cum se schimbă sensibilitatea în timp și cum se influențează reciproc diferitele sisteme senzoriale</strong><span class='tooltip-box'><strong>Corect:</strong> aici intră adaptarea și influența între analizatori.</span></span>",
            "<span class='tip'><strong>Descriu doar raportul direct dintre intensitatea stimulului și apariția senzației într-un singur analizator</strong><span class='tooltip-box'><strong>Distractor:</strong> asta e mai degrabă categoria legilor primare.</span></span>",
            "<span class='tip'><strong>Se referă exclusiv la procese de gândire, fără legătură cu senzațiile</strong><span class='tooltip-box'><strong>Distractor:</strong> sunt legi ale sensibilității (senzorialului), nu ale gândirii.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "În psihologia senzorială, termenul <span class='tip'><strong>analizator</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „aparatul complet” al unui simț: receptor + drumuri nervoase + zonă din creier care prelucrează.<br /><br /><strong>Exemplu:</strong> pentru văz: retină + nerv optic + zone vizuale.</span></span> se referă la:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Un sistem funcțional care cuprinde organul de simț, căile nervoase și zonele corticale specializate</strong><span class='tooltip-box'><strong>Corect:</strong> include atât periferia (receptor), cât și prelucrarea centrală (cortex).</span></span>",
            "<span class='tip'><strong>Doar organul de simț, fără legătură cu creierul</strong><span class='tooltip-box'><strong>Distractor:</strong> fără căi nervoase și cortex nu există prelucrare senzorială completă.</span></span>",
            "<span class='tip'><strong>Orice instrument de laborator folosit pentru măsurători</strong><span class='tooltip-box'><strong>Distractor:</strong> aici „analizator” este un termen psihofiziologic, nu un aparat.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Conform <span class='tip'><strong>legii interacțiunii analizatorilor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activarea unui simț poate modifica sensibilitatea sau răspunsul altui simț.</span></span>:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Senzațiile produse într-un analizator pot influența apariția sau modularea senzațiilor din altele</strong><span class='tooltip-box'><strong>Exemplu:</strong> ce vezi (buze mișcându-se) poate schimba ce „auzi” în zgomot.</span></span>",
            "<span class='tip'><strong>Analizatorii funcționează complet independent unii de alții</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de interacțiune.</span></span>",
            "<span class='tip'><strong>Fiecare analizator produce senzații doar izolat, fără influențe reciproce</strong><span class='tooltip-box'><strong>Distractor:</strong> în realitate, integrarea și influența între simțuri sunt frecvente.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Sub legea interacțiunii analizatorilor se află <span class='tip'><strong>inducția reciprocă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un analizator activat poate produce mai întâi frânare, apoi activare într-altul.</span></span> Ce descriere este corectă?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Activarea unui analizator determină inițial inhibiție, apoi excitație în alt analizator</strong><span class='tooltip-box'><strong>Corect:</strong> este un tip particular de influență între analizatori.</span></span>",
            "<span class='tip'><strong>O creștere constantă a sensibilității, indiferent de stimulare</strong><span class='tooltip-box'><strong>Distractor:</strong> inducția implică secvență (inhibiție → excitație), nu creștere constantă.</span></span>",
            "<span class='tip'><strong>O reacție exclusiv motorie, fără componentă senzorială</strong><span class='tooltip-box'><strong>Distractor:</strong> este despre procese senzoriale (analizatori), nu despre mișcare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Tot în cadrul legii interacțiunii analizatorilor se află și <span class='tip'><strong>sinestezia</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un stimul pe un simț produce o experiență tipică altui simț.</span></span> Cum este definit acest fenomen?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Producerea unei senzații proprii unui analizator prin stimularea altuia</strong><span class='tooltip-box'><strong>Exemplu:</strong> unele persoane „văd culori” când aud sunete.</span></span>",
            "<span class='tip'><strong>Incapacitatea de a diferenția între stimuli</strong><span class='tooltip-box'><strong>Distractor:</strong> sinestezia nu e confuzie generală, ci asociere stabilă între modalități.</span></span>",
            "<span class='tip'><strong>Pierderea temporară a sensibilității la un stimul</strong><span class='tooltip-box'><strong>Distractor:</strong> asta ar descrie mai degrabă adaptarea sau inhibiția, nu sinestezia.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'><strong>legea adaptării</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sensibilitatea se modifică atunci când stimulul acționează repetat sau mult timp (de obicei scade).</span></span>?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Sensibilitatea analizatorilor se modifică sub acțiunea repetată sau prelungită a stimulilor</strong><span class='tooltip-box'><strong>Exemplu:</strong> mirosul unui parfum pare mai slab după câteva minute.</span></span>",
            "<span class='tip'><strong>Sensibilitatea rămâne constantă indiferent de durata stimulului</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de adaptare.</span></span>",
            "<span class='tip'><strong>Stimulii repetitivi devin automat din ce în ce mai puternici ca efect subiectiv</strong><span class='tooltip-box'><strong>Distractor:</strong> de regulă, repetarea duce la „obișnuire” (scădere), nu la creștere.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    // Curs 5B – PERCEPȚIILE

    // Subcapitol 1 – Definirea percepțiilor
    {
      id: "fph-t5ba",
      title: "Definirea percepțiilor",
      questions: [
        {
          text: "Percepțiile sunt <span class='tip'><strong>procese cognitive primare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunt procese de bază ale cunoașterii, dar mai elaborate decât senzațiile: nu semnalizează doar „ceva e cald/ rece”, ci „ce obiect e” și „cum e”.<br /><br /><strong>Exemplu:</strong> senzație: „luminos”; percepție: „un bec aprins”.</span></span> prin care obținem <span class='tip'><strong>informații complete</strong><span class='tooltip-box'><strong>Spus simplu:</strong> o imagine unitară despre obiect: formă, mărime, orientare și relații spațiale.<br /><br /><strong>Exemplu:</strong> recunoști „o cană” și știi unde e pe masă.</span></span> despre stimul. Ce definește corect percepțiile?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Procese prin care sunt integrate informațiile senzoriale într-o imagine unitară și coerentă</strong><span class='tooltip-box'><strong>Corect:</strong> percepția organizează senzațiile (culoare, contur, distanță) într-un „întreg” cu sens (un obiect/situație).<br /><br /><strong>Exemplu:</strong> vezi contur + culoare + profunzime → „o mașină care se apropie”.</span></span>",
            "<span class='tip'><strong>Procese care apar doar în absența stimulilor</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie mai bine imaginația/ reprezentarea (când stimulul lipsește), nu percepția.</span></span>",
            "<span class='tip'><strong>Procese exclusiv reflexe</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexul e un răspuns automat; percepția implică organizare și interpretare a informației.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Alege afirmațiile corecte despre relația dintre <span class='tip'><strong>senzație</strong><span class='tooltip-box'><strong>Spus simplu:</strong> semnalează trăsături simple (culoare, intensitate, temperatură).</span></span> și <span class='tip'><strong>percepție:</strong><span class='tooltip-box'><strong>Spus simplu:</strong> organizează senzațiile într-un obiect/ eveniment cu sens.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Senzațiile furnizează „materialul brut”, percepția îl organizează într-un întreg</strong><span class='tooltip-box'><strong>Corect:</strong> percepția se sprijină pe senzații pentru a construi imaginea obiectului.<br /><br /><strong>Exemplu:</strong> contur + culoare + distanță → „o minge”.</span></span>",
            "<span class='tip'><strong>Percepția poate exista fără nicio senzație</strong><span class='tooltip-box'><strong>Distractor:</strong> percepția are nevoie de intrare senzorială (stimuli) ca bază.</span></span>",
            "<span class='tip'><strong>Senzația descrie doar „ce e”, iar percepția doar „cât de puternic e”</strong><span class='tooltip-box'><strong>Distractor:</strong> intensitatea e o calitate a senzației; percepția construiește „ce este” și „cum este” obiectul în ansamblu.</span></span>",
            "<span class='tip'><strong>Percepția adaugă organizare și interpretare, nu doar înregistrare</strong><span class='tooltip-box'><strong>Corect:</strong> percepția integrează și dă sens datelor senzoriale.<br /><br /><strong>Exemplu:</strong> recunoști o persoană după față, nu doar „forme și culori”.</span></span>",
          ],
          answer: [0, 3],
        },

        {
          text: "Ce înseamnă că percepția produce o imagine <span class='tip'><strong>unitară și coerentă?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> elementele (culoare, formă, poziție) sunt „legate” într-un singur obiect/ eveniment.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Informațiile din simțuri sunt integrate astfel încât obiectul este trăit ca un întreg</strong><span class='tooltip-box'><strong>Corect:</strong> nu rămâi la detalii izolate, ci „vezi obiectul”.<br /><br /><strong>Exemplu:</strong> vezi „o masă”, nu separat „patru picioare + o suprafață”.</span></span>",
            "<span class='tip'><strong>Percepția reține doar un singur detaliu, iar restul este ignorat complet</strong><span class='tooltip-box'><strong>Distractor:</strong> selectivitatea există, dar „unitar și coerent” înseamnă că se formează un întreg, nu un singur detaliu.</span></span>",
            "<span class='tip'><strong>Percepția este identică cu reflexul</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexul e automat; percepția construiește o imagine organizată.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care exemplu ilustrează cel mai bine trecerea de la <span class='tip'><strong>caracteristici simple</strong><span class='tooltip-box'><strong>Spus simplu:</strong> culoare, intensitate, temperatură, sunet etc.</span></span> la <span class='tip'><strong>informații complete?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> obiect recunoscut + relații spațiale (unde e, cât e departe).</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>„Văd roșu și rotund” → „Este o minge pe podea, lângă ușă”</strong><span class='tooltip-box'><strong>Corect:</strong> prima parte e apropiată de senzații/ trăsături simple; a doua e percepție (obiect + poziție).</span></span>",
            "<span class='tip'><strong>„Mi-e foame” → „Mi-e foame”</strong><span class='tooltip-box'><strong>Distractor:</strong> e un exemplu de stimulare internă, dar nu arată clar integrarea într-un obiect extern.</span></span>",
            "<span class='tip'><strong>„Tresar la zgomot” → „Tresar la zgomot”</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai mult o reacție, nu organizarea perceptivă într-un obiect.</span></span>",
          ],
          answer: 0,
        },
      ],
    },
    {
      id: "fph-t5ba2",
      title: "Fazele procesului perceptiv",
      questions: [
        {
          text: "Procesul perceptiv (după Popescu-Neveanu, Zlate, Crețu) se desfășoară în patru faze. Care este ordinea corectă?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Detecția → Discriminarea → Identificarea → Interpretarea</strong><span class='tooltip-box'><strong>Corect:</strong> de la sesizarea stimulului, la detașare/ diferențiere, recunoaștere și apoi semnificare.</span></span>",
            "<span class='tip'><strong>Identificarea → Detecția → Interpretarea → Discriminarea</strong><span class='tooltip-box'><strong>Distractor:</strong> identificarea și interpretarea vin după detecție și discriminare.</span></span>",
            "<span class='tip'><strong>Discriminarea → Detecția → Interpretarea → Identificarea</strong><span class='tooltip-box'><strong>Distractor:</strong> nu poți discrimina înainte să detectezi.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce înseamnă <span class='tip'><strong>detecția</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți dai seama că stimulul e prezent și atenția se duce spre el.</span></span> în procesul perceptiv?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Sesizarea și conștientizarea prezenței stimulului în câmpul perceptiv</strong><span class='tooltip-box'><strong>Corect:</strong> include orientarea către stimul și focalizarea atenției (depășirea <strong>pragului minimum vizibile</strong>).</span></span>",
            "<span class='tip'><strong>Detașarea stimulului de fond și evidențierea trăsăturilor specifice</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie discriminarea.</span></span>",
            "<span class='tip'><strong>Integrarea verbală și semnificarea stimulului în termeni de utilitate</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie interpretarea.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "În faza de <span class='tip'><strong>discriminare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> separi stimulul de fundal și îi observi particularitățile.</span></span>, ce se întâmplă?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Stimulul este detașat de fondul perceptiv și îi sunt evidențiate caracteristicile specifice</strong><span class='tooltip-box'><strong>Corect:</strong> presupune depășirea <strong>pragului minimum separabile</strong>.</span></span>",
            "<span class='tip'><strong>Se construiește semnificația stimulului în termeni de valoare și utilitate</strong><span class='tooltip-box'><strong>Distractor:</strong> asta ține de interpretare.</span></span>",
            "<span class='tip'><strong>Se produce recunoașterea stimulului prin raportare la un model perceptiv</strong><span class='tooltip-box'><strong>Distractor:</strong> asta ține de identificare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Faza de <span class='tip'><strong>identificare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> recunoști „ce este” stimulul, raportându-l la un model cunoscut.</span></span> înseamnă:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Realizarea unei imagini unitare prin integrarea informațiilor despre stimul și raportarea la modelul perceptiv corespunzător</strong><span class='tooltip-box'><strong>Corect:</strong> aici apare recunoașterea (depășirea <strong>pragului minimum cognoscibile</strong>).</span></span>",
            "<span class='tip'><strong>Focalizarea atenției asupra stimulului până când devine vizibil</strong><span class='tooltip-box'><strong>Distractor:</strong> asta e detecție (minimum vizibile).</span></span>",
            "<span class='tip'><strong>Separarea stimulului de fond prin comparare cu stimuli opuși</strong><span class='tooltip-box'><strong>Distractor:</strong> separarea de fond e discriminare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce descrie cel mai bine <span class='tip'><strong>interpretarea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îi dai sens stimulului (îl „etichetezi” în limbaj, de obicei intern) și îl legi de ce ai de făcut.</span></span>?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Integrarea în limbaj (etichetare/denumire mentală) și semnificarea stimulului în termeni de utilitate și valorificare în activitate</strong><span class='tooltip-box'><strong>Corect:</strong> înțelegi „ce înseamnă” stimulul pentru tine și îl conectezi la scop, context și acțiune (nu trebuie rostit cu voce tare).</span></span>",
            "<span class='tip'><strong>Detașarea stimulului de fond și evidențierea trăsăturilor specifice</strong><span class='tooltip-box'><strong>Distractor:</strong> discriminare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Alege asocierile corecte între fază și <span class='tip'><strong>pragul</strong><span class='tooltip-box'><strong>Spus simplu:</strong> fiecare fază are un „minim” care trebuie depășit ca să se producă.</span></span> corespunzător",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Detecția</strong> — depășirea <strong>pragului minimum vizibile</strong><span class='tooltip-box'><strong>Corect:</strong> stimulul devine sesizabil în câmpul perceptiv.</span></span>",
            "<span class='tip'><strong>Discriminarea</strong> — depășirea <strong>pragului minimum separabile</strong><span class='tooltip-box'><strong>Corect:</strong> stimulul se poate detașa de fond și diferenția.</span></span>",
            "<span class='tip'><strong>Identificarea</strong> — depășirea <strong>pragului minimum cognoscibile</strong><span class='tooltip-box'><strong>Corect:</strong> stimulul devine recognoscibil prin raportare la un model.</span></span>",
            "<span class='tip'><strong>Interpretarea</strong> — depășirea <strong>pragului minimum vizibile</strong><span class='tooltip-box'><strong>Distractor:</strong> vizibile aparține detecției.</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Un elev aude un zgomot slab, își mută atenția spre el, apoi îl separă de „bruiaj”, își dă seama că e soneria și se pregătește de pauză. Ce faze apar, în ordine, în acest exemplu?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Detecția → Discriminarea → Identificarea → Interpretarea</strong><span class='tooltip-box'><strong>Corect:</strong> sesizează stimulul, îl detașează de fond, recunoaște ce este, apoi îi dă sens practic („e pauză” → acțiune).</span></span>",
            "<span class='tip'><strong>Identificarea → Detecția → Discriminarea → Interpretarea</strong><span class='tooltip-box'><strong>Distractor:</strong> nu poți recunoaște stimulul înainte să-l sesizezi și să-l separi de fond.</span></span>",
            "<span class='tip'><strong>Detecția → Identificarea → Discriminarea → Interpretarea</strong><span class='tooltip-box'><strong>Distractor:</strong> de regulă discriminarea (separarea de fond) precede identificarea.</span></span>",
          ],
          answer: 0,
        },
      ],
    },
    {
      id: "fph-t5bb",
      title: "Legi ale percepției legate de organizarea internă",
      questions: [
        {
          text: "Unele legi descriu cum <span class='tip'><strong>percepția</strong><span class='tooltip-box'><strong>Spus simplu:</strong> transformă date senzoriale separate într-o imagine organizată și stabilă despre obiecte și situații.<br /><br /><strong>Exemplu:</strong> din linii și culori → „un scaun”.</span></span> se <strong>organizează intern</strong>. Care legi aparțin acestui tip de descriere?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Legea integralității, legea structuralității perceptive, legea selectivității perceptive</strong><span class='tooltip-box'><strong>Corect:</strong> toate trei descriu „cum se construiește” imaginea perceptivă (întreg, structură, selecție).</span></span>",
            "<span class='tip'><strong>Legea constanței, legea semnificației, legea proiectivității</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea accentuează stabilitatea/ direcționarea (constanță, relevanță, proiectare către obiect).</span></span>",
            "<span class='tip'><strong>Legea contrastului și legea adaptării</strong><span class='tooltip-box'><strong>Distractor:</strong> sunt formulate clasic pentru sensibilitate/ senzații (contrast, adaptare), nu ca legi centrale ale organizării interne a percepției în acest set.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'><strong>legea integralității</strong><span class='tooltip-box'><strong>Spus simplu:</strong> percepția tinde să formeze un întreg coerent, nu o listă de detalii izolate.<br /><br /><strong>Exemplu:</strong> recunoști o față ca „față”, chiar dacă nu analizezi separat fiecare trăsătură.</span></span>?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Imaginea perceptivă este unitară, nu o sumă de elemente separate</strong><span class='tooltip-box'><strong>Corect:</strong> întregul perceptiv „ține laolaltă” detaliile într-o formă cu sens.</span></span>",
            "<span class='tip'><strong>Se percep doar detaliile izolate</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de întreg (gestalt/ unitate perceptivă).</span></span>",
            "<span class='tip'><strong>Imaginea perceptivă nu include contextul</strong><span class='tooltip-box'><strong>Distractor:</strong> de regulă, contextul contribuie la întreg (fundal, situație, relații spațiale).</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'><strong>legea structuralității perceptive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> percepția organizează informația într-o structură: unele trăsături ies în față (figurează), altele rămân fundal.<br /><br /><strong>Exemplu:</strong> într-un desen, contururile puternice se impun primele.</span></span>?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Caracteristicile stimulului sunt organizate ierarhic: cele mai intense și mai informative apar primele în plan perceptiv</strong><span class='tooltip-box'><strong>Corect:</strong> percepția prioritizează semnalele „puternice/ relevante” pentru structurarea imaginii.</span></span>",
            "<span class='tip'><strong>Toate caracteristicile stimulului au aceeași importanță perceptivă</strong><span class='tooltip-box'><strong>Distractor:</strong> dacă ar fi așa, imaginea ar fi greu de organizat (fără relief perceptiv).</span></span>",
            "<span class='tip'><strong>Percepția nu depinde de intensitatea sau informația transmisă de stimul</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea că percepția se structurează pe baza „salienței” (ce iese în evidență).</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'><strong>legea selectivității perceptive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu percepem „egal” tot ce e în jur; selectăm ce e relevant (scop, interes, context).<br /><br /><strong>Exemplu:</strong> într-o mulțime, auzi mai repede propriul nume.</span></span>?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Individul selectează stimulii mai relevanți pentru el și îi percepe mai clar</strong><span class='tooltip-box'><strong>Corect:</strong> atenția/ interesul fac ca anumite elemente să devină dominante.</span></span>",
            "<span class='tip'><strong>Toți stimulii sunt reflectați identic</strong><span class='tooltip-box'><strong>Distractor:</strong> în practică există filtrare și prioritizare.</span></span>",
            "<span class='tip'><strong>Stimuli nerelevanți sunt întotdeauna percepuți intens</strong><span class='tooltip-box'><strong>Distractor:</strong> de obicei, ceea ce e nerelevant trece în fundal sau e ignorat.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t5bc",
      title: "Legi ale percepției legate de stabilitate și direcționare",
      questions: [
        {
          text: "Alte legi descriu <span class='tip'><strong>stabilitatea perceptivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> tendința de a percepe obiectele relativ constante, chiar dacă se schimbă condițiile (distanță, lumină, unghi).<br /><br /><strong>Exemplu:</strong> o ușă rămâne „dreptunghi” chiar dacă o vezi din lateral.</span></span> și <span class='tip'><strong>direcționarea imaginii perceptive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trăim imaginea ca fiind „în afară”, la locul obiectului, nu „în cap”.<br /><br /><strong>Exemplu:</strong> vezi sunetul/vorbirea ca venind dinspre persoană.</span></span>. Care legi aparțin acestui tip de descriere?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Legea constanței perceptive, legea semnificației și legea proiectivității</strong><span class='tooltip-box'><strong>Corect:</strong> constanța = stabilitate; semnificația = orientare spre relevant; proiectivitatea = plasarea imaginii către sursa stimulului.</span></span>",
            "<span class='tip'><strong>Legea integralității și legea selectivității</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea descriu mai ales cum se organizează intern imaginea (întreg + selecție).</span></span>",
            "<span class='tip'><strong>Legea contrastului și legea adaptării</strong><span class='tooltip-box'><strong>Distractor:</strong> sunt asociate clasic cu sensibilitatea/ senzațiile (contrast, adaptare).</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'><strong>legea constanței perceptive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> percepem relativ constante forma, mărimea și culoarea obiectelor, chiar dacă imaginea pe retină se modifică.<br /><br /><strong>Exemplu:</strong> o mașină care se îndepărtează nu „devine mică”, ci pare mai departe.</span></span>?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Obiectele își păstrează forma, mărimea și culoarea chiar dacă perspectiva sau iluminarea se modifică</strong><span class='tooltip-box'><strong>Corect:</strong> percepția compensează variațiile situaționale.</span></span>",
            "<span class='tip'><strong>Orice modificare fizică a situației schimbă complet percepția</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de constanță.</span></span>",
            "<span class='tip'><strong>Constanța există doar la persoanele cu experiență artistică</strong><span class='tooltip-box'><strong>Distractor:</strong> constanța e o proprietate generală a percepției, nu o abilitate exclusivă.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'><strong>legea semnificației</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimulii importanți pentru tine tind să fie percepuți cu prioritate și mai clar.<br /><br /><strong>Exemplu:</strong> dacă îți aștepți prietenul, îi observi mai repede silueta.</span></span>?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Stimulii semnificativi sunt percepuți cu prioritate</strong><span class='tooltip-box'><strong>Corect:</strong> relevanța subiectivă „ridică” stimulul în câmpul perceptiv.</span></span>",
            "<span class='tip'><strong>Semnificația nu influențează percepția</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice direct formularea legii.</span></span>",
            "<span class='tip'><strong>Stimulii fără relevanță devin centrul câmpului perceptiv</strong><span class='tooltip-box'><strong>Distractor:</strong> de obicei e invers: nerelevantul rămâne fundal.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'><strong>legea proiectivității imaginii perceptive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> deși imaginea se construiește în creier, o trăim ca fiind „acolo”, la locul obiectului.<br /><br /><strong>Exemplu:</strong> vezi cartea pe masă, nu „o imagine în cap”.</span></span>?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Percepția este proiectată în direcția obiectului care a generat-o</strong><span class='tooltip-box'><strong>Corect:</strong> experiența perceptivă are caracter „exteriorizat”.</span></span>",
            "<span class='tip'><strong>Imaginea perceptivă este trăită ca fiind în interiorul minții, nu în exterior</strong><span class='tooltip-box'><strong>Distractor:</strong> asta ar descrie mai curând reprezentările/ imaginile mentale voluntare.</span></span>",
            "<span class='tip'><strong>Proiectivitatea apare doar în situații speciale sau iluzii</strong><span class='tooltip-box'><strong>Distractor:</strong> proiectivitatea e caracteristică obișnuită a percepției cotidiene.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t5bd",
      title: "Forme ale percepției",
      questions: [
        {
          text: "Percepția poate lua forme specifice în funcție de tipul informației: <span class='tip'><strong>spațiu</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cum arată și unde e un obiect (formă, mărime, distanță, poziție).</span></span>, <span class='tip'><strong>timp</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât durează și în ce ordine se întâmplă lucrurile (durată, succesiune).</span></span>, <span class='tip'><strong>mișcare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dacă și cum se deplasează un obiect.</span></span>. Care variantă este corectă?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Spațiu, timp și mișcare</strong><span class='tooltip-box'><strong>Corect:</strong> sunt trei forme tipice prezentate împreună: unde/ cum, când/ cât, se deplasează sau nu.</span></span>",
            "<span class='tip'><strong>Doar spațiu</strong><span class='tooltip-box'><strong>Distractor:</strong> percepția include și organizarea temporală și mișcarea.</span></span>",
            "<span class='tip'><strong>Doar timp și mișcare</strong><span class='tooltip-box'><strong>Distractor:</strong> spațiul (formă, mărime, distanță) e central în percepție.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Percepția proprietăților <span class='tip'><strong>spațiale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> informații despre formă, dimensiuni și poziționare în spațiu.</span></span> include:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Formă, mărime, relief, poziție și distanță</strong><span class='tooltip-box'><strong>Corect:</strong> acestea sunt indicatori spațiali de bază.</span></span>",
            "<span class='tip'><strong>Doar perceperea formei</strong><span class='tooltip-box'><strong>Distractor:</strong> spațiul include și mărime, distanță, poziție etc.</span></span>",
            "<span class='tip'><strong>Doar perceperea reliefului</strong><span class='tooltip-box'><strong>Distractor:</strong> relieful e doar o componentă.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Percepția <span class='tip'><strong>timpului</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât durează și în ce ordine se petrec evenimentele.</span></span> include:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Succesiunea evenimentelor și durata lor</strong><span class='tooltip-box'><strong>Corect:</strong> timp = ordine + durată.</span></span>",
            "<span class='tip'><strong>Doar perceperea duratei</strong><span class='tooltip-box'><strong>Distractor:</strong> fără succesiune nu ai organizare temporală completă.</span></span>",
            "<span class='tip'><strong>Doar perceperea succesiunii</strong><span class='tooltip-box'><strong>Distractor:</strong> fără durată lipsește componenta „cât a ținut”.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Percepția <span class='tip'><strong>mișcării</strong><span class='tooltip-box'><strong>Spus simplu:</strong> detectezi deplasarea și direcția unui obiect în raport cu fundalul/reperul.</span></span> este influențată de:",
          multiple: false,
          options: [
            "<span class='tip'><strong>Rolul reperelor și persistența imaginii retiniene</strong><span class='tooltip-box'><strong>Corect:</strong> reperele ajută să „compari” poziții, iar <strong>persistența imaginii retiniene</strong> înseamnă că imaginea rămâne foarte puțin timp pe retină, facilitând continuitatea percepției mișcării.<br /><br /><strong>Exemplu:</strong> la luminile intermitente, creierul poate „lega” cadrele și vede mișcare.</span></span>",
            "<span class='tip'><strong>Doar intensitatea luminii</strong><span class='tooltip-box'><strong>Distractor:</strong> lumina poate influența claritatea, dar nu e singurul mecanism-cheie pentru mișcare.</span></span>",
            "<span class='tip'><strong>Doar semnificația stimulului</strong><span class='tooltip-box'><strong>Distractor:</strong> semnificația poate orienta atenția, dar percepția mișcării are și baze perceptive/fiziologice specifice.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t5be",
      title: "Iluzii perceptive",
      questions: [
        {
          text: "Iluziile perceptive sunt <span class='tip'><strong>distorsiuni</strong><span class='tooltip-box'><strong>Spus simplu:</strong> percepi „altfel” un stimul real: nu inventezi obiectul, ci îl interpretezi deformat (mărime, lungime, direcție etc.).<br /><br /><strong>Exemplu:</strong> două segmente egale par diferite ca lungime în funcție de săgețile de la capete (iluzie clasică).</span></span> ale imaginii perceptive. Care explicație este corectă?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Iluziile apar din efecte de câmp</strong><span class='tooltip-box'><strong>Corect:</strong> elementele din jur (contextul) modifică felul în care e organizată percepția stimulului.<br /><br /><strong>Exemplu:</strong> aceeași nuanță pare mai deschisă pe un fundal închis și mai închisă pe un fundal deschis.</span></span>",
            "<span class='tip'><strong>Iluziile apar doar în absența totală a stimulilor</strong><span class='tooltip-box'><strong>Distractor:</strong> asta ar descrie mai curând halucinațiile/ imaginația (fără stimul real), nu iluziile.</span></span>",
            "<span class='tip'><strong>Iluziile apar doar din cauze medicale</strong><span class='tooltip-box'><strong>Distractor:</strong> multe iluzii sunt fenomene perceptive normale, produse de regulile de organizare ale percepției.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    // Curs 6 – REPREZENTĂRI// QUIZ 1 – Definirea reprezentărilor
    {
      id: "fph-t6a",
      title: "Definirea reprezentării",
      questions: [
        {
          text: "Reprezentarea este un <span class='tip'><strong>proces cognitiv-senzorial</strong><span class='tooltip-box'><strong>Spus simplu:</strong> păstrează și reconstruiește mental informații percepute anterior.</span></span> prin care sunt semnalizate <span class='tip'><strong>caracteristici concrete</strong><span class='tooltip-box'><strong>Exemple:</strong> formă, culoare, dimensiune, contur.</span></span> și <span class='tip'><strong>caracteristici reprezentative</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trăsături esențiale care rămân stabile în minte.</span></span> ale stimulilor, sub forma unor <span class='tip'><strong>imagini secundare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> imagini mintale care apar când stimulul nu mai este prezent.</span></span>, unitare, dar <span class='tip'><strong>schematice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> simplificate; păstrează esențialul, nu toate detaliile.</span></span>, în <span class='tip'><strong>absența acțiunii nemijlocite</strong><span class='tooltip-box'><strong>Spus simplu:</strong> obiectul nu mai acționează direct asupra organelor de simț.</span></span> a stimulilor asupra <span class='tip'><strong>analizatorilor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> receptor + căi nervoase + zone corticale specializate.</span></span>. Care variantă redă cel mai bine ideea?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Reprezentarea este imaginea mintală a unui obiect în absența lui, păstrând trăsăturile esențiale</strong><span class='tooltip-box'><strong>Corect:</strong> apare fără stimul prezent și reține esențialul.</span></span>",
            "<span class='tip'><strong>Reprezentarea este perceperea directă a obiectelor prezente</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie percepția (stimulus prezent).</span></span>",
            "<span class='tip'><strong>Reprezentarea este un proces exclusiv verbal, fără legătură cu percepția</strong><span class='tooltip-box'><strong>Distractor:</strong> reprezentările se bazează pe experiențe perceptive; pot include limbaj, dar nu sunt doar verbale.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Reprezentările sunt <span class='tip'><strong>imagini secundare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> continuă percepția după dispariția obiectului.</span></span>. Ce înseamnă asta?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Imaginea mentală rămâne disponibilă chiar și când obiectul nu mai este prezent</strong><span class='tooltip-box'><strong>Corect:</strong> poți „vedea cu mintea” obiectul fără să fie în fața ta.</span></span>",
            "<span class='tip'><strong>Imaginea mentală apare doar dacă obiectul se află în fața noastră</strong><span class='tooltip-box'><strong>Distractor:</strong> dacă obiectul e prezent, vorbim de percepție, nu de reprezentare.</span></span>",
            "<span class='tip'><strong>Imaginea mentală reproduce doar detalii irelevante</strong><span class='tooltip-box'><strong>Distractor:</strong> reprezentarea păstrează mai ales esențialul.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Reprezentările sunt unitare, dar <span class='tip'><strong>schematice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> rețin trăsăturile semnificative, nu toate detaliile.</span></span>. Ce implică asta?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Păstrează în principal ceea ce este relevant pentru obiect</strong><span class='tooltip-box'><strong>Corect:</strong> rămân reperele esențiale (forma generală, elemente-cheie).</span></span>",
            "<span class='tip'><strong>Sunt copii exacte ale percepției</strong><span class='tooltip-box'><strong>Distractor:</strong> copia exactă ar cere toate detaliile, ceea ce contrazice caracterul schematic.</span></span>",
            "<span class='tip'><strong>Nu pot fi folosite în gândire</strong><span class='tooltip-box'><strong>Distractor:</strong> tocmai sunt utile în gândire, planificare, rezolvare de probleme.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Completează corect: reprezentarea apare când stimulul <span class='tip'><strong>nu mai acționează direct</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu mai ai contact senzorial imediat cu obiectul.</span></span> asupra analizatorilor. Așadar, reprezentarea este mai apropiată de:",
          multiple: false,
          options: [
            "<span class='tip'><strong>„imaginea în minte” a unui obiect absent</strong><span class='tooltip-box'><strong>Corect:</strong> obiectul lipsește din câmpul perceptiv, dar îl poți reactualiza mental.</span></span>",
            "<span class='tip'><strong>„fotografia” exactă a ceea ce vezi acum</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie mai bine percepția curentă.</span></span>",
            "<span class='tip'><strong>un reflex automat fără conținut mental</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexul nu presupune reconstruirea unei imagini mentale.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 1 – Modalități de prezentare ale reprezentărilor
    {
      id: "fph-t6b",
      title: "Modalități de prezentare ale reprezentărilor",
      questions: [
        {
          text: "Reprezentările pot fi înțelese ca <span class='tip'><strong>reconstrucții mintale reprezentative.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> refaci mental un obiect/situație și o poți „muta” în alt loc sau timp.<br /><br /><strong>Academic:</strong> imaginea reprezentativă reconstituie stimulul și permite transpunerea lui în contexte spațio-temporale diferite de cele ale percepției.<br /><br /><strong>Exemplu:</strong> îți imaginezi cum va arăta traseul de mâine, deși ești acum acasă.</span></span> Care afirmație este corectă?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Refac și pot reorganiza mental experiența.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu rămân „lipite” de prezent.<br /><br /><strong>Academic:</strong> permit reconfigurarea conținutului perceput în alte coordonate spațio-temporale.<br /><br /><strong>Exemplu:</strong> proiectezi mental o încăpere cu mobilierul schimbat.</span></span>",
            "<span class='tip'><strong>Sunt doar percepție directă, aici și acum.</strong><span class='tooltip-box'><strong>Distractor:</strong> enunțul descrie <strong>percepția</strong>, nu <strong>reprezentarea</strong>.<br /><br /><strong>Diferența-cheie:</strong> percepția cere <strong>stimul prezent</strong> și prelucrare „aici și acum”, pe când reprezentarea poate funcționa <strong>în absența stimulului</strong> și permite <strong>transpunere/reorganizare</strong> mentală.<br /><br /><strong>Exemplu:</strong> vezi cana doar când e în fața ta (percepție), dar ți-o poți imagina pe raft chiar dacă nu e acolo (reprezentare).</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează descrierile în care reprezentările pot apărea ca <span class='tip'><strong>modalități de prezentare - forme tipice ale reprezentării.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> feluri în care „se arată” o reprezentare în minte.<br /><br /><strong>Academic:</strong> forme funcționale ale imaginii reprezentative, diferențiate prin grad de schematizare, cuprindere și dependență de câmpul perceptiv.<br /><br /><strong>Exemplu:</strong> uneori păstrezi doar esențialul, alteori ai un tablou de ansamblu.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>imagini secundare - imagini mintale după percepție.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> continuă percepția după dispariția stimulului.<br /><br /><strong>Academic:</strong> reactualizări imagistice ale informației perceptive, în absența stimulului actual.<br /><br /><strong>Exemplu:</strong> îți apare mental forma unui copac văzut ieri.</span></span>",
            "<span class='tip'><strong>simboluri figurative (scheme) - schițe figurative ale însușirilor.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> o „schiță” care redă trăsături concret-intuitive.<br /><br /><strong>Academic:</strong> organizări figurative ce redau însușiri reprezentative (formă, mărime, culoare) într-o structură simplificată.<br /><br /><strong>Exemplu:</strong> îți „desenezi” mental conturul unei biciclete.</span></span>",
            "<span class='tip'><strong>imagini schematizate - esențialul fără detalii inutile.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> rămâne esențialul, dispar detaliile nerelevante.<br /><br /><strong>Academic:</strong> imagini ale însușirilor semnificative și caracteristice, în absența detaliilor nerelevante.<br /><br /><strong>Exemplu:</strong> îți amintești „geaca roșie” a cuiva, nu toate cusăturile.</span></span>",
            "<span class='tip'><strong>imagini panoramice - tablou de ansamblu relevant.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „tablou de ansamblu” cu informația relevantă.<br /><br /><strong>Academic:</strong> reprezentări ce redau simultan și integral (în sensul relevanței) informațiile esențiale despre stimul/câmp.<br /><br /><strong>Exemplu:</strong> îți apare dintr-o dată schema generală a unei săli (uși, bănci, tablă).</span></span>",
            "<span class='tip'><strong>imagini ale stimulilor detașați de câmpul perceptiv - imagine fără stimul prezent.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> funcționează fără stimulul prezent în câmpul perceptiv.<br /><br /><strong>Academic:</strong> sunt independente de situația perceptivă imediată, deoarece nu presupun acțiunea nemijlocită a obiectului asupra analizatorilor.<br /><br /><strong>Exemplu:</strong> îți reprezinți drumul spre casă fără să fii pe traseu.</span></span>",
          ],
          answer: [0, 1, 2, 3, 4],
        },

        {
          text: "Selectează afirmațiile care descriu reprezentările ca <span class='tip'><strong>procese ce depășesc situația perceptivă imediată.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu rămân blocate în „aici și acum”.<br /><br /><strong>Academic:</strong> reprezentarea susține operarea mentală prin reactivare, organizare și generalizare, independent de câmpul perceptiv curent.<br /><br /><strong>Exemplu:</strong> planifici, compari sau construiești mental pe baza experienței trecute.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>reconstrucții mintale reprezentative.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> refac mental stimulul și îl pot „pune” în alt context.<br /><br /><strong>Academic:</strong> transpun conținutul în contexte spațio-temporale diferite de percepție.<br /><br /><strong>Exemplu:</strong> îți imaginezi o întâlnire de mâine într-un loc cunoscut.</span></span>",
            "<span class='tip'><strong>bazate pe limbaj, cu rol reglator și integrator.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cuvintele ajută să organizezi și să transformi imaginea din minte.<br /><br /><strong>Academic:</strong> cuvântul descrie și dirijează organizarea/transformarea imaginii secundare și o integrează în gândire.<br /><br /><strong>Exemplu:</strong> îți spui mental „mai la stânga” și ajustezi imaginea traseului.</span></span>",
            "<span class='tip'><strong>precursori ai abstracțiilor mintale.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> te ajută să treci de la concret la concept.<br /><br /><strong>Academic:</strong> prin detașare și reținerea trăsăturilor caracteristice, pregătesc generalizările specifice conceptelor.<br /><br /><strong>Exemplu:</strong> din multe imagini de „scaun” extragi ideea generală de scaun.</span></span>",
            "<span class='tip'><strong>reacții reflexe automate.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> răspunsuri involuntare la stimuli.<br /><br /><strong>Academic:</strong> țin de mecanisme reflexe, nu de reconstrucție și operare imagistică.<br /><br /><strong>Exemplu:</strong> tresari la un zgomot puternic.</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Ce surprinde cel mai bine rolul <span class='tip'><strong>limbajului în reprezentări?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „vorbirea” poate fi și internă (în gând), nu doar cu voce tare.<br /><br /><strong>Academic:</strong> limbajul funcționează ca instrument reglator și integrator: descrie, dirijează organizarea și transformă imaginea secundară, facilitând integrarea ei în procesele gândirii.<br /><br /><strong>Exemplu:</strong> îți formulezi mental pașii („întâi…, apoi…”) și imaginea se structurează mai clar.</span></span>",
          multiple: false,
          options: [
            "<span class='tip'><strong>Ghidează organizarea și transformarea imaginii.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cuvintele „ordonă” ceea ce îți imaginezi.<br /><br /><strong>Academic:</strong> limbajul orientează și restructurează conținutul reprezentativ și îl conectează la operații de gândire.<br /><br /><strong>Exemplu:</strong> îți spui „mai mare/mai mic” și ajustezi mental dimensiunea obiectului.</span></span>",
            "<span class='tip'><strong>Înlocuiește complet imaginea, deci nu mai există reprezentare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ar rămâne doar cuvinte, fără imagini.<br /><br /><strong>Academic:</strong> formulare excesivă: limbajul poate ghida, nu anulează componenta imagistică.<br /><br /><strong>Exemplu:</strong> poți avea și cuvinte, și imagine despre același lucru.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t6c",
      title: "Tipuri de reprezentări",
      questions: [
        {
          text: "Tipurile de reprezentări pot fi descrise după două repere: <span class='tip'><strong>analizatorul implicat</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce canal domină imaginea mentală (vizual, auditiv, chinestezic).<br /><br /><strong>Academic:</strong> predominanța unui sistem senzorial în elaborarea conținutului reprezentativ.<br /><br /><strong>Exemplu:</strong> îți „vezi” în minte un obiect sau îți „auzi” mental o melodie.</span></span> și <span class='tip'><strong>nivelul operațiilor.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dacă imaginea reface ceva perceput sau anticipează ceva nou.<br /><br /><strong>Academic:</strong> diferențiere după tipul operațiilor cognitive implicate (reproducere vs. anticipare; Piaget).<br /><br /><strong>Exemplu:</strong> îți reamintești traseul făcut ieri vs. îți imaginezi un traseu nou.</span></span> Care variantă surprinde corect aceste repere?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Analizator dominant + nivelul operațiilor (Piaget).</strong><span class='tooltip-box'><strong>Corect:</strong> două repere diferite pentru descrierea tipurilor, fără a le amesteca într-o singură schemă rigidă.</span></span>",
            "<span class='tip'><strong>Analizator dominant + intensitatea stimulului (praguri).</strong><span class='tooltip-box'><strong>Distractor:</strong> intensitatea/pragurile țin de sensibilitate, nu de tipurile reprezentărilor după operații (Piaget).<br /><br /><strong>Diferența-cheie:</strong> aici criteriul este <strong>cum se construiește imaginea</strong> (reproducere/anticipare), nu <strong>cât de puternic e stimulul</strong>.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "După <span class='tip'><strong>analizatorul implicat cu precădere.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce sistem „conduce” imaginea mentală.<br /><br /><strong>Academic:</strong> clasificare după modalitatea senzorială predominantă în producerea reprezentării.<br /><br /><strong>Exemplu:</strong> îți apare o imagine (vizual) vs. îți răsună un sunet (auditiv).</span></span> selectează tipurile evidențiate ca cele mai importante:",
          multiple: true,
          options: [
            "<span class='tip'><strong>reprezentări vizuale.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> imagini de forme, culori, contururi.<br /><br /><strong>Academic:</strong> conținut reprezentativ cu suport imagistic vizual (configurații spațiale).<br /><br /><strong>Exemplu:</strong> îți „vezi” mental camera ta.</span></span>",
            "<span class='tip'><strong>reprezentări auditive.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunete, ritmuri, „cum sună” cuvintele.<br /><br /><strong>Academic:</strong> conținut reprezentativ bazat pe patternuri sonore și structuri melodice/verbale.<br /><br /><strong>Exemplu:</strong> îți „auzi” în minte refrenul unei melodii.</span></span>",
            "<span class='tip'><strong>reprezentări chinestezice.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „simți” mișcarea sau execuția unei acțiuni.<br /><br /><strong>Academic:</strong> conținut reprezentativ asociat schemei motorii și feedbackului proprioceptiv (acte ideomotorii).<br /><br /><strong>Exemplu:</strong> îți imaginezi cum scrii și ai senzația gestului.</span></span>",
            "<span class='tip'><strong>reprezentări gustative.</strong><span class='tooltip-box'><strong>Distractor:</strong> în această prezentare, nu sunt tratate ca tip principal în raport cu analizatorul dominant.<br /><br /><strong>Diferența-cheie:</strong> sunt evidențiate cu prioritate formele <strong>vizual/auditiv/chinestezic</strong>.</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "În experiența curentă, reprezentările <span class='tip'><strong>vizuale sunt adesea dominante.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pentru mulți oameni, „imaginile” din minte apar mai ușor.<br /><br /><strong>Academic:</strong> predominanța conținutului imagistic vizual ca frecvență și accesibilitate în activitatea reprezentativă.<br /><br /><strong>Exemplu:</strong> când îți amintești o persoană, îți apare mai întâi fața (nu vocea).</span></span> Ce înseamnă asta, în termeni simpli?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Pentru mulți oameni, imaginile mentale sunt mai des vizuale.</strong><span class='tooltip-box'><strong>Corect:</strong> dominanță ca frecvență și ușurință de acces în activitatea reprezentativă.</span></span>",
            "<span class='tip'><strong>De regulă, reprezentările vizuale sunt mai rare decât cele auditive.</strong><span class='tooltip-box'><strong>Distractor:</strong> inversează ideea de dominanță.<br /><br /><strong>Diferența-cheie:</strong> „dominant” înseamnă <strong>mai frecvent/mai accesibil</strong>, nu mai rar.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Reprezentările <span class='tip'><strong>chinestezice se asociază cu acte ideomotorii.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> apar mici „pregătiri” ale mișcării în minte și uneori în mușchi.<br /><br /><strong>Academic:</strong> activări motorii incipiente/micromișcări legate de anticiparea și programarea execuției.<br /><br /><strong>Exemplu:</strong> când îți imaginezi că lovești mingea, „îți vine” să faci gestul.</span></span> Care exemplu se potrivește cel mai bine?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Îți imaginezi că scrii și „simți” începutul mișcării în mână.</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe senzația de execuție/pregătirea gestului (ideomotor).</span></span>",
            "<span class='tip'><strong>Îți imaginezi culoarea unei mașini fără nicio senzație de mișcare.</strong><span class='tooltip-box'><strong>Distractor:</strong> exemplu tipic de reprezentare <strong>vizuală</strong>, nu chinestezică.<br /><br /><strong>Diferența-cheie:</strong> chinestezicul implică <strong>mișcare/execuție</strong>, nu <strong>culoare/contur</strong>.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "După <span class='tip'><strong>nivelul operațiilor implicate.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dacă imaginea reface trecutul sau construiește ceva nou (Piaget).<br /><br /><strong>Academic:</strong> distincția dintre reprezentări reproductive și anticipative.<br /><br /><strong>Exemplu:</strong> refaci mental o scenă văzută vs. imaginezi una posibilă.</span></span> se disting:",
          multiple: true,
          options: [
            "<span class='tip'><strong>reprezentări reproductive.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> refac ceva perceput.<br /><br /><strong>Academic:</strong> scheme ale stimulilor anterior percepuți (reconstituire).<br /><br /><strong>Exemplu:</strong> îți amintești cum arată strada ta.</span></span>",
            "<span class='tip'><strong>reprezentări anticipative.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> anticipează ceva neperceput încă.<br /><br /><strong>Academic:</strong> construcții imagistice orientate spre modelare/previziune.<br /><br /><strong>Exemplu:</strong> îți imaginezi cum ar arăta camera după rearanjare.</span></span>",
            "<span class='tip'><strong>reprezentări reflexe.</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexele sunt răspunsuri automate, nu tipuri de reprezentări după operații.<br /><br /><strong>Diferența-cheie:</strong> aici vorbim de <strong>imagini mentale</strong>, nu de <strong>reacții reflexe</strong>.</span></span>",
          ],
          answer: [0, 1],
        },

        {
          text: "Reprezentările <span class='tip'><strong>reproductive pot fi scheme.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „modele” mentale ale celor percepute.<br /><br /><strong>Academic:</strong> organizări reprezentative care reconstituie experiența perceptivă anterioară.<br /><br /><strong>Exemplu:</strong> refaci mental cum s-a desfășurat o acțiune.</span></span> Selectează formele menționate:",
          multiple: true,
          options: [
            "<span class='tip'><strong>statice.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> redau obiectul „în repaus”.<br /><br /><strong>Academic:</strong> reprezentări ale configurației fără componentă de mișcare.<br /><br /><strong>Exemplu:</strong> imaginea unui copac.</span></span>",
            "<span class='tip'><strong>cinetice.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> redau mișcarea.<br /><br /><strong>Academic:</strong> reprezentări ale deplasării/derulării acțiunii.<br /><br /><strong>Exemplu:</strong> îți amintești cum a aruncat cineva mingea.</span></span>",
            "<span class='tip'><strong>de transformare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> redau schimbarea obiectului.<br /><br /><strong>Academic:</strong> reprezentări ale modificării progresive (formă/poziție/structură).<br /><br /><strong>Exemplu:</strong> îți imaginezi gheața topindu-se.</span></span>",
            "<span class='tip'><strong>exclusiv verbale.</strong><span class='tooltip-box'><strong>Distractor:</strong> „verbal” nu este aici criteriul de tip (static/cinetic/transformare).<br /><br /><strong>Diferența-cheie:</strong> criteriul este <strong>dinamica imaginii</strong>, nu canalul verbal.</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Reprezentările <span class='tip'><strong>anticipative sunt generate prin imaginație și gândire.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> construiești mental modele despre ceva neperceput încă.<br /><br /><strong>Academic:</strong> elaborări reprezentative orientate spre modelare/previziune, cu posibil caracter cinetic sau de transformare.<br /><br /><strong>Exemplu:</strong> îți imaginezi cum se va desfășura o prezentare mâine.</span></span> Care variantă le descrie cel mai corect?",
          multiple: false,
          options: [
            "<span class='tip'><strong>Modele mentale despre obiecte sau situații care nu sunt percepute direct în prezent, construite prin imaginație și gândire.</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe anticipare și modelare a posibilului, nu pe simpla reconstituire a trecutului.</span></span>",
            "<span class='tip'><strong>Copie fidelă a unei percepții trecute, redată identic în minte, fără transformare, fără anticipare și fără noutate, în fond.</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai bine reprezentarea <strong>reproductivă</strong>.<br /><br /><strong>Diferența-cheie:</strong> anticipativ = <strong>construcție despre posibil</strong>, reproductiv = <strong>reconstituire a trecutului</strong>.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    // Curs 7 – MEMORIA

    // Subcapitol 1 – Definirea memoriei
    // QUIZ 1 – Definirea memoriei

    {
      id: "fph-t7a",
      title: "Definirea memoriei",
      questions: [
        {
          text: "Memoria este un <span class='tip'><strong>proces psihic</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un mecanism mental prin care păstrezi și folosești informații în timp.<br /><br /><strong>Exemplu:</strong> îți amintești indicațiile primite ieri și le aplici azi.</span></span> de <span class='tip'><strong>stocare și destocare a informației</strong><span class='tooltip-box'><strong>Spus simplu:</strong> păstrezi informația și o poți accesa mai târziu.<br /><br /><strong>Exemplu:</strong> reții parola și o reactivezi când ai nevoie.</span></span>, de <span class='tip'><strong>acumulare și utilizare a experienței cognitive.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> aduni experiență (cunoștințe, impresii, învățări) și o folosești în situații noi.<br /><br /><strong>Exemplu:</strong> aplici o regulă învățată la un exercițiu diferit.</span></span> Care variantă exprimă cel mai clar această definiție?",
          options: [
            "<span class='tip'><strong>Capacitatea de a păstra informații, de a le regăsi ulterior și de a le folosi orientat spre un scop, atunci când situația o cere</strong><span class='tooltip-box'><strong>Corect:</strong> include păstrarea, accesarea și utilizarea, nu doar „înregistrarea” informației.<br /><br /><strong>Exemplu:</strong> îți amintești o definiție și o aplici într-un exercițiu.</span></span>",
            "<span class='tip'><strong>Capacitatea de a percepe informații prezente, de a reacționa imediat la ele și de a le abandona apoi, fără păstrare ori folosire ulterioară</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie percepția și reacția imediată, nu stocarea și reactualizarea în timp.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care sunt principalele <span class='tip'><strong>etape ale funcționării memoriei?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pașii mari prin care informația ajunge în memorie, se menține și poate fi readusă.<br /><br /><strong>Exemplu:</strong> înregistrezi o idee, o păstrezi, apoi o reamintești la test.</span></span>",
          shuffle: false,
          options: [
            "<span class='tip'><strong>Întipărirea (engramarea)</strong><span class='tooltip-box'><strong>Corect:</strong> informația este înregistrată pentru prima dată în sistemul mnezic.</span></span>",
            "<span class='tip'><strong>Păstrarea (conservarea)</strong><span class='tooltip-box'><strong>Corect:</strong> informația este menținută în timp în structurile de memorie.</span></span>",
            "<span class='tip'><strong>Reactualizarea</strong><span class='tooltip-box'><strong>Corect:</strong> informația este regăsită și adusă în conștiință.</span></span>",
            "<span class='tip'><strong>Adaptarea senzorială</strong><span class='tooltip-box'><strong>Distractor:</strong> ține de sensibilitate, nu de etapele memoriei.</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Reactualizarea se poate face sub două forme principale <span class='tip'><strong>recunoașterea</strong><span class='tooltip-box'>...</span></span> și <span class='tip'><strong>reproducerea.</strong><span class='tooltip-box'>...</span></span> Ce afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Recunoașterea apare când identifici informația în prezența ei, iar reproducerea când o evocăm singuri, fără indicii sau suport extern</strong><span class='tooltip-box'><strong>Corect:</strong> criteriul este existența sprijinului extern: o reîntâlnești vs. o generezi din memorie.</span></span>",
            "<span class='tip'><strong>Recunoașterea apare când evocăm informația fără indicii, iar reproducerea când o identificăm în prezența ei, cu suport extern oferit</strong><span class='tooltip-box'><strong>Distractor:</strong> inversează sensul celor două forme de reactualizare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Memoria este organizată în mai multe <span class='tip'><strong>sisteme mnezice?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „depozite”/mecanisme diferite ale memoriei, diferențiate prin durată, capacitate și rol funcțional diferite.<br /><br /><strong>Exemplu:</strong> unele păstrează foarte puțin, altele foarte mult timp.</span></span> Care dintre următoarele sunt considerate astfel de sisteme?",
          options: [
            "<span class='tip'><strong>Memoria senzorială</strong><span class='tooltip-box'><strong>Corect:</strong> stocaj de foarte scurtă durată al informațiilor brute provenite din analizatori.<br /><br /><strong>Exemplu:</strong> „urma” vizuală foarte scurtă după ce ai privit un obiect.</span></span>",
            "<span class='tip'><strong>Memoria de scurtă durată și memoria de lucru</strong><span class='tooltip-box'><strong>Corect:</strong> menține temporar informația activă pentru utilizare imediată și operare mentală.<br /><br /><strong>Exemplu:</strong> ții în minte un număr ca să faci un calcul.</span></span>",
            "<span class='tip'><strong>Memoria de lungă durată</strong><span class='tooltip-box'><strong>Corect:</strong> depozit pe termen lung al cunoștințelor și experiențelor.<br /><br /><strong>Exemplu:</strong> îți amintești reguli învățate în anii trecuți.</span></span>",
            "<span class='tip'><strong>Memoria instinctuală primară</strong><span class='tooltip-box'><strong>Distractor:</strong> nu este un sistem mnezic standard în această clasificare (MS, MSD/memoria de lucru, MLD).</span></span>",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // Subcapitol 2 – Sisteme mnezice
    // QUIZ 2 – Memoria senzorială (MS)

    {
      id: "fph-t7b",
      title: "Memoria senzorială (MS)",
      questions: [
        {
          text: "Memoria senzorială (MS) reprezintă un <span class='tip'><strong>stocaj senzorial</strong><span class='tooltip-box'><strong>Spus simplu:</strong> depozit foarte scurt al urmelor senzoriale brute (vizuale, auditive etc.).</span></span> care permite activarea <span class='tip'><strong>detectorilor de trăsături</strong><span class='tooltip-box'><strong>Spus simplu:</strong> mecanisme care identifică trăsături elementare precum linii, contururi, frecvențe, intensități.</span></span>, fără <span class='tip'><strong>intervenția atenției.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> reținerea este automată, preconștientă; nu trebuie să te concentrezi voit asupra stimulului.</span></span> Care afirmație descrie corect rolul MS?",
          options: [
            "<span class='tip'><strong>MS păstrează foarte pe scurt urmele senzoriale brute, permițând identificarea rapidă a trăsăturilor stimulilor, înainte de focalizarea atenției</strong><span class='tooltip-box'><strong>Corect:</strong> MS oferă „materia primă” senzorială inițială, disponibilă chiar și fără atenție voluntară.</span></span>",
            "<span class='tip'><strong>MS păstrează mult timp urmele senzoriale brute, permițând identificarea completă a semnificațiilor stimulilor, numai după focalizarea atenției</strong><span class='tooltip-box'><strong>Distractor:</strong> MS este foarte scurtă și nu presupune analiză semantică; semnificația ține de prelucrări ulterioare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care afirmație despre <span class='tip'><strong>durata memoriei senzoriale?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> timpul extrem de scurt în care urmele senzoriale sunt păstrate în MS.</span></span>",
          options: [
            "<span class='tip'><strong>Durata MS este de ordinul zecilor de sutimi de secundă</strong><span class='tooltip-box'><strong>Corect:</strong> reținerea este foarte scurtă, suficientă doar pentru o prelucrare inițială.</span></span>",
            "<span class='tip'><strong>Durata MS este de ordinul zecilor de minute, menținând stabil urmele senzoriale</strong><span class='tooltip-box'><strong>Distractor:</strong> minutele țin de alte sisteme; MS funcționează mult mai rapid și se stinge repede.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Informația reținută în MS este considerată <span class='tip'><strong>materie primă pentru prelucrări cognitive ulterioare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> material de bază din care vor selecta și organiza ulterior atenția, percepția și memoria de lucru.</span></span> Ce înseamnă aceasta?",
          options: [
            "<span class='tip'><strong>Informațiile din MS sunt baza din care atenția, percepția și memoria de lucru aleg și organizează ce va fi prelucrat mai departe</strong><span class='tooltip-box'><strong>Corect:</strong> MS furnizează un „buffer” inițial pe care procesele ulterioare îl selectează și îl structurează.</span></span>",
            "<span class='tip'><strong>Informațiile din MS se transformă direct în amintiri de lungă durată, fără selecție, organizare sau alte etape</strong><span class='tooltip-box'><strong>Distractor:</strong> trecerea în MLD presupune etape și prelucrări; MS nu „sar” direct în depozitul de durată.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t7c",
      title: "Memoria de scurtă durată (MSD) – memoria de lucru",
      questions: [
        {
          text: "Memoria de scurtă durată (MSD) este adesea descrisă ca <span class='tip'><strong>partea activă a memoriei de lungă durată.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> informații din MLD sunt aduse temporar „în față” ca să le folosești în sarcina curentă.</span></span> Ce formulare explică cel mai clar această idee?",
          options: [
            "<span class='tip'><strong>MSD presupune activarea temporară a unor informații din memoria de lungă durată pentru a le folosi în rezolvarea unei sarcini</strong><span class='tooltip-box'><strong>Corect:</strong> MSD funcționează ca spațiu de lucru în care sunt „ținute active” informații relevante.</span></span>",
            "<span class='tip'><strong>MSD presupune stocarea definitivă a tuturor informațiilor, fără legătură cu memoria de lungă durată și fără utilizare în sarcini</strong><span class='tooltip-box'><strong>Distractor:</strong> „definitiv” și „fără utilizare” descriu opusul memoriei de lucru.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "MSD se mai numește și <span class='tip'><strong>memorie de lucru</strong><span class='tooltip-box'><strong>Spus simplu:</strong> menține și manipulează informații „aici și acum”, direct în activitate.</span></span> deoarece:",
          options: [
            "<span class='tip'><strong>Permite folosirea în activitate a informațiilor, menținându-le active cât timp este necesar pentru sarcina curentă</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe menținere activă și utilizare imediată.</span></span>",
            "<span class='tip'><strong>Permite păstrarea automată a informațiilor pentru luni sau ani, chiar dacă nu sunt folosite deloc în sarcina curentă</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie mai degrabă MLD; MSD este scurtă și orientată spre sarcina prezentă.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Capacitatea memoriei de lucru este aproximativ <span class='tip'><strong>7 ± 2 elemente.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „numărul magic 7” (Miller): în medie păstrezi simultan cam 5–9 unități.</span></span> Ce strategie poate crește volumul informației reținute?",
          options: [
            "<span class='tip'><strong>Gruparea în unități cu sens, adică în „chunks”</strong><span class='tooltip-box'><strong>Corect:</strong> reorganizezi elementele izolate în grupuri semnificative.<br /><br /><strong>Exemplu:</strong> 1-9-4-5 devine „1945”.</span></span>",
            "<span class='tip'><strong>Separarea intenționată a fiecărui element în unități fără sens, evitând orice organizare</strong><span class='tooltip-box'><strong>Distractor:</strong> lipsa organizării scade eficiența și nu crește capacitatea funcțională.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Durata tipică a menținerii informației în MSD este:",
          options: [
            "<span class='tip'><strong>Aproximativ 15–20 de secunde, dacă informația nu este repetată sau prelucrată</strong><span class='tooltip-box'><strong>Corect:</strong> fără repetare/prelucrare, activarea se stinge relativ repede.</span></span>",
            "<span class='tip'><strong>Aproximativ 15–20 de minute, chiar dacă informația nu este repetată și nu este prelucrată</strong><span class='tooltip-box'><strong>Distractor:</strong> minutele depășesc tipic MSD; fără repetare, durata e mult mai scurtă.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Memoria de lucru (MSD) și atenția sunt descrise ca fiind <span class='tip'><strong>coextensive în stare de relaxare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> în condiții obișnuite, ceea ce ții activ în MSD seamănă mult cu ceea ce poate cuprinde atenția.</span></span> Ce mai afirmă <span class='tip'><strong>Miclea (2003)?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> autor care discută relația funcțională dintre atenție și memoria de lucru.</span></span>",
          options: [
            "<span class='tip'><strong>Memoria de lucru are, în general, un volum mai stabil și o extensiune ușor mai mare decât atenția</strong><span class='tooltip-box'><strong>Corect:</strong> MSD tinde să fie puțin mai „largă” și mai stabilă decât atenția, în condiții obișnuite.</span></span>",
            "<span class='tip'><strong>Atenția are, în general, un volum mai stabil și o extensiune ușor mai mare decât memoria de lucru</strong><span class='tooltip-box'><strong>Distractor:</strong> inversează ideea formulată în prezentarea citată (Miclea, 2003).</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t7d",
      title: "Memoria de lungă durată (MLD)",
      questions: [
        {
          text: "Memoria de lungă durată (MLD) reprezintă <span class='tip'><strong>ansamblul cunoștințelor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> totalitatea informațiilor stocate, precum fapte, reguli, proceduri și amintiri personale.</span></span> pe care le deține un individ, cu o <span class='tip'><strong>capacitate teoretic nelimitată.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu există un „număr maxim” strict de informații ce pot fi stocate, ca în MSD.</span></span> Ce afirmație este corectă?",
          options: [
            "<span class='tip'><strong>MLD este depozitul pe termen lung al cunoștințelor și experiențelor, cu o capacitate teoretic nelimitată</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe durată mare și capacitate foarte mare.</span></span>",
            "<span class='tip'><strong>MLD este depozitul pe termen lung al cunoștințelor și experiențelor, cu o capacitate strict limitată</strong><span class='tooltip-box'><strong>Distractor:</strong> limita strictă este specifică mai degrabă MSD, nu MLD.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "MLD răspunde necesităților memoriei de lucru prin <span class='tip'><strong>activarea selectivă a unor informații.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> doar informațiile relevante pentru sarcina curentă sunt „chemate” în MSD.</span></span> Ce descriere este corectă?",
          options: [
            "<span class='tip'><strong>MLD pune la dispoziție informații specifice atunci când avem nevoie de ele, prin activarea lor selectivă în MSD</strong><span class='tooltip-box'><strong>Corect:</strong> selectivitatea este esențială pentru eficiența sarcinii.</span></span>",
            "<span class='tip'><strong>MLD pune la dispoziție toate informațiile simultan atunci când avem nevoie de ele, fără activare selectivă în MSD</strong><span class='tooltip-box'><strong>Distractor:</strong> ar supraîncărca MSD; în practică se activează doar ce este relevant.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t7e",
      title: "Memoria explicită și memoria implicită",
      questions: [
        {
          text: "Memoria poate fi împărțită în <span class='tip'><strong>memorie explicită (declarativă)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cunoștințe conștiente, pe care le poți exprima verbal.</span></span> și <span class='tip'><strong>memorie implicită (procedurală).</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cunoștințe exprimate prin deprinderi și proceduri, greu de pus în cuvinte (de exemplu, mersul pe bicicletă).</span></span> Ce deosebire generală există între ele?",
          options: [
            "<span class='tip'><strong>Explicita se bazează pe conștientizare și verbalizare, iar implicita se exprimă prin acțiuni și deprinderi fără a fi necesar să fie verbalizată</strong><span class='tooltip-box'><strong>Corect:</strong> criteriul este accesul conștient și posibilitatea de a pune în cuvinte conținutul.</span></span>",
            "<span class='tip'><strong>Explicita se exprimă doar prin deprinderi motorii, iar implicita se bazează pe conștientizare și verbalizare în mod constant</strong><span class='tooltip-box'><strong>Distractor:</strong> inversează trăsăturile celor două tipuri de memorie.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Memoria explicită sau declarativă cuprinde <span class='tip'><strong>cunoștințe despre fapte, lucruri și stări</strong><span class='tooltip-box'><strong>Exemple:</strong> „Paris este capitala Franței”, „2 + 2 = 4”, „Astăzi este marți”.</span></span>, care sunt conștientizate și exprimate verbal. Ce afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Memoria explicită se referă la informații pe care le putem povesti, descrie sau explica în mod conștient</strong><span class='tooltip-box'><strong>Corect:</strong> include acces conștient și exprimare verbală.</span></span>",
            "<span class='tip'><strong>Memoria explicită se referă la reguli de execuție automate, greu de descris și greu de pus în cuvinte</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie mai degrabă memoria implicită/procedurală.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Memoria implicită sau procedurală se referă la <span class='tip'><strong>reguli de execuție și proceduri</strong><span class='tooltip-box'><strong>Exemplu:</strong> cum conduci o mașină sau cum tastezi la calculator.</span></span>, care sunt dificil de verbalizat. Ce afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Memoria implicită se exprimă prin performanță, adică prin execuția unei sarcini, nu prin descriere verbală</strong><span class='tooltip-box'><strong>Corect:</strong> se vede în „a face”, nu în „a spune”.</span></span>",
            "<span class='tip'><strong>Memoria implicită se exprimă doar prin definiții verbale, fără legătură cu deprinderi sau cu execuția unei sarcini</strong><span class='tooltip-box'><strong>Distractor:</strong> proceduralul este tocmai despre deprinderi și execuție, nu despre verbalizare.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t7f",
      title: "Memoria episodică și memoria semantică",
      questions: [
        {
          text: "Memoria episodică și memoria semantică sunt două componente ale memoriei declarative. <span class='tip'><strong>Memoria episodică</strong><span class='tooltip-box'><strong>Spus simplu:</strong> amintiri despre evenimente personale trăite, ca „episoade” din viața proprie.</span></span> are un rol important în <span class='tip'><strong>formarea și menținerea identității de sine.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> susține sentimentul continuității personale, adică „cine sunt eu” prin ceea ce am trăit.</span></span> Ce afirmație redă această idee?",
          options: [
            "<span class='tip'><strong>Memoria episodică contribuie la identitatea personală prin amintirile autobiografice pe care le stocăm și le reactualizăm</strong><span class='tooltip-box'><strong>Corect:</strong> „episoadele” trăite consolidează sentimentul de sine.</span></span>",
            "<span class='tip'><strong>Memoria episodică nu are legătură cu identitatea personală, deoarece include doar fapte generale și reguli învățate</strong><span class='tooltip-box'><strong>Distractor:</strong> faptele generale țin de semantică; episodicul este autobiografic și relevant pentru identitate.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'><strong>Memoria episodică</strong><span class='tooltip-box'><strong>Spus simplu:</strong> memorie a evenimentelor trăite, cu detalii de tip cine, ce, unde, când și în ce context.</span></span> se referă la:",
          options: [
            "<span class='tip'><strong>Amintiri autobiografice despre evenimente personale, trăite în contexte concrete</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe evenimente personale și context.</span></span>",
            "<span class='tip'><strong>Cunoștințe generale despre concepte și reguli, independente de un context personal</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie memoria semantică, nu episodică.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'><strong>Memoria semantică</strong><span class='tooltip-box'><strong>Spus simplu:</strong> memorie a cunoștințelor generale despre lume, precum concepte, reguli și informații factuale.</span></span> se referă la:",
          options: [
            "<span class='tip'><strong>Cunoștințe factuale și conceptuale despre lume, dobândite prin învățare și relativ independente de contextul personal</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe „ce știu” despre lume.</span></span>",
            "<span class='tip'><strong>Amintiri despre evenimente personale, trăite într-o zi anume, cu detalii de tip cine, unde și când</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie memoria episodică.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t7g",
      title: "Ponturi pentru optimizarea memoriei",
      questions: [
        {
          text: "Selectează enunțurile care descriu corect factori ce facilitează memorarea. Ține cont că <span class='tip'><strong>unitățile informaționale cu sens</strong><span class='tooltip-box'><strong>Spus simplu:</strong> informații organizate logic sau legate de cunoștințe anterioare.</span></span>, <span class='tip'><strong>concretul</strong><span class='tooltip-box'><strong>Spus simplu:</strong> exemple, imagini și situații ușor de imaginat.</span></span>, <span class='tip'><strong>repetiția</strong><span class='tooltip-box'><strong>Spus simplu:</strong> reluarea materialului în timp.</span></span> și <span class='tip'><strong>semnificația</strong><span class='tooltip-box'><strong>Spus simplu:</strong> legătura cu interesele, nevoile și scopurile persoanei.</span></span> influențează retenția.",
          multiple: true,
          options: [
            "<span class='tip'><strong>Informația cu sens se reține mai bine decât materialul lipsit de sens</strong><span class='tooltip-box'><strong>Corect:</strong> organizarea și sensul cresc stabilitatea urmelor mnezice.</span></span>",
            "<span class='tip'><strong>Concretul se fixează, de regulă, mai ușor decât formulările foarte abstracte</strong><span class='tooltip-box'><strong>Corect:</strong> concretul oferă indicii mai ușor de reactualizat (imagini, exemple).</span></span>",
            "<span class='tip'><strong>Repetiția în timp consolidează păstrarea și regăsirea informației</strong><span class='tooltip-box'><strong>Corect:</strong> repetarea susține consolidarea și accesul ulterior.</span></span>",
            "<span class='tip'><strong>Semnificația personală accelerează memorarea și face reactualizarea mai sigură</strong><span class='tooltip-box'><strong>Corect:</strong> ce contează pentru tine este selectat mai ușor și se consolidează mai bine.</span></span>",
            "<span class='tip'><strong>Materialul fără sens, nerepetat, se reține cel mai bine</strong><span class='tooltip-box'><strong>Distractor:</strong> lipsa sensului și lipsa repetării reduc puternic retenția.</span></span>",
          ],
          answer: [0, 1, 2, 3],
        },

        {
          text: "<span class='tip'><strong>Intenționalitatea memorării</strong><span class='tooltip-box'><strong>Spus simplu:</strong> decizia conștientă de a învăța un material.</span></span> este eficientă doar dacă este asociată cu o <span class='tip'><strong>prelucrare de profunzime.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> procesarea materialului la nivel de semnificație, prin înțelegere, organizare și legare de cunoștințe anterioare.</span></span> Ce afirmație este corectă?",
          options: [
            "<span class='tip'><strong>A memora intenționat este eficient doar dacă înțelegem și procesăm în profunzime materialul, nu doar îl repetăm mecanic</strong><span class='tooltip-box'><strong>Corect:</strong> intenția fără înțelegere/organizare nu produce aceeași stabilitate a reținerii.</span></span>",
            "<span class='tip'><strong>A memora intenționat este eficient chiar dacă repetăm mecanic materialul, fără înțelegere, organizare sau legare de cunoștințe</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de prelucrare de profunzime ca condiție de eficiență.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Adâncimea procesării <span class='tip'><strong>crește precizia memorării și actualizării.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cu cât prelucrezi mai profund (semantic, legat de alte cunoștințe), cu atât reactivezi mai exact informația.</span></span> În plus, <span class='tip'><strong>motivația</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nivelul de interes și implicare în sarcina de memorare.</span></span> trebuie să se situeze într-un <span class='tip'><strong>optimum motivațional.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nici prea scăzută (indiferență), nici excesiv de ridicată (anxietate paralizantă).</span></span> Ce afirmație este corectă?",
          options: [
            "<span class='tip'><strong>O prelucrare mai profundă a informației și o motivație moderată favorizează memorarea și reactualizarea mai precisă</strong><span class='tooltip-box'><strong>Corect:</strong> profunzimea crește calitatea urmei mnezice, iar motivația moderată susține performanța fără blocaj.</span></span>",
            "<span class='tip'><strong>O prelucrare superficială a informației și o motivație extremă favorizează memorarea și reactualizarea mai precisă</strong><span class='tooltip-box'><strong>Distractor:</strong> superficialul scade precizia, iar extremele motivaționale pot reduce performanța.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    // Curs 8 – GÂNDIREA
    {
      id: "fph-t8a",
      title: "Definirea gândirii",
      questions: [
        {
          text: "Gândirea este un <span class='tip'><strong>proces psihic superior</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un proces mental complex care construiește sensuri și depășește percepția directă.</span></span> de <span class='tip'><strong>prelucrare informațională</strong><span class='tooltip-box'><strong>Spus simplu:</strong> transformarea informației prin selecție, organizare, comparare și restructurare.</span></span>, prin care sunt extrase <span class='tip'><strong>proprietăți esențiale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trăsături definitorii care rămân stabile.</span></span>, sunt organizate <span class='tip'><strong>clase de obiecte</strong><span class='tooltip-box'><strong>Spus simplu:</strong> grupări conceptuale (categorii).</span></span> și sunt construite <span class='tip'><strong>relații categoriale.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> legături logice între concepte (cauză–efect, parte–întreg, condiție–rezultat).</span></span> Care afirmație exprimă corect această idee?",
          options: [
            "<span class='tip'><strong>Gândirea extrage esențialul, clasifică obiectele și construiește relații conceptuale</strong><span class='tooltip-box'><strong>Corect:</strong> surprinde triada esențial → clasificare → relaționare.</span></span>",
            "<span class='tip'><strong>Gândirea copiază esențialul, clasifică obiectele și construiește relații conceptuale</strong><span class='tooltip-box'><strong>Distractor:</strong> „copiază” sugerează reproducere pasivă, nu prelucrare conceptuală.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Gândirea funcționează <span class='tip'><strong>prin mediere verbală</strong><span class='tooltip-box'><strong>Spus simplu:</strong> limbajul ajută formularea și manipularea conceptelor, judecăților și raționamentelor.</span></span> și apare în <span class='tip'><strong>interacțiunea persoană–mediu.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se activează în situații reale, probleme și sarcini care cer soluții.</span></span> Ce formulare este corectă?",
          options: [
            "<span class='tip'><strong>Gândirea se realizează prin limbaj și se activează în interacțiunea individului cu mediul</strong><span class='tooltip-box'><strong>Corect:</strong> leagă gândirea de limbaj și de situații concrete.</span></span>",
            "<span class='tip'><strong>Gândirea se realizează prin limbaj și îngheață în interacțiunea individului cu mediul</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea că gândirea se activează în sarcini reale.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t8b",
      title: "Operațiile fundamentale ale gândirii: analiza și sinteza",
      questions: [
        {
          text: "Analiza este o <span class='tip'><strong>operație fundamentală</strong><span class='tooltip-box'><strong>Spus simplu:</strong> una dintre bazele transformărilor cognitive.</span></span> prin care o unitate este <span class='tip'><strong>descompusă mental</strong><span class='tooltip-box'><strong>Spus simplu:</strong> observi părțile unui obiect, fenomen sau concept.</span></span> pentru a identifica structura și relațiile interne. Care variantă este corectă?",
          options: [
            "<span class='tip'><strong>Analiza presupune descompunerea mentală a unui obiect în părți, ca să îi înțelegi structura</strong><span class='tooltip-box'><strong>Corect:</strong> separi mental părțile pentru a vedea cum e organizat întregul.</span></span>",
            "<span class='tip'><strong>Analiza presupune recompunerea mentală a unui obiect în părți, ca să îi înțelegi structura</strong><span class='tooltip-box'><strong>Distractor:</strong> „recompunerea” descrie mai bine sinteza, nu analiza.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Sinteza este operația prin care sunt <span class='tip'><strong>reunite sau reorganizate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> combini părțile într-o structură nouă.</span></span> elemente pentru a obține o nouă schemă sau unitate cognitivă. Care enunț este corect?",
          options: [
            "<span class='tip'><strong>Sinteza reunește elementele analizate într-o structură nouă și coerentă</strong><span class='tooltip-box'><strong>Corect:</strong> părțile sunt reunite într-un întreg cu sens.</span></span>",
            "<span class='tip'><strong>Sinteza respinge elementele analizate într-o structură nouă și coerentă</strong><span class='tooltip-box'><strong>Distractor:</strong> „respinge” contrazice ideea de reunire/reorganizare.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "De ce sunt <span class='tip'><strong>analiza și sinteza</strong><span class='tooltip-box'><strong>Spus simplu:</strong> operații fundamentale din care derivă celelalte.</span></span> considerate baza întregului ansamblu al operațiilor gândirii?",
          options: [
            "<span class='tip'><strong>Pentru că operațiile derivate se construiesc pe analiza trăsăturilor și sinteza relațiilor dintre ele</strong><span class='tooltip-box'><strong>Corect:</strong> comparația, abstractizarea și generalizarea se sprijină pe aceste două baze.</span></span>",
            "<span class='tip'><strong>Pentru că operațiile reflexe se construiesc pe analiza trăsăturilor și sinteza relațiilor dintre ele</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexele nu sunt operații ale gândirii și nu explică ansamblul operațiilor cognitive.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t8c",
      title: "Operațiile derivate ale gândirii",
      questions: [
        {
          text: "Comparația presupune stabilirea <span class='tip'><strong>asemănărilor și deosebirilor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> identifici ce e comun și ce diferă între două sau mai multe unități.</span></span> pe baza unui criteriu. Ce variantă este corectă?",
          options: [
            "<span class='tip'><strong>Comparația evidențiază asemănări și diferențe între unități, pe baza unui criteriu</strong><span class='tooltip-box'><strong>Corect:</strong> criteriul ghidează ce anume compari.</span></span>",
            "<span class='tip'><strong>Comparația evidențiază asemănări și diferențe între unități, pe baza unui capriciu</strong><span class='tooltip-box'><strong>Distractor:</strong> fără criteriu, comparația nu mai este o operație controlată și relevantă.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Abstractizarea este o <span class='tip'><strong>formă superioară de analiză</strong><span class='tooltip-box'><strong>Spus simplu:</strong> selectează trăsături esențiale comune unei clase.</span></span>, prin care sunt extrase <span class='tip'><strong>proprietăți caracteristice.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trăsături definitorii, stabile, necesare.</span></span> Care enunț este corect?",
          options: [
            "<span class='tip'><strong>Abstractizarea selectează esențialul unei clase și ignoră detaliile nerelevante</strong><span class='tooltip-box'><strong>Corect:</strong> rămâne ceea ce definește clasa, nu particularitățile accidentale.</span></span>",
            "<span class='tip'><strong>Abstractizarea selectează esențialul unei clase și include detaliile nerelevante</strong><span class='tooltip-box'><strong>Distractor:</strong> includerea detaliilor nerelevante contrazice ideea de abstractizare.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Generalizarea este operația prin care se trece de la <span class='tip'><strong>individual la general</strong><span class='tooltip-box'><strong>Spus simplu:</strong> extinzi trăsături esențiale la o clasă întreagă.</span></span>, prin construirea unui <span class='tip'><strong>model reprezentativ.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un prototip conceptual al clasei.</span></span> Ce afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Generalizarea reunește trăsături abstractizate într-un model reprezentativ al unei clase</strong><span class='tooltip-box'><strong>Corect:</strong> modelul rezumă ce au în comun exemplarele clasei.</span></span>",
            "<span class='tip'><strong>Generalizarea respinge trăsături abstractizate într-un model reprezentativ al unei clase</strong><span class='tooltip-box'><strong>Distractor:</strong> respingerea trăsăturilor esențiale ar face imposibil modelul general.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Concretizarea este operația prin care se trece de la <span class='tip'><strong>abstract la concret.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> explici un concept general printr-un caz particular.</span></span> Ce variantă este corectă?",
          options: [
            "<span class='tip'><strong>Concretizarea explică un concept general printr-un exemplu concret</strong><span class='tooltip-box'><strong>Corect:</strong> arăți conceptul „în acțiune” într-un caz.</span></span>",
            "<span class='tip'><strong>Concretizarea explică un concept general printr-un exemplu general</strong><span class='tooltip-box'><strong>Distractor:</strong> „general” nu este exemplu particular, deci nu concretizează.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Particularizarea presupune trecerea de la <span class='tip'><strong>general la particular.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> aplici o categorie generală la un caz care îndeplinește criteriile ei.</span></span> Ce enunț este corect?",
          options: [
            "<span class='tip'><strong>Particularizarea aplică o categorie generală unui caz individual</strong><span class='tooltip-box'><strong>Corect:</strong> arăți un exemplu care aparține categoriei.</span></span>",
            "<span class='tip'><strong>Particularizarea aplică o categorie generală unui caz nepotrivit</strong><span class='tooltip-box'><strong>Distractor:</strong> un caz nepotrivit nu îndeplinește criteriile categoriei, deci nu e particularizare corectă.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t8d",
      title: "Produsele gândirii – Introducere",
      questions: [
        {
          text: "Produsele gândirii sunt <span class='tip'><strong>rezultatele prelucrării conceptuale.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> forme mentale stabilizate, precum concepte, judecăți și raționamente.<br /><br /><strong>Exemplu:</strong> folosești conceptul de „mamifer” ca să înțelegi mai repede ce au în comun câinele și pisica.</span></span> De ce sunt importante?",
          options: [
            "<span class='tip'><strong>Pentru că sprijină reprezentarea abstractă, formularea regulilor și rezolvarea rațională a problemelor în situații variate</strong><span class='tooltip-box'><strong>Corect:</strong> produsele gândirii organizează cunoașterea și o fac utilizabilă în învățare și decizie.</span></span>",
            "<span class='tip'><strong>Pentru că sprijină înlocuirea completă a percepției, eliminarea memoriei și rezolvarea automată a problemelor fără analiză</strong><span class='tooltip-box'><strong>Distractor:</strong> gândirea nu anulează percepția și memoria și nu produce soluții fără analiză sau fără prelucrare.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Produsele gândirii se află în relație strânsă cu <span class='tip'><strong>operațiile gândirii.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> procedeele prin care se formează conceptele, judecățile și raționamentele (analiza, sinteza, abstractizarea etc.).<br /><br /><strong>Exemplu:</strong> prin analiză separi trăsături, iar prin generalizare construiești un concept.</span></span> Care formulare este corectă?",
          options: [
            "<span class='tip'><strong>Operațiile sunt mecanismele prin care se formează produsele gândirii, iar produsele sunt rezultatele stabilizate ale acestor operații</strong><span class='tooltip-box'><strong>Corect:</strong> operațiile explică „cum se produce”, iar produsele arată „ce se obține”.</span></span>",
            "<span class='tip'><strong>Operațiile sunt rezultatele stabilizate ale gândirii, iar produsele sunt mecanismele prin care aceste rezultate se formează</strong><span class='tooltip-box'><strong>Distractor:</strong> inversare: operațiile sunt procedee, produsele sunt rezultate.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t8e",
      title: "Conceptele",
      questions: [
        {
          text: "Conceptele sunt <span class='tip'><strong>unități de bază ale gândirii</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cele mai simple forme logice prin care este reprezentată esența unei clase de obiecte.<br /><br /><strong>Exemplu:</strong> conceptul de „fruct” îți permite să înțelegi ce au în comun mărul și para.</span></span>, având rol de <span class='tip'><strong>produs și instrument.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunt și rezultat al gândirii, și „unealta” cu care gândirea operează.<br /><br /><strong>Exemplu:</strong> după ce înveți „mamifer”, îl folosești ca să clasifici animale noi.</span></span> Ce afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Conceptele sunt unități de bază ale gândirii, fiind în același timp produsul gândirii și instrumentul prin care aceasta operează</strong><span class='tooltip-box'><strong>Corect:</strong> conceptul este și rezultat, și mijloc de organizare a cunoașterii.</span></span>",
            "<span class='tip'><strong>Conceptele sunt unități de bază ale gândirii, fiind în același timp produsul memoriei și instrumentul prin care aceasta operează</strong><span class='tooltip-box'><strong>Distractor:</strong> memoria susține stocarea, dar aici vorbim de funcția conceptuală specifică gândirii.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Conceptele sunt <span class='tip'><strong>condensări selective de informație.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> rețin trăsăturile esențiale și generale și elimină detaliile neimportante.<br /><br /><strong>Exemplu:</strong> la „triunghi” contează trei laturi, nu culoarea creionului cu care e desenat.</span></span> Ce variantă exprimă corect această idee?",
          options: [
            "<span class='tip'><strong>Conceptele păstrează esențialul despre o clasă de obiecte și lasă deoparte detaliile accidentale, care nu definesc clasa</strong><span class='tooltip-box'><strong>Corect:</strong> selecția trăsăturilor definitorii face conceptul utilizabil și stabil.</span></span>",
            "<span class='tip'><strong>Conceptele păstrează toate detaliile despre o clasă de obiecte și lasă deoparte trăsăturile definitorii, care nu ajută deloc</strong><span class='tooltip-box'><strong>Distractor:</strong> inversare: fără trăsături definitorii nu mai ai concept, ci o listă de detalii.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Conceptele sunt <span class='tip'><strong>integratori categoriali.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> organizează obiectele în clase pe baza trăsăturilor comune.<br /><br /><strong>Exemplu:</strong> „instrument muzical” grupează pianul, vioara și chitara.</span></span> Ce enunț este corect?",
          options: [
            "<span class='tip'><strong>Conceptele grupează obiectele în categorii prin identificarea trăsăturilor comune și definitorii, care justifică apartenența la clasă</strong><span class='tooltip-box'><strong>Corect:</strong> categoria se bazează pe criterii conceptuale, nu pe asemănări întâmplătoare.</span></span>",
            "<span class='tip'><strong>Conceptele grupează obiectele în categorii prin adunarea tuturor exemplelor posibile, fără criterii comune sau trăsături definitorii</strong><span class='tooltip-box'><strong>Distractor:</strong> fără criterii definitorii nu există integrare categorială, ci doar enumerare.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Conceptele au un <span class='tip'><strong>conținut general și esențial</strong><span class='tooltip-box'><strong>Spus simplu:</strong> includ trăsături acceptate și stabilizate cultural și social.<br /><br /><strong>Exemplu:</strong> ce înseamnă „democrație” se învață în educație și cultură, nu doar din percepții.</span></span>, fiind condiționate <span class='tip'><strong>sociocultural.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se formează prin limbaj, educație și experiență socială.<br /><br /><strong>Exemplu:</strong> noțiunile științifice se rafinează prin școală și comunitatea academică.</span></span> Care enunț este corect?",
          options: [
            "<span class='tip'><strong>Conceptele sunt determinate sociocultural, având un conținut general și esențial care se formează prin limbaj, educație și învățare</strong><span class='tooltip-box'><strong>Corect:</strong> componenta culturală stabilizează și nuanțează conținutul conceptual.</span></span>",
            "<span class='tip'><strong>Conceptele sunt independente sociocultural, având un conținut general și esențial care se formează fără limbaj, educație și învățare</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice rolul mediului social și al limbajului în formarea conceptelor.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t8f",
      title: "Judecățile",
      questions: [
        {
          text: "Judecățile sunt <span class='tip'><strong>forme logice fundamentale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> structuri ale gândirii care afirmă sau neagă o relație între concepte.<br /><br /><strong>Exemplu:</strong> „Toți elevii sunt persoane” afirmă o relație între două concepte.</span></span> care stabilesc <span class='tip'><strong>raporturi</strong><span class='tooltip-box'><strong>Spus simplu:</strong> legături conceptuale despre ce este un obiect sau ce proprietăți are.</span></span> între obiecte sau între un obiect și o proprietate. Care variantă este corectă?",
          options: [
            "<span class='tip'><strong>Judecățile stabilesc raporturi între concepte, afirmând sau negând ceva despre ele, într-o formă logică exprimabilă</strong><span class='tooltip-box'><strong>Corect:</strong> judecata are structură de tip „S este P” sau „S nu este P”.</span></span>",
            "<span class='tip'><strong>Judecățile stabilesc raporturi între reflexe, afirmând sau negând ceva despre ele, într-o formă logică exprimabilă</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexele țin de reacții automate; judecata este relație conceptuală în gândire.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Judecățile pot fi <span class='tip'><strong>atributive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> descriu cum este obiectul, de tipul „floarea este roșie”.</span></span> sau <span class='tip'><strong>predicative.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> descriu ce face obiectul, de tipul „copilul aleargă”.</span></span> Ce enunț este corect?",
          options: [
            "<span class='tip'><strong>Judecata atributivă descrie o proprietate, iar judecata predicativă descrie o acțiune, menținând structura logică a enunțului</strong><span class='tooltip-box'><strong>Corect:</strong> atributiv = „cum este”, predicativ = „ce face”.</span></span>",
            "<span class='tip'><strong>Judecata atributivă descrie o acțiune, iar judecata predicativă descrie o proprietate, menținând structura logică a enunțului</strong><span class='tooltip-box'><strong>Distractor:</strong> inversare: atributiv nu este despre acțiune, iar predicativ nu este despre proprietate.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t8g",
      title: "Raționamentele",
      questions: [
        {
          text: "Raționamentele sunt <span class='tip'><strong>forme logice fundamentale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> structuri cognitive care leagă mai multe judecăți pentru a produce o concluzie.</span></span>, constând într-o <span class='tip'><strong>înlanțuire de judecăți.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> premise succesive care duc la o concluzie.</span></span> Care afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Raționamentul leagă judecăți în succesiune și produce o concluzie care rezultă logic din premise, nu din impresii întâmplătoare</strong><span class='tooltip-box'><strong>Corect:</strong> esențial este pasul de la premise la concluzie.</span></span>",
            "<span class='tip'><strong>Raționamentul adună judecăți în succesiune și produce o concluzie care rezultă intuitiv din impresii, nu din premise logice</strong><span class='tooltip-box'><strong>Distractor:</strong> raționamentul, ca formă logică, se sprijină pe premise și inferență, nu pe impresii întâmplătoare.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Un raționament are următoarele componente <span class='tip'><strong>premise</strong><span class='tooltip-box'><strong>Spus simplu:</strong> judecățile de plecare.</span></span>, <span class='tip'><strong>inferență</strong><span class='tooltip-box'><strong>Spus simplu:</strong> operația mentală prin care se derivă concluzia din premise.</span></span> și <span class='tip'><strong>concluzie.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> judecata finală obținută prin inferență.</span></span> Ce enunț este corect?",
          options: [
            "<span class='tip'><strong>Premisele sunt punctul de plecare, inferența este derivarea concluziei din premise, iar concluzia este rezultatul final al înlănțuirii</strong><span class='tooltip-box'><strong>Corect:</strong> ordinea este premise → inferență → concluzie.</span></span>",
            "<span class='tip'><strong>Premisele sunt punctul de plecare, inferența este memorarea concluziei fără legătură cu premisele, iar concluzia este rezultatul întâmplător</strong><span class='tooltip-box'><strong>Distractor:</strong> inferența nu este memorare, ci legătură logică între premise și concluzie.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Raționamentele pot fi de tip <span class='tip'><strong>deductiv</strong><span class='tooltip-box'><strong>Spus simplu:</strong> de la general la particular.</span></span>, <span class='tip'><strong>ipotetico-deductiv</strong><span class='tooltip-box'><strong>Spus simplu:</strong> structură condițională de tip „dacă..., atunci...”.</span></span> sau <span class='tip'><strong>inductiv.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> de la particular la general.</span></span> Selectează afirmațiile corecte:",
          multiple: true,
          options: [
            "<span class='tip'><strong>Un raționament deductiv pornește de la o regulă generală și o aplică unui caz particular, obținând o concluzie pentru acel caz</strong><span class='tooltip-box'><strong>Corect:</strong> general → particular, cu reguli deja stabilite.</span></span>",
            "<span class='tip'><strong>Un raționament inductiv pornește de la exemple particulare și formulează o regulă generală probabilă, care rezumă regularitățile observate</strong><span class='tooltip-box'><strong>Corect:</strong> particular → general, prin extragerea unei reguli din cazuri.</span></span>",
            "<span class='tip'><strong>Un raționament ipotetico-deductiv lucrează cu ipoteze de tip „dacă..., atunci...”, testând consecințe și verificând compatibilitatea lor</strong><span class='tooltip-box'><strong>Corect:</strong> ipoteză → consecințe → verificare.</span></span>",
            "<span class='tip'><strong>Un raționament inductiv funcționează corect doar dacă există o singură observație particulară, fără comparații și fără serii de exemple</strong><span class='tooltip-box'><strong>Distractor:</strong> inducția are nevoie de mai multe exemple pentru a susține o regulă generală.</span></span>",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    {
      id: "fph-t8h",
      title: "Activitățile gândirii – Introducere",
      questions: [
        {
          text: "Activitățile gândirii sunt <span class='tip'><strong>moduri de utilizare aplicată a operațiilor.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> gândirea pusă în acțiune pentru sarcini reale, precum învățare, planificare și rezolvare de probleme.<br /><br /><strong>Exemplu:</strong> folosești comparația și generalizarea ca să înțelegi un capitol nou.</span></span> Ce afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Activitățile gândirii sunt forme aplicate ale operațiilor mentale, folosite pentru a rezolva sarcini concrete și situații reale</strong><span class='tooltip-box'><strong>Corect:</strong> sunt „gândirea în lucru”, nu doar definiții teoretice.</span></span>",
            "<span class='tip'><strong>Activitățile gândirii sunt forme pasive ale operațiilor mentale, folosite pentru a repeta senzații simple și situații întâmplătoare</strong><span class='tooltip-box'><strong>Distractor:</strong> activitățile gândirii implică aplicare, scop și organizare, nu repetiție de senzații.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "De ce sunt importante activitățile gândirii?",
          options: [
            "<span class='tip'><strong>Pentru că arată cum funcționează efectiv gândirea în învățare, înțelegere și rezolvarea sarcinilor, nu doar în definiții</strong><span class='tooltip-box'><strong>Corect:</strong> evidențiază utilizarea practică a operațiilor și produselor gândirii.</span></span>",
            "<span class='tip'><strong>Pentru că arată cum funcționează efectiv gândirea în somn, în reflexe și în reacții automate, nu în sarcini reale</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexele și automatismul nu definesc activitățile gândirii ca utilizare aplicată.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t8i",
      title: "Conceptualizarea",
      questions: [
        {
          text: "Selectează exemplele corecte ale <span class='tip'><strong>relațiilor necesare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> legături logice stabile între concepte (subordonare, coordonare, supraordonare) determinate de trăsături esențiale.</span></span> dintre concepte <span class='tip'><strong>subordonare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un concept particular este inclus într-unul general.</span></span>, <span class='tip'><strong>coordonare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> două concepte sunt la același nivel de generalitate.</span></span> și <span class='tip'><strong>supraordonare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un concept general include concepte particulare.</span></span> Selectează variantele corecte:",
          multiple: true,
          options: [
            "<span class='tip'><strong>Câine → mamifer, ca subordonare</strong><span class='tooltip-box'><strong>Corect:</strong> câinele este un caz particular inclus în categoria generală mamifer.</span></span>",
            "<span class='tip'><strong>Câine ↔ pisică, ca coordonare</strong><span class='tooltip-box'><strong>Corect:</strong> sunt la același nivel (ambele pot fi subordonate conceptului „mamifer”).</span></span>",
            "<span class='tip'><strong>Mamifer → câine, ca supraordonare</strong><span class='tooltip-box'><strong>Corect:</strong> „mamifer” include conceptul particular „câine”.</span></span>",
            "<span class='tip'><strong>Fruct → măr, ca subordonare</strong><span class='tooltip-box'><strong>Distractor:</strong> relația e invers: „măr” este subordonat lui „fruct”, nu „fruct” lui „măr”.</span></span>",
          ],
          answer: [0, 1, 2],
        },
        {
          text: "Conceptualizarea presupune organizarea conceptelor în structuri ierarhice, precum <span class='tip'><strong>piramida conceptelor (Vîgotski).</strong><span class='tooltip-box'><strong>Spus simplu:</strong> conceptele se leagă prin subordonare, coordonare și supraordonare, nu stau izolat.<br /><br /><strong>Exemplu:</strong> „animal” include „mamifer”, care include „câine”.</span></span> Ce enunț este corect?",
          options: [
            "<span class='tip'><strong>Conceptualizarea organizează conceptele ierarhic, prin relații necesare între ele, care rezultă din trăsături esențiale și definiții</strong><span class='tooltip-box'><strong>Corect:</strong> relațiile nu sunt aleatorii, ci logice și stabile.</span></span>",
            "<span class='tip'><strong>Conceptualizarea organizează conceptele aleator, prin relații întâmplătoare între ele, care nu depind de trăsături esențiale sau definiții</strong><span class='tooltip-box'><strong>Distractor:</strong> fără trăsături esențiale nu ai ierarhie conceptuală, ci asociere liberă.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Formarea conceptelor are loc în <span class='tip'><strong>procesul învățării</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se bazează pe experiență, limbaj, cultură și educație.</span></span>, având o puternică <span class='tip'><strong>determinare socioculturală.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cultura și limbajul modelează felul în care formăm și folosim conceptele.</span></span> Care afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Conceptualizarea se formează prin învățare și este influențată sociocultural, deoarece limbajul și educația structurează conținutul conceptelor</strong><span class='tooltip-box'><strong>Corect:</strong> conceptele se rafinează prin experiență ghidată și comunitate.</span></span>",
            "<span class='tip'><strong>Conceptualizarea se formează fără învățare și nu este influențată sociocultural, deoarece limbajul și educația nu contează deloc</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice rolul învățării și al medierii culturale în formarea conceptelor.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "În formele sale superioare, conceptualizarea presupune <span class='tip'><strong>rafinarea cunoașterii.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trecerea de la înțelegere empirică la înțelegere științifică, prin abstractizare și sistematizare.<br /><br /><strong>Exemplu:</strong> nu doar „am văzut că se întâmplă”, ci „știu regula și condițiile”.</span></span> Care enunț este corect?",
          options: [
            "<span class='tip'><strong>Conceptualizarea avansată trece de la empiric la științific, adică de la observații la explicarea prin concepte, reguli și relații sistematizate</strong><span class='tooltip-box'><strong>Corect:</strong> rafinarea înseamnă organizare și precizie conceptuală mai mare.</span></span>",
            "<span class='tip'><strong>Conceptualizarea avansată trece de la științific la empiric, adică de la reguli la observații, fără concepte și fără relații sistematizate</strong><span class='tooltip-box'><strong>Distractor:</strong> inversare: forma superioară crește abstractizarea și sistematizarea, nu le elimină.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t8j",
      title: "Înțelegerea",
      questions: [
        {
          text: "Înțelegerea este <span class='tip'><strong>latura funcțională permanentă a gândirii.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se activează când integrezi informații noi în ceea ce știi deja.<br /><br /><strong>Exemplu:</strong> legi o idee nouă de un concept învățat anterior.</span></span> Ce afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Înțelegerea înseamnă raportarea informațiilor noi la cunoștințele existente, pentru a le integra coerent și a le da sens</strong><span class='tooltip-box'><strong>Corect:</strong> fără legarea de ceea ce știi, rămâi la repetare mecanică.</span></span>",
            "<span class='tip'><strong>Înțelegerea înseamnă păstrarea informațiilor noi fără legătură cu cunoștințele existente, pentru a le repeta exact și fără sens</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai degrabă memorare mecanică, nu înțelegere.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Înțelegerea poate urmări diverse scopuri <span class='tip'><strong>identificarea unui obiect</strong><span class='tooltip-box'><strong>Exemplu:</strong> recunoști o specie după caracteristici.</span></span>, <span class='tip'><strong>descoperirea principiului de funcționare</strong><span class='tooltip-box'><strong>Exemplu:</strong> cum funcționează un mecanism.</span></span>, <span class='tip'><strong>surprinderea relațiilor dintre fenomene.</strong><span class='tooltip-box'><strong>Exemplu:</strong> relația cauză–efect.</span></span> Care afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Înțelegerea poate viza identificarea, explicarea funcționării sau stabilirea relațiilor, în funcție de sarcina și de întrebarea urmărită</strong><span class='tooltip-box'><strong>Corect:</strong> scopul schimbă ce tip de prelucrare faci.</span></span>",
            "<span class='tip'><strong>Înțelegerea poate viza doar memorarea mecanică, fără identificare, fără explicarea funcționării și fără stabilirea relațiilor dintre fenomene</strong><span class='tooltip-box'><strong>Distractor:</strong> reduce înțelegerea la memorare, ceea ce contrazice funcția ei.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Înțelegerea poate fi <span class='tip'><strong>simplă și spontană</strong><span class='tooltip-box'><strong>Spus simplu:</strong> apare imediat, fără analiză aprofundată.</span></span> sau <span class='tip'><strong>discursivă.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se construiește prin explorare, analiză și raționament.</span></span> Care variantă este corectă?",
          options: [
            "<span class='tip'><strong>Înțelegerea spontană apare rapid, iar înțelegerea discursivă se construiește treptat prin analiză, verificare și legare logică</strong><span class='tooltip-box'><strong>Corect:</strong> diferența este nivelul de efort și de pași cognitivi.</span></span>",
            "<span class='tip'><strong>Înțelegerea spontană apare treptat prin analiză, iar înțelegerea discursivă se produce rapid, fără verificare și fără legare logică</strong><span class='tooltip-box'><strong>Distractor:</strong> inversare: discursivă presupune tocmai pași și construcție treptată.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Înțelegerea duce la <span class='tip'><strong>restructurarea schemelor cognitive.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> modifici și actualizezi cunoștințele vechi ca să încapă informația nouă.<br /><br /><strong>Exemplu:</strong> îți corectezi o concepție greșită după ce înțelegi explicația corectă.</span></span> Ce enunț este corect?",
          options: [
            "<span class='tip'><strong>Înțelegerea reorganizează și îmbunătățește structurile cognitive existente, pentru a integra informația nouă într-un mod coerent</strong><span class='tooltip-box'><strong>Corect:</strong> înțelegerea schimbă schema, nu doar adaugă „bucăți” izolate.</span></span>",
            "<span class='tip'><strong>Înțelegerea păstrează neschimbate structurile cognitive existente, pentru a integra informația nouă într-un mod incoerent și fragmentat</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de restructurare și de integrare coerentă.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t8k",
      title: "Strategii de operare intelectuală",
      questions: [
        {
          text: "<span class='tip'><strong>Algoritmica</strong><span class='tooltip-box'><strong>Spus simplu:</strong> strategie standardizată, cu pași fixați, aplicabilă repetitiv.<br /><br /><strong>Exemplu:</strong> o metodă clară de rezolvare a unui tip de ecuație.</span></span> este o structură organizată din operații succesive stabilite prin reguli precise. Ce afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Algoritmica înseamnă aplicarea unei succesiuni fixe de pași, definiți prin reguli, pentru a ajunge sigur la o soluție</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe pași stabiliți și repetabilitate.</span></span>",
            "<span class='tip'><strong>Algoritmica înseamnă aplicarea unei succesiuni libere de pași, fără reguli, pentru a ajunge întâmplător la o soluție</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie explorare fără reguli, nu algoritm.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "<span class='tip'><strong>Euristica</strong><span class='tooltip-box'><strong>Spus simplu:</strong> strategie flexibilă de explorare a posibilităților, asociată cu descoperire și creativitate.<br /><br /><strong>Exemplu:</strong> încerci mai multe idei ca să găsești o soluție originală.</span></span> este opusă algoritmicii. Care enunț este corect?",
          options: [
            "<span class='tip'><strong>Euristica explorează flexibil soluții posibile și folosește încercări, ipoteze și ajustări, crescând șansa de descoperire creativă</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe explorare și adaptare, nu pe pași fixați.</span></span>",
            "<span class='tip'><strong>Euristica explorează rigid soluții posibile și folosește pași fixați, fără încercări, ipoteze și ajustări, eliminând creativitatea</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie un algoritm rigid, nu euristică.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t8l",
      title: "Gândire convergentă vs. Gândire divergentă",
      questions: [
        {
          text: "Gândirea convergentă presupune <span class='tip'><strong>căutarea unei soluții corecte</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se bazează pe logică, reguli, analiză și structură.</span></span>, în timp ce gândirea divergentă generează <span class='tip'><strong>multiple soluții posibile.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se bazează pe flexibilitate, imaginație și creativitate.</span></span> Care afirmație este corectă?",
          options: [
            "<span class='tip'><strong>Gândirea convergentă caută o soluție optimă unică, iar gândirea divergentă produce mai multe alternative posibile, explorate în paralel</strong><span class='tooltip-box'><strong>Corect:</strong> convergent = restrânge, divergent = deschide posibilități.</span></span>",
            "<span class='tip'><strong>Gândirea convergentă produce mai multe alternative posibile, iar gândirea divergentă caută o soluție optimă unică, explorată în paralel</strong><span class='tooltip-box'><strong>Distractor:</strong> inversare: convergent restrânge, divergent diversifică.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care situație ilustrează <span class='tip'><strong>gândirea convergentă?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> alegi răspunsul corect dintre variante, pe baza regulilor și a verificării.</span></span>",
          options: [
            "<span class='tip'><strong>Rezolvi un exercițiu cu răspuns unic corect, aplicând o regulă și verificând dacă rezultatul respectă condițiile problemei</strong><span class='tooltip-box'><strong>Corect:</strong> urmărești o singură soluție validă.</span></span>",
            "<span class='tip'><strong>Generezi cât mai multe utilizări posibile pentru un obiect obișnuit, fără să urmărești o singură soluție și fără să închizi opțiunile</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie gândirea divergentă, nu convergentă.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care situație ilustrează <span class='tip'><strong>gândirea divergentă?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> produci mai multe idei și alternative, înainte să alegi una.</span></span>",
          options: [
            "<span class='tip'><strong>Inventezi mai multe moduri de folosire a unui obiect obișnuit, căutând idei diferite și originale, fără să te oprești la prima soluție</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe varietate și originalitate.</span></span>",
            "<span class='tip'><strong>Aplici o regulă fixă pentru a obține un singur rezultat corect, urmând pași stabiliți și oprindu-te când ai soluția verificată</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie gândirea convergentă, nu divergentă.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    // Curs 9 – MOTIVAȚIA

    // QUIZ 1 – Definirea motivației
    {
      id: "fph-t9a",
      title: "Definirea motivației",
      questions: [
        {
          text: "Motivația este definită ca un <span class='tip'><strong>ansamblu de stări de necesitate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nevoi interne (fiziologice sau psihologice) care solicită organismul și creează impulsul spre acțiune.<br /><br /><strong>Exemplu:</strong> foamea te împinge să cauți mâncare; nevoia de reușită te împinge să înveți.</span></span> cu <span class='tip'><strong>proprietatea de activare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pune organismul „în mișcare” printr-o tensiune internă.<br /><br /><strong>Exemplu:</strong> când îți e foame, devii mai mobilizat să găsești hrană.</span></span> și <span class='tip'><strong>stimulare a comportamentului.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> direcționează acțiunile către satisfacerea necesității și reducerea tensiunii.<br /><br /><strong>Exemplu:</strong> alegi acțiuni care chiar rezolvă nevoia, nu orice mișcare la întâmplare.</span></span> Care variantă exprimă corect această idee?",
          options: [
            "<span class='tip'><strong>Motivația este ansamblul de nevoi interne care activează și orientează comportamentul spre satisfacerea lor</strong><span class='tooltip-box'><strong>Corect:</strong> surprinde atât energia (activarea), cât și direcția (orientarea) conduitei către satisfacere.</span></span>",
            "<span class='tip'><strong>Motivația este ansamblul de nevoi interne care frânează și rătăcește comportamentul spre satisfacerea lor</strong><span class='tooltip-box'><strong>Distractor:</strong> motivația nu „frânează și rătăcește” conduita, ci o energizează și o direcționează către un scop.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce înseamnă că motivația <span class='tip'><strong>determină comportamente?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> conduce acțiunile către scopuri care reduc tensiunea produsă de necesitate.<br /><br /><strong>Exemplu:</strong> dacă ai nevoie de odihnă, îți organizezi seara ca să dormi suficient.</span></span>",
          options: [
            "<span class='tip'><strong>Comportamentul este orientat către satisfacerea unei nevoi</strong><span class='tooltip-box'><strong>Corect:</strong> conduita are direcție și scop, legate de nevoie.</span></span>",
            "<span class='tip'><strong>Comportamentul este orientat către neglijarea unei nevoi</strong><span class='tooltip-box'><strong>Distractor:</strong> dacă nevoia e ignorată, tensiunea nu se reduce, iar conduita nu mai este explicată motivațional.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t9b",
      title: "Funcțiile motivației",
      questions: [
        {
          text: "Funcțiile motivației exprimă <span class='tip'><strong>rolul proceselor motivaționale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cum inițiază, susțin și reglează motivația comportamentul (energie, direcție, control).<br /><br /><strong>Exemplu:</strong> aceeași sarcină poate fi făcută cu intensitate mare sau mică, în funcție de motivație.</span></span> în inițierea și menținerea comportamentelor. Care afirmație surprinde cel mai bine această idee?",
          options: [
            "<span class='tip'><strong>Funcțiile motivației descriu apariția, intensitatea și reglarea conduitei în raport cu nevoile și scopurile persoanei</strong><span class='tooltip-box'><strong>Corect:</strong> include „de ce pornești”, „cât de mult investești” și „cum îți controlezi acțiunea”.</span></span>",
            "<span class='tip'><strong>Funcțiile motivației ascund apariția, intensitatea și reglarea conduitei în raport cu nevoile și scopurile persoanei</strong><span class='tooltip-box'><strong>Distractor:</strong> funcțiile motivației explică aceste aspecte, nu le „ascund”.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează funcția care descrie <span class='tip'><strong>activarea internă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> tensiunea produsă de o necesitate internă.</span></span> și <span class='tip'><strong>semnalizarea unui dezechilibru.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> organismul detectează o lipsă (foame, sete sau nevoi psihologice).<br /><br /><strong>Exemplu:</strong> apare disconfortul care „anunță” că trebuie făcut ceva.</span></span>",
          options: [
            "<span class='tip'><strong>Funcția de activare internă și semnalizare a dezechilibrului</strong><span class='tooltip-box'><strong>Corect:</strong> indică apariția stării de necesitate și a tensiunii interne.</span></span>",
            "<span class='tip'><strong>Funcția de inhibare internă și semnalizare a dezechilibrului</strong><span class='tooltip-box'><strong>Distractor:</strong> aici criteriul este activarea, nu inhibarea; inhibarea ține mai mult de control, nu de semnalizarea nevoii.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează funcția motivațională care <span class='tip'><strong>energizează</strong><span class='tooltip-box'><strong>Spus simplu:</strong> furnizează energia necesară acțiunii.</span></span> și <span class='tip'><strong>direcționează comportamentul.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> orientează conduita către reducerea dezechilibrului.<br /><br /><strong>Exemplu:</strong> nu doar „ai energie”, ci o investești în acțiuni care duc la scop.</span></span>",
          options: [
            "<span class='tip'><strong>Funcția de energizare și direcționare</strong><span class='tooltip-box'><strong>Corect:</strong> susține intensitatea și orientarea conduitei către scop.</span></span>",
            "<span class='tip'><strong>Funcția de amortizare și direcționare</strong><span class='tooltip-box'><strong>Distractor:</strong> „amortizarea” ar reduce energia, ceea ce contrazice energizarea.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care funcție transformă comportamentul într-o conduită <span class='tip'><strong>activ selectivă?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> alegi acțiunile cele mai potrivite pentru scop, nu reacționezi la întâmplare.<br /><br /><strong>Exemplu:</strong> renunți la distrageri ca să termini o sarcină importantă.</span></span>",
          options: [
            "<span class='tip'><strong>Funcția de autoreglare a conduitei</strong><span class='tooltip-box'><strong>Corect:</strong> susține controlul, ajustarea și selecția comportamentelor potrivite scopului.</span></span>",
            "<span class='tip'><strong>Funcția de autoblocare a conduitei</strong><span class='tooltip-box'><strong>Distractor:</strong> autoreglarea nu înseamnă blocaj, ci control și ajustare adaptativă.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează <span class='tip'><strong>funcțiile fundamentale ale motivației.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> rolurile prin care motivația declanșează, orientează și controlează comportamentul.<br /><br /><strong>Exemplu:</strong> apare tensiunea, apoi energia și direcția, apoi controlul conduitei.</span></span>",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Funcția de activare internă și semnalizare a dezechilibrului</strong><span class='tooltip-box'><strong>Corect:</strong> marchează apariția stării de necesitate și a tensiunii interne.</span></span>",
            "<span class='tip'><strong>Funcția de energizare și direcționare a comportamentului</strong><span class='tooltip-box'><strong>Corect:</strong> susține efortul și orientarea conduitei către scop.</span></span>",
            "<span class='tip'><strong>Funcția de autoreglare a conduitei</strong><span class='tooltip-box'><strong>Corect:</strong> permite controlul și ajustarea comportamentului în funcție de condiții și scop.</span></span>",
            "<span class='tip'><strong>Funcția de stocare a informațiilor</strong><span class='tooltip-box'><strong>Distractor:</strong> ține de memorie; motivația nu este un „depozit” de informație, ci un sistem de energizare, orientare și control.</span></span>",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    {
      id: "fph-t9c-intro",
      title: "Structuri motivaționale – Introducere",
      questions: [
        {
          text: "Ce exprimă noțiunea de <span class='tip'><strong>structuri motivaționale?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> forme relativ stabile prin care motivația se organizează și se menține în timp, influențând conduita.<br /><br /><strong>Exemplu:</strong> interesele și convingerile îți susțin alegeri similare pe termen lung.</span></span>",
          options: [
            "<span class='tip'><strong>Forme relativ stabile prin care motivația se organizează în timp și se exprimă în conduită, menținând orientarea către scopuri personale</strong><span class='tooltip-box'><strong>Corect:</strong> surprinde stabilitatea relativă și rolul lor în ghidarea conduitei.</span></span>",
            "<span class='tip'><strong>Forme relativ stabile prin care motivația se organizează în timp și se exprimă în conduită, menținând rătăcirea către scopuri personale</strong><span class='tooltip-box'><strong>Distractor:</strong> structurile motivaționale susțin orientarea și coerența conduitei, nu „rătăcirea” ei.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care dintre următoarele fac parte din <span class='tip'><strong>structurile motivaționale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> forme psihice prin care motivația se organizează, se stabilizează și se exprimă în conduită.<br /><br /><strong>Exemplu:</strong> trebuințe, motive, interese, convingeri, idealuri.</span></span>, și nu sunt reacții automate sau reflexe?",
          multiple: true,
          options: [
            "<span class='tip'><strong>Reflexele necondiționate</strong><span class='tooltip-box'><strong>Distractor:</strong> reacții automate; nu sunt structuri motivaționale, chiar dacă pot coexista cu ele.</span></span>",
            "<span class='tip'><strong>Trebuințele</strong><span class='tooltip-box'><strong>Corect:</strong> stări de necesitate care solicită organismul și susțin conduita.</span></span>",
            "<span class='tip'><strong>Motivele</strong><span class='tooltip-box'><strong>Corect:</strong> trebuințe conștientizate și orientate spre scopuri.</span></span>",
            "<span class='tip'><strong>Interesele</strong><span class='tooltip-box'><strong>Corect:</strong> orientări selective și relativ stabile către activități/domenii.</span></span>",
            "<span class='tip'><strong>Convingerile</strong><span class='tooltip-box'><strong>Corect:</strong> idei-valoare cu încărcătură afectivă, care mobilizează conduita.</span></span>",
            "<span class='tip'><strong>Idealurile</strong><span class='tooltip-box'><strong>Corect:</strong> modele valorice de perfecțiune către care individul tinde.</span></span>",
          ],
          answer: [1, 2, 3, 4, 5],
        },
      ],
    },

    {
      id: "fph-t9c1",
      title: "Trebuințele",
      questions: [
        {
          text: "Trebuințele sunt <span class='tip'><strong>forțe motrice fundamentale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> surse interne de energie psihică ce pun în mișcare comportamentul.</span></span> care mențin <span class='tip'><strong>echilibrul bio-psiho-social.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> armonia dintre planul biologic, psihologic și social.<br /><br /><strong>Exemplu:</strong> nevoia de odihnă (biologic), nevoia de competență (psihologic), nevoia de apartenență (social).</span></span> Care variantă este corectă?",
          options: [
            "<span class='tip'><strong>Trebuințele sunt surse interne care solicită organismul și îi mențin echilibrul prin declanșarea unor comportamente adecvate</strong><span class='tooltip-box'><strong>Corect:</strong> trebuința produce tensiune și mobilizează acțiuni de satisfacere.</span></span>",
            "<span class='tip'><strong>Trebuințele sunt surse interne care solicită organismul și îi mențin echilibrul prin declanșarea unor comportamente inadecvate</strong><span class='tooltip-box'><strong>Distractor:</strong> funcția trebuinței este adaptativă; „inadecvat” contrazice rolul de restabilire a echilibrului.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează exemple de <span class='tip'><strong>trebuințe primare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> înnăscute, legate de supraviețuire și integritatea fizică.<br /><br /><strong>Exemplu:</strong> foame, sete, somn.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Foamea</strong><span class='tooltip-box'><strong>Corect:</strong> nevoie biologică de aport energetic.</span></span>",
            "<span class='tip'><strong>Setea</strong><span class='tooltip-box'><strong>Corect:</strong> nevoie biologică de apă.</span></span>",
            "<span class='tip'><strong>Somnul</strong><span class='tooltip-box'><strong>Corect:</strong> nevoie biologică de refacere.</span></span>",
            "<span class='tip'><strong>Nevoia de mișcare sau relaxare</strong><span class='tooltip-box'><strong>Corect:</strong> legată de funcționarea și reglarea organismului.</span></span>",
            "<span class='tip'><strong>Nevoia de statut social</strong><span class='tooltip-box'><strong>Distractor:</strong> este tipic secundară, formată social și cultural.</span></span>",
          ],
          answer: [0, 1, 2, 3],
        },

        {
          text: "Selectează exemple de <span class='tip'><strong>trebuințe secundare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dobândite, legate de integrarea psihologică și socială.<br /><br /><strong>Exemplu:</strong> comunicare, confort, autoactualizare.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Nevoia de comunicare</strong><span class='tooltip-box'><strong>Corect:</strong> ține de relaționare și integrare socială.</span></span>",
            "<span class='tip'><strong>Nevoia de autoactualizare</strong><span class='tooltip-box'><strong>Corect:</strong> ține de dezvoltare personală și sens.</span></span>",
            "<span class='tip'><strong>Nevoia de confort</strong><span class='tooltip-box'><strong>Corect:</strong> include componente psihologice și sociale, modelate prin experiență.</span></span>",
            "<span class='tip'><strong>Setea</strong><span class='tooltip-box'><strong>Distractor:</strong> este trebuință primară, biologică.</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Ce se întâmplă când trebuințele nu sunt satisfăcute?",
          options: [
            "<span class='tip'><strong>Se amplifică energia tensiunii interne sau pot fi inhibate prin mecanisme de apărare, în funcție de context</strong><span class='tooltip-box'><strong>Corect:</strong> nesatisfacerea crește tensiunea, iar uneori apare inhibiție/compensare.</span></span>",
            "<span class='tip'><strong>Se amputează energia tensiunii interne sau pot fi inhibate prin mecanisme de apărare, în funcție de context</strong><span class='tooltip-box'><strong>Distractor:</strong> formularea este eronată; nesatisfacerea nu „amputează” tensiunea, ci tinde să o crească.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t9c2",
      title: "Motivele",
      questions: [
        {
          text: "Motivul este definit ca o <span class='tip'><strong>forță motrică</strong><span class='tooltip-box'><strong>Spus simplu:</strong> energia psihică ce pune în mișcare acțiunea.</span></span> care <span class='tip'><strong>declanșează</strong><span class='tooltip-box'><strong>Spus simplu:</strong> face să înceapă comportamentul.</span></span>, <span class='tip'><strong>susține energetic</strong><span class='tooltip-box'><strong>Spus simplu:</strong> menține efortul pe durata acțiunii.</span></span> și <span class='tip'><strong>direcționează acțiunea.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> orientează conduita spre un scop concret.<br /><br /><strong>Exemplu:</strong> înveți ca să iei bursă sau ca să intri la un program dorit.</span></span> Care variantă este corectă?",
          options: [
            "<span class='tip'><strong>Motivul activează, menține și direcționează comportamentul către un scop, susținând efortul până la obținerea lui</strong><span class='tooltip-box'><strong>Corect:</strong> include declanșare, susținere și orientare spre scop.</span></span>",
            "<span class='tip'><strong>Motivul activează, menține și direcționează comportamentul către un scop, reducând efortul până la obținerea lui</strong><span class='tooltip-box'><strong>Distractor:</strong> motivul, ca forță motrică, susține energetic efortul, nu îl „reduce” ca principiu.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Motivele sunt <span class='tip'><strong>trebuințe conștientizate.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți dai seama ce nevoie ai și o transformi în scop.</span></span> Ce înseamnă asta?",
          options: [
            "<span class='tip'><strong>Individul devine conștient de nevoile sale și acționează pentru satisfacerea lor, formulând scopuri și pași concreți</strong><span class='tooltip-box'><strong>Corect:</strong> conștientizarea transformă trebuința în motiv orientat spre acțiune.</span></span>",
            "<span class='tip'><strong>Individul devine conștient de nevoile sale și acționează pentru satisfacerea lor, formulând scuze și pauze constante</strong><span class='tooltip-box'><strong>Distractor:</strong> formularea nu descrie motivul; motivul conduce spre scop și acțiune, nu spre evitare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează manifestări ale <span class='tip'><strong>constelațiilor motivaționale.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> configurații de motive care coexistă și interacționează, influențând alegerile și conduita.<br /><br /><strong>Exemplu:</strong> vrei și performanță, și relaxare, iar uneori intră în conflict.</span></span>",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Optare</strong><span class='tooltip-box'><strong>Corect:</strong> alegerea unui motiv dominant care ghidează decizia și acțiunea.</span></span>",
            "<span class='tip'><strong>Coroborare</strong><span class='tooltip-box'><strong>Corect:</strong> motivele se asociază și se întăresc reciproc pentru aceeași activitate.</span></span>",
            "<span class='tip'><strong>Conflict</strong><span class='tooltip-box'><strong>Corect:</strong> opoziție între motive, cu tensiune și posibile blocaje decizionale.</span></span>",
            "<span class='tip'><strong>Blocarea totală a motivației</strong><span class='tooltip-box'><strong>Distractor:</strong> nu este prezentată ca manifestare tipică a constelațiilor, ci ca absență/perturbare generală.</span></span>",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    {
      id: "fph-t9c3",
      title: "Interesele",
      questions: [
        {
          text: "Interesele sunt <span class='tip'><strong>formațiuni motivaționale complexe.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> orientări relativ stabile către domenii și activități, nu simple impulsuri de moment.<br /><br /><strong>Exemplu:</strong> interes constant pentru psihologie sau pentru sport, susținut în timp.</span></span> Ce afirmă cel mai corect această idee?",
          options: [
            "<span class='tip'><strong>Interesele sunt orientări selective și relativ stabile către anumite activități, care cresc implicarea și persistența în timp</strong><span class='tooltip-box'><strong>Corect:</strong> stabilitatea și selectivitatea definesc interesul ca structură motivațională.</span></span>",
            "<span class='tip'><strong>Interesele sunt orientări selective și relativ stabile către anumite activități, care scad implicarea și persistența în timp</strong><span class='tooltip-box'><strong>Distractor:</strong> interesul tinde să crească implicarea și perseveranța, nu să le reducă.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Interesele implică <span class='tip'><strong>raportări cognitive, afective și volitive.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> gândești despre domeniu, îl simți ca relevant și alegi să te implici.<br /><br /><strong>Exemplu:</strong> îți place un domeniu, îl înțelegi mai bine și continui să lucrezi în el.</span></span> Ce rezultă de aici?",
          options: [
            "<span class='tip'><strong>Interesele se exprimă prin implicare activă, atenție susținută și efort voluntar în activități legate de domeniul preferat</strong><span class='tooltip-box'><strong>Corect:</strong> combinația cognitiv–afectiv–volitiv se vede în conduită, nu rămâne doar „preferință”.</span></span>",
            "<span class='tip'><strong>Interesele se exprimă prin implicare pasivă, atenție dispersă și efort voluntar în activități legate de domeniul preferat</strong><span class='tooltip-box'><strong>Distractor:</strong> interesul autentic susține implicare și atenție, nu pasivitate și dispersie.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Interesele au <span class='tip'><strong>efect formativ.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> contribuie la dezvoltarea personalității prin activitățile realizate constant.<br /><br /><strong>Exemplu:</strong> interesul pentru muzică dezvoltă disciplină, sensibilitate și competențe specifice.</span></span> Ce înseamnă asta?",
          options: [
            "<span class='tip'><strong>Participarea la activități de interes dezvoltă abilități și trăsături personale, deoarece exersezi, perseverezi și îți formezi competențe</strong><span class='tooltip-box'><strong>Corect:</strong> interesul produce investiție în timp, iar investiția produce dezvoltare.</span></span>",
            "<span class='tip'><strong>Participarea la activități de interes dezvoltă abilități și trăsături personale, deoarece eviți, amâni și îți reduci competențe</strong><span class='tooltip-box'><strong>Distractor:</strong> efectul formativ presupune implicare și exersare, nu evitare și reducere.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t9c4",
      title: "Convingerile",
      questions: [
        {
          text: "Convingerile sunt <span class='tip'><strong>judecăți puternic impregnate afectiv.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> idei legate de emoții puternice, care devin surse de acțiune.<br /><br /><strong>Exemplu:</strong> „educația contează” poate mobiliza efort constant, nu doar o opinie trecătoare.</span></span> Ce implică asta?",
          options: [
            "<span class='tip'><strong>Convingerile mobilizează individul spre acțiune, deoarece au semnificație personală și încărcătură emoțională stabilizată</strong><span class='tooltip-box'><strong>Corect:</strong> emoția și valoarea dau forță motivațională ideii.</span></span>",
            "<span class='tip'><strong>Convingerile mobilizează individul spre acțiune, deoarece au semnificație impersonală și încărcătură emoțională neutralizată</strong><span class='tooltip-box'><strong>Distractor:</strong> dacă sunt impersonale și „neutralizate” afectiv, nu mai explică mobilizarea specifică.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Convingerile sunt legate de <span class='tip'><strong>sistemul valoric.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> setul de valori prin care interpretezi lumea și îți ghidezi deciziile.<br /><br /><strong>Exemplu:</strong> dacă valorizezi corectitudinea, vei evita trișatul chiar când e tentant.</span></span> Ce înseamnă aceasta?",
          options: [
            "<span class='tip'><strong>Comportamentele tind să fie orientate în acord cu valorile proprii, deoarece convingerile transformă valorile în criterii de decizie</strong><span class='tooltip-box'><strong>Corect:</strong> valorile nu rămân abstracte, ci devin reguli interne de acțiune.</span></span>",
            "<span class='tip'><strong>Comportamentele tind să fie orientate în acord cu valorile proprii, deoarece convingerile transformă valorile în erori de decizie</strong><span class='tooltip-box'><strong>Distractor:</strong> convingerile nu sunt definite ca „erori”, ci ca repere valorice care organizează conduita.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t9c5",
      title: "Idealurile",
      questions: [
        {
          text: "Idealurile sunt <span class='tip'><strong>formațiuni motivaționale puternice.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> modele de perfecțiune morală, socială sau personală care ghidează viața individului.<br /><br /><strong>Exemplu:</strong> a deveni un profesionist integru sau un părinte responsabil poate funcționa ca ideal.</span></span> Care definiție este corectă?",
          options: [
            "<span class='tip'><strong>Idealurile sunt modele valorice către care individul aspiră și pe care încearcă să le realizeze prin alegeri și efort susținut</strong><span class='tooltip-box'><strong>Corect:</strong> idealul are funcție de ghidare și mobilizare pe termen lung.</span></span>",
            "<span class='tip'><strong>Idealurile sunt modele valorice către care individul aspiră și pe care încearcă să le evite prin alegeri și efort susținut</strong><span class='tooltip-box'><strong>Distractor:</strong> idealul este țintă de realizare, nu obiect de evitare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează componente ale <span class='tip'><strong>structurii unui ideal.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> elementele care compun orientarea ideală și îi dau direcție și conținut.<br /><br /><strong>Exemplu:</strong> un model admirat + un nivel de aspirații + un sens al vieții.</span></span>",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Scopul sau sensul vieții</strong><span class='tooltip-box'><strong>Corect:</strong> idealul se leagă de „încotro” și „de ce” îți organizezi viața.</span></span>",
            "<span class='tip'><strong>Semnificația vieții și nivelul de aspirații</strong><span class='tooltip-box'><strong>Corect:</strong> include cât de sus îți propui și ce înseamnă pentru tine acea direcție.</span></span>",
            "<span class='tip'><strong>Modelul idealizat</strong><span class='tooltip-box'><strong>Corect:</strong> figura/standardul către care te raportezi (persoană, tip de viață, valoare).</span></span>",
            "<span class='tip'><strong>Comportamente reflexe</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexele sunt reacții automate; idealul este o structură valorică și motivațională conștientă.</span></span>",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // Subcapitol 4 – Structura și dinamica motivației

    // QUIZ 9 – Forme ale motivației
    {
      id: "fph-t9d1",
      title: "Forme ale motivației",
      questions: [
        {
          text: "Selectează perechile care descriu <span class='tip'><strong>forme ale motivației.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> moduri diferite în care poate fi susținută și orientată conduita.<br /><br /><strong>Exemplu:</strong> din plăcere (intrinsec) sau pentru recompense (extrinsec).</span></span>",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Motivație pozitivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> comportamentul e susținut de beneficii/câștiguri anticipate.</span></span> și <span class='tip'><strong>motivație negativă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> comportamentul e susținut de evitarea pedepsei/pierderii.</span></span><span class='tooltip-box'><strong>Corect:</strong> diferența e „spre ceva dorit” vs „departe de ceva neplăcut”.</span></span>",
            "<span class='tip'><strong>Motivație intrinsecă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activitatea contează prin ea însăși (interes, plăcere, sens).</span></span> și <span class='tip'><strong>motivație extrinsecă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activitatea e făcută pentru recompense/presiuni externe.</span></span><span class='tooltip-box'><strong>Corect:</strong> criteriul este sursa susținerii (internă vs externă).</span></span>",
            "<span class='tip'><strong>Motivație cognitivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nevoie de înțelegere, clarificare, cunoaștere.</span></span> și <span class='tip'><strong>motivație afectivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nevoie de relaționare, atașament, trăiri emoționale.</span></span><span class='tooltip-box'><strong>Corect:</strong> criteriul e tipul dominant de nevoie psihică.</span></span>",
            "<span class='tip'><strong>Motivație reflexă</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexele sunt reacții automate, nu forme ale motivației.</span></span> și <span class='tip'><strong>motivație musculară</strong><span class='tooltip-box'><strong>Distractor:</strong> „muscular” nu este criteriu motivațional în această clasificare.</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Cum descrii simplu <span class='tip'><strong>motivația intrinsecă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> faci activitatea pentru că îți place/te interesează.</span></span> comparativ cu <span class='tip'><strong>motivația extrinsecă.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> faci activitatea pentru recompense sau ca să eviți consecințe.</span></span> Care variantă este corectă?",
          options: [
            "<span class='tip'><strong>Motivația intrinsecă vine din interesul pentru activitate, iar cea extrinsecă din recompense ori presiuni externe</strong><span class='tooltip-box'><strong>Corect:</strong> diferența este „valoarea activității” vs „rezultatele externe”.</span></span>",
            "<span class='tip'><strong>Motivația extrinsecă vine din interesul pentru activitate, iar cea intrinsecă din recompense ori presiuni externe</strong><span class='tooltip-box'><strong>Distractor:</strong> inversează criteriul de diferențiere.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce caracterizează <span class='tip'><strong>motivația pozitivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> te miști spre ceva dorit.</span></span> comparativ cu <span class='tip'><strong>motivația negativă.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> te îndepărtezi de ceva de evitat.</span></span> Care variantă este corectă?",
          options: [
            "<span class='tip'><strong>Motivația pozitivă urmărește obținerea unui rezultat plăcut, iar motivația negativă urmărește evitarea unui rezultat neplăcut</strong><span class='tooltip-box'><strong>Corect:</strong> criteriul este „atracție” vs „evitare”.</span></span>",
            "<span class='tip'><strong>Motivația negativă urmărește obținerea unui rezultat plăcut, iar motivația pozitivă urmărește evitarea unui rezultat neplăcut</strong><span class='tooltip-box'><strong>Distractor:</strong> inversează sensul celor două forme.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t9d2",
      title: "Optimum motivațional",
      questions: [
        {
          text: "<span class='tip'><strong>Optimumul motivațional?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> echilibrul dintre motivație și dificultatea sarcinii, astfel încât performanța să fie maximă.<br /><br /><strong>Exemplu:</strong> suficientă mobilizare pentru o sarcină grea, fără suprasolicitare.</span></span> Apare când",
          options: [
            "<span class='tip'><strong>Intensitatea motivației se potrivește cu dificultatea percepută a sarcinii</strong><span class='tooltip-box'><strong>Corect:</strong> potrivirea susține efort eficient și performanță mai bună.</span></span>",
            "<span class='tip'><strong>Dificultatea sarcinii se potrivește cu intensitatea percepută a motivației</strong><span class='tooltip-box'><strong>Distractor:</strong> răstoarnă relația; criteriul este potrivirea motivației la sarcină, nu invers.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce se întâmplă când <span class='tip'><strong>dificultatea sarcinii</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât de grea este sarcina, așa cum o evaluează persoana.</span></span> este percepută corect?",
          options: [
            "<span class='tip'><strong>Individul își ajustează efortul și motivația și ajunge mai aproape de optimumul motivațional</strong><span class='tooltip-box'><strong>Corect:</strong> evaluarea realistă ajută dozarea efortului.</span></span>",
            "<span class='tip'><strong>Individul își ajustează efortul și motivația și ajunge mai departe de optimumul motivațional</strong><span class='tooltip-box'><strong>Distractor:</strong> evaluarea corectă nu îndepărtează de optimum, ci îl favorizează.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce consecințe are o <span class='tip'><strong>subapreciere sau supraapreciere</strong><span class='tooltip-box'><strong>Spus simplu:</strong> evaluarea greșită a dificultății sarcinii.</span></span> asupra optimumului motivațional?",
          options: [
            "<span class='tip'><strong>Apare un dezechilibru între motivație și dificultate, iar performanța poate scădea</strong><span class='tooltip-box'><strong>Corect:</strong> motivația nu mai e „potrivită” sarcinii.</span></span>",
            "<span class='tip'><strong>Apare o echilibrare între motivație și dificultate, iar performanța poate crește</strong><span class='tooltip-box'><strong>Distractor:</strong> evaluarea greșită tinde să rupă echilibrul, nu să îl optimizeze.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t9e1",
      title: "Teoria auto-determinării (Deci și Ryan)",
      questions: [
        {
          text: "Teoria auto-determinării pornește de la ideea că oamenii sunt <span class='tip'><strong>agenți activi ai propriei schimbări.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu doar reacționează la mediu, ci își organizează și dirijează dezvoltarea.</span></span> Ce exprimă cel mai bine această idee?",
          options: [
            "<span class='tip'><strong>Oamenii tind să învețe, să se dezvolte și să își organizeze comportamentul în mod activ</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe inițiativă și auto-organizare.</span></span>",
            "<span class='tip'><strong>Oamenii tind să evite, să blocheze și să își dezorganizeze comportamentul în mod activ</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de agent activ al propriei schimbări.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Conform teoriei auto-determinării, oamenii au o <span class='tip'><strong>tendință naturală de explorare și învățare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> curiozitate și dorință internă de a înțelege, fără recompense permanente.</span></span> Ce rezultă de aici?",
          options: [
            "<span class='tip'><strong>Multe comportamente sunt motivate intern, prin plăcerea de a cunoaște și de a progresa</strong><span class='tooltip-box'><strong>Corect:</strong> susține motivația intrinsecă.</span></span>",
            "<span class='tip'><strong>Multe comportamente sunt motivate extern, prin plăcerea de a cunoaște și de a progresa</strong><span class='tooltip-box'><strong>Distractor:</strong> „plăcerea de a cunoaște” indică sursă internă, nu control extern.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Teoria propune un <span class='tip'><strong>continuum al reglării comportamentului.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> de la control extern (presiuni, cerințe) la auto-reglare internă (asumare, autonomie).</span></span> Ce afirmă această idee?",
          options: [
            "<span class='tip'><strong>Reglarea poate fi mai mult externă sau mai mult internă, în funcție de cât își asumă persoana acțiunea</strong><span class='tooltip-box'><strong>Corect:</strong> există grade, nu doar „totul extern” sau „totul intern”.</span></span>",
            "<span class='tip'><strong>Reglarea este mereu externă sau mereu internă, indiferent de cât își asumă persoana acțiunea</strong><span class='tooltip-box'><strong>Distractor:</strong> neagă ideea de continuum și de nuanțe.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce caracterizează o <span class='tip'><strong>reglare externă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> acționezi mai ales din presiuni și așteptări.</span></span> comparativ cu o <span class='tip'><strong>reglare internă.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți asumi scopul, iar activitatea e trăită ca „a mea”.</span></span> Care variantă este corectă?",
          options: [
            "<span class='tip'><strong>Reglarea externă implică mai multă presiune, iar reglarea internă mai multă autonomie și rezistență mai mică la efort</strong><span class='tooltip-box'><strong>Corect:</strong> internalizarea reduce opoziția și consumul „de forțare”.</span></span>",
            "<span class='tip'><strong>Reglarea internă implică mai multă presiune, iar reglarea externă mai multă autonomie și rezistență mai mică la efort</strong><span class='tooltip-box'><strong>Distractor:</strong> inversează diferența dintre extern și intern.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t9e2",
      title: "Teoria expectanță-valoare (Wigfield și Eccles)",
      questions: [
        {
          text: "Teoria expectanță-valoare spune că implicarea într-o activitate depinde de <span class='tip'><strong>expectanță</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât de mult crezi că poți reuși.</span></span> și de <span class='tip'><strong>valoarea activității.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât de importantă, utilă sau interesantă ți se pare.</span></span> Care formulare este corectă?",
          options: [
            "<span class='tip'><strong>Motivația crește când persoana crede că poate reuși și consideră sarcina importantă sau utilă</strong><span class='tooltip-box'><strong>Corect:</strong> expectanță + valoare susțin implicarea.</span></span>",
            "<span class='tip'><strong>Motivația crește când persoana crede că poate eșua și consideră sarcina importantă sau utilă</strong><span class='tooltip-box'><strong>Distractor:</strong> expectanța de eșec reduce, de regulă, implicarea.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Expectanțele și valoarea sunt influențate de",
          multiple: true,
          options: [
            "<span class='tip'><strong>Credințe despre sarcină și despre propriile abilități</strong><span class='tooltip-box'><strong>Corect:</strong> autoevaluarea competenței și interpretarea sarcinii contează.</span></span>",
            "<span class='tip'><strong>Dificultatea percepută a sarcinii</strong><span class='tooltip-box'><strong>Corect:</strong> percepția dificultății schimbă așteptările și investiția.</span></span>",
            "<span class='tip'><strong>Scopuri personale, imagine de sine și experiențe afective anterioare</strong><span class='tooltip-box'><strong>Corect:</strong> istoricul emoțional și scopurile modelează valoarea și expectanța.</span></span>",
            "<span class='tip'><strong>Doar nivelul de inteligență</strong><span class='tooltip-box'><strong>Distractor:</strong> teoria subliniază credințe, valori și contexte, nu un singur factor fix.</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Conform teoriei, reușita într-o sarcină de învățare depinde de <span class='tip'><strong>expectanță</strong><span class='tooltip-box'><strong>Spus simplu:</strong> credința în șansele de succes.</span></span> și <span class='tip'><strong>valoarea sarcinii.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât de mult contează sarcina pentru persoană.</span></span> Care variantă este corectă?",
          options: [
            "<span class='tip'><strong>Implicarea și reușita depind de așteptările de succes și de valoarea acordată sarcinii</strong><span class='tooltip-box'><strong>Corect:</strong> cele două componente se combină în susținerea efortului.</span></span>",
            "<span class='tip'><strong>Implicarea și reușita depind de așteptările de succes și de lipsa valorii acordate sarcinii</strong><span class='tooltip-box'><strong>Distractor:</strong> dacă sarcina nu are valoare, implicarea scade.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t9e3",
      title: "Teorii motivaționale privind reușita academică",
      questions: [
        {
          text: "În teoriile despre <span class='tip'><strong>reușita academică</strong><span class='tooltip-box'><strong>Spus simplu:</strong> performanța școlară/universitară.</span></span>, se subliniază că studenții își stabilesc <span class='tip'><strong>scopuri relativ stabile.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> tipare de obiective care se repetă în contexte educaționale diferite.</span></span> Care idee surprinde corect această afirmație?",
          options: [
            "<span class='tip'><strong>Tipul de scopuri tinde să se mențină și să se repete în contexte educaționale diferite</strong><span class='tooltip-box'><strong>Corect:</strong> orientările motivaționale au o anumită stabilitate.</span></span>",
            "<span class='tip'><strong>Tipul de scopuri tinde să dispară și să nu se repete în contexte educaționale diferite</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de stabilitate relativă.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ames și Archer disting între <span class='tip'><strong>scopuri de perfecționare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> accent pe înțelegere și progres personal.</span></span> și <span class='tip'><strong>scopuri de performanță.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> accent pe comparație socială și evaluare.</span></span> Care variantă descrie corect scopurile de perfecționare?",
          options: [
            "<span class='tip'><strong>Vizează dezvoltarea propriilor abilități și înțelegerea materialului, cu accent pe progres</strong><span class='tooltip-box'><strong>Corect:</strong> criteriul este îmbunătățirea competenței.</span></span>",
            "<span class='tip'><strong>Vizează dezvoltarea propriilor abilități și evitarea înțelegerii materialului, cu accent pe progres</strong><span class='tooltip-box'><strong>Distractor:</strong> perfecționarea presupune înțelegere, nu evitare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Cum pot fi definite pe scurt <span class='tip'><strong>scopurile de performanță?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> interesul central este comparația cu ceilalți, nu progresul propriu.</span></span>",
          options: [
            "<span class='tip'><strong>Dorința de a obține rezultate mai bune decât ceilalți și de a evita evaluarea negativă</strong><span class='tooltip-box'><strong>Corect:</strong> compararea socială este criteriul principal.</span></span>",
            "<span class='tip'><strong>Dorința de a obține rezultate mai bune decât ceilalți și de a căuta evaluarea negativă</strong><span class='tooltip-box'><strong>Distractor:</strong> scopurile de performanță tind să evite evaluarea negativă.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t9f1",
      title: "Mediul educațional și motivația pentru învățare",
      questions: [
        {
          text: "Carole Ames arată că actul instructiv-educativ influențează orientarea motivațională prin trei dimensiuni principale. Selectează dimensiunile corecte",
          multiple: true,
          shuffle: false,
          options: [
            "<span class='tip'><strong>Sarcinile de învățare propuse</strong><span class='tooltip-box'><strong>Corect:</strong> tipul, dificultatea și sensul activităților oferite.</span></span>",
            "<span class='tip'><strong>Autoritatea exercitată</strong><span class='tooltip-box'><strong>Corect:</strong> cum se distribuie controlul și autonomia în raport cu sarcina.</span></span>",
            "<span class='tip'><strong>Modalitatea de evaluare</strong><span class='tooltip-box'><strong>Corect:</strong> feedback, criterii, accent pe progres vs comparație.</span></span>",
            "<span class='tip'><strong>Structura genetică a elevilor</strong><span class='tooltip-box'><strong>Distractor:</strong> nu este dimensiune didactică din modelul lui Ames.</span></span>",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Cum poate <span class='tip'><strong>sarcina de învățare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce îi cerem efectiv elevului să facă.</span></span> să susțină motivația intrinsecă?",
          options: [
            "<span class='tip'><strong>Când este semnificativă, provocatoare și conectată la interesele elevului</strong><span class='tooltip-box'><strong>Corect:</strong> crește sensul, curiozitatea și implicarea.</span></span>",
            "<span class='tip'><strong>Când este complet mecanică, foarte ușoară și deconectată de interesele elevului</strong><span class='tooltip-box'><strong>Distractor:</strong> reduce sensul și implicarea internă.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce rol are <span class='tip'><strong>evaluarea?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> note, feedback, ocazii de îmbunătățire.</span></span>",
          options: [
            "<span class='tip'><strong>Poate susține motivația dacă oferă feedback constructiv și șansa de a reface sarcinile</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe progres și învățare din greșeli.</span></span>",
            "<span class='tip'><strong>Poate susține motivația doar dacă oferă feedback punitiv și interzice refacerea sarcinilor</strong><span class='tooltip-box'><strong>Distractor:</strong> formularea contrazice ideea de susținere prin feedback și progres.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t9f2",
      title: "Teorii umaniste ale motivației",
      questions: [
        {
          text: "<span class='tip'><strong>Teoriile umaniste</strong><span class='tooltip-box'><strong>Spus simplu:</strong> omul are o tendință internă spre creștere, sens și autoactualizare.</span></span> privesc motivația ca",
          options: [
            "<span class='tip'><strong>Expresie a nevoii de dezvoltare, sens și autorealizare, nu doar reacție la recompense</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe creștere și împlinire.</span></span>",
            "<span class='tip'><strong>Expresie a nevoii de stagnare, lipsă de sens și autoîngrădire, nu doar reacție la recompense</strong><span class='tooltip-box'><strong>Distractor:</strong> inversează ideea centrală a abordării umaniste.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "În <span class='tip'><strong>piramida nevoilor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nevoi de bază și nevoi superioare organizate ierarhic.</span></span> a lui <span class='tip'><strong>Maslow</strong><span class='tooltip-box'><strong>Spus simplu:</strong> autorul ierarhiei nevoilor umane.</span></span>, motivația pentru învățare este susținută în special de",
          options: [
            "<span class='tip'><strong>Nevoile superioare de apartenență, stimă și autoactualizare, care dau sens învățării</strong><span class='tooltip-box'><strong>Corect:</strong> învățarea este frecvent legată de nevoi superioare.</span></span>",
            "<span class='tip'><strong>Nevoile superioare de izolare, dispreț și autoanulare, care dau sens învățării</strong><span class='tooltip-box'><strong>Distractor:</strong> nu sunt nevoi din model și contrazic sensul lui.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "În teoria personalității a lui <span class='tip'><strong>Carl Rogers</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dezvoltarea e susținută de un climat relațional cald și autentic.</span></span>, ce susține motivația pentru dezvoltare și învățare?",
          options: [
            "<span class='tip'><strong>Un climat bazat pe acceptare necondiționată, empatie și autenticitate</strong><span class='tooltip-box'><strong>Corect:</strong> reduce defensiva și susține creșterea personală.</span></span>",
            "<span class='tip'><strong>Un climat bazat pe respingere condiționată, lipsă de empatie și inautenticitate</strong><span class='tooltip-box'><strong>Distractor:</strong> ar bloca deschiderea și dezvoltarea.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    // CURS 10 - AFECTIVITATEA

    // SUBCAPITOL 1 – Definirea afectivității
    {
      id: "fph-t10a",
      title: "Definirea afectivității",
      questions: [
        {
          text: "Afectivitatea reprezintă <span class='tip'><strong>rezonanța internă.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> felul în care trăiești subiectiv relația ta cu lumea.<br /><br /><strong>Exemplu:</strong> aceeași situație poate fi simțită ca „încurajatoare” sau „amenințătoare”, în funcție de tine.</span></span> Care formulare este corectă?",
          options: [
            "<span class='tip'><strong>Afectivitatea este modul subiectiv în care individul trăiește și semnifică relația cu lumea</strong><span class='tooltip-box'><strong>Corect:</strong> accentul este pe trăire personală și pe semnificația dată situației, nu doar pe procesare logică.</span></span>",
            "<span class='tip'><strong>Afectivitatea este un proces exclusiv cognitiv, fără trăire subiectivă și fără semnificație personală</strong><span class='tooltip-box'><strong>Distractor:</strong> reduce afectivitatea la „logică”, ignorând componenta de trăire și evaluare personală.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Afectivitatea rezultă din aprecierea nivelului de concordanță dintre",
          options: [
            "<span class='tip'><strong>Motivele, interesele și așteptările individului și situația externă</strong><span class='tooltip-box'><strong>Corect:</strong> trăirea afectivă reflectă potrivirea sau nepotrivirea dintre „ce contează pentru mine” și „ce se întâmplă”.</span></span>",
            "<span class='tip'><strong>Doar stimulii fizici ai mediului, fără legătură cu motivele, interesele sau așteptările personale</strong><span class='tooltip-box'><strong>Distractor:</strong> afectivitatea implică evaluare personală, nu doar intensitatea sau tipul stimulului.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t10b",
      title: "Natura proceselor afective",
      questions: [
        {
          text: "Procesele afective sunt",
          options: [
            "<span class='tip'><strong>Experiențe subiective care apar în interacțiunea semnificativă a individului cu mediul</strong><span class='tooltip-box'><strong>Corect:</strong> sunt trăiri cu sens personal, legate de evaluarea situației.</span></span>",
            "<span class='tip'><strong>Procese pur logice, independente de semnificație și de trăire subiectivă</strong><span class='tooltip-box'><strong>Distractor:</strong> procesele afective nu sunt „doar raționamente”, ci includ trăire și evaluare.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Procesele afective se asociază frecvent cu",
          options: [
            "<span class='tip'><strong>Modificări fiziologice ample care însoțesc trăirea și pregătesc reacția</strong><span class='tooltip-box'><strong>Corect:</strong> pot apărea schimbări de puls, respirație, tensiune musculară sau expresivitate facială.</span></span>",
            "<span class='tip'><strong>Absența oricăror reacții corporale, deoarece afectele sunt complet separate de fiziologie</strong><span class='tooltip-box'><strong>Distractor:</strong> afectivitatea are aproape întotdeauna o componentă somatică asociată.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Evaluarea afectivă a experienței are caracter",
          options: [
            "<span class='tip'><strong>Polar, orientând trăirea spre pozitiv sau negativ</strong><span class='tooltip-box'><strong>Corect:</strong> situația este simțită ca plăcută/neplăcută, atrăgătoare/amenințătoare.</span></span>",
            "<span class='tip'><strong>Complet neutru, fără orientare, deoarece afectivitatea nu diferențiază plăcutul de neplăcut</strong><span class='tooltip-box'><strong>Distractor:</strong> polaritatea este un semn distinctiv al evaluării afective.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Procesele afective pot avea rol",
          options: [
            "<span class='tip'><strong>Activator sau inhibitor al comportamentului, în funcție de semnificația situației</strong><span class='tooltip-box'><strong>Corect:</strong> uneori mobilizează (entuziasm), alteori frânează (teamă, descurajare).</span></span>",
            "<span class='tip'><strong>Exclusiv cognitiv, fără efect asupra inițierii sau opririi comportamentului</strong><span class='tooltip-box'><strong>Distractor:</strong> afectivitatea influențează direct energia și direcția conduitei.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t10c",
      title: "Manifestarea și expresivitatea proceselor afective",
      questions: [
        {
          text: "Procesele afective sunt <span class='tip'><strong>codificate simbolic.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pot fi exprimate și organizate prin semne (cuvinte, gesturi, mimică), astfel încât devin comunicabile.<br /><br /><strong>Exemplu:</strong> spui „sunt frustrat”, ridici tonul sau îți încrunți sprâncenele.</span></span> Selectează formularea corectă",
          options: [
            "<span class='tip'><strong>Sunt exprimate prin limbaj emoțional cu potențial comunicațional și adaptativ</strong><span class='tooltip-box'><strong>Corect:</strong> expresiile afective transmit informație și pot regla relațiile și reacțiile.</span></span>",
            "<span class='tip'><strong>Sunt exprimate doar prin limbaj strict logic, fără componentă comunicațională sau adaptativă</strong><span class='tooltip-box'><strong>Distractor:</strong> expresivitatea afectivă include mimică, gestică și nuanțe emoționale, nu doar logică.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Caracterul expresiv al proceselor afective presupune",
          options: [
            "<span class='tip'><strong>Posibilitatea de a fi observate și interpretate inclusiv transcultural, în limite generale</strong><span class='tooltip-box'><strong>Corect:</strong> unele expresii sunt larg recognoscibile, chiar dacă există diferențe culturale de regulă.</span></span>",
            "<span class='tip'><strong>Imposibilitatea de a fi observate, deoarece trăirile afective nu au forme externe de exprimare</strong><span class='tooltip-box'><strong>Distractor:</strong> mimica, tonul vocii și postura sunt canale clasice de exprimare.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Forța de contagiune afectivă se referă la faptul că",
          options: [
            "<span class='tip'><strong>O stare afectivă poate angrena emoțional mai mulți indivizi într-un grup</strong><span class='tooltip-box'><strong>Corect:</strong> emoțiile se pot „răspândi” prin imitare, empatie și sincronizare socială.</span></span>",
            "<span class='tip'><strong>Emoțiile rămân complet izolate și nu pot influența deloc starea afectivă a altor persoane</strong><span class='tooltip-box'><strong>Distractor:</strong> contagiunea afectivă descrie exact influența interpersonală a trăirilor.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t10d",
      title: "Dinamica proceselor afective",
      questions: [
        {
          text: "Intensitatea proceselor afective depinde de",
          options: [
            "<span class='tip'><strong>Reactivitatea afectivă a individului și semnificația motivațională a situației</strong><span class='tooltip-box'><strong>Corect:</strong> contează atât „cum sunt eu”, cât și „cât de important e pentru mine”.</span></span>",
            "<span class='tip'><strong>Doar intensitatea stimulului fizic, fără legătură cu semnificația sau cu persoana</strong><span class='tooltip-box'><strong>Distractor:</strong> două persoane pot simți diferit aceeași situație, în funcție de sens și motivație.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Durata proceselor afective poate varia",
          options: [
            "<span class='tip'><strong>De la stări trecătoare până la structuri stabile, precum sentimentele</strong><span class='tooltip-box'><strong>Corect:</strong> unele afecte sunt scurte, altele persistă și se stabilizează în timp.</span></span>",
            "<span class='tip'><strong>Doar pe termen foarte scurt, deoarece afectivitatea nu se poate stabiliza în structuri durabile</strong><span class='tooltip-box'><strong>Distractor:</strong> sentimentele și pasiunile pot avea durată lungă și stabilitate ridicată.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Mobilitatea afectivă se referă la",
          options: [
            "<span class='tip'><strong>Trecerea de la o stare afectivă la alta, în funcție de context și evaluare</strong><span class='tooltip-box'><strong>Corect:</strong> schimbarea trăirii când se schimbă situația sau interpretarea ei.</span></span>",
            "<span class='tip'><strong>Fixarea rigidă într-o singură stare afectivă, indiferent de context și de evaluare</strong><span class='tooltip-box'><strong>Distractor:</strong> mobilitatea implică variație, nu rigiditate.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t10e",
      title: "Rolurile proceselor afective",
      questions: [
        {
          text: "Procesele afective pot influența comportamentul prin <span class='tip'><strong>intenții persuasive.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> folosirea expresiilor afective ca să influențezi reacțiile altora.<br /><br /><strong>Exemplu:</strong> plânsul pentru sprijin, zâmbetul pentru apropiere, tonul ridicat pentru impunere.</span></span> Selectează varianta corectă",
          options: [
            "<span class='tip'><strong>Expresii afective folosite pentru a modela reacțiile altora și a orienta interacțiunea</strong><span class='tooltip-box'><strong>Corect:</strong> afectivitatea poate avea funcție socială și de reglare a relațiilor.</span></span>",
            "<span class='tip'><strong>Reacții complet independente de comunicare, care nu pot influența în niciun fel comportamentul celorlalți</strong><span class='tooltip-box'><strong>Distractor:</strong> expresivitatea afectivă are tocmai un rol comunicațional și interpersonal.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Catharsisul afectiv presupune",
          options: [
            "<span class='tip'><strong>Eliberarea tensiunii afective prin exprimare, descărcare sau clarificare emoțională</strong><span class='tooltip-box'><strong>Corect:</strong> reduce presiunea internă și poate aduce calmare.</span></span>",
            "<span class='tip'><strong>Blocarea completă a exprimării afective, pentru a menține tensiunea emoțională la nivel ridicat</strong><span class='tooltip-box'><strong>Distractor:</strong> catharsisul este asociat cu descărcare, nu cu blocare.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Procesele afective furnizează",
          options: [
            "<span class='tip'><strong>Energie pentru viața psihică și pentru adaptare, susținând inițiativa și implicarea</strong><span class='tooltip-box'><strong>Corect:</strong> afectele pot mobiliza resurse și pot orienta acțiunea.</span></span>",
            "<span class='tip'><strong>Doar reacții pasive fără energie, fără efect asupra implicării și fără rol în adaptare</strong><span class='tooltip-box'><strong>Distractor:</strong> afectivitatea are componentă energetică și de orientare a conduitei.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t10f",
      title: "Structuri afectogene – introducere",
      questions: [
        {
          text: "Care dintre următoarele sunt <span class='tip'><strong>structuri afectogene?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> forme prin care afectivitatea se generează, se organizează și se manifestă.<br /><br /><strong>Exemplu:</strong> de la „colorarea” discretă a trăirii până la pasiuni stabile.</span></span>",
          options: [
            "<span class='tip'><strong>Ton afectiv, emoții, dispoziții, sentimente și pasiuni</strong><span class='tooltip-box'><strong>Corect:</strong> acestea sunt structuri afective de la simple la complexe.</span></span>",
            "<span class='tip'><strong>Reflexe necondiționate, adaptare senzorială și reacții pur motorii fără evaluare afectivă</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea nu sunt structuri afectogene, ci procese/reflexe cu altă natură.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t10g",
      title: "Ton afectiv, emoții și dispoziții afective",
      questions: [
        {
          text: "Tonul afectiv însoțește <span class='tip'><strong>actul cunoașterii.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> apare ca o „nuanță” emoțională care colorează percepția, gândirea sau amintirea.<br /><br /><strong>Exemplu:</strong> aceeași amintire poate fi însoțită de plăcere sau de disconfort.</span></span> Ce înseamnă concret acest lucru?",
          options: [
            "<span class='tip'><strong>Este o colorare afectivă discretă, de tip plăcere–neplăcere, care însoțește actele cognitive</strong><span class='tooltip-box'><strong>Corect:</strong> nu este neapărat exploziv, ci adesea subtil și constant în fond.</span></span>",
            "<span class='tip'><strong>Este o reacție exclusiv motorie, prezentă doar în mișcări și fără legătură cu percepția, gândirea sau amintirea</strong><span class='tooltip-box'><strong>Distractor:</strong> tonul afectiv însoțește tocmai contactul cognitiv cu realitatea.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Cum este definită <span class='tip'><strong>emoția?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> o trăire afectivă ce poate fi primară și spontană sau mai elaborată și legată de motive.<br /><br /><strong>Notă:</strong> formulare atribuită lui Popescu-Neveanu.</span></span>",
          options: [
            "<span class='tip'><strong>Fenomen afectiv fundamental care poate fi reacție spontană primară sau proces mai complex legat de o motivație secundară</strong><span class='tooltip-box'><strong>Corect:</strong> include atât forma simplă (afect), cât și forma elaborată.</span></span>",
            "<span class='tip'><strong>Fenomen strict rațional, fără trăire subiectivă și fără legătură cu trebuințe, motive sau evaluarea situației</strong><span class='tooltip-box'><strong>Distractor:</strong> emoția este trăire afectivă și implică evaluare și semnificație.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează caracteristicile care descriu <span class='tip'><strong>emoțiile simple.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> emoții primare, intense, scurte, legate de situații concrete și cu orientare clară (apropiere/evitare).</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Au intensitate mare și energie ridicată</strong><span class='tooltip-box'><strong>Corect:</strong> apar cu „forță” și mobilizează reacția rapidă.</span></span>",
            "<span class='tip'><strong>Se schimbă relativ rapid și au dinamică accentuată</strong><span class='tooltip-box'><strong>Corect:</strong> tind să fie scurte și reactive.</span></span>",
            "<span class='tip'><strong>Sunt legate de un context concret, ușor de identificat</strong><span class='tooltip-box'><strong>Corect:</strong> sunt ancorate într-o situație anume.</span></span>",
            "<span class='tip'><strong>Au orientare clară, spre apropiere sau spre evitare</strong><span class='tooltip-box'><strong>Corect:</strong> conduc la tendințe acționale imediate.</span></span>",
            "<span class='tip'><strong>Sunt invariabil stabile, de lungă durată și independente de context</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta descrie mai degrabă structuri stabile, nu emoții simple.</span></span>",
          ],
          answer: [0, 1, 2, 3],
        },

        {
          text: "Ce exemple aparțin cel mai clar categoriei de <span class='tip'><strong>emoții simple?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> bucurie, veselie, tristețe, supărare, entuziasm, plăcere, dezgust.</span></span>",
          options: [
            "<span class='tip'><strong>Bucurie, tristețe, entuziasm și dezgust</strong><span class='tooltip-box'><strong>Corect:</strong> sunt emoții primare, legate de situații concrete și cu manifestare rapidă.</span></span>",
            "<span class='tip'><strong>Patriotism, datorie, onoare și principialitate</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea sunt mai apropiate de sentimente și valori, nu de emoții simple.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care descriere se potrivește <span class='tip'><strong>emoțiilor complexe?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trăiri elaborate, mai influențate de interpretare, valori și convenții sociale.</span></span>",
          options: [
            "<span class='tip'><strong>Sunt structuri afective elaborate, cu mai mult control conștient și cu semnificare valorică</strong><span class='tooltip-box'><strong>Corect:</strong> includ interpretare intelectuală și nuanțe sociale/culturale.</span></span>",
            "<span class='tip'><strong>Sunt reacții reflexe automate, fără interpretare, fără valori și fără influență a convențiilor sociale</strong><span class='tooltip-box'><strong>Distractor:</strong> emoțiile complexe presupun tocmai interpretare și semnificare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează afirmațiile corecte despre <span class='tip'><strong>emoțiile complexe.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> exemple tipice: speranță, admirație, dispreț; exprimarea lor este influențată de norme și învățare.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Implică interpretare intelectuală și semnificare valorică</strong><span class='tooltip-box'><strong>Corect:</strong> sensul și valoarea situației sunt centrale.</span></span>",
            "<span class='tip'><strong>În exprimare, se supun unor convenții sociale și culturale învățate</strong><span class='tooltip-box'><strong>Corect:</strong> există reguli de manifestare și autocontrol.</span></span>",
            "<span class='tip'><strong>Sunt identice cu emoțiile simple, doar mai slabe ca intensitate, fără elemente noi</strong><span class='tooltip-box'><strong>Distractor:</strong> diferența este structurală (interpretare, valori, norme), nu doar de „tărie”.</span></span>",
            "<span class='tip'><strong>Pot nuanța raportarea individului la activitate, influențând implicarea și evaluarea</strong><span class='tooltip-box'><strong>Corect:</strong> schimbă modul de angajare, sensul și decizia.</span></span>",
          ],
          answer: [0, 1, 3],
        },

        {
          text: "Dispozițiile afective sunt",
          options: [
            "<span class='tip'><strong>Structuri de intensitate și durată medie, vag conștientizate, care dau un fundal afectiv activității</strong><span class='tooltip-box'><strong>Corect:</strong> nu sunt explozive, ci „stare de fond” (bună dispoziție, iritabilitate).</span></span>",
            "<span class='tip'><strong>Stări extrem de intense și foarte scurte, cu descărcare imediată și orientare bruscă spre acțiune</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta descrie mai degrabă afecte/emoții acute, nu dispoziții.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t10i",
      title: "Sentimentele",
      questions: [
        {
          text: "Sentimentele sunt definite ca <span class='tip'><strong>formațiuni afective complexe.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> structuri afective stabile, rezultate din integrarea și organizarea emoțiilor.<br /><br /><strong>Exemplu:</strong> respectul sau dragostea persistă dincolo de episoade emoționale punctuale.</span></span> Ce caracteristică le diferențiază de emoțiile simple?",
          options: [
            "<span class='tip'><strong>Au organizare superioară și stabilitate mare în timp, integrând valori și atitudini</strong><span class='tooltip-box'><strong>Corect:</strong> se mențin și se structurează, nu dispar odată cu situația imediată.</span></span>",
            "<span class='tip'><strong>Sunt scurte, explozive și strict dependente de un stimul imediat, fără stabilizare în timp</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta descrie emoțiile simple, nu sentimentele.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "În sensul formulat de Popescu-Neveanu, sentimentele pot fi înțelese ca <span class='tip'><strong>formațiuni atitudinale.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> raportări afective stabile și organizate valoric față de obiecte, persoane sau idei.</span></span> Ce implică această formulare?",
          options: [
            "<span class='tip'><strong>Sentimentele exprimă o raportare valorică stabilă față de obiectul vizat și ghidează conduita</strong><span class='tooltip-box'><strong>Corect:</strong> includ evaluare, semnificație și orientare relativ constantă.</span></span>",
            "<span class='tip'><strong>Sentimentele sunt doar reacții fiziologice fără valori, fără semnificație și fără legătură cu orientarea conduitei</strong><span class='tooltip-box'><strong>Distractor:</strong> „atitudinal” presupune tocmai organizare valorică și orientare.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t10j",
      title: "Tipuri de sentimente",
      questions: [
        {
          text: "Sentimentele pot fi diferențiate în funcție de <span class='tip'><strong>direcția raportării afective.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> către ce este orientată trăirea: sine, ceilalți sau valori/idei.</span></span> Care variantă exprimă corect această clasificare?",
          options: [
            "<span class='tip'><strong>Sentimente orientate către sine, către ceilalți și către valori sau idei</strong><span class='tooltip-box'><strong>Corect:</strong> criteriul este „spre ce se îndreaptă” raportarea afectivă.</span></span>",
            "<span class='tip'><strong>Sentimente reflexe și automate, fără obiect, fără direcție și fără organizare valorică</strong><span class='tooltip-box'><strong>Distractor:</strong> sentimentele au obiect și direcție de raportare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care dintre următoarele sunt exemple de <span class='tip'><strong>sentimente relative la sine?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trăiri legate de evaluarea propriei persoane și a valorii personale.</span></span>",
          options: [
            "<span class='tip'><strong>Stima de sine, eficacitatea de sine, orgoliul și vanitatea</strong><span class='tooltip-box'><strong>Corect:</strong> sunt centrate pe sine și pe autoevaluare.</span></span>",
            "<span class='tip'><strong>Dragostea, compasiunea, altruismul și prietenia</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea sunt orientate predominant către ceilalți.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Sentimente precum dragostea, respectul, invidia sau admirația aparțin categoriei",
          options: [
            "<span class='tip'><strong>Sentimentelor relative la ceilalți, fiind orientate spre persoane și relații</strong><span class='tooltip-box'><strong>Corect:</strong> au obiect interpersonal și evaluare a altuia.</span></span>",
            "<span class='tip'><strong>Sentimentelor relative la sine, fiind orientate exclusiv spre autoevaluare și autoapreciere</strong><span class='tooltip-box'><strong>Distractor:</strong> exemplele date sunt interpersonale, nu centrate exclusiv pe sine.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Datoria, patriotismul și onoarea sunt exemple de",
          options: [
            "<span class='tip'><strong>Sentimente relative la valori morale, legate de norme, idealuri și conduită</strong><span class='tooltip-box'><strong>Corect:</strong> au conținut valoric și orientare morală/socială.</span></span>",
            "<span class='tip'><strong>Emoții simple, tranzitorii, fără conținut valoric și fără stabilitate în timp</strong><span class='tooltip-box'><strong>Distractor:</strong> sunt structuri stabile, nu emoții simple de moment.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Sentimentele relative la valori estetice se caracterizează prin",
          options: [
            "<span class='tip'><strong>Raportare afectivă la frumos, armonie și expresie artistică sau culturală</strong><span class='tooltip-box'><strong>Corect:</strong> includ apreciere estetică și sensibilitate la formă și expresie.</span></span>",
            "<span class='tip'><strong>Raportare exclusiv biologică de supraviețuire, fără evaluare a frumosului sau a expresiei</strong><span class='tooltip-box'><strong>Distractor:</strong> esteticul presupune evaluare și semnificație culturală.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t10k",
      title: "Pasiunile",
      questions: [
        {
          text: "Pasiunile sunt <span class='tip'><strong>structuri afectogene</strong><span class='tooltip-box'><strong>Spus simplu:</strong> forme care generează și concentrează trăiri afective.</span></span> cu <span class='tip'><strong>intensitate și stabilitate înalte.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se mențin în timp și mobilizează multă energie afectivă.</span></span> Care formulare este corectă?",
          options: [
            "<span class='tip'><strong>Structuri afective foarte intense și stabile, care mobilizează masiv energia și orientează conduita</strong><span class='tooltip-box'><strong>Corect:</strong> au forță mare și durată lungă, influențând persistent acțiunea.</span></span>",
            "<span class='tip'><strong>Structuri afective vagi și instabile, care mobilizează puțină energie și nu influențează consistent conduita</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai curând dispoziții slabe, nu pasiuni.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Una dintre caracteristicile esențiale ale pasiunilor este <span class='tip'><strong>caracterul unilateral.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un singur obiect/interes poate domina viața psihică.</span></span> Ce implică acest lucru?",
          options: [
            "<span class='tip'><strong>Concentrarea majorității intereselor și resurselor afective într-o singură direcție dominantă</strong><span class='tooltip-box'><strong>Corect:</strong> energia și timpul sunt canalizate prioritar spre același obiect.</span></span>",
            "<span class='tip'><strong>Distribuirea echilibrată a intereselor și resurselor afective în mai multe domenii fără o direcție dominantă</strong><span class='tooltip-box'><strong>Distractor:</strong> acesta este opusul unilateralității.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Pasiunile pot fi clasificate astfel",
          options: [
            "<span class='tip'><strong>Pozitive, numite și nobile, și negative, numite și patimi</strong><span class='tooltip-box'><strong>Corect:</strong> criteriul este valoarea și efectul asupra dezvoltării și adaptării.</span></span>",
            "<span class='tip'><strong>Vizuale, auditive și chinestezice, în funcție de analizatorul dominant</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta este o clasificare a reprezentărilor, nu a pasiunilor.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care este rolul pasiunilor <span class='tip'><strong>pozitive?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pasiuni orientate constructiv și social acceptate.</span></span>",
          options: [
            "<span class='tip'><strong>Susțin activități de lungă durată și pot conduce la realizări majore și performanțe consistente</strong><span class='tooltip-box'><strong>Corect:</strong> canalizează energia spre dezvoltare și construcție.</span></span>",
            "<span class='tip'><strong>Blochează activitățile de lungă durată și împiedică realizările, reducând treptat implicarea și efortul</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice funcția constructivă a pasiunilor pozitive.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "De ce pasiunile pot avea și un <span class='tip'><strong>efect dezadaptativ?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pot reduce flexibilitatea și pot îngusta relațiile și viața socială.</span></span>",
          options: [
            "<span class='tip'><strong>Pentru că pot fi autoalimentate și pot îngusta câmpul de interacțiune, reducând flexibilitatea socială</strong><span class='tooltip-box'><strong>Corect:</strong> unilateralitatea poate duce la neglijarea altor domenii și relații.</span></span>",
            "<span class='tip'><strong>Pentru că sunt prea slabe și dispar rapid, astfel încât nu pot influența comportamentul sau adaptarea</strong><span class='tooltip-box'><strong>Distractor:</strong> pasiunile sunt intense și stabile, tocmai de aceea pot deveni dezadaptative.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t10l",
      title: "Relația dintre afectivitate și motivație",
      questions: [
        {
          text: "Cum este caracterizată relația dintre <span class='tip'><strong>afectivitate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dimensiunea trăirilor subiective ale individului.</span></span> și <span class='tip'><strong>motivație?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> forțele care declanșează și direcționează comportamentul.</span></span>",
          options: [
            "<span class='tip'><strong>Relația este indisolubilă, cele două procese se condiționează și se susțin reciproc</strong><span class='tooltip-box'><strong>Corect:</strong> trăirea afectivă influențează motivele, iar motivele colorează afectiv experiența.</span></span>",
            "<span class='tip'><strong>Relația este inexistentă, afectivitatea și motivația funcționează complet separat și independent</strong><span class='tooltip-box'><strong>Distractor:</strong> în practică, motivele și afectele sunt strâns interdependente.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce sunt <span class='tip'><strong>structurile afectogene?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> structuri psihice generatoare și organizatoare de trăiri afective.</span></span>",
          options: [
            "<span class='tip'><strong>Manifestări afective ale împlinirii sau neîmplinirii trebuințelor și motivelor individului</strong><span class='tooltip-box'><strong>Corect:</strong> trăirile reflectă satisfacție/frustrare și orientări motivaționale.</span></span>",
            "<span class='tip'><strong>Reacții senzoriale automate ale analizatorilor, fără legătură cu trebuințe, motive sau evaluare personală</strong><span class='tooltip-box'><strong>Distractor:</strong> structurile afectogene implică evaluare și semnificație, nu doar recepție senzorială.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Ce desemnează <span class='tip'><strong>constelațiile motivaționale?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> combinații de motive care cooperează sau intră în conflict și influențează conduita.</span></span>",
          options: [
            "<span class='tip'><strong>Ansambluri de motive care se influențează reciproc în orientarea și susținerea comportamentului</strong><span class='tooltip-box'><strong>Corect:</strong> motivele se pot întări sau se pot bloca între ele.</span></span>",
            "<span class='tip'><strong>Reflexe biologice fixe, fără interacțiune între motive și fără impact asupra alegerilor comportamentale</strong><span class='tooltip-box'><strong>Distractor:</strong> constelațiile sunt dinamice și țin de organizarea motivațională.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care este relația dintre <span class='tip'><strong>structurile afectogene</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ton afectiv, emoții, dispoziții, sentimente, pasiuni.</span></span> și <span class='tip'><strong>constelațiile motivaționale?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> configurații dinamice de motive.</span></span>",
          options: [
            "<span class='tip'><strong>Structurile afectogene sunt generate de constelațiile motivaționale și pot deveni la rândul lor activatoare ale acestora</strong><span class='tooltip-box'><strong>Corect:</strong> motivele produc trăiri, iar trăirile pot amplifica sau reorienta motivele.</span></span>",
            "<span class='tip'><strong>Structurile afectogene apar independent de motive și nu pot influența deloc activarea sau direcția motivației</strong><span class='tooltip-box'><strong>Distractor:</strong> trăirile afective pot crește sau scădea motivația și pot schimba prioritățile.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    // Curs 11A – Voința

    // Subcapitol 1 – Definire și caracteristici ale voinței

    {
      id: "fph-t11a",
      title: "Definirea și caracteristicile voinței",
      questions: [
        {
          text: "Voința este definită ca <span class='tip'><strong>proces psihic de autoreglare superioară</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți reglezi conștient conduita ca să atingi un scop, chiar dacă apar dificultăți.<br /><br /><strong>Exemplu:</strong> îți oprești impulsul de a renunța și continui până finalizezi.</span></span> care implică <span class='tip'><strong>scop</strong><span class='tooltip-box'><strong>Spus simplu:</strong> rezultatul pe care vrei să-l obții.<br /><br /><strong>Exemplu:</strong> să înveți pentru examen.</span></span> și <span class='tip'><strong>deliberare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> alegi conștient între alternative și îți asumi decizia.<br /><br /><strong>Exemplu:</strong> decizi să înveți acum, nu mâine.</span></span> Care formulare surprinde corect această definiție?",
          options: [
            "<span class='tip'><strong>Un proces psihic care organizează, mobilizează și controlează acțiunea orientată spre scop</strong><span class='tooltip-box'><strong>Corect:</strong> voința presupune scop, deliberare și control conștient al conduitei.<br /><br /><strong>Exemplu:</strong> îți stabilești un plan și îl urmezi chiar dacă e greu.</span></span>",
            "<span class='tip'><strong>Un proces automat care pornește fără scop și nu presupune control conștient asupra acțiunii</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie automatismul/reflexul, nu autoreglarea voluntară orientată spre scop.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează caracteristici ale <span class='tip'><strong>reglajului voluntar.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți conduci conștient acțiunea prin decizie și limbaj interior.<br /><br /><strong>Exemplu:</strong> îți spui „mai rezist puțin” și continui.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Presupune un control conștient al acțiunii</strong><span class='tooltip-box'><strong>Corect:</strong> conduita este ghidată intenționat, nu „se întâmplă singură”.</span></span>",
            "<span class='tip'><strong>Este realizat prin mijloace verbale precum limbajul interior</strong><span class='tooltip-box'><strong>Corect:</strong> auto-instrucțiunile ajută planificarea și menținerea efortului.</span></span>",
            "<span class='tip'><strong>Este complet automat și reflex, fără decizie și fără deliberare</strong><span class='tooltip-box'><strong>Distractor:</strong> automatul nu implică alegere conștientă.</span></span>",
            "<span class='tip'><strong>Implică un efort voluntar când apar obstacole sau tentații</strong><span class='tooltip-box'><strong>Corect:</strong> apare mobilizare suplimentară pentru a continua spre scop.</span></span>",
          ],
          answer: [0, 1, 3],
        },

        {
          text: "<span class='tip'><strong>Efortul voluntar.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> mobilizezi conștient resurse ca să atingi un scop.<br /><br /><strong>Exemplu:</strong> continui să lucrezi deși ești obosit.</span></span> Selectează afirmațiile corecte",
          multiple: true,
          options: [
            "<span class='tip'><strong>Presupune un consum energetic crescut</strong><span class='tooltip-box'><strong>Corect:</strong> implică încordare și mobilizare suplimentară a resurselor.</span></span>",
            "<span class='tip'><strong>Poate fi menținut nelimitat în timp, fără scădere și fără oboseală</strong><span class='tooltip-box'><strong>Distractor:</strong> efortul voluntar are limitări și poate duce la oboseală.</span></span>",
            "<span class='tip'><strong>Este limitat temporal din cauza încordării voluntare</strong><span class='tooltip-box'><strong>Corect:</strong> pe termen lung apare uzură, iar intensitatea trebuie dozată.</span></span>",
          ],
          answer: [0, 2],
        },

        {
          text: "Mobilizarea voluntară depinde de <span class='tip'><strong>obstacol.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dificultatea percepută în realizarea acțiunii.<br /><br /><strong>Exemplu:</strong> oboseală, lipsă de timp, tentații.</span></span> Ce relație este corectă?",
          options: [
            "<span class='tip'><strong>Cu cât obstacolul este perceput ca mai mare, cu atât crește mobilizarea efortului voluntar</strong><span class='tooltip-box'><strong>Corect:</strong> dificultatea mai mare cere de regulă mai multă mobilizare conștientă.</span></span>",
            "<span class='tip'><strong>Mobilizarea voluntară rămâne aceeași indiferent de obstacol, pentru că nu depinde de dificultatea sarcinii</strong><span class='tooltip-box'><strong>Distractor:</strong> nivelul efortului este legat de dificultate și de rezistențele întâlnite.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t11b",
      title: "Concepte esențiale despre voință",
      questions: [
        {
          text: "<span class='tip'><strong>Puterea voinței.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât de intens îți mobilizezi efortul pentru un scop.<br /><br /><strong>Exemplu:</strong> reziști tentației și continui să lucrezi.</span></span> La ce se referă?",
          options: [
            "<span class='tip'><strong>La intensitatea mobilizării voluntare necesare pentru atingerea scopului</strong><span class='tooltip-box'><strong>Corect:</strong> descrie „tăria” efortului voluntar, nu durata unei emoții.</span></span>",
            "<span class='tip'><strong>La durata unei stări afective care însoțește acțiunea, fără legătură cu mobilizarea efortului</strong><span class='tooltip-box'><strong>Distractor:</strong> durata afectivă nu definește puterea voinței.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'><strong>Perseverența.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> continui să depui efort chiar când e greu.<br /><br /><strong>Exemplu:</strong> revii zilnic la învățat până termini.</span></span> Ce presupune?",
          options: [
            "<span class='tip'><strong>Menținerea efortului în timp, în ciuda dificultăților și a întârzierii recompensei</strong><span class='tooltip-box'><strong>Corect:</strong> este despre continuitate și rezistență la frustrare.</span></span>",
            "<span class='tip'><strong>Reacții rapide fără analiză, pentru că viteza de răspuns arată direct perseverența</strong><span class='tooltip-box'><strong>Distractor:</strong> viteza nu este criteriul central al perseverenței.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'><strong>Independența voinței.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> iei decizii proprii și ți le asumi.<br /><br /><strong>Exemplu:</strong> alegi un drum și accepți consecințele.</span></span> Cum se manifestă?",
          options: [
            "<span class='tip'><strong>Prin luarea deciziilor personale și asumarea responsabilității pentru consecințe</strong><span class='tooltip-box'><strong>Corect:</strong> independența include autonomie și răspundere.</span></span>",
            "<span class='tip'><strong>Prin imitarea constantă a deciziilor altora, pentru a evita responsabilitatea personală</strong><span class='tooltip-box'><strong>Distractor:</strong> acesta este conformism, nu independență.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'><strong>Promptitudinea deciziei.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât de repede iei o decizie potrivită situației.<br /><br /><strong>Exemplu:</strong> alegi rapid o strategie bună la un test.</span></span> Ce indică?",
          options: [
            "<span class='tip'><strong>Rapiditatea luării unei decizii oportune, adecvate contextului și scopului</strong><span class='tooltip-box'><strong>Corect:</strong> nu e reflex, ci decizie potrivită făcută la timp.</span></span>",
            "<span class='tip'><strong>Viteza unei reacții reflexe, care apare automat fără deliberare sau alegere conștientă</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexul nu este decizie voluntară.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Dezvoltarea capacității de <span class='tip'><strong>efort voluntar.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> înveți să te mobilizezi conștient când e greu.<br /><br /><strong>Exemplu:</strong> îți creezi rutine și le respecți.</span></span> Selectează variantele corecte",
          multiple: true,
          options: [
            "<span class='tip'><strong>Autoreflecția asupra propriei capacități de mobilizare</strong><span class='tooltip-box'><strong>Corect:</strong> îți înțelegi limitele și îți ajustezi strategiile.</span></span>",
            "<span class='tip'><strong>Confruntarea repetată cu obstacole în condiții controlate</strong><span class='tooltip-box'><strong>Corect:</strong> exersarea în fața dificultăților crește toleranța la efort.</span></span>",
            "<span class='tip'><strong>Exersarea conștientă a efortului voluntar în activități specifice</strong><span class='tooltip-box'><strong>Corect:</strong> practici mobilizarea prin sarcini concrete, nu doar „intenții”.</span></span>",
            "<span class='tip'><strong>Evitarea sistematică a situațiilor dificile pentru a nu consuma energie</strong><span class='tooltip-box'><strong>Distractor:</strong> evitarea reduce ocaziile de antrenare a efortului voluntar.</span></span>",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    {
      id: "fph-t11c",
      title: "Etapele actului voluntar",
      questions: [
        {
          text: "Actul voluntar se desfășoară în mai multe <span class='tip'><strong>etape.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> momente succesive prin care intenția devine acțiune controlată.<br /><br /><strong>Exemplu:</strong> îți propui, alegi, decizi, execuți, apoi verifici.</span></span> Care este rolul general al acestor etape?",
          options: [
            "<span class='tip'><strong>Organizarea și controlul conștient al acțiunii orientate spre scop, de la intenție la verificare</strong><span class='tooltip-box'><strong>Corect:</strong> etapele structurează conduita voluntară și o mențin sub control.</span></span>",
            "<span class='tip'><strong>Declanșarea automată a comportamentului, fără deliberare, fără decizie și fără control conștient</strong><span class='tooltip-box'><strong>Distractor:</strong> automatismul nu are etapele tipice actului voluntar.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Prima etapă a actului voluntar este <span class='tip'><strong>activarea motivațională.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> apare intenția și se conturează scopul și planul mintal.<br /><br /><strong>Exemplu:</strong> decizi că vrei să înveți și îți faci un plan.</span></span> Ce se întâmplă în această etapă?",
          options: [
            "<span class='tip'><strong>Apare intenția de acțiune și orientarea spre scop, împreună cu schița unui plan</strong><span class='tooltip-box'><strong>Corect:</strong> se activează motivul și direcția generală a conduitei.</span></span>",
            "<span class='tip'><strong>Se execută automat acțiunea fără plan și fără intenție, ca un reflex declanșat de context</strong><span class='tooltip-box'><strong>Distractor:</strong> execuția automată nu este „activare motivațională”.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Etapa confruntării motivelor presupune <span class='tip'><strong>deliberarea.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> compari motivele și alternativele care „trag” în direcții diferite.<br /><br /><strong>Exemplu:</strong> înveți acum sau ieși cu prietenii.</span></span> Ce caracterizează această etapă?",
          options: [
            "<span class='tip'><strong>Analiza alternativelor și a motivelor aflate în conflict, cu evaluarea consecințelor</strong><span class='tooltip-box'><strong>Corect:</strong> este momentul de cântărire conștientă a opțiunilor.</span></span>",
            "<span class='tip'><strong>Aplicarea imediată a unei decizii deja luate, fără comparație și fără evaluare a alternativelor</strong><span class='tooltip-box'><strong>Distractor:</strong> asta aparține execuției sau aplicării deciziei, nu deliberării.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Etapa deciziei implică",
          options: [
            "<span class='tip'><strong>Alegerea unui motiv sau scop și amânarea ori inhibarea altora pentru a începe acțiunea</strong><span class='tooltip-box'><strong>Corect:</strong> se stabilește direcția finală a conduitei voluntare.</span></span>",
            "<span class='tip'><strong>Evaluarea finală a rezultatului după încheierea acțiunii, pentru a trage concluzii</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta descrie etapa de verificare și concluzii, nu decizia.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care sunt ultimele două etape ale actului voluntar după activarea motivațională, confruntarea motivelor și decizie",
          shuffle: false,
          options: [
            "<span class='tip'><strong>Aplicarea deciziei și, dacă activitatea este complexă, verificarea și concluziile</strong><span class='tooltip-box'><strong>Corect:</strong> întâi execuți planul, apoi evaluezi rezultatul și formulezi concluzii.</span></span>",
            "<span class='tip'><strong>Adaptarea senzorială și automatizarea, urmate de o reacție reflexă care finalizează conduita</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea nu sunt etape specifice actului voluntar, ci procese de altă natură.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    // Curs 11B – Atenția
    // SUBCAPITOL 1 – Definirea și specificul atenției

    {
      id: "fph-t11d",
      title: "Definirea și specificul atenției",
      questions: [
        {
          text: "Atenția este definită ca <span class='tip'><strong>proces psihic de activare și orientare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu „produce” informație nouă, ci mobilizează și organizează funcționarea altor procese psihice.<br /><br /><strong>Exemplu:</strong> te ajută să selectezi ce contează dintr-un flux mare de stimuli.</span></span> Care formulare surprinde corect această definiție?",
          options: [
            "<span class='tip'><strong>Atenția constă în activarea, tonificarea, mobilizarea și orientarea selectivă a proceselor psihocomportamentale</strong><span class='tooltip-box'><strong>Corect:</strong> atenția funcționează ca mecanism de reglare și focalizare, nu ca „depozit” de informații.<br /><br /><strong>Exemplu:</strong> îți concentrezi resursele pe sarcina curentă.</span></span>",
            "<span class='tip'><strong>Atenția este un proces care produce conținut informațional propriu și înlocuiește celelalte procese în prelucrare</strong><span class='tooltip-box'><strong>Distractor:</strong> atenția nu are conținut informațional specific, ci susține și organizează prelucrarea realizată de alte procese.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "De ce se afirmă că <span class='tip'><strong>atenția nu are conținut informațional specific?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu descrie obiecte, ci reglează cum sunt prelucrate informațiile despre ele.<br /><br /><strong>Exemplu:</strong> îți permite să te concentrezi pe un detaliu și să ignori restul.</span></span>",
          options: [
            "<span class='tip'><strong>Pentru că susține și organizează activitatea altor procese psihice, orientându-le prin reflexul de orientare, fără a produce informații proprii</strong><span class='tooltip-box'><strong>Corect:</strong> atenția direcționează resursele către stimulii relevanți, dar nu „generează” ea însăși conținutul perceput sau gândit.<br /><br /><strong>Reflexul de orientare:</strong> reacție de întoarcere către stimul nou/semnificativ, susținută de activarea sistemelor de alertare.</span></span>",
            "<span class='tip'><strong>Pentru că este un proces pur senzorial care furnizează informații detaliate despre obiecte și poate înlocui complet percepția</strong><span class='tooltip-box'><strong>Distractor:</strong> percepția furnizează conținut, atenția doar selectează și optimizează prelucrarea conținutului.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Atenția se realizează prin <span class='tip'><strong>SRAA.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sistemul reticulat activator ascendent care alertează cortexul și susține reflexul de orientare.<br /><br /><strong>Exemplu:</strong> un stimul nou te „trezește” și îți captează atenția.</span></span> Ce efect are acest sistem?",
          options: [
            "<span class='tip'><strong>Alertarea cortexului și declanșarea reflexului de orientare către stimulul nou sau semnificativ</strong><span class='tooltip-box'><strong>Corect:</strong> SRAA crește nivelul de activare și pregătește prelucrarea stimulilor relevanți.</span></span>",
            "<span class='tip'><strong>Stocarea pe termen lung a informațiilor senzoriale și transformarea lor directă în amintiri stabile</strong><span class='tooltip-box'><strong>Distractor:</strong> stocarea pe termen lung ține de sistemele memoriei, nu de sistemul de alertare atențională.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Atenția selectează și focalizează <span class='tip'><strong>energia neuropsihică.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> distribuie resursele funcționale ale sistemului nervos către ce e important.<br /><br /><strong>Exemplu:</strong> te concentrezi pe rezolvarea unei probleme și reduci distragerile.</span></span> Ce presupune acest lucru?",
          options: [
            "<span class='tip'><strong>Promovarea unor tendințe prin excitație și inhibarea altora, pentru a crește claritatea și eficiența prelucrării</strong><span class='tooltip-box'><strong>Corect:</strong> atenția întărește ceea ce e relevant și „frânează” ceea ce e irelevant.</span></span>",
            "<span class='tip'><strong>Activarea simultană a tuturor stimulilor cu aceeași intensitate, fără selecție și fără filtrare</strong><span class='tooltip-box'><strong>Distractor:</strong> tocmai selecția și focalizarea diferențiază atenția de o activare difuză.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Atenția implică două <span class='tip'><strong>stări neurofuncționale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> moduri generale de funcționare care susțin niveluri diferite de activare și orientare.</span></span> <span class='tip'><strong>starea de veghe</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activare generală și disponibilitate, cu așteptare relativ pasivă a stimulilor.</span></span> și <span class='tip'><strong>starea de vigilență.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activare crescută, explorare activă și orientare intenționată spre mediul extern.</span></span> Care diferențiere este corectă?",
          options: [
            "<span class='tip'><strong>Veghea înseamnă activare generală și disponibilitate, iar vigilența înseamnă explorare activă și orientare intenționată spre stimuli</strong><span class='tooltip-box'><strong>Corect:</strong> vigilența presupune un nivel mai ridicat de alertare și căutare activă a semnalelor relevante.</span></span>",
            "<span class='tip'><strong>Veghea și vigilența sunt identice și pot fi folosite ca sinonime, fără nicio diferență de activare sau orientare</strong><span class='tooltip-box'><strong>Distractor:</strong> cursul le diferențiază prin nivelul de activare și gradul de explorare a mediului.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care sunt cele două <span class='tip'><strong>stări neurofuncționale?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cele două niveluri generale care susțin activarea și orientarea atenției.</span></span>",
          options: [
            "<span class='tip'><strong>Starea de veghe și starea de vigilență, ca forme de activare generală versus alertare orientată</strong><span class='tooltip-box'><strong>Corect:</strong> ele descriu disponibilitatea generală și alertarea intensificată spre stimulii relevanți.</span></span>",
            "<span class='tip'><strong>Somnul profund și visarea, ca stări care ar defini direct funcționarea atenției în activitate</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea sunt stări ale somnului, nu cele două stări atenționale prezentate în curs.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "De ce este atenția considerată un <span class='tip'><strong>factor dinamogen?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> energizează și susține desfășurarea altor procese psihice.<br /><br /><strong>Exemplu:</strong> crește eficiența percepției și a gândirii în sarcina curentă.</span></span>",
          options: [
            "<span class='tip'><strong>Pentru că susține activitatea cognitivă și afectivă, crescând nivelul de activare și eficiența procesării</strong><span class='tooltip-box'><strong>Corect:</strong> atenția intensifică funcționarea altor procese, fără a le înlocui.</span></span>",
            "<span class='tip'><strong>Pentru că înlocuiește complet procesele cognitive și poate funcționa izolat, fără legătură cu restul vieții psihice</strong><span class='tooltip-box'><strong>Distractor:</strong> atenția este un mecanism de susținere și organizare, nu un proces independent care „ia locul” altora.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      // SUBCAPITOL 2 – Tipuri de atenție
      id: "fph-t11e",
      title: "Tipuri de atenție",
      questions: [
        {
          text: "În psihologie sunt descrise trei forme principale de <span class='tip'><strong>atenție.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ele diferă prin cât control conștient implică și prin modul de declanșare.</span></span> Care sunt acestea?",
          options: [
            "<span class='tip'><strong>Atenție involuntară, atenție voluntară și atenție postvoluntară, ca trecere de la spontan la controlat și apoi la automatizat</strong><span class='tooltip-box'><strong>Corect:</strong> cele trei forme sunt prezentate standard în această succesiune.</span></span>",
            "<span class='tip'><strong>Atenție senzorială, atenție motorie și atenție reflexă, ca tipuri separate care ar descrie formele principale din curs</strong><span class='tooltip-box'><strong>Distractor:</strong> nu este clasificarea utilizată aici pentru formele principale ale atenției.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Atenția involuntară este o <span class='tip'><strong>formă primară.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se declanșează spontan, fără control conștient.<br /><br /><strong>Exemplu:</strong> întorci capul la un zgomot brusc.</span></span> Ce caracteristici îi sunt specifice?",
          options: [
            "<span class='tip'><strong>Apare sub influența stimulilor intensi, noi, mobili sau complecși, captând rapid resursele fără efort conștient</strong><span class='tooltip-box'><strong>Corect:</strong> stimulul „trage” atenția prin proprietățile lui și prin noutate/semnificație.</span></span>",
            "<span class='tip'><strong>Este menținută doar prin efort conștient și se autoreglează verbal, fără influența noutății sau intensității stimulilor</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie mai degrabă atenția voluntară, nu forma involuntară.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Atenția voluntară este o <span class='tip'><strong>formă superioară.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> implică intenție, scop și control conștient.<br /><br /><strong>Exemplu:</strong> rămâi concentrat la învățat chiar dacă apar distrageri.</span></span> Ce o definește?",
          options: [
            "<span class='tip'><strong>Apare intenționat și se autoreglează conștient prin mecanisme verbale, menținând focalizarea până la îndeplinirea sarcinii</strong><span class='tooltip-box'><strong>Corect:</strong> controlul și limbajul interior sunt centrale în menținerea atenției voluntare.</span></span>",
            "<span class='tip'><strong>Se declanșează exclusiv reflex, fără scop și fără efort, fiind determinată doar de intensitatea stimulilor din mediu</strong><span class='tooltip-box'><strong>Distractor:</strong> declanșarea reflexă și lipsa scopului caracterizează forma involuntară.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Atenția voluntară se manifestă prin <span class='tip'><strong>orientare intenționată.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți alegi ținta și îți menții concentrarea pentru a finaliza sarcina.</span></span> Care formulare este corectă?",
          options: [
            "<span class='tip'><strong>Focalizare energetică și menținerea concentrării până la finalizarea sarcinii, chiar dacă apar tentații sau oboseală</strong><span class='tooltip-box'><strong>Corect:</strong> include selecție, stabilitate și efort de menținere.</span></span>",
            "<span class='tip'><strong>Activare difuză fără scop, cu schimbări frecvente ale țintei atenționale și cu control conștient minim</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie o atenție instabilă, nu focalizarea voluntară orientată spre scop.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Atenția postvoluntară apare prin <span class='tip'><strong>automatizarea atenției voluntare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> după exercițiu, ceea ce cerea efort devine mai ușor de menținut atențional.<br /><br /><strong>Exemplu:</strong> după multă practică, citești concentrat fără să te forțezi.</span></span> Care enunț este corect?",
          options: [
            "<span class='tip'><strong>Se formează când controlul voluntar se stabilizează prin exercițiu, iar efortul conștient scade pe măsură ce activitatea devine familiară</strong><span class='tooltip-box'><strong>Corect:</strong> atenția rămâne eficientă, dar „costă” mai puțină energie conștientă.</span></span>",
            "<span class='tip'><strong>Se declanșează necontrolat și rămâne mereu reflexă, fără să poată fi influențată de exercițiu sau de deprinderea sarcinii</strong><span class='tooltip-box'><strong>Distractor:</strong> postvoluntara este tocmai rezultatul antrenării voluntarei, nu o formă reflexă fixă.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care sunt avantajele <span class='tip'><strong>atenției postvoluntare?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> lucrezi eficient cu mai puțin efort conștient.</span></span>",
          options: [
            "<span class='tip'><strong>Consum redus de energie nervoasă și eficiență crescută a activității, deoarece menținerea atenției devine mai stabilă</strong><span class='tooltip-box'><strong>Corect:</strong> automatizarea scade costul de menținere și crește randamentul.</span></span>",
            "<span class='tip'><strong>Consum crescut de energie și oboseală accelerată, deoarece automatizarea ar intensifica permanent efortul conștient</strong><span class='tooltip-box'><strong>Distractor:</strong> automatizarea reduce efortul, nu îl amplifică în mod sistematic.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      // SUBCAPITOL 3 – Modalități de favorizare a atenției voluntare
      id: "fph-t11i",
      title: "Favorizarea atenției voluntare",
      questions: [
        {
          text: "Care formulare descrie corect <span class='tip'><strong>favorizarea atenției voluntare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> măsuri imediate prin care susții concentrarea intenționată asupra unei sarcini.<br /><br /><strong>Exemplu:</strong> îți clarifici scopul și reduci distragerile.</span></span>",
          options: [
            "<span class='tip'><strong>Înseamnă să creezi condiții care ajută concentrarea intenționată și menținerea focalizării asupra sarcinii până la final</strong><span class='tooltip-box'><strong>Corect:</strong> este despre setarea contextului și a conduitei ca să susții atenția.</span></span>",
            "<span class='tip'><strong>Înseamnă să elimini complet efortul și să eviți orice sarcină dificilă, ca să nu existe solicitare atențională</strong><span class='tooltip-box'><strong>Distractor:</strong> atenția voluntară se exersează și se susține în sarcini orientate spre scop, nu prin evitare.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează modalități care favorizează atenția voluntară <span class='tip'><strong>în timpul unei activități.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce poți face „acum” ca să rămâi concentrat.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Stabilirea clară a scopurilor activității</strong><span class='tooltip-box'><strong>Corect:</strong> scopul reduce riscul de rătăcire și crește consistența focalizării.</span></span>",
            "<span class='tip'><strong>Evidențierea semnificației activității și a beneficiilor pentru individ</strong><span class='tooltip-box'><strong>Corect:</strong> sensul crește implicarea și susține efortul voluntar.</span></span>",
            "<span class='tip'><strong>Identificarea din timp a momentelor dificile ale activității</strong><span class='tooltip-box'><strong>Corect:</strong> anticipezi obstacolele și pregătești strategii de menținere a atenției.</span></span>",
            "<span class='tip'><strong>Crearea unei ambianțe stimulative, favorabile concentrării</strong><span class='tooltip-box'><strong>Corect:</strong> un mediu potrivit reduce costul de menținere atențională.</span></span>",
            "<span class='tip'><strong>Reducerea factorilor perturbatori</strong><span class='tooltip-box'><strong>Corect:</strong> scade competiția dintre stimuli și stabilizează focalizarea.</span></span>",
            "<span class='tip'><strong>Suprastimularea mediului cu multe elemente simultan, fără legătură cu sarcina</strong><span class='tooltip-box'><strong>Distractor:</strong> crește distragerile și fragmentează resursele atenționale.</span></span>",
          ],
          answer: [0, 1, 2, 3, 4],
        },

        {
          text: "De ce ajută <span class='tip'><strong>reducerea factorilor perturbatori?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> mai puține distrageri înseamnă focalizare mai stabilă.<br /><br /><strong>Exemplu:</strong> oprești notificările ca să lucrezi fără întreruperi.</span></span>",
          options: [
            "<span class='tip'><strong>Pentru că scade competiția dintre stimuli și permite menținerea concentrării asupra sarcinii prin selecție mai eficientă</strong><span class='tooltip-box'><strong>Corect:</strong> atenția are resurse limitate și beneficiază de un mediu mai „curat”.</span></span>",
            "<span class='tip'><strong>Pentru că atenția voluntară funcționează mai bine doar când apar permanent stimuli noi, astfel încât schimbarea să fie continuă</strong><span class='tooltip-box'><strong>Distractor:</strong> stimulii noi captează involuntar atenția și pot rupe concentrarea voluntară.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      // SUBCAPITOL 3 – Condiții necesare pentru educarea atenției voluntare
      id: "fph-t11j",
      title: "Educarea atenției voluntare",
      questions: [
        {
          text: "Care formulare descrie corect <span class='tip'><strong>educarea atenției voluntare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> formarea pe termen mai lung a capacității de concentrare prin metode și exercițiu.<br /><br /><strong>Exemplu:</strong> înveți treptat să lucrezi concentrat în sesiuni regulate.</span></span>",
          options: [
            "<span class='tip'><strong>Înseamnă să construiești treptat capacitatea de concentrare prin sarcini organizate, reguli și exersare constantă</strong><span class='tooltip-box'><strong>Corect:</strong> este un proces de formare, nu o soluție imediată de moment.</span></span>",
            "<span class='tip'><strong>Înseamnă să eviți orice sarcină solicitantă, pentru a nu consuma energie și pentru a nu activa efortul voluntar</strong><span class='tooltip-box'><strong>Distractor:</strong> fără sarcini și exersare nu se formează controlul atențional voluntar.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Selectează condiții care susțin educarea atenției voluntare <span class='tip'><strong>în învățare.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cum structurezi materialul și contextul ca să crești controlul atențional.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Organizarea materialelor și sarcinilor de învățare în structuri cu sens</strong><span class='tooltip-box'><strong>Corect:</strong> sensul și organizarea reduc încărcarea inutilă și cresc stabilitatea atenției.</span></span>",
            "<span class='tip'><strong>Sublinierea semnificației sarcinii pentru individ, prin motivare</strong><span class='tooltip-box'><strong>Corect:</strong> motivația susține efortul de menținere și toleranța la dificultate.</span></span>",
            "<span class='tip'><strong>Scoaterea în evidență a elementelor importante dintr-o sarcină de învățare</strong><span class='tooltip-box'><strong>Corect:</strong> clarifică ținta atențională și reduce rătăcirea între detalii.</span></span>",
            "<span class='tip'><strong>Prezentarea materialului în modalități variate</strong><span class='tooltip-box'><strong>Corect:</strong> varietatea controlată menține interesul și previne monotonia.</span></span>",
            "<span class='tip'><strong>Supraîncărcarea informațională continuă, fără pauze și fără structură</strong><span class='tooltip-box'><strong>Distractor:</strong> supraîncărcarea fragmentează atenția și crește oboseala cognitivă.</span></span>",
          ],
          answer: [0, 1, 2, 3],
        },

        {
          text: "De ce este utilă <span class='tip'><strong>cunoașterea fiziologiei atenției?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> atenția are limite biologice și fluctuații naturale.<br /><br /><strong>Exemplu:</strong> îți planifici pauze ca să eviți scăderea concentrării.</span></span>",
          options: [
            "<span class='tip'><strong>Pentru că poți adapta durata activităților și pauzele la capacitatea reală de concentrare, reducând oboseala și fluctuațiile</strong><span class='tooltip-box'><strong>Corect:</strong> planificarea realistă crește randamentul și stabilizează controlul voluntar.</span></span>",
            "<span class='tip'><strong>Pentru că astfel poți elimina complet pauzele și poți menține atenția perfect stabilă, indiferent de vârstă sau solicitare</strong><span class='tooltip-box'><strong>Distractor:</strong> fluctuațiile sunt naturale și nu pot fi eliminate total, doar gestionate.</span></span>",
          ],
          answer: 0,
        },

        {
          text: "Care este durata aproximativă a <span class='tip'><strong>stabilității atenției?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât poți menține focalizarea relativ constantă înainte să apară scăderi naturale.</span></span>",
          options: [
            "<span class='tip'><strong>La preșcolari este aproximativ 10 minute, iar la adulți poate ajunge până la aproximativ 30 de minute în condiții obișnuite</strong><span class='tooltip-box'><strong>Corect:</strong> stabilitatea crește odată cu dezvoltarea și antrenamentul, dar rămâne limitată.</span></span>",
            "<span class='tip'><strong>La toate vârstele este aproximativ 60 de minute fără scădere, dacă mediul este silențios și sarcina este prezentată o singură dată</strong><span class='tooltip-box'><strong>Distractor:</strong> stabilitatea variază cu vârsta și condițiile, iar fluctuațiile apar chiar și în medii bune.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    // CURS 12
    // Subcapitol 1 – Limbajul: definiții și caracteristici
    {
      id: "fph-t12a",
      title: "Definirea limbajului și a limbii",
      questions: [
        {
          text: "Ce este <span class='tip'><strong>limbajul?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activitatea prin care comunicăm folosind o limbă (cuvinte și reguli împărtășite).<br /><br /><strong>Exemplu:</strong> când vorbești, scrii sau explici ceva cuiva.</span></span>",
          options: [
            "<span class='tip'><strong>Sistem și activitate de comunicare cu ajutorul limbii</strong><span class='tooltip-box'><strong>Corect:</strong> la Popescu-Neveanu, limbajul este atât sistem, cât și activitate, realizată prin instrumentul numit limbă.</span></span>",
            "<span class='tip'><strong>Sistem de reguli formale, fără componentă de activitate și comunicare</strong><span class='tooltip-box'><strong>Distractor:</strong> reduce limbajul la reguli; definiția cerută include explicit comunicarea și activitatea.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum este definită <span class='tip'><strong>limba?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> instrumentul social al limbajului, un sistem foarte complex de semne și simboluri.<br /><br /><strong>Exemplu:</strong> româna, engleza, franceza.</span></span>",
          options: [
            "<span class='tip'><strong>Sistem evolutiv, hipercomplex de simboluri și semne, cu rol în cultură</strong><span class='tooltip-box'><strong>Corect:</strong> limba este o construcție socială și culturală, cu organizare complexă și istorie de evoluție.</span></span>",
            "<span class='tip'><strong>Vorbitul uzual al unui grup, fără structură simbolică și fără rol cultural</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie doar uzul cotidian, nu sistemul hipercomplex de semne și funcția culturală.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care sunt componentele <span class='tip'><strong>limbii?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> părțile mari ale sistemului: cuvinte, reguli de combinare și sensuri.<br /><br /><strong>Exemplu:</strong> vocabular + propoziții + semnificații.</span></span>",
          options: [
            "<span class='tip'><strong>Lexic, sintactică și semantică</strong><span class='tooltip-box'><strong>Corect:</strong> lexicul oferă unitățile, sintactica oferă regulile de combinare, semantica oferă sensurile.</span></span>",
            "<span class='tip'><strong>Gramatică, retorică și stilistică</strong><span class='tooltip-box'><strong>Distractor:</strong> sunt domenii utile, dar nu redau triada cerută în formularea definiției date în curs.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t12b",
      title: "Caracteristicile limbajului",
      questions: [
        {
          text: "Ce înseamnă că limbajul este un <span class='tip'><strong>fenomen psihologic dinamic?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> folosești limbajul diferit în funcție de persoană, context și scop, actualizând resursele tale psihice.<br /><br /><strong>Exemplu:</strong> vorbești altfel la examen decât cu prietenii.</span></span>",
          options: [
            "<span class='tip'><strong>Organizează și actualizează în vorbire resursele personalității, într-un mod particular fiecărui individ</strong><span class='tooltip-box'><strong>Corect:</strong> dinamismul se vede în adaptarea expresiei, nuanțelor și scopurilor comunicării.</span></span>",
            "<span class='tip'><strong>Este rigid și neschimbător, același pentru toți și identic în orice context de comunicare</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de fenomen dinamic și de actualizare a resurselor personalității.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care este legătura dintre <span class='tip'><strong>limbaj și gândire?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se sprijină reciproc: gândirea folosește limbajul, iar limbajul reflectă și modelează gândirea.<br /><br /><strong>Exemplu:</strong> formulezi în cuvinte o idee și astfel o clarifici.</span></span>",
          options: [
            "<span class='tip'><strong>Sunt într-o interdependență indisolubilă, limbajul fiind instrument esențial al gândirii</strong><span class='tooltip-box'><strong>Corect:</strong> limbajul mediază conceptualizarea, judecata și raționamentul.</span></span>",
            "<span class='tip'><strong>Sunt complet separate, iar limbajul nu influențează în niciun fel modul în care gândim</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice explicit ideea de interdependență și de rol instrumental al limbajului.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Conform lui Miller (1931), care este tendința evolutivă a <span class='tip'><strong>limbajului?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> să spui mai mult cu mai puțin, prin unități mai compacte.<br /><br /><strong>Exemplu:</strong> prescurtări, formule, expresii condensate.</span></span>",
          options: [
            "<span class='tip'><strong>Condensarea informației în unități lingvistice reduse</strong><span class='tooltip-box'><strong>Corect:</strong> evolutiv, limbajul poate comprima conținut mult în forme mai scurte și eficiente.</span></span>",
            "<span class='tip'><strong>Complicarea inevitabilă a enunțurilor și extinderea fără limită a formelor, fără condensare</strong><span class='tooltip-box'><strong>Distractor:</strong> nu surprinde ideea de condensare evidențiată în formularea atribuită lui Miller.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum devine limbajul <span class='tip'><strong>funcțional la copii?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> prin dezvoltare progresivă și socializare, de la forme simple la propoziții tot mai complexe.<br /><br /><strong>Exemplu:</strong> de la „apă!” la propoziții complete.</span></span>",
          options: [
            "<span class='tip'><strong>Prin trecerea de la cuvinte-propoziție la propoziții complexe, pe fond de socializare și interacțiune</strong><span class='tooltip-box'><strong>Corect:</strong> funcționalitatea crește odată cu structura și utilizarea socială a limbajului.</span></span>",
            "<span class='tip'><strong>Doar prin repetiție mecanică de cuvinte, fără interacțiune și fără trecere către structuri propoziționale</strong><span class='tooltip-box'><strong>Distractor:</strong> dezvoltarea limbajului nu este doar memorare, ci construire și folosire în contexte sociale.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t12c",
      title: "Funcțiile limbajului",
      questions: [
        {
          text: "Ce caracterizează <span class='tip'><strong>funcția comunicativă?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> transmite emoții și idei, influențează și construiește relații între oameni.<br /><br /><strong>Exemplu:</strong> explici, convingi, ceri ajutor, te apropii de cineva.</span></span>",
          options: [
            "<span class='tip'><strong>Exprimarea emoțiilor și ideilor, influențarea celorlalți și stabilirea relațiilor</strong><span class='tooltip-box'><strong>Corect:</strong> comunicarea include atât transmitere, cât și persuasiune și relaționare.</span></span>",
            "<span class='tip'><strong>Doar calibrarea acțiunii mintale, fără relaționare și fără influențarea interlocutorului</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie parțial funcția reglatorie, nu funcția comunicativă în sensul cerut.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce presupune <span class='tip'><strong>funcția cognitivă?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> limbajul ajută gândirea să reprezinte realitatea, să dea sens și să facă raționamente.<br /><br /><strong>Exemplu:</strong> formulezi o definiție și tragi o concluzie.</span></span>",
          options: [
            "<span class='tip'><strong>Reprezentarea, emiterea judecăților și desfășurarea raționamentelor</strong><span class='tooltip-box'><strong>Corect:</strong> limbajul structurează semnificații și susține operațiile gândirii.</span></span>",
            "<span class='tip'><strong>Exprimarea afectivă și relaționarea socială ca scop principal, fără rol în judecată și raționament</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie mai ales funcția comunicativă, nu funcția cognitivă.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce include <span class='tip'><strong>funcția reglatorie?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> limbajul ghidează acțiunea și activitatea, susține jocul, descărcarea și relaționarea.<br /><br /><strong>Exemplu:</strong> îți spui „acum fac asta” și îți controlezi pașii.</span></span>",
          options: [
            "<span class='tip'><strong>Calibrarea acțiunii mintale și a activității, funcția ludică, funcția cathartică și stabilirea relațiilor</strong><span class='tooltip-box'><strong>Corect:</strong> reglatorul include ghidarea activității și componentele ludic/cathartic/relational.</span></span>",
            "<span class='tip'><strong>Exclusiv control extern al comportamentului, fără autoreglare și fără rol în joc sau catharsis</strong><span class='tooltip-box'><strong>Distractor:</strong> funcția reglatorie include autoreglare și dimensiuni expresive, nu doar control extern.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t12d",
      title: "Tipuri de limbaj",
      questions: [
        {
          text: "Ce este <span class='tip'><strong>limbajul verbal?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> comunicare prin cuvinte, fie vorbite, fie scrise.<br /><br /><strong>Exemplu:</strong> o conversație sau un mesaj scris.</span></span>",
          options: [
            "<span class='tip'><strong>Comunicare prin cuvinte, vorbite sau scrise</strong><span class='tooltip-box'><strong>Corect:</strong> unitatea de bază este cuvântul, organizat în enunțuri.</span></span>",
            "<span class='tip'><strong>Comunicare doar prin gesturi și mimică, fără folosirea cuvintelor</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie limbajul nonverbal, nu pe cel verbal.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce include <span class='tip'><strong>limbajul nonverbal?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> comunicare fără cuvinte, prin expresii și mișcări ale corpului.<br /><br /><strong>Exemplu:</strong> mimică, postură, gesturi.</span></span>",
          options: [
            "<span class='tip'><strong>Gesturi, mimică și postură, care transmit informații fără cuvinte</strong><span class='tooltip-box'><strong>Corect:</strong> nonverbalul completează sau poate înlocui mesajul verbal în anumite contexte.</span></span>",
            "<span class='tip'><strong>Doar cuvinte scrise și reguli gramaticale, fără expresii faciale sau gesturi</strong><span class='tooltip-box'><strong>Distractor:</strong> asta ține de verbal, nu de nonverbal.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce este <span class='tip'><strong>limbajul paraverbal?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> felul în care spui cuvintele, nu cuvintele în sine.<br /><br /><strong>Exemplu:</strong> ton, volum, ritm, intonație.</span></span>",
          options: [
            "<span class='tip'><strong>Intonația, volumul și ritmul vocii care însoțesc vorbirea</strong><span class='tooltip-box'><strong>Corect:</strong> paraverbalul modifică semnificația și impactul aceluiași conținut verbal.</span></span>",
            "<span class='tip'><strong>Conținutul semantic al cuvintelor, adică sensul lor stabil din dicționar</strong><span class='tooltip-box'><strong>Distractor:</strong> sensul ține de semantică; paraverbalul ține de parametrii vocii.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t12e",
      title: "Limbajul intern – definire și funcții",
      questions: [
        {
          text: "Cum este definit <span class='tip'><strong>limbajul intern?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> vorbirea tăcută prin care îți organizezi gândurile și acțiunile.<br /><br /><strong>Exemplu:</strong> îți spui în minte pașii unei rezolvări.</span></span>",
          options: [
            "<span class='tip'><strong>Modalitate specifică existenței mintale a omului, ca formă concentrată și tăcută de vorbire</strong><span class='tooltip-box'><strong>Corect:</strong> limbajul intern este „în interior”, folosit pentru organizare, plan și control.</span></span>",
            "<span class='tip'><strong>O formă de vorbire în public, orientată spre ceilalți și evaluată social</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie limbajul extern, nu limbajul intern.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce funcție are <span class='tip'><strong>limbajul intern?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> te ajută să te controlezi și să-ți conduci acțiunile.<br /><br /><strong>Exemplu:</strong> îți spui „calm” și îți reglezi reacția.</span></span>",
          options: [
            "<span class='tip'><strong>Autoreglare a acțiunilor și comportamentului, prin ghidare și control conștient</strong><span class='tooltip-box'><strong>Corect:</strong> limbajul intern susține planificarea, monitorizarea și ajustarea conduitei.</span></span>",
            "<span class='tip'><strong>Imitație a vorbirii altora, fără rol de control și fără funcție de reglare a acțiunii</strong><span class='tooltip-box'><strong>Distractor:</strong> autoreglarea este una dintre funcțiile centrale ale limbajului intern.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum este caracterizat limbajul intern de <span class='tip'><strong>Vîgotski?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> e condensat și orientat spre sens, nu spre forma completă a propoziției.<br /><br /><strong>Exemplu:</strong> îți spui „gata, rezolv” fără să formulezi tot enunțul.</span></span>",
          options: [
            "<span class='tip'><strong>Este predicativ, ca vehicul de sens și semnificație, exprimând condensat o judecată sau relație</strong><span class='tooltip-box'><strong>Corect:</strong> în limbajul intern se comprimă forma, rămâne miezul semantic și relațional.</span></span>",
            "<span class='tip'><strong>Este un monolog extern orientat spre ceilalți, cu propoziții complete și explicite</strong><span class='tooltip-box'><strong>Distractor:</strong> limbajul intern nu este orientat spre interlocutor și nu urmărește forma completă.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t12f",
      title: "Limbajul intern – perspectiva lui Vîgotski",
      questions: [
        {
          text: "Cum apare <span class='tip'><strong>limbajul intern?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se formează din vorbirea cu voce tare, care se internalizează treptat.<br /><br /><strong>Exemplu:</strong> ce spuneai cu voce tare ajungi să-ți spui „în minte”.</span></span>",
          options: [
            "<span class='tip'><strong>Se formează prin transformarea limbajului cu voce tare, prin internalizare progresivă</strong><span class='tooltip-box'><strong>Corect:</strong> Vîgotski descrie trecerea de la vorbirea externă la organizarea internă a gândirii.</span></span>",
            "<span class='tip'><strong>Se dezvoltă spontan doar în adolescență, fără legătură cu vorbirea externă și fără internalizare</strong><span class='tooltip-box'><strong>Distractor:</strong> teoria pune accent pe internalizarea vorbirii cu voce tare, nu pe apariție bruscă târzie.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce rol are <span class='tip'><strong>limbajul intern</strong><span class='tooltip-box'><strong>Spus simplu:</strong> face legătura între ce înveți social și cum gândești individual.</span></span> în <span class='tip'><strong>învățarea condiționată socio-cultural?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> înveți prin interacțiuni, norme și limbaj, apoi transformi asta în instrument intern de gândire.<br /><br /><strong>Exemplu:</strong> reguli primite de la alții devin reguli „ale tale”.</span></span>",
          options: [
            "<span class='tip'><strong>Mediază învățarea condiționată socio-cultural, transformând ghidajul extern în autoreglare internă</strong><span class='tooltip-box'><strong>Corect:</strong> ceea ce este inițial interpsihic (între oameni) devine intrapsihic (în interior).</span></span>",
            "<span class='tip'><strong>Împiedică asimilarea, blocând trecerea de la interacțiune socială la gândire individuală</strong><span class='tooltip-box'><strong>Distractor:</strong> la Vîgotski, limbajul intern facilitează, nu blochează, internalizarea.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce produce conștientizarea proceselor psihice prin <span class='tip'><strong>limbajul intern?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți poți observa și regla propriile procese mentale.<br /><br /><strong>Exemplu:</strong> îți dai seama că te-ai grăbit și îți corectezi strategia.</span></span>",
          options: [
            "<span class='tip'><strong>Control și autocontrol, prin monitorizare și reglare conștientă a conduitei</strong><span class='tooltip-box'><strong>Corect:</strong> conștientizarea devine instrument de autoreglare.</span></span>",
            "<span class='tip'><strong>Confuzie și pierderea controlului, prin amplificarea aleatorie a proceselor psihice</strong><span class='tooltip-box'><strong>Distractor:</strong> efectul descris în curs este de organizare și control, nu de confuzie.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t12g",
      title: "Vîgotski – dezvoltarea vorbirii la copii",
      questions: [
        {
          text: "Ce este <span class='tip'><strong>Egocentric Speech?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> copilul vorbește cu voce tare pentru sine, fără să urmărească un interlocutor.<br /><br /><strong>Exemplu:</strong> „acum pun piesa aici” în timp ce se joacă.</span></span>",
          options: [
            "<span class='tip'><strong>Vorbire cu voce tare pentru sine, fără orientare către ceilalți</strong><span class='tooltip-box'><strong>Corect:</strong> este vorbire externă ca formă de ghidare a propriei acțiuni.</span></span>",
            "<span class='tip'><strong>Vorbire internă tăcută, fără sunet, folosită exclusiv pentru gândirea din minte</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie inner speech, nu egocentric speech.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce marchează <span class='tip'><strong>awareness of others?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> copilul începe să țină cont că ceilalți sunt receptori ai mesajului.<br /><br /><strong>Exemplu:</strong> ajustează ce spune ca să fie înțeles.</span></span>",
          options: [
            "<span class='tip'><strong>Trecerea către vorbire orientată spre ceilalți, cu intenție de comunicare reală</strong><span class='tooltip-box'><strong>Corect:</strong> apare adresarea și adaptarea mesajului la interlocutor.</span></span>",
            "<span class='tip'><strong>Izolare socială și pierderea interesului pentru comunicare, cu reducerea interacțiunilor</strong><span class='tooltip-box'><strong>Distractor:</strong> conștientizarea celorlalți crește comunicarea, nu o reduce.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum se caracterizează <span class='tip'><strong>social speech?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> vorbirea devine dialog și comunicare către ceilalți.<br /><br /><strong>Exemplu:</strong> cere, răspunde, negociază, explică.</span></span>",
          options: [
            "<span class='tip'><strong>Vorbire interactivă și reală, adresată altora, cu funcție de comunicare</strong><span class='tooltip-box'><strong>Corect:</strong> se construiește prin schimb social și ajustare la context.</span></span>",
            "<span class='tip'><strong>Vorbire doar cu sine, fără interlocutor, folosită exclusiv ca ghidaj al acțiunii personale</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai degrabă egocentric speech, nu social speech.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce este <span class='tip'><strong>inner speech?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> vorbirea devine internă și silențioasă, ca suport al gândirii.<br /><br /><strong>Exemplu:</strong> „gândesc cu cuvinte” fără să le spun.</span></span>",
          options: [
            "<span class='tip'><strong>Gândire exprimată intern, fără sunet, folosită pentru planificare și autocontrol</strong><span class='tooltip-box'><strong>Corect:</strong> este forma internalizată, condensată și orientată spre sens.</span></span>",
            "<span class='tip'><strong>Vorbit în șoaptă către ceilalți, ca variantă discretă de social speech în situații publice</strong><span class='tooltip-box'><strong>Distractor:</strong> inner speech este intern și tăcut, nu o șoaptă adresată altora.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care este ordinea corectă a dezvoltării vorbirii la copil, conform lui <span class='tip'><strong>Vîgotski?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> de la vorbire pentru sine, la vorbire către ceilalți, apoi la vorbire în minte.<br /><br /><strong>Exemplu:</strong> întâi verbalizează acțiuni, apoi comunică social, apoi internalizează.</span></span>",
          shuffle: false,
          options: [
            "<span class='tip'><strong>Egocentric speech → Social speech → Inner speech</strong><span class='tooltip-box'><strong>Corect:</strong> vorbirea externă pentru sine se socializează, apoi se internalizează ca limbaj intern.</span></span>",
            "<span class='tip'><strong>Inner speech → Egocentric speech → Social speech</strong><span class='tooltip-box'><strong>Distractor:</strong> inversează internalizarea; inner speech apare ca rezultat, nu ca început al dezvoltării.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    //CURS 13

    {
      id: "fph-t13a",
      title: "Ce este personalitatea?",
      questions: [
        {
          text: "Cum definește Popescu-Neveanu (1978) <span class='tip'><strong>personalitatea?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ceea ce rămâne relativ stabil și definitoriu la o persoană și se vede în felul ei de a acționa.<br /><br /><strong>Exemplu:</strong> tiparele constante de reacție, valori și mod de funcționare.</span></span>",
          options: [
            "<span class='tip'><strong>Macrosistem de invarianți informaționali și operaționali exprimați în conduită</strong><span class='tooltip-box'><strong>Corect:</strong> personalitatea este un sistem integrat de elemente stabile (conținuturi + moduri de operare) care se exprimă în comportament.</span></span>",
            "<span class='tip'><strong>Ansamblu de trăsături temporare și instabile, dependente strict de situație</strong><span class='tooltip-box'><strong>Distractor:</strong> definiția accentuează tocmai caracterul stabil, definitoriu și operațional al trăsăturilor.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce caracteristici are personalitatea conform acestei definiții?",
          options: [
            "<span class='tip'><strong>Reunește trăsături definitorii și constante pentru subiect, vizibile stabil în conduită</strong><span class='tooltip-box'><strong>Corect:</strong> accentul este pe invariabilitate relativă și exprimare constantă în comportament.</span></span>",
            "<span class='tip'><strong>Este aleatorie și schimbătoare, fără elemente stabile care să se repete în conduită</strong><span class='tooltip-box'><strong>Distractor:</strong> ar contrazice ideea de „invarianți” și de exprimare stabilă în conduită.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t13b",
      title: "Teoria trăsăturilor de personalitate – Gordon Allport",
      questions: [
        {
          text: "Cum definește Allport <span class='tip'><strong>trăsăturile de personalitate?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> predispoziții relativ stabile de a reacționa într-un anumit fel.<br /><br /><strong>Exemplu:</strong> o persoană consecvent „sociabilă” în contexte diferite.</span></span>",
          options: [
            "<span class='tip'><strong>Predispoziții relativ stabile de răspuns comportamental în situații variate</strong><span class='tooltip-box'><strong>Corect:</strong> trăsătura este o tendință constantă de reacție, nu o reacție izolată.</span></span>",
            "<span class='tip'><strong>Tipare instabile, care apar întâmplător și dispar odată cu schimbarea contextului</strong><span class='tooltip-box'><strong>Distractor:</strong> Allport subliniază tocmai caracterul relativ stabil și repetitiv al reacțiilor.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce afirmă Allport despre <span class='tip'><strong>configurația trăsăturilor?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> fiecare om are o combinație proprie de trăsături, care îl face unic.<br /><br /><strong>Exemplu:</strong> doi oameni pot fi ambii „conștiincioși”, dar în combinații diferite cu alte trăsături.</span></span>",
          options: [
            "<span class='tip'><strong>Trăsăturile se combină într-o configurație unică pentru fiecare individ</strong><span class='tooltip-box'><strong>Corect:</strong> personalitatea rezultă dintr-un tipar individual de trăsături.</span></span>",
            "<span class='tip'><strong>Trăsăturile sunt identice pentru toți și dau același profil, indiferent de persoană</strong><span class='tooltip-box'><strong>Distractor:</strong> contrazice ideea de configurație individuală și de diferențiere între persoane.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care sunt cele trei niveluri ierarhice ale trăsăturilor în modelul lui Allport?",
          options: [
            "<span class='tip'><strong>Cardinale, centrale, secundare</strong><span class='tooltip-box'><strong>Corect:</strong> acestea sunt cele trei niveluri: de la dominant (cardinal) la mai contextual (secundar).</span></span>",
            "<span class='tip'><strong>Primare, secundare, ocazionale</strong><span class='tooltip-box'><strong>Distractor:</strong> nu este triada lui Allport; include termeni care nu apar în ierarhia sa clasică.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce sunt <span class='tip'><strong>trăsăturile cardinale?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trăsături dominante care colorează aproape tot comportamentul.<br /><br /><strong>Exemplu:</strong> „altruismul” ca trăsătură care se vede în foarte multe situații.</span></span>",
          options: [
            "<span class='tip'><strong>Trăsături dominante și pervazive, definitorii, care particularizează puternic un individ</strong><span class='tooltip-box'><strong>Corect:</strong> sunt rare și au impact global asupra conduitei.</span></span>",
            "<span class='tip'><strong>Trăsături frecvente la toți oamenii, cu efect minim și fără rol definitoriu în conduită</strong><span class='tooltip-box'><strong>Distractor:</strong> trăsăturile cardinale nu sunt universale și nici „slabe” ca influență.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce exprimă <span class='tip'><strong>ipoteza lexicală?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce e important despre personalitate ajunge să fie numit în limbaj.<br /><br /><strong>Exemplu:</strong> termeni ca „onest”, „ambițios”, „introvertit”.</span></span>",
          options: [
            "<span class='tip'><strong>Trăsăturile considerate importante sunt codificate în limbajul comun prin termeni relativ stabili</strong><span class='tooltip-box'><strong>Corect:</strong> limbajul păstrează etichete pentru trăsături relevante social.</span></span>",
            "<span class='tip'><strong>Termenii de personalitate dispar din vocabular, fiind înlocuiți de descrieri întâmplătoare</strong><span class='tooltip-box'><strong>Distractor:</strong> ipoteza lexicală afirmă fix opusul: persistența termenilor relevanți.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t13c",
      title: "Cattell – Cei 16 factori ai personalității",
      questions: [
        {
          text: "Ce reprezintă cei 16 factori de personalitate în teoria lui Raymond Cattell?",
          options: [
            "<span class='tip'><strong>Factori stabili care descriu trăsături și permit predicția comportamentului</strong><span class='tooltip-box'><strong>Corect:</strong> factorii sintetizează tipare recurente și ajută la anticiparea conduitei.</span></span>",
            "<span class='tip'><strong>Stări emoționale trecătoare care apar la întâmplare și nu se repetă în timp</strong><span class='tooltip-box'><strong>Distractor:</strong> Cattell vizează factori relativ stabili, nu dispoziții momentane.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care este scopul <span class='tip'><strong>analizei factoriale?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> reduce multe trăsături la câțiva factori esențiali.<br /><br /><strong>Exemplu:</strong> găsește „grupări” de comportamente care apar împreună.</span></span>",
          options: [
            "<span class='tip'><strong>Reducerea unui număr mare de trăsături la un set de factori esențiali</strong><span class='tooltip-box'><strong>Corect:</strong> metoda identifică structuri latente (factori) din date.</span></span>",
            "<span class='tip'><strong>Măsurarea directă a performanțelor școlare pentru a prezice notele la examene</strong><span class='tooltip-box'><strong>Distractor:</strong> analiza factorială nu este un test de note, ci o metodă de structurare a variabilelor.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum pot fi interpretate scorurile ridicate sau scăzute pe un factor în modelul lui Cattell?",
          options: [
            "<span class='tip'><strong>Arată predispoziții relativ stabile, fiecare factor având o polaritate între două extreme</strong><span class='tooltip-box'><strong>Corect:</strong> scorul indică poziționarea între doi poli comportamentali.</span></span>",
            "<span class='tip'><strong>Indică automat psihopatologie la scor înalt și sănătate mintală la scor scăzut</strong><span class='tooltip-box'><strong>Distractor:</strong> scorurile sunt descriptive (poli), nu etichete clinice automate.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce semnificație are un scor <strong>ridicat</strong> la <span class='tip'><strong>Warmth</strong><span class='tooltip-box'><strong>Spus simplu:</strong> căldură emoțională: afectuos, suportiv, prietenos.<br /><br /><strong>Exemplu:</strong> îi face pe ceilalți să se simtă confortabil.</span></span>?",
          options: [
            "<span class='tip'><strong>Sprijin emoțional, apropiere și confort oferit celorlalți</strong><span class='tooltip-box'><strong>Corect:</strong> scor mare sugerează afectivitate și disponibilitate relațională.</span></span>",
            "<span class='tip'><strong>Retragere emoțională și distanță, cu răspuns afectiv redus în relații</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta ar descrie mai degrabă polul opus al „warmth”.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Dacă o persoană are un scor <strong>scăzut</strong> la <span class='tip'><strong>Emotional Stability</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stabilitate emoțională: capacitatea de a rămâne echilibrat sub stres.</span></span>, ce comportamente pot fi observate?",
          options: [
            "<span class='tip'><strong>Iritabilitate, reactivitate crescută și schimbări frecvente de dispoziție</strong><span class='tooltip-box'><strong>Corect:</strong> scor mic sugerează vulnerabilitate la stres și instabilitate afectivă.</span></span>",
            "<span class='tip'><strong>Calm constant, reziliență ridicată și control emoțional stabil în situații tensionate</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie polul de stabilitate înaltă, nu scorul scăzut.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce indică un scor <strong>înalt</strong> la <span class='tip'><strong>Abstractness</strong><span class='tooltip-box'><strong>Spus simplu:</strong> gândire simbolică și orientare spre idei.<br /><br /><strong>Exemplu:</strong> preferă concepte, metafore, posibilități.</span></span>?",
          options: [
            "<span class='tip'><strong>Imaginație, creativitate și preferință pentru gândire abstractă/neconvențională</strong><span class='tooltip-box'><strong>Corect:</strong> scor mare indică orientare spre idei și simboluri.</span></span>",
            "<span class='tip'><strong>Pragmatism strict și orientare aproape exclusivă spre concretul imediat și practic</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai degrabă polul opus al abstractizării.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t13d",
      title: "Teoria psihosocială a lui Erik Erikson",
      questions: [
        {
          text: "Cum explică <span class='tip'><strong>Erikson</strong><span class='tooltip-box'><strong>Spus simplu:</strong> personalitatea se dezvoltă prin „crize” rezolvate treptat, de-a lungul vieții.</span></span> dezvoltarea personalității?",
          options: [
            "<span class='tip'><strong>Prin parcurgerea a 8 stadii, fiecare definit de un conflict psihosocial specific</strong><span class='tooltip-box'><strong>Corect:</strong> rezolvarea conflictului influențează formarea personalității.</span></span>",
            "<span class='tip'><strong>Prin acumularea automată a trăsăturilor genetice, fără rolul conflictelor și al mediului</strong><span class='tooltip-box'><strong>Distractor:</strong> Erikson pune accent pe interacțiunea dintre individ și context social.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce presupune un <span class='tip'><strong>stadiu psihosocial?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> o etapă cu o tensiune între două tendințe (ex.: încredere vs. neîncredere).</span></span>",
          options: [
            "<span class='tip'><strong>O criză esențială care trebuie rezolvată pentru o dezvoltare sănătoasă</strong><span class='tooltip-box'><strong>Corect:</strong> modul de rezolvare lasă „achiziții” psihosociale durabile.</span></span>",
            "<span class='tip'><strong>Un moment fără efecte majore, care nu influențează formarea identității și a personalității</strong><span class='tooltip-box'><strong>Distractor:</strong> la Erikson, efectele sunt semnificative și cumulative.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "În copilărie, primele trei stadii psihosociale se concentrează pe:",
          options: [
            "<span class='tip'><strong>Formarea atașamentului și a autonomiei în raport cu părinții/îngrijitorii</strong><span class='tooltip-box'><strong>Corect:</strong> accent pe încredere, autonomie și inițiativă în cadrul relațiilor primare.</span></span>",
            "<span class='tip'><strong>Separarea completă de influența familiei și independență totală față de îngrijitori</strong><span class='tooltip-box'><strong>Distractor:</strong> în copilărie, relația cu părinții este centrală, nu eliminată.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care este conflictul specific adolescenței în teoria lui Erikson?",
          options: [
            "<span class='tip'><strong>Identitate vs. confuzie de rol</strong><span class='tooltip-box'><strong>Corect:</strong> adolescentul își clarifică direcția, valorile și rolurile; altfel apare confuzia.</span></span>",
            "<span class='tip'><strong>Încredere vs. neîncredere</strong><span class='tooltip-box'><strong>Distractor:</strong> acesta este conflictul caracteristic stadiului timpuriu (începutul vieții).</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce presupune <span class='tip'><strong>unitatea identității?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un „eu” coerent, care leagă trecutul, prezentul și viitorul.</span></span>",
          options: [
            "<span class='tip'><strong>Sentimentul unei identități clare și coerente, care ghidează decizii, relații și continuitatea sinelui</strong><span class='tooltip-box'><strong>Corect:</strong> este un sentiment stabil de cine ești și încotro mergi.</span></span>",
            "<span class='tip'><strong>Adaptarea exclusivă la așteptările celorlalți, fără asumare personală și fără coerență internă</strong><span class='tooltip-box'><strong>Distractor:</strong> ar descrie mai degrabă conformism fără identitate asumată.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care este focusul etapelor adulte din teoria lui Erikson (18+ ani)?",
          options: [
            "<span class='tip'><strong>Construcția de relații afective și contribuția la binele generațiilor următoare</strong><span class='tooltip-box'><strong>Corect:</strong> intimitate și generativitate devin teme centrale ale vârstei adulte.</span></span>",
            "<span class='tip'><strong>Izolarea față de comunitate și reducerea constantă a legăturilor sociale</strong><span class='tooltip-box'><strong>Distractor:</strong> izolarea este riscul unui conflict, nu obiectivul dezvoltării sănătoase.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce înseamnă <span class='tip'><strong>generativitatea?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> grija de a crea și a lăsa ceva valoros mai departe (copii, muncă, comunitate).</span></span>",
          options: [
            "<span class='tip'><strong>A produce, a crea și a transmite valori, cunoștințe și grijă către ceilalți/generațiile următoare</strong><span class='tooltip-box'><strong>Corect:</strong> implică responsabilitate, contribuție și susținere a dezvoltării altora.</span></span>",
            "<span class='tip'><strong>A evita responsabilitățile și a rămâne centrat pe sine pentru a reduce orice efort social</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta ar descrie stagnarea, nu generativitatea.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum se numește conflictul central în ultima etapă a vieții (55+ ani), potrivit lui Erikson?",
          options: [
            "<span class='tip'><strong>Integritate a Eului vs. Deznădejde</strong><span class='tooltip-box'><strong>Corect:</strong> evaluarea vieții: sens și acceptare vs. regret și disperare.</span></span>",
            "<span class='tip'><strong>Inițiativă vs. vinovăție</strong><span class='tooltip-box'><strong>Distractor:</strong> este specific copilăriei timpurii, nu vârstei înaintate.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum contribuie <span class='tip'><strong>rezolvarea cu succes a stadiilor psihosociale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> fiecare conflict depășit întărește „construcția” personalității.</span></span> la dezvoltarea personalității?",
          options: [
            "<span class='tip'><strong>Consolidează o identitate solidă și susține o adaptare sănătoasă la cerințele vieții</strong><span class='tooltip-box'><strong>Corect:</strong> achizițiile pozitive se cumulează și întăresc funcționarea psihosocială.</span></span>",
            "<span class='tip'><strong>Reduce complet conflictele interioare, eliminând definitiv orice tensiune psihică ulterioară</strong><span class='tooltip-box'><strong>Distractor:</strong> dezvoltarea rămâne dinamică; conflictele nu dispar „definitiv”.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t13e",
      title: "Modelul Big Five – Cele cinci dimensiuni ale personalității",
      questions: [
        {
          text: "Ce propune <span class='tip'><strong>modelul Big Five?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> 5 dimensiuni mari, stabile, care descriu diferențe de personalitate.</span></span>",
          options: [
            "<span class='tip'><strong>Cinci dimensiuni fundamentale ale personalității</strong><span class='tooltip-box'><strong>Corect:</strong> un model factorial al trăsăturilor stabile.</span></span>",
            "<span class='tip'><strong>Un set de etape de dezvoltare psihosocială, organizate ca stadii de viață</strong><span class='tooltip-box'><strong>Distractor:</strong> asta descrie mai degrabă teoria lui Erikson, nu Big Five.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care dintre următoarele este o dimensiune din modelul Big Five?",
          options: [
            "<span class='tip'><strong>Deschidere către experiență</strong><span class='tooltip-box'><strong>Corect:</strong> curiozitate, imaginație, gust pentru noutate și complexitate.</span></span>",
            "<span class='tip'><strong>Autonomie vs. rușine</strong><span class='tooltip-box'><strong>Distractor:</strong> este un conflict din teoria lui Erikson, nu o dimensiune Big Five.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Selectează toate dimensiunile care fac parte din <span class='tip'><strong>modelul Big Five.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cele 5 „axe” mari ale trăsăturilor de personalitate.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Conștiinciozitate</strong><span class='tooltip-box'><strong>Corect:</strong> organizare, responsabilitate, autodisciplină.</span></span>",
            "<span class='tip'><strong>Extraversie</strong><span class='tooltip-box'><strong>Corect:</strong> energie socială, sociabilitate, activitate.</span></span>",
            "<span class='tip'><strong>Neuroticism</strong><span class='tooltip-box'><strong>Corect:</strong> reactivitate afectivă, vulnerabilitate la stres.</span></span>",
            "<span class='tip'><strong>Deschidere către experiență</strong><span class='tooltip-box'><strong>Corect:</strong> curiozitate, creativitate, preferință pentru noutate.</span></span>",
            "<span class='tip'><strong>Agreabilitate</strong><span class='tooltip-box'><strong>Corect:</strong> empatie, cooperare, toleranță.</span></span>",
            "<span class='tip'><strong>Dominanță</strong><span class='tooltip-box'><strong>Distractor:</strong> poate descrie stiluri sociale, dar nu este una dintre cele 5 dimensiuni standard.</span></span>",
          ],
          answer: [0, 1, 2, 3, 4],
        },

        {
          text: "Cum se manifestă o persoană cu scor ridicat la <span class='tip'><strong>Deschidere către experiență?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îi plac ideile noi și explorarea intelectuală/artistică.</span></span>",
          options: [
            "<span class='tip'><strong>Este curioasă, creativă și deschisă la concepte abstracte și perspective noi</strong><span class='tooltip-box'><strong>Corect:</strong> scor mare sugerează explorare și flexibilitate mentală.</span></span>",
            "<span class='tip'><strong>Preferă rutina, evită ideile noi și respinge constant noutatea conceptuală sau artistică</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai degrabă scor scăzut la deschidere.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce comportamente reflectă un nivel ridicat de <span class='tip'><strong>Conștiinciozitate?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ordine, perseverență, respectarea angajamentelor.</span></span>",
          options: [
            "<span class='tip'><strong>Este responsabilă, planificată și își respectă angajamentele în mod consecvent</strong><span class='tooltip-box'><strong>Corect:</strong> scor mare indică autocontrol și orientare spre obiective.</span></span>",
            "<span class='tip'><strong>Acționează impulsiv, evită planificarea și își schimbă ușor prioritățile fără finalizare</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai degrabă conștiinciozitate scăzută.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum se manifestă o persoană cu un nivel înalt de <span class='tip'><strong>Agreabilitate?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cooperare, empatie, disponibilitate de ajutor.</span></span>",
          options: [
            "<span class='tip'><strong>Este cooperantă, empatică și dornică să ajute, menținând relații armonioase</strong><span class='tooltip-box'><strong>Corect:</strong> scor mare indică orientare prosocială.</span></span>",
            "<span class='tip'><strong>Este suspicioasă și conflictuală, impunându-și frecvent punctul de vedere fără compromis</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai degrabă agreabilitate scăzută.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum se comportă o persoană <span class='tip'><strong>extraversă?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> caută interacțiuni și se energizează social.</span></span>",
          options: [
            "<span class='tip'><strong>Este activă, entuziastă și energizată de prezența celorlalți, căutând interacțiuni</strong><span class='tooltip-box'><strong>Corect:</strong> extraversia implică activare socială și expresivitate.</span></span>",
            "<span class='tip'><strong>Evita grupurile, preferă singurătatea și se simte epuizată constant de interacțiuni sociale</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai degrabă introversie (polul opus).</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce reflectă un scor ridicat de <span class='tip'><strong>Neuroticism?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> reactivitate emoțională și vulnerabilitate la stres.</span></span>",
          options: [
            "<span class='tip'><strong>Tendință spre îngrijorare, iritabilitate și instabilitate emoțională în situații stresante</strong><span class='tooltip-box'><strong>Corect:</strong> scor mare indică sensibilitate afectivă crescută.</span></span>",
            "<span class='tip'><strong>Stabilitate emoțională și calm constant, cu toleranță ridicată la stres și frustrare</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie polul opus (neuroticism scăzut).</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ana este organizată, planifică totul în avans, își respectă termenele și nu uită niciodată un detaliu. Ce dimensiune reflectă acest comportament?",
          options: [
            "<span class='tip'><strong>Conștiinciozitate</strong><span class='tooltip-box'><strong>Corect:</strong> planificare, responsabilitate, atenție la detalii.</span></span>",
            "<span class='tip'><strong>Extraversie</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie energie socială, nu organizare și autodisciplină.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t13f",
      title: "Modelul HEXACO – O abordare extinsă a trăsăturilor",
      questions: [
        {
          text: "Ce adaugă <span class='tip'><strong>modelul HEXACO</strong><span class='tooltip-box'><strong>Spus simplu:</strong> extinde Big Five cu o dimensiune etică distinctă.</span></span> față de modelul Big Five?",
          options: [
            "<span class='tip'><strong>O dimensiune suplimentară numită onestitate-umilință</strong><span class='tooltip-box'><strong>Corect:</strong> surprinde tendințe precum sinceritatea, modestia și evitarea manipulării.</span></span>",
            "<span class='tip'><strong>Eliminarea dimensiunii de extraversie și înlocuirea ei cu inteligența generală</strong><span class='tooltip-box'><strong>Distractor:</strong> HEXACO nu elimină extraversia și nu introduce „inteligența” ca dimensiune.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Selectează toate cele 6 dimensiuni ale <span class='tip'><strong>modelului HEXACO.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> H, E, X, A, C, O.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Extraversie</strong><span class='tooltip-box'><strong>Corect:</strong> energie și sociabilitate.</span></span>",
            "<span class='tip'><strong>Conștiinciozitate</strong><span class='tooltip-box'><strong>Corect:</strong> organizare și autocontrol.</span></span>",
            "<span class='tip'><strong>Onestitate-umilință</strong><span class='tooltip-box'><strong>Corect:</strong> sinceritate, modestie, lipsă de manipulare.</span></span>",
            "<span class='tip'><strong>Inteligență</strong><span class='tooltip-box'><strong>Distractor:</strong> nu este una dintre dimensiunile HEXACO.</span></span>",
            "<span class='tip'><strong>Agreabilitate</strong><span class='tooltip-box'><strong>Corect:</strong> cooperare, iertare, toleranță.</span></span>",
            "<span class='tip'><strong>Neuroticism</strong><span class='tooltip-box'><strong>Distractor:</strong> în HEXACO apare dimensiunea „Emoționalitate”, nu „Neuroticism”.</span></span>",
            "<span class='tip'><strong>Deschidere către experiență</strong><span class='tooltip-box'><strong>Corect:</strong> curiozitate, imaginație.</span></span>",
            "<span class='tip'><strong>Emoționalitate</strong><span class='tooltip-box'><strong>Corect:</strong> sensibilitate emoțională și atașament (echivalent parțial cu neuroticismul).</span></span>",
          ],
          answer: [0, 1, 2, 4, 6, 7],
        },
      ],
    },

    {
      id: "fph-t13g",
      title: "Personalitatea – abordare structural-sistemică",
      questions: [
        {
          text: "Care sunt componentele principale ale <span class='tip'><strong>personalității într-o viziune structural-sistemică?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un model care combină structuri (relativ stabile) și procese (operaționale) ale personalității.</span></span>",
          options: [
            "<span class='tip'><strong>Temperament, aptitudini, caracter, sisteme operaționale și aspecte dinamico-energetice</strong><span class='tooltip-box'><strong>Corect:</strong> viziunea integrează latura energetică, instrumentală și valoric-relațională, plus procesele care le pun în funcțiune.</span></span>",
            "<span class='tip'><strong>Memoria de lucru și stilurile de învățare, ca singure componente definitorii ale personalității</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea sunt funcții/procese cognitive, nu structura personalității în acest model.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce reprezintă <span class='tip'><strong>temperamentul</strong><span class='tooltip-box'><strong>Spus simplu:</strong> baza înnăscută legată de energie, ritm și reactivitate.</span></span> în această abordare?",
          options: [
            "<span class='tip'><strong>Latura dinamico-energetică a personalității, cu bază înnăscută</strong><span class='tooltip-box'><strong>Corect:</strong> indică intensitatea și dinamica reacțiilor.</span></span>",
            "<span class='tip'><strong>Set de valori și reguli morale interiorizate prin educație și enculturație</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta descrie mai degrabă caracterul, nu temperamentul.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum se definesc <span class='tip'><strong>aptitudinile</strong><span class='tooltip-box'><strong>Spus simplu:</strong> capacități care susțin performanța într-o activitate.</span></span> în modelul structural-sistemic?",
          options: [
            "<span class='tip'><strong>Capacități potențiale de performanță într-o gamă largă sau specifică de activități</strong><span class='tooltip-box'><strong>Corect:</strong> sunt resurse instrumentale care permit eficiență și performanță.</span></span>",
            "<span class='tip'><strong>Reacții emoționale pasagere, dependente strict de dispoziția de moment a individului</strong><span class='tooltip-box'><strong>Distractor:</strong> aptitudinile nu sunt stări afective, ci capacități relativ stabile.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce reflectă <span class='tip'><strong>caracterul?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> felul în care te raportezi la valori, reguli și oameni.</span></span>",
          options: [
            "<span class='tip'><strong>Modul de raportare la valori, reguli și relații umane, construit prin învățare și socializare</strong><span class='tooltip-box'><strong>Corect:</strong> caracterul este latura valoric-relațională a personalității.</span></span>",
            "<span class='tip'><strong>Viteza de reacție și nivelul de energie nervoasă, determinate exclusiv de procesele biologice</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta descrie mai degrabă temperamentul, nu caracterul.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce sunt <span class='tip'><strong>aspectele atitudinal-valorice?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> orientări stabile către valori și sensuri.</span></span>",
          options: [
            "<span class='tip'><strong>Orientări relativ stabile ale individului față de valori, norme și sensuri existențiale</strong><span class='tooltip-box'><strong>Corect:</strong> exprimă ce consideră important și cum se raportează la lume.</span></span>",
            "<span class='tip'><strong>Reacții reflexe și automatizări motorii, fără componentă de sens și fără încărcătură valorică</strong><span class='tooltip-box'><strong>Distractor:</strong> reflexele nu sunt atitudini valorice și nu exprimă orientări stabile.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "La ce se referă <span class='tip'><strong>sistemele operaționale?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> procese precum atenția, gândirea, voința, memoria, care „pun în lucru” resursele.</span></span>",
          options: [
            "<span class='tip'><strong>Procese cognitive/psihice care susțin aplicarea aptitudinilor și organizarea activității</strong><span class='tooltip-box'><strong>Corect:</strong> sunt mecanismele prin care performanța devine posibilă în practică.</span></span>",
            "<span class='tip'><strong>Structuri sociale exterioare individului, precum instituții și reguli publice, fără rol psihic</strong><span class='tooltip-box'><strong>Distractor:</strong> aici vorbim de procese interne ale funcționării psihice.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t13h",
      title: "Temperamentul – definiție și caracteristici",
      questions: [
        {
          text: "Ce reprezintă <span class='tip'><strong>temperamentul?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dinamica reacțiilor: intensitate, ritm, echilibru.</span></span>",
          options: [
            "<span class='tip'><strong>Latura dinamico-energetică a personalității (intensitate, ritm, reactivitate)</strong><span class='tooltip-box'><strong>Corect:</strong> descrie „cum” reacționezi, nu „ce valori” ai.</span></span>",
            "<span class='tip'><strong>Latura relațional-valorică a personalității (valori, norme, principii morale)</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta este definitorie pentru caracter, nu pentru temperament.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "La ce se referă <span class='tip'><strong>activitatea nervoasă superioară (ANS)?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> parametrii funcționării nervoase care susțin reacții psihice complexe.</span></span>",
          options: [
            "<span class='tip'><strong>La forța, mobilitatea și echilibrul proceselor nervoase care susțin reacțiile psihice</strong><span class='tooltip-box'><strong>Corect:</strong> acești parametri sunt folosiți în explicarea diferențelor temperamentale.</span></span>",
            "<span class='tip'><strong>La trăsături sociale educate, precum politețea, normele culturale și stilul de comunicare</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea țin de socializare și caracter, nu de parametri neurofuncționali.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce înseamnă <span class='tip'><strong>energia/forța</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât de mult poate „duce” sistemul nervos o activitate intensă.</span></span> în contextul ANS?",
          options: [
            "<span class='tip'><strong>Capacitatea funcțională a neuronilor de a susține activitate intensă și solicitantă</strong><span class='tooltip-box'><strong>Corect:</strong> se leagă de rezistență și intensitatea reacțiilor.</span></span>",
            "<span class='tip'><strong>Nivelul de creativitate artistică și preferința pentru idei abstracte, fără bază fiziologică</strong><span class='tooltip-box'><strong>Distractor:</strong> creativitatea nu este definiția „forței” în ANS.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce desemnează <span class='tip'><strong>mobilitatea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât de repede te adaptezi și schimbi reacția.</span></span> în temperament?",
          options: [
            "<span class='tip'><strong>Rapiditatea de adaptare emoțională și comportamentală (trecerea ușoară între stări)</strong><span class='tooltip-box'><strong>Corect:</strong> mobilitatea reflectă flexibilitatea funcțională.</span></span>",
            "<span class='tip'><strong>Tendința de a fi introvertit și de a evita interacțiunile sociale în mod constant</strong><span class='tooltip-box'><strong>Distractor:</strong> introversia ține de stil social, nu definește mobilitatea neurofuncțională.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce reprezintă <span class='tip'><strong>echilibrul?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> raportul dintre impuls și control (excitație vs. inhibiție).</span></span>",
          options: [
            "<span class='tip'><strong>Distribuția echilibrată între excitație și inhibiție, legată de stabilitate și autocontrol</strong><span class='tooltip-box'><strong>Corect:</strong> echilibrul susține controlul reacțiilor și stabilitatea afectivă.</span></span>",
            "<span class='tip'><strong>Nivelul de extraversie și dorința de a fi în centrul atenției în contexte sociale</strong><span class='tooltip-box'><strong>Distractor:</strong> extraversia nu este definiția echilibrului excitație–inhibiție.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t13i",
      title: "Tipuri temperamentale – modelul Eysenck",
      questions: [
        {
          text: "Ce indică <span class='tip'><strong>axele E și N?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> E = extraversie, N = neuroticism (stabilitate/instabilitate emoțională).</span></span>",
          options: [
            "<span class='tip'><strong>Poziționarea între introversie/extraversie și stabilitate/instabilitate emoțională</strong><span class='tooltip-box'><strong>Corect:</strong> combinarea celor două axe generează tipuri temperamentale.</span></span>",
            "<span class='tip'><strong>Nivelul de inteligență și creativitate, ca factori principali ai temperamentului</strong><span class='tooltip-box'><strong>Distractor:</strong> acestea nu sunt axele modelului Eysenck.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care combinație descrie <span class='tip'><strong>temperamentul coleric?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> extravertit + instabil emoțional.</span></span>",
          options: [
            "<span class='tip'><strong>Extravertire și instabilitate emoțională</strong><span class='tooltip-box'><strong>Corect:</strong> activ, energic, dar și iritabil/impulsiv.</span></span>",
            "<span class='tip'><strong>Introversie și stabilitate emoțională</strong><span class='tooltip-box'><strong>Distractor:</strong> aceasta corespunde mai degrabă flegmaticului.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum poate fi caracterizat <span class='tip'><strong>temperamentul flegmatic?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> introvertit + stabil emoțional.</span></span>",
          options: [
            "<span class='tip'><strong>Calm, echilibrat și controlat emoțional, cu stil mai rezervat</strong><span class='tooltip-box'><strong>Corect:</strong> stabilitate + introversie → reacții temperate și constante.</span></span>",
            "<span class='tip'><strong>Sociabil, expansiv și impulsiv, cu reactivitate emoțională instabilă</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai degrabă colericul/sanguinicul, nu flegmaticul.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care trăsături descriu un <span class='tip'><strong>temperament melancolic?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> introvertit + instabil emoțional.</span></span>",
          options: [
            "<span class='tip'><strong>Anxios, sensibil, pesimist și mai retras, cu instabilitate afectivă</strong><span class='tooltip-box'><strong>Corect:</strong> combinația N ridicat + introversie susține vulnerabilitatea emoțională.</span></span>",
            "<span class='tip'><strong>Relaxat, optimist, sociabil și stabil emoțional în majoritatea situațiilor</strong><span class='tooltip-box'><strong>Distractor:</strong> descrie mai degrabă sanguinicul (E+ / N−).</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce trăsături caracterizează <span class='tip'><strong>temperamentul sanguinic?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> extravertit + stabil emoțional.</span></span>",
          options: [
            "<span class='tip'><strong>Sociabil, deschis, energic și relaxat, cu stabilitate emoțională bună</strong><span class='tooltip-box'><strong>Corect:</strong> E mare + N mic → optimism și adaptare ușoară.</span></span>",
            "<span class='tip'><strong>Tăcut, tensionat și instabil emoțional, cu tendință spre îngrijorare și retragere</strong><span class='tooltip-box'><strong>Distractor:</strong> apropie de melancolic (E− / N+), nu de sanguinic.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce poziționare pe axele E și N corespunde unei persoane <strong>calme, stabile emoțional și rezervate</strong>?",
          options: [
            "<span class='tip'><strong>E− / N−</strong><span class='tooltip-box'><strong>Corect:</strong> introversie + stabilitate emoțională.</span></span>",
            "<span class='tip'><strong>E+ / N+</strong><span class='tooltip-box'><strong>Distractor:</strong> extraversie + instabilitate emoțională.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Dacă o persoană este sociabilă, activă, dar are reacții impulsive și instabile, ce temperament este mai probabil?",
          options: [
            "<span class='tip'><strong>Coleric</strong><span class='tooltip-box'><strong>Corect:</strong> E+ / N+ → activ și instabil.</span></span>",
            "<span class='tip'><strong>Flegmatic</strong><span class='tooltip-box'><strong>Distractor:</strong> E− / N− → calm și rezervat.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Selectează cele două dimensiuni fundamentale din modelul <span class='tip'><strong>Eysenck.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cele două axe care generează tipurile temperamentale.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Extraversie</strong><span class='tooltip-box'><strong>Corect:</strong> sociabilitate și orientare spre exterior.</span></span>",
            "<span class='tip'><strong>Neuroticism</strong><span class='tooltip-box'><strong>Corect:</strong> instabilitate emoțională/vulnerabilitate.</span></span>",
            "<span class='tip'><strong>Agreabilitate</strong><span class='tooltip-box'><strong>Distractor:</strong> este dimensiune Big Five, nu axa modelului Eysenck.</span></span>",
            "<span class='tip'><strong>Conștiinciozitate</strong><span class='tooltip-box'><strong>Distractor:</strong> este dimensiune Big Five, nu axa modelului Eysenck.</span></span>",
          ],
          answer: [0, 1],
        },
      ],
    },

    {
      id: "fph-t13j",
      title: "Aptitudinile – definire și caracteristici",
      questions: [
        {
          text: "Ce reprezintă <span class='tip'><strong>aptitudinile?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> capacități care susțin eficiența și performanța într-o activitate.</span></span>",
          options: [
            "<span class='tip'><strong>Latura instrumental-operațională a personalității, care susține performanța</strong><span class='tooltip-box'><strong>Corect:</strong> aptitudinile sunt resurse pentru realizarea eficientă a sarcinilor.</span></span>",
            "<span class='tip'><strong>Modalități de exprimare afectivă, fără legătură cu eficiența și performanța în activitate</strong><span class='tooltip-box'><strong>Distractor:</strong> exprimarea afectivă ține de afectivitate, nu definește aptitudinile.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum este definit <span class='tip'><strong>potențialul operațional</strong><span class='tooltip-box'><strong>Spus simplu:</strong> posibilitatea internă de a susține performanțe, dacă există antrenament și condiții.</span></span> al aptitudinilor?",
          options: [
            "<span class='tip'><strong>Posibilitatea sistemului psihic de a susține performanțe în diverse activități</strong><span class='tooltip-box'><strong>Corect:</strong> indică „capacitatea de a putea face”, nu performanța deja atinsă.</span></span>",
            "<span class='tip'><strong>Set de cunoștințe teoretice memorate, fără rol în execuția eficientă a activităților</strong><span class='tooltip-box'><strong>Distractor:</strong> cunoștințele sunt importante, dar nu echivalează cu potențialul aptitudinal.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Aptitudinile presupun atât <span class='tip'><strong>premise ereditare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> baza biologică/înnăscută.</span></span>, cât și:",
          options: [
            "<span class='tip'><strong>Împlinirea și dezvoltarea lor prin educație, experiență și exercițiu</strong><span class='tooltip-box'><strong>Corect:</strong> potențialul se valorifică prin formare și practică.</span></span>",
            "<span class='tip'><strong>Excluderea totală a influenței mediului, fiind fixe și neschimbabile pe tot parcursul vieții</strong><span class='tooltip-box'><strong>Distractor:</strong> aptitudinile se dezvoltă și se optimizează prin experiență.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care este legătura dintre aptitudini și <span class='tip'><strong>performanță?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> aptitudinile ajută, dar nu garantează rezultatul fără antrenament și motivație.</span></span>",
          options: [
            "<span class='tip'><strong>Aptitudinile oferă potențialul pentru performanță, dar nu o garantează fără formare și practică</strong><span class='tooltip-box'><strong>Corect:</strong> performanța depinde și de motivație, instruire și condiții.</span></span>",
            "<span class='tip'><strong>Aptitudinile determină automat performanță maximă în orice context, indiferent de pregătire</strong><span class='tooltip-box'><strong>Distractor:</strong> ar ignora rolul instruirii, al efortului și al condițiilor externe.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t13k",
      title: "Tipuri de aptitudini: generale și speciale",
      questions: [
        {
          text: "Care este diferența dintre <span class='tip'><strong>aptitudinile generale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> utile în multe domenii (ex.: inteligență).</span></span> și <span class='tip'><strong>aptitudinile speciale?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> utile într-un domeniu specific (ex.: muzică).</span></span>",
          options: [
            "<span class='tip'><strong>Aptitudinile generale se aplică în multe activități, cele speciale în domenii specifice</strong><span class='tooltip-box'><strong>Corect:</strong> diferența este aria de aplicare (largă vs. specifică).</span></span>",
            "<span class='tip'><strong>Aptitudinile generale țin de motivație, iar cele speciale țin exclusiv de emoții și dispoziții</strong><span class='tooltip-box'><strong>Distractor:</strong> aptitudinile sunt capacități, nu forme de motivație sau emoții.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care dintre următoarele sunt <span class='tip'><strong>aptitudini generale?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> aplicabile într-o gamă largă de activități.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Inteligența</strong><span class='tooltip-box'><strong>Corect:</strong> susține performanța în multe domenii.</span></span>",
            "<span class='tip'><strong>Creativitatea</strong><span class='tooltip-box'><strong>Corect:</strong> utilă transversal, în domenii diferite.</span></span>",
            "<span class='tip'><strong>Aptitudinile muzicale</strong><span class='tooltip-box'><strong>Distractor:</strong> sunt, de regulă, aptitudini speciale (domeniu specific).</span></span>",
            "<span class='tip'><strong>Spiritul de observație</strong><span class='tooltip-box'><strong>Corect:</strong> util în multe activități.</span></span>",
            "<span class='tip'><strong>Aptitudinile actoricești</strong><span class='tooltip-box'><strong>Distractor:</strong> sunt aptitudini speciale, legate de un domeniu.</span></span>",
          ],
          answer: [0, 1, 3],
        },
        {
          text: "Care dintre următoarele sunt <span class='tip'><strong>aptitudini speciale?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> aplicabile într-un domeniu specific.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Aptitudini pedagogice</strong><span class='tooltip-box'><strong>Corect:</strong> domeniu specific: predare/educație.</span></span>",
            "<span class='tip'><strong>Aptitudini literare</strong><span class='tooltip-box'><strong>Corect:</strong> domeniu specific: scris/limbaj artistic.</span></span>",
            "<span class='tip'><strong>Memorie de lucru</strong><span class='tooltip-box'><strong>Distractor:</strong> este un sistem cognitiv, nu o aptitudine specială.</span></span>",
            "<span class='tip'><strong>Aptitudini tehnice</strong><span class='tooltip-box'><strong>Corect:</strong> domeniu specific: tehnic/ingineresc.</span></span>",
            "<span class='tip'><strong>Aptitudini muzicale</strong><span class='tooltip-box'><strong>Corect:</strong> domeniu specific: muzică.</span></span>",
          ],
          answer: [0, 1, 3, 4],
        },
      ],
    },

    {
      id: "fph-t13l",
      title: "Definirea caracterului",
      questions: [
        {
          text: "Ce este <span class='tip'><strong>caracterul?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cum te raportezi valoric la tine, la alții și la reguli.</span></span>",
          options: [
            "<span class='tip'><strong>Latura relațional-valorică a personalității</strong><span class='tooltip-box'><strong>Corect:</strong> include valori, norme, principii și raportări stabile.</span></span>",
            "<span class='tip'><strong>Set de deprinderi motrice automate, fără componentă valorică și fără raportare socială</strong><span class='tooltip-box'><strong>Distractor:</strong> deprinderile motrice nu definesc caracterul.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Cum se manifestă caracterul în viața de zi cu zi?",
          options: [
            "<span class='tip'><strong>Prin raportări relativ constante la ceilalți, la activitate și la sine, încărcate valoric</strong><span class='tooltip-box'><strong>Corect:</strong> se vede în alegeri, atitudini și mod de relaționare.</span></span>",
            "<span class='tip'><strong>Prin reacții biologice automate, fără alegere, fără reguli interne și fără evaluare morală</strong><span class='tooltip-box'><strong>Distractor:</strong> caracterul implică valori și decizii, nu reflexe.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Caracterul se construiește prin învățare, printr-un proces numit <span class='tip'><strong>enculturație.</strong><span class='tooltip-box'><strong>Spus simplu:</strong> interiorizezi valori și norme ale culturii tale.</span></span> Ce implică acest proces?",
          options: [
            "<span class='tip'><strong>Interiorizarea valorilor culturale prin educație și interacțiune socială</strong><span class='tooltip-box'><strong>Corect:</strong> mediul transmite norme și modele care devin orientări personale.</span></span>",
            "<span class='tip'><strong>Transmiterea genetică a valorilor morale, fără rolul educației și al mediului social</strong><span class='tooltip-box'><strong>Distractor:</strong> valorile nu se moștenesc genetic ca atare; sunt învățate cultural.</span></span>",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t13m",
      title: "Atitudinea – unitate de bază a caracterului",
      questions: [
        {
          text: "Ce este <span class='tip'><strong>atitudinea?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> o raportare relativ stabilă față de ceva (sine, alții, muncă, societate).</span></span>",
          options: [
            "<span class='tip'><strong>O modalitate relativ stabilă de raportare, orientare și reglare a acțiunii față de lume</strong><span class='tooltip-box'><strong>Corect:</strong> atitudinea include evaluare + predispoziție de acțiune.</span></span>",
            "<span class='tip'><strong>O reacție biologică pasageră, fără sens, fără evaluare și fără componentă de orientare</strong><span class='tooltip-box'><strong>Distractor:</strong> atitudinea nu este reflex; are sens și stabilitate relativă.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Care dintre următoarele sunt exemple de tipuri de <span class='tip'><strong>atitudini?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> direcții ale raportării: către sine, către ceilalți etc.</span></span>",
          multiple: true,
          options: [
            "<span class='tip'><strong>Față de sine</strong><span class='tooltip-box'><strong>Corect:</strong> raportare la propria persoană.</span></span>",
            "<span class='tip'><strong>Față de ceilalți</strong><span class='tooltip-box'><strong>Corect:</strong> raportare interpersonală.</span></span>",
            "<span class='tip'><strong>Față de activitate</strong><span class='tooltip-box'><strong>Corect:</strong> raportare la muncă/învățare/sarcini.</span></span>",
            "<span class='tip'><strong>Față de mediul ecologic</strong><span class='tooltip-box'><strong>Corect:</strong> raportare la natură și responsabilitate ecologică.</span></span>",
            "<span class='tip'><strong>Față de realitățile sociale</strong><span class='tooltip-box'><strong>Corect:</strong> raportare la societate, norme, instituții.</span></span>",
          ],
          answer: [0, 1, 2, 3, 4],
        },
      ],
    },

    {
      id: "fph-t13n",
      title: "Modelul ABC al atitudinii",
      questions: [
        {
          text: "Modelul ABC explică atitudinea ca un construct tridimensional. Ce înseamnă litera <strong>A</strong> din modelul <strong>ABC</strong>?",
          options: [
            "<span class='tip'><strong>Affect (emoții)</strong><span class='tooltip-box'><strong>Corect:</strong> ce simți în legătură cu un obiect/situație (plăcere, neplăcere, teamă etc.).</span></span>",
            "<span class='tip'><strong>Action (acțiune)</strong><span class='tooltip-box'><strong>Distractor:</strong> componenta comportamentală este B (Behavior), nu A.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce reprezintă componenta <strong>B</strong> – <span class='tip'><strong>Behavior</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cum te comporți față de acel lucru.</span></span> – în modelul ABC?",
          options: [
            "<span class='tip'><strong>Comportamentul adoptat față de un aspect al lumii</strong><span class='tooltip-box'><strong>Corect:</strong> include acțiuni, evitări, alegeri observabile.</span></span>",
            "<span class='tip'><strong>Reacțiile motorii înnăscute, fără legătură cu obiectul atitudinii și fără învățare</strong><span class='tooltip-box'><strong>Distractor:</strong> componenta B vizează conduita orientată către obiect, nu reflexele.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce înseamnă <strong>C</strong> – <span class='tip'><strong>Cognition?</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce crezi și ce gândești despre acel lucru.</span></span>",
          options: [
            "<span class='tip'><strong>Ceea ce o persoană crede sau gândește despre un obiect/situație (credințe, idei)</strong><span class='tooltip-box'><strong>Corect:</strong> include convingeri și interpretări cognitive.</span></span>",
            "<span class='tip'><strong>Capacitatea de memorare pe termen lung, ca depozit de informații fără evaluări</strong><span class='tooltip-box'><strong>Distractor:</strong> memoria nu este componenta C; C se referă la credințe despre obiect.</span></span>",
          ],
          answer: 0,
        },
        {
          text: "Ce reflectă modelul <strong>ABC</strong> al atitudinii în ansamblu?",
          options: [
            "<span class='tip'><strong>Interacțiunea dintre emoții, comportamente și convingeri în construirea atitudinii</strong><span class='tooltip-box'><strong>Corect:</strong> atitudinea are componentă afectivă, cognitivă și comportamentală.</span></span>",
            "<span class='tip'><strong>Doar comportamentele observabile, fără emoții și fără credințe care să susțină orientarea</strong><span class='tooltip-box'><strong>Distractor:</strong> modelul este explicit tridimensional, nu unidimensional.</span></span>",
          ],
          answer: 0,
        },
      ],
    },
  ],
};

window.FPH_LESSONS = {
  "fph-t1a": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Ideea de bază:</strong>
      psihologia este <span class='tip'>știința care studiază conduita umană<span class='tooltip-box'><strong>Spus simplu:</strong> psihologia cercetează ce fac oamenii și de ce fac asta.<br /><br /><strong>Formulare academică:</strong> psihologia investighează comportamentul și procesele psihice care îl susțin.<br /><br /><strong>Exemplu:</strong> cum influențează stresul performanța la un examen.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Etimologia cuvântului „psihologie”</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>psyche (gr.)</h3>
        <p><strong>Suflet, suflu.</strong></p>
        <hr />
        <p><span class='tip'>Trimite la interiorul omului<span class='tooltip-box'><strong>Spus simplu:</strong> „psyche” înseamnă lumea ta interioară.<br /><br /><strong>Formulare academică:</strong> termenul desemnează dimensiunea subiectivă: trăiri, gânduri, stări.<br /><br /><strong>Exemplu:</strong> când spui „viață psihică”, te referi la emoții și gânduri.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>logos (gr.)</h3>
        <p><strong>Cuvânt, rațiune, știință.</strong></p>
        <hr />
        <p><span class='tip'>Ideea de studiu sistematic<span class='tooltip-box'><strong>Spus simplu:</strong> „logos” înseamnă studiu sau explicație rațională.<br /><br /><strong>Formulare academică:</strong> componenta „logos” arată caracterul științific al disciplinei.<br /><br /><strong>Exemplu:</strong> bio-logie = studiul vieții; socio-logie = studiul societății.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>📌&nbsp;&nbsp;Psihicul (Neveanu, 1978)</h2>
    <div class="lesson-grid three">
      <div class="lesson-card">
        <div class="lesson-step-emoji">1️⃣</div>
        <h3>Ce include psihicul</h3>
        <hr />
        <p><span class='tip'>Ansamblu de stări, însușiri, fenomene și procese<span class='tooltip-box'><strong>Spus simplu:</strong> psihicul are multe părți: emoții, gânduri, trăsături, procese.<br /><br /><strong>Formulare academică:</strong> psihicul este un ansamblu de stări, însușiri, fenomene și procese subiective.<br /><br /><strong>Exemplu:</strong> anxietatea (stare), atenția (proces), optimismul (însușire).</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">2️⃣</div>
        <h3>Raportare la lume și sine</h3>
        <hr />
        <p><span class='tip'>Funcții de raportare<span class='tooltip-box'><strong>Spus simplu:</strong> psihicul te ajută să înțelegi lumea și ce se întâmplă în tine.<br /><br /><strong>Formulare academică:</strong> psihicul îndeplinește funcții de raportare la lume și la sine.<br /><br /><strong>Exemplu:</strong> îți dai seama că o situație e periculoasă și că ți-e frică.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">3️⃣</div>
        <h3>Orientare și planificare</h3>
        <hr />
        <p><span class='tip'>Orientare, reflectare, planificare mentală<span class='tooltip-box'><strong>Spus simplu:</strong> observi, înțelegi și îți faci un plan de acțiune.<br /><br /><strong>Formulare academică:</strong> psihicul susține orientarea, reflectarea și planificarea mentală.<br /><br /><strong>Exemplu:</strong> vezi cerința, o înțelegi și îți planifici pașii de rezolvare.</span></span></p>
      </div>
    </div>
  `,
  "fph-t1b": `
    <div class="lesson-highlight">
      <strong>📘&nbsp;&nbsp;Principii fundamentale în psihologie</strong>
      <span class='tip'>(după A. Cosmovici, 1996; P. P. Neveanu, 1978)
        <span class='tooltip-box'><strong>Spus simplu:</strong> principiile sunt reguli‑cheie care arată cum funcționează psihicul, ca să îl putem înțelege și explica corect.<br /><br /><strong>Formulare academică:</strong> principiile fundamentale sintetizează modul general de funcționare a psihicului și ghidează interpretarea faptelor psihice.<br /><br /><strong>Exemplu:</strong> dacă știm că psihicul se dezvoltă, nu îl tratăm ca fiind fix sau neschimbător.</span>
      </span>.
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Principiile de bază</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>⚙️ Principiul determinismului</h3>
        <p><strong>Toate faptele psihice se înscriu pe traiectoria unei cauzalități</strong> (multiple, complexe, probabilistice).</p>
        <hr />
        <p><span class='tip'>Cauze multiple și interconectate<span class='tooltip-box'><strong>Spus simplu:</strong> nimic psihic nu apare „din nimic”; au existat factori care au dus acolo.<br /><br /><strong>Formulare academică:</strong> faptele psihice sunt determinate de cauze multiple, complexe și cu caracter probabilistic.<br /><br /><strong>Exemplu:</strong> anxietatea poate fi legată de stres, experiențe trecute și contextul actual.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🌱 Principiul dezvoltării</h3>
        <p><strong>Psihicul uman este într‑o continuă transformare.</strong></p>
        <hr />
        <p><span class='tip'>Schimbare permanentă<span class='tooltip-box'><strong>Spus simplu:</strong> psihicul se modifică pe parcursul vieții.<br /><br /><strong>Formulare academică:</strong> psihicul evoluează continuu, trecând prin transformări succesive.<br /><br /><strong>Exemplu:</strong> modul de gândire al copilului nu este același cu cel al adultului.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧩 Principiul organizării sistemice</h3>
        <p><strong>Psihicul este un sistem</strong> (ansamblu de elemente în interacțiune ordonată).</p>
        <hr />
        <p><span class='tip'>Funcționare ca sistem integrat<span class='tooltip-box'><strong>Spus simplu:</strong> psihicul are părți care lucrează împreună, nu separat.<br /><br /><strong>Formulare academică:</strong> psihicul este un sistem organizat, cu elemente aflate în interacțiune ordonată (Bertalanffy).<br /><br /><strong>Exemplu:</strong> atenția, memoria și emoțiile se influențează reciproc.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🏛️ Principiul condiționării social‑istorice</h3>
        <p><strong>Factorii sociali și contextul istoric modelează psihicul.</strong></p>
        <hr />
        <p><span class='tip'>Omul se construiește în contextul epocii<span class='tooltip-box'><strong>Spus simplu:</strong> trăim și gândim diferit în funcție de societate și timp.<br /><br /><strong>Formulare academică:</strong> factorii sociali și istorici mediază „construcția omului ca agent, stăpân al naturii, subiect pragmatic, epistemic și axiologic”.<br /><br /><strong>Exemplu:</strong> normele de educație diferă între generații și schimbă modul de formare a copilului.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧱&nbsp;&nbsp;Cum funcționează „sistemul psihic”</h2>
    <p>Conform principiului organizării sistemice, psihicul are trăsături de sistem.</p>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <div class="lesson-step-emoji">1️⃣</div>
        <h3>Deschis</h3>
        <hr />
        <p><span class='tip'>Permeabil la schimb cu mediul<span class='tooltip-box'><strong>Spus simplu:</strong> psihicul primește și dă informații către exterior.<br /><br /><strong>Formulare academică:</strong> sistemul psihic este deschis, fiind în schimb permanent cu mediul.<br /><br /><strong>Exemplu:</strong> experiențele de la școală schimbă modul în care gândești.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">2️⃣</div>
        <h3>Dinamic</h3>
        <hr />
        <p><span class='tip'>Supus schimbărilor constante<span class='tooltip-box'><strong>Spus simplu:</strong> psihicul nu stă pe loc, ci se modifică mereu.<br /><br /><strong>Formulare academică:</strong> sistemul psihic este dinamic, fiind într‑o transformare continuă.<br /><br /><strong>Exemplu:</strong> aceeași persoană poate învăța să gestioneze mai bine emoțiile.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">3️⃣</div>
        <h3>Hipercomplex</h3>
        <hr />
        <p><span class='tip'>Organizare pe sisteme și subsisteme<span class='tooltip-box'><strong>Spus simplu:</strong> are multe părți legate între ele.<br /><br /><strong>Formulare academică:</strong> psihicul este hipercomplex, structurat în sisteme și subsisteme interdependente.<br /><br /><strong>Exemplu:</strong> memoria are tipuri diferite care se sprijină reciproc.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">4️⃣</div>
        <h3>Autoreglabil</h3>
        <hr />
        <p><span class='tip'>Se ajustează prin conexiuni inverse<span class='tooltip-box'><strong>Spus simplu:</strong> îți corectezi comportamentul după rezultate.<br /><br /><strong>Formulare academică:</strong> sistemul psihic se autoreglează pe baza comunicării intersistemice și a conexiunilor inverse (feedback).<br /><br /><strong>Exemplu:</strong> dacă ai greșit la un test, îți ajustezi strategia de învățare.</span></span></p>
      </div>
    </div>
  `,
  "fph-t2a": `
    <div class="lesson-highlight">
      <strong>✨&nbsp;&nbsp;Ideea‑cheie:</strong>
      conștiința este <span class='tip'>experiență trăită și organizare mentală complexă<span class='tooltip-box'><strong>Spus simplu:</strong> conștiința înseamnă cum trăiești lucrurile „din interior” și cum le organizezi în minte.<br /><br /><strong>Formulare academică:</strong> conștiința este o experiență subiectivă, structurată, complexă și prezentă, care integrează procese psihice multiple.<br /><br /><strong>Exemplu:</strong> într‑o situație nouă, observi, înțelegi, simți și îți planifici răspunsul.</span></span>.
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Formele conștiinței (A. Cosmovici)</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🌍&nbsp;&nbsp;Conștiința implicită</h3>
        <p><strong>Orientare către obiecte și situații din mediu.</strong></p>
        <hr />
        <p><span class='tip'>Atenție spre „ce se întâmplă în afară”<span class='tooltip-box'><strong>Spus simplu:</strong> îți direcționezi mintea către ce este în jurul tău.<br /><br /><strong>Formulare academică:</strong> conștiința implicită este orientarea către obiecte, situații și evenimente din mediu.<br /><br /><strong>Exemplu:</strong> urmărești explicația profesorului sau traficul când traversezi.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🪞&nbsp;&nbsp;Conștiința reflexivă</h3>
        <p><strong>Orientare asupra propriei persoane.</strong></p>
        <hr />
        <p><span class='tip'>Atenție spre „ce se întâmplă în mine”<span class='tooltip-box'><strong>Spus simplu:</strong> îți observi gândurile și emoțiile.<br /><br /><strong>Formulare academică:</strong> conștiința reflexivă este orientarea asupra propriei persoane (gânduri, emoții, intenții).<br /><br /><strong>Exemplu:</strong> „Sunt anxios acum” sau „De ce m‑a deranjat asta?”.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cum este conștiința descrisă</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <div class="lesson-step-emoji">1️⃣</div>
        <h3>Subiectivă</h3>
        <hr />
        <p><span class='tip'>Trăită personal, din „perspectiva mea”<span class='tooltip-box'><strong>Spus simplu:</strong> fiecare simte lucrurile în felul său.<br /><br /><strong>Formulare academică:</strong> conștiința este experimentare subiectivă.<br /><br /><strong>Exemplu:</strong> aceeași situație poate fi resimțită diferit de două persoane.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">2️⃣</div>
        <h3>Structurată</h3>
        <hr />
        <p><span class='tip'>Are organizare internă, nu e haotică<span class='tooltip-box'><strong>Spus simplu:</strong> gândurile au un fir, nu sunt întâmplătoare.<br /><br /><strong>Formulare academică:</strong> conștiința are structură și legături între idei.<br /><br /><strong>Exemplu:</strong> îți poți urmări un fir logic al gândurilor.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">3️⃣</div>
        <h3>Complexă</h3>
        <hr />
        <p><span class='tip'>Include mai multe componente psihice<span class='tooltip-box'><strong>Spus simplu:</strong> gânduri, emoții și intenții lucrează împreună.<br /><br /><strong>Formulare academică:</strong> conștiința integrează componente multiple care se influențează reciproc.<br /><br /><strong>Exemplu:</strong> emoția poate schimba interpretarea și decizia.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">4️⃣</div>
        <h3>Prezentă</h3>
        <hr />
        <p><span class='tip'>Se desfășoară „acum”, în timp real<span class='tooltip-box'><strong>Spus simplu:</strong> e activă în momentul prezent.<br /><br /><strong>Formulare academică:</strong> conștiința se manifestă în prezent, cu implicare activă.<br /><br /><strong>Exemplu:</strong> îți ajustezi răspunsul pe loc în funcție de situație.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>💡&nbsp;&nbsp;Perspective clasice</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>Lev Vîgotski</h3>
        <p><strong>Conștiința este o construcție sistematică</strong> în care sunt implicate toate procesele psihice.</p>
        <hr />
        <p><span class='tip'>Procesele funcționează împreună<span class='tooltip-box'><strong>Spus simplu:</strong> conștiința este „echipa” tuturor proceselor psihice.<br /><br /><strong>Formulare academică:</strong> conștiința reunește și organizează percepția, atenția, memoria, gândirea, limbajul, afectivitatea și voința într‑un întreg coerent.<br /><br /><strong>Exemplu:</strong> când rezolvi o problemă, folosești atenția, memoria, gândirea, limbajul și voința.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>Wilhelm Wundt</h3>
        <p><strong>Conștiința este o „sinteză creatoare”.</strong></p>
        <hr />
        <p><span class='tip'>Mintea combină și transformă informațiile<span class='tooltip-box'><strong>Spus simplu:</strong> nu doar aduni informații, ci le transformi în ceva nou.<br /><br /><strong>Formulare academică:</strong> din elemente simple se construiesc experiențe psihice mai complexe și originale.<br /><br /><strong>Exemplu:</strong> din amintiri + emoții + interpretare poate apărea o lecție personală.</span></span></p>
      </div>
    </div>
  `,
  "fph-t2c": `
    <div class="lesson-highlight">
      <strong>🌒&nbsp;&nbsp;Ideea de bază:</strong>
      inconștientul este <span class='tip'>depozitar al conținuturilor psihice aflate în latență<span class='tooltip-box'><strong>Spus simplu:</strong> multe lucruri din psihic nu sunt în atenție acum, dar există „în fundal”.<br /><br /><strong>Formulare academică:</strong> inconștientul păstrează achiziții cognitive și conținuturi afective care nu sunt conștiente în prezent.<br /><br /><strong>Exemplu:</strong> o emoție veche îți influențează reacția fără să-ți dai seama.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Ce conține inconștientul</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>📚&nbsp;&nbsp;Achiziții cognitive</h3>
        <p><strong>Informații neutilizate, amintiri greu accesibile.</strong></p>
        <hr />
        <p><span class='tip'>Cunoștințe „în fundal”<span class='tooltip-box'><strong>Spus simplu:</strong> știi ceva, dar nu îți vine imediat în minte.<br /><br /><strong>Formulare academică:</strong> conținuturi cognitive aflate în stare de latență.<br /><br /><strong>Exemplu:</strong> îți amintești un nume după un indiciu.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>❤️&nbsp;&nbsp;Conținuturi afective</h3>
        <p><strong>Impulsuri, tendințe, nevoi, impresii emoționale.</strong></p>
        <hr />
        <p><span class='tip'>Trăiri care pot orienta conduita<span class='tooltip-box'><strong>Spus simplu:</strong> emoțiile din trecut pot influența reacții actuale.<br /><br /><strong>Formulare academică:</strong> aspecte motivațional‑afective cu potențial activator.<br /><br /><strong>Exemplu:</strong> o teamă veche îți blochează decizia.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>⚡&nbsp;&nbsp;Caracteristică esențială</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Dinamic și activator</h3>
        <hr />
        <p><span class='tip'>Poate influența conduita<span class='tooltip-box'><strong>Spus simplu:</strong> ceea ce e inconștient poate declanșa reacții.<br /><br /><strong>Formulare academică:</strong> conținuturile inconștiente pot orienta sau activa comportamentul.<br /><br /><strong>Exemplu:</strong> reacționezi defensiv fără să știi de ce.</span></span></p>
      </div>
    </div>
  `,
  "fph-t2d": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Freud:</strong>
      inconștientul este legat de <span class='tip'>instanțele vieții psihice<span class='tooltip-box'><strong>Spus simplu:</strong> psihicul are trei „piese” care funcționează împreună.<br /><br /><strong>Formulare academică:</strong> inconștientul se corelează cu dinamica Id–Ego–Superego.<br /><br /><strong>Exemplu:</strong> o dorință impulsivă e „cântărită” de reguli și realitate.</span></span>.
    </div>
    <hr />

    <h2>⚖️&nbsp;&nbsp;Instanțele psihice</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🔥&nbsp;&nbsp;Id (Sinele)</h3>
        <p><strong>Impulsuri și dorințe primare.</strong></p>
        <hr />
        <p><span class='tip'>Caută satisfacere imediată<span class='tooltip-box'><strong>Spus simplu:</strong> vrea „acum”.<br /><br /><strong>Formulare academică:</strong> sediul pulsiunilor orientate spre satisfacere imediată.<br /><br /><strong>Exemplu:</strong> „Vreau asta acum, fără să mă gândesc la reguli.”</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Ego (Eul)</h3>
        <p><strong>Mediere între dorințe și realitate.</strong></p>
        <hr />
        <p><span class='tip'>Raționalizează și amână<span class='tooltip-box'><strong>Spus simplu:</strong> găsește o cale „acceptabilă”.<br /><br /><strong>Formulare academică:</strong> instanță rațională ce mediază între Id și realitate.<br /><br /><strong>Exemplu:</strong> „Aștept momentul potrivit.”</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🛡️&nbsp;&nbsp;Superego</h3>
        <p><strong>Norme morale și idealuri.</strong></p>
        <hr />
        <p><span class='tip'>Evaluează și sancționează<span class='tooltip-box'><strong>Spus simplu:</strong> spune „e bine / e rău”.<br /><br /><strong>Formulare academică:</strong> instanța normelor și idealurilor interiorizate.<br /><br /><strong>Exemplu:</strong> vinovăție după încălcarea unei reguli.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🔁&nbsp;&nbsp;Rolul Sinelui în inconștient</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🔥&nbsp;&nbsp;Sursa pulsiunilor</h3>
        <hr />
        <p><span class='tip'>Dorințe și impulsuri primare<span class='tooltip-box'><strong>Spus simplu:</strong> Id‑ul este „motorul” dorințelor inconștiente.<br /><br /><strong>Formulare academică:</strong> Sinele furnizează impulsuri inconștiente care cer satisfacere.<br /><br /><strong>Exemplu:</strong> reacție impulsivă fără analiză.</span></span></p>
      </div>
    </div>
  `,
  "fph-t2e": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Jung:</strong>
      psihicul include <span class='tip'>conștient (Ego) și inconștient personal + colectiv<span class='tooltip-box'><strong>Spus simplu:</strong> avem atât o parte personală, cât și una „comună” tuturor oamenilor.<br /><br /><strong>Formulare academică:</strong> inconștientul are două niveluri: personal și colectiv, populate cu arhetipuri.<br /><br /><strong>Exemplu:</strong> simboluri precum „eroul” sau „mama” apar în culturi diferite.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Structura psihicului la Jung</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>👤&nbsp;&nbsp;Ego</h3>
        <p><strong>Centru al conștiinței („eu”).</strong></p>
        <hr />
        <p><span class='tip'>Identitatea conștientă<span class='tooltip-box'><strong>Spus simplu:</strong> Ego spune „eu sunt”.<br /><br /><strong>Formulare academică:</strong> centrul conștiinței personale.<br /><br /><strong>Exemplu:</strong> „Știu ce vreau acum.”</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🗂️&nbsp;&nbsp;Inconștient personal</h3>
        <p><strong>Amintiri și experiențe individuale reprimate.</strong></p>
        <hr />
        <p><span class='tip'>Istoria ta psihică<span class='tooltip-box'><strong>Spus simplu:</strong> ceea ce ai trăit și ai uitat / reprimat.<br /><br /><strong>Formulare academică:</strong> totalitatea conținuturilor personale reprimate sau uitate.<br /><br /><strong>Exemplu:</strong> o amintire dureroasă care revine în vis.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🌍&nbsp;&nbsp;Inconștientul colectiv</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🧬&nbsp;&nbsp;Arhetipuri</h3>
        <hr />
        <p><span class='tip'>Modele universale de gândire și simbol<span class='tooltip-box'><strong>Spus simplu:</strong> imagini comune tuturor oamenilor.<br /><br /><strong>Formulare academică:</strong> arhetipurile sunt reprezentări mentale înnăscute, prezente trans‑cultural.<br /><br /><strong>Exemplu:</strong> eroul, mama, înțeleptul în mituri și povești.</span></span></p>
      </div>
    </div>
  `,
  "fph-t2f": `
    <div class="lesson-highlight">
      <strong>🧩&nbsp;&nbsp;Subconștientul (preconștientul):</strong>
      este <span class='tip'>zona de trecere între conștient și inconștient<span class='tooltip-box'><strong>Spus simplu:</strong> un „depozit accesibil” – nu e în atenție, dar poate fi adus ușor.<br /><br /><strong>Formulare academică:</strong> conținuturi gata să devină conștiente, la un indiciu potrivit.<br /><br /><strong>Exemplu:</strong> îți amintești o parolă după un hint.</span></span>.
    </div>
    <hr />

    <h2>💡&nbsp;&nbsp;Conținuturi specifice</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🗃️&nbsp;&nbsp;Amintiri și deprinderi</h3>
        <p><strong>Conținuturi accesibile prin efort mic.</strong></p>
        <hr />
        <p><span class='tip'>Scheme de acțiune reutilizabile<span class='tooltip-box'><strong>Spus simplu:</strong> știi cum să faci, dar nu te gândești mereu la asta.<br /><br /><strong>Formulare academică:</strong> amintiri și deprinderi care pot fi readuse relativ ușor în conștiință.<br /><br /><strong>Exemplu:</strong> o regulă de circulație explicată dacă ești întrebat.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Accesibilitate rapidă</h3>
        <p><strong>Se activează la indicii potrivite.</strong></p>
        <hr />
        <p><span class='tip'>„Hint” → acces<span class='tooltip-box'><strong>Spus simplu:</strong> un indiciu îți „aprinde” memoria.<br /><br /><strong>Formulare academică:</strong> preconștientul funcționează ca tampon între conștient și inconștient.<br /><br /><strong>Exemplu:</strong> îți vine în minte numele unui actor după câteva secunde.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧘&nbsp;&nbsp;Atenția postvoluntară</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🧘&nbsp;&nbsp;Menținere fără efort</h3>
        <hr />
        <p><span class='tip'>Interesul susține atenția<span class='tooltip-box'><strong>Spus simplu:</strong> după ce începi cu efort, activitatea te „prinde”.<br /><br /><strong>Formulare academică:</strong> menținerea atenției se face fără efort conștient datorită interesului pentru activitate.<br /><br /><strong>Exemplu:</strong> începi greu să citești, apoi continui ușor.</span></span></p>
      </div>
    </div>
  `,
  "fph-t2g": `
    <div class="lesson-highlight">
      <strong>🔗&nbsp;&nbsp;Ideea‑cheie:</strong>
      conștientul, subconștientul și inconștientul sunt <span class='tip'>repere ale unui continuum funcțional<span class='tooltip-box'><strong>Spus simplu:</strong> nu sunt „cutii” separate, ci niveluri care comunică între ele.<br /><br /><strong>Formulare academică:</strong> împreună formează un sistem înalt funcțional al vieții psihice.<br /><br /><strong>Exemplu:</strong> o idee poate porni din „fundal” și ajunge în atenție.</span></span>.
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Continuitatea nivelurilor</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>Conștient</h3>
        <p><strong>Control și luciditate.</strong></p>
        <hr />
        <p><span class='tip'>Funcționează în prezent<span class='tooltip-box'><strong>Spus simplu:</strong> știi ce faci și de ce faci.<br /><br /><strong>Formulare academică:</strong> nivel al vieții psihice cu control voluntar și reflecție.<br /><br /><strong>Exemplu:</strong> îți planifici pașii unei sarcini.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>Subconștient</h3>
        <p><strong>Conținuturi accesibile cu efort mic.</strong></p>
        <hr />
        <p><span class='tip'>Trecere între nivele<span class='tooltip-box'><strong>Spus simplu:</strong> poți aduce în atenție ce e în fundal.<br /><br /><strong>Formulare academică:</strong> zonă tampon între conștient și inconștient.<br /><br /><strong>Exemplu:</strong> îți amintești o informație după un indiciu.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>Inconștient</h3>
        <p><strong>Conținuturi profunde, greu accesibile.</strong></p>
        <hr />
        <p><span class='tip'>Influențează conduita fără control direct<span class='tooltip-box'><strong>Spus simplu:</strong> poate orienta reacții fără să-ți dai seama.<br /><br /><strong>Formulare academică:</strong> conținuturi cu potențial activator, dar neconștiente în prezent.<br /><br /><strong>Exemplu:</strong> reacție defensivă „din instinct”.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>💤&nbsp;&nbsp;Fenomen asociat: visul</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>💤&nbsp;&nbsp;Visul și inconștientul</h3>
        <hr />
        <p><span class='tip'>Scade controlul conștient<span class='tooltip-box'><strong>Spus simplu:</strong> în vis apar conținuturi mai puțin „filtrate”.<br /><br /><strong>Formulare academică:</strong> visul este asociat în principal inconștientului, prin expresia simbolică a dorințelor și trăirilor profunde.<br /><br /><strong>Exemplu:</strong> un vis recurent despre frică sau dorință.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>✨&nbsp;&nbsp;Intuiția</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>✨&nbsp;&nbsp;Raționament cu premise inconștiente</h3>
        <hr />
        <p><span class='tip'>„Simți” concluzia înainte de explicație<span class='tooltip-box'><strong>Spus simplu:</strong> ajungi la o idee fără să poți explica imediat pașii.<br /><br /><strong>Formulare academică:</strong> intuiția este explicată ca raționament cu premise inconștiente (Cosmovici, 1996).<br /><br /><strong>Exemplu:</strong> ai o soluție „dintr‑odată”, apoi găsești argumentele.</span></span></p>
      </div>
    </div>
  `,
  "fph-t3a": `
    <div class="lesson-highlight">
      <strong>⚡&nbsp;&nbsp;Excitabilitatea:</strong>
      proprietatea materiei vii de a <span class='tip'>răspunde activ și selectiv la stimuli<span class='tooltip-box'><strong>Spus simplu:</strong> organismul nu reacționează pasiv; se modifică în interior și răspunde diferit în funcție de stimul.<br /><br /><strong>Formulare academică:</strong> excitabilitatea este capacitatea organismului de a produce modificări interne specifice ca reacție la stimuli.<br /><br /><strong>Exemplu:</strong> la un zgomot puternic tresari, la unul slab doar întorci capul.</span></span>.
    </div>
    <hr />

    <h2>🔎&nbsp;&nbsp;Caracteristici esențiale</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>⚙️&nbsp;&nbsp;Răspuns activ</h3>
        <p><strong>Organismul își schimbă starea internă.</strong></p>
        <hr />
        <p><span class='tip'>Nu e reacție pasivă<span class='tooltip-box'><strong>Spus simplu:</strong> corpul „lucrează” când apare un stimul.<br /><br /><strong>Formulare academică:</strong> răspunsul la stimul implică modificări interne, nu doar contact exterior.<br /><br /><strong>Exemplu:</strong> crește pulsul când simți frică.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Răspuns selectiv</h3>
        <p><strong>Reacția diferă după tipul stimulului.</strong></p>
        <hr />
        <p><span class='tip'>Selectezi ce e relevant<span class='tooltip-box'><strong>Spus simplu:</strong> nu reacționezi la fel la orice stimul.<br /><br /><strong>Formulare academică:</strong> excitabilitatea presupune diferențierea răspunsului în funcție de caracteristicile stimulului.<br /><br /><strong>Exemplu:</strong> lumina puternică te face să închizi ochii, lumina slabă nu.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Rol în activitatea psihică</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Premisă de bază</h3>
        <hr />
        <p><span class='tip'>Fără excitabilitate nu există adaptare psihică<span class='tooltip-box'><strong>Spus simplu:</strong> dacă nu poți răspunde la stimuli, nu poți învăța sau adapta.<br /><br /><strong>Formulare academică:</strong> excitabilitatea este condiție fundamentală pentru funcționarea psihică și adaptarea la mediu.<br /><br /><strong>Exemplu:</strong> reacția la pericol declanșează comportamente de protecție.</span></span></p>
      </div>
    </div>
  `,
  "fph-t3b": `
    <div class="lesson-highlight">
      <strong>📡&nbsp;&nbsp;Informația:</strong>
      este <span class='tip'>a treia dimensiune a realității, alături de substanță și energie<span class='tooltip-box'><strong>Spus simplu:</strong> nu avem doar materie și energie, ci și „sensul” transmis prin semnale.<br /><br /><strong>Formulare academică:</strong> informația reprezintă dimensiunea care organizează și controlează procesele, completând substanța și energia.<br /><br /><strong>Exemplu:</strong> semnul de circulație nu e doar „metal”, ci transmite o regulă.</span></span>.
    </div>
    <hr />

    <h2>🧪&nbsp;&nbsp;Triada fundamentală</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🧱&nbsp;&nbsp;Substanță</h3>
        <p><strong>Suportul material.</strong></p>
        <hr />
        <p><span class='tip'>„Din ce e făcut”<span class='tooltip-box'><strong>Spus simplu:</strong> materia din care sunt alcătuite lucrurile.<br /><br /><strong>Formulare academică:</strong> componenta materială care susține orice sistem.<br /><br /><strong>Exemplu:</strong> creierul ca organ fizic.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Energie</h3>
        <p><strong>Mișcare și transformare.</strong></p>
        <hr />
        <p><span class='tip'>„Ce pune în mișcare”<span class='tooltip-box'><strong>Spus simplu:</strong> energia face posibilă funcționarea.<br /><br /><strong>Formulare academică:</strong> forța care permite procesele și schimbările în sistem.<br /><br /><strong>Exemplu:</strong> impulsurile nervoase transmit semnale.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>📡&nbsp;&nbsp;Informație</h3>
        <p><strong>Organizare și control.</strong></p>
        <hr />
        <p><span class='tip'>„Ce dă sens”<span class='tooltip-box'><strong>Spus simplu:</strong> informația spune „ce înseamnă” și „ce urmează”.<br /><br /><strong>Formulare academică:</strong> componenta care structurează, coordonează și orientează procesele.<br /><br /><strong>Exemplu:</strong> instrucțiunile de lucru într-o sarcină.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🛠️&nbsp;&nbsp;Funcțiile informației (Neveanu)</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Autoorganizare</h3>
        <hr />
        <p><span class='tip'>Sistemul se organizează singur<span class='tooltip-box'><strong>Spus simplu:</strong> informația ajută sistemul să se „aranjeze” singur.<br /><br /><strong>Formulare academică:</strong> informația permite organizarea internă a sistemului psihic.<br /><br /><strong>Exemplu:</strong> îți structurezi singur pașii unei sarcini.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎛️&nbsp;&nbsp;Autocontrol și autoreglaj</h3>
        <hr />
        <p><span class='tip'>Corectare pe baza feedback‑ului<span class='tooltip-box'><strong>Spus simplu:</strong> îți ajustezi comportamentul după rezultate.<br /><br /><strong>Formulare academică:</strong> informația susține autocontrolul și autoreglarea activității.<br /><br /><strong>Exemplu:</strong> dacă nu reușești, schimbi metoda.</span></span></p>
      </div>
    </div>
  `,
  "fph-t3c": `
    <div class="lesson-highlight">
      <strong>🎯&nbsp;&nbsp;Stimulul:</strong>
      este <span class='tip'>orice schimbare care produce un răspuns în organism<span class='tooltip-box'><strong>Spus simplu:</strong> un stimul este „ceva” din jur sau din interior care te face să reacționezi.<br /><br /><strong>Formulare academică:</strong> stimulul este o modificare fizică, chimică sau biologică ce declanșează reacții în organism.<br /><br /><strong>Exemplu:</strong> o lumină puternică, un miros, o durere.</span></span>.
    </div>
    <hr />

    <h2>📌&nbsp;&nbsp;Caracteristicile stimulului</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧪&nbsp;&nbsp;Natura</h3>
        <p><strong>Fizică, chimică sau biologică.</strong></p>
        <hr />
        <p><span class='tip'>Tipul stimulului contează<span class='tooltip-box'><strong>Spus simplu:</strong> nu toate stimulările sunt la fel (sunet ≠ miros).<br /><br /><strong>Formulare academică:</strong> stimulii pot aparține unor tipuri diferite de modificări.<br /><br /><strong>Exemplu:</strong> lumina (fizic), mirosul (chimic).</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>📈&nbsp;&nbsp;Intensitate</h3>
        <p><strong>Cât de puternic este stimulul.</strong></p>
        <hr />
        <p><span class='tip'>Mai puternic = reacție mai mare<span class='tooltip-box'><strong>Spus simplu:</strong> un stimul puternic produce reacții mai evidente.<br /><br /><strong>Formulare academică:</strong> intensitatea influențează pragul și forța răspunsului.<br /><br /><strong>Exemplu:</strong> un zgomot puternic produce tresărire.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Distribuție și durată</h3>
        <p><strong>Unde apare și cât timp durează.</strong></p>
        <hr />
        <p><span class='tip'>Poate fi localizat sau prelungit<span class='tooltip-box'><strong>Spus simplu:</strong> unele stimulări sunt scurte, altele persistă.<br /><br /><strong>Formulare academică:</strong> distribuția și durata modifică efectul stimulului asupra receptorului.<br /><br /><strong>Exemplu:</strong> o înțepătură scurtă vs. o durere de durată.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⏱️&nbsp;&nbsp;Ritmicitate</h3>
        <p><strong>Repetiție și frecvență.</strong></p>
        <hr />
        <p><span class='tip'>Stimul repetat vs. izolat<span class='tooltip-box'><strong>Spus simplu:</strong> repetarea schimbă reacția (te obișnuiești).<br /><br /><strong>Formulare academică:</strong> frecvența și ritmul stimulilor influențează adaptarea receptorului.<br /><br /><strong>Exemplu:</strong> după un timp, nu mai observi un zgomot constant.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🚦&nbsp;&nbsp;Pragul stimulului</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🚦&nbsp;&nbsp;Prag absolut</h3>
        <hr />
        <p><span class='tip'>Minimul necesar pentru a declanșa răspuns<span class='tooltip-box'><strong>Spus simplu:</strong> sub o anumită intensitate, nu simți stimulul.<br /><br /><strong>Formulare academică:</strong> pragul absolut este intensitatea minimă a stimulului care produce reacție.<br /><br /><strong>Exemplu:</strong> o lumină foarte slabă nu este percepută.</span></span></p>
      </div>
    </div>
  `,
  "fph-t3d": `
    <div class="lesson-highlight">
      <strong>💡&nbsp;&nbsp;SNC:</strong>
      sistemul nervos central este <span class='tip'>baza adaptării și a activității psihice superioare<span class='tooltip-box'><strong>Spus simplu:</strong> fără SNC nu există orientare, învățare și control psihic.<br /><br /><strong>Formulare academică:</strong> SNC susține adaptarea, coordonarea și integrarea proceselor psihice complexe.<br /><br /><strong>Exemplu:</strong> decizia rapidă într‑o situație nouă.</span></span>.
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Roluri majore</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🌍&nbsp;&nbsp;Adaptare</h3>
        <p><strong>Răspuns adecvat la mediu.</strong></p>
        <hr />
        <p><span class='tip'>Integrare senzorială și răspuns motor<span class='tooltip-box'><strong>Spus simplu:</strong> percepi, interpretezi și reacționezi.<br /><br /><strong>Formulare academică:</strong> SNC integrează informațiile și coordonează răspunsurile adaptative.<br /><br /><strong>Exemplu:</strong> îți retragi mâna de la un obiect fierbinte.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Activitate psihică superioară</h3>
        <p><strong>Gândire, limbaj, planificare.</strong></p>
        <hr />
        <p><span class='tip'>Procese mentale complexe<span class='tooltip-box'><strong>Spus simplu:</strong> în SNC se organizează gândirea și limbajul.<br /><br /><strong>Formulare academică:</strong> SNC este suportul proceselor cognitive și afective superioare.<br /><br /><strong>Exemplu:</strong> rezolvarea unei probleme prin raționament.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>⚡&nbsp;&nbsp;Procese fundamentale</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Excitație</h3>
        <hr />
        <p><span class='tip'>Activare nervoasă<span class='tooltip-box'><strong>Spus simplu:</strong> creierul „pornește” reacția.<br /><br /><strong>Formulare academică:</strong> proces cortical de activare a centrilor nervoși.<br /><br /><strong>Exemplu:</strong> atenția se trezește la un sunet brusc.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧊&nbsp;&nbsp;Inhibiție</h3>
        <hr />
        <p><span class='tip'>Frânare/oprire nervoasă<span class='tooltip-box'><strong>Spus simplu:</strong> creierul „oprește” sau reduce o reacție.<br /><br /><strong>Formulare academică:</strong> proces cortical de reducere sau stopare a activității nervoase.<br /><br /><strong>Exemplu:</strong> îți ții în frâu un impuls.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🔁&nbsp;&nbsp;Inducție</h3>
        <hr />
        <p><span class='tip'>Interacțiune între excitație și inhibiție<span class='tooltip-box'><strong>Spus simplu:</strong> una o influențează pe cealaltă.<br /><br /><strong>Formulare academică:</strong> inducția este efectul reciproc dintre procesele de excitație și inhibiție.<br /><br /><strong>Exemplu:</strong> după o perioadă de concentrare intensă apare oboseala.</span></span></p>
      </div>
    </div>
  `,
  "fph-t3e": `
    <div class="lesson-highlight">
      <strong>💡&nbsp;&nbsp;Procese corticale:</strong>
      sunt <span class='tip'>excitația și inhibiția<span class='tooltip-box'><strong>Spus simplu:</strong> două procese care „pornesc” sau „frânează” activitatea nervoasă, astfel încât creierul rămâne în echilibru.<br /><br /><strong>Formulare academică:</strong> excitația și inhibiția sunt procese nervoase fundamentale care, prin acțiunea lor coordonată de balansare reciprocă, conferă proprietatea echilibrului (Popescu‑Neveanu, 1978).<br /><br /><strong>Exemplu:</strong> când te concentrezi, unele zone se activează, iar altele se frânează ca să nu te distragă.</span></span>.
    </div>
    <hr />

    <h2>⚡&nbsp;&nbsp;Definiții esențiale</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Excitația</h3>
        <p><strong>Activarea zonelor prin creșterea permeabilității celulare.</strong></p>
        <hr />
        <p><span class='tip'>Transmiterea informației prin influx bioelectric<span class='tooltip-box'><strong>Spus simplu:</strong> celulele „se deschid” ca să lase semnalul să circule.<br /><br /><strong>Formulare academică:</strong> excitația activează zonele prin creșterea permeabilității celulare la nivelul sinapselor, în vederea transmiterii informației prin influx bioelectric (Popescu‑Neveanu, 1978).<br /><br /><strong>Exemplu:</strong> la un stimul puternic, crește activarea neuronală și apare răspunsul.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧊&nbsp;&nbsp;Inhibiția</h3>
        <p><strong>Frânare și blocare selectivă a impulsurilor.</strong></p>
        <hr />
        <p><span class='tip'>Selectivitate în distribuirea impulsurilor<span class='tooltip-box'><strong>Spus simplu:</strong> nu toate impulsurile „trec”; unele sunt oprite ca să fie control.<br /><br /><strong>Formulare academică:</strong> inhibiția acționează în sens invers excitației, frânează/blochează și mijlocește selectivitatea în distribuirea și gradarea impulsurilor nervoase pozitive (Popescu‑Neveanu, 1978).<br /><br /><strong>Exemplu:</strong> îți oprești impulsul de a întrerupe pe cineva.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>⚖️&nbsp;&nbsp;Echilibrul cortical</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>⚖️&nbsp;&nbsp;Balansare reciprocă</h3>
        <hr />
        <p><span class='tip'>Echilibrul apare din acțiunea coordonată a celor două procese<span class='tooltip-box'><strong>Spus simplu:</strong> activarea și frânarea lucrează împreună, nu separat.<br /><br /><strong>Formulare academică:</strong> echilibrul psihic rezultă din acțiunea coordonată a excitației și inhibiției (Popescu‑Neveanu, 1978).<br /><br /><strong>Exemplu:</strong> te mobilizezi pentru sarcină, dar fără agitație excesivă.</span></span></p>
      </div>
    </div>
  `,
  "fph-t3f": `
    <div class="lesson-highlight">
      <strong>💡&nbsp;&nbsp;SNC:</strong>
      este alcătuit din <span class='tip'>encefal și măduva spinării<span class='tooltip-box'><strong>Spus simplu:</strong> creier + măduvă, care coordonează întregul organism.<br /><br /><strong>Formulare academică:</strong> SNC include encefalul și măduva spinării, structuri esențiale pentru integrarea și coordonarea activității nervoase.<br /><br /><strong>Exemplu:</strong> reacțiile rapide sunt coordonate prin SNC.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Componentele SNC</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Encefal</h3>
        <p><strong>Centru superior de integrare.</strong></p>
        <hr />
        <p><span class='tip'>Controlează funcțiile psihice complexe<span class='tooltip-box'><strong>Spus simplu:</strong> aici sunt gândirea, memoria, limbajul.<br /><br /><strong>Formulare academică:</strong> encefalul coordonează procesele cognitive și comportamentale superioare.<br /><br /><strong>Exemplu:</strong> planificarea unei acțiuni.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧵&nbsp;&nbsp;Măduva spinării</h3>
        <p><strong>Conducere și reflexe.</strong></p>
        <hr />
        <p><span class='tip'>Legătură între corp și encefal<span class='tooltip-box'><strong>Spus simplu:</strong> transmite comenzi și primește informații din corp.<br /><br /><strong>Formulare academică:</strong> măduva asigură căile de conducere nervoasă și reflexele.<br /><br /><strong>Exemplu:</strong> reflexul de retragere a mâinii.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🏗️&nbsp;&nbsp;Structura encefalului</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Mari componente</h3>
        <hr />
        <p><span class='tip'>Emisfere, cerebel, trunchi cerebral<span class='tooltip-box'><strong>Spus simplu:</strong> encefalul are mai multe „piese” cu roluri diferite.<br /><br /><strong>Formulare academică:</strong> encefalul include emisferele cerebrale, cerebelul și trunchiul cerebral.<br /><br /><strong>Exemplu:</strong> coordonarea fină a mișcării se face cu ajutorul cerebelului.</span></span></p>
      </div>
    </div>
  `,
  "fph-t3g": `
    <div class="lesson-highlight">
      <strong>🧬&nbsp;&nbsp;Neuronul:</strong>
      este <span class='tip'>unitatea structurală și funcțională a sistemului nervos<span class='tooltip-box'><strong>Spus simplu:</strong> neuronul este „celula de lucru” a creierului.<br /><br /><strong>Formulare academică:</strong> neuronul este unitatea de bază care primește, procesează și transmite impulsuri nervoase.<br /><br /><strong>Exemplu:</strong> mesajul nervos trece de la un neuron la altul.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Structura neuronului</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>⚙️&nbsp;&nbsp;Corpul celular</h3>
        <p><strong>Centru de comandă.</strong></p>
        <hr />
        <p><span class='tip'>Conține nucleul<span class='tooltip-box'><strong>Spus simplu:</strong> aici se „coordonează” neuronul.<br /><br /><strong>Formulare academică:</strong> soma conține nucleul și menține viața celulei nervoase.<br /><br /><strong>Exemplu:</strong> produce substanțele necesare funcționării.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🌿&nbsp;&nbsp;Dendrite</h3>
        <p><strong>Recepție de semnale.</strong></p>
        <hr />
        <p><span class='tip'>„Antene” ale neuronului<span class='tooltip-box'><strong>Spus simplu:</strong> primesc informația de la alți neuroni.<br /><br /><strong>Formulare academică:</strong> dendritele recepționează impulsurile nervoase.<br /><br /><strong>Exemplu:</strong> mesajele vin prin dendrite către corpul celular.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>➡️&nbsp;&nbsp;Axon</h3>
        <p><strong>Transmitere de semnale.</strong></p>
        <hr />
        <p><span class='tip'>„Cablul” neuronului<span class='tooltip-box'><strong>Spus simplu:</strong> trimite mesajul mai departe.<br /><br /><strong>Formulare academică:</strong> axonul conduce impulsul nervos către alți neuroni sau organe efectoare.<br /><br /><strong>Exemplu:</strong> semnalul pleacă pe axon spre următorul neuron.</span></span></p>
      </div>
    </div>
  `,
  "fph-t3h": `
    <div class="lesson-highlight">
      <strong>🔗&nbsp;&nbsp;Sinapsa:</strong>
      este <span class='tip'>contactul funcțional dintre doi neuroni<span class='tooltip-box'><strong>Spus simplu:</strong> este „punctul de legătură” unde trece mesajul nervos.<br /><br /><strong>Formulare academică:</strong> sinapsa este regiunea prin care se transmite informația de la un neuron la altul, prin intermediul neurotransmițătorilor.<br /><br /><strong>Exemplu:</strong> semnalul trece din neuronul A în neuronul B.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Elementele sinapsei</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>📤&nbsp;&nbsp;Neuron presinaptic</h3>
        <p><strong>Trimite mesajul.</strong></p>
        <hr />
        <p><span class='tip'>Sursa semnalului<span class='tooltip-box'><strong>Spus simplu:</strong> aici pornește transmiterea.<br /><br /><strong>Formulare academică:</strong> neuronul presinaptic eliberează neurotransmițători.<br /><br /><strong>Exemplu:</strong> impulsul ajunge la capătul axonului.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧵&nbsp;&nbsp;Fanta sinaptică</h3>
        <p><strong>Spațiul dintre neuroni.</strong></p>
        <hr />
        <p><span class='tip'>Locul transferului chimic<span class='tooltip-box'><strong>Spus simplu:</strong> mesajul trece printr‑un mic spațiu.<br /><br /><strong>Formulare academică:</strong> fanta sinaptică permite difuzia neurotransmițătorilor.<br /><br /><strong>Exemplu:</strong> substanțele chimice traversează fanta.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>📥&nbsp;&nbsp;Neuron postsinaptic</h3>
        <p><strong>Primește mesajul.</strong></p>
        <hr />
        <p><span class='tip'>Destinația semnalului<span class='tooltip-box'><strong>Spus simplu:</strong> aici ajunge mesajul și este preluat.<br /><br /><strong>Formulare academică:</strong> neuronul postsinaptic are receptori pentru neurotransmițători.<br /><br /><strong>Exemplu:</strong> semnalul chimic declanșează un nou impuls.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>⚡&nbsp;&nbsp;Rolul sinapsei</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Transmitere informațională</h3>
        <hr />
        <p><span class='tip'>Asigură comunicarea neuronală<span class='tooltip-box'><strong>Spus simplu:</strong> fără sinapse, neuronii nu pot „vorbi” între ei.<br /><br /><strong>Formulare academică:</strong> sinapsa este mecanismul de transmitere a informației între neuroni.<br /><br /><strong>Exemplu:</strong> învățarea se bazează pe întărirea sinapselor.</span></span></p>
      </div>
    </div>
  `,
  "fph-t3i": `
    <div class="lesson-highlight">
      <strong>💠&nbsp;&nbsp;Neurotransmițătorii:</strong>
      sunt <span class='tip'>substanțe chimice care transmit mesajul nervos în sinapsă<span class='tooltip-box'><strong>Spus simplu:</strong> sunt „mesagerii” dintre neuroni.<br /><br /><strong>Formulare academică:</strong> neurotransmițătorii sunt molecule eliberate în fanta sinaptică pentru a activa neuronul postsinaptic.<br /><br /><strong>Exemplu:</strong> dopamina transmite semnale legate de recompensă.</span></span>.
    </div>
    <hr />

    <h2>🧪&nbsp;&nbsp;Roluri principale</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>⚙️&nbsp;&nbsp;Transmitere și reglaj</h3>
        <hr />
        <p><span class='tip'>Fac posibilă comunicarea nervoasă<span class='tooltip-box'><strong>Spus simplu:</strong> fără ei, impulsul nu ar trece la neuronul următor.<br /><br /><strong>Formulare academică:</strong> neurotransmițătorii mediază și reglează activitatea sinaptică.<br /><br /><strong>Exemplu:</strong> variațiile lor schimbă dispoziția sau reacțiile.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Efecte specifice</h3>
        <hr />
        <p><span class='tip'>Fiecare are funcții distincte<span class='tooltip-box'><strong>Spus simplu:</strong> nu toți fac același lucru în creier.<br /><br /><strong>Formulare academică:</strong> neurotransmițătorii au roluri funcționale diferite în reglarea comportamentului și emoțiilor.<br /><br /><strong>Exemplu:</strong> serotonina este legată de echilibrul dispoziției.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧬&nbsp;&nbsp;Exemple importante</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Dopamina</h3>
        <p><strong>Recompensă, motivație.</strong></p>
        <hr />
        <p><span class='tip'>Sprijină inițiativa și învățarea<span class='tooltip-box'><strong>Spus simplu:</strong> te ajută să simți „recompensa” și să repeți comportamentul.<br /><br /><strong>Formulare academică:</strong> dopamina participă la circuitele recompensei și motivației.<br /><br /><strong>Exemplu:</strong> satisfacția după reușită.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🌿&nbsp;&nbsp;Serotonina</h3>
        <p><strong>Dispoziție, echilibru emoțional.</strong></p>
        <hr />
        <p><span class='tip'>Reglează starea generală<span class='tooltip-box'><strong>Spus simplu:</strong> influențează cum te simți în ansamblu.<br /><br /><strong>Formulare academică:</strong> serotonina are rol în reglarea dispoziției și a stresului.<br /><br /><strong>Exemplu:</strong> calm vs. iritabilitate.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🛡️&nbsp;&nbsp;Endorfine</h3>
        <p><strong>Reducerea durerii.</strong></p>
        <hr />
        <p><span class='tip'>„Analgezice” naturale<span class='tooltip-box'><strong>Spus simplu:</strong> scad percepția durerii.<br /><br /><strong>Formulare academică:</strong> endorfinele sunt opioide endogene care reduc durerea și cresc starea de bine.<br /><br /><strong>Exemplu:</strong> „uforia” după efort intens.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🚨&nbsp;&nbsp;Adrenalina</h3>
        <p><strong>Alertă și reacție rapidă.</strong></p>
        <hr />
        <p><span class='tip'>Pregătește corpul pentru acțiune<span class='tooltip-box'><strong>Spus simplu:</strong> îți crește energia imediat.<br /><br /><strong>Formulare academică:</strong> adrenalina activează organismul în situații de stres (fight or flight).<br /><br /><strong>Exemplu:</strong> puls accelerat înainte de un pericol.</span></span></p>
      </div>
    </div>
  `,
  "fph-t4a": `
    <div class="lesson-highlight">
      <strong>🌍&nbsp;&nbsp;Experimentarea conștientă:</strong>
      este <span class='tip'>procesul activ prin care individul interpretează stimulii și reacționează adaptativ<span class='tooltip-box'><strong>Spus simplu:</strong> observi, înțelegi și alegi un răspuns potrivit situației.<br /><br /><strong>Formulare academică:</strong> experimentarea conștientă presupune orientare voluntară, procesare a informației și comportamente adaptative.<br /><br /><strong>Exemplu:</strong> vezi că cineva e supărat și îți adaptezi tonul.</span></span>.
    </div>
    <hr />

    <h2>🎯&nbsp;&nbsp;Stimuli externi vs. interni</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🌍&nbsp;&nbsp;Stimuli externi</h3>
        <p><strong>Vin din mediul exterior.</strong></p>
        <hr />
        <p><span class='tip'>Lumină, sunet, atingere<span class='tooltip-box'><strong>Spus simplu:</strong> sunt semnale care vin din afara corpului.<br /><br /><strong>Formulare academică:</strong> stimuli proveniți din mediul extern, percepuți prin analizatori senzoriali.<br /><br /><strong>Exemplu:</strong> auzi o sirenă sau vezi o lumină puternică.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🫀&nbsp;&nbsp;Stimuli interni</h3>
        <p><strong>Vin din interiorul organismului.</strong></p>
        <hr />
        <p><span class='tip'>Stări corporale și emoții<span class='tooltip-box'><strong>Spus simplu:</strong> sunt semnale pe care le simți în interior.<br /><br /><strong>Formulare academică:</strong> stimuli endogeni legați de stări fiziologice și afective.<br /><br /><strong>Exemplu:</strong> foame, durere, tensiune, frică.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>💡&nbsp;&nbsp;Rolul proceselor cognitive</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🔍&nbsp;&nbsp;Interpretare și reprezentare</h3>
        <hr />
        <p><span class='tip'>Dau sens stimulilor<span class='tooltip-box'><strong>Spus simplu:</strong> procesele cognitive te ajută să înțelegi ce se întâmplă.<br /><br /><strong>Formulare academică:</strong> procesele cognitive permit cunoașterea, interpretarea și reprezentarea lumii.<br /><br /><strong>Exemplu:</strong> recunoști un semn de avertizare și îl înțelegi.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>✅&nbsp;&nbsp;Comportament adaptativ</h3>
        <hr />
        <p><span class='tip'>Alegi răspunsuri potrivite<span class='tooltip-box'><strong>Spus simplu:</strong> nu reacționezi la întâmplare, ci cu un scop.<br /><br /><strong>Formulare academică:</strong> interpretarea cognitivă susține comportamente ajustate la cerințele mediului.<br /><br /><strong>Exemplu:</strong> încetinești când vezi „Atenție”.</span></span></p>
      </div>
    </div>
  `,
  "fph-t4b": `
    <div class="lesson-highlight">
      <strong>💡&nbsp;&nbsp;Procese cognitive:</strong>
      includ <span class='tip'>procese primare (senzoriale) și procese secundare<span class='tooltip-box'><strong>Spus simplu:</strong> întâi „intri în contact” cu stimulul, apoi îl prelucrezi mai profund.<br /><br /><strong>Formulare academică:</strong> procesele cognitive sunt organizate pe niveluri: primare (contact direct cu stimulul) și secundare (prelucrare superioară).<br /><br /><strong>Exemplu:</strong> vezi un obiect (primar), îl analizezi și îl explici (secundar).</span></span>.
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Două niveluri cognitive</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <div class="lesson-step-emoji">1️⃣</div>
        <h3>Procese primare</h3>
        <p><strong>Contact direct cu stimulul.</strong></p>
        <hr />
        <p><span class='tip'>Senzații, percepții, reprezentări<span class='tooltip-box'><strong>Spus simplu:</strong> primești informația și o „vezi” imediat.<br /><br /><strong>Formulare academică:</strong> procesele senzoriale sunt primare deoarece preiau direct informația din stimul.<br /><br /><strong>Exemplu:</strong> observi culoarea și forma unui obiect.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">2️⃣</div>
        <h3>Procese secundare</h3>
        <p><strong>Prelucrare superioară.</strong></p>
        <hr />
        <p><span class='tip'>Memorie, gândire, imaginație<span class='tooltip-box'><strong>Spus simplu:</strong> lucrezi cu informația și creezi sens.<br /><br /><strong>Formulare academică:</strong> procesele secundare transformă și organizează informația la nivel înalt.<br /><br /><strong>Exemplu:</strong> îți amintești o regulă și o aplici.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>👁️&nbsp;&nbsp;Procese cognitive senzoriale</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>👁️&nbsp;&nbsp;Senzații</h3>
        <p><strong>Semnale directe ale stimulului.</strong></p>
        <hr />
        <p><span class='tip'>Nivelul de bază al recepției<span class='tooltip-box'><strong>Spus simplu:</strong> simți lumină, sunet, atingere.<br /><br /><strong>Formulare academică:</strong> semnalizează caracteristici simple ale stimulilor.<br /><br /><strong>Exemplu:</strong> rece/cald, tare/încet, luminos/întunecat.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>👀&nbsp;&nbsp;Percepții</h3>
        <p><strong>Imagine organizată a obiectului.</strong></p>
        <hr />
        <p><span class='tip'>Integrarea senzațiilor<span class='tooltip-box'><strong>Spus simplu:</strong> recunoști un obiect întreg, nu doar fragmente.<br /><br /><strong>Formulare academică:</strong> percepția unifică senzațiile într‑o reprezentare coerentă.<br /><br /><strong>Exemplu:</strong> vezi „un scaun”, nu doar culoare și formă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Reprezentări</h3>
        <p><strong>Imagine mentală fără stimul prezent.</strong></p>
        <hr />
        <p><span class='tip'>Păstrezi forma în minte<span class='tooltip-box'><strong>Spus simplu:</strong> îți „imaginezi” ceva văzut înainte.<br /><br /><strong>Formulare academică:</strong> reprezentarea reconstruiește mental obiectul în absența stimulului.<br /><br /><strong>Exemplu:</strong> îți imaginezi fața unui prieten.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧮&nbsp;&nbsp;Proprietăți ale sistemelor cognitive</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Reprezentarea</h3>
        <hr />
        <p><span class='tip'>Modele mentale ale realității<span class='tooltip-box'><strong>Spus simplu:</strong> îți faci „hărți” mentale despre obiecte și situații.<br /><br /><strong>Formulare academică:</strong> sistemele cognitive construiesc reprezentări ale lumii.<br /><br /><strong>Exemplu:</strong> schema unei sarcini în minte.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧮&nbsp;&nbsp;Calculul</h3>
        <hr />
        <p><span class='tip'>Operare logică cu informații<span class='tooltip-box'><strong>Spus simplu:</strong> compari, deduci, alegi soluții.<br /><br /><strong>Formulare academică:</strong> sistemele cognitive operează transformări asupra informației reprezentate.<br /><br /><strong>Exemplu:</strong> rezolvi o problemă prin pași.</span></span></p>
      </div>
    </div>
  `,
  "fph-t4c": `
    <div class="lesson-highlight">
      <strong>🎛️&nbsp;&nbsp;Procese reglatorii:</strong>
      sunt <span class='tip'>mecanismele care oferă energie, direcție și control comportamentului<span class='tooltip-box'><strong>Spus simplu:</strong> ele te pun în mișcare, îți dau sens și te ajută să continui.<br /><br /><strong>Formulare academică:</strong> procesele reglatorii coordonează dinamica activității psihice prin motivare, afectivitate și voință.<br /><br /><strong>Exemplu:</strong> motivația pornește acțiunea, emoțiile colorează decizia, voința o menține.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Componente principale</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Motivația</h3>
        <p><strong>De ce acționezi.</strong></p>
        <hr />
        <p><span class='tip'>Energia și scopul acțiunii<span class='tooltip-box'><strong>Spus simplu:</strong> te pornește și îți dă direcție.<br /><br /><strong>Formulare academică:</strong> motivația orientează și susține comportamentul către scopuri.<br /><br /><strong>Exemplu:</strong> înveți pentru un examen important.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>❤️&nbsp;&nbsp;Afectivitatea</h3>
        <p><strong>Trăirea emoțională.</strong></p>
        <hr />
        <p><span class='tip'>Poate impulsiona sau bloca acțiunea<span class='tooltip-box'><strong>Spus simplu:</strong> emoțiile îți pot accelera sau încetini reacțiile.<br /><br /><strong>Formulare academică:</strong> afectivitatea influențează intensitatea și direcția conduitei.<br /><br /><strong>Exemplu:</strong> frica poate bloca răspunsul, entuziasmul îl accelerează.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧱&nbsp;&nbsp;Voința</h3>
        <p><strong>Control și perseverență.</strong></p>
        <hr />
        <p><span class='tip'>Menții efortul în timp<span class='tooltip-box'><strong>Spus simplu:</strong> continui chiar dacă e greu.<br /><br /><strong>Formulare academică:</strong> voința susține autodeterminarea și controlul acțiunilor.<br /><br /><strong>Exemplu:</strong> duci la capăt o sarcină dificilă.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>✅&nbsp;&nbsp;Rolul lor în comportament</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>✅&nbsp;&nbsp;Direcție și control</h3>
        <hr />
        <p><span class='tip'>Fără procese reglatorii nu există stabilitate în acțiune<span class='tooltip-box'><strong>Spus simplu:</strong> ele te ajută să nu te oprești la jumătate.<br /><br /><strong>Formulare academică:</strong> procesele reglatorii furnizează energia și controlul necesare procesării informației și conduitei.<br /><br /><strong>Exemplu:</strong> îți păstrezi concentrarea până termini un exercițiu.</span></span></p>
      </div>
    </div>
  `,
  "fph-t4d": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Zone cerebrale:</strong>
      diferite regiuni ale creierului sunt <span class='tip'>specializate în funcții cognitive și reglatorii<span class='tooltip-box'><strong>Spus simplu:</strong> fiecare zonă are „specialitatea” ei.<br /><br /><strong>Formulare academică:</strong> lobii cerebrali și cerebelul au roluri distincte în procesarea informației.<br /><br /><strong>Exemplu:</strong> lobul frontal ajută la planificare, lobul occipital la vedere.</span></span>.
    </div>
    <hr />

    <h2>💡&nbsp;&nbsp;Regiuni și roluri</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Lobul frontal</h3>
        <p><strong>Planificare, control motor, vorbire.</strong></p>
        <hr />
        <p><span class='tip'>Funcții executive<span class='tooltip-box'><strong>Spus simplu:</strong> organizează acțiunile și deciziile.<br /><br /><strong>Formulare academică:</strong> implicat în planificare, control motor și producerea limbajului.<br /><br /><strong>Exemplu:</strong> îți construiești un plan și îl pui în practică.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Lobul parietal</h3>
        <p><strong>Integrare tactilă și spațială.</strong></p>
        <hr />
        <p><span class='tip'>Conștiință corporală<span class='tooltip-box'><strong>Spus simplu:</strong> știi unde este corpul tău în spațiu.<br /><br /><strong>Formulare academică:</strong> integrează senzațiile tactile și orientarea spațială.<br /><br /><strong>Exemplu:</strong> localizezi o atingere.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎧&nbsp;&nbsp;Lobul temporal</h3>
        <p><strong>Auz, recunoaștere, limbaj.</strong></p>
        <hr />
        <p><span class='tip'>Auz și recunoaștere facială<span class='tooltip-box'><strong>Spus simplu:</strong> recunoști voci și fețe.<br /><br /><strong>Formulare academică:</strong> implicat în procesare auditivă și recunoașterea tiparelor.<br /><br /><strong>Exemplu:</strong> identifici o voce la telefon.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>👁️&nbsp;&nbsp;Lobul occipital</h3>
        <p><strong>Procesare vizuală.</strong></p>
        <hr />
        <p><span class='tip'>Analiza vizuală de bază<span class='tooltip-box'><strong>Spus simplu:</strong> vezi forma, culoarea, mișcarea.<br /><br /><strong>Formulare academică:</strong> sediul procesării vizuale primare.<br /><br /><strong>Exemplu:</strong> recunoști conturul unui obiect.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚖️&nbsp;&nbsp;Cerebelul</h3>
        <p><strong>Coordonare și echilibru.</strong></p>
        <hr />
        <p><span class='tip'>Mișcări precise și stabile<span class='tooltip-box'><strong>Spus simplu:</strong> te ajută să te miști corect.<br /><br /><strong>Formulare academică:</strong> coordonează mișcările și menține echilibrul.<br /><br /><strong>Exemplu:</strong> mers stabil sau scris lizibil.</span></span></p>
      </div>
    </div>
  `,
  "fph-t4e": `
    <div class="lesson-highlight">
      <strong>🧩&nbsp;&nbsp;Integrarea senzorială:</strong>
      este <span class='tip'>organizarea senzațiilor interne și externe pentru acțiune eficientă<span class='tooltip-box'><strong>Spus simplu:</strong> creierul pune cap la cap semnalele ca să reacționezi corect.<br /><br /><strong>Formulare academică:</strong> integrarea senzorială organizează informațiile din corp și din mediu pentru utilizare adaptativă.<br /><br /><strong>Exemplu:</strong> îți coordonezi postura cu ce vezi și auzi.</span></span>.
    </div>
    <hr />

    <h2>👁️‍🗨️&nbsp;&nbsp;Integrarea multisenzorială</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>👁️‍🗨️&nbsp;&nbsp;Definiție</h3>
        <p><strong>Combinarea mai multor simțuri.</strong></p>
        <hr />
        <p><span class='tip'>Reprezentare unitară a lumii<span class='tooltip-box'><strong>Spus simplu:</strong> vezi și auzi același eveniment ca „un tot”.<br /><br /><strong>Formulare academică:</strong> integrarea multisenzorială creează o reprezentare întregită a realității prin combinarea modalităților senzoriale.<br /><br /><strong>Exemplu:</strong> vezi buzele mișcându‑se și auzi vocea.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Scop adaptativ</h3>
        <p><strong>Răspuns mai precis la mediu.</strong></p>
        <hr />
        <p><span class='tip'>Crește eficiența reacțiilor<span class='tooltip-box'><strong>Spus simplu:</strong> când combini simțurile, răspunzi mai sigur.<br /><br /><strong>Formulare academică:</strong> integrarea multisenzorială optimizează adaptarea prin sinergia informațiilor senzoriale.<br /><br /><strong>Exemplu:</strong> înțelegi mai bine vorbirea când vezi fața vorbitorului.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Diferența între cele două</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Integrare senzorială</h3>
        <hr />
        <p><span class='tip'>Organizare generală a senzațiilor<span class='tooltip-box'><strong>Spus simplu:</strong> include și semnalele din corp, nu doar din simțuri externe.<br /><br /><strong>Formulare academică:</strong> cadru larg de organizare senzorială pentru acțiune.<br /><br /><strong>Exemplu:</strong> postura + vedere + auz.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>👁️‍🗨️&nbsp;&nbsp;Integrare multisenzorială</h3>
        <hr />
        <p><span class='tip'>Combinarea dintre modalități senzoriale diferite<span class='tooltip-box'><strong>Spus simplu:</strong> două sau mai multe simțuri lucrează împreună.<br /><br /><strong>Formulare academică:</strong> integrarea simultană a mai multor canale senzoriale.<br /><br /><strong>Exemplu:</strong> văz + auz în același eveniment.</span></span></p>
      </div>
    </div>
  `,
  "fph-t4f": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Principiile integrării multisenzoriale:</strong>
      explică <span class='tip'>când și cum se combină semnalele din simțuri diferite<span class='tooltip-box'><strong>Spus simplu:</strong> creierul le unește mai ușor când par să vină din același loc și timp, sau când sunt slabe separat.<br /><br /><strong>Formulare academică:</strong> integrarea este facilitată de coincidența spațială/temporală și de principiul eficienței inverse.<br /><br /><strong>Exemplu:</strong> vezi o minge lovind podeaua și auzi sunetul în același moment.</span></span>.
    </div>
    <hr />

    <h2>📌&nbsp;&nbsp;Reguli principale</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>📍&nbsp;&nbsp;Regula spațială</h3>
        <p><strong>Integrare dacă sursa pare aceeași.</strong></p>
        <hr />
        <p><span class='tip'>Aceeași locație → integrare mai ușoară<span class='tooltip-box'><strong>Spus simplu:</strong> dacă pare că vin din același loc, le unești.<br /><br /><strong>Formulare academică:</strong> stimuli proveniți din aceeași zonă spațială se integrează mai eficient.<br /><br /><strong>Exemplu:</strong> sunetul și lumina din același loc par „același eveniment”.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⏱️&nbsp;&nbsp;Regula temporală</h3>
        <p><strong>Integrare dacă apar împreună în timp.</strong></p>
        <hr />
        <p><span class='tip'>Sincronizare → integrare mai ușoară<span class='tooltip-box'><strong>Spus simplu:</strong> dacă apar aproape simultan, le legi.<br /><br /><strong>Formulare academică:</strong> co‑apariția temporală facilitează integrarea multisenzorială.<br /><br /><strong>Exemplu:</strong> vezi o ușă închizându‑se și auzi sunetul imediat.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⬇️&nbsp;&nbsp;Principiul eficienței inverse</h3>
        <p><strong>Stimulii slabi se combină eficient.</strong></p>
        <hr />
        <p><span class='tip'>Slab separat → puternic împreună<span class='tooltip-box'><strong>Spus simplu:</strong> când fiecare e mic, combinarea ajută mult.<br /><br /><strong>Formulare academică:</strong> efectul integrării e mai pronunțat când stimulii sunt slabi individual.<br /><br /><strong>Exemplu:</strong> înțelegi vorbirea mai bine când și vezi fața vorbitorului.</span></span></p>
      </div>
    </div>
  `,
  "fph-t5a": `
    <div class="lesson-highlight">
      <strong>🧩&nbsp;&nbsp;Senzația:</strong>
      este <span class='tip'>proces cognitiv primar<span class='tooltip-box'><strong>Spus simplu:</strong> primul „contact” cu stimulul, fără prelucrări complexe.<br /><br /><strong>Formulare academică:</strong> senzațiile sunt procese cognitive primare care semnalizează caracteristici simple ale stimulilor.<br /><br /><strong>Exemplu:</strong> simți rece/cald, tare/încet, luminos/întunecat.</span></span>, produsă prin acțiunea directă a stimulilor asupra <span class='tip'>organelor de simț<span class='tooltip-box'><strong>Spus simplu:</strong> ochi, urechi, piele, nas, limbă.<br /><br /><strong>Formulare academică:</strong> analizatorii includ organul de simț, căile nervoase și zonele corticale specializate.<br /><br /><strong>Exemplu:</strong> lumina activează analizatorul vizual.</span></span>.
    </div>
    <hr />

    <h2>📌&nbsp;&nbsp;Calitățile senzației</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>📏&nbsp;&nbsp;Intensitatea</h3>
        <p><strong>Depinde de tăria stimulului și de starea persoanei.</strong></p>
        <hr />
        <p><span class='tip'>Mai puternic → senzație mai intensă<span class='tooltip-box'><strong>Spus simplu:</strong> un sunet tare se simte mai intens decât unul slab.<br /><br /><strong>Formulare academică:</strong> intensitatea senzației variază în funcție de intensitatea stimulului și de starea organismului.<br /><br /><strong>Exemplu:</strong> oboseala scade sensibilitatea la stimuli slabi.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎨&nbsp;&nbsp;Calitatea</h3>
        <p><strong>Dată de specificitatea analizatorului.</strong></p>
        <hr />
        <p><span class='tip'>Vizual, auditiv, olfactiv etc.<span class='tooltip-box'><strong>Spus simplu:</strong> fiecare simț dă un tip diferit de senzație.<br /><br /><strong>Formulare academică:</strong> calitatea este determinată de tipul analizatorului stimulat.<br /><br /><strong>Exemplu:</strong> lumina produce senzație vizuală, sunetul produce senzație auditivă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⏱️&nbsp;&nbsp;Durata</h3>
        <p><strong>Depinde de timpul de acțiune al stimulului.</strong></p>
        <hr />
        <p><span class='tip'>Cât timp simți stimulul<span class='tooltip-box'><strong>Spus simplu:</strong> dacă stimulul durează, senzația se menține.<br /><br /><strong>Formulare academică:</strong> durata senzației este legată de durata acțiunii stimulului.<br /><br /><strong>Exemplu:</strong> o lumină aprinsă continuu menține senzația vizuală.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>💗&nbsp;&nbsp;Tonalitatea afectivă</h3>
        <p><strong>Culoarea emoțională a senzației.</strong></p>
        <hr />
        <p><span class='tip'>Plăcut/ neplăcut<span class='tooltip-box'><strong>Spus simplu:</strong> unele senzații plac, altele resping.<br /><br /><strong>Formulare academică:</strong> tonalitatea afectivă depinde de experiența anterioară și context.<br /><br /><strong>Exemplu:</strong> mirosul preferat este plăcut, mirosul de fum poate fi neplăcut.</span></span></p>
      </div>
    </div>
  `,
  "fph-t5b": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Tipuri de senzații:</strong>
      se clasifică după <span class='tip'>natura conținutului informațional<span class='tooltip-box'><strong>Spus simplu:</strong> de unde vine informația și ce anume semnalizează.<br /><br /><strong>Formulare academică:</strong> clasificarea se face după sursa stimulării și tipul de informație transmisă.<br /><br /><strong>Exemplu:</strong> unele provin din mediu, altele din corp.</span></span>.
    </div>
    <hr />

    <h2>🌍&nbsp;&nbsp;Senzații externe (exteroceptive)</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>👁️&nbsp;&nbsp;Vizuale</h3>
        <p><strong>Provocate de lumină.</strong></p>
        <hr />
        <p><span class='tip'>Culoare, formă, strălucire<span class='tooltip-box'><strong>Spus simplu:</strong> vezi obiecte și culori.<br /><br /><strong>Formulare academică:</strong> apar prin acțiunea luminii asupra analizatorului vizual.<br /><br /><strong>Exemplu:</strong> distingi roșu de albastru.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎧&nbsp;&nbsp;Auditive</h3>
        <p><strong>Provocate de unde sonore.</strong></p>
        <hr />
        <p><span class='tip'>Sunete și zgomote<span class='tooltip-box'><strong>Spus simplu:</strong> auzi intensitate și înălțime a sunetului.<br /><br /><strong>Formulare academică:</strong> apar prin acțiunea undelor sonore asupra urechii.<br /><br /><strong>Exemplu:</strong> auzi o sirenă sau muzica.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>👅&nbsp;&nbsp;Gustative</h3>
        <p><strong>Provocate de substanțe chimice.</strong></p>
        <hr />
        <p><span class='tip'>Gusturi de bază<span class='tooltip-box'><strong>Spus simplu:</strong> dulce, sărat, acru, amar.<br /><br /><strong>Formulare academică:</strong> apar prin acțiunea substanțelor asupra receptorilor gustativi.<br /><br /><strong>Exemplu:</strong> simți gustul unei lămâi.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>👃&nbsp;&nbsp;Olfactive</h3>
        <p><strong>Provocate de particule volatile.</strong></p>
        <hr />
        <p><span class='tip'>Mirosuri diverse<span class='tooltip-box'><strong>Spus simplu:</strong> recunoști mirosuri distincte.<br /><br /><strong>Formulare academică:</strong> apar prin acțiunea particulelor asupra analizatorului olfactiv.<br /><br /><strong>Exemplu:</strong> miros de fum sau parfum.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>✋&nbsp;&nbsp;Cutanate</h3>
        <p><strong>Atingere, presiune, temperatură.</strong></p>
        <hr />
        <p><span class='tip'>Pielea ca receptor<span class='tooltip-box'><strong>Spus simplu:</strong> simți rece/cald sau atingere.<br /><br /><strong>Formulare academică:</strong> apar la nivelul pielii prin receptori specifici.<br /><br /><strong>Exemplu:</strong> simți textura unei suprafețe.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🫀&nbsp;&nbsp;Senzații interne (interoceptive)</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🫀&nbsp;&nbsp;Foame, sete, durere organică</h3>
        <hr />
        <p><span class='tip'>Semnale din interiorul corpului<span class='tooltip-box'><strong>Spus simplu:</strong> corpul „îți spune” ce are nevoie.<br /><br /><strong>Formulare academică:</strong> apar din stările organice interne.<br /><br /><strong>Exemplu:</strong> senzația de foame după efort.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Senzații despre poziție și mișcare</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🧍&nbsp;&nbsp;Proprioceptive</h3>
        <hr />
        <p><span class='tip'>Postura și poziția corpului<span class='tooltip-box'><strong>Spus simplu:</strong> știi unde sunt mâinile sau picioarele.<br /><br /><strong>Formulare academică:</strong> semnalizează postura și poziția segmentelor corpului.<br /><br /><strong>Exemplu:</strong> poți sta cu ochii închiși și tot știi cum ții brațele.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🏃&nbsp;&nbsp;Chinestezice</h3>
        <hr />
        <p><span class='tip'>Direcția și intensitatea mișcării<span class='tooltip-box'><strong>Spus simplu:</strong> simți cum te miști.<br /><br /><strong>Formulare academică:</strong> semnalizează mișcarea segmentelor corpului.<br /><br /><strong>Exemplu:</strong> simți viteza când alergi.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚖️&nbsp;&nbsp;De echilibru</h3>
        <hr />
        <p><span class='tip'>Poziția corpului față de gravitație<span class='tooltip-box'><strong>Spus simplu:</strong> știi când ești înclinat sau drept.<br /><br /><strong>Formulare academică:</strong> semnalizează schimbările poziției capului și corpului în raport cu gravitația.<br /><br /><strong>Exemplu:</strong> îți păstrezi echilibrul pe bicicletă.</span></span></p>
      </div>
    </div>
  `,
  "fph-t5c": `
    <div class="lesson-highlight">
      <strong>📏&nbsp;&nbsp;Legile sensibilității – raport stimul–senzație:</strong>
      descriu <span class='tip'>raportul direct stimul → senzație<span class='tooltip-box'><strong>Spus simplu:</strong> cum influențează proprietățile stimulului apariția și intensitatea senzației.<br /><br /><strong>Formulare academică:</strong> aceste legi explică modul în care caracteristicile stimulului determină apariția și modificarea senzației în același analizator.<br /><br /><strong>Notă:</strong> această grupare este o modalitate de a le ordona pentru învățare.<br /><br /><strong>Exemplu:</strong> cât de puternic e stimulul, cât de semnificativ îl percepi.</span></span>.
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Legi (raport stimul–senzație)</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>📈&nbsp;&nbsp;Legea intensității</h3>
        <p><strong>Senzația depinde de praguri.</strong></p>
        <hr />
        <p><span class='tip'>Prag minim absolut și prag diferențial<span class='tooltip-box'><strong>Spus simplu:</strong> trebuie să fie destul de puternic ca să simți, și destul de diferit ca să observi schimbarea.<br /><br /><strong>Formulare academică:</strong> apariția și modificarea senzației se produc când intensitatea stimulului depășește praguri specifice.<br /><br /><strong>Exemplu:</strong> o lumină foarte slabă nu e percepută; o creștere mică poate fi imperceptibilă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚖️&nbsp;&nbsp;Legea contrastului</h3>
        <p><strong>Opoziția evidențiază senzația.</strong></p>
        <hr />
        <p><span class='tip'>Stimuli opuși se scot reciproc în evidență<span class='tooltip-box'><strong>Spus simplu:</strong> cald/rece sau lumină/întuneric se percep mai clar prin comparație.<br /><br /><strong>Formulare academică:</strong> contrastul senzorial sporește claritatea percepției între stimuli cu proprietăți opuse.<br /><br /><strong>Exemplu:</strong> o pată albă pare mai strălucitoare pe fundal negru.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⭐&nbsp;&nbsp;Legea semnificației</h3>
        <p><strong>Importanța crește sensibilitatea.</strong></p>
        <hr />
        <p><span class='tip'>Relevanța personală intensifică reacția<span class='tooltip-box'><strong>Spus simplu:</strong> ce e important pentru tine „sare în ochi”.<br /><br /><strong>Formulare academică:</strong> sensibilitatea crește pentru stimulii cu semnificație ridicată pentru individ.<br /><br /><strong>Exemplu:</strong> îți auzi numele într‑un zgomot de fundal.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧪&nbsp;&nbsp;Idee centrală</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🧪&nbsp;&nbsp;Stimulul modelează senzația</h3>
        <hr />
        <p><span class='tip'>Intensitate, opoziție, semnificație<span class='tooltip-box'><strong>Spus simplu:</strong> ceea ce simți depinde de „cât”, „în raport cu ce” și „cât contează”.<br /><br /><strong>Formulare academică:</strong> proprietățile stimulului determină apariția și gradul senzației în cadrul analizatorului.<br /><br /><strong>Exemplu:</strong> același sunet poate fi ignorat sau remarcat, în funcție de importanță.</span></span></p>
      </div>
    </div>
  `,
  "fph-t5d": `
    <div class="lesson-highlight">
      <strong>🔁&nbsp;&nbsp;Legile sensibilității – adaptare și interacțiune:</strong>
      descriu <span class='tip'>schimbarea sensibilității în timp și interacțiunea dintre analizatori<span class='tooltip-box'><strong>Spus simplu:</strong> sensibilitatea se adaptează, iar simțurile se influențează între ele.<br /><br /><strong>Formulare academică:</strong> aceste legi explică adaptarea sensibilității și influența reciprocă a analizatorilor.<br /><br /><strong>Notă:</strong> această grupare este o modalitate de a le ordona pentru învățare.<br /><br /><strong>Exemplu:</strong> te obișnuiești cu un miros, iar un stimul vizual poate intensifica reacția auditivă.</span></span>.
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Legi (adaptare și interacțiune)</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🔄&nbsp;&nbsp;Legea adaptării</h3>
        <p><strong>Sensibilitatea se modifică în timp.</strong></p>
        <hr />
        <p><span class='tip'>Repetiția reduce sau crește sensibilitatea<span class='tooltip-box'><strong>Spus simplu:</strong> după un timp, nu mai simți la fel de intens același stimul.<br /><br /><strong>Formulare academică:</strong> sensibilitatea se schimbă sub acțiunea repetată sau prelungită a stimulului.<br /><br /><strong>Exemplu:</strong> te obișnuiești cu un parfum puternic.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🔗&nbsp;&nbsp;Interacțiunea analizatorilor</h3>
        <p><strong>Simțurile se influențează reciproc.</strong></p>
        <hr />
        <p><span class='tip'>Un simț poate intensifica sau reduce altul<span class='tooltip-box'><strong>Spus simplu:</strong> ceea ce vezi poate schimba ce auzi sau simți.<br /><br /><strong>Formulare academică:</strong> funcționarea unui analizator poate modifica sensibilitatea altuia.<br /><br /><strong>Exemplu:</strong> vezi o lumină puternică și ți se pare sunetul mai intens.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>✅&nbsp;&nbsp;Idee centrală</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>✅&nbsp;&nbsp;Sensibilitatea este dinamică</h3>
        <hr />
        <p><span class='tip'>Se ajustează și în timp și între simțuri<span class='tooltip-box'><strong>Spus simplu:</strong> simțurile se adaptează și lucrează împreună.<br /><br /><strong>Formulare academică:</strong> sensibilitatea se transformă în funcție de contextul temporal și de interacțiunea senzorială.<br /><br /><strong>Exemplu:</strong> după o vreme într‑o cameră rece, senzația se diminuează.</span></span></p>
      </div>
    </div>
  `,
  "fph-t5ba": `
    <div class="lesson-highlight">
      <strong>💡&nbsp;&nbsp;Percepția:</strong>
      este <span class='tip'>proces cognitiv primar care integrează senzațiile într-o imagine unitară și coerentă<span class='tooltip-box'><strong>Spus simplu:</strong> nu rămâi la „culori și sunete”, ci recunoști obiectul și contextul lui.<br /><br /><strong>Formulare academică:</strong> percepția organizează informațiile senzoriale într-o reprezentare unitară a obiectului/situației.<br /><br /><strong>Exemplu:</strong> „o cană pe masă”, nu doar „alb + rotund”.</span></span>.
    </div>
    <hr />

    <h2>🔍&nbsp;&nbsp;Senzație vs. percepție</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧪&nbsp;&nbsp;Senzația</h3>
        <p><strong>Semnalizează trăsături simple.</strong></p>
        <hr />
        <p><span class='tip'>„Ceva e luminos/ rece/ tare”<span class='tooltip-box'><strong>Spus simplu:</strong> primești informația brută.<br /><br /><strong>Formulare academică:</strong> semnalizează caracteristici elementare ale stimulului.<br /><br /><strong>Exemplu:</strong> simți „rece” pe piele.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Percepția</h3>
        <p><strong>Integrează într-un întreg cu sens.</strong></p>
        <hr />
        <p><span class='tip'>„Este o cană, acolo pe masă”<span class='tooltip-box'><strong>Spus simplu:</strong> organizezi datele și recunoști obiectul.<br /><br /><strong>Formulare academică:</strong> percepția construiește o imagine unitară, coerentă și completă despre stimul.<br /><br /><strong>Exemplu:</strong> identifici obiectul și poziția lui.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>✅&nbsp;&nbsp;Ce înseamnă „unitar și coerent”</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>✅&nbsp;&nbsp;Întreg perceptiv</h3>
        <hr />
        <p><span class='tip'>Elementele se leagă într-o singură imagine<span class='tooltip-box'><strong>Spus simplu:</strong> nu vezi piese separate, ci un obiect complet.<br /><br /><strong>Formulare academică:</strong> percepția integrează detaliile senzoriale într-o configurație stabilă.<br /><br /><strong>Exemplu:</strong> „o față” nu este doar „ochi + nas + gură”.</span></span></p>
      </div>
    </div>
  `,
  "fph-t5ba2": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Fazele procesului perceptiv:</strong>
      percepția se desfășoară în <span class='tip'>patru etape succesive<span class='tooltip-box'><strong>Spus simplu:</strong> întâi sesizezi stimulul, apoi îl separi de fundal, îl recunoști și îi dai sens.<br /><br /><strong>Formulare academică:</strong> procesul perceptiv parcurge fazele: detecție → discriminare → identificare → interpretare (Popescu‑Neveanu, Zlate, Crețu).<br /><br /><strong>Exemplu:</strong> auzi un sunet, îl separi de zgomot, îți dai seama că e soneria și înțelegi că s-a terminat ora.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Succesiunea fazelor</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <div class="lesson-step-emoji">1️⃣</div>
        <h3>Detecția</h3>
        <p><strong>Sesizarea prezenței stimulului.</strong></p>
        <hr />
        <p><span class='tip'>Atenția se orientează spre stimul<span class='tooltip-box'><strong>Spus simplu:</strong> îți dai seama că „este ceva acolo”.<br /><br /><strong>Formulare academică:</strong> detectarea presupune conștientizarea stimulului în câmpul perceptiv.<br /><br /><strong>Exemplu:</strong> auzi un zgomot slab și îți întorci capul.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">2️⃣</div>
        <h3>Discriminarea</h3>
        <p><strong>Separarea stimulului de fond.</strong></p>
        <hr />
        <p><span class='tip'>Evidențierea trăsăturilor specifice<span class='tooltip-box'><strong>Spus simplu:</strong> distingi stimulul de „zgomotul de fundal”.<br /><br /><strong>Formulare academică:</strong> discriminarea detașează stimulul și scoate în evidență caracteristicile sale.<br /><br /><strong>Exemplu:</strong> separi sunetul soneriei de rumoare.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">3️⃣</div>
        <h3>Identificarea</h3>
        <p><strong>Recunoașterea stimulului.</strong></p>
        <hr />
        <p><span class='tip'>Raportare la un model cunoscut<span class='tooltip-box'><strong>Spus simplu:</strong> îți dai seama „ce este”.<br /><br /><strong>Formulare academică:</strong> identificarea integrează informația și o raportează la un model perceptiv.<br /><br /><strong>Exemplu:</strong> recunoști sunetul ca „sonerie”.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">4️⃣</div>
        <h3>Interpretarea</h3>
        <p><strong>Integrarea în limbaj și semnificarea în raport cu acțiunea.</strong></p>
        <hr />
        <p><span class='tip'>Etichetare mentală + sens practic<span class='tooltip-box'><strong>Spus simplu:</strong> îi dai sens stimulului (îl „etichetezi” în limbaj, de obicei intern) și îl legi de ce ai de făcut.<br /><br /><strong>Formulare academică:</strong> interpretarea înseamnă integrarea în limbaj (etichetare/denumire mentală) și semnificarea stimulului în termeni de utilitate și valorificare în activitate.<br /><br /><strong>Exemplu:</strong> „sună clopoțelul” → „ora s-a terminat, mă ridic”.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>📏&nbsp;&nbsp;Praguri asociate fazelor</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>👁️&nbsp;&nbsp;Prag minimum vizibile</h3>
        <p><strong>Detecția</strong></p>
        <hr />
        <p><span class='tip'>Stimulul devine sesizabil<span class='tooltip-box'><strong>Spus simplu:</strong> fără acest prag nu îți dai seama că e stimulul acolo.<br /><br /><strong>Formulare academică:</strong> detecția apare când stimulul depășește pragul minimum vizibile.<br /><br /><strong>Exemplu:</strong> un sunet prea slab nu este perceput.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>✂️&nbsp;&nbsp;Prag minimum separabile</h3>
        <p><strong>Discriminarea</strong></p>
        <hr />
        <p><span class='tip'>Poți separa stimulul de fond<span class='tooltip-box'><strong>Spus simplu:</strong> diferența devine suficient de clară.<br /><br /><strong>Formulare academică:</strong> discriminarea presupune depășirea pragului minimum separabile.<br /><br /><strong>Exemplu:</strong> recunoști clopoțelul din bruiaj.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Prag minimum cognoscibile</h3>
        <p><strong>Identificarea</strong></p>
        <hr />
        <p><span class='tip'>Stimulul devine recognoscibil<span class='tooltip-box'><strong>Spus simplu:</strong> ajungi să știi ce este.<br /><br /><strong>Formulare academică:</strong> identificarea apare când stimulul depășește pragul minimum cognoscibile.<br /><br /><strong>Exemplu:</strong> nu doar „sunet”, ci „sonerie”.</span></span></p>
      </div>
    </div>
  `,
  "fph-t5bb": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Legi ale percepției:</strong>
      descriu <span class='tip'>cum se organizează intern imaginea perceptivă<span class='tooltip-box'><strong>Spus simplu:</strong> percepția nu e o listă de detalii, ci un întreg structurat.<br /><br /><strong>Formulare academică:</strong> aceste legi explică integrarea, structurarea și selectarea informației perceptive.<br /><br /><strong>Exemplu:</strong> vezi „obiectul”, nu doar culori izolate.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Legi ale organizării interne</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🔗&nbsp;&nbsp;Legea integralității</h3>
        <p><strong>Imaginea perceptivă este un întreg.</strong></p>
        <hr />
        <p><span class='tip'>Unitate, nu sumă de părți<span class='tooltip-box'><strong>Spus simplu:</strong> percepi obiectul ca un tot coerent.<br /><br /><strong>Formulare academică:</strong> percepția tinde să realizeze o integrare unitară a elementelor.<br /><br /><strong>Exemplu:</strong> recunoști o față ca „față”.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🏗️&nbsp;&nbsp;Legea structuralității</h3>
        <p><strong>Organizare ierarhică a trăsăturilor.</strong></p>
        <hr />
        <p><span class='tip'>Ce e relevant iese în evidență<span class='tooltip-box'><strong>Spus simplu:</strong> unele trăsături „se impun” mai mult.<br /><br /><strong>Formulare academică:</strong> caracteristicile mai intense/informative apar în plan perceptiv.<br /><br /><strong>Exemplu:</strong> conturul puternic atrage mai întâi atenția.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Legea selectivității</h3>
        <p><strong>Percepi prioritar ce e relevant.</strong></p>
        <hr />
        <p><span class='tip'>Interesul orientează percepția<span class='tooltip-box'><strong>Spus simplu:</strong> nu percepi tot la fel, selectezi ce contează.<br /><br /><strong>Formulare academică:</strong> selectivitatea perceptivă depinde de scop, interes și context.<br /><br /><strong>Exemplu:</strong> auzi propriul nume într-o mulțime.</span></span></p>
      </div>
    </div>
  `,
  "fph-t5bc": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Alte legi ale percepției:</strong>
      descriu <span class='tip'>stabilitatea imaginii și direcționarea ei către obiect<span class='tooltip-box'><strong>Spus simplu:</strong> vezi obiectul „acolo”, constant, chiar dacă se schimbă condițiile.<br /><br /><strong>Formulare academică:</strong> legile constanței, semnificației și proiectivității explică stabilitatea și orientarea perceptivă.<br /><br /><strong>Exemplu:</strong> o ușă rămâne „dreptunghi”, deși o vezi oblic.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Legi ale stabilității și direcționării</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🧱&nbsp;&nbsp;Legea constanței</h3>
        <p><strong>Forma, mărimea, culoarea par stabile.</strong></p>
        <hr />
        <p><span class='tip'>Compensare a schimbărilor de context<span class='tooltip-box'><strong>Spus simplu:</strong> obiectul rămâne „același”, deși unghiul/lumina se schimbă.<br /><br /><strong>Formulare academică:</strong> percepția păstrează relativ constante proprietățile obiectului.<br /><br /><strong>Exemplu:</strong> o mașină îndepărtată nu „devine mică”, doar pare mai departe.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⭐&nbsp;&nbsp;Legea semnificației</h3>
        <p><strong>Relevanța subiectivă orientează percepția.</strong></p>
        <hr />
        <p><span class='tip'>Ce e important se vede mai clar<span class='tooltip-box'><strong>Spus simplu:</strong> ceea ce contează pentru tine iese în față.<br /><br /><strong>Formulare academică:</strong> stimulii semnificativi sunt percepuți prioritar și mai clar.<br /><br /><strong>Exemplu:</strong> îți remarci prietenul într-o mulțime.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Legea proiectivității</h3>
        <p><strong>Imaginea perceptivă este „plasată” în exterior.</strong></p>
        <hr />
        <p><span class='tip'>Trăiești percepția ca venind dinspre obiect<span class='tooltip-box'><strong>Spus simplu:</strong> vezi obiectul „acolo”, nu „în cap”.<br /><br /><strong>Formulare academică:</strong> imaginea perceptivă este proiectată către sursa stimulului.<br /><br /><strong>Exemplu:</strong> vezi cartea pe masă, nu ca imagine internă.</span></span></p>
      </div>
    </div>
  `,
  "fph-t5bd": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Forme ale percepției:</strong>
      includ <span class='tip'>spațiul, timpul și mișcarea<span class='tooltip-box'><strong>Spus simplu:</strong> percepem unde e ceva, cât durează și dacă se mișcă.<br /><br /><strong>Formulare academică:</strong> percepția organizează informația spațială, temporală și dinamică.<br /><br /><strong>Exemplu:</strong> vezi un obiect, cât durează un eveniment și dacă se deplasează.</span></span>.
    </div>
    <hr />

    <h2>🗺️&nbsp;&nbsp;Percepția spațiului</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>📐&nbsp;&nbsp;Formă și mărime</h3>
        <p><strong>Structura obiectului.</strong></p>
        <hr />
        <p><span class='tip'>Dimensiuni, contur, relief<span class='tooltip-box'><strong>Spus simplu:</strong> înțelegi cum arată obiectul.<br /><br /><strong>Formulare academică:</strong> percepția spațiului include formă, mărime și relief.<br /><br /><strong>Exemplu:</strong> recunoști o cutie dreptunghiulară.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>📍&nbsp;&nbsp;Poziție și distanță</h3>
        <p><strong>Unde e obiectul în spațiu.</strong></p>
        <hr />
        <p><span class='tip'>Aproape/departe, stânga/dreapta<span class='tooltip-box'><strong>Spus simplu:</strong> localizezi obiectul în raport cu tine.<br /><br /><strong>Formulare academică:</strong> percepția spațială include poziția și distanța obiectelor.<br /><br /><strong>Exemplu:</strong> „cartea e pe masa din dreapta”.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>⏱️&nbsp;&nbsp;Percepția timpului</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>⏱️&nbsp;&nbsp;Durată</h3>
        <hr />
        <p><span class='tip'>Cât timp a durat un eveniment<span class='tooltip-box'><strong>Spus simplu:</strong> simți dacă a fost scurt sau lung.<br /><br /><strong>Formulare academică:</strong> durata este componenta principală a percepției timpului.<br /><br /><strong>Exemplu:</strong> o pauză de 10 secunde pare „lungă”.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🔁&nbsp;&nbsp;Succesiune</h3>
        <hr />
        <p><span class='tip'>Ordinea în care se petrec lucrurile<span class='tooltip-box'><strong>Spus simplu:</strong> știi ce a fost înainte și ce urmează după.<br /><br /><strong>Formulare academică:</strong> percepția temporală include succesiunea evenimentelor.<br /><br /><strong>Exemplu:</strong> întâi a sunat clopoțelul, apoi a intrat profesorul.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🏃&nbsp;&nbsp;Percepția mișcării</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🏃&nbsp;&nbsp;Reper și persistență</h3>
        <hr />
        <p><span class='tip'>Mișcarea se percepe față de repere și prin persistența imaginii retiniene<span class='tooltip-box'><strong>Spus simplu:</strong> compari poziții succesive și „legi” cadrele între ele.<br /><br /><strong>Formulare academică:</strong> reperele și persistența imaginii retiniene facilitează percepția mișcării.<br /><br /><strong>Exemplu:</strong> la luminile intermitente, creierul vede mișcare continuă.</span></span></p>
      </div>
    </div>
  `,
  "fph-t5be": `
    <div class="lesson-highlight">
      <strong>🌀&nbsp;&nbsp;Iluziile perceptive:</strong>
      sunt <span class='tip'>distorsiuni ale imaginii perceptive produse de context<span class='tooltip-box'><strong>Spus simplu:</strong> stimulul e real, dar îl „vezi altfel” din cauza felului în care se organizează câmpul perceptiv.<br /><br /><strong>Formulare academică:</strong> iluziile sunt modificări ale percepției generate de efecte de câmp și de regulile organizării perceptive.<br /><br /><strong>Exemplu:</strong> două segmente egale par diferite din cauza săgeților de la capete.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;De ce apar</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧲&nbsp;&nbsp;Efecte de câmp</h3>
        <p><strong>Contextul modifică percepția.</strong></p>
        <hr />
        <p><span class='tip'>Fundalul schimbă „cum vezi” figura<span class='tooltip-box'><strong>Spus simplu:</strong> același lucru pare diferit în alt context.<br /><br /><strong>Formulare academică:</strong> relațiile dintre elementele câmpului perceptiv duc la distorsiuni ale imaginii.<br /><br /><strong>Exemplu:</strong> aceeași nuanță pare mai deschisă pe fundal închis.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Reguli de organizare</h3>
        <p><strong>Percepția construiește automat un întreg.</strong></p>
        <hr />
        <p><span class='tip'>Creierul „completează” după reguli<span class='tooltip-box'><strong>Spus simplu:</strong> creierul caută ordine și poate greși.<br /><br /><strong>Formulare academică:</strong> iluziile rezultă din aplicarea automată a legilor perceptive.<br /><br /><strong>Exemplu:</strong> vezi mișcare acolo unde sunt doar cadre.</span></span></p>
      </div>
    </div>
  `,
  "fph-t6a": `
    <div class="lesson-highlight">
      <strong>💡&nbsp;&nbsp;Reprezentarea:</strong>
      este <span class='tip'>proces cognitiv‑senzorial<span class='tooltip-box'><strong>Spus simplu:</strong> păstrează și reconstruiește mental ceea ce ai perceput înainte.<br /><br /><strong>Formulare academică:</strong> reprezentarea semnalizează caracteristici concrete și reprezentative ale stimulilor, sub forma unor imagini secundare, unitare, dar schematice, în absența acțiunii nemijlocite asupra analizatorilor.<br /><br /><strong>Exemplu:</strong> îți imaginezi bicicleta ta fără să o vezi.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Ce păstrează reprezentarea</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>📐&nbsp;&nbsp;Caracteristici concrete</h3>
        <p><strong>Formă, culoare, dimensiune, contur.</strong></p>
        <hr />
        <p><span class='tip'>Detalii perceptive de bază<span class='tooltip-box'><strong>Spus simplu:</strong> rămân trăsăturile ușor de recunoscut.<br /><br /><strong>Formulare academică:</strong> reprezentarea semnalizează caracteristici concrete ale stimulului.<br /><br /><strong>Exemplu:</strong> „rotund”, „roșu”, „mare”.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⭐&nbsp;&nbsp;Caracteristici reprezentative</h3>
        <p><strong>Trăsături esențiale ale obiectului.</strong></p>
        <hr />
        <p><span class='tip'>Ce rămâne stabil în minte<span class='tooltip-box'><strong>Spus simplu:</strong> reții esențialul, nu toate detaliile.<br /><br /><strong>Formulare academică:</strong> reprezentarea păstrează trăsături stabile, relevante pentru recunoaștere.<br /><br /><strong>Exemplu:</strong> „are toartă” → recunoști o cană.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🖼️&nbsp;&nbsp;Imagine secundară și schematică</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <div class="lesson-step-emoji">1️⃣</div>
        <h3>Imagine secundară</h3>
        <hr />
        <p><span class='tip'>Apare când stimulul nu mai este prezent<span class='tooltip-box'><strong>Spus simplu:</strong> obiectul lipsește, dar îl poți „vedea” mental.<br /><br /><strong>Formulare academică:</strong> reprezentarea continuă percepția în absența stimulului real.<br /><br /><strong>Exemplu:</strong> îți imaginezi chipul unui prieten.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">2️⃣</div>
        <h3>Imagine schematică</h3>
        <hr />
        <p><span class='tip'>Păstrează esențialul, nu totul<span class='tooltip-box'><strong>Spus simplu:</strong> este o „versiune simplificată”.<br /><br /><strong>Formulare academică:</strong> reprezentarea este unitară, dar schematizată.<br /><br /><strong>Exemplu:</strong> știi forma generală a unei clădiri, nu fiecare detaliu.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🚫&nbsp;&nbsp;Absența acțiunii nemijlocite</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🚫&nbsp;&nbsp;Fără stimul direct</h3>
        <hr />
        <p><span class='tip'>Analizatorii nu sunt stimulați direct<span class='tooltip-box'><strong>Spus simplu:</strong> nu e contact senzorial imediat.<br /><br /><strong>Formulare academică:</strong> reprezentarea apare în absența acțiunii nemijlocite a stimulului asupra analizatorilor.<br /><br /><strong>Exemplu:</strong> „vezi” mental o melodie fără s-o auzi.</span></span></p>
      </div>
    </div>
  `,
  "fph-t6b": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Reprezentările:</strong>
      sunt <span class='tip'>imagini mintale formate pe baza percepțiilor<span class='tooltip-box'><strong>Spus simplu:</strong> pornesc din ce ai perceput înainte și pot apărea fără stimul prezent.<br /><br /><strong>Formulare academică:</strong> reprezentările continuă percepția și devin disponibile în absența obiectului.<br /><br /><strong>Exemplu:</strong> îți „auzi” în minte o melodie după ce ai ascultat‑o.</span></span>.
    </div>
    <hr />

    <h2>🎯&nbsp;&nbsp;Tipuri după analizator</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>👁️&nbsp;&nbsp;Vizuale</h3>
        <p><strong>Forme, culori, contururi.</strong></p>
        <hr />
        <p><span class='tip'>Imagine mentală vizuală<span class='tooltip-box'><strong>Spus simplu:</strong> „vezi” în minte ceva.<br /><br /><strong>Formulare academică:</strong> reprezentări dominate de analizatorul vizual.<br /><br /><strong>Exemplu:</strong> îți amintești forma unui obiect.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎧&nbsp;&nbsp;Auditive</h3>
        <p><strong>Sunete, ritmuri, melodii.</strong></p>
        <hr />
        <p><span class='tip'>Imagine mentală auditivă<span class='tooltip-box'><strong>Spus simplu:</strong> „auzi” în minte o voce sau o melodie.<br /><br /><strong>Formulare academică:</strong> reprezentări dominate de analizatorul auditiv.<br /><br /><strong>Exemplu:</strong> îți „auzi” numele rostit.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🏃&nbsp;&nbsp;Chinestezice</h3>
        <p><strong>Senzația mișcării.</strong></p>
        <hr />
        <p><span class='tip'>„Simți” mental gestul<span class='tooltip-box'><strong>Spus simplu:</strong> îți imaginezi mișcarea corpului.<br /><br /><strong>Formulare academică:</strong> reprezentări legate de analizatorul proprioceptiv/chinestezic.<br /><br /><strong>Exemplu:</strong> îți imaginezi aruncarea unei mingi.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>💡&nbsp;&nbsp;Tipuri după funcție (Piaget)</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <div class="lesson-step-emoji">1️⃣</div>
        <h3>Reproductive</h3>
        <p><strong>Refac trecutul.</strong></p>
        <hr />
        <p><span class='tip'>Reconstituie experiențe anterioare<span class='tooltip-box'><strong>Spus simplu:</strong> readuci mental ceva ce ai văzut deja.<br /><br /><strong>Formulare academică:</strong> reconstruiesc percepții trecute.<br /><br /><strong>Exemplu:</strong> îți amintești cum arată sala de clasă.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">2️⃣</div>
        <h3>Anticipative</h3>
        <p><strong>Imaginează posibilul.</strong></p>
        <hr />
        <p><span class='tip'>Se bazează pe imaginație și gândire<span class='tooltip-box'><strong>Spus simplu:</strong> construiești mental ceva nou din elemente cunoscute.<br /><br /><strong>Formulare academică:</strong> anticipează situații nepercepute încă, prin combinații mentale.<br /><br /><strong>Exemplu:</strong> îți imaginezi cum ar arăta o casă pe care vrei să o construiești.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🗣️&nbsp;&nbsp;Rolul limbajului în reprezentări</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Instrument reglator</h3>
        <hr />
        <p><span class='tip'>Ghidează organizarea și transformarea imaginii<span class='tooltip-box'><strong>Spus simplu:</strong> cuvintele „ordonă” ceea ce îți imaginezi (poate fi și vorbire internă).<br /><br /><strong>Formulare academică:</strong> limbajul descrie, dirijează organizarea și transformă imaginea secundară, facilitând integrarea ei în gândire.<br /><br /><strong>Exemplu:</strong> îți spui mental „mai mare/mai mic” și ajustezi imaginea.</span></span></p>
      </div>
    </div>
  `,
  "fph-t6c": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Tipuri de reprezentări:</strong>
      pot fi descrise după două repere: <span class='tip'>analizatorul dominant<span class='tooltip-box'><strong>Spus simplu:</strong> ce canal „conduce” imaginea (vizual, auditiv, chinestezic).<br /><br /><strong>Formulare academică:</strong> predominanța unei modalități senzoriale în conținutul reprezentativ.<br /><br /><strong>Exemplu:</strong> „vezi” mental un obiect vs. „auzi” mental o melodie.</span></span> și <span class='tip'>nivelul operațiilor (Piaget)<span class='tooltip-box'><strong>Spus simplu:</strong> dacă imaginea reface trecutul sau anticipează ceva nou.<br /><br /><strong>Formulare academică:</strong> diferențiere după tipul operațiilor cognitive implicate (reproducere vs. anticipare).<br /><br /><strong>Exemplu:</strong> îți reamintești un traseu vs. îți imaginezi unul nou.</span></span>.
    </div>
    <hr />

    <h2>🎯&nbsp;&nbsp;Reper 1: analizator dominant</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>👁️&nbsp;&nbsp;Vizuale</h3>
        <p><strong>Imagini cu formă și culoare.</strong></p>
        <hr />
        <p><span class='tip'>Adesea dominante în viața curentă<span class='tooltip-box'><strong>Spus simplu:</strong> pentru mulți oameni, imaginile mentale sunt mai des vizuale.<br /><br /><strong>Formulare academică:</strong> reprezentările vizuale au frecvență și accesibilitate ridicată în activitatea reprezentativă.<br /><br /><strong>Exemplu:</strong> îți apare mai întâi fața unei persoane, nu vocea.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎧&nbsp;&nbsp;Auditive</h3>
        <p><strong>Sunete, ritmuri, melodii.</strong></p>
        <hr />
        <p><span class='tip'>„Auzi” mental conținutul<span class='tooltip-box'><strong>Spus simplu:</strong> îți răsună în minte o voce sau un refren.<br /><br /><strong>Formulare academică:</strong> conținut reprezentativ bazat pe patternuri sonore/verbale.<br /><br /><strong>Exemplu:</strong> îți „auzi” numele rostit.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🏃&nbsp;&nbsp;Chinestezice</h3>
        <p><strong>Senzația mișcării.</strong></p>
        <hr />
        <p><span class='tip'>Asociate cu acte ideomotorii<span class='tooltip-box'><strong>Spus simplu:</strong> „simți” mental gestul și apare o pregătire de mișcare.<br /><br /><strong>Formulare academică:</strong> apar activări motorii incipiente legate de anticiparea execuției.<br /><br /><strong>Exemplu:</strong> îți imaginezi că scrii și simți începutul mișcării.</span></span></p>
      </div>
    </div>
    <hr />

   <h2>1️⃣&nbsp;&nbsp;Reper 2: nivelul operațiilor (Piaget)</h2>
<div class="lesson-grid two">
  <div class="lesson-card">
    <div class="lesson-step-emoji">1️⃣</div>
    <h3>Reproductive</h3>
    <p><strong>Reconstituie trecutul.</strong></p>
    <hr />
    <p>
      <span class='tip'>Refac percepții anterioare<span class='tooltip-box'><strong>Spus simplu:</strong> readuci mental ceva ce ai văzut deja.<br /><br /><strong>Formulare academică:</strong> reconstructive, legate de experiența perceptivă trecută.<br /><br /><strong>Exemplu:</strong> îți amintești cum arată strada ta.</span></span>
    </p>

    <p>
      Când o reprezentare reproductivă <strong>reconstituie</strong> experiența, ea poate „fixa” trecutul în moduri diferite, în funcție de ce anume refaci mental
      <span class='tip'><strong>repaus, mișcare sau schimbare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> uneori refaci un obiect „ca imagine”, alteori refaci derularea unei acțiuni, iar alteori refaci o modificare care are loc în timp.<br /><br /><strong>Exemplu:</strong> copac (repaus), aruncarea mingii (mișcare), topirea gheții (schimbare).</span></span>.
      De aceea, în cadrul reprezentărilor reproductive se descriu trei <span class='tip'><strong>scheme reproductive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> forme tipice ale reconstituirii trecutului.<br /><br /><strong>Formulare academică:</strong> reprezentările reproductive pot fi statice, cinetice și de transformare.</span></span>.
    </p>

    ${window.flashPillList([
      {
        text: "🧱&nbsp;&nbsp;<span class='tip'><strong>statice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> redau obiectul „în repaus”, fără derulare de acțiune.<br /><br /><strong>Exemplu:</strong> imaginea unui copac.</span></span>",
        key: "teal",
      },
      {
        text: "🏃&nbsp;&nbsp;<span class='tip'><strong>cinetice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> redau mișcarea sau derularea unei acțiuni.<br /><br /><strong>Exemplu:</strong> îți amintești cum a fost aruncată mingea.</span></span>",
        key: "pink",
      },
      {
        text: "🔁&nbsp;&nbsp;<span class='tip'><strong>de transformare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> redau schimbarea progresivă a unui obiect.<br /><br /><strong>Exemplu:</strong> îți imaginezi gheața topindu-se.</span></span>",
        key: "violet",
      },
    ])}
  </div>

  <div class="lesson-card">
  <div class="lesson-step-emoji">2️⃣</div>
  <h3>Anticipative</h3>
  <p><strong>Construiesc posibilul.</strong></p>
  <hr />
  <p>
    Reprezentările <span class='tip'><strong>anticipative</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunt imagini despre ceea ce nu e prezent și nici nu a fost trăit direct, dar poate fi modelat mental.<br /><br /><strong>Exemplu:</strong> îți imaginezi cum va decurge o situație pe care nu ai întâlnit-o încă.</span></span> se referă la <span class='tip'><strong>stimuli care nu au fost percepuți</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu ai avut contact perceptiv direct cu ei.<br /><br /><strong>Exemplu:</strong> îți imaginezi cum va arăta camera după rearanjare, înainte să o rearanjezi.</span></span>.
  </p>

  <p>
    Ele <span class='tip'><strong>se produc sub auspiciile imaginației și gândirii</strong><span class='tooltip-box'><strong>Spus simplu:</strong> imaginația combină și transformă elemente, iar gândirea le organizează și le dă coerență pentru a construi un „model”.<br /><br /><strong>Exemplu:</strong> îți imaginezi pașii unei prezentări și anticipezi ce urmează să spui.</span></span>.
  </p>

  ${window.flashPillList([
    {
      text: "🏃&nbsp;&nbsp;<span class='tip'><strong>cinetice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> anticipează derularea unei acțiuni, ca mișcare.<br /><br /><strong>Exemplu:</strong> îți imaginezi cum vei executa un gest pas cu pas.</span></span>",
      key: "pink",
    },
    {
      text: "🔁&nbsp;&nbsp;<span class='tip'><strong>de transformare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> anticipează o schimbare a obiectului/situației prin <strong>formarea modelelor</strong>.<br /><br /><strong>Exemplu:</strong> îți imaginezi cum se modifică un proiect după ce schimbi o componentă.</span></span>",
      key: "violet",
    },
  ])}
</div>

</div>
  `,
  "fph-t7a": `
    <div class="lesson-highlight">
      <strong>💡&nbsp;&nbsp;Definiție:</strong>
      memoria este un <span class='tip'>proces psihic de stocare și destocare a informației<span class='tooltip-box'><strong>Spus simplu:</strong> păstrezi informația și o poți accesa ulterior, când ai nevoie.<br /><br /><strong>Formulare academică:</strong> memoria este un proces psihic de acumulare, păstrare și reactualizare a informațiilor.<br /><br /><strong>Exemplu:</strong> îți amintești indicațiile primite ieri și le aplici azi.</span></span>, prin care <span class='tip'>acumulezi și folosești experiența cognitivă<span class='tooltip-box'><strong>Spus simplu:</strong> înveți din ce ai trăit și folosești în situații noi.<br /><br /><strong>Formulare academică:</strong> memoria susține utilizarea experienței cognitive în activitatea curentă.<br /><br /><strong>Exemplu:</strong> aplici o regulă învățată la un exercițiu diferit.</span></span>.
    </div>
    <hr />

    <h2>⏱️&nbsp;&nbsp;Etapele funcționării memoriei</h2>
    <div class="lesson-grid three">
      <div class="lesson-card">
        <div class="lesson-step-emoji">1️⃣</div>
        <h3>Întipărirea (engramarea)</h3>
        <hr />
        <p><span class='tip'>Înregistrarea inițială<span class='tooltip-box'><strong>Spus simplu:</strong> informația este „prinsă” pentru prima dată.<br /><br /><strong>Formulare academică:</strong> engramarea reprezintă fixarea inițială a informației în sistemul mnezic.<br /><br /><strong>Exemplu:</strong> reții o formulă când o auzi pentru prima dată.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">2️⃣</div>
        <h3>Păstrarea (conservarea)</h3>
        <hr />
        <p><span class='tip'>Menținerea în timp<span class='tooltip-box'><strong>Spus simplu:</strong> informația rămâne disponibilă pentru mai târziu.<br /><br /><strong>Formulare academică:</strong> conservarea este menținerea urmelor mnezice în timp.<br /><br /><strong>Exemplu:</strong> îți amintești o regulă după câteva zile.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">3️⃣</div>
        <h3>Reactualizarea</h3>
        <hr />
        <p><span class='tip'>Regăsirea și utilizarea<span class='tooltip-box'><strong>Spus simplu:</strong> scoți informația din memorie atunci când ai nevoie.<br /><br /><strong>Formulare academică:</strong> reactualizarea presupune aducerea informației în conștiință pentru utilizare.<br /><br /><strong>Exemplu:</strong> îți amintești definiția în timpul unui test.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🔎&nbsp;&nbsp;Forme de reactualizare</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>✅&nbsp;&nbsp;Recunoașterea</h3>
        <p><strong>Identifici informația când o reîntâlnești.</strong></p>
        <hr />
        <p><span class='tip'>Prezența indiciului ajută<span class='tooltip-box'><strong>Spus simplu:</strong> îți dai seama că ai mai văzut ceva când îl vezi din nou.<br /><br /><strong>Formulare academică:</strong> recunoașterea presupune identificarea informației în prezența ei.<br /><br /><strong>Exemplu:</strong> recunoști un răspuns corect într‑o listă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Reproducerea</h3>
        <p><strong>Evochi informația fără sprijin extern.</strong></p>
        <hr />
        <p><span class='tip'>Evocare „din minte”<span class='tooltip-box'><strong>Spus simplu:</strong> îți amintești fără să ai indiciu în față.<br /><br /><strong>Formulare academică:</strong> reproducerea presupune reactualizarea fără suport extern imediat.<br /><br /><strong>Exemplu:</strong> spui definiția fără să o vezi scrisă.</span></span></p>
      </div>
    </div>
  `,
  "fph-t7b": `
    <div class="lesson-highlight">
      <strong>📡&nbsp;&nbsp;Memoria senzorială (MS):</strong>
      este un <span class='tip'>stocaj senzorial foarte scurt<span class='tooltip-box'><strong>Spus simplu:</strong> păstrează pentru o clipă „urma” brută a stimulilor.<br /><br /><strong>Formulare academică:</strong> MS menține temporar urmele senzoriale brute înainte de prelucrarea atentivă.<br /><br /><strong>Exemplu:</strong> „urma” vizuală după ce ai închis ochii.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Rol și specific</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Stocaj automat</h3>
        <p><strong>Nu necesită atenție.</strong></p>
        <hr />
        <p><span class='tip'>Preconștient, rapid<span class='tooltip-box'><strong>Spus simplu:</strong> se activează chiar dacă nu ești concentrat.<br /><br /><strong>Formulare academică:</strong> MS funcționează preatentiv, fără control voluntar.<br /><br /><strong>Exemplu:</strong> percepi o lumină periferică fără să o cauți.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🔍&nbsp;&nbsp;Detectori de trăsături</h3>
        <p><strong>Identifică rapid detalii elementare.</strong></p>
        <hr />
        <p><span class='tip'>Contururi, intensități, frecvențe<span class='tooltip-box'><strong>Spus simplu:</strong> se prind detalii de bază înainte de interpretare.<br /><br /><strong>Formulare academică:</strong> MS permite activarea detectorilor de trăsături senzoriale.<br /><br /><strong>Exemplu:</strong> sesizezi o mișcare bruscă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⏱️&nbsp;&nbsp;Durată foarte scurtă</h3>
        <p><strong>Zecimi de secundă.</strong></p>
        <hr />
        <p><span class='tip'>Se stinge rapid<span class='tooltip-box'><strong>Spus simplu:</strong> informația dispare dacă nu e prelucrată.<br /><br /><strong>Formulare academică:</strong> MS are o durată de ordinul zecilor de sutimi de secundă.<br /><br /><strong>Exemplu:</strong> imaginea vizuală „palidă” după un blitz.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧱&nbsp;&nbsp;Materie primă pentru prelucrare</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>📥&nbsp;&nbsp;Bază pentru atenție și percepție</h3>
        <hr />
        <p><span class='tip'>Din MS se selectează ce devine relevant<span class='tooltip-box'><strong>Spus simplu:</strong> atenția alege ce merită prelucrat mai departe.<br /><br /><strong>Formulare academică:</strong> MS furnizează materialul brut pentru procese cognitive ulterioare.<br /><br /><strong>Exemplu:</strong> un sunet brusc devine focusul atenției.</span></span></p>
      </div>
    </div>
  `,
  "fph-t7c": `
    <div class="lesson-highlight">
      <strong>💡&nbsp;&nbsp;Memoria de lucru (MSD):</strong>
      este <span class='tip'>partea activă a memoriei de lungă durată<span class='tooltip-box'><strong>Spus simplu:</strong> aduci temporar în „față” informații din MLD ca să le folosești în sarcina curentă.<br /><br /><strong>Formulare academică:</strong> MSD funcționează ca spațiu de lucru pentru informații activate selectiv din MLD.<br /><br /><strong>Exemplu:</strong> ții în minte pașii unui calcul.</span></span>.
    </div>
    <hr />

    <h2>⚙️&nbsp;&nbsp;Trăsături esențiale</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Activare temporară</h3>
        <p><strong>Informațiile sunt „ținute active”.</strong></p>
        <hr />
        <p><span class='tip'>Folosire imediată<span class='tooltip-box'><strong>Spus simplu:</strong> păstrezi informația cât timp ai nevoie de ea.<br /><br /><strong>Formulare academică:</strong> MSD menține activă informația relevantă pentru sarcina curentă.<br /><br /><strong>Exemplu:</strong> reții un număr până îl notezi.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>📏&nbsp;&nbsp;Capacitate limitată</h3>
        <p><strong>~7 ± 2 elemente.</strong></p>
        <hr />
        <p><span class='tip'>„Numărul magic 7” (Miller)<span class='tooltip-box'><strong>Spus simplu:</strong> poți ține simultan cam 5–9 unități.<br /><br /><strong>Formulare academică:</strong> capacitatea MSD este limitată și poate fi extinsă prin „chunking”.<br /><br /><strong>Exemplu:</strong> 1‑9‑4‑5 → „1945”.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⏳&nbsp;&nbsp;Durată scurtă</h3>
        <p><strong>~15–20 secunde fără repetare.</strong></p>
        <hr />
        <p><span class='tip'>Se stinge dacă nu o întreții<span class='tooltip-box'><strong>Spus simplu:</strong> informația dispare repede fără repetiție sau prelucrare.<br /><br /><strong>Formulare academică:</strong> menținerea MSD depinde de repetare și procesare activă.<br /><br /><strong>Exemplu:</strong> uiți un număr dacă nu îl repeți.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Relație cu atenția</h3>
        <p><strong>Coextensive în stare de relaxare.</strong></p>
        <hr />
        <p><span class='tip'>MSD ușor mai stabilă (Miclea, 2003)<span class='tooltip-box'><strong>Spus simplu:</strong> în mod obișnuit, MSD ține puțin mai mult decât atenția.<br /><br /><strong>Formulare academică:</strong> memoria de lucru are un volum mai stabil și ușor mai mare decât atenția.<br /><br /><strong>Exemplu:</strong> poți reține un număr scurt chiar dacă îți distragi atenția o clipă.</span></span></p>
      </div>
    </div>
  `,
  "fph-t7d": `
    <div class="lesson-highlight">
      <strong>💡&nbsp;&nbsp;Memoria de lungă durată (MLD):</strong>
      este <span class='tip'>depozitul pe termen lung al cunoștințelor și experiențelor<span class='tooltip-box'><strong>Spus simplu:</strong> aici rămâne „ce știi” despre lume și despre tine.<br /><br /><strong>Formulare academică:</strong> MLD reprezintă ansamblul cunoștințelor stocate, cu capacitate teoretic nelimitată.<br /><br /><strong>Exemplu:</strong> reguli, amintiri personale, proceduri învățate.</span></span>.
    </div>
    <hr />

    <h2>📌&nbsp;&nbsp;Caracteristici principale</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>♾️&nbsp;&nbsp;Capacitate foarte mare</h3>
        <hr />
        <p><span class='tip'>Teoretic nelimitată<span class='tooltip-box'><strong>Spus simplu:</strong> nu există un „plafon” strict ca în MSD.<br /><br /><strong>Formulare academică:</strong> MLD are o capacitate teoretic nelimitată.<br /><br /><strong>Exemplu:</strong> poți învăța concepte noi toată viața.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Activare selectivă</h3>
        <hr />
        <p><span class='tip'>Doar ce e relevant devine activ<span class='tooltip-box'><strong>Spus simplu:</strong> nu îți apare „tot” în minte, ci exact ce îți trebuie.<br /><br /><strong>Formulare academică:</strong> MLD răspunde cerințelor MSD prin activarea selectivă a informației.<br /><br /><strong>Exemplu:</strong> îți amintești regula potrivită pentru problema curentă.</span></span></p>
      </div>
    </div>
  `,
  "fph-t7e": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Două forme majore:</strong>
      memoria poate fi <span class='tip'>explicită (declarativă)<span class='tooltip-box'><strong>Spus simplu:</strong> conținut conștient, pe care îl poți spune în cuvinte.<br /><br /><strong>Formulare academică:</strong> memoria explicită presupune conștientizare și verbalizare.<br /><br /><strong>Exemplu:</strong> „Paris este capitala Franței”.</span></span> sau <span class='tip'>implicită (procedurală)<span class='tooltip-box'><strong>Spus simplu:</strong> conținut exprimat prin deprinderi, greu de verbalizat.<br /><br /><strong>Formulare academică:</strong> memoria implicită se manifestă în performanță, nu în descriere verbală.<br /><br /><strong>Exemplu:</strong> mersul pe bicicletă.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Diferența centrală</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>📘&nbsp;&nbsp;Memoria explicită</h3>
        <p><strong>Conștientă și verbalizabilă.</strong></p>
        <hr />
        <p><span class='tip'>„Știu și pot spune”<span class='tooltip-box'><strong>Spus simplu:</strong> poți explica în cuvinte ce știi.<br /><br /><strong>Formulare academică:</strong> conținuturi declarative accesibile conștiinței.<br /><br /><strong>Exemplu:</strong> definiții, reguli, fapte.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🛠️&nbsp;&nbsp;Memoria implicită</h3>
        <p><strong>Exprimată prin acțiune.</strong></p>
        <hr />
        <p><span class='tip'>„Știu să fac”<span class='tooltip-box'><strong>Spus simplu:</strong> arăți prin performanță, nu prin vorbire.<br /><br /><strong>Formulare academică:</strong> conținuturi procedurale, dificil de verbalizat.<br /><br /><strong>Exemplu:</strong> tastarea rapidă.</span></span></p>
      </div>
    </div>
  `,
  "fph-t7f": `
    <div class="lesson-highlight">
      <strong>📚&nbsp;&nbsp;Memoria declarativă:</strong>
      se împarte în <span class='tip'>memorie episodică<span class='tooltip-box'><strong>Spus simplu:</strong> amintiri despre evenimente personale trăite.<br /><br /><strong>Formulare academică:</strong> memorie autobiografică cu „cine/ce/unde/când”.<br /><br /><strong>Exemplu:</strong> prima zi de școală.</span></span> și <span class='tip'>memorie semantică<span class='tooltip-box'><strong>Spus simplu:</strong> cunoștințe generale despre lume.<br /><br /><strong>Formulare academică:</strong> memorie a conceptelor, regulilor și faptelor generale.<br /><br /><strong>Exemplu:</strong> „Apa fierbe la 100°C”.</span></span>.
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Episodică vs. semantică</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧳&nbsp;&nbsp;Memoria episodică</h3>
        <p><strong>Evenimente personale, contexte specifice.</strong></p>
        <hr />
        <p><span class='tip'>Susține identitatea personală<span class='tooltip-box'><strong>Spus simplu:</strong> amintirile tale îți mențin sentimentul de „eu”.<br /><br /><strong>Formulare academică:</strong> episodicul contribuie la continuitatea identității de sine.<br /><br /><strong>Exemplu:</strong> îți amintești o aniversare importantă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>📖&nbsp;&nbsp;Memoria semantică</h3>
        <p><strong>Cunoștințe generale, fără context personal.</strong></p>
        <hr />
        <p><span class='tip'>„Ce știu despre lume”<span class='tooltip-box'><strong>Spus simplu:</strong> informații factuale, reguli, concepte.<br /><br /><strong>Formulare academică:</strong> memorie de tip conceptual, independentă de situația în care ai învățat.<br /><br /><strong>Exemplu:</strong> definiția unui concept.</span></span></p>
      </div>
    </div>
  `,
  "fph-t7g": `
    <div class="lesson-highlight">
      <strong>📌&nbsp;&nbsp;Ideea‑cheie:</strong>
      memorarea se îmbunătățește când <span class='tip'>informația are sens, este concretă și se repetă<span class='tooltip-box'><strong>Spus simplu:</strong> înțelegi, vezi clar și revii asupra materialului.<br /><br /><strong>Formulare academică:</strong> retenția crește prin organizare semantică, concretizare și repetare distribuită.<br /><br /><strong>Exemplu:</strong> înțelegi un concept, îl legi de un exemplu și îl recitești a doua zi.</span></span>.
    </div>
    <hr />

    <h2>✅&nbsp;&nbsp;Factori care facilitează memorarea</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Informație cu sens</h3>
        <p><strong>Se reține mai bine decât materialul fără sens.</strong></p>
        <hr />
        <p><span class='tip'>Organizare și logică<span class='tooltip-box'><strong>Spus simplu:</strong> dacă înțelegi, reții mai ușor.<br /><br /><strong>Formulare academică:</strong> organizarea semantică stabilizează urmele mnezice.<br /><br /><strong>Exemplu:</strong> reții un concept când îl legi de o schemă logică.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧱&nbsp;&nbsp;Concretul</h3>
        <p><strong>Exemplele și imaginile fixează mai ușor.</strong></p>
        <hr />
        <p><span class='tip'>Vizual și aplicat<span class='tooltip-box'><strong>Spus simplu:</strong> îți amintești mai ușor ceva ce „vezi”.<br /><br /><strong>Formulare academică:</strong> concretul oferă indicii perceptive accesibile.<br /><br /><strong>Exemplu:</strong> un exemplu clar rămâne mai bine decât o formulare abstractă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🔁&nbsp;&nbsp;Repetiția</h3>
        <p><strong>Consolidează păstrarea.</strong></p>
        <hr />
        <p><span class='tip'>Revenire în timp<span class='tooltip-box'><strong>Spus simplu:</strong> reluarea ajută memoria să se stabilizeze.<br /><br /><strong>Formulare academică:</strong> repetarea distribuie și consolidează urmele mnezice.<br /><br /><strong>Exemplu:</strong> repeți după 1 zi și după 1 săptămână.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Semnificația personală</h3>
        <p><strong>Ce contează pentru tine se fixează mai bine.</strong></p>
        <hr />
        <p><span class='tip'>Legătura cu interesele tale<span class='tooltip-box'><strong>Spus simplu:</strong> dacă îți pasă, reții mai ușor.<br /><br /><strong>Formulare academică:</strong> semnificația personală crește selectivitatea și stabilitatea memorării.<br /><br /><strong>Exemplu:</strong> reții mai ușor informații legate de hobby‑ul tău.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>💡&nbsp;&nbsp;Memorare eficientă</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Intenționalitate + profunzime</h3>
        <hr />
        <p><span class='tip'>Vrei să înveți + înțelegi în profunzime<span class='tooltip-box'><strong>Spus simplu:</strong> nu ajunge să repeți; trebuie să înțelegi și să organizezi.<br /><br /><strong>Formulare academică:</strong> memorarea intențională e eficientă doar cu prelucrare de profunzime.<br /><br /><strong>Exemplu:</strong> explici cu cuvintele tale un concept înainte să îl memorezi.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚖️&nbsp;&nbsp;Optimum motivațional</h3>
        <hr />
        <p><span class='tip'>Nici prea puțin, nici prea mult<span class='tooltip-box'><strong>Spus simplu:</strong> motivația moderată susține performanța; extremele o scad.<br /><br /><strong>Formulare academică:</strong> performanța mnezică este maximizată într‑un interval optim de activare motivațională.<br /><br /><strong>Exemplu:</strong> un nivel moderat de emoție ajută, panica blochează.</span></span></p>
      </div>
    </div>
  `,
  "fph-t8a": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Definiție:</strong>
      gândirea este un <span class='tip'>proces psihic superior de prelucrare informațională<span class='tooltip-box'><strong>Spus simplu:</strong> transformă informația, nu doar o primește.<br /><br /><strong>Formulare academică:</strong> gândirea operează asupra informației pentru a identifica esențialul și a construi relații conceptuale.<br /><br /><strong>Exemplu:</strong> compari două situații și înțelegi regula comună.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Ce face gândirea</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🔍&nbsp;&nbsp;Extrage esențialul</h3>
        <p><strong>Separă ceea ce contează.</strong></p>
        <hr />
        <p><span class='tip'>Proprietăți definitorii<span class='tooltip-box'><strong>Spus simplu:</strong> păstrează ce este stabil și important.<br /><br /><strong>Formulare academică:</strong> identifică trăsături esențiale ale obiectelor/fenomenelor.<br /><br /><strong>Exemplu:</strong> vezi „triunghiul” prin trei laturi, nu prin culoare.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🗂️&nbsp;&nbsp;Organizează în clase</h3>
        <p><strong>Grupează obiectele în categorii.</strong></p>
        <hr />
        <p><span class='tip'>Clase de obiecte<span class='tooltip-box'><strong>Spus simplu:</strong> pui împreună lucruri asemănătoare.<br /><br /><strong>Formulare academică:</strong> construiește categorii conceptuale.<br /><br /><strong>Exemplu:</strong> „animale”, „instrumente”, „emoții”.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Construiește relații</h3>
        <p><strong>Leagă conceptele între ele.</strong></p>
        <hr />
        <p><span class='tip'>Relații categoriale<span class='tooltip-box'><strong>Spus simplu:</strong> stabilești legături logice.<br /><br /><strong>Formulare academică:</strong> identifică raporturi precum cauză–efect, parte–întreg, condiție–rezultat.<br /><br /><strong>Exemplu:</strong> „dacă plouă, iau umbrela”.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Mediere și context</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🗣️&nbsp;&nbsp;Mediere verbală</h3>
        <hr />
        <p><span class='tip'>Gândirea se sprijină pe limbaj<span class='tooltip-box'><strong>Spus simplu:</strong> cuvintele te ajută să formulezi și să clarifici idei.<br /><br /><strong>Formulare academică:</strong> gândirea operează prin concepte, judecăți și raționamente verbalizabile.<br /><br /><strong>Exemplu:</strong> explici cu cuvintele tale o problemă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🌍&nbsp;&nbsp;Interacțiune persoană–mediu</h3>
        <hr />
        <p><span class='tip'>Gândirea se activează în situații concrete<span class='tooltip-box'><strong>Spus simplu:</strong> apare când ai o problemă reală de rezolvat.<br /><br /><strong>Formulare academică:</strong> gândirea se manifestă în relație cu sarcini și contexte practice.<br /><br /><strong>Exemplu:</strong> alegi cea mai bună soluție într‑o situație nouă.</span></span></p>
      </div>
    </div>
  `,
  "fph-t8b": `
    <div class="lesson-highlight">
      <strong>📘&nbsp;&nbsp;Operații fundamentale:</strong>
      gândirea lucrează prin <span class='tip'>analiză și sinteză<span class='tooltip-box'><strong>Spus simplu:</strong> descompui și recombini mental informația.<br /><br /><strong>Formulare academică:</strong> analiza separă, sinteza reunește în structuri noi.<br /><br /><strong>Exemplu:</strong> vezi părțile unei probleme și apoi construiești soluția.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Două operații de bază</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <div class="lesson-step-emoji">1️⃣</div>
        <h3>Analiza</h3>
        <p><strong>Descompune mental.</strong></p>
        <hr />
        <p><span class='tip'>Separă părțile unui întreg<span class='tooltip-box'><strong>Spus simplu:</strong> vezi „din ce e făcut”.<br /><br /><strong>Formulare academică:</strong> descompunere mentală pentru identificarea structurii.<br /><br /><strong>Exemplu:</strong> desparți o propoziție în subiect și predicat.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">2️⃣</div>
        <h3>Sinteza</h3>
        <p><strong>Reunește și reorganizează.</strong></p>
        <hr />
        <p><span class='tip'>Construiește un nou întreg<span class='tooltip-box'><strong>Spus simplu:</strong> pui la loc părțile într‑o structură coerentă.<br /><br /><strong>Formulare academică:</strong> reorganizarea elementelor într‑o unitate cognitivă nouă.<br /><br /><strong>Exemplu:</strong> formulezi concluzia după ce ai analizat datele.</span></span></p>
      </div>
    </div>
  `,
  "fph-t8c": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Operații derivate:</strong>
      gândirea aplică transformări specifice pentru a <span class='tip'>ordona și clarifica informația<span class='tooltip-box'><strong>Spus simplu:</strong> compari, generalizezi, concretizezi etc.<br /><br /><strong>Formulare academică:</strong> sunt operații care extind și rafinează analiza și sinteza.<br /><br /><strong>Exemplu:</strong> de la exemple concrete ajungi la o regulă.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Operații derivate</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>⚖️&nbsp;&nbsp;Comparația</h3>
        <p><strong>Identifică asemănări și diferențe.</strong></p>
        <hr />
        <p><span class='tip'>Raport între obiecte/idei<span class='tooltip-box'><strong>Spus simplu:</strong> vezi ce e la fel și ce e diferit.<br /><br /><strong>Formulare academică:</strong> stabilește relații de similaritate/diferență.<br /><br /><strong>Exemplu:</strong> compari două teorii.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Abstractizarea</h3>
        <p><strong>Izolează trăsături esențiale.</strong></p>
        <hr />
        <p><span class='tip'>Selectează esențialul<span class='tooltip-box'><strong>Spus simplu:</strong> păstrezi ce contează și ignori detaliile.<br /><br /><strong>Formulare academică:</strong> desprinde proprietăți definitorii dintr‑un ansamblu.<br /><br /><strong>Exemplu:</strong> „forma” ca trăsătură, nu culoarea.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🌐&nbsp;&nbsp;Generalizarea</h3>
        <p><strong>Extinde la o clasă mai largă.</strong></p>
        <hr />
        <p><span class='tip'>De la particular la general<span class='tooltip-box'><strong>Spus simplu:</strong> din mai multe cazuri faci o regulă.<br /><br /><strong>Formulare academică:</strong> construiește noțiuni generale pe baza exemplarelor.<br /><br /><strong>Exemplu:</strong> „toți păianjenii au opt picioare”.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧱&nbsp;&nbsp;Concretizarea</h3>
        <p><strong>Aplică generalul la un caz.</strong></p>
        <hr />
        <p><span class='tip'>De la general la particular<span class='tooltip-box'><strong>Spus simplu:</strong> vezi cum se manifestă regula într‑un exemplu.<br /><br /><strong>Formulare academică:</strong> particularizează o regulă generală.<br /><br /><strong>Exemplu:</strong> identifici „triunghiul” într‑un desen anume.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Particularizarea</h3>
        <p><strong>Selectează un exemplu reprezentativ.</strong></p>
        <hr />
        <p><span class='tip'>Caz specific dintr‑o clasă<span class='tooltip-box'><strong>Spus simplu:</strong> alegi un exemplu care ilustrează clasa.<br /><br /><strong>Formulare academică:</strong> identifică un exemplu dintr‑un concept general.<br /><br /><strong>Exemplu:</strong> „măr” ca exemplu de „fruct”.</span></span></p>
      </div>
    </div>
  `,
  "fph-t8d": `
    <div class="lesson-highlight">
      <strong>📌&nbsp;&nbsp;Produsele gândirii:</strong>
      rezultatele gândirii sunt <span class='tip'>conceptele, judecățile și raționamentele<span class='tooltip-box'><strong>Spus simplu:</strong> idei, afirmații și concluzii logice.<br /><br /><strong>Formulare academică:</strong> produsele gândirii sunt structuri cognitive cu niveluri diferite de complexitate.<br /><br /><strong>Exemplu:</strong> „copil” (concept), „copilul învață” (judecată), „dacă învață, progresează” (raționament).</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cele trei produse</h2>
    <div class="lesson-grid three">
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Concepte</h3>
        <p><strong>Idei generale.</strong></p>
        <hr />
        <p><span class='tip'>Clasă de obiecte/ fenomene<span class='tooltip-box'><strong>Spus simplu:</strong> „numele” unei categorii.<br /><br /><strong>Formulare academică:</strong> generalizări bazate pe trăsături esențiale.<br /><br /><strong>Exemplu:</strong> „animal”, „emoție”.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>📍&nbsp;&nbsp;Judecăți</h3>
        <p><strong>Afirmații despre concepte.</strong></p>
        <hr />
        <p><span class='tip'>Leagă concepte prin propoziții<span class='tooltip-box'><strong>Spus simplu:</strong> spui ceva despre ceva.<br /><br /><strong>Formulare academică:</strong> afirmă sau neagă o relație între concepte.<br /><br /><strong>Exemplu:</strong> „toți oamenii sunt muritori”.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Raționamente</h3>
        <p><strong>Concluzii din judecăți.</strong></p>
        <hr />
        <p><span class='tip'>Leagă judecăți pentru o concluzie<span class='tooltip-box'><strong>Spus simplu:</strong> din două idei ajungi la a treia.<br /><br /><strong>Formulare academică:</strong> proces logic care produce o concluzie necesară sau probabilă.<br /><br /><strong>Exemplu:</strong> „dacă A, atunci B; A; deci B”.</span></span></p>
      </div>
    </div>
  `,
  "fph-t8e": `
    <div class="lesson-highlight">
      <strong>📘&nbsp;&nbsp;Concepte:</strong>
      sunt <span class='tip'>generalizări mentale care surprind trăsături esențiale<span class='tooltip-box'><strong>Spus simplu:</strong> idei care adună la un loc lucruri asemănătoare.<br /><br /><strong>Formulare academică:</strong> conceptele reflectă esențialul și organizează cunoașterea.<br /><br /><strong>Exemplu:</strong> „copil”, „școală”, „responsabilitate”.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Elemente ale conceptului</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>📌&nbsp;&nbsp;Conținut</h3>
        <p><strong>Trăsăturile esențiale.</strong></p>
        <hr />
        <p><span class='tip'>Ce definește conceptul<span class='tooltip-box'><strong>Spus simplu:</strong> trăsături fără de care nu e același lucru.<br /><br /><strong>Formulare academică:</strong> totalitatea însușirilor definitorii.<br /><br /><strong>Exemplu:</strong> „triunghi” = figură cu 3 laturi.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Sferă</h3>
        <p><strong>Totalitatea exemplarelor.</strong></p>
        <hr />
        <p><span class='tip'>Toate cazurile incluse<span class='tooltip-box'><strong>Spus simplu:</strong> toate lucrurile care se potrivesc conceptului.<br /><br /><strong>Formulare academică:</strong> mulțimea obiectelor la care se aplică.<br /><br /><strong>Exemplu:</strong> toate triunghiurile posibile.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Ierarhie</h3>
        <p><strong>Mai general sau mai specific.</strong></p>
        <hr />
        <p><span class='tip'>Relații între concepte<span class='tooltip-box'><strong>Spus simplu:</strong> unele concepte includ altele.<br /><br /><strong>Formulare academică:</strong> raporturi de subordonare/ supraordonare.<br /><br /><strong>Exemplu:</strong> „animal” include „câine”.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧪&nbsp;&nbsp;General/ particular</h3>
        <p><strong>Gradul de generalitate.</strong></p>
        <hr />
        <p><span class='tip'>Cât de larg e conceptul<span class='tooltip-box'><strong>Spus simplu:</strong> unele sunt foarte largi, altele foarte specifice.<br /><br /><strong>Formulare academică:</strong> conceptul poate fi general sau particularizat.<br /><br /><strong>Exemplu:</strong> „ființă vie” (general) vs „pisică” (particular).</span></span></p>
      </div>
    </div>
  `,
  "fph-t8f": `
    <div class="lesson-highlight">
      <strong>📍&nbsp;&nbsp;Judecata:</strong>
      exprimă <span class='tip'>o afirmație despre concepte<span class='tooltip-box'><strong>Spus simplu:</strong> spui „ce este” sau „cum este”.<br /><br /><strong>Formulare academică:</strong> judecata afirmă sau neagă o relație între concepte.<br /><br /><strong>Exemplu:</strong> „toți oamenii sunt muritori”.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Tipuri de judecăți</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Judecăți atributive</h3>
        <p><strong>Leagă un obiect de o însușire.</strong></p>
        <hr />
        <p><span class='tip'>„X este Y”<span class='tooltip-box'><strong>Spus simplu:</strong> atribui o trăsătură.<br /><br /><strong>Formulare academică:</strong> raport subiect–predicat.<br /><br /><strong>Exemplu:</strong> „Copilul este curios.”</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚖️&nbsp;&nbsp;Judecăți predicative</h3>
        <p><strong>Exprimă o relație mai complexă.</strong></p>
        <hr />
        <p><span class='tip'>Descriu relații între concepte<span class='tooltip-box'><strong>Spus simplu:</strong> formulezi o legătură logică.<br /><br /><strong>Formulare academică:</strong> exprimă raporturi între concepte prin predicație.<br /><br /><strong>Exemplu:</strong> „Dacă învață, progresează.”</span></span></p>
      </div>
    </div>
  `,
  "fph-t8g": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Raționamentul:</strong>
      este un <span class='tip'>lanț de judecăți care duce la o concluzie<span class='tooltip-box'><strong>Spus simplu:</strong> din două idei ajungi la a treia.<br /><br /><strong>Formulare academică:</strong> proces logic de derivare a unei concluzii din premise.<br /><br /><strong>Exemplu:</strong> „Toți elevii au teme. Ana e elevă. Deci Ana are teme.”</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Structură și rol</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>📌&nbsp;&nbsp;Premise</h3>
        <hr />
        <p><span class='tip'>Baza concluziei<span class='tooltip-box'><strong>Spus simplu:</strong> ideile de la care pornești.<br /><br /><strong>Formulare academică:</strong> judecăți inițiale care susțin concluzia.<br /><br /><strong>Exemplu:</strong> „Toți oamenii sunt muritori.”</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Concluzie</h3>
        <hr />
        <p><span class='tip'>Rezultatul raționării<span class='tooltip-box'><strong>Spus simplu:</strong> ideea finală la care ajungi.<br /><br /><strong>Formulare academică:</strong> judecată derivată logic din premise.<br /><br /><strong>Exemplu:</strong> „Socrate este muritor.”</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Tipuri de raționament</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>➡️&nbsp;&nbsp;Deductiv</h3>
        <p><strong>De la general la particular.</strong></p>
        <hr />
        <p><span class='tip'>Concluzie necesară<span class='tooltip-box'><strong>Spus simplu:</strong> dacă premisele sunt adevărate, concluzia e sigură.<br /><br /><strong>Formulare academică:</strong> derivă necesar un caz particular din reguli generale.<br /><br /><strong>Exemplu:</strong> „Toți A sunt B; x este A; deci x este B.”</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🌱&nbsp;&nbsp;Inductiv</h3>
        <p><strong>De la particular la general.</strong></p>
        <hr />
        <p><span class='tip'>Concluzie probabilă<span class='tooltip-box'><strong>Spus simplu:</strong> deduci o regulă din mai multe cazuri.<br /><br /><strong>Formulare academică:</strong> generalizează pe baza observațiilor particulare.<br /><br /><strong>Exemplu:</strong> „Am văzut mai multe lebede albe, deci lebedele sunt albe.”</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧪&nbsp;&nbsp;Ipotetico‑deductiv</h3>
        <p><strong>Testează o ipoteză.</strong></p>
        <hr />
        <p><span class='tip'>Dacă X, atunci Y<span class='tooltip-box'><strong>Spus simplu:</strong> faci o ipoteză și verifici consecințele.<br /><br /><strong>Formulare academică:</strong> formulează ipoteze și deduce predicții verificabile.<br /><br /><strong>Exemplu:</strong> „Dacă învăț, atunci cresc notele; testez prin rezultate.”</span></span></p>
      </div>
    </div>
  `,
  "fph-t8h": `
    <div class="lesson-highlight">
      <strong>📌&nbsp;&nbsp;Activitățile gândirii:</strong>
      gândirea se manifestă în <span class='tip'>rezolvarea de probleme, creativitate și decizie<span class='tooltip-box'><strong>Spus simplu:</strong> cauți soluții, inventezi, alegi.<br /><br /><strong>Formulare academică:</strong> activitățile gândirii includ procese de problem‑solving, creație și decizie.<br /><br /><strong>Exemplu:</strong> alegi cea mai bună variantă într‑o situație dificilă.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Forme frecvente</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Rezolvarea de probleme</h3>
        <hr />
        <p><span class='tip'>Cauți o soluție eficientă<span class='tooltip-box'><strong>Spus simplu:</strong> găsești o cale să depășești un obstacol.<br /><br /><strong>Formulare academică:</strong> identifică, planifică și aplică strategii de rezolvare.<br /><br /><strong>Exemplu:</strong> găsești rapid un traseu alternativ.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Creativitatea</h3>
        <hr />
        <p><span class='tip'>Idei originale și utile<span class='tooltip-box'><strong>Spus simplu:</strong> găsești soluții noi.<br /><br /><strong>Formulare academică:</strong> produce idei valoroase, originale și adaptative.<br /><br /><strong>Exemplu:</strong> inventezi o metodă simplă de învățare.</span></span></p>
      </div>
    </div>
  `,
  "fph-t8i": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Conceptualizarea:</strong>
      construirea <span class='tip'>conceptelor prin relații de subordonare, coordonare și supraordonare<span class='tooltip-box'><strong>Spus simplu:</strong> pui conceptele într‑o „ierarhie”.<br /><br /><strong>Formulare academică:</strong> conceptualizarea organizează conceptele după niveluri de generalitate.<br /><br /><strong>Exemplu:</strong> „animal” → „mamifer” → „câine”.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Relații între concepte</h2>
    <div class="lesson-grid three">
      <div class="lesson-card">
        <div class="lesson-step-emoji">1️⃣</div>
        <h3>Subordonare</h3>
        <p><strong>De la general la particular.</strong></p>
        <hr />
        <p><span class='tip'>„X este un tip de Y”<span class='tooltip-box'><strong>Spus simplu:</strong> un concept e inclus în altul mai general.<br /><br /><strong>Formulare academică:</strong> raport de includere.<br /><br /><strong>Exemplu:</strong> „măr” este un tip de „fruct”.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">2️⃣</div>
        <h3>Coordonare</h3>
        <p><strong>Concepte de același nivel.</strong></p>
        <hr />
        <p><span class='tip'>„X și Y sunt din aceeași clasă”<span class='tooltip-box'><strong>Spus simplu:</strong> conceptele sunt „frați”.<br /><br /><strong>Formulare academică:</strong> raport de egalitate în ierarhie.<br /><br /><strong>Exemplu:</strong> „măr” și „pară”.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">3️⃣</div>
        <h3>Supraordonare</h3>
        <p><strong>De la particular la general.</strong></p>
        <hr />
        <p><span class='tip'>„Y include X”<span class='tooltip-box'><strong>Spus simplu:</strong> un concept general include altele.<br /><br /><strong>Formulare academică:</strong> concept‑cadru care include subclase.<br /><br /><strong>Exemplu:</strong> „fruct” include „măr”.</span></span></p>
      </div>
    </div>
  `,
  "fph-t8j": `
    <div class="lesson-highlight">
      <strong>📌&nbsp;&nbsp;Înțelegerea:</strong>
      este <span class='tip'>procesul de clarificare a sensului și relațiilor dintre idei<span class='tooltip-box'><strong>Spus simplu:</strong> faci ordine și înțelegi „de ce” și „cum”.<br /><br /><strong>Formulare academică:</strong> înțelegerea organizează informația într‑o structură coerentă.<br /><br /><strong>Exemplu:</strong> legi un concept nou de ce știai deja.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Tipuri de înțelegere</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🌱&nbsp;&nbsp;Înțelegere spontană</h3>
        <p><strong>Rapidă, intuitivă.</strong></p>
        <hr />
        <p><span class='tip'>„Aha!” dintr‑o dată<span class='tooltip-box'><strong>Spus simplu:</strong> prinzi sensul imediat.<br /><br /><strong>Formulare academică:</strong> clarificare rapidă fără analiză detaliată.<br /><br /><strong>Exemplu:</strong> înțelegi gluma pe loc.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Înțelegere discursivă</h3>
        <p><strong>Pas cu pas, analitică.</strong></p>
        <hr />
        <p><span class='tip'>Explici și deduci treptat<span class='tooltip-box'><strong>Spus simplu:</strong> construiești sensul în pași.<br /><br /><strong>Formulare academică:</strong> clarificare progresivă prin analiză logică.<br /><br /><strong>Exemplu:</strong> rezolvi o problemă pas cu pas.</span></span></p>
      </div>
    </div>
  `,
  "fph-t8k": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Strategii:</strong>
      gândirea poate fi <span class='tip'>algoritmică sau euristică<span class='tooltip-box'><strong>Spus simplu:</strong> fie urmezi pași siguri, fie cauți soluții creative.<br /><br /><strong>Formulare academică:</strong> strategiile pot fi procedurale sau exploratorii.<br /><br /><strong>Exemplu:</strong> o rețetă fixă vs. improvizație.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Două strategii principale</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <div class="lesson-step-emoji">1️⃣</div>
        <h3>Algoritmică</h3>
        <p><strong>Pași clari, rezultat sigur.</strong></p>
        <hr />
        <p><span class='tip'>Procedură fixă<span class='tooltip-box'><strong>Spus simplu:</strong> urmezi rețeta corectă.<br /><br /><strong>Formulare academică:</strong> strategie cu pași standardizați și rezultat predictibil.<br /><br /><strong>Exemplu:</strong> rezolvarea unei ecuații după reguli.</span></span></p>
      </div>
      <div class="lesson-card">
        <div class="lesson-step-emoji">2️⃣</div>
        <h3>Euristică</h3>
        <p><strong>Căutare flexibilă.</strong></p>
        <hr />
        <p><span class='tip'>Încercare, ajustare, creativitate<span class='tooltip-box'><strong>Spus simplu:</strong> găsești soluții prin explorare.<br /><br /><strong>Formulare academică:</strong> strategie deschisă, probabilistică, orientată spre descoperire.<br /><br /><strong>Exemplu:</strong> găsești o idee originală într‑un proiect.</span></span></p>
      </div>
    </div>
  `,
  "fph-t8l": `
    <div class="lesson-highlight">
      <strong>📌&nbsp;&nbsp;Două direcții ale gândirii:</strong>
      gândirea poate fi <span class='tip'>convergentă sau divergentă<span class='tooltip-box'><strong>Spus simplu:</strong> fie cauți un singur răspuns, fie multe răspunsuri posibile.<br /><br /><strong>Formulare academică:</strong> convergența urmărește soluția corectă, divergența explorează alternative.<br /><br /><strong>Exemplu:</strong> rezolvare de problemă vs. brainstorming.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Convergentă vs. divergentă</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Gândire convergentă</h3>
        <p><strong>O singură soluție corectă.</strong></p>
        <hr />
        <p><span class='tip'>Direcție unică<span class='tooltip-box'><strong>Spus simplu:</strong> alegi răspunsul corect dintre variante.<br /><br /><strong>Formulare academică:</strong> selectează soluția optimă pe baza regulilor.<br /><br /><strong>Exemplu:</strong> un test grilă cu un singur răspuns.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🌈&nbsp;&nbsp;Gândire divergentă</h3>
        <p><strong>Mai multe soluții posibile.</strong></p>
        <hr />
        <p><span class='tip'>Creativitate și alternativă<span class='tooltip-box'><strong>Spus simplu:</strong> generezi idei variate.<br /><br /><strong>Formulare academică:</strong> produce soluții multiple, originale și flexibile.<br /><br /><strong>Exemplu:</strong> brainstorming pentru un proiect.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9a": `
    <div class="lesson-highlight">
      <strong>🎯&nbsp;&nbsp;Definiție:</strong>
      motivația este un <span class='tip'>ansamblu de stări de necesitate care activează și stimulează comportamentul<span class='tooltip-box'><strong>Spus simplu:</strong> nevoile interne pun organismul „în mișcare”.<br /><br /><strong>Formulare academică:</strong> stările de necesitate declanșează și susțin conduite orientate spre satisfacerea lor.<br /><br /><strong>Exemplu:</strong> foamea te mobilizează să cauți mâncare.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Două elemente-cheie</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Activare internă</h3>
        <p><strong>Energia care pornește acțiunea.</strong></p>
        <hr />
        <p><span class='tip'>Stare de tensiune<span class='tooltip-box'><strong>Spus simplu:</strong> apare o lipsă care cere rezolvare.<br /><br /><strong>Formulare academică:</strong> tensiunea internă activează conduita.<br /><br /><strong>Exemplu:</strong> nevoia de somn te împinge să te odihnești.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Direcționare</h3>
        <p><strong>Comportamentul capătă scop.</strong></p>
        <hr />
        <p><span class='tip'>Orientare spre satisfacere<span class='tooltip-box'><strong>Spus simplu:</strong> nu faci orice, ci ceea ce rezolvă nevoia.<br /><br /><strong>Formulare academică:</strong> motivația organizează conduita către scopuri.<br /><br /><strong>Exemplu:</strong> alegi acțiuni care chiar reduc tensiunea.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9b": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Ideea centrală:</strong>
      funcțiile motivației arată <span class='tip'>cum apare, se menține și se reglează conduita<span class='tooltip-box'><strong>Spus simplu:</strong> motivația pornește, energizează și controlează comportamentul.<br /><br /><strong>Formulare academică:</strong> funcțiile motivației explică inițierea, intensitatea și autoreglarea conduitei.<br /><br /><strong>Exemplu:</strong> începi o sarcină, depui efort și îți ajustezi ritmul.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Funcțiile motivației</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🔔&nbsp;&nbsp;Activare și semnalizare</h3>
        <p><strong>Indică dezechilibrul intern.</strong></p>
        <hr />
        <p><span class='tip'>„E ceva de rezolvat”<span class='tooltip-box'><strong>Spus simplu:</strong> apare tensiunea necesității.<br /><br /><strong>Formulare academică:</strong> semnalizează starea de necesitate și activează organismul.<br /><br /><strong>Exemplu:</strong> disconfortul foamei.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚙️&nbsp;&nbsp;Energizare și direcționare</h3>
        <p><strong>Susține efortul spre scop.</strong></p>
        <hr />
        <p><span class='tip'>„Am energie și știu unde merg”<span class='tooltip-box'><strong>Spus simplu:</strong> efortul devine orientat.<br /><br /><strong>Formulare academică:</strong> intensitatea și direcția conduitei sunt susținute motivațional.<br /><br /><strong>Exemplu:</strong> studiezi constant pentru un examen.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Autoreglare</h3>
        <p><strong>Conduită activ selectivă.</strong></p>
        <hr />
        <p><span class='tip'>Alegi ce e potrivit scopului<span class='tooltip-box'><strong>Spus simplu:</strong> reduci distragerile și ajustezi acțiunea.<br /><br /><strong>Formulare academică:</strong> controlează și ajustează comportamentul în funcție de scopuri.<br /><br /><strong>Exemplu:</strong> îți reorganizezi timpul când apar obstacole.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9c-intro": `
    <div class="lesson-highlight">
      <strong>📘&nbsp;&nbsp;Structuri motivaționale:</strong>
      forme <span class='tip'>relativ stabile prin care motivația se organizează în timp<span class='tooltip-box'><strong>Spus simplu:</strong> nu sunt impulsuri trecătoare, ci forme care ghidează conduita pe termen lung.<br /><br /><strong>Formulare academică:</strong> structuri care mențin orientarea către scopuri și dau coerență acțiunii.<br /><br /><strong>Exemplu:</strong> interesele și convingerile te fac să alegi constant domenii asemănătoare.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Structuri principale</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🔥&nbsp;&nbsp;Trebuințe</h3>
        <p><strong>Stări de necesitate.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Motive</h3>
        <p><strong>Trebuințe conștientizate.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🔎&nbsp;&nbsp;Interese</h3>
        <p><strong>Orientări selective.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧷&nbsp;&nbsp;Convingeri</h3>
        <p><strong>Judecăți cu valoare.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🏔️&nbsp;&nbsp;Idealuri</h3>
        <p><strong>Modele de perfecțiune.</strong></p>
      </div>
    </div>
  `,
  "fph-t9c1": `
    <div class="lesson-highlight">
      <strong>🔥&nbsp;&nbsp;Trebuințe:</strong>
      sunt <span class='tip'>forțe motrice fundamentale care mențin echilibrul bio-psiho-social<span class='tooltip-box'><strong>Spus simplu:</strong> nevoile interne susțin armonia dintre corp, psihic și social.<br /><br /><strong>Formulare academică:</strong> trebuințele solicită organismul și mobilizează conduite de satisfacere.<br /><br /><strong>Exemplu:</strong> odihna, competența, apartenența.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Tipuri de trebuințe</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🥗&nbsp;&nbsp;Primare</h3>
        <p><strong>Înnăscute, biologice.</strong></p>
        <hr />
        <p><span class='tip'>Foame, sete, somn, mișcare<span class='tooltip-box'><strong>Spus simplu:</strong> țin de supraviețuire și funcționare corporală.<br /><br /><strong>Exemplu:</strong> nevoia de apă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🤝&nbsp;&nbsp;Secundare</h3>
        <p><strong>Dobândite, psiho-sociale.</strong></p>
        <hr />
        <p><span class='tip'>Comunicare, confort, autoactualizare<span class='tooltip-box'><strong>Spus simplu:</strong> apar prin experiență și integrare socială.<br /><br /><strong>Exemplu:</strong> nevoia de recunoaștere.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Când nu sunt satisfăcute</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>⚠️&nbsp;&nbsp;Tensiune crescută</h3>
        <hr />
        <p><span class='tip'>Energia internă se amplifică<span class='tooltip-box'><strong>Spus simplu:</strong> nevoia apasă tot mai mult.<br /><br /><strong>Formulare academică:</strong> nesatisfacerea produce creșterea tensiunii interne.<br /><br /><strong>Exemplu:</strong> lipsa somnului reduce echilibrul.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Inhibare/compensare</h3>
        <hr />
        <p><span class='tip'>Mecanisme de apărare<span class='tooltip-box'><strong>Spus simplu:</strong> uneori nevoia este „mascată” sau compensată.<br /><br /><strong>Formulare academică:</strong> pot apărea inhibiții sau substituiri motivaționale.<br /><br /><strong>Exemplu:</strong> cauți altă activitate pentru a reduce tensiunea.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9c2": `
    <div class="lesson-highlight">
      <strong>🎯&nbsp;&nbsp;Motivele:</strong>
      sunt <span class='tip'>forțe motrice care declanșează, susțin și direcționează acțiunea<span class='tooltip-box'><strong>Spus simplu:</strong> dau startul, energie și direcție către un scop.<br /><br /><strong>Formulare academică:</strong> motivele activează, mențin energetic și orientează comportamentul.<br /><br /><strong>Exemplu:</strong> înveți pentru a obține o bursă.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Rolul motivului</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🚀&nbsp;&nbsp;Declanșează</h3>
        <p><strong>Pornește acțiunea.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Susține energetic</h3>
        <p><strong>Menține efortul.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Direcționează</h3>
        <p><strong>Orientează către scop.</strong></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Constelații motivaționale</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>✅&nbsp;&nbsp;Optare și coroborare</h3>
        <hr />
        <p><span class='tip'>Alegi motivul dominant sau le combini<span class='tooltip-box'><strong>Spus simplu:</strong> uneori alegi un singur motiv, alteori se sprijină reciproc.<br /><br /><strong>Exemplu:</strong> înveți și pentru pasiune, și pentru rezultate.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚖️&nbsp;&nbsp;Conflict</h3>
        <hr />
        <p><span class='tip'>Motivele intră în opoziție<span class='tooltip-box'><strong>Spus simplu:</strong> vrei două lucruri care se contrazic.<br /><br /><strong>Exemplu:</strong> vrei să ieși cu prietenii, dar și să înveți pentru examen.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9c3": `
    <div class="lesson-highlight">
      <strong>🔎&nbsp;&nbsp;Interesele:</strong>
      sunt <span class='tip'>orientări selective și relativ stabile către activități și domenii<span class='tooltip-box'><strong>Spus simplu:</strong> lucruri care te atrag constant, nu doar pe moment.<br /><br /><strong>Formulare academică:</strong> formațiuni motivaționale complexe, cu durată și consistență.<br /><br /><strong>Exemplu:</strong> interes pentru psihologie sau sport.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Caracteristici</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Selectivitate</h3>
        <p><strong>Alegi domenii specifice.</strong></p>
        <hr />
        <p><span class='tip'>Nu orice activitate te atrage la fel<span class='tooltip-box'><strong>Spus simplu:</strong> ai preferințe clare.<br /><br /><strong>Exemplu:</strong> alegi constant activități din același domeniu.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Stabilitate</h3>
        <p><strong>Se mențin în timp.</strong></p>
        <hr />
        <p><span class='tip'>Nu dispar imediat<span class='tooltip-box'><strong>Spus simplu:</strong> revii la aceleași teme/domenii.<br /><br /><strong>Exemplu:</strong> continui să citești despre același subiect luni sau ani.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Efect formativ</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>📈&nbsp;&nbsp;Dezvoltă competențe</h3>
        <hr />
        <p><span class='tip'>Implicarea susținută formează abilități<span class='tooltip-box'><strong>Spus simplu:</strong> exersezi și devii mai bun.<br /><br /><strong>Exemplu:</strong> interesul pentru muzică duce la disciplină și competență.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Crește persistența</h3>
        <hr />
        <p><span class='tip'>Rămâi implicat pe termen lung<span class='tooltip-box'><strong>Spus simplu:</strong> continui chiar când e greu.<br /><br /><strong>Exemplu:</strong> te întorci la studiu chiar după eșec.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9c4": `
    <div class="lesson-highlight">
      <strong>🧷&nbsp;&nbsp;Convingerile:</strong>
      sunt <span class='tip'>judecăți puternic impregnate afectiv, legate de valori<span class='tooltip-box'><strong>Spus simplu:</strong> idei în care crezi „cu toată ființa”, nu doar opinii reci.<br /><br /><strong>Formulare academică:</strong> convingerile mobilizează comportamentul prin încărcătură emoțională și valoare personală.<br /><br /><strong>Exemplu:</strong> „educația schimbă viața”.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Două trăsături</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>❤️&nbsp;&nbsp;Încărcătură afectivă</h3>
        <p><strong>Emoția dă forță.</strong></p>
        <hr />
        <p><span class='tip'>Nu sunt idei neutre<span class='tooltip-box'><strong>Spus simplu:</strong> simți intens ceea ce crezi.<br /><br /><strong>Exemplu:</strong> o convingere morală te mobilizează.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🏷️&nbsp;&nbsp;Legătură cu valori</h3>
        <p><strong>Devine criteriu de decizie.</strong></p>
        <hr />
        <p><span class='tip'>Valorile se transformă în ghid<span class='tooltip-box'><strong>Spus simplu:</strong> alegi în acord cu ce crezi important.<br /><br /><strong>Exemplu:</strong> corectitudinea te face să eviți trișatul.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9c5": `
    <div class="lesson-highlight">
      <strong>🏔️&nbsp;&nbsp;Idealurile:</strong>
      sunt <span class='tip'>modele valorice de perfecțiune către care individul aspiră<span class='tooltip-box'><strong>Spus simplu:</strong> ținte înalte care dau direcție vieții.<br /><br /><strong>Formulare academică:</strong> formațiuni motivaționale puternice cu rol de ghidare pe termen lung.<br /><br /><strong>Exemplu:</strong> idealul de a fi un profesionist integru.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Structura idealului</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Scop/sens al vieții</h3>
        <p><strong>Direcția fundamentală.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>📈&nbsp;&nbsp;Nivel de aspirații</h3>
        <p><strong>Cât de sus îți propui.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>⭐&nbsp;&nbsp;Model idealizat</h3>
        <p><strong>Standardul de urmat.</strong></p>
      </div>
    </div>
  `,
  "fph-t9d1": `
    <div class="lesson-highlight">
      <strong>📘&nbsp;&nbsp;Forme ale motivației:</strong>
      arată <span class='tip'>moduri diferite de susținere și orientare a conduitei<span class='tooltip-box'><strong>Spus simplu:</strong> motivația poate veni din surse diverse și poate avea direcții diferite.<br /><br /><strong>Formulare academică:</strong> formele descriu criterii de clasificare ale motivației (sursă, direcție, conținut).<br /><br /><strong>Exemplu:</strong> intrinsec vs extrinsec.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Perechi fundamentale</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>➕&nbsp;&nbsp;Pozitivă vs negativă</h3>
        <p><strong>Obținere vs evitare.</strong></p>
        <hr />
        <p><span class='tip'>Atracție sau evitare<span class='tooltip-box'><strong>Spus simplu:</strong> mergi spre ceva dorit sau fugi de ceva neplăcut.<br /><br /><strong>Exemplu:</strong> cauți recompensă vs eviți pedeapsă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎁&nbsp;&nbsp;Intrinsecă vs extrinsecă</h3>
        <p><strong>Plăcerea activității vs recompense externe.</strong></p>
        <hr />
        <p><span class='tip'>Sursă internă/externă<span class='tooltip-box'><strong>Spus simplu:</strong> îți place activitatea sau o faci pentru beneficii externe.<br /><br /><strong>Exemplu:</strong> citești din interes vs pentru notă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Cognitivă vs afectivă</h3>
        <p><strong>Înțelegere vs relaționare.</strong></p>
        <hr />
        <p><span class='tip'>Tip de nevoie dominantă<span class='tooltip-box'><strong>Spus simplu:</strong> vrei să cunoști sau să te simți bine cu ceilalți.<br /><br /><strong>Exemplu:</strong> curiozitate vs nevoia de atașament.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9d2": `
    <div class="lesson-highlight">
      <strong>⚖️&nbsp;&nbsp;Optimum motivațional:</strong>
      apare când <span class='tip'>intensitatea motivației se potrivește cu dificultatea sarcinii<span class='tooltip-box'><strong>Spus simplu:</strong> nici prea mult, nici prea puțin pentru ce ai de făcut.<br /><br /><strong>Formulare academică:</strong> performanța maximă se obține prin potrivirea motivației cu cerințele sarcinii.<br /><br /><strong>Exemplu:</strong> ești suficient de mobilizat fără să te supraîncarci.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Evaluarea dificultății</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>✅&nbsp;&nbsp;Percepție corectă</h3>
        <hr />
        <p><span class='tip'>Ajustezi efortul potrivit sarcinii<span class='tooltip-box'><strong>Spus simplu:</strong> știi cât de greu e și te pregătești corect.<br /><br /><strong>Exemplu:</strong> îți organizezi timpul realist pentru o sarcină dificilă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚠️&nbsp;&nbsp;Sub/supraapreciere</h3>
        <hr />
        <p><span class='tip'>Apare dezechilibrul motivației<span class='tooltip-box'><strong>Spus simplu:</strong> fie te relaxezi prea mult, fie te blochezi prin stres.<br /><br /><strong>Exemplu:</strong> subestimezi sarcina și nu mai performezi.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9e1": `
    <div class="lesson-highlight">
      <strong>🎯&nbsp;&nbsp;Teoria auto-determinării (Deci & Ryan):</strong>
      oamenii sunt <span class='tip'>agenți activi ai propriei schimbări<span class='tooltip-box'><strong>Spus simplu:</strong> nu doar reacționează, ci se auto‑organizează.<br /><br /><strong>Formulare academică:</strong> individul are inițiativă și tendință de dezvoltare autonomă.<br /><br /><strong>Exemplu:</strong> înveți pentru că vrei să înțelegi, nu doar pentru notă.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Idei-cheie</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Agent activ</h3>
        <p><strong>Inițiativă și auto‑organizare.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🔎&nbsp;&nbsp;Explorare și învățare</h3>
        <p><strong>Curiozitate internă.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>↔️&nbsp;&nbsp;Continuum al reglării</h3>
        <p><strong>De la extern la intern.</strong></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Reglare externă vs internă</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>📢&nbsp;&nbsp;Externă</h3>
        <hr />
        <p><span class='tip'>Presiuni, recompense, cerințe<span class='tooltip-box'><strong>Spus simplu:</strong> faci ceva pentru că „trebuie”.<br /><br /><strong>Exemplu:</strong> înveți doar pentru notă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🌱&nbsp;&nbsp;Internă</h3>
        <hr />
        <p><span class='tip'>Autonomie și asumare<span class='tooltip-box'><strong>Spus simplu:</strong> faci ceva pentru că are sens pentru tine.<br /><br /><strong>Exemplu:</strong> studiezi din interes real.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9e2": `
    <div class="lesson-highlight">
      <strong>📘&nbsp;&nbsp;Expectanță–valoare:</strong>
      motivația depinde de <span class='tip'>credința în reușită și valoarea acordată sarcinii<span class='tooltip-box'><strong>Spus simplu:</strong> dacă crezi că poți și îți pasă, te implici mai mult.<br /><br /><strong>Formulare academică:</strong> implicarea este funcție de expectanță și valoare (Wigfield & Eccles).<br /><br /><strong>Exemplu:</strong> te pregătești intens când îți pasă și crezi că poți reuși.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cele două componente</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Expectanță</h3>
        <p><strong>„Pot reuși?”</strong></p>
        <hr />
        <p><span class='tip'>Încredere în succes<span class='tooltip-box'><strong>Spus simplu:</strong> cât de capabil te simți.<br /><br /><strong>Exemplu:</strong> te apuci de un proiect dacă simți că îl poți duce.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⭐&nbsp;&nbsp;Valoare</h3>
        <p><strong>„Merită pentru mine?”</strong></p>
        <hr />
        <p><span class='tip'>Importanță/ utilitate/ interes<span class='tooltip-box'><strong>Spus simplu:</strong> cât de relevantă ți se pare sarcina.<br /><br /><strong>Exemplu:</strong> înveți mai mult la ceva care contează pentru viitorul tău.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Ce influențează expectanța și valoarea</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>📌&nbsp;&nbsp;Credințe și imagine de sine</h3>
        <hr />
        <p><span class='tip'>„Sunt capabil?”<span class='tooltip-box'><strong>Spus simplu:</strong> autoevaluarea competenței schimbă motivația.<br /><br /><strong>Exemplu:</strong> dacă te consideri bun la un domeniu, investești mai mult.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚙️&nbsp;&nbsp;Dificultate și experiențe anterioare</h3>
        <hr />
        <p><span class='tip'>Cât de greu pare și ce ai trăit înainte<span class='tooltip-box'><strong>Spus simplu:</strong> dificultatea percepută și istoricul emoțional contează.<br /><br /><strong>Exemplu:</strong> eșecurile repetate reduc expectanța.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9e3": `
    <div class="lesson-highlight">
      <strong>📌&nbsp;&nbsp;Reușita academică:</strong>
      teoriile evidențiază <span class='tip'>scopuri relativ stabile în context educațional<span class='tooltip-box'><strong>Spus simplu:</strong> tendințele de a urmări anumite tipuri de obiective se repetă în timp.<br /><br /><strong>Formulare academică:</strong> orientările motivaționale au o stabilitate relativă între situații educaționale.<br /><br /><strong>Exemplu:</strong> unii caută progres, alții comparație socială.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Scopuri de învățare</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Perfecționare</h3>
        <p><strong>Progres și înțelegere.</strong></p>
        <hr />
        <p><span class='tip'>Accent pe dezvoltare personală<span class='tooltip-box'><strong>Spus simplu:</strong> contează să înțelegi și să devii mai bun.<br /><br /><strong>Exemplu:</strong> înveți pentru claritate și competență.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🏆&nbsp;&nbsp;Performanță</h3>
        <p><strong>Comparație și evaluare.</strong></p>
        <hr />
        <p><span class='tip'>Accent pe rezultate și statut<span class='tooltip-box'><strong>Spus simplu:</strong> vrei să fii mai bun decât ceilalți și să eviți evaluarea negativă.<br /><br /><strong>Exemplu:</strong> te compari constant cu colegii.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9f1": `
    <div class="lesson-highlight">
      <strong>🎓&nbsp;&nbsp;Mediul educațional:</strong>
      orientarea motivațională este influențată de <span class='tip'>sarcini, autoritate și evaluare<span class='tooltip-box'><strong>Spus simplu:</strong> ce faci, cât control ai și cum ești evaluat.<br /><br /><strong>Formulare academică:</strong> dimensiunile didactice modelează motivația pentru învățare (Ames).<br /><br /><strong>Exemplu:</strong> sarcini semnificative + feedback constructiv cresc motivația.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cele trei dimensiuni</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>📚&nbsp;&nbsp;Sarcinile</h3>
        <p><strong>Tipul și sensul activităților.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Autoritatea</h3>
        <p><strong>Control și autonomie.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>✅&nbsp;&nbsp;Evaluarea</h3>
        <p><strong>Feedback și criterii.</strong></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Efect asupra motivației</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🌱&nbsp;&nbsp;Sarcini semnificative</h3>
        <hr />
        <p><span class='tip'>Provocare și relevanță<span class='tooltip-box'><strong>Spus simplu:</strong> crește interesul și implicarea internă.<br /><br /><strong>Exemplu:</strong> proiecte legate de viața reală.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Evaluare constructivă</h3>
        <hr />
        <p><span class='tip'>Feedback + șansa de îmbunătățire<span class='tooltip-box'><strong>Spus simplu:</strong> sprijină învățarea și reduce anxietatea.<br /><br /><strong>Exemplu:</strong> corecții care arată cum poți progresa.</span></span></p>
      </div>
    </div>
  `,
  "fph-t9f2": `
    <div class="lesson-highlight">
      <strong>🌟&nbsp;&nbsp;Teorii umaniste:</strong>
      motivația este <span class='tip'>tendință spre creștere, sens și autoactualizare<span class='tooltip-box'><strong>Spus simplu:</strong> oamenii vor să se dezvolte, nu doar să primească recompense.<br /><br /><strong>Formulare academică:</strong> motivația exprimă nevoia de dezvoltare personală și împlinire.<br /><br /><strong>Exemplu:</strong> înveți pentru că vrei să devii o versiune mai bună a ta.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Repere umaniste</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🗻&nbsp;&nbsp;Maslow</h3>
        <p><strong>Ierarhia nevoilor.</strong></p>
        <hr />
        <p><span class='tip'>Nevoi superioare: apartenență, stimă, autoactualizare<span class='tooltip-box'><strong>Spus simplu:</strong> învățarea prinde sens când urci spre nevoile superioare.<br /><br /><strong>Exemplu:</strong> studiezi pentru împlinire personală.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🤝&nbsp;&nbsp;Rogers</h3>
        <p><strong>Climat relațional favorabil.</strong></p>
        <hr />
        <p><span class='tip'>Acceptare, empatie, autenticitate<span class='tooltip-box'><strong>Spus simplu:</strong> crești mai bine când ești acceptat și înțeles.<br /><br /><strong>Exemplu:</strong> un profesor empatic reduce frica și crește motivația.</span></span></p>
      </div>
    </div>
  `,
  "fph-t10a": `
    <div class="lesson-highlight">
      <strong>❤️&nbsp;&nbsp;Definiție:</strong>
      afectivitatea este <span class='tip'>rezonanța internă a relației cu lumea<span class='tooltip-box'><strong>Spus simplu:</strong> felul în care trăiești subiectiv ceea ce se întâmplă.<br /><br /><strong>Formulare academică:</strong> modul subiectiv de trăire și semnificare a relației individului cu realitatea.<br /><br /><strong>Exemplu:</strong> aceeași situație poate fi simțită ca plăcută sau amenințătoare.</span></span>.
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Concordanță sau neconcordanță</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Raport intern</h3>
        <hr />
        <p><span class='tip'>Motive, interese, așteptări<span class='tooltip-box'><strong>Spus simplu:</strong> ceea ce contează pentru tine „în interior”.<br /><br /><strong>Formulare academică:</strong> afectivitatea depinde de sistemul motivațional și de așteptările personale.<br /><br /><strong>Exemplu:</strong> dacă îți pasă, trăiești mai intens.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🌍&nbsp;&nbsp;Situația externă</h3>
        <hr />
        <p><span class='tip'>Contextul real în care te afli<span class='tooltip-box'><strong>Spus simplu:</strong> ce se întâmplă în exterior.<br /><br /><strong>Formulare academică:</strong> afectivitatea reflectă potrivirea/nepotrivirea dintre intern și extern.<br /><br /><strong>Exemplu:</strong> când realitatea „se potrivește”, trăirea e pozitivă.</span></span></p>
      </div>
    </div>
  `,
  "fph-t10b": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Natura afectivă:</strong>
      procesele afective sunt <span class='tip'>experiențe subiective cu sens personal<span class='tooltip-box'><strong>Spus simplu:</strong> trăiri legate de evaluarea unei situații.<br /><br /><strong>Formulare academică:</strong> apar în interacțiunea semnificativă a individului cu mediul.<br /><br /><strong>Exemplu:</strong> aceeași critică poate fi trăită ca utilă sau ca dureroasă.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Trăsături de bază</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🫀&nbsp;&nbsp;Componentă fiziologică</h3>
        <p><strong>Însoțire corporală.</strong></p>
        <hr />
        <p><span class='tip'>Modificări somatice<span class='tooltip-box'><strong>Spus simplu:</strong> puls, respirație, tensiune musculară.<br /><br /><strong>Formulare academică:</strong> afectivitatea se asociază cu reacții fiziologice ample.<br /><br /><strong>Exemplu:</strong> inima bate mai repede când te temi.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚖️&nbsp;&nbsp;Polaritate</h3>
        <p><strong>Pozitiv vs negativ.</strong></p>
        <hr />
        <p><span class='tip'>Plăcut/ neplăcut<span class='tooltip-box'><strong>Spus simplu:</strong> situația este evaluată ca „bună” sau „rea”.<br /><br /><strong>Formulare academică:</strong> evaluarea afectivă are caracter polar.<br /><br /><strong>Exemplu:</strong> bucurie vs teamă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🔋&nbsp;&nbsp;Rol activator/inhibitor</h3>
        <p><strong>Mobilizează sau frânează.</strong></p>
        <hr />
        <p><span class='tip'>Influențează conduita<span class='tooltip-box'><strong>Spus simplu:</strong> te poate împinge să acționezi sau să te oprești.<br /><br /><strong>Formulare academică:</strong> afectivitatea poate activa sau inhiba comportamentul.<br /><br /><strong>Exemplu:</strong> entuziasmul te mobilizează, frica te oprește.</span></span></p>
      </div>
    </div>
  `,
  "fph-t10c": `
    <div class="lesson-highlight">
      <strong>🗣️&nbsp;&nbsp;Expresivitate:</strong>
      procesele afective sunt <span class='tip'>codificate simbolic și comunicabile<span class='tooltip-box'><strong>Spus simplu:</strong> se exprimă prin cuvinte, gesturi și mimică.<br /><br /><strong>Formulare academică:</strong> expresiile afective au limbaj emoțional cu potențial comunicațional și adaptativ.<br /><br /><strong>Exemplu:</strong> spui „sunt frustrat” și îți schimbi tonul vocii.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cum se manifestă</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🌍&nbsp;&nbsp;Recunoaștere largă</h3>
        <p><strong>Observabile inclusiv transcultural.</strong></p>
        <hr />
        <p><span class='tip'>Expresii relativ universale<span class='tooltip-box'><strong>Spus simplu:</strong> unele expresii sunt recunoscute aproape peste tot.<br /><br /><strong>Formulare academică:</strong> expresivitatea are elemente interpretabile în contexte culturale diferite.<br /><br /><strong>Exemplu:</strong> frica sau bucuria sunt ușor de recunoscut.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🌊&nbsp;&nbsp;Contagiune afectivă</h3>
        <p><strong>Se transmite în grup.</strong></p>
        <hr />
        <p><span class='tip'>O emoție poate „cuprinde” mai multe persoane<span class='tooltip-box'><strong>Spus simplu:</strong> trăirea unuia influențează starea altora.<br /><br /><strong>Formulare academică:</strong> afectele pot angrena emoțional grupul.<br /><br /><strong>Exemplu:</strong> entuziasmul dintr‑o echipă se răspândește.</span></span></p>
      </div>
    </div>
  `,
  "fph-t10d": `
    <div class="lesson-highlight">
      <strong>⏱️&nbsp;&nbsp;Dinamica afectivă:</strong>
      intensitatea, durata și mobilitatea <span class='tip'>variază în funcție de persoană și situație<span class='tooltip-box'><strong>Spus simplu:</strong> aceeași situație poate fi trăită diferit ca forță și durată.<br /><br /><strong>Formulare academică:</strong> dinamica afectivă depinde de reactivitatea individului și de semnificația motivațională a situației.<br /><br /><strong>Exemplu:</strong> cineva se supără rapid, altcineva rămâne calm.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Indicatori ai dinamicii</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🔥&nbsp;&nbsp;Intensitate</h3>
        <p><strong>Cât de puternic simți.</strong></p>
        <hr />
        <p><span class='tip'>Reactivitate + semnificație<span class='tooltip-box'><strong>Spus simplu:</strong> contează și cât de sensibil ești, și cât de importantă e situația.<br /><br /><strong>Exemplu:</strong> același eveniment poate produce emoții diferite la persoane diferite.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🕒&nbsp;&nbsp;Durată</h3>
        <p><strong>De la scurt la stabil.</strong></p>
        <hr />
        <p><span class='tip'>De la trăiri trecătoare la structuri stabile<span class='tooltip-box'><strong>Spus simplu:</strong> unele emoții trec repede, altele devin sentimente.<br /><br /><strong>Exemplu:</strong> o supărare scurtă vs o stare de atașament.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🔁&nbsp;&nbsp;Mobilitate</h3>
        <p><strong>Trecerea între stări.</strong></p>
        <hr />
        <p><span class='tip'>Schimbare în funcție de context<span class='tooltip-box'><strong>Spus simplu:</strong> treci de la o stare la alta când se schimbă situația.<br /><br /><strong>Exemplu:</strong> de la teamă la ușurare când dispare pericolul.</span></span></p>
      </div>
    </div>
  `,
  "fph-t10e": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Roluri afective:</strong>
      afectivitatea <span class='tip'>influențează relațiile, eliberează tensiuni și furnizează energie psihică<span class='tooltip-box'><strong>Spus simplu:</strong> poate convinge, poate descărca și poate mobiliza.<br /><br /><strong>Formulare academică:</strong> afectivitatea are funcții comunicaționale, cathartice și energizante.<br /><br /><strong>Exemplu:</strong> plânsul descarcă, entuziasmul mobilizează.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Trei roluri principale</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🗣️&nbsp;&nbsp;Persuasiune</h3>
        <p><strong>Influențează pe ceilalți.</strong></p>
        <hr />
        <p><span class='tip'>Expresii afective cu rol social<span class='tooltip-box'><strong>Spus simplu:</strong> trăirile transmit și modelează reacții.<br /><br /><strong>Exemplu:</strong> zâmbetul invită la apropiere.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧹&nbsp;&nbsp;Catharsis</h3>
        <p><strong>Eliberarea tensiunii.</strong></p>
        <hr />
        <p><span class='tip'>Descărcare emoțională<span class='tooltip-box'><strong>Spus simplu:</strong> exprimarea reduce presiunea internă.<br /><br /><strong>Exemplu:</strong> vorbești și te simți mai ușurat.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🔋&nbsp;&nbsp;Energie psihică</h3>
        <p><strong>Mobilizează adaptarea.</strong></p>
        <hr />
        <p><span class='tip'>Susține inițiativa și efortul<span class='tooltip-box'><strong>Spus simplu:</strong> afectele pot da „combustibil” acțiunii.<br /><br /><strong>Exemplu:</strong> pasiunea crește perseverența.</span></span></p>
      </div>
    </div>
  `,
  "fph-t10f": `
    <div class="lesson-highlight">
      <strong>📘&nbsp;&nbsp;Structuri afectogene:</strong>
      forme <span class='tip'>prin care afectivitatea se generează, se organizează și se manifestă<span class='tooltip-box'><strong>Spus simplu:</strong> de la nuanțe discrete până la trăiri stabile și intense.<br /><br /><strong>Formulare academică:</strong> structuri afective de complexitate diferită: ton afectiv, emoții, dispoziții, sentimente, pasiuni.<br /><br /><strong>Exemplu:</strong> de la „ușor plăcut” la „pasiune intensă”.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Structuri principale</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🎨&nbsp;&nbsp;Ton afectiv</h3>
        <p><strong>Nuanță discretă.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Emoții</h3>
        <p><strong>Trăiri intense și scurte.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🌤️&nbsp;&nbsp;Dispoziții</h3>
        <p><strong>Stare de fond.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>💞&nbsp;&nbsp;Sentimente</h3>
        <p><strong>Structuri stabile.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🔥&nbsp;&nbsp;Pasiuni</h3>
        <p><strong>Intensitate și stabilitate înalte.</strong></p>
      </div>
    </div>
  `,
  "fph-t10g": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Ton, emoții, dispoziții:</strong>
      structuri afective cu <span class='tip'>intensitate și durată diferite<span class='tooltip-box'><strong>Spus simplu:</strong> unele sunt discrete, altele puternice și rapide, altele durabile ca fundal.<br /><br /><strong>Formulare academică:</strong> diferă prin intensitate, durata și gradul de conștientizare.<br /><br /><strong>Exemplu:</strong> ton afectiv (subtil), emoție (intensă), dispoziție (medie).</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cele trei structuri</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🎨&nbsp;&nbsp;Ton afectiv</h3>
        <p><strong>Colorare discretă a cunoașterii.</strong></p>
        <hr />
        <p><span class='tip'>Plăcere–neplăcere<span class='tooltip-box'><strong>Spus simplu:</strong> o nuanță afectivă care însoțește actele cognitive.<br /><br /><strong>Exemplu:</strong> o amintire e „plăcută” sau „neplăcută”.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Emoții</h3>
        <p><strong>Fenomen afectiv fundamental.</strong></p>
        <hr />
        <p><span class='tip'>Simple vs complexe<span class='tooltip-box'><strong>Spus simplu:</strong> emoțiile simple sunt rapide și intense; cele complexe sunt elaborate și influențate de valori.<br /><br /><strong>Exemplu:</strong> bucurie (simplă), admirație (complexă).</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🌤️&nbsp;&nbsp;Dispoziții</h3>
        <p><strong>Fundal afectiv.</strong></p>
        <hr />
        <p><span class='tip'>Durată și intensitate medie<span class='tooltip-box'><strong>Spus simplu:</strong> nuanță afectivă mai lungă, vag conștientizată.<br /><br /><strong>Exemplu:</strong> bună dispoziție sau iritabilitate.</span></span></p>
      </div>
    </div>
  `,
  "fph-t10i": `
    <div class="lesson-highlight">
      <strong>💞&nbsp;&nbsp;Sentimente:</strong>
      formațiuni <span class='tip'>afective complexe și stabile<span class='tooltip-box'><strong>Spus simplu:</strong> trăiri durabile, integrate cu valori și atitudini.<br /><br /><strong>Formulare academică:</strong> sentimentele sunt formațiuni atitudinale cu stabilitate ridicată.<br /><br /><strong>Exemplu:</strong> respectul sau dragostea persistă în timp.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Ce le diferențiază</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Stabilitate</h3>
        <hr />
        <p><span class='tip'>Durată mare în timp<span class='tooltip-box'><strong>Spus simplu:</strong> nu dispar rapid ca emoțiile simple.<br /><br /><strong>Exemplu:</strong> atașamentul persistă.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🏷️&nbsp;&nbsp;Valoare și atitudine</h3>
        <hr />
        <p><span class='tip'>Raportare valorică stabilă<span class='tooltip-box'><strong>Spus simplu:</strong> exprimă o poziție afectivă față de obiecte/idei/persoane.<br /><br /><strong>Exemplu:</strong> respectul față de un profesor.</span></span></p>
      </div>
    </div>
  `,
  "fph-t10j": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Tipuri de sentimente:</strong>
      se clasifică după <span class='tip'>direcția raportării afective<span class='tooltip-box'><strong>Spus simplu:</strong> către sine, către ceilalți sau către valori/idei.<br /><br /><strong>Formulare academică:</strong> criteriul este obiectul orientării afective.<br /><br /><strong>Exemplu:</strong> stima de sine, dragostea, patriotismul.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Trei categorii</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🪞&nbsp;&nbsp;Relative la sine</h3>
        <p><strong>Stima de sine, orgoliu.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🤝&nbsp;&nbsp;Relative la ceilalți</h3>
        <p><strong>Dragoste, respect, admirație.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🏛️&nbsp;&nbsp;Relative la valori</h3>
        <p><strong>Datorie, patriotism, onoare.</strong></p>
      </div>
    </div>
    <hr />

    <h2>🎨&nbsp;&nbsp;Estetice</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🖼️&nbsp;&nbsp;Frumos și armonie</h3>
        <hr />
        <p><span class='tip'>Raportare la formă și expresie artistică<span class='tooltip-box'><strong>Spus simplu:</strong> sensibilitate la frumos și expresiv.<br /><br /><strong>Exemplu:</strong> emoția estetică în fața unui tablou.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🎶&nbsp;&nbsp;Sensibilitate culturală</h3>
        <hr />
        <p><span class='tip'>Aprecierea expresiei artistice<span class='tooltip-box'><strong>Spus simplu:</strong> reacții afective la muzică, literatură, artă.<br /><br /><strong>Exemplu:</strong> admirația pentru o interpretare muzicală.</span></span></p>
      </div>
    </div>
  `,
  "fph-t10k": `
    <div class="lesson-highlight">
      <strong>🔥&nbsp;&nbsp;Pasiunile:</strong>
      structuri <span class='tip'>afective intense și stabile, cu impact major asupra conduitei<span class='tooltip-box'><strong>Spus simplu:</strong> trăiri puternice care pot domina viața psihică.<br /><br /><strong>Formulare academică:</strong> pasiunea mobilizează masiv energia și orientează persistent acțiunea.<br /><br /><strong>Exemplu:</strong> pasiunea pentru artă sau pentru putere.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Caracteristici</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Intensitate</h3>
        <p><strong>Energie afectivă mare.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>⏳&nbsp;&nbsp;Stabilitate</h3>
        <p><strong>Durată lungă.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Unilateralitate</h3>
        <p><strong>Direcție dominantă.</strong></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Pozitive vs negative</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>✅&nbsp;&nbsp;Pasiuni pozitive</h3>
        <hr />
        <p><span class='tip'>Susțin realizări și performanțe<span class='tooltip-box'><strong>Spus simplu:</strong> canalizează energia spre construcție.<br /><br /><strong>Exemplu:</strong> pasiunea pentru știință.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚠️&nbsp;&nbsp;Pasiuni negative (patimi)</h3>
        <hr />
        <p><span class='tip'>Pot deveni dezadaptative<span class='tooltip-box'><strong>Spus simplu:</strong> îngustează viața și flexibilitatea socială.<br /><br /><strong>Exemplu:</strong> obsesii care izolează persoana.</span></span></p>
      </div>
    </div>
  `,
  "fph-t10l": `
    <div class="lesson-highlight">
      <strong>🔗&nbsp;&nbsp;Afectivitate și motivație:</strong>
      relație <span class='tip'>indisolubilă, cu influențe reciproce<span class='tooltip-box'><strong>Spus simplu:</strong> motivele colorează trăirile, iar trăirile pot întări motivele.<br /><br /><strong>Formulare academică:</strong> procesele afective și motivaționale se condiționează și se susțin reciproc.<br /><br /><strong>Exemplu:</strong> succesul întărește dorința de a continua.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Legături esențiale</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧷&nbsp;&nbsp;Structuri afectogene</h3>
        <p><strong>Trăiri ale împlinirii/neîmplinirii motivelor.</strong></p>
        <hr />
        <p><span class='tip'>Satisfacție vs frustrare<span class='tooltip-box'><strong>Spus simplu:</strong> motivele generează trăiri specifice.<br /><br /><strong>Exemplu:</strong> reușita aduce bucurie, eșecul aduce dezamăgire.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⚙️&nbsp;&nbsp;Constelații motivaționale</h3>
        <p><strong>Combinații de motive dinamice.</strong></p>
        <hr />
        <p><span class='tip'>Motivele se susțin sau intră în conflict<span class='tooltip-box'><strong>Spus simplu:</strong> trăirile pot amplifica sau reduce motivația.<br /><br /><strong>Exemplu:</strong> entuziasmul crește implicarea, frica o reduce.</span></span></p>
      </div>
    </div>
  `,
  "fph-t11a": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Definiție:</strong>
      voința este <span class='tip'>proces psihic de autoreglare superioară, orientat spre scop și deliberare<span class='tooltip-box'><strong>Spus simplu:</strong> îți controlezi conștient conduita ca să atingi un scop, chiar când e greu.<br /><br /><strong>Formulare academică:</strong> voința organizează, mobilizează și controlează acțiunea orientată spre scop, prin deliberare și decizie.<br /><br /><strong>Exemplu:</strong> continui să lucrezi deși ești obosit.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Reglajul voluntar</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Control conștient</h3>
        <p><strong>Conduita este ghidată intenționat.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🗣️&nbsp;&nbsp;Limbaj interior</h3>
        <p><strong>Auto‑instrucțiuni și planificare.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>⚙️&nbsp;&nbsp;Efort voluntar</h3>
        <p><strong>Mobilizare când apar obstacole.</strong></p>
      </div>
    </div>
    <hr />

    <h2>⚡&nbsp;&nbsp;Efortul voluntar</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🔋&nbsp;&nbsp;Consum energetic</h3>
        <hr />
        <p><span class='tip'>Mobilizare intensă<span class='tooltip-box'><strong>Spus simplu:</strong> cere energie suplimentară.<br /><br /><strong>Formulare academică:</strong> efortul voluntar presupune încordare și consum energetic crescut.<br /><br /><strong>Exemplu:</strong> continui să lucrezi când ai tentația de a renunța.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>⏱️&nbsp;&nbsp;Limitat temporal</h3>
        <hr />
        <p><span class='tip'>Nu poate fi menținut la infinit<span class='tooltip-box'><strong>Spus simplu:</strong> obosești dacă îl menții prea mult.<br /><br /><strong>Formulare academică:</strong> efortul voluntar are limită de durată datorită încordării.<br /><br /><strong>Exemplu:</strong> după mult efort, scade randamentul.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧗&nbsp;&nbsp;Obstacolul și mobilizarea</h2>
    <div class="lesson-grid one">
      <div class="lesson-card">
        <h3>Cu cât obstacolul e mai mare, cu atât crește mobilizarea</h3>
        <hr />
        <p><span class='tip'>Dificultatea cere mai mult efort conștient<span class='tooltip-box'><strong>Spus simplu:</strong> când e greu, trebuie să „te aduni” mai mult.<br /><br /><strong>Formulare academică:</strong> mobilizarea voluntară este proporțională cu obstacolul perceput.<br /><br /><strong>Exemplu:</strong> o sarcină dificilă cere voință mai puternică.</span></span></p>
      </div>
    </div>
  `,
  "fph-t11b": `
    <div class="lesson-highlight">
      <strong>📌&nbsp;&nbsp;Concepte esențiale:</strong>
      voința se descrie prin <span class='tip'>putere, perseverență, independență și promptitudine a deciziei<span class='tooltip-box'><strong>Spus simplu:</strong> cât de mult te mobilizezi, cât reziști, cât de autonom decizi și cât de rapid alegi corect.<br /><br /><strong>Exemplu:</strong> continui să muncești și iei decizii clare sub presiune.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Indicatori ai voinței</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>💪&nbsp;&nbsp;Puterea voinței</h3>
        <p><strong>Intensitatea mobilizării.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧱&nbsp;&nbsp;Perseverența</h3>
        <p><strong>Menținerea efortului în timp.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Independența</h3>
        <p><strong>Decizii proprii și asumare.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Promptitudinea</h3>
        <p><strong>Decizie rapidă și potrivită.</strong></p>
      </div>
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cum se dezvoltă efortul voluntar</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🔍&nbsp;&nbsp;Autoreflecție</h3>
        <hr />
        <p><span class='tip'>Înțelegi cum te mobilizezi<span class='tooltip-box'><strong>Spus simplu:</strong> îți observi limitele și progresul.<br /><br /><strong>Exemplu:</strong> îți dai seama când obosești și cum îți revii.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧗&nbsp;&nbsp;Exersarea în obstacole</h3>
        <hr />
        <p><span class='tip'>Confruntare repetată cu dificultăți<span class='tooltip-box'><strong>Spus simplu:</strong> înveți să reziști în situații grele.<br /><br /><strong>Exemplu:</strong> îți stabilești sarcini tot mai dificile.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🛠️&nbsp;&nbsp;Exersare conștientă</h3>
        <hr />
        <p><span class='tip'>Practică deliberată a efortului<span class='tooltip-box'><strong>Spus simplu:</strong> îți antrenezi voința prin rutine.<br /><br /><strong>Exemplu:</strong> lucrezi zilnic la aceeași oră.</span></span></p>
      </div>
    </div>
  `,
  "fph-t11c": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Actul voluntar:</strong>
      trece prin <span class='tip'>etape succesive care transformă intenția în acțiune controlată<span class='tooltip-box'><strong>Spus simplu:</strong> vrei, alegi, decizi, execuți și verifici.<br /><br /><strong>Formulare academică:</strong> etapele organizează conduita voluntară de la motivație la evaluare.<br /><br /><strong>Exemplu:</strong> îți propui, planifici, acționezi, apoi verifici rezultatul.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Etapele actului voluntar</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>1️⃣&nbsp;&nbsp;Activare motivațională</h3>
        <p><strong>Intenția și planul inițial.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>2️⃣&nbsp;&nbsp;Confruntarea motivelor</h3>
        <p><strong>Deliberare și evaluarea alternativelor.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>3️⃣&nbsp;&nbsp;Decizia</h3>
        <p><strong>Alegerea unui motiv/scop.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>4️⃣&nbsp;&nbsp;Aplicarea deciziei</h3>
        <p><strong>Execuția acțiunii.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>5️⃣&nbsp;&nbsp;Verificare și concluzii</h3>
        <p><strong>Evaluarea rezultatului.</strong></p>
      </div>
    </div>
  `,
  "fph-t11d": `
    <div class="lesson-highlight">
      <strong>🎯&nbsp;&nbsp;Definiție:</strong>
      atenția este <span class='tip'>proces psihic de activare și orientare selectivă a proceselor psihocomportamentale<span class='tooltip-box'><strong>Spus simplu:</strong> mobilizează și organizează alte procese, fără să aibă conținut propriu.<br /><br /><strong>Formulare academică:</strong> atenția activează, tonifică și orientează selectiv funcționarea psihică.<br /><br /><strong>Exemplu:</strong> te concentrezi pe ce e relevant și ignori restul.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Specificul atenției</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Fără conținut propriu</h3>
        <hr />
        <p><span class='tip'>Organizează alte procese<span class='tooltip-box'><strong>Spus simplu:</strong> nu creează informație, ci o selectează.<br /><br /><strong>Exemplu:</strong> sprijină percepția și gândirea.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🔔&nbsp;&nbsp;Reflex de orientare</h3>
        <hr />
        <p><span class='tip'>Răspuns la stimuli noi/semnificativi<span class='tooltip-box'><strong>Spus simplu:</strong> te întorci spre ceva important.<br /><br /><strong>Exemplu:</strong> reacționezi la un zgomot brusc.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Stări neurofuncționale</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🌤️&nbsp;&nbsp;Veghe</h3>
        <p><strong>Activare generală, disponibilitate.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🔍&nbsp;&nbsp;Vigilență</h3>
        <p><strong>Explorare activă, orientare intenționată.</strong></p>
      </div>
    </div>
    <hr />

    <h2>⚙️&nbsp;&nbsp;Atenția ca factor dinamogen</h2>
    <div class="lesson-grid one">
      <div class="lesson-card">
        <h3>Susține energia și eficiența proceselor psihice</h3>
        <hr />
        <p><span class='tip'>Activează și stabilizează funcționarea psihică<span class='tooltip-box'><strong>Spus simplu:</strong> crește randamentul altor procese.<br /><br /><strong>Exemplu:</strong> percepția și gândirea devin mai eficiente când ești atent.</span></span></p>
      </div>
    </div>
  `,
  "fph-t11e": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Tipuri de atenție:</strong>
      trei forme principale <span class='tip'>involuntară, voluntară și postvoluntară<span class='tooltip-box'><strong>Spus simplu:</strong> de la spontană, la controlată, apoi automatizată prin exercițiu.<br /><br /><strong>Exemplu:</strong> te întorci la zgomot (involuntar), te concentrezi la învățat (voluntar), continui fără efort (postvoluntar).</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cele trei forme</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Involuntară</h3>
        <p><strong>Spontană, declanșată de stimuli noi.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Voluntară</h3>
        <p><strong>Control conștient și scop clar.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🔁&nbsp;&nbsp;Postvoluntară</h3>
        <p><strong>Automatizare prin exercițiu.</strong></p>
      </div>
    </div>
    <hr />

    <h2>✅&nbsp;&nbsp;Avantaje ale atenției postvoluntare</h2>
    <div class="lesson-grid one">
      <div class="lesson-card">
        <h3>Consum redus de energie + eficiență crescută</h3>
        <hr />
        <p><span class='tip'>Concentrare stabilă cu efort mai mic<span class='tooltip-box'><strong>Spus simplu:</strong> rămâi atent fără să te forțezi.<br /><br /><strong>Exemplu:</strong> după practică, lectura devine naturală.</span></span></p>
      </div>
    </div>
  `,
  "fph-t11i": `
    <div class="lesson-highlight">
      <strong>🎯&nbsp;&nbsp;Favorizarea atenției voluntare:</strong>
      înseamnă <span class='tip'>măsuri imediate care susțin concentrarea intenționată<span class='tooltip-box'><strong>Spus simplu:</strong> faci lucruri care te ajută să rămâi atent la sarcină.<br /><br /><strong>Exemplu:</strong> clarifici scopul și reduci distragerile.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Modalități de favorizare</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Scopuri clare</h3>
        <p><strong>Țintă precisă a activității.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Semnificație personală</h3>
        <p><strong>De ce contează pentru tine.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>⚠️&nbsp;&nbsp;Momente dificile anticipate</h3>
        <p><strong>Pregătire pentru obstacole.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🌿&nbsp;&nbsp;Ambianță favorabilă</h3>
        <p><strong>Context care susține concentrarea.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🔕&nbsp;&nbsp;Reducerea perturbatorilor</h3>
        <p><strong>Mai puține distrageri.</strong></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;De ce ajută reducerea perturbatorilor</h2>
    <div class="lesson-grid one">
      <div class="lesson-card">
        <h3>Scade competiția dintre stimuli</h3>
        <hr />
        <p><span class='tip'>Selecție mai eficientă a informației<span class='tooltip-box'><strong>Spus simplu:</strong> rămâi pe sarcină fără să fii „tras” în altă parte.<br /><br /><strong>Exemplu:</strong> oprești notificările când înveți.</span></span></p>
      </div>
    </div>
  `,
  "fph-t11j": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Educarea atenției voluntare:</strong>
      presupune <span class='tip'>formarea pe termen lung a capacității de concentrare<span class='tooltip-box'><strong>Spus simplu:</strong> înveți treptat să te concentrezi mai bine.<br /><br /><strong>Exemplu:</strong> exersezi atenția prin sarcini structurate.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Condiții de educare</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧱&nbsp;&nbsp;Organizare cu sens</h3>
        <p><strong>Structuri clare ale materialului.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Semnificație și motivare</h3>
        <p><strong>Scop personalizat.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🔦&nbsp;&nbsp;Elemente importante evidențiate</h3>
        <p><strong>Țintă atențională clară.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🎛️&nbsp;&nbsp;Varietate controlată</h3>
        <p><strong>Prezentare diversă a materialului.</strong></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Fiziologia atenției</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>⏱️&nbsp;&nbsp;Stabilitate limitată</h3>
        <hr />
        <p><span class='tip'>Fluctuații naturale ale concentrării<span class='tooltip-box'><strong>Spus simplu:</strong> nu poți fi atent continuu fără scăderi.<br /><br /><strong>Exemplu:</strong> randamentul scade după un timp fără pauză.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>📏&nbsp;&nbsp;Durată orientativă</h3>
        <hr />
        <p><span class='tip'>Preșcolari ~10 min, adulți ~30 min<span class='tooltip-box'><strong>Spus simplu:</strong> stabilitatea crește cu vârsta, dar rămâne limitată.<br /><br /><strong>Exemplu:</strong> planifici pauze în învățare.</span></span></p>
      </div>
    </div>
  `,
  "fph-t12a": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Limbajul:</strong>
      sistem și activitate <span class='tip'>de comunicare prin limbă<span class='tooltip-box'><strong>Spus simplu:</strong> folosim cuvinte și reguli comune pentru a comunica.<br /><br /><strong>Formulare academică:</strong> limbajul este sistem și activitate de comunicare cu ajutorul limbii.<br /><br /><strong>Exemplu:</strong> când vorbești, scrii sau explici ceva.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Ce este limba</h2>
    <div class="lesson-grid one">
      <div class="lesson-card">
        <h3>🌐&nbsp;&nbsp;Sistem evolutiv hipercomplex</h3>
        <hr />
        <p><span class='tip'>Simboluri și semne cu rol cultural<span class='tooltip-box'><strong>Spus simplu:</strong> limba este un instrument social al culturii.<br /><br /><strong>Formulare academică:</strong> sistem evolutiv hipercomplex de semne și simboluri.<br /><br /><strong>Exemplu:</strong> româna, franceza, engleza.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Componentele limbii</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>📚&nbsp;&nbsp;Lexic</h3>
        <p><strong>Unitățile de cuvinte.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧱&nbsp;&nbsp;Sintactică</h3>
        <p><strong>Reguli de combinare.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>💬&nbsp;&nbsp;Semantică</h3>
        <p><strong>Semnificații și sensuri.</strong></p>
      </div>
    </div>
  `,
  "fph-t12b": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Caracteristici:</strong>
      limbajul este <span class='tip'>dinamic, interdependent cu gândirea și se dezvoltă progresiv<span class='tooltip-box'><strong>Spus simplu:</strong> se schimbă în funcție de context și se consolidează în timp.<br /><br /><strong>Formulare academică:</strong> limbajul actualizează resursele personalității și mediază gândirea.<br /><br /><strong>Exemplu:</strong> vorbești diferit la examen decât cu prietenii.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Idei-cheie</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>⚙️&nbsp;&nbsp;Fenomen psihologic dinamic</h3>
        <p><strong>Se adaptează contextului.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Interdependență cu gândirea</h3>
        <p><strong>Instrument esențial al gândirii.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Condensarea informației (Miller)</h3>
        <p><strong>Mai mult sens în forme scurte.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>👶&nbsp;&nbsp;Dezvoltare progresivă</h3>
        <p><strong>De la cuvânt‑propoziție la propoziții complexe.</strong></p>
      </div>
    </div>
  `,
  "fph-t12c": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Funcții:</strong>
      limbajul are roluri <span class='tip'>comunicative, cognitive și reglatorii<span class='tooltip-box'><strong>Spus simplu:</strong> transmite, organizează gândirea și ghidează acțiunea.<br /><br /><strong>Exemplu:</strong> explici, gândești mai clar, îți controlezi comportamentul.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Funcțiile limbajului</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🤝&nbsp;&nbsp;Comunicativă</h3>
        <p><strong>Emoții, idei, relații.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Cognitivă</h3>
        <p><strong>Reprezentare, judecăți, raționamente.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Reglatorie</h3>
        <p><strong>Calibrare acțiune + funcție ludică + cathartică + relații.</strong></p>
      </div>
    </div>
  `,
  "fph-t12d": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Tipuri:</strong>
      limbajul poate fi <span class='tip'>verbal, nonverbal sau paraverbal<span class='tooltip-box'><strong>Spus simplu:</strong> cuvinte, corp sau modul vocii.<br /><br /><strong>Exemplu:</strong> ce spui, cum arăți, cum spui.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cele trei tipuri principale</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>📝&nbsp;&nbsp;Verbal</h3>
        <p><strong>Cuvinte vorbite sau scrise.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🙌&nbsp;&nbsp;Nonverbal</h3>
        <p><strong>Gesturi, mimică, postură.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🎙️&nbsp;&nbsp;Paraverbal</h3>
        <p><strong>Ton, ritm, volum, intonație.</strong></p>
      </div>
    </div>

     <hr />

    <h2>🧩&nbsp;&nbsp;Toate tipurile de limbaj</h2>
    <img
  src="Assets/Schema tipurilor de limbaj.png"
  alt="Schema tipurilor de limbaj"
  style="max-width:720px;height:auto;display:block;margin:0 auto;"
/>

  `,
  "fph-t12e": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Limbaj intern:</strong>
      formă <span class='tip'>concentrată și tăcută de vorbire<span class='tooltip-box'><strong>Spus simplu:</strong> „vorbirea din minte”.<br /><br /><strong>Formulare academică:</strong> modalitate specifică existenței mintale, orientată spre autoreglare.<br /><br /><strong>Exemplu:</strong> îți spui în gând pașii unei rezolvări.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Funcție principală</h2>
    <div class="lesson-grid one">
      <div class="lesson-card">
        <h3>🔧&nbsp;&nbsp;Autoreglarea acțiunii</h3>
        <hr />
        <p><span class='tip'>Ghidare și control conștient<span class='tooltip-box'><strong>Spus simplu:</strong> îți organizezi și controlezi conduita.<br /><br /><strong>Exemplu:</strong> îți spui „calm” și te reglezi.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧭&nbsp;&nbsp;Vîgotski: caracter predicativ</h2>
    <div class="lesson-grid one">
      <div class="lesson-card">
        <h3>Predicativ = condensat în sens</h3>
        <hr />
        <p><span class='tip'>Vehicul de sens și semnificație<span class='tooltip-box'><strong>Spus simplu:</strong> nu spui tot enunțul, păstrezi miezul.<br /><br /><strong>Exemplu:</strong> îți spui „gata, rezolv”.</span></span></p>
      </div>
    </div>
  `,
  "fph-t12f": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Vîgotski:</strong>
      limbajul intern apare prin <span class='tip'>internalizarea vorbirii cu voce tare<span class='tooltip-box'><strong>Spus simplu:</strong> ce spuneai cu voce tare ajunge să fie gândit în minte.<br /><br /><strong>Formulare academică:</strong> limbajul extern se transformă în limbaj intern prin interiorizare progresivă.<br /><br /><strong>Exemplu:</strong> „acum fac asta” devine gând tăcut.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Roluri-cheie</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🔄&nbsp;&nbsp;Internalizare</h3>
        <p><strong>Transformarea vorbirii externe.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🌍&nbsp;&nbsp;Mediere socio‑culturală</h3>
        <p><strong>Ghidaj extern → autoreglare internă.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🛠️&nbsp;&nbsp;Control și autocontrol</h3>
        <p><strong>Monitorizare conștientă.</strong></p>
      </div>
    </div>
  `,
  "fph-t12g": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Dezvoltarea vorbirii (Vîgotski):</strong>
      trece prin <span class='tip'>etape de la vorbire pentru sine la vorbire internă<span class='tooltip-box'><strong>Spus simplu:</strong> copilul vorbește cu voce tare, apoi către ceilalți, apoi în minte.<br /><br /><strong>Exemplu:</strong> „acum pun piesa aici” → dialog → gând tăcut.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Etapele vorbirii</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🗣️&nbsp;&nbsp;Egocentric speech</h3>
        <p><strong>Vorbire cu voce tare pentru sine.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>👥&nbsp;&nbsp;Awareness of others</h3>
        <p><strong>Orientare către interlocutor.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>💬&nbsp;&nbsp;Social speech</h3>
        <p><strong>Vorbire interactivă, comunicare reală.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Inner speech</h3>
        <p><strong>Vorbire internă, tăcută.</strong></p>
      </div>
    </div>
    <hr />

    <h2>➡️&nbsp;&nbsp;Ordinea de dezvoltare</h2>
    <p><strong>Egocentric speech → Social speech → Inner speech</strong></p>
  `,
  "fph-t13a": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Definiție (Popescu‑Neveanu, 1978):</strong>
      personalitatea este un <span class='tip'>macrosistem de invarianți informaționali și operaționali exprimați în conduită<span class='tooltip-box'><strong>Spus simplu:</strong> ceea ce rămâne stabil și definitoriu la o persoană, vizibil în comportament.<br /><br /><strong>Exemplu:</strong> tipare constante de reacție și valori.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Caracteristici esențiale</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>📌&nbsp;&nbsp;Stabilitate relativă</h3>
        <hr />
        <p><span class='tip'>Invarianți informaționali și operaționali<span class='tooltip-box'><strong>Spus simplu:</strong> trăsături care se repetă în timp.<br /><br /><strong>Exemplu:</strong> stil constant de relaționare.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Exprimare în conduită</h3>
        <hr />
        <p><span class='tip'>Se vede în comportament<span class='tooltip-box'><strong>Spus simplu:</strong> personalitatea se observă în acțiuni.<br /><br /><strong>Exemplu:</strong> reacții consecvente în situații diferite.</span></span></p>
      </div>
    </div>
  `,
  "fph-t13b": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Allport:</strong>
      trăsăturile sunt <span class='tip'>predispoziții relativ stabile de răspuns comportamental<span class='tooltip-box'><strong>Spus simplu:</strong> tendințe constante de a reacționa într-un anumit fel.<br /><br /><strong>Exemplu:</strong> sociabil în contexte variate.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Configurația trăsăturilor</h2>
    <div class="lesson-grid one">
      <div class="lesson-card">
        <h3>Profil individual unic</h3>
        <hr />
        <p><span class='tip'>Trăsăturile se combină diferit la fiecare persoană<span class='tooltip-box'><strong>Spus simplu:</strong> aceeași trăsătură apare în combinații diferite.<br /><br /><strong>Exemplu:</strong> doi oameni pot fi ambii consecvenți, dar diferă la alte trăsături.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Niveluri ierarhice</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🏔️&nbsp;&nbsp;Cardinale</h3>
        <p><strong>Dominante, rare, pervazive.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧩&nbsp;&nbsp;Centrale</h3>
        <p><strong>Trăsături importante și stabile.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🪶&nbsp;&nbsp;Secundare</h3>
        <p><strong>Contextuale, mai puțin stabile.</strong></p>
      </div>
    </div>
    <hr />

    <h2>💡&nbsp;&nbsp;Ipoteza lexicală</h2>
    <div class="lesson-grid one">
      <div class="lesson-card">
        <h3>Trăsăturile importante sunt codificate în limbaj</h3>
        <hr />
        <p><span class='tip'>Termeni stabili în vocabularul comun<span class='tooltip-box'><strong>Spus simplu:</strong> ce e important ajunge să aibă nume.<br /><br /><strong>Exemplu:</strong> „onest”, „ambițios”.</span></span></p>
      </div>
    </div>
  `,
  "fph-t13c": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Cattell:</strong>
      personalitatea este descrisă prin <span class='tip'>16 factori relativ stabili care permit predicția comportamentului<span class='tooltip-box'><strong>Spus simplu:</strong> mai multe trăsături se reduc la factori esențiali.<br /><br /><strong>Exemplu:</strong> poziționare între poli opuși ai aceleiași trăsături.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Analiza factorială</h2>
    <div class="lesson-grid two">
      <div class="lesson-card">
        <h3>🔍&nbsp;&nbsp;Reducerea trăsăturilor</h3>
        <hr />
        <p><span class='tip'>De la multe comportamente la factori esențiali<span class='tooltip-box'><strong>Spus simplu:</strong> găsești „nucleele” stabile.<br /><br /><strong>Exemplu:</strong> gruparea comportamentelor similare.</span></span></p>
      </div>
      <div class="lesson-card">
        <h3>↔️&nbsp;&nbsp;Polarități</h3>
        <hr />
        <p><span class='tip'>Poziționare între două extreme<span class='tooltip-box'><strong>Spus simplu:</strong> scorurile indică unde te situezi.<br /><br /><strong>Exemplu:</strong> cald vs distant.</span></span></p>
      </div>
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Exemple de factori</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🤗&nbsp;&nbsp;Warmth</h3>
        <p><strong>Căldură emoțională.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧊&nbsp;&nbsp;Emotional Stability</h3>
        <p><strong>Stabilitate vs reactivitate.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>💡&nbsp;&nbsp;Abstractness</h3>
        <p><strong>Gândire abstractă și creativă.</strong></p>
      </div>
    </div>
  `,
  "fph-t13d": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Erikson:</strong>
      dezvoltarea personalității are loc prin <span class='tip'>8 stadii psihosociale, fiecare cu un conflict specific<span class='tooltip-box'><strong>Spus simplu:</strong> fiecare etapă are o „criză” ce trebuie rezolvată.<br /><br /><strong>Exemplu:</strong> identitate vs confuzie de rol în adolescență.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Idei centrale</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>⚖️&nbsp;&nbsp;Conflict psihosocial</h3>
        <p><strong>Rezolvarea lui modelează personalitatea.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Stadii pe tot parcursul vieții</h3>
        <p><strong>De la copilărie la vârsta înaintată.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧑‍🎓&nbsp;&nbsp;Adolescență</h3>
        <p><strong>Identitate vs confuzie de rol.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🏡&nbsp;&nbsp;Adulți</h3>
        <p><strong>Intimitate și generativitate.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🕊️&nbsp;&nbsp;Ultima etapă</h3>
        <p><strong>Integritate vs deznădejde.</strong></p>
      </div>
    </div>
    <hr />

    <h2>🌱&nbsp;&nbsp;Generativitatea</h2>
    <div class="lesson-grid one">
      <div class="lesson-card">
        <h3>Creare, transmitere, contribuție</h3>
        <hr />
        <p><span class='tip'>Grija pentru generațiile următoare<span class='tooltip-box'><strong>Spus simplu:</strong> oferi ceva valoros mai departe.<br /><br /><strong>Exemplu:</strong> mentorat, educarea copiilor.</span></span></p>
      </div>
    </div>
  `,
  "fph-t13e": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Big Five:</strong>
      modelul descrie <span class='tip'>cinci dimensiuni fundamentale ale personalității<span class='tooltip-box'><strong>Spus simplu:</strong> cinci trăsături mari care explică diferențele dintre oameni.<br /><br /><strong>Exemplu:</strong> extraversie vs introversie.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cele cinci dimensiuni</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🌱&nbsp;&nbsp;Deschidere</h3>
        <p><strong>Curiozitate, imaginație.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Conștiinciozitate</h3>
        <p><strong>Organizare, autocontrol.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🎉&nbsp;&nbsp;Extraversie</h3>
        <p><strong>Energie, sociabilitate.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🤝&nbsp;&nbsp;Agreabilitate</h3>
        <p><strong>Cooperare, empatie.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Neuroticism</h3>
        <p><strong>Instabilitate emoțională.</strong></p>
      </div>
    </div>
  `,
  "fph-t13f": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;HEXACO:</strong>
      modelul extinde Big Five prin <span class='tip'>dimensiunea onestitate‑umilință<span class='tooltip-box'><strong>Spus simplu:</strong> sinceritate și modestie adăugate la celelalte trăsături.<br /><br /><strong>Exemplu:</strong> evitarea manipulării și a egoismului excesiv.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cele șase dimensiuni</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🤲&nbsp;&nbsp;Onestitate‑umilință</h3>
        <p><strong>Sinceritate, modestie.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>💓&nbsp;&nbsp;Emoționalitate</h3>
        <p><strong>Sensibilitate, atașament.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🎉&nbsp;&nbsp;Extraversie</h3>
        <p><strong>Energie, sociabilitate.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🤝&nbsp;&nbsp;Agreabilitate</h3>
        <p><strong>Toleranță, cooperare.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Conștiinciozitate</h3>
        <p><strong>Organizare, autocontrol.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🌱&nbsp;&nbsp;Deschidere</h3>
        <p><strong>Curiozitate, imaginație.</strong></p>
      </div>
    </div>
  `,
  "fph-t13g": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Abordare structural‑sistemică:</strong>
      personalitatea este <span class='tip'>un sistem integrat de structuri și procese<span class='tooltip-box'><strong>Spus simplu:</strong> combină laturi stabile cu mecanisme care le pun în funcțiune.<br /><br /><strong>Exemplu:</strong> temperament + aptitudini + caracter + procese operaționale.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Componente principale</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Temperament</h3>
        <p><strong>Dinamico‑energetic.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧰&nbsp;&nbsp;Aptitudini</h3>
        <p><strong>Instrumental‑operaționale.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Caracter</h3>
        <p><strong>Valoric‑relațional.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>⚙️&nbsp;&nbsp;Sisteme operaționale</h3>
        <p><strong>Atenție, gândire, memorie, voință.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🔋&nbsp;&nbsp;Aspecte dinamico‑energetice</h3>
        <p><strong>Forță și mobilitate.</strong></p>
      </div>
    </div>
  `,
  "fph-t13h": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Temperamentul:</strong>
      latura <span class='tip'>dinamico‑energetică a personalității (intensitate, ritm, reactivitate)<span class='tooltip-box'><strong>Spus simplu:</strong> descrie „cum” reacționezi, nu „ce valori” ai.<br /><br /><strong>Exemplu:</strong> reacții rapide vs lente.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;ANS și parametrii ei</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>💪&nbsp;&nbsp;Forța (energia)</h3>
        <p><strong>Capacitatea de susținere a activității intense.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>⚡&nbsp;&nbsp;Mobilitatea</h3>
        <p><strong>Viteza de adaptare.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>⚖️&nbsp;&nbsp;Echilibrul</h3>
        <p><strong>Raport excitație–inhibiție.</strong></p>
      </div>
    </div>
  `,
  "fph-t13j": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Aptitudinile:</strong>
      latura <span class='tip'>instrumental‑operațională a personalității, care susține performanța<span class='tooltip-box'><strong>Spus simplu:</strong> capacități care ajută să faci bine o activitate.<br /><br /><strong>Exemplu:</strong> aptitudinile pentru predare.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Elemente-cheie</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🧰&nbsp;&nbsp;Potențial operațional</h3>
        <p><strong>Capacitatea de a susține performanțe.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🌱&nbsp;&nbsp;Premise + dezvoltare</h3>
        <p><strong>Bază ereditară + educație/exercițiu.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🎯&nbsp;&nbsp;Relația cu performanța</h3>
        <p><strong>Potențial, nu garanție.</strong></p>
      </div>
    </div>
  `,
  "fph-t13k": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Aptitudini:</strong>
      pot fi <span class='tip'>generale (larg aplicabile) sau speciale (domeniu specific)<span class='tooltip-box'><strong>Spus simplu:</strong> unele ajută în multe activități, altele într‑un singur domeniu.<br /><br /><strong>Exemplu:</strong> inteligența vs aptitudini muzicale.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Generale vs speciale</h2>
    <div class="lesson-grid two colorful">
      <div class="lesson-card">
        <h3>🌐&nbsp;&nbsp;Generale</h3>
        <p><strong>Inteligență, creativitate, spirit de observație.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🎵&nbsp;&nbsp;Speciale</h3>
        <p><strong>Pedagogice, literare, tehnice, muzicale.</strong></p>
      </div>
    </div>
  `,
  "fph-t13l": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Caracterul:</strong>
      latura <span class='tip'>relațional‑valorică a personalității<span class='tooltip-box'><strong>Spus simplu:</strong> modul stabil de raportare la valori, reguli și oameni.<br /><br /><strong>Exemplu:</strong> corectitudine, responsabilitate, respect.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Cum se manifestă</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🤝&nbsp;&nbsp;Raportare la ceilalți</h3>
        <p><strong>Atitudini și comportamente stabile.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Raportare la activitate</h3>
        <p><strong>Responsabilitate și reguli interne.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🪞&nbsp;&nbsp;Raportare la sine</h3>
        <p><strong>Autoevaluare și principii personale.</strong></p>
      </div>
    </div>
    <hr />

    <h2>🌍&nbsp;&nbsp;Enculturația</h2>
    <div class="lesson-grid one">
      <div class="lesson-card">
        <h3>Interiorizarea valorilor prin educație</h3>
        <hr />
        <p><span class='tip'>Norme și modele culturale devin orientări personale<span class='tooltip-box'><strong>Spus simplu:</strong> înveți valori și le faci „ale tale”.<br /><br /><strong>Exemplu:</strong> regulile sociale devin principii interne.</span></span></p>
      </div>
    </div>
  `,
  "fph-t13m": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Atitudinea:</strong>
      modalitate <span class='tip'>relativ stabilă de raportare, orientare și reglare a acțiunii<span class='tooltip-box'><strong>Spus simplu:</strong> cum te poziționezi față de ceva și cum acționezi în consecință.<br /><br /><strong>Exemplu:</strong> atitudinea față de muncă.</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Tipuri de atitudini</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>🪞&nbsp;&nbsp;Față de sine</h3>
        <p><strong>Autoevaluare și autoacceptare.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🤝&nbsp;&nbsp;Față de ceilalți</h3>
        <p><strong>Raportare interpersonală.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🧭&nbsp;&nbsp;Față de activitate</h3>
        <p><strong>Raportare la muncă/învățare.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🌿&nbsp;&nbsp;Față de mediul ecologic</h3>
        <p><strong>Responsabilitate față de natură.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🏛️&nbsp;&nbsp;Față de realitățile sociale</h3>
        <p><strong>Norme, instituții, valori sociale.</strong></p>
      </div>
    </div>
  `,
  "fph-t13n": `
    <div class="lesson-highlight">
      <strong>🧭&nbsp;&nbsp;Modelul ABC:</strong>
      atitudinea are trei componente <span class='tip'>Afectivă, Comportamentală și Cognitivă<span class='tooltip-box'><strong>Spus simplu:</strong> ce simți, cum te comporți, ce crezi.<br /><br /><strong>Exemplu:</strong> îți place ceva (A), acționezi (B), ai convingeri despre el (C).</span></span>.
    </div>
    <hr />

    <h2>🧩&nbsp;&nbsp;Componentele ABC</h2>
    <div class="lesson-grid three colorful">
      <div class="lesson-card">
        <h3>❤️&nbsp;&nbsp;A – Affect</h3>
        <p><strong>Emoții față de obiect.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>🏃&nbsp;&nbsp;B – Behavior</h3>
        <p><strong>Comportament orientat.</strong></p>
      </div>
      <div class="lesson-card">
        <h3>💭&nbsp;&nbsp;C – Cognition</h3>
        <p><strong>Credințe și idei.</strong></p>
      </div>
    </div>
  `,
};

// Seturi de flashcard-uri (două deck-uri) pentru fiecare curs.
// Momentan completate doar pentru Curs 1. Dacă un curs nu are date aici,
// nu va apărea secțiunea de carduri în UI.
window.FPH_FLASHCARDS = {
  "fph-cap1": [
    {
      id: "deck-cap1-esential",
      title: "Curs 1 FLASHCARDS",
      cards: [
        {
          front: "Explică etimologia termenului „psihologie”",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
   
    <div>„Psihologie” vine din greacă și îmbină două rădăcini:</div>
    ${window.flashPillList([
      "🫁&nbsp;&nbsp;<span class='tip'><strong>psyche</strong> — suflet/ suflu<span class='tooltip-box'><strong>Spus simplu:</strong> se referă la „viața interioară” (trăiri, gânduri, stări).<br /><br /><strong>Exemplu:</strong> emoții (bucurie, frică), gânduri, imagini mentale.</span></span>",
      "📚&nbsp;&nbsp;<span class='tip'><strong>logos</strong> — studiu/ explicație rațională/ știință<span class='tooltip-box'><strong>Spus simplu:</strong> arată că vorbim despre o explicare sistematică (nu doar păreri).<br /><br /><strong>Exemplu:</strong> bio-logie = studiul vieții; socio-logie = studiul societății.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește psihologia ca știință",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${
      window.FLASH_TITLE_STYLE
    }">🔬&nbsp;&nbsp;Definiție</div>
    <div><strong>Psihologia</strong> este știința care studiază:</div>
    ${window.flashPillList([
      "🧍&nbsp;&nbsp;<span class='tip'><strong>conduita umană</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce fac oamenii (comportamente observabile) în situații reale.<br /><br /><strong>Exemplu:</strong> cum reacționezi la stres într-un examen.</span></span>",
      "💭&nbsp;&nbsp;<span class='tip'><strong>procesele psihice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce se întâmplă „în interior”: percepție, atenție, memorie, gândire, emoții, decizie.<br /><br /><strong>Exemplu:</strong> cum atenția susține învățarea sau cum emoțiile influențează deciziile.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește psihicul uman după Popescu-Neveanu (1978)",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${window.FLASH_TITLE_STYLE}">🧩&nbsp;&nbsp;Definiție</div>
    <div><strong>Psihicul</strong> este un <span class='tip'><strong>ansamblu de stări, însușiri, fenomene și procese subiective</strong><span class='tooltip-box'><strong>Spus simplu:</strong> include ce trăiești și cum funcționezi: stări (ex.: anxietate), trăsături (ex.: optimism), procese (ex.: atenție, memorie).<br /><br /><strong>Exemplu:</strong> emoție (teamă) + gând (evaluare) + reacție (evitare).</span></span> care îndeplinește <span class='tip'><strong>funcții de raportare la lume și la sine</strong><span class='tooltip-box'><strong>Spus simplu:</strong> te ajută să te orientezi în mediul extern și să te înțelegi pe tine.<br /><br /><strong>Exemplu:</strong> observi o situație, îi dai sens și îți planifici reacția.</span></span>.</div>
  </div>
</div>`,
        },

        {
          front:
            "Enumeră principiile fundamentale (Cosmovici/ Popescu-Neveanu)",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${
      window.FLASH_TITLE_STYLE
    }">🧭&nbsp;&nbsp;Principii fundamentale</div>
    <div>Principiile sunt repere generale despre cum funcționează psihicul.</div>
    ${window.flashPillList([
      "🔗&nbsp;&nbsp;<span class='tip'><strong>principiul determinismului</strong><span class='tooltip-box'><strong>Spus simplu:</strong> faptele psihice au cauze și condiții (nu apar „din nimic”).<br /><br /><strong>Exemplu:</strong> o reacție de anxietate poate depinde de experiențe, context și interpretări.</span></span>",
      "⚙️&nbsp;&nbsp;<span class='tip'><strong>principiul organizării sistemice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> psihicul funcționează ca un sistem (părți care lucrează împreună).<br /><br /><strong>Exemplu:</strong> emoțiile influențează atenția, iar atenția influențează memoria.</span></span>",
      "📈&nbsp;&nbsp;<span class='tip'><strong>principiul dezvoltării</strong><span class='tooltip-box'><strong>Spus simplu:</strong> psihicul se transformă de-a lungul vieții.<br /><br /><strong>Exemplu:</strong> copilul nu gândește și nu se autoreglează ca adultul.</span></span>",
      "🏛️&nbsp;&nbsp;<span class='tip'><strong>principiul condiționării social-istorice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> societatea și epoca influențează formarea psihicului (valori, norme, practici).<br /><br /><strong>Exemplu:</strong> felul în care se educă un copil diferă între generații și culturi.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Explică principiul determinismului",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${
      window.FLASH_TITLE_STYLE
    }">🔗&nbsp;&nbsp;Determinism</div>
    <div><strong>Principiul determinismului</strong> afirmă că faptele psihice se înscriu pe traiectoria unei <strong>cauzalități</strong>.</div>
    <div style="margin-top:10px;">Ce înseamnă practic:</div>
    ${window.flashPillList([
      "🧩&nbsp;&nbsp;<span class='tip'><strong>cauze multiple</strong><span class='tooltip-box'><strong>Spus simplu:</strong> de obicei nu există o singură cauză, ci mai mulți factori care se combină.<br /><br /><strong>Exemplu:</strong> oboseală + presiune + experiențe anterioare → emoții mai intense.</span></span>",
      "🎯&nbsp;&nbsp;<span class='tip'><strong>contextul contează</strong><span class='tooltip-box'><strong>Spus simplu:</strong> același factor nu produce mereu același efect, depinde de situație.<br /><br /><strong>Exemplu:</strong> feedbackul critic poate motiva sau poate bloca, în funcție de persoană și de context.</span></span>",
      "📊&nbsp;&nbsp;<span class='tip'><strong>probabilistic, nu mecanic</strong><span class='tooltip-box'><strong>Spus simplu:</strong> psihicul nu funcționează ca un mecanism simplu „dacă X, atunci mereu Y”.<br /><br /><strong>Exemplu:</strong> stresul crește probabilitatea erorilor, dar nu le garantează.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Explică principiul dezvoltării",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${
      window.FLASH_TITLE_STYLE
    }">📈&nbsp;&nbsp;Dezvoltare</div>
    <div><strong>Principiul dezvoltării</strong> arată că psihicul este într-o <strong>transformare continuă</strong> de-a lungul vieții.</div>
    <div style="margin-top:10px;">Idei-cheie:</div>
    ${window.flashPillList([
      "🧱&nbsp;&nbsp;<span class='tip'><strong>nu e doar acumulare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu devii doar „mai mult”, ci și „altfel organizat”.<br /><br /><strong>Exemplu:</strong> treci de la reacții imediate la planificare.</span></span>",
      "🔁&nbsp;&nbsp;<span class='tip'><strong>schimbări prin experiență</strong><span class='tooltip-box'><strong>Spus simplu:</strong> învățarea și experiențele reorganizează felul în care funcționezi.<br /><br /><strong>Exemplu:</strong> îți ajustezi strategiile de învățare după rezultate.</span></span>",
    ])}
  </div>
</div>`,
        },
        {
          front: "Explică principiul organizării sistemice",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">

    <div><strong>Principiul organizării sistemice</strong> spune că psihicul este un <strong>sistem</strong>: un ansamblu de elemente aflate într-o <strong>interacțiune ordonată</strong>.</div>

    <div style="margin-top:10px;"><strong>Consecințe:</strong></div>
    ${window.flashPillList([
      "🔄&nbsp;&nbsp;<span class='tip'><strong>părțile se influențează reciproc</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce simți îți poate schimba gândirea, iar gândirea îți poate schimba ce simți.<br /><br /><strong>Exemplu:</strong> anxietatea îngustează atenția; o reinterpretare realistă reduce anxietatea.</span></span>",
      "🧩&nbsp;&nbsp;<span class='tip'><strong>întregul e mai mult decât suma părților</strong><span class='tooltip-box'><strong>Spus simplu:</strong> funcționarea psihică rezultă din combinații, nu dintr-un singur „buton”.<br /><br /><strong>Exemplu:</strong> performanța la examen depinde de atenție + memorie + motivație + emoții.</span></span>",
    ])}

    <div style="margin-top:12px;">
  <hr style="border:0;height:1px;background:currentColor;opacity:0.14;margin:12px 0;" />
</div>

    <div class='flash-title' style="${
      window.FLASH_TITLE_STYLE
    }">⚙️&nbsp;&nbsp;Psihicul ca sistem</div>
    ${window.flashPillList([
      "🌍&nbsp;&nbsp;<span class='tip'><strong>deschis</strong><span class='tooltip-box'><strong>Spus simplu:</strong> schimbă informații cu mediul (cerințe, relații, feedback).<br /><br /><strong>Exemplu:</strong> reacționezi diferit când primești feedback de la profesor sau colegi.</span></span>",
      "🔄&nbsp;&nbsp;<span class='tip'><strong>dinamic</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se modifică în timp prin învățare și adaptare.<br /><br /><strong>Exemplu:</strong> îți schimbi obiceiurile când observi că strategia veche nu funcționează.</span></span>",
      "🧩&nbsp;&nbsp;<span class='tip'><strong>hipercomplex</strong><span class='tooltip-box'><strong>Spus simplu:</strong> are multe componente/ niveluri care interacționează.<br /><br /><strong>Exemplu:</strong> atenția, memoria și emoțiile se influențează reciproc într-o sarcină.</span></span>",
      "🎛️&nbsp;&nbsp;<span class='tip'><strong>autoreglabil</strong><span class='tooltip-box'><strong>Spus simplu:</strong> își ajustează funcționarea folosind feedback (rezultatele revin și „corectează”).<br /><br /><strong>Exemplu:</strong> dacă nu reții la recapitulare, schimbi metoda (pauze, teste, explicații).</span></span>",
    ])}

  </div>
</div>`,
        },
        {
          front: "Explică principiul condiționării social-istorice",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${
      window.FLASH_TITLE_STYLE
    }">🏛️&nbsp;&nbsp;Condiționare social-istorică</div>
    <div><strong>Principiul condiționării social-istorice</strong> afirmă că factorii sociali și contextul istoric <strong>modelează</strong> formarea și manifestarea psihicului.</div>
    <div style="margin-top:10px;">Ce înseamnă concret:</div>
    ${window.flashPillList([
      "👥&nbsp;&nbsp;<span class='tip'><strong>norme și valori</strong><span class='tooltip-box'><strong>Spus simplu:</strong> înveți ce e „acceptat”, „corect”, „important” din cultura în care trăiești.<br /><br /><strong>Exemplu:</strong> ce înseamnă respect/ succes poate diferi între culturi.</span></span>",
      "🧰&nbsp;&nbsp;<span class='tip'><strong>roluri și instituții</strong><span class='tooltip-box'><strong>Spus simplu:</strong> familia, școala, munca oferă roluri și reguli care te formează.<br /><br /><strong>Exemplu:</strong> stilul de predare influențează motivația și strategiile de învățare.</span></span>",
      "🕰️&nbsp;&nbsp;<span class='tip'><strong>diferențe între epoci</strong><span class='tooltip-box'><strong>Spus simplu:</strong> aceeași vârstă poate arăta diferit în generații diferite.<br /><br /><strong>Exemplu:</strong> tehnologia schimbă socializarea și atenția.</span></span>",
    ])}
  </div>
</div>`,
        },
      ],
    },
  ],

  "fph-cap2": [
    {
      id: "deck-cap2-complet",
      title: "Curs 2 FLASHCARDS",
      cards: [
        {
          front: "Definește conștiința",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Conștiința</strong> este o experimentare <span class='tip'><span class='tooltip-box'>Trăire personală, interioară, proprie fiecărui individ.</span><strong>subiectivă</strong></span>, <span class='tip'><span class='tooltip-box'>Are organizare internă, nu este haotică, elementele sunt ordonate.</span><strong>structurată</strong></span>, <span class='tip'><span class='tooltip-box'>Include mai multe componente ale vieții psihice, aflate în legătură între ele.</span><strong>complexă</strong></span> și <span class='tip'><span class='tooltip-box'>Se desfășoară acum, în timp real, cu implicare activă în situația curentă.</span><strong>prezentă</strong></span> a interacțiunii individului cu mediul și cu sine.</div>
  </div>
</div>`,
        },

        {
          front:
            "Definește cele două forme ale conștiinței la Andrei Cosmovici",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Andrei Cosmovici</strong> distinge două forme ale conștiinței:</div>
    ${window.flashPillList([
      "🌍&nbsp;&nbsp;<span class='tip'><strong>conștiința implicită</strong><span class='tooltip-box'><strong>Spus simplu:</strong> orientarea către obiectele, situațiile și evenimentele din mediul extern.<br /><br /><strong>Exemplu:</strong> ești atent la cerința unui exercițiu și la ce ai de făcut pas cu pas.</span></span>",
      "🪞&nbsp;&nbsp;<span class='tip'><strong>conștiința reflexivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> orientarea asupra propriei persoane (stări, gânduri, acțiuni).<br /><br /><strong>Exemplu:</strong> îți observi emoțiile („sunt stresat”) și îți evaluezi reacția („de ce am răspuns așa?”).</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește inconștientul",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Inconștientul</strong> este depozitar al achizițiilor de natură <span class='tip'><span class='tooltip-box'>Cunoștințe, informații neutilizate și amintiri greu accesibile.</span><strong>cognitivă</strong></span> și al aspectelor de factură <span class='tip'><span class='tooltip-box'>Impulsuri, tendințe, nevoi și impresii afective care pot influența comportamentul.</span><strong>motivațional-afectivă</strong></span>, aflate în <span class='tip'><span class='tooltip-box'>Conținuturi existente în psihic, dar neactive și neconștiente în momentul prezent.</span><strong>stare de latență</strong></span>.</div>
    <div style="margin-top:10px;">Idee-cheie: conținuturile inconștiente pot avea un <strong>caracter dinamic</strong> (pot activa și orienta conduita), adesea cu <strong>predominanță afectivă</strong>.</div>
  </div>
</div>`,
        },

        {
          front: "Definește instanțele vieții psihice în teoria lui Freud",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>În teoria lui Freud</strong>, viața psihică este organizată în trei instanțe:</div>
    ${window.flashPillList([
      "🐒&nbsp;&nbsp;<span class='tip'><strong>Sinele (Id)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sediul pulsiunilor și dorințelor primare, orientate spre satisfacere imediată.<br /><br /><strong>Exemplu:</strong> impulsul de a obține ceva „acum”, fără a ține cont de reguli.</span></span>",
      "⚖️&nbsp;&nbsp;<span class='tip'><strong>Eul (Ego)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> mediază între cerințele Sinelui, regulile realității și exigențele Supraeului.<br /><br /><strong>Exemplu:</strong> amâni o dorință și alegi o variantă realistă/acceptabilă.</span></span>",
      "👼&nbsp;&nbsp;<span class='tip'><strong>Supraeul (Superego)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> instanța normelor morale și a idealurilor interiorizate.<br /><br /><strong>Exemplu:</strong> sentimentul de vinovăție după încălcarea unei reguli.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește modelul lui Jung privind structura psihicului",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>În modelul lui Carl Gustav Jung</strong>, psihicul este organizat în <strong>conștiință</strong> și <strong>inconștient</strong>.</div>
    ${window.flashPillList([
      "🪞<span class='tip'><strong>Egoul (centrul conștiinței)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> centrul conștiinței, instanța care spune „eu”.<br /><br /><strong>Exemplu:</strong> îți recunoști gândurile și deciziile ca fiind „ale tale”.</span></span>",
      "📦<span class='tip'><strong>inconștientul personal</strong><span class='tooltip-box'><strong>Spus simplu:</strong> amintiri, experiențe și conținuturi reprimate/uitate din istoria individuală.<br /><br /><strong>Exemplu:</strong> o experiență veche influențează reacții emoționale în prezent.</span></span>",
      "🌌<span class='tip'><strong>inconștientul colectiv</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nivel profund al psihicului, comun tuturor oamenilor.<br /><br /><strong>Include:</strong> <strong>arhetipuri</strong> modele/imagini universale înnăscute care structurează experiența și simbolurile.<br /><br /><strong>Exemplu:</strong> eroul mama înțeleptul apar recurent în povești și mituri din culturi diferite.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește subconștientul (preconștientul)",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Subconștientul (preconștientul)</strong> este o <strong>zonă tampon</strong> între conștient și inconștient: depozitează conținuturi care pot deveni relativ ușor conștiente. Ce include tipic:</div>
    ${window.flashPillList([
      "💭&nbsp;&nbsp;<span class='tip'><strong>amintiri</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pot fi reactivate cu puțin efort.<br /><br /><strong>Exemplu:</strong> îți amintești un nume după câteva secunde de concentrare.</span></span>",
      "🛠️&nbsp;&nbsp;<span class='tip'><strong>scheme de acțiune</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pași învățați pentru situații similare.<br /><br /><strong>Exemplu:</strong> rutina de rezolvare a unui tip de exercițiu.</span></span>",
      "⚙️&nbsp;&nbsp;<span class='tip'><strong>automatisme</strong><span class='tooltip-box'><strong>Spus simplu:</strong> comportamente/proceduri deja formate, gata să intre în câmpul conștiinței.<br /><br /><strong>Exemplu:</strong> tastezi fără să te gândești la fiecare literă.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește atenția postvoluntară",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Atenția postvoluntară</strong> apare după <strong>efortul inițial</strong> al atenției voluntare și se menține apoi mai ușor, pe baza <strong>interesului</strong> pentru activitate. Pe scurt:</div>
    ${window.flashPillList([
      "1️⃣&nbsp;&nbsp;<span class='tip'><strong>pornește cu efort</strong><span class='tooltip-box'><strong>Spus simplu:</strong> la început „te forțezi” să te apuci.<br /><br /><strong>Exemplu:</strong> începi să citești chiar dacă nu ai chef.</span></span>",
      "2️⃣&nbsp;&nbsp;<span class='tip'><strong>se menține spontan</strong><span class='tooltip-box'><strong>Spus simplu:</strong> după ce intri în ritm, nu mai simți același consum de efort.<br /><br /><strong>Exemplu:</strong> după câteva minute, rămâi concentrat fără să te tot „împingi” de la spate.</span></span>",
      "3️⃣&nbsp;&nbsp;<span class='tip'><strong>se sprijină pe interes</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activitatea devine atractivă și atenția se susține natural.<br /><br /><strong>Exemplu:</strong> continui pentru că vrei să înțelegi ideea, nu doar „să termini”.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front:
            "Definește relația dintre conștient, subconștient și inconștient",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Conștientul</strong>, <strong>subconștientul</strong> și <strong>inconștientul</strong> sunt repere ale unui <strong>continuum funcțional</strong> al vieții psihice: nu sunt complet separate, ci se susțin și se influențează reciproc. Idee-cheie:</div>
    ${window.flashPillList([
      "🧭&nbsp;&nbsp;<span class='tip'><strong>niveluri de accesibilitate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> unele conținuturi sunt disponibile imediat (conștient), altele pot fi aduse relativ ușor în conștiință (preconștient sau subconștient), iar altele nu sunt accesibile direct și se manifestă mai ales indirect (inconștient).<br /><br /><strong>Exemple:</strong><br />&nbsp;&nbsp;• <strong>Conștient:</strong> îți amintești rapid o definiție sau repeți o idee pe loc.<br />&nbsp;&nbsp;• <strong>Preconștient sau subconștient:</strong> îți vine în minte după câteva secunde un nume un citat sau un detaliu dacă te concentrezi puțin.<br />&nbsp;&nbsp;• <strong>Inconștient:</strong> îți este greu să spui imediat de ce ai reacționat așa iar motivele apar mai degrabă prin indicii precum vise asocieri emoții sau tipare repetate.</span></span>",
      "🔁&nbsp;&nbsp;<span class='tip'><strong>influență reciprocă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> conținuturile din <strong>preconștient sau subconștient</strong> și <strong>inconștient</strong> pot orienta conduita, iar efortul <strong>conștient</strong> poate modifica treptat deprinderi și reacții automate.<br /><br /><strong>Exemple:</strong><br />&nbsp;&nbsp;• <strong>Conștient → preconștient sau subconștient:</strong> înveți conștient condusul. După exercițiu, pașii devin <strong>automatisme</strong> care rulează fără atenție, dar pot fi aduse ușor în conștient când ai nevoie (de ex., explici cuiva cum schimbi viteza).<br />&nbsp;&nbsp;• <strong>Inconștient → conștient:</strong> ai o reacție disproporționată la o observație minoră și abia după reflecție îți dai seama că atinge o teamă sau o rană veche, care nu era accesibilă direct.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește relația dintre vis și inconștient",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Visul</strong> este asociat în principal cu <strong>inconștientul</strong>, deoarece apare în <strong>absența controlului conștient</strong> și poate exprima <strong>simbolic</strong> conținuturi profunde. De ce:</div>
    ${window.flashPillList([
      "🚫&nbsp;&nbsp;<span class='tip'><strong>control conștient redus</strong><span class='tooltip-box'><strong>Spus simplu:</strong> în vis nu „conduci” voluntar scenariul.<br /><br /><strong>Exemplu:</strong> apar imagini și acțiuni fără să le alegi.</span></span>",
      "🧩&nbsp;&nbsp;<span class='tip'><strong>exprimare simbolică</strong><span class='tooltip-box'><strong>Spus simplu:</strong> conținuturile pot apărea „codate”, prin imagini și scenarii.<br /><br /><strong>Exemplu:</strong> tensiunile pot apărea ca „urmărire”, „cădere”, „rătăcire”.</span></span>",
      "🌙&nbsp;&nbsp;<span class='tip'><strong>conținuturi profunde</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dorințe, conflicte, trăiri greu accesibile direct conștiinței.<br /><br /><strong>Exemplu:</strong> îngrijorări persistente reflectate în tema visului.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește relația dintre intuiție și inconștient",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Intuiția</strong> este explicată ca având sediul preponderent în <strong>inconștient</strong>: ajungi la o concluzie fără să conștientizezi toți pașii intermediari. Formulare utilă:</div>
    ${window.flashPillList([
      "⚡&nbsp;&nbsp;<span class='tip'><strong>„raționament cu premise inconștiente”</strong><span class='tooltip-box'><strong>Spus simplu:</strong> mintea combină indicii și experiențe, dar tu „simți” mai ales rezultatul.<br /><br /><strong>Exemplu:</strong> ai impresia că o soluție e corectă, apoi îți dai seama cum ai ajuns acolo când începi să explici.</span></span>",
      "🤔&nbsp;&nbsp;<span class='tip'><strong>se sprijină pe experiență</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cu cât ai mai multă practică, cu atât intuiția e mai bine „informată”.<br /><br /><strong>Exemplu:</strong> un profesor anticipează unde vor greși elevii înainte să fie evident.</span></span>",
    ])}
  </div>
</div>`,
        },
      ],
    },
  ],

  "fph-cap3": [
    {
      id: "deck-cap3-esential",
      title: "Curs 3 FLASHCARDS",
      cards: [
        {
          front:
            "Ce este excitabilitatea ca premisă neurofiziologică a activității psihice",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Excitabilitatea</strong> este proprietatea materiei vii de a răspunde <strong>activ</strong> și <strong>selectiv</strong> la stimuli (apar modificări interne specifice, nu un răspuns pasiv). Idei-cheie:</div>
    ${window.flashPillList([
      "⚡&nbsp;&nbsp;<span class='tip'><strong>răspuns activ</strong><span class='tooltip-box'><strong>Spus simplu:</strong> organismul își schimbă starea internă când apare un stimul.<br /><br /><strong>Exemplu:</strong> îți crește ritmul cardiac când te sperii.</span></span>",
      "🎯&nbsp;&nbsp;<span class='tip'><strong>răspuns selectiv</strong><span class='tooltip-box'><strong>Spus simplu:</strong> reacția diferă în funcție de tipul și intensitatea stimulului.<br /><br /><strong>Exemplu:</strong> la un zgomot mic doar întorci capul; la unul puternic tresari.</span></span>",
      "✅&nbsp;&nbsp;<span class='tip'><strong>condiție de bază</strong><span class='tooltip-box'><strong>Spus simplu:</strong> fără excitabilitate nu există reacție adaptativă la mediu.<br /><br /><strong>Exemplu:</strong> organismul nu ar putea „detecta” și folosi semnale din jur.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front:
            "Ce este informația ca premisă a activității psihice (Neveanu)",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Informația</strong> (P. P. Neveanu) este unul dintre cele trei aspecte ale existenței materiei, alături de <strong>substanță</strong> și <strong>energie</strong>. Ideea centrală: informația ține de <strong>organizare și semnificație</strong>. Repere:</div>
    ${window.flashPillList([
      "🧱&nbsp;&nbsp;<span class='tip'><strong>substanță</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „din ce e făcut” ceva (componenta materială).<br /><br /><strong>Exemplu:</strong> țesutul nervos ca suport material.</span></span>",
      "🔋&nbsp;&nbsp;<span class='tip'><strong>energie</strong><span class='tooltip-box'><strong>Spus simplu:</strong> capacitatea de a produce schimbări (transformări/ lucru).<br /><br /><strong>Exemplu:</strong> activitatea electrică neuronală consumă energie.</span></span>",
      "ℹ️&nbsp;&nbsp;<span class='tip'><strong>informație</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „cum e organizat” și „ce înseamnă” pentru sistem.<br /><br /><strong>Exemplu:</strong> un semnal (sunet/ lumină) devine relevant când e interpretat.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Ce rol are informația pentru sisteme",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Informația</strong> conectează sisteme și face posibile activități complexe de <strong>autoorganizare</strong>, <strong>autocontrol</strong> și <strong>autoreglaj</strong>. Pe scurt:</div>
    ${window.flashPillList([
      "🧩&nbsp;&nbsp;<span class='tip'><strong>autoorganizare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sistemul își organizează intern componentele ca să funcționeze mai bine.<br /><br /><strong>Exemplu:</strong> înveți o rutină și o faci tot mai eficient.</span></span>",
      "🎛️&nbsp;&nbsp;<span class='tip'><strong>autocontrol</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți dirijezi reacțiile în funcție de scop și context.<br /><br /><strong>Exemplu:</strong> îți inhibi impulsul de a răspunde agresiv.</span></span>",
      "🔁&nbsp;&nbsp;<span class='tip'><strong>autoreglaj</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți ajustezi funcționarea ca să menții/ refaci echilibrul.<br /><br /><strong>Exemplu:</strong> faci pauză când observi scăderea atenției.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Ce este stimulul și ce înseamnă „modificări reversibile”",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Stimulul</strong> este orice factor de mediu care declanșează modificări <strong>reversibile</strong> în materia vie (Popescu-Neveanu, 1978). Adică:</div>
    ${window.flashPillList([
      "🎯&nbsp;&nbsp;<span class='tip'><strong>factor de mediu</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ceva din jur (sau din corp) care acționează asupra ta.<br /><br /><strong>Exemplu:</strong> sunet puternic, lumină, temperatură, miros.</span></span>",
      "↩️&nbsp;&nbsp;<span class='tip'><strong>modificări reversibile</strong><span class='tooltip-box'><strong>Spus simplu:</strong> schimbări trecătoare, fără „distrugere definitivă”.<br /><br /><strong>Exemplu:</strong> tresari la un zgomot, apoi revii la starea de bază.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front:
            "Cum descriem stimulii (natură, intensitate, distribuție, durată)",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Un <strong>stimul</strong> se descrie prin <strong>natură</strong>, <strong>intensitate</strong>, <strong>distribuție în spațiu</strong> și <strong>durată</strong>. Repere rapide:</div>
    ${window.flashPillList([
      "🧪&nbsp;&nbsp;<span class='tip'><strong>natură</strong><span class='tooltip-box'><strong>Spus simplu:</strong> tipul stimulului (mecanic, termic, luminos, chimic etc.).<br /><br /><strong>Exemplu:</strong> lumină puternică vs. miros înțepător.</span></span>",
      "📏&nbsp;&nbsp;<span class='tip'><strong>intensitate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „cât de tare” acționează stimulul.<br /><br /><strong>Exemplu:</strong> sunet slab vs. sunet asurzitor.</span></span>",
      "🗺️&nbsp;&nbsp;<span class='tip'><strong>distribuție</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pe ce suprafață/ zonă acționează.<br /><br /><strong>Exemplu:</strong> o atingere pe un punct vs. pe toată mâna.</span></span>",
      "⏱️&nbsp;&nbsp;<span class='tip'><strong>durată</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât timp acționează stimulul.<br /><br /><strong>Exemplu:</strong> flash scurt vs. lumină menținută.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Ce înseamnă pragul de stimulare",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Pragul de stimulare</strong> este nivelul minim de intensitate la care un stimul produce o reacție sesizabilă. Pe scurt:</div>
    ${window.flashPillList([
      "🚪&nbsp;&nbsp;<span class='tip'><strong>sub prag</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimulul e prea slab ca să declanșeze reacția.<br /><br /><strong>Exemplu:</strong> un sunet foarte fin poate să nu fie observat.</span></span>",
      "🔔&nbsp;&nbsp;<span class='tip'><strong>peste prag</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimulul declanșează răspunsul organismului.<br /><br /><strong>Exemplu:</strong> un zgomot puternic produce orientare/ tresărire.</span></span>",
    ])}
  </div>
</div>`,
        },
        {
          front:
            "Definește procesele corticale fundamentale - excitație și inhibiție",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Excitația</strong> și <strong>inhibiția</strong> sunt procese nervoase fundamentale care, prin acțiunea lor coordonată de <strong>balansare reciprocă</strong>, conferă proprietatea <strong>echilibrului</strong> (Popescu‑Neveanu, 1978). Pe scurt:</div>
    ${window.flashPillList([
      "⚡&nbsp;&nbsp;<span class='tip'><strong>excitația</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activarea zonelor pentru transmiterea informației.<br /><br /><strong>Formulare academică:</strong> creșterea permeabilității celulare la nivelul sinapselor, în vederea transmiterii informației prin influx bioelectric.<br /><br /><strong>Exemplu:</strong> crește activarea neuronală la un stimul puternic.</span></span>",
      "🧊&nbsp;&nbsp;<span class='tip'><strong>inhibiția</strong><span class='tooltip-box'><strong>Spus simplu:</strong> frânare și blocare selectivă a impulsurilor.<br /><br /><strong>Formulare academică:</strong> acționează în sens invers excitației, mijlocind selectivitatea în distribuirea și gradarea impulsurilor nervoase pozitive.<br /><br /><strong>Exemplu:</strong> îți oprești impulsul de a întrerupe pe cineva.</span></span>",
      "⚖️&nbsp;&nbsp;<span class='tip'><strong>echilibru funcțional</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activarea și frânarea lucrează împreună pentru controlul reacțiilor.<br /><br /><strong>Exemplu:</strong> rămâi atent, dar nu intri în agitație excesivă.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front:
            "Care este rolul și manifestarea sistemului nervos central (SNC)",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Sistemul nervos central</strong> are rol esențial în stabilirea și menținerea relațiilor <strong>adaptative</strong> ale individului cu mediul. Se manifestă prin <strong>activitatea nervoasă superioară</strong> și procese corticale (excitație, inhibiție, inducție). Repere:</div>
    ${window.flashPillList([
      "🧭&nbsp;&nbsp;<span class='tip'><strong>relații adaptative</strong><span class='tooltip-box'><strong>Spus simplu:</strong> te ajută să te ajustezi mediului și să-ți reglezi conduita.<br /><br /><strong>Exemplu:</strong> alegi reacția potrivită într-o situație socială.</span></span>",
      "📚&nbsp;&nbsp;<span class='tip'><strong>activitate nervoasă superioară</strong><span class='tooltip-box'><strong>Spus simplu:</strong> funcții psihice „de vârf” (atenție, memorie, gândire, limbaj, reglare).<br /><br /><strong>Exemplu:</strong> îți menții atenția și îți planifici răspunsul la examen.</span></span>",
      "🔁&nbsp;&nbsp;<span class='tip'><strong>inducție</strong><span class='tooltip-box'><strong>Spus simplu:</strong> distribuirea coordonată a activării și frânării în zone diferite.<br /><br /><strong>Exemplu:</strong> când te concentrezi, unele activări cresc, iar altele se reduc ca să nu te distragă.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Explică anatomia Sistemului Nervos Central (SNC)",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Sistemul nervos central</strong> este alcătuit din <strong>encefal</strong> și <strong>măduva spinării</strong>. Pe scurt:</div>
    ${window.flashPillList([
      "🏛️&nbsp;&nbsp;<span class='tip'><strong>encefal</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ansamblul structurilor nervoase din cutia craniană.<br /><br /><strong>Exemplu:</strong> include emisferele cerebrale și alte structuri intracraniene.</span></span>",
      "🧷&nbsp;&nbsp;<span class='tip'><strong>măduva spinării</strong><span class='tooltip-box'><strong>Spus simplu:</strong> partea SNC din canalul vertebral, legătura dintre encefal și corp.<br /><br /><strong>Exemplu:</strong> transmite informații între periferie și encefal.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Care este diferența dintre creier, encefal și minte",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>În mod simplificat, termenii se diferențiază astfel:</div>
    ${window.flashPillList([
      "🧱&nbsp;&nbsp;<span class='tip'><strong>creier</strong><span class='tooltip-box'><strong>Spus simplu:</strong> organul fizic (biologic) format din țesut nervos.<br /><br /><strong>Exemplu:</strong> leziuni/ modificări biologice pot afecta funcțiile.</span></span>",
      "🏛️&nbsp;&nbsp;<span class='tip'><strong>encefal</strong><span class='tooltip-box'><strong>Spus simplu:</strong> termen anatomic: totalitatea structurilor nervoase intracraniene.<br /><br /><strong>Exemplu:</strong> este folosit în descrieri neuroanatomice.</span></span>",
      "💭&nbsp;&nbsp;<span class='tip'><strong>minte</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activitatea psihică (procese și trăiri), nu o structură anatomică.<br /><br /><strong>Exemplu:</strong> gândire, emoții, decizie, atenție.</span></span>",
    ])}
  </div>
</div>`,
        },
        {
          front: "Definește sinapsa și rolul neurotransmițătorilor",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Sinapsa</strong> este regiunea de comunicare dintre un neuron și o altă celulă. <strong>Neurotransmițătorii</strong> (mediatori chimici) sunt molecule eliberate în <strong>fanta sinaptică</strong> pentru a transmite semnalul. Repere:</div>
    ${window.flashPillList([
      "🔗&nbsp;&nbsp;<span class='tip'><strong>sinapsă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „punctul de legătură” prin care trece informația între celule.<br /><br /><strong>Exemplu:</strong> neuron → neuron, neuron → mușchi.</span></span>",
      "🧪&nbsp;&nbsp;<span class='tip'><strong>fanta sinaptică</strong><span class='tooltip-box'><strong>Spus simplu:</strong> spațiul foarte îngust dintre celule, unde sunt eliberați neurotransmițătorii.<br /><br /><strong>Exemplu:</strong> semnalul „sare” chimic peste acest spațiu.</span></span>",
      "📨&nbsp;&nbsp;<span class='tip'><strong>neurotransmițători</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „mesageri chimici” care duc semnalul la celula următoare.<br /><br /><strong>Exemplu:</strong> dopamina/ serotonina pot modifica activarea unei rețele.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește ce este un neuron și rolul părților sale",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Neuronul</strong> este celula nervoasă (unitatea de bază) implicată în generarea și conducerea impulsurilor nervoase. Structură:</div>
    ${window.flashPillList([
      "🧬&nbsp;&nbsp;<span class='tip'><strong>corpul celular</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „centrul” celulei (menține și coordonează activitatea).<br /><br /><strong>Exemplu:</strong> integrează semnalele primite.</span></span>",
      "🌿&nbsp;&nbsp;<span class='tip'><strong>dendrite</strong><span class='tooltip-box'><strong>Spus simplu:</strong> preiau impulsuri de la alți neuroni (recepție).<br /><br /><strong>Exemplu:</strong> primesc semnale din rețea.</span></span>",
      "📤&nbsp;&nbsp;<span class='tip'><strong>axon</strong><span class='tooltip-box'><strong>Spus simplu:</strong> transmite impulsul mai departe către alte celule.<br /><br /><strong>Exemplu:</strong> duce semnalul spre sinapsă.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Dă exemple de neurotransmițători",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Câteva exemple frecvente de <strong>neurotransmițători</strong> (și un non-exemplu util):</div>
    ${window.flashPillList([
      "🎯&nbsp;&nbsp;<span class='tip'><strong>dopamina</strong><span class='tooltip-box'><strong>Spus simplu:</strong> implicată în recompensă, motivație și controlul mișcării.<br /><br /><strong>Exemplu:</strong> crește când apare un feedback „recompensator”.</span></span>",
      "🌙&nbsp;&nbsp;<span class='tip'><strong>serotonina</strong><span class='tooltip-box'><strong>Spus simplu:</strong> implicată în dispoziție, somn și apetit.<br /><br /><strong>Exemplu:</strong> legată de reglarea stării afective.</span></span>",
      "✨&nbsp;&nbsp;<span class='tip'><strong>endorfine</strong><span class='tooltip-box'><strong>Spus simplu:</strong> efect analgezic și asociere cu starea de bine.<br /><br /><strong>Exemplu:</strong> pot crește după efort fizic intens.</span></span>",
      "🚨&nbsp;&nbsp;<span class='tip'><strong>adrenalina</strong><span class='tooltip-box'><strong>Spus simplu:</strong> susține reacții de tip „luptă sau fugi” (mobilizare).<br /><br /><strong>Exemplu:</strong> crește activarea când apare un pericol.</span></span>",
    ])}
  </div>
</div>`,
        },
      ],
    },
  ],

  "fph-cap4": [
    {
      id: "deck-cap4-esential",
      title: "Curs 4 FLASHCARDS",
      cards: [
        {
          front: "Ce înseamnă experimentarea conștientă a lumii",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Experimentarea conștientă a lumii</strong> înseamnă raportare <strong>conștientă și activă</strong> la stimuli interni și externi, prin procesarea informației, cu producerea de comportamente adaptative.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Raportare conștientă și activă</strong></div>
    ${window.flashPillList([
      "🧭&nbsp;&nbsp;<span class='tip'><strong>orientarea atenției</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți îndrepți atenția spre ce e relevant, nu la întâmplare.<br /><br /><strong>Exemplu:</strong> te concentrezi pe indicațiile profesorului, nu pe zgomote.</span></span>",
      "💡&nbsp;&nbsp;<span class='tip'><strong>interpretarea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dai sens stimulilor (ce înseamnă pentru tine).<br /><br /><strong>Exemplu:</strong> un feedback poate fi văzut ca ajutor, nu ca atac.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Stimuli</strong></div>
    ${window.flashPillList([
      "🌤️&nbsp;&nbsp;<span class='tip'><strong>stimuli externi</strong><span class='tooltip-box'><strong>Spus simplu:</strong> semnale din mediu (lumină, sunete, atingere).<br /><br /><strong>Exemplu:</strong> un claxon sau o lumină puternică.</span></span>",
      "💓&nbsp;&nbsp;<span class='tip'><strong>stimuli interni</strong><span class='tooltip-box'><strong>Spus simplu:</strong> semnale din interior (stare corporală, foame, emoții).<br /><br /><strong>Exemplu:</strong> tensiune în corp sau frică înainte de test.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Procesare și rezultat</strong></div>
    ${window.flashPillList([
      "🧾&nbsp;&nbsp;<span class='tip'><strong>procesarea informației</strong><span class='tooltip-box'><strong>Spus simplu:</strong> recepționezi, prelucrezi și dai sens informației.<br /><br /><strong>Exemplu:</strong> observi cerința, o înțelegi și alegi o strategie.</span></span>",
      "✅&nbsp;&nbsp;<span class='tip'><strong>comportamente adaptative</strong><span class='tooltip-box'><strong>Spus simplu:</strong> reacții potrivite situației, nu simple automatisme.<br /><br /><strong>Exemplu:</strong> schimbi abordarea când vezi că nu funcționează.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front:
            "Cum se împart procesele cognitive și ce proprietăți au sistemele cognitive",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Procesele cognitive</strong> sunt modul prin care cunoști lumea. Ele pot fi <strong>senzoriale primare</strong> (contact direct cu stimulul) și <strong>cognitive secundare</strong> (prelucrări de nivel superior).</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Procese cognitive senzoriale primare</strong></div>
    ${window.flashPillList([
      "👁️&nbsp;&nbsp;<span class='tip'><strong>senzațiile</strong><span class='tooltip-box'><strong>Spus simplu:</strong> semnale simple despre proprietăți (ex.: rece, tare, luminos).<br /><br /><strong>Exemplu:</strong> simți că e cald sau auzi un sunet.</span></span>",
      "🧩&nbsp;&nbsp;<span class='tip'><strong>percepțiile</strong><span class='tooltip-box'><strong>Spus simplu:</strong> organizezi senzațiile în obiecte și evenimente cu sens.<br /><br /><strong>Exemplu:</strong> recunoști „o mașină care vine”, nu doar lumină și zgomot.</span></span>",
      "🖼️&nbsp;&nbsp;<span class='tip'><strong>reprezentările</strong><span class='tooltip-box'><strong>Spus simplu:</strong> imagini mentale păstrate când stimulul nu mai e prezent.<br /><br /><strong>Exemplu:</strong> îți amintești cum arată sala, fără să fii acolo.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Procese cognitive secundare</strong></div>
    ${window.flashPillList([
      "🗂️&nbsp;&nbsp;<span class='tip'><strong>memoria</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stocare și reactualizare de informații.<br /><br /><strong>Exemplu:</strong> îți amintești o definiție la examen.</span></span>",
      "🔎&nbsp;&nbsp;<span class='tip'><strong>gândirea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> lucrezi cu concepte și relații ca să înțelegi/ rezolvi probleme.<br /><br /><strong>Exemplu:</strong> explici de ce o soluție e corectă.</span></span>",
      "✨&nbsp;&nbsp;<span class='tip'><strong>imaginația</strong><span class='tooltip-box'><strong>Spus simplu:</strong> combini și transformi informații pentru scenarii noi.<br /><br /><strong>Exemplu:</strong> găsești o variantă creativă de rezolvare.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Proprietăți ale sistemelor cognitive</strong></div>
    ${window.flashPillList([
      "📈&nbsp;&nbsp;<span class='tip'><strong>reprezentarea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> construiești modele mentale despre obiecte, situații, concepte.<br /><br /><strong>Exemplu:</strong> ai „harta” mentală a unei teme.</span></span>",
      "🧮&nbsp;&nbsp;<span class='tip'><strong>calculul</strong><span class='tooltip-box'><strong>Spus simplu:</strong> operezi cu informația (compari, deduci, decizi).<br /><br /><strong>Exemplu:</strong> alegi strategia potrivită după ce analizezi cerința.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front: "Ce sunt procesele reglatorii și care este rolul lor",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Procesele reglatorii</strong> susțin și orientează funcționarea psihică. Ele dau <strong>energie</strong>, <strong>direcție</strong> și <strong>control</strong> comportamentului.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Componente</strong></div>
    ${window.flashPillList([
      "🔥&nbsp;&nbsp;<span class='tip'><strong>motivația</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce pornește și susține acțiunea (nevoi, scopuri).<br /><br /><strong>Exemplu:</strong> înveți pentru că vrei să obții un rezultat.</span></span>",
      "🌊&nbsp;&nbsp;<span class='tip'><strong>afectivitatea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trăiri care „colorează” experiența (emoții, dispoziții).<br /><br /><strong>Exemplu:</strong> frica poate îngusta atenția, bucuria poate crește implicarea.</span></span>",
      "🧷&nbsp;&nbsp;<span class='tip'><strong>voința</strong><span class='tooltip-box'><strong>Spus simplu:</strong> autocontrol orientat spre scop, cu efort și decizie.<br /><br /><strong>Exemplu:</strong> continui să lucrezi chiar dacă e greu.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Rol</strong></div>
    ${window.flashPillList([
      "⚡&nbsp;&nbsp;<span class='tip'><strong>energizează</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pune „motorul” în mișcare.<br /><br /><strong>Exemplu:</strong> motivația crește efortul susținut.</span></span>",
      "🧭&nbsp;&nbsp;<span class='tip'><strong>orientează</strong><span class='tooltip-box'><strong>Spus simplu:</strong> alege direcția și prioritățile.<br /><br /><strong>Exemplu:</strong> emoțiile semnalează ce contează pentru tine.</span></span>",
      "🎛️&nbsp;&nbsp;<span class='tip'><strong>reglează</strong><span class='tooltip-box'><strong>Spus simplu:</strong> controlează impulsuri și menține comportamentul spre scop.<br /><br /><strong>Exemplu:</strong> voința te ajută să amâni o distragere.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front: "Ce zone cerebrale sunt implicate în procesarea informației",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Unele funcții psihice sunt asociate cu zone cerebrale dominante. Lista de mai jos este <strong>orientativă</strong> și surprinde roluri frecvent prezentate.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Lobi corticali</strong></div>
    ${window.flashPillList([
      "🧭&nbsp;&nbsp;<span class='tip'><strong>lobul frontal</strong><span class='tooltip-box'><strong>Spus simplu:</strong> planificare, decizie, control motor și producerea vorbirii.<br /><br /><strong>Exemplu:</strong> îți planifici pașii și îți controlezi acțiunile.</span></span>",
      "🧩&nbsp;&nbsp;<span class='tip'><strong>lobul parietal</strong><span class='tooltip-box'><strong>Spus simplu:</strong> integrare tactilă și spațială, conștiință corporală.<br /><br /><strong>Exemplu:</strong> știi unde îți este mâna fără să te uiți.</span></span>",
      "🔊&nbsp;&nbsp;<span class='tip'><strong>lobul temporal</strong><span class='tooltip-box'><strong>Spus simplu:</strong> auz și recunoaștere de tipare (inclusiv fețe).<br /><br /><strong>Exemplu:</strong> recunoști o voce sau o față familiară.</span></span>",
      "👁️&nbsp;&nbsp;<span class='tip'><strong>lobul occipital</strong><span class='tooltip-box'><strong>Spus simplu:</strong> procesare vizuală.<br /><br /><strong>Exemplu:</strong> identifici forme și culori.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Structuri subcorticale relevante</strong></div>
    ${window.flashPillList([
      "⚖️&nbsp;&nbsp;<span class='tip'><strong>cerebelul</strong><span class='tooltip-box'><strong>Spus simplu:</strong> coordonare, echilibru și finețe în execuțiile motorii.<br /><br /><strong>Exemplu:</strong> scrii mai precis și îți menții stabilitatea.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front: "Ce este integrarea senzorială și integrarea multisenzorială",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Integrarea</strong> înseamnă că informațiile senzoriale sunt organizate astfel încât să poți acționa eficient.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Integrarea senzorială</strong></div>
    ${window.flashPillList([
      "🧾&nbsp;&nbsp;<span class='tip'><strong>organizarea senzațiilor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> creierul pune în ordine semnalele primite ca să poți funcționa eficient.<br /><br /><strong>Exemplu:</strong> îți reglezi postura după informații tactile și vestibulare.</span></span>",
      "🌍&nbsp;&nbsp;<span class='tip'><strong>stimulare internă/ externă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> combină semnale din corp și din mediu.<br /><br /><strong>Exemplu:</strong> simți foamea (intern) și miroși mâncarea (extern).</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Integrarea multisenzorială</strong></div>
    ${window.flashPillList([
      "🔗&nbsp;&nbsp;<span class='tip'><strong>combinarea mai multor simțuri</strong><span class='tooltip-box'><strong>Spus simplu:</strong> unești informații din canale diferite (vizual, auditiv etc.).<br /><br /><strong>Exemplu:</strong> vezi buzele vorbind și auzi vocea ca fiind „un singur eveniment”.</span></span>",
      "🧩&nbsp;&nbsp;<span class='tip'><strong>reprezentare întregită</strong><span class='tooltip-box'><strong>Spus simplu:</strong> obții o imagine mai completă a lumii, utilă pentru adaptare.<br /><br /><strong>Exemplu:</strong> recunoști mai ușor o persoană când o vezi și o auzi.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Diferența esențială</strong></div>
    ${window.flashPillList([
      "1️⃣&nbsp;&nbsp;<span class='tip'><strong>senzorială</strong><span class='tooltip-box'><strong>Spus simplu:</strong> organizează senzații și răspunsuri senzoriale (poate porni și dintr-un singur canal).</span></span>",
      "2️⃣&nbsp;&nbsp;<span class='tip'><strong>multisenzorială</strong><span class='tooltip-box'><strong>Spus simplu:</strong> leagă în mod explicit informații din <strong>mai multe</strong> simțuri într-o singură percepție.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front: "Care sunt principiile integrării multisenzoriale",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Principiile integrării multisenzoriale</strong> descriu când creierul combină cel mai ușor semnale din simțuri diferite.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Regula spațială</strong></div>
    ${window.flashPillList([
      "📍&nbsp;&nbsp;<span class='tip'><strong>aceeași locație</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimulii se integrează mai bine dacă par să vină din același loc.<br /><br /><strong>Exemplu:</strong> vezi mișcarea gurii și vocea pare să vină din aceeași direcție.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Regula temporală</strong></div>
    ${window.flashPillList([
      "⏱️&nbsp;&nbsp;<span class='tip'><strong>aproape în timp</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimulii se integrează mai ușor dacă apar simultan sau foarte aproape unul de altul.<br /><br /><strong>Exemplu:</strong> vezi o lovitură și auzi sunetul aproape în același moment.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Principiul eficienței inverse</strong></div>
    ${window.flashPillList([
      "📉→📈&nbsp;&nbsp;<span class='tip'><strong>stimulii slabi beneficiază mai mult</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dacă fiecare stimul, separat, e slab, combinația lor poate produce un răspuns mult mai puternic.<br /><br /><strong>Exemplu:</strong> într-un mediu zgomotos, vezi și auzi împreună și înțelegi mai bine.</span></span>",
    ])}
  </div>

</div>`,
        },
      ],
    },
  ],

  "fph-cap5": [
    {
      id: "deck-cap5-esential",
      title: "Curs 5 FLASHCARDS",
      cards: [
        {
          front: "Definește senzația",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Senzațiile</strong> sunt <strong>procese cognitive primare</strong> prin care sunt semnalizate <strong>caracteristici simple</strong> ale stimulilor, ca răspuns la acțiunea lor directă asupra <strong>organelor de simț</strong>.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Ce înseamnă procese cognitive primare</strong></div>
    ${window.flashPillList([
      "1️⃣&nbsp;&nbsp;<span class='tip'><strong>prima treaptă a cunoașterii</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cunoaștere directă, fără prelucrări complexe.<br /><br /><strong>Exemplu:</strong> simți rece/ cald înainte să „interpretezi” situația.</span></span>",
      "🎯&nbsp;&nbsp;<span class='tip'><strong>semnalizează elemente simple</strong><span class='tooltip-box'><strong>Spus simplu:</strong> notează proprietăți de bază ale stimulului.<br /><br /><strong>Exemplu:</strong> intensitate, culoare, temperatură, durată.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Condiția apariției</strong></div>
    ${window.flashPillList([
      "✅&nbsp;&nbsp;<span class='tip'><strong>acțiune directă pe organul de simț</strong><span class='tooltip-box'><strong>Spus simplu:</strong> senzația apare când stimulul acționează efectiv pe receptor.<br /><br /><strong>Exemplu:</strong> lumina pe ochi, sunetul pe ureche, presiunea pe piele.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front: "Care sunt calitățile unei senzații",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>O senzație poate fi descrisă prin câteva <strong>calități</strong> care arată „cum este” trăită.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Calități</strong></div>
    ${window.flashPillList([
      "📏&nbsp;&nbsp;<span class='tip'><strong>intensitatea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât de puternică este senzația.<br /><br /><strong>Exemplu:</strong> lumină slabă vs. orbitoare.</span></span>",
      "🧬&nbsp;&nbsp;<span class='tip'><strong>calitatea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> tipul senzației, dat de analizator (vizual, auditiv etc.).<br /><br /><strong>Exemplu:</strong> sunet vs. culoare vs. miros.</span></span>",
      "⏱️&nbsp;&nbsp;<span class='tip'><strong>durata</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât timp se menține senzația.<br /><br /><strong>Exemplu:</strong> un sunet scurt vs. un țiuit prelung.</span></span>",
      "🎭&nbsp;&nbsp;<span class='tip'><strong>tonalitatea afectivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „culoarea emoțională” plăcut/ neplăcut.<br /><br /><strong>Exemplu:</strong> un parfum plăcut vs. un miros respingător.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front: "Cum se clasifică senzațiile după natura informației",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>După <strong>natura conținutului informațional</strong>, senzațiile se grupează în trei categorii mari.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Senzații din stimulare externă</strong></div>
    ${window.flashPillList([
      "👁️&nbsp;&nbsp;<span class='tip'><strong>vizuale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> produse de lumină.<br /><br /><strong>Exemplu:</strong> vezi culoarea unui semafor.</span></span>",
      "🔊&nbsp;&nbsp;<span class='tip'><strong>auditive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> produse de unde sonore.<br /><br /><strong>Exemplu:</strong> auzi un clopoțel.</span></span>",
      "👅&nbsp;&nbsp;<span class='tip'><strong>gustative</strong><span class='tooltip-box'><strong>Spus simplu:</strong> produse de substanțe chimice din alimente.<br /><br /><strong>Exemplu:</strong> gust dulce/ acru.</span></span>",
      "👃&nbsp;&nbsp;<span class='tip'><strong>olfactive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> produse de particule volatile.<br /><br /><strong>Exemplu:</strong> miros de cafea.</span></span>",
      "✋&nbsp;&nbsp;<span class='tip'><strong>cutanate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> atingere, presiune, temperatură la nivelul pielii.<br /><br /><strong>Exemplu:</strong> simți o suprafață rece.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Senzații din stimulare internă</strong></div>
    ${window.flashPillList([
      "🍽️&nbsp;&nbsp;<span class='tip'><strong>foamea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> semnal intern legat de necesități ale organismului.<br /><br /><strong>Exemplu:</strong> „gol” în stomac.</span></span>",
      "🥤&nbsp;&nbsp;<span class='tip'><strong>setea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> semnal intern de nevoie de apă.<br /><br /><strong>Exemplu:</strong> gură uscată.</span></span>",
      "⚠️&nbsp;&nbsp;<span class='tip'><strong>durerea organică</strong><span class='tooltip-box'><strong>Spus simplu:</strong> semnal intern de disconfort/ afectare.<br /><br /><strong>Exemplu:</strong> durere de stomac.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Senzații despre poziție și mișcare</strong></div>
    ${window.flashPillList([
      "🧍&nbsp;&nbsp;<span class='tip'><strong>proprioceptive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> informare despre postură (trunchi, membre, cap).<br /><br /><strong>Exemplu:</strong> știi că ai brațul ridicat fără să te uiți.</span></span>",
      "🏃&nbsp;&nbsp;<span class='tip'><strong>chinestezice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> informare despre mișcare (direcție, durată, intensitate).<br /><br /><strong>Exemplu:</strong> simți viteza unei mișcări.</span></span>",
      "⚖️&nbsp;&nbsp;<span class='tip'><strong>de echilibru</strong><span class='tooltip-box'><strong>Spus simplu:</strong> poziția corpului în raport cu gravitația.<br /><br /><strong>Exemplu:</strong> simți când te înclini.</span></span>",
    ])}
  </div>

</div>`,
        },
        {
          front:
            "Ce este analizatorul și cum apare interacțiunea între analizatori",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>În psihologia senzorială, <strong>analizatorul</strong> nu înseamnă doar organul de simț, ci un <strong>sistem complet</strong> de prelucrare.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Analizatorul</strong></div>
    ${window.flashPillList([
      "🧩&nbsp;&nbsp;<span class='tip'><strong>sistem funcțional</strong><span class='tooltip-box'><strong>Spus simplu:</strong> receptor + căi nervoase + zonă corticală de prelucrare.<br /><br /><strong>Exemplu:</strong> vederea implică ochiul, nervul optic și ariile vizuale.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Interacțiunea analizatorilor</strong></div>
    ${window.flashPillList([
      "🔗&nbsp;&nbsp;<span class='tip'><strong>influență reciprocă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> senzațiile dintr-un analizator pot modula senzațiile din altul.<br /><br /><strong>Exemplu:</strong> un canal activ poate schimba pragul sau claritatea în alt canal.</span></span>",
      "🔁&nbsp;&nbsp;<span class='tip'><strong>inducția reciprocă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> activarea unui analizator poate produce <strong>inhibiție inițială</strong>, apoi <strong>excitație</strong> în alt analizator.</span></span>",
      "🎨&nbsp;&nbsp;<span class='tip'><strong>sinestezia</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimularea unui analizator produce o senzație specifică altuia.<br /><br /><strong>Exemplu:</strong> „a vedea sunete” sau „culori dulci”.</span></span>",
    ])}
  </div>

</div>`,
        },
        {
          front: "Ce înseamnă legile primare ale sensibilității",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legile primare ale sensibilității</strong> descriu raportul direct <strong>stimul → senzație</strong> în cadrul aceluiași analizator.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Ce au în comun aceste legi</strong></div>
    ${window.flashPillList([
      "🔗&nbsp;&nbsp;<span class='tip'><strong>dependență de proprietățile stimulului</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cum e stimulul (intens, opus altuia, important) schimbă apariția și intensitatea senzației.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legile primare ale sensibilității includ:</strong></div>
    ${window.flashPillList([
      "📏&nbsp;&nbsp;<span class='tip'><strong>legea intensității</strong><span class='tooltip-box'><strong>Spus simplu:</strong> praguri pentru apariție și pentru diferențe sesizabile.</span></span>",
      "🌓&nbsp;&nbsp;<span class='tip'><strong>legea contrastului senzorial</strong><span class='tooltip-box'><strong>Spus simplu:</strong> opozițiile se evidențiază reciproc.</span></span>",
      "⭐&nbsp;&nbsp;<span class='tip'><strong>legea semnificației</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimulii importanți cresc sensibilitatea.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front: "Cum explică legea intensității pragurile",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legea intensității</strong> spune că senzația apare și se modifică doar când stimulul trece peste <strong>anumite praguri</strong>.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Praguri</strong></div>
    ${window.flashPillList([
      "🚪&nbsp;&nbsp;<span class='tip'><strong>prag minimal absolut</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nivelul minim la care un stimul începe să fie perceput.<br /><br /><strong>Exemplu:</strong> o lumină prea slabă nu e sesizată până nu crește suficient.</span></span>",
      "↕️&nbsp;&nbsp;<span class='tip'><strong>prag diferențial</strong><span class='tooltip-box'><strong>Spus simplu:</strong> diferența minimă dintre doi stimuli ca să simți schimbarea.<br /><br /><strong>Exemplu:</strong> două sunete apropiate ca volum pot părea „la fel” până crește diferența.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front: "Ce spun legea contrastului senzorial și legea semnificației",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>În această ordine pentru învățare, două legi explică de ce unele senzații devin mai „clare” prin comparație sau prin importanță personală.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legea contrastului senzorial</strong></div>
    ${window.flashPillList([
      "🌓&nbsp;&nbsp;<span class='tip'><strong>opozițiile se evidențiază</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cald/ rece, luminos/ întunecat se scot reciproc în evidență.<br /><br /><strong>Exemplu:</strong> apa călduță pare mai caldă după ce ai atins ceva rece.</span></span>",
    ])}
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legea semnificației</strong></div>
    ${window.flashPillList([
      "⭐&nbsp;&nbsp;<span class='tip'><strong>importanța crește sensibilitatea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> devii mai sensibil la ce contează pentru tine.<br /><br /><strong>Exemplu:</strong> îți auzi numele într-un zgomot de fond.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front: "Ce înseamnă legile secundare ale sensibilității",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legile secundare ale sensibilității</strong> descriu schimbări ale sensibilității <strong>în timp</strong> și <strong>între analizatori</strong> (interacțiuni).</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Include</strong></div>
    ${window.flashPillList([
      "🔁&nbsp;&nbsp;<span class='tip'><strong>legea adaptării</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sensibilitatea se modifică sub acțiunea repetată/ prelungită a stimulului.<br /><br /><strong>Exemplu:</strong> te obișnuiești cu un miros și îl simți mai puțin.</span></span>",
      "🔗&nbsp;&nbsp;<span class='tip'><strong>legea interacțiunii analizatorilor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> un analizator activ poate influența modul de funcționare al altuia.<br /><br /><strong>Exemplu:</strong> un stimul puternic într-un canal poate schimba sensibilitatea în alt canal.</span></span>",
    ])}
  </div>

</div>`,
        },
      ],
    },
  ],

  "fph-cap5b": [
    {
      id: "deck-cap5b-perceptii",
      title: "Curs 5B FLASHCARDS",
      cards: [
        {
          front: "Explică ce sunt percepțiile",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Percepțiile</strong> sunt <strong>procese cognitive primare</strong> prin care obținem <strong>informații complete</strong> despre stimul, ca <strong>imagine unitară și coerentă</strong>.</div>
    ${window.flashPillList([
      "🧩&nbsp;&nbsp;<span class='tip'><strong>procese cognitive primare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunt procese de bază ale cunoașterii, dar mai elaborate decât senzațiile.<br /><br /><strong>Exemplu:</strong> senzație: „luminos”; percepție: „un bec aprins”.</span></span>",
      "📦&nbsp;&nbsp;<span class='tip'><strong>informații complete</strong><span class='tooltip-box'><strong>Spus simplu:</strong> formă, mărime, orientare și relații spațiale.<br /><br /><strong>Exemplu:</strong> recunoști „o cană” și știi unde e pe masă.</span></span>",
      "🔗&nbsp;&nbsp;<span class='tip'><strong>imagine unitară</strong><span class='tooltip-box'><strong>Spus simplu:</strong> integrează detalii senzoriale într-un singur „întreg” cu sens.<br /><br /><strong>Exemplu:</strong> contur + culoare + distanță → „o mașină care se apropie”.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Identifică legile organizării interne a percepției",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Legile care descriu <strong>organizarea internă</strong> a percepției sunt:</div>
    ${window.flashPillList([
      "🧱&nbsp;&nbsp;<span class='tip'><strong>legea integralității</strong><span class='tooltip-box'><strong>Spus simplu:</strong> percepția apare ca un întreg, nu ca o sumă de elemente izolate.</span></span>",
      "🧭&nbsp;&nbsp;<span class='tip'><strong>legea structuralității perceptive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> însușirile se organizează ierarhic (unele intră mai repede în prim-plan).</span></span>",
      "🎯&nbsp;&nbsp;<span class='tip'><strong>legea selectivității perceptive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> percepția favorizează stimulii relevanți (în funcție de interese și scopuri).</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește legea integralității",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legea integralității</strong> afirmă că <span class='tip'><strong>imaginea perceptivă este unitară</strong><span class='tooltip-box'><strong>Spus simplu:</strong> percepem „întregul” (esențial + detalii + context), nu fragmente separate.<br /><br /><strong>Exemplu:</strong> „o față” (întreg), nu „ochi + nas + gură” ca piese independente.</span></span>.</div>
  </div>
</div>`,
        },

        {
          front: "Definește legea structuralității perceptive",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legea structuralității perceptive</strong> afirmă că <span class='tip'><strong>însușirile stimulului sunt organizate structural</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trăsăturile mai intense și mai informative tind să apară primele în prim-plan.<br /><br /><strong>Exemplu:</strong> într-un afiș, titlul mare „sare în ochi” înaintea detaliilor mici.</span></span>.</div>
  </div>
</div>`,
        },

        {
          front: "Definește legea selectivității perceptive",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legea selectivității perceptive</strong> afirmă că <span class='tip'><strong>stimulii relevanți sunt percepuți cu prioritate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu „reflectăm” tot câmpul la fel; contează interesele, nevoile și scopurile.<br /><br /><strong>Exemplu:</strong> îți „sare în ochi” numele tău într-o listă lungă.</span></span>.</div>
  </div>
</div>`,
        },

        {
          front: "Identifică legile stabilității și direcționării percepției",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Legile care descriu <strong>stabilitatea</strong> și <strong>direcționarea</strong> percepției sunt:</div>
    ${window.flashPillList([
      "🧷&nbsp;&nbsp;<span class='tip'><strong>legea constanței perceptive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> obiectele tind să fie percepute relativ constant (formă, mărime, culoare) în condiții variabile.</span></span>",
      "⭐&nbsp;&nbsp;<span class='tip'><strong>legea semnificației</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimulii importanți pentru individ sunt percepuți cu prioritate.</span></span>",
      "📍&nbsp;&nbsp;<span class='tip'><strong>legea proiectivității imaginii perceptive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trăim percepția ca fiind „acolo, în lume”, la sursa stimulului.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește legea constanței perceptive",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legea constanței perceptive</strong> afirmă că <span class='tip'><strong>forma, mărimea și culoarea sunt percepute relativ constante</strong><span class='tooltip-box'><strong>Spus simplu:</strong> chiar dacă se schimbă perspectiva sau iluminarea, obiectul rămâne „același” pentru tine.<br /><br /><strong>Exemplu:</strong> o ușă pare dreptunghiulară chiar când o vezi dintr-un unghi.</span></span>.</div>
  </div>
</div>`,
        },

        {
          front: "Definește legea semnificației",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legea semnificației</strong> afirmă că <span class='tip'><strong>stimulii semnificativi sunt percepuți cu prioritate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> importanța subiectivă face stimulul mai „vizibil”/ „clar”.<br /><br /><strong>Exemplu:</strong> auzi mai ușor propriul nume într-un mediu zgomotos.</span></span>.</div>
  </div>
</div>`,
        },

        {
          front: "Definește legea proiectivității imaginii perceptive",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Legea proiectivității imaginii perceptive</strong> afirmă că <span class='tip'><strong>percepția este proiectată către sursa stimulului</strong><span class='tooltip-box'><strong>Spus simplu:</strong> imaginea se elaborează cortical, dar este trăită ca fiind în spațiul exterior, „la obiect”.<br /><br /><strong>Exemplu:</strong> vocea e percepută ca venind de la persoană, nu „din capul tău”.</span></span>.</div>
  </div>
</div>`,
        },

        {
          front: "Enumeră formele percepției",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Percepția poate lua forme specifice în funcție de tipul informației:</div>
    ${window.flashPillList([
      "🗺️&nbsp;&nbsp;<span class='tip'><strong>spațiu</strong><span class='tooltip-box'><strong>Spus simplu:</strong> formă, mărime, relief, poziție, distanță.</span></span>",
      "⏳&nbsp;&nbsp;<span class='tip'><strong>timp</strong><span class='tooltip-box'><strong>Spus simplu:</strong> durată și succesiune.</span></span>",
      "🏃&nbsp;&nbsp;<span class='tip'><strong>mișcare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> detectarea deplasării obiectelor.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Descrie percepția proprietăților spațiale",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Percepția spațiului include:</div>
    ${window.flashPillList([
      "🔷&nbsp;&nbsp;<span class='tip'><strong>forma</strong><span class='tooltip-box'><strong>Spus simplu:</strong> configurația obiectului.</span></span>",
      "📏&nbsp;&nbsp;<span class='tip'><strong>mărimea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dimensiunile obiectului.</span></span>",
      "🧊&nbsp;&nbsp;<span class='tip'><strong>relieful</strong><span class='tooltip-box'><strong>Spus simplu:</strong> adâncime și volum.</span></span>",
      "📌&nbsp;&nbsp;<span class='tip'><strong>poziția</strong><span class='tooltip-box'><strong>Spus simplu:</strong> locul obiectului în raport cu reperele.</span></span>",
      "↔️&nbsp;&nbsp;<span class='tip'><strong>distanța</strong><span class='tooltip-box'><strong>Spus simplu:</strong> apropiere/ depărtare față de observator sau repere.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Descrie percepția timpului",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Percepția timpului include:</div>
    ${window.flashPillList([
      "➡️&nbsp;&nbsp;<span class='tip'><strong>succesiunea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ordinea în care apar evenimentele.</span></span>",
      "⏱️&nbsp;&nbsp;<span class='tip'><strong>durata</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cât ține un eveniment.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Explică factorii care influențează percepția mișcării",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Percepția mișcării este influențată de:</div>
    ${window.flashPillList([
      "🧷&nbsp;&nbsp;<span class='tip'><strong>rolul reperelor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> puncte stabile de comparație din câmpul perceptiv.<br /><br /><strong>Exemplu:</strong> pare că trenul de lângă tine se mișcă dacă trenul tău pornește.</span></span>",
      "👁️&nbsp;&nbsp;<span class='tip'><strong>persistența imaginii retiniene</strong><span class='tooltip-box'><strong>Spus simplu:</strong> imaginea rămâne foarte puțin pe retină, ajutând continuitatea mișcării.<br /><br /><strong>Exemplu:</strong> succesiunea rapidă de cadre poate fi trăită ca mișcare.</span></span>",
    ])}
  </div>
</div>`,
        },

        {
          front: "Explică iluziile perceptive",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Iluziile perceptive</strong> sunt <strong>distorsiuni</strong> ale percepției unui stimul real și apar frecvent prin <strong>efecte de câmp</strong> (influența contextului).</div>
    ${window.flashPillList([
      "🪞&nbsp;&nbsp;<span class='tip'><strong>distorsiuni</strong><span class='tooltip-box'><strong>Spus simplu:</strong> stimulul există, dar e perceput „deformat”.</span></span>",
      "🧩&nbsp;&nbsp;<span class='tip'><strong>efecte de câmp</strong><span class='tooltip-box'><strong>Spus simplu:</strong> elementele din jur modifică felul în care percepi stimulul.<br /><br /><strong>Exemplu:</strong> aceeași linie pare mai lungă/ mai scurtă în funcție de context.</span></span>",
    ])}
  </div>
</div>`,
        },
      ],
    },
  ],

  "fph-cap6": [
    {
      id: "deck-cap6-reprezentari",
      title: "Curs 6 FLASHCARDS",
      cards: [
        {
          front:
            "Definește reprezentarea și precizează trăsăturile ei esențiale",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Reprezentarea</strong> este un <span class='tip'><strong>proces cognitiv-senzorial</strong><span class='tooltip-box'><strong>Spus simplu:</strong> păstrează și reconstruiește mental informații obținute anterior prin percepție.<br /><br /><strong>Exemplu:</strong> îți apare în minte chipul unei persoane pe care nu o vezi acum.</span></span> prin care sunt semnalizate <span class='tip'><strong>caracteristici concrete</strong><span class='tooltip-box'><strong>Exemple:</strong> formă, culoare, dimensiune, contur.</span></span> și <span class='tip'><strong>caracteristici reprezentative</strong><span class='tooltip-box'><strong>Spus simplu:</strong> trăsături esențiale, stabile, care te ajută să recunoști obiectul.<br /><br /><strong>Exemplu:</strong> la „cheie” rămâne forma generală și partea cu „dinți”, nu fiecare zgârietură.</span></span> ale stimulilor, sub forma unor <span class='tip'><strong>imagini secundare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> imagini mintale care apar când stimulul nu mai este prezent.</span></span>, <span class='tip'><strong>unitare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> apar ca un „întreg”, nu ca fragmente separate.</span></span>, dar <span class='tip'><strong>schematice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> simplificate; păstrează esențialul, nu toate detaliile.</span></span>, în <span class='tip'><strong>absența acțiunii nemijlocite</strong><span class='tooltip-box'><strong>Spus simplu:</strong> obiectul nu mai acționează direct asupra organelor de simț.</span></span> a stimulilor asupra <span class='tip'><strong>analizatorilor</strong><span class='tooltip-box'><strong>Spus simplu:</strong> receptor + căi nervoase + zone corticale specializate.</span></span>.</div>
  </div>

</div>`,
        },

        {
          front:
            "Explică faptul că reprezentările depășesc percepția imediată prin transpunere spațio-temporală",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Reprezentările sunt <span class='tip'><strong>reconstrucții mintale reprezentative</strong><span class='tooltip-box'><strong>Spus simplu:</strong> refaci mental un obiect sau o situație percepută anterior.<br /><br /><strong>Exemplu:</strong> îți refaci mental traseul parcurs ieri.</span></span> ale stimulilor, cu <span class='tip'><strong>transpunerea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> poți „muta” mental ceea ce reprezinți în alt loc sau alt timp decât cel al percepției.<br /><br /><strong>Exemplu:</strong> îți imaginezi drumul de mâine, deși ești acum acasă.</span></span> acestora în <span class='tip'><strong>contexte spațio-temporale diferite</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nu rămân „lipite” de aici și acum.<br /><br /><strong>Exemplu:</strong> proiectezi cum ar arăta camera după rearanjare, fără să o fi rearanjat încă.</span></span> de cele ale percepției.</div>
  </div>

</div>`,
        },

        {
          front:
            "Descrie rolul limbajului în organizarea și transformarea reprezentărilor",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Limbajul</strong> este <span class='tip'><strong>instrument reglator și integrator</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cuvintele pot ordona și lega între ele ceea ce îți imaginezi, astfel încât imaginea să devină „utilă” pentru gândire.<br /><br /><strong>Exemplu:</strong> îți spui mental „întâi…, apoi…” și imaginea acțiunii se structurează.</span></span> al reprezentărilor. Cuvântul realizează <span class='tip'><strong>descrierea</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pui în cuvinte ceea ce reprezinti.<br /><br /><strong>Exemplu:</strong> „ușa e în stânga, fereastra în dreapta”.</span></span>, <span class='tip'><strong>dirijarea organizării</strong><span class='tooltip-box'><strong>Spus simplu:</strong> selectezi și ordonezi elementele imaginii.<br /><br /><strong>Exemplu:</strong> „mă uit întâi la intrare, apoi la traseu”.</span></span> și <span class='tip'><strong>transformării</strong><span class='tooltip-box'><strong>Spus simplu:</strong> modifici mental imaginea (dimensiune, poziție, succesiune).<br /><br /><strong>Exemplu:</strong> „mut mental masa lângă perete”.</span></span> imaginii secundare, precum și <span class='tip'><strong>integrarea acesteia în procesul gândirii</strong><span class='tooltip-box'><strong>Spus simplu:</strong> imaginea devine „material” pentru explicații, planificare și decizii.<br /><br /><strong>Exemplu:</strong> formulezi „dacă mut asta aici, rămâne loc” și restructurezi mental scena.</span></span>.</div>
  </div>

</div>`,
        },

        {
          front: "Enumeră modalitățile de prezentare ale reprezentărilor",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Reprezentările pot apărea ca <span class='tip'><strong>modalități de prezentare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> forme tipice în care „se arată” o reprezentare în minte.<br /><br /><strong>Exemplu:</strong> uneori ai o imagine simplificată, alteori un tablou de ansamblu.</span></span>.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Modalități menționate</strong></div>
    ${window.flashPillList([
      "🖼️&nbsp;&nbsp;<span class='tip'><strong>imagini secundare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> imagini mintale după percepție, în absența stimulului.<br /><br /><strong>Exemplu:</strong> îți apare mental forma unui copac văzut ieri.</span></span>",
      "🧾&nbsp;&nbsp;<span class='tip'><strong>simboluri figurative (scheme)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> schițe figurative ale însușirilor, într-o structură simplificată.<br /><br /><strong>Exemplu:</strong> îți „desenezi” mental conturul unei biciclete.</span></span>",
      "🧷&nbsp;&nbsp;<span class='tip'><strong>imagini schematizate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> rămâne esențialul, dispar detaliile nerelevante.<br /><br /><strong>Exemplu:</strong> reții „geacă roșie”, nu toate cusăturile.</span></span>",
      "🗺️&nbsp;&nbsp;<span class='tip'><strong>imagini panoramice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> tablou de ansamblu cu informația relevantă.<br /><br /><strong>Exemplu:</strong> îți apare dintr-o dată schema generală a unei săli.</span></span>",
      "📌&nbsp;&nbsp;<span class='tip'><strong>imagini ale stimulilor detașați de câmpul perceptiv</strong><span class='tooltip-box'><strong>Spus simplu:</strong> imaginea funcționează fără stimulul prezent în câmpul perceptiv.<br /><br /><strong>Exemplu:</strong> îți reprezinți drumul spre casă fără să fii pe traseu.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front:
            "Explică reperele după care se descriu tipurile de reprezentări",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Tipurile de reprezentări pot fi descrise după două repere. Un reper este <span class='tip'><strong>analizatorul implicat</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ce canal domină imaginea mentală (vizual, auditiv, chinestezic).<br /><br /><strong>Exemplu:</strong> îți „vezi” în minte un obiect sau îți „auzi” mental o melodie.</span></span>, iar celălalt reper este <span class='tip'><strong>nivelul operațiilor implicate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dacă imaginea reface ceva perceput sau anticipează ceva neperceput încă (Piaget).<br /><br /><strong>Exemplu:</strong> îți reamintești traseul de ieri vs. îți imaginezi un traseu nou.</span></span>.</div>
  </div>

</div>`,
        },

        {
          front:
            "Reprezentările pot fi explicate în funcție de analizatorul implicat sau după nivelul operațiilor implicate. Definește tipurile de reprezentări după analizatorul implicat",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>După <span class='tip'><strong>analizatorul implicat cu precădere</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sistemul senzorial dominant care „conduce” imaginea mentală.</span></span>, se evidențiază trei tipuri importante de reprezentări.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Tipuri principale</strong></div>
    ${window.flashPillList([
      "🖼️&nbsp;&nbsp;<span class='tip'><strong>reprezentări vizuale</strong><span class='tooltip-box'><strong>Spus simplu:</strong> forme, culori, contururi, relații spațiale.<br /><br /><strong>Exemplu:</strong> îți „vezi” mental camera ta.</span></span>",
      "🔊&nbsp;&nbsp;<span class='tip'><strong>reprezentări auditive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> sunete, ritmuri, cum sună cuvintele.<br /><br /><strong>Exemplu:</strong> îți „auzi” în minte refrenul unei melodii.</span></span>",
      "🏃&nbsp;&nbsp;<span class='tip'><strong>reprezentări chinestezice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> senzația mișcării sau a execuției unei acțiuni.<br /><br /><strong>Exemplu:</strong> îți imaginezi cum scrii și ai senzația gestului.</span></span>",
    ])}
  </div>

</div>`,
        },

        {
          front:
            "Explică ce înseamnă că reprezentările vizuale sunt adesea dominante și oferă un exemplu",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>Faptul că reprezentările <strong>vizuale</strong> sunt adesea <span class='tip'><strong>dominante</strong><span class='tooltip-box'><strong>Spus simplu:</strong> pentru mulți oameni, imaginile mentale apar mai frecvent și sunt mai ușor de accesat decât cele din alte canale.</span></span> înseamnă că, atunci când îți amintești sau îți imaginezi ceva, apare mai întâi „imaginea” (forma/scenele), și abia apoi pot veni sunetele sau senzațiile de mișcare.<br /><br /><strong>Exemplu:</strong> când îți amintești o persoană, îți apare mai întâi chipul, apoi (eventual) vocea.</div>
  </div>

</div>`,
        },

        {
          front:
            "Reprezentările pot fi explicate după nivelul operațiilor implicate. Definește tipurile la Piaget și formele reprezentărilor reproductive",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div>După <span class='tip'><strong>nivelul operațiilor implicate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dacă reprezentarea reface trecutul sau construiește/anticipează ceva nou.</span></span>, la <span class='tip'><strong>Piaget</strong><span class='tooltip-box'><strong>Spus simplu:</strong> autor care distinge reprezentările după raportul lor cu experiența trecută și cu situațiile noi.</span></span> se disting <span class='tip'><strong>reprezentări reproductive</strong><span class='tooltip-box'><strong>Spus simplu:</strong> refac ceea ce a fost perceput anterior.</span></span> și <span class='tip'><strong>reprezentări anticipative</strong><span class='tooltip-box'><strong>Spus simplu:</strong> construiesc modele despre ceva neperceput încă, generate prin imaginație și gândire.<br /><br /><strong>Exemplu:</strong> îți imaginezi cum va decurge o prezentare mâine.</span></span>.</div>
  </div>

  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Forme ale reprezentărilor reproductive</strong></div>
    ${window.flashPillList([
      "🧱&nbsp;&nbsp;<span class='tip'><strong>statice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> redau obiectul în repaus.<br /><br /><strong>Exemplu:</strong> imaginea unui copac.</span></span>",
      "🏃&nbsp;&nbsp;<span class='tip'><strong>cinetice</strong><span class='tooltip-box'><strong>Spus simplu:</strong> redau mișcarea sau derularea acțiunii.<br /><br /><strong>Exemplu:</strong> îți amintești cum a aruncat cineva mingea.</span></span>",
      "🔁&nbsp;&nbsp;<span class='tip'><strong>de transformare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> redau schimbarea progresivă a obiectului.<br /><br /><strong>Exemplu:</strong> îți imaginezi gheața topindu-se.</span></span>",
    ])}
  </div>

</div>`,
        },
      ],
    },
  ],

  "fph-cap7": [
    {
      id: "deck-cap7-memoria",
      title: "Curs 7 FLASHCARDS",
      cards: [
        {
          front:
            "Memoria folosește experiența trecută pentru prezent și viitor. Definește memoria și etapele funcționării ei",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Memoria</strong> este un proces psihic de stocare și destocare a informației, prin care experiența cognitivă anterioară este utilizată în activitatea curentă.</div>
  </div>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Etapele funcționării</strong> descriu drumul informației în memorie.</div>
    ${window.flashPillList([
      "📝&nbsp;&nbsp;<span class='tip'><strong>întipărire</strong><span class='tooltip-box'><strong>Spus simplu:</strong> înregistrarea inițială a informației.<br /><br /><strong>Exemplu:</strong> ții minte prima dată când auzi un nume.</span></span>",
      "🧩&nbsp;&nbsp;<span class='tip'><strong>păstrare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> menținerea în timp a informației.<br /><br /><strong>Exemplu:</strong> păstrezi regula pentru un test.</span></span>",
      "🔁&nbsp;&nbsp;<span class='tip'><strong>reactualizare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> aduci în conștiință ce ai păstrat.<br /><br /><strong>Exemplu:</strong> îți amintești răspunsul când ești întrebat.</span></span>",
    ])}
  </div>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Forme de reactivare</strong> prin care revine informația în conștiință.</div>
    ${window.flashPillList([
      "✅&nbsp;&nbsp;<span class='tip'><strong>recunoaștere</strong><span class='tooltip-box'><strong>Spus simplu:</strong> identifici informația când apare din nou.<br /><br /><strong>Exemplu:</strong> recunoști o față.</span></span>",
      "🗣️&nbsp;&nbsp;<span class='tip'><strong>reproducere</strong><span class='tooltip-box'><strong>Spus simplu:</strong> evocare fără suport extern.<br /><br /><strong>Exemplu:</strong> spui din memorie o definiție.</span></span>",
    ])}
  </div>
</div>`,
        },
        {
          front:
            "Memoria funcționează prin sisteme diferite ca durată și rol. Definește sistemele mnezice și rolul lor general",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Sistemele mnezice</strong> sunt forme de stocare care păstrează informația pe durate diferite și în scopuri diferite.</div>
  </div>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    ${window.flashPillList([
      "⚡&nbsp;&nbsp;<span class='tip'><strong>memoria senzorială</strong><span class='tooltip-box'><strong>Spus simplu:</strong> urme brute pentru fracțiuni de secundă.<br /><br /><strong>Exemplu:</strong> persistența imaginii după o lumină.</span></span>",
      "⏳&nbsp;&nbsp;<span class='tip'><strong>memoria de scurtă durată (MSD)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> MSD = memorie de scurtă durată, păstrează activ informația „acum”.<br /><br /><strong>Exemplu:</strong> ții minte un număr până îl notezi.</span></span>",
      "📦&nbsp;&nbsp;<span class='tip'><strong>memoria de lungă durată (MLD)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> MLD = memorie de lungă durată, depozit pe termen lung.<br /><br /><strong>Exemplu:</strong> știi tabla înmulțirii.</span></span>",
    ])}
  </div>
</div>`,
        },
        {
          front:
            "Procesarea începe cu un stocaj extrem de scurt. Definește memoria senzorială",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Memoria senzorială</strong> păstrează pentru foarte puțin timp urmele brute ale stimulilor, înainte de prelucrarea conștientă.</div>
  </div>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    ${window.flashPillList([
      "⏱️&nbsp;&nbsp;<span class='tip'><strong>durată foarte scurtă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> zecimi de secundă; dispare rapid dacă nu este prelucrată.</span></span>",
      "🔍&nbsp;&nbsp;<span class='tip'><strong>activează detectorii de trăsături</strong><span class='tooltip-box'><strong>Spus simplu:</strong> identifică elemente simple (forme, sunete, linii).</span></span>",
      "🧪&nbsp;&nbsp;<span class='tip'><strong>nu cere atenție voluntară</strong><span class='tooltip-box'><strong>Spus simplu:</strong> apare automat înainte de selecție.</span></span>",
    ])}
  </div>
</div>`,
        },
        {
          front:
            "Pentru sarcini imediate folosim memoria de scurtă durată. Definește memoria de scurtă durată și rolul ei",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><span class='tip'><strong>Memoria de scurtă durată (MSD)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> MSD = memorie de scurtă durată.</span></span> menține activ informația „aici și acum” și permite manipularea ei pentru rezolvarea sarcinii curente.</div>
  </div>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    ${window.flashPillList([
      "📦&nbsp;&nbsp;<span class='tip'><strong>capacitate limitată</strong><span class='tooltip-box'><strong>Spus simplu:</strong> aproximativ 7 ± 2 elemente simultan.</span></span>",
      "⏱️&nbsp;&nbsp;<span class='tip'><strong>durată scurtă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> 15–20 secunde fără repetiție.</span></span>",
      "🧩&nbsp;&nbsp;<span class='tip'><strong>grupare în unități (chunking)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> organizezi elementele în „pachete” ca să reții mai mult.<br /><br /><strong>Exemplu:</strong> 2‑0‑2‑5 devine „2025”.</span></span>",
    ])}
  </div>
</div>`,
        },
        {
          front:
            "Informațiile stabile sunt păstrate pe termen lung. Definește memoria de lungă durată și rolul ei",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><span class='tip'><strong>Memoria de lungă durată (MLD)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> MLD = memorie de lungă durată.</span></span> este totalitatea cunoștințelor și experiențelor, cu capacitate teoretic nelimitată.</div>
  </div>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Rol:</strong> sprijină memoria de scurtă durată prin <span class='tip'><strong>activare selectivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> aduce la suprafață informația relevantă pentru sarcina curentă.<br /><br /><strong>Exemplu:</strong> îți amintești o regulă exact când o aplici.</span></span>.</div>
  </div>
</div>`,
        },
        {
          front:
            "Memoria poate fi conștientă sau automată. Definește memoria explicită și memoria implicită",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Memoria explicită</strong> este conștientă și verbalizabilă, iar <strong>memoria implicită</strong> se exprimă prin performanță automată.</div>
  </div>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    ${window.flashPillList([
      "🗂️&nbsp;&nbsp;<span class='tip'><strong>memoria explicită (declarativă)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> o poți povesti și verbaliza.<br /><br /><strong>Formulare academică:</strong> vizează conținut conceptual (fapte și cunoștințe).<br /><br /><strong>Exemplu:</strong> spui definiția unui concept.</span></span>",
      "⚙️&nbsp;&nbsp;<span class='tip'><strong>memoria implicită (procedurală)</strong><span class='tooltip-box'><strong>Spus simplu:</strong> se vede în ceea ce faci automat.<br /><br /><strong>Formulare academică:</strong> se exprimă prin performanță, fără verbalizare conștientă.<br /><br /><strong>Exemplu:</strong> mersul pe bicicletă.</span></span>",
    ])}
  </div>
</div>`,
        },
        {
          front:
            "Memoria de lungă durată are componente diferite. Definește memoria episodică și memoria semantică",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Memoria episodică</strong> păstrează evenimente trăite personal, iar <strong>memoria semantică</strong> păstrează cunoștințe generale despre lume.</div>
  </div>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    ${window.flashPillList([
      "📖&nbsp;&nbsp;<span class='tip'><strong>memoria episodică</strong><span class='tooltip-box'><strong>Spus simplu:</strong> evenimente trăite personal.<br /><br /><strong>Formulare academică:</strong> memorie autobiografică, susține identitatea de sine.<br /><br /><strong>Exemplu:</strong> îți amintești prima zi de școală.</span></span>",
      "📚&nbsp;&nbsp;<span class='tip'><strong>memoria semantică</strong><span class='tooltip-box'><strong>Spus simplu:</strong> fapte și cunoștințe generale.<br /><br /><strong>Formulare academică:</strong> informații factuale și conceptuale despre lume.<br /><br /><strong>Exemplu:</strong> știi capitala unei țări.</span></span>",
    ])}
  </div>
</div>`,
        },
        {
          front:
            "Memorarea se îmbunătățește prin reguli aplicabile în învățare. Definește principiile de optimizare a memoriei",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Memorarea eficientă</strong> crește când informația este organizată, înțeleasă și repetată controlat.</div>
  </div>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    ${window.flashPillList([
      "🙌&nbsp;&nbsp;<span class='tip'><strong>sens</strong><span class='tooltip-box'><strong>Spus simplu:</strong> înțelegi ce memorezi, nu doar repeți.<br /><br /><strong>Exemplu:</strong> legi ideile între ele.</span></span>",
      "🧩&nbsp;&nbsp;<span class='tip'><strong>concret</strong><span class='tooltip-box'><strong>Spus simplu:</strong> exemplele și imaginile fixează mai bine.<br /><br /><strong>Exemplu:</strong> asociezi un concept cu o situație reală.</span></span>",
      "🔁&nbsp;&nbsp;<span class='tip'><strong>repetiție</strong><span class='tooltip-box'><strong>Spus simplu:</strong> revii periodic asupra materialului.</span></span>",
      "🎯&nbsp;&nbsp;<span class='tip'><strong>semnificație personală</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ceea ce te interesează se fixează mai ușor.</span></span>",
    ])}
  </div>
  <div class='flash-block' style="${window.FLASH_BLOCK_STYLE}">
    <div><strong>Condiții de profunzime</strong> care fac învățarea stabilă.</div>
    ${window.flashPillList([
      "📌&nbsp;&nbsp;<span class='tip'><strong>intenționalitate</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți propui să înveți.</span></span>",
      "💡&nbsp;&nbsp;<span class='tip'><strong>prelucrare de profunzime</strong><span class='tooltip-box'><strong>Spus simplu:</strong> cauți sensul, nu doar forma.</span></span>",
      "⚖️&nbsp;&nbsp;<span class='tip'><strong>optimum motivațional</strong><span class='tooltip-box'><strong>Spus simplu:</strong> nici stres prea mare, nici apatie.</span></span>",
    ])}
  </div>
</div>`,
        },
      ],
    },
  ],
  "fph-cap8": [
    {
      id: "deck-cap8-gandirea",
      title: "Curs 8 FLASHCARDS – Gândirea",
      cards: [
        {
          front:
            "Definește gândirea și explică modul în care este mediată prin limbaj și prin interacțiunea persoană mediu",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">⚡&nbsp;&nbsp;Dintr-o privire</div>
    <div style="display:grid;gap:8px;">
      <div><strong>Gândirea</strong> = prelucrare conceptuală care extrage esențialul, clasifică și construiește relații</div>
      <div style="display:grid;gap:6px;">
        <div><strong>Mediere</strong> = limbaj + interacțiune persoană–mediu</div>
      </div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">📘&nbsp;&nbsp;Definiție + rezultate</div>
    <div style="margin-bottom:10px;">
      <strong>Gândirea</strong> este un <span class='tip'><strong>proces psihic superior</strong><span class='tooltip-box'><strong>Spus simplu:</strong> proces mental complex care depășește percepția directă și construiește sensuri.<br/><br/><strong>Formulare de examen:</strong> formă de prelucrare conceptuală ce transformă informația prin selecție, organizare și restructurare.</span></span> de <span class='tip'><strong>prelucrare informațională</strong><span class='tooltip-box'><strong>Spus simplu:</strong> transformarea informației prin selectare, comparare, organizare și restructurare pentru a obține sens.</span></span>
    </div>

    ${window.flashPillList([
      {
        text: "🔎&nbsp;&nbsp;<span class='tip'><strong>extrage proprietăți esențiale</strong><span class='tooltip-box'><strong>Formulare de examen:</strong> identifică trăsături definitorii și relativ stabile ale obiectelor și fenomenelor.<br/><br/><strong>Exemplu:</strong> la „triunghi” contează trei laturi, nu culoarea desenului.</span></span>",
        key: "teal",
      },
      {
        text: "🗂️&nbsp;&nbsp;<span class='tip'><strong>organizează clase de obiecte</strong><span class='tooltip-box'><strong>Formulare de examen:</strong> grupează obiecte în categorii pe baza trăsăturilor esențiale, făcând posibilă clasificarea și economia cognitivă.<br/><br/><strong>Exemplu:</strong> „mamifer”, „instrument muzical”, „emoție”.</span></span>",
        key: "pink",
      },
      {
        text: "🔗&nbsp;&nbsp;<span class='tip'><strong>construiește relații categoriale</strong><span class='tooltip-box'><strong>Formulare de examen:</strong> stabilește legături logice între concepte, utile în explicație și rezolvarea rațională a problemelor.<br/><br/><strong>Exemple:</strong> cauză–efect, parte–întreg, condiție–rezultat.</span></span>",
        key: "violet",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧭&nbsp;&nbsp;Medierea gândirii</div>
    ${window.flashPillList([
      {
        text: "🗣️&nbsp;&nbsp;<span class='tip'><strong>mediere verbală</strong><span class='tooltip-box'><strong>Formulare de examen:</strong> limbajul oferă etichete și structuri pentru concepte, permite formularea judecăților și a raționamentelor și susține operarea cu reguli (de exemplu, structuri de tip „toți…”, „dacă…, atunci…”).<br/><br/><strong>Exemplu:</strong> transformi o situație într-o regulă: „dacă lipsesc date, atunci caut condițiile”.</span></span>",
        key: "cyan",
      },
      {
        text: "🌍&nbsp;&nbsp;<span class='tip'><strong>interacțiunea persoană–mediu</strong><span class='tooltip-box'><strong>Formulare de examen:</strong> gândirea se activează în sarcini, probleme și situații concrete, unde apar scopuri, obstacole și feedback care cer analiză, alegerea strategiilor și verificarea soluțiilor.<br/><br/><strong>Exemplu:</strong> o sarcină de evaluare declanșează planificarea pașilor și controlul rezultatului.</span></span>",
        key: "indigo",
      },
    ])}
  </div>
</div>`,
        },

        {
          front: "Definește operațiile gândirii",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">⚡&nbsp;&nbsp;Dintr-o privire</div>
    <div style="display:grid;gap:8px;">
      <div><strong>Analiza și sinteza sunt considerate operații de bază ale gândirii</strong></div>
      <div><strong>Operații derivate</strong> = rafinează prelucrarea conceptuală (compari, abstractizezi, generalizezi, concretizezi, particularizezi)</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧱&nbsp;&nbsp;Operații</div>
    ${window.flashPillList([
      {
        text: "🔍&nbsp;&nbsp;<span class='tip'><strong>analiza</strong><span class='tooltip-box'><strong>Definiție:</strong> descompune mental o unitate (obiect, fenomen, idee, problemă) pentru a identifica structura și relațiile interne dintre componente.<br/><br/><strong>Aplicare:</strong> separi datele esențiale de cele secundare înainte de soluționare.<br/><br/><strong>Exemplu:</strong> într-o problemă, delimitezi cerința, condițiile și resursele disponibile.</span></span>",
        key: "teal",
      },
      {
        text: "🧩&nbsp;&nbsp;<span class='tip'><strong>sinteza</strong><span class='tooltip-box'><strong>Definiție:</strong> reunește sau reorganizează elementele analizate într-o structură coerentă (schemă), construind întregul explicativ.<br/><br/><strong>Aplicare:</strong> formulezi explicația sau planul de acțiune pe baza relațiilor dintre elemente.<br/><br/><strong>Exemplu:</strong> după ce identifici factorii, construiești soluția și justificarea ei.</span></span>",
        key: "pink",
      },
      {
        text: "⚖️&nbsp;&nbsp;<span class='tip'><strong>comparația</strong><span class='tooltip-box'><strong>Definiție:</strong> stabilește asemănări și deosebiri între unități <strong>pe baza unui criteriu</strong>.<br/><br/><strong>Exemplu:</strong> compari motivația intrinsecă și extrinsecă după sursa susținerii.</span></span>",
        key: "cyan",
      },
      {
        text: "🧪&nbsp;&nbsp;<span class='tip'><strong>abstractizarea</strong><span class='tooltip-box'><strong>Definiție:</strong> formă superioară de analiză care extrage trăsăturile definitorii și ignoră detaliile accidentale.<br/><br/><strong>Exemplu:</strong> la „judecată”, reții structura logică, nu formularea exactă.</span></span>",
        key: "indigo",
      },
      {
        text: "🌐&nbsp;&nbsp;<span class='tip'><strong>generalizarea</strong><span class='tooltip-box'><strong>Definiție:</strong> trece de la individual la general, reunind trăsături abstractizate într-un model reprezentativ al clasei.<br/><br/><strong>Exemplu:</strong> din mai multe cazuri, formulezi o regulă generală probabilă.</span></span>",
        key: "emerald",
      },
      {
        text: "🧷&nbsp;&nbsp;<span class='tip'><strong>concretizarea</strong><span class='tooltip-box'><strong>Definiție:</strong> trece de la abstract la concret, explicând un concept general printr-un caz particular clar.<br/><br/><strong>Exemplu:</strong> explici „optimum motivațional” printr-o situație de examen.</span></span>",
        key: "amber",
      },
      {
        text: "🎯&nbsp;&nbsp;<span class='tip'><strong>particularizarea</strong><span class='tooltip-box'><strong>Definiție:</strong> trece de la general la particular, aplicând o categorie generală unui caz individual care îndeplinește criteriile ei.<br/><br/><strong>Exemplu:</strong> identifici un enunț ca judecată atributivă pe baza definiției.</span></span>",
        key: "coral",
      },
    ])}
  </div>
</div>`,
        },

        {
          front:
            "Descrie produsele gândirii și explică pe scurt conceptele, judecățile și raționamentele",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">⚡&nbsp;&nbsp;Dintr-o privire</div>
    <div style="display:grid;gap:6px;">
      <div><strong>Produsele gândirii</strong> = rezultate ale activității de gândire</div>
      <div><strong>Triada</strong> = concepte, judecăți, raționamente</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">📦&nbsp;&nbsp;Produsele gândirii</div>

    ${window.flashPillList([
      {
        text: "🧱&nbsp;&nbsp;<span class='tip'><strong>concepte</strong><span class='tooltip-box'><strong>Spus simplu:</strong> unități de bază care surprind esența unei clase de obiecte sau fenomene și permit clasificarea.<br/><br/><strong>Exemplu:</strong> conceptul „mamifer” grupează cazuri diferite pe baza unor trăsături esențiale.</span></span>",
        key: "teal",
      },
      {
        text: "🧾&nbsp;&nbsp;<span class='tip'><strong>judecăți</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> forme logice fundamentale care relaționează conceptele între ele.<br/><br/><strong>Spus simplu:</strong> afirmi o relație între concepte, de tipul cum este sau ce face.</span></span>",
        key: "violet",
      },
      {
        text: "🔗&nbsp;&nbsp;<span class='tip'><strong>raționamente</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> forme logice fundamentale care constau într o înlănțuire de judecăți.<br/><br/><strong>Spus simplu:</strong> legi mai multe judecăți astfel încît să ajungi la o concluzie.</span></span>",
        key: "amber",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧾&nbsp;&nbsp;Judecăți</div>

    <div class="pill-header">
       <span class="tip"><strong>Ce evidențiază</strong><span class='tooltip-box'>
      <strong>Formulare din lecție:</strong> evidențiază „raporturi între obiecte diferite sau auto-raportările aceluiași obiect”.<br/><br/>
      <strong>Spus simplu:</strong> fie legi două obiecte diferite între ele, fie spui ceva despre același obiect raportat la el însuși, adică îi atribui o proprietate sau o acțiune.<br/><br/>
      <strong>Exemplu raport între obiecte diferite:</strong> „Cartea este pe masă” sau „A este mai mare decît B”.<br/><br/>
      <strong>Exemplu auto-raportare:</strong> „Cartea este groasă” sau „Copilul aleargă”. 
    </span></span>
    </div>

    ${window.flashPillList([
      {
        text: "🔵&nbsp;&nbsp;<span class='tip'><strong>judecată atributivă</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> cum este.<br/><br/><strong>Spus simplu:</strong> atribui o proprietate.<br/><br/><strong>Exemplu:</strong> „X este coerent”.</span></span>",
        key: "cyan",
      },
      {
        text: "🟣&nbsp;&nbsp;<span class='tip'><strong>judecată predicativă</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> ce face.<br/><br/><strong>Spus simplu:</strong> atribui o acțiune sau un proces.<br/><br/><strong>Exemplu:</strong> „X produce efecte”.</span></span>",
        key: "pink",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🔗&nbsp;&nbsp;Raționamente</div>

    <div style="margin-bottom:10px;">
      <span class='tip'><strong>Definiție</strong><span class='tooltip-box'>
        <strong>Raționamentul</strong> reprezintă o formă logică fundamentală a gândirii, constând într-o înlănțuire organizată de judecăți, în cadrul căreia, pe baza unor <strong>premise</strong>, printr-o <strong>operație de inferență</strong>, se obține o <strong>concluzie</strong>.<br /><br />
În funcție de direcția și modul de derivare a concluziei, raționamentele pot fi <strong>deductive</strong>, când se pornește de la enunțuri generale pentru a ajunge la cazuri particulare, <strong>inductive</strong>, când se generalizează pe baza unor cazuri particulare, sau <strong>ipotetico-deductive</strong>, când concluzia rezultă din testarea unor ipoteze formulate condițional (formulate condițional, în structuri de tipul „dacă X este adevărat, atunci rezultă Y”, în care validitatea concluziei depinde de acceptarea ipotezei inițiale).
      </span></span>
    </div>

    <div class="pill-header"><strong>Structură</strong></div>
    ${window.flashPillList([
      {
        text: "🧾&nbsp;&nbsp;<span class='tip'><strong>premise</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> judecăți din care se derivă, argumente.<br/><br/><strong>Spus simplu:</strong> judecățile de plecare.</span></span>",
        key: "cyan",
      },
      {
        text: "✅&nbsp;&nbsp;<span class='tip'><strong>concluzie</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> judecată derivată.<br/><br/><strong>Spus simplu:</strong> judecata la care ajungi.</span></span>",
        key: "emerald",
      },
      {
        text: "🔁&nbsp;&nbsp;<span class='tip'><strong>inferență</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> operația logică de derivare.<br/><br/><strong>Spus simplu:</strong> pasul logic prin care obții concluzia din premise.</span></span>",
        key: "indigo",
      },
    ])}

    <div class="pill-header" style="margin-top:12px;"><strong>Tipuri de reționamente</strong></div>
    ${window.flashPillList([
      {
        text: "⬇️&nbsp;&nbsp;<span class='tip'><strong>deductive</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> pornesc de la general și ajung la un nivel mai scăzut de generalitate, către particular, aplicarea regulii la caz concret.<br/><br/><strong>Spus simplu:</strong> aplici o regulă generală la un caz.</span></span>",
        key: "teal",
      },
      {
        text: "🧩&nbsp;&nbsp;<span class='tip'><strong>ipotetico-deductive</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> de tipul dacă, atunci.<br/><br/><strong>Spus simplu:</strong> testezi o ipoteză în forma dacă se întîmplă X, atunci rezultă Y.</span></span>",
        key: "violet",
      },
      {
        text: "⬆️&nbsp;&nbsp;<span class='tip'><strong>inductive</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> pornesc de la premise particulare și ajung la o concluzie generală, extragerea unor principii generale de funcționare.<br/><br/><strong>Spus simplu:</strong> generalizezi din exemple.</span></span>",
        key: "amber",
      },
    ])}
  </div>

</div>`,
        },
        {
          front:
            "Definește activitatea gândirii și descrie două forme aplicative (conceptualizarea și înțelegerea)",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">⚡&nbsp;&nbsp;Dintr-o privire</div>
    <div style="display:grid;gap:6px;">
   <div>
   
  <span class='tip'>
    <strong>Activitatea gândirii:</strong> utilizarea aplicată a operațiilor gândirii
    <span class='tooltip-box'>
      <strong>Formulare de examen:</strong> activitatea gândirii constă în folosirea coordonată a operațiilor fundamentale ale gândirii în vederea rezolvării de sarcini cognitive reale și a construirii de semnificații.
    </span>
  </span>
</div>
<div style="margin-top:10px;">
<div>
  <span class='tip'>
    <strong>Două forme aplicative:</strong> conceptualizarea și înțelegerea
    <span class='tooltip-box'>
      <strong>Formulare de examen:</strong> conceptualizarea și înțelegerea sunt moduri de organizare a activității gândirii în care operațiile gândirii sunt utilizate pentru construirea conceptelor și pentru integrarea informațiilor într un sens coerent.
    </span>
  </span>
</div>
</div>

<div style="margin-top:10px; margin-bottom:20px;">
  <span class='tip'>
    <strong>Dimensiune socioculturală:</strong> criterii și sensuri învățate
    <span class='tooltip-box'>
      <strong>Formulare de examen:</strong> deși operațiile gândirii sunt mecanisme cognitive generale, ele sunt puse în lucru în conceptualizare și în înțelegere prin criterii și categorii dobândite social. Limbajul educația și normele comunității stabilesc sensuri definiții și criterii de clasificare influențând selecția relevanței și interpretarea informației.<br/><br/>
      <strong>Conceptualizare:</strong> conceptele se formează prin învățare și se stabilizează prin uz comun și validare instituțională.<br/><br/>
      <strong>Înțelegere:</strong> integrarea informațiilor noi depinde de cadre de sens interiorizate cultural care ghidează interpretarea și explicarea.
    </span>
  </span>
</div>
</div>


  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧱&nbsp;&nbsp;Conceptualizarea</div>
    <div style="margin-bottom:10px;">
      <strong>Conceptualizarea</strong> organizează conceptele în structuri (adesea ierarhice) prin 
<span class='tip'><strong>relații necesare</strong>
  <span class='tooltip-box'>
    <strong>Formulare de examen:</strong> relațiile sunt numite necesare deoarece decurg din trăsăturile esențiale ale conceptelor și din definițiile lor, nu din asocieri întâmplătoare. Dacă aceste relații sunt ignorate sau schimbate arbitrar, conceptele își pierd coerența și nu mai pot fi clasificate sau utilizate corect.<br/><br/>
    <strong>Spus simplu:</strong> nu sunt alese la întâmplare ci sunt impuse de ce este un lucru în mod esențial.<br/><br/>
    <strong>Exemplu:</strong> „câine” este subordonat lui „mamifer” pentru că posedă trăsăturile definitorii ale mamiferelor nu pentru că seamănă accidental cu ele.
  </span>
</span>

    </div>

    ${window.flashPillList([
      {
        text: "⬇️<span class='tip'><strong>subordonare</strong><span class='tooltip-box'><strong>Definiție:</strong> un concept particular este inclus într-un concept mai general.<br/><br/><strong>Exemplu:</strong> „câine” este subordonat lui „mamifer”.</span></span>",
        key: "teal",
      },
      {
        text: "↔️<span class='tip'><strong>coordonare</strong><span class='tooltip-box'><strong>Definiție:</strong> două concepte sunt la același nivel de generalitate.<br/><br/><strong>Exemplu:</strong> „câine” și „pisică” sunt coordonate.</span></span>",
        key: "pink",
      },
      {
        text: "⬆️<span class='tip'><strong>supraordonare</strong><span class='tooltip-box'><strong>Definiție:</strong> un concept general include concepte particulare.<br/><br/><strong>Exemplu:</strong> „mamifer” este supraordonat lui „câine”.</span></span>",
        key: "violet",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">📘&nbsp;&nbsp;Înțelegerea</div>
    <div style="margin-bottom:10px;">
      <strong>Înțelegerea</strong> constă în raportarea informațiilor noi la cunoștințele existente pentru integrare coerentă și construire de sens
      <span class='tip'><strong>(restructurând schemele cognitive).</strong><span class='tooltip-box'><strong>Formulare de examen:</strong> conduce la restructurarea schemelor cognitive, adică reorganizarea cunoașterii pentru a integra noul (inclusiv corectarea concepțiilor greșite).</span></span>
    </div>

  <div class="pill-header">
  <strong>Scopuri ale înțelegerii</strong>
  </span>
</div>

${window.flashPillList([
  {
    text: "🎯<span class='tip'><strong>identificarea unui obiect</strong><span class='tooltip-box'><strong>Spus simplu:</strong> recunoști ce este ceva după trăsături definitorii.<br/><br/><strong>Exemplu:</strong> identifici un tip de judecată după structură.</span></span>",
    key: "cyan",
  },
  {
    text: "🎯<span class='tip'><strong>descoperirea principiului de funcționare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> înțelegi cum funcționează o regulă sau un mecanism.<br/><br/><strong>Exemplu:</strong> vezi cum se ajunge de la premise la concluzie.</span></span>",
    key: "indigo",
  },
  {
    text: "🎯<span class='tip'><strong>surprinderea relațiilor</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> surprinderea relațiilor dintre obiecte, idei, fenomene.<br/><br/><strong>Spus simplu:</strong> legi idei și fenomene prin relații (de exemplu cauză și efect, condiție și rezultat).<br/><br/><strong>Exemplu:</strong> explici de ce o creștere a motivației poate schimba performanța în funcție de dificultate.</span></span>",
    key: "emerald",
  },
])}

<div class="pill-header" style="margin-top:12px;">
  <span class="tip"><strong>Modalități de realizare a înțelegerii</strong>
    <span class="tooltip-box">
      <strong>Formulare din lecție:</strong> „se poate realiza fie simplu și spontan, fie discursiv, treptat, prin efort de explorare”.
    </span>
  </span>
</div>

${window.flashPillList([
  {
    text: "⚡<span class='tip'><strong>înțelegere spontană</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> simplu, spontan.<br/><br/><strong>Spus simplu:</strong> apare rapid, fără pași expliciți.<br/><br/><strong>Exemplu:</strong> prinzi imediat sensul unui enunț clar.</span></span>",
    key: "amber",
  },
  {
    text: "🧾<span class='tip'><strong>înțelegere discursivă</strong><span class='tooltip-box'><strong>Formulare din lecție:</strong> discursiv, treptat, prin efort de explorare.<br/><br/><strong>Spus simplu:</strong> se construiește pas cu pas, prin analiză și verificare.<br/><br/><strong>Exemplu:</strong> justifici de ce o concluzie rezultă din premise.</span></span>",
    key: "coral",
  },
])}

    </div>
  </div>
</div>`,
        },
        {
          front:
            "Definește algoritmica și euristica ca strategii de operare intelectuală și explică diferența dintre ele",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">⚡&nbsp;&nbsp;Dintr-o privire</div>
    <div style="display:grid;gap:8px;">
      <div><strong>Algoritmica</strong> = pași fixați, reguli precise, soluție sigură</div>
      <div><strong>Euristica</strong> = explorare flexibilă, ipoteze, ajustări, creativitate</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">💡&nbsp;&nbsp;Strategii de operare intelectuală</div>

    ${window.flashPillList([
      {
        text: "🧱&nbsp;&nbsp;<span class='tip'><strong>algoritmica</strong><span class='tooltip-box'><strong>Formulare de examen:</strong> strategie standardizată, alcătuită din operații succesive stabilite prin reguli precise, aplicabilă repetitiv pentru a obține o soluție determinată.<br/><br/><strong>Spus simplu:</strong> urmezi aceeași rețetă de pași și ajungi sigur la rezultat.<br/><br/><strong>Exemplu:</strong> aplici metoda fixă de rezolvare pentru un tip de ecuație.</span></span>",
        key: "teal",
      },
      {
        text: "🧩&nbsp;&nbsp;<span class='tip'><strong>euristica</strong><span class='tooltip-box'><strong>Formulare de examen:</strong> strategie flexibilă de explorare a posibilităților, bazată pe încercări, ipoteze și ajustări, orientată spre descoperire și soluții originale, fără garanția unui rezultat unic.<br/><br/><strong>Spus simplu:</strong> cauți prin probe și idei diferite pînă găsești ceva viabil.<br/><br/><strong>Exemplu:</strong> încerci mai multe abordări ca să găsești o soluție creativă.</span></span>",
        key: "violet",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🔁&nbsp;&nbsp;Diferența esențială</div>
    <div style="display:grid;gap:6px;">
      <div><strong>Algoritmica</strong> reduce incertitudinea prin reguli și pași fixați</div>
      <div><strong>Euristica</strong> acceptă incertitudinea și o gestionează prin explorare și ajustare</div>
    </div>
  </div>
</div>`,
        },
        {
          front:
            "Compară gândirea convergentă cu gândirea divergentă și dă un exemplu pentru fiecare",
          back: `<div class='flash-back'>
  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">⚡&nbsp;&nbsp;Dintr-o privire</div>
    <div style="display:grid;gap:8px;">
      <div><strong>Convergentă</strong> = restrînge opțiunile către o soluție corectă</div>
      <div><strong>Divergentă</strong> = deschide opțiunile și produce alternative multiple</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧭&nbsp;&nbsp;Definiții</div>

    ${window.flashPillList([
      {
        text: "🎯&nbsp;&nbsp;<span class='tip'><strong>gândire convergentă</strong><span class='tooltip-box'><strong>Formulare de examen:</strong> orientare cognitivă spre identificarea unei soluții valide unice, prin aplicarea regulilor, analiza condițiilor și verificarea rezultatului.<br/><br/><strong>Spus simplu:</strong> cauți răspunsul corect dintre variante și îl confirmi.<br/><br/><strong>Exemplu:</strong> rezolvi un exercițiu cu răspuns unic, aplicînd o regulă și verificînd dacă rezultatul respectă condițiile.</span></span>",
        key: "cyan",
      },
      {
        text: "💡&nbsp;&nbsp;<span class='tip'><strong>gândire divergentă</strong><span class='tooltip-box'><strong>Formulare de examen:</strong> orientare cognitivă spre generarea mai multor soluții posibile, prin flexibilitate asociativă, variație și explorarea alternativelor înaintea selecției.<br/><br/><strong>Spus simplu:</strong> produci multe idei diferite înainte să alegi una.<br/><br/><strong>Exemplu:</strong> inventezi mai multe utilizări pentru un obiect obișnuit, fără să te oprești la prima idee.</span></span>",
        key: "amber",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🔍&nbsp;&nbsp;Cum le recunoști rapid</div>
    <div style="display:grid;gap:6px;">
      <div><strong>Convergentă</strong> întreabă care este soluția corectă</div>
      <div><strong>Divergentă</strong> întreabă ce alte soluții ar putea exista</div>
    </div>
  </div>
</div>`,
        },
      ],
    },
  ],
  "fph-cap9": [
    {
      id: "deck-cap9-motivatia",
      title: "Curs 9 FLASHCARDS – Motivația",
      cards: [
        {
          front: "Definește motivația și prezintă pe scurt funcțiile ei",
          back: `<div class='flash-block' style="${FLASH_BLOCK_STYLE}">
  <div>
    <span class='tip'><strong>Motivația</strong>
      <span class='tooltip-box'>
        <strong>Formulare academică:</strong> ansamblu de stări interne de necesitate, exprimate ca lipsuri sau tensiuni, care declanșează și susțin conduite orientate spre satisfacerea lor.<br/><br/>
        <strong>Spus simplu:</strong> nevoile interne pun organismul în mișcare.<br/><br/>
        <strong>Exemplu:</strong> foamea te mobilizează să cauți mâncare.
      </span>
    </span>
  </div>

  <div class="pill-header" style="margin-top:12px;">
    <strong>Două elemente cheie</strong>: componente interne ale motivației
  </div>

  ${window.flashPillList([
    {
      text: "⚡<span class='tip'><strong>activare internă</strong><span class='tooltip-box'><strong>Ce este:</strong> componenta energetică a motivației.<br/><br/><strong>Spus simplu:</strong> energia care pornește acțiunea.<br/><br/><strong>Stare de tensiune:</strong> apare o lipsă care cere rezolvare.<br/><br/><strong>Formulare academică:</strong> tensiunea internă activează conduita.<br/><br/><strong>Legătură:</strong> oferă energia pe care direcționarea o canalizează spre scop.<br/><br/><strong>Exemplu:</strong> nevoia de somn te împinge să te odihnești.</span></span>",
      key: "amber",
    },
    {
      text: "🧭<span class='tip'><strong>direcționare</strong><span class='tooltip-box'><strong>Ce este:</strong> componenta de orientare a motivației.<br/><br/><strong>Spus simplu:</strong> comportamentul capătă scop.<br/><br/><strong>Orientare spre satisfacere:</strong> nu faci orice, ci ceea ce rezolvă nevoia.<br/><br/><strong>Formulare academică:</strong> motivația organizează conduita către scopuri.<br/><br/><strong>Legătură:</strong> dă sens energiei activate și o conduce către satisfacere.<br/><br/><strong>Exemplu:</strong> alegi acțiuni care chiar reduc tensiunea.</span></span>",
      key: "cyan",
    },
  ])}
</div>

<div class='flash-block' style="${FLASH_BLOCK_STYLE}">
  <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧩&nbsp;&nbsp;Funcțiile motivației</div>

  ${window.flashPillList([
    {
      text: "🔔<span class='tip'><strong>activare și semnalizare</strong><span class='tooltip-box'><strong>Ce face:</strong> face vizibil dezechilibrul și pornește reacția.<br/><br/><strong>Spus simplu:</strong> indică dezechilibrul intern, e ceva de rezolvat.<br/><br/><strong>Formulare academică:</strong> semnalizează starea de necesitate și activează organismul.<br/><br/><strong>Exemplu:</strong> disconfortul foamei.</span></span>",
      key: "teal",
    },
    {
      text: "⚙️<span class='tip'><strong>energizare și direcționare</strong><span class='tooltip-box'><strong>Ce face:</strong> menține intensitatea efortului și îl orientează spre scop.<br/><br/><strong>Spus simplu:</strong> am energie și știu unde merg.<br/><br/><strong>Formulare academică:</strong> intensitatea și direcția conduitei sunt susținute motivațional.<br/><br/><strong>Exemplu:</strong> studiezi constant pentru un examen.</span></span>",
      key: "violet",
    },
    {
      text: "🧭<span class='tip'><strong>autoreglare</strong><span class='tooltip-box'><strong>Ce face:</strong> selectează și ajustează conduita în funcție de scop.<br/><br/><strong>Spus simplu:</strong> alegi ce e potrivit scopului, reduci distragerile și ajustezi acțiunea.<br/><br/><strong>Formulare academică:</strong> controlează și ajustează comportamentul în funcție de scopuri.<br/><br/><strong>Exemplu:</strong> îți reorganizezi timpul când apar obstacole.</span></span>",
      key: "emerald",
    },
  ])}
</div>`,
        },

        {
          front: "Definește structurile motivației",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div style="display:grid;gap:8px;">
      <div>
      <span class='tip'><strong>Structuri motivaționale</strong>
        <span class='tooltip-box'>
          <strong>Spus simplu:</strong> nu sunt impulsuri trecătoare ci forme care ghidează conduita pe termen lung.<br/><br/>
          <strong>Formulare academică:</strong> structuri care mențin orientarea către scopuri și dau coerență acțiunii.<br/><br/>
          <strong>Exemplu:</strong> interesele și convingerile te fac să alegi constant domenii asemănătoare.
        </span>
      </span>
    = forme relativ stabile prin care motivația se organizează în timp</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">📌&nbsp;&nbsp;Structuri principale</div>

    ${window.flashPillList([
      {
        text: "🔥<span class='tip'><strong>trebuințe</strong><span class='tooltip-box'><strong>Formulare academică:</strong> forțe motrice fundamentale care mențin echilibrul bio-psiho-social și mobilizează conduite de satisfacere.<br/><br/><strong>Tipuri:</strong> <strong>primare</strong> înnăscute, biologice (foame, sete, somn, mișcare). <strong>secundare</strong> dobândite, psiho-sociale (comunicare, confort, autoactualizare).<br/><br/><strong>Când nu sunt satisfăcute:</strong> tensiune crescută și pot apărea inhibare sau compensare.</span></span>",
        key: "teal",
      },
      {
        text: "🎯<span class='tip'><strong>motive</strong><span class='tooltip-box'><strong>Formulare academică:</strong> forțe motrice care declanșează, susțin și direcționează acțiunea.<br/><br/><strong>Rol:</strong> declanșează acțiunea, susține energetic efortul și îl direcționează către scop.<br/><br/><strong>Constelații motivaționale</strong> (moduri de relaționare între motive): <strong>optare și coroborare</strong> (alegere sau combinare) apar atunci când selectezi un motiv dominant sau când mai multe motive se sprijină reciproc și sunt urmărite împreună. <strong>conflict</strong> apare atunci când două motive intră în opoziție și solicită alegeri incompatibile.</span></span>",
        key: "violet",
      },
      {
        text: "🔎<span class='tip'><strong>interese</strong><span class='tooltip-box'><strong>Formulare academică:</strong> orientări selective și relativ stabile către anumite activități și domenii, reprezentând formațiuni motivaționale complexe, cu durată și consistență în timp.<br/><br/><strong>Caracteristici:</strong> <strong>selectivitate</strong> (nu orice activitate atrage în aceeași măsură) și <strong>stabilitate</strong> (se mențin pe termen lung).<br/><br/><strong>Efect formativ:</strong> favorizează dezvoltarea competențelor și crește persistența în activitate.</span></span>",
        key: "cyan",
      },
      {
        text: "🧷<span class='tip'><strong>convingeri</strong><span class='tooltip-box'><strong>Formulare academică:</strong> judecăți puternic impregnate afectiv, legate de valori, care mobilizează și orientează comportamentul prin semnificația lor personală.<br/><br/><strong>Trăsături principale:</strong> <strong>încărcătură afectivă</strong> (sunt trăite intens) și <strong>legătură cu valori</strong> (devin criterii de decizie și acțiune).</span></span>",
        key: "emerald",
      },
      {
        text: "🏔️<span class='tip'><strong>idealuri</strong><span class='tooltip-box'><strong>Formulare academică:</strong> modele valorice de perfecțiune către care individul aspiră și care exercită un rol de ghidare pe termen lung asupra conduitei.<br/><br/><strong>Structură:</strong> idealul integrează un scop sau sens al vieții, formulat la un anumit nivel de aspirații și reprezentat printr un model idealizat care ghidează conduita.</span></span>",
        key: "amber",
      },
    ])}
  </div>

</div>`,
        },

        {
          front: "Prezintă formele motivației și explică optimul motivațional",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div style="display:grid;gap:8px;">
      <div><strong> <span class='tip'><strong>Forme ale motivației</strong>
        <span class='tooltip-box'>
          <strong>Formulare academică:</strong> formele descriu moduri diferite de susținere și orientare a conduitei prin criterii de clasificare precum sursa (intrinsecă vs extrinsecă), direcția (pozitivă vs negativă) și conținutul (cognitiv vs afectiv).
        </span>
      </span></strong> = moduri de orientare a conduitei după diverse criterii</div>
      <div><strong>Optimum motivațional</strong> = potrivirea intensității și motivației cu dificultatea sarcinii</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧩&nbsp;&nbsp;Perechi fundamentale ale formelor motivației (raportat la sursa, direcția și conținutul ei)</div>
    ${window.flashPillList([
      {
        text: "🎁<span class='tip'><strong>intrinsecă vs extrinsecă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> îți place activitatea sau o faci pentru beneficii externe.<br/><br/><strong>Exemplu:</strong> citești din interes sau pentru notă.</span></span>",
        key: "violet",
      },
      {
        text: "➕<span class='tip'><strong>pozitivă vs negativă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> mergi spre ceva dorit sau eviți ceva neplăcut.<br/><br/><strong>Exemplu:</strong> cauți recompensă sau eviți pedeapsă.</span></span>",
        key: "teal",
      },

      {
        text: "💡<span class='tip'><strong>cognitivă vs afectivă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> vrei să cunoști sau să te simți bine cu ceilalți.<br/><br/><strong>Exemplu:</strong> curiozitate sau nevoia de atașament.</span></span>",
        key: "amber",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Definiție:</strong> optimum motivațional
        <span class='tooltip-box'>
          <strong>Formulare academică:</strong> performanța maximă se obține prin potrivirea motivației cu cerințele sarcinii astfel încât intensitatea motivației să se potrivească dificultății.<br/><br/>
          <strong>Spus simplu:</strong> nici prea mult, nici prea puțin, pentru ce ai de făcut.
        </span>
      </span>
    </div>
    <hr class="hr-flash">

    <div class='flash-title' style="${FLASH_TITLE_STYLE}">⚖️&nbsp;&nbsp;Evaluarea dificultății</div>
    ${window.flashPillList([
      {
        text: "✅&nbsp;&nbsp;<span class='tip'><strong>percepție corectă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> ajustezi efortul potrivit sarcinii.<br/><br/><strong>Exemplu:</strong> îți organizezi timpul realist pentru o sarcină dificilă.</span></span>",
        key: "emerald",
      },
      {
        text: "⚠️&nbsp;&nbsp;<span class='tip'><strong>sub sau supraapreciere</strong><span class='tooltip-box'><strong>Spus simplu:</strong> apare dezechilibrul motivației fie te relaxezi prea mult fie te blochezi prin stres.<br/><br/><strong>Exemplu:</strong> subestimezi sarcina și nu mai performezi.</span></span>",
        key: "coral",
      },
    ])}
  </div>

</div>`,
        },

        {
          front:
            "Explică teoria auto-determinării (Deci și Ryan) și diferența dintre reglare externă și reglare internă",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div style="display:grid;gap:8px;">
      <div><span class='tip'><strong>Teoria auto-determinării</strong>
        <span class='tooltip-box'>
          <strong>Spus simplu:</strong> nu doar reacționezi, ci te auto organizezi.<br/><br/>
          <strong>Formulare academică:</strong> individul are inițiativă și tendință de dezvoltare autonomă, fiind agent activ al propriei schimbări.<br/><br/>
          <strong>Exemplu:</strong> înveți pentru că vrei să înțelegi, nu doar pentru notă.
        </span>
      </span>
     = oamenii sunt agenți activi ai propriei schimbări</div>
       <div>
      <span class='tip'><strong>Reglare</strong>
        <span class='tooltip-box'>
          <strong>Spus simplu:</strong> modul în care este controlată și asumată motivația.<br/><br/>
          <strong>Formulare academică:</strong> reglarea motivațională descrie gradul în care comportamentul este determinat din exterior sau este interiorizat și asumat de individ.<br/><br/>
          <strong>Continuu motivațional:</strong> de la reglare externă, bazată pe presiuni, recompense sau constrângeri, la reglare internă, bazată pe autonomie, sens personal și asumare.<br/><br/>
          <strong>Formulare de examen:</strong> motivația nu este doar externă sau internă, ci se distribuie pe un continuum al reglării, în funcție de nivelul de interiorizare.
        </span>
      </span>
      = continuum de la reglare externă (presiune) la reglare internă (asumare)
    </div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">📌 Idei cheie</div>
    ${window.flashPillList([
      {
        text: "🧭<span class='tip'><strong>agent activ</strong><span class='tooltip-box'><strong>Spus simplu:</strong> inițiativă și auto organizare.</span></span>",
        key: "teal",
      },
      {
        text: "🔎<span class='tip'><strong>explorare și învățare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> curiozitate internă.</span></span>",
        key: "cyan",
      },
    ])}
    <hr class="hr-flash">

    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧾 Reglare externă și reglare internă (continuum-ul reglării)</div>
    ${window.flashPillList([
      {
        text: "📢<span class='tip'><strong>reglare externă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> presiuni, recompense și cerințe, faci ceva pentru că trebuie.<br/><br/><strong>Exemplu:</strong> înveți doar pentru notă.</span></span>",
        key: "amber",
      },
      {
        text: "🌱<span class='tip'><strong>reglare internă</strong><span class='tooltip-box'><strong>Spus simplu:</strong> autonomie și asumare, faci ceva pentru că are sens pentru tine.<br/><br/><strong>Exemplu:</strong> studiezi din interes real.</span></span>",
        key: "emerald",
      },
    ])}
  </div>

</div>`,
        },

        {
          front: "Explică teoria expectanță-valoare (Wigfield și Eccles)",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div style="display:grid;gap:8px;">
      <div> <span class='tip'><strong>Teoria expectanță-valoare</strong>
        <span class='tooltip-box'>
          <strong>Spus simplu:</strong> dacă crezi că poți și îți pasă, te implici mai mult.<br/><br/>
<strong>Formulare academică:</strong> teoria expectanță-valoare susține că implicarea în sarcină este determinată de două componente: expectanța de reușită, adică evaluarea probabilității personale de succes, și valoarea acordată sarcinii, adică importanța, utilitatea și interesul percepute; cu cât ambele sunt mai ridicate, cu atât efortul, persistența și angajarea cresc.
          <strong>Exemplu:</strong> te pregătești intens când îți pasă și crezi că poți reuși.
        </span>
      </span> = motivația depinde de credința în reușită și de valoarea acordată sarcinii</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧩 Componente</div>
    ${window.flashPillList([
      {
        text: "🎯<span class='tip'><strong>expectanță</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „pot reuși”, adică încredere în succes și evaluarea propriei competențe.<br/><br/><strong>Exemplu:</strong> te apuci de un proiect dacă simți că îl poți duce.</span></span>",
        key: "teal",
      },
      {
        text: "⭐<span class='tip'><strong>valoare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> „merită pentru mine”, adică importanță, utilitate și interes.<br/><br/><strong>Exemplu:</strong> înveți mai mult la ceva care contează pentru viitorul tău.</span></span>",
        key: "amber",
      },
    ])}
    <hr class="hr-flash">

    <div class='flash-title' style="${FLASH_TITLE_STYLE}">📌 Ce le influențează</div>
    ${window.flashPillList([
      {
        text: "📍<span class='tip'><strong>credințe și imagine de sine</strong><span class='tooltip-box'><strong>Spus simplu:</strong> autoevaluarea competenței schimbă atât expectanța, cât și implicarea.<br/><br/><strong>Exemplu:</strong> dacă te consideri bun la un domeniu, investești mai mult.</span></span>",
        key: "violet",
      },
      {
        text: "⚙️<span class='tip'><strong>dificultatea percepută și experiențe anterioare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> dificultatea percepută și istoricul emoțional influențează așteptările de reușită.<br/><br/><strong>Exemplu:</strong> eșecurile repetate reduc expectanța.</span></span>",
        key: "coral",
      },
    ])}
  </div>

</div>`,
        },

        {
          front:
            "Raportat la teoriile motivaționale privind reușita academică, diferențiază scopurile de perfecționare și scopurile de performanță",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div style="display:grid;gap:8px;">
      <div>🏆&nbsp;&nbsp;<span class='tip'><strong>Reușita academică</strong>
        <span class='tooltip-box'>
          <strong>Formulare academică:</strong> orientările motivaționale în context educațional au o stabilitate relativă între situații de învățare, deoarece elevul sau studentul tinde să urmărească în mod repetat aceleași tipuri de scopuri, care devin repere relativ stabile ale conduitei academice.
        </span>
      </span> = scopuri relativ stabile în context educațional</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="\${FLASH_TITLE_STYLE}">🎯&nbsp;&nbsp;
  <span class='tip'><strong>Scopuri de învățare</strong><span class='tooltip-box'>
    <strong>Diferențiere (formulare de examen):</strong> scopurile de învățare se organizează în două orientări principale: <strong>scopuri de perfecționare</strong>, centrate pe progres, înțelegere și dezvoltare personală, respectiv <strong>scopuri de performanță</strong>, centrate pe rezultate, comparație socială și evitarea evaluării negative.<br/><br/>
    <strong>Criteriul distinctiv:</strong> la perfecționare contează îmbunătățirea competenței proprii, iar la performanță contează poziționarea față de ceilalți și validarea prin evaluare.<br/><br/>
    <strong>Exemplu sintetic:</strong> „învăț ca să înțeleg și să devin mai bun” (perfecționare) vs „învăț ca să obțin o notă mai mare decât ceilalți și să nu fiu evaluat negativ” (performanță).
  </span></span>
</div>
    ${window.flashPillList([
      {
        text: "🧩<span class='tip'><strong>perfecționare</strong><span class='tooltip-box'><strong>Spus simplu:</strong> contează să înțelegi și să devii mai bun, cu accent pe dezvoltare personală.<br/><br/><strong>Exemplu:</strong> înveți pentru claritate și competență.</span></span>",
        key: "emerald",
      },
      {
        text: "🏆<span class='tip'><strong>performanță</strong><span class='tooltip-box'><strong>Spus simplu:</strong> contează rezultatele și comparația, vrei să fii mai bun decât ceilalți și să eviți evaluarea negativă.<br/><br/><strong>Exemplu:</strong> te compari constant cu colegii.</span></span>",
        key: "amber",
      },
    ])}
  </div>

</div>`,
        },

        {
          front: "Prezintă teorii umaniste ale motivației (Maslow, Rogers)",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div style="display:grid;gap:8px;">
      <div><span class='tip'><strong>Teorii umaniste ale motivației</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> oamenii sunt motivați să crească și să se împlinească, nu doar să obțină recompense.<br/><br/>
          <strong>Academic:</strong> teoriile umaniste definesc motivația ca tendință orientată spre dezvoltare personală, sens și autoactualizare, prin care individul urmărește împlinirea potențialului propriu și construirea unei vieți cu semnificație.<br/><br/>
          <strong>Exemplu:</strong> înveți susținut pentru a deveni mai competent și mai autentic, nu doar pentru o notă.
        </span>
      </span> = tendință spre creștere, sens și autoactualizare</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">📌 Repere umaniste</div>
    ${window.flashPillList([
      {
        text: "🗻<span class='tip'><strong>Maslow</strong> - ierarhia nevoilor<span class='tooltip-box'><strong>Simplu spus:</strong> nevoile se organizează pe niveluri, iar motivația urcă spre nevoi mai înalte.<br/><br/><strong>Academic:</strong> perspectiva lui Maslow descrie o ierarhie a nevoilor, în care, pe măsură ce nevoile de bază sunt satisfăcute, devin dominante nevoile superioare, precum apartenența, stima și autoactualizarea, care pot susține implicarea în învățare ca formă de împlinire.<br/><br/><strong>Exemplu:</strong> când te simți acceptat și valorizat, studiezi pentru dezvoltare și autoactualizare.</span></span>",
        key: "teal",
      },
      {
        text: "🤝<span class='tip'><strong>Rogers</strong> - climat relațional favorabil<span class='tooltip-box'><strong>Simplu spus:</strong> înveți mai bine când mediul te acceptă și te înțelege.<br/><br/><strong>Academic:</strong> perspectiva lui Rogers accentuează rolul climatului relațional favorabil în susținerea dezvoltării, prin acceptare, empatie și autenticitate, condiții care reduc anxietatea și facilitează asumarea învățării și creșterea motivației interne.<br/><br/><strong>Exemplu:</strong> un profesor empatic și autentic crește implicarea, pentru că elevul se simte în siguranță să încerce și să greșească.</span></span>",
        key: "violet",
      },
    ])}
  </div>

</div>`,
        },
        {
          front:
            "Explică importanța mediului educațional în motivația pentru învățare",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div style="display:grid;gap:8px;">
      <div><span class='tip'><strong>Mediul educațional</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> motivația pentru învățare depinde de sarcini, de cât control ai și de cum ești evaluat.<br/><br/>
          <strong>Academic:</strong> mediul educațional modelează orientarea motivațională prin dimensiuni didactice specifice, întrucât tipul sarcinilor, distribuția autorității și forma evaluării influențează inițierea, intensitatea și autoreglarea conduitei de învățare.<br/><br/>
          <strong>Exemplu:</strong> sarcini relevante, autonomie în lucru și feedback constructiv cresc implicarea și persistența.
        </span>
      </span> influențează orientarea motivațională prin sarcini, autoritate și evaluare</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧩 Cele trei dimensiuni</div>
    ${window.flashPillList([
      {
        text: "📚<span class='tip'><strong>sarcinile</strong><span class='tooltip-box'><strong>Simplu spus:</strong> ce ai de făcut și cât sens are pentru tine.<br/><br/><strong>Academic:</strong> sarcinile definesc tipul, nivelul de provocare și relevanța activităților, orientând implicarea spre învățare semnificativă sau spre executare formală.<br/><br/><strong>Exemplu:</strong> proiecte aplicate, legate de viața reală, cresc interesul și efortul susținut.</span></span>",
        key: "teal",
      },
      {
        text: "🧭<span class='tip'><strong>autoritatea</strong><span class='tooltip-box'><strong>Simplu spus:</strong> cât control ai și câtă autonomie primești.<br/><br/><strong>Academic:</strong> autoritatea exprimă modul de distribuire a controlului didactic și gradul de autonomie acordat, ceea ce influențează asumarea sarcinii și interiorizarea motivației.<br/><br/><strong>Exemplu:</strong> când poți alege strategia sau tema, crește motivația internă și persistența.</span></span>",
        key: "cyan",
      },
      {
        text: "✅<span class='tip'><strong>evaluarea</strong><span class='tooltip-box'><strong>Simplu spus:</strong> cum primești feedback și după ce criterii ești judecat.<br/><br/><strong>Academic:</strong> evaluarea stabilește criteriile de reușită și tipul de feedback, influențând orientarea spre progres sau spre protejarea imaginii, precum și reglarea efortului în învățare.<br/><br/><strong>Exemplu:</strong> feedbackul clar, orientat pe îmbunătățire, susține implicarea și reduce anxietatea.</span></span>",
        key: "violet",
      },
    ])}
    <hr class="hr-flash">

    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🌱 Efect asupra motivației</div>
    ${window.flashPillList([
      {
        text: "📚<span class='tip'><strong>sarcini semnificative</strong><span class='tooltip-box'><strong>Simplu spus:</strong> când sarcina are sens, te implici mai mult.<br/><br/><strong>Academic:</strong> sarcinile semnificative, prin relevanță și provocare adecvată, cresc interesul, intensifică implicarea și susțin motivația intrinsecă pentru învățare.<br/><br/><strong>Exemplu:</strong> proiecte legate de situații reale, care cer aplicare și reflecție.</span></span>",
        key: "emerald",
      },
      {
        text: "✅<span class='tip'><strong>evaluare constructivă</strong><span class='tooltip-box'><strong>Simplu spus:</strong> feedbackul te ajută să știi cum să progresezi.<br/><br/><strong>Academic:</strong> evaluarea constructivă oferă feedback orientat spre îmbunătățire și oportunități de revizuire, ceea ce susține autoreglarea învățării și diminuează anxietatea asociată evaluării.<br/><br/><strong>Exemplu:</strong> corecții explicite, însoțite de pași de remediere și posibilitatea de refacere.</span></span>",
        key: "amber",
      },
    ])}
  </div>

</div>`,
        },
      ],
    },
  ],
  "fph-cap10": [
    {
      id: "deck-cap10-afectivitatea",
      title: "Curs 10 FLASHCARDS – Afectivitatea",
      cards: [
        {
          front: "Definește afectivitatea și explică procesele ei de bază",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div style="display:grid;gap:10px;">
      <div>
        <span class='tip'><strong>Definiție:</strong> afectivitatea
          <span class='tooltip-box'>
            <strong>Formulare academică:</strong> afectivitatea reprezintă rezonanța internă a relației individului cu realitatea, exprimată ca trăire subiectivă și semnificare personală a situațiilor, în funcție de relevanța lor pentru trebuințe, motive și valori.<br/><br/>
            <strong>Spus simplu:</strong> felul în care trăiești pe dinăuntru ceea ce ți se întâmplă.<br/><br/>
            <strong>Exemplu:</strong> aceeași situație poate fi trăită ca plăcută sau amenințătoare.
          </span>
        </span>
      </div>

      <div><strong>Idee cheie</strong>: trăirea apare din potrivirea sau nepotrivirea dintre ce contează pentru tine și ce se întâmplă în exterior.</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧭&nbsp;&nbsp;Concordanță sau neconcordanță</div>

    ${window.flashPillList([
      {
        text: "🎯<span class='tip'><strong>raport intern</strong><span class='tooltip-box'><strong>Ce include:</strong> motive, interese, așteptări.<br/><br/><strong>Formulare academică:</strong> procesele afective sunt condiționate de sistemul motivațional și de așteptările individului, deoarece acestea stabilesc semnificația personală a situațiilor.<br/><br/><strong>Spus simplu:</strong> ce contează pentru tine în interior.<br/><br/><strong>Exemplu:</strong> dacă îți pasă de rezultat, trăiești mai intens.</span></span>",
        key: "cyan",
      },
      {
        text: "🌍<span class='tip'><strong>situația externă</strong><span class='tooltip-box'><strong>Ce include:</strong> contextul real, evenimentul, cerințele și consecințele.<br/><br/><strong>Formulare academică:</strong> afectivitatea reflectă concordanța sau neconcordanța dintre cerințele situației și raportarea internă a individului, generând trăiri pozitive când există potrivire și trăiri negative când apare nepotrivire.<br/><br/><strong>Spus simplu:</strong> ce se întâmplă în exterior.<br/><br/><strong>Exemplu:</strong> când realitatea se potrivește cu așteptările, trăirea tinde să fie pozitivă.</span></span>",
        key: "teal",
      },
    ])}
  </div>

</div>`,
        },

        {
          front:
            "Descrie specificul afectivității prin natura și trăsăturile ei",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Natura proceselor afective</strong>
        <span class='tooltip-box'>
          <strong>Formulare academică:</strong> procesele afective sunt experiențe subiective cu sens personal, apărute în interacțiunea semnificativă a individului cu mediul, prin evaluarea situațiilor în raport cu trebuințele, motivele și valorile proprii.<br/><br/>
          <strong>Spus simplu:</strong> trăiri care apar când evaluezi o situație ca importantă pentru tine.<br/><br/>
          <strong>Exemplu:</strong> aceeași critică poate fi trăită ca utilă sau ca dureroasă.
        </span>
      </span>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧩&nbsp;&nbsp;Trăsături de bază</div>

    ${window.flashPillList([
      {
        text: "🫀<span class='tip'><strong>componentă fiziologică</strong><span class='tooltip-box'><strong>Formulare academică:</strong> trăirile afective se însoțesc de reacții fiziologice și somatice semnificative, care susțin adaptarea și pregătirea organismului pentru acțiune.<br/><br/><strong>Spus simplu:</strong> corpul reacționează când simți ceva.<br/><br/><strong>Exemplu:</strong> crește pulsul când apare teama.</span></span>",
        key: "amber",
      },
      {
        text: "⚖️<span class='tip'><strong>polaritate</strong><span class='tooltip-box'><strong>Formulare academică:</strong> evaluarea afectivă are caracter polar, organizând trăirea pe axa plăcut neplăcut, în funcție de concordanța sau neconcordanța cu ceea ce este relevant pentru individ.<br/><br/><strong>Spus simplu:</strong> simți ca bine sau ca rău.<br/><br/><strong>Exemplu:</strong> bucurie și teamă.</span></span>",
        key: "teal",
      },
      {
        text: "🔋<span class='tip'><strong>rol activator sau inhibitor</strong><span class='tooltip-box'><strong>Formulare academică:</strong> afectivitatea poate mobiliza sau poate frâna conduita, influențând inițierea, intensitatea și persistența acțiunii prin valoarea subiectivă atribuită situației.<br/><br/><strong>Spus simplu:</strong> te împinge să acționezi sau te oprește.<br/><br/><strong>Exemplu:</strong> entuziasmul mobilizează, frica poate bloca.</span></span>",
        key: "violet",
      },
    ])}
  </div>

</div>`,
        },

        {
          front:
            "Explică expresivitatea afectivă și modul de manifestare socială",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div style="display:grid;gap:10px;">
      <div>
        <span class='tip'><strong>Expresivitate</strong>
          <span class='tooltip-box'>
            <strong>Formulare academică:</strong> expresivitatea afectivă reprezintă ansamblul semnelor verbale și nonverbale prin care trăirile se exteriorizează, devin comunicabile și îndeplinesc funcții adaptative și comunicaționale în interacțiunea socială.<br/><br/>
            <strong>Spus simplu:</strong> ceea ce simți se vede și se poate transmite.<br/><br/>
            <strong>Exemplu:</strong> spui „sunt frustrat”, îți schimbă tonul vocii și mimica.
          </span>
        </span>
        = limbaj emoțional comunicabil
      </div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧩&nbsp;&nbsp;Cum se manifestă</div>

    ${window.flashPillList([
      {
        text: "🌍<span class='tip'><strong>recunoaștere largă</strong><span class='tooltip-box'><strong>Formulare academică:</strong> o parte a expresiilor afective are caracter relativ general, fiind recognoscibilă în contexte culturale diferite, ceea ce facilitează coordonarea socială și reacția rapidă la semnale emoționale.<br/><br/><strong>Spus simplu:</strong> unele expresii sunt ușor de recunoscut aproape oriunde.<br/><br/><strong>Exemplu:</strong> frica și bucuria sunt interpretate rapid.</span></span>",
        key: "emerald",
      },
      {
        text: "🌊<span class='tip'><strong>contagiune afectivă</strong><span class='tooltip-box'><strong>Formulare academică:</strong> trăirile afective pot fi transmise în grup prin mecanisme de influență socială, contribuind la formarea unei atmosfere emoționale comune și la reglarea comportamentului colectiv.<br/><br/><strong>Spus simplu:</strong> emoția unuia poate cuprinde și pe ceilalți.<br/><br/><strong>Exemplu:</strong> entuziasmul dintr o echipă se răspândește.</span></span>",
        key: "cyan",
      },
    ])}
  </div>

</div>`,
        },

        {
          front: "Explică dinamica afectivă și rolurile afectivității",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Dinamica afectivă</strong>
        <span class='tooltip-box'>
          <strong>Formulare academică:</strong> dinamica afectivă descrie variația trăirilor după intensitate, durată și mobilitate, determinată de reactivitatea individuală și de semnificația motivațională a situației pentru persoană.<br/><br/>
          <strong>Spus simplu:</strong> trăirile diferă ca forță, cât țin și cât de repede se schimbă.<br/><br/>
          <strong>Exemplu:</strong> unii se supără rapid, alții rămân calmi.
        </span>
      </span>
    </div>

    <hr class="hr-flash">

    <div class='flash-title' style="${FLASH_TITLE_STYLE}">⏱️&nbsp;&nbsp;Indicatori</div>
    ${window.flashPillList([
      {
        text: "🔥<span class='tip'><strong>intensitate</strong><span class='tooltip-box'><strong>Formulare academică:</strong> intensitatea exprimă nivelul de activare afectivă și depinde de reactivitatea persoanei și de importanța situației pentru sistemul său motivațional.<br/><br/><strong>Spus simplu:</strong> cât de puternic simți.<br/><br/><strong>Exemplu:</strong> același eveniment produce reacții diferite la persoane diferite.</span></span>",
        key: "coral",
      },
      {
        text: "🕒<span class='tip'><strong>durată</strong><span class='tooltip-box'><strong>Formulare academică:</strong> durata indică persistența trăirii, de la reacții afective trecătoare la formațiuni relativ stabile, care pot organiza conduita în timp.<br/><br/><strong>Spus simplu:</strong> de la scurt la stabil.<br/><br/><strong>Exemplu:</strong> o supărare trece, atașamentul rămâne.</span></span>",
        key: "teal",
      },
      {
        text: "🔁<span class='tip'><strong>mobilitate</strong><span class='tooltip-box'><strong>Formulare academică:</strong> mobilitatea exprimă rapiditatea și frecvența trecerilor între stări afective, în funcție de schimbarea contextului și de reevaluarea semnificației situației.<br/><br/><strong>Spus simplu:</strong> cât de ușor schimbi starea când se schimbă situația.<br/><br/><strong>Exemplu:</strong> teamă urmată de ușurare când dispare pericolul.</span></span>",
        key: "amber",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Roluri afective</strong>
        <span class='tooltip-box'>
          <strong>Formulare academică:</strong> afectivitatea îndeplinește funcții comunicaționale, cathartice și energizante, influențând relațiile sociale, reducerea tensiunii interne și mobilizarea resurselor pentru adaptare și acțiune.<br/><br/>
          <strong>Spus simplu:</strong> afectele transmit, descarcă și mobilizează.<br/><br/>
          <strong>Exemplu:</strong> plânsul descarcă, entuziasmul mobilizează.
        </span>
      </span>
    </div>

    <hr class="hr-flash">

    <div class='flash-title' style="${FLASH_TITLE_STYLE}">🧩&nbsp;&nbsp;Roluri principale</div>
    ${window.flashPillList([
      {
        text: "🗣️<span class='tip'><strong>Persuasiune</strong><span class='tooltip-box'><strong>Formulare academică:</strong> expresiile afective funcționează ca semnale sociale care modelează percepțiile și reacțiile celorlalți, facilitând coordonarea și influența interpersonală.<br/><br/><strong>Spus simplu:</strong> trăirea ta influențează pe ceilalți.<br/><br/><strong>Exemplu:</strong> zâmbetul invită la apropiere.</span></span>",
        key: "cyan",
      },
      {
        text: "🧹<span class='tip'><strong>Efect de eliberare (catharsis)</strong><span class='tooltip-box'><strong>Formulare academică:</strong> exprimarea afectivă poate reduce tensiunea psihică prin descărcare emoțională și reorganizare internă, contribuind la restabilirea echilibrului.<br/><br/><strong>Spus simplu:</strong> te descarci și te reglezi.<br/><br/><strong>Exemplu:</strong> vorbești despre problemă și te simți mai ușurat.</span></span>",
        key: "violet",
      },
      {
        text: "🔋<span class='tip'><strong>Oferă energie psihică</strong><span class='tooltip-box'><strong>Formulare academică:</strong> afectele pot furniza energie psihică, susținând inițiativa, efortul și persistența prin intensificarea orientării către acțiune și adaptare.<br/><br/><strong>Spus simplu:</strong> afectele pot fi combustibil pentru acțiune.<br/><br/><strong>Exemplu:</strong> pasiunea crește perseverența.</span></span>",
        key: "emerald",
      },
    ])}
  </div>

</div>`,
        },

        {
          front: "Explică structurile afectogene specifice",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div style="display:grid;gap:10px;">
      <div>
        <span class='tip'><strong>Structuri afectogene</strong>
          <span class='tooltip-box'>
            <strong>Formulare academică:</strong> structurile afectogene sunt forme de organizare a afectivității, prin care trăirile se generează, se diferențiază și se stabilizează la niveluri distincte de intensitate, durată și complexitate, influențând conduita și adaptarea.<br/><br/>
            <strong>Spus simplu:</strong> forme diferite ale trăirilor, de la nuanțe discrete la trăiri stabile și intense.<br/><br/>
            <strong>Exemplu:</strong> de la o stare ușor plăcută la o pasiune puternică.
          </span>
        </span>
      </div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">📌&nbsp;&nbsp;Structuri principale</div>

   ${window.flashPillList([
     {
       text: "🎨<span class='tip'><strong>ton afectiv</strong><span class='tooltip-box'><strong>Formulare academică:</strong> reacție afectivă primară, spontană, supusă unui control conștient redus, care însoțește actul cunoașterii (percepții, reprezentări, idei, amintiri) și colorează evaluarea cognitivă pe axa plăcut–neplăcut.<br/><br/><strong>Spus simplu:</strong> o nuanță afectivă fină atașată gândurilor și percepțiilor.<br/><br/><strong>Exemplu:</strong> o amintire este trăită ca plăcută sau neplăcută.</span></span>",
       key: "teal",
     },
     {
       text: "⚡<span class='tip'><strong>emoții</strong><span class='tooltip-box'><strong>Formulare academică:</strong> fenomen afectiv fundamental care se manifestă fie ca emoții simple (afecte), intense, dinamice și contextuale, cu orientare clar determinată, fie ca emoții complexe, aflate sub control conștient mai ridicat, bazate pe interpretare intelectuală și semnificare valorică, legate de motivații secundare și supuse convențiilor sociale și culturale.<br/><br/><strong>Spus simplu:</strong> emoțiile pot fi rapide și brute sau elaborate și interpretate.<br/><br/><strong>Exemplu:</strong> bucurie, teamă (simple); speranță, admirație (complexe).</span></span>",
       key: "coral",
     },
     {
       text: "🌤️<span class='tip'><strong>dispoziții</strong><span class='tooltip-box'><strong>Formulare academică:</strong> structuri afectogene cu intensitate și durată medie, cu caracter vag și slab conștientizat, care constituie un fond afectiv al activității psihice; au surse adesea difuze și se raportează la disponibilitatea emoțional–reactivă a persoanei în interacțiunea cu mediul.<br/><br/><strong>Spus simplu:</strong> starea generală care îți colorează o perioadă.<br/><br/><strong>Exemplu:</strong> bună dispoziție, iritabilitate.</span></span>",
       key: "amber",
     },
     {
       text: "💞<span class='tip'><strong>sentimente</strong><span class='tooltip-box'><strong>Formulare academică:</strong> formațiuni afective complexe, cu organizare superioară și stabilitate mare, care funcționează ca formațiuni atitudinale și exprimă o raportare valorică relativ stabilă față de sine, ceilalți sau valori; reprezintă condensări afectogene automatizate, cu activări periodice.<br/><br/><strong>Spus simplu:</strong> trăiri durabile care includ valori și atitudini.<br/><br/><strong>Exemplu:</strong> dragoste, respect, stimă de sine.</span></span>",
       key: "cyan",
     },
     {
       text: "🔥<span class='tip'><strong>pasiuni</strong><span class='tooltip-box'><strong>Formulare academică:</strong> structuri afectogene de intensitate și stabilitate înalte, cu caracter unilateral evident, capabile să disloce cantități mari de energie dinamizatoare și să orienteze persistent conduita; pot fi pozitive sau negative (patimi) și pot avea atât efecte adaptative majore, cât și efecte dezadaptative prin îngustarea câmpului de interacțiune socială.<br/><br/><strong>Spus simplu:</strong> trăiri extrem de puternice care pot domina viața psihică.<br/><br/><strong>Exemplu:</strong> pasiunea pentru artă, pentru putere.</span></span>",
       key: "violet",
     },
   ])}

  </div>

</div>`,
        },

        {
          front: "Explică relația dintre afectivitate și motivație",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
  <div>
        <span class='tip'><strong>Afectivitate</strong>
          <span class='tooltip-box'>
            <strong>Emoții</strong>: reacții afective intense și de durată scurtă, legate de o situație concretă.<br/>
            <strong>Exemplu:</strong> teamă înainte de test, bucurie după reușită.<br/><br/>
            <strong>Trăiri</strong>: experiența subiectivă resimțită aici și acum, cu nuanțe diferite ca intensitate și durată.<br/>
            <strong>Exemplu:</strong> neliniște, ușurare, dezamăgire.<br/><br/>
            <strong>Structuri afectogene</strong>: forme organizate ale afectivității rezultate din raportarea la situație, cu intensitate și durată diferite.<br/>
            <strong>Exemplu:</strong> emoții rapide, dispoziții de fond, sentimente stabile.
          </span>
        </span> - emoții, trăiri, structuri afectogene
      </div>
    <div>
        <span class='tip'><strong>Motivație</strong>
          <span class='tooltip-box'>
            <strong>Trebuințe</strong>: stări de necesitate care cer satisfacere.<br/>
            <strong>Exemplu:</strong> odihnă, siguranță, apartenență.<br/><br/>
            <strong>Motive</strong>: forțe interne care declanșează și susțin acțiunea către un scop.<br/>
            <strong>Exemplu:</strong> dorința de reușită, nevoia de apreciere.<br/><br/>
            <strong>Scopuri</strong>: rezultate urmărite, care organizează acțiunea.<br/>
            <strong>Exemplu:</strong> să iau notă mare, să termin proiectul.<br/><br/>
            <strong>Constelații motivaționale</strong>: mai multe motive active simultan, care se susțin sau intră în conflict și determină conduita.<br/>
            <strong>Exemplu:</strong> dorința de reușită + teama de eșec + dorința de relaxare.
          </span>
        </span>
        - trebuințe, motive, scopuri, constelații motivaționale
      </div>
<hr class="hr-flash">
    <div style="display:grid;gap:10px;">
      <div>
      <span class='tip'><strong>Relația afectivitate-motivație</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> motivele într-o situație produc trăiri, iar trăirile pot întări sau slăbi motivele.<br/><br/>
          <strong>Formulare academică:</strong> între afectivitate și motivație există o relație indisolubilă și bidirecțională: motivele raportate la o situație se exprimă afectiv, iar trăirile rezultate pot modifica ulterior activarea motivelor și desfășurarea conduitei.<br/><br/>
          <strong>Exemplu:</strong> dacă examenul contează pentru tine, apare emoția; emoția te poate mobiliza sau te poate bloca.
        </span>
      </span>
    </div>
    Ex. motive într-o situație  →  emoții și alte trăiri (afectivitate)  →  alimentare/frânare a motivelor</div>
  </div>

  

</div>`,
        },
      ],
    },
  ],
  "fph-cap11a": [
    {
      id: "deck-cap11-vointa",
      title: "Curs 11A FLASHCARDS",
      cards: [
        {
          front:
            "Definirea, caracteristicile și concepte esențiale despre voință",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Voința:</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> îți controlezi conștient conduita ca să atingi un scop, chiar când e greu.<br/><br/>
          <strong>Formulare academică:</strong> voința este proces psihic de semnalizare și autoreglare superioară, care implică scop, deliberare, elaborare, organizare, mobilizare și ducere la îndeplinire a activității (PopescuNeveanu, 1978)<br/><br/>
          <strong>Exemplu:</strong> continui să lucrezi deși ești obosit.
        </span>
      </span> - procesul psihic de autoreglare conștientă a acțiunii orientate spre scop
    </div>
</div>
<div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Reglajul voluntar se face prin:</div>
    ${window.flashPillList([
      {
        text: "💡<span class='tip'><strong>control conștient</strong><span class='tooltip-box'><strong>Simplu spus:</strong> îți ghidezi intenționat comportamentul.<br/><br/><strong>Formulare academică:</strong> conduita voluntară este ghidată conștient prin reprezentarea scopului și monitorizarea pașilor de realizare.<br/><br/><strong>Exemplu:</strong> îți oprești distragerile ca să termini o sarcină.</span></span>",
        key: "teal",
      },
      {
        text: "🗣️<span class='tip'><strong>limbaj interior</strong><span class='tooltip-box'><strong>Simplu spus:</strong> îți dai instrucțiuni și îți faci planul în minte.<br/><br/><strong>Formulare academică:</strong> limbajul interior funcționează ca mecanism de auto instruire, planificare și menținere a direcției spre scop.<br/><br/><strong>Exemplu:</strong> îți spui ce ai de făcut pas cu pas.</span></span>",
        key: "cyan",
      },
      {
        text: "⚙️<span class='tip'><strong>efort voluntar</strong><span class='tooltip-box'><strong>Simplu spus:</strong> te mobilizezi când apare obstacolul.<br/><br/><strong>Formulare academică:</strong> efortul voluntar reprezintă mobilizarea conștientă suplimentară necesară pentru a depăși rezistențe interne sau externe și pentru a susține acțiunea până la scop.<br/><br/><strong>Exemplu:</strong> continui chiar când ai tentația de a renunța.</span></span>",
        key: "amber",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Efortul voluntar</div>
    ${window.flashPillList([
      {
        text: "🔋<span class='tip'><strong>consum energetic</strong><span class='tooltip-box'><strong>Simplu spus:</strong> cere energie suplimentară.<br/><br/><strong>Formulare academică:</strong> efortul voluntar presupune încordare și consum energetic crescut în vederea menținerii conduitei orientate spre scop.<br/><br/><strong>Exemplu:</strong> lucrezi încă o oră deși ești obosit.</span></span>",
        key: "violet",
      },
      {
        text: "⏱️<span class='tip'><strong>limitat temporal</strong><span class='tooltip-box'><strong>Simplu spus:</strong> nu poate fi menținut la infinit.<br/><br/><strong>Formulare academică:</strong> efortul voluntar are limită de durată deoarece încordarea și consumul energetic crescut conduc la oboseală și scăderea randamentului.<br/><br/><strong>Exemplu:</strong> după mult efort continuu, performanța scade.</span></span>",
        key: "coral",
      },
      {
        text: "🧗<span class='tip'><strong>depinde de obstacol</strong><span class='tooltip-box'><strong>Simplu spus:</strong> cu cât obstacolul e mai mare, cu atât te mobilizezi mai mult.<br/><br/><strong>Formulare academică:</strong> mobilizarea voluntară este proporțională cu obstacolul perceput, întrucât dificultatea solicită creșterea controlului conștient și a efortului pentru menținerea conduitei orientate spre scop.<br/><br/><strong>Exemplu:</strong> o sarcină dificilă cere mai mult efort voluntar decât una ușoară.</span></span>",
        key: "amber",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Caracteristici ale voinței</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> voința se vede în cât te mobilizezi, cât reziști, cât de autonom decizi și cât de repede alegi potrivit.<br/><br/>
          <strong>Formulare academică:</strong> voința se descrie prin indicatori precum puterea, perseverența, independența și promptitudinea deciziei, care exprimă intensitatea mobilizării, menținerea efortului, autonomia decizională și rapiditatea alegerii adecvate în raport cu scopul.<br/><br/>
          <strong>Exemplu:</strong> continui să muncești și iei decizii clare sub presiune.
        </span>
      </span>
    </div>

    <hr class="hr-flash">

    ${window.flashPillList([
      {
        text: "💪<span class='tip'><strong>puterea voinței</strong><span class='tooltip-box'><strong>Simplu spus:</strong> cât de intens te mobilizezi.<br/><br/><strong>Formulare academică:</strong> intensitatea mobilizării voluntare în raport cu obstacolele și cerințele sarcinii.<br/><br/><strong>Exemplu:</strong> îți menții efortul deși apare disconfort.</span></span>",
        key: "teal",
      },
      {
        text: "🧱<span class='tip'><strong>perseverența</strong><span class='tooltip-box'><strong>Simplu spus:</strong> cât reziști în timp.<br/><br/><strong>Formulare academică:</strong> menținerea efortului voluntar și a direcției spre scop pe durată îndelungată, în pofida dificultăților.<br/><br/><strong>Exemplu:</strong> lucrezi constant până finalizezi.</span></span>",
        key: "amber",
      },
      {
        text: "🧭<span class='tip'><strong>independența</strong><span class='tooltip-box'><strong>Simplu spus:</strong> decizi pe cont propriu și îți asumi.<br/><br/><strong>Formulare academică:</strong> autonomia în deliberare și decizie, cu asumarea consecințelor conduitei orientate spre scop.<br/><br/><strong>Exemplu:</strong> alegi strategia ta chiar sub presiune socială.</span></span>",
        key: "cyan",
      },
      {
        text: "⚡<span class='tip'><strong>promptitudinea deciziei</strong><span class='tooltip-box'><strong>Simplu spus:</strong> decizi rapid și potrivit.<br/><br/><strong>Formulare academică:</strong> capacitatea de a formula și aplica o decizie adecvată într un timp oportun, după o deliberare suficientă.<br/><br/><strong>Exemplu:</strong> alegi repede opțiunea corectă când timpul este limitat.</span></span>",
        key: "violet",
      },
    ])}
  </div>

</div>`,
        },
        {
          front: "Dezvoltarea capacității efortului voluntar",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Dezvoltarea capacității efortului voluntar</div>

    ${window.flashPillList([
      {
        text: "🔍<span class='tip'><strong>autoreflecție</strong> <span style='opacity:.9'>(observare a mobilizării)</span><span class='tooltip-box'><strong>Simplu spus:</strong> îți observi felul în care te mobilizezi și înveți ce te ajută.<br/><br/><strong>Formulare academică:</strong> dezvoltarea capacității de efort voluntar presupune autoreflecția asupra propriilor mecanisme de mobilizare, prin identificarea condițiilor care cresc sau reduc menținerea conduitei orientate spre scop.<br/><br/><strong>Exemplu:</strong> îți dai seama când obosești, ce te distrage și ce îți crește randamentul.</span></span>",
        key: "teal",
      },
      {
        text: "🧗<span class='tip'><strong>confruntare frecventă și îndelungată cu obstacole</strong> <span style='opacity:.9'>(expunere la dificultate)</span><span class='tooltip-box'><strong>Simplu spus:</strong> te obișnuiești să continui când apare greu.<br/><br/><strong>Formulare academică:</strong> capacitatea de efort voluntar se consolidează prin confruntarea repetată și prelungită cu obstacole, care solicită mobilizare conștientă și antrenează rezistența la dificultate.<br/><br/><strong>Exemplu:</strong> îți asumi sarcini dificile constant, nu doar ocazional.</span></span>",
        key: "amber",
      },
      {
        text: "🛠️<span class='tip'><strong>exersare prin mobilizare conștientă</strong> <span style='opacity:.9'>(exerciții de voință)</span><span class='tooltip-box'><strong>Simplu spus:</strong> îți antrenezi voința prin practică deliberată.<br/><br/><strong>Formulare academică:</strong> efortul voluntar se dezvoltă prin exersare deliberată, constând în mobilizare conștientă a resurselor în activități specifice, cu repetare și creștere graduală a cerințelor.<br/><br/><strong>Exemplu:</strong> îți impui un interval zilnic de lucru fără întreruperi.</span></span>",
        key: "violet",
      },
      {
        text: "📈<span class='tip'><strong>progres pas cu pas susținut</strong> <span style='opacity:.9'>(dificultăți diverse + aprecierea progresului)</span><span class='tooltip-box'><strong>Simplu spus:</strong> crești treptat dificultatea și îți susții progresul prin apreciere și feedback.<br/><br/><strong>Formulare academică:</strong> dezvoltarea capacității de efort voluntar este facilitată prin implicarea în activități cu niveluri variate de dificultate și prin susținerea progresului gradual, prin apreciere și feedback orientat spre pași concreți.<br/><br/><strong>Exemplu:</strong> începi cu 20 de minute de concentrare și crești treptat, notând îmbunătățirile.</span></span>",
        key: "emerald",
      },
    ])}
  </div>

</div>`,
        },
        {
          front: "Etapele actului voluntar",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Actul voluntar</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> vrei, cântărești, alegi, faci și verifici.<br/><br/>
          <strong>Formulare academică:</strong> actul voluntar este o succesiune de etape prin care intenția se transformă în acțiune controlată, de la activarea motivațională și deliberare până la decizie, execuție și evaluarea rezultatului.<br/><br/>
          <strong>Exemplu:</strong> îți propui o sarcină, o planifici, o execuți și apoi verifici rezultatul.
        </span>
      </span>
    </div>

    <hr class="hr-flash">

    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Etapele actului voluntar</div>
    ${window.flashPillList([
      {
        text: "1<span class='tip'><strong>activare motivațională</strong><span class='tooltip-box'><strong>Simplu spus:</strong> apare intenția și un plan inițial.<br/><br/><strong>Formulare academică:</strong> se activează motivul și se formulează intenția orientată spre un scop, împreună cu schița inițială a acțiunii.<br/><br/><strong>Exemplu:</strong> îți propui să înveți pentru test.</span></span>",
        key: "emerald",
      },
      {
        text: "2<span class='tip'><strong>confruntarea motivelor</strong><span class='tooltip-box'><strong>Simplu spus:</strong> compari alternativele și cântărești.<br/><br/><strong>Formulare academică:</strong> are loc deliberarea prin evaluarea alternativelor și a consecințelor, în condițiile concurenței dintre motive.<br/><br/><strong>Exemplu:</strong> alegi între a învăța și a ieși cu prietenii.</span></span>",
        key: "cyan",
      },
      {
        text: "3<span class='tip'><strong>decizia</strong><span class='tooltip-box'><strong>Simplu spus:</strong> alegi un scop și un plan.<br/><br/><strong>Formulare academică:</strong> se stabilește hotărârea de a urma o alternativă, fixând scopul și direcția conduitei.<br/><br/><strong>Exemplu:</strong> decizi să înveți în seara asta.</span></span>",
        key: "amber",
      },
      {
        text: "4<span class='tip'><strong>aplicarea deciziei</strong><span class='tooltip-box'><strong>Simplu spus:</strong> execuți acțiunea, menții efortul.<br/><br/><strong>Formulare academică:</strong> se trece la realizarea efectivă a acțiunii, cu mobilizare voluntară și control conștient, mai ales în prezența obstacolelor.<br/><br/><strong>Exemplu:</strong> începi să înveți și continui chiar când obosești.</span></span>",
        key: "violet",
      },
      {
        text: "5<span class='tip'><strong>verificare și concluzii</strong><span class='tooltip-box'><strong>Simplu spus:</strong> verifici dacă a ieșit și tragi concluzii.<br/><br/><strong>Formulare academică:</strong> se evaluează rezultatul în raport cu scopul, se extrag concluzii și se ajustează conduita viitoare.<br/><br/><strong>Exemplu:</strong> vezi ce ai reținut și îți schimbi metoda dacă a fost nevoie.</span></span>",
        key: "coral",
      },
    ])}
  </div>

</div>`,
        },
      ],
    },
  ],
  "fph-cap11b": [
    {
      id: "deck-t11b-atentia",
      title: "Curs 11B FLASHCARDS",
      cards: [
        {
          front: "Definirea și specificul atenției",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
  <div>
    <span class='tip'><strong>Atenția</strong>
      <span class='tooltip-box'>
        <strong>Simplu spus:</strong> concentrezi activ mintea pe ce este important acum, pentru a înțelege mai bine sau a acționa mai eficient.<br/><br/>
        <strong>Formulare academică:</strong> atenția este proces psihic de activare, tonificare, mobilizare, orientare selectivă și concentrare focalizată a proceselor psihocomportamentale, în vederea unei reflectări optime și facile și sau a unei intervenții eficiente (Popescu Neveanu, 1978, p. 69).<br/><br/>
        <strong>Exemplu:</strong> te concentrezi pe explicația profesorului și reții ideile esențiale.
      </span>
    </span> - capacitatea de a te concentra selectiv pe ce este important acum, ca să înțelegi mai bine sau să acționezi mai eficient.
  </div>
</div>

 <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
  <div class='flash-title' style="${FLASH_TITLE_STYLE}">Specificul atenției</div>

  ${window.flashPillList([
    {
      text: "🧭<span class='tip'><strong>fără conținut informațional propriu</strong><span class='tooltip-box'><strong>Simplu spus:</strong> atenția nu produce informație, ci selectează și organizează ce procesezi deja.<br/><br/><strong>Formulare academică:</strong> atenția nu are conținut informațional specific, funcționând ca mecanism de orientare și reglare a activității psihice prin selecția și susținerea proceselor relevante.<br/><br/><strong>Exemplu:</strong> sprijină percepția și gândirea când rezolvi o problemă.</span></span>",
      key: "teal",
    },
    {
      text: "🔔<span class='tip'><strong>alertare și reflex de orientare</strong><span class='tooltip-box'><strong>Simplu spus:</strong> te pune rapid în stare de „gata de reacție” și te îndreaptă spre ceva nou sau important.<br/><br/><strong>Formulare academică:</strong> atenția implică mecanisme de alertare care cresc nivelul de activare și declanșează reflexul de orientare către stimuli noi sau semnificativi.<br/><br/><strong>Exemplu:</strong> întorci capul imediat la un zgomot neașteptat.</span></span>",
      key: "amber",
    },
    {
      text: "🎯<span class='tip'><strong>selectează și focalizează energia</strong> <span style='opacity:.9'>(favorizează unele, inhibă altele)</span><span class='tooltip-box'><strong>Simplu spus:</strong> întărește ce e relevant și slăbește ce distrage.<br/><br/><strong>Formulare academică:</strong> atenția selectează și focalizează energia neuropsihică, facilitând procesele relevante și inhibând tendințele concurente, pentru eficientizarea activității.<br/><br/><strong>Exemplu:</strong> rămâi pe text și nu mai reacționezi la conversațiile din jur.</span></span>",
      key: "violet",
    },
    {
      text: "🌊<span class='tip'><strong>stabilitate variabilă</strong> <span style='opacity:.9'>(fluctuații și concentrare)</span><span class='tooltip-box'><strong>Simplu spus:</strong> atenția urcă și coboară natural, apoi revine când te reconcentrezi.<br/><br/><strong>Formulare academică:</strong> atenția prezintă grade diferite de stabilitate, manifestând fluctuații ale intensității concentrării și episoade de refocalizare în funcție de sarcină și context.<br/><br/><strong>Exemplu:</strong> după câteva minute de lucru, simți o scădere și apoi te readuci pe sarcină.</span></span>",
      key: "coral",
    },
    {
      text: "🌤️<span class='tip'><strong>veghe</strong> <span style='opacity:.9'>(activare difuză)</span><span class='tooltip-box'><strong>Simplu spus:</strong> ești treaz și disponibil, fără o țintă precisă.<br/><br/><strong>Formulare academică:</strong> starea de veghe reprezintă activare difuză și disponibilitate generală, care pregătește organismul pentru recepție și reacție.<br/><br/><strong>Exemplu:</strong> stai atent „în general” în clasă, înainte să înceapă sarcina.</span></span>",
      key: "cyan",
    },
    {
      text: "🔍<span class='tip'><strong>vigilență</strong> <span style='opacity:.9'>(explorare activă)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cauți intenționat și monitorizezi activ ce e important.<br/><br/><strong>Formulare academică:</strong> starea de vigilență constă în explorare activă și orientare intenționată către semnale relevante, cu monitorizare susținută a mediului sau a sarcinii.<br/><br/><strong>Exemplu:</strong> urmărești constant indicii într-un test sau într-o situație de supraveghere.</span></span>",
      key: "emerald",
    },
    {
      text: "⚙️<span class='tip'><strong>factor dinamogen</strong> <span style='opacity:.9'>(susține cognitivul și afectivul)</span><span class='tooltip-box'><strong>Simplu spus:</strong> crește energia și eficiența, atât în înțelegere, cât și în trăiri și control.<br/><br/><strong>Formulare academică:</strong> atenția funcționează ca factor dinamogen (dinamogen - dă energie și crește randamentul), susținând și amplificând activitatea cognitivă și afectivă prin creșterea energiei disponibile și a eficienței funcționale.<br/><br/><strong>Exemplu:</strong> înțelegi mai bine și îți gestionezi mai bine reacțiile când ești atent.</span></span>",
      key: "amber",
    },
  ])}

</div>


</div>`,
        },

        {
          front: "Tipuri de atenție",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Tipuri de atenție</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> atenția poate fi spontană, controlată sau ajunge aproape automată prin exercițiu.<br/><br/>
          <strong>Formulare academică:</strong> atenția se organizează în trei forme principale, diferențiate prin gradul de control conștient și prin rolul scopului: involuntară, voluntară și postvoluntară.<br/><br/>
          <strong>Exemplu:</strong> un zgomot te atrage singur, apoi te concentrezi intenționat, iar după exercițiu rămâi concentrat cu efort mic.
        </span>
      </span>
    </div>

    <hr class="hr-flash">

    ${window.flashPillList([
      {
        text: "⚡<span class='tip'><strong>involuntară</strong><span class='tooltip-box'><strong>Simplu spus:</strong> apare singură, când ceva e nou sau puternic.<br/><br/><strong>Formulare academică:</strong> atenția involuntară este declanșată spontan de stimuli noi, intensi sau semnificativi, fără intenție și fără control conștient stabil.<br/><br/><strong>Exemplu:</strong> te întorci imediat la un sunet neașteptat.</span></span>",
        key: "amber",
      },
      {
        text: "🎯<span class='tip'><strong>voluntară</strong><span class='tooltip-box'><strong>Simplu spus:</strong> o controlezi, pentru că ai un scop clar.<br/><br/><strong>Formulare academică:</strong> atenția voluntară este orientarea selectivă realizată prin control conștient, susținută de scop și de efort de menținere a concentrării în pofida distragerilor.<br/><br/><strong>Exemplu:</strong> rămâi la învățat chiar dacă ai telefonul lângă tine.</span></span>",
        key: "teal",
      },
      {
        text: "🔁<span class='tip'><strong>postvoluntară</strong><span class='tooltip-box'><strong>Simplu spus:</strong> după exercițiu, te concentrezi ușor, aproape fără efort.<br/><br/><strong>Formulare academică:</strong> atenția postvoluntară este forma stabilizată prin exercițiu, în care concentrarea se menține cu consum energetic redus, datorită interiorizării și automatizării modului de lucru.<br/><br/><strong>Exemplu:</strong> după practică, citești concentrat fără să te forțezi.</span></span>",
        key: "violet",
      },
    ])}

    <hr class="hr-flash">

    <div>
      <span class='tip'><strong>Avantajul atenției postvoluntare</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> rămâi atent cu efort mai mic și eficiență mai mare.<br/><br/>
          <strong>Formulare academică:</strong> atenția postvoluntară asigură concentrare stabilă cu consum energetic redus, crescând randamentul activității prin menținerea selectivității fără efort voluntar intens.<br/><br/>
          <strong>Exemplu:</strong> lucrezi fluent după ce ai prins rutina.
        </span>
      </span>
    </div>
  </div>

</div>`,
        },

        {
          front: "Modalități de favorizare și educare a atenției voluntare",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Favorizarea atenției voluntare</div>

    ${window.flashPillList([
      {
        text: "🎯<span class='tip'><strong>scopuri clare</strong><span class='tooltip-box'><strong>Simplu spus:</strong> știi exact ce urmărești în activitate.<br/><br/><strong>Formulare academică:</strong> stabilirea unui scop explicit structurează orientarea selectivă și susține menținerea atenției voluntare prin clarificarea criteriilor de relevanță.<br/><br/><strong>Exemplu:</strong> îți propui să rezolvi 10 itemi, nu doar să citești la întâmplare.</span></span>",
        key: "teal",
      },
      {
        text: "🧩<span class='tip'><strong>semnificație personală</strong><span class='tooltip-box'><strong>Simplu spus:</strong> înțelegi de ce contează pentru tine.<br/><br/><strong>Formulare academică:</strong> atribuirea de semnificație personală crește implicarea și stabilizează atenția voluntară prin întărirea valorii scopului și a motivației de menținere.<br/><br/><strong>Exemplu:</strong> rămâi atent când vezi legătura cu un obiectiv important pentru tine.</span></span>",
        key: "amber",
      },
      {
        text: "⚠️<span class='tip'><strong>momente dificile anticipate</strong><span class='tooltip-box'><strong>Simplu spus:</strong> te pregătești dinainte pentru obstacole și căderi de concentrare.<br/><br/><strong>Formulare academică:</strong> anticiparea dificultăților permite planificarea strategiilor de reglare și reduce impactul perturbatorilor asupra menținerii atenției voluntare.<br/><br/><strong>Exemplu:</strong> știi că obosești după 20 de minute și planifici o pauză scurtă.</span></span>",
        key: "coral",
      },
      {
        text: "🌿<span class='tip'><strong>ambianță favorabilă</strong><span class='tooltip-box'><strong>Simplu spus:</strong> îți construiești un context care te ajută să te concentrezi.<br/><br/><strong>Formulare academică:</strong> organizarea ambianței reduce stimulii concurenți și susține orientarea selectivă prin condiții stabile de lucru.<br/><br/><strong>Exemplu:</strong> lumină bună, spațiu ordonat, materiale pregătite.</span></span>",
        key: "emerald",
      },
      {
        text: "🔕<span class='tip'><strong>reducerea perturbatorilor</strong><span class='tooltip-box'><strong>Simplu spus:</strong> tai distragerile ca să nu concureze cu sarcina.<br/><br/><strong>Formulare academică:</strong> reducerea perturbatorilor scade competiția dintre stimuli și optimizează selecția informației relevante pentru sarcină, crescând stabilitatea atenției voluntare.<br/><br/><strong>Exemplu:</strong> oprești notificările când înveți.</span></span>",
        key: "violet",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Educarea atenției voluntare</div>

    ${window.flashPillList([
      {
        text: "🧱<span class='tip'><strong>organizare cu sens</strong><span class='tooltip-box'><strong>Simplu spus:</strong> materialul este structurat clar și logic.<br/><br/><strong>Formulare academică:</strong> structurarea cu sens a conținutului sprijină orientarea selectivă și reduce încărcarea inutilă, facilitând menținerea atenției voluntare.<br/><br/><strong>Exemplu:</strong> înveți pe idei principale și subidei, nu pe fragmente izolate.</span></span>",
        key: "teal",
      },
      {
        text: "🎯<span class='tip'><strong>semnificație și motivare</strong><span class='tooltip-box'><strong>Simplu spus:</strong> legi activitatea de un scop personal și motivant.<br/><br/><strong>Formulare academică:</strong> motivarea și semnificația scopului susțin persistența atenției voluntare prin creșterea valorii sarcinii și a disponibilității pentru efort conștient.<br/><br/><strong>Exemplu:</strong> stabilești pentru ce anume îți folosește ce înveți.</span></span>",
        key: "amber",
      },
      {
        text: "🔦<span class='tip'><strong>elemente importante evidențiate</strong><span class='tooltip-box'><strong>Simplu spus:</strong> știi care sunt punctele cheie pe care trebuie să le urmărești.<br/><br/><strong>Formulare academică:</strong> evidențierea elementelor esențiale clarifică ținta atențională și optimizează selecția informației relevante.<br/><br/><strong>Exemplu:</strong> subliniezi definiții și criterii, nu tot paragraful.</span></span>",
        key: "cyan",
      },
      {
        text: "🎛️<span class='tip'><strong>varietate controlată</strong><span class='tooltip-box'><strong>Simplu spus:</strong> schimbi forma activității fără să pierzi firul sarcinii.<br/><br/><strong>Formulare academică:</strong> varietatea controlată menține interesul și reduce monotonia, fără a fragmenta sarcina, susținând stabilitatea atenției voluntare.<br/><br/><strong>Exemplu:</strong> alternezi cititul cu rezolvarea de itemi pe aceeași temă.</span></span>",
        key: "violet",
      },
    ])}

    <hr class="hr-flash">

    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Fiziologia atenției</div>
    ${window.flashPillList([
      {
        text: "⏱️<span class='tip'><strong>stabilitate limitată</strong><span class='tooltip-box'><strong>Simplu spus:</strong> concentrarea are fluctuații normale, nu poate rămâne constantă mult timp.<br/><br/><strong>Formulare academică:</strong> stabilitatea atenției este limitată fiziologic, manifestând fluctuații ale intensității concentrării, cu scădere a randamentului în absența pauzelor.<br/><br/><strong>Exemplu:</strong> după o perioadă continuă, devii mai ușor distras.</span></span>",
        key: "coral",
      },
      {
        text: "📏<span class='tip'><strong>durată orientativă</strong><span class='tooltip-box'><strong>Simplu spus:</strong> durata concentrării crește cu vârsta, dar rămâne limitată.<br/><br/><strong>Formulare academică:</strong> durata orientativă a menținerii atenției voluntare variază cu vârsta și nivelul de dezvoltare, fiind aproximativ de 10 minute la preșcolari și de aproximativ 30 de minute la adulți, în condiții obișnuite.<br/><br/><strong>Exemplu:</strong> planifici pauze scurte după intervale de lucru.</span></span>",
        key: "emerald",
      },
    ])}
  </div>

</div>`,
        },
      ],
    },
  ],
  "fph-cap12": [
    {
      id: "deck-cap12-limbajul",
      title: "Curs 12 FLASHCARDS",
      cards: [
        {
          front: "Definirea și caracteristicile limbajului și a limbii",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Limbajul</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> folosim cuvinte și reguli comune ca să comunicăm.<br/><br/>
          <strong>Formulare academică:</strong> limbajul este sistem și activitate de comunicare realizată cu ajutorul limbii, prin care se transmit și se prelucrează semnificații în interacțiune socială.<br/><br/>
          <strong>Exemplu:</strong> când vorbești, scrii sau explici ceva.
        </span>
      </span>
      = sistem și activitate de comunicare prin limbă
    </div>

    <hr class="hr-flash">

    <div>
      <span class='tip'><strong>Limba</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> codul comun al unei comunități, cu semne și reguli.<br/><br/>
          <strong>Formulare academică:</strong> limba este un sistem evolutiv hipercomplex de semne și simboluri, constituit social și transmis cultural, care face posibilă comunicarea și organizarea experienței.<br/><br/>
          <strong>Exemplu:</strong> româna, franceza, engleza.
        </span>
      </span>
      = sistem de semne și reguli
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Componentele limbii</div>

    ${window.flashPillList([
      {
        text: "📚<span class='tip'><strong>lexic</strong><span class='tooltip-box'><strong>Simplu spus:</strong> totalul cuvintelor unei limbi.<br/><br/><strong>Formulare academică:</strong> componenta limbii care include unitățile lexicale și relațiile dintre ele, constituind repertoriul de cuvinte utilizabile în comunicare.<br/><br/><strong>Exemplu:</strong> cuvinte precum „carte”, „idee”, „a învăța”.</span></span>",
        key: "teal",
      },
      {
        text: "🧱<span class='tip'><strong>sintactică</strong><span class='tooltip-box'><strong>Simplu spus:</strong> regulile prin care combini cuvintele în propoziții.<br/><br/><strong>Formulare academică:</strong> ansamblul regulilor de combinare a unităților lingvistice în structuri gramaticale corecte, necesare construirii enunțurilor.<br/><br/><strong>Exemplu:</strong> „Eu citesc o carte”, nu „Eu carte citesc o”.</span></span>",
        key: "amber",
      },
      {
        text: "💬<span class='tip'><strong>semantică</strong><span class='tooltip-box'><strong>Simplu spus:</strong> sensurile cuvintelor și ale propozițiilor.<br/><br/><strong>Formulare academică:</strong> componenta care studiază și organizează semnificațiile unităților lingvistice și relațiile de sens dintre ele, la nivel lexical și propozițional.<br/><br/><strong>Exemplu:</strong> diferența dintre „rece” ca temperatură și „rece” ca atitudine.</span></span>",
        key: "violet",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Caracteristici ale limbajului</div>

    ${window.flashPillList([
      {
        text: "⚙️<span class='tip'><strong>dinamic</strong><span class='tooltip-box'><strong>Simplu spus:</strong> se adaptează contextului și situației.<br/><br/><strong>Formulare academică:</strong> limbajul are caracter dinamic, actualizându-se diferențiat în funcție de context, scop și interlocutor, prin selectarea și ajustarea mijloacelor expresive.<br/><br/><strong>Exemplu:</strong> vorbești diferit la examen decât cu prietenii.</span></span>",
        key: "teal",
      },
      {
        text: "💡<span class='tip'><strong>interdependent cu gândirea</strong><span class='tooltip-box'><strong>Simplu spus:</strong> te ajută să gândești mai clar, iar gândirea îl structurează.<br/><br/><strong>Formulare academică:</strong> limbajul mediază gândirea, oferind instrumente de reprezentare, categorizare și raționare, iar structurile cognitive influențează producerea și înțelegerea enunțurilor.<br/><br/><strong>Exemplu:</strong> când formulezi în cuvinte, îți ordonezi ideile.</span></span>",
        key: "amber",
      },
      {
        text: "🧩<span class='tip'><strong>condensarea informației</strong><span class='tooltip-box'><strong>Simplu spus:</strong> spui mult prin forme scurte.<br/><br/><strong>Formulare academică:</strong> limbajul permite condensarea informației prin simbolizare și economie expresivă, astfel încât conținuturi complexe pot fi comprimate în unități scurte, ușor de operat cognitiv.<br/><br/><strong>Exemplu:</strong> un termen precum „democrație” comprimă un set mare de idei.</span></span>",
        key: "violet",
      },
      {
        text: "👶<span class='tip'><strong>dezvoltare progresivă</strong><span class='tooltip-box'><strong>Simplu spus:</strong> se formează treptat, de la simplu la complex.<br/><br/><strong>Formulare academică:</strong> limbajul se dezvoltă progresiv, prin trecerea de la structuri elementare la enunțuri complexe, pe măsura maturizării și a experienței socio-culturale.<br/><br/><strong>Exemplu:</strong> de la „mami apă” la propoziții compuse.</span></span>",
        key: "emerald",
      },
    ])}
  </div>

</div>`,
        },

        {
          front: "Funcțiile limbajului",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Funcțiile limbajului</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> limbajul transmite, organizează gândirea și ghidează acțiunea.<br/><br/>
          <strong>Formulare academică:</strong> limbajul îndeplinește funcții comunicative, cognitive și reglatorii, susținând atât schimbul social de semnificații, cât și reprezentarea și conducerea comportamentului orientat spre scop.<br/><br/>
          <strong>Exemplu:</strong> explici o idee, îți clarifici un plan și apoi îl urmezi.
        </span>
      </span>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Funcții principale</div>

    ${window.flashPillList([
      {
        text: "🤝<span class='tip'><strong>comunicativă</strong><span class='tooltip-box'><strong>Simplu spus:</strong> transmiți informații și construiești relații.<br/><br/><strong>Formulare academică:</strong> funcția comunicativă permite schimbul de semnificații, coordonarea interacțiunilor și transmiterea intențiilor, emoțiilor și cunoștințelor între interlocutori.<br/><br/><strong>Exemplu:</strong> dai instrucțiuni sau explici ce simți.</span></span>",
        key: "teal",
      },
      {
        text: "💡<span class='tip'><strong>cognitivă</strong><span class='tooltip-box'><strong>Simplu spus:</strong> te ajută să gândești, să înțelegi și să raționezi.<br/><br/><strong>Formulare academică:</strong> funcția cognitivă susține reprezentarea mentală, formarea conceptelor, judecățile și raționamentele, fiind instrument central al prelucrării cognitive.<br/><br/><strong>Exemplu:</strong> formulezi o concluzie după ce compari idei.</span></span>",
        key: "amber",
      },
      {
        text: "🧭<span class='tip'><strong>reglatorie</strong><span class='tooltip-box'><strong>Simplu spus:</strong> îți conduce acțiunea și autocontrolul.<br/><br/><strong>Formulare academică:</strong> funcția reglatorie direcționează și controlează conduita prin formularea scopurilor, planificare, auto-instrucțiuni și monitorizarea execuției, facilitând autoreglarea comportamentală.<br/><br/><strong>Exemplu:</strong> îți spui „pas cu pas” și continui să lucrezi.</span></span>",
        key: "violet",
      },
    ])}
  </div>

</div>`,
        },

        {
          front: "Tipuri de limbaj",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Tipuri de limbaj</div>
    <img
  src="Assets/Schema tipurilor de limbaj.png"
  alt="Schema tipurilor de limbaj"
  style="max-width:100%;height:auto;display:block;margin:0 auto;"
/>


    ${window.flashPillList([
      {
        text: "🗣️<span class='tip'><strong>limbaj oral</strong> <span style='opacity:.9'>comunicare prin vorbire</span><span class='tooltip-box'><strong>Simplu spus:</strong> vorbești direct și primești reacție imediat.<br/><br/><strong>Formulare academică:</strong> formă de limbaj verbal realizată prin sunete articulate, în situații de comunicare directă, cu feedback imediat și adaptare rapidă la interlocutor.<br/><br/><strong>Exemplu:</strong> discuție față în față.</span></span>",
        key: "violet",
      },
      {
        text: "✍️<span class='tip'><strong>limbaj scris</strong> <span style='opacity:.9'>comunicare prin text</span><span class='tooltip-box'><strong>Simplu spus:</strong> transmiți idei prin scriere, fără prezență directă.<br/><br/><strong>Formulare academică:</strong> formă de limbaj verbal mediat grafic, caracterizată prin stabilitate a mesajului, organizare sintactică mai riguroasă și posibilitate de revizuire.<br/><br/><strong>Exemplu:</strong> eseu, email, notițe.</span></span>",
        key: "teal",
      },
      {
        text: "💬<span class='tip'><strong>limbaj verbal</strong> <span style='opacity:.9'>cuvinte și reguli</span><span class='tooltip-box'><strong>Simplu spus:</strong> comunici prin cuvinte, vorbite sau scrise.<br/><br/><strong>Formulare academică:</strong> utilizarea limbii ca sistem de semne verbale, în formă orală sau scrisă, pentru transmiterea explicită a semnificațiilor.<br/><br/><strong>Exemplu:</strong> explici o idee în propoziții.</span></span>",
        key: "cyan",
      },
      {
        text: "🎙️<span class='tip'><strong>limbaj paraverbal</strong> <span style='opacity:.9'>cum spui cuvintele</span><span class='tooltip-box'><strong>Simplu spus:</strong> tonul și ritmul schimbă cum e înțeles mesajul.<br/><br/><strong>Formulare academică:</strong> ansamblu de caracteristici vocale ale enunțului, precum intonația, accentul, ritmul și intensitatea, care nuanțează și modifică sensul mesajului verbal.<br/><br/><strong>Exemplu:</strong> aceeași propoziție spusă calm sau iritat.</span></span>",
        key: "coral",
      },
      {
        text: "🙌<span class='tip'><strong>limbaj nonverbal</strong> <span style='opacity:.9'>mesaje prin corp</span><span class='tooltip-box'><strong>Simplu spus:</strong> comunici fără cuvinte, prin gesturi și mimică.<br/><br/><strong>Formulare academică:</strong> transmiterea semnificațiilor prin expresii faciale, gesturi, postură și comportamente corporale, care completează sau contrazic mesajul verbal.<br/><br/><strong>Exemplu:</strong> zâmbet, ridicat din umeri, privire evitantă.</span></span>",
        key: "emerald",
      },
      {
        text: "🌍<span class='tip'><strong>limbaj extern</strong> <span style='opacity:.9'>adresat altora</span><span class='tooltip-box'><strong>Simplu spus:</strong> tot ce exprimi spre exterior, pentru comunicare.<br/><br/><strong>Formulare academică:</strong> limbaj produs în interacțiune socială, orientat către interlocutori, în formă orală sau scrisă, cu funcție predominant comunicativă.<br/><br/><strong>Exemplu:</strong> prezentare, conversație, mesaj.</span></span>",
        key: "amber",
      },
      {
        text: "💭<span class='tip'><strong>limbaj intern</strong> <span style='opacity:.9'>vorbirea din minte</span><span class='tooltip-box'><strong>Simplu spus:</strong> îți vorbești în gând ca să te organizezi.<br/><br/><strong>Formulare academică:</strong> formă concentrată și tăcută de limbaj, specifică existenței mintale, cu rol central în autoreglarea gândirii și a conduitei, prin auto-instrucțiuni și planificare.<br/><br/><strong>Exemplu:</strong> „acum fac pasul unu, apoi pasul doi”.</span></span>",
        key: "slate",
      },
    ])}
  </div>

</div>`,
        },
        {
          front: "Descrie limbajul intern",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Limbajul intern</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> vorbirea din minte, prin care îți organizezi gândirea și îți controlezi acțiunile.<br/><br/>
          <strong>Formulare academică:</strong> limbajul intern este o modalitate esențială, specifică existenței mintale a omului, vehicul de sens în formă pură și concentrată și actualizator de semnificații, având rol central în autoreglarea acțiunilor și comportamentelor (Popescu Neveanu, 1978).<br/><br/>
          <strong>Exemplu:</strong> îți spui în gând pașii unei rezolvări și te corectezi pe parcurs.
        </span>
      </span> - vorbirea din minte care ghidează gândirea și autoreglează acțiunea
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Idei cheie</div>

    ${window.flashPillList([
      {
        text: "🚗<span class='tip'><strong>vehicul de sens</strong> <span style='opacity:.9'>miezul ideii</span><span class='tooltip-box'><strong>Simplu spus:</strong> în minte păstrezi esența, nu formulezi tot enunțul.<br/><br/><strong>Formulare academică:</strong> limbajul intern funcționează ca vehicul de sens în formă concentrată, orientat spre semnificație, nu spre enunț complet.<br/><br/><strong>Exemplu:</strong> îți spui doar verific, nu o propoziție întreagă.</span></span>",
        key: "teal",
      },
      {
        text: "💡<span class='tip'><strong>caracter predicativ</strong> <span style='opacity:.9'>condensat în sens</span><span class='tooltip-box'><strong>Simplu spus:</strong> exprimă rapid ce contează pentru acțiune, fără detalii inutile.<br/><br/><strong>Formulare academică:</strong> limbajul intern are caracter predicativ, fiind comprimat și orientat către sens, ceea ce îi crește eficiența ca instrument al gândirii (Vîgotski).<br/><br/><strong>Exemplu:</strong> îți spui gata, rezolv și treci la execuție.</span></span>",
        key: "amber",
      },
      {
        text: "🔃<span class='tip'><strong>autoreglare</strong> <span style='opacity:.9'>control și autocontrol</span><span class='tooltip-box'><strong>Simplu spus:</strong> îți dai instrucțiuni și îți ajustezi comportamentul ca să rămâi pe scop.<br/><br/><strong>Formulare academică:</strong> limbajul intern susține reglajul voluntar prin monitorizarea conștientă a acțiunii și corectarea conduitei în funcție de criterii interne.<br/><br/><strong>Exemplu:</strong> îți spui calm, continuă, verifică și îți menții controlul.</span></span>",
        key: "violet",
      },
      {
        text: "⚙️<span class='tip'><strong>mecanism general al conștiinței</strong> <span style='opacity:.9'>punct nodal</span><span class='tooltip-box'><strong>Simplu spus:</strong> leagă mai multe procese psihice într un mod unitar.<br/><br/><strong>Formulare academică:</strong> limbajul intern este punct nodal al relațiilor dintre diverse procese și fenomene psihice, având funcție integratoare la nivelul conștiinței (Ananiev).<br/><br/><strong>Exemplu:</strong> îți clarifici un plan și îți coordonezi atenția, memoria și acțiunea.</span></span>",
        key: "coral",
      },
    ])}
  </div>

</div>`,
        },

        {
          front: "Descrie dezvoltarea limbajului la Vîgotski",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Dezvoltarea limbajului la Vîgotski</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> vorbirea cu voce tare se interiorizează treptat și devine limbaj intern, care susține gândirea și autocontrolul.<br/><br/>
          <strong>Formulare academică:</strong> limbajul extern se transformă progresiv, prin internalizare, în limbaj intern, care devine instrument al gândirii, al autoreflecției și al reglării conduitei, în context socio cultural, prin interacțiunea cu Altul (Vîgotski).<br/><br/>
          <strong>Exemplu:</strong> acum fac asta spus cu voce tare devine un ghidaj tăcut al acțiunii.
        </span>
      </span>
    </div>

    <hr class="hr-flash">

    <div style="display:grid;gap:10px;">
      <div><strong>Progresul</strong>: vorbire cu voce tare pentru sine → vorbire socială → limbaj intern</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Etapele</div>

    ${window.flashPillList([
      {
        text: "<span class='tip'><strong>vorbire egocentrică</strong> <span style='opacity:.9'>pentru sine</span><span class='tooltip-box'><strong>Simplu spus:</strong> copilul își spune pașii cu voce tare ca să se conducă singur.<br/><br/><strong>Formulare academică:</strong> vorbirea egocentrică funcționează ca instrument de organizare a acțiunii și pregătește trecerea spre autoreglarea internă.<br/><br/><strong>Exemplu:</strong> acum pun piesa aici.</span></span>",
        key: "teal",
      },
      {
        text: "<span class='tip'><strong>vorbire socială</strong> <span style='opacity:.9'>către celălalt</span><span class='tooltip-box'><strong>Simplu spus:</strong> vorbirea devine comunicare reală și se modelează după interlocutor.<br/><br/><strong>Formulare academică:</strong> interacțiunea socială structurează vorbirea și o face dependentă de reguli, feedback și context, susținând învățarea socio culturală.<br/><br/><strong>Exemplu:</strong> explici și ajustezi ce spui după reacția celuilalt.</span></span>",
        key: "amber",
      },
      {
        text: "<span class='tip'><strong>limbaj intern</strong> <span style='opacity:.9'>interiorizat</span><span class='tooltip-box'><strong>Simplu spus:</strong> vorbirea se mută în minte și devine ghidaj rapid al gândirii și acțiunii.<br/><br/><strong>Formulare academică:</strong> prin internalizare, vorbirea externă se transformă în limbaj intern, instrument al conștiinței, al controlului și al autocontrolului (Vîgotski).<br/><br/><strong>Exemplu:</strong> îți spui în gând fă pasul următor și execuți.</span></span>",
        key: "violet",
      },
    ])}
  </div>

</div>`,
        },
      ],
    },
  ],
  "fph-cap13": [
    {
      id: "deck-t13-personalitate",
      title: "Curs 13 Personalitatea FLASHCARDS",
      cards: [
        {
          front: "Definește personalitatea",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Personalitatea</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> ceea ce rămâne relativ stabil la o persoană și se vede în felul ei de a gândi, simți și acționa.<br/><br/>
          <strong>Formulare academică:</strong> personalitatea este un macrosistem de invarianți informaționali și operaționali, relativ stabili, exprimați în conduită, care asigură unitatea și specificul individului în raport cu mediul (Popescu Neveanu, 1978).<br/><br/>
          <strong>Exemplu:</strong> un stil constant de relaționare și reacție în situații diferite.
        </span>
      </span>
      = macrosistem de invarianți exprimați în conduită
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Caracteristici esențiale</div>

    ${window.flashPillList([
      {
        text: "📌<span class='tip'><strong>stabilitate relativă</strong> <span style='opacity:.9'>(invarianți în timp)</span><span class='tooltip-box'><strong>Simplu spus:</strong> se repetă în timp, nu se schimbă de la o zi la alta.<br/><br/><strong>Formulare academică:</strong> personalitatea include structuri relativ stabile care conferă continuitate și predictibilitate conduitei.<br/><br/><strong>Exemplu:</strong> reacționezi consecvent la critică sau la presiune.</span></span>",
        key: "teal",
      },
      {
        text: "🧭<span class='tip'><strong>exprimare în conduită</strong> <span style='opacity:.9'>(se vede în comportament)</span><span class='tooltip-box'><strong>Simplu spus:</strong> nu e doar în cap, se observă în acțiuni.<br/><br/><strong>Formulare academică:</strong> trăsăturile și structurile personalității devin observabile prin alegeri, reacții și stiluri de comportament în contexte reale.<br/><br/><strong>Exemplu:</strong> modul în care iei decizii și îți ții promisiunile.</span></span>",
        key: "amber",
      },
    ])}
  </div>

</div>`,
        },

        {
          front:
            "Explică Teoria trăsăturilor de personalitate (Gordon Allport)",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Teoria trăsăturilor de personalitate</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> personalitatea se descrie prin trăsături, adică predispoziții stabile de a reacționa într un anumit fel.<br/><br/>
          <strong>Formulare academică:</strong> trăsăturile sunt predispoziții relativ stabile de răspuns, care organizează conduita și fac comportamentul coerent și predictibil în contexte variate.<br/><br/>
          <strong>Exemplu:</strong> sociabilitate constantă în grupuri diferite.
        </span>
      </span> - predispoziții stabile de reacție care organizează comportamentul și îl fac coerent și predictibil în situații diverse.
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Ierarhia trăsăturilor</div>

    ${window.flashPillList([
      {
        text: "🏔️<span class='tip'><strong>trăsături cardinale</strong> <span style='opacity:.9'>dominante</span><span class='tooltip-box'><strong>Simplu spus:</strong> o trăsătură foarte puternică, care colorează aproape tot.<br/><br/><strong>Formulare academică:</strong> trăsături rare, pervazive, care pot organiza major conduita și identitatea persoanei.<br/><br/><strong>Exemplu:</strong> ambiție care domină constant alegerile.</span></span>",
        key: "violet",
      },
      {
        text: "🧩<span class='tip'><strong>trăsături centrale</strong> <span style='opacity:.9'>importante</span><span class='tooltip-box'><strong>Simplu spus:</strong> trăsături principale, observabile frecvent.<br/><br/><strong>Formulare academică:</strong> trăsături stabile și relevante, care descriu profilul de bază al persoanei.<br/><br/><strong>Exemplu:</strong> responsabil, calm, cooperant.</span></span>",
        key: "teal",
      },
      {
        text: "🪶<span class='tip'><strong>trăsături secundare</strong> <span style='opacity:.9'>contextuale</span><span class='tooltip-box'><strong>Simplu spus:</strong> apar în anumite situații, nu mereu.<br/><br/><strong>Formulare academică:</strong> dispoziții mai puțin stabile și mai dependente de context, cu rol descriptiv limitat.<br/><br/><strong>Exemplu:</strong> timiditate doar în situații publice.</span></span>",
        key: "amber",
      },
    ])}

</div>`,
        },

        {
          front: "Expune „Cei 16 factori ai personalității” (Cattell)",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Cei 16 factori ai personalității</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> în loc să memorezi 16 etichete, reții ideea că personalitatea poate fi descrisă prin câteva dimensiuni stabile, iar fiecare persoană se poziționează între doi poli opuși pe fiecare dimensiune.<br/><br/>
          <strong>Formulare academică:</strong> modelul lui Cattell descrie personalitatea prin factori primari extrași prin analiză factorială, înțeleși ca dimensiuni relativ stabile, bipolare, care sintetizează regularități comportamentale și permit descrierea și predicția conduitei prin scoruri de poziționare între poli.<br/><br/>
          <strong>Exemplu:</strong> două persoane pot fi la poli diferiți pe aceeași dimensiune, una mai rezervată, alta mai sociabilă.
        </span>
      </span> - Personalitatea este descrisă prin dimensiuni stabile, cu doi poli opuși, identificate statistic, iar comportamentul se anticipează din poziția ta pe aceste dimensiuni.
    </div>

    <hr class="hr-flash">

    <div style="display:grid;gap:10px;">
      <div><strong>Vizual</strong>: observații multe de comportament → grupare prin analiză → dimensiuni stabile (factori) → poziționare între doi poli → predicție a stilului de reacție</div>
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Secțiune explicativă</div>

    ${window.flashPillList([
      {
        text: "1️⃣<span class='tip'><strong>De unde vin factorii</strong> <span style='opacity:.9'>comportamente grupate</span><span class='tooltip-box'><strong>Simplu spus:</strong> pornești de la multe descrieri și vezi ce se repetă împreună.<br/><br/><strong>Formulare academică:</strong> factorii sunt extrași prin analiză factorială ca nuclee comune care explică variația covariantă dintre multe comportamente și descrieri psihologice.<br/><br/><strong>Exemplu:</strong> dacă mai multe reacții sociale apar împreună, ele indică o dimensiune comună.</span></span>",
        key: "teal",
      },
      {
        text: "2️⃣<span class='tip'><strong>Ce este un factor</strong> <span style='opacity:.9'>dimensiune stabilă</span><span class='tooltip-box'><strong>Simplu spus:</strong> un factor este o axă de personalitate care se menține relativ stabilă în timp.<br/><br/><strong>Formulare academică:</strong> factorul reprezintă o dimensiune latentă relativ stabilă ce organizează regularități ale conduitei și diferențiază indivizii prin niveluri distincte.<br/><br/><strong>Exemplu:</strong> un stil constant de interacțiune, observabil în contexte variate.</span></span>",
        key: "amber",
      },
      {
        text: "3️⃣<span class='tip'><strong>De ce sunt bipolari</strong> <span style='opacity:.9'>doi poli opuși</span><span class='tooltip-box'><strong>Simplu spus:</strong> fiecare dimensiune are două extreme, iar tu ești undeva între ele.<br/><br/><strong>Formulare academică:</strong> dimensiunile sunt descrise prin poli opuși care exprimă variația continuă a unei trăsături, permițând măsurarea poziționării individuale pe un continuum.<br/><br/><strong>Exemplu:</strong> rezervat ↔ sociabil, relaxat ↔ tensionat.</span></span>",
        key: "violet",
      },
      {
        text: "4️⃣<span class='tip'><strong>Cum se folosesc</strong> <span style='opacity:.9'>profil, nu etichetă</span><span class='tooltip-box'><strong>Simplu spus:</strong> important e profilul tău pe mai multe axe, nu un singur cuvânt.<br/><br/><strong>Formulare academică:</strong> descrierea personalității rezultă din configurația scorurilor pe mai multe dimensiuni, care împreună conturează un profil individual diferențiat și relativ coerent.<br/><br/><strong>Exemplu:</strong> poți fi sociabil, dar și prudent și foarte organizat.</span></span>",
        key: "coral",
      },
      {
        text: "5️⃣<span class='tip'><strong>De ce ajută</strong> <span style='opacity:.9'>predicție de stil</span><span class='tooltip-box'><strong>Simplu spus:</strong> factorii sugerează cum reacționezi de obicei, mai ales în situații tipice.<br/><br/><strong>Formulare academică:</strong> scorurile pe dimensiuni permit estimarea probabilității unor tipare de răspuns și a compatibilității dintre cerințele situației și stilul personal de funcționare.<br/><br/><strong>Exemplu:</strong> un scor ridicat la tensiune indică predispoziția la agitație sub presiune.</span></span>",
        key: "emerald",
      },
    ])}
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Cum înțelegi fără memorare</div>

    ${window.flashPillList([
      {
        text: "🧭<span class='tip'><strong>Principiul cheie</strong> <span style='opacity:.9'>16 axe, un profil</span><span class='tooltip-box'><strong>Simplu spus:</strong> fiecare factor este o axă, iar personalitatea ta este combinația pozițiilor pe axe.<br/><br/><strong>Formulare academică:</strong> personalitatea este descrisă ca un sistem de dimensiuni intercorelate, în care profilul factorial oferă o reprezentare sintetică și comparabilă între indivizi.<br/><br/><strong>Exemplu:</strong> doi oameni pot avea același scor la sociabilitate, dar diferă prin stabilitate emoțională și perfecționism.</span></span>",
        key: "amber",
      },
    ])}
  </div>

</div>`,
        },

        {
          front: "Descrie Teoria psihosocială a lui Erik Erikson",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Teoria psihosocială (Erikson)</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> viața are etape, iar fiecare etapă are un conflict care îți modelează personalitatea.<br/><br/>
          <strong>Formulare academică:</strong> dezvoltarea personalității se desfășoară în 8 stadii psihosociale, fiecare definit de un conflict central; modul de rezolvare a conflictului produce achiziții psihosociale care susțin adaptarea ulterioară.<br/><br/>
          <strong>Exemplu:</strong> în adolescență, conflictul identitate versus confuzie de rol.
        </span>
      </span> - dezvoltarea personalității trece prin 8 etape, fiecare cu un conflict central, iar felul în care îl rezolvi produce resurse psihosociale pentru etapele următoare.
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Cele 8 stadii</div>

    ${window.flashPillList([
      {
        text: "1️⃣<span class='tip'><strong>încredere versus neîncredere</strong> <span style='opacity:.9'>(Infantil 0-1 an)</span><span class='tooltip-box'><strong>Simplu spus:</strong> lumea e sigură sau nu.<br/><br/><strong>Formulare academică:</strong> calitatea îngrijirii structurează sentimentul de bază al securității și al predictibilității mediului.<br/><br/><strong>Exemplu:</strong> atașament sigur când nevoile sunt împlinite consecvent.</span></span>",
        key: "teal",
      },
      {
        text: "2️⃣<span class='tip'><strong>autonomie versus rușine și îndoială</strong> <span style='opacity:.9'>(Copilăria mică 1-3 ani)</span><span class='tooltip-box'><strong>Simplu spus:</strong> pot singur sau mă simt incapabil.<br/><br/><strong>Formulare academică:</strong> exersarea controlului personal produce autonomie, iar criticarea excesivă produce rușine și îndoială.<br/><br/><strong>Exemplu:</strong> învață să se îmbrace singur.</span></span>",
        key: "amber",
      },
      {
        text: "3️⃣<span class='tip'><strong>inițiativă versus vinovăție</strong> <span style='opacity:.9'>(Copilăria mijlocie 3-6 ani)</span><span class='tooltip-box'><strong>Simplu spus:</strong> încerc și inițiez sau mă opresc de frică.<br/><br/><strong>Formulare academică:</strong> explorarea și inițierea acțiunii dezvoltă inițiativa, iar sancționarea rigidă produce vinovăție inhibitoare.<br/><br/><strong>Exemplu:</strong> propune jocuri și reguli.</span></span>",
        key: "violet",
      },
      {
        text: "4️⃣<span class='tip'><strong>hărnicie versus inferioritate</strong> <span style='opacity:.9'>(Copilăria mare 6-12 ani)</span><span class='tooltip-box'><strong>Simplu spus:</strong> pot face bine sau mă simt slab.<br/><br/><strong>Formulare academică:</strong> succesul în sarcini și recunoașterea competenței produc hărnicie, iar eșecul repetat produce inferioritate.<br/><br/><strong>Exemplu:</strong> mândrie după o temă reușită.</span></span>",
        key: "coral",
      },
      {
        text: "5️⃣<span class='tip'><strong>identitate versus confuzie de rol</strong> <span style='opacity:.9'>(Adolescența 12-18 ani)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cine sunt sau mă pierd în roluri.<br/><br/><strong>Formulare academică:</strong> integrarea experiențelor și a valorilor conduce la identitate coerentă, iar lipsa integrării produce confuzie de rol.<br/><br/><strong>Exemplu:</strong> își clarifică direcția profesională.</span></span>",
        key: "emerald",
      },
      {
        text: "6️⃣<span class='tip'><strong>intimitate versus izolare</strong> <span style='opacity:.9'>(Adultul tânăr 18-35)</span><span class='tooltip-box'><strong>Simplu spus:</strong> pot construi relații profunde sau mă retrag.<br/><br/><strong>Formulare academică:</strong> capacitatea de angajament emoțional produce intimitate, iar evitarea vulnerabilității produce izolare.<br/><br/><strong>Exemplu:</strong> relație stabilă cu atașament matur.</span></span>",
        key: "slate",
      },
      {
        text: "7️⃣<span class='tip'><strong>generativitate versus stagnare</strong> <span style='opacity:.9'>(Adultul mijlociu 35-55)</span><span class='tooltip-box'><strong>Simplu spus:</strong> contribui și las ceva sau mă blochez.<br/><br/><strong>Formulare academică:</strong> orientarea către creare, îngrijire și contribuție socială produce generativitate, iar centrare pe sine produce stagnare.<br/><br/><strong>Exemplu:</strong> mentorat sau creșterea copiilor.</span></span>",
        key: "pink",
      },
      {
        text: "8️⃣<span class='tip'><strong>integritatea eului versus deznădejde</strong> <span style='opacity:.9'>(Maturitate 55+)</span><span class='tooltip-box'><strong>Simplu spus:</strong> îmi accept viața sau regret profund.<br/><br/><strong>Formulare academică:</strong> evaluarea vieții ca sens și coerență produce integritate, iar evaluarea ca eșec produce deznădejde.<br/><br/><strong>Exemplu:</strong> sentiment de împăcare cu propria biografie.</span></span>",
        key: "cyan",
      },
    ])}
  </div>

</div>`,
        },

        {
          front:
            "Explică cele cinci dimensiuni ale personalității din modelul „The Big Five”",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>„The Big Five”</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> personalitatea poate fi descrisă prin cinci dimensiuni mari.<br/><br/>
          <strong>Formulare academică:</strong> modelul Big Five descrie personalitatea prin cinci dimensiuni largi, relativ stabile, care sintetizează diferențele individuale și permit descriere comparabilă între persoane.<br/><br/>
          <strong>Exemplu:</strong> unii sunt mai organizați, alții mai spontani.
        </span>
      </span> - Personalitatea este descrisă prin cinci dimensiuni mari și stabile, care permit compararea oamenilor între ei.
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Cele cinci dimensiuni</div>

    ${window.flashPillList([
      {
        text: "🌱<span class='tip'><strong>deschidere</strong> <span style='opacity:.9'>(curiozitate și idei)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de mult îți plac noutatea și explorarea.<br/><br/><strong>Formulare academică:</strong> reflectă receptivitatea la experiențe noi, flexibilitatea cognitivă și interesul pentru idei și estetică.<br/><br/><strong>Exemplu:</strong> îți place să încerci metode noi.</span></span>",
        key: "teal",
      },
      {
        text: "🧭<span class='tip'><strong>conștiinciozitate</strong> <span style='opacity:.9'>(organizare și autocontrol)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de planificat și disciplinat ești.<br/><br/><strong>Formulare academică:</strong> reflectă autodisciplină, orientare spre scop și control al impulsurilor, asociate cu performanță și perseverență.<br/><br/><strong>Exemplu:</strong> îți faci plan și îl urmezi.</span></span>",
        key: "amber",
      },
      {
        text: "🎉<span class='tip'><strong>extraversie</strong> <span style='opacity:.9'>(energie socială)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de energic și orientat spre oameni ești.<br/><br/><strong>Formulare academică:</strong> reflectă activitate, asertivitate și căutarea stimulării sociale, cu afect pozitiv frecvent.<br/><br/><strong>Exemplu:</strong> te încarci din interacțiuni.</span></span>",
        key: "violet",
      },
      {
        text: "🤝<span class='tip'><strong>agreabilitate</strong> <span style='opacity:.9'>(cooperare și empatie)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de cooperant și binevoitor ești.<br/><br/><strong>Formulare academică:</strong> reflectă orientarea prosocială, încrederea, altruismul și disponibilitatea pentru cooperare interpersonală.<br/><br/><strong>Exemplu:</strong> ajuți și negociezi calm.</span></span>",
        key: "emerald",
      },
      {
        text: "⚡<span class='tip'><strong>neuroticism</strong> <span style='opacity:.9'>(reactivitate emoțională)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de ușor apar anxietatea și stresul.<br/><br/><strong>Formulare academică:</strong> reflectă predispoziția către afect negativ, instabilitate emoțională și vulnerabilitate la stres.<br/><br/><strong>Exemplu:</strong> te îngrijorezi ușor înainte de evaluări.</span></span>",
        key: "coral",
      },
    ])}
  </div>

</div>`,
        },

        {
          front: "Descrie Modelul HEXACO și spune diferența cu „The Big Five”",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>HEXACO</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> seamănă cu Big Five, dar adaugă o dimensiune esențială legată de corectitudine și modestie.<br/><br/>
          <strong>Formulare academică:</strong> modelul HEXACO descrie personalitatea prin șase dimensiuni largi, introducând onestitate umilință ca factor distinct, relevant pentru comportamente etice și evitarea exploatării celorlalți.<br/><br/>
          <strong>Exemplu:</strong> cineva poate fi sociabil, dar diferă mult la corectitudine.
        </span>
      </span> - Personalitatea este descrisă prin șase dimensiuni majore, dintre care onestitatea/ umilința explică comportamentele etice și evitarea exploatării celorlalți.
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Cele șase dimensiuni</div>

    ${window.flashPillList([
      {
        text: "🤲<span class='tip'><strong>onestitate umilință</strong> <span style='opacity:.9'>(corectitudine și modestie)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de sincer și neexploatator ești.<br/><br/><strong>Formulare academică:</strong> reflectă sinceritate, corectitudine și lipsa tendinței de manipulare ori de obținere a avantajelor prin înșelare.<br/><br/><strong>Exemplu:</strong> refuzi să trișezi chiar când ai de câștigat.</span></span>",
        key: "teal",
      },
      {
        text: "💓<span class='tip'><strong>emoționalitate</strong> <span style='opacity:.9'>(sensibilitate și atașament)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de intens trăiești frica și atașamentul.<br/><br/><strong>Formulare academică:</strong> reflectă sensibilitatea la amenințare, atașamentul și nevoia de sprijin, cu reacții afective mai pronunțate.<br/><br/><strong>Exemplu:</strong> te neliniștești ușor în situații riscante.</span></span>",
        key: "amber",
      },
      {
        text: "🎉<span class='tip'><strong>extraversie</strong> <span style='opacity:.9'>(energie socială)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de activ social ești.<br/><br/><strong>Formulare academică:</strong> reflectă sociabilitate, asertivitate și afect pozitiv în interacțiune.<br/><br/><strong>Exemplu:</strong> inițiezi conversații ușor.</span></span>",
        key: "violet",
      },
      {
        text: "🤝<span class='tip'><strong>agreabilitate</strong> <span style='opacity:.9'>(toleranță și calm)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de iertător și neconflictual ești.<br/><br/><strong>Formulare academică:</strong> reflectă tendința de a evita ostilitatea și de a gestiona conflictele cu toleranță și cooperare.<br/><br/><strong>Exemplu:</strong> nu reacționezi agresiv la provocări.</span></span>",
        key: "emerald",
      },
      {
        text: "🧭<span class='tip'><strong>conștiinciozitate</strong> <span style='opacity:.9'>(ordine și disciplină)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de bine îți gestionezi sarcinile.<br/><br/><strong>Formulare academică:</strong> reflectă organizare, perseverență și autocontrol orientat spre obiective.<br/><br/><strong>Exemplu:</strong> îți termini proiectele la timp.</span></span>",
        key: "coral",
      },
      {
        text: "🌱<span class='tip'><strong>deschidere</strong> <span style='opacity:.9'>(curiozitate și idei)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de mult cauți noul și complexul.<br/><br/><strong>Formulare academică:</strong> reflectă interesul pentru idei, creativitate și receptivitate la experiențe noi.<br/><br/><strong>Exemplu:</strong> îți plac domeniile abstracte și creative.</span></span>",
        key: "amber",
      },
    ])}
  </div>

  

</div>

 <hr class="hr-flash">

    <div><strong>Pe scurt</strong>: Big Five = 5 dimensiuni → HEXACO = 6 dimensiuni (în plus: onestitate/ umilință)</div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Diferența HEXACO față de Big Five</div>

    ${window.flashPillList([
      {
        text: "➕<span class='tip'><strong>în plus la HEXACO</strong> <span style='opacity:.9'>(onestitate/ umilință)</span><span class='tooltip-box'><strong>Simplu spus:</strong> separă clar corectitudinea și modestia ca dimensiune proprie, nu doar ca nuanțe ale altor trăsături.<br/><br/><strong>Formulare academică:</strong> HEXACO diferențiază onestitate/ umilință ca factor distinct, cu valoare explicativă pentru comportamente etice.<br/><br/><strong>Exemplu:</strong> cineva poate fi agreabil, dar totuși oportunist, dacă onestitate umilință este scăzută.</span></span>",
        key: "teal",
      },
      {
        text: "❤️‍🔥<span class='tip'><strong>(nevrotism vs emoționalitate)</strong> <span style='opacity:.9'>instabilitate vs sensibilitate</span><span class='tooltip-box'><strong>Simplu spus:</strong> Big Five pune accent pe pierderea controlului emoțional, HEXACO pe modul în care trăiești frica, atașamentul și nevoia de protecție.<br/><br/><strong>Formulare academică:</strong> în Big Five, nevrotismul descrie instabilitatea emoțională și vulnerabilitatea la stres, în timp ce în HEXACO dimensiunea emoționalitate reconceptualizează aceste aspecte, integrând frica, sensibilitatea la pericol și atașamentul, iar controlul emoțional apare ca pol opus al acestei dimensiuni.</span></span>",
        key: "violet",
      },
    ])}
  </div>`,
        },

        {
          front:
            "Explică personalitatea din punctul de vedere al abordării structural-sistemice",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Abordarea structural-sistemică</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> personalitatea e un sistem, cu părți diferite care lucrează împreună.<br/><br/>
          <strong>Formulare academică:</strong> personalitatea este un sistem integrat de structuri și procese, în care componentele relativ stabile și mecanismele funcționale se organizează ierarhic și se influențează reciproc, producând conduită coerentă și adaptativă.<br/><br/>
          <strong>Exemplu:</strong> temperamentul influențează ritmul, aptitudinile susțin performanța, caracterul orientează valoric.
        </span>
      </span> - Personalitatea este un sistem integrat de structuri stabile și procese funcționale, organizate ierarhic, care se influențează reciproc și generează comportamente coerente și adaptative.
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Componente principale</div>

    ${window.flashPillList([
      {
        text: "⚡<span class='tip'><strong>temperament</strong> <span style='opacity:.9'>(cum reacționezi)</span><span class='tooltip-box'><strong>Simplu spus:</strong> ritm, energie, reactivitate.<br/><br/><strong>Formulare academică:</strong> componenta dinamico energetică ce descrie stilul de reacție și intensitatea răspunsurilor.<br/><br/><strong>Exemplu:</strong> reacții rapide sau lente.</span></span>",
        key: "teal",
      },
      {
        text: "🧰<span class='tip'><strong>aptitudini</strong> <span style='opacity:.9'>(cu ce poți performa)</span><span class='tooltip-box'><strong>Simplu spus:</strong> capacități care fac posibilă performanța.<br/><br/><strong>Formulare academică:</strong> componenta instrumental operațională care susține eficiența în activități și învățare.<br/><br/><strong>Exemplu:</strong> aptitudini pentru analiză sau muzică.</span></span>",
        key: "amber",
      },
      {
        text: "🧭<span class='tip'><strong>caracter</strong> <span style='opacity:.9'>(valori și principii)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cum te raportezi stabil la valori și reguli.<br/><br/><strong>Formulare academică:</strong> componenta relațional valorică ce organizează atitudini și conduită în raport cu norme și idealuri.<br/><br/><strong>Exemplu:</strong> responsabilitate și corectitudine.</span></span>",
        key: "violet",
      },
    ])}
  </div>

</div>`,
        },

        {
          front:
            "Oferă definiția temperamentului și caractersticile activității nervoase superioare (ANS)",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Temperamentul</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> stilul tău de reacție, cât de repede și cât de intens răspunzi.<br/><br/>
          <strong>Formulare academică:</strong> temperamentul este latura dinamico energetică a personalității, exprimată prin intensitatea, ritmul, reactivitatea și mobilitatea răspunsurilor în situații variate.<br/><br/>
          <strong>Exemplu:</strong> unii reacționează rapid și intens, alții lent și moderat.
        </span>
      </span> - latura dinamico energetică a personalității, exprimată prin intensitatea, ritmul, reactivitatea și mobilitatea răspunsurilor în situații variate.
    </div>
  </div>

 <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
  <div class='flash-title' style="${FLASH_TITLE_STYLE}">Caracteristicile activității nervoase superioare</div>

  ${window.flashPillList([
    {
      text: "💪<span class='tip'><strong>energie sau forță</strong> <span style='opacity:.9'>(substanțe funcționale ale neuronului)</span><span class='tooltip-box'><strong>Simplu spus:</strong> câtă „rezervă” ai ca să susții efortul.<br/><br/><strong>Formulare academică:</strong> forța activității nervoase se referă la potențialul funcțional al neuronului și la capacitatea de a susține solicitări fără epuizare rapidă.<br/><br/><strong>Exemplu:</strong> poți lucra mult timp fără să cazi brusc în oboseală.</span></span>",
      key: "teal",
    },
    {
      text: "⚡<span class='tip'><strong>mobilitate</strong> <span style='opacity:.9'>(viteza de consum și regenerare)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de repede te „consumi” și îți revii.<br/><br/><strong>Formulare academică:</strong> mobilitatea exprimă viteza de consum și regenerare a resurselor funcționale, susținând trecerea rapidă între stări și activități.<br/><br/><strong>Exemplu:</strong> te adaptezi repede când se schimbă sarcina și îți revii după efort.</span></span>",
      key: "amber",
    },
    {
      text: "⚖️<span class='tip'><strong>echilibru</strong> <span style='opacity:.9'>(excitație și inhibiție)</span><span class='tooltip-box'><strong>Simplu spus:</strong> cât de bine ții balanța între a porni și a te opri.<br/><br/><strong>Formulare academică:</strong> echilibrul reprezintă distribuția relativ stabilă a forței între tendințe de excitație și de inhibiție, cu rol în reglajul reacțiilor.<br/><br/><strong>Exemplu:</strong> nu reacționezi impulsiv, dar nici nu rămâi blocat.</span></span>",
      key: "violet",
    },
  ])}
</div>


</div>`,
        },

        {
          front: "Definește aptitudinile și evidențiază tipurile sale",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Aptitudinile</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> capacități care te ajută să faci bine o activitate.<br/><br/>
          <strong>Formulare academică:</strong> aptitudinile reprezintă latura instrumental operațională a personalității, constând în capacități relativ stabile care condiționează eficiența și nivelul performanței în activități, prin potențial de învățare și execuție.<br/><br/>
          <strong>Exemplu:</strong> aptitudini pentru matematică, limbă, muzică.
        </span>
      </span> - capacități relativ stabile care te ajută să înveți și să execuți bine o activitate, susținând performanța.
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Tipuri de aptitudini</div>

    ${window.flashPillList([
      {
        text: "🌐<span class='tip'><strong>generale</strong> <span style='opacity:.9'>(larg aplicabile)</span><span class='tooltip-box'><strong>Simplu spus:</strong> ajută în multe domenii.<br/><br/><strong>Formulare academică:</strong> aptitudini cu aplicabilitate extinsă, implicate în o gamă largă de activități și situații de învățare.<br/><br/><strong>Exemplu:</strong> inteligență, spirit de observație.</span></span>",
        key: "teal",
      },
      {
        text: "🎵<span class='tip'><strong>speciale</strong> <span style='opacity:.9'>(domeniu specific)</span><span class='tooltip-box'><strong>Simplu spus:</strong> ajută puternic într un domeniu anume.<br/><br/><strong>Formulare academică:</strong> aptitudini cu aplicabilitate restrânsă, care susțin performanța într un domeniu particular prin mecanisme specifice.<br/><br/><strong>Exemplu:</strong> aptitudini muzicale, tehnice, sportive.</span></span>",
        key: "amber",
      },
    ])}
  </div>

</div>`,
        },

        {
          front: "Descrie caracterul și relația sa cu atitudinea",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Caracterul</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> felul stabil în care te raportezi la valori, reguli și oameni.<br/><br/>
          <strong>Formulare academică:</strong> caracterul este latura relațional valorică a personalității, constituită din orientări și norme interiorizate, care organizează conduita în raport cu valori, obligații și idealuri.<br/><br/>
          <strong>Exemplu:</strong> corectitudine, responsabilitate, respect.
        </span>
      </span> - este felul stabil în care te raportezi la valori și reguli, iar asta îți organizează comportamentul.
    </div>

    <hr class="hr-flash">

    <div>
      <span class='tip'><strong>Relația caracter atitudine</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> atitudinile sunt forme concrete prin care caracterul se vede în situații.<br/><br/>
          <strong>Formulare academică:</strong> caracterul se exprimă printr un sistem de atitudini relativ stabile față de sine, ceilalți și activitate, atitudinile funcționând ca mecanisme de orientare și reglare a conduitei în contexte specifice.<br/><br/>
          <strong>Exemplu:</strong> caracter responsabil se vede prin atitudine constantă de seriozitate față de muncă.
        </span>
      </span> - caracterul se vede prin atitudinile tale stabile, care îți orientează și îți reglează comportamentul în situații concrete.
    </div>
  </div>

</div>`,
        },

        {
          front: "Explică Modelul ABC al atitudinii",
          back: `<div class='flash-back'>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div>
      <span class='tip'><strong>Modelul ABC</strong>
        <span class='tooltip-box'>
          <strong>Simplu spus:</strong> o atitudine are ce simți, ce crezi și cum te porți.<br/><br/>
          <strong>Formulare academică:</strong> atitudinea este o structură psihică relativ stabilă, descrisă prin trei componente corelate: componenta afectivă, componenta cognitivă și componenta comportamentală, care împreună orientează și reglează conduita față de un obiect.<br/><br/>
          <strong>Exemplu:</strong> îți place un domeniu, crezi că e util și te implici în el.
        </span>
      </span> - explică atitudinea prin trei componente: ce simți, ce crezi și cum acționezi față de un obiect.
    </div>
  </div>

  <div class='flash-block' style="${FLASH_BLOCK_STYLE}">
    <div class='flash-title' style="${FLASH_TITLE_STYLE}">Componentele ABC</div>

    ${window.flashPillList([
      {
        text: "❤️<span class='tip'><strong>Affect (emoții)</strong> <span style='opacity:.9'>- ce simți</span><span class='tooltip-box'><strong>Simplu spus:</strong> emoțiile față de obiect.<br/><br/><strong>Formulare academică:</strong> componenta afectivă reprezintă evaluarea emoțională pozitivă sau negativă a obiectului atitudinii.<br/><br/><strong>Exemplu:</strong> îți place sau îți displace un curs.</span></span>",
        key: "teal",
      },
      {
        text: "💭<span class='tip'><strong>Cognition (credințe)</strong> <span style='opacity:.9'>- ce crezi</span><span class='tooltip-box'><strong>Simplu spus:</strong> ideile și convingerile despre obiect.<br/><br/><strong>Formulare academică:</strong> componenta cognitivă cuprinde credințe, reprezentări și judecăți despre obiect, care îi justifică evaluarea.<br/><br/><strong>Exemplu:</strong> crezi că un curs e util pentru carieră.</span></span>",
        key: "amber",
      },
      {
        text: "🏃<span class='tip'><strong>Behavior (comportamente)</strong> <span style='opacity:.9'>- ce faci</span><span class='tooltip-box'><strong>Simplu spus:</strong> tendința de a acționa într un fel.<br/><br/><strong>Formulare academică:</strong> componenta comportamentală exprimă intenții și conduite orientate către obiect, în acord cu evaluarea afectivă și cognitivă.<br/><br/><strong>Exemplu:</strong> participi, înveți, cauți materiale.</span></span>",
        key: "violet",
      },
    ])}
  </div>

</div>`,
        },
      ],
    },
  ],
};
