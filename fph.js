// Data model pentru Fundamentele Psihologiei (FPH)
// Fiecare capitol corespunde unui curs din suport,
// fiecare subcapitol are cel puțin un quiz asociat.

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
          quizuri: ["fph-t1b", "fph-t1c", "fph-t1d", "fph-t1e", "fph-t1f"],
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
          quizuri: ["fph-t2a", "fph-t2b"],
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
          titlu: "Relația conștient subconștient inconștient",
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
          quizuri: ["fph-t5ba"],
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
      titlu: "Curs 6. Reprezentările (Schemele)",
      subcapitole: [
        {
          id: "fph-cap6-sub1",
          titlu: "Reprezentările: definiție, caracteristici și tipuri",
          quizuri: ["fph-t6a", "fph-t6b"],
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
          quizuri: ["fph-t13h", "fph-t13i"],
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
          text: "Î1. Definește etimologia cuvântului „psihologie“.",
          options: [
            "psyche (gr.) = suflet, suflu",
            "logos (gr.) = cuvânt, știință",
            "psyche (gr.) = corp fizic, materie",
            "logos (gr.) = sentiment, trăire afectivă",
          ],
          answer: [0, 1],
        },
        {
          text: "Î2. Psihologia este:",
          options: [
            "știința care se ocupă cu studiul conduitei umane.",
            "un ansamblu de credințe de simț comun despre comportament.",
            "o disciplină exclusiv filosofică, fără metode științifice.",
          ],
          answer: 0,
        },
        {
          text: "Î3. Definirea psihicului conform lui Neveanu (1978) include ideea că psihicul este:",
          options: [
            "ansamblu de stări, însușiri, fenomene și procese subiective.",
            "îndeplinind funcții de raportare la lume și la sine.",
            "îndeplinind funcții de orientare, reflectare și planificare mentală.",
            "redus la reacții reflexe automate, fără conținut subiectiv.",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // Quiz 2   Principiul determinismului
    {
      id: "fph-t1b",
      title: "Principiul determinismului",
      questions: [
        {
          text: "Î1. Principiul determinismului afirmă că:",
          options: [
            "toate faptele psihice se înscriu pe traiectoria unei cauzalități.",
            "faptele psihice apar la întâmplare și nu pot fi explicate.",
            "faptele psihice nu pot fi niciodată investigate științific.",
          ],
          answer: 0,
        },
        {
          text: "Î2. Expresia „faptele psihice se înscriu pe traiectoria unei cauzalități“ înseamnă că:",
          options: [
            "faptele psihice au cauze și condiții care le influențează apariția și evoluția.",
            "faptele psihice nu sunt influențate de niciun factor exterior persoanei.",
            "evenimentele psihice sunt pure coincidențe, iar cauzele sunt doar impresii subiective.",
          ],
          answer: 0,
        },
        {
          text: "Î3. Atunci când principiul determinismului afirmă că faptele psihice se înscriu pe traiectoria unei cauzalități multiple, complexe și probabilistice, aceasta înseamnă că:",
          options: [
            "un fapt psihic este determinat de mai mulți factori aflați în interacțiune, ale căror efecte nu sunt mecanice, ci dependente de context și probabilitate.",
            "fiecare fapt psihic are o singură cauză directă, clar identificabilă și identică pentru toate persoanele.",
            "relațiile cauzale din psihic sunt fixe, liniare și produc întotdeauna aceleași efecte.",
          ],
          answer: 0,
        },
      ],
    },

    // Quiz 3   Principiul organizării sistemice
    {
      id: "fph-t1c",
      title: "Principiul organizării sistemice",
      questions: [
        {
          text: "Î1. Atunci când spunem că psihicul este un sistem deschis, înseamnă că:",
          options: [
            "este deschis la schimburi de informație cu mediul și cu ceilalți.",
            "funcționează complet izolat de contextul social și fizic.",
            "poate fi înțeles doar prin introspecție, fără raportare la mediu.",
          ],
          answer: 0,
        },
        {
          text: "Î2. Ideea că psihicul este un sistem dinamic subliniază că:",
          options: [
            "structura și funcțiile psihice sunt în continuă schimbare și transformare.",
            "psihicul rămâne neschimbat după copilărie.",
            "schimbările psihice apar doar în situații patologice.",
          ],
          answer: 0,
        },
        {
          text: "Î3. Psihicul este descris ca sistem hipercomplex deoarece:",
          options: [
            "include multiple niveluri de organizare, cu sisteme și subsisteme aflate în interacțiune.",
            "poate fi explicat complet printr-o singură variabilă.",
            "este alcătuit doar din reacții simple, lineare, ușor de izolat.",
          ],
          answer: 0,
        },
        {
          text: "Î4. Când spunem că psihicul este un sistem autoreglabil, ne referim la faptul că el:",
          options: [
            "își poate modifica propria funcționare pe baza feedback-ului.",
            "funcționează identic indiferent de experiență sau context.",
            "nu poate integra informații noi odată ce structurile de bază s au format.",
          ],
          answer: 0,
        },
        {
          text: "Î5. Conform principiului organizării sistemice, psihicul este un sistem, definit de Ludwig von Bertalanffy ca „ansamblu de elemente aflate într-o interacțiune ordonată”. Ce înseamnă, în acest context, că psihicul este deschis, dinamic, hipercomplex și autoreglabil",
          options: [
            "Este deschis deoarece este permeabil la schimburi de informație cu mediul și cu ceilalți",
            "Este dinamic deoarece structura și funcțiile psihice sunt supuse schimbărilor în mod constant",
            "Este hipercomplex deoarece este organizat pe sisteme și subsisteme aflate în interacțiune",
            "Este autoreglabil deoarece își ajustează funcționarea pe baza comunicării intersistemice și a <span class='tip'><span class='tooltip-box'>Conexiunile inverse (feedback) sunt mecanisme prin care rezultatele unei activități sunt reintroduse în sistem pentru a corecta, menține sau modifica funcționarea acestuia.</span>conexiunilor inverse</span>",
            "Este autoreglabil deoarece reacțiile psihice sunt complet fixe și independente de experiență",
          ],
          answer: [0, 1, 2, 3],
        },
      ],
    },

    // Quiz 4   Principiul dezvoltării
    {
      id: "fph-t1d",
      title: "Principiul dezvoltării",
      questions: [
        {
          text: "Î1. Principiul dezvoltării afirmă că psihicul uman:",
          options: [
            "este într-o continuă transformare de a lungul vieții.",
            "se fixează definitiv la o anumită vârstă și nu se mai schimbă.",
            "se modifică doar în perioade de criză și boală.",
          ],
          answer: 0,
        },
      ],
    },

    // Quiz 5   Principiul condiționării social-istorice
    {
      id: "fph-t1e",
      title: "Principiul condiționării social-istorice",
      questions: [
        {
          text: "Î1. Principiul condiționării social-istorice subliniază că:",
          options: [
            "factorii sociali și contextul istoric modelează formarea și manifestarea psihicului uman.",
            "dezvoltarea psihică este determinată exclusiv de ereditate.",
            "influențele culturale nu au efect asupra personalității.",
          ],
          answer: 0,
        },
        {
          text: "Î2. Conform principiului condiționării social-istorice, omul este înțeles ca:",
          options: [
            "agent și subiect implicat practic, cognitiv și valoric în lume.",
            "simplu produs pasiv al instinctelor biologice.",
            "entitate izolată, fără relație cu mediul cultural și istoric.",
          ],
          answer: 0,
        },
        {
          text: "Î3. Principiul condiționării social-istorice afirmă că factorii sociali și contextul istoric mijlocesc construcția psihicului uman, formând omul ca subiect pragmatic, epistemic și axiologic. Ce înseamnă, în acest context, fiecare dintre aceste trei caracterizări",
          options: [
            "Subiect pragmatic înseamnă orientat spre acțiune practică, rezolvarea problemelor și adaptarea în situații concrete",
            "Subiect epistemic înseamnă capabil de cunoaștere, înțelegere și construire a sensului despre lume",
            "Subiect axiologic înseamnă purtător și creator de valori, norme și criterii de evaluare",
            "Subiect pragmatic înseamnă că reacționează automat, fără scop și fără control conștient",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // Quiz 6   Principii fundamentale în ansamblu
    {
      id: "fph-t1f",
      title: "Principii fundamentale în psihologie   ansamblu",
      questions: [
        {
          text: "Principiile fundamentale sunt formulate în lucrările lui <span class='tip'>A. Cosmovici (1996)<span class='tooltip-box'><strong>Cosmovici, A. (1996)</strong> Psihologie generală. Iași: Polirom.</span></span> și <span class='tip'>P. P. Neveanu (1978)<span class='tooltip-box'><strong>Popescu-Neveanu, P. (1978)</strong> Dicționar de psihologie. București: Editura Albatros.</span></span>.",
          options: [
            "Principiul determinismului.",
            "Principiul organizării sistemice.",
            "Principiul dezvoltării.",
            "Principiul condiționării social-istorice.",
            "Principiul întâmplării absolute.",
          ],
          answer: [0, 1, 2, 3],
        },
        // Întrebări nou adăugate (câte una pentru fiecare principiu)

        {
          text: "Î2. Afirmația „orice fapt psihic are cauze, condiții și o evoluție explicabilă” aparține:",
          options: [
            "principiului determinismului",
            "principiului organizării sistemice",
            "principiului dezvoltării",
            "principiului condiționării social-istorice",
          ],
          answer: 0,
        },
        {
          text: "Î3. Afirmația „psihicul funcționează ca un ansamblu de elemente aflate în interacțiune ordonată, fiind deschis, dinamic și autoreglabil” aparține:",
          options: [
            "principiului determinismului",
            "principiului organizării sistemice",
            "principiului dezvoltării",
            "principiului condiționării social-istorice",
          ],
          answer: 1,
        },
        {
          text: "Î4. Afirmația „psihicul uman se transformă continuu, pe parcursul întregii vieți” aparține:",
          options: [
            "principiului determinismului",
            "principiului dezvoltării",
            "principiului organizării sistemice",
            "principiului condiționării social-istorice",
          ],
          answer: 1,
        },
        {
          text: "Î5. Afirmația „formarea și funcționarea psihicului sunt modelate de mediul social și de contextul istoric” aparține:",
          options: [
            "principiului determinismului",
            "principiului dezvoltării",
            "principiului organizării sistemice",
            "principiului condiționării social-istorice",
          ],
          answer: 3,
        },
      ],
    },

    // Curs 2 – Instanțe ale vieții psihice test

    // S1. Conștient / Conștiință

    {
      id: "fph-t2a",
      title: "Conștiința ca experiență trăită",
      questions: [
        {
          text: "Andrei Cosmovici distinge două forme ale conștiinței. Care sunt acestea?",
          options: [
            "Conștiința implicită – orientarea către obiectele și situațiile din mediu.",
            "Conștiința reflexivă – orientarea asupra propriei persoane.",
            "Conștiința automată – reacții fără implicare psihică.",
            "Conștiința biologică – activitatea reflexelor simple.",
          ],
          answer: [0, 1],
        },
        {
          text: "Conștiința poate fi descrisă ca o experimentare <span class='tip'><span class='tooltip-box'>Trăire personală, interioară, proprie fiecărui individ.</span>subiectivă</span>, <span class='tip'><span class='tooltip-box'>Are structură, nu este haotică, elementele sunt organizate.</span>structurată</span>, <span class='tip'><span class='tooltip-box'>Include mai multe componente ale vieții psihice, aflate în legătură între ele.</span>complexă</span> și <span class='tip'><span class='tooltip-box'>Se desfășoară acum, în prezent, cu implicare activă.</span>prezentă</span> a interacțiunii individului cu mediul și cu sine. Ce descrie cel mai bine această formulare?",
          options: [
            "O experiență trăită în mod personal, organizat și în timp real.",
            "Un proces complet inconștient.",
            "O reacție automată, fără participare psihică.",
          ],
          answer: 0,
        },
      ],
    },

    {
      id: "fph-t2b",
      title: "Conștiința ca organizare mentală complexă",
      questions: [
        {
          text: "Conform lui Lev Vîgotski, conștiința este o construcție sistematică în care sunt implicate toate <span class='tip'><span class='tooltip-box'>Procese precum percepția, memoria, gândirea, limbajul, afectivitatea, voința.</span>procesele psihice</span>. Ce idee surprinde cel mai bine această perspectivă?",
          options: [
            "Conștiința reunește și organizează diferitele procese psihice într un întreg coerent.",
            "Conștiința se reduce la simpla percepție senzorială.",
            "Conștiința este formată doar din procesele de limbaj.",
          ],
          answer: 0,
        },
        {
          text: "Wundt descrie conștiința ca pe o <span class='tip'><span class='tooltip-box'>Capacitatea minții de a combina elemente simple în experiențe psihice noi și originale.</span>sinteză creatoare</span>. Ce înseamnă aceasta?",
          options: [
            "Mintea combină și transformă informațiile, generând experiențe și înțelegeri noi.",
            "Mintea doar copiază fidel ceea ce primește din exterior.",
            "Gândirea are loc fără legătură cu percepțiile sau emoțiile.",
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
          text: "Inconștientul este descris ca depozitar al achizițiilor de natură <span class='tip'><span class='tooltip-box'>Cunoștințe, informații neutilizate, amintiri greu accesibile.</span>cognitivă</span> și al aspectelor de factură <span class='tip'><span class='tooltip-box'>Impulsuri, tendințe, nevoi, impresii afective.</span>motivațional afectivă</span>, aflate în stare de latență. Ce exprimă cel mai adecvat această descriere?",
          options: [
            "Inconștientul păstrează atât informații, cât și conținuturi afective care nu sunt în prezent conștiente.",
            "Inconștientul include doar informații senzoriale actuale.",
            "Inconștientul se referă exclusiv la reacțiile motorii automate.",
          ],
          answer: 0,
        },
        {
          text: "Se afirmă că inconștientul are un caracter dinamic, predominant afectiv, cu potențial activator. Ce înseamnă aceasta?",
          options: [
            "Conținuturile inconștiente pot influența conduita, declanșând sau orientând reacțiile individului.",
            "Conținuturile inconștiente sunt complet inactive și fără efect asupra comportamentului.",
            "Inconștientul acționează doar la nivel intelectual, fără implicare afectivă.",
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
          text: "În teoria lui Sigmund Freud, inconștientul este strâns legat de instanțele vieții psihice numite:",
          options: [
            "<span class='tip'>Sinele<span class='tooltip-box'><strong>Id (Sinele)</strong> – sediul pulsiunilor și dorințelor primare, orientate spre satisfacere imediată.<br><br><strong>Exemplu:</strong> dorința impulsivă de a obține ceva fără a ține cont de reguli.</span></span>, <span class='tip'>Eul<span class='tooltip-box'><strong>Ego (Eul)</strong> – instanța rațională care mediază între cerințele Sinelui și regulile realității.<br><br><strong>Exemplu:</strong> amânarea unei dorințe pentru că momentul nu este potrivit.</span></span> și <span class='tip'>Supraeul<span class='tooltip-box'><strong>Superego (Supraeul)</strong> – instanța normelor morale și a idealurilor interiorizate.<br><br><strong>Exemplu:</strong> sentimentul de vinovăție după încălcarea unei reguli.</span></span>.",
            "Creierul drept, creierul stâng și trunchiul cerebral.",
            "Memoria de scurtă durată, memoria de lungă durată și memoria senzorială.",
          ],
          answer: 0,
        },
        {
          text: "Ce rol are <span class='tip'><span class='tooltip-box'>Instanța impulsurilor, a dorințelor primare, care urmărește satisfacerea imediată a nevoilor.</span>Sinele</span> în raport cu inconștientul, în viziunea freudiană?",
          options: [
            "Reprezintă sursa principală a pulsiunilor și dorințelor inconștiente.",
            "Coordonează exclusiv comportamentele conștiente, raționale.",
            "Este responsabil doar de autocontrolul moral.",
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
          text: "În modelul lui Carl Gustav Jung, cum se raportează <span class='tip'>Egoul<span class='tooltip-box'>Centru al conștiinței, instanța care spune „eu”.</span></span>, <span class='tip'>inconștientul personal<span class='tooltip-box'>Totalitatea amintirilor, experiențelor și conținuturilor reprimate sau uitate ale individului.</span></span> și <span class='tip'>inconștientul colectiv<span class='tooltip-box'>Nivel profund al psihicului, comun tuturor oamenilor, populat cu arhetipuri.</span></span>?",
          options: [
            "Egoul aparține conștiinței, inconștientul personal aparține istoriei individuale, iar inconștientul colectiv aparține umanității.",
            "Toate trei sunt identice și îndeplinesc aceeași funcție psihică.",
            "Egoul face parte din inconștientul colectiv, iar celelalte două sunt forme ale conștiinței.",
          ],
          answer: 0,
        },
        {
          text: "Pentru Jung, inconștientul colectiv este:",
          options: [
            "Un depozit personal de amintiri din copilărie.",
            "Structura psihică populată cu <span class='tip'><span class='tooltip-box'>Reprezentări mentale înnăscute, modele sau imagini universale, prezente în toate culturile umane.</span>arhetipuri</span>.",
            "O zonă strict legată de procesele de limbaj.",
          ],
          answer: 1,
        },
        {
          text: "Care dintre următoarele exemple ilustrează mai bine ideea de arhetip jungian?",
          options: [
            "O regulă de gramatică învățată la școală.",
            "Imaginea eroului, a mamei sau a înțeleptului, prezentă în mituri, povești și simboluri din culturi diferite.",
            "Un cod de acces la contul unei platforme digitale.",
          ],
          answer: 1,
        },
      ],
    },

    // S3. Subconștientul

    {
      id: "fph-t2f",
      title: "Subconștientul",
      questions: [
        {
          text: "În perspectiva freudiană, subconștientul (numit și preconștient) este:",
          options: [
            "O zonă tampon între conștient și inconștient, depozitând amintiri și automatisme gata să devină conștiente.",
            "Identic cu inconștientul, fără nicio diferență funcțională.",
            "Doar totalitatea reflexelor necondiționate.",
          ],
          answer: 0,
        },
        {
          text: "Ce tip de conținut este specific subconștientului?",
          options: [
            "Conținuturi complet inaccesibile conștiinței.",
            "Amintiri, deprinderi și scheme de acțiune care pot fi readuse relativ ușor în câmpul conștiinței.",
            "Procese strict fiziologice, fără legătură cu trăirile psihice.",
          ],
          answer: 1,
        },
        {
          text: "În legătură cu subconștientul, ce caracterizează <span class='tip'>atenția postvoluntară<span class='tooltip-box'>Formă de atenție care apare după efortul inițial al atenției voluntare și se menține apoi spontan, din interes.</span></span>?",
          options: [
            "Menținerea atenției fără efort conștient, datorită interesului pentru activitate.",
            "Concentrarea forțată, cu consum mare de energie psihică.",
            "Reacția automată declanșată de un stimul brusc.",
          ],
          answer: 0,
        },
      ],
    },

    // S4. Relația dintre conștient, subconștient și inconștient

    {
      id: "fph-t2g",
      title: "Relația conștient subconștient inconștient",
      questions: [
        {
          text: "Conștientul, subconștientul și inconștientul pot fi înțelese ca:",
          options: [
            "Trei sisteme complet separate între ele.",
            "Repere ale unui continuum funcțional al vieții psihice, care împreună formează un sistem înalt funcțional.",
            "Structuri strict anatomice ale creierului.",
          ],
          answer: 1,
        },
        {
          text: "Visul este asociat în principal cu:",
          options: [
            "<span class='tip'>Conștientul<span class='tooltip-box'>Conștientul implică control voluntar și luciditate. În vis, controlul conștient asupra imaginilor și acțiunilor lipsește.</span></span>.",
            "<span class='tip'>Subconștientul<span class='tooltip-box'>Subconștientul conține amintiri, deprinderi și conținuturi ușor accesibile prin efort conștient. Conținutul visului nu este accesat prin voință.</span></span>.",
            "<span class='tip'>Inconștientul<span class='tooltip-box'>Visul apare în absența controlului conștient și exprimă simbolic dorințe, conflicte și trăiri profunde inaccesibile direct conștiinței.</span></span>.",
          ],
          answer: 2,
        },
        {
          text: "Intuiția este frecvent explicată ca având sediul preponderent în:",
          options: [
            "Conștient – rezultat al unei analize logice explicite.",
            "Subconștient – prin reguli și automatisme deja formate.",
            "Inconștient – <span class='tip'><span class='tooltip-box'>„Raționament cu premise inconștiente”, după formularea lui Cosmovici, 1996.</span>explicație</span>.",
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
            "Proprietatea materiei vii de a răspunde activ și selectiv, prin modificări interne specifice, la acțiunea stimulilor externi.",
            "Capacitatea materiei de a ocupa un loc în spațiu și de a avea masă.",
            "Proprietatea exclusivă a mașinilor de a reacționa la comenzi.",
          ],
          answer: 0,
        },
        {
          text: "Când spunem că excitabilitatea presupune un răspuns <span class='tip'><span class='tooltip-box'>Răspuns care implică modificări interne, nu doar reacție pasivă.</span>activ</span> și <span class='tip'><span class='tooltip-box'>Răspuns diferențiat, în funcție de tipul și intensitatea stimulului.</span>selectiv</span>, ce înseamnă aceasta?",
          options: [
            "Organismul nu reacționează la toți stimulii la fel, ci își adaptează răspunsul în funcție de natura și intensitatea stimulului.",
            "Organismul reacționează identic la orice stimul, indiferent de context.",
            "Organismul nu poate diferenția între stimuli interni și externi.",
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
          text: "Conform lui Neveanu, informația este unul dintre cele trei aspecte de existență ale materiei, alături de <span class='tip'><span class='tooltip-box'>Componenta materială, concretă, a realității.</span>substanță</span> și <span class='tip'><span class='tooltip-box'>Capacitatea materiei de a produce schimbări, lucru mecanic, transformări.</span>energie</span>. Ce exprimă cel mai bine rolul informației?",
          options: [
            "Informația reprezintă dimensiunea de organizare și semnificație a proceselor și stărilor din realitate.",
            "Informația este identică cu substanța fizică din care este alcătuit un obiect.",
            "Informația este doar o formă de energie mecanică.",
          ],
          answer: 0,
        },
        {
          text: "Informația este descrisă ca element care conectează sisteme și facilitează activități complexe de <span class='tip'><span class='tooltip-box'>Organizarea internă a componentelor unui sistem.</span>autoorganizare</span>, <span class='tip'><span class='tooltip-box'>Dirijarea și reglarea desfășurării proceselor.</span>autocontrol</span> și <span class='tip'><span class='tooltip-box'>Menținerea sau restabilirea echilibrului în funcționare.</span>autoreglaj</span>. Care afirmație surprinde cel mai bine această idee?",
          options: [
            "Informația permite sistemelor să își coordoneze funcționarea și să își ajusteze răspunsurile în raport cu mediul.",
            "Informația nu are niciun rol în funcționarea sistemelor biologice.",
            "Informația se referă doar la mesajele verbale dintre oameni.",
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
          text: "Stimulul este definit ca „orice factor de mediu care declanșează modificări <span class='tip'><span class='tooltip-box'>Modificări care nu distrug definitiv structura, organismul revenind la starea inițială.</span>reversibile</span> în materia vie” (Popescu Neveanu, 1978). Ce descriere este corectă?",
          options: [
            "Un factor de mediu care poate produce modificări trecătoare în organism, fără a altera definitiv structura acestuia.",
            "Orice eveniment care distruge în mod ireversibil structura organismului.",
            "Un factor care acționează doar asupra obiectelor neînsuflețite.",
          ],
          answer: 0,
        },
        {
          text: "Stimulii pot fi caracterizați prin <span class='tip'>natură<span class='tooltip-box'>Tipul stimulului: mecanic, termic, luminos, chimic etc.</span></span>, <span class='tip'>intensitate<span class='tooltip-box'>Forța cu care acționează stimulul asupra organismului.</span></span>, <span class='tip'>distribuție în spațiu<span class='tooltip-box'>Zona sau întinderea suprafeței asupra căreia acționează stimulul.</span></span> și <span class='tip'>durată<span class='tooltip-box'>Timpul pe care stimulul îl menține acțiunea asupra organismului.</span></span>. Ce combinație descrie cel mai bine aceste caracteristici?",
          options: [
            "Tipul stimulului, forța cu care acționează, întinderea zonei asupra căreia acționează și timpul cât acționează.",
            "Doar intensitatea și durata, fără alte caracteristici.",
            "Doar forma fizică și culoarea stimulului.",
          ],
          answer: 0,
        },
        {
          text: "Stimulii declanșează reacție din partea organismului atunci când intensitatea lor atinge un anumit prag de stimulare. Aceasta înseamnă că:",
          options: [
            "Sub un anumit nivel de intensitate, stimulul nu produce o reacție sesizabilă.",
            "Orice stimul, indiferent cât de slab, produce aceeași reacție.",
            "Organismul reacționează doar la stimuli de maximă intensitate.",
          ],
          answer: 0,
        },
      ],
    },

    // S2. Sistemul nervos central și procese corticale

    {
      id: "fph-t3d",
      title: "Rolul și manifestarea sistemului nervos central",
      questions: [
        {
          text: "Sistemul nervos central are un rol esențial în:",
          options: [
            "Stabilirea și menținerea relațiilor adaptative ale individului cu mediul.",
            "Asigurarea exclusivă a funcțiilor de digestie.",
            "Depozitarea mecanică a substanțelor nutritive.",
          ],
          answer: 0,
        },
        {
          text: "Activitatea sistemului nervos central se manifestă prin <span class='tip'><span class='tooltip-box'>Procese psihice superioare precum gândirea, limbajul, memoria, atenția, percepția și reglarea comportamentului — funcții specifice creierului uman.</span>activitatea nervoasă superioară</span>, bazată pe procese corticale precum excitația, inhibiția și <span class='tip'><span class='tooltip-box'>Mecanism prin care excitația și inhibiția se distribuie coordonat în diferite zone corticale și subcorticale.</span>inducția</span>. Ce idee reflectă cel mai bine această formulare?",
          options: [
            "Funcționarea SNC presupune coordonarea fină a proceselor de <span class='tip'><span class='tooltip-box'>Creșterea activității neuronale, facilitând transmiterea impulsurilor nervoase.</span>activare</span> și <span class='tip'><span class='tooltip-box'>Reducerea sau blocarea temporară a activității neuronale, pentru control și reglare.</span>frânare</span> la <span class='tip'><span class='tooltip-box'>Zona superioară a creierului (cortexul cerebral), responsabilă de funcțiile psihice complexe precum gândirea, limbajul, memoria și atenția.</span>nivel cortical</span>.",
            "Funcționarea SNC este independentă de procesele corticale.",
            "SNC se ocupă doar de reacții reflexe simple, fără implicarea cortexului.",
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
          text: "Excitația și inhibiția sunt procese nervoase fundamentale care, prin acțiune coordonată și balansare reciprocă, conferă proprietatea de echilibru funcționării psihice. Ce formulare surprinde corect această idee?",
          options: [
            "Excitația și inhibiția se completează reciproc, permițând reglarea și dozarea răspunsurilor psihice și comportamentale.",
            "Excitația este singurul proces important, inhibiția fiind neglijabilă.",
            "Inhibiția blochează definitiv orice activitate nervoasă.",
          ],
          answer: 0,
        },
        {
          text: "Excitația poate fi definită ca:",
          options: [
            "Activarea zonelor nervoase <span class='tip'><span class='tooltip-box'>Creșterea nivelului de activitate al neuronilor, astfel încât aceștia să poată transmite semnale mai ușor și mai rapid.</span>(activarea zonelor nervoase)</span> prin facilitarea transmiterii semnalelor între neuroni, astfel încât informația să circule eficient prin impulsuri electrice.",
            "O stare de absență totală a activității nervoase.",
            "Proces exclusiv muscular, fără legătură cu activitatea cerebrală.",
          ],
          answer: 0,
        },
        {
          text: "Inhibiția este definită ca proces care:",
          options: [
            "Acționează opus excitației, frânând și blocând selectiv activitatea, pentru a regla distribuirea impulsurilor nervoase.",
            "Amplifică nelimitat toate procesele de excitație.",
            "Elimină definitiv posibilitatea de răspuns a neuronilor.",
          ],
          answer: 0,
        },
      ],
    },

    // S3. Anatomia Sistemului Nervos Central

    {
      id: "fph-t3f",
      title: "Anatomia Sistemului Nervos Central",
      questions: [
        {
          text: "Sistemul nervos central este alcătuit în principal din:",
          options: [
            "Encefal și măduva spinării.",
            "Creier, inimă și plămâni.",
            "Măduva spinării și sistemul muscular.",
          ],
          answer: 0,
        },
        {
          text: "Encefalul poate fi definit ca:",
          options: [
            "Ansamblul structurilor nervoase situate în cutia craniană.",
            "Orice formațiune nervoasă din afara craniului.",
            "Doar trunchiul cerebral, fără emisferele cerebrale.",
          ],
          answer: 0,
        },
        {
          text: "Măduva spinării este:",
          options: [
            "Porțiunea de sistem nervos central situată în canalul vertebral, asigurând legătura între encefal și restul corpului.",
            "Structura responsabilă exclusiv de emoții.",
            "O simplă prelungire a sistemului muscular.",
          ],
          answer: 0,
        },
        {
          text: "Cum putem diferenția, în mod simplificat, între termenii „creier”, „encefal” și „minte”?",
          options: [
            "Creierul este organul fizic, encefalul desemnează întregul ansamblu nervos intracranian, iar mintea se referă la activitatea psihică.",
            "Creierul și mintea sunt același lucru, encefalul fiind un termen complet diferit de acestea.",
            "Mintea este o structură anatomică distinctă, situată în afara creierului.",
          ],
          answer: 0,
        },
      ],
    },

    // S4. Neuronul, sinapsa și neurotransmițătorii

    {
      id: "fph-t3g",
      title: "Neuronul",
      questions: [
        {
          text: "Neuronul este:",
          options: [
            "Celula nervoasă, unitatea de bază a sistemului nervos, cu rol în generarea și conducerea impulsurilor nervoase.",
            "O celulă musculară responsabilă de contracție.",
            "O structură anatomică fără rol în transmiterea informației.",
          ],
          answer: 0,
        },
        {
          text: "Care este rolul principal al <span class='tip'><span class='tooltip-box'>Parte a neuronului care conține nucleul și structurile esențiale pentru menținerea activității celulei.</span>corpului celular</span>, al <span class='tip'><span class='tooltip-box'>Prelungiri scurte, ramificate, care recepționează impulsurile venite de la alți neuroni.</span>dendritelor</span> și al <span class='tip'><span class='tooltip-box'>Prelungire lungă, unică, ce conduce impulsul nervos de la corpul celular către alte celule.</span>axonului</span>?",
          options: [
            "Corpul celular menține și coordonează activitatea neuronului, dendritele preiau impulsuri, iar axonul le transmite mai departe.",
            "Dendritele conduc impulsul spre exterior, iar axonul îl recepționează.",
            "Corpul celular are doar rol decorativ în structura neuronului.",
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
            "Regiunea de comunicare dintre un neuron și o altă celulă, prin care se transmite impulsul nervos.",
            "Zona de contact dintre doi mușchi.",
            "Spațiul gol dintre două oase.",
          ],
          answer: 0,
        },
        {
          text: "Neurotransmițătorii, numiți și mediatori chimici, sunt:",
          options: [
            "Molecule eliberate în <span class='tip'><span class='tooltip-box'>Spațiul foarte îngust dintre doi neuroni, în care sunt eliberați neurotransmițătorii pentru a transmite semnalul.</span>fanta sinaptică</span>, care mijlocesc transmiterea impulsului nervos între neuroni.",
            "Celule nervoase cu rol de susținere.",
            "Substanțe nutritive folosite pentru producerea de energie musculară.",
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
          text: "Selectează exemple de neurotransmițători implicați în funcționarea sistemului nervos:",
          options: [
            "<span class='tip'>Dopamina<span class='tooltip-box'>Implicată în recompensă, motivație și controlul mișcării.</span></span>.",
            "<span class='tip'>Serotonina<span class='tooltip-box'>Implicată în reglarea dispoziției, somnului și apetitului.</span></span>.",
            "<span class='tip'>Endorfinele<span class='tooltip-box'>Substanțe cu efect analgezic și de producere a stării de bine.</span></span>.",
            "<span class='tip'>Adrenalina<span class='tooltip-box'>Implicați în reacțiile de tip luptă sau fugi, creșterea ritmului cardiac și mobilizarea energiei.</span></span>.",
            "<span class='tip'>Insulina<span class='tooltip-box'>Hormon produs de pancreas, esențial pentru reglarea nivelului de glucoză din sânge. Nu este un neurotransmițător și nu participă la transmiterea impulsurilor nervoase.</span></span>.",
          ],
          answer: [0, 1, 2, 3, 4],
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
          text: "Experimentarea conștientă presupune <span class='tip'>raportarea conștientă și activă<span class='tooltip-box'>Implicarea persoanei în mod voluntar, orientarea atenției și interpretarea stimulilor.</span></span> la stimuli interni și externi, cu procesarea informației și producerea comportamentelor specifice.",
          options: [
            "Un proces activ prin care individul interpretează stimulii și reacționează adaptativ.",
            "O reacție automată fără implicare psihică.",
            "Un proces strict fiziologic, fără componentă mentală.",
          ],
          answer: 0,
        },

        {
          text: "Ce exemplu ilustrează corect distincția dintre stimuli externi și stimuli interni?",
          options: [
            "Lumina și sunetele sunt stimuli externi; starea corporală și emoțiile sunt stimuli interni.",
            "Stimuli externi sunt doar emoțiile, iar cei interni doar percepțiile.",
            "Stimuli interni și externi sunt identici ca funcție.",
          ],
          answer: 0,
        },

        {
          text: "Experimentarea conștientă este posibilă prin activarea <span class='tip'><span class='tooltip-box'>Mecanismele prin care individul recepționează, prelucrează și interpretează informația.</span>proceselor cognitive</span>. Ce rol au acestea?",
          options: [
            "Permit cunoașterea, interpretarea și reprezentarea lumii.",
            "Se ocupă doar de reglarea emoțiilor.",
            "Nu au legătură cu comportamentele adaptative.",
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
          text: "Procesele cognitive senzoriale sunt descrise ca <span class='tip'>primare<span class='tooltip-box'>Cunoașterea senzorială este directă, nemijlocită: se bazează pe contact imediat cu stimulul.</span></span>. Ce înseamnă aceasta?",
          options: [
            "Sunt primele care prelucrează informația, prin contact direct cu stimulii.",
            "Apar doar în situații complexe.",
            "Necesită un efort mental ridicat.",
          ],
          answer: 0,
        },

        {
          text: "Selectează exemple de procese cognitive senzoriale:",
          options: [
            "Senzații, percepții, <span class='tip'>reprezentări<span class='tooltip-box'>Imagini mentale provenite din percepții, păstrând forma și structura obiectelor, chiar și în absența stimulului. Sunt considerate procese senzoriale primare deoarece reproduc experiența perceptivă, fără a o transforma conceptual.</span></span>.",
            "Memorie, gândire, imaginație.",
            "Motivație și afectivitate.",
          ],
          answer: 0,
        },

        {
          text: "Care afirmație surprinde cel mai bine procesele cognitive secundare?",
          options: [
            "Memoria, gândirea și imaginația prelucrează informația la un nivel superior, generând interpretări și soluții.",
            "Procesele secundare detectează stimulii direct.",
            "Apar exclusiv în somn.",
          ],
          answer: 0,
        },

        {
          text: "Sistemele cognitive au două proprietăți fundamentale: <span class='tip'>reprezentarea<span class='tooltip-box'>Crearea de modele mentale despre lume: obiecte, situații, concepte.</span></span> și <span class='tip'>calculul<span class='tooltip-box'>Operarea cu informații: analiză, comparație, inferență, rezolvare de probleme.</span></span>. Aceasta înseamnă că:",
          options: [
            "Cunoașterea implică atât formarea de imagini mentale, cât și prelucrarea logică a informației.",
            "Cunoașterea se reduce la memorie.",
            "Gândirea nu implică operații mentale.",
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
          text: "Selectează procesele care fac parte din procesele reglatorii ale vieții psihice:",
          options: [
            "Motivația.",
            "Afectivitatea.",
            "Voința.",
            "Percepția.",
            "Senzația.",
          ],
          answer: [0, 1, 2],
        },
        {
          text: "Procesele reglatorii includ motivația, afectivitatea și voința. Care este rolul lor?",
          options: [
            "Furnizează energia necesară pentru procesarea informației și producerea comportamentelor.",
            "Se ocupă exclusiv de amintiri.",
            "Sunt identice cu procesele senzoriale.",
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
          text: "<span class='tip'>Lobul frontal<span class='tooltip-box'>Situat în partea anterioară a encefalului, în spatele frunții. Este implicat în funcții executive (planificare, luare de decizii), control motor și producerea limbajului. Lista din item este o simplificare, nu acoperă toate funcțiile.</span></span> este responsabil de funcții precum <span class='tip'>planificarea<span class='tooltip-box'>Organizarea acțiunilor și anticiparea consecințelor.</span></span>, <span class='tip'>controlul motor<span class='tooltip-box'>Coordonarea mișcărilor voluntare.</span></span> și <span class='tip'>vorbirea<span class='tooltip-box'>Producerea limbajului (aria Broca).</span></span>. Ce descriere este corectă?",
          options: [
            "Lobul frontal este implicat, printre altele, în vorbire, planificare și controlul mișcărilor.",
            "Lobul frontal gestionează doar auzul.",
            "Lobul frontal are rol exclusiv emoțional.",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'>Lobul parietal<span class='tooltip-box'>Situat în partea superioară și posterioară a encefalului. Integrează informații tactile și spațiale și contribuie la conștiința corporală. Exemplele din item sunt orientative.</span></span> este implicat în procesarea <span class='tip'>atingerii<span class='tooltip-box'>Perceperea contactului, presiunii și vibrațiilor.</span></span>, a <span class='tip'>gustului<span class='tooltip-box'>Perceperea stimulilor chimici alimentari.</span></span> și în <span class='tip'>conștiința corporală<span class='tooltip-box'>Conștientizarea poziției, mișcărilor și limitelor propriului corp în spațiu.</span></span>. Ce funcție îi aparține?",
          options: [
            "Integrarea senzațiilor tactile și spațiale.",
            "Control exclusiv al mișcărilor fine.",
            "Producerea vorbirii.",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'>Lobul temporal<span class='tooltip-box'>Situat lateral, aproximativ în dreptul urechilor. Este implicat în auz, înțelegerea limbajului și recunoașterea unor tipare, precum fețele. Itemul evidențiază doar câteva funcții reprezentative.</span></span> este responsabil de:",
          options: [
            "Auz și recunoaștere facială.",
            "Planificarea mișcărilor.",
            "Percepții vizuale primare.",
          ],
          answer: 0,
        },

        {
          text: "Care este funcția <span class='tip'>lobului occipital<span class='tooltip-box'>Situat în partea posterioară a encefalului. Reprezintă zona principală de procesare a informațiilor vizuale. Și aici prezentăm doar funcția dominantă, nu toate rolurile posibile.</span></span>?",
          options: [
            "Procesarea informației vizuale.",
            "Coordonarea motricității fine.",
            "Reglarea echilibrului emoțional.",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'>Cerebelul<span class='tooltip-box'>Situat sub lobii occipitali, în partea posterioară și inferioară a encefalului. Are rol major în coordonarea mișcărilor, menținerea echilibrului și finețea execuțiilor motorii. Funcțiile menționate sunt exemplificative.</span></span> este responsabil de:",
          options: [
            "Coordonarea mișcărilor și menținerea echilibrului.",
            "Recunoașterea obiectelor.",
            "Interpretarea emoțiilor.",
          ],
          answer: 0,
        },
      ],
    },
    // S2. Integrare senzorială și multisenzorială

    {
      id: "fph-t4e",
      title: "Integrare senzorială și multisenzorială",
      questions: [
        {
          text: "Integrarea senzorială este definită ca procesul de organizare a senzațiilor din stimulare internă și externă, pentru utilizarea eficientă a organismului. Ce idee surprinde cel mai bine această definiție?",
          options: [
            "Creierul combină și organizează informațiile din corp și mediu pentru comportamente eficiente.",
            "Senzațiile sunt prelucrate separat și nu se influențează între ele.",
            "Integrarea se referă exclusiv la auz.",
          ],
          answer: 0,
        },

        {
          text: "Integrarea multisenzorială înseamnă crearea unei reprezentări întregi a lumii, care permite adaptare adecvată. Aceasta presupune:",
          options: [
            "Combinarea informațiilor din mai multe simțuri.",
            "Folosirea unui singur simț pentru toate sarcinile.",
            "Blocarea informațiilor vizuale.",
          ],
          answer: 0,
        },

        {
          text: "Care este diferența dintre integrarea senzorială și cea multisenzorială?",
          options: [
            "Integrarea senzorială prelucrează un singur simț; integrarea multisenzorială combină mai multe.",
            "Nu există nicio diferență.",
            "Multisenzorial se referă la activități fizice, senzorial la emoții.",
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
          text: "Ce afirmă <span class='tip'>regula spațială<span class='tooltip-box'>Integrarea multisenzorială apare mai ușor când stimulii provin din aceeași locație.</span></span>?",
          options: [
            "Stimulii se integrează mai eficient dacă provin din aceeași <span class='tip'>zonă spațială<span class='tooltip-box'>Se referă la aceeași locație din mediul înconjurător. De exemplu, dacă vezi gura unei persoane mișcându se și sunetul vocii pare să vină din același loc, creierul le combină mai ușor într-o singură percepție.</span></span>.",
            "Stimulii trebuie să fie cât mai îndepărtați unii de alții.",
            "Spațiul nu influențează integrarea.",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'>regula temporală<span class='tooltip-box'>Stimulii se integrează mai bine dacă apar simultan sau aproape simultan.</span></span>?",
          options: [
            "Integrarea e facilitată dacă stimulii apar în același interval de timp.",
            "Integrarea e mai bună dacă stimulii apar la distanțe mari în timp.",
            "Timpul nu influențează procesarea.",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'>principiul eficienței inverse<span class='tooltip-box'>Atunci când fiecare stimul, luat separat (ex. doar vizual sau doar auditiv), este slab și produce un răspuns redus, combinarea lor generează un răspuns mult mai puternic. Creierul compensează slăbiciunea fiecărui stimul prin integrare multisenzorială.</span></span>?",
          options: [
            "Stimulii slabi se integrează mai bine decât cei puternici, deoarece creierul „compensează” lipsa de intensitate prin integrare.",
            "Stimulii puternici sunt singurii care se pot integra.",
            "Integrarea nu depinde de puterea stimulului.",
          ],
          answer: 0,
        },

        {
          text: "Selectează toate regulile integrării multisenzoriale:",
          options: [
            "<span class='tip'>Regula spațială<span class='tooltip-box'>Integrarea este mai eficientă când stimulii provin din aceeași zonă a mediului. Exemplu: un sunet și o lumină venind din același loc sunt percepute ca aparținând aceluiași obiect.</span></span>.",
            "<span class='tip'>Regula temporală<span class='tooltip-box'>Stimulii se integrează mai ușor dacă apar simultan sau foarte aproape în timp. Exemplu: vedem un obiect lovind o suprafață și auzim sunetul aproape în același moment.</span></span>.",
            "<span class='tip'>Principiul eficienței inverse<span class='tooltip-box'>Integrarea este mai puternică atunci când fiecare stimul, luat separat, este slab. Creierul „compensează” prin combinarea lor, obținând un răspuns mai clar.</span></span>.",
            "<span class='tip'>Principiul identității absolute<span class='tooltip-box'>Fals. Nu există o astfel de regulă în studiul integrării multisenzoriale.</span></span>.",
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
          text: "Senzațiile sunt definite ca <span class='tip'>procese cognitive primare<span class='tooltip-box'>Primele trepte ale cunoașterii, bazate pe contactul direct cu stimulii, fără prelucrări complexe.</span></span>, prin care sunt semnalizate <span class='tip'>caracteristici simple<span class='tooltip-box'>Elemente de bază ale stimulului, precum intensitate, culoare, temperatură, durată.</span></span> ale stimulilor, ca răspuns la acțiunea directă asupra <span class='tip'>organelor de simț<span class='tooltip-box'>Ochii, urechile, pielea, nasul, limba și căile nervoase care trimit informația spre creier (în psihologie, acest ansamblu poartă numele de „analizator”.)</span></span>. Care afirmație redă cel mai bine această idee?",
          options: [
            "Procese psihice complexe ce implică în primul rând gândirea logică.",
            "Procese ce apar și în absența oricărui stimul extern sau intern.",
            "Procese cognitive primare prin care sunt semnalizate caracteristicile simple ale stimulilor atunci când aceștia acționează direct asupra organelor de simț.",
          ],
          answer: 2,
        },
        {
          text: "Senzațiile se produc doar dacă:",
          options: [
            "Stimulul acționează direct asupra organelor de simț.",
            "Ne imaginăm stimulul.",
            "Stimulul este extrem de puternic, altfel nu apare nicio senzație.",
          ],
          answer: 0,
        },
        {
          text: "Care sunt calitățile unei senzații?",
          options: [
            "<span class='tip'>Intensitatea<span class='tooltip-box'>Depinde de intensitatea stimulului și de starea generală a individului.</span></span>.",
            "<span class='tip'>Calitatea<span class='tooltip-box'>Dată de specificitatea analizatorului: vizual, auditiv etc.</span></span>.",
            "<span class='tip'>Durata<span class='tooltip-box'>Se schimbă în funcție de cât timp acționează stimulul.</span></span>.",
            "<span class='tip'>Tonalitatea afectivă<span class='tooltip-box'>Culoarea emoțională a senzației, influențată de experiența trecută.</span></span>.",
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
          text: "După natura conținutului informațional, senzațiile pot fi:",
          options: [
            "Senzații produse prin stimulare externă.",
            "Senzații produse prin stimulare internă.",
            "Senzații despre poziția și mișcarea corpului.",
            "Senzații rezultate exclusiv din imaginație.",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Selectează senzațiile produ­se prin stimulare externă:",
          options: [
            "<span class='tip'>Vizuale<span class='tooltip-box'>Apar prin acțiunea luminii asupra analizatorului vizual.</span></span>.",
            "<span class='tip'>Auditive<span class='tooltip-box'>Apar prin acțiunea undelor sonore asupra urechii.</span></span>.",
            "<span class='tip'>Gustative<span class='tooltip-box'>Se produc prin acțiunea substanțelor chimice în cavitatea bucală.</span></span>.",
            "<span class='tip'>Olfactive<span class='tooltip-box'>Apar prin acțiunea particulelor volatile asupra analizatorului olfactiv.</span></span>.",
            "<span class='tip'>Cutanate<span class='tooltip-box'>Apar la nivelul pielii (atingere, presiune, temperatură).</span></span>.",
            "Senzații de foame.",
          ],
          answer: [0, 1, 2, 3, 4],
        },

        {
          text: "Selectează senzațiile produse prin stimulare internă:",
          options: [
            "Foame.",
            "Sete.",
            "Durere organică.",
            "Vibrații auditive.",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Selectează senzațiile care informează despre poziția și mișcarea corpului:",
          options: [
            "<span class='tip'>Proprioceptive<span class='tooltip-box'>Semnalează postura trunchiului, membrelor și capului.</span></span>.",
            "<span class='tip'>Chinestezice<span class='tooltip-box'>Semnalează direcția, durata și intensitatea mișcării.</span></span>.",
            "<span class='tip'>De echilibru<span class='tooltip-box'>Semnalează schimbările poziției capului și ale întregului corp în raport cu gravitația.</span></span>.",
            "Gustative.",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // Subcapitol 3 – Legile sensibilității (A) – raportul stimul–senzație

    {
      id: "fph-t5c",
      title: "Legi primare ale sensibilității (stimul → senzație)",
      questions: [
        {
          text: "În categoria <span class='tip'>legi primare ale sensibilității<span class='tooltip-box'>Legi care descriu direct raportul dintre stimul și senzație în același analizator: când apare senzația și cum se modifică ea în funcție de stimul.</span></span> sunt incluse trei legi: <span class='tip'>legea intensității<span class='tooltip-box'>Leagă apariția și modificarea senzației de intensitatea stimulului (prag minimal absolut și prag diferențial).</span></span>, <span class='tip'>legea contrastului senzorial<span class='tooltip-box'>Arată cum stimuli cu proprietăți opuse se pun reciproc în evidență.</span></span> și <span class='tip'>legea semnificației<span class='tooltip-box'>Explică rolul importanței psihologice a stimulului în creșterea sensibilității.</span></span>. Ce au în comun aceste legi?",
          options: [
            "Descriu modul în care proprietățile stimulilor influențează direct apariția și intensitatea senzațiilor.",
            "Descriu exclusiv relațiile dintre analizatori diferiți, fără legătură cu stimulul inițial.",
            "Se referă doar la modificări pe termen lung ale sistemului nervos, fără legătură cu stimulii concreți.",
          ],
          answer: 0,
        },

        {
          text: "Conform <span class='tip'>legii intensității<span class='tooltip-box'>Un stimul produce o senzație doar dacă depășește un prag minimal absolut; schimbarea sesizabilă a senzației apare când diferența dintre doi stimuli depășește pragul diferențial.</span></span>, senzația apare doar dacă stimulul depășește un anumit prag. În acest context, <span class='tip'>pragul minimal absolut<span class='tooltip-box'>Nivelul minim de intensitate la care un stimul începe să fie perceput.</span></span> și <span class='tip'>pragul diferențial<span class='tooltip-box'>Diferența minimă de intensitate dintre doi stimuli pentru ca schimbarea să fie sesizabilă.</span></span> indică faptul că:",
          options: [
            "Apariția senzației și modificarea ei depind de trecerea peste anumite praguri de intensitate ale stimulului.",
            "Senzațiile apar indiferent de intensitatea stimulului și nu depind de niciun prag.",
            "Pragurile se referă numai la reacții motorii, nu și la senzații.",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'>legea contrastului senzorial<span class='tooltip-box'>Doi stimuli cu proprietăți opuse (de exemplu: cald–rece, luminos–întunecat) se evidențiază reciproc atunci când sunt comparați.</span></span>?",
          options: [
            "Stimuli cu caracteristici opuse se scot reciproc în evidență, făcând senzațiile mai clare.",
            "Stimuli similari sunt întotdeauna percepuți ca identici.",
            "Compararea între stimuli nu modifică felul în care sunt percepuți.",
          ],
          answer: 0,
        },

        {
          text: "Conform <span class='tip'>legii semnificației<span class='tooltip-box'>Cu cât un stimul este mai relevant sau important pentru individ, cu atât crește sensibilitatea față de el (ex.: reacția la propriul nume în zgomot).</span></span>, ce se întâmplă cu sensibilitatea senzorială?",
          options: [
            "Sensibilitatea crește pentru stimulii care au o semnificație mare pentru individ.",
            "Sensibilitatea scade pentru stimulii importanți, deoarece sunt procesați automat.",
            "Semnificația nu influențează în niciun fel apariția sau intensitatea senzațiilor.",
          ],
          answer: 0,
        },

        {
          text: "Selectează legile care explică modul în care proprietățile stimulilor (intensitate, opoziție, semnificație) influențează apariția senzațiilor:",
          options: [
            "<span class='tip'>Legea intensității<span class='tooltip-box'>Leagă apariția și modificarea senzației de intensitatea stimulului și de depășirea unor praguri (minimal absolut și diferențial).</span></span>.",
            "<span class='tip'>Legea contrastului senzorial<span class='tooltip-box'>Arată că stimuli opuși se evidențiază reciproc în percepție.</span></span>.",
            "<span class='tip'>Legea semnificației<span class='tooltip-box'>Explică de ce suntem mai sensibili la stimulii importanți pentru noi.</span></span>.",
            "<span class='tip'>Legea adaptării<span class='tooltip-box'>Lege reală a sensibilității, dar aparține altei categorii: descrie modificarea sensibilității în timp, sub acțiunea repetată a stimulilor, nu raportul direct stimul–senzație.</span></span>.",
          ],
          answer: [0, 1, 2],
        },
      ],
    },
    // Subcapitol 3 – Legile sensibilității (B) – adaptare și interacțiune

    {
      id: "fph-t5d",
      title:
        "Legi secundare ale sensibilității (schimbare în timp și interacțiune între analizatori)",
      questions: [
        {
          text: "În categoria <span class='tip'>legi secundare ale sensibilității<span class='tooltip-box'>Legi care descriu cum se modifică sensibilitatea în timp și cum interacționează între ele diferitele sisteme senzoriale (analizatori).</span></span> sunt incluse: <span class='tip'>legea adaptării<span class='tooltip-box'>Explică modificarea sensibilității unui analizator sub acțiunea repetată sau prelungită a unui stimul.</span></span>, și <span class='tip'>legea interacțiunii analizatorilor<span class='tooltip-box'>Explică influența reciprocă dintre diferitele sisteme senzoriale.</span></span>. Ce descriere surprinde cel mai bine rolul acestor legi?",
          options: [
            "Descriu cum se schimbă sensibilitatea în timp și cum se influențează reciproc diferitele sisteme senzoriale.",
            "Descriu doar raportul direct dintre intensitatea stimulului și apariția unei senzații într-un singur analizator.",
            "Se referă exclusiv la procese de gândire, fără legătură cu senzațiile.",
          ],
          answer: 0,
        },

        {
          text: "În psihologia senzorială, termenul <span class='tip'>analizator<span class='tooltip-box'>Ansamblu format din organul de simț (receptor), căile nervoase aferente și zona corticală în care se prelucrează informația.</span></span> se referă la:",
          options: [
            "Un sistem funcțional care cuprinde organul de simț, căile nervoase și zonele corticale specializate.",
            "Doar organul de simț (ex.: ochiul sau urechea), fără legătură cu creierul.",
            "Orice instrument de laborator folosit pentru măsurători.",
          ],
          answer: 0,
        },

        {
          text: "Conform <span class='tip'>legii interacțiunii analizatorilor<span class='tooltip-box'>Legea generală care afirmă că activarea unui analizator poate influența modul în care răspund și alți analizatori.</span></span>:",
          options: [
            "Senzațiile produse într-un analizator pot influența apariția sau modularea senzațiilor din altele.",
            "Analizatorii funcționează complet independent unii de alții.",
            "Fiecare analizator poate produce senzații doar izolat, fără influențe reciproce.",
          ],
          answer: 0,
        },

        {
          text: "Sub legea interacțiunii analizatorilor se află <span class='tip'>inducția reciprocă<span class='tooltip-box'>Un mod specific de interacțiune: stimularea unui analizator → inhibiție inițială în altul → urmată de excitație. Este un caz particular al legii generale.</span></span>. Ce descriere este corectă?",
          options: [
            "Fenomen în care activarea unui analizator determină inițial inhibiție, apoi excitație în alt analizator.",
            "O creștere constantă a sensibilității, indiferent de stimulare.",
            "O reacție exclusiv motorie, fără componentă senzorială.",
          ],
          answer: 0,
        },

        {
          text: "Tot în cadrul legii interacțiunii analizatorilor se află și <span class='tip'>sinestezia<span class='tooltip-box'>Manifestare particulară a interacțiunii: stimularea unui analizator produce o senzație specifică altuia (ex.: „a vedea sunete”, „culori dulci”).</span></span>. Cum este definit acest fenomen?",
          options: [
            "Producerea unei senzații proprii unui analizator prin stimularea altuia.",
            "Incapacitatea de a diferenția între stimuli.",
            "Pierderea temporară a sensibilității la un stimul.",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'>legea adaptării<span class='tooltip-box'>Sensibilitatea unui analizator se modifică (de obicei scade) sub acțiunea repetată sau prelungită a unui stimul; exemplu clasic: adaptarea vizuală.</span></span>?",
          options: [
            "Sensibilitatea analizatorilor se modifică sub acțiunea repetată a stimulilor.",
            "Sensibilitatea rămâne constantă indiferent de durata stimulului.",
            "Stimulii repetitivi devin automat din ce în ce mai puternici ca efect subiectiv.",
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
          text: "Percepțiile sunt <span class='tip'>procese cognitive primare<span class='tooltip-box'>Procese de bază ale cunoașterii, dar mai complexe decât senzațiile.</span></span> prin care sunt semnalizate <span class='tip'>informații complete<span class='tooltip-box'>Formă, mărime, orientare, relații spațiale.</span></span> despre stimul. Care definiție este corectă?",
          options: [
            "Procese prin care sunt integrate informațiile senzoriale într-o imagine unitară și coerentă.",
            "Procese care apar doar în absența stimulilor.",
            "Procese exclusiv reflexe.",
          ],
          answer: 0,
        },
      ],
    },

    // Subcapitol 2 – Legi ale percepției (organizare internă)
    {
      id: "fph-t5bb",
      title: "Legi care descriu organizarea internă a percepției",
      questions: [
        {
          text: "Aceste legi explică modul în care <span class='tip'>percepția<span class='tooltip-box'>Proces prin care informația senzorială devine imagine coerentă.</span></span> se organizează intern. Ce legi fac parte din această categorie?",
          options: [
            "Legea integralității, legea structuralității perceptive, legea selectivității perceptive.",
            "Legea constanței, legea semnificației, legea proiectivității.",
            "Legea contrastului și legea adaptării.",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'>legea integralității<span class='tooltip-box'>Percepția apare ca un întreg: esențial + detalii + context.</span></span>?",
          options: [
            "Imaginea perceptivă este unitară, nu o sumă de elemente separate.",
            "Se percep doar detaliile izolate.",
            "Imaginea perceptivă nu include contextul.",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'>legea structuralității perceptive<span class='tooltip-box'>Însușirile unui stimul se organizează în funcție de intensitatea lor și de informația pe care o transmit.</span></span>?",
          options: [
            "Caracteristicile stimulului sunt organizate ierarhic: cele mai intense și mai informative apar primele în plan perceptiv.",
            "Toate caracteristicile stimulului au aceeași importanță perceptivă.",
            "Percepția nu depinde de intensitatea sau informația transmisă de stimul.",
          ],
          answer: 0,
        },
        {
          text: "Ce afirmă <span class='tip'>legea selectivității perceptive<span class='tooltip-box'>Percepția privilegiază stimulii relevanți pentru individ.</span></span>?",
          options: [
            "Individul selectează stimulii mai relevanți pentru el și îi percepe mai clar.",
            "Toți stimulii sunt reflectați identic.",
            "Stimuli nerelevanți sunt întotdeauna percepuți intens.",
          ],
          answer: 0,
        },
      ],
    },

    // Subcapitol 2 – Legi ale percepției (stabilitate și direcționare)
    {
      id: "fph-t5bc",
      title: "Legi care descriu stabilitatea și direcționarea percepției",
      questions: [
        {
          text: "Aceste legi explică <span class='tip'>stabilitatea perceptivă<span class='tooltip-box'>Tendința obiectelor de a fi percepute constant.</span></span> și <span class='tip'>direcționarea imaginii perceptive<span class='tooltip-box'>Proiectarea imaginii către sursa stimulului.</span></span>. Ce legi fac parte din această categorie?",
          options: [
            "Legea constanței perceptive, legea semnificației și legea proiectivității.",
            "Legea integralității și legea selectivității.",
            "Legea contrastului și legea adaptării.",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'>legea constanței perceptive<span class='tooltip-box'>Forma, mărimea și culoarea sunt percepute relativ constante, indiferent de variațiile situaționale.</span></span>?",
          options: [
            "Obiectele își păstrează forma, mărimea și culoarea chiar dacă perspectiva sau iluminarea se modifică.",
            "Orice modificare fizică a situației schimbă complet percepția.",
            "Constanța există doar la persoanele cu experiență artistică.",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'>legea semnificației<span class='tooltip-box'>Stimulii relevanți pentru individ sunt percepuți cu prioritate.</span></span>?",
          options: [
            "Stimulii semnificativi sunt percepuți cu prioritate.",
            "Semnificația nu influențează percepția.",
            "Stimulii fără relevanță devin centrul câmpului perceptiv.",
          ],
          answer: 0,
        },

        {
          text: "Ce afirmă <span class='tip'>legea proiectivității imaginii perceptive<span class='tooltip-box'>Imaginea se formează în creier, dar noi o percepem ca fiind plasată în locul unde se află obiectul real.</span></span>?",
          options: [
            "Percepția este proiectată în direcția obiectului care a generat-o.",
            "Imaginea perceptivă este trăită ca fiind în interiorul minții, nu în exterior.",
            "Proiectivitatea apare doar în situații speciale sau iluzii.",
          ],
          answer: 0,
        },
      ],
    },

    // Subcapitol 3 – Forme ale percepției
    {
      id: "fph-t5bd",
      title: "Forme ale percepției",
      questions: [
        {
          text: "Percepția poate lua forme specifice în funcție de tipul informației: <span class='tip'>spațiu<span class='tooltip-box'>Formă, mărime, relief, poziție, distanță.</span></span>, <span class='tip'>timp<span class='tooltip-box'>Durată și succesiune.</span></span>, <span class='tip'>mișcare<span class='tooltip-box'>Detectarea deplasării obiectelor.</span></span>. Care variantă este corectă?",
          options: [
            "Spațiu, timp și mișcare.",
            "Doar spațiu.",
            "Doar timp și mișcare.",
          ],
          answer: 0,
        },

        {
          text: "Percepția proprietăților spațiale include:",
          options: [
            "Formă, mărime, relief, poziție și distanță.",
            "Doar perceperea formei.",
            "Doar perceperea reliefului.",
          ],
          answer: 0,
        },

        {
          text: "Percepția timpului include:",
          options: [
            "Succesiunea evenimentelor și durata lor.",
            "Doar perceperea duratei.",
            "Doar perceperea succesiunii.",
          ],
          answer: 0,
        },

        {
          text: "Percepția mișcării este influențată de:",
          options: [
            "Rolul reperelor și persistența imaginii retiniene.",
            "Doar intensitatea luminii.",
            "Doar semnificația stimulului.",
          ],
          answer: 0,
        },
      ],
    },

    // Subcapitol 3 – Iluzii perceptive
    {
      id: "fph-t5be",
      title: "Iluzii perceptive",
      questions: [
        {
          text: "Iluziile perceptive sunt <span class='tip'>distorsiuni<span class='tooltip-box'>Percepții deformate ale unui stimul real.</span></span> ale imaginii perceptive. Care dintre explicațiile de mai jos este corectă?",
          options: [
            "Iluziile apar din <span class='tip'>efecte de câmp<span class='tooltip-box'>Componentele din jurul stimulului acționează simultan cu acesta și modifică felul în care îi sunt recepționate semnalele.</span></span>: elementele contextului influențează percepția stimulului.",
            "Iluziile apar doar în absența totală a stimulilor.",
            "Iluziile apar doar din cauze medicale.",
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
          text: "Reprezentarea este un <span class='tip'>proces cognitiv-senzorial<span class='tooltip-box'>Proces psihic care păstrează și reconstruiește mental informațiile percepute anterior.</span></span> prin care sunt semnalizate <span class='tip'>caracteristici concrete<span class='tooltip-box'>Formă, culoare, dimensiune, contur.</span></span> și <span class='tip'>caracteristici reprezentative<span class='tooltip-box'>Trăsături esențiale ale obiectului care rămân stabile în minte.</span></span> ale stimulilor, sub forma unor <span class='tip'>imagini secundare<span class='tooltip-box'>Imagini mintale care apar în absența stimulului real.</span></span>, unitare, dar <span class='tip'>schematice<span class='tooltip-box'>Simplificate mental: păstrează doar elementele esențiale.</span></span>, în <span class='tip'>absența acțiunii nemijlocite<span class='tooltip-box'>Objectul nu mai acționează direct asupra organelor de simț.</span></span> a stimulilor asupra <span class='tip'>analizatorilor<span class='tooltip-box'>Sistemul receptor + căile nervoase + zonele corticale care procesează informația.</span></span>. Care variantă redă cel mai bine această idee?",
          options: [
            "Reprezentarea este imaginea mintală a unui obiect în absența lui, păstrând trăsăturile esențiale.",
            "Reprezentarea este perceperea directă a obiectelor prezente.",
            "Reprezentarea este un proces exclusiv verbal, fără legătură cu percepția.",
          ],
          answer: 0,
        },

        {
          text: "Reprezentările sunt <span class='tip'>imagini secundare<span class='tooltip-box'>Imagini mintale care continuă percepția după dispariția obiectului real.</span></span>. Ce înseamnă acest lucru?",
          options: [
            "Imaginea mentală rămâne disponibilă chiar și când obiectul nu mai este prezent.",
            "Imaginea mentală apare doar dacă obiectul se află în fața noastră.",
            "Imaginea mentală reproduce doar detalii irelevante.",
          ],
          answer: 0,
        },

        {
          text: "Reprezentările sunt unitare, dar <span class='tip'>schematice<span class='tooltip-box'>Ele rețin doar trăsăturile semnificative ale stimulului, nu și toate detaliile percepute inițial.</span></span>. Ce implică acest lucru?",
          options: [
            "Păstrează doar ceea ce este relevant pentru obiect.",
            "Sunt copii exacte ale percepției.",
            "Nu pot fi folosite în gândire.",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 2 – Caracteristicile și tipurile reprezentărilor
    {
      id: "fph-t6b",
      title: "Caracteristicile și tipurile reprezentărilor",
      questions: [
        {
          text: "Reprezentările sunt <span class='tip'>imagini mintale formate pe baza percepțiilor<span class='tooltip-box'>Sunt continuări ale percepțiilor: mențin informația chiar și după dispariția obiectului.</span></span>. Ce afirmă această idee?",
          options: [
            "Reprezentările continuă percepțiile și apar în absența obiectului.",
            "Reprezentările sunt percepții directe ale obiectelor prezente.",
            "Reprezentările apar fără nicio legătură cu percepția.",
          ],
          answer: 0,
        },

        {
          text: "După <span class='tip'>analizatorul<span class='tooltip-box'>Sistemul senzorial dominant care produce forma mentală: vizual, auditiv, chinestezic.</span></span> implicat, ce tipuri principale de reprezentări există?",
          options: [
            "<span class='tip'>Reprezentări vizuale<span class='tooltip-box'>Cele mai frecvente: forme, culori, contururi; domină experiența de reprezentare.</span></span>.",
            "<span class='tip'>Reprezentări auditive<span class='tooltip-box'>Sunete, ritmuri, melodii, reprezentări verbale.</span></span>.",
            "<span class='tip'>Reprezentări chinestezice<span class='tooltip-box'>Imagini ale mișcării: includ și micromișcările pregătitoare.</span></span>.",
            "<span class='tip'>Reprezentări gustative<span class='tooltip-box'>Nu sunt considerate tip principal: rareori generează imagini mentale clare; gustul este dificil de „vizualizat” și produce mai degrabă senzații decât reprezentări stabile.</span></span>.",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Conform lui J. Piaget, distingem două categorii: <span class='tip'>reprezentări reproductive<span class='tooltip-box'>Reproduc ceea ce a fost perceput anterior: pot fi statice, dinamice sau de transformare.</span></span> și <span class='tip'>reprezentări anticipative<span class='tooltip-box'>Imagine mentală despre ceva neperceput încă, generată de imaginație și gândire.</span></span>. Selectează variantele corecte:",
          options: [
            "Reprezentările reproductive reconstruiesc mental experiențe percepute anterior.",
            "Reprezentările anticipative permit formarea de imagini mentale despre situații nepercepute încă.",
            "Reprezentările reproductive descriu doar evenimente imaginare viitoare.",
            "Reprezentările anticipative sunt copii identice ale percepțiilor trecute.",
          ],
          answer: [0, 1],
        },

        {
          text: "Reprezentările anticipative se produc prin imaginație și gândire. Ce înseamnă asta?",
          options: [
            "Putem imagina obiecte sau situații care nu au fost percepute niciodată.",
            "Putem reproduce doar experiențele trecute, nu și situații noi.",
            "Reprezentările apar doar în stări modificate de conștiență.",
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
          text: "Memoria este un <span class='tip'>proces psihic<span class='tooltip-box'>Proces mental esențial, implicat în păstrarea și folosirea informațiilor în timp.</span></span> de <span class='tip'>stocare și destocare a informației<span class='tooltip-box'>Înseamnă atât păstrarea informațiilor, cât și accesarea lor ulterioară.</span></span>, de <span class='tip'>acumulare și utilizare a experienței cognitive<span class='tooltip-box'>Folosirea cunoștințelor, impresiilor și experiențelor învățate anterior în situații noi.</span></span>. Care variantă exprimă cel mai clar această definiție?",
          options: [
            "Memoria este capacitatea de a păstra informații și de a le regăsi și folosi atunci când avem nevoie de ele.",
            "Memoria este doar procesul prin care percepem informațiile prezente, fără a le păstra.",
            "Memoria este o simplă stocare pasivă a informațiilor, fără posibilitatea de a le utiliza.",
          ],
          answer: 0,
        },

        {
          text: "Care sunt principalele <span class='tip'>etape ale funcționării memoriei<span class='tooltip-box'>Cele trei mari procese implicate în funcționarea memoriei: înscrierea, păstrarea și regăsirea informației.</span></span>?",
          options: [
            "<span class='tip'>Întipărirea (engramarea)<span class='tooltip-box'>Momentul în care informația este înregistrată pentru prima dată în sistemul mnezic.</span></span>.",
            "<span class='tip'>Păstrarea (conservarea)<span class='tooltip-box'>Menținerea informației în timp în structurile de memorie.</span></span>.",
            "<span class='tip'>Reactualizarea<span class='tooltip-box'>Regăsirea și aducerea în conștiință a informațiilor stocate.</span></span>.",
            "Adaptarea senzorială.",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Reactualizarea se poate face sub două forme principale: <span class='tip'>recunoașterea<span class='tooltip-box'>Identificarea unei informații atunci când o reîntâlnim (de exemplu, recunoașterea unei fețe sau a unui cuvânt).</span></span> și <span class='tip'>reproducerea<span class='tooltip-box'>Redarea din memorie fără sprijin extern (de exemplu, a spune din memorie o definiție).</span></span>. Ce afirmație este corectă?",
          options: [
            "Recunoașterea apare când identificăm informația în prezența ei, iar reproducerea când o evocăm fără suport extern.",
            "Recunoașterea presupune mereu un efort mai mare decât reproducerea.",
            "Reproducerea nu este considerată o formă de reactualizare.",
          ],
          answer: 0,
        },

        {
          text: "Memoria este organizată în mai multe <span class='tip'>sisteme mnezice<span class='tooltip-box'>Structuri diferite ale memoriei, diferențiate prin durată, capacitate și rol funcțional.</span></span>. Care dintre următoarele sunt considerate astfel de sisteme?",
          options: [
            "<span class='tip'>Memoria senzorială (MS)<span class='tooltip-box'>Stocaj foarte de scurtă durată al informațiilor brute provenite din analizatori.</span></span>.",
            "<span class='tip'>Memoria de scurtă durată (MSD) / memoria de lucru<span class='tooltip-box'>Menține temporar informația activă pentru a fi folosită imediat.</span></span>.",
            "<span class='tip'>Memoria de lungă durată (MLD)<span class='tooltip-box'>Depozitul pe termen lung al cunoștințelor și experiențelor.</span></span>.",
            "Memoria instinctuală primară.",
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
          text: "Memoria senzorială (MS) reprezintă un <span class='tip'>stocaj senzorial<span class='tooltip-box'>Depozit foarte de scurtă durată al urmelor senzoriale brute (vizuale, auditive etc.).</span></span> care permite activarea <span class='tip'>detectorilor de trăsături<span class='tooltip-box'>Mecanisme specializate care identifică trăsături elementare ale stimulilor: linii, contururi, frecvențe, intensități.</span></span>, fără <span class='tip'>intervenția atenției<span class='tooltip-box'>Informația este reținută automat, preconștient; nu este nevoie să ne concentrăm voit asupra ei.</span></span>. Ce afirmație descrie corect rolul MS?",
          options: [
            "MS păstrează foarte pe scurt urmele senzoriale brute, permițând identificarea rapidă a trăsăturilor stimulilor, chiar înainte de focalizarea atenției.",
            "MS stochează pe termen lung toate experiențele de viață.",
            "MS funcționează doar atunci când suntem foarte atenți la un stimul.",
          ],
          answer: 0,
        },

        {
          text: "Care afirmație despre <span class='tip'>durata memoriei senzoriale<span class='tooltip-box'>Timpul extrem de scurt în care urmele senzoriale sunt păstrate în această memorie.</span></span> este corectă?",
          options: [
            "Durata MS este de ordinul zecilor de sutimi de secundă.",
            "Durata MS este de câteva ore.",
            "Durata MS este identică cu durata memoriei de lungă durată.",
          ],
          answer: 0,
        },

        {
          text: "Informația reținută în MS este considerată <span class='tip'>materie primă pentru prelucrări cognitive ulterioare<span class='tooltip-box'>Material de bază din care vor fi selectate, organizate și interpretate ulterior informațiile, prin atenție, percepție, memorie de lucru și gândire.</span></span>. Ce înseamnă aceasta?",
          options: [
            "Informațiile din MS sunt baza din care procesele ulterioare (atenția, percepția, memoria de lucru) aleg și organizează ceea ce va fi prelucrat mai departe.",
            "Informațiile din MS sunt direct transformate în amintiri de lungă durată, fără alte etape.",
            "Informațiile din MS nu au nicio legătură cu procesele cognitive ulterioare.",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 3 – Memoria de scurtă durată (MSD) – memoria de lucru

    {
      id: "fph-t7c",
      title: "Memoria de scurtă durată (MSD) – memoria de lucru",
      questions: [
        {
          text: "Memoria de scurtă durată (MSD) este adesea descrisă ca <span class='tip'>partea activă a memoriei de lungă durată<span class='tooltip-box'>Segmentul în care sunt aduse temporar informații din memoria de lungă durată pentru a fi folosite în sarcina curentă.</span></span>. Ce formulare explică cel mai clar această idee?",
          options: [
            "MSD presupune activarea temporară a unor informații din memoria de lungă durată pentru a le folosi în rezolvarea unei sarcini.",
            "MSD este un depozit definitiv al tuturor amintirilor noastre.",
            "MSD funcționează doar pentru informații complet noi, fără legătură cu memoria de lungă durată.",
          ],
          answer: 0,
        },

        {
          text: "MSD se mai numește și <span class='tip'>memorie de lucru<span class='tooltip-box'>Memorie implicată direct în îndeplinirea unei sarcini: menține și manipulează informații „aici și acum”.</span></span> deoarece:",
          options: [
            "Permite utilizarea în activitate a informațiilor stocate, menținându-le active cât timp avem nevoie de ele.",
            "Stochează informațiile doar în stare de somn.",
            "Se referă exclusiv la amintirile din copilărie.",
          ],
          answer: 0,
        },

        {
          text: "Capacitatea memoriei de lucru este aproximativ <span class='tip'>7 ± 2 elemente<span class='tooltip-box'>„Numărul magic 7” al lui Miller: în medie putem menține simultan în MSD între 5 și 9 unități de informație.</span></span>. Ce strategie poate crește volumul informației reținute?",
          options: [
            "<span class='tip'>Gruparea în unități cu sens („chunks”)<span class='tooltip-box'>Reorganizarea elementelor izolate în grupuri semnificative (ex.: cifrele 1-9-4-5 grupate ca „1945”).</span></span>.",
            "Repetarea mecanică a fiecărui element, fără nicio organizare.",
            "Ignorarea completă a structurii informației.",
          ],
          answer: 0,
        },

        {
          text: "Durata tipică a menținerii informației în MSD este:",
          options: [
            "Aproximativ 15–20 de secunde, dacă informația nu este repetată sau prelucrată.",
            "Câteva ore, indiferent de prelucrare.",
            "O fracțiune de secundă, identic cu memoria senzorială.",
          ],
          answer: 0,
        },

        {
          text: "Memoria de lucru (MSD) și atenția sunt descrise ca fiind <span class='tip'>coextensive în stare de relaxare<span class='tooltip-box'>În condiții obișnuite, ceea ce putem menține activ în MSD coincide în mare cu ceea ce putem cuprinde cu atenția.</span></span>. Ce mai afirmă <span class='tip'>Miclea (2003)<span class='tooltip-box'>Miclea, M. (2003). Psihologie cognitivă. Modele teoretico-experimentale. Iași: Polirom.</span></span> despre relația dintre ele?",
          options: [
            "Memoria de lucru are în general un volum mai stabil și o <span class='tip'>extensiune<span class='tooltip-box'>Cât de mult cuprinde sau acoperă un proces mental; dimensiunea „arii” de informație care poate fi gestionată simultan.</span></span> ușor mai mare decât atenția.",
            "Atenția are întotdeauna un volum mult mai mare decât memoria de lucru.",
            "Nu există nicio legătură funcțională între atenție și memoria de lucru.",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 4 – Memoria de lungă durată (MLD)

    {
      id: "fph-t7d",
      title: "Memoria de lungă durată (MLD)",
      questions: [
        {
          text: "Memoria de lungă durată (MLD) reprezintă <span class='tip'>ansamblul cunoștințelor<span class='tooltip-box'>Totalitatea informațiilor stocate: fapte, reguli, proceduri, amintiri personale.</span></span> pe care le deține un individ, cu o <span class='tip'>capacitate teoretic nelimitată<span class='tooltip-box'>În practică nu folosim totul, dar nu există un „număr maxim” strict de informații ce pot fi stocate.</span></span>. Ce afirmație este corectă?",
          options: [
            "MLD este depozitul pe termen lung al cunoștințelor și experiențelor unui individ, cu o capacitate practic nelimitată.",
            "MLD are o capacitate strict limitată la câteva zeci de elemente.",
            "MLD stochează doar informațiile pe care le-am învățat în ultimele zile.",
          ],
          answer: 0,
        },

        {
          text: "MLD răspunde necesităților memoriei de lucru prin <span class='tip'>activarea selectivă a unor informații<span class='tooltip-box'>Doar informațiile relevante pentru sarcina curentă sunt „chemate” în memoria de lucru.</span></span>. Ce descriere este corectă?",
          options: [
            "MLD pune la dispoziție informații specifice atunci când avem nevoie de ele, prin activarea lor selectivă în MSD.",
            "MLD trimite întotdeauna toate informațiile odată în MSD.",
            "MLD nu are niciun rol în rezolvarea sarcinilor curente.",
          ],
          answer: 0,
        },
      ],
    },

    // Subcapitol 3 – Alte categorizări ale memoriei
    // QUIZ 5 – Memoria explicită și memoria implicită

    {
      id: "fph-t7e",
      title: "Memoria explicită și memoria implicită",
      questions: [
        {
          text: "Memoria poate fi împărțită în <span class='tip'>memorie explicită (declarativă)<span class='tooltip-box'>Cunoștințe de care suntem conștienți și pe care le putem exprima verbal.</span></span> și <span class='tip'>memorie implicită (procedurală)<span class='tooltip-box'>Cunoștințe legate de deprinderi și proceduri, greu de pus în cuvinte (de exemplu, mersul pe bicicletă).</span></span>. Ce deosebire generală există între ele?",
          options: [
            "Memoria explicită se bazează pe conștientizare și exprimare verbală, în timp ce memoria implicită se exprimă prin acțiuni și deprinderi, fără a fi necesar să fie verbalizată.",
            "Ambele tipuri de memorie sunt complet identice ca funcție și conținut.",
            "Memoria implicită este întotdeauna conștientă și ușor de explicat în cuvinte.",
          ],
          answer: 0,
        },

        {
          text: "Memoria explicită sau declarativă cuprinde <span class='tip'>cunoștințe despre fapte, lucruri și stări<span class='tooltip-box'>De exemplu, „Paris este capitala Franței”, „2 + 2 = 4”, „Astăzi este marți”.</span></span>, care sunt conștientizate și exprimate în formă verbală. Ce afirmație este corectă?",
          options: [
            "Memoria explicită se referă la informații pe care le putem povesti, descrie sau explica în mod conștient.",
            "Memoria explicită se referă doar la deprinderi motorii automatizate.",
            "Memoria explicită nu poate fi exprimată prin limbaj.",
          ],
          answer: 0,
        },

        {
          text: "Memoria implicită sau procedurală se referă la <span class='tip'>reguli de execuție și proceduri<span class='tooltip-box'>Moduri de a face lucruri: de exemplu, cum conduci o mașină sau cum tastezi la calculator.</span></span>, care sunt dificil de verbalizat. Ce afirmație este corectă?",
          options: [
            "Memoria implicită se exprimă prin performanță (execuția unei sarcini), nu prin descriere verbală.",
            "Memoria implicită constă exclusiv în informații teoretice ușor de explicat.",
            "Memoria implicită nu are nicio legătură cu deprinderile automate.",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 6 – Memoria episodică și memoria semantică (Endel Tulving)

    {
      id: "fph-t7f",
      title: "Memoria episodică și memoria semantică",
      questions: [
        {
          text: "Memoria episodică și memoria semantică sunt două componente ale memoriei declarative. <span class='tip'>Memoria episodică<span class='tooltip-box'>Legată de evenimente personale trăite: „episoade” din viața proprie.</span></span> are un rol important în <span class='tip'>formarea și menținerea identității de sine<span class='tooltip-box'>Ne ajută să avem un sentiment al continuității propriei vieți: „cine sunt eu”, „ce am trăit”.</span></span>. Ce afirmație redă această idee?",
          options: [
            "Memoria episodică contribuie la sentimentul de identitate personală, prin amintirile autobiografice pe care le stocăm.",
            "Memoria semantică este singura formă de memorie care contribuie la identitatea de sine.",
            "Memoria episodică nu are nicio legătură cu modul în care ne percepem pe noi înșine.",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'>Memoria episodică<span class='tooltip-box'>Memorie a evenimentelor trăite: cine, ce, unde, când, în ce context.</span></span> se referă la:",
          options: [
            "Cunoștințe privitoare la evenimente autobiografice (amintiri despre ceea ce am trăit).",
            "Cunoștințe generale despre lume (noțiuni enciclopedice).",
            "Proceduri motorii și deprinderi automatizate.",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'>Memoria semantică<span class='tooltip-box'>Memorie a cunoștințelor generale despre lume: concepte, reguli, informații factuale.</span></span> se referă la:",
          options: [
            "Cunoștințe privitoare la mediul înconjurător și la informații factuale și conceptuale dobândite prin învățare.",
            "Amintiri strict legate de o zi anume din viața noastră.",
            "Doar deprinderi motorii automate, fără conținut conceptual.",
          ],
          answer: 0,
        },
      ],
    },

    // Subcapitol 4 – Ponturi pentru optimizarea memoriei
    // QUIZ 7 – Ponturi pentru optimizarea memoriei

    {
      id: "fph-t7g",
      title: "Ponturi pentru optimizarea memoriei",
      questions: [
        {
          text: "Selectează enunțurile care descriu corect factori ce facilitează memorarea. Ține cont că: <span class='tip'>unitățile informaționale cu sens<span class='tooltip-box'>Informații organizate logic sau legate de cunoștințe anterioare.</span></span>, <span class='tip'>concretul<span class='tooltip-box'>Exemple, imagini, situații concrete.</span></span>, <span class='tip'>repetiția<span class='tooltip-box'>Reluarea materialului în timp.</span></span> și <span class='tip'>semnificația<span class='tooltip-box'>Legătura cu interesele, nevoile și scopurile persoanei.</span></span> influențează retenția.",
          options: [
            "Unitățile informaționale cu sens se rețin mai mult timp decât informațiile fără sens.",
            "Aspectele concrete se rețin, în general, mai bine decât cele foarte abstracte.",
            "Informația repetată se reține mai mult timp decât cea nerepetată.",
            "Stimulii semnificativi pentru individ sunt, de obicei, mai rapid reținuți decât cei lipsiți de semnificație personală.",
            "Informațiile lipsite de sens și nerepetate se rețin cel mai bine.",
          ],
          answer: [0, 1, 2, 3],
        },

        {
          text: "<span class='tip'>Intenționalitatea memorării<span class='tooltip-box'>Decizia conștientă de a învăța un material.</span></span> este eficientă doar dacă este asociată cu o <span class='tip'>prelucrare de profunzime<span class='tooltip-box'>Procesarea materialului la nivel de semnificație: înțelegere, organizare, legare de cunoștințe anterioare.</span></span>. Ce afirmație este corectă?",
          options: [
            "A memora intenționat este eficient doar dacă înțelegem și procesăm în profunzime materialul, nu doar îl repetăm mecanic.",
            "Este suficient să ne propunem să memorăm, fără să conteze cum procesăm informația.",
            "Prelucrarea de profunzime scade eficiența memorării.",
          ],
          answer: 0,
        },

        {
          text: "Adâncimea procesării (nivelul de prelucrare a unui stimul) <span class='tip'>crește precizia memorării și actualizării<span class='tooltip-box'>Cu cât prelucrăm mai profund (semantic, legat de alte cunoștințe), cu atât reactivăm mai exact informația.</span></span>. În plus, <span class='tip'>motivația<span class='tooltip-box'>Nivelul de interes și implicare în sarcina de memorare.</span></span> trebuie să se situeze într-un <span class='tip'>optimum motivațional<span class='tooltip-box'>Nici prea scăzută (indiferență), nici excesiv de ridicată (anxietate paralizantă).</span></span>. Ce afirmație este corectă?",
          options: [
            "O prelucrare mai profundă a informației și o motivație moderată favorizează memorarea și reactualizarea mai precisă.",
            "Este mai bine să nu fim deloc motivați când memorăm, pentru a evita emoțiile.",
            "Cu cât motivația este mai extremă (foarte mică sau foarte mare), cu atât reactualizarea este mai bună.",
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
          text: "Gândirea este un <span class='tip'>proces psihic superior<span class='tooltip-box'>Proces mental complex care construiește sensuri, relații și structuri conceptuale, depășind percepția directă.</span></span> de <span class='tip'>prelucrare informațională<span class='tooltip-box'>Transformarea informației prin selecție, organizare, comparare și restructurare.</span></span>, prin care sunt extrase <span class='tip'>proprietăți esențiale<span class='tooltip-box'>Trăsături definitorii ale obiectelor, cele care nu se schimbă de la o situație la alta.</span></span>, sunt organizate <span class='tip'>clase de obiecte<span class='tooltip-box'>Grupări conceptuale: obiecte similare devin categorie (ex.: mamifere, fructe).</span></span> și sunt construite <span class='tip'>relații categoriale<span class='tooltip-box'>Legături logice între concepte: cauză–efect, parte–întreg, condiție–rezultat.</span></span>. Care afirmație exprimă corect această idee?",
          options: [
            "Gândirea extrage esențialul, clasifică obiectele și construiește relații conceptuale între ele.",
            "Gândirea reproduce pasiv informația percepută.",
            "Gândirea este o simplă reacție reflexă la stimuli.",
          ],
          answer: 0,
        },
        {
          text: "Gândirea funcționează <span class='tip'>prin mediere verbală<span class='tooltip-box'>Limbajul permite formularea și manipularea conceptelor, judecăților și raționamentelor.</span></span> și apare în <span class='tip'>interacțiunea persoană–mediu<span class='tooltip-box'>Gândirea se activează în situații, probleme și sarcini reale care cer o soluție.</span></span>. Ce formulare este corectă?",
          options: [
            "Gândirea se realizează prin limbaj și se activează în interacțiunea individului cu mediul.",
            "Gândirea apare independent de limbaj.",
            "Gândirea apare doar în percepția directă a obiectelor.",
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
          text: "Analiza este o <span class='tip'>operație fundamentală<span class='tooltip-box'>Una dintre cele două baze ale tuturor transformărilor cognitive.</span></span> prin care o unitate este <span class='tip'>descompusă mental<span class='tooltip-box'>Observarea părților componente ale unui obiect, fenomen sau concept.</span></span> pentru a identifica structura și relațiile interne. Care variantă este corectă?",
          options: [
            "Analiza presupune descompunerea mentală a unui obiect în părți pentru a înțelege structura lui.",
            "Analiza presupune reunirea unor elemente într-o nouă unitate.",
            "Analiza este reproducerea mecanică a informației.",
          ],
          answer: 0,
        },
        {
          text: "Sinteza este operația prin care sunt <span class='tip'>reunite sau reorganizate<span class='tooltip-box'>Combinația părților într-o structură nouă, superioară.</span></span> elemente pentru a obține o nouă schemă sau unitate cognitivă. Care enunț este corect?",
          options: [
            "Sinteza reunește elementele analizate într-o structură nouă și coerentă.",
            "Sinteza constă în compararea unor elemente izolate.",
            "Sinteza este simpla repetare a informației.",
          ],
          answer: 0,
        },
        {
          text: "De ce sunt <span class='tip'>analiza și sinteza<span class='tooltip-box'>Operații fundamentale din care derivă toate celelalte.</span></span> considerate baza întregului ansamblu al operațiilor gândirii?",
          options: [
            "Pentru că toate celelalte operații (comparația, abstractizarea, generalizarea etc.) se construiesc pe analiza trăsăturilor și sinteza relațiilor dintre ele.",
            "Pentru că sunt singurele operații folosite în viața cotidiană.",
            "Pentru că nu implică limbajul verbal.",
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
          text: "Comparația presupune stabilirea <span class='tip'>asemănărilor și deosebirilor<span class='tooltip-box'>Identificarea elementelor comune și a diferențelor relevante dintre două sau mai multe obiecte.</span></span> pe baza unui criteriu. Ce variantă este corectă?",
          options: [
            "Comparația evidențiază asemănările și diferențele dintre unități în funcție de un criteriu ales.",
            "Comparația este o simplă reproducere a informației.",
            "Comparația constă doar în repetarea unor detalii fără analiză.",
          ],
          answer: 0,
        },
        {
          text: "Abstractizarea este o <span class='tip'>formă superioară de analiză<span class='tooltip-box'>Selectează doar trăsăturile esențiale comune unei clase de obiecte.</span></span>, prin care sunt extrase <span class='tip'>proprietăți caracteristice<span class='tooltip-box'>Trăsături definitorii, stabile, necesare.</span></span>. Care enunț este corect?",
          options: [
            "Abstractizarea selectează trăsăturile esențiale ale unei clase de obiecte și ignoră detaliile nerelevante.",
            "Abstractizarea reunește părțile într-un întreg nou.",
            "Abstractizarea presupune enumerarea tuturor detaliilor posibile.",
          ],
          answer: 0,
        },
        {
          text: "Generalizarea este operația prin care se trece de la <span class='tip'>individual la general<span class='tooltip-box'>Extinderea trăsăturilor esențiale la o întreagă clasă de obiecte.</span></span>, prin construirea unui <span class='tip'>model reprezentativ<span class='tooltip-box'>Un prototip conceptual al clasei respective.</span></span>. Ce afirmație este corectă?",
          options: [
            "Generalizarea reunește trăsăturile abstractizate într-un model reprezentativ al unei clase.",
            "Generalizarea constă în compararea liberă a unor elemente fără criteriu.",
            "Generalizarea este o simplă repetare a informației.",
          ],
          answer: 0,
        },
        {
          text: "Concretizarea este operația prin care se trece de la <span class='tip'>abstract la concret<span class='tooltip-box'>Aplicarea unui concept general într-un exemplu particular.</span></span>. Ce variantă este corectă?",
          options: [
            "Concretizarea explică un concept general printr-un exemplu concret.",
            "Concretizarea constă în alegerea unui criteriu de comparare.",
            "Concretizarea este identică cu abstractizarea.",
          ],
          answer: 0,
        },
        {
          text: "Particularizarea presupune trecerea de la <span class='tip'>general la particular<span class='tooltip-box'>Aplicarea unei <strong>categorii generale</strong la un exemplu concret care îndeplinește criteriile ei.</span></span>. Ce enunț este corect?",
          options: [
            "Particularizarea aplică o <span class='tip'>categorie generală<span class='tooltip-box'>O clasă de obiecte definită prin trăsături esențiale (exemplu: „mamifer”, „fruct”, „instrument muzical”). Particularizarea înseamnă a lua această categorie și a arăta un exemplu concret care aparține ei.</span></span> unui caz individual.",
            "Particularizarea constă în selectarea trăsăturilor esențiale dintr-o mulțime de obiecte.",
            "Particularizarea este un tip de raționament inductiv complex.",
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
          text: "Produsele gândirii sunt <span class='tip'>rezultatele prelucrării conceptuale<span class='tooltip-box'>Forme mentale stabilizate: concepte, judecăți și raționamente.</span></span> care permit organizarea informațiilor despre lume. De ce sunt importante?",
          options: [
            "Pentru că permit reprezentarea abstractă, formularea regulilor și rezolvarea rațională a problemelor.",
            "Pentru că înlocuiesc complet percepția și memoria.",
            "Pentru că se formează doar prin imitație automată.",
          ],
          answer: 0,
        },
        {
          text: "Produsele gândirii se află în relație strânsă cu <span class='tip'>operațiile gândirii<span class='tooltip-box'>Procedeele prin care sunt construite conceptele, judecățile și raționamentele.</span></span>. Care formulare este corectă?",
          options: [
            "Operațiile (analiza, sinteza, abstractizarea etc.) sunt mecanismele prin care se formează produsele gândirii.",
            "Produsele gândirii apar fără niciun proces cognitiv.",
            "Produsele gândirii sunt identice cu percepțiile.",
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
          text: "Conceptele sunt <span class='tip'>unități de bază ale gândirii<span class='tooltip-box'>Cele mai simple forme logice prin care este reprezentată esența unei clase de obiecte.</span></span>, având rol de <span class='tip'>produs și instrument<span class='tooltip-box'>Rezultatul gândirii și mijloc prin care gândirea operează.</span></span>. Ce afirmație este corectă?",
          options: [
            "Conceptele sunt unități de bază ale gândirii, fiind în același timp produsul și instrumentul acesteia.",
            "Conceptele sunt doar etichete verbale fără conținut mental.",
            "Conceptele sunt amintiri perceptive detaliate.",
          ],
          answer: 0,
        },
        {
          text: "Conceptele sunt <span class='tip'>condensări selective de informație<span class='tooltip-box'>Rețin doar trăsăturile esențiale, necesare și generale, eliminând detaliile neimportante.</span></span>. Ce variantă exprimă corect această idee?",
          options: [
            "Conceptele rețin esențialul despre o clasă de obiecte și ignoră detaliile irelevante.",
            "Conceptele cuprind toate detaliile posibile pentru a fi cât mai exacte.",
            "Conceptele sunt simple imagini mentale perceptive.",
          ],
          answer: 0,
        },
        {
          text: "Conceptele sunt <span class='tip'>integratori categoriali<span class='tooltip-box'>Organizează obiectele în clase pe baza trăsăturilor comune.</span></span>. Ce enunț este corect?",
          options: [
            "Conceptele organizează obiectele în categorii prin identificarea trăsăturilor definitorii comune.",
            "Conceptele sunt liste de obiecte fără criterii conceptuale.",
            "Conceptele se formează independent de orice regulă.",
          ],
          answer: 0,
        },
        {
          text: "Conceptele au un <span class='tip'>conținut general și esențial<span class='tooltip-box'>Elemente conceptuale acceptate cultural și social.</span></span>, fiind condiționate <span class='tip'>sociocultural<span class='tooltip-box'>Se formează prin educație, limbaj, experiență socială.</span></span>. Care enunț este corect?",
          options: [
            "Conceptele au un conținut general, esențial și socio-cultural determinat.",
            "Conceptele sunt identice în toate culturile și nu se modifică prin învățare.",
            "Conceptele sunt trăsături pur perceptive fără influență socială.",
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
          text: "Judecățile sunt <span class='tip'>forme logice fundamentale<span class='tooltip-box'>Structuri ale gândirii care afirmă sau neagă o relație între concepte.</span></span> care stabilesc <span class='tip'>raporturi<span class='tooltip-box'>Legături conceptuale: ce este un obiect, ce face, ce proprietăți are.</span></span> între obiecte sau între un obiect și o proprietate. Care variantă este corectă?",
          options: [
            "Judecățile exprimă raporturi între concepte, afirmând sau negând ceva despre ele.",
            "Judecățile sunt simple etichete verbale fără funcție logică.",
            "Judecățile sunt forme de memorie senzorială.",
          ],
          answer: 0,
        },
        {
          text: "Judecățile pot fi <span class='tip'>atributive<span class='tooltip-box'>Descriu cum este obiectul: „floarea este roșie”.</span></span> sau <span class='tip'>predicative<span class='tooltip-box'>Descriu ce face obiectul: „copilul aleargă”.</span></span>. Ce enunț este corect?",
          options: [
            "Judecata atributivă spune cum este un obiect, iar judecata predicativă spune ce face acesta.",
            "Judecata atributivă se referă la acțiuni.",
            "Judecata predicativă se referă la culori sau proprietăți.",
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
          text: "Raționamentele sunt <span class='tip'>forme logice fundamentale<span class='tooltip-box'>Structuri cognitive care leagă mai multe judecăți între ele pentru a produce o concluzie.</span></span>, constând într-o <span class='tip'>înlanțuire de judecăți<span class='tooltip-box'>Premise succesive care duc la o concluzie.</span></span>. Care afirmație este corectă?",
          options: [
            "Raționamentele înlănțuie judecăți pentru a obține o concluzie logică.",
            "Raționamentele sunt simple impresii perceptive.",
            "Raționamentele sunt sinonime cu memoriile episodice.",
          ],
          answer: 0,
        },
        {
          text: "Un raționament are următoarele componente: <span class='tip'>premise<span class='tooltip-box'>Judecățile de plecare.</span></span>, <span class='tip'>inferință<span class='tooltip-box'>Operația mentală prin care se derivă concluzia din premise.</span></span> și <span class='tip'>concluzie<span class='tooltip-box'>Judecata finală obținută prin inferență.</span></span>. Ce enunț este corect?",
          options: [
            "Premisele sunt judecățile de plecare, iar inferența este <span class='tip'>derivarea<span class='tooltip-box'>A obține o afirmație nouă plecând de la informațiile existente; legătura logică dintre premise și concluzie.</span></span>, iar concluzia este rezultatul final.",
            "Concluzia apare înaintea premiselor.",
            "Inferența înseamnă reținerea pasivă a unei informații.",
          ],
          answer: 0,
        },
        {
          text: "Raționamentele pot fi de tip <span class='tip'>deductiv<span class='tooltip-box'>De la general la particular: aplicarea unei reguli generale la un caz concret.</span></span>, <span class='tip'>ipotetico-deductiv<span class='tooltip-box'>Structură condițională de tip „dacă..., atunci...”.</span></span> sau <span class='tip'>inductiv<span class='tooltip-box'>De la particular la general: extragerea unei reguli din exemple concrete.</span></span>. Selectează afirmațiile corecte:",
          options: [
            "Un raționament deductiv pornește de la general și aplică regula unui caz particular.",
            "Un raționament inductiv pornește de la exemple particulare și ajunge la o regulă generală.",
            "Un raționament ipotetico-deductiv folosește structuri condiționale de tipul „dacă..., atunci...”.",
            "Un raționament inductiv funcționează doar dacă există o singură observație particulară.",
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
          text: "Activitățile gândirii sunt <span class='tip'>moduri de utilizare aplicată a operațiilor<span class='tooltip-box'>Gândirea pusă în acțiune pentru rezolvarea sarcinilor reale: învățare, înțelegere, planificare, rezolvare de probleme.</span></span>. Ce afirmație este corectă?",
          options: [
            "Activitățile gândirii sunt forme aplicate ale operațiilor mentale în situații concrete.",
            "Activitățile gândirii sunt identice cu procesele senzoriale.",
            "Activitățile gândirii sunt complet independente de operațiile mentale.",
          ],
          answer: 0,
        },
        {
          text: "De ce sunt importante activitățile gândirii?",
          options: [
            "Pentru că ele arată modul în care gândirea funcționează efectiv în rezolvarea sarcinilor.",
            "Pentru că sunt identice cu memoria implicită.",
            "Pentru că nu au legătură cu învățarea sau înțelegerea.",
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
          text: "Selectează exemplele corecte ale <span class='tip'>relațiilor necesare<span class='tooltip-box'>Legături logice stabile între concepte: subordonare, coordonare și supraordonare, determinate de trăsăturile esențiale ale conceptelor.</span></span> dintre concepte: <span class='tip'>subordonare<span class='tooltip-box'>Un concept particular este inclus într-unul general (ex.: câine → mamifer).</span></span>, <span class='tip'>coordonare<span class='tooltip-box'>Două concepte se află la același nivel de generalitate.</span></span> și <span class='tip'>supraordonare<span class='tooltip-box'>Un concept general include concepte particulare.</span></span>. Selectează variantele corecte:",
          options: [
            "Câine → mamifer (subordonare: câinele este un caz particular al categoriei mamifer).",
            "Câine ↔ pisică (coordonare: două concepte aflate la același nivel, ambele fiind mamifere).",
            "Mamifer → câine (supraordonare: categoria mamifer include conceptul câine).",
            "Fruct → măr (subordonare: fructul este un caz particular al categoriei măr).",
          ],
          answer: [0, 1, 2],
        },
        {
          text: "Conceptualizarea presupune organizarea conceptelor în structuri ierarhice, precum <span class='tip'>piramida conceptelor (Vîgotski)<span class='tooltip-box'>Implică relații de subordonare, coordonare și supraordonare între concepte.</span></span>. Ce enunț este corect?",
          options: [
            "Conceptualizarea organizează conceptele în structuri ierarhice cu <span class='tip'>relații necesare<span class='tooltip-box'>Legături stabile și obligatorii între concepte: unele sunt incluse în altele (subordonare), unele sunt la același nivel (coordonare), iar altele le includ pe celelalte (supraordonare). Aceste relații nu sunt aleatorii, ci rezultă din definițiile și trăsăturile esențiale ale conceptelor.</span></span> între ele.",
            "Conceptualizarea constă doar în memorarea definițiilor.",
            "Conceptualizarea nu implică nicio relație între concepte.",
          ],
          answer: 0,
        },
        {
          text: "Formarea conceptelor are loc în <span class='tip'>procesul învățării<span class='tooltip-box'>Se bazează pe experiență, limbaj, cultură, educație.</span></span>, având o puternică <span class='tip'>determinare socioculturală<span class='tooltip-box'>Cultura și limbajul modelează modul în care formăm și folosim conceptele.</span></span>. Care afirmație este corectă?",
          options: [
            "Conceptualizarea este influențată de factorii socioculturali și se formează prin învățare.",
            "Conceptualizarea este înnăscută și nu se modifică prin educație.",
            "Conceptualizarea este identică cu percepția senzorială.",
          ],
          answer: 0,
        },
        {
          text: "În formele sale superioare, conceptualizarea presupune <span class='tip'>rafinarea cunoașterii<span class='tooltip-box'>Trecerea de la înțelegerea empirică la cea științifică, prin abstractizare și sistematizare.</span></span>. Care enunț este corect?",
          options: [
            "Conceptualizarea avansată presupune trecerea de la empiric la științific.",
            "Conceptualizarea superioară elimină complet necesitatea logicii.",
            "Conceptualizarea nu se modifică prin învățare suplimentară.",
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
          text: "Înțelegerea este <span class='tip'>latura funcțională permanentă a gândirii<span class='tooltip-box'>Se activează de fiecare dată când procesăm informații noi și le integrăm în structurile cognitive existente.</span></span>. Ce afirmație este corectă?",
          options: [
            "Înțelegerea se referă la raportarea informațiilor noi la cele deja existente.",
            "Înțelegerea este identică cu memoria pe termen scurt.",
            "Înțelegerea este o operație senzorială primară.",
          ],
          answer: 0,
        },
        {
          text: "Înțelegerea poate urmări diverse scopuri: <span class='tip'>identificarea unui obiect<span class='tooltip-box'>Ex.: recunoașterea unei specii după caracteristici.</span></span>, <span class='tip'>descoperirea principiului de funcționare<span class='tooltip-box'>Ex.: cum funcționează un mecanism.</span></span>, <span class='tip'>surprinderea relațiilor dintre fenomene<span class='tooltip-box'>Ex.: relația cauză–efect.</span></span>. Care afirmatie este corectă?",
          options: [
            "Înțelegerea poate avea ca scop identificarea, explicarea sau relaționarea informațiilor.",
            "Înțelegerea urmărește un singur scop: memorarea.",
            "Înțelegerea nu se aplică fenomenelor complexe.",
          ],
          answer: 0,
        },
        {
          text: "Înțelegerea poate fi <span class='tip'>simplă și spontană<span class='tooltip-box'>Apare imediat, fără analiză aprofundată.</span></span> sau <span class='tip'>discursivă<span class='tooltip-box'>Necesită explorare, analiză, raționament.</span></span>. Care variantă este corectă?",
          options: [
            "Înțelegerea spontană apare rapid, iar cea discursivă se construiește treptat prin analiză.",
            "Înțelegerea spontană presupune raționamente complexe.",
            "Înțelegerea discursivă este instantanee.",
          ],
          answer: 0,
        },
        {
          text: "Înțelegerea duce la <span class='tip'>restructurarea schemelor cognitive<span class='tooltip-box'>Actualizarea și modificarea cunoștințelor anterioare pentru a integra informații noi.</span></span>. Ce enunț este corect?",
          options: [
            "Înțelegerea modifică și îmbunătățește structurile cognitive existente.",
            "Înțelegerea nu afectează structurile cognitive anterioare.",
            "Înțelegerea este independentă de cunoștințele anterioare.",
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
          text: "<span class='tip'>Algoritmica<span class='tooltip-box'>Strategie standardizată, cu pași fixați, aplicabilă repetitiv.</span></span> este o structură organizată din operații succesive stabilite prin reguli precise. Ce afirmație este corectă?",
          options: [
            "Algoritmica implică aplicarea unei succesiuni fixe de pași pentru rezolvarea unei sarcini.",
            "Algoritmica presupune explorare liberă fără pași stabiliți.",
            "Algoritmica nu poate fi învățată sau aplicată.",
          ],
          answer: 0,
        },
        {
          text: "<span class='tip'>Euristica<span class='tooltip-box'>Strategie flexibilă de explorare a posibilităților, implicând creativitate și descoperire.</span></span> este opusă algoritmicii. Care enunț este corect?",
          options: [
            "Euristica explorează deschis și flexibil soluții multiple, deseori favorizând descoperirea și creativitatea.",
            "Euristica presupune pași rigizi și fixați.",
            "Euristica nu poate fi folosită în rezolvarea problemelor.",
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
          text: "Gândirea convergentă presupune <span class='tip'>căutarea unei soluții corecte<span class='tooltip-box'>Se bazează pe logică, reguli, analiză și structură.</span></span>, în timp ce gândirea divergentă generează <span class='tip'>multiple soluții posibile<span class='tooltip-box'>Se bazează pe flexibilitate, imaginație, creativitate.</span></span>. Care afirmație este corectă?",
          options: [
            "Gândirea convergentă caută soluția unică optimă, iar gândirea divergentă explorează multiple posibilități.",
            "Gândirea convergentă este identică cu gândirea creativă.",
            "Gândirea divergentă funcționează doar în situații matematice.",
          ],
          answer: 0,
        },
        {
          text: "Care situație ilustrează gândirea convergentă?",
          options: [
            "Rezolvarea unui exercițiu cu răspuns unic corect.",
            "Generarea cât mai multor idei originale într-un brainstorming.",
            "Explorarea liberă a unor posibilități fără criteriu.",
          ],
          answer: 0,
        },
        {
          text: "Care situație ilustrează gândirea divergentă?",
          options: [
            "Inventarea mai multor moduri în care poate fi folosit un obiect obișnuit.",
            "Aplicarea unei reguli fixe pentru a calcula un rezultat.",
            "Căutarea unei singure soluții corecte.",
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
          text: "Motivația este definită ca un <span class='tip'>ansamblu de stări de necesitate<span class='tooltip-box'>Nevoi interne – fiziologice sau psihologice – care solicită organismul și generează impulsul spre acțiune.</span></span> cu <span class='tip'>proprietatea de activare<span class='tooltip-box'>Pun organismul „în mișcare” prin declanșarea unei tensiuni interne.</span></span> și <span class='tip'>stimulare a comportamentului<span class='tooltip-box'>Direcționează acțiunile spre reducerea tensiunii și satisfacerea necesității.</span></span>. Care variantă exprimă corect această idee?",
          options: [
            "Motivația reprezintă setul de nevoi interne care activează și orientează comportamentul spre satisfacerea lor.",
            "Motivația este doar un proces cognitiv rece, fără încărcătură energetică.",
            "Motivația apare doar în situații sociale, nu și fiziologice.",
          ],
          answer: 0,
        },

        {
          text: "Ce înseamnă că motivația <span class='tip'>determină comportamente<span class='tooltip-box'>Direcționează acțiunile spre scopuri care reduc tensiunea apărută din necesitate.</span></span>?",
          options: [
            "Comportamentul este orientat către satisfacerea unei nevoi.",
            "Comportamentul este întâmplător.",
            "Comportamentul apare doar dacă există presiune externă.",
          ],
          answer: 0,
        },
      ],
    },

    // Subcapitol 2 – Funcțiile motivației
    // QUIZ 2 – Funcțiile motivației
    {
      id: "fph-t9b",
      title: "Funcțiile motivației",
      questions: [
        {
          text: "Funcțiile motivației exprimă <span class='tip'>rolul proceselor motivaționale<span class='tooltip-box'>Motivația reglează energia, direcția și controlul conduitei.</span></span> în inițierea și menținerea comportamentelor. Care afirmație surprinde cel mai bine această idee?",
          options: [
            "Funcțiile motivației explică de ce apare comportamentul, cât de intens este și cum este reglat.",
            "Funcțiile motivației descriu doar reacțiile reflexe.",
            "Funcțiile motivației sunt identice cu cele ale memoriei.",
          ],
          answer: 0,
        },

        {
          text: "Selectează funcția care descrie <span class='tip'>activarea internă<span class='tooltip-box'>Starea de tensiune generată de o necesitate internă.</span></span> și <span class='tip'>semnalizarea unui dezechilibru<span class='tooltip-box'>Organismul detectează o lipsă: foame, sete, nevoi psihologice etc.</span></span>:",
          options: [
            "Funcția de activare internă și semnalizare a dezechilibrului.",
            "Funcția de autoreglare a conduitei.",
            "Funcția de memorare a experiențelor motivaționale.",
          ],
          answer: 0,
        },

        {
          text: "Selectează funcția motivațională care <span class='tip'>energizează<span class='tooltip-box'>Furnizează energia necesară comportamentului.</span></span> și <span class='tip'>direcționează comportamentul<span class='tooltip-box'>Orientează organismul spre reducerea dezechilibrului.</span></span>:",
          options: [
            "Funcția de energizare și direcționare.",
            "Funcția de adaptare senzorială.",
            "Funcția de depozitare a informației.",
          ],
          answer: 0,
        },

        {
          text: "Care funcție transformă comportamentul într-o conduită <span class='tip'>activ selectivă<span class='tooltip-box'>Alegerea acțiunilor cele mai potrivite pentru atingerea scopului.</span></span>?",
          options: [
            "Funcția de autoreglare a conduitei.",
            "Funcția de activare internă.",
            "Funcția de contrast motivațional.",
          ],
          answer: 0,
        },
        {
          text: "Selectează <span class='tip'>funcțiile fundamentale ale motivației<span class='tooltip-box'>Funcțiile motivației descriu rolurile prin care aceasta influențează declanșarea, orientarea și controlul comportamentului.</span></span>:",
          options: [
            "<span class='tip'>Funcția de activare internă și semnalizare a dezechilibrului<span class='tooltip-box'>Indică apariția unei stări de necesitate sau tensiune, fiziologică ori psihologică.</span></span>.",
            "<span class='tip'>Funcția de energizare și direcționare a comportamentului<span class='tooltip-box'>Declanșează și susține acțiunile orientate spre reducerea dezechilibrului.</span></span>.",
            "<span class='tip'>Funcția de autoreglare a conduitei<span class='tooltip-box'>Permite controlul și ajustarea comportamentului în funcție de scopuri și condiții.</span></span>.",
            "<span class='tip'>Funcția de stocare a informațiilor<span class='tooltip-box'>Aparține memoriei, nu motivației.</span></span>.",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // Subcapitol 3 – Structuri motivaționale
    // QUIZ 3 – Introducere în structuri motivaționale
    {
      id: "fph-t9c-intro",
      title: "Structuri motivaționale – Introducere",
      questions: [
        {
          text: "Ce exprimă noțiunea de <span class='tip'>structuri motivaționale<span class='tooltip-box'>Ansambluri relativ stabile de componente motivaționale care organizează și susțin comportamentul individului în timp.</span></span>?",
          options: [
            "Totalitatea formelor prin care motivația se organizează și se exprimă în conduită.",
            "Reacții reflexe automate, fără implicare psihică.",
            "Procese cognitive senzoriale primare.",
            "Stări afective izolate, fără legătură cu acțiunea.",
          ],
          answer: 0,
        },
        {
          text: "Care dintre următoarele fac parte din <span class='tip'>structurile motivaționale<span class='tooltip-box'>Forme psihice prin care motivația se organizează, se stabilizează și se exprimă în conduită.</span></span>, și NU sunt reacții automate sau reflexe?",
          options: [
            "Reflexele necondiționate – reacții automate, fără rol motivațional.",
            "Trebuințele – stări de necesitate care declanșează și susțin comportamente.",
            "Motivele – trebuințe conștientizate și orientate spre acțiune.",
            "Interesele – orientări selective și relativ stabile către anumite activități.",
            "Convingerile – idei-valoare cu încărcătură afectivă, care mobilizează conduita.",
            "Idealurile – modele valorice de perfecțiune către care individul tinde.",
          ],
          answer: [1, 2, 3, 4, 5],
        },
      ],
    },

    // QUIZ 4 – Trebuințele
    {
      id: "fph-t9c1",
      title: "Trebuințele",
      questions: [
        {
          text: "Trebuințele sunt <span class='tip'>forțe motrice fundamentale<span class='tooltip-box'>Sursa de energie psihică ce pune în mișcare comportamentul.</span></span> care mențin <span class='tip'>echilibrul biopsihosocial<span class='tooltip-box'>Armonia dintre procese fiziologice, psihice și sociale.</span></span>. Ce variantă este corectă?",
          options: [
            "Trebuințele sunt surse interne care solicită organismul și îi mențin echilibrul prin comportamente adecvate.",
            "Trebuințele sunt simple dorințe fără impact asupra comportamentului.",
            "Trebuințele apar doar în situații sociale.",
          ],
          answer: 0,
        },

        {
          text: "Selectează exemple de <span class='tip'>trebuințe primare<span class='tooltip-box'>Înnăscute; legate de supraviețuire și integritatea fizică.</span></span>:",
          options: [
            "Foame.",
            "Sete.",
            "Somn.",
            "Nevoia de mișcare sau relaxare.",
            "Nevoia de statut social.",
          ],
          answer: [0, 1, 2, 3],
        },

        {
          text: "Selectează exemple de <span class='tip'>trebuințe secundare<span class='tooltip-box'>Dobândite; legate de integrarea psihologică și socială.</span></span>:",
          options: [
            "Nevoia de comunicare.",
            "Nevoia de autoactualizare.",
            "Nevoia de confort.",
            "Sete.",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Ce se întâmplă când trebuințele nu sunt satisfăcute?",
          options: [
            "Se amplifică energia tensiunii interne sau pot fi inhibate prin mecanisme de apărare.",
            "Dispar automat fără efect asupra individului.",
            "Nu influențează deloc comportamentul.",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 5 – Motivele
    {
      id: "fph-t9c2",
      title: "Motivele",
      questions: [
        {
          text: "Motivul este definit ca o <span class='tip'>forță motrică<span class='tooltip-box'>Energia psihică ce pune în mișcare acțiunea.</span></span> care <span class='tip'>declanșează<span class='tooltip-box'>Face să înceapă comportamentul.</span></span>, <span class='tip'>susține energetic<span class='tooltip-box'>Menține comportamentul pe durata acțiunii.</span></span> și <span class='tip'>direcționează<span class='tooltip-box'>Orientează comportamentul spre un scop.</span></span> acțiunea. Care variantă este corectă?",
          options: [
            "Motivul activează, menține și direcționează comportamentul spre scopul dorit.",
            "Motivul este doar o idee abstractă fără impact comportamental.",
            "Motivul apare doar în situații extreme.",
          ],
          answer: 0,
        },

        {
          text: "Motivele sunt <span class='tip'>trebuințe conștientizate<span class='tooltip-box'>Individul știe ce nevoie are și o transformă în scop.</span></span>. Ce înseamnă asta?",
          options: [
            "Individul devine conștient de nevoile sale și acționează pentru satisfacerea lor.",
            "Motivele sunt doar reacții automate, inconștiente.",
            "Motivele apar doar când cineva ne obligă la acțiune.",
          ],
          answer: 0,
        },

        {
          text: "Selectează manifestări ale <span class='tip'>constelațiilor motivaționale<span class='tooltip-box'>Configurații de motive care coexistă și interacționează, influențând alegerile și conduita individului.</span></span>:",
          options: [
            "<span class='tip'>Optare – alegerea unui motiv dominant<span class='tooltip-box'>Un motiv este resimțit ca mai important decât altele și ghidează decizia și acțiunea.</span></span>.",
            "<span class='tip'>Coroborare – susținerea reciprocă a motivelor<span class='tooltip-box'>Mai multe motive se asociază și se întăresc reciproc în realizarea aceleiași activități.</span></span>.",
            "<span class='tip'>Conflict – opoziție între motive<span class='tooltip-box'>Două sau mai multe motive trag conduita în direcții diferite, generând tensiune și frustrare.</span></span>.",
            "Blocarea totală a motivației – absența oricărei orientări spre acțiune.",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // QUIZ 6 – Interesele
    {
      id: "fph-t9c3",
      title: "Interesele",
      questions: [
        {
          text: "Interesele sunt <span class='tip'>formațiuni motivaționale complexe<span class='tooltip-box'>Presupun orientări psihice stabile spre anumite domenii sau activități.</span></span>. Ce afirmă cel mai corect această idee?",
          options: [
            "Interesele sunt orientări selective și stabile către anumite activități.",
            "Interesele sunt reacții emoționale trecătoare.",
            "Interesele sunt exclusiv înnăscute.",
          ],
          answer: 0,
        },

        {
          text: "Interesele implică <span class='tip'>raportări cognitive, afective și volitive<span class='tooltip-box'>Gândim, simțim și acționăm în acord cu domeniul de interes.</span></span>. Ce rezultă de aici?",
          options: [
            "Interesele se exprimă prin implicare activă în activități.",
            "Interesele nu influențează comportamentul.",
            "Interesele apar doar ca rezultat al presiunii sociale.",
          ],
          answer: 0,
        },

        {
          text: "Interesele au <span class='tip'>efect formativ<span class='tooltip-box'>Contribuie la dezvoltarea personalității prin activitățile realizate.</span></span>. Ce înseamnă asta?",
          options: [
            "Participarea la activități de interes dezvoltă abilități și trăsături personale.",
            "Interesele limitează dezvoltarea individului.",
            "Interesele nu au consecințe asupra personalității.",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 7 – Convingerile
    {
      id: "fph-t9c4",
      title: "Convingerile",
      questions: [
        {
          text: "Convingerile sunt <span class='tip'>judecăți puternic impregnate afectiv<span class='tooltip-box'>Idei asociate cu emoții puternice, care devin surse de acțiune.</span></span>. Ce implică asta?",
          options: [
            "Convingerile mobilizează individul spre acțiune.",
            "Convingerile sunt neutre din punct de vedere afectiv.",
            "Convingerile nu influențează comportamentul.",
          ],
          answer: 0,
        },

        {
          text: "Convingerile sunt legate de <span class='tip'>sistemul valoric<span class='tooltip-box'>Setul personal de valori prin care interpretăm lumea.</span></span>. Ce înseamnă aceasta?",
          options: [
            "Comportamentele sunt orientate în acord cu valorile proprii.",
            "Convingerile apar doar prin conformism.",
            "Convingerile sunt opuse valorilor personale.",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 8 – Idealurile
    {
      id: "fph-t9c5",
      title: "Idealurile",
      questions: [
        {
          text: "Idealurile sunt <span class='tip'>formațiuni motivaționale puternice<span class='tooltip-box'>Modele de perfecțiune morală, socială sau personală care ghidează viața individului.</span></span>. Care definiție este corectă?",
          options: [
            "Idealurile reprezintă modele valorice către care individul aspiră și pe care încearcă să le realizeze.",
            "Idealurile sunt simple fantezii fără impact asupra vieții reale.",
            "Idealurile se întâlnesc doar în copilărie.",
          ],
          answer: 0,
        },

        {
          text: "Selectează componente ale <span class='tip'>structurii unui ideal<span class='tooltip-box'>Elementele conceptuale care compun orientarea ideală a individului.</span></span>:",
          options: [
            "Scopul sau sensul vieții.",
            "Semnificația vieții și nivelul de aspirații.",
            "Modelul idealizat.",
            "Comportamente reflexe.",
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
          text: "Care dintre următoarele perechi descriu forme ale motivației?",
          options: [
            "<span class='tip'>Motivație pozitivă<span class='tooltip-box'>Comportamentul este susținut de recompense, beneficii, câștiguri anticipate.</span></span> și <span class='tip'>motivație negativă<span class='tooltip-box'>Comportamentul este susținut de evitarea pedepsei, a pierderii sau a consecințelor neplăcute.</span></span>.",
            "<span class='tip'>Motivație intrinsecă<span class='tooltip-box'>Motivația vine „din interior”; activitatea este valoroasă prin ea însăși.</span></span> și <span class='tip'>motivație extrinsecă<span class='tooltip-box'>Motivația vine din recompense sau presiuni exterioare.</span></span>.",
            "<span class='tip'>Motivație cognitivă<span class='tooltip-box'>Se bazează pe nevoia de înțelegere, clarificare, cunoaștere.</span></span> și <span class='tip'>motivație afectivă<span class='tooltip-box'>Se bazează pe nevoia de relaționare, atașament, trăiri emoționale.</span></span>.",
            "Motivație reflexă și motivație musculară.",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Cum ai descrie simplu <span class='tip'>motivația intrinsecă<span class='tooltip-box'>Îți place activitatea în sine: curios, interesat, implicat de plăcere.</span></span> comparativ cu <span class='tip'>motivația extrinsecă<span class='tooltip-box'>Faci activitatea pentru o recompensă sau pentru a evita o consecință negativă.</span></span>?",
          options: [
            "Motivația intrinsecă vine din interesul pentru activitate, iar cea extrinsecă din recompense sau presiuni externe.",
            "Motivația intrinsecă ține doar de bani, iar cea extrinsecă de emoții.",
            "Nu există nicio diferență între cele două.",
          ],
          answer: 0,
        },

        {
          text: "Ce caracterizează <span class='tip'>motivația pozitivă<span class='tooltip-box'>Te miști spre ceva dorit.</span></span> comparativ cu <span class='tip'>motivația negativă<span class='tooltip-box'>Te îndepărtezi de ceva de evitat.</span></span>?",
          options: [
            "Motivația pozitivă te face să urmărești obținerea unor rezultate plăcute, iar motivația negativă te face să eviți consecințele neplăcute.",
            "Motivația pozitivă este mereu mai eficientă decât cea negativă.",
            "Motivația negativă nu produce niciodată comportament.",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 10 – Optimum motivațional
    {
      id: "fph-t9d2",
      title: "Optimum motivațional",
      questions: [
        {
          text: "<span class='tip'>Optimumul motivațional<span class='tooltip-box'>Echilibrul dintre cât de puternică este motivația și cât de dificilă este sarcina, astfel încât performanța să fie maximă.</span></span> apare când:",
          options: [
            "Intensitatea motivației este adecvată dificultății percepute a sarcinii.",
            "Motivația este cât mai puternică, indiferent de dificultatea sarcinii.",
            "Sarcina este foarte dificilă, iar motivația foarte scăzută.",
          ],
          answer: 0,
        },

        {
          text: "Ce se întâmplă când <span class='tip'>dificultatea sarcinii<span class='tooltip-box'>Cum apreciază individul cât de grea este activitatea.</span></span> este percepută corect?",
          options: [
            "Individul își ajustează mai bine nivelul de efort și motivație, apropiindu se de optimumul motivațional.",
            "Individul nu mai are nevoie de motivație.",
            "Performanța nu mai depinde de motivație.",
          ],
          answer: 0,
        },

        {
          text: "Ce consecințe are o <span class='tip'>subapreciere sau supraapreciere<span class='tooltip-box'>Evaluarea greșită a dificultății.</span></span> a sarcinii asupra optimumului motivațional?",
          options: [
            "Dezechilibru între intensitatea motivației și dificultatea sarcinii, ceea ce poate scădea performanța.",
            "Creșterea automată a motivației până la nivel maxim.",
            "Dispariția completă a nevoii de efort.",
          ],
          answer: 0,
        },
      ],
    },

    // Subcapitol 5 – Teorii ale motivației

    // QUIZ 11 – Teoria auto determinării (Deci și Ryan)
    {
      id: "fph-t9e1",
      title: "Teoria auto determinării (Deci și Ryan)",
      questions: [
        {
          text: "Teoria auto determinării pornește de la ideea că oamenii sunt <span class='tip'>agenți activi ai propriei schimbări<span class='tooltip-box'>Nu doar reacționează la mediu, ci își organizează și dirijează dezvoltarea.</span></span>. Ce exprimă cel mai bine această idee?",
          options: [
            "Oamenii caută în mod natural să învețe, să se dezvolte și să își organizeze comportamentul.",
            "Oamenii sunt în întregime determinați de recompense externe.",
            "Oamenii nu își pot influența propriul parcurs de dezvoltare.",
          ],
          answer: 0,
        },

        {
          text: "Conform teoriei auto determinării, oamenii au o <span class='tip'>tendință naturală de explorare și învățare<span class='tooltip-box'>Curiozitate și dorință internă de a înțelege mediul, fără să fie mereu nevoie de recompense externe.</span></span>. Ce rezultă de aici?",
          options: [
            "Multele comportamente sunt motivate intern, prin plăcerea de a cunoaște și de a progresa.",
            "Comportamentele apar doar dacă există control extern.",
            "Învățarea apare doar sub presiune.",
          ],
          answer: 0,
        },

        {
          text: "Teoria propune un <span class='tip'>continuum al reglării comportamentului<span class='tooltip-box'>De la control extern puternic (presiune, norme impuse) la auto reglare internă (autonomie, asumare personală a scopurilor).</span></span>. Ce afirmă această idee?",
          options: [
            "Reglarea comportamentului poate veni din exterior sau din interior, în funcție de cât de mult persoana își asumă acțiunea.",
            "Reglarea este fie doar externă, fie doar internă, fără nuanțe.",
            "Reglarea nu influențează motivația.",
          ],
          answer: 0,
        },

        {
          text: "Ce caracterizează o <span class='tip'>reglare externă<span class='tooltip-box'>Individul acționează mai ales din presiunea cerințelor și a așteptărilor altora.</span></span> comparativ cu o <span class='tip'>reglare internă<span class='tooltip-box'>Individul își asumă scopul, activitatea fiind trăită ca „a mea”.</span></span>?",
          options: [
            "Reglarea externă implică mai multă presiune și consum de energie, iar reglarea internă mai multă autonomie și rezistență mai mică la efort.",
            "Reglarea internă consumă întotdeauna mai multă energie.",
            "Reglarea externă nu are legătură cu motivația.",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 12 – Teoria expectanță valoare (Wigfield și Eccles)
    {
      id: "fph-t9e2",
      title: "Teoria expectanță-valoare (Wigfield și Eccles)",
      questions: [
        {
          text: "Teoria expectanță-valoare afirmă că implicarea într-o activitate depinde de două componente principale: <span class='tip'>expectanța<span class='tooltip-box'>Ce crede persoana despre șansele de reușită.</span></span> și <span class='tip'>valoarea activității<span class='tooltip-box'>Cât de importantă, interesantă sau utilă este activitatea pentru persoană.</span></span>. Ce formulare este corectă?",
          options: [
            "Motivația pentru o sarcină este mai mare când persoana crede că poate reuși și consideră sarcina importantă.",
            "Motivația depinde exclusiv de dificultatea obiectivă a sarcinii.",
            "Motivația rămâne aceeași indiferent de așteptări și de valoarea percepută.",
          ],
          answer: 0,
        },

        {
          text: "Expectanțele și valoarea sunt influențate de:",
          options: [
            "Credințe despre sarcină și despre propriile abilități.",
            "Dificultatea percepută a sarcinii.",
            "Scopuri personale, imagine de sine și experiențe afective anterioare.",
            "Doar nivelul de inteligență.",
          ],
          answer: [0, 1, 2],
        },

        {
          text: "Conform acestei teorii, când vorbim de reușita la o sarcină de învățare:",
          options: [
            "Implicarea și reușita într-o sarcină depind de așteptările individului privind șansele de succes și de valoarea acordată sarcinii.",
            "Reușita depinde doar de noroc.",
            "Reușita nu are legătură cu motivația.",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 13 – Teorii motivaționale privind reușita academică
    {
      id: "fph-t9e3",
      title: "Teorii motivaționale privind reușita academică",
      questions: [
        {
          text: "În teoriile despre <span class='tip'>reușita academică<span class='tooltip-box'>Performanța școlară sau universitară.</span></span>, se subliniază că studenții își stabilesc <span class='tip'>scopuri relativ stabile<span class='tooltip-box'>Tipare de obiective care se repetă în situații educaționale diferite.</span></span>. Ce idee surprinde corect această afirmație?",
          options: [
            "Modul în care studenții își stabilesc scopurile tinde să se mențină și să se repete în contexte educaționale diferite.",
            "Scopurile apar întâmplător și se schimbă permanent de la o zi la alta.",
            "Scopurile nu influențează reușita academică.",
          ],
          answer: 0,
        },

        {
          text: "Ames și Archer disting între <span class='tip'>scopuri de perfecționare (mastery)<span class='tooltip-box'>Accent pe înțelegere și progres personal.</span></span> și <span class='tip'>scopuri de performanță<span class='tooltip-box'>Accent pe a fi mai bun decât ceilalți, pe comparație socială.</span></span>. Ce variantă descrie corect scopurile de perfecționare?",
          options: [
            "Vizează dezvoltarea propriilor abilități și înțelegerea materialului.",
            "Vizează doar obținerea unei note mai mari decât ceilalți.",
            "Nu au nicio legătură cu procesul de învățare.",
          ],
          answer: 0,
        },

        {
          text: "Cum pot fi definite pe scurt <span class='tip'>scopurile de performanță<span class='tooltip-box'>Interesul central este comparația cu ceilalți, nu progresul propriu.</span></span>?",
          options: [
            "Dorinta de a obține rezultate mai bune decât ceilalți și de a evita evaluarea negativă.",
            "Dorinta de a înțelege profund materialul.",
            "Dorinta de a reduce volumul de muncă indiferent de rezultate.",
          ],
          answer: 0,
        },
      ],
    },

    // Subcapitol 6 – Motivația pentru învățare

    // QUIZ 14 – Mediul educațional și motivația pentru învățare (Carole Ames)
    {
      id: "fph-t9f1",
      title: "Mediul educațional și motivația pentru învățare",
      questions: [
        {
          text: "Carole Ames arată că actul instructiv-educativ influențează orientarea motivațională a elevilor și studenților prin trei dimensiuni principale. Care sunt acestea?",
          options: [
            "<span class='tip'>Sarcinile de învățare propuse<span class='tooltip-box'>Tipul, dificultatea și sensul activităților oferite: ce li se cere concret să facă și cât de relevante sunt sarcinile.</span></span>.",
            "<span class='tip'>Autoritatea exercitată<span class='tooltip-box'>Modul în care cadrul didactic distribuie controlul: câtă responsabilitate și autonomie au elevii în raport cu sarcina.</span></span>.",
            "<span class='tip'>Modalitatea de evaluare<span class='tooltip-box'>Felul în care sunt apreciate rezultatele: feedback, posibilitatea de corectare, accent pe progres sau pe comparație.</span></span>.",
            "Structura genetică a elevilor.",
          ],
          answer: [0, 1, 2],
        },
        {
          text: "Cum poate <span class='tip'>sarcina de învățare<span class='tooltip-box'>Ce îi cerem efectiv elevului să facă.</span></span> să susțină motivația intrinsecă?",
          options: [
            "Dacă este semnificativă, provocatoare și conectată la interesele elevului.",
            "Dacă este complet mecanică și lipsită de sens.",
            "Dacă este excesiv de ușoară și repetitivă.",
          ],
          answer: 0,
        },

        {
          text: "Ce rol are <span class='tip'>evaluarea<span class='tooltip-box'>Note, feedback, ocazii de îmbunătățire.</span></span> în motivația pentru învățare?",
          options: [
            "Poate susține motivația dacă oferă feedback constructiv și șansa de a reface sarcinile.",
            "Nu are nicio legătură cu motivația.",
            "Motivația crește doar dacă evaluarea este punitivă.",
          ],
          answer: 0,
        },
      ],
    },

    // QUIZ 15 – Teorii umaniste ale motivației
    {
      id: "fph-t9f2",
      title: "Teorii umaniste ale motivației",
      questions: [
        {
          text: "<span class='tip'>Teoriile umaniste<span class='tooltip-box'>Punctul de plecare este ideea că omul are o tendință internă spre creștere, sens și autoactualizare.</span></span> privesc motivația ca:",
          options: [
            "Expresie a nevoii de dezvoltare, sens și autorealizare.",
            "Rezultat exclusiv al condiționărilor externe.",
            "Fenomen strict biologic, fără componentă psihologică.",
          ],
          answer: 0,
        },

        {
          text: "În <span class='tip'>piramida nevoilor<span class='tooltip-box'>Model motivațional umanist care organizează nevoile umane de la cele de bază la cele superioare.</span></span> a lui <span class='tip'>Maslow<span class='tooltip-box'>Psiholog umanist; a formulat ierarhia nevoilor umane.</span></span>, motivația pentru învățare este susținută în special de:",
          options: [
            "Nevoile superioare de apartenență, stimă și autoactualizare.",
            "Exclusiv de nevoile fiziologice.",
            "Doar de frica de pedeapsă sau eșec.",
          ],
          answer: 0,
        },

        {
          text: "În cadrul <span class='tip'>teoriei personalității<span class='tooltip-box'>Model explicativ care descrie structura, dinamica și dezvoltarea personalității.</span></span> a lui <span class='tip'>Carl Rogers<span class='tooltip-box'>Reprezentant al psihologiei umaniste; a formulat teoria personalității centrată pe persoană.</span></span>, ce susține motivația pentru dezvoltare și învățare?",
          options: [
            "Un climat relațional bazat pe acceptare necondiționată, empatie și autenticitate.",
            "Control extern strict și evaluare punitivă.",
            "Lipsa oricărui suport relațional.",
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
          text: "Afectivitatea reprezintă <span class='tip'>rezonanța internă<span class='tooltip-box'>Modul în care individul trăiește subiectiv relația sa cu lumea.</span></span> a relației dintre individ și mediu. Ce formulare este corectă?",
          options: [
            "Afectivitatea este un proces exclusiv cognitiv, lipsit de trăire subiectivă.",
            "Afectivitatea este modul subiectiv în care individul trăiește și semnifică relația cu lumea.",
            "Afectivitatea este o reacție reflexă automată, fără semnificație personală.",
          ],
          answer: 1,
        },
        {
          text: "Afectivitatea rezultă din aprecierea nivelului de concordanță dintre:",
          options: [
            "Motivele, interesele și așteptările individului și situația externă.",
            "Doar stimulii fizici ai mediului.",
            "Exclusiv procesele cognitive logice.",
          ],
          answer: 0,
        },
      ],
    },

    // SUBCAPITOL 2 – Specificul proceselor afective
    {
      id: "fph-t10b",
      title: "Natura proceselor afective",
      questions: [
        {
          text: "Procesele afective sunt:",
          options: [
            "Experiențe subiective ale individului în interacțiunea semnificativă cu mediul.",
            "Reacții reflexe lipsite de semnificație.",
            "Procese cognitive pur logice.",
          ],
          answer: 0,
        },
        {
          text: "Procesele afective se asociază cu:",
          options: [
            "Modificări fiziologice ample.",
            "Doar reacții verbale.",
            "Absența reacțiilor corporale.",
          ],
          answer: 0,
        },
        {
          text: "Evaluarea afectivă a experienței are caracter:",
          options: [
            "Polar: pozitiv sau negativ.",
            "Neutru și lipsit de orientare.",
            "Strict rațional.",
          ],
          answer: 0,
        },
        {
          text: "Procesele afective pot avea rol:",
          options: [
            "Activator sau inhibitor al comportamentului.",
            "Exclusiv inhibitor.",
            "Exclusiv cognitiv.",
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
          text: "Procesele afective sunt <span class='tip'>codificate simbolic<span class='tooltip-box'>Exprimate și organizate prin semne și simboluri (cuvinte, gesturi, mimică), astfel încât stările afective pot fi comunicate și înțelese.</span></span> și exprimate prin:",
          options: [
            "Limbaj emoțional cu potențial comunicațional și adaptativ.",
            "Limbaj strict logic.",
            "Reacții reflexe automate.",
          ],
          answer: 0,
        },
        {
          text: "Caracterul expresiv al proceselor afective presupune:",
          options: [
            "Posibilitatea de a fi percepute și interpretate transcultural.",
            "Imposibilitatea de a fi observate.",
            "Lipsa oricărei forme de exprimare.",
          ],
          answer: 0,
        },
        {
          text: "Forța de contagiune afectivă se referă la faptul că:",
          options: [
            "O stare afectivă poate angrena emoțional mai mulți indivizi.",
            "Afectele sunt strict individuale.",
            "Emoțiile nu se transmit.",
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
          text: "Intensitatea proceselor afective depinde de:",
          options: [
            "Reactivitatea afectivă a individului și semnificația motivațională.",
            "Doar intensitatea stimulului fizic.",
            "Nivelul de inteligență.",
          ],
          answer: 0,
        },
        {
          text: "Durata proceselor afective poate varia:",
          options: [
            "De la stări trecătoare la structuri stabile precum sentimentele.",
            "Doar pe termen foarte scurt.",
            "Doar pe termen foarte lung.",
          ],
          answer: 0,
        },
        {
          text: "Mobilitatea afectivă se referă la:",
          options: [
            "Trecerea de la o stare afectivă la alta.",
            "Fixarea rigidă într-o singură stare.",
            "Absența variațiilor afective.",
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
          text: "Procesele afective pot influența comportamentul prin:",
          options: [
            "<span class='tip'>Intenții persuasive<span class='tooltip-box'>Folosirea expresiilor afective pentru a influența reacțiile altora, de exemplu: plânsul pentru a obține afecțiune, zâmbetul pentru a atrage atenția sau a facilita relaționarea.</span></span>.",
            "Reacții reflexe necontrolate.",
            "Exclusiv mecanisme cognitive.",
          ],
          answer: 0,
        },

        {
          text: "Catharsisul afectiv presupune:",
          options: [
            "Eliberarea tensiunii afective.",
            "Creșterea rigidității emoționale.",
            "Blocarea exprimării afective.",
          ],
          answer: 0,
        },
        {
          text: "Procesele afective furnizează:",
          options: [
            "Energie pentru viața psihică și adaptare.",
            "Doar reacții pasive.",
            "Doar informații cognitive.",
          ],
          answer: 0,
        },
      ],
    },

    // SUBCAPITOL 3 – Structuri afectogene
    {
      id: "fph-t10f",
      title: "Structuri afectogene – introducere",
      questions: [
        {
          text: "Care dintre următoarele sunt <span class='tip'>structuri afectogene<span class='tooltip-box'>Structuri psihice prin care afectivitatea se generează, se organizează și se manifestă. Ele includ atât forme primare, de fond (ton afectiv), cât și forme mai complexe (emoții, dispoziții, sentimente, pasiuni).</span></span>?",
          options: [
            "Ton afectiv, emoții, dispoziții, sentimente, pasiuni.",
            "Reflexe necondiționate.",
            "Procese cognitive senzoriale.",
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
          text: "Tonul afectiv însoțește <span class='tip'>actul cunoașterii<span class='tooltip-box'>Procese precum percepția, reprezentarea, gândirea sau amintirea, adică momentele în care individul intră în contact cognitiv cu realitatea.</span></span>. Ce înseamnă concret acest lucru?",
          options: [
            "Apare ca o colorare afectivă discretă (plăcere, neplăcere) care însoțește percepția, gândirea sau amintirea unui obiect sau eveniment.",
            "Apare doar în timpul mișcărilor corporale și al acțiunilor motorii.",
            "Este prezent exclusiv în reacții reflexe automate, fără implicare psihică.",
          ],
          answer: 0,
        },

        {
          text: "Cum este definită <span class='tip'>emoția<span class='tooltip-box'>Fenomen afectiv fundamental: poate apărea ca reacție spontană și primară (afect) sau ca proces mai complex, legat de o motivație secundară.</span></span> (Popescu Neveanu, 1978)?",
          options: [
            "Un fenomen afectiv fundamental care poate fi fie reacție spontană și primară (afect), fie proces mai complex legat de o motivație secundară.",
            "O reacție exclusiv reflexă, fără legătură cu trebuințe sau motive.",
            "Un proces strict rațional, fără trăire subiectivă.",
          ],
          answer: 0,
        },

        {
          text: "Selectează caracteristicile care descriu <span class='tip'>emoțiile simple<span class='tooltip-box'>Emoții primare, legate de situații concrete, cu intensitate mare, durată scurtă și orientare clară (apropiere sau respingere).</span></span>, nu sentimentele sau dispozițiile:",
          options: [
            "Sunt intense și apar cu energie mare.",
            "Sunt dinamice și se schimbă rapid.",
            "Sunt legate de un context concret (situație anume).",
            "Au orientare clară, determinând comportamente de apropiere sau de evitare a situației.",
            "Sunt mereu stabile și de lungă durată, indiferent de context.",
          ],
          answer: [0, 1, 2, 3],
        },

        {
          text: "Ce exemple aparțin cel mai clar categoriei de <span class='tip'>emoții simple<span class='tooltip-box'>Exemple tipice: bucurie, veselie, tristețe, supărare, entuziasm, plăcere, dezgust.</span></span>?",
          options: [
            "Bucurie, tristețe, entuziasm, dezgust.",
            "Speranță, admirație, dispreț.",
            "Patriotism, datorie, onoare.",
          ],
          answer: 0,
        },

        {
          text: "Care descriere se potrivește <span class='tip'>emoțiilor complexe<span class='tooltip-box'>Structuri afectogene elaborate, aflate mai mult sub control conștient; nuanțează raportarea individului la activitate; implică interpretare și semnificare valorică; exprimarea lor este influențată de convenții sociale și culturale învățate.</span></span>?",
          options: [
            "Sunt structuri afective mai elaborate, cu mai mult control conștient, care implică interpretare și semnificare valorică.",
            "Sunt reacții reflexe automate, imposibil de influențat.",
            "Sunt mereu explozive și apar fără nicio legătură cu evaluarea situației.",
          ],
          answer: 0,
        },

        {
          text: "Selectează afirmațiile corecte despre <span class='tip'>emoțiile complexe<span class='tooltip-box'>Exemple: speranță, admirație, dispreț. Sunt influențate de convenții sociale și culturale dobândite prin învățare.</span></span>:",
          options: [
            "Implică interpretare intelectuală și semnificare valorică.",
            "Se supun, în exprimare, unor convenții sociale și culturale învățate.",
            "Sunt identice cu emoțiile simple, doar mai slabe ca intensitate.",
            "Pot nuanța raportarea individului la activitate (cum se implică, cum evaluează).",
          ],
          answer: [0, 1, 3],
        },

        {
          text: "Dispozițiile afective sunt:",
          options: [
            "Structuri de intensitate și durată medie, cu caracter vag și slab conștientizat, care dau un fundal afectiv activității psihice.",
            "Stări afective extrem de intense și foarte scurte.",
            "Reacții reflexe fără conținut subiectiv.",
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
          text: "Sentimentele sunt definite ca <span class='tip'>formațiuni afective complexe<span class='tooltip-box'>Structuri afective rezultate din integrarea și stabilizarea emoțiilor complexe.</span></span>. Ce caracteristică le diferențiază de emoțiile simple?",
          options: [
            "<span class='tip'>Au organizare superioară și stabilitate mare în timp<span class='tooltip-box'>Integrează emoții, valori și atitudini într-o structură afectivă coerentă, relativ constantă, care se menține dincolo de situații punctuale.</span></span>.",
            "Sunt reacții afective scurte și explozive.",
            "Sunt declanșate exclusiv automat, fără control conștient.",
          ],
          answer: 0,
        },
        {
          text: "În sensul formulat de Popescu-Neveanu, sentimentele pot fi înțelese ca <span class='tip'>formațiuni atitudinale<span class='tooltip-box'>Raportări afective stabile, organizate valoric, față de un obiect, persoană sau idee.</span></span>. Ce implică această formulare?",
          options: [
            "Sentimentele exprimă o raportare valorică complexă față de obiectul vizat.",
            "Sentimentele sunt simple reacții fiziologice.",
            "Sentimentele apar fără legătură cu valorile individului.",
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
          text: "Sentimentele pot fi diferențiate în funcție de <span class='tip'>direcția raportării afective<span class='tooltip-box'>Către ce este orientată trăirea afectivă: propria persoană, alți oameni, valori sau idei.</span></span>. Care variantă exprimă corect această clasificare?",
          options: [
            "Sentimente orientate către sine, către ceilalți și către valori sau idei.",
            "Sentimente reflexe și automate.",
            "Sentimente exclusiv biologice.",
          ],
          answer: 0,
        },

        {
          text: "Care dintre următoarele sunt exemple de <span class='tip'>sentimente relative la sine<span class='tooltip-box'>Sentimente centrate pe evaluarea propriei persoane și a valorii personale.</span></span>?",
          options: [
            "Stima de sine, eficacitatea de sine, orgoliul, vanitatea.",
            "Dragostea, compasiunea, altruismul.",
            "Patriotismul și onoarea.",
          ],
          answer: 0,
        },

        {
          text: "Sentimente precum dragostea, respectul, invidia sau admirația aparțin categoriei:",
          options: [
            "Sentimentelor relative la ceilalți.",
            "Sentimentelor estetice.",
            "Reflexelor afective.",
          ],
          answer: 0,
        },

        {
          text: "Datoria, patriotismul și onoarea sunt exemple de:",
          options: [
            "Sentimente relative la valori morale.",
            "Dispoziții afective.",
            "Emoții simple și tranzitorii.",
          ],
          answer: 0,
        },

        {
          text: "Sentimentele relative la valori estetice se caracterizează prin:",
          options: [
            "Raportare afectivă la frumos, armonie și expresie artistică sau culturală.",
            "Reacții biologice primare de supraviețuire.",
            "Absența evaluării valorice.",
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
          text: "Pasiunile sunt definite ca <span class='tip'>structuri afectogene<span class='tooltip-box'>Structuri psihice care generează, concentrează și susțin trăiri afective intense.</span></span> cu <span class='tip'>intensitate și stabilitate înalte<span class='tooltip-box'>Se mențin în timp și mobilizează cantități mari de energie afectivă.</span></span>. Ce formulare este corectă?",
          options: [
            "Structuri afective foarte intense și stabile, care mobilizează masiv energia individului.",
            "Stări afective vagi și difuze, fără impact comportamental.",
            "Reacții afective pasive, fără rol activator.",
          ],
          answer: 0,
        },

        {
          text: "Una dintre caracteristicile esențiale ale pasiunilor este <span class='tip'>caracterul unilateral<span class='tooltip-box'>Dominarea vieții psihice de către un singur interes sau obiect afectiv.</span></span>. Ce implică acest lucru?",
          options: [
            "Concentrarea majorității intereselor și resurselor afective într-o singură direcție.",
            "Distribuirea echilibrată a intereselor în mai multe domenii.",
            "Lipsa implicării emoționale profunde.",
          ],
          answer: 0,
        },

        {
          text: "Pasiunile pot fi clasificate astfel:",
          options: [
            "Pozitive (nobile) și negative (patimi).",
            "Primare și secundare.",
            "Cognitive și senzoriale.",
          ],
          answer: 0,
        },

        {
          text: "Care este rolul pasiunilor <span class='tip'>pozitive<span class='tooltip-box'>Pasiuni orientate constructiv, social acceptate.</span></span>?",
          options: [
            "Pot susține activități de lungă durată și pot conduce la realizări majore.",
            "Conduc inevitabil la dezechilibru psihic.",
            "Au exclusiv efect dezadaptativ.",
          ],
          answer: 0,
        },

        {
          text: "De ce pasiunile pot avea și un <span class='tip'>efect dezadaptativ<span class='tooltip-box'>Reducerea flexibilității relaționale și sociale.</span></span>?",
          options: [
            "Pentru că sunt sentimente puternice, autoalimentate, care pot îngusta câmpul de interacțiune socială.",
            "Pentru că sunt prea slabe pentru a influența comportamentul.",
            "Pentru că dispar rapid și nu mai motivează acțiunea.",
          ],
          answer: 0,
        },
      ],
    },

    // SUBCAPITOL 4 – Relația afectivitate–motivație
    {
      id: "fph-t10l",
      title: "Relația dintre afectivitate și motivație",
      questions: [
        {
          text: "Cum este caracterizată relația dintre <span class='tip'>afectivitate<span class='tooltip-box'>Dimensiunea trăirilor subiective ale individului.</span></span> și <span class='tip'>motivație<span class='tooltip-box'>Ansamblul forțelor care declanșează și direcționează comportamentul.</span></span>?",
          options: [
            "Este indisolubilă: cele două se condiționează reciproc.",
            "Este inexistentă: afectivitatea și motivația funcționează separat.",
            "Este pur întâmplătoare și instabilă.",
          ],
          answer: 0,
        },

        {
          text: "Ce sunt <span class='tip'>structurile afectogene<span class='tooltip-box'>Structuri psihice generatoare și organizatoare de trăiri afective.</span></span>?",
          options: [
            "Manifestări afective ale împlinirii sau neîmplinirii trebuințelor și motivelor individului.",
            "Reacții automate ale analizatorilor senzoriali.",
            "Procese cognitive raționale fără componentă afectivă.",
          ],
          answer: 0,
        },

        {
          text: "Ce desemnează <span class='tip'>constelațiile motivaționale<span class='tooltip-box'>Configurații de motive aflate în interacțiune, care pot coopera sau intra în conflict.</span></span>?",
          options: [
            "Ansambluri de motive care se influențează reciproc în orientarea comportamentului.",
            "Reacții afective izolate și independente.",
            "Reflexe biologice automate.",
          ],
          answer: 0,
        },

        {
          text: "Care este relația dintre <span class='tip'>structurile afectogene<span class='tooltip-box'>Ton afectiv, emoții, dispoziții, sentimente, pasiuni.</span></span> și <span class='tip'>constelațiile motivaționale<span class='tooltip-box'>Configurații dinamice de motive.</span></span>?",
          options: [
            "Structurile afectogene sunt generate de constelațiile motivaționale și pot deveni, la rândul lor, activatoare ale acestora.",
            "Structurile afectogene apar independent de motive.",
            "Constelațiile motivaționale sunt determinate exclusiv biologic.",
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
          text: "Voința este definită ca <span class='tip'>proces psihic de autoreglare superioară<span class='tooltip-box'>Formă avansată de reglare a conduitei, bazată pe scop, deliberare și control conștient.</span></span>, care implică <span class='tip'>scop<span class='tooltip-box'>Rezultatul anticipat al acțiunii.</span></span>, <span class='tip'>deliberare<span class='tooltip-box'>Analiza conștientă a alternativelor.</span></span> și ducerea la îndeplinire a activității. Care formulare surprinde corect această definiție?",
          options: [
            "Un proces automat, declanșat fără scop sau control conștient.",
            "Un proces psihic care organizează, mobilizează și controlează acțiunea orientată spre scop.",
            "O reacție afectivă spontană, fără implicare cognitivă.",
          ],
          answer: 1,
        },

        {
          text: "Selectează caracteristici ale <span class='tip'>reglajului voluntar<span class='tooltip-box'>Formă de reglare a comportamentului realizată conștient, prin limbaj interior și decizie.</span></span>:",
          options: [
            "Presupune un control conștient al acțiunii.",
            "Este realizat prin mijloace verbale (limbaj interior).",
            "Este complet automat și reflex.",
            "Implică un efort voluntar.",
          ],
          answer: [0, 1, 3],
        },

        {
          text: "<span class='tip'>Efortul voluntar<span class='tooltip-box'>Mobilizare conștientă a resurselor fizice, intelectuale și emoționale pentru atingerea unui scop.</span></span> se caracterizează prin faptul că:",
          options: [
            "Presupune un consum energetic crescut.",
            "Poate fi menținut nelimitat în timp.",
            "Este limitat temporal din cauza încordării voluntare.",
          ],
          answer: [0, 2],
        },

        {
          text: "Mobilizarea voluntară depinde de <span class='tip'>obstacol<span class='tooltip-box'>Dificultate percepută în calea realizării acțiunii.</span></span>. Ce relație este corectă?",
          options: [
            "Cu cât obstacolul este perceput ca mai mare, cu atât crește mobilizarea efortului voluntar.",
            "Obstacolele reduc complet capacitatea de mobilizare.",
            "Mobilizarea voluntară este independentă de dificultatea sarcinii.",
          ],
          answer: 0,
        },
      ],
    },

    // Subcapitol 1 – Concepte esențiale despre voință

    {
      id: "fph-t11b",
      title: "Concepte esențiale despre voință",
      questions: [
        {
          text: "<span class='tip'>Puterea voinței<span class='tooltip-box'>Intensitatea efortului voluntar mobilizat pentru atingerea unui scop.</span></span> se referă la:",
          options: [
            "Durata unei stări afective.",
            "Intensitatea mobilizării voluntare.",
            "Rapiditatea reacțiilor reflexe.",
          ],
          answer: 1,
        },

        {
          text: "<span class='tip'>Perseverența<span class='tooltip-box'>Capacitatea de a susține efortul voluntar pe o perioadă mai lungă.</span></span> presupune:",
          options: [
            "Menținerea efortului în timp, în ciuda dificultăților.",
            "Reacții rapide, fără analiză.",
            "Absența completă a obstacolelor.",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'>Independența voinței<span class='tooltip-box'>Capacitatea de a lua decizii proprii și de a-și asuma consecințele acestora.</span></span> se manifestă prin:",
          options: [
            "Luarea deciziilor personale și asumarea responsabilității.",
            "Imitarea constantă a deciziilor altora.",
            "Evitarea oricărei decizii.",
          ],
          answer: 0,
        },

        {
          text: "<span class='tip'>Promptitudinea deciziei<span class='tooltip-box'>Rapiditatea cu care este luată o decizie adecvată situației.</span></span> indică:",
          options: [
            "Viteza de reacție reflexă.",
            "Rapiditatea luării unei decizii oportune.",
            "Durata menținerii unei emoții.",
          ],
          answer: 1,
        },

        {
          text: "Dezvoltarea capacității de <span class='tip'>efort voluntar<span class='tooltip-box'>Capacitatea de mobilizare conștientă a resurselor în acțiune.</span></span> este favorizată de:",
          options: [
            "Autoreflecția asupra propriei capacități de mobilizare.",
            "Confruntarea repetată cu obstacole.",
            "Exersarea conștientă a efortului voluntar în activități specifice.",
            "Evitarea situațiilor dificile.",
          ],
          answer: [0, 1, 2],
        },
      ],
    },

    // Subcapitol 2 – Etapele actului voluntar

    {
      id: "fph-t11c",
      title: "Etapele actului voluntar",
      questions: [
        {
          text: "Actul voluntar se desfășoară în mai multe <span class='tip'>etape<span class='tooltip-box'>Momente succesive ale procesului de realizare conștientă a unei acțiuni.</span></span>. Care este rolul general al acestor etape?",
          options: [
            "Organizarea și controlul conștient al acțiunii orientate spre scop.",
            "Declanșarea automată a comportamentului.",
            "Eliminarea completă a influenței motivației.",
          ],
          answer: 0,
        },

        {
          text: "Prima etapă a actului voluntar este <span class='tip'>activarea motivațională<span class='tooltip-box'>Actualizarea scopurilor și apariția intenției de acțiune, cu construirea unui plan mintal.</span></span>. Ce se întâmplă în această etapă?",
          options: [
            "Apare intenția de acțiune și orientarea spre scop.",
            "Se execută automat acțiunea.",
            "Se verifică rezultatele finale.",
          ],
          answer: 0,
        },

        {
          text: "Etapa confruntării motivelor presupune <span class='tip'>deliberarea<span class='tooltip-box'>Analiza conștientă a motivelor concurente.</span></span>. Ce caracterizează această etapă?",
          options: [
            "Analiza alternativelor și a motivelor aflate în conflict.",
            "Aplicarea directă a deciziei.",
            "Renunțarea la scop.",
          ],
          answer: 0,
        },

        {
          text: "Etapa deciziei implică:",
          options: [
            "Alegerea unui motiv sau scop și amânarea altora.",
            "Executarea automată a comportamentului.",
            "Evaluarea finală a rezultatului.",
          ],
          answer: 0,
        },

        {
          text: "Care sunt ultimele două etape ale actului voluntar, după activarea motivațională, confruntarea motivelor și decizie?",
          options: [
            "<span class='tip'>Aplicarea deciziei<span class='tooltip-box'>Punerea în practică a planului prin acțiuni controlate voluntar.</span></span> și, dacă activitatea este suficient de complexă, <span class='tip'>verificarea și concluziile<span class='tooltip-box'>Evaluarea rezultatelor și formularea concluziilor.</span></span>.",
            "Activarea afectivă reacția reflexă.",
            "Adaptarea senzorială și automatizarea.",
          ],
          answer: 0,
        },
      ],
    },

    // Curs 11B – Atenția

    {
      // SUBCAPITOL 1 – Definirea și specificul atenției
      id: "fph-t11d",
      title: "Definirea și specificul atenției",
      questions: [
        {
          text: "Atenția este definită ca <span class='tip'>proces psihic de activare și orientare<span class='tooltip-box'>Nu adaugă informație nouă, ci mobilizează și organizează funcționarea altor procese psihice.</span></span>. Care formulare surprinde corect această definiție?",
          options: [
            "Atenția constă în activarea, tonificarea, mobilizarea și orientarea selectivă a proceselor psihocomportamentale.",
            "Atenția este un proces cognitiv care produce conținut informațional propriu.",
            "Atenția este o reacție reflexă automată, lipsită de rol psihic superior.",
          ],
          answer: 0,
        },

        {
          text: "De ce se afirmă că <span class='tip'>atenția nu are conținut informațional specific<span class='tooltip-box'>Nu furnizează informații despre obiecte, ci reglează modul în care sunt prelucrate informațiile.</span></span>?",
          options: [
            "Pentru că atenția susține și organizează activitatea altor procese psihice, orientându le prin <span class='tip'>reflexul de orientare<span class='tooltip-box'>Reacție automată de orientare a organismului către un stimul nou sau semnificativ, declanșată prin activarea sistemului reticulat activator ascendent, care alertează cortexul.</span></span>, fără a produce informații proprii.",
            "Pentru că atenția este un proces pur senzorial, care înlocuiește percepția.",
            "Pentru că atenția funcționează independent de restul activității psihice.",
          ],
          answer: 0,
        },

        {
          text: "Atenția se realizează prin <span class='tip'>SRAA<span class='tooltip-box'>Sistemul reticulat activator ascendent, situat la nivelul trunchiului cerebral; are rol în activarea cortexului și declanșarea reflexului de orientare.</span></span>. Ce efect are acest sistem?",
          options: [
            "Alertarea cortexului și declanșarea reflexului de orientare.",
            "Stocarea informațiilor senzoriale.",
            "Inhibarea completă a activității corticale.",
          ],
          answer: 0,
        },

        {
          text: "Atenția selectează și focalizează <span class='tip'>energia neuropsihică<span class='tooltip-box'>Resursele funcționale ale sistemului nervos implicate în activitatea psihică.</span></span>. Ce presupune acest lucru?",
          options: [
            "Promovarea unor tendințe prin excitație și inhibarea altora.",
            "Activarea simultană a tuturor stimulilor.",
            "Lipsa oricărei selecții psihice.",
          ],
          answer: 0,
        },
        {
          text: "Atenția implică două <span class='tip'>stări neurofuncționale<span class='tooltip-box'>Moduri de funcționare ale sistemului nervos care susțin diferite niveluri de activare și orientare a atenției.</span></span>: <span class='tip'>starea de veghe<span class='tooltip-box'>Nivel de activare difuză a cortexului, caracterizat prin disponibilitate generală și așteptare pasivă a stimulilor.</span></span> și <span class='tip'>starea de vigilență<span class='tooltip-box'>Nivel crescut de activare, caracterizat prin explorare activă și orientare spre mediul extern.</span></span>. Care diferențiere este corectă?",
          options: [
            "Starea de veghe presupune activare generală și disponibilitate, iar starea de vigilență presupune explorare activă și orientare intenționată spre stimuli.",
            "Starea de veghe și starea de vigilență sunt identice și pot fi folosite ca sinonime.",
            "Starea de vigilență apare doar în somn, iar starea de veghe doar în activitate intensă.",
          ],
          answer: 0,
        },

        {
          text: "Atenția implică două <span class='tip'>stări neurofuncționale<span class='tooltip-box'>Moduri generale de funcționare ale sistemului nervos.</span></span>. Care sunt acestea?",
          options: [
            "Starea de veghe și starea de vigilență.",
            "Somnul profund și visarea.",
            "Reflexul condiționat și reflexul necondiționat.",
          ],
          answer: 0,
        },

        {
          text: "De ce este atenția considerată un <span class='tip'>factor dinamogen<span class='tooltip-box'>Factor care energizează și susține desfășurarea altor procese psihice.</span></span>?",
          options: [
            "Pentru că susține activitatea cognitivă și afectivă.",
            "Pentru că înlocuiește procesele cognitive.",
            "Pentru că funcționează izolat de restul vieții psihice.",
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
          text: "În psihologie sunt descrise trei forme principale de atenție. Care sunt acestea?",
          options: [
            "Atenție involuntară, atenție voluntară, atenție postvoluntară.",
            "Atenție senzorială, atenție motorie, atenție reflexă.",
            "Atenție cognitivă, afectivă și motivațională.",
          ],
          answer: 0,
        },

        {
          text: "Atenția involuntară este o <span class='tip'>formă primară<span class='tooltip-box'>Se declanșează spontan, fără control conștient.</span></span>. Ce caracteristici îi sunt specifice?",
          options: [
            "Apare sub influența stimulilor intensi, noi, mobili sau complecși.",
            "Necesită autoreglare verbală.",
            "Este menținută exclusiv prin efort conștient.",
          ],
          answer: 0,
        },

        {
          text: "Atenția voluntară este o <span class='tip'>formă superioară<span class='tooltip-box'>Implică intenție, scop și control conștient.</span></span>. Ce o definește?",
          options: [
            "Apare intenționat și se autoreglează conștient prin mecanisme verbale.",
            "Se declanșează exclusiv reflex.",
            "Nu presupune efort psihic.",
          ],
          answer: 0,
        },

        {
          text: "Atenția voluntară se manifestă prin:",
          options: [
            "Orientare intenționată, focalizare energetică și menținerea concentrării până la finalizarea sarcinii.",
            "Activare difuză fără scop.",
            "Reacții automate de scurtă durată.",
          ],
          answer: 0,
        },

        {
          text: "Atenția postvoluntară apare prin:",
          options: [
            "Automatizarea atenției voluntare prin exercițiu repetat.",
            "Lipsa completă a efortului cognitiv.",
            "Declanșare reflexă necontrolată.",
          ],
          answer: 0,
        },
        {
          text: "Ce înseamnă că atenția postvoluntară apare prin <span class='tip'>automatizarea atenției voluntare<span class='tooltip-box'>Efortul conștient inițial scade pe măsură ce activitatea devine familiară și bine stăpânită.</span></span>?",
          options: [
            "Activitatea care cerea inițial mult efort devine mai ușor de realizat și menținut atențional.",
            "Atenția dispare complet după o perioadă de exercițiu.",
            "Atenția nu mai poate fi controlată în niciun fel.",
          ],
          answer: 0,
        },

        {
          text: "Care sunt avantajele atenției postvoluntare?",
          options: [
            "Consum redus de energie nervoasă și eficiență crescută a activității.",
            "Creșterea oboselii psihice.",
            "Reducerea performanței.",
          ],
          answer: 0,
        },
      ],
    },

    // SUBCAPITOL 3 – Modalități de favorizare a atenției voluntare
    {
      id: "fph-t11i",
      title: "Favorizarea atenției voluntare",
      questions: [
        {
          text: "Care formulare descrie corect <span class='tip'>favorizarea atenției voluntare<span class='tooltip-box'>Set de măsuri imediate prin care susții concentrarea intenționată asupra unei sarcini.</span></span>?",
          options: [
            "Favorizarea atenției voluntare înseamnă să creezi condiții care ajută concentrarea intenționată asupra sarcinii.",
            "Favorizarea atenției voluntare înseamnă să elimini complet orice efort și orice sarcină dificilă.",
            "Favorizarea atenției voluntare înseamnă să schimbi constant stimulii, fără structură și fără scop.",
          ],
          answer: 0,
        },

        {
          text: "Selectează modalități care favorizează atenția voluntară în timpul unei activități:",
          options: [
            "Stabilirea clară a scopurilor activității.",
            "Evidențierea semnificației activității și a beneficiilor pentru individ.",
            "Identificarea din timp a momentelor dificile ale activității.",
            "Crearea unei ambianțe stimulative, favorabile concentrării.",
            "Reducerea factorilor perturbatori.",
            "Suprastimularea mediului cu multe elemente simultan, fără legătură cu sarcina.",
          ],
          answer: [0, 1, 2, 3, 4],
        },

        {
          text: "De ce ajută <span class='tip'>reducerea factorilor perturbatori<span class='tooltip-box'>Zgomot, notificări, întreruperi, obiecte care îți atrag atenția fără legătură cu sarcina.</span></span>?",
          options: [
            "Pentru că scade competiția dintre stimuli și permite menținerea concentrării asupra sarcinii.",
            "Pentru că atenția voluntară funcționează mai bine doar când sunt stimuli noi în mod continuu.",
            "Pentru că elimină complet fluctuațiile atenției pe termen nelimitat.",
          ],
          answer: 0,
        },
      ],
    },

    // SUBCAPITOL 3 – Condiții necesare pentru educarea atenției voluntare
    {
      id: "fph-t11j",
      title: "Educarea atenției voluntare",
      questions: [
        {
          text: "Care formulare descrie corect <span class='tip'>educarea atenției voluntare<span class='tooltip-box'>Formarea și consolidarea capacității de concentrare intenționată prin metode și exercițiu, pe termen mai lung.</span></span>?",
          options: [
            "Educarea atenției voluntare înseamnă să construiești treptat capacitatea de concentrare, prin sarcini organizate și exersare.",
            "Educarea atenției voluntare înseamnă să eviți orice sarcină solicitantă, pentru a nu consuma energie.",
            "Educarea atenției voluntare înseamnă să menții atenția constantă fără pauze, indiferent de vârstă.",
          ],
          answer: 0,
        },

        {
          text: "Selectează condiții care susțin educarea atenției voluntare:",
          options: [
            "Organizarea materialelor și sarcinilor de învățare în structuri cu sens.",
            "Sublinierea semnificației sarcinii pentru individ, prin motivare.",
            "Scoaterea în evidență a elementelor importante dintr o sarcină de învățare.",
            "Prezentarea materialului în modalități variate.",
            "Supraîncărcarea informațională continuă, fără pauze.",
          ],
          answer: [0, 1, 2, 3],
        },

        {
          text: "De ce este utilă <span class='tip'>cunoașterea fiziologiei atenției<span class='tooltip-box'>Atenția are limite biologice și fluctuații naturale, inclusiv întreruperi scurte ale circuitelor nervoase.</span></span> în educarea atenției voluntare?",
          options: [
            "Pentru că poți adapta durata activităților și pauzele la capacitatea reală de concentrare.",
            "Pentru că poți elimina complet pauzele și fluctuațiile atenției.",
            "Pentru că stabilitatea atenției este identică la toate vârstele.",
          ],
          answer: 0,
        },

        {
          text: "Care este durata aproximativă a stabilității atenției, conform informației din curs?",
          options: [
            "La preșcolari este aproximativ 10 minute, iar la adulți poate ajunge până la aproximativ 30 de minute.",
            "La toate vârstele este aproximativ 60 de minute.",
            "Este nelimitată dacă mediul este perfect silențios.",
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
          text: "Ce este <span class='tip'>limbajul<span class='tooltip-box'>Concept general care include toate formele de comunicare bazate pe simboluri lingvistice.</span></span> conform lui Popescu-Neveanu?",
          options: [
            "Activitate mecanică de vorbire.",
            "Sistem de reguli formale.",
            "Sistem și activitate de comunicare cu ajutorul limbii.",
          ],
          answer: 2,
        },
        {
          text: "Cum este definită <span class='tip'>limba<span class='tooltip-box'>Instrumentul principal al limbajului – structură împărtășită social.</span></span> de către Popescu-Neveanu?",
          options: [
            "Ansamblu de gesturi și expresii.",
            "Sistem evolutiv, hipercomplex de simboluri și semne, cu rol în cultură.",
            "Vorbitul uzual al unui grup.",
          ],
          answer: 1,
        },
        {
          text: "Care sunt componentele limbii, conform definiției oferite?",
          options: [
            "Lexic, sintactică și semantică.",
            "Gramatică, retorică și stilistică.",
            "Ton, intonație și mimică.",
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
          text: "Ce înseamnă că limbajul este un <span class='tip'>fenomen psihologic dinamic<span class='tooltip-box'>Organizează și actualizează în vorbire resursele personalității.</span></span>?",
          options: [
            "Este rigid și neschimbător.",
            "Este reflexul strict al ADN-ului.",
            "Este legat de exprimarea unică a fiecărui individ.",
          ],
          answer: 2,
        },
        {
          text: "Care este legătura dintre <span class='tip'>limbaj și gândire<span class='tooltip-box'>Se influențează reciproc, limbajul fiind un instrument pentru gândire.</span></span>?",
          options: [
            "Sunt complet separate.",
            "Sunt într-o interdependență indisolubilă.",
            "Gândirea apare numai după stăpânirea limbajului.",
          ],
          answer: 1,
        },
        {
          text: "Conform lui Miller (1931), care este tendința evolutivă a limbajului?",
          options: [
            "Complicarea enunțurilor și extinderea lexicală.",
            "Condensarea informației în unități lingvistice reduse.",
            "Reducerea comunicării la expresii nonverbale.",
          ],
          answer: 1,
        },
        {
          text: "Cum devine limbajul funcțional la copii?",
          options: [
            "Prin acumularea automată a vocabularului.",
            "Prin repetiție mecanică.",
            "Prin trecerea de la cuvinte-propoziție la propoziții complexe, prin socializare.",
          ],
          answer: 2,
        },
      ],
    },

    // Subcapitol 2 – Funcțiile limbajului
    {
      id: "fph-t12c",
      title: "Funcțiile limbajului",
      questions: [
        {
          text: "Ce caracterizează <span class='tip'>funcția comunicativă<span class='tooltip-box'>Funcția prin care limbajul permite exprimarea emoțiilor și ideilor, exercitarea persuasiunii și stabilirea relațiilor dintre oameni.</span></span> a limbajului?",
          options: [
            "Reprezentarea internă a gândurilor și organizarea raționamentelor.",
            "Exprimarea emoțiilor și ideilor, influențarea celorlalți și stabilirea relațiilor.",
            "Calibrarea acțiunii mintale și a comportamentului.",
          ],
          answer: 1,
        },
        {
          text: "Ce presupune <span class='tip'>funcția cognitivă<span class='tooltip-box'>Limbajul este instrument al gândirii: permite reprezentarea realității, stabilirea semnificațiilor și desfășurarea raționamentelor.</span></span>?",
          options: [
            "Exprimarea afectivă și relaționarea socială.",
            "Reprezentarea, emiterea judecăților și desfășurarea raționamentelor.",
            "Reglarea comportamentului prin joc și descărcare emoțională.",
          ],
          answer: 1,
        },
        {
          text: "Ce include <span class='tip'>funcția reglatorie<span class='tooltip-box'>Limbajul ghidează și calibrează acțiunea mintală și activitatea, susține jocul, exprimarea cathartică și relaționarea.</span></span> a limbajului?",
          options: [
            "Transmiterea informațiilor și formarea conceptelor.",
            "Calibrarea acțiunii mintale și a activității, funcția ludică, funcția cathartică și stabilirea relațiilor.",
            "Exclusiv controlul extern al comportamentului.",
          ],
          answer: 1,
        },
      ],
    },
    // Subcapitol 3 – Tipuri de limbaj
    {
      id: "fph-t12d",
      title: "Tipuri de limbaj",
      questions: [
        {
          text: "Ce este <span class='tip'>limbajul verbal<span class='tooltip-box'>Formă de comunicare prin cuvinte – vorbit sau scris.</span></span>?",
          options: [
            "Comunicare prin gesturi.",
            "Comunicare prin imagini.",
            "Comunicare prin cuvinte, vorbite sau scrise.",
          ],
          answer: 2,
        },
        {
          text: "Ce include <span class='tip'>limbajul nonverbal<span class='tooltip-box'>Expresii faciale, gesturi, postură, mimică etc.</span></span>?",
          options: [
            "Numai cuvinte scrise.",
            "Sunete neinteligibile.",
            "Gesturi, mimică, postură.",
          ],
          answer: 2,
        },
        {
          text: "Ce este <span class='tip'>limbajul paraverbal<span class='tooltip-box'>Aspecte precum tonul, ritmul, intonația cuvintelor.</span></span>?",
          options: [
            "Conținutul semantic al cuvintelor.",
            "Tiparul emoțional al gesturilor.",
            "Intonația, volumul, ritmul vocii în vorbire.",
          ],
          answer: 2,
        },
      ],
    },

    {
      id: "fph-t12e",
      title: "Limbajul intern – definire și funcții",
      questions: [
        {
          text: "Cum este definit <span class='tip'>limbajul intern<span class='tooltip-box'>Formă concentrată, tăcută de gândire exprimată în cuvinte.</span></span>?",
          options: [
            "O formă de vorbire în public.",
            "Modalitate specifică existenței mintale a omului.",
            "Exprimare în scris.",
          ],
          answer: 1,
        },
        {
          text: "Ce funcție are <span class='tip'>limbajul intern<span class='tooltip-box'>Are un rol central în autoreglarea acțiunilor și conștiinței.</span></span>?",
          options: [
            "Învățare mecanică.",
            "Autoreglare a acțiunilor și comportamentului.",
            "Imitație a vorbirii celorlalți.",
          ],
          answer: 1,
        },
        {
          text: "Cum este caracterizat limbajul intern de Vîgotski?",
          options: [
            "Este format exclusiv din propoziții exclamative.",
            "Este predicativ – <span class='tip'>vehicul de sens și semnificație<span class='tooltip-box'>Predicativ – vehicul de sens și semnificație; exprimă în mod condensat o judecată sau o relație între concepte.</span></span>.",
            "Este un monolog extern orientat spre ceilalți.",
          ],
          answer: 1,
        },
      ],
    },

    {
      id: "fph-t12f",
      title: "Limbajul intern – perspectiva lui Vîgotski",
      questions: [
        {
          text: "Cum apare <span class='tip'>limbajul intern<span class='tooltip-box'>Conform lui Vîgotski, este rezultatul internalizării limbajului cu voce tare.</span></span>?",
          options: [
            "Este învățat prin mimetism.",
            "Se dezvoltă spontan în adolescență.",
            "Se formează prin transformarea limbajului cu voce tare.",
          ],
          answer: 2,
        },
        {
          text: "Ce rol are <span class='tip'>limbajul intern<span class='tooltip-box'>Mediere socio-culturală – limbajul intern face legătura între învățarea prin interacțiuni sociale și gândirea individuală; copilul preia din exterior și integrează în interior.</span></span> în <span class='tip'>învățarea condiționată socio-cultural<span class='tooltip-box'>Proces de învățare influențat de interacțiunile sociale și de valorile, normele și limbajul specifice mediului cultural în care trăiește individul.</span></span>?",
          options: [
            "Mediază învățarea condiționată socio-cultural.",
            "Împiedică asimilarea informației.",
            "Are doar rol reflexiv.",
          ],
          answer: 0,
        },
        {
          text: "Ce produce conștientizarea proceselor psihice prin limbajul intern?",
          options: [
            "Confuzie.",
            "Control și autocontrol.",
            "Memorie de scurtă durată.",
          ],
          answer: 1,
        },
      ],
    },

    {
      id: "fph-t12g",
      title: "Vîgotski – dezvoltarea vorbirii la copii",
      questions: [
        {
          text: "Ce este <span class='tip'>Egocentric Speech<span class='tooltip-box'>Copilul vorbește cu voce tare pentru sine, fără a ține cont de ceilalți.</span></span>?",
          options: [
            "Comunicare exclusivă cu adulții.",
            "Vorbitul interior.",
            "Vorbit cu voce tare pentru sine.",
          ],
          answer: 2,
        },
        {
          text: "Ce marchează <span class='tip'>awareness of others<span class='tooltip-box'>Copilul începe să țină cont de ceilalți în comunicare.</span></span>?",
          options: [
            "Trecerea la social speech.",
            "Izolare socială.",
            "Pierdere a interesului pentru limbaj.",
          ],
          answer: 0,
        },
        {
          text: "Cum se caracterizează <span class='tip'>social speech<span class='tooltip-box'>Vorbirea devine interactivă, adresată altora.</span></span>?",
          options: [
            "Vorbit cu sine.",
            "Vorbire mimetică.",
            "Vorbire interactivă și reală.",
          ],
          answer: 2,
        },
        {
          text: "Ce este <span class='tip'>inner speech<span class='tooltip-box'>Vorbirea devine internă, silențioasă, copilul „gândește cu cuvinte”.</span></span>?",
          options: [
            "Vorbitul în șoaptă.",
            "Gândire exprimată intern, fără sunet.",
            "Exprimare gestuală.",
          ],
          answer: 1,
        },
        {
          text: "Care este ordinea corectă a dezvoltării vorbirii la copil, conform lui Vîgotski?",
          options: [
            "<span class='tip'>Inner speech (vorbire internă)<span class='tooltip-box'>Vorbire tăcută, concentrată, utilizată pentru gândire internă – copilul „gândește cu cuvinte”.</span></span> → <span class='tip'>Egocentric speech (vorbire egocentrică)<span class='tooltip-box'>Copilul vorbește cu voce tare pentru sine, fără a ține cont de ceilalți.</span></span> → <span class='tip'>Social speech (vorbire socială)<span class='tooltip-box'>Vorbirea este adresată celorlalți și devine comunicare interactivă.</span></span>",

            "<span class='tip'>Egocentric speech (vorbire egocentrică)<span class='tooltip-box'>Copilul vorbește cu voce tare pentru sine, fără a ține cont de ceilalți.</span></span> → <span class='tip'>Social speech (vorbire socială)<span class='tooltip-box'>Vorbirea este adresată celorlalți și devine comunicare interactivă.</span></span> → <span class='tip'>Inner speech (vorbire internă)<span class='tooltip-box'>Vorbirea tăcută, concentrată, utilizată pentru gândirea internă – copilul „gândește cu cuvinte”.</span></span>",

            "<span class='tip'>Social speech (vorbire socială)<span class='tooltip-box'>Vorbirea este adresată celorlalți și devine comunicare interactivă.</span></span> → <span class='tip'>Awareness of others (conștientizarea celorlalți)<span class='tooltip-box'>Copilul devine conștient că ceilalți sunt receptori ai comunicării.</span></span> → <span class='tip'>Egocentric speech (vorbire egocentrică)<span class='tooltip-box'>Copilul vorbește cu voce tare pentru sine, fără a ține cont de ceilalți.</span></span>",
          ],
          answer: 1,
        },
      ],
    },

    //CURS 13

    {
      id: "fph-t13a",
      title: "Ce este personalitatea?",
      questions: [
        {
          text: "Cum definește Popescu-Neveanu (1978) <span class='tip'>personalitatea<span class='tooltip-box'>Totalitatea trăsăturilor constante, definitorii și operaționale care se exprimă în mod stabil în comportamentul unui individ.</span></span>?",
          options: [
            "Ansamblu de trăsături înnăscute, temporare și instabile.",
            "<span class='tip'>Macrosistem<span class='tooltip-box'>Un sistem complex și integrat, format din mai multe componente interconectate.</span></span> de <span class='tip'>invarianți<span class='tooltip-box'>Elemente stabile, care nu se schimbă în timp.</span></span> <span class='tip'>informaționali<span class='tooltip-box'>Legate de conținutul cunoștințelor, ideilor și reprezentărilor mentale.</span></span> și <span class='tip'>operaționali<span class='tooltip-box'>Legate de modul în care individul acționează sau procesează informațiile în mod practic.</span></span> exprimați în <span class='tip'>conduită<span class='tooltip-box'>Comportamentul observabil al unei persoane.</span></span>.",
            "Set de comportamente învățate prin imitare.",
          ],
          answer: 1,
        },
        {
          text: "Ce caracteristici are personalitatea conform acestei definiții?",
          options: [
            "Este aleatorie și schimbătoare.",
            "Reunește trăsături definitorii și constante pentru subiect.",
            "Se manifestă doar în situații de stres.",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "fph-t13b",
      title: "Teoria trăsăturilor de personalitate – Gordon Allport",
      questions: [
        {
          text: "Cum defineaște Allport <span class='tip'>trăsăturile de personalitate<span class='tooltip-box'>Predispoziții relativ stabile de a reacționa într-un mod specific în diverse situații, individuale sau comune unui grup.</span></span>?",
          options: [
            "Tipare comportamentale învățate, instabile.",
            "Predispoziții stabile de răspuns comportamental.",
            "Atitudini temporare influențate de context.",
          ],
          answer: 1,
        },
        {
          text: "Ce afirmă Allport despre <span class='tip'>configurația trăsăturilor<span class='tooltip-box'>Modul în care trăsăturile se combină într-un tipar individual unic care caracterizează personalitatea unei persoane.</span></span>?",
          options: [
            "Trăsăturile sunt universale și identice pentru toți.",
            "Trăsăturile formează o configurație unică pentru fiecare individ.",
            "Personalitatea este doar suma comportamentelor observabile.",
          ],
          answer: 1,
        },
        {
          text: "Care sunt cele trei niveluri ierarhice ale trăsăturilor în modelul lui Allport?",
          options: [
            "Primare, secundare, ocazionale.",
            "Cardinale, centrale, secundare.",
            "Universale, colective, personale.",
          ],
          answer: 1,
        },
        {
          text: "Ce sunt <span class='tip'>trăsăturile cardinale<span class='tooltip-box'>Trăsături dominante, <span class='tip'>pervazive<span class='tooltip-box'>Care pătrund toate aspectele personalității și influențează comportamentul în mod global.</span></span>, definitorii pentru un individ – nu sunt prezente la toți oamenii.</span></span>?",
          options: [
            "Trăsături temporare legate de context.",
            "Trăsături dominante și <span class='tip'>pervazive<span class='tooltip-box'>Care pătrund toate aspectele vieții psihice și comportamentale.</span></span> care <span class='tip'>particularizează<span class='tooltip-box'>Fac un individ unic, îl diferențiază clar de alții.</span></span> un individ.",
            "Trăsături comune tuturor indivizilor.",
          ],
          answer: 1,
        },
        {
          text: "Ce exprimă <span class='tip'>ipoteza lexicală<span class='tooltip-box'>Formulată de cercetători precum Allport, Norman sau Goldberg, această ipoteză susține că trăsăturile de personalitate considerate importante de o comunitate sunt codificate în limbaj – adică au fost denumite prin cuvinte și păstrate în vocabularul comun. De exemplu, trăsături precum „onest”, „introvertit” sau „ambițios” sunt termeni care reflectă observații psihologice frecvente și relevante pentru interacțiunea umană.</span></span>?",
          options: [
            "Termenii psihologici importanți dispar din limbajul comun.",
            "Limbajul include doar trăsături observabile.",
            "Trăsăturile importante devin parte din limbajul grupului.",
          ],
          answer: 2,
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
            "Stări emoționale temporare.",
            "<span class='tip'>Sistem de deprinderi proprii<span class='tooltip-box'>Reprezintă structuri stabile de comportament care caracterizează un individ și care pot fi observate în mod repetat în contexte diferite.</span></span> ce permit predicția comportamentului.",
            "Trăsături comune tuturor indivizilor.",
          ],
          answer: 1,
        },
        {
          text: "Care este scopul <span class='tip'>analizei factoriale<span class='tooltip-box'>Metodă statistică prin care Cattell a redus un număr mare de trăsături la un set de factori esențiali, descoperind tipare de asociere între comportamente observate.</span></span> în modelul lui Cattell?",
          options: [
            "Descrierea tipurilor de inteligență.",
            "Reducerea trăsăturilor la un set de factori esențiali ai personalității.",
            "Măsurarea performanțelor academice.",
          ],
          answer: 1,
        },
        {
          text: "Cum pot fi interpretate scorurile ridicate sau scăzute pe un factor în modelul lui Cattell?",
          options: [
            "Scorurile înalte indică trăsături psihopatologice, cele joase – sănătate mintală.",
            "Scorurile arată predispoziții comportamentale stabile – fiecare factor având o polaritate între două extreme comportamentale.",
            "Scorurile se schimbă constant în funcție de dispoziție.",
          ],
          answer: 1,
        },
        {
          text: "Ce semnificație are un scor <strong>ridicat</strong> la <span class='tip'>Warmth (Căldură emoțională)<span class='tooltip-box'>Unul dintre cei 16 factori de personalitate Cattell; scor mare sugerează o persoană suportivă, afectuoasă, confortabilă pentru ceilalți.</span></span>?",
          options: [
            "Tendință de retragere emoțională.",
            "Sprijin emoțional, confort oferit celorlalți.",
            "Instabilitate emoțională.",
          ],
          answer: 1,
        },
        {
          text: "Dacă o persoană are un scor <strong>scăzut</strong> la <span class='tip'>Emotional Stability (Stabilitate emoțională)<span class='tooltip-box'>Reflectă capacitatea de a face față stresului și provocărilor. Scorurile joase pot indica iritabilitate și instabilitate emoțională.</span></span>, ce comportamente pot fi observate?",
          options: [
            "Calm și rațional.",
            "Instinctiv, cerebral.",
            "Iritabilitate și schimbări de dispoziție.",
          ],
          answer: 2,
        },
        {
          text: "Ce indică un scor <strong>înalt</strong> la <span class='tip'>Abstractness (Abstractizare)<span class='tooltip-box'>Gradul de gândire simbolică și capacitatea de a lucra cu concepte și idei abstracte. Persoanele cu scoruri mari tind să fie imaginative, neconvenționale.</span></span>?",
          options: [
            "Pragmatism și gândire orientată spre concret.",
            "Nevoia de a evita imaginația.",
            "Tendință spre imaginație, creativitate și gândire neobișnuită.",
          ],
          answer: 2,
        },
      ],
    },
    {
      id: "fph-t13d",
      title: "Teoria psihosocială a lui Erik Erikson",
      questions: [
        {
          text: "Cum explică <span class='tip'>Erikson<span class='tooltip-box'>Psihanalist și dezvoltator al teoriei psihosociale, care propune că dezvoltarea personalității are loc prin rezolvarea unor crize specifice fiecărei etape de viață.</span></span> dezvoltarea personalității?",
          options: [
            "Prin acumularea automată de trăsături genetice.",
            "Prin parcurgerea a 8 stadii de dezvoltare, fiecare definit de un conflict specific.",
            "Prin expunerea constantă la factori sociali.",
          ],
          answer: 1,
        },
        {
          text: "Ce presupune un <span class='tip'>stadiu psihosocial<span class='tooltip-box'>O perioadă de dezvoltare în care individul se confruntă cu o tensiune între două tendințe opuse (ex: încredere vs. neîncredere), a cărei rezolvare influențează formarea personalității.</span></span> în modelul lui Erikson?",
          options: [
            "Este o perioadă de repaus psihic.",
            "Este o criză esențială care trebuie rezolvată pentru o dezvoltare sănătoasă.",
            "Este un moment temporar fără efecte majore.",
          ],
          answer: 1,
        },
        {
          text: "În copilărie, primele trei stadii psihosociale se concentrează pe:",
          options: [
            "Stimularea cognitivă și acumularea de cunoștințe.",
            "Formarea atașamentului și a <span class='tip'>autonomiei<span class='tooltip-box'>Capacitatea copilului de a acționa independent și de a lua decizii proprii, încurajată de susținerea părinților.</span></span> în raport cu părinții.",
            "Separarea completă de influența familiei.",
          ],
          answer: 1,
        },
        {
          text: "Care este conflictul specific adolescenței în teoria lui Erikson?",
          options: [
            "<span class='tip'>Identitate vs. confuzie de rol<span class='tooltip-box'>În această etapă, adolescentul caută să-și definească valorile, direcția și locul în lume. Lipsa clarității duce la incertitudine personală.</span></span>.",
            "Încredere vs. neîncredere.",
            "Inițiativă vs. vinovăție.",
          ],
          answer: 0,
        },
        {
          text: "Ce presupune <span class='tip'>unitatea identității<span class='tooltip-box'>Sentimentul unui sine coerent și stabil în timp, care leagă trecutul, prezentul și viitorul persoanei.</span></span>, conform lui Erikson?",
          options: [
            "Capacitatea de a rezolva sarcini intelectuale complexe.",
            "Sentimentul unei identități clare, coerente, care ghidează deciziile și relațiile.",
            "Adaptarea exclusivă la așteptările celorlalți.",
          ],
          answer: 1,
        },
        {
          text: "Care este focusul etapelor adulte din teoria lui Erikson (18+ ani)?",
          options: [
            "Dezvoltarea fizică.",
            "Construcția de relații afective și contribuția la binele generațiilor următoare.",
            "Izolarea față de comunitate.",
          ],
          answer: 1,
        },
        {
          text: "Ce înseamnă <span class='tip'>generativitatea<span class='tooltip-box'>Dorinta de a contribui la binele celorlalți, prin creșterea copiilor, activitate profesională, implicare socială sau transmiterea valorilor.</span></span>, conform lui Erikson?",
          options: [
            "A evita responsabilitățile pentru a te proteja emoțional.",
            "A produce, a crea și a transmite mai departe valori, cunoștințe și grijă.",
            "A atinge succesul personal fără a te implica social.",
          ],
          answer: 1,
        },
        {
          text: "Cum se numește conflictul central în ultima etapă a vieții (55+ ani), potrivit lui Erikson?",
          options: [
            "<span class='tip'>Integritate a Eului vs. Deznădejde<span class='tooltip-box'>O reflecție asupra vieții trăite: dacă individul simte că viața a avut sens, atinge integritatea; altfel, poate apărea regretul și frustrarea.</span></span>.",
            "Generativitate vs. stagnare.",
            "Inițiativă vs. vinovăție.",
          ],
          answer: 0,
        },
        {
          text: "Cum contribuie <span class='tip'>rezolvarea cu succes a stadiilor psihosociale<span class='tooltip-box'>Fiecare conflict depășit contribuie la consolidarea personalității și a sentimentului de identitate al individului.</span></span> la dezvoltarea personalității?",
          options: [
            "Crește capacitatea de învățare academică.",
            "Formează o identitate solidă și o adaptare sănătoasă la viață.",
            "Reduce complet conflictele interioare.",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "fph-t13e",
      title: "Modelul Big Five – Cele cinci dimensiuni ale personalității",
      questions: [
        {
          text: "Ce propune <span class='tip'>modelul Big Five<span class='tooltip-box'>Model factorial de personalitate care include 5 dimensiuni majore ale trăsăturilor psihologice stabile.</span></span>?",
          options: [
            "O listă de abilități dobândite prin educație.",
            "Cinci dimensiuni fundamentale ale personalității.",
            "Un set de etape ale dezvoltării emoționale.",
          ],
          answer: 1,
        },
        {
          text: "Care dintre următoarele este o dimensiune din modelul Big Five?",
          options: [
            "<span class='tip'>Deschidere către experiență<span class='tooltip-box'>Curiozitate intelectuală, imaginație, gust pentru noutate și complexitate.</span></span>",
            "<span class='tip'>Autonomie vs. Rușine<span class='tooltip-box'>Termen din teoria lui Erikson, nu face parte din Big Five.</span></span>",
            "Temperament sanguin",
          ],
          answer: 0,
        },
        {
          text: "Selectează toate dimensiunile care fac parte din modelul Big Five:",
          options: [
            "<span class='tip'>Conștiinciozitate<span class='tooltip-box'>Tendința de a fi organizat, responsabil și autodisciplinat.</span></span>",
            "<span class='tip'>Extraversie<span class='tooltip-box'>Nivelul de energie, sociabilitate și implicare în interacțiuni sociale.</span></span>",
            "<span class='tip'>Neuroticism<span class='tooltip-box'>Tendința spre instabilitate emoțională, anxietate și reactivitate crescută.</span></span>",
            "<span class='tip'>Deschidere către experiență<span class='tooltip-box'>Curiozitate intelectuală, imaginație, preferință pentru noutate și complexitate.</span></span>",
            "<span class='tip'>Agreabilitate<span class='tooltip-box'>Tendința de a fi empatic, cooperant și tolerant cu ceilalți.</span></span>",
            "<span class='tip'>Dominanță<span class='tooltip-box'>Poate părea importantă, dar nu este una dintre cele cinci dimensiuni ale modelului Big Five.</span></span>",
          ],
          answer: [0, 1, 2, 3, 4],
        },
        // ——— Dimensiuni individuale ———

        {
          text: "Cum se manifestă o persoană cu scor ridicat la <span class='tip'>Deschidere către experiență<span class='tooltip-box'>Dimensiune ce reflectă curiozitatea, creativitatea și dorința de explorare intelectuală sau artistică.</span></span>?",
          options: [
            "Preferă rutina, evită ideile noi.",
            "Este curioasă, creativă și deschisă la concepte abstracte.",
            "Evită orice formă de introspecție.",
          ],
          answer: 1,
        },
        {
          text: "Ce comportamente reflectă un nivel ridicat de <span class='tip'>Conștiinciozitate<span class='tooltip-box'>Trăsătură legată de autodisciplină, planificare, perseverență și organizare.</span></span>?",
          options: [
            "Se bazează pe impulsuri și evită planificarea.",
            "Este responsabilă, planificată și își respectă angajamentele.",
            "Este flexibilă dar inconstantă.",
          ],
          answer: 1,
        },
        {
          text: "Cum se manifestă o persoană cu un nivel înalt de <span class='tip'>Agreabilitate<span class='tooltip-box'>Tendința de a fi cooperant, empatic și atent la nevoile celorlalți.</span></span>?",
          options: [
            "Își impune mereu punctul de vedere fără compromis.",
            "Este cooperantă, empatică și dornică să ajute.",
            "Evită complet contactele sociale.",
          ],
          answer: 1,
        },
        {
          text: "Cum se comportă o persoană <span class='tip'>extraversă<span class='tooltip-box'>Cu energie socială crescută: caută interacțiuni, se simte bine în grupuri, este activă și expresivă.</span></span>?",
          options: [
            "Caută singurătatea și evită grupurile.",
            "Este activă, entuziastă și energizată de prezența celorlalți.",
            "Este calmă și detașată în orice context.",
          ],
          answer: 1,
        },
        {
          text: "Ce reflectă un scor ridicat de <span class='tip'>Neuroticism<span class='tooltip-box'>Trăsătură care indică vulnerabilitate emoțională, anxietate, tendință spre îngrijorare și instabilitate afectivă.</span></span>?",
          options: [
            "Stabilitate emoțională și calm.",
            "Tendință spre îngrijorare, iritabilitate și instabilitate emoțională.",
            "Toleranță crescută la stres.",
          ],
          answer: 1,
        },
        {
          text: "Ana este organizată, planifică totul în avans, își respectă termenele și nu uită niciodată un detaliu. Ce dimensiune a personalității reflectă acest comportament?",
          options: ["Neuroticism", "Extraversie", "Conștiinciozitate"],
          answer: 2,
        },
      ],
    },
    {
      id: "fph-t13f",
      title: "Modelul HEXACO – O abordare extinsă a trăsăturilor",
      questions: [
        {
          text: "Ce adaugă <span class='tip'>modelul HEXACO<span class='tooltip-box'>Model de personalitate cu 6 dimensiuni, derivat prin analiză lexicală, care adaugă o trăsătură etică importantă la cele 5 din Big Five.</span></span> față de modelul Big Five?",
          options: [
            "O dimensiune suplimentară numită <span class='tip'>onestitate-umilință<span class='tooltip-box'>Tendința de a fi sincer, modest, etic, lipsit de manipulare și dorință de statut personal exagerat.</span></span>.",
            "Un set de comportamente dobândite.",
            "Eliminarea trăsăturii de neuroticism.",
          ],
          answer: 0,
        },
        {
          text: "Selectează toate cele 6 dimensiuni ale modelului HEXACO:",
          options: [
            "Extraversie",
            "Conștiinciozitate",
            "Onestitate-umilință",
            "Inteligență",
            "Agreabilitate",
            "Neuroticism",
            "Deschidere către experiență",
            "<span class='tip'>Emoționalitate<span class='tooltip-box'>Echivalent parțial cu neuroticismul, dar include sensibilitate emoțională și atașament.</span></span>",
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
          text: "Care sunt componentele principale ale <span class='tip'>personalității într-o viziune structural-sistemică<span class='tooltip-box'>Model explicativ care integrează dimensiuni stabile (structuri) și procese dinamice (sisteme) pentru a descrie complexitatea personalității.</span></span>?",
          options: [
            "Memoria de lucru și stilurile de învățare.",
            "Temperament, aptitudini, caracter, <span class='tip'>sisteme operaționale<span class='tooltip-box'>Procese psihice precum atenția, gândirea, voința sau memoria de lucru, implicate în folosirea aptitudinilor.</span></span> și <span class='tip'>aspecte dinamico-energetice<span class='tooltip-box'>Componente înnăscute ale personalității ce determină ritmul, intensitatea și expresivitatea reacțiilor (ex: temperament).</span></span>.",
            "Structuri culturale și sociale exterioare.",
          ],
          answer: 1,
        },
        {
          text: "Ce reprezintă <span class='tip'>temperamentul<span class='tooltip-box'>Latura înnăscută a personalității, care influențează energia, reactivitatea și ritmul reacțiilor emoționale și comportamentale.</span></span> în această abordare?",
          options: [
            "Set de valori culturale învățate.",
            "Componentele cognitive ale memoriei.",
            "Latura dinamico-energetică a personalității, înnăscută.",
          ],
          answer: 2,
        },
        {
          text: "Cum se definesc <span class='tip'>aptitudinile<span class='tooltip-box'>Capacități instrumentale și operaționale care permit desfășurarea eficientă a activităților (ex: gândirea logică, creativitatea, îndemânarea tehnică).</span></span> în modelul structural-sistemic?",
          options: [
            "Abilități emoționale dobândite prin interacțiuni sociale.",
            "Componente înnăscute și rigide ale personalității.",
            "Capacități potențiale de performanță într-o gamă largă sau specifică de activități.",
          ],
          answer: 2,
        },
        {
          text: "Ce reflectă <span class='tip'>caracterul<span class='tooltip-box'>Latura valoric-relațională a personalității, modelată prin învățare și socializare, ce influențează modul în care ne raportăm la sine, ceilalți și realitate.</span></span>?",
          options: [
            "Nivelul de inteligență și de rapiditate în reacții.",
            "Modul de raportare la valori, reguli și relații umane.",
            "Tendințele de evitare a conflictelor.",
          ],
          answer: 1,
        },
        {
          text: "Ce sunt <span class='tip'>aspectele atitudinal-valorice<span class='tooltip-box'>Dimensiuni ale caracterului care exprimă credințele, valorile și atitudinile față de sine, ceilalți, activitate sau societate.</span></span>?",
          options: [
            "Seturi de comportamente reflexe.",
            "Stări emoționale temporare.",
            "Orientări stabile ale individului față de valori și sensuri existențiale.",
          ],
          answer: 2,
        },
        {
          text: "La ce se referă <span class='tip'>sistemele operaționale<span class='tooltip-box'>Mecanisme psihice implicate în activarea și utilizarea aptitudinilor (ex: atenția, gândirea, memoria).</span></span> în arhitectura personalității?",
          options: [
            "Seturi de abilități motrice simple.",
            "Procese cognitive care susțin aplicarea aptitudinilor.",
            "Structuri sociale dobândite prin educație.",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "fph-t13h",
      title: "Temperamentul – definiție și caracteristici",
      questions: [
        {
          text: "Ce reprezintă <span class='tip'>temperamentul<span class='tooltip-box'>Latura dinamico-energetică a personalității – adică modul în care reacționăm din punct de vedere al intensității, ritmului și echilibrului emoțional și comportamental.</span></span>?",
          options: [
            "Setul de abilități cognitive dobândite.",
            "Latura relațional-valorică a personalității.",
            "Latura dinamico-energetică a personalității.",
          ],
          answer: 2,
        },
        {
          text: "La ce se referă <span class='tip'>activitatea nervoasă superioară (ANS)<span class='tooltip-box'>Activitatea cerebrală responsabilă de reacțiile psihice complexe – implică forța, mobilitatea și echilibrul proceselor nervoase.</span></span> în teoria temperamentului?",
          options: [
            "La trăsături sociale și educabile.",
            "La caracteristicile activității cognitive superioare.",
            "La energia, mobilitatea și echilibrul proceselor nervoase.",
          ],
          answer: 2,
        },
        {
          text: "Ce înseamnă <span class='tip'>energia/ forța<span class='tooltip-box'>Capacitatea neuronilor de a susține activitate intensă – legată de rezistență psihică și răspuns emoțional puternic.</span></span> în contextul ANS?",
          options: [
            "Nivelul de creativitate.",
            "Viteza de reacție în sarcini cognitive.",
            "Capacitatea funcțională a neuronilor de a susține activitate intensă.",
          ],
          answer: 2,
        },
        {
          text: "Ce desemnează <span class='tip'>mobilitatea<span class='tooltip-box'>Viteza cu care se consumă și se regenerează resursele neuronale – reflectă flexibilitatea psihică și reactivitatea emoțională.</span></span> în temperament?",
          options: [
            "Viteză de gândire logică.",
            "Rapiditatea de adaptare emoțională și comportamentală.",
            "Tendința de a fi introvertit.",
          ],
          answer: 1,
        },
        {
          text: "Ce reprezintă <span class='tip'>echilibrul<span class='tooltip-box'>Raportul dintre excitație și inhibiție în sistemul nervos – indică stabilitatea emoțională și autocontrolul.</span></span>?",
          options: [
            "Nivelul de extraversie.",
            "Distribuția echilibrată între impulsuri și autocontrol.",
            "Tendința de a evita conflictele.",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "fph-t13j",
      title: "Tipuri temperamentale – modelul Eysenck",
      questions: [
        {
          text: "Ce indică <span class='tip'>axele E și N<span class='tooltip-box'>Modelul Eysenck se bazează pe două dimensiuni: E (Extraversie) și N (Neuroticism). Extraversia măsoară sociabilitatea, iar neuroticismul – stabilitatea emoțională.</span></span> în clasificarea temperamentelor?",
          options: [
            "Gradul de empatie și cooperare.",
            "Poziționarea între introversie/extraversie și stabilitate/instabilitate emoțională.",
            "Nivelul de inteligență și creativitate.",
          ],
          answer: 1,
        },
        {
          text: "Care dintre următoarele combinații descrie <span class='tip'>temperamentul coleric<span class='tooltip-box'>Extravertit + instabil emoțional → activ, impulsiv, energic, dar și iritabil.</span></span>?",
          options: [
            "Introversie și stabilitate emoțională.",
            "Extravertire și instabilitate emoțională.",
            "Introversie și sensibilitate crescută.",
          ],
          answer: 1,
        },
        {
          text: "Cum poate fi caracterizat <span class='tip'>temperamentul flegmatic<span class='tooltip-box'>Introvertit + stabil emoțional → calm, echilibrat, fiabil, rezervat.</span></span>?",
          options: [
            "Sociabil, entuziast, dar impulsiv.",
            "Calm, liniștit, controlat emoțional.",
            "Agitat, neliniștit, exploziv.",
          ],
          answer: 1,
        },
        {
          text: "Care dintre următoarele trăsături descriu un <span class='tip'>temperament melancolic<span class='tooltip-box'>Introvertit + instabil emoțional → predispus la anxietate, pesimism, sensibilitate crescută.</span></span>?",
          options: [
            "Calm, prietenos, încrezător.",
            "Moody, rigid, anxios, tăcut.",
            "Expansiv, impulsiv, activ.",
          ],
          answer: 1,
        },
        {
          text: "Ce trăsături caracterizează <span class='tip'>temperamentul sanguinic<span class='tooltip-box'>Extravertit + stabil emoțional → energic, sociabil, relaxat și entuziast.</span></span>?",
          options: [
            "Sociabil, deschis, energic, relaxat.",
            "Tăcut, suspicios, tensionat.",
            "Rigid, închis, pesimist.",
          ],
          answer: 0,
        },
        {
          text: "Ce poziționare pe axele E și N corespunde <strong>unei persoane calme, stabile emoțional și rezervate</strong>?",
          options: ["E+ / N+", "E− / N−", "E+ / N−"],
          answer: 1,
        },
        {
          text: "Dacă o persoană este sociabilă, activă, dar are reacții impulsive și instabile, ce temperament este mai probabil?",
          options: ["Coleric", "Sanguinic", "Melancolic"],
          answer: 0,
        },
        {
          text: "Selectează cele două dimensiuni fundamentale din modelul Eysenck:",
          options: [
            "<span class='tip'>Extraversie<span class='tooltip-box'>Gradul în care o persoană este sociabilă, energică și orientată spre exterior.</span></span>",
            "<span class='tip'>Neuroticism<span class='tooltip-box'>Tendința spre instabilitate emoțională, anxietate, iritabilitate.</span></span>",
            "Afectivitate",
            "Agreabilitate",
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
          text: "Ce reprezintă <span class='tip'>aptitudinile<span class='tooltip-box'>Latura instrumental-operațională a personalității – capacitatea de a desfășura eficient o activitate sau de a atinge performanță într-un domeniu.</span></span>?",
          options: [
            "Modalități de exprimare afectivă.",
            "Comportamente moștenite, fără impact funcțional.",
            "Latura instrumental-operațională a personalității.",
          ],
          answer: 2,
        },
        {
          text: "Cum este definit <span class='tip'>potențialul operațional<span class='tooltip-box'>Capacitatea internă de a desfășura o activitate cu eficiență, în funcție de structura sistemului psihic.</span></span> al aptitudinilor?",
          options: [
            "Capacitatea unui individ de a învăța din greșeli.",
            "Set de cunoștințe teoretice dobândite.",
            "Posibilitatea sistemului psihic de a susține performanțe în diverse activități.",
          ],
          answer: 2,
        },
        {
          text: "Aptitudinile presupun atât <span class='tip'>premise ereditare<span class='tooltip-box'>Caracteristici moștenite genetic (ex: tip de gândire, viteză de reacție), care constituie baza dezvoltării ulterioare a aptitudinilor.</span></span>, cât și:",
          options: [
            "Excluderea oricărei influențe externe.",
            "Împlinirea lor prin educație și experiență.",
            "Dezvoltarea doar în copilărie.",
          ],
          answer: 1,
        },
        {
          text: "Care este legătura dintre aptitudini și <span class='tip'>performanță<span class='tooltip-box'>Nivelul de realizare într-o activitate, influențat de aptitudini, dar și de motivație, instruire și condițiile externe.</span></span>?",
          options: [
            "Aptitudinile determină automat performanță în orice context.",
            "Performanța este exclusiv rezultatul motivației.",
            "Aptitudinile oferă potențialul pentru performanță, dar nu o garantează fără formare și practică.",
          ],
          answer: 2,
        },
      ],
    },
    {
      id: "fph-t13k",
      title: "Tipuri de aptitudini: generale și speciale",
      questions: [
        {
          text: "Care este diferența dintre <span class='tip'>aptitudinile generale<span class='tooltip-box'>Capacități aplicabile într-o gamă largă de activități – ex: inteligență, creativitate, spirit de observație.</span></span> și <span class='tip'>aptitudinile speciale<span class='tooltip-box'>Capacități aplicabile în domenii specifice – ex: muzicale, tehnice, literare, pedagogice.</span></span>?",
          options: [
            "Aptitudinile generale sunt mai greu de măsurat decât cele speciale.",
            "Aptitudinile generale se referă la performanță, iar cele speciale la motivație.",
            "Aptitudinile generale sunt aplicabile într-o varietate de activități, cele speciale în domenii specifice.",
          ],
          answer: 2,
        },
        {
          text: "Care dintre următoarele sunt <strong>aptitudini generale</strong>?",
          options: [
            "Inteligența",
            "Creativitatea",
            "Aptitudinile muzicale",
            "Spiritul de observație",
            "Aptitudinile actoricești",
          ],
          answer: [0, 1, 3],
        },
        {
          text: "Care dintre următoarele sunt <strong>aptitudini speciale</strong>?",
          options: [
            "Aptitudini pedagogice",
            "Aptitudini literare",
            "Memorie de lucru",
            "Aptitudini tehnice",
            "Aptitudini muzicale",
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
          text: "Ce este <span class='tip'>caracterul<span class='tooltip-box'>Latura relațional-valorică a personalității – indică modul în care ne raportăm la ceilalți, la activitate, la sine și la lume în general.</span></span>?",
          options: [
            "Set de deprinderi motrice.",
            "Latura relațional-valorică a personalității.",
            "Modul în care reacționăm emoțional.",
          ],
          answer: 1,
        },
        {
          text: "Cum se manifestă caracterul în viața de zi cu zi?",
          options: [
            "Prin raportarea constantă și valorică la ceilalți, la activitate și la sine.",
            "Prin reacții biologice automate.",
            "Prin fluctuații ale temperamentului.",
          ],
          answer: 0,
        },
        {
          text: "Caracterul se construiește prin învățare și este puternic impregnat valoric, proces numit <span class='tip'>enculturație<span class='tooltip-box'>Procesul prin care o persoană asimilează valorile, normele și practicile culturale ale grupului din care face parte.</span></span>. Ce implică acest proces?",
          options: [
            "Transmiterea genetică a valorilor morale.",
            "Interiorizarea valorilor culturale prin educație și interacțiune socială.",
            "Excluderea influenței mediului asupra personalității.",
          ],
          answer: 1,
        },
      ],
    },
    {
      id: "fph-t13m",
      title: "Atitudinea – unitate de bază a caracterului",
      questions: [
        {
          text: "Ce este <span class='tip'>atitudinea<span class='tooltip-box'>Modalitate relativ stabilă de raportare, orientare și reglare a acțiunii față de diferite aspecte ale existenței.</span></span>?",
          options: [
            "O reacție biologică pasageră.",
            "O modalitate stabilă de raportare și orientare față de lume.",
            "O trăsătură de temperament moștenită.",
          ],
          answer: 1,
        },
        {
          text: "Care dintre următoarele sunt exemple de tipuri de <strong>atitudini</strong>?",
          options: [
            "Față de sine",
            "Față de ceilalți",
            "Față de activitate",
            "Față de mediul ecologic",
            "Față de realitățile sociale",
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
            "<span class='tip'>Affect (emoții)<span class='tooltip-box'>Ceea ce o persoană simte în legătură cu un anumit obiect, situație sau experiență.</span></span>",
            "Atitudine verbală.",
            "Acțiune impulsivă.",
          ],
          answer: 0,
        },
        {
          text: "Ce reprezintă componenta <strong></strong> – <span class='tip'>Behavior<span class='tooltip-box'>Modul în care o persoană se comportă față de un anumit aspect al existenței.</span></span> – în modelul ABC?",
          options: [
            "Totalitatea comportamentelor spontane.",
            "Reacțiile motorii înnăscute.",
            "Comportamentul adoptat față de un aspect al lumii.",
          ],
          answer: 2,
        },
        {
          text: "Ce înseamnă <strong>C</strong> – <span class='tip'>Cognition<span class='tooltip-box'>Credințele, convingerile sau ideile unei persoane legate de un aspect al realității.</span></span>?",
          options: [
            "Reflexe condiționate.",
            "Ceea ce o persoană crede sau gândește despre un lucru.",
            "Capacitatea de memorare.",
          ],
          answer: 1,
        },
        {
          text: "Ce reflectă modelul <strong>ABC</strong> al atitudinii în ansamblu?",
          options: [
            "Doar emoțiile unei persoane în raport cu realitatea.",
            "Doar comportamentele observabile în contexte sociale.",
            "Interacțiunea dintre emoții, comportamente și convingeri în construirea atitudinii.",
          ],
          answer: 2,
        },
      ],
    },
  ],
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
          front: "Ce studiază psihologia",
          back: "<strong>Psihologia</strong> este știința care studiază <span class='tip'><span class='tooltip-box'>Totalitatea manifestărilor observabile ale individului în relație cu mediul.</span><strong>comportamentul</strong></span> și <span class='tip'><span class='tooltip-box'>Activitățile interne ale psihicului: percepția, atenția, memoria, gândirea, imaginația, emoțiile și deciziile.</span><strong>procesele mentale</strong></span>, pentru a explica și înțelege funcționarea psihicului uman.",
        },

        {
          front: "Ce este psihicul uman",
          back: "<strong>Psihicul</strong> reprezintă <span class='tip'><span class='tooltip-box'>Stări, procese și trăsături psihice trăite intern, inaccesibile observației directe.</span><strong>totalitatea fenomenelor subiective</strong></span> care permit <span class='tip'><span class='tooltip-box'>Ajustarea comportamentului și a funcționării psihice la cerințele mediului.</span><strong>adaptarea la lume</strong></span> și <span class='tip'><span class='tooltip-box'>Autoobservarea, evaluarea și conștientizarea propriei persoane.</span><strong>raportarea la sine</strong></span>.",
        },

        {
          front:
            "Care sunt principiile fundamentale în psihologie (Cosmovici, Neveanu)",
          back: "<strong>Principiile fundamentale ale psihologiei</strong>, formulate de <strong>A. Cosmovici</strong> și <strong>P. P. Neveanu</strong>, explică modul general de funcționare a psihicului:<br><br>• <span class='tip'><span class='tooltip-box'>Orice fapt psihic are cauze și condiții de apariție.</span><strong>Principiul determinismului</strong></span><br>• <span class='tip'><span class='tooltip-box'>Psihicul este un sistem deschis, dinamic și autoreglabil.</span><strong>Principiul organizării sistemice</strong></span><br>• <span class='tip'><span class='tooltip-box'>Psihicul se transformă și se reorganizează pe parcursul vieții.</span><strong>Principiul dezvoltării</strong></span><br>• <span class='tip'><span class='tooltip-box'>Psihicul este modelat de contextul social, cultural și istoric.</span><strong>Principiul condiționării social istorice</strong></span>",
        },

        {
          front: "Ce afirmă principiul determinismului",
          back: "<strong>Principiul determinismului</strong> afirmă că <span class='tip'><span class='tooltip-box'>Emoții, gânduri, decizii, atitudini sau comportamente.</span><strong>orice fapt psihic</strong></span> se înscrie într o <span class='tip'><span class='tooltip-box'>Relație de cauzalitate complexă, multiplă și probabilistică.</span><strong>traiectorie cauzală</strong></span>, nimic din viața psihică neapărând întâmplător, dar nici rigid determinat.",
        },

        {
          front: "Ce afirmă principiul organizării sistemice",
          back: "<strong>Principiul organizării sistemice</strong> afirmă că psihicul este un <span class='tip'><span class='tooltip-box'>Sistem care face schimb permanent de informație cu mediul.</span><strong>sistem deschis</strong></span>, <span class='tip'><span class='tooltip-box'>Structurile și funcțiile sale se modifică în timp.</span><strong>dinamic</strong></span>, <span class='tip'><span class='tooltip-box'>Organizat pe sisteme și subsisteme interdependente.</span><strong>hipercomplex</strong></span> și <span class='tip'><span class='tooltip-box'>Capabil să își regleze funcționarea prin mecanisme de feedback.</span><strong>autoreglabil</strong></span>.",
        },

        {
          front: "Ce afirmă principiul dezvoltării",
          back: "<strong>Principiul dezvoltării</strong> susține că psihicul uman <span class='tip'><span class='tooltip-box'>Nu este fix sau definitiv structurat.</span><strong>se transformă continuu</strong></span> pe parcursul vieții, prin <span class='tip'><span class='tooltip-box'>Diferențiere, reorganizare și integrare progresivă a structurilor psihice.</span><strong>procese de schimbare calitativă</strong></span>, influențate de experiență, educație și activitate.",
        },

        {
          front: "Ce afirmă principiul condiționării social istorice",
          back: "<strong>Principiul condiționării social istorice</strong> afirmă că psihicul este construit și modelat de <span class='tip'><span class='tooltip-box'>Norme, valori, limbaj, relații sociale și educație.</span><strong>mediul social și cultural</strong></span> și de <span class='tip'><span class='tooltip-box'>Contextul istoric concret în care trăiește individul.</span><strong>epoca istorică</strong></span>, formând omul ca <span class='tip'><span class='tooltip-box'>Agent activ, capabil de acțiune, cunoaștere și evaluare valorică.</span><strong>subiect pragmatic, epistemic și axiologic</strong></span>.",
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
          back: "<strong>Conștiința</strong> este o experimentare <span class='tip'><span class='tooltip-box'>Trăire personală, interioară, proprie fiecărui individ.</span><strong>subiectivă</strong></span>, <span class='tip'><span class='tooltip-box'>Are organizare internă, nu este haotică, elementele sunt ordonate.</span><strong>structurată</strong></span>, <span class='tip'><span class='tooltip-box'>Include mai multe componente ale vieții psihice, aflate în legătură între ele.</span><strong>complexă</strong></span> și <span class='tip'><span class='tooltip-box'>Se desfășoară acum, în timp real, cu implicare activă în situația curentă.</span><strong>prezentă</strong></span> a interacțiunii individului cu mediul și cu sine.",
        },

        {
          front:
            "Definește cele două forme ale conștiinței la Andrei Cosmovici",
          back: "<strong>Andrei Cosmovici</strong> distinge două forme ale conștiinței:<br><br><strong>Conștiința implicită</strong> – orientarea conștiinței către obiectele, situațiile și evenimentele din mediul extern.<br><br><strong>Conștiința reflexivă</strong> – orientarea conștiinței asupra propriei persoane, asupra stărilor, gândurilor și acțiunilor proprii.",
        },

        {
          front: "Definește inconștientul",
          back: "<strong>Inconștientul</strong> este depozitar al achizițiilor de natură <span class='tip'><span class='tooltip-box'>Cunoștințe, informații neutilizate și amintiri greu accesibile.</span><strong>cognitivă</strong></span> și al aspectelor de factură <span class='tip'><span class='tooltip-box'>Impulsuri, tendințe, nevoi și impresii afective care pot influența comportamentul.</span><strong>motivațional afectivă</strong></span>, aflate în <span class='tip'><span class='tooltip-box'>Conținuturi existente în psihic, dar neactive și neconștiente în momentul prezent.</span><strong>stare de latență</strong></span>.",
        },

        {
          front: "Definește instanțele vieții psihice în teoria lui Freud",
          back: "<strong>În teoria lui Freud</strong>, viața psihică este organizată în trei instanțe ale personalității:<br><br><span class='tip'><span class='tooltip-box'>Instanța pulsiunilor și dorințelor primare, orientată spre satisfacere imediată. Funcționează aproape în totalitate la nivel inconștient și este guvernată de principiul plăcerii.</span><strong>🐒 Sinele (Id)</strong></span><br><span class='tip'><span class='tooltip-box'>Instanța rațională care mediază între cerințele Sinelui, regulile realității și exigențele Supraeului. Are componente conștiente, subconștiente și inconștiente și funcționează după principiul realității.</span><strong>⚖️ Eul (Ego)</strong></span><br><span class='tip'><span class='tooltip-box'>Instanța normelor morale, a idealurilor și a interdicțiilor interiorizate. Este predominant inconștientă și reprezintă interiorizarea regulilor sociale și parentale.</span><strong>👼 Supraeul (Superego)</strong></span>.",
        },

        {
          front: "Definește modelul lui Jung privind structura psihicului",
          back: "<strong>În modelul lui Carl Gustav Jung</strong>, psihicul este organizat în <strong>conștiință</strong> și <strong>inconștient</strong>. <span class='tip'><span class='tooltip-box'>Centrul conștiinței, instanța care spune „eu” și organizează experiența conștientă.</span><strong>Egoul</strong></span> aparține conștiinței și coordonează viața psihică conștientă.<br><br>Inconștientul are două niveluri: <span class='tip'><span class='tooltip-box'>Totalitatea amintirilor, experiențelor și conținuturilor reprimate sau uitate, provenite din istoria individuală a persoanei.</span><strong>inconștientul personal</strong></span> și <span class='tip'><span class='tooltip-box'>Nivel profund al psihicului, comun tuturor oamenilor, care conține structuri universale ale experienței umane.</span><strong>inconștientul colectiv</strong></span>. Inconștientul colectiv este populat cu <span class='tip'><span class='tooltip-box'>Modele sau imagini universale, înnăscute, prezente în toate culturile, care structurează experiența și simbolurile umane.</span><strong>arhetipuri</strong></span>.",
        },

        {
          front: "Definește subconștientul",
          back: "<strong>Subconștientul</strong> este o <span class='tip'><span class='tooltip-box'>Zonă intermediară care face legătura între conștient și inconștient.</span><strong>zonă tampon</strong></span> între conștient și inconștient, care depozitează <span class='tip'><span class='tooltip-box'>Informații din experiența trecută care pot fi reactivate relativ ușor.</span><strong>amintiri</strong></span>, <span class='tip'><span class='tooltip-box'>Modele învățate de comportament și pași mentali practici, reutilizabili în situații similare.</span><strong>scheme de acțiune</strong></span> și <span class='tip'><span class='tooltip-box'>Răspunsuri și proceduri deja formate, care pot deveni conștiente fără efort major.</span><strong>automatisme</strong></span>, gata să devină conștiente.",
        },

        {
          front: "Definește atenția postvoluntară",
          back: "<strong>Atenția postvoluntară</strong> apare după <span class='tip'><span class='tooltip-box'>Faza inițială în care atenția este susținută prin voință și efort conștient.</span><strong>efortul inițial al atenției voluntare</strong></span> și se menține <span class='tip'><span class='tooltip-box'>Fără consum semnificativ de efort conștient, datorită implicării naturale.</span><strong>spontan</strong></span>, pe baza <span class='tip'><span class='tooltip-box'>Motivație internă care face activitatea atractivă și ușor de susținut.</span><strong>interesului pentru activitate</strong></span>.",
        },

        {
          front:
            "Definește relația dintre conștient, subconștient și inconștient",
          back: "<strong>Conștientul</strong>, <strong>subconștientul</strong> și <strong>inconștientul</strong> sunt repere ale unui <span class='tip'><span class='tooltip-box'>Organizare continuă în care nivelurile psihice nu sunt separate rigid, ci se influențează și se susțin reciproc.</span><strong>continuum funcțional</strong></span> al vieții psihice, care împreună formează un sistem înalt funcțional.",
        },

        {
          front: "Definește relația dintre vis și inconștient",
          back: "<strong>Visul</strong> este asociat în principal cu <span class='tip'><span class='tooltip-box'>Nivel al vieții psihice în care se află conținuturi neconștiente, precum dorințe, conflicte și trăiri profunde.</span><strong>inconștientul</strong></span>, deoarece apare în <span class='tip'><span class='tooltip-box'>În timpul visului lipsește controlul voluntar și lucid al conștiinței.</span><strong>absența controlului conștient</strong></span> și poate exprima <span class='tip'><span class='tooltip-box'>Conținuturi prezentate indirect, prin imagini și scenarii care au un sens ascuns.</span><strong>simbolic</strong></span> <span class='tip'><span class='tooltip-box'>Dorințe, conflicte și trăiri psihice adânci, care nu sunt accesibile direct conștiinței.</span><strong>conținuturi profunde</strong></span>.",
        },

        {
          front: "Definește relația dintre intuiție și inconștient",
          back: "<strong>Intuiția</strong> este explicată ca având sediul preponderent în <span class='tip'><span class='tooltip-box'>Nivel al vieții psihice care conține procese și conținuturi neconștiente, cu influență asupra gândirii și comportamentului.</span><strong>inconștient</strong></span>, fiind un <span class='tip'><span class='tooltip-box'>Proces prin care se ajunge la o concluzie fără conștientizarea tuturor pașilor și motivelor implicate.</span><strong>raționament cu premise inconștiente</strong></span>.",
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
          back: "<strong>Excitabilitatea</strong> este <span class='tip'><span class='tooltip-box'>Materie vie înseamnă organisme capabile de răspuns biologic la mediu.</span><strong>proprietatea materiei vii</strong></span> de a răspunde <span class='tip'><span class='tooltip-box'>Răspuns cu modificări interne, nu doar reacție pasivă.</span><strong>activ</strong></span> și <span class='tip'><span class='tooltip-box'>Răspuns diferențiat, în funcție de tipul și intensitatea stimulului.</span><strong>selectiv</strong></span> la acțiunea stimulilor. Excitabilitatea este condiția de bază care face posibilă reacția organismului la mediu.",
        },
        {
          front: "Ce este informația ca premisă a activității psihice",
          back: "<strong>Informația</strong>, în accepțiunea lui <strong>P. P. Neveanu</strong>, este unul dintre cele trei <span class='tip'><span class='tooltip-box'>Moduri fundamentale de existență ale materiei.</span><strong>aspecte ale existenței</strong></span>, alături de <span class='tip'><span class='tooltip-box'>Componenta materială, concretă a realității.</span><strong>substanță</strong></span> și <span class='tip'><span class='tooltip-box'>Capacitatea materiei de a produce schimbări și transformări.</span><strong>energie</strong></span>. Informația exprimă <span class='tip'><span class='tooltip-box'>Structurarea, organizarea și sensul proceselor și stărilor.</span><strong>organizarea și semnificația</strong></span> activității sistemelor vii, făcând posibilă coordonarea și reglarea lor.",
        },
        {
          front: "Ce este stimulul în relație cu excitabilitatea și informația",
          back: "<strong>Stimulul</strong> este <span class='tip'><span class='tooltip-box'>Poate fi extern sau intern, atâta timp cât acționează asupra organismului.</span><strong>orice factor de mediu</strong></span> care declanșează <span class='tip'><span class='tooltip-box'>Modificări temporare, fără distrugerea structurii biologice.</span><strong>modificări reversibile</strong></span> în materia vie. Stimulul produce reacție doar atunci când atinge un <span class='tip'><span class='tooltip-box'>Nivel minim de intensitate necesar declanșării răspunsului.</span><strong>prag de stimulare</strong></span> și reprezintă sursa externă a informației procesate de sistemul nervos.",
        },

        {
          front: "Care este rolul și manifestarea sistemului nervos central",
          back: "<strong>Sistemul nervos central</strong> are un rol esențial în <span class='tip'><span class='tooltip-box'>Relații prin care individul se ajustează mediului și își reglează conduita.</span><strong>stabilirea și menținerea relațiilor adaptative</strong></span> ale individului cu mediul. Activitatea sa se manifestă prin <span class='tip'><span class='tooltip-box'>Procese psihice superioare precum gândirea, limbajul, memoria, atenția, percepția și reglarea comportamentului.</span><strong>activitatea nervoasă superioară</strong></span>, bazată pe procese corticale precum <span class='tip'><span class='tooltip-box'>Creșterea activității neuronale și facilitarea transmiterii impulsurilor.</span><strong>excitația</strong></span>, <span class='tip'><span class='tooltip-box'>Frânarea sau blocarea selectivă a activității neuronale.</span><strong>inhibiția</strong></span> și <span class='tip'><span class='tooltip-box'>Distribuirea coordonată a excitației și inhibiției în zone diferite corticale și subcorticale.</span><strong>inducția</strong></span>.",
        },

        {
          front: "Definește procesele corticale fundamentale",
          back: "<strong>Procesele corticale fundamentale</strong> sunt <span class='tip'><span class='tooltip-box'>Creșterea activității neuronale, care facilitează transmiterea semnalelor.</span><strong>excitația</strong></span> și <span class='tip'><span class='tooltip-box'>Proces opus excitației, care frânează și blochează selectiv activitatea pentru reglaj.</span><strong>inhibiția</strong></span>. Prin <span class='tip'><span class='tooltip-box'>Funcționarea lor împreună, în balans reciproc.</span><strong>acțiune coordonată</strong></span>, ele asigură <span class='tip'><span class='tooltip-box'>Dozarea răspunsurilor psihice și comportamentale, evitând excesul de activare sau de frânare.</span><strong>echilibrul</strong></span> funcționării psihice.",
        },

        {
          front: "Explică anatomia sistemului nervos central",
          back: "<strong>Sistemul nervos central</strong> este alcătuit din <span class='tip'><span class='tooltip-box'>Ansamblul structurilor nervoase situate în cutia craniană.</span><strong>encefal</strong></span> și <span class='tip'><span class='tooltip-box'>Componenta SNC aflată în canalul vertebral, care face legătura dintre encefal și restul corpului.</span><strong>măduva spinării</strong></span>. Aceste două structuri asigură coordonarea și reglarea activităților organismului.",
        },
        {
          front: "Care este diferența dintre creier, encefal și minte",
          back: "<span class='tip'><span class='tooltip-box'>Organul fizic, biologic, format din țesut nervos.</span><strong>Creierul</strong></span> desemnează organul material al activității nervoase.<br><br><span class='tip'><span class='tooltip-box'>Termen anatomic care include totalitatea structurilor nervoase din cutia craniană.</span><strong>Encefalul</strong></span> este noțiunea neuroanatomică utilizată în descrierea sistemului nervos central.<br><br><span class='tip'><span class='tooltip-box'>Ansamblul proceselor psihice rezultate din funcționarea sistemului nervos.</span><strong>Mintea</strong></span> se referă la activitatea psihică și nu reprezintă o structură anatomică.",
        },

        {
          front: "Explică termenul de neurotransmițător",
          back: "<strong>Neurotransmițătorii</strong>, numiți și <span class='tip'><span class='tooltip-box'>Mediatori chimici înseamnă molecule care transmit semnalul între celule nervoase.</span><strong>mediatori chimici</strong></span>, sunt molecule eliberate în <span class='tip'><span class='tooltip-box'>Spațiul foarte îngust dintre doi neuroni, unde se transferă semnalul.</span><strong>fanta sinaptică</strong></span>, care <span class='tip'><span class='tooltip-box'>Fac legătura funcțională între neuroni prin transmiterea impulsului nervos sub formă chimică.</span><strong>mijlocesc transmiterea impulsului nervos</strong></span> între neuroni. <br><br>Exemple: <span class='tip'><span class='tooltip-box'>Implicată în recompensă, motivație și controlul mișcării.</span><strong>dopamina</strong></span>, <span class='tip'><span class='tooltip-box'>Implicată în reglarea dispoziției, somnului și apetitului.</span><strong>serotonina</strong></span>, <span class='tip'><span class='tooltip-box'>Substanțe cu efect analgezic și de producere a stării de bine.</span><strong>endorfinele</strong></span>, <span class='tip'><span class='tooltip-box'>Implicată în reacțiile de tip luptă sau fugi, creșterea ritmului cardiac și mobilizarea energiei.</span><strong>adrenalina</strong></span>.",
        },

        {
          front: "Definește ce este un neuron",
          back: "<strong>Neuronul</strong> este <span class='tip'><span class='tooltip-box'>Celula nervoasă este unitatea de bază a sistemului nervos.</span><strong>celula nervoasă</strong></span>, unitatea de bază a sistemului nervos, cu rol în <span class='tip'><span class='tooltip-box'>Inițierea semnalului nervos.</span><strong>generarea</strong></span> și <span class='tip'><span class='tooltip-box'>Transmiterea semnalului nervos către alte celule.</span><strong>conducerea impulsurilor nervoase</strong></span>. Structura sa include <span class='tip'><span class='tooltip-box'>Conține nucleul și coordonează funcționarea neuronului.</span><strong>corpul celular</strong></span>, <span class='tip'><span class='tooltip-box'>Prelungiri scurte și ramificate care recepționează impulsurile de la alți neuroni.</span><strong>dendritele</strong></span> și <span class='tip'><span class='tooltip-box'>Prelungire lungă care transmite impulsul către alte celule.</span><strong>axonul</strong></span>.",
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
          back: "<strong>Experimentarea conștientă a lumii</strong> presupune <span class='tip'><span class='tooltip-box'>Implicarea persoanei în mod voluntar, orientarea atenției și interpretarea stimulilor.</span><strong>raportarea conștientă și activă</strong></span> la <span class='tip'><span class='tooltip-box'>Stimuli din mediu, precum lumina sau sunetele.</span><strong>stimuli externi</strong></span> și <span class='tip'><span class='tooltip-box'>Stimuli din interiorul organismului, precum starea corporală și emoțiile.</span><strong>stimuli interni</strong></span>, prin <span class='tip'><span class='tooltip-box'>Recepționare, prelucrare și interpretare a informației.</span><strong>procesarea informației</strong></span> și <span class='tip'><span class='tooltip-box'>Reacții orientate spre adaptare, nu simple automatisme.</span><strong>producerea de comportamente adaptative</strong></span>.",
        },

        {
          front:
            "Cum se împart procesele cognitive și ce proprietăți au sistemele cognitive",
          back: "<strong>Procesele cognitive</strong> pot fi <span class='tip'><span class='tooltip-box'>Cunoaștere directă, bazată pe contact imediat cu stimulul.</span><strong>senzoriale primare</strong></span>, precum <span class='tip'><span class='tooltip-box'>Semnalizarea directă a proprietăților simple ale stimulilor.</span><strong>senzațiile</strong></span>, <span class='tip'><span class='tooltip-box'>Organizarea și interpretarea informației senzoriale în obiecte și evenimente.</span><strong>percepțiile</strong></span> și <span class='tip'><span class='tooltip-box'>Imagini mentale provenite din percepții, păstrate chiar și în absența stimulului.</span><strong>reprezentările</strong></span>. Ele pot fi și <span class='tip'><span class='tooltip-box'>Prelucrări de nivel superior care transformă și reorganizează informația.</span><strong>cognitive secundare</strong></span>, precum <span class='tip'><span class='tooltip-box'>Stocare și reactualizare a informației.</span><strong>memoria</strong></span>, <span class='tip'><span class='tooltip-box'>Operare cu concepte, relații și raționamente.</span><strong>gândirea</strong></span> și <span class='tip'><span class='tooltip-box'>Combinare și transformare creativă a informației.</span><strong>imaginația</strong></span>. Sistemele cognitive au două proprietăți fundamentale: <span class='tip'><span class='tooltip-box'>Construirea de modele mentale despre lume.</span><strong>reprezentarea</strong></span> și <span class='tip'><span class='tooltip-box'>Operarea cu informația prin analiză, comparație, inferență și rezolvare de probleme.</span><strong>calculul</strong></span>.",
        },

        {
          front: "Ce sunt procesele reglatorii și care este rolul lor",
          back: "<strong>Procesele reglatorii</strong> includ <span class='tip'><span class='tooltip-box'>Forțele care declanșează, direcționează și susțin comportamentul.</span><strong>motivația</strong></span>, <span class='tip'><span class='tooltip-box'>Dimensiunea trăirilor subiective care colorează relația cu lumea.</span><strong>afectivitatea</strong></span> și <span class='tip'><span class='tooltip-box'>Autoreglarea conștientă orientată spre scop, cu efort și decizie.</span><strong>voința</strong></span>. Rolul lor este să <span class='tip'><span class='tooltip-box'>Activează și susțin utilizarea resurselor psihice.</span><strong>furnizeze energia și susținerea</strong></span> necesare pentru <span class='tip'><span class='tooltip-box'>Cunoaștere și comportamente adecvate situației.</span><strong>procesarea informației și producerea comportamentelor adaptative</strong></span>.",
        },

        {
          front: "Ce zone cerebrale sunt implicate în procesarea informației",
          back: "<span class='tip'><span class='tooltip-box'>Implicat în funcții executive, control motor și producerea limbajului.</span><strong>Lobul frontal</strong></span> susține <span class='tip'><span class='tooltip-box'>Organizarea acțiunilor și anticiparea consecințelor.</span><strong>planificarea</strong></span>, <span class='tip'><span class='tooltip-box'>Coordonarea mișcărilor voluntare.</span><strong>controlul motor</strong></span> și <span class='tip'><span class='tooltip-box'>Producerea limbajului.</span><strong>vorbirea</strong></span>.<br><br><span class='tip'><span class='tooltip-box'>Integrează informații tactile și spațiale și contribuie la conștiința corporală.</span><strong>Lobul parietal</strong></span> participă la <span class='tip'><span class='tooltip-box'>Perceperea contactului, presiunii și vibrațiilor.</span><strong>atingere</strong></span>, <span class='tip'><span class='tooltip-box'>Integrarea senzorială cu orientare spațială.</span><strong>procesare spațială</strong></span> și <span class='tip'><span class='tooltip-box'>Conștientizarea poziției și limitelor corpului în spațiu.</span><strong>conștiință corporală</strong></span>.<br><br><span class='tip'><span class='tooltip-box'>Implicat în auz, înțelegerea limbajului și recunoașterea unor tipare.</span><strong>Lobul temporal</strong></span> este asociat cu <span class='tip'><span class='tooltip-box'>Procesarea sunetelor.</span><strong>auzul</strong></span> și <span class='tip'><span class='tooltip-box'>Identificarea unor tipare, inclusiv fețe.</span><strong>recunoașterea facială</strong></span>.<br><br><span class='tip'><span class='tooltip-box'>Zona principală de procesare a informațiilor vizuale.</span><strong>Lobul occipital</strong></span> susține <span class='tip'><span class='tooltip-box'>Prelucrarea informației vizuale.</span><strong>procesarea vizuală</strong></span>.<br><br><span class='tip'><span class='tooltip-box'>Rol major în coordonarea mișcărilor, echilibru și finețea execuțiilor motorii.</span><strong>Cerebelul</strong></span> este implicat în <span class='tip'><span class='tooltip-box'>Control motor fin și stabilitate posturală.</span><strong>coordonare și echilibru</strong></span>.",
        },

        {
          front: "Ce este integrarea senzorială și integrarea multisenzorială",
          back: "<strong>Integrarea senzorială</strong> este procesul prin care creierul <span class='tip'><span class='tooltip-box'>Organizează și coordonează informațiile venite din corp și din mediu.</span><strong>organizează senzațiile</strong></span> din <span class='tip'><span class='tooltip-box'>Informații din interiorul organismului.</span><strong>stimulare internă</strong></span> și <span class='tip'><span class='tooltip-box'>Informații provenite din mediu.</span><strong>stimulare externă</strong></span> pentru o utilizare eficientă a organismului.<br><br> <strong>Integrarea multisenzorială</strong> înseamnă <span class='tip'><span class='tooltip-box'>Unificarea informațiilor provenite din mai multe simțuri.</span><strong>combinarea mai multor canale senzoriale</strong></span> pentru a construi <span class='tip'><span class='tooltip-box'>O imagine coerentă și completă a mediului.</span><strong>o reprezentare întregită a lumii</strong></span>. Diferența esențială este că integrarea multisenzorială pune împreună informații din mai multe simțuri, pentru adaptare mai bună.",
        },

        {
          front: "Care sunt principiile integrării multisenzoriale",
          back: "<strong>Principiile integrării multisenzoriale</strong> arată când creierul combină cel mai ușor informații din simțuri diferite.<br><br><span class='tip'><span class='tooltip-box'>Integrarea apare mai ușor când stimulii provin din aceeași locație.</span><strong>Regula spațială</strong></span> spune că stimulii se integrează mai eficient dacă vin din aceeași zonă a mediului.<br><br><span class='tip'><span class='tooltip-box'>Stimulii se integrează mai bine dacă apar simultan sau foarte aproape în timp.</span><strong>Regula temporală</strong></span> spune că apropierea în timp favorizează integrarea.<br><br><span class='tip'><span class='tooltip-box'>Când fiecare stimul luat separat este slab, combinarea lor produce un răspuns mult mai puternic.</span><strong>Principiul eficienței inverse</strong></span> arată că stimulii slabi pot beneficia cel mai mult de integrare.",
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
          front: "Ce sunt senzațiile și când apar?",
          back: "<strong>Senzațiile</strong> sunt <span class='tip'><span class='tooltip-box'>Primele trepte ale cunoașterii, bazate pe contactul direct cu stimulii, fără prelucrări complexe.</span><strong>procese cognitive primare</strong></span>.<br><br>Sunt prin care sunt semnalizate <span class='tip'><span class='tooltip-box'>Elemente de bază ale stimulului, precum intensitate, culoare, temperatură, durată.</span><strong>caracteristici simple</strong></span> ale stimulilor, ca răspuns la acțiunea directă asupra <span class='tip'><span class='tooltip-box'>Ochii, urechile, pielea, nasul, limba și căile nervoase care trimit informația spre creier. În psihologie, acest ansamblu poartă numele de analizator.</span><strong>organelor de simț</strong></span>.<br><br>O senzație apare doar dacă <span class='tip'><span class='tooltip-box'>Stimulul trebuie să acționeze efectiv asupra receptorilor senzoriali, nu doar să fie imaginat.</span><strong>stimulul acționează direct</strong></span> asupra organelor de simț.",
        },

        {
          front: "Care sunt calitățile unei senzații?",
          back: "<strong>Calitățile unei senzații</strong> sunt:<br><br>• <span class='tip'><span class='tooltip-box'>Cât de puternic este trăit stimulul. Depinde atât de intensitatea stimulului, cât și de starea generală a individului.</span><strong>intensitatea</strong></span><br>• <span class='tip'><span class='tooltip-box'>Ce fel de senzație este, dată de specificitatea analizatorului: vizual, auditiv, cutanat etc.</span><strong>calitatea</strong></span><br>• <span class='tip'><span class='tooltip-box'>Cât timp se menține senzația, în funcție de durata acțiunii stimulului.</span><strong>durata</strong></span><br>• <span class='tip'><span class='tooltip-box'>„Culoarea” de plăcere sau neplăcere a senzației, influențată de experiența anterioară.</span><strong>tonalitatea afectivă</strong></span>",
        },

        {
          front:
            "Ce tipuri de senzații există după natura conținutului informațional?",
          back: "După natura conținutului informațional, senzațiile pot fi:<br><br>• <span class='tip'><span class='tooltip-box'>Apar prin acțiunea stimulilor din mediul exterior asupra analizatorilor.</span><strong>produse prin stimulare externă</strong></span><br>• <span class='tip'><span class='tooltip-box'>Apar din stări și procese interne ale organismului, precum foamea sau durerea organică.</span><strong>produse prin stimulare internă</strong></span><br>• <span class='tip'><span class='tooltip-box'>Senzații care informează despre poziția corpului și mișcare: postura, direcția și intensitatea mișcării, echilibrul.</span><strong>despre poziția și mișcarea corpului</strong></span>",
        },

        {
          front: "Ce înseamnă senzații externe, interne și de poziție mișcare?",
          back: "Senzațiile <strong>externe</strong>: • <span class='tip'>vizuale</span>, • <span class='tip'>auditive</span>, • <span class='tip'>gustative</span>, • <span class='tip'>olfactive</span>, • <span class='tip'>cutanate</span><br><br>Senzațiile <strong>interne</strong>: • <span class='tip'>foamea</span>, • <span class='tip'>setea</span>, • <span class='tip'>durerea organică</span><br><br>Senzațiile <strong>despre poziție și mișcare</strong>: • <span class='tip'>proprioceptive</span>, • <span class='tip'>chinestezice</span>, • <span class='tip'>de echilibru</span>",
        },

        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legea sensibilității (apud Popescu Neveanu, Zlate, Crețu, 1998) descriu regularitățile generale ale funcționării sensibilității ca proces psihic.</span>Legilor sensibilității</span></strong> Există diverse legi unele centrate pe raportul direct stimul-senzație: <strong>legea intensității</strong>, <strong>legea contrastului senzorial</strong>, <strong>legea semnificației</strong>, altele pe modificarea sensibilității în timp și prin interacțiune: <strong>legea adaptării</strong>, <strong>legea interacțiunii analizatorilor</strong> Definește <strong>legea intensității</strong>",
          back: "<strong>Legea intensității</strong> este o <span class='tip'><span class='tooltip-box'>Aparține legilor centrate pe raportul direct dintre stimul și senzație.</span><strong>lege primară a sensibilității</strong></span> și afirmă că o senzație apare și se modifică în funcție de <span class='tip'><span class='tooltip-box'>Cât de puternic acționează stimulul asupra receptorilor.</span><strong>intensitatea stimulului</strong></span>. Sunt esențiale <span class='tip'><span class='tooltip-box'>Nivelul minim de apariție a senzației.</span><strong>pragul minimal absolut</strong></span> și <span class='tip'><span class='tooltip-box'>Diferența minimă perceptibilă între doi stimuli.</span><strong>pragul diferențial</strong></span>.",
        },

        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legea sensibilității (apud Popescu Neveanu, Zlate, Crețu, 1998) descriu regularitățile generale ale funcționării sensibilității ca proces psihic.</span>Legilor sensibilității</span></strong> Există diverse legi unele centrate pe raportul direct stimul-senzație: <strong>legea intensității</strong>, <strong>legea contrastului senzorial</strong>, <strong>legea semnificației</strong>, altele pe modificarea sensibilității în timp și prin interacțiune: <strong>legea adaptării</strong>, <strong>legea interacțiunii analizatorilor</strong> Definește <strong>legea contrastului senzorial</strong>",
          back: "<strong>Legea contrastului senzorial</strong> este o <span class='tip'><span class='tooltip-box'>Aparține legilor centrate pe raportul direct dintre stimul și senzație.</span><strong>lege primară a sensibilității</strong></span> și arată că <span class='tip'><span class='tooltip-box'>De exemplu cald rece sau luminos întunecat.</span><strong>stimuli cu proprietăți opuse</strong></span> se scot reciproc în evidență, făcând senzațiile <span class='tip'><span class='tooltip-box'>Mai clare și mai diferențiate.</span><strong>mai distincte</strong></span>.",
        },

        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legea sensibilității (apud Popescu Neveanu, Zlate, Crețu, 1998) descriu regularitățile generale ale funcționării sensibilității ca proces psihic.</span>Legilor sensibilității</span></strong> Există diverse legi unele centrate pe raportul direct stimul-senzație: <strong>legea intensității</strong>, <strong>legea contrastului senzorial</strong>, <strong>legea semnificației</strong>, altele pe modificarea sensibilității în timp și prin interacțiune: <strong>legea adaptării</strong>, <strong>legea interacțiunii analizatorilor</strong> Definește <strong>legea semnificației</strong>",
          back: "<strong>Legea semnificației</strong> este o <span class='tip'><span class='tooltip-box'>Aparține legilor centrate pe raportul direct dintre stimul și senzație.</span><strong>lege primară a sensibilității</strong></span> și afirmă că <span class='tip'><span class='tooltip-box'>Importanța personală a stimulului pentru individ.</span><strong>cu cât un stimul este mai important</strong></span>, cu atât crește <span class='tip'><span class='tooltip-box'>Capacitatea de detectare și diferențiere.</span><strong>sensibilitatea</strong></span> față de el.",
        },

        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legea sensibilității (apud Popescu Neveanu, Zlate, Crețu, 1998) descriu regularitățile generale ale funcționării sensibilității ca proces psihic.</span>Legilor sensibilității</span></strong> Există diverse legi unele centrate pe raportul direct stimul-senzație: <strong>legea intensității</strong>, <strong>legea contrastului senzorial</strong>, <strong>legea semnificației</strong>, altele pe modificarea sensibilității în timp și prin interacțiune: <strong>legea adaptării</strong>, <strong>legea interacțiunii analizatorilor</strong> Definește <strong>legea interacțiunii analizatorilor</strong>",
          back: "<strong>Legea interacțiunii analizatorilor</strong> este o <span class='tip'><span class='tooltip-box'>Aparține legilor centrate pe modificarea sensibilității prin interacțiune.</span><strong>lege secundară a sensibilității</strong></span> și afirmă că senzațiile produse într un <span class='tip'><span class='tooltip-box'>Ansamblu funcțional format din receptor căi nervoase și zonă corticală.</span><strong>analizator</strong></span> pot influența apariția sau modularea senzațiilor din altele. Manifestări tipice sunt <span class='tip'><span class='tooltip-box'>Alternanță inhibiție excitație.</span><strong>inducția reciprocă</strong></span> și <span class='tip'><span class='tooltip-box'>Asociere senzorială între modalități.</span><strong>sinestezia</strong></span>.",
        },

        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legea sensibilității (apud Popescu Neveanu, Zlate, Crețu, 1998) descriu regularitățile generale ale funcționării sensibilității ca proces psihic.</span>Legilor sensibilității</span></strong> Există diverse legi unele centrate pe raportul direct stimul-senzație: <strong>legea intensității</strong>, <strong>legea contrastului senzorial</strong>, <strong>legea semnificației</strong>, altele pe modificarea sensibilității în timp și prin interacțiune: <strong>legea adaptării</strong>, <strong>legea interacțiunii analizatorilor</strong> Definește <strong>legea adaptării</strong>",
          back: "<strong>Legea adaptării</strong> este o <span class='tip'><span class='tooltip-box'>Aparține legilor centrate pe modificarea sensibilității în timp.</span><strong>lege secundară a sensibilității</strong></span> și afirmă că sensibilitatea unui <span class='tip'><span class='tooltip-box'>Ansamblu funcțional receptor căi nervoase zonă corticală.</span><strong>analizator</strong></span> <span class='tip'><span class='tooltip-box'>Sub acțiune repetată sau prelungită a stimulului.</span><strong>se modifică în timp</strong></span>.",
        },
        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legea sensibilității (apud Popescu Neveanu, Zlate, Crețu, 1998) aparțin psihologiei senzoriale și explică regularitățile generale ale funcționării sensibilității. Sunt organizate în legi centrate pe raportul direct stimul senzație: legea intensității, legea contrastului senzorial, legea semnificației și legi centrate pe modificarea sensibilității în timp și prin interacțiune: legea adaptării, legea interacțiunii analizatorilor.</span>legilor sensibilității</span> Definește legea adaptării",
          back: "<strong>Legea adaptării</strong> este o <span class='tip'><span class='tooltip-box'>Aparține legilor care descriu modificarea sensibilității în timp.</span><strong>lege secundară a sensibilității</strong></span> și afirmă că sensibilitatea unui <span class='tip'><span class='tooltip-box'>Ansamblu funcțional receptor căi nervoase zonă corticală.</span><strong>analizator</strong></span> <span class='tip'><span class='tooltip-box'>Sub acțiune repetată sau prelungită a stimulului.</span><strong>se modifică în timp</strong></span>.",
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
          back: "<strong>Percepțiile</strong> sunt <span class='tip'><span class='tooltip-box'>Procese de bază ale cunoașterii, dar mai complexe decât senzațiile.</span><strong>procese cognitive primare</strong></span> prin care sunt semnalizate <span class='tip'><span class='tooltip-box'>Formă, mărime, orientare, relații spațiale.</span><strong>informații complete</strong></span> despre stimul, prin <span class='tip'><span class='tooltip-box'>Integrarea informațiilor senzoriale într o imagine unitară și coerentă.</span><strong>o imagine unitară</strong></span>.",
        },

        {
          front:
            "Identifică legile care descriu organizarea internă a percepției",
          back: "Legile care descriu <span class='tip'><span class='tooltip-box'>Proces prin care informația senzorială devine imagine coerentă.</span><strong>organizarea internă</strong></span> a percepției sunt: <span class='tip'><span class='tooltip-box'>Percepția apare ca un întreg: esențial plus detalii plus context.</span><strong>legea integralității</strong></span>, <span class='tip'><span class='tooltip-box'>Însușirile stimulului se organizează ierarhic în funcție de intensitate și informație.</span><strong>legea structuralității perceptive</strong></span>, <span class='tip'><span class='tooltip-box'>Percepția privilegiază stimulii relevanți pentru individ.</span><strong>legea selectivității perceptive</strong></span>.",
        },

        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legile percepției descriu regularitățile generale ale organizării, stabilității și funcționării percepției ca proces cognitiv.</span>legilor percepției</span></strong> Există legi care descriu organizarea internă a percepției: <strong>legea integralității</strong>, <strong>legea structuralității perceptive</strong>, <strong>legea selectivității perceptive</strong> Definește legea integralității",
          back: "<strong>Legea integralității</strong> afirmă că <span class='tip'><span class='tooltip-box'>Percepția apare ca un întreg organizat, nu ca o sumă de senzații izolate.</span><strong>imaginea perceptivă este unitară</strong></span>, incluzând elementele esențiale, detaliile și contextul.",
        },

        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legile percepției descriu regularitățile generale ale organizării, stabilității și funcționării percepției ca proces cognitiv.</span>legilor percepției</span></strong> Există legi care descriu organizarea internă a percepției: <strong>legea integralității</strong>, <strong>legea structuralității perceptive</strong>, <strong>legea selectivității perceptive</strong> Definește legea structuralității perceptive",
          back: "<strong>Legea structuralității perceptive</strong> afirmă că <span class='tip'><span class='tooltip-box'>Caracteristicile stimulului se organizează ierarhic în funcție de relevanță.</span><strong>însușirile stimulului sunt organizate structural</strong></span>, cele mai intense și informative apărând primele în plan perceptiv.",
        },

        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legile percepției descriu regularitățile generale ale organizării, stabilității și funcționării percepției ca proces cognitiv.</span>legilor percepției</span></strong> Există legi care descriu organizarea internă a percepției: <strong>legea integralității</strong>, <strong>legea structuralității perceptive</strong>, <strong>legea selectivității perceptive</strong> Definește legea selectivității perceptive",
          back: "<strong>Legea selectivității perceptive</strong> afirmă că <span class='tip'><span class='tooltip-box'>Percepția nu reflectă tot câmpul stimulativ în mod egal.</span><strong>stimulii relevanți pentru individ sunt percepuți cu prioritate</strong></span>, în funcție de interese, nevoi și scopuri.",
        },

        {
          front:
            "Identifică legile care descriu stabilitatea și direcționarea percepției",
          back: "Legile care descriu <span class='tip'><span class='tooltip-box'>Tendința obiectelor de a fi percepute constant.</span><strong>stabilitatea perceptivă</strong></span> și <span class='tip'><span class='tooltip-box'>Proiectarea imaginii către sursa stimulului.</span><strong>direcționarea imaginii perceptive</strong></span> sunt: <span class='tip'><span class='tooltip-box'>Forma, mărimea și culoarea sunt percepute relativ constante, indiferent de variațiile situaționale.</span><strong>legea constanței perceptive</strong></span>, <span class='tip'><span class='tooltip-box'>Stimulii relevanți pentru individ sunt percepuți cu prioritate.</span><strong>legea semnificației</strong></span>, <span class='tip'><span class='tooltip-box'>Imaginea se formează în creier, dar este trăită ca fiind la locul obiectului real.</span><strong>legea proiectivității imaginii perceptive</strong></span>.",
        },

        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legile percepției descriu regularitățile generale ale organizării, stabilității și direcționării percepției.</span>legilor percepției</span></strong> Există legi care descriu stabilitatea și direcționarea percepției: <strong>legea constanței perceptive</strong>, <strong>legea semnificației</strong>, <strong>legea proiectivității imaginii perceptive</strong> Definește legea constanței perceptive",
          back: "<strong>Legea constanței perceptive</strong> afirmă că <span class='tip'><span class='tooltip-box'>Modificările condițiilor fizice nu schimbă radical percepția obiectului.</span><strong>forma, mărimea și culoarea sunt percepute relativ constante</strong></span>, în ciuda variațiilor de perspectivă sau iluminare.",
        },

        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legile percepției descriu regularitățile generale ale organizării, stabilității și direcționării percepției.</span>legilor percepției</span></strong> Există legi care descriu stabilitatea și direcționarea percepției: <strong>legea constanței perceptive</strong>, <strong>legea semnificației</strong>, <strong>legea proiectivității imaginii perceptive</strong> Definește legea semnificației",
          back: "<strong>Legea semnificației</strong> afirmă că <span class='tip'><span class='tooltip-box'>Importanța subiectivă a stimulului influențează claritatea percepției.</span><strong>stimulii semnificativi sunt percepuți cu prioritate</strong></span> față de cei lipsiți de relevanță.",
        },

        {
          front:
            "Din cadrul <strong><span class='tip'><span class='tooltip-box'>Legile percepției descriu regularitățile generale ale organizării, stabilității și direcționării percepției.</span>legilor percepției</span></strong> Există legi care descriu stabilitatea și direcționarea percepției: <strong>legea constanței perceptive</strong>, <strong>legea semnificației</strong>, <strong>legea proiectivității imaginii perceptive</strong> Definește legea proiectivității imaginii perceptive",
          back: "<strong>Legea proiectivității imaginii perceptive</strong> afirmă că <span class='tip'><span class='tooltip-box'>Imaginea perceptivă este trăită ca fiind localizată în spațiul exterior.</span><strong>percepția este proiectată către sursa stimulului</strong></span>, deși este elaborată la nivel cortical.",
        },

        {
          front: "Enumeră formele percepției",
          back: "Percepția poate lua forme specifice în funcție de tipul informației: <span class='tip'><span class='tooltip-box'>Formă, mărime, relief, poziție, distanță.</span><strong>spațiu</strong></span>, <span class='tip'><span class='tooltip-box'>Durată și succesiune.</span><strong>timp</strong></span>, <span class='tip'><span class='tooltip-box'>Detectarea deplasării obiectelor.</span><strong>mișcare</strong></span>.",
        },

        {
          front: "Descrie percepția proprietăților spațiale",
          back: "Include <span class='tip'><span class='tooltip-box'>Configurația obiectului.</span><strong>forma</strong></span>, <span class='tip'><span class='tooltip-box'>Dimensiunile obiectului.</span><strong>mărimea</strong></span>, <span class='tip'><span class='tooltip-box'>Adâncime și volum.</span><strong>relieful</strong></span>, <span class='tip'><span class='tooltip-box'>Locul obiectului în raport cu reperele.</span><strong>poziția</strong></span> și <span class='tip'><span class='tooltip-box'>Apropiere depărtare față de observator sau repere.</span><strong>distanța</strong></span>.",
        },

        {
          front: "Descrie percepția timpului",
          back: "Include <span class='tip'><span class='tooltip-box'>Ordinea în care apar evenimentele.</span><strong>succesiunea</strong></span> și <span class='tip'><span class='tooltip-box'>Cât durează un eveniment.</span><strong>durata</strong></span>.",
        },

        {
          front: "Explică factorii care influențează percepția mișcării",
          back: "Este influențată de <span class='tip'><span class='tooltip-box'>Elemente stabile din câmp care servesc ca puncte de comparație.</span><strong>rolul reperelor</strong></span> și de <span class='tip'><span class='tooltip-box'>Menținerea scurtă a imaginii pe retină.</span><strong>persistența imaginii retiniene</strong></span>.",
        },

        {
          front: "Explică iluziile perceptive",
          back: "<strong>Iluziile perceptive</strong> sunt <span class='tip'><span class='tooltip-box'>Percepții deformate ale unui stimul real.</span><strong>distorsiuni</strong></span> ale imaginii perceptive și apar prin <span class='tip'><span class='tooltip-box'>Componentele din jurul stimulului acționează simultan cu acesta.</span><strong>efecte de câmp</strong></span>, adică <span class='tip'><span class='tooltip-box'>Contextul modifică modul de recepționare a stimulului.</span><strong>influența contextului</strong></span>.",
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
          front: "Explică reprezentarea",
          back: "<strong>Reprezentarea</strong> este un <span class='tip'><span class='tooltip-box'>Proces psihic care păstrează și reconstruiește mental informațiile percepute anterior.</span><strong>proces cognitiv senzorial</strong></span> prin care sunt semnalizate <span class='tip'><span class='tooltip-box'>Formă, culoare, dimensiune, contur.</span><strong>caracteristici concrete</strong></span> și <span class='tip'><span class='tooltip-box'>Trăsături esențiale ale obiectului care rămân stabile în minte.</span><strong>caracteristici reprezentative</strong></span> ale stimulilor, sub forma unor <span class='tip'><span class='tooltip-box'>Imagini mintale care apar în absența stimulului real.</span><strong>imagini secundare</strong></span>, unitare, dar <span class='tip'><span class='tooltip-box'>Simplificate mental: păstrează doar elementele esențiale.</span><strong>schematice</strong></span>, în <span class='tip'><span class='tooltip-box'>Obiectul nu mai acționează direct asupra organelor de simț.</span><strong>absența acțiunii nemijlocite</strong></span> a stimulilor asupra <span class='tip'><span class='tooltip-box'>Sistemul receptor plus căile nervoase plus zonele corticale care procesează informația.</span><strong>analizatorilor</strong></span>.",
        },
        {
          front: "Explică de ce reprezentările sunt imagini secundare",
          back: "Reprezentările sunt <span class='tip'><span class='tooltip-box'>Imagini mintale care continuă percepția după dispariția obiectului real.</span><strong>imagini secundare</strong></span>, adică <span class='tip'><span class='tooltip-box'>Imaginea mentală rămâne disponibilă chiar și când obiectul nu mai este prezent.</span><strong>apar în absența obiectului</strong></span>.",
        },
        {
          front:
            "Explică ce înseamnă că reprezentările sunt unitare dar schematice",
          back: "Reprezentările sunt <span class='tip'><span class='tooltip-box'>Imaginea mentală este unitară, nu un colaj de fragmente.</span><strong>unitare</strong></span>, dar <span class='tip'><span class='tooltip-box'>Ele rețin doar trăsăturile semnificative ale stimulului, nu și toate detaliile percepute inițial.</span><strong>schematice</strong></span>, ceea ce implică <span class='tip'><span class='tooltip-box'>Păstrează doar ceea ce este relevant pentru obiect.</span><strong>selectarea esențialului</strong></span>.",
        },
        {
          front:
            "Explică ideea că reprezentările sunt imagini mintale formate pe baza percepțiilor",
          back: "Reprezentările sunt <span class='tip'><span class='tooltip-box'>Sunt continuări ale percepțiilor: mențin informația chiar și după dispariția obiectului.</span><strong>imagini mintale formate pe baza percepțiilor</strong></span>, adică <span class='tip'><span class='tooltip-box'>Reprezentările continuă percepțiile și apar în absența obiectului.</span><strong>continuă percepțiile</strong></span>.",
        },
        {
          front:
            "Enumeră tipurile principale de reprezentări după analizatorul implicat",
          back: "După <span class='tip'><span class='tooltip-box'>Sistemul senzorial dominant care produce forma mentală: vizual, auditiv, chinestezic.</span><strong>analizatorul</strong></span> implicat, există tipuri principale: <span class='tip'><span class='tooltip-box'>Cele mai frecvente: forme, culori, contururi; domină experiența de reprezentare.</span><strong>reprezentări vizuale</strong></span>, <span class='tip'><span class='tooltip-box'>Sunete, ritmuri, melodii, reprezentări verbale.</span><strong>reprezentări auditive</strong></span>, <span class='tip'><span class='tooltip-box'>Imagini ale mișcării: includ și micromișcările pregătitoare.</span><strong>reprezentări chinestezice</strong></span>.",
        },
        {
          front:
            "Aplică distincția lui J Piaget între reprezentări reproductive și anticipative",
          back: "Conform lui <span class='tip'><span class='tooltip-box'>Autor care distinge reprezentările după raportul lor cu experiența trecută și cu situațiile noi.</span><strong>J Piaget</strong></span>, distingem <span class='tip'><span class='tooltip-box'>Reproduc ceea ce a fost perceput anterior: pot fi statice, dinamice sau de transformare.</span><strong>reprezentări reproductive</strong></span> și <span class='tip'><span class='tooltip-box'>Imagine mentală despre ceva neperceput încă, generată de imaginație și gândire.</span><strong>reprezentări anticipative</strong></span>. Reproductive <span class='tip'><span class='tooltip-box'>Reconstruiesc mental experiențe percepute anterior.</span><strong>refac experiențe trecute</strong></span>, iar anticipative <span class='tip'><span class='tooltip-box'>Permit formarea de imagini mentale despre situații nepercepute încă.</span><strong>proiectează situații nepercepute</strong></span>.",
        },
        {
          front:
            "Explică ce înseamnă că reprezentările anticipative se produc prin imaginație și gândire",
          back: "Reprezentările anticipative se produc prin <span class='tip'><span class='tooltip-box'>Proces de combinare și transformare a imaginilor mintale.</span><strong>imaginație</strong></span> și <span class='tip'><span class='tooltip-box'>Proces de operare cu informații și relații, dincolo de datele imediate.</span><strong>gândire</strong></span>, ceea ce înseamnă că <span class='tip'><span class='tooltip-box'>Putem imagina obiecte sau situații care nu au fost percepute niciodată.</span><strong>pot apărea situații noi</strong></span> în plan mental.",
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
          front: "Explică memoria și etapele funcționării ei",
          back: "<strong>Memoria</strong> este un <span class='tip'><span class='tooltip-box'>Proces mental esențial implicat în păstrarea și folosirea informațiilor.</span><strong>proces psihic</strong></span> de <span class='tip'><span class='tooltip-box'>Păstrarea și accesarea ulterioară a informațiilor.</span><strong>stocare și destocare</strong></span> a informației și de <span class='tip'><span class='tooltip-box'>Folosirea experienței anterioare în situații noi.</span><strong>utilizare a experienței cognitive</strong></span>.<br><br>Funcționează prin <span class='tip'><span class='tooltip-box'>Înregistrarea inițială.</span><strong>întipărire</strong></span>, <span class='tip'><span class='tooltip-box'>Menținerea în timp.</span><strong>păstrare</strong></span> și <span class='tip'><span class='tooltip-box'>Aducerea în conștiință.</span><strong>reactualizare</strong></span>, realizată prin <span class='tip'><span class='tooltip-box'>Identificare cu suport extern.</span><strong>recunoaștere</strong></span> și <span class='tip'><span class='tooltip-box'>Evocare fără suport.</span><strong>reproducere</strong></span>.",
        },

        {
          front: "Identifică sistemele mnezice și rolul lor general",
          back: "<strong>Memoria senzorială (MS)</strong> - stocaj foarte scurt al urmelor senzoriale brute<br><br><strong>Memoria de scurtă durată / de lucru (MSD)</strong> - menține și manipulează informația activă<br><br><strong>Memoria de lungă durată (MLD)</strong> - depozitul pe termen lung",
        },
        {
          front: "Explică memoria senzorială",
          back: "<strong>Memoria senzorială (MS)</strong> este un <span class='tip'><span class='tooltip-box'>Depozit extrem de scurt al informațiilor senzoriale brute.</span><strong>stocaj senzorial</strong></span>, cu durată de <span class='tip'><span class='tooltip-box'>Interval foarte scurt.</span><strong>zecimi de secundă</strong></span>, care activează <span class='tip'><span class='tooltip-box'>Identifică trăsături elementare.</span><strong>detectorii de trăsături</strong></span> fără <span class='tip'><span class='tooltip-box'>Nu necesită focalizare voluntară.</span><strong>atenție</strong></span> și constituie <span class='tip'><span class='tooltip-box'>Baza selecției cognitive.</span><strong>materie primă</strong></span> pentru prelucrări ulterioare.",
        },

        {
          front: "Explică memoria de lucru",
          back: "<strong>Memoria de scurtă durată (MSD)</strong> este <span class='tip'><span class='tooltip-box'>Segment activ al MLD.</span><strong>partea activă a memoriei</strong></span>, menținând informația <span class='tip'><span class='tooltip-box'>Pentru rezolvarea sarcinii curente.</span><strong>aici și acum</strong></span>. Are o capacitate de <span class='tip'><span class='tooltip-box'>Numărul magic al lui Miller.</span><strong>7 ± 2 elemente</strong></span> și o durată de <span class='tip'><span class='tooltip-box'>Fără repetiție.</span><strong>15–20 secunde</strong></span>, extensibilă prin <span class='tip'><span class='tooltip-box'>Reorganizare semantică.</span><strong>chunking</strong></span>.",
        },

        {
          front: "Explică relația dintre memoria de lucru și atenție",
          back: "<span class='tip'><span class='tooltip-box'>Miclea 2003.</span><strong>MSD și atenția</strong></span> sunt <span class='tip'><span class='tooltip-box'>În condiții obișnuite.</span><strong>coextensive</strong></span>, însă memoria de lucru are o <span class='tip'><span class='tooltip-box'>Aria informațională gestionată.</span><strong>extensiune</strong></span> ușor mai mare și mai stabilă.",
        },

        {
          front: "Explică memoria de lungă durată și rolul ei",
          back: "<strong>Memoria de lungă durată (MLD)</strong> este <span class='tip'><span class='tooltip-box'>Totalitatea cunoștințelor și experiențelor.</span><strong>ansamblul cunoștințelor</strong></span>, cu <span class='tip'><span class='tooltip-box'>Fără limită strictă.</span><strong>capacitate teoretic nelimitată</strong></span>, sprijinind MSD prin <span class='tip'><span class='tooltip-box'>Chemarea informațiilor relevante.</span><strong>activare selectivă</strong></span>.",
        },

        {
          front: "Compară memoria explicită cu memoria implicită",
          back: "Memoria <span class='tip'><span class='tooltip-box'>Verbalizabilă și conștientă.</span><strong>explicită (declarativă)</strong></span> vizează <span class='tip'><span class='tooltip-box'>Fapte și cunoștințe.</span><strong>conținut conceptual</strong></span>, iar memoria <span class='tip'><span class='tooltip-box'>Neconștientizată verbal.</span><strong>implicită (procedurală)</strong></span> se exprimă prin <span class='tip'><span class='tooltip-box'>Execuție automată.</span><strong>performanță</strong></span>.",
        },

        {
          front: "Diferențiază memoria episodică și memoria semantică",
          back: "<strong>Memoria episodică</strong> <span class='tip'><span class='tooltip-box'>Evenimente trăite personal.</span><strong>autobiografică</strong></span> susține <span class='tip'><span class='tooltip-box'>Continuitatea sinelui.</span><strong>identitatea de sine</strong></span>, iar <strong>memoria semantică</strong> vizează <span class='tip'><span class='tooltip-box'>Cunoștințe generale.</span><strong>informații factuale și conceptuale</strong></span> despre lume.",
        },

        {
          front: "Aplică principii pentru optimizarea memorării",
          back: "Memorarea este facilitată de <span class='tip'><span class='tooltip-box'>Organizare logică.</span><strong>sens</strong></span>, <span class='tip'><span class='tooltip-box'>Exemple și imagini.</span><strong>concret</strong></span>, <span class='tip'><span class='tooltip-box'>Reluare în timp.</span><strong>repetiție</strong></span> și <span class='tip'><span class='tooltip-box'>Relevanță personală.</span><strong>semnificație</strong></span>. <span class='tip'><span class='tooltip-box'>Învățare intenționată.</span><strong>Intenționalitatea</strong></span> este eficientă doar cu <span class='tip'><span class='tooltip-box'>Procesare semantică.</span><strong>prelucrare de profunzime</strong></span> și un <span class='tip'><span class='tooltip-box'>Nici prea mică nici excesivă.</span><strong>optimum motivațional</strong></span>.",
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
          front: "Explică gândirea",
          back: "<strong>Gândirea</strong> este un <span class='tip'><span class='tooltip-box'>Proces mental complex care depășește percepția directă.</span><strong>proces psihic superior</strong></span> de <span class='tip'><span class='tooltip-box'>Selecție organizare comparare restructurare.</span><strong>prelucrare informațională</strong></span>, prin care sunt extrase <span class='tip'><span class='tooltip-box'>Trăsături definitorii stabile.</span><strong>proprietăți esențiale</strong></span>, sunt organizate <span class='tip'><span class='tooltip-box'>Categorii conceptuale.</span><strong>clase de obiecte</strong></span> și sunt construite <span class='tip'><span class='tooltip-box'>Relații logice între concepte.</span><strong>relații categoriale</strong></span>.",
        },

        {
          front: "Explică rolul limbajului și al mediului în gândire",
          back: "Gândirea funcționează prin <span class='tip'><span class='tooltip-box'>Limbajul permite formularea și manipularea conceptelor.</span><strong>mediere verbală</strong></span> și apare în <span class='tip'><span class='tooltip-box'>Situații probleme sarcini concrete.</span><strong>interacțiunea persoană mediu</strong></span>.",
        },

        {
          front:
            "Explică analiza și sinteza ca operații fundamentale ale gândirii",
          back: "<strong>Analiza</strong> presupune <span class='tip'><span class='tooltip-box'>Separarea mentală a părților.</span><strong>descompunerea unității</strong></span>, iar <strong>sinteza</strong> presupune <span class='tip'><span class='tooltip-box'>Reunirea elementelor într o structură nouă.</span><strong>organizarea într un întreg</strong></span>. Din analiza trăsăturilor și sinteza relațiilor derivă toate celelalte operații ale gândirii.",
        },

        {
          front: "Explică operațiile derivate ale gândirii",
          back: "<span class='tip'><span class='tooltip-box'>Identificarea asemănărilor și diferențelor.</span><strong>Comparația</strong></span>, <span class='tip'><span class='tooltip-box'>Selectarea trăsăturilor esențiale.</span><strong>abstractizarea</strong></span>, <span class='tip'><span class='tooltip-box'>Extinderea trăsăturilor la o clasă.</span><strong>generalizarea</strong></span>, <span class='tip'><span class='tooltip-box'>Aplicarea conceptului general la un exemplu.</span><strong>concretizarea</strong></span> și <span class='tip'><span class='tooltip-box'>Aplicarea categoriei generale unui caz individual.</span><strong>particularizarea</strong></span>.",
        },

        {
          front: "Explică produsele gândirii",
          back: "<strong>Produsele gândirii</strong> sunt <span class='tip'><span class='tooltip-box'>Rezultate stabilizate ale prelucrării conceptuale.</span><strong>concepte judecăți și raționamente</strong></span>, formate prin operațiile gândirii și utilizate în organizarea cunoașterii.",
        },

        {
          front: "Explică conceptele",
          back: "<strong>Conceptele</strong> sunt <span class='tip'><span class='tooltip-box'>Cele mai simple forme logice.</span><strong>unități de bază ale gândirii</strong></span>, având rol de <span class='tip'><span class='tooltip-box'>Rezultat și instrument al gândirii.</span><strong>produs și instrument</strong></span>. Ele sunt <span class='tip'><span class='tooltip-box'>Rețin doar esențialul.</span><strong>condensări selective de informație</strong></span> și <span class='tip'><span class='tooltip-box'>Organizează obiectele în clase.</span><strong>integratori categoriali</strong></span>, cu determinare <span class='tip'><span class='tooltip-box'>Influență culturală educațională lingvistică.</span><strong>socioculturală</strong></span>.",
        },

        {
          front: "Explică judecățile",
          back: "<strong>Judecățile</strong> sunt <span class='tip'><span class='tooltip-box'>Forme logice care afirmă sau neagă.</span><strong>raporturi între concepte</strong></span>. Ele pot fi <span class='tip'><span class='tooltip-box'>Descriu cum este obiectul.</span><strong>atributive</strong></span> sau <span class='tip'><span class='tooltip-box'>Descriu ce face obiectul.</span><strong>predicative</strong></span>.",
        },

        {
          front: "Explică raționamentele",
          back: "<strong>Raționamentele</strong> sunt <span class='tip'><span class='tooltip-box'>Structuri logice complexe.</span><strong>înlanțuiri de judecăți</strong></span> care duc la o concluzie. Ele includ <span class='tip'><span class='tooltip-box'>Judecăți de plecare.</span><strong>premise</strong></span>, <span class='tip'><span class='tooltip-box'>Derivarea concluziei.</span><strong>inferență</strong></span> și <span class='tip'><span class='tooltip-box'>Rezultatul final.</span><strong>concluzie</strong></span>. Pot fi <span class='tip'><span class='tooltip-box'>De la general la particular.</span><strong>deductive</strong></span>, <span class='tip'><span class='tooltip-box'>Structuri condiționale.</span><strong>ipotetico deductive</strong></span> sau <span class='tip'><span class='tooltip-box'>De la particular la general.</span><strong>inductive</strong></span>.",
        },

        {
          front: "Explică activitățile gândirii",
          back: "<strong>Activitățile gândirii</strong> sunt <span class='tip'><span class='tooltip-box'>Utilizări aplicate ale operațiilor mentale.</span><strong>forme de punere în acțiune</strong></span> a gândirii în situații concrete precum învățarea înțelegerea planificarea și rezolvarea de probleme.",
        },

        {
          front: "Explică conceptualizarea",
          back: "<strong>Conceptualizarea</strong> presupune <span class='tip'><span class='tooltip-box'>Organizarea ierarhică a conceptelor.</span><strong>relații necesare</strong></span> de <span class='tip'><span class='tooltip-box'>Caz particular inclus într un general.</span><strong>subordonare</strong></span>, <span class='tip'><span class='tooltip-box'>Concepte de același nivel.</span><strong>coordonare</strong></span> și <span class='tip'><span class='tooltip-box'>Concept general care include altele.</span><strong>supraordonare</strong></span>. Se formează prin învățare și are determinare socioculturală.",
        },

        {
          front: "Explică înțelegerea",
          back: "<strong>Înțelegerea</strong> este <span class='tip'><span class='tooltip-box'>Latura funcțională permanentă a gândirii.</span><strong>integrarea informațiilor noi</strong></span> în structurile cognitive existente. Poate fi <span class='tip'><span class='tooltip-box'>Rapidă intuitivă.</span><strong>spontană</strong></span> sau <span class='tip'><span class='tooltip-box'>Bazată pe analiză și raționament.</span><strong>discursivă</strong></span> și duce la <span class='tip'><span class='tooltip-box'>Actualizarea schemelor cognitive.</span><strong>restructurare cognitivă</strong></span>.",
        },

        {
          front: "Explică strategiile de operare intelectuală",
          back: "<span class='tip'><span class='tooltip-box'>Succesiune fixă de pași.</span><strong>Algoritmica</strong></span> rezolvă sarcini standardizate, iar <span class='tip'><span class='tooltip-box'>Explorare flexibilă creativă.</span><strong>euristica</strong></span> caută soluții multiple și favorizează descoperirea.",
        },

        {
          front: "Explică gândirea convergentă și divergentă",
          back: "<strong>Gândirea convergentă</strong> urmărește <span class='tip'><span class='tooltip-box'>O soluție unică corectă.</span><strong>rezolvarea logică</strong></span>, iar <strong>gândirea divergentă</strong> generează <span class='tip'><span class='tooltip-box'>Variante multiple originale.</span><strong>soluții alternative</strong></span>, bazate pe flexibilitate și creativitate.",
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
          front: "Explică motivația",
          back: "<strong>Motivația</strong> este un <span class='tip'><span class='tooltip-box'>Nevoi interne fiziologice sau psihologice.</span><strong>ansamblu de stări de necesitate</strong></span> cu <span class='tip'><span class='tooltip-box'>Pun organismul în mișcare.</span><strong>proprietate de activare</strong></span> și <span class='tip'><span class='tooltip-box'>Orientează acțiunea spre satisfacerea nevoii.</span><strong>stimulare a comportamentului</strong></span>, determinând conduita orientată spre scop.",
        },

        {
          front: "Explică funcțiile fundamentale ale motivației",
          back: "Motivația îndeplinește <span class='tip'><span class='tooltip-box'>Semnalează apariția unei stări de lipsă.</span><strong>funcția de activare internă și semnalizare a dezechilibrului</strong></span>, <span class='tip'><span class='tooltip-box'>Furnizează energie și orientare.</span><strong>funcția de energizare și direcționare</strong></span> și <span class='tip'><span class='tooltip-box'>Controlează și ajustează conduita.</span><strong>funcția de autoreglare a conduitei</strong></span>.",
        },

        {
          front: "Explică structurile motivaționale",
          back: "<strong>Structurile motivaționale</strong> sunt <span class='tip'><span class='tooltip-box'>Forme relativ stabile ale motivației.</span><strong>modalități de organizare și exprimare a motivației</strong></span> în conduită, incluzând <strong>trebuințe</strong>, <strong>motive</strong>, <strong>interese</strong>, <strong>convingeri</strong> și <strong>idealuri</strong>.",
        },

        {
          front: "Explică trebuințele",
          back: "<strong>Trebuințele</strong> sunt <span class='tip'><span class='tooltip-box'>Surse interne de energie.</span><strong>forțe motrice fundamentale</strong></span> care mențin <span class='tip'><span class='tooltip-box'>Echilibrul fiziologic psihic și social.</span><strong>echilibrul biopsihosocial</strong></span>. Ele pot fi <strong>primare</strong> (foame sete somn mișcare) sau <strong>secundare</strong> (comunicare confort autoactualizare). Nesatisfacerea lor amplifică tensiunea sau duce la mecanisme de apărare.",
        },

        {
          front: "Explică motivele",
          back: "<strong>Motivul</strong> este o <span class='tip'><span class='tooltip-box'>Trebuință devenită conștientă.</span><strong>trebuință conștientizată</strong></span> care <span class='tip'><span class='tooltip-box'>Inițiază și menține acțiunea.</span><strong>declanșează susține și direcționează comportamentul</strong></span>. Motivele se organizează în <span class='tip'><span class='tooltip-box'>Configurații dinamice.</span><strong>constelații motivaționale</strong></span> de tip <strong>optare</strong>, <strong>coroborare</strong> și <strong>conflict</strong>.",
        },

        {
          front: "Explică interesele",
          back: "<strong>Interesele</strong> sunt <span class='tip'><span class='tooltip-box'>Orientări stabile către domenii de activitate.</span><strong>formațiuni motivaționale complexe</strong></span> cu componentă <span class='tip'><span class='tooltip-box'>Gândire afect și voință.</span><strong>cognitivă afectivă și volitivă</strong></span>, având <span class='tip'><span class='tooltip-box'>Contribuie la dezvoltarea personalității.</span><strong>efect formativ</strong></span>.",
        },

        {
          front: "Explică convingerile",
          back: "<strong>Convingerile</strong> sunt <span class='tip'><span class='tooltip-box'>Idei încărcate emoțional.</span><strong>judecăți puternic impregnate afectiv</strong></span>, legate de <span class='tip'><span class='tooltip-box'>Setul personal de valori.</span><strong>sistemul valoric</strong></span>, care <span class='tip'><span class='tooltip-box'>Mobilizează conduita.</span><strong>orientează comportamentul</strong></span>.",
        },

        {
          front: "Explică idealurile",
          back: "<strong>Idealurile</strong> sunt <span class='tip'><span class='tooltip-box'>Modele de perfecțiune.</span><strong>formațiuni motivaționale puternice</strong></span> care ghidează viața individului. Ele includ <strong>sensul vieții</strong>, <strong>nivelul de aspirații</strong> și <strong>modelul idealizat</strong>.",
        },

        {
          front: "Explică formele motivației",
          back: "Motivația poate fi <span class='tip'><span class='tooltip-box'>Bazată pe recompense sau evitarea pedepsei.</span><strong>pozitivă și negativă</strong></span>, <span class='tip'><span class='tooltip-box'>Plăcerea activității versus recompense externe.</span><strong>intrinsecă și extrinsecă</strong></span> și <span class='tip'><span class='tooltip-box'>Nevoia de cunoaștere sau de relaționare.</span><strong>cognitivă și afectivă</strong></span>.",
        },

        {
          front: "Explică optimumul motivațional",
          back: "<strong>Optimumul motivațional</strong> apare când <span class='tip'><span class='tooltip-box'>Efortul este proporțional cu dificultatea.</span><strong>intensitatea motivației este adecvată dificultății sarcinii</strong></span>. Supraaprecierea sau subaprecierea dificultății produce dezechilibru și scade performanța.",
        },

        {
          front: "Explică teoria autodeterminării",
          back: "<strong>Teoria autodeterminării</strong> afirmă că oamenii sunt <span class='tip'><span class='tooltip-box'>Își dirijează propria dezvoltare.</span><strong>agenți activi ai schimbării</strong></span>, având o <span class='tip'><span class='tooltip-box'>Curiozitate și dorință internă.</span><strong>tendință naturală de explorare și învățare</strong></span>. Comportamentul se reglează pe un continuum de la <strong>reglare externă</strong> la <strong>reglare internă</strong>.",
        },

        {
          front: "Explică teoria expectanță valoare",
          back: "<strong>Teoria expectanță valoare</strong> susține că motivația depinde de <span class='tip'><span class='tooltip-box'>Credința în reușită.</span><strong>expectanță</strong></span> și de <span class='tip'><span class='tooltip-box'>Importanța și atractivitatea sarcinii.</span><strong>valoarea activității</strong></span>, influențate de credințe personale experiențe afective și dificultatea percepută.",
        },

        {
          front: "Explică scopurile motivaționale în reușita academică",
          back: "În reușita academică apar <span class='tip'><span class='tooltip-box'>Accent pe progres și înțelegere.</span><strong>scopuri de perfecționare</strong></span> și <span class='tip'><span class='tooltip-box'>Accent pe comparație socială.</span><strong>scopuri de performanță</strong></span>, care sunt relativ stabile și influențează implicarea în învățare.",
        },

        {
          front:
            "Explică rolul mediului educațional în motivația pentru învățare",
          back: "Conform <strong>Carole Ames</strong>, motivația pentru învățare este influențată de <span class='tip'><span class='tooltip-box'>Tipul și sensul activităților.</span><strong>sarcinile de învățare</strong></span>, <span class='tip'><span class='tooltip-box'>Nivelul de autonomie.</span><strong>autoritatea exercitată</strong></span> și <span class='tip'><span class='tooltip-box'>Feedback și accent pe progres.</span><strong>modalitatea de evaluare</strong></span>.",
        },

        {
          front: "Explică abordarea umanistă a motivației",
          back: "<strong>Teoriile umaniste</strong> văd motivația ca <span class='tip'><span class='tooltip-box'>Tendință spre dezvoltare și sens.</span><strong>nevoie de autoactualizare</strong></span>. La <strong>Maslow</strong>, motivația pentru învățare este susținută de nevoi superioare, iar la <strong>Rogers</strong> de un climat bazat pe acceptare empatie și autenticitate.",
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
          front: "Explică afectivitatea",
          back: "<strong>Afectivitatea</strong> reprezintă <span class='tip'><span class='tooltip-box'>Modul subiectiv în care individul trăiește relația cu lumea.</span><strong>rezonanța internă</strong></span> a relației dintre individ și mediu.<br><br>Rezultă din aprecierea <span class='tip'><span class='tooltip-box'>Potrivirea dintre ce vrea așteaptă și ce se întâmplă.</span><strong>concordanței</strong></span> dintre <span class='tip'><span class='tooltip-box'>Motive interese așteptări.</span><strong>stările interne</strong></span> și <span class='tip'><span class='tooltip-box'>Cerințe evenimente condiții.</span><strong>situația externă</strong></span>.",
        },

        {
          front: "Explică natura proceselor afective",
          back: "<strong>Procesele afective</strong> sunt <span class='tip'><span class='tooltip-box'>Trăiri subiective în interacțiunea semnificativă cu mediul.</span><strong>experiențe subiective</strong></span> și se asociază cu <span class='tip'><span class='tooltip-box'>Reacții corporale și modificări interne.</span><strong>modificări fiziologice ample</strong></span>.<br><br>Evaluarea afectivă are caracter <span class='tip'><span class='tooltip-box'>Plăcut sau neplăcut.</span><strong>polar</strong></span> și poate avea rol <span class='tip'><span class='tooltip-box'>Poate porni sau poate opri conduita.</span><strong>activator sau inhibitor</strong></span> al comportamentului.",
        },

        {
          front: "Explică manifestarea și expresivitatea proceselor afective",
          back: "Procesele afective sunt <span class='tip'><span class='tooltip-box'>Exprimate prin cuvinte gesturi mimicǎ semne.</span><strong>codificate simbolic</strong></span> prin <span class='tip'><span class='tooltip-box'>Comunicare emoțională cu rol adaptativ.</span><strong>limbaj emoțional</strong></span>.<br><br>Caracterul expresiv presupune <span class='tip'><span class='tooltip-box'>Pot fi observate și interpretate între culturi.</span><strong>interpretare transculturală</strong></span>.<br><br><strong>Contagiunea afectivă</strong> înseamnă că <span class='tip'><span class='tooltip-box'>O stare poate cuprinde emoțional mai mulți oameni.</span><strong>o stare se transmite</strong></span> și angrenează mai mulți indivizi.",
        },

        {
          front: "Explică dinamica proceselor afective",
          back: "<strong>Intensitatea</strong> depinde de <span class='tip'><span class='tooltip-box'>Cât de ușor reacționează afectiv persoana.</span><strong>reactivitatea afectivă</strong></span> și de <span class='tip'><span class='tooltip-box'>Cât de important este pentru motivele persoanei.</span><strong>semnificația motivațională</strong></span>.<br><br><strong>Durata</strong> variază de la <span class='tip'><span class='tooltip-box'>Trăiri scurte.</span><strong>stări trecătoare</strong></span> la <span class='tip'><span class='tooltip-box'>Structuri stabile.</span><strong>sentimente</strong></span>.<br><br><strong>Mobilitatea afectivă</strong> este <span class='tip'><span class='tooltip-box'>Schimbarea de la o stare la alta.</span><strong>trecerea între stări afective</strong></span>.",
        },

        {
          front: "Explică rolurile proceselor afective",
          back: "Procesele afective pot influența comportamentul prin <span class='tip'><span class='tooltip-box'>Exprimări afective folosite pentru a influența reacțiile altora.</span><strong>intenții persuasive</strong></span>.<br><br><strong>Catharsisul afectiv</strong> înseamnă <span class='tip'><span class='tooltip-box'>Descărcarea și reducerea tensiunii.</span><strong>eliberarea tensiunii afective</strong></span>.<br><br>Procesele afective furnizează <span class='tip'><span class='tooltip-box'>Resurse pentru adaptare și funcționare psihică.</span><strong>energie pentru viața psihică și adaptare</strong></span>.",
        },

        {
          front: "Identifică structurile afectogene",
          back: "<strong>Structurile afectogene</strong> sunt <span class='tip'><span class='tooltip-box'>Forme prin care afectivitatea se generează se organizează și se manifestă.</span><strong>structuri psihice ale afectivității</strong></span> și includ <strong>ton afectiv</strong>, <strong>emoții</strong>, <strong>dispoziții</strong>, <strong>sentimente</strong>, <strong>pasiuni</strong>.",
        },

        {
          front: "Explică tonul afectiv emoțiile și dispozițiile afective",
          back: "<strong>Tonul afectiv</strong> însoțește <span class='tip'><span class='tooltip-box'>Percepție reprezentare gândire amintire.</span><strong>actul cunoașterii</strong></span> ca <span class='tip'><span class='tooltip-box'>Plăcere sau neplăcere discretă.</span><strong>colorare afectivă</strong></span>.<br><br><strong>Emoția</strong> este <span class='tip'><span class='tooltip-box'>Popescu Neveanu 1978.</span><strong>fenomen afectiv fundamental</strong></span> care poate fi <span class='tip'><span class='tooltip-box'>Reacție spontană și primară.</span><strong>afect</strong></span> sau <span class='tip'><span class='tooltip-box'>Proces mai elaborat legat de motivație secundară.</span><strong>proces complex</strong></span>.<br><br><strong>Emoțiile simple</strong> sunt <span class='tip'><span class='tooltip-box'>Intense scurte legate de context concret cu orientare clară.</span><strong>intense dinamice contextuale</strong></span> și pot fi <strong>bucurie</strong> <strong>tristețe</strong> <strong>entuziasm</strong> <strong>dezgust</strong>.<br><br><strong>Emoțiile complexe</strong> implică <span class='tip'><span class='tooltip-box'>Evaluare și sens valoric plus control conștient mai mare.</span><strong>interpretare și semnificare valorică</strong></span> și sunt influențate de <span class='tip'><span class='tooltip-box'>Reguli sociale învățate.</span><strong>convenții socioculturale</strong></span> precum <strong>speranță</strong> <strong>admirație</strong> <strong>dispreț</strong>.<br><br><strong>Dispozițiile afective</strong> sunt <span class='tip'><span class='tooltip-box'>Durată și intensitate medie caracter vag și slab conștientizat.</span><strong>fundal afectiv</strong></span> al activității psihice.",
        },

        {
          front: "Explică sentimentele și tipurile de sentimente",
          back: "<strong>Sentimentele</strong> sunt <span class='tip'><span class='tooltip-box'>Integrare și stabilizare a emoțiilor complexe.</span><strong>formațiuni afective complexe</strong></span> cu <span class='tip'><span class='tooltip-box'>Se mențin și se organizează coerent în timp.</span><strong>organizare superioară și stabilitate mare</strong></span>.<br><br>Ca <span class='tip'><span class='tooltip-box'>Raportări afective stabile organizate valoric.</span><strong>formațiuni atitudinale</strong></span>, exprimă <span class='tip'><span class='tooltip-box'>Legătura cu valori și evaluări.</span><strong>raportare valorică</strong></span>.<br><br>După direcție există <span class='tip'><span class='tooltip-box'>Centrare pe propria persoană.</span><strong>sentimente relative la sine</strong></span> precum <strong>stima de sine</strong> <strong>eficacitatea de sine</strong> <strong>orgoliul</strong> <strong>vanitatea</strong>, <span class='tip'><span class='tooltip-box'>Orientare către oameni.</span><strong>sentimente relative la ceilalți</strong></span> precum <strong>dragostea</strong> <strong>respectul</strong> <strong>invidia</strong> <strong>admirația</strong>, <span class='tip'><span class='tooltip-box'>Orientare către valori morale.</span><strong>sentimente morale</strong></span> precum <strong>datoria</strong> <strong>patriotismul</strong> <strong>onoarea</strong>, și <span class='tip'><span class='tooltip-box'>Raportare la frumos și expresie artistică.</span><strong>sentimente estetice</strong></span>.",
        },

        {
          front: "Explică pasiunile",
          back: "<strong>Pasiunile</strong> sunt <span class='tip'><span class='tooltip-box'>Structuri care concentrează și susțin trăiri foarte puternice.</span><strong>structuri afectogene</strong></span> cu <span class='tip'><span class='tooltip-box'>Se mențin și mobilizează multă energie.</span><strong>intensitate și stabilitate înalte</strong></span>.<br><br>Caracterul <span class='tip'><span class='tooltip-box'>Domină viața psihică printr o singură direcție.</span><strong>unilateral</strong></span> înseamnă <span class='tip'><span class='tooltip-box'>Interesele și resursele se concentrează într un obiect.</span><strong>concentrare într o singură direcție</strong></span>.<br><br>Pasiunile pot fi <strong>pozitive</strong> și <strong>negative</strong>. Cele pozitive <span class='tip'><span class='tooltip-box'>Susțin activități îndelungate și realizări mari.</span><strong>pot conduce la realizări majore</strong></span>, dar pot avea și efect <span class='tip'><span class='tooltip-box'>Îngustează relațiile și flexibilitatea socială.</span><strong>dezadaptativ</strong></span>.",
        },

        {
          front: "Explică relația dintre afectivitate și motivație",
          back: "Relația dintre <strong>afectivitate</strong> și <strong>motivație</strong> este <span class='tip'><span class='tooltip-box'>Se condiționează reciproc.</span><strong>indisolubilă</strong></span>.<br><br><strong>Structurile afectogene</strong> sunt <span class='tip'><span class='tooltip-box'>Trăiri ale împlinirii sau neîmplinirii trebuințelor și motivelor.</span><strong>manifestări ale satisfacerii sau frustrării</strong></span>.<br><br><strong>Constelațiile motivaționale</strong> sunt <span class='tip'><span class='tooltip-box'>Motive care cooperează sau intră în conflict.</span><strong>ansambluri de motive în interacțiune</strong></span>.<br><br><span class='tip'><span class='tooltip-box'>Motivele generează trăiri iar trăirile pot alimenta motivele.</span><strong>Structurile afectogene sunt generate de constelații și pot deveni activatoare ale acestora</strong></span>.",
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
          front: "Explică voința și caracteristicile reglajului voluntar",
          back: "<strong>Voința</strong> este un <span class='tip'><span class='tooltip-box'>Formă avansată de reglare a conduitei bazată pe scop deliberare și control conștient</span><strong>proces psihic de autoreglare superioară</strong></span> care <span class='tip'><span class='tooltip-box'>Organizează mobilizează și controlează acțiunea orientată spre un rezultat anticipat</span><strong>orientează acțiunea spre scop</strong></span> prin <span class='tip'><span class='tooltip-box'>Analiza conștientă a alternativelor</span><strong>deliberare</strong></span> și ducerea la îndeplinire a activității<br><br><strong>Reglajul voluntar</strong> presupune <span class='tip'><span class='tooltip-box'>Conducere conștientă a acțiunii</span><strong>control conștient</strong></span> realizat prin <span class='tip'><span class='tooltip-box'>Autoreglare prin limbaj interior</span><strong>mijloace verbale</strong></span> și implică <span class='tip'><span class='tooltip-box'>Mobilizare conștientă pentru atingerea scopului</span><strong>efort voluntar</strong></span><br><br><strong>Efortul voluntar</strong> are <span class='tip'><span class='tooltip-box'>Consum energetic mai mare</span><strong>consum energetic crescut</strong></span> și este <span class='tip'><span class='tooltip-box'>Nu poate fi susținut nelimitat din cauza încordării</span><strong>limitat temporal</strong></span><br><br><strong>Mobilizarea voluntară</strong> crește când <span class='tip'><span class='tooltip-box'>Dificultatea percepută în calea acțiunii</span><strong>obstacolul</strong></span> este perceput ca mai mare",
        },

        {
          front:
            "Explică puterea voinței perseverența independența promptitudinea și dezvoltarea efortului voluntar",
          back: "<strong>Puterea voinței</strong> este <span class='tip'><span class='tooltip-box'>Cât de intens este efortul mobilizat</span><strong>intensitatea mobilizării voluntare</strong></span><br><br><strong>Perseverența</strong> este <span class='tip'><span class='tooltip-box'>Susținerea efortului în timp în ciuda dificultăților</span><strong>menținerea efortului voluntar</strong></span><br><br><strong>Independența voinței</strong> înseamnă <span class='tip'><span class='tooltip-box'>Decizii proprii și asumarea consecințelor</span><strong>decizie personală și responsabilitate</strong></span><br><br><strong>Promptitudinea deciziei</strong> este <span class='tip'><span class='tooltip-box'>Rapiditatea luării unei decizii adecvate situației</span><strong>rapiditatea deciziei oportune</strong></span><br><br><strong>Dezvoltarea efortului voluntar</strong> este favorizată de <span class='tip'><span class='tooltip-box'>Analiza propriei mobilizări</span><strong>autoreflecție</strong></span><br><span class='tip'><span class='tooltip-box'>Întâlniri repetate cu dificultăți</span><strong>confruntare repetată cu obstacole</strong></span><br><span class='tip'><span class='tooltip-box'>Antrenarea deliberată în sarcini</span><strong>exersare conștientă</strong></span>",
        },

        {
          front: "Explică etapele actului voluntar",
          back: "<strong>Actul voluntar</strong> organizează și controlează conștient <span class='tip'><span class='tooltip-box'>Acțiunea orientată spre scop</span><strong>conduita</strong></span> prin etape succesive<br><br><strong>Activare motivațională</strong> <span class='tip'><span class='tooltip-box'>Apare intenția de acțiune orientarea spre scop și planul mintal</span><strong>intenție și orientare spre scop</strong></span><br><br><strong>Confruntarea motivelor</strong> prin <span class='tip'><span class='tooltip-box'>Analiza conștientă a motivelor concurente</span><strong>deliberare</strong></span><br><br><strong>Decizia</strong> <span class='tip'><span class='tooltip-box'>Alegerea unui motiv sau scop și amânarea altora</span><strong>alegere și renunțare temporară</strong></span><br><br><strong>Aplicarea deciziei</strong> <span class='tip'><span class='tooltip-box'>Punerea în practică a planului prin acțiuni controlate voluntar</span><strong>execuție voluntară</strong></span><br><br><strong>Verificare și concluzii</strong> <span class='tip'><span class='tooltip-box'>Evaluarea rezultatelor și formularea concluziilor când activitatea este complexă</span><strong>evaluare finală</strong></span>",
        },

        {
          front: "Explică atenția și specificul ei",
          back: "<strong>Atenția</strong> este <span class='tip'><span class='tooltip-box'>Mobilizează și organizează funcționarea altor procese psihice fără a adăuga informație nouă</span><strong>proces psihic de activare și orientare</strong></span> care realizează <span class='tip'><span class='tooltip-box'>Activare tonificare mobilizare și orientare selectivă</span><strong>selectarea și focalizarea</strong></span> proceselor psihocomportamentale<br><br>Nu are <span class='tip'><span class='tooltip-box'>Nu furnizează informații despre obiecte ci reglează prelucrarea lor</span><strong>conținut informațional specific</strong></span> și se sprijină pe <span class='tip'><span class='tooltip-box'>Reacție automată către un stimul nou sau semnificativ</span><strong>reflexul de orientare</strong></span><br><br>Se realizează prin <span class='tip'><span class='tooltip-box'>Sistemul reticulat activator ascendent</span><strong>SRAA</strong></span> care produce <span class='tip'><span class='tooltip-box'>Alertarea cortexului și declanșarea orientării</span><strong>activare corticală</strong></span><br><br>Atenția focalizează <span class='tip'><span class='tooltip-box'>Resursele funcționale ale sistemului nervos</span><strong>energia neuropsihică</strong></span> prin <span class='tip'><span class='tooltip-box'>Promovează unele tendințe prin excitație și inhibă altele</span><strong>excitație și inhibiție selectivă</strong></span><br><br>Implică <strong>starea de veghe</strong> <span class='tip'><span class='tooltip-box'>Activare difuză disponibilitate generală așteptare pasivă</span><strong>disponibilitate</strong></span> și <strong>starea de vigilență</strong> <span class='tip'><span class='tooltip-box'>Activare crescută explorare activă orientare intenționată</span><strong>explorare</strong></span><br><br>Este <span class='tip'><span class='tooltip-box'>Energizează și susține alte procese</span><strong>factor dinamogen</strong></span>",
        },

        {
          front: "Explică tipurile de atenție și atenția postvoluntară",
          back: "Formele principale sunt <strong>atenția involuntară</strong> <strong>atenția voluntară</strong> <strong>atenția postvoluntară</strong><br><br><strong>Atenția involuntară</strong> este <span class='tip'><span class='tooltip-box'>Formă primară declanșată spontan</span><strong>spontană</strong></span> și apare sub influența <span class='tip'><span class='tooltip-box'>Intensitate noutate mișcare complexitate</span><strong>stimulilor intensi noi mobili complecși</strong></span><br><br><strong>Atenția voluntară</strong> este <span class='tip'><span class='tooltip-box'>Formă superioară cu intenție scop și control conștient</span><strong>intențională</strong></span> și se autoreglează prin <span class='tip'><span class='tooltip-box'>Mecanisme verbale</span><strong>limbaj interior</strong></span> realizând <span class='tip'><span class='tooltip-box'>Focalizare energetică și menținere până la finalizare</span><strong>concentrare susținută</strong></span><br><br><strong>Atenția postvoluntară</strong> apare prin <span class='tip'><span class='tooltip-box'>Efortul inițial scade când activitatea devine familiară</span><strong>automatizarea atenției voluntare</strong></span> și are avantaje <span class='tip'><span class='tooltip-box'>Mai puțin consum nervos și eficiență mai mare</span><strong>consum redus și eficiență crescută</strong></span>",
        },

        {
          front: "Explică favorizarea și educarea atenției voluntare",
          back: "<strong>Favorizarea atenției voluntare</strong> înseamnă <span class='tip'><span class='tooltip-box'>Măsuri imediate pentru concentrare intenționată</span><strong>crearea condițiilor de concentrare</strong></span> prin<br><span class='tip'><span class='tooltip-box'>Clarificarea țintei</span><strong>stabilirea scopurilor</strong></span><br><span class='tip'><span class='tooltip-box'>Sensul și câștigul personal</span><strong>evidențierea semnificației și beneficiilor</strong></span><br><span class='tip'><span class='tooltip-box'>Anticiparea segmentelor grele</span><strong>identificarea momentelor dificile</strong></span><br><span class='tip'><span class='tooltip-box'>Cadru propice</span><strong>ambianță stimulativă</strong></span><br><span class='tip'><span class='tooltip-box'>Zgomot notificări întreruperi</span><strong>reducerea factorilor perturbatori</strong></span> care scade competiția dintre stimuli și susține concentrarea<br><br><strong>Educarea atenției voluntare</strong> înseamnă <span class='tip'><span class='tooltip-box'>Construire treptată prin exercițiu</span><strong>consolidare pe termen lung</strong></span> prin<br><span class='tip'><span class='tooltip-box'>Structuri logice</span><strong>organizarea materialelor cu sens</strong></span><br><span class='tip'><span class='tooltip-box'>Motivare</span><strong>sublinierea semnificației</strong></span><br><span class='tip'><span class='tooltip-box'>Ce contează în sarcină</span><strong>evidențierea elementelor importante</strong></span><br><span class='tip'><span class='tooltip-box'>Prezentări diferite</span><strong>modalități variate</strong></span><br><br><strong>Cunoașterea fiziologiei atenției</strong> ajută la <span class='tip'><span class='tooltip-box'>Adaptarea duratei și a pauzelor la limite reale</span><strong>dozarea activităților</strong></span> iar stabilitatea este aproximativ <span class='tip'><span class='tooltip-box'>Preșcolari 10 minute adulți până la 30 minute</span><strong>10 minute la preșcolari și până la 30 minute la adulți</strong></span>",
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
          front: "Explică atenția și specificul ei",
          back: "<strong>Atenția</strong> este <span class='tip'><span class='tooltip-box'>Nu adaugă informație nouă ci mobilizează și organizează funcționarea altor procese psihice</span><strong>proces psihic de activare și orientare</strong></span> care înseamnă <span class='tip'><span class='tooltip-box'>Activare tonificare mobilizare și orientare selectivă</span><strong>orientare selectivă a proceselor psihocomportamentale</strong></span><br><br>Se spune că <strong>atenția nu are conținut informațional specific</strong> fiindcă <span class='tip'><span class='tooltip-box'>Susține și organizează alte procese psihice orientându le prin reflexul de orientare fără a produce informații proprii</span><strong>reglează prelucrarea fără a furniza informații proprii</strong></span><br><br>Atenția se realizează prin <span class='tip'><span class='tooltip-box'>Sistemul reticulat activator ascendent care alertează cortexul și declanșează orientarea</span><strong>SRAA</strong></span> cu efect de <span class='tip'><span class='tooltip-box'>Alertare corticală și declanșarea reflexului de orientare</span><strong>activare a cortexului</strong></span><br><br>Atenția selectează și focalizează <span class='tip'><span class='tooltip-box'>Resursele funcționale ale sistemului nervos</span><strong>energia neuropsihică</strong></span> prin <span class='tip'><span class='tooltip-box'>Promovarea unor tendințe prin excitație și inhibarea altora</span><strong>excitație și inhibiție selectivă</strong></span><br><br>Atenția implică <span class='tip'><span class='tooltip-box'>Activare difuză disponibilitate generală așteptare pasivă</span><strong>starea de veghe</strong></span> și <span class='tip'><span class='tooltip-box'>Activare crescută explorare activă orientare intenționată</span><strong>starea de vigilență</strong></span><br><br>Atenția este <span class='tip'><span class='tooltip-box'>Factor care energizează și susține alte procese psihice</span><strong>factor dinamogen</strong></span>",
        },

        {
          front: "Explică tipurile de atenție",
          back: "Formele principale sunt <strong>atenția involuntară</strong> <strong>atenția voluntară</strong> <strong>atenția postvoluntară</strong><br><br><strong>Atenția involuntară</strong> este <span class='tip'><span class='tooltip-box'>Formă primară declanșată spontan fără control conștient</span><strong>spontană</strong></span> și apare sub influența <span class='tip'><span class='tooltip-box'>Stimulilor intensi noi mobili sau complecși</span><strong>stimulilor intensi noi mobili complecși</strong></span><br><br><strong>Atenția voluntară</strong> este <span class='tip'><span class='tooltip-box'>Formă superioară cu intenție scop și control conștient</span><strong>intenționată</strong></span> și se autoreglează prin <span class='tip'><span class='tooltip-box'>Mecanisme verbale</span><strong>mijloace verbale</strong></span><br><br>Se manifestă prin <span class='tip'><span class='tooltip-box'>Orientare intenționată focalizare energetică și menținere până la final</span><strong>concentrare până la finalizarea sarcinii</strong></span><br><br><strong>Atenția postvoluntară</strong> apare prin <span class='tip'><span class='tooltip-box'>Automatizarea atenției voluntare prin exercițiu repetat</span><strong>automatizare prin exercițiu</strong></span> adică <span class='tip'><span class='tooltip-box'>Efortul inițial scade când activitatea devine familiară și bine stăpânită</span><strong>scăderea efortului inițial</strong></span> și are avantaj <span class='tip'><span class='tooltip-box'>Consum redus de energie nervoasă și eficiență crescută</span><strong>eficiență mai mare cu consum redus</strong></span>",
        },

        {
          front: "Explică favorizarea atenției voluntare",
          back: "<strong>Favorizarea atenției voluntare</strong> înseamnă <span class='tip'><span class='tooltip-box'>Măsuri imediate care susțin concentrarea intenționată asupra unei sarcini</span><strong>crearea condițiilor pentru concentrare</strong></span><br><br>Se face prin <span class='tip'><span class='tooltip-box'>Clarificarea țintei</span><strong>stabilirea clară a scopurilor</strong></span><br><span class='tip'><span class='tooltip-box'>Sens și câștig personal</span><strong>evidențierea semnificației și beneficiilor</strong></span><br><span class='tip'><span class='tooltip-box'>Anticiparea segmentelor dificile</span><strong>identificarea momentelor dificile</strong></span><br><span class='tip'><span class='tooltip-box'>Cadru propice</span><strong>ambianță stimulativă</strong></span><br><span class='tip'><span class='tooltip-box'>Zgomot notificări întreruperi</span><strong>reducerea factorilor perturbatori</strong></span><br><br>Reducerea factorilor perturbatori ajută fiindcă <span class='tip'><span class='tooltip-box'>Scade competiția dintre stimuli și permite menținerea concentrării asupra sarcinii</span><strong>reduce competiția stimulilor</strong></span>",
        },

        {
          front: "Explică educarea atenției voluntare și stabilitatea atenției",
          back: "<strong>Educarea atenției voluntare</strong> înseamnă <span class='tip'><span class='tooltip-box'>Formarea și consolidarea capacității de concentrare prin metode și exercițiu pe termen mai lung</span><strong>construire treptată prin exersare</strong></span><br><br>Condiții care o susțin <br><span class='tip'><span class='tooltip-box'>Structuri logice și legături</span><strong>organizarea materialelor și sarcinilor cu sens</strong></span><br><span class='tip'><span class='tooltip-box'>Motivare și relevanță</span><strong>sublinierea semnificației sarcinii</strong></span><br><span class='tip'><span class='tooltip-box'>Ce este esențial</span><strong>evidențierea elementelor importante</strong></span><br><span class='tip'><span class='tooltip-box'>Prezentări diferite</span><strong>modalități variate</strong></span><br><br><strong>Cunoașterea fiziologiei atenției</strong> este utilă pentru <span class='tip'><span class='tooltip-box'>Adaptarea duratei activităților și pauzelor la capacitatea reală de concentrare</span><strong>dozarea duratei și a pauzelor</strong></span><br><br><strong>Stabilitatea atenției</strong> este aproximativ <span class='tip'><span class='tooltip-box'>La preșcolari aproximativ 10 minute la adulți până la aproximativ 30 de minute</span><strong>10 minute la preșcolari și până la 30 de minute la adulți</strong></span>",
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
          front: "Explică limbajul și limba",
          back: "<strong>Limbajul</strong> este <span class='tip'><span class='tooltip-box'>Popescu Neveanu</span><strong>sistem și activitate de comunicare cu ajutorul limbii</strong></span><br><br><strong>Limba</strong> este <span class='tip'><span class='tooltip-box'>Instrumentul principal al limbajului structură împărtășită social</span><strong>sistem evolutiv hipercomplex de simboluri și semne</strong></span> cu rol în cultură<br><br>Componentele limbii sunt <span class='tip'><span class='tooltip-box'>Cuvinte reguli de combinare sensuri</span><strong>lexic sintactică semantică</strong></span>",
        },

        {
          front: "Explică caracteristicile limbajului",
          back: "<strong>Limbajul</strong> este <span class='tip'><span class='tooltip-box'>Organizează și actualizează în vorbire resursele personalității</span><strong>fenomen psihologic dinamic</strong></span> și exprimă <span class='tip'><span class='tooltip-box'>Exprimare personală unică</span><strong>specificul individului</strong></span><br><br><strong>Limbajul și gândirea</strong> sunt în <span class='tip'><span class='tooltip-box'>Se influențează reciproc</span><strong>interdependență indisolubilă</strong></span><br><br>Conform <strong>Miller 1931</strong> tendința evolutivă este <span class='tip'><span class='tooltip-box'>Mai multă informație în forme mai scurte</span><strong>condensarea informației</strong></span><br><br>La copii limbajul devine funcțional prin <span class='tip'><span class='tooltip-box'>De la cuvinte propoziție la propoziții complexe prin interacțiune</span><strong>trecere progresivă prin socializare</strong></span>",
        },

        {
          front: "Explică funcțiile limbajului",
          back: "<strong>Funcția comunicativă</strong> înseamnă <span class='tip'><span class='tooltip-box'>Emoții idei persuasiune relații</span><strong>exprimare influențare și relaționare</strong></span><br><br><strong>Funcția cognitivă</strong> înseamnă <span class='tip'><span class='tooltip-box'>Instrument al gândirii pentru reprezentare semnificații judecăți raționamente</span><strong>reprezentare și raționare</strong></span><br><br><strong>Funcția reglatorie</strong> înseamnă <span class='tip'><span class='tooltip-box'>Ghidează acțiunea mintală și activitatea include ludic cathartic și relații</span><strong>calibrare a acțiunii și a conduitei</strong></span>",
        },

        {
          front: "Explică tipurile de limbaj",
          back: "<strong>Limbaj verbal</strong> <span class='tip'><span class='tooltip-box'>Vorbire și scriere</span><strong>comunicare prin cuvinte</strong></span><br><br><strong>Limbaj nonverbal</strong> <span class='tip'><span class='tooltip-box'>Mimică gesturi postură</span><strong>expresie corporală</strong></span><br><br><strong>Limbaj paraverbal</strong> <span class='tip'><span class='tooltip-box'>Ton volum ritm intonație</span><strong>caracteristici ale vocii</strong></span>",
        },

        {
          front: "Explică limbajul intern și rolul lui",
          back: "<strong>Limbajul intern</strong> este <span class='tip'><span class='tooltip-box'>Formă concentrată tăcută de gândire în cuvinte</span><strong>modalitate specifică existenței mintale</strong></span><br><br>Are funcție de <span class='tip'><span class='tooltip-box'>Ghidează acțiunile și conștiința</span><strong>autoreglare</strong></span><br><br>La <strong>Vîgotski</strong> este <span class='tip'><span class='tooltip-box'>Exprimă condensat o judecată sau relație între concepte</span><strong>predicativ vehicul de sens și semnificație</strong></span>",
        },

        {
          front:
            "Explică perspectiva lui Vîgotski despre limbajul intern și efectele lui",
          back: "Conform lui <strong>Vîgotski</strong> limbajul intern <span class='tip'><span class='tooltip-box'>Rezultă din internalizarea vorbirii cu voce tare</span><strong>se formează prin transformarea limbajului extern</strong></span><br><br>Are rol de <span class='tip'><span class='tooltip-box'>Leagă învățarea socială de gândirea individuală</span><strong>mediere socio culturală</strong></span> în <span class='tip'><span class='tooltip-box'>Învățare influențată de interacțiuni norme valori limbaj</span><strong>învățarea condiționată socio cultural</strong></span><br><br>Conștientizarea proceselor psihice prin limbaj intern produce <span class='tip'><span class='tooltip-box'>Gestionare conștientă a conduitei</span><strong>control și autocontrol</strong></span>",
        },

        {
          front: "Explică dezvoltarea vorbirii la copil la Vîgotski",
          back: "<strong>Egocentric speech</strong> <span class='tip'><span class='tooltip-box'>Vorbire cu voce tare pentru sine fără orientare către ceilalți</span><strong>vorbit pentru sine</strong></span><br><br><strong>Awareness of others</strong> <span class='tip'><span class='tooltip-box'>Copilul începe să țină cont de receptor</span><strong>conștientizarea celorlalți</strong></span><br><br><strong>Social speech</strong> <span class='tip'><span class='tooltip-box'>Vorbirea devine adresată altora și interactivă</span><strong>comunicare reală</strong></span><br><br><strong>Inner speech</strong> <span class='tip'><span class='tooltip-box'>Vorbirea devine internă tăcută copilul gândește cu cuvinte</span><strong>gândire în cuvinte fără sunet</strong></span><br><br>Ordinea corectă este <span class='tip'><span class='tooltip-box'>De la vorbire pentru sine la vorbire socială apoi internalizare</span><strong>Egocentric speech apoi Social speech apoi Inner speech</strong></span>",
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
          front: "Definește personalitatea la Popescu Neveanu 1978",
          back: "<strong>Personalitatea</strong> este un <span class='tip'><span class='tooltip-box'>Un sistem complex și integrat format din mai multe componente interconectate</span><strong>macrosistem</strong></span> de <span class='tip'><span class='tooltip-box'>Elemente stabile care nu se schimbă în timp</span><strong>invarianți</strong></span> <span class='tip'><span class='tooltip-box'>Legate de conținutul cunoștințelor ideilor și reprezentărilor mentale</span><strong>informaționali</strong></span> și <span class='tip'><span class='tooltip-box'>Legate de modul în care individul acționează sau procesează informațiile în mod practic</span><strong>operaționali</strong></span> exprimați în <span class='tip'><span class='tooltip-box'>Comportamentul observabil al unei persoane</span><strong>conduită</strong></span><br><br>Conform definiției reunește <span class='tip'><span class='tooltip-box'>Trăsături constante definitorii și operaționale</span><strong>trăsături definitorii și constante</strong></span> care se exprimă stabil în comportament",
        },

        {
          front: "Explică teoria trăsăturilor la Allport",
          back: "Allport definește <span class='tip'><span class='tooltip-box'>Predispoziții relativ stabile de a reacționa într un mod specific în diverse situații</span><strong>trăsăturile de personalitate</strong></span> ca <strong>predispoziții stabile de răspuns comportamental</strong><br><br>Trăsăturile se combină într o <span class='tip'><span class='tooltip-box'>Tipar individual unic care caracterizează personalitatea unei persoane</span><strong>configurație unică</strong></span> pentru fiecare individ<br><br>Niveluri ierarhice <strong>cardinale</strong> <strong>centrale</strong> <strong>secundare</strong><br><br><span class='tip'><span class='tooltip-box'>Trăsături dominante pervazive definitorii pentru un individ nu sunt prezente la toți</span><strong>Trăsăturile cardinale</strong></span> sunt <span class='tip'><span class='tooltip-box'>Pătrund toate aspectele vieții psihice și comportamentale</span><strong>pervazive</strong></span> și <span class='tip'><span class='tooltip-box'>Fac un individ unic îl diferențiază clar de alții</span><strong>particularizează</strong></span> persoana<br><br><span class='tip'><span class='tooltip-box'>Trăsăturile importante pentru comunitate sunt codificate în limbaj și păstrate în vocabular</span><strong>Ipoteza lexicală</strong></span> afirmă că <strong>trăsăturile importante devin parte din limbajul grupului</strong>",
        },

        {
          front: "Explică modelul lui Cattell 16 factori",
          back: "Cei 16 factori sunt un <span class='tip'><span class='tooltip-box'>Structuri stabile de comportament care caracterizează un individ și pot fi observate repetat în contexte diferite</span><strong>sistem de deprinderi proprii</strong></span> care permite <strong>predicția comportamentului</strong><br><br><span class='tip'><span class='tooltip-box'>Metodă statistică prin care reduce multe trăsături la un set de factori esențiali</span><strong>Analiza factorială</strong></span> are scopul de <strong>reducere a trăsăturilor la factori esențiali</strong><br><br>Scorurile pe factori indică <span class='tip'><span class='tooltip-box'>Predispoziții comportamentale stabile cu polaritate între două extreme</span><strong>un continuum între două extreme</strong></span><br><br>Scor ridicat la <span class='tip'><span class='tooltip-box'>Persoană suportivă afectuoasă confortabilă pentru ceilalți</span><strong>Warmth</strong></span> înseamnă <strong>sprijin emoțional și confort oferit celorlalți</strong><br><br>Scor scăzut la <span class='tip'><span class='tooltip-box'>Scoruri joase pot indica iritabilitate și instabilitate emoțională</span><strong>Emotional Stability</strong></span> poate arăta <strong>iritabilitate și schimbări de dispoziție</strong><br><br>Scor înalt la <span class='tip'><span class='tooltip-box'>Imaginație neconvențional gândire simbolică</span><strong>Abstractness</strong></span> indică <strong>imaginație creativitate și gândire neobișnuită</strong>",
        },

        {
          front: "Explică teoria psihosocială a lui Erikson",
          back: "Erikson explică dezvoltarea personalității prin <strong>8 stadii</strong> fiecare definit de un <span class='tip'><span class='tooltip-box'>Tensiune între două tendințe opuse a cărei rezolvare influențează personalitatea</span><strong>conflict psihosocial</strong></span><br><br>Un <span class='tip'><span class='tooltip-box'>Criză esențială care trebuie rezolvată pentru dezvoltare sănătoasă</span><strong>stadiu psihosocial</strong></span> este <strong>o criză de rezolvat</strong> cu efecte asupra formării personalității<br><br>În copilărie primele trei stadii vizează <strong>atașamentul și autonomia</strong> în raport cu părinții<br><br>Conflictul adolescenței este <span class='tip'><span class='tooltip-box'>Căutarea valorilor direcției și locului în lume lipsa clarității duce la incertitudine</span><strong>identitate vs confuzie de rol</strong></span><br><br><span class='tip'><span class='tooltip-box'>Sentimentul unui sine coerent și stabil care leagă trecutul prezentul și viitorul</span><strong>Unitatea identității</strong></span> înseamnă <strong>identitate clară coerentă care ghidează deciziile și relațiile</strong><br><br>Etapele adulte pun accent pe <strong>relații afective</strong> și <strong>contribuția la binele generațiilor următoare</strong><br><br><span class='tip'><span class='tooltip-box'>Dorinta de a contribui la binele celorlalți prin copii muncă implicare socială transmiterea valorilor</span><strong>Generativitatea</strong></span> înseamnă <strong>a crea a produce și a transmite mai departe grijă valori și cunoștințe</strong><br><br>Ultima etapă are conflictul <span class='tip'><span class='tooltip-box'>Reflecție asupra vieții trăite sens versus regret</span><strong>integritate a Eului vs deznădejde</strong></span><br><br>Rezolvarea cu succes a stadiilor <span class='tip'><span class='tooltip-box'>Consolidarea personalității și a sentimentului de identitate</span><strong>formează identitate solidă și adaptare sănătoasă</strong></span>",
        },

        {
          front: "Explică Big Five",
          back: "<span class='tip'><span class='tooltip-box'>Model factorial cu 5 dimensiuni majore ale trăsăturilor stabile</span><strong>Big Five</strong></span> propune <strong>cinci dimensiuni fundamentale</strong><br><br>Dimensiuni <strong>Conștiinciozitate</strong> <strong>Extraversie</strong> <strong>Neuroticism</strong> <strong>Deschidere către experiență</strong> <strong>Agreabilitate</strong><br><br>Deschidere ridicată <strong>curioasă creativă deschisă la idei abstracte</strong><br><br>Conștiinciozitate ridicată <strong>responsabilă planificată își respectă angajamentele</strong><br><br>Agreabilitate ridicată <strong>cooperantă empatică dornică să ajute</strong><br><br>Extraversie ridicată <strong>activă entuziastă energizată de prezența celorlalți</strong><br><br>Neuroticism ridicat <strong>îngrijorare iritabilitate instabilitate emoțională</strong>",
        },

        {
          front: "Explică HEXACO",
          back: "<span class='tip'><span class='tooltip-box'>Model cu 6 dimensiuni derivat lexical adaugă o trăsătură etică la Big Five</span><strong>HEXACO</strong></span> adaugă <span class='tip'><span class='tooltip-box'>Tendința de a fi sincer modest etic lipsit de manipulare</span><strong>onestitate umilință</strong></span><br><br>Dimensiuni <strong>Extraversie</strong> <strong>Conștiinciozitate</strong> <strong>Onestitate umilință</strong> <strong>Agreabilitate</strong> <strong>Deschidere către experiență</strong> <span class='tip'><span class='tooltip-box'>Include sensibilitate emoțională și atașament echivalent parțial cu neuroticismul</span><strong>Emoționalitate</strong></span>",
        },

        {
          front: "Explică abordarea structural sistemică a personalității",
          back: "În viziune structural sistemică personalitatea include <strong>temperament</strong> <strong>aptitudini</strong> <strong>caracter</strong> <span class='tip'><span class='tooltip-box'>Procese psihice precum atenția gândirea voința memoria de lucru implicate în folosirea aptitudinilor</span><strong>sisteme operaționale</strong></span> și <span class='tip'><span class='tooltip-box'>Componente înnăscute ce determină ritmul intensitatea expresivitatea reacțiilor</span><strong>aspecte dinamico energetice</strong></span><br><br><span class='tip'><span class='tooltip-box'>Latura înnăscută care influențează energia reactivitatea ritmul</span><strong>Temperamentul</strong></span> este <strong>latura dinamico energetică înnăscută</strong><br><br><span class='tip'><span class='tooltip-box'>Capacități instrumentale care permit activități eficiente</span><strong>Aptitudinile</strong></span> sunt <strong>capacități potențiale de performanță</strong><br><br><span class='tip'><span class='tooltip-box'>Raportarea la valori reguli relații modelată prin socializare</span><strong>Caracterul</strong></span> reflectă <strong>modul de raportare la valori și relații umane</strong><br><br><span class='tip'><span class='tooltip-box'>Credințe valori atitudini față de sine ceilalți activitate societate</span><strong>Aspecte atitudinal valorice</strong></span> sunt <strong>orientări stabile față de valori și sensuri</strong><br><br><span class='tip'><span class='tooltip-box'>Mecanisme psihice implicate în activarea și utilizarea aptitudinilor</span><strong>Sisteme operaționale</strong></span> sunt <strong>procese cognitive care susțin aplicarea aptitudinilor</strong>",
        },

        {
          front: "Definește temperamentul și ANS",
          back: "<span class='tip'><span class='tooltip-box'>Modul în care reacționăm ca intensitate ritm echilibru emoțional și comportamental</span><strong>Temperamentul</strong></span> este <strong>latura dinamico energetică a personalității</strong><br><br><span class='tip'><span class='tooltip-box'>Forța mobilitatea echilibrul proceselor nervoase</span><strong>Activitatea nervoasă superioară ANS</strong></span> se referă la <strong>energia mobilitatea și echilibrul proceselor nervoase</strong><br><br><span class='tip'><span class='tooltip-box'>Capacitatea neuronilor de a susține activitate intensă rezistență psihică</span><strong>Energia forța</strong></span> înseamnă <strong>capacitatea funcțională a neuronilor de a susține activitate intensă</strong><br><br><span class='tip'><span class='tooltip-box'>Viteza de consum și regenerare a resurselor flexibilitate psihică</span><strong>Mobilitatea</strong></span> înseamnă <strong>rapiditatea de adaptare emoțională și comportamentală</strong><br><br><span class='tip'><span class='tooltip-box'>Raportul dintre excitație și inhibiție stabilitate autocontrol</span><strong>Echilibrul</strong></span> înseamnă <strong>distribuție între impuls și autocontrol</strong>",
        },

        {
          front: "Explică tipurile temperamentale la Eysenck",
          back: "Modelul Eysenck folosește axele <span class='tip'><span class='tooltip-box'>Sociabilitate și orientare spre exterior</span><strong>E extraversie</strong></span> și <span class='tip'><span class='tooltip-box'>Stabilitate versus instabilitate emoțională</span><strong>N neuroticism</strong></span> care indică <strong>poziționarea între introversie extraversie și stabilitate instabilitate emoțională</strong><br><br><span class='tip'><span class='tooltip-box'>Extravertit instabil emoțional activ impulsiv energic iritabil</span><strong>Coleric</strong></span> înseamnă <strong>extravertire plus instabilitate emoțională</strong><br><br><span class='tip'><span class='tooltip-box'>Introvertit stabil emoțional calm echilibrat fiabil rezervat</span><strong>Flegmatic</strong></span> înseamnă <strong>introversie plus stabilitate emoțională</strong><br><br><span class='tip'><span class='tooltip-box'>Introvertit instabil emoțional anxios pesimist sensibil</span><strong>Melancolic</strong></span> înseamnă <strong>introversie plus instabilitate emoțională</strong><br><br><span class='tip'><span class='tooltip-box'>Extravertit stabil emoțional energic sociabil relaxat entuziast</span><strong>Sanguinic</strong></span> înseamnă <strong>extravertire plus stabilitate emoțională</strong>",
        },

        {
          front: "Definește aptitudinile și relația cu performanța",
          back: "<span class='tip'><span class='tooltip-box'>Capacitatea de a desfășura eficient o activitate latura instrumental operațională</span><strong>Aptitudinile</strong></span> sunt <strong>latura instrumental operațională a personalității</strong><br><br><span class='tip'><span class='tooltip-box'>Capacitatea internă de a susține performanțe în funcție de structura sistemului psihic</span><strong>Potențialul operațional</strong></span> înseamnă <strong>posibilitatea sistemului psihic de a susține performanțe</strong><br><br>Aptitudinile includ <span class='tip'><span class='tooltip-box'>Bază genetică pentru dezvoltarea ulterioară</span><strong>premise ereditare</strong></span> și <strong>împlinirea lor prin educație și experiență</strong><br><br>Legătura cu <span class='tip'><span class='tooltip-box'>Nivelul de realizare influențat și de motivație instruire condiții</span><strong>performanța</strong></span> este că <strong>aptitudinile oferă potențialul dar nu garantează performanța fără formare și practică</strong>",
        },

        {
          front: "Diferențiază aptitudinile generale și speciale",
          back: "<span class='tip'><span class='tooltip-box'>Aplicabile într o gamă largă de activități</span><strong>Aptitudinile generale</strong></span> se aplică în <strong>varietate de activități</strong><br><br><span class='tip'><span class='tooltip-box'>Aplicabile în domenii specifice</span><strong>Aptitudinile speciale</strong></span> se aplică în <strong>domenii specifice</strong><br><br>Exemple generale <strong>inteligența</strong> <strong>creativitatea</strong> <strong>spiritul de observație</strong><br><br>Exemple speciale <strong>pedagogice</strong> <strong>literare</strong> <strong>tehnice</strong> <strong>muzicale</strong>",
        },

        {
          front: "Definește caracterul și enculturația",
          back: "<span class='tip'><span class='tooltip-box'>Modul de raportare la ceilalți activitate sine lume impregnat valoric</span><strong>Caracterul</strong></span> este <strong>latura relațional valorică a personalității</strong><br><br>Se manifestă prin <strong>raportare constantă și valorică</strong> la ceilalți la activitate și la sine<br><br><span class='tip'><span class='tooltip-box'>Asimilarea valorilor normelor și practicilor culturale ale grupului</span><strong>Enculturația</strong></span> implică <strong>interiorizarea valorilor culturale prin educație și interacțiune socială</strong>",
        },

        {
          front: "Definește atitudinea și tipurile de atitudini",
          back: "<span class='tip'><span class='tooltip-box'>Modalitate relativ stabilă de raportare orientare și reglare a acțiunii</span><strong>Atitudinea</strong></span> este <strong>o modalitate stabilă de raportare și orientare față de lume</strong><br><br>Tipuri de atitudini <strong>față de sine</strong> <strong>față de ceilalți</strong> <strong>față de activitate</strong> <strong>față de mediul ecologic</strong> <strong>față de realitățile sociale</strong>",
        },

        {
          front: "Explică modelul ABC al atitudinii",
          back: "Modelul <strong>ABC</strong> descrie atitudinea ca interacțiunea dintre <br><br><span class='tip'><span class='tooltip-box'>Ceea ce o persoană simte în legătură cu un obiect situație experiență</span><strong>A Affect emoții</strong></span><br><br><span class='tip'><span class='tooltip-box'>Modul în care o persoană se comportă față de un aspect al lumii</span><strong>B Behavior comportament</strong></span><br><br><span class='tip'><span class='tooltip-box'>Credințe convingeri idei despre un aspect al realității</span><strong>C Cognition cogniții</strong></span><br><br>În ansamblu modelul reflectă <strong>interacțiunea dintre emoții comportamente și convingeri</strong> în construirea atitudinii",
        },
      ],
    },
  ],
};
