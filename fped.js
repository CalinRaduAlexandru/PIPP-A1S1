// Template placeholder data for FPED (Fundamentele Pedagogiei)
// Complete/extend these structures as needed.

window.FPED_CONTENT = {
  capitole: [
    {
      id: "fped-u1",
      titlu: "PPT(1) - Delimitări conceptuale: Educație și Pedagogie",
      subcapitole: [
        {
          id: "fped-u1-s1",
          titlu: "Educația: note definitorii și accepțiuni",
          quizuri: [
            "fped-u1-q0", // Introducere: note definitorii ale educației și specificul fenomenului educațional
            "fped-u1-q0b", // Fundamentele educației
            "fped-u1-q0c", // Câteva accepțiuni științifice ale educației
          ],
        },

        {
          id: "fped-u1-s2",
          titlu: "Structura educației",
          quizuri: [
            "fped-u1-q1", // Din ce se compune educația: perspectiva structurală (statică)
            "fped-u1-q2", // Din ce se compune educația: perspectiva procesuală
            "fped-u1-q3", // Din ce se compune educația: perspectiva organizatorică, contextuală
          ],
        },

        {
          id: "fped-u1-s3",
          titlu: "Înțelesuri și forme ale educației",
          quizuri: [
            "fped-u1-q4", // Cum să (mai) înțelegem conceptul de educație?
            "fped-u1-q5", // Alte modalități de formare a subiectului
          ],
        },

        {
          id: "fped-u1-s4",
          titlu: "Pedagogia ca știință a educației",
          quizuri: [
            "fped-u1-q6", // Pedagogia: definiție și raporturi
            "fped-u1-q7", // Pedagogia: evoluția și locul ei în Sistemul Științelor Educației
          ],
        },
      ],
    },
    {
      id: "fped-u2",
      titlu: "PPT(2) - Formele și dimensiunile educației (Noile educații)",
      subcapitole: [
        {
          id: "fped-u2-s1",
          titlu: "Definiția educației",
          quizuri: ["fped-u2-q0"],
        },

        {
          id: "fped-u2-s2",
          titlu: "Formele educației",
          quizuri: [
            "fped-u2-q1", // Educația formală
            "fped-u2-q2", // Educația nonformală
            "fped-u2-q3", // Educația informală
            "fped-u2-q4", // Comparație între educația formală, nonformală și informală
            "fped-u2-q5", // Utilitatea integrării celor trei forme ale educației
          ],
        },

        {
          id: "fped-u2-s3",
          titlu: "Dimensiunile educației: Educația intelectuală",
          quizuri: [
            "fped-u2-q6", // Introducere + teorii privind dezvoltarea cognitivă
            "fped-u2-q7", // Teoria psihogenezei operațiilor intelectuale
            "fped-u2-q8", // Teoria genetic cognitivă și structurală (Bruner)
            "fped-u2-q9", // Teoria învățării cumulativ-ierarhice
            "fped-u2-q10", // Teoria cognitivistă
            "fped-u2-q11", // Obiectivele educației intelectuale
          ],
        },

        {
          id: "fped-u2-s4",
          titlu: "Dimensiunile educației: Educația morală",
          quizuri: [
            "fped-u2-q12", // Introducere în educația morală
            "fped-u2-q13", // Conștiința morală și conduita morală
            "fped-u2-q14", // Precondițiile moralității
          ],
        },

        {
          id: "fped-u2-s5",
          titlu: "Dimensiunile educației: Educația estetică",
          quizuri: [
            "fped-u2-q15", // Introducere în educația estetică
            "fped-u2-q16", // Educația estetică și educația artistică
            "fped-u2-q17", // Finalitățile educației estetice
            "fped-u2-q18", // Principiile educației estetice
            "fped-u2-q19", // Metode și forme de realizare
          ],
        },

        {
          id: "fped-u2-s6",
          titlu: "Dimensiunile educației: Educația religioasă",
          quizuri: [
            "fped-u2-q20", // Introducere în educația religioasă
            "fped-u2-q21", // Modalități de realizare a educației religioase
          ],
        },

        {
          id: "fped-u2-s7",
          titlu: "Dimensiunile educației: Educația tehnologică",
          quizuri: [
            "fped-u2-q22-23", // Introducere în educația tehnologică
            "fped-u2-q24", // Orientarea școlară ca dimensiune a educației tehnologice
          ],
        },

        {
          id: "fped-u2-s8",
          titlu: "Dimensiunile educației: Educația fizică",
          quizuri: [
            "fped-u2-q25", // Introducere și forme de realizare
            "fped-u2-q26", // Obiectivele educației fizice
          ],
        },

        {
          id: "fped-u2-s9",
          titlu: "Dimensiunile educației: Educația sexuală",
          quizuri: [
            "fped-u2-q27", // Introducere în educația sexuală
            "fped-u2-q28", // Factorii responsabili
            "fped-u2-q29", // Modalități de informare
          ],
        },

        {
          id: "fped-u2-s10",
          titlu: "Noile educații",
          quizuri: [
            "fped-u2-q30", // Introducere în noile educații
            "fped-u2-q31", // Educația pentru pace
            "fped-u2-q32", // Educația ecologică
            "fped-u2-q33", // Alte educații
          ],
        },
      ],
    },
  ],
};

window.FPED_QUIZ = [
  {
    id: "fped-u1-q0",
    title: "Introducere: delimitări conceptuale – educație și pedagogie",
    questions: [
      {
        text: "Cum este definită educația ca <span class='tip'><strong>proces fundamental al existenței umane?</strong><span class='tooltip-box'>Definiția generală din slide-ul introductiv.</span></span>",
        options: [
          "<span class='tip'>Proces care vizează formarea și dezvoltarea permanentă a individului și a societății<span class='tooltip-box'>Educația este concepută ca o relație activă între individ și societate, o „întâlnire” care produce transformare reciprocă.<br><br><strong>Exemplu:</strong> prin educație, individul se dezvoltă, iar societatea își transmite și își reînnoiește valorile.</span></span>",
          "<span class='tip'>Transmiterea mecanică a informațiilor de la adult la copil<span class='tooltip-box'>Această viziune reduce educația la simplă instruire, ignorând dimensiunea formativă și socială.</span></span>",
          "<span class='tip'>Un set de activități limitate la școală și la copilărie<span class='tooltip-box'>Educația este definită în text ca fiind permanentă, nu limitată la o etapă sau instituție.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Selectează elementele care descriu corect <span class='tip'><strong>notele definitorii ale educației.</strong><span class='tooltip-box'>Aici intră trăsături precum intenționalitatea, organizarea, raportarea la finalități și valori, idealul de personalitate și evaluabilitatea rezultatelor.</span></span>",
        multiple: true,
        options: [
          "<span class='tip'>Fenomen specific speciei umane<span class='tooltip-box'>Educația este considerată un demers caracteristic doar omului, nu un simplu mecanism biologic.</span></span>",
          "<span class='tip'>Sistem de acțiuni preponderent deliberate (intenționate)<span class='tooltip-box'>Educația presupune intenție și direcție, nu doar influențe întâmplătoare.</span></span>",
          "<span class='tip'>Este organizată, structurată, planificată<span class='tooltip-box'>Are o logică internă și o construcție în timp, nu este doar o succesiune de întâmplări.</span></span>",
          "<span class='tip'>Se raportează la finalități<span class='tooltip-box'>Urmărește scopuri educaționale explicite sau implicite.</span></span>",
          "<span class='tip'>Se realizează în perspectiva unui ideal de personalitate<span class='tooltip-box'>Vizează un tip de formare dorită pentru individ, în acord cu o viziune despre om.</span></span>",
          "<span class='tip'>Se raportează la valori<span class='tooltip-box'>Orientează și transmite valori, nu doar informații.</span></span>",
          "<span class='tip'>Produce rezultate care pot fi evaluate<span class='tooltip-box'>Efectele pot fi apreciate, urmărite și analizate în timp.</span></span>",
          "<span class='tip'>Este un proces biologic spontan, determinat genetic, fără finalități și fără valori<span class='tooltip-box'>Acesta este un distractor: reduce educația la determinism biologic și elimină dimensiunea axiologică și intențională.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4, 5, 6],
      },

      {
        text: "Selectează elementele care descriu corect <span class='tip'><strong>specificul fenomenului educațional.</strong><span class='tooltip-box'>Aici intră dimensiunile biologică, psihologică, socială și filosofic culturală, ca planuri prin care se explică educația.</span></span>",
        multiple: true,
        options: [
          "<span class='tip'>Se bazează pe datul biologic (ereditar)<span class='tooltip-box'>Educația pornește de la premisele biologice ale individului, fără a se reduce la ele.</span></span>",
          "<span class='tip'>Este un fapt psihologic (vizează dezvoltarea psihică)<span class='tooltip-box'>Educația privește formarea și transformarea vieții psihice: cunoaștere, motivație, afectivitate, conduite.</span></span>",
          "<span class='tip'>Este un proces social (se realizează în medii sociale și vizează integrarea socială)<span class='tooltip-box'>Educația se produce în relații și contexte sociale și are consecințe pentru integrarea în societate.<br><br><strong>Exemplu:</strong> învățarea regulilor de cooperare într-o clasă sau într-un grup.</span></span>",
          "<span class='tip'>Are caracter filosofic, cultural (se orientează după valori, transmite valori, se bazează pe valori)<span class='tooltip-box'>Educația include o dimensiune axiologică: ce considerăm important, dezirabil, legitim într-o cultură.</span></span>",
          "<span class='tip'>Este un fenomen exclusiv psihologic, fără legătură cu societatea și cultura<span class='tooltip-box'>Distractor: educația nu poate fi separată de dimensiunea socială și culturală.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },

      {
        text: "Cum se delimitează <strong>educația</strong> de <strong>pedagogie</strong> din punct de vedere conceptual?",
        options: [
          "<span class='tip'>Educația este procesul de formare și dezvoltare a individului, iar pedagogia este știința care studiază educația, ca fenomen specific tuturor vârstelor<span class='tooltip-box'>Punct comun: ambele se raportează la educație.<br><br>Diferență esențială: educația este un proces practic, real, trăit, iar pedagogia este un demers teoretic, explicativ și științific care analizează acest proces.</span></span>",
          "<span class='tip'>Pedagogia este procesul concret de formare a individului, iar educația este știința care studiază acest proces<span class='tooltip-box'>Această formulare este greșită deoarece atribuie pedagogiei un rol practic, de realizare directă a formării, și mută educația în plan teoretic. În delimitarea conceptuală corectă, educația este procesul real de formare, iar pedagogia este știința care îl studiază și îl explică.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u1-q0c",
    title: "Fundamentele educației",
    questions: [
      {
        text: "Care sunt <strong>fundamentele educației</strong> identificate în abordarea pedagogică?",
        multiple: true,
        options: [
          "<span class='tip'>Fundamente biopsihice<span class='tooltip-box'>Educația se sprijină pe suportul corporal, structural și funcțional al individului, pe datul ereditar și pe dispozițiile potențiale ale acestuia, care pot fi activate și valorificate printr-un tratament educațional intenționat, structurat, continuu și permanent.<br><br><strong>Exemplu:</strong> capacitățile cognitive înnăscute pot fi dezvoltate diferit în funcție de educație.</span></span>",
          "<span class='tip'>Fundamente socioculturale<span class='tooltip-box'>Educația se exercită în contexte ambientale și socioculturale concrete, fiind influențată de experiențele culturale ale comunității, de nivelul de civilizație și de mediul fizic și social în care individul trăiește.<br><br><strong>Exemplu:</strong> școala rurală și cea urbană oferă contexte educaționale diferite.</span></span>",
          "<span class='tip'>Fundamente istorice<span class='tooltip-box'>Educația este înțeleasă ca activitate de transmitere, conservare și perpetuare a valorilor culturale ale umanității, prin raportare la experiențele istorice acumulate.<br><br><strong>Exemplu:</strong> programele școlare reflectă tradiții și achiziții culturale anterioare.</span></span>",
          "<span class='tip'>Fundamente politice<span class='tooltip-box'>Educația este un program de acțiune dimensionat și reglementat de factorii de decizie politică, fiind frecvent influențată de reforme, ideologii și interese sociale.<br><br><strong>Exemplu:</strong> schimbările curriculare determinate de politici educaționale.</span></span>",
          "<span class='tip'>Fundamente filosofice<span class='tooltip-box'>Educația se raportează la un program ideatic, la valori și la o anumită viziune despre om, lume și finalitățile formării, presupunând o reflecție rațională asupra scopurilor educative.<br><br><strong>Exemplu:</strong> idealul educațional al unei societăți.</span></span>",
          "<span class='tip'>Fundamente științifice<span class='tooltip-box'>Educația nu se realizează la întâmplare, ci se bazează pe teorii ale învățării, predării, organizării instruirii și evaluării, asumate de cei care dețin competența profesională.<br><br><strong>Exemplu:</strong> utilizarea strategiilor didactice fundamentate științific.</span></span>",
          "<span class='tip'>Fundamente tehnologice autonome<span class='tooltip-box'>Distractor: deși tehnologia poate sprijini educația, ea nu constituie un fundament al educației în sens pedagogic, ci un mijloc sau instrument utilizat în cadrul procesului educațional.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4, 5],
      },

      {
        text: "Ce exprimă <strong>fundamentele biopsihice</strong> ale educației?",
        options: [
          "<span class='tip'>Educația valorifică datul ereditar și dispozițiile potențiale ale individului<span class='tooltip-box'>Fundamentul biopsihic evidențiază relația dintre ereditate, structura biofiziologică și intervenția educațională, care poate activa și maximiza potențialul nativ.</span></span>",
          "<span class='tip'>Educația este determinată exclusiv de factori genetici, iar intervenția educațională nu poate modifica în mod real capacitățile individului, acestea fiind prestabilite și imuabile pe parcursul vieții<span class='tooltip-box'>Greșit: textul subliniază tocmai rolul educației în activarea și valorificarea potențialului ereditar.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este ideea centrală a <strong>fundamentelor socioculturale</strong> ale educației?",
        options: [
          "<span class='tip'>Educația este condiționată de mediul fizic și sociocultural<span class='tooltip-box'>Educația se desfășoară în contexte concrete, fiind influențată de comunitate, cultură, nivel de civilizație și relațiile sociale.</span></span>",
          "<span class='tip'>Educația se realizează identic indiferent de contextul social, cultural sau istoric, având aceleași forme și finalități în orice comunitate și în orice epocă<span class='tooltip-box'>Greșit: mediul sociocultural este un determinant esențial al educației.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum sunt înțelese <strong>fundamentele istorice</strong> ale educației?",
        options: [
          "<span class='tip'>Educația transmite și perpetuează valorile culturale ale umanității<span class='tooltip-box'>Educația este o activitate de reproducere culturală, de rememorare și reinterpretare a experiențelor istorice acumulate.</span></span>",
          "<span class='tip'>Educația se bazează exclusiv pe experiența personală imediată a educatorului, fără legătură cu tradițiile, valorile și experiențele istorice ale domeniului educațional<span class='tooltip-box'>Greșit: textul accentuează importanța zestrei culturale și a antecedentelor istorice.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce caracterizează <strong>fundamentele politice</strong> ale educației?",
        options: [
          "<span class='tip'>Educația este influențată de deciziile și programele politice<span class='tooltip-box'>Educația este un domeniu sensibil, frecvent politizat, supus reformelor și orientărilor stabilite de cei care conduc societatea.</span></span>",
          "<span class='tip'>Educația este complet independentă de factorii politici, fiind un proces neutru, lipsit de orice influență ideologică sau decizională la nivel societal<span class='tooltip-box'>Greșit: textul subliniază caracterul politizat al reformelor educaționale.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "La ce se referă <strong>fundamentele filosofice</strong> ale educației?",
        options: [
          "<span class='tip'>Raportarea educației la valori și la un program ideatic<span class='tooltip-box'>Educația presupune configurarea scopurilor și obiectivelor în acord cu valori și cu o anumită viziune filosofică asupra omului și societății.</span></span>",
          "<span class='tip'>Educația este o succesiune de acțiuni practice fără reflecție, fără valori și fără o concepție generală asupra finalităților formării umane<span class='tooltip-box'>Greșit: educația este susținută de reflecție filosofică și raționalitate.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce evidențiază <strong>fundamentele științifice</strong> ale educației?",
        options: [
          "<span class='tip'>Educația se bazează pe teorii și cunoaștere științifică<span class='tooltip-box'>Procesul educațional integrează teorii ale învățării, predării, organizării și evaluării, asumate de profesioniștii educației.</span></span>",
          "<span class='tip'>Educația poate fi realizată oricum, de oricine și oriunde, fără pregătire de specialitate, fără fundamentare teoretică și fără competențe profesionale specifice<span class='tooltip-box'>Greșit: textul insistă asupra rolului științei predării și formării.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u1-q0b",
    title: "Câteva accepțiuni științifice ale educației",
    questions: [
      {
        text: "Care formulare surprinde educația ca <strong>activitate normativă orientată spre ideal și valori</strong>?",
        options: [
          "<span class='tip'>Educația este activitatea de disciplinare, cultivare, civilizare și moralizare a omului, având ca scop dezvoltarea în individ a întregii perfecțiuni de care este susceptibil<span class='tooltip-box'>Această accepțiune evidențiază idealul de personalitate și orientarea axiologică a educației.</span></span>",
          "<span class='tip'>Educația este un proces complex de adaptare biologică și socială, determinat în principal de ereditate, mediu și mecanisme naturale de reglare, fără raportare explicită la valori, idealuri educaționale sau finalități asumate<span class='tooltip-box'>Greșit: formularea reduce educația la adaptare și ignoră dimensiunea normativă, valorică și idealul educațional.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care accepțiune pune accent pe <strong>dezvoltarea individului pentru sine</strong>?",
        options: [
          "<span class='tip'>Educația este acțiunea de formare a individului pentru el însuși, prin dezvoltarea unei multitudini de interese<span class='tooltip-box'>Accentul cade pe autonomia persoanei și pe diversificarea intereselor individuale.</span></span>",
          "<span class='tip'>Educația urmărește formarea individului exclusiv în acord cu nevoile societății<span class='tooltip-box'>Greșit: această perspectivă neglijează dezvoltarea pentru sine și autonomia individului.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care formulare definește educația prin <strong>reorganizarea experienței</strong>?",
        options: [
          "<span class='tip'>Educația este reconstrucția și reorganizarea experienței, care adaugă sens experienței anterioare și sporește capacitatea de a orienta experiențele viitoare<span class='tooltip-box'>Educația este văzută ca proces dinamic de transformare a experienței.</span></span>",
          "<span class='tip'>Educația constă în acumularea treptată și continuă de experiențe succesive de viață, care se adună mecanic în timp, indiferent dacă acestea sunt sau nu înțelese, integrate sau reorganizate de individ<span class='tooltip-box'>Greșit: nu orice acumulare de experiență este educativă; lipsește ideea de reorganizare și sens.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care variantă surprinde educația ca <strong>influență conștientă orientată cultural</strong>?",
        options: [
          "<span class='tip'>Educația este activitatea conștientă de influențare a individului prin îngrijire, îndrumare și cultivare în direcția valorilor culturale<span class='tooltip-box'>Sunt evidențiate intenționalitatea, influența și raportarea la valori.</span></span>",
          "<span class='tip'>Educația este rezultatul influențelor spontane ale mediului social asupra individului<span class='tooltip-box'>Greșit: educația nu este predominant spontană, ci organizată și intenționată.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u1-q1",
    title: "Educația din perspectiva structurală (statică)",
    questions: [
      {
        text: "Ce vizează <strong>perspectiva structurală (statică)</strong> asupra educației?",
        options: [
          "<span class='tip'>Identificarea componentelor actului educațional și a relațiilor dintre ele<span class='tooltip-box'>Perspectiva structurală analizează educația ca un ansamblu de elemente relativ stabile, aflate în interdependență.<br><br><strong>Exemplu:</strong> finalități, conținuturi, strategii, evaluare.</span></span>",
          "<span class='tip'>Succesiunea etapelor de desfășurare a actului educațional în timp<span class='tooltip-box'>Această abordare ține de perspectiva procesuală, nu de cea structurală.</span></span>",
          "<span class='tip'>Influența contextului social și cultural asupra educației<span class='tooltip-box'>Aceasta este specifică perspectivei contextual-organizatorice.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care sunt <strong>componentele principale</strong> ale actului educațional din perspectivă structurală?",
        multiple: true,
        options: [
          "<span class='tip'>Finalități educaționale<span class='tooltip-box'>Indică direcțiile, scopurile și idealurile urmărite prin educație.</span></span>",
          "<span class='tip'>Conținuturi educaționale<span class='tooltip-box'>Reprezintă ansamblul de cunoștințe, valori și experiențe transmise.</span></span>",
          "<span class='tip'>Relații educaționale (subiectul și obiectul în educație)<span class='tooltip-box'>Arată cum interacționează subiectul educației cu obiectul educației prin influență, cooperare și comunicare educativă.<br><br><strong>Exemplu:</strong> profesorul structurează sarcini, elevul răspunde și își ajustează efortul.</span></span>",
          "<span class='tip'>Strategii educaționale și de instruire<span class='tooltip-box'>Include metode, tehnici, mijloace și forme de organizare prin care se realizează demersul educațional.<br><br><strong>Exemplu:</strong> învățare prin proiect, lucru pe echipe, exercițiu ghidat.</span></span>",
          "<span class='tip'>Rezultate și evaluare (strategii de evaluare)<span class='tooltip-box'>Rezultatele sunt consecințele urmărite și obținute, iar evaluarea le verifică și oferă baza pentru reglarea demersului educațional.<br><br><strong>Exemplu:</strong> evaluarea arată dacă obiectivele au fost atinse și ce trebuie ajustat.</span></span>",
          "<span class='tip'>Hazardul și spontaneitatea absolută a interacțiunilor educaționale<span class='tooltip-box'>Este greșit fiindcă educația este un demers preponderent deliberat, organizat și planificat, nu unul lăsat la întâmplare.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4],
      },
      {
        text: "Ce exprimă <strong>finalitățile educației</strong> în structura actului educațional?",
        options: [
          "<span class='tip'>Direcțiile de dezvoltare urmărite prin educație<span class='tooltip-box'>Finalitățile includ idealul educațional, scopurile și obiectivele concrete.<br><br><strong>Exemplu:</strong> formarea unei personalități autonome și responsabile.</span></span>",
          "<span class='tip'>Metodele concrete prin care se predă conținutul<span class='tooltip-box'>Metodele țin de strategii educaționale, nu de finalități.</span></span>",
          "<span class='tip'>Rezultatele obținute exclusiv după evaluare<span class='tooltip-box'>Rezultatele sunt consecințe, nu finalități.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este rolul <strong>relațiilor educaționale</strong> în structura educației?",
        options: [
          "<span class='tip'>Mediază interacțiunea dintre subiect și obiect<span class='tooltip-box'>Relațiile educaționale fac posibil transferul, influența și cooperarea educativă.<br><br><strong>Exemplu:</strong> relația profesor–elev.</span></span>",
          "<span class='tip'>Înlocuiesc conținuturile educaționale<span class='tooltip-box'>Relațiile nu substituie conținuturile, ci le facilitează.</span></span>",
          "<span class='tip'>Sunt independente de finalitățile educației<span class='tooltip-box'>Relațiile sunt orientate de finalități.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce includ <strong>strategiile educaționale și de instruire</strong> ca element structural?",
        multiple: true,
        options: [
          "<span class='tip'>Metode și tehnici de predare–învățare<span class='tooltip-box'>Indică modalitățile concrete de realizare a educației.</span></span>",
          "<span class='tip'>Mijloace și forme de organizare<span class='tooltip-box'>Resursele și organizarea activităților educaționale.</span></span>",
          "<span class='tip'>Normativitatea pedagogică<span class='tooltip-box'>Strategiile se desfășoară în acord cu norme și reguli educaționale.</span></span>",
          "<span class='tip'>Caracteristicile genetice imuabile ale individului<span class='tooltip-box'>Distractor: acestea țin de fundamente biopsihice, nu de strategii.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce rol are <strong>evaluarea</strong> în structura actului educațional?",
        options: [
          "<span class='tip'>Verifică și reglează rezultatele educației<span class='tooltip-box'>Evaluarea oferă feedback și permite ajustarea demersului educațional.<br><br><strong>Exemplu:</strong> adaptarea strategiilor în funcție de rezultate.</span></span>",
          "<span class='tip'>Stabilește conținuturile educaționale<span class='tooltip-box'>Conținuturile sunt stabilite anterior evaluării.</span></span>",
          "<span class='tip'>Elimină necesitatea finalităților educaționale<span class='tooltip-box'>Finalitățile ghidează evaluarea, nu invers.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum se raportează <strong>normativitatea pedagogică</strong> la celelalte componente structurale?",
        options: [
          "<span class='tip'>Reglează și orientează întregul demers educațional<span class='tooltip-box'>Normativitatea oferă cadre, reguli și principii pentru organizarea educației.</span></span>",
          "<span class='tip'>Este un element opțional, fără impact real asupra educației<span class='tooltip-box'>Distractor: normativitatea este esențială pentru coerența educației.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u1-q2",
    title: "Educația din perspectivă procesuală",
    questions: [
      {
        text: "Ce <strong>aduce în plus perspectiva procesuală</strong> față de <strong>perspectiva structurală (statică)</strong> în înțelegerea educației?",
        options: [
          "<span class='tip'>Accentul pe dinamică, succesiune și funcționare în timp<span class='tooltip-box'>Perspectiva procesuală nu se limitează la a identifica componentele educației, ci arată <strong>cum</strong> acestea se articulează în timp prin proiectare, implementare și evaluare.<br><br><strong>Exemplu:</strong> nu doar ce obiective există, ci cum sunt ele stabilite, aplicate și verificate.</span></span>",
          "<span class='tip'>Reducerea educației la o listă de elemente independente, analizate izolat, fără legături funcționale între ele<span class='tooltip-box'>Aceasta descrie perspectiva structurală, nu ceea ce aduce nou perspectiva procesuală.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Cum este înțeleasă <strong>educația</strong> atunci când este analizată din <strong>perspectivă procesuală?</strong>",
        options: [
          "<span class='tip'>Ca un proces desfășurat în etape succesive<span class='tooltip-box'>Educația este văzută ca o succesiune coerentă de faze care se condiționează reciproc: proiectare, implementare și evaluare.<br><br><strong>Exemplu:</strong> stabilirea obiectivelor → realizarea activităților → verificarea rezultatelor.</span></span>",
          "<span class='tip'>Ca un ansamblu fix de componente care există simultan<span class='tooltip-box'>Aceasta descrie perspectiva structurală (statică), nu pe cea procesuală.</span></span>",
          "<span class='tip'>Ca un eveniment spontan, lipsit de continuitate, care apare diferit de la o situație la alta fără legături interne<span class='tooltip-box'>Este greșit deoarece perspectiva procesuală presupune logică, succesiune și coerență internă.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care sunt <strong>fazele principale</strong> ale educației din <strong>perspectiva procesuală</strong>?",
        options: [
          "<span class='tip'>Proiectare, implementare, evaluare<span class='tooltip-box'>Educația este înțeleasă ca un proces desfășurat în timp: mai întâi se stabilesc finalitățile și se planifică acțiunea (proiectare), apoi aceasta este pusă în practică (implementare), iar la final rezultatele sunt analizate și apreciate (evaluare).<br><br><strong>Exemplu:</strong> conceperea unei lecții, predarea propriu-zisă și verificarea progresului elevilor.</span></span>",
          "<span class='tip'>Stimulare spontană, acumulare aleatorie de experiențe, adaptare instinctivă la mediu fără proiectare<span class='tooltip-box'>Distractor: educația nu este un proces spontan sau instinctiv, ci unul intenționat, organizat și evaluabil.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce presupune <strong>faza de proiectare</strong> în cadrul procesului educațional?",
        options: [
          "<span class='tip'>Stabilirea finalităților, obiectivelor și a strategiilor<span class='tooltip-box'>În această etapă sunt clarificate scopurile educației, conținuturile, metodele și criteriile de evaluare.<br><br><strong>Exemplu:</strong> formularea obiectivelor unei lecții și alegerea metodelor adecvate.</span></span>",
          "<span class='tip'>Aplicarea propriu-zisă a activităților cu elevii<span class='tooltip-box'>Aceasta caracterizează etapa de implementare, nu proiectarea.</span></span>",
          "<span class='tip'>Notarea elevilor și compararea rezultatelor obținute<span class='tooltip-box'>Aceasta aparține fazei de evaluare.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "La ce se referă <strong>implementarea</strong> în perspectiva procesuală a educației?",
        options: [
          "<span class='tip'>Punerea în practică a demersului educațional<span class='tooltip-box'>Include desfășurarea efectivă a activităților de predare și învățare conform proiectării realizate anterior.<br><br><strong>Exemplu:</strong> utilizarea metodelor și materialelor planificate într-o lecție.</span></span>",
          "<span class='tip'>Analiza teoretică a valorilor și idealurilor educaționale<span class='tooltip-box'>Aceasta ține mai degrabă de fundamentele filosofice ale educației.</span></span>",
          "<span class='tip'>Exclusiv verificarea rezultatelor finale fără raportare la obiective<span class='tooltip-box'>Implementarea nu se reduce la evaluare și nu este separată de obiective.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este rolul <strong>evaluării</strong> în cadrul procesului educațional?",
        options: [
          "<span class='tip'>Verifică rezultatele și permite reglarea procesului<span class='tooltip-box'>Evaluarea apreciază măsura în care obiectivele au fost atinse și oferă informații pentru îmbunătățirea demersului educațional.<br><br><strong>Exemplu:</strong> adaptarea strategiilor după analiza performanțelor elevilor.</span></span>",
          "<span class='tip'>Are doar rol sancționator, fără legătură cu proiectarea sau implementarea<span class='tooltip-box'>Această viziune este restrictivă și contrazice logica procesuală.</span></span>",
          "<span class='tip'>Este o etapă izolată, fără influență asupra etapelor anterioare<span class='tooltip-box'>În realitate, evaluarea se corelează cu proiectarea și implementarea.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum se raportează <strong>cele trei faze</strong> ale perspectivei procesuale una la alta?",
        options: [
          "<span class='tip'>Sunt interdependente și se condiționează reciproc<span class='tooltip-box'>Procesul educațional este ciclic: evaluarea oferă feedback pentru o nouă proiectare și implementare.<br><br><strong>Exemplu:</strong> rezultatele slabe duc la revizuirea obiectivelor sau metodelor.</span></span>",
          "<span class='tip'>Sunt complet independente și pot fi parcurse în orice ordine<span class='tooltip-box'>Această idee contrazice caracterul logic și coerent al procesului educațional.</span></span>",
          "<span class='tip'>Doar implementarea este esențială, celelalte fiind opționale<span class='tooltip-box'>Toate cele trei faze sunt necesare pentru funcționarea procesului educațional.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u1-q3",
    title: "Educația din perspectiva organizatorică (contextuală)",
    questions: [
      {
        text: "Ce surprinde <strong>perspectiva organizatorică (contextuală)</strong> asupra educației?",
        multiple: true,
        options: [
          "<span class='tip'>Formele concrete de organizare a activității educaționale<span class='tooltip-box'>Educația se desfășoară prin forme variate, structurate sau mai puțin structurate, care dau un cadru concret actului educațional.<br><br><strong>Exemplu:</strong> lecția, cursul, seminarul.</span></span>",
          "<span class='tip'>Contextul instituțional și extrașcolar al educației<span class='tooltip-box'>Educația nu este limitată la școală, ci apare și în contexte nonformale și informale.<br><br><strong>Exemplu:</strong> excursii, activități extracurriculare.</span></span>",
          "<span class='tip'>Diversitatea situațiilor în care apar influențe educative<span class='tooltip-box'>Orice context organizat poate genera efecte educative, chiar dacă nu este explicit instructiv.<br><br><strong>Exemplu:</strong> pauza școlară, serbarea școlară.</span></span>",
          "<span class='tip'>Negarea rolului organizării în procesul educațional<span class='tooltip-box'>Distractor: perspectiva organizatorică se bazează tocmai pe analiza formelor și cadrelor de organizare.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care dintre următoarele sunt <strong>forme de organizare a activității educaționale</strong> specifice acestei perspective?",
        multiple: true,
        options: [
          "<span class='tip'>Lecția, cursul, seminarul, laboratorul<span class='tooltip-box'>Forme clasice, instituționalizate, de organizare a educației formale.</span></span>",
          "<span class='tip'>Excursia, cercul de lectură, serbarea școlară<span class='tooltip-box'>Forme nonformale care completează educația formală prin experiențe directe.</span></span>",
          "<span class='tip'>Pauza școlară și meciul dintre echipele școlii<span class='tooltip-box'>Contexte informale cu potențial educativ, de socializare și dezvoltare socio-emoțională.</span></span>",
          "<span class='tip'>Ereditatea genetică și structura biologică a individului<span class='tooltip-box'>Distractor: ține de fundamente biopsihice, nu de perspectiva organizatorică.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "De ce <strong>perspectiva organizatorică</strong> extinde înțelegerea educației dincolo de sala de clasă?",
        options: [
          "<span class='tip'>Pentru că evidențiază faptul că educația apare în multiple contexte organizate ale vieții sociale<span class='tooltip-box'>Educația este prezentă în contexte formale, nonformale și informale, nu doar în lecții.<br><br><strong>Exemplu:</strong> activitatea de la grădiniță sau ședința cu părinții.</span></span>",
          "<span class='tip'>Pentru că elimină rolul profesorului din procesul educațional<span class='tooltip-box'>Distractor: profesorul rămâne un actor important, chiar și în contexte nonformale.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este <strong>valoarea educativă</strong> a contextelor aparent non-instructive?",
        options: [
          "<span class='tip'>Pot genera învățare, socializare și formare de atitudini<span class='tooltip-box'>Chiar și situațiile cotidiene pot contribui la dezvoltarea personalității.<br><br><strong>Exemplu:</strong> respectarea regulilor în timpul unui meci școlar.</span></span>",
          "<span class='tip'>Nu au niciun impact educativ deoarece nu sunt planificate didactic<span class='tooltip-box'>Distractor: lipsa formalizării nu anulează potențialul educativ.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce diferențiază <strong>perspectiva organizatorică</strong> de cea <strong>structurală (statică)</strong>?",
        options: [
          "<span class='tip'>Accentul pe contexte și forme concrete de desfășurare a educației<span class='tooltip-box'>Perspectiva structurală descrie componentele actului educațional, în timp ce cea organizatorică arată unde și cum se manifestă acestea.<br><br><strong>Exemplu:</strong> nu doar ce este educația, ci în ce cadre se realizează.</span></span>",
          "<span class='tip'>Analiza exclusivă a finalităților și conținuturilor educației<span class='tooltip-box'>Distractor: aceasta caracterizează mai ales perspectiva structurală.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u1-q4",
    title: "Cum să (mai) înțelegem conceptul de educație?",
    questions: [
      {
        text: "Care dintre următoarele <strong>viziuni complementare</strong> ajută la o înțelegere mai amplă a conceptului de educație?",
        multiple: true,
        options: [
          "<span class='tip'>Educația ca proces<span class='tooltip-box'>Evidențiază caracterul dinamic, continuu și etapizat al educației, desfășurat în timp.<br><br><strong>Exemplu:</strong> educația pe parcursul întregii vieți.</span></span>",
          "<span class='tip'>Educația ca acțiune de conducere<span class='tooltip-box'>Pune accent pe dirijarea, orientarea și ghidarea formării individului către anumite finalități.<br><br><strong>Exemplu:</strong> rolul educatorului în stabilirea direcției educative.</span></span>",
          "<span class='tip'>Educația ca acțiune socială<span class='tooltip-box'>Subliniază realizarea educației în cadrul relațiilor și structurilor sociale.<br><br><strong>Exemplu:</strong> integrarea socială prin educație.</span></span>",
          "<span class='tip'>Educația ca interrelație umană<span class='tooltip-box'>Evidențiază dimensiunea relațională, comunicativă și interpersonală a educației.<br><br><strong>Exemplu:</strong> relația profesor–elev.</span></span>",
          "<span class='tip'>Educația ca ansamblu de influențe<span class='tooltip-box'>Include totalitatea influențelor formale, nonformale și informale exercitate asupra individului.<br><br><strong>Exemplu:</strong> familie, școală, mass-media.</span></span>",
          "<span class='tip'>Educația ca produs<span class='tooltip-box'>Se referă la rezultatele educației, concretizate în comportamente, competențe și valori formate.<br><br><strong>Exemplu:</strong> profilul de personalitate al absolventului.</span></span>",
          "<span class='tip'>Educația ca fenomen exclusiv biologic<span class='tooltip-box'>Distractor: educația depășește determinările biologice și implică dimensiuni sociale și culturale.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4, 5],
      },

      {
        text: "Ce înseamnă să privim <strong>educația ca proces</strong>?",
        options: [
          "<span class='tip'>Un demers dinamic, desfășurat în timp, cu etape și transformări succesive<span class='tooltip-box'>Educația nu este un act izolat, ci o succesiune de influențe și experiențe formative.<br><br><strong>Exemplu:</strong> trecerea de la educația timpurie la cea adultă.</span></span>",
          "<span class='tip'>Un rezultat final fix, neschimbabil după finalizarea școlii<span class='tooltip-box'>Distractor: educația continuă și după încheierea studiilor formale.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum este înțeleasă <strong>educația ca acțiune de conducere</strong>?",
        options: [
          "<span class='tip'>Ca orientare intenționată a formării individului către finalități și valori<span class='tooltip-box'>Accentul cade pe rolul educatorului și pe dirijarea procesului educativ.<br><br><strong>Exemplu:</strong> stabilirea obiectivelor educaționale.</span></span>",
          "<span class='tip'>Ca dezvoltare spontană, fără scopuri sau direcții asumate<span class='tooltip-box'>Distractor: educația presupune intenționalitate și finalități.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce evidențiază viziunea asupra <strong>educației ca acțiune socială</strong>?",
        options: [
          "<span class='tip'>Integrarea individului în societate prin norme, valori și roluri sociale<span class='tooltip-box'>Educația contribuie la coeziunea și funcționarea societății.<br><br><strong>Exemplu:</strong> educația civică.</span></span>",
          "<span class='tip'>Izolarea individului de influențele sociale<span class='tooltip-box'>Distractor: educația este profund ancorată social.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce presupune <strong>educația ca interrelație umană</strong>?",
        options: [
          "<span class='tip'>O relație de comunicare și influență reciprocă între persoane<span class='tooltip-box'>Formarea se realizează prin interacțiuni directe, empatice și comunicative.<br><br><strong>Exemplu:</strong> dialogul educativ profesor–elev.</span></span>",
          "<span class='tip'>Transmiterea mecanică de informații, fără relație interpersonală<span class='tooltip-box'>Distractor: relația umană este esențială educației.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum este înțeleasă <strong>educația ca ansamblu de influențe</strong>?",
        options: [
          "<span class='tip'>Totalitatea influențelor formale, nonformale și informale asupra individului<span class='tooltip-box'>Educația depășește cadrul școlar și include multiple surse formative.<br><br><strong>Exemplu:</strong> familie, prieteni, mass-media.</span></span>",
          "<span class='tip'>Doar influențele exercitate intenționat de profesor<span class='tooltip-box'>Distractor: educația include și influențe neintenționate.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce exprimă perspectiva asupra <strong>educației ca produs</strong>?",
        options: [
          "<span class='tip'>Rezultatele concrete ale educației reflectate în comportamente și competențe<span class='tooltip-box'>Educația se materializează în profilul de personalitate format.<br><br><strong>Exemplu:</strong> competențe sociale și morale.</span></span>",
          "<span class='tip'>Doar acumularea de informații teoretice<span class='tooltip-box'>Distractor: produsul educației este mult mai complex.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u1-q5",
    title: "Alte modalități de formare a subiectului",
    questions: [
      {
        text: "Selectează grupările care corespund <strong>modalităților de formare a subiectului.</strong>",
        multiple: true,
        options: [
          "<span class='tip'>Dresaj · Domesticire<span class='tooltip-box'>Modalități bazate pe condiționare, formarea de obișnuințe și stabilizarea comportamentelor, cu accent pe mecanisme cauză efect și finalități practice.</span></span>",

          "<span class='tip'>Manipulare · Îndoctrinare<span class='tooltip-box'>Modalități de influență socială problematice, care urmăresc schimbarea percepțiilor sau comportamentelor prin ascunderea scopului sau folosirea unor tactici amăgitoare.</span></span>",

          "<span class='tip'>Creștere · Maturizare · Formare și dezvoltare<span class='tooltip-box'>Procese evolutive ale subiectului, de la transformări fizice vizibile până la dezvoltări psihice, sociale și culturale, cu grade diferite de complexitate.</span></span>",

          "<span class='tip'>Instruirea · Predarea · Învățarea<span class='tooltip-box'>Modalități specifice educației organizate, care presupun intenționalitate, structurare și relații educaționale explicite.</span></span>",

          "<span class='tip'>Salvare<span class='tooltip-box'>Modalitate de formare cu sens religios specific creștinismului, orientată spre desăvârșirea ființei umane și pregătirea pentru viața veșnică.</span></span>",

          "<span class='tip'>Întâmplare și lipsa oricărei influențe deliberate<span class='tooltip-box'>Distractor: materialul discută exclusiv forme de influență, proces sau acțiune, nu absența completă a acestora.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4],
      },
      {
        text: "Ce diferențiază cel mai bine <span class='tip'><strong>dresajul</strong><span class='tooltip-box'>Vizează asociații mecanice și reflexe condiționate.</span></span> de <span class='tip'><strong>domesticire?</strong><span class='tooltip-box'>Este o formă mai complexă, orientată practic, cu efecte mai stabile și mai largi.</span></span>",
        options: [
          "<span class='tip'>Dresajul urmărește o funcție prioritar ludică, iar domesticirea are o funcție prioritar practică<span class='tooltip-box'>Dresajul e prezentat ca ludic, domesticirea ca practică, cu finalități utile pentru om.</span></span>",
          "<span class='tip'>Domesticirea este mai simplă decât dresajul și urmărește doar distracția, fără utilitate și fără efecte stabile<span class='tooltip-box'>Greșit: domesticirea e descrisă ca mai complicată și orientată practic, cu stabilizare de instinct și efecte durabile.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce caracterizează cel mai clar <span class='tip'><strong>creșterea?</strong><span class='tooltip-box'>Accentul este pe dimensiunea fizică, vizibilă și măsurabilă.</span></span>",
        options: [
          "<span class='tip'>Transformări evolutive fizice, organice, vizibile și încadrabile în standarde de normalitate<span class='tooltip-box'>Este prezentată ca fenomen observabil și comparabil prin repere.</span></span>",
          "<span class='tip'>Proces exclusiv cultural, invizibil și nemăsurabil, care nu poate fi pus în legătură cu standarde, repere sau criterii de descriere, fiind mereu imposibil de comparat între persoane și contexte<span class='tooltip-box'>Greșit: creșterea e descrisă tocmai ca vizibilă și standardizabilă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Selectează triada care indică direct zona de <span class='tip'><strong>școală și organizare intenționată a învățării.</strong><span class='tooltip-box'>Sunt termeni din listă care trimit explicit la activități educaționale organizate, planificate și asumate instituțional.</span></span>",
        multiple: false,
        options: [
          "<span class='tip'>Instruirea, predarea și învățarea<span class='tooltip-box'>Aceasta este triada didactică fundamentală: predarea organizează și oferă conținuturi, instruirea structurează procesul, iar învățarea reprezintă rezultatul schimbărilor produse la nivelul subiectului.<br><br><strong>Clarificare:</strong> toate trei trimit direct la educația formală și la activitatea școlară.</span></span>",
          "<span class='tip'>Creștere, maturizare și salvare<span class='tooltip-box'>Distractor: aceste noțiuni trimit la procese biologice, evolutive sau spirituale, care nu definesc în mod direct organizarea intenționată a învățării în context școlar.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u1-q6",
    title: "Pedagogia: definiție și raporturi",
    questions: [
      // 1. Definiția pedagogiei
      {
        text: "Care este <strong>definiția corectă a pedagogiei</strong>?",
        options: [
          "<span class='tip'>Știința educației omului de toate vârstele, care studiază fenomenul educațional<span class='tooltip-box'>Pedagogia este definită ca știință, nu ca practică directă, având ca obiect educația în toate etapele vieții.</span></span>",
          "<span class='tip'>Ansamblul activităților concrete prin care se realizează educația în școală și familie<span class='tooltip-box'>Greșit: descrie educația ca practică, nu pedagogia ca știință care o studiază.</span></span>",
        ],
        answer: 0,
      },

      // 2. Obiectul de studiu al pedagogiei
      {
        text: "Care este <strong>obiectul de studiu</strong> al pedagogiei?",
        options: [
          "<span class='tip'>Educația, ca fenomen și proces educațional<span class='tooltip-box'>Pedagogia nu studiază omul în general, ci educația ca fenomen specific.</span></span>",
          "<span class='tip'>Dezvoltarea biologică și psihică a individului, independent de influențe educative<span class='tooltip-box'>Greșit: aceasta ar ține de alte științe, nu de pedagogie.</span></span>",
        ],
        answer: 0,
      },

      // 3. Ce fel de știință este pedagogia – vedere de ansamblu
      {
        text: "Pedagogia este o știință care poate fi caracterizată prin mai multe perspective. Care dintre următoarele reunește <strong>corect aceste caracterizări</strong>?",
        multiple: true,
        options: [
          "<span class='tip'>Umană – educația ca activitate specific umană<span class='tooltip-box'>Pedagogia pornește de la faptul că educația este o activitate exclusiv umană, legată de conștiință, intenționalitate și sens.<br><br><strong>Utilitate practică:</strong> permite înțelegerea educației ca proces de formare a persoanei, nu ca simplu mecanism de condiționare.</span></span>",

          "<span class='tip'>Socială – educația ca activitate socială<span class='tooltip-box'>Educația se desfășoară întotdeauna într-un cadru social, fiind influențată de norme, valori, instituții și relații de putere.<br><br><strong>Utilitate practică:</strong> explică de ce școala, familia și comunitatea modelează diferit dezvoltarea individului.</span></span>",

          "<span class='tip'>A comunicării – educația ca relație de informare și formare<span class='tooltip-box'>Procesul educațional presupune transmitere, negociere și interpretare de sensuri între subiecte.<br><br><strong>Utilitate practică:</strong> fundamentează importanța comunicării didactice, a feedbackului și a relației profesor–elev.</span></span>",

          "<span class='tip'>Pozitivă – educația ca fenomen cercetat științific<span class='tooltip-box'>Termenul „pozitivă” nu înseamnă optimistă sau benefică, ci se referă la abordarea bazată pe fapte, observație, cercetare și descoperirea legilor fenomenului educațional.<br><br><strong>Utilitate practică:</strong> permite fundamentarea deciziilor educaționale pe date și teorii verificate, nu pe impresii sau intuiții.</span></span>",

          "<span class='tip'>Filosofică – educația orientată de valori și finalități<span class='tooltip-box'>Pedagogia reflectează asupra sensului educației, a idealului educațional și a valorilor care trebuie promovate.<br><br><strong>Utilitate practică:</strong> oferă criterii pentru stabilirea scopurilor educației și pentru evaluarea direcției în care se formează omul.</span></span>",

          "<span class='tip'>Praxiologică – educația ca acțiune organizată și aplicată<span class='tooltip-box'>Pedagogia nu rămâne la nivel teoretic, ci vizează modalitățile concrete de aplicare a normelor și principiilor educaționale.<br><br><strong>Utilitate practică:</strong> leagă teoria de activitatea reală din clasă, din școală și din sistemul educațional.</span></span>",

          "<span class='tip'>Speculativă și lipsită de aplicabilitate practică<span class='tooltip-box'>Distractor: pedagogia nu este o reflecție abstractă ruptă de realitate, ci o știință orientată spre înțelegerea și optimizarea practicilor educaționale.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4, 5],
      },
      // 4. Pedagogia ca știință umană
      {
        text: "De ce este pedagogia considerată o <strong>știință umană</strong>?",
        options: [
          "<span class='tip'>Pentru că studiază educația ca activitate realizată de și asupra omului<span class='tooltip-box'>Accentul este pe om ca subiect și obiect al educației.</span></span>",
          "<span class='tip'>Pentru că se ocupă exclusiv de mecanisme biologice și genetice<span class='tooltip-box'>Greșit: acestea nu sunt centrul analizei pedagogice.</span></span>",
        ],
        answer: 0,
      },

      // 5. Pedagogia ca știință socială
      {
        text: "În ce sens pedagogia este o <strong>știință socială</strong>?",
        options: [
          "<span class='tip'>Pentru că studiază educația ca activitate socială, realizată în contexte comunitare<span class='tooltip-box'>Educația este influențată de structuri și relații sociale.</span></span>",
          "<span class='tip'>Pentru că se reduce la norme juridice și reglementări administrative<span class='tooltip-box'>Greșit: acestea nu epuizează dimensiunea socială a educației.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În ce constă caracterul de <strong>știință a comunicării</strong> al pedagogiei?",
        options: [
          "<span class='tip'>În studierea raporturilor de informare și formare dintre educatori și educați<span class='tooltip-box'>Educația presupune transmitere, interpretare și construire de sens.</span></span>",
          "<span class='tip'>În reducerea educației la simpla transmitere unilaterală de informații<span class='tooltip-box'>Greșit: comunicarea educațională este relațională și formativă, nu doar informativă.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce înseamnă că pedagogia este o <strong>știință pozitivă</strong>?",
        options: [
          "<span class='tip'>Că cercetează fenomenul educațional pentru a-i descoperi specificul, dimensiunile și legitățile<span class='tooltip-box'>Accentul este pe analiză sistematică și fundamentare științifică.</span></span>",
          "<span class='tip'>Că formulează doar opinii și idealuri fără bază de cercetare<span class='tooltip-box'>Greșit: ar nega caracterul științific al pedagogiei.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În ce sens pedagogia are un caracter <strong>filosofic</strong>?",
        options: [
          "<span class='tip'>Prin orientarea educației spre finalități, valori și principii care dau sens formării umane<span class='tooltip-box'><strong>Axiologică</strong> (valori): educația se raportează la ceea ce este considerat valoros, dezirabil și semnificativ pentru individ și societate.<br><br><strong>Teleologică</strong> (finalități): educația este orientată spre scopuri asumate conștient, urmărește un ideal educațional și direcționează procesul formativ către rezultate și tipuri de personalitate dorite.</span></span>",
          "<span class='tip'>Prin renunțarea la orice criteriu practic sau aplicativ<span class='tooltip-box'>Greșit: dimensiunea filosofică nu exclude aplicarea.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "De ce este pedagogia considerată o <strong>știință praxiologică</strong>?",
        options: [
          "<span class='tip'>Pentru că vizează modalitățile concrete de aplicare în practică a normelor și principiilor pedagogice<span class='tooltip-box'>Pedagogia leagă teoria de acțiunea educativă.</span></span>",
          "<span class='tip'>Pentru că rămâne exclusiv la nivel teoretic, fără legătură cu realitatea educațională<span class='tooltip-box'>Greșit: contrazice chiar sensul praxiologic.</span></span>",
        ],
        answer: 0,
      },
      // 6. Raportul pedagogie–educație
      {
        text: "Cum se stabilește <strong>raportul corect</strong> dintre pedagogie și educație?",
        options: [
          "<span class='tip'>Educația este procesul concret de formare și dezvoltare a individului, iar pedagogia este știința care studiază, explică și fundamentează acest proces<span class='tooltip-box'>Educația este practică și procesuală, pedagogia este teoretică și explicativă.</span></span>",
          "<span class='tip'>Pedagogia este procesul concret de formare, iar educația este disciplina care îl teoretizează<span class='tooltip-box'>Greșit: inversează rolurile celor două concepte.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u1-q7",
    title: "Pedagogia: evoluția și locul ei în Sistemul Științelor Educației",
    questions: [
      {
        text: "Ce exprimă <strong>evoluțiile interne</strong> ale pedagogiei?",
        options: [
          "<span class='tip'>Dezvoltarea internă a câmpului pedagogic<span class='tooltip-box'>Vizează modul în care pedagogia își diversifică și specializează propriile teorii și domenii interne, fără a ieși din aria strict pedagogică.<br><br><strong>Exemplu:</strong> apariția teoriilor instruirii, curriculumului sau evaluării.</span></span>",
          "<span class='tip'>Extinderea pedagogiei către alte științe fără legătură cu educația<span class='tooltip-box'>Distractor: evoluțiile interne se referă la reorganizarea și aprofundarea internă, nu la împrumuturi externe necorelate.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce desemnează <strong>evoluțiile externe</strong> ale pedagogiei?",
        options: [
          "<span class='tip'>Ramificarea pedagogiei prin relaționare cu alte științe<span class='tooltip-box'>Pedagogia se dezvoltă prin dialog cu psihologia, sociologia, antropologia sau managementul, generând domenii noi.<br><br><strong>Exemplu:</strong> psihologia educației, sociologia educației.</span></span>",
          "<span class='tip'>Abandonarea obiectului educației în favoarea altor domenii<span class='tooltip-box'>Distractor: chiar și în evoluțiile externe, obiectul rămâne educația.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este <strong>nucleul central</strong> al sistemului științelor educației?",
        options: [
          "<span class='tip'>Pedagogia generală<span class='tooltip-box'>Reprezintă nucleul teoretic de bază, din care se dezvoltă atât domenii teoretice aprofundate, cât și aplicații practice.</span></span>",
          "<span class='tip'>Didactica specialității<span class='tooltip-box'>Distractor: aceasta aparține culturii pedagogice practice, nu nucleului teoretic.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce include <strong>cultura pedagogică de bază</strong>?",
        multiple: true,
        options: [
          "<span class='tip'>Teoria generală a educației<span class='tooltip-box'>Fundamentele pedagogiei, conceptele de bază și delimitările conceptuale.</span></span>",
          "<span class='tip'>Teoria și metodologia curriculumului<span class='tooltip-box'>Analizează organizarea și selecția conținuturilor educaționale.</span></span>",
          "<span class='tip'>Teoria și metodologia instruirii<span class='tooltip-box'>Vizează procesele de predare și învățare.</span></span>",
          "<span class='tip'>Teoria și metodologia evaluării<span class='tooltip-box'>Studiază modalitățile de apreciere și reglare a procesului educațional.</span></span>",
          "<span class='tip'>Practicile educaționale informale cotidiene<span class='tooltip-box'>Distractor: acestea nu fac parte din structura teoretică a culturii pedagogice de bază.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },

      {
        text: "Ce caracterizează <strong>cultura pedagogică aprofundată</strong>?",
        multiple: true,
        options: [
          "<span class='tip'>Psihologia educației<span class='tooltip-box'>Analizează mecanismele psihice implicate în învățare și dezvoltare.</span></span>",
          "<span class='tip'>Sociologia educației<span class='tooltip-box'>Studiază educația ca fenomen social.</span></span>",
          "<span class='tip'>Managementul educației<span class='tooltip-box'>Vizează organizarea și conducerea sistemelor și instituțiilor educaționale.</span></span>",
          "<span class='tip'>Teoria comunicării pedagogice<span class='tooltip-box'>Analizează relațiile de comunicare în procesul educațional.</span></span>",
          "<span class='tip'>Didactica specialității<span class='tooltip-box'>Distractor: aparține culturii pedagogice practice.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },

      {
        text: "Ce definește <strong>cultura pedagogică practică</strong>?",
        options: [
          "<span class='tip'>Transpunerea în practică a principiilor pedagogice<span class='tooltip-box'>Include aplicarea concretă a teoriilor prin didactica specialității și practica pedagogică.<br><br><strong>Exemplu:</strong> proiectarea și desfășurarea lecțiilor.</span></span>",
          "<span class='tip'>Elaborarea de teorii generale abstracte<span class='tooltip-box'>Distractor: aceasta este funcția culturii pedagogice de bază.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este <strong>rolul fundamental</strong> al pedagogiei în Sistemul Științelor Educației?",
        options: [
          "<span class='tip'>Integrează și organizează cunoașterea despre educație<span class='tooltip-box'>Pedagogia funcționează ca știință de sinteză, articulând teoriile, cercetarea și practica educațională.</span></span>",
          "<span class='tip'>Înlocuiește celelalte științe ale educației<span class='tooltip-box'>Distractor: pedagogia colaborează cu acestea, nu le substituie.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q0",
    title: "Definiția educației: etimologie, sensuri și concepții fundamentale",
    questions: [
      {
        text: "Care sunt <strong>sursele etimologice principale</strong> ale conceptului de <strong>educație</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Latinescul <em>educo/ educare</em> -  „a alimenta”, „a îngriji”, „a crește” dar și „a deduce”, „a conduce”, „a scoate”</strong><span class='tooltip-box'>Include sensuri de tipul „a alimenta”, „a îngriji”, „a crește” și, în uzul etimologic prezentat, este pus în legătură și cu „a deduce”, „a conduce”, „a scoate”, sugerând atât ideea de îngrijire, cât și de orientare a dezvoltării.</span></span>",
          "<span class='tip'><strong>Termenul francez <em>education</em></strong><span class='tooltip-box'>Mai recent, prin circulația termenului în limbile de cultură, din <em>education</em> derivă și forma românească „educație”.</span></span>",
          "<span class='tip'><strong>Originea exclusiv modernă, legată doar de școala obligatorie și de programe standardizate</strong><span class='tooltip-box'>Distractor: școala obligatorie este un cadru istoric de organizare a educației, nu o sursă etimologică a termenului.</span></span>",
        ],
        answer: [0, 1],
      },
      {
        text: "Cum este definită <strong>educația</strong> în viziunea lui <strong>Ioan Hrisostom (1937)</strong>?",
        options: [
          "<span class='tip'><strong>A educa înseamnă a cultiva curățenia sufletească și buna-cuviință a copiilor și tinerilor, a-l crește pe copil moral, a avea grijă de sufletul lui, a-i modela inteligența</strong><span class='tooltip-box'>Educația vizează creșterea morală, grija față de suflet și modelarea inteligenței, având un profund caracter spiritual.</span></span>",
          "<span class='tip'><strong>Transmiterea sistematică de cunoștințe academice în cadrul instituțiilor școlare moderne</strong><span class='tooltip-box'>Distractor: definiția nu se limitează la instruire intelectuală sau la școală.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum definește <strong>Immanuel Kant</strong> educația?",
        options: [
          "<span class='tip'><strong>Educația este activitatea de disciplinare, cultivare, civilizare și moralizare a omului, iar scopul educației este de a dezvolta în individ toată perfecțiunea de care este susceptibil</strong><span class='tooltip-box'>Scopul educației este dezvoltarea întregii perfecțiuni de care individul este susceptibil.</span></span>",
          "<span class='tip'><strong>Adaptarea pasivă a individului la normele sociale existente fără dezvoltare personală</strong><span class='tooltip-box'>Distractor: Kant accentuează formarea completă, nu conformismul pasiv.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce semnificație are educația în concepția lui <strong>Johann Friedrich Herbart (1976)</strong>?",
        options: [
          "<span class='tip'><strong>Educația este acțiunea de formare a individului pentru el însuși, devoltându-i-se o multitudine de interese</strong><span class='tooltip-box'>Educația urmărește formarea unei personalități armonioase prin multiplicarea și organizarea intereselor.</span></span>",
          "<span class='tip'><strong>Exclusiv pregătirea profesională rapidă pentru cerințele imediate ale societății</strong><span class='tooltip-box'>Distractor: perspectiva lui Herbart este una formativă, nu strict utilitară.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Cum pot fi înțelese, în mod <strong>general și comparativ</strong>, cele două mari perspective asupra educației: <strong>concepția antropocentrică</strong> și <strong>concepția sociocentrică</strong>?",
        options: [
          "<span class='tip'><strong>Educația este privită fie ca dezvoltare a potențialului uman, fie ca pregătire pentru roluri sociale</strong><span class='tooltip-box'>În concepția antropocentrică, educația urmărește dezvoltarea calităților generale ale ființei umane, în limitele potențialităților naturale.<br><br>În concepția sociocentrică, accentul se deplasează de la natura umană la „natura” socială, educația fiind orientată spre integrarea și funcționarea individului în societate.</span></span>",
          "<span class='tip'><strong>Educația are exclusiv rolul de a adapta individul la cerințele sociale imediate</strong><span class='tooltip-box'>Distractor: această formulare corespunde doar parțial concepției sociocentrice și ignoră perspectiva antropocentrică.</span></span>",
          "<span class='tip'><strong>Educația se reduce la transmiterea de cunoștințe școlare, indiferent de individ sau societate</strong><span class='tooltip-box'>Distractor: ambele concepții depășesc viziunea strict instrucțională.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Potrivit <strong>concepției antropocentrice</strong>, care este rolul educației?",
        options: [
          "<span class='tip'><strong>Dezvoltarea calităților generale ale ființei umane</strong><span class='tooltip-box'>Educația valorifică potențialitățile naturale ale individului și susține dezvoltarea sa integrală.</span></span>",
          "<span class='tip'><strong>Modelarea individului exclusiv în funcție de cerințele economice și instituționale ale societății contemporane</strong><span class='tooltip-box'>Distractor: accentul nu cade pe societate, ci pe natura și potențialul uman.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum este definită educația din perspectiva <strong>concepției sociocentrice</strong>?",
        options: [
          "<span class='tip'><strong>Pregătirea individului pentru exercitarea rolurilor sociale</strong><span class='tooltip-box'>Accentul se mută de la natura umană la natura socială, educația fiind orientată spre integrare și funcționare socială.</span></span>",
          "<span class='tip'><strong>Autodezvoltarea spontană a individului în afara oricărui cadru social organizat</strong><span class='tooltip-box'>Distractor: concepția sociocentrică presupune tocmai raportarea la societate.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care dintre următoarele definiții exprimă <strong>concepția antropocentrică</strong> asupra educației?",
        multiple: true,
        options: [
          "<span class='tip'><strong>A educa înseamnă a cultiva curățenia sufletească și buna-cuviință a copiilor și tinerilor, a-l crește pe copil moral, a avea grijă de sufletul lui, a-i modela inteligența</strong> <em>(Ioan Hrisostom, 1937)</em><span class='tooltip-box'>Ioan Hrisostom apud Fecioru, 1937 citat în Cucoș, 2014.</span></span>",
          "<span class='tip'><strong>Educația este acțiunea de formare a individului pentru el însuși, devoltându-i-se o multitudine de interese</strong> <em>(Herbart, 1976)</em><span class='tooltip-box'>Herbart, 1976 citat în Cucoș, 2014.</span></span>",
          "<span class='tip'><strong>Educația constituie acțiunea generațiilor adulte asupra celor tinere, cu scopul de a le forma acestora din urmă stări fizice, intelectuale, mentale necesare vieții sociale și mediului special pentru care sunt destinate</strong> <em>(Durkheim, 1930)</em><span class='tooltip-box'>Durkheim, 1930 citat în Cucoș, 2014.</span></span>",
        ],
        answer: [0, 1],
      },
      {
        text: "Care dintre următoarele definiții corespunde <strong>concepției sociocentrice</strong> asupra educației?",
        options: [
          "<span class='tip'><strong>Educația constituie acțiunea generațiilor adulte asupra celor tinere, cu scopul de a le forma acestora din urmă stări fizice, intelectuale, mentale necesare vieții sociale și mediului special pentru care sunt destinate</strong> <em>(Durkheim, 1930)</em><span class='tooltip-box'>Durkheim, 1930 citat în Cucoș, 2014.</span></span>",
          "<span class='tip'><strong>A educa înseamnă a cultiva curățenia sufletească și buna-cuviință a copiilor și tinerilor, a-l crește pe copil moral, a avea grijă de sufletul lui, a-i modela inteligența</strong> <em>(Ioan Hrisostom, 1937)</em><span class='tooltip-box'>Ioan Hrisostom apud Fecioru, 1937 citat în Cucoș, 2014.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q1",
    title: "Educația formală",
    questions: [
      {
        text: "Care sunt <strong>trăsăturile generale</strong> care definesc <strong>educația formală</strong> ca formă organizată a educației?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Influențe educative intenționate și sistematice</strong><span class='tooltip-box'>Educația formală se referă la totalitatea influențelor educative concepute deliberat și aplicate în mod organizat, în cadrul unor instituții specializate precum școala și universitatea.</span></span>",
          "<span class='tip'><strong>Desfășurare în instituții specializate</strong><span class='tooltip-box'>Procesul educațional formal are loc în cadre instituționalizate, cu rol explicit în formarea personalității umane.</span></span>",
          "<span class='tip'><strong>Obiective clar formulate și continuitate</strong><span class='tooltip-box'>Educația și instruirea se bazează pe obiective explicite, iar procesul educațional se caracterizează prin intensitate, concentrare a informațiilor și continuitate.</span></span>",
          "<span class='tip'><strong>Învățare spontană și neorganizată</strong><span class='tooltip-box'>Distractor: această caracteristică aparține educației informale.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Cum este <strong>organizat și realizat</strong> procesul educațional în cadrul <strong>educației formale</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Pregătire conștientă și eșalonată</strong><span class='tooltip-box'>Procesul educațional este elaborat planificat și progresiv, fiind asigurat de un corp de specialiști pregătiți în acest sens.</span></span>",
          "<span class='tip'><strong>Selecția și structurarea riguroasă a informațiilor</strong><span class='tooltip-box'>Conținuturile sunt atent alese și organizate, caracterizându-se prin densitate și rigoare științifică.</span></span>",
          "<span class='tip'><strong>Evaluare organizată și instituționalizată</strong><span class='tooltip-box'>Educația formală presupune acțiuni de evaluare desfășurate în forme, moduri și etape bine stabilite, la nivelul cadrului didactic și al instituției.</span></span>",
          "<span class='tip'><strong>Lipsa evaluării și a responsabilității instituționale</strong><span class='tooltip-box'>Distractor: evaluarea este o componentă esențială a educației formale.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce <strong>oferă educația formală</strong> individului?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Introducerea în munca intelectuală organizată</strong><span class='tooltip-box'>Educația formală inițiază individul în activitatea intelectuală sistematică, specifică învățării academice.</span></span>",
          "<span class='tip'><strong>Posibilitatea de a formaliza cunoștințele</strong><span class='tooltip-box'>Cunoștințele dobândite sunt structurate, conceptualizate și validate în mod oficial.</span></span>",
          "<span class='tip'><strong>Recunoașterea socială a achizițiilor individuale</strong><span class='tooltip-box'>Rezultatele învățării sunt certificate și recunoscute la nivel social.</span></span>",
          "<span class='tip'><strong>Formalizarea și concretizarea achizițiilor din alte modalități educative</strong><span class='tooltip-box'>Educația formală permite integrarea și validarea achizițiilor provenite din educația nonformală sau informală.</span></span>",
          "<span class='tip'><strong>Exclusiv dezvoltare spontană, fără structurare</strong><span class='tooltip-box'>Distractor: dezvoltarea spontană nu este specifică educației formale.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },
      {
        text: "În care dintre următoarele <strong>exemple concrete</strong> se produce <strong>educația formală</strong>?",
        options: [
          "<span class='tip'><strong>Activitatea de predare în cadrul unei școli sau universități</strong><span class='tooltip-box'>Educația formală se realizează în instituții specializate, prin programe oficiale, cadre didactice calificate, obiective clar formulate și evaluare instituționalizată.<br><br><strong>Exemplu:</strong> o lecție de matematică desfășurată la clasă, urmată de evaluare prin teste sau examene.</span></span>",
          "<span class='tip'><strong>Participarea spontană la activități culturale sau discuții informale între colegi</strong><span class='tooltip-box'>Distractor: aceste situații țin de educația informală, lipsită de structurare instituțională.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care sunt <strong>beneficiile educației formale</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Asimilarea sistematică și riguroasă a cunoștințelor</strong><span class='tooltip-box'>Educația formală permite organizarea logică a conținuturilor, continuitate și rigoare științifică în formarea intelectuală.</span></span>",
          "<span class='tip'><strong>Recunoașterea socială a achizițiilor individuale</strong><span class='tooltip-box'>Rezultatele învățării sunt validate prin evaluări, note, diplome și certificări oficiale.</span></span>",
          "<span class='tip'><strong>Dezvoltarea capacităților, aptitudinilor și atitudinilor necesare inserției sociale</strong><span class='tooltip-box'>Educația formală facilitează integrarea individului în societate prin formarea competențelor de bază.</span></span>",
          "<span class='tip'><strong>Învățarea exclusiv spontană și neorganizată</strong><span class='tooltip-box'>Distractor: acest tip de învățare nu caracterizează educația formală.</span></span>",
        ],
        answer: [0, 1, 2],
      },
      {
        text: "Care sunt <strong>limitările educației formale</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Centrarea pe performanțele înscrise în programe rigide</strong><span class='tooltip-box'>Programele stricte pot lăsa puțin loc adaptării, creativității și imprevizibilului.</span></span>",
          "<span class='tip'><strong>Tendința de îngurgitare a cunoștințelor</strong><span class='tooltip-box'>Accentul excesiv pe acumulare poate diminua înțelegerea profundă și aplicarea cunoștințelor.</span></span>",
          "<span class='tip'><strong>Predispoziția către rutină și monotonie</strong><span class='tooltip-box'>Standardizarea și repetitivitatea pot reduce motivația elevilor.</span></span>",
          "<span class='tip'><strong>Validarea socială și instituțională a rezultatelor școlare</strong><span class='tooltip-box'>Distractor: aceasta este un beneficiu, nu o limitare.</span></span>",
        ],
        answer: [0, 1, 2],
      },
    ],
  },
  {
    id: "fped-u2-q2",
    title: "Educația nonformală",
    questions: [
      {
        text: "De ce <strong>spațiul fizic</strong> nu este un criteriu absolut pentru delimitarea <strong>educației nonformale</strong>?",
        options: [
          "<span class='tip'><strong>Pentru că educația nonformală este definită prin modul de organizare, nu prin loc</strong><span class='tooltip-box'>O activitate poate avea caracter nonformal chiar dacă se desfășoară în sala de clasă, atunci când nu face parte din curriculumul formal, nu este obligatorie și nu presupune evaluare instituționalizată.<br><br><strong>Exemplu:</strong> activități în pauze, ateliere tematice, consiliere, ședințe cu părinții cu componentă formativă.</span></span>",
          "<span class='tip'><strong>Pentru că educația nonformală se desfășoară exclusiv în afara școlii</strong><span class='tooltip-box'>Distractor: educația nonformală poate avea loc și în spațiul școlii, inclusiv în sala de clasă.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Cum poate fi <strong>definită educația nonformală</strong> din perspectiva cadrului în care se desfășoară?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Influențe educative desfășurate în afara lecțiilor formale</strong><span class='tooltip-box'>Educația nonformală include activități extrașcolare (în afara școlii), parașcolare (în școală, dar în afara orelor de curs) și perișcolare (în jurul școlii), având caracter opțional, flexibil și formativ.</span></span>",
          "<span class='tip'><strong>Realitate educațională mai puțin formalizată</strong><span class='tooltip-box'>Termenul „nonformal” desemnează o educație flexibilă, neinstituționalizată strict, dar care produce efecte formative reale.</span></span>",
          "<span class='tip'><strong>Proces educativ rigid, standardizat și evaluat instituțional</strong><span class='tooltip-box'>Distractor: aceste trăsături definesc educația formală.</span></span>",
        ],
        answer: [0, 1],
      },
      {
        text: "Unde se poate <strong>organiza educația nonformală</strong> din perspectiva spațiului pedagogic?",
        multiple: true,
        options: [
          "<span class='tip'><strong>În școală, în afara programului formal</strong><span class='tooltip-box'>Cercuri pe discipline, activități interdisciplinare sau transdisciplinare, dezbateri tematice, ansambluri sportive sau artistice, olimpiade și competiții.</span></span>",
          "<span class='tip'><strong>În afara școlii, în instituții sau organizații specializate</strong><span class='tooltip-box'>Cluburi, tabere, centre de petrecere a timpului liber, biblioteci școlare sau universitare, universități populare.</span></span>",
          "<span class='tip'><strong>Exclusiv în cadrul orelor obligatorii de curs</strong><span class='tooltip-box'>Distractor: aceasta este o trăsătură a educației formale.</span></span>",
        ],
        answer: [0, 1],
      },
      {
        text: "În ce condiții poate fi considerată o <strong>ședință cu părinții</strong> o formă de <strong>educație nonformală</strong>?",
        options: [
          "<span class='tip'><strong>Atunci când este concepută ca activitate educativă de formare a părinților sau a relației școală–familie</strong><span class='tooltip-box'>Ședința capătă statut de educație nonformală atunci când depășește funcția administrativă și urmărește intenționat formarea competențelor educative ale părinților sau susținerea dezvoltării copilului.<br><br>Apare o intenție formativă clară, conținut educativ și efect asupra atitudinilor, comportamentelor sau deciziilor educative ale familiei.<br><br><strong>Exemple:</strong> prezentarea și discutarea stilurilor parentale, prevenirea comportamentelor de risc, educație pentru sănătate, sprijin emoțional al copilului, orientare școlară sau vocațională.</span></span>",
          "<span class='tip'><strong>Ori de câte ori se desfășoară în sala de clasă, indiferent de conținut</strong><span class='tooltip-box'>Distractor: spațiul fizic nu este criteriu definitoriu pentru educația nonformală.</span></span>",
          "<span class='tip'><strong>Atunci când are exclusiv rol informativ sau administrativ</strong><span class='tooltip-box'>Distractor: comunicarea notelor, a regulilor sau a programului școlii nu constituie educație, deoarece lipsește intenția formativă.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce <strong>caracteristici specifice</strong> au acțiunile educației nonformale?",
        options: [
          "<span class='tip'><strong>Flexibilitate și adaptare la interesele individuale</strong><span class='tooltip-box'>Activitățile nonformale răspund intereselor variate ale elevilor și permit ajustări rapide ale conținuturilor și metodelor.</span></span>",
          "<span class='tip'><strong>Transmiterea uniformă a acelorași conținuturi tuturor participanților</strong><span class='tooltip-box'>Distractor: uniformizarea este specifică educației formale.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care sunt <strong>obiectivele educației nonformale</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Alfabetizarea</strong><span class='tooltip-box'>Educația nonformală poate contribui la reducerea analfabetismului în rândul grupurilor defavorizate.</span></span>",
          "<span class='tip'><strong>Desăvârșirea profesională sau inițierea într-o nouă activitate</strong><span class='tooltip-box'>Educația nonformală sprijină formarea continuă și reconversia profesională.</span></span>",
          "<span class='tip'><strong>Oferirea unei educații pentru sănătate și pentru timpul liber</strong><span class='tooltip-box'>Include activități de prevenție, educație pentru stil de viață sănătos și utilizarea constructivă a timpului liber.</span></span>",
          "<span class='tip'><strong>Ajutarea indivizilor în folosirea eficientă a resurselor locale sau personale</strong><span class='tooltip-box'>Educația nonformală valorifică resursele existente în comunitate.</span></span>",
          "<span class='tip'><strong>Susținerea dezvoltării unor sectoare precum comerțul, agricultura, serviciile sau industria</strong><span class='tooltip-box'>Educația nonformală contribuie la dezvoltarea economică și socială.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4],
      },

      {
        text: "Care este <strong>un risc</strong> asociat educației nonformale?",
        options: [
          "<span class='tip'><strong>Deplasarea accentului de la valoarea formativă spre derizoriu și divertisment facil</strong><span class='tooltip-box'>Educația nonformală poate deveni problematică atunci când nu este corelată cu educația formală și nu este coordonată de persoane cu competență pedagogică.<br><br>În aceste situații, conținuturile culturale, științifice sau artistice pot fi simplificate excesiv, golite de semnificație și transformate în consum facil, fără profunzime formativă.<br><br><strong>Exemplu:</strong> activități prezentate drept „educative” care urmăresc doar divertismentul, folosesc informații superficiale sau promovează pseudo-cultură în locul dezvoltării intelectuale și morale.</span></span>",
          "<span class='tip'><strong>Evaluarea excesivă și rigidă prin note și examene standardizate</strong><span class='tooltip-box'>Distractor: evaluarea formalizată este specifică educației formale, nu celei nonformale.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "În ce contexte se manifestă <strong>influențe pozitive</strong> ale educației nonformale?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Cercuri, concursuri și olimpiade școlare</strong><span class='tooltip-box'>Inițiate de școală sau de organizații de copii și tineret, cu rol formativ.</span></span>",
          "<span class='tip'><strong>Activități coordonate de profesioniști</strong><span class='tooltip-box'>Profesori, tehnicieni, cercetători care acționează ca animatori sau modelatori.</span></span>",
          "<span class='tip'><strong>Activități fără coordonare sau finalitate educativă</strong><span class='tooltip-box'>Distractor: lipsa intenției formative exclude educația nonformală.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Care sunt <strong>exemple de educație nonformală mediată</strong>, adică realizată prin <strong>mijloace de comunicare în masă</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Emisiuni radio și televiziune cu conținut educativ</strong><span class='tooltip-box'>Educația nonformală este numită „mediată” atunci când nu presupune interacțiune directă față în față, ci se realizează prin media precum radioul, televiziunea sau mediul digital.<br><br>Aceste emisiuni sunt structurate, au o intenție educativă clară și se adresează explicit elevilor sau publicului larg.<br><br><strong>Exemplu:</strong> programe educative televizate, lecții difuzate la radio sau TV.</span></span>",
          "<span class='tip'><strong>Reviste și platforme educaționale destinate copiilor și elevilor</strong><span class='tooltip-box'>Publicațiile și platformele digitale devin forme de educație nonformală mediată atunci când transmit conținut educativ organizat, accesibil în afara cadrului școlar formal și fără evaluare instituționalizată.</span></span>",
          "<span class='tip'><strong>Manualele școlare obligatorii utilizate în procesul de predare</strong><span class='tooltip-box'>Distractor: manualele sunt instrumente ale educației formale, chiar dacă sunt suporturi mediate.</span></span>",
        ],
        answer: [0, 1],
      },
      {
        text: "Cum este caracterizat <strong>raportul dintre educația nonformală și educația formală</strong>?",
        options: [
          "<span class='tip'><strong>Raport de complementaritate</strong><span class='tooltip-box'>Cele două forme se completează atât prin conținuturile vehiculate, cât și prin modalitățile și formele de realizare.</span></span>",
          "<span class='tip'><strong>Raport de substituire totală</strong><span class='tooltip-box'>Distractor: educația nonformală nu înlocuiește educația formală.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce <strong>oferă educația nonformală</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Răspuns adecvat la necesitățile concrete de acțiune</strong><span class='tooltip-box'>Educația nonformală pornește de la situații reale, probleme practice și nevoi imediate ale educaților, fiind orientată spre aplicabilitate.</span></span>",
          "<span class='tip'><strong>Abstractizarea, ca formă de extragere a cunoștințelor generale din experiențe concrete</strong><span class='tooltip-box'>În educația nonformală, generalizarea și conceptualizarea apar ca rezultat al practicii, nu ca punct de plecare teoretic.</span></span>",
          "<span class='tip'><strong>Facilitarea accesului la cunoaștere pornind de la interesele și nevoile educaților</strong><span class='tooltip-box'>Accentul este pus pe relevanță, motivație și implicare activă, nu pe transmiterea rigidă de conținuturi.</span></span>",
          "<span class='tip'><strong>Redefinirea rolului profesorului ca animator, ghid sau modelator al învățării</strong><span class='tooltip-box'>Profesorul nu mai este unicul deținător al cunoașterii, ci facilitează învățarea prin experiență, cooperare și explorare.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },
    ],
  },
  {
    id: "fped-u2-q3",
    title: "Educația informală",
    questions: [
      {
        text: "Cum poate fi <strong>definită educația informală</strong> din perspectiva naturii informațiilor implicate?",
        options: [
          "<span class='tip'><strong>Totalitatea informațiilor neintenționate, difuze și nesistematizate pedagogic</strong><span class='tooltip-box'>Educația informală include informații voluminoase, eterogene și neorganizate pedagogic, cu care individul intră în contact în viața cotidiană, fără intenție educativă explicită.</span></span>",
          "<span class='tip'><strong>Ansamblul influențelor educative planificate și structurate curricular</strong><span class='tooltip-box'>Distractor: această definiție aparține educației formale.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum se raportează <strong>educația informală</strong> la educația formală din perspectiva duratei și conținutului?",
        options: [
          "<span class='tip'><strong>Precede și depășește educația formală ca durată și conținut</strong><span class='tooltip-box'>Educația informală începe înaintea școlarizării și continuă pe tot parcursul vieții, iar cele mai semnificative mesaje informale provin din mass-media.</span></span>",
          "<span class='tip'><strong>Este limitată exclusiv la perioada școlarizării</strong><span class='tooltip-box'>Distractor: educația informală nu este condiționată de instituția școlii.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "În ce condiții o <strong>informație obținută prin mass-media</strong> devine cunoaștere funcțională?",
        options: [
          "<span class='tip'><strong>Atunci când este integrată, conectată și semnificată valoric</strong><span class='tooltip-box'>Informația informală devine cunoaștere atunci când este corelată cu sistemul de reprezentări și cunoștințe anterioare ale individului.</span></span>",
          "<span class='tip'><strong>Prin simpla expunere repetată la mesaj</strong><span class='tooltip-box'>Distractor: expunerea pasivă nu garantează transformarea informației în cunoaștere.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce caracterizează <strong>învățarea în contextul educației informale</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Inițiativa învățării revine individului</strong><span class='tooltip-box'>Învățarea informală este auto inițiată și dependentă de motivația personală.</span></span>",
          "<span class='tip'><strong>Caracter voluntar al educației</strong><span class='tooltip-box'>Nu există obligație curriculară sau constrângere instituțională.</span></span>",
          "<span class='tip'><strong>Evaluarea se face prin competență practică</strong><span class='tooltip-box'>Succesul este dat de capacitatea de a face față situațiilor reale, nu de note sau examene.</span></span>",
          "<span class='tip'><strong>Evaluare standardizată prin teste și calificative</strong><span class='tooltip-box'>Distractor: această formă de evaluare aparține educației formale.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce <strong>oferă educația informală</strong> individului?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Sensibilizare față de mediul înconjurător</strong><span class='tooltip-box'>Individul devine atent la realitatea socială și culturală în care trăiește.</span></span>",
          "<span class='tip'><strong>Stimularea interesului pentru anumite domenii</strong><span class='tooltip-box'>Interesul poate apărea spontan, din contactul cu informații variate.</span></span>",
          "<span class='tip'><strong>Trecerea de la interes de moment la integrare cognitivă mai largă</strong><span class='tooltip-box'>Educația informală poate constitui punctul de plecare pentru învățări mai profunde.</span></span>",
          "<span class='tip'><strong>Explorare personală fără obligații rigide</strong><span class='tooltip-box'>Individul învață liber, fără prescripții ferme.</span></span>",
          "<span class='tip'><strong>Gestionarea propriului proces de formare</strong><span class='tooltip-box'>Autonomia este o caracteristică centrală a educației informale.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4],
      },

      {
        text: "Care sunt <strong>sursele principale ale influențelor educației informale</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Mediile sociale nestructurate pedagogic</strong><span class='tooltip-box'>Familia, comunitatea locală, grupul de prieteni, strada sau cartierul sunt medii care influențează educativ individul fără a avea obiective educaționale explicite, conținuturi selectate sau metode pedagogice organizate.</span></span>",
          "<span class='tip'><strong>Mass-media generală fără finalitate educativă explicită</strong><span class='tooltip-box'>Radio, televiziune, presă scrisă sau rețele informaționale care transmit mesaje cu impact educativ implicit, dar fără intenție pedagogică organizată.</span></span>",
          "<span class='tip'><strong>Mass-media cu scop pedagogic explicit</strong><span class='tooltip-box'>Distractor: aceste forme (radio-școală, televiziune școlară) aparțin educației nonformale.</span></span>",
        ],
        answer: [0, 1],
      },
      {
        text: "Cum se pot <strong>genera influențe educative informale spontane</strong> în comunicarea pedagogică, din modul diferit în care elevii receptează mesajul?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Prin contextul în care are loc comunicarea pedagogică</strong><span class='tooltip-box'>Spațiul, timpul, climatul clasei și stilul socioafectiv al relației profesor–elev pot transmite mesaje neintenționate care influențează atitudini și percepții.<br><br><strong>Exemplu:</strong> o atmosferă tensionată poate asocia disciplina cu stresul.</span></span>",
          "<span class='tip'><strong>Prin comportamentul verbal și nonverbal al profesorului</strong><span class='tooltip-box'>Tonul vocii, gesturile, mimica sau reacțiile spontane pot transmite mesaje informale diferite de conținutul intenționat.<br><br><strong>Exemplu:</strong> ironia sau nerăbdarea pot genera respingere față de disciplină.</span></span>",
          "<span class='tip'><strong>Prin modul în care elevii interpretează mesajul în funcție de disponibilitățile lor cognitive și emoționale</strong><span class='tooltip-box'>Aceeași informație poate produce influențe informale diferite în funcție de motivație, atenție, anxietate sau interes personal.<br><br><strong>Exemple:</strong> un elev anxios poate asocia conținutul cu teama, iar unul curios poate dezvolta un interes profund, neprevăzut de profesor.</span></span>",
          "<span class='tip'><strong>Prin metodologia utilizată, raportată sau nu la specificul clasei</strong><span class='tooltip-box'>Alegerea sau neadaptarea metodei didactice poate genera mesaje informale despre valoarea elevilor sau a conținutului.<br><br><strong>Exemplu:</strong> metode prea dificile pot transmite implicit ideea de eșec sau inutilitate.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },
    ],
  },
  {
    id: "fped-u2-q4",
    title: "Comparație între educația formală, nonformală și informală",
    questions: [
      {
        text: "Educația formală este organizată instituțional și curricular. <strong>Cum se raportează educația nonformală și cea informală la acest criteriu?</strong>",
        options: [
          "<span class='tip'><strong>Educația nonformală este organizată, dar fără curriculum obligatoriu, iar educația informală nu este organizată pedagogic</strong><span class='tooltip-box'>Nonformalul are structură flexibilă și intenție educativă, dar nu curriculum oficial. Informalul apare spontan, fără organizare pedagogică.</span></span>",
          "<span class='tip'><strong>Ambele sunt organizate strict prin programe și planuri de învățământ</strong><span class='tooltip-box'>Distractor: această caracteristică aparține educației formale.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Educația formală se desfășoară în cadrul lecțiilor și orelor de curs. <strong>Cum se raportează celelalte forme la acest aspect?</strong>",
        options: [
          "<span class='tip'><strong>Educația nonformală se desfășoară în afara lecțiilor formale, iar educația informală în contexte cotidiene diverse</strong><span class='tooltip-box'>Nonformalul are loc extra, para sau perișcolar, iar informalul apare în viața de zi cu zi, fără delimitare temporală clară.</span></span>",
          "<span class='tip'><strong>Ambele se desfășoară exclusiv în timpul orelor de curs</strong><span class='tooltip-box'>Distractor: contrazice definiția nonformalului și informalului.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Educația formală presupune evaluare standardizată. <strong>Cum diferă educația nonformală și informală din perspectiva evaluării?</strong>",
        multiple: true,
        options: [
          "<span class='tip'><strong>Educația nonformală utilizează evaluări flexibile sau feedback</strong><span class='tooltip-box'>Evaluarea este orientativă, descriptivă sau practică.</span></span>",
          "<span class='tip'><strong>Educația informală se validează prin competența practică</strong><span class='tooltip-box'>Succesul este dat de capacitatea de a face față situațiilor reale.</span></span>",
          "<span class='tip'><strong>Ambele folosesc note și examene standardizate</strong><span class='tooltip-box'>Distractor: acestea aparțin educației formale.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Educația formală presupune conținuturi selectate și organizate pedagogic. <strong>Cum se raportează celelalte forme?</strong>",
        multiple: true,
        options: [
          "<span class='tip'><strong>Educația nonformală selectează conținuturi în funcție de interesele participanților</strong><span class='tooltip-box'>Conținuturile sunt adaptabile și contextuale.</span></span>",
          "<span class='tip'><strong>Educația informală implică informații neintenționate și nesistematizate</strong><span class='tooltip-box'>Informațiile nu sunt organizate pedagogic.</span></span>",
          "<span class='tip'><strong>Ambele folosesc manuale și programe oficiale</strong><span class='tooltip-box'>Distractor: acestea definesc educația formală.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Educația formală este obligatorie într-o anumită etapă a vieții. <strong>Cum se raportează educația nonformală și informală?</strong>",
        options: [
          "<span class='tip'><strong>Educația nonformală și informală au caracter voluntar</strong><span class='tooltip-box'>Participarea depinde de interesul și motivația individului.</span></span>",
          "<span class='tip'><strong>Ambele sunt obligatorii prin lege</strong><span class='tooltip-box'>Distractor: obligativitatea este specifică educației formale.</span></span>",
        ],
        answer: 0,
      },

      /* SITUAȚII PARTICULARE */

      {
        text: "Un elev participă, după ore, la un club de robotică organizat de școală, fără note sau examene. <strong>Ce tip de educație este?</strong>",
        options: [
          "<span class='tip'><strong>Educație nonformală</strong><span class='tooltip-box'>Activitate parașcolară, organizată, cu intenție educativă, dar fără curriculum formal.</span></span>",
          "<span class='tip'><strong>Educație informală</strong><span class='tooltip-box'>Distractor: activitatea este organizată intenționat.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Un copil învață să gătească observând și imitând membrii familiei. <strong>Ce formă de educație este implicată?</strong>",
        options: [
          "<span class='tip'><strong>Educație informală</strong><span class='tooltip-box'>Învățare spontană, fără intenție pedagogică explicită.</span></span>",
          "<span class='tip'><strong>Educație nonformală</strong><span class='tooltip-box'>Distractor: nu există organizare educativă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Un profesor organizează, în pauză, un atelier de discuții despre gestionarea emoțiilor. <strong>Ce tip de educație este?</strong>",
        options: [
          "<span class='tip'><strong>Educație nonformală</strong><span class='tooltip-box'>Activitate organizată, voluntară, în afara lecțiilor formale.</span></span>",
          "<span class='tip'><strong>Educație formală</strong><span class='tooltip-box'>Distractor: nu face parte din curriculum.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Un adolescent își formează opinii despre lume urmărind conținut variat pe rețelele sociale. <strong>Ce tip de educație predomină?</strong>",
        options: [
          "<span class='tip'><strong>Educație informală</strong><span class='tooltip-box'>Predomină educația informală deoarece influențele provin din mass-media generală, fără a exista un cadru educativ organizat extern.<br><br>Chiar dacă adolescentul este selectiv, consecvent sau foarte organizat în modul personal de a urmări și analiza conținutul, procesul rămâne informal atâta timp cât sursele nu sunt concepute ca programe educative și nu există un formator, curriculum sau structură pedagogică explicită.</span></span>",
          "<span class='tip'><strong>Educație nonformală</strong><span class='tooltip-box'>Distractor: educația nonformală presupune o intenție educativă organizată extern, prin programe, activități sau produse media concepute explicit pentru educație, nu doar un demers individual de informare.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "O școală organizează o tabără educativă tematică, cu activități planificate, dar fără evaluare formală. <strong>Ce formă de educație este implicată?</strong>",
        options: [
          "<span class='tip'><strong>Educație nonformală</strong><span class='tooltip-box'>Activitate extrașcolară, organizată, cu scop educativ.</span></span>",
          "<span class='tip'><strong>Educație informală</strong><span class='tooltip-box'>Distractor: activitatea este planificată și intenționată.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q5",
    title: "Utilitatea integrării educației formale, nonformale și informale",
    questions: [
      {
        text: "De ce este necesară <strong>integrarea celor trei forme ale educației</strong> pentru a răspunde situațiilor și nevoilor complexe?",
        options: [
          "<span class='tip'><strong>Pentru că fiecare formă acoperă dimensiuni diferite ale formării umane</strong><span class='tooltip-box'>Educația formală oferă structură și rigoare, nonformală aduce flexibilitate și adaptare, iar informală conectează învățarea cu viața reală.</span></span>",
          "<span class='tip'><strong>Pentru a înlocui educația formală cu forme mai flexibile</strong><span class='tooltip-box'>Distractor: integrarea nu presupune substituire, ci complementaritate.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum contribuie integrarea celor trei forme la <strong>conștientizarea situațiilor noi pentru individ</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Educația informală expune individul la contexte noi și neprevăzute</strong><span class='tooltip-box'>Viața cotidiană, experiențele directe și mass-media aduc situații inedite, adesea fără intenție educativă.</span></span>",
          "<span class='tip'><strong>Educația nonformală oferă cadre de reflecție și clarificare</strong><span class='tooltip-box'>Atelierele, cluburile sau dezbaterile permit discutarea și înțelegerea situațiilor noi apărute în viața reală.</span></span>",
          "<span class='tip'><strong>Educația formală conceptualizează și explică situațiile noi prin instrumente teoretice</strong><span class='tooltip-box'>Concepte, modele și explicații sistematice ajută individul să înțeleagă situații noi și complexe.</span></span>",
          "<span class='tip'><strong>Educația formală ignoră situațiile noi apărute în experiența de viață</strong><span class='tooltip-box'>Distractor: educația formală poate integra situații noi prin conținuturi, concepte și analiză teoretică.</span></span>",
        ],
        answer: [0, 1, 2],
      },
      {
        text: "În ce mod integrarea educației formale, nonformale și informale favorizează <strong>o mai bună conștientizare a nevoilor individuale și colective</strong>?",
        options: [
          "<span class='tip'><strong>Prin corelarea experiențelor personale cu analiza pedagogică și socială</strong><span class='tooltip-box'>Educația informală face vizibile nevoi reale trăite de indivizi în viața cotidiană (dificultăți, interese, probleme sociale). Educația nonformală creează spații de dialog, reflecție și clarificare a acestor nevoi în grupuri sau comunități. Educația formală oferă concepte, cadre teoretice și explicații sistematice care permit înțelegerea lor la nivel individual și colectiv.</span></span>",
          "<span class='tip'><strong>Prin standardizarea tuturor experiențelor de învățare</strong><span class='tooltip-box'>Distractor: standardizarea uniformizează experiențele și poate ascunde diversitatea nevoilor reale ale indivizilor și grupurilor.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Cum ajută integrarea celor trei forme ale educației la <strong>identificarea situațiilor de blocaj</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Educația informală semnalează blocaje reale trăite de individ</strong><span class='tooltip-box'>Blocajele apar în experiențe concrete de viață, fără a fi formulate inițial ca „probleme educaționale”.<br><br><strong>Exemple:</strong> dificultăți de adaptare socială, abandon școlar latent, lipsa motivației, conflicte familiale sau presiuni din mediul online.</span></span>",
          "<span class='tip'><strong>Educația nonformală permite abordări alternative și experimentale</strong><span class='tooltip-box'>În cadre flexibile se pot testa soluții care nu sunt posibile imediat în școala formală.<br><br><strong>Exemple:</strong> ateliere de dezvoltare personală, cluburi de discuții, activități de tip mentoring, simulări sau jocuri de rol pentru depășirea blocajelor.</span></span>",
          "<span class='tip'><strong>Educația formală oferă instrumente de analiză și rezolvare</strong><span class='tooltip-box'>Prin concepte, modele și metode, educația formală ajută la înțelegerea cauzelor și mecanismelor blocajului.<br><br><strong>Exemple:</strong> analiza teoretică a eșecului școlar, concepte psihopedagogice despre motivație, strategii didactice de remediere.</span></span>",
          "<span class='tip'><strong>Educația formală elimină automat situațiile de blocaj prin curriculum</strong><span class='tooltip-box'>Distractor: existența unui curriculum nu garantează dispariția blocajelor; acestea devin vizibile și abordabile tocmai prin integrarea cu nonformalul și informalul.</span></span>",
        ],
        answer: [0, 1, 2],
      },
      {
        text: "În contextul integrării educației formale, nonformale și informale, <strong>de ce se îmbunătățește formarea formatorilor</strong>?",
        options: [
          "<span class='tip'><strong>Pentru că formatorii sunt puși în situația de a asuma roluri pedagogice variate</strong><span class='tooltip-box'>Integrarea formelor educației îl determină pe profesor să depășească rolul exclusiv de transmitere a cunoștințelor și să acționeze ca animator al învățării, facilitator al reflecției, mediator cultural sau consilier educațional, ceea ce contribuie direct la dezvoltarea sa profesională.</span></span>",
          "<span class='tip'><strong>Pentru că formatorii nu mai au nevoie de formare continuă</strong><span class='tooltip-box'>Distractor: integrarea formelor educației crește complexitatea rolului didactic și, implicit, nevoia de perfecționare profesională.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Cum sprijină integrarea educației formale, nonformale și informale <strong>autonomizarea celui educat</strong>?",
        options: [
          "<span class='tip'><strong>Prin trecerea progresivă de la ghidaj extern la auto gestionarea propriei formări</strong><span class='tooltip-box'>Educația formală oferă structuri, repere și instrumente de bază necesare învățării. Educația nonformală creează contexte flexibile în care individul își exersează inițiativa, alegerile și responsabilitatea. Educația informală consolidează autonomia prin aplicarea spontană a achizițiilor în situații reale de viață, fără control sau prescripție externă.</span></span>",
          "<span class='tip'><strong>Prin menținerea unei dependențe constante față de profesor și instituție</strong><span class='tooltip-box'>Distractor: integrarea formelor educației urmărește diminuarea dependenței și dezvoltarea capacității de auto formare.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce aduce <strong>educația nonformală</strong> educației formale atunci când sunt integrate?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Flexibilitate și adaptare la interesele reale ale elevilor</strong><span class='tooltip-box'>Educația nonformală completează educația formală prin adaptarea conținuturilor rigide la interesele, ritmul și nevoile reale ale elevilor, fără a elimina exigențele școlare.<br><br><strong>Exemplu:</strong> un club de lectură sau de știință pornește de la teme din programa școlară, dar le dezvoltă în funcție de curiozitățile și inițiativele elevilor.</span></span>",
          "<span class='tip'><strong>Contextualizarea și aplicarea practică a cunoștințelor</strong><span class='tooltip-box'>Educația nonformală creează contexte concrete în care cunoștințele dobândite formal sunt transferate în situații reale, devenind funcționale și semnificative.<br><br><strong>Exemplu:</strong> după studierea teoretică a ecologiei la clasă, elevii participă la ateliere nonformale sau activități de voluntariat pentru protecția mediului.</span></span>",
          "<span class='tip'><strong>Standardizare curriculară</strong><span class='tooltip-box'>Distractor: standardizarea este caracteristică educației formale și nu reprezintă un aport al educației nonformale.</span></span>",
        ],
        answer: [0, 1],
      },
      {
        text: "Cum poate <strong>educația informală</strong> îmbogăți educația formală și nonformală?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Prin aducerea experiențelor reale și a intereselor personale în procesul educativ</strong><span class='tooltip-box'>Educația informală aduce în școală și în activitățile nonformale situații reale de viață, preocupări autentice și experiențe personale ale elevilor, crescând relevanța și motivația învățării.<br><br><strong>Exemplu:</strong> un elev discută la clasă sau într-un club școlar o problemă întâlnită în viața cotidiană sau în mediul online.</span></span>",
          "<span class='tip'><strong>Prin semnalarea temelor emergente din societate</strong><span class='tooltip-box'>Informalul funcționează ca un „radar social”, aducând în atenție teme noi care nu sunt încă reflectate în curriculum.<br><br><strong>Exemple:</strong> influența rețelelor sociale, probleme de mediu, inteligența artificială, schimbări culturale sau sociale recente.</span></span>",
          "<span class='tip'><strong>Prin înlocuirea cadrului educativ organizat</strong><span class='tooltip-box'>Distractor: educația informală completează și alimentează educația formală și nonformală, dar nu le poate substitui.</span></span>",
        ],
        answer: [0, 1],
      },
      {
        text: "Un elev întâlnește o problemă socială în viața cotidiană, o discută într-un club școlar și o analizează ulterior la clasă <strong>prin concepte și instrumente curriculare</strong>. <strong>Ce demonstrează această situație?</strong>",
        options: [
          "<span class='tip'><strong>Funcționarea integrată a educației informale, nonformale și formale</strong><span class='tooltip-box'>Problema apare inițial în viața cotidiană (educație informală), este discutată și clarificată într-un cadru flexibil și voluntar (educație nonformală), iar devine educație formală doar în momentul în care este analizată sistematic la clasă, folosind concepte, modele explicative sau conținuturi prevăzute de curriculum.<br><br><strong>Exemplu:</strong> o problemă de discriminare discutată într-un club școlar este analizată ulterior la clasă prin concepte din educație civică, sociologie sau istorie.</span></span>",
          "<span class='tip'><strong>Superioritatea unei singure forme de educație</strong><span class='tooltip-box'>Distractor: situația arată complementaritatea și succesiunea funcțională a celor trei forme, nu dominația uneia singure.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "De ce este importantă <strong>conjugarea eforturilor mai multor subsisteme sociale</strong> în educație?",
        options: [
          "<span class='tip'><strong>Pentru că educația depășește școala și implică familie, comunitate și mass-media</strong><span class='tooltip-box'>Educația nu se realizează exclusiv în instituția școlară, ci este rezultatul acțiunii conjugate a mai multor subsisteme sociale.<br><br>Familia transmite valori, atitudini și modele de comportament; comunitatea oferă contexte de viață și experiențe sociale; mass-media influențează percepții, interese și reprezentări ale realității. Integrarea acestor influențe cu educația școlară crește coerența mesajelor educative și reduce contradicțiile dintre ceea ce copilul învață în medii diferite.</span></span>",
          "<span class='tip'><strong>Pentru a transfera responsabilitatea educației exclusiv către familie</strong><span class='tooltip-box'>Distractor: educația este o responsabilitate partajată între școală, familie, comunitate și alte instituții sociale.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q6",
    title:
      "Introducere în educația intelectuală și teoriile dezvoltării cognitive",
    questions: [
      {
        text: "De ce este necesară <strong>educația intelectuală</strong> în formarea individului?",
        options: [
          "<span class='tip'><strong>Pentru dezvoltarea capacităților cognitive și a autonomiei în învățare</strong><span class='tooltip-box'>Educația intelectuală urmărește formarea capacității de a gândi, de a înțelege și de a învăța independent, nu doar acumularea de informații.</span></span>",
          "<span class='tip'><strong>Pentru memorarea unui volum cât mai mare de informații</strong><span class='tooltip-box'>Distractor: memorarea este doar un mijloc, nu finalitatea educației intelectuale.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "De ce există <strong>mai multe teorii ale dezvoltării cognitive</strong>?",
        options: [
          "<span class='tip'><strong>Pentru că dezvoltarea intelectuală este complexă și poate fi explicată din perspective diferite</strong><span class='tooltip-box'>Fiecare teorie surprinde alte mecanisme ale dezvoltării gândirii, biologice, culturale, cognitive sau educaționale.</span></span>",
          "<span class='tip'><strong>Pentru că nu există reguli generale ale învățării</strong><span class='tooltip-box'>Distractor: teoriile pornesc tocmai de la identificarea unor regularități.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce au în comun, la nivel general, <strong>toate teoriile dezvoltării cognitive</strong>?",
        options: [
          "<span class='tip'><strong>Interesul pentru modul în care se formează și se transformă gândirea umană</strong><span class='tooltip-box'>Toate teoriile încearcă să explice cum ajunge individul să cunoască, să înțeleagă și să rezolve probleme.</span></span>",
          "<span class='tip'><strong>Accentul exclusiv pe performanța școlară</strong><span class='tooltip-box'>Distractor: performanța este un efect, nu scopul principal al teoriilor.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum poate fi caracterizată, în linii mari, <strong>perspectiva lui Piaget</strong>?",
        options: [
          "<span class='tip'><strong>Dezvoltarea gândirii are loc în stadii succesive, legate de maturizare și experiență</strong><span class='tooltip-box'>Accentul cade pe structurile cognitive care se modifică progresiv prin interacțiunea cu mediul.</span></span>",
          "<span class='tip'><strong>Învățarea este determinată exclusiv de predare</strong><span class='tooltip-box'>Distractor: Piaget nu reduce dezvoltarea la instruire formală.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce perspectivă generală aduce <strong>teoria lui Bruner</strong> asupra dezvoltării cognitive?",
        options: [
          "<span class='tip'><strong>Rolul culturii și al modurilor diferite de reprezentare a cunoașterii</strong><span class='tooltip-box'>Dezvoltarea intelectuală este influențată de mediul cultural și de felul în care cunoașterea este reprezentată prin acțiuni, imagini și simboluri.</span></span>",
          "<span class='tip'><strong>Ideea că dezvoltarea este independentă de contextul social</strong><span class='tooltip-box'>Distractor: contextul cultural este esențial în această perspectivă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "De ce sunt importante teoriile cognitive pentru <strong>educația intelectuală</strong>?",
        options: [
          "<span class='tip'><strong>Pentru că oferă repere diferite pentru înțelegerea și sprijinirea învățării</strong><span class='tooltip-box'>Ele ajută educatorii să adapteze demersurile educative la modul real în care se dezvoltă gândirea.</span></span>",
          "<span class='tip'><strong>Pentru că oferă o singură rețetă universală de predare</strong><span class='tooltip-box'>Distractor: teoriile nu furnizează rețete unice, ci cadre de interpretare.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q7",
    title: "Teoria psihogenezei operațiilor intelectuale (Jean Piaget)",
    questions: [
      {
        text: "De ce a formulat Jean Piaget <strong>teoria psihogenezei operațiilor intelectuale</strong>?",
        options: [
          "<span class='tip'><strong>Pentru a explica modul în care se dezvoltă gândirea umană de la copilărie la maturitate</strong><span class='tooltip-box'>Piaget a urmărit să explice cum se construiesc structurile cognitive, nu doar ce învață copilul, ci cum ajunge să gândească.</span></span>",
          "<span class='tip'><strong>Pentru a descrie metode de predare școlară</strong><span class='tooltip-box'>Distractor: teoria nu este o metodologie didactică, ci o teorie a dezvoltării cognitive.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce idee centrală susține <strong>teoria lui Piaget</strong> despre dezvoltarea intelectuală?",
        options: [
          "<span class='tip'><strong>Inteligența se dezvoltă treptat, prin stadii succesive de gândire</strong><span class='tooltip-box'>Fiecare stadiu are o structură cognitivă specifică, care condiționează modul în care individul înțelege realitatea.</span></span>",
          "<span class='tip'><strong>Dezvoltarea intelectuală este continuă și uniformă</strong><span class='tooltip-box'>Distractor: Piaget susține existența unor salturi calitative între stadii.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum se realizează <strong>învățarea</strong> în viziunea teoriei psihogenetice?",
        options: [
          "<span class='tip'><strong>Prin interacțiunea dintre asimilare și acomodare</strong><span class='tooltip-box'>Asimilarea presupune integrarea experienței în structurile existente, iar acomodarea modificarea acestora pentru a se adapta la realitate.</span></span>",
          "<span class='tip'><strong>Prin transmiterea directă a informațiilor</strong><span class='tooltip-box'>Distractor: învățarea nu este un proces pasiv în această teorie.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce rol are <strong>experiența</strong> în dezvoltarea cognitivă, conform lui Piaget?",
        options: [
          "<span class='tip'><strong>Experiența este utilizată activ de copil pentru a construi și modifica structurile de gândire</strong><span class='tooltip-box'>În viziunea lui Piaget, copilul nu preia realitatea ca pe o copie fidelă. El interpretează experiențele prin structurile cognitive pe care le are deja (asimilare) și își modifică aceste structuri atunci când experiența nu se potrivește cu ele (acomodare).<br><br><strong>Exemplu:</strong> un copil care crede că toate obiectele plutitoare sunt „jucării” își schimbă această idee după ce experimentează că unele obiecte se scufundă. Experiența produce dezvoltare doar pentru că este gândită, nu doar trăită.</span></span>",
          "<span class='tip'><strong>Experiența determină automat dezvoltarea intelectuală</strong><span class='tooltip-box'>Distractor: simpla expunere la situații sau informații nu duce automat la dezvoltare cognitivă, dacă nu există maturizare și activitate intelectuală.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care dintre următoarele afirmații descriu corect <strong>stadiile dezvoltării cognitive</strong> în teoria psihogenezei operațiilor intelectuale (Piaget)?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Între 1 și 4 ani copilul manifestă o gândire simbolică și preconceptuală</strong><span class='tooltip-box'>În acest stadiu, copilul utilizează simboluri simple (cuvinte, imagini, gesturi) pentru a reprezenta realitatea, fără a opera logic asupra ei.<br><br><strong>Exemple:</strong> jocul de rol (un obiect devine „telefon”), folosirea cuvintelor fără a înțelege relații cauzale stabile, egocentrism cognitiv.</span></span>",
          "<span class='tip'><strong>Între 4 și 8 ani se structurează gândirea intuitiv-imagistică</strong><span class='tooltip-box'>Copilul gândește predominant pe baza imaginilor și a intuiției imediate, fără operații logice reversibile.<br><br><strong>Exemple:</strong> judecarea cantității după aspect (un pahar mai înalt pare să conțină mai mult lichid), dificultăți în conservarea numărului sau volumului.</span></span>",
          "<span class='tip'><strong>Între 8 și 12 ani copilul intră în stadiul operațiilor concrete</strong><span class='tooltip-box'>Apare gândirea logică, dar legată de situații concrete și manipulabile.<br><br><strong>Exemple:</strong> înțelegerea conservării cantității, clasificarea obiectelor după criterii multiple, ordonarea (serierea) după mărime sau greutate.</span></span>",
          "<span class='tip'><strong>Între 12 și 18 ani se formează bazele operațiilor formale</strong><span class='tooltip-box'>Gândirea devine abstractă, ipotetico-deductivă și independentă de suportul concret.<br><br><strong>Exemple:</strong> rezolvarea problemelor teoretice, formularea de ipoteze, utilizarea conceptelor de echivalență, substituție, clasificare abstractă.</span></span>",
          "<span class='tip'><strong>Dezvoltarea cognitivă este identică la toate vârstele, diferențele fiind doar cantitative</strong><span class='tooltip-box'>Distractor: Piaget susține existența unor diferențe calitative între stadii, nu doar acumulări de informații.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },
      {
        text: "De ce este importantă teoria psihogenezei operațiilor intelectuale pentru <strong>educație</strong>?",
        options: [
          "<span class='tip'><strong>Pentru că arată că predarea trebuie adaptată nivelului de dezvoltare cognitivă</strong><span class='tooltip-box'>Conținuturile și cerințele educaționale trebuie corelate cu stadiul de gândire al elevului.</span></span>",
          "<span class='tip'><strong>Pentru că impune aceeași abordare educațională tuturor vârstelor</strong><span class='tooltip-box'>Distractor: teoria subliniază diferențele dintre stadii.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q8",
    title: "Teoria genetic cognitivă și structurală (Jerome Bruner)",
    description:
      "Acest quiz are rol introductiv. Nu urmărește memorarea detaliilor, ci înțelegerea motivului pentru care teoria lui Bruner apare, ce aduce nou față de alte teorii cognitive, ce concepte centrale propune și care sunt limitele ei.",
    questions: [
      {
        text: "De ce apare <strong>teoria genetic cognitivă și structurală</strong> a lui Jerome Bruner?",
        options: [
          "<span class='tip'><strong>Pentru a explica învățarea ca proces dependent de cultură și societate</strong><span class='tooltip-box'>Bruner pornește de la ideea că dezvoltarea intelectuală nu este autonomă, ci se sprijină pe limbaj, simboluri, instrumente culturale și interacțiune socială.</span></span>",
          "<span class='tip'><strong>Pentru a reduce învățarea la simple reflexe comportamentale</strong><span class='tooltip-box'>Distractor: aceasta este perspectiva behavioristă, nu cognitivă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este <strong>ideea centrală</strong> a teoriei lui Bruner privind dezvoltarea cognitivă?",
        options: [
          "<span class='tip'><strong>Dezvoltarea intelectuală este strâns legată de ambianța culturală</strong><span class='tooltip-box'>Societatea oferă mijloacele de reprezentare: limbaj, simboluri, imagini, modele de acțiune.</span></span>",
          "<span class='tip'><strong>Dezvoltarea cognitivă depinde exclusiv de maturizarea biologică</strong><span class='tooltip-box'>Distractor: această idee este respinsă de Bruner.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum descrie Bruner <strong>modalitățile fundamentale de învățare</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Modalitatea activă</strong><span class='tooltip-box'>Cunoașterea se construiește prin acțiune directă asupra mediului.<br><br><strong>Exemplu:</strong> copilul învață echilibrul manipulând obiecte.</span></span>",
          "<span class='tip'><strong>Modalitatea iconică</strong><span class='tooltip-box'>Reprezentarea se face prin imagini și scheme vizuale.<br><br><strong>Exemplu:</strong> diagrame, schițe, hărți conceptuale.</span></span>",
          "<span class='tip'><strong>Modalitatea simbolică</strong><span class='tooltip-box'>Reprezentarea prin limbaj și simboluri permite operarea cu reguli și concepte abstracte.<br><br><strong>Exemplu:</strong> formule matematice, definiții teoretice.</span></span>",
          "<span class='tip'><strong>Modalitatea reflexă automată</strong><span class='tooltip-box'>Distractor: nu face parte din teoria lui Bruner.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce <strong>noutate majoră</strong> aduce teoria lui Bruner față de alte teorii cognitive?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Accentul pe rolul culturii și al limbajului în dezvoltarea gândirii</strong><span class='tooltip-box'>Cunoașterea este mediată simbolic și transmisă cultural.</span></span>",
          "<span class='tip'><strong>Ideea că aceleași conținuturi pot fi învățate la orice vârstă, dacă sunt reprezentate adecvat</strong><span class='tooltip-box'>Această idee stă la baza curriculumului spiralat.</span></span>",
          "<span class='tip'><strong>Negarea importanței experienței directe</strong><span class='tooltip-box'>Distractor: experiența este esențială, mai ales în modalitatea activă.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Cum se reflectă teoria lui Bruner în <strong>practica educațională</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Prin utilizarea progresivă a acțiunii, imaginii și simbolului</strong><span class='tooltip-box'>Predarea pornește de la concret și ajunge la abstract.</span></span>",
          "<span class='tip'><strong>Prin valorizarea învățării școlare sistematice</strong><span class='tooltip-box'>Bruner acordă un rol central educației formale organizate.</span></span>",
          "<span class='tip'><strong>Prin eliminarea completă a structurii curriculare</strong><span class='tooltip-box'>Distractor: Bruner susține structurarea, nu haosul curricular.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Care sunt <strong>limitele</strong> teoriei genetic cognitive și structurale?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Subestimarea diferențelor individuale de ritm și stil cognitiv</strong><span class='tooltip-box'>Nu toți elevii accesează la fel de ușor reprezentarea simbolică.</span></span>",
          "<span class='tip'><strong>Dificultatea aplicării în contexte educaționale foarte eterogene</strong><span class='tooltip-box'>Necesită cadre didactice bine formate și resurse adecvate.</span></span>",
          "<span class='tip'><strong>Negarea rolului mediului cultural</strong><span class='tooltip-box'>Distractor: mediul cultural este central în teorie.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Ce perspectivă generală oferă teoria lui Bruner asupra educației intelectuale?",
        options: [
          "<span class='tip'><strong>Educația este un proces de construire activă, mediat cultural</strong><span class='tooltip-box'>Învățarea presupune acțiune, reprezentare și simbolizare progresivă.</span></span>",
          "<span class='tip'><strong>Educația este un proces de transmitere pasivă de informații</strong><span class='tooltip-box'>Distractor: contrazice fundamentul cognitiv al teoriei.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q9",
    title: "Teoria invatarii cumulativ ierarhice (Gagne)",
    description:
      "Acest quiz clarifica ideea centrala: invatarea depinde de conditii interne si conditii externe, iar invatarea eficienta cere organizarea conditiilor externe tinand cont de cele interne.",
    questions: [
      {
        text: "Care este ideea centrala in <strong>teoria invatarii cumulativ ierarhice</strong> asociata cu Gagne?",
        options: [
          "<span class='tip'><strong>Invatarea depinde de conditii interne si conditii externe</strong><span class='tooltip-box'>Teoria spune ca invatarea nu apare la intamplare. Exista conditii interne (ce aduce persoana) si conditii externe (ce vine din mediu). Rezultatul depinde de potrivirea lor.<br><br><strong>Exemplu:</strong> daca un elev nu are vocabularul necesar (conditie interna), o lectie foarte bine organizata (conditie externa) tot poate esua; invers, chiar daca elevul este motivat, un mediu haotic si neclar poate bloca invatarea.</span></span>",
          "<span class='tip'><strong>Invatarea apare automat daca expunem elevul la informatie suficienta</strong><span class='tooltip-box'>Distractor: expunerea nu garanteaza invatarea; teoria subliniaza rolul conditiilor si al organizarii.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce intelege teoria prin <strong>conditii interne</strong> ale invatarii?",
        options: [
          "<span class='tip'><strong>Capacitatile initiale pe care le poseda subiectul</strong><span class='tooltip-box'>Aici intra ce are deja persoana: baza de cunostinte, deprinderi, disponibilitate de efort, nivel de dezvoltare cognitiva, motivatie si obisnuinte de invatare.<br><br><strong>Exemplu:</strong> pentru a rezolva probleme cu fractii, elevul are nevoie sa stie operatii de baza si sa inteleaga ideea de parte din intreg.</span></span>",
          "<span class='tip'><strong>Regulile si programele impuse din afara, indiferent de elev</strong><span class='tooltip-box'>Distractor: acestea tin de mediul extern, nu de capacitatile initiale ale elevului.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce descrie teoria drept <strong>conditii externe</strong> ale invatarii?",
        options: [
          "<span class='tip'><strong>Factorii din afara persoanei, care trebuie organizati</strong><span class='tooltip-box'>Sunt elemente ale mediului: sarcina, instructiunea, sprijinul, materialele, ordinea pasilor, timpul, feedbackul. Teoria spune ca invatarea necesita organizarea acestor conditii externe, tinand cont de cele interne.<br><br><strong>Exemplu:</strong> profesorul structureaza exercitii de la simplu la complex, ofera exemple rezolvate, apoi cere aplicare ghidata si abia apoi aplicare independenta.</span></span>",
          "<span class='tip'><strong>Talentul innascut, imposibil de influentat prin educatie</strong><span class='tooltip-box'>Distractor: talentul ar intra la interne, iar teoria insista pe organizarea externelor.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce inseamna, practic, ca <strong>invatarea necesita organizarea conditiilor externe tinand cont de cele interne</strong>?",
        options: [
          "<span class='tip'><strong>Se adapteaza predarea la punctul real de plecare al elevului</strong><span class='tooltip-box'>Intai identifici ce stie si ce poate elevul (interne), apoi construiesti mediul de invatare (externe) ca sa sustina pas cu pas progresul.<br><br><strong>Exemplu concret:</strong> la o lectie de ecuatii, daca elevii nu stapanesc operatiile cu numere intregi, incepi cu recapitulare scurta si exercitii de consolidare, apoi introduci ecuatia cu exemple foarte simple, apoi cresti gradual dificultatea.</span></span>",
          "<span class='tip'><strong>Se preda acelasi continut la fel pentru toti, ca sa fie corect</strong><span class='tooltip-box'>Distractor: teoria sugereaza ca aceeasi organizare externa nu functioneaza identic daca internele difera.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este o <strong>noutate utila</strong> a acestei teorii pentru educatia intelectuala?",
        options: [
          "<span class='tip'><strong>Pune accent pe conditii si pe proiectarea invatarii</strong><span class='tooltip-box'>Teoria incurajeaza o gandire de tip: ce lipseste elevului si ce trebuie sa schimb in mediu ca invatarea sa se intample. Este o perspectiva foarte aplicata in proiectarea lectiilor.<br><br><strong>Exemplu:</strong> daca observi ca elevii gresesc constant la acelasi tip de sarcina, nu concluzionezi doar ca nu muncesc, ci ajustezi conditiile externe: mai multe exemple, un pas intermediar, feedback mai rapid, timp mai bine dozat.</span></span>",
          "<span class='tip'><strong>Afirma ca mediul nu conteaza, doar vointa elevului conteaza</strong><span class='tooltip-box'>Distractor: teoria spune exact invers, ca mediul extern trebuie organizat.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este o <strong>limitare</strong> posibila a teoriei, daca este aplicata rigid?",
        options: [
          "<span class='tip'><strong>Risc de a reduce invatarea la o schema prea tehnica</strong><span class='tooltip-box'>Daca interpretezi teoria ca pe o reteta fixa, poti ignora creativitatea, curiozitatea si situatiile neprevazute care pot sustine invatarea reala.<br><br><strong>Exemplu:</strong> intr o discutie vie, elevii aduc exemple personale valoroase. O aplicare rigida ar taia discutia pentru a urma planul exact, pierzand ocazia de clarificare profunda.</span></span>",
          "<span class='tip'><strong>Nu poate fi folosita deloc in scoala</strong><span class='tooltip-box'>Distractor: teoria este tocmai orientata spre invatarea scolara si organizarea ei.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q10",
    title: "Teoria cognitivistă",
    description:
      "Acest quiz introduce perspectiva cognitivistă, care mută accentul de la simpla transmitere a informației la modul în care informația este prelucrată, organizată și utilizată de individ, ținând cont de multiple componente ale funcționării umane.",
    questions: [
      {
        text: "Care este <strong>ideea centrală</strong> a teoriei cognitiviste?",
        options: [
          "<span class='tip'><strong>Învățarea depinde de modul în care informația este prelucrată și procesată</strong><span class='tooltip-box'>Teoria cognitivistă nu se concentrează doar pe ce se învață, ci pe cum se procesează informația: percepere, înțelegere, memorare, organizare și utilizare.<br><br><strong>Exemplu:</strong> doi elevi aud aceeași explicație, dar unul o structurează logic și o leagă de ce știe deja, iar celălalt o memorează mecanic; rezultatele lor vor fi diferite.</span></span>",
          "<span class='tip'><strong>Învățarea este exclusiv rezultatul repetării comportamentelor</strong><span class='tooltip-box'>Distractor: această perspectivă aparține teoriilor comportamentiste.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "De ce acordă teoria cognitivistă atenție <strong>medierii cognitive</strong>?",
        options: [
          "<span class='tip'><strong>Pentru că între stimul și răspuns intervin procese mentale complexe</strong><span class='tooltip-box'>Individul interpretează, filtrează și reorganizează informația în funcție de experiență, emoții, așteptări și structuri cognitive existente.<br><br><strong>Exemplu:</strong> un elev anxios poate înțelege mai greu o explicație, nu din lipsă de inteligență, ci din cauza stării emoționale care interferează cu procesarea cognitivă.</span></span>",
          "<span class='tip'><strong>Pentru că procesele interne nu pot fi influențate educativ</strong><span class='tooltip-box'>Distractor: teoria cognitivistă susține tocmai contrariul.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce tipuri de <strong>componente ale funcționării umane</strong> sunt luate în considerare de teoria cognitivistă?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Procese cognitive</strong><span class='tooltip-box'>Percepția, memoria, gândirea, atenția, rezolvarea de probleme.</span></span>",
          "<span class='tip'><strong>Stări emoționale</strong><span class='tooltip-box'>Emoțiile pot facilita sau bloca procesarea informației.</span></span>",
          "<span class='tip'><strong>Procese biochimice și fiziologice</strong><span class='tooltip-box'>Nivelul de oboseală, stresul sau activarea fiziologică influențează învățarea.</span></span>",
          "<span class='tip'><strong>Doar comportamente observabile</strong><span class='tooltip-box'>Distractor: această reducere nu este specifică cognitivismului.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce sunt <strong>cunoștințele declarative</strong> în viziunea cognitivistă?",
        options: [
          "<span class='tip'><strong>Cunoștințe despre fapte și evenimente, exprimate prin „ce este ceva”</strong><span class='tooltip-box'>Ele sunt ușor verbalizabile și sunt activate prin sarcini de recunoaștere sau reproducere.<br><br><strong>Exemplu:</strong> definiția unui concept, data unui eveniment istoric, enumerarea părților unei plante.</span></span>",
          "<span class='tip'><strong>Cunoștințe despre când și de ce se aplică o acțiune</strong><span class='tooltip-box'>Distractor: acestea sunt cunoștințe condiționale.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce caracterizează <strong>cunoștințele procedurale</strong>?",
        options: [
          "<span class='tip'><strong>Descriu modul de a acționa sau de a face ceva</strong><span class='tooltip-box'>Ele sunt exprimate prin „cum să faci ceva” și sunt legate de algoritmi, deprinderi și utilizarea instrumentelor.<br><br><strong>Exemplu:</strong> pașii de rezolvare a unei ecuații, redactarea unui eseu, folosirea unui aparat de laborator.</span></span>",
          "<span class='tip'><strong>Sunt limitate la memorarea definițiilor</strong><span class='tooltip-box'>Distractor: memorarea ține de declarativ.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este rolul <strong>cunoștințelor condiționale sau strategice</strong>?",
        options: [
          "<span class='tip'><strong>Indică momentul și scopul aplicării unei acțiuni</strong><span class='tooltip-box'>Răspund la întrebările „când?” și „de ce?”, fiind esențiale pentru transferul învățării.<br><br><strong>Exemplu:</strong> elevul știe nu doar cum se aplică o formulă, ci și când este potrivit să o folosească și de ce este eficientă într-un anumit context.</span></span>",
          "<span class='tip'><strong>Se referă exclusiv la acumularea de informații noi</strong><span class='tooltip-box'>Distractor: ele privesc utilizarea și adaptarea cunoștințelor.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este o <strong>contribuție importantă</strong> a teoriei cognitiviste la educația intelectuală?",
        options: [
          "<span class='tip'><strong>Evidențiază rolul diferitelor tipuri de cunoștințe și al metacunoașterii</strong><span class='tooltip-box'>Educația nu urmărește doar acumularea de informații, ci și conștientizarea modului de învățare.<br><br><strong>Exemplu:</strong> elevul învață să își planifice studiul, să verifice ce a înțeles și să corecteze strategii ineficiente.</span></span>",
          "<span class='tip'><strong>Exclude complet influența mediului educativ</strong><span class='tooltip-box'>Distractor: mediul este relevant, dar este analizat prin impactul asupra proceselor cognitive.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce <strong>limitare</strong> poate apărea în aplicarea teoriei cognitiviste?",
        options: [
          "<span class='tip'><strong>Risc de accent excesiv pe procese interne greu de observat</strong><span class='tooltip-box'>Unele procese cognitive sunt dificil de evaluat direct, ceea ce poate îngreuna aplicarea practică dacă nu sunt susținute de metode concrete.<br><br><strong>Exemplu:</strong> un profesor poate presupune că elevii au înțeles strategia, fără să verifice prin sarcini aplicative.</span></span>",
          "<span class='tip'><strong>Imposibilitatea de a fi utilizată în educația școlară</strong><span class='tooltip-box'>Distractor: teoria este larg utilizată în școală.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q11",
    title: "Obiectivele educației intelectuale",
    description:
      "Acest quiz urmărește clarificarea principalelor obiective ale educației intelectuale, evidențiind nu doar acumularea de cunoștințe, ci și formarea proceselor psihice, a deprinderilor de învățare și a unei viziuni integrate asupra cunoașterii.",
    questions: [
      {
        text: "Ce vizează <strong>dezvoltarea și antrenarea capacităților senzoriale</strong> în educația intelectuală?",
        options: [
          "<span class='tip'><strong>Învățarea observării și sesizării aspectelor relevante ale realității</strong><span class='tooltip-box'>Educația intelectuală începe cu formarea capacității de a percepe corect și selectiv informațiile din mediu.<br><br><strong>Exemplu:</strong> elevul învață să observe diferențe fine într-un experiment, într-un text sau într-o hartă, nu doar să privească superficial.</span></span>",
          "<span class='tip'><strong>Stimularea exclusivă a simțurilor fără procesare mentală</strong><span class='tooltip-box'>Distractor: capacitățile senzoriale sunt legate de procese cognitive.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este rolul <strong>consolidării proceselor psihice</strong> în educația intelectuală?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Întărirea atenției, memoriei și gândirii</strong><span class='tooltip-box'>Aceste procese susțin orice act de cunoaștere și permit învățarea eficientă.</span></span>",
          "<span class='tip'><strong>Dezvoltarea limbajului și imaginației</strong><span class='tooltip-box'>Limbajul structurează gândirea, iar imaginația sprijină înțelegerea și creativitatea.</span></span>",
          "<span class='tip'><strong>Excluderea dimensiunii volitive</strong><span class='tooltip-box'>Distractor: voința este esențială pentru efortul intelectual susținut.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "De ce este importantă <strong>respectarea normelor igienice și pedagogice</strong> în activitatea intelectuală?",
        options: [
          "<span class='tip'><strong>Pentru a crea condiții optime de învățare și eficiență intelectuală</strong><span class='tooltip-box'>Factorii precum timpul, spațiul, iluminarea sau pauzele influențează direct randamentul cognitiv.<br><br><strong>Exemplu:</strong> alternarea studiului cu pauze previne oboseala și scade riscul supraîncărcării cognitive.</span></span>",
          "<span class='tip'><strong>Pentru a limita autonomia elevului</strong><span class='tooltip-box'>Distractor: normele susțin, nu restrâng, activitatea intelectuală.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce presupune <strong>cultivarea sentimentelor intelectuale</strong>?",
        options: [
          "<span class='tip'><strong>Dezvoltarea bucuriei de a căuta, investiga și descoperi</strong><span class='tooltip-box'>Educația intelectuală urmărește motivația internă pentru cunoaștere.<br><br><strong>Exemplu:</strong> elevul este curios să afle explicații, nu doar să obțină o notă.</span></span>",
          "<span class='tip'><strong>Neutralizarea completă a emoțiilor</strong><span class='tooltip-box'>Distractor: emoțiile susțin învățarea cognitivă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce obiectiv este atins prin <strong>stăpânirea metodelor și tehnicilor de învățare eficientă</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Creșterea autonomiei în învățare</strong><span class='tooltip-box'>Elevul știe cum să învețe, nu doar ce să învețe.</span></span>",
          "<span class='tip'><strong>Optimizarea memorării și înțelegerii</strong><span class='tooltip-box'>Tehnici precum schemele, rezumatele sau lectura rapidă sporesc eficiența cognitivă.</span></span>",
          "<span class='tip'><strong>Dependenta exclusivă de profesor</strong><span class='tooltip-box'>Distractor: scopul este autoînvățarea.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Ce înseamnă <strong>integrarea, organizarea și reorganizarea cunoștințelor</strong>?",
        options: [
          "<span class='tip'><strong>Construirea unor structuri coerente de cunoaștere</strong><span class='tooltip-box'>Cunoștințele nu rămân izolate, ci sunt conectate și restructurate permanent.<br><br><strong>Exemplu:</strong> elevul corelează noțiuni din biologie, chimie și geografie pentru a înțelege un fenomen ecologic.</span></span>",
          "<span class='tip'><strong>Acumularea mecanică de informații</strong><span class='tooltip-box'>Distractor: acumularea fără organizare este ineficientă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum contribuie educația intelectuală la <strong>formarea unei viziuni integrative și holistice</strong>?",
        options: [
          "<span class='tip'><strong>Prin realizarea de conexiuni între cunoaștere, interese, sentimente și valori</strong><span class='tooltip-box'>Cunoașterea devine parte a identității personale și a modului de raportare la lume.<br><br><strong>Exemplu:</strong> elevul își leagă cunoștințele științifice de valori etice și de interese personale.</span></span>",
          "<span class='tip'><strong>Prin separarea strictă a rațiunii de afectivitate</strong><span class='tooltip-box'>Distractor: perspectiva este una integratoare.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce semnificație are <strong>intelectualizarea persoanei prin stăpânirea instinctelor</strong>?",
        options: [
          "<span class='tip'><strong>Controlul impulsurilor prin rațiune și reflecție</strong><span class='tooltip-box'>Educația intelectuală sprijină autoreglarea comportamentului prin gândire critică.<br><br><strong>Exemplu:</strong> elevul învață să amâne reacțiile impulsive și să analizeze consecințele acțiunilor sale.</span></span>",
          "<span class='tip'><strong>Negarea completă a instinctelor umane</strong><span class='tooltip-box'>Distractor: nu este vorba de negare, ci de control conștient.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q12",
    title: "Introducere în educația morală",
    description:
      "Acest quiz are rol introductiv și urmărește clarificarea sensului educației morale, a finalităților sale majore și a tranziției esențiale de la heteronomie morală la autonomie morală. Accentul cade pe înțelegerea procesului, nu pe memorarea de definiții.",
    questions: [
      {
        text: "De ce este <strong>moralitatea</strong> considerată o caracteristică definitorie a omului?",
        options: [
          "<span class='tip'><strong>Pentru că permite orientarea comportamentului după valori și norme sociale</strong><span class='tooltip-box'>Moralitatea face posibilă conviețuirea socială, reglând relațiile dintre indivizi prin valori precum dreptatea, responsabilitatea sau respectul.<br><br><strong>Exemplu:</strong> respectarea regulilor nu din frică de sancțiune, ci din convingerea că sunt necesare pentru binele comun.</span></span>",
          "<span class='tip'><strong>Pentru că se reduce la respectarea automată a regulilor impuse</strong><span class='tooltip-box'>Distractor: moralitatea presupune reflecție și interiorizare, nu automatism.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care sunt <strong>obiectivele centrale ale educației morale</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Formarea conștiinței morale</strong><span class='tooltip-box'>Conștiința morală presupune capacitatea de a distinge binele de rău și de a evalua propriile acțiuni.</span></span>",
          "<span class='tip'><strong>Formarea conduitei morale</strong><span class='tooltip-box'>Valorile morale trebuie transpuse în comportamente concrete și constante.</span></span>",
          "<span class='tip'><strong>Transmiterea mecanică a normelor sociale</strong><span class='tooltip-box'>Distractor: simpla transmitere nu asigură interiorizarea valorilor.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Ce urmărește <strong>procesul educației morale</strong> în raport cu societatea?",
        options: [
          "<span class='tip'><strong>Încorporarea și punerea în act a valorilor morale ale societății</strong><span class='tooltip-box'>Educația morală mediază între valorile sociale și comportamentul individual.<br><br><strong>Exemplu:</strong> solidaritatea socială devine atitudine personală și practică zilnică.</span></span>",
          "<span class='tip'><strong>Separarea individului de valorile comunității</strong><span class='tooltip-box'>Distractor: educația morală are rol integrator.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce înseamnă <strong>heteronomia morală</strong>?",
        options: [
          "<span class='tip'><strong>Respectarea regulilor impuse de alții, fără asumare personală</strong><span class='tooltip-box'>În acest stadiu, regula este urmată din frică de pedeapsă sau din obediență.<br><br><strong>Exemplu:</strong> copilul respectă regula doar pentru că „așa a spus adultul”.</span></span>",
          "<span class='tip'><strong>Autoimpunerea conștientă a valorilor morale</strong><span class='tooltip-box'>Distractor: aceasta caracterizează autonomia morală.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce definește <strong>autonomia morală</strong>?",
        options: [
          "<span class='tip'><strong>Interiorizarea și autoimpunerea valorilor morale</strong><span class='tooltip-box'>Individul acționează moral din convingere personală, nu din constrângere externă.<br><br><strong>Exemplu:</strong> o persoană spune adevărul chiar și atunci când minciuna nu ar fi sancționată.</span></span>",
          "<span class='tip'><strong>Renunțarea la orice regulă socială</strong><span class='tooltip-box'>Distractor: autonomia morală nu înseamnă lipsa regulilor, ci asumarea lor.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Când poate fi considerată o persoană <strong>educată din punct de vedere moral</strong>?",
        options: [
          "<span class='tip'><strong>Atunci când realizează trecerea de la heteronomie la autonomie morală</strong><span class='tooltip-box'>Educația morală este un proces de maturizare etică, nu o stare instantanee.<br><br><strong>Exemplu:</strong> adolescentul începe să își construiască propriul sistem de valori, reflectând critic asupra normelor primite.</span></span>",
          "<span class='tip'><strong>Atunci când respectă regulile doar sub control extern</strong><span class='tooltip-box'>Distractor: aceasta indică un nivel moral imatur.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q13",
    title: "Conștiința morală și conduita morală",
    description:
      "Acest quiz clarifică distincția dintre conștiința morală și conduita morală, componentele fiecăreia și modalitățile pedagogice prin care pot fi formate și dezvoltate. Accentul cade pe relația dintre dimensiunea internă a moralității și manifestarea ei comportamentală.",
    questions: [
      {
        text: "Ce presupune <strong>formarea conștiinței morale</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Modelarea reprezentărilor și noțiunilor morale</strong><span class='tooltip-box'>Include înțelegerea conceptelor de bine și rău, dreptate, responsabilitate, onestitate.<br><br><strong>Exemplu:</strong> elevul înțelege de ce minciuna afectează relațiile, nu doar că „nu e voie să mintă”.</span></span>",
          "<span class='tip'><strong>Dezvoltarea sentimentelor și convingerilor morale</strong><span class='tooltip-box'>Sentimentele morale precum vinovăția, empatia sau respectul susțin evaluarea internă a faptelor.<br><br><strong>Exemplu:</strong> copilul simte disconfort moral după ce a nedreptățit pe cineva.</span></span>",
          "<span class='tip'><strong>Formarea automată a deprinderilor de comportament</strong><span class='tooltip-box'>Distractor: deprinderile țin de conduita morală, nu de conștiința morală.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Ce definește <strong>conduita morală</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Deprinderile și obișnuințele morale</strong><span class='tooltip-box'>Comportamentele morale repetate devin stabile și previzibile.<br><br><strong>Exemplu:</strong> respectarea constantă a regulilor de conviețuire, chiar fără supraveghere.</span></span>",
          "<span class='tip'><strong>Voința morală și caracterul</strong><span class='tooltip-box'>Conduita morală presupune capacitatea de a acționa conform valorilor, chiar în situații dificile.<br><br><strong>Exemplu:</strong> refuzul de a copia, deși riscul de a fi prins este minim.</span></span>",
          "<span class='tip'><strong>Interiorizarea exclusiv teoretică a valorilor</strong><span class='tooltip-box'>Distractor: conduita morală se manifestă prin acțiuni, nu doar prin idei.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Care este <strong>relația dintre conștiința morală și conduita morală</strong>?",
        options: [
          "<span class='tip'><strong>Conștiința morală orientează și fundamentează conduita morală</strong><span class='tooltip-box'>Valorile și convingerile interne ghidează comportamentul exterior.<br><br><strong>Exemplu:</strong> credința în echitate conduce la comportamente corecte față de ceilalți.</span></span>",
          "<span class='tip'><strong>Conduita morală apare independent de conștiința morală</strong><span class='tooltip-box'>Distractor: fără conștiință morală, comportamentul rămâne instabil și dependent de constrângeri.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Prin ce <strong>două căi principale</strong> se poate acționa în formarea și dezvoltarea morală?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Încurajarea atitudinilor pozitive</strong><span class='tooltip-box'>Validarea comportamentelor morale dorite le consolidează.<br><br><strong>Exemplu:</strong> aprecierea sincerității sau a comportamentului cooperant.</span></span>",
          "<span class='tip'><strong>Reducerea sau prevenirea atitudinilor negative</strong><span class='tooltip-box'>Intervențiile timpurii limitează fixarea comportamentelor indezirabile.<br><br><strong>Exemplu:</strong> discutarea consecințelor agresivității înainte ca aceasta să devină obișnuință.</span></span>",
          "<span class='tip'><strong>Ignorarea comportamentelor morale ale elevilor</strong><span class='tooltip-box'>Distractor: indiferența slăbește procesul de formare morală.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "De ce este important <strong>cadrul afectiv pozitiv</strong> în educația morală?",
        options: [
          "<span class='tip'><strong>Pentru că facilitează interiorizarea valorilor morale</strong><span class='tooltip-box'>Un climat bazat pe respect și încredere stimulează deschiderea morală a elevilor.<br><br><strong>Exemplu:</strong> elevii discută dileme morale fără teama de ridiculizare.</span></span>",
          "<span class='tip'><strong>Pentru că înlocuiește nevoia de reguli și norme</strong><span class='tooltip-box'>Distractor: cadrul afectiv sprijină, nu elimină normele.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este <strong>responsabilitatea profesorului</strong> în formarea conduitei morale?",
        options: [
          "<span class='tip'><strong>Validarea comportamentelor morale și dezaprobarea celor indezirabile</strong><span class='tooltip-box'>Gesturile, reacțiile și atitudinile profesorului funcționează ca modele morale.<br><br><strong>Exemplu:</strong> profesorul sancționează nedreptatea, dar apreciază corectitudinea și empatia.</span></span>",
          "<span class='tip'><strong>Neutralitatea completă față de comportamentul elevilor</strong><span class='tooltip-box'>Distractor: lipsa de reacție transmite mesaje morale ambigue.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q14",
    title: "Precondițiile moralității",
    description:
      "Acest quiz clarifică precondițiile psihologice și axiologice necesare formării moralității. Accentul cade pe dezvoltarea sinelui, pe raportarea la modele morale și pe capacitatea de evaluare reflexivă a propriei conduite.",
    questions: [
      {
        text: "Ce rol are <strong>sentimentul identității proprii și al conștiinței de sine</strong> în moralitate?",
        options: [
          "<span class='tip'><strong>Fundamentează asumarea responsabilității morale</strong><span class='tooltip-box'>Fără claritatea răspunsului la întrebarea „Cine sunt eu?”, individul nu poate raporta acțiunile la sine ca autor moral.<br><br><strong>Exemplu:</strong> copilul care se percepe ca persoană distinctă poate spune „am greșit eu”, nu doar „s a întâmplat”.</span></span>",
          "<span class='tip'><strong>Este irelevant pentru comportamentul moral</strong><span class='tooltip-box'>Distractor: lipsa conștiinței de sine conduce la conformism sau evitare a responsabilității.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "De ce este necesară <strong>acceptarea de sine</strong> pentru dezvoltarea morală?",
        options: [
          "<span class='tip'><strong>Permite clarificarea dorințelor autentice și a valorilor personale</strong><span class='tooltip-box'>Acceptarea de sine ajută individul să distingă între ceea ce dorește cu adevărat și ceea ce face din presiune externă.<br><br><strong>Exemplu:</strong> adolescentul care se acceptă poate refuza un comportament imoral fără teama de excludere.</span></span>",
          "<span class='tip'><strong>Elimină nevoia de reguli morale</strong><span class='tooltip-box'>Distractor: acceptarea de sine nu anulează normele, ci sprijină asumarea lor conștientă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce exprimă <strong>conștiința necesității unor modele morale</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Nevoia de repere pentru orientarea comportamentului</strong><span class='tooltip-box'>Modelele morale oferă criterii de evaluare a propriilor acțiuni.<br><br><strong>Exemplu:</strong> profesorul corect sau părintele responsabil funcționează ca modele de conduită.</span></span>",
          "<span class='tip'><strong>Capacitatea de a răspunde la întrebarea „După ce mă ghidez?”</strong><span class='tooltip-box'>Individul începe să compare comportamentele posibile cu valori și principii asumate.</span></span>",
          "<span class='tip'><strong>Imitarea automată a comportamentelor altora</strong><span class='tooltip-box'>Distractor: moralitatea presupune interiorizare, nu copiere mecanică.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Ce înseamnă <strong>activarea conștiinței mature</strong>?",
        options: [
          "<span class='tip'><strong>Capacitatea de a decide în funcție de binele propriu și al celorlalți</strong><span class='tooltip-box'>Conștiința matură presupune deliberare morală, nu reacții impulsive.<br><br><strong>Exemplu:</strong> alegerea adevărului chiar dacă produce un disconfort temporar.</span></span>",
          "<span class='tip'><strong>Respectarea regulilor doar de teamă de sancțiuni</strong><span class='tooltip-box'>Distractor: aceasta indică heteronomie morală, nu maturitate morală.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "De ce este importantă <strong>valorizarea conduitei și a succesului</strong> în educația morală?",
        options: [
          "<span class='tip'><strong>Sprijină reflecția asupra propriilor acțiuni</strong><span class='tooltip-box'>Evaluarea conduitei permite învățarea morală din experiență.<br><br><strong>Exemplu:</strong> elevul analizează nu doar dacă a reușit, ci și dacă a procedat corect.</span></span>",
          "<span class='tip'><strong>Încurajează competiția fără criterii morale</strong><span class='tooltip-box'>Distractor: valorizarea morală nu se reduce la succes exterior.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce demonstrează <strong>integrarea tuturor acestor precondiții</strong>?",
        options: [
          "<span class='tip'><strong>Trecerea de la moralitate impusă la moralitate asumată</strong><span class='tooltip-box'>Identitatea, acceptarea de sine, modelele, conștiința matură și reflecția conduc la autonomie morală.<br><br><strong>Exemplu:</strong> persoana respectă valorile chiar în absența controlului extern.</span></span>",
          "<span class='tip'><strong>Conformarea strictă la reguli fără înțelegere</strong><span class='tooltip-box'>Distractor: aceasta descrie heteronomia morală.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q15",
    title: "Introducere în educația estetică",
    description:
      "Acest quiz introduce educația estetică ca dimensiune a formării integrale a persoanei. Accentul cade pe rolul receptării, interpretării și interiorizării valorilor estetice în viața cotidiană, educațională și spirituală.",
    questions: [
      {
        text: "Ce urmărește <strong>educația estetică</strong> ca dimensiune a formării?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Pregătirea persoanei pentru receptarea și interpretarea valorilor estetice</strong><span class='tooltip-box'>Educația estetică dezvoltă capacitatea de a percepe și înțelege frumosul în artă, natură, conduită umană sau spațiul comunitar.<br><br><strong>Exemplu:</strong> elevul nu doar vede o operă de artă, ci îi înțelege semnificația și mesajul.</span></span>",
          "<span class='tip'><strong>Interiorizarea și crearea de valori estetice</strong><span class='tooltip-box'>Nu se limitează la receptare pasivă, ci încurajează exprimarea creativă și raportarea personală la frumos.<br><br><strong>Exemplu:</strong> realizarea unui desen, a unui text sau a unei amenajări armonioase.</span></span>",
          "<span class='tip'><strong>Dobândirea exclusivă de cunoștințe teoretice despre artă</strong><span class='tooltip-box'>Distractor: educația estetică depășește nivelul informativ.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "De ce <strong>viața cotidiană</strong> are un rol important în educația estetică?",
        options: [
          "<span class='tip'><strong>Pentru că oferă contexte permanente de întâlnire cu valori estetice</strong><span class='tooltip-box'>Obiectele, spațiile, activitățile zilnice transmit mesaje estetice care pot forma gustul și sensibilitatea.<br><br><strong>Exemplu:</strong> arhitectura orașului, designul vestimentar sau modul de organizare a unui spațiu public.</span></span>",
          "<span class='tip'><strong>Pentru că educația estetică se realizează doar în afara școlii</strong><span class='tooltip-box'>Distractor: școala este un cadru esențial al educației estetice.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce înseamnă afirmația că <strong>educația presupune un registru estetic</strong>?",
        options: [
          "<span class='tip'><strong>Procesul educativ implică formă, expresivitate și scenariu didactic</strong><span class='tooltip-box'>Predarea are și o dimensiune artistică: modul de prezentare, limbajul, ritmul și atmosfera influențează receptarea.<br><br><strong>Exemplu:</strong> lecția construită ca poveste sau situație problemă captivantă.</span></span>",
          "<span class='tip'><strong>Educația este identică cu arta</strong><span class='tooltip-box'>Distractor: educația folosește registre estetice, dar are finalități proprii.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum contribuie <strong>cadrele didactice</strong> la educația estetică a elevilor?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Prin comportament, limbaj și ținută</strong><span class='tooltip-box'>Profesorul transmite modele estetice prin felul în care vorbește, se exprimă și se prezintă.<br><br><strong>Exemplu:</strong> un discurs coerent și expresiv cultivă gustul pentru claritate și armonie.</span></span>",
          "<span class='tip'><strong>Prin amenajarea spațiului educațional</strong><span class='tooltip-box'>Clasa organizată armonios influențează sensibilitatea și dispoziția elevilor.</span></span>",
          "<span class='tip'><strong>Doar prin predarea disciplinelor artistice</strong><span class='tooltip-box'>Distractor: educația estetică este transversală.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Care sunt cele <strong>trei concretizări ale educației estetice</strong> propuse de Rene Hubert?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Educația artistică</strong><span class='tooltip-box'>Vizează capacitatea de a percepe și aprecia frumusețea unui obiect artistic.<br><br><strong>Exemplu:</strong> analiza unei picturi sau audiția muzicală.</span></span>",
          "<span class='tip'><strong>Educația filetică</strong><span class='tooltip-box'>Se referă la cultivarea atașamentului și a iubirii față de un obiect, ființă sau valoare.<br><br><strong>Exemplu:</strong> respectul și grija față de natură.</span></span>",
          "<span class='tip'><strong>Educația religioasă</strong><span class='tooltip-box'>Vizează pietatea și raportarea estetic-spirituală la totalitatea existenței.</span></span>",
          "<span class='tip'><strong>Educația tehnologică</strong><span class='tooltip-box'>Distractor: aparține unei alte dimensiuni educaționale.</span></span>",
        ],
        answer: [0, 1, 2],
      },
    ],
  },
  {
    id: "fped-u2-q16",
    title: "Educația estetică și educația artistică",
    description:
      "Acest quiz clarifică diferențele dintre educația estetică și educația artistică din perspectiva conținutului, finalităților și formelor de realizare, evitând confuziile frecvente dintre cele două.",
    questions: [
      {
        text: "De ce <strong>educația estetică</strong> nu trebuie confundată cu <strong>educația artistică</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Educația estetică are o sferă mai largă de conținut</strong><span class='tooltip-box'>Ea include frumosul din natură, societate, conduită umană și artă, nu doar din operele artistice.<br><br><strong>Exemplu:</strong> aprecierea armoniei unui peisaj natural sau a comportamentului civilizat.</span></span>",
          "<span class='tip'><strong>Educația artistică se concentrează exclusiv pe opera de artă</strong><span class='tooltip-box'>Educația artistică vizează frumosul artistic și limbajele specifice artelor (muzică, pictură, teatru etc.).<br><br><strong>Exemplu:</strong> studiul tehnicilor de pictură sau al notelor muzicale.</span></span>",
          "<span class='tip'><strong>Ambele au exact aceleași conținuturi și scopuri</strong><span class='tooltip-box'>Distractor: deși se intersectează, ele nu sunt identice.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Care este diferența dintre cele două din punctul de vedere al <strong>finalităților</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Educația estetică urmărește formarea receptivității și creativității estetice</strong><span class='tooltip-box'>Accentul cade pe capacitatea generală de a percepe, trăi și crea valori estetice.<br><br><strong>Exemplu:</strong> dezvoltarea gustului estetic și a sensibilității față de frumos.</span></span>",
          "<span class='tip'><strong>Educația artistică urmărește dezvoltarea capacităților creative specifice unei arte</strong><span class='tooltip-box'>Se bazează pe reguli metodice și tehnici proprii fiecărei arte.<br><br><strong>Exemplu:</strong> învățarea tehnicii interpretative la un instrument muzical.</span></span>",
          "<span class='tip'><strong>Educația estetică urmărește exclusiv performanța artistică</strong><span class='tooltip-box'>Distractor: performanța artistică este specifică educației artistice.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Cum diferă <strong>formele de realizare</strong> ale educației estetice față de cele ale educației artistice?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Educația estetică se realizează preponderent prin activități practic-aplicative</strong><span class='tooltip-box'>Activitățile cotidiene, școlare și extrașcolare pot avea valoare estetică.<br><br><strong>Exemplu:</strong> amenajarea clasei, realizarea unui proiect vizual sau observarea mediului.</span></span>",
          "<span class='tip'><strong>Educația artistică este adresată în special elevilor cu competențe creative demonstrate</strong><span class='tooltip-box'>Devine esențială pentru formarea viitorilor artiști și este realizată de cadre specializate.<br><br><strong>Exemplu:</strong> școli sau clase de artă, conservator.</span></span>",
          "<span class='tip'><strong>Educația artistică este obligatorie pentru toți elevii pe termen nelimitat</strong><span class='tooltip-box'>Distractor: ea este recomandată tuturor până la un anumit nivel.</span></span>",
        ],
        answer: [0, 1],
      },
      {
        text: "Cum contribuie <strong>educația estetică</strong> la structurarea și afirmarea <strong>identității personale</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Prin construirea și delimitarea unei identități și a unui profil spiritual propriu</strong><span class='tooltip-box'>Educația estetică ajută individul să își contureze cine este și ce îl definește din punct de vedere valoric și sensibil.<br><br><strong>Exemplu:</strong> preferința constantă pentru anumite forme de artă sau stiluri estetice devine parte a identității personale.</span></span>",
          "<span class='tip'><strong>Prin dezvoltarea potențialului afectiv prin contactul cu arta</strong><span class='tooltip-box'>Arta stimulează trăiri, emoții și reflecții care contribuie la autocunoaștere și exprimare de sine.<br><br><strong>Exemplu:</strong> un elev care descoperă în muzică sau pictură un mod de a-și exprima emoțiile își consolidează identitatea afectivă.</span></span>",
          "<span class='tip'><strong>Prin formarea unor trebuințe, obiceiuri și comportamente estetice</strong><span class='tooltip-box'>Contactul repetat cu valori estetice generează habitusuri care individualizează persoana.<br><br><strong>Exemplu:</strong> modul de a se îmbrăca, de a-și amenaja spațiul sau de a se raporta la frumos.</span></span>",
          "<span class='tip'><strong>Prin uniformizarea gusturilor și comportamentelor culturale</strong><span class='tooltip-box'>Distractor: educația estetică nu uniformizează, ci favorizează unicitatea și diferențierea persoanei.</span></span>",
        ],
        answer: [0, 1, 2],
      },
      {
        text: "Cum poate fi asigurată <strong>formarea elevilor în spiritul frumosului și al armoniei</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Prin modul în care este structurat curriculumul școlar</strong><span class='tooltip-box'>Structura curriculumului influențează accesul elevilor la experiențe estetice variate.<br><br><strong>Exemplu:</strong> includerea disciplinelor artistice, a activităților interdisciplinare și a momentelor de reflecție estetică în planurile de învățământ.</span></span>",
          "<span class='tip'><strong>Prin stabilirea unor raporturi echilibrate între disciplinele științifice, socio-umane și artistice</strong><span class='tooltip-box'>Armonia educativă rezultă din evitarea supremației exclusive a unui tip de cunoaștere.<br><br><strong>Exemplu:</strong> corelarea istoriei artei cu istoria generală sau integrarea elementelor estetice în științe.</span></span>",
          "<span class='tip'><strong>Prin echilibrul dintre obiectivele estetice explicite și cele implicite</strong><span class='tooltip-box'>Educația estetică se realizează atât direct, cât și indirect, prin obiective nespecifice.<br><br><strong>Exemplu:</strong> nu doar la ora de desen, ci și prin modul de prezentare a conținuturilor la alte discipline.</span></span>",
          "<span class='tip'><strong>Prin felul în care sunt dimensionate activitățile didactice</strong><span class='tooltip-box'>Ritmul, varietatea și forma activităților influențează receptivitatea estetică.<br><br><strong>Exemplu:</strong> alternarea activităților teoretice cu cele creative sau reflexive.</span></span>",
          "<span class='tip'><strong>Prin tactul didactic al educatorului</strong><span class='tooltip-box'>Comportamentul, limbajul și sensibilitatea profesorului transmit modele estetice.<br><br><strong>Exemplu:</strong> modul de a vorbi, de a corecta sau de a organiza spațiul clasei.</span></span>",
          "<span class='tip'><strong>Exclusiv prin predarea disciplinelor artistice</strong><span class='tooltip-box'>Distractor: educația estetică traversează întregul proces instructiv-educativ, nu doar disciplinele artistice.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4],
      },
    ],
  },
  {
    id: "fped-u2-q17",
    title: "Finalitățile și obiectivele educației estetice",
    questions: [
      {
        text: "Ce caracterizează <strong>finalitățile educației estetice</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Depășesc sfera strict estetică</strong><span class='tooltip-box'>Educația estetică nu se limitează la frumos ca valoare izolată, ci se corelează cu dimensiuni civice, morale, culturale și profesionale.<br><br><strong>Exemplu:</strong> aprecierea patrimoniului cultural sprijină identitatea civică și respectul față de comunitate.</span></span>",
          "<span class='tip'><strong>Contribuie la integrarea socială și culturală a individului</strong><span class='tooltip-box'>Prin raportarea la tradiții, valori artistice și expresii culturale, individul se recunoaște ca parte a unei comunități și a unei culturi.</span></span>",
          "<span class='tip'><strong>Vizează exclusiv producerea de opere artistice</strong><span class='tooltip-box'>Distractor: aceasta este doar una dintre posibilele finalități, nu esența educației estetice.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Care sunt <strong>tipurile de finalități ale educației estetice</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Finalități naționale și sociale</strong><span class='tooltip-box'>Educația estetică favorizează aderarea la tradițiile artistice, culturale și artizanale ale comunității de apartenență.<br><br><strong>Exemplu:</strong> valorificarea folclorului, a portului popular sau a arhitecturii locale.</span></span>",
          "<span class='tip'><strong>Finalități tehnice și profesionale</strong><span class='tooltip-box'>Dezvoltarea sensibilității estetice poate fundamenta competențe utile în profesii precum designul, arhitectura, publicitatea sau meșteșugurile.</span></span>",
          "<span class='tip'><strong>Finalități estetice propriu-zise</strong><span class='tooltip-box'>Se referă la capacitatea de a recepta, aprecia și crea valori estetice și produse artistice.</span></span>",
          "<span class='tip'><strong>Finalități exclusiv recreative</strong><span class='tooltip-box'>Distractor: educația estetică nu urmărește doar divertismentul.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce urmăresc <strong>obiectivele educației estetice</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Formarea capacității de receptare a valorilor estetice</strong><span class='tooltip-box'>Presupune dezvoltarea sensibilității perceptive și a atenției față de forme, culori, sunete, gesturi sau spații.<br><br><strong>Exemplu:</strong> observarea nuanțelor cromatice într-un tablou sau a armoniei într-o compoziție muzicală.</span></span>",
          "<span class='tip'><strong>Potentarea capacității de valorizare și apreciere estetică</strong><span class='tooltip-box'>Vizează formarea gustului estetic, bazat pe experiență, cultură și reflecție, nu pe reacții spontane sau mode trecătoare.</span></span>",
          "<span class='tip'><strong>Dezvoltarea trebuințelor de integrare a esteticului în viața cotidiană</strong><span class='tooltip-box'>Esteticul devine parte a stilului de viață: modul de a te îmbrăca, de a organiza spațiul personal, de a alege experiențe culturale.</span></span>",
          "<span class='tip'><strong>Eliminarea influențelor culturale externe</strong><span class='tooltip-box'>Distractor: educația estetică favorizează dialogul cultural, nu izolarea.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Cum contribuie educația estetică la <strong>formarea identității culturale</strong>?",
        options: [
          "<span class='tip'><strong>Prin ancorarea individului în tradițiile și valorile comunității</strong><span class='tooltip-box'>Inițierea în artă și cultură facilitează descoperirea patrimoniului cultural și asumarea unei identități culturale proprii.</span></span>",
          "<span class='tip'><strong>Prin uniformizarea gusturilor și preferințelor</strong><span class='tooltip-box'>Distractor: educația estetică respectă unicitatea și diversitatea expresiilor culturale.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "De ce este importantă <strong>formarea capacității de a crea sau genera esteticul</strong>?",
        options: [
          "<span class='tip'><strong>Pentru că exprimarea estetică sprijină afirmarea personală și creativitatea</strong><span class='tooltip-box'>Crearea esteticului permite individului să-și exprime viziunea asupra lumii prin artă, stil de viață sau comportament.<br><br><strong>Exemplu:</strong> un elev care scrie poezie, desenează sau creează obiecte artizanale.</span></span>",
          "<span class='tip'><strong>Pentru că doar artiștii profesioniști au nevoie de creativitate</strong><span class='tooltip-box'>Distractor: creativitatea estetică este relevantă pentru orice persoană.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q18",
    title: "Principiile educației estetice",
    questions: [
      {
        text: "Ce presupune <strong>principiul educației estetice pe baza valorilor autentice</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Selectarea valorilor validate cultural și artistic</strong><span class='tooltip-box'>Educatorul pornește de la opere și valori recunoscute de tradiția culturală națională și universală, considerate repere ale calității estetice.<br><br><strong>Exemplu:</strong> folosirea unor opere clasice din literatură, muzică sau arte vizuale ca punct de referință.</span></span>",
          "<span class='tip'><strong>Responsabilitatea profesorului în alegerea și actualizarea reperelor estetice</strong><span class='tooltip-box'>Profesorul nu se limitează la modele consacrate, ci selectează critic și opere contemporane relevante, adaptate contextului educațional.</span></span>",
          "<span class='tip'><strong>Transmiterea automată a gustului estetic prin canon</strong><span class='tooltip-box'>Distractor: gustul estetic nu se formează mecanic, ci prin mediere pedagogică și reflecție.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Cum este interpretată <strong>funcția pedagogică a produselor kitsch</strong> în educația estetică?",
        options: [
          "<span class='tip'><strong>Ca etapă posibilă în formarea gustului estetic</strong><span class='tooltip-box'>Conform perspectivei lui Moles, confruntarea cu prostul-gust poate deveni o treaptă intermediară spre bunul-gust, dacă este pedagogic ghidată.<br><br><strong>Exemplu:</strong> analiza comparativă între un obiect decorativ kitsch și unul artistic pentru a înțelege diferențele de calitate.</span></span>",
          "<span class='tip'><strong>Ca model estetic final de promovat</strong><span class='tooltip-box'>Distractor: kitsch-ul nu este scopul educației estetice, ci un posibil instrument de reflecție.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce definește <strong>principiul receptării creatoare a valorilor estetice</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Implicarea activă a percepției</strong><span class='tooltip-box'>Percepția devine mai fină și mai atentă prin exercițiu estetic și contact repetat cu opere de artă.<br><br><strong>Exemplu:</strong> observarea detaliilor vizuale sau sonore într-o operă artistică.</span></span>",
          "<span class='tip'><strong>Rolul experienței personale și estetice</strong><span class='tooltip-box'>Experiența de viață, îmbogățită prin experiențe estetice, influențează modul în care sunt receptate și înțelese valorile artistice.</span></span>",
          "<span class='tip'><strong>Îmbogățirea cunoașterii prin contactul cu arta</strong><span class='tooltip-box'>Cunoașterea nu este doar informațională, ci profund afectivă și reflexivă, dezvoltată prin întâlnirea cu operele de artă.</span></span>",
          "<span class='tip'><strong>Excluderea spiritului creator al individului</strong><span class='tooltip-box'>Distractor: receptarea estetică autentică stimulează creativitatea, nu o inhibă.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce rol are <strong>spiritul creator</strong> în receptarea valorilor estetice?",
        options: [
          "<span class='tip'><strong>Integrează percepția, experiența și cunoașterea într-o formă personală de expresie</strong><span class='tooltip-box'>Spiritul creator permite individului să combine elementele perceptive, experiențiale și cognitive, generând interpretări și creații proprii.<br><br><strong>Exemplu:</strong> reinterpretarea unei opere prin desen, scriere creativă sau proiect personal.</span></span>",
          "<span class='tip'><strong>Este irelevant în procesul educației estetice</strong><span class='tooltip-box'>Distractor: spiritul creator este o consecință esențială a educației estetice.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q19",
    title: "Metode și forme de realizare a educației estetice",
    questions: [
      {
        text: "Care sunt <strong>metodele specifice</strong> utilizate în realizarea educației estetice?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Exercițiul</strong><span class='tooltip-box'>Exercițiul urmărește formarea și rafinarea capacităților estetice prin practică repetată.<br><br><strong>Exemple concrete:</strong> exerciții de ascultare atentă a unei piese muzicale, discriminarea culorilor într-o lucrare plastică, repetarea unor mișcări coregrafice.</span></span>",
          "<span class='tip'><strong>Explicația</strong><span class='tooltip-box'>Explicația are rol introductiv și clarificator, sprijinind înțelegerea teoretică a fenomenelor artistice.<br><br><strong>Exemplu:</strong> explicarea noțiunii de ritm, armonie sau compoziție înainte de analiza unei opere.</span></span>",
          "<span class='tip'><strong>Demonstrația</strong><span class='tooltip-box'>Demonstrația presupune prezentarea directă a unui mod de realizare artistică, fiind frecvent utilizată de cadrele didactice specializate.<br><br><strong>Exemplu:</strong> profesorul de arte plastice demonstrează o tehnică de pictură.</span></span>",
          "<span class='tip'><strong>Memorizarea mecanică</strong><span class='tooltip-box'>Distractor: educația estetică vizează experiența, trăirea și înțelegerea, nu reproducerea mecanică.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Sub ce forme se poate manifesta <strong>exercițiul</strong> în educația estetică?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Exersarea capacităților perceptive</strong><span class='tooltip-box'>Dezvoltă sensibilitatea senzorială prin ascultare, observare și discriminare estetică.<br><br><strong>Exemplu:</strong> identificarea diferențelor de timbru sau nuanțe cromatice.</span></span>",
          "<span class='tip'><strong>Exerciții de traducere între limbaje artistice</strong><span class='tooltip-box'>Presupun trecerea de la un limbaj artistic la altul.<br><br><strong>Exemplu:</strong> transformarea unei piese muzicale într-o povestire sau desen.</span></span>",
          "<span class='tip'><strong>Exerciții tehnice</strong><span class='tooltip-box'>Vizează deprinderi concrete de execuție artistică.<br><br><strong>Exemplu:</strong> repetiții instrumentale, exerciții cromatice, mișcări coregrafice.</span></span>",
          "<span class='tip'><strong>Evaluarea standardizată</strong><span class='tooltip-box'>Distractor: evaluarea nu este o formă de exercițiu estetic.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care sunt <strong>formele de realizare a educației estetice</strong> în context școlar formal?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Lecțiile disciplinelor de profil artistic</strong><span class='tooltip-box'>Educația estetică se realizează direct prin discipline precum literatura, muzica, desenul, coregrafia.</span></span>",
          "<span class='tip'><strong>Valorificarea dimensiunii estetice a tuturor disciplinelor</strong><span class='tooltip-box'>Chiar și disciplinele nonartistice pot contribui estetic prin limbaj, exemple, structurare vizuală sau expresivitate.</span></span>",
          "<span class='tip'><strong>Reducerea educației estetice doar la orele de artă</strong><span class='tooltip-box'>Distractor: educația estetică are caracter transversal.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Ce activități <strong>complementare</strong> susțin educația estetică?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Vizitarea muzeelor și expozițiilor</strong><span class='tooltip-box'>Contactul direct cu operele de artă facilitează receptarea autentică a valorilor estetice.</span></span>",
          "<span class='tip'><strong>Vizionarea organizată de spectacole</strong><span class='tooltip-box'>Spectacolele oferă experiențe estetice integrate, emoționale și cognitive.</span></span>",
          "<span class='tip'><strong>Cercurile și concursurile artistice</strong><span class='tooltip-box'>Încurajează exprimarea creativă și valorizarea talentelor.</span></span>",
          "<span class='tip'><strong>Discuțiile cu artiști</strong><span class='tooltip-box'>Apropie elevii de procesul creator și de sensurile artei.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },

      {
        text: "Ce rol are <strong>mediul informal</strong> în realizarea educației estetice?",
        options: [
          "<span class='tip'><strong>Oferă stimuli estetici variati care pot fi integrați pedagogic</strong><span class='tooltip-box'>Experiențele cotidiene, media, spațiul urban sau natural devin resurse educative atunci când sunt interpretate și corelate de profesor.<br><br><strong>Exemplu:</strong> discutarea unui film, a unui clip muzical sau a designului urban în cadrul lecției.</span></span>",
          "<span class='tip'><strong>Elimină rolul profesorului în formarea estetică</strong><span class='tooltip-box'>Distractor: profesorul rămâne factorul modelator principal.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q20",
    title:
      "Introducere în educația religioasă. Argumente privind necesitatea ei",
    questions: [
      {
        text: "Care <strong>argumente fundamentale</strong> susțin necesitatea educației religioase?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Argumentul cultural</strong><span class='tooltip-box'>Religia este parte a patrimoniului cultural al umanității și al comunităților concrete.<br><br><strong>Exemple:</strong> înțelegerea sărbătorilor religioase, a simbolurilor din artă, literatură sau istorie; cunoașterea fenomenului religios ca fapt de cultură.</span></span>",
          "<span class='tip'><strong>Argumentul psihologic</strong><span class='tooltip-box'>Educația religioasă sprijină reflecția asupra eului, autocunoașterea și structurarea interioară.<br><br><strong>Exemple:</strong> întrebări despre sensul vieții, idealuri personale, gestionarea suferinței sau a vinovăției, fără impunere dogmatică.</span></span>",
          "<span class='tip'><strong>Argumentul etic</strong><span class='tooltip-box'>Religia oferă repere morale într-o etapă de heteronomie morală, înainte de autonomia morală deplină.<br><br><strong>Exemplu:</strong> interiorizarea treptată a normelor morale, astfel încât ele să nu fie trăite ca o constrângere externă.</span></span>",
          "<span class='tip'><strong>Argumentul sociologic</strong><span class='tooltip-box'>Valorile religioase contribuie la coeziunea socială, solidaritate și identitate comunitară.<br><br><strong>Exemple:</strong> ritualuri comune, sprijin reciproc, asumarea responsabilității față de ceilalți.</span></span>",
          "<span class='tip'><strong>Argumentul istoric</strong><span class='tooltip-box'>În spațiul românesc, creștinismul a avut un rol major în formarea și consolidarea identității naționale.<br><br><strong>Exemplu:</strong> corelația dintre încreștinarea spațiului carpato–danubiano–pontic și formarea poporului român.</span></span>",
          "<span class='tip'><strong>Argumentul ecumenic</strong><span class='tooltip-box'>Cunoașterea religioasă favorizează toleranța, dialogul și acceptarea alterității.<br><br><strong>Exemplu:</strong> înțelegerea altor confesiuni reduce suspiciunea și conflictele simbolice.</span></span>",
          "<span class='tip'><strong>Argumentul teologic</strong><span class='tooltip-box'>Fiecare religie presupune transmiterea organizată a propriilor adevăruri de credință.<br><br><strong>Exemplu:</strong> educația religioasă ca formă de inițiere în valorile și finalitățile religiei respective.</span></span>",
          "<span class='tip'><strong>Argumentul pedagogic</strong><span class='tooltip-box'>Educația religioasă dezvoltă disponibilitatea pentru autoeducație și perfecționare continuă.<br><br><strong>Exemplu:</strong> formarea unei atitudini reflexive față de sine și propriile alegeri existențiale.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4, 5, 6, 7],
      },

      {
        text: "Ce <strong>condiție esențială</strong> face ca educația religioasă să contribuie real la dezvoltarea persoanei?",
        options: [
          "<span class='tip'><strong>Valorile și credințele să fie propuse, nu impuse</strong><span class='tooltip-box'>Educația religioasă are valoare formativă atunci când respectă libertatea de conștiință și sprijină asumarea personală a valorilor.<br><br><strong>Exemplu:</strong> elevul este invitat să reflecteze, nu constrâns să adere.</span></span>",
          "<span class='tip'><strong>Transmiterea exclusivă a regulilor morale</strong><span class='tooltip-box'>Distractor: simpla normare externă nu garantează interiorizarea valorilor.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum se raportează educația religioasă la <strong>dezvoltarea morală</strong> a individului?",
        options: [
          "<span class='tip'><strong>Sprijină trecerea de la heteronomie la autonomie morală</strong><span class='tooltip-box'>Normele religioase sunt interiorizate treptat și devin repere asumate personal, nu simple constrângeri externe.</span></span>",
          "<span class='tip'><strong>Blochează autonomia morală</strong><span class='tooltip-box'>Distractor: educația religioasă autentică urmărește interiorizarea, nu supunerea oarbă.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q21",
    title: "Modalități de realizare a educației religioase",
    questions: [
      {
        text: "Prin ce <strong>modalități fundamentale</strong> se poate realiza educația religioasă?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Prin instrucție teoretică directă</strong><span class='tooltip-box'>Vizează însușirea fenomenologiei religioase și a adevărurilor de credință din texte canonice.<br><br><strong>Exemplu:</strong> studiul Bibliei, al tradițiilor religioase, al doctrinelor.</span></span>",
          "<span class='tip'><strong>Prin modelare și formarea caracterului</strong><span class='tooltip-box'>Educația religioasă se transmite implicit prin exemplul personal, educarea voinței și interiorizarea valorilor.<br><br><strong>Exemplu:</strong> comportamentul moral al adultului devine model pentru copil.</span></span>",
          "<span class='tip'><strong>Exclusiv prin transmiterea de informații istorice</strong><span class='tooltip-box'>Distractor: educația religioasă nu se reduce la cunoaștere factuală.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Care este <strong>principalul avantaj</strong> al curriculumului monoconfesional?",
        options: [
          "<span class='tip'><strong>Oferă coerență axiologică și inserție spirituală într-o credință de bază</strong><span class='tooltip-box'>Prezentarea unitară a valorilor evită confuzia la vârste mici.<br><br><strong>Exemplu:</strong> copilul își structurează identitatea religioasă într-un cadru clar.</span></span>",
          "<span class='tip'><strong>Asigură cunoașterea tuturor religiilor în mod egal</strong><span class='tooltip-box'>Distractor: acest obiectiv aparține curriculumului interconfesional sau neutru.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este <strong>dezavantajul major</strong> al curriculumului monoconfesional?",
        options: [
          "<span class='tip'><strong>Poate conduce la segregare confesională</strong><span class='tooltip-box'>Elevii pot fi separați pe criterii religioase, limitând contactul cu alte perspective.<br><br><strong>Exemplu:</strong> clase sau grupuri distincte în funcție de confesiune.</span></span>",
          "<span class='tip'><strong>Reduce formarea identității religioase</strong><span class='tooltip-box'>Distractor: dimpotrivă, identitatea este consolidată.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce specific definește <strong>curriculumul interconfesional</strong>?",
        options: [
          "<span class='tip'><strong>Promovează dialogul și relaționarea între elevi de confesiuni diferite</strong><span class='tooltip-box'>Accentul cade pe respect reciproc și deschidere culturală.<br><br><strong>Exemplu:</strong> discuții comparative între tradiții religioase.</span></span>",
          "<span class='tip'><strong>Elimină complet dimensiunea religioasă</strong><span class='tooltip-box'>Distractor: acest lucru caracterizează curriculumul neutru, laicizat.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "De ce <strong>curriculumul neutru, laicizat</strong> diminuează dimensiunea formativă a educației religioase?",
        options: [
          "<span class='tip'><strong>Pentru că accentul cade pe informare culturală, nu pe formarea valorilor</strong><span class='tooltip-box'>Religia este tratată ca obiect de studiu, nu ca experiență axiologică.<br><br><strong>Exemplu:</strong> studiul istoriei religiilor fără interiorizarea normelor morale.</span></span>",
          "<span class='tip'><strong>Pentru că exclude orice formă de educație</strong><span class='tooltip-box'>Distractor: educația există, dar este predominant cognitivă.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "fped-u2-q22-23",
    title: "Necesitatea și obiectivele educației tehnologice",
    questions: [
      {
        text: "Care sunt <strong>factorii principali</strong> care justifică necesitatea educației tehnologice?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Mutațiile tehnice și tehnologice contemporane</strong><span class='tooltip-box'>Dezvoltarea rapidă a tehnologiilor schimbă ritmul vieții și creează noi forme de dependență de tehnică.<br><br><strong>Exemplu:</strong> digitalizarea muncii, automatizarea proceselor, inteligența artificială.</span></span>",
          "<span class='tip'><strong>Nevoia de a înțelege și stăpâni produsele tehnologice</strong><span class='tooltip-box'>Educația tehnologică urmărește folosirea conștientă și responsabilă a tehnicii.<br><br><strong>Exemplu:</strong> utilizarea corectă a dispozitivelor digitale, înțelegerea funcționării lor de bază.</span></span>",
          "<span class='tip'><strong>Obținerea autonomiei pragmatice prin îndemânări tehnice</strong><span class='tooltip-box'>Formarea priceperilor practice permite individului să se descurce eficient în viața cotidiană.<br><br><strong>Exemplu:</strong> rezolvarea unor probleme tehnice simple, folosirea uneltelor.</span></span>",
          "<span class='tip'><strong>Orientarea școlară și profesională informată</strong><span class='tooltip-box'>Cunoașterea specificului profesiilor sprijină alegerea unui traseu profesional realist.<br><br><strong>Exemplu:</strong> înțelegerea diferenței dintre meserii tehnice, inginerești sau digitale.</span></span>",
          "<span class='tip'><strong>Reducerea rolului tehnologiei în viața socială</strong><span class='tooltip-box'>Distractor: realitatea contemporană accentuează rolul tehnologiei.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },
      {
        text: "Care dintre următoarele <strong>obiective cognitive</strong> sunt vizate prin educația tehnologică?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Formarea și consolidarea capacităților senzorio-motorii fundamentale</strong><span class='tooltip-box'>Educația tehnologică dezvoltă percepția spațială și coordonarea prin activități concrete.<br><br><strong>Exemplu:</strong> măsurarea, trasarea, montarea unor piese în laborator.</span></span>",
          "<span class='tip'><strong>Asimilarea fundamentelor conceptuale ale tehnicii contemporane</strong><span class='tooltip-box'>Elevii înțeleg principiile care stau la baza producției moderne.<br><br><strong>Exemplu:</strong> noțiuni de funcționare a circuitelor, mecanismelor sau sistemelor digitale.</span></span>",
          "<span class='tip'><strong>Cunoașterea relației dintre teorie și practică</strong><span class='tooltip-box'>Teoria capătă sens prin aplicare practică, iar practica este explicată conceptual.</span></span>",
          "<span class='tip'><strong>Memorarea exclusivă a definițiilor tehnice</strong><span class='tooltip-box'>Distractor: educația tehnologică depășește nivelul reproductiv.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce <strong>obiective afective</strong> urmărește educația tehnologică?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Formarea unei atitudini adecvate față de tehnică și muncă productivă</strong><span class='tooltip-box'>Elevii dezvoltă respect pentru muncă, rigoare și responsabilitate.<br><br><strong>Exemplu:</strong> respectarea regulilor de siguranță în atelier.</span></span>",
          "<span class='tip'><strong>Dezvoltarea intereselor tehnico-profesionale</strong><span class='tooltip-box'>Educația tehnologică sprijină descoperirea vocațiilor.<br><br><strong>Exemplu:</strong> interes pentru electronică, mecanică sau IT.</span></span>",
          "<span class='tip'><strong>Cultivarea inițiativei și asumării riscului calculat</strong><span class='tooltip-box'>Se încurajează spiritul antreprenorial și capacitatea de a începe proiecte.</span></span>",
          "<span class='tip'><strong>Indiferența față de activitatea productivă</strong><span class='tooltip-box'>Distractor: contravine scopurilor educației tehnologice.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care sunt <strong>obiectivele psihomotorii</strong> specifice educației tehnologice?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Formarea priceperilor și abilităților practice de bază</strong><span class='tooltip-box'>Elevii învață să utilizeze instrumente și materiale.<br><br><strong>Exemplu:</strong> tăiere, asamblare, programare de bază.</span></span>",
          "<span class='tip'><strong>Consolidarea savoir-faire-ului în contexte acționale</strong><span class='tooltip-box'>Cunoștințele devin competențe aplicabile în situații reale.</span></span>",
          "<span class='tip'><strong>Utilizarea gestualității psihomotorii în contexte variate</strong><span class='tooltip-box'>Adaptarea mișcărilor și tehnicilor la sarcini diferite.</span></span>",
          "<span class='tip'><strong>Dezvoltarea exclusivă a reflecției teoretice</strong><span class='tooltip-box'>Distractor: aceasta aparține predominant altor tipuri de educație.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "În ce <strong>forme concrete</strong> pot fi realizate obiectivele educației tehnologice în școală?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Lucrări de laborator și experimente interdisciplinare</strong><span class='tooltip-box'>Integrarea fizicii, chimiei sau biologiei în activități aplicative.</span></span>",
          "<span class='tip'><strong>Activități practice în ateliere și cercuri tehnice</strong><span class='tooltip-box'>Mecanică, electrotehnică, electronică, informatică.</span></span>",
          "<span class='tip'><strong>Vizite și excursii în medii tehnologice reale</strong><span class='tooltip-box'>Contact direct cu procesele de producție și tehnologiile moderne.</span></span>",
          "<span class='tip'><strong>Exclusiv prin prelegeri teoretice</strong><span class='tooltip-box'>Distractor: educația tehnologică presupune acțiune.</span></span>",
        ],
        answer: [0, 1, 2],
      },
    ],
  },
  {
    id: "fped-u2-q24",
    title: "Orientarea școlară ca dimensiune a educației tehnologice",
    questions: [
      {
        text: "Care sunt <strong>obiectivele centrale ale orientării școlare</strong> ca dimensiune a educației tehnologice?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Cunoașterea profilului aptitudinal și aspirațional al elevilor</strong><span class='tooltip-box'>Orientarea pornește de la ceea ce elevul este, poate și își dorește să devină.<br><br><strong>Exemplu:</strong> identificarea înclinațiilor tehnice, creative sau analitice ale unui elev.</span></span>",
          "<span class='tip'><strong>Informarea elevilor despre posibilitățile de devenire profesională</strong><span class='tooltip-box'>Elevii trebuie să cunoască opțiunile reale existente în câmpul profesiilor.<br><br><strong>Exemplu:</strong> prezentarea traseelor educaționale și a calificărilor tehnice.</span></span>",
          "<span class='tip'><strong>Corelarea intereselor personale cu dinamica profesiilor</strong><span class='tooltip-box'>Orientarea eficientă pune în relație interesele elevului cu evoluțiile pieței muncii.</span></span>",
          "<span class='tip'><strong>Impunerea unei opțiuni profesionale de către adulți</strong><span class='tooltip-box'>Distractor: opțiunile trebuie să fie libere, realiste și neconstrânse.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce condiții asigură <strong>pertinența orientării școlare</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Cunoașterea profundă a opțiunilor elevilor</strong><span class='tooltip-box'>Opțiunile trebuie analizate realist și contextualizat.</span></span>",
          "<span class='tip'><strong>Exprimarea liberă a aspirațiilor</strong><span class='tooltip-box'>Fără constrângeri parentale, sociale sau economice.</span></span>",
          "<span class='tip'><strong>Adecvarea opțiunilor la contextul comunitar și social</strong><span class='tooltip-box'>Orientarea ține cont de timp, spațiu și oportunități reale.</span></span>",
          "<span class='tip'><strong>Decizii rapide și definitive la vârste mici</strong><span class='tooltip-box'>Distractor: orientarea este un proces, nu un act punctual.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce exprimă <strong>maturitatea vocațională</strong> în procesul orientării școlare?",
        options: [
          "<span class='tip'><strong>Capacitatea elevului de a alege informat și responsabil un traseu profesional</strong><span class='tooltip-box'>Maturitatea vocațională se formează prin coparticipare, deliberare și responsabilizare.</span></span>",
          "<span class='tip'><strong>Acceptarea pasivă a unei profesii alese de alții</strong><span class='tooltip-box'>Distractor: contrazice ideea de autonomie vocațională.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum contribuie educația tehnologică la <strong>integrarea socioprofesională</strong> a individului?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Facilitează alegerea în cunoștință de cauză a profesiei</strong><span class='tooltip-box'>Educația tehnologică sprijină decizii informate.</span></span>",
          "<span class='tip'><strong>Dezvoltă capacitatea de adaptare la schimbările din câmpul muncii</strong><span class='tooltip-box'>Elevii sunt pregătiți pentru flexibilitate și reconversie profesională.</span></span>",
          "<span class='tip'><strong>Activează aptitudinile tehnice și hobby-urile relevante</strong><span class='tooltip-box'>Interesele personale pot deveni resurse profesionale.</span></span>",
          "<span class='tip'><strong>Asigură un traseu profesional unic și fix</strong><span class='tooltip-box'>Distractor: realitatea profesională presupune alternative.</span></span>",
        ],
        answer: [0, 1, 2],
      },
    ],
  },
  {
    id: "fped-u2-q25",
    title: "Educația fizică. Sarcini specifice și nespecifice",
    questions: [
      {
        text: "Care afirmații descriu corect <strong>educația fizică</strong> ca dimensiune formativă?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Este fiziologică prin natura exercițiilor</strong><span class='tooltip-box'>Exercițiile fizice acționează direct asupra organismului și funcțiilor sale biologice.</span></span>",
          "<span class='tip'><strong>Este pedagogică prin metodele utilizate</strong><span class='tooltip-box'>Educația fizică folosește strategii didactice adaptate vârstei și scopurilor educative.</span></span>",
          "<span class='tip'><strong>Este socială prin modul de organizare și activitate</strong><span class='tooltip-box'>Activitățile de grup dezvoltă cooperarea și respectarea regulilor.</span></span>",
          "<span class='tip'><strong>Este exclusiv orientată spre performanță sportivă</strong><span class='tooltip-box'>Distractor educația fizică vizează formarea globală nu doar performanța.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care dintre următoarele aparțin <strong>sarcinilor specifice ale educației fizice</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Dezvoltarea și fortificarea fizică a elevului</strong><span class='tooltip-box'>Vizează creșterea armonioasă și sănătoasă a corpului.</span></span>",
          "<span class='tip'><strong>Consolidarea capacităților fiziologice ale organismului</strong><span class='tooltip-box'>Funcționarea normală a organelor și aparatelor corpului.</span></span>",
          "<span class='tip'><strong>Crearea armoniei dintre trup și suflet</strong><span class='tooltip-box'>Educația fizică contribuie la echilibrul corporal și spiritual.</span></span>",
          "<span class='tip'><strong>Stimularea gândirii abstracte teoretice</strong><span class='tooltip-box'>Distractor aceasta este o sarcină predominant cognitivă.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce caracterizează <strong>sarcinile nespecifice ale educației fizice</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Stimularea proceselor cognitive</strong><span class='tooltip-box'>Atenția observația și gândirea în acțiune sunt activate prin mișcare.</span></span>",
          "<span class='tip'><strong>Dezvoltarea proceselor afective</strong><span class='tooltip-box'>Mișcarea generează bucurie satisfacție și încredere în sine.</span></span>",
          "<span class='tip'><strong>Consolidarea capacităților volitive</strong><span class='tooltip-box'>Curaj perseverență inițiativă consecvență spirit de dreptate și fair play.</span></span>",
          "<span class='tip'><strong>Transmiterea exclusivă de cunoștințe teoretice</strong><span class='tooltip-box'>Distractor educația fizică nu este centrată pe teorie.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Formarea <strong>aptitudinilor psihomotorii</strong> prin educația fizică presupune:",
        multiple: true,
        options: [
          "<span class='tip'><strong>Dezvoltarea forței și a reactivității</strong><span class='tooltip-box'>Capacitatea de a răspunde rapid și eficient la stimuli.</span></span>",
          "<span class='tip'><strong>Creșterea preciziei și coordonării</strong><span class='tooltip-box'>Controlul mișcărilor și adaptarea lor la situații variate.</span></span>",
          "<span class='tip'><strong>Dezvoltarea mobilității și rapidității</strong><span class='tooltip-box'>Ușurința de mișcare și eficiența execuției motrice.</span></span>",
          "<span class='tip'><strong>Reducerea implicării emoționale</strong><span class='tooltip-box'>Distractor educația fizică valorifică dimensiunea afectivă.</span></span>",
        ],
        answer: [0, 1, 2],
      },
      {
        text: "Care sunt <strong>forme de realizare a educației fizice</strong> menționate în literatura pedagogică?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Ora de educație fizică și gimnastica de înviorare</strong><span class='tooltip-box'>Reprezintă forme organizate sistematic în cadrul școlii, cu rol de menținere și dezvoltare a capacității fizice generale.</span></span>",
          "<span class='tip'><strong>Cercurile sportive și activitățile sportiv-turistice din timpul liber</strong><span class='tooltip-box'>Aceste forme valorifică timpul liber și motivația intrinsecă a elevilor, contribuind la formarea obiceiurilor de viață activă.</span></span>",
          "<span class='tip'><strong>Activitățile sportive de performanță</strong><span class='tooltip-box'>Vizează elevii cu aptitudini deosebite și presupun antrenament sistematic orientat spre rezultate sportive.</span></span>",
          "<span class='tip'><strong>Traseul aplicativ cu sau fără obstacole</strong><span class='tooltip-box'>Formă complexă care combină mai multe exerciții și solicită coordonarea, forța, viteza și adaptarea la situații variate.</span></span>",
          "<span class='tip'><strong>Transmiterea teoretică a regulilor sportului</strong><span class='tooltip-box'>Distractor educația fizică se realizează preponderent prin activitate motrică, nu prin predare exclusiv teoretică.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },
    ],
  },
  {
    id: "fped-u2-q26",
    title: "Obiectivele educației fizice",
    questions: [
      {
        text: "Ce caracterizează <strong>obiectivele educației fizice cu funcții sanotrofice</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Recreerea și fortificarea organismului</strong><span class='tooltip-box'>Prin exerciții fizice sistematice, organismul se reface, se întărește și își menține echilibrul funcțional.</span></span>",
          "<span class='tip'><strong>Sporirea capacității de efort</strong><span class='tooltip-box'>Educația fizică antrenează rezistența generală a organismului la solicitări fizice și psihice.</span></span>",
          "<span class='tip'><strong>Dezvoltarea gândirii tactice</strong><span class='tooltip-box'>Distractor: gândirea tactică ține de funcțiile formative intelectuale, nu de cele sanotrofice.</span></span>",
          "<span class='tip'><strong>Menținerea și îmbunătățirea stării de sănătate</strong><span class='tooltip-box'>Funcția sanotrofică are ca scop protejarea sănătății și prevenirea dezechilibrelor funcționale.</span></span>",
        ],
        answer: [0, 1, 3],
      },

      {
        text: "Care sunt <strong>obiectivele cu funcții formative din punct de vedere motric</strong> ale educației fizice?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Dezvoltarea capacităților motrice</strong><span class='tooltip-box'>Forța, viteza, rezistența, îndemânarea și suplețea sunt capacități de bază ale motricității.</span></span>",
          "<span class='tip'><strong>Formarea deprinderilor motrice de bază</strong><span class='tooltip-box'>Mersul, alergarea, săritura, aruncarea sau cățărarea sunt fundamentale pentru activitatea motrică.</span></span>",
          "<span class='tip'><strong>Însușirea actelor motrice complexe</strong><span class='tooltip-box'>Prin discipline sportive precum gimnastica, atletismul sau jocurile sportive.</span></span>",
          "<span class='tip'><strong>Dezvoltarea solidarității și cooperării</strong><span class='tooltip-box'>Distractor: acestea aparțin funcțiilor formative sociale și moral-volitive.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce vizează <strong>obiectivele educației fizice cu funcții formative pe plan intelectual și moral-volitiv</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Dezvoltarea spiritului de observație și a creativității</strong><span class='tooltip-box'>În special prin jocuri sportive și sporturi individuale care solicită adaptare și anticipare.</span></span>",
          "<span class='tip'><strong>Formarea spiritului de fair-play și a respectului față de ceilalți</strong><span class='tooltip-box'>Competiția sportivă educă atitudini morale și comportamente corecte.</span></span>",
          "<span class='tip'><strong>Dezvoltarea perseverenței și a stăpânirii de sine</strong><span class='tooltip-box'>Efortul fizic susținut antrenează voința și autocontrolul.</span></span>",
          "<span class='tip'><strong>Creșterea exclusivă a masei musculare</strong><span class='tooltip-box'>Distractor: acesta este un efect fizic, nu un obiectiv intelectual sau moral-volitiv.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care sunt <strong>obiectivele educației fizice cu funcții sociale</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Formarea obiceiului de practicare sistematică a exercițiilor fizice</strong><span class='tooltip-box'>Educația fizică urmărește adoptarea unui stil de viață activ pe termen lung.</span></span>",
          "<span class='tip'><strong>Dezvoltarea motivației intrinseci pentru activitatea fizică</strong><span class='tooltip-box'>Interesul pentru mișcare trebuie menținut dincolo de cadrul școlar.</span></span>",
          "<span class='tip'><strong>Selecția și pregătirea indivizilor supradotați pentru sportul de performanță</strong><span class='tooltip-box'>Educația fizică contribuie și la identificarea potențialului sportiv deosebit.</span></span>",
          "<span class='tip'><strong>Recuperarea și reabilitarea persoanelor cu deficiențe motrice</strong><span class='tooltip-box'>Activitatea fizică are rol social și integrativ, inclusiv în contexte terapeutice.</span></span>",
          "<span class='tip'><strong>Transmiterea abstractă a valorilor culturale</strong><span class='tooltip-box'>Distractor: funcțiile sociale se realizează prin practică și interacțiune, nu teoretic.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },
    ],
  },
  {
    id: "fped-u2-q27",
    title: "Educația sexuală. Rol și dimensiuni formative",
    questions: [
      {
        text: "De ce este considerată <strong>sexualitatea</strong> o dimensiune importantă a existenței umane?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Face parte integrantă din dezvoltarea personalității</strong><span class='tooltip-box'>Sexualitatea influențează identitatea, relațiile interpersonale și echilibrul emoțional al individului.</span></span>",
          "<span class='tip'><strong>Necesită o pregătire adecvată pentru a fi înțeleasă și gestionată corect</strong><span class='tooltip-box'>Fără educație, sexualitatea poate fi trăită confuz, anxios sau responsabil inadecvat.</span></span>",
          "<span class='tip'><strong>Este un aspect exclusiv biologic al vieții umane</strong><span class='tooltip-box'>Distractor: sexualitatea nu se reduce la dimensiunea biologică.</span></span>",
          "<span class='tip'><strong>Influențează relațiile sociale și afective</strong><span class='tooltip-box'>Modul în care individul își trăiește sexualitatea are impact asupra relațiilor de cuplu și sociale.</span></span>",
        ],
        answer: [0, 1, 3],
      },

      {
        text: "Cum trebuie înțeleasă <strong>educația sexuală</strong> din perspectivă pedagogică?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Nu trebuie limitată la informarea anatomică și fiziologică</strong><span class='tooltip-box'>O educație exclusiv biologică este insuficientă pentru formarea unei conduite responsabile.</span></span>",
          "<span class='tip'><strong>Include dimensiuni igienice, morale și sociale</strong><span class='tooltip-box'>Educația sexuală vizează sănătatea, responsabilitatea și respectul față de sine și ceilalți.</span></span>",
          "<span class='tip'><strong>Este în strânsă legătură cu valorile morale și civice</strong><span class='tooltip-box'>Deciziile legate de sexualitate implică norme, valori și responsabilitate socială.</span></span>",
          "<span class='tip'><strong>Se reduce la transmiterea de informații științifice</strong><span class='tooltip-box'>Distractor: educația sexuală presupune și formarea atitudinilor și comportamentelor.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce rol are <strong>axa valorilor morale, civice și sociale</strong> în educația sexuală?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Orientează comportamentele sexuale responsabile</strong><span class='tooltip-box'>Valorile oferă repere pentru decizii asumate și respectuoase.</span></span>",
          "<span class='tip'><strong>Contribuie la formarea unei conduite echilibrate</strong><span class='tooltip-box'>Educația sexuală sprijină autocontrolul și respectul reciproc.</span></span>",
          "<span class='tip'><strong>Favorizează integrarea socială armonioasă</strong><span class='tooltip-box'>Respectarea normelor sociale facilitează relații sănătoase și acceptare socială.</span></span>",
          "<span class='tip'><strong>Înlocuiește complet informațiile biologice</strong><span class='tooltip-box'>Distractor: dimensiunea valorică completează, nu elimină, informațiile biologice.</span></span>",
        ],
        answer: [0, 1, 2],
      },
    ],
  },
  {
    id: "fped-u2-q28",
    title: "Educația sexuală. Factorii responsabili",
    questions: [
      {
        text: "Ce rol are <strong>familia</strong> în realizarea educației sexuale?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Furnizează primele repere și conduite legate de sexualitate</strong><span class='tooltip-box'>Părinții sunt prima sursă de informații, modele și atitudini privind sexualitatea copilului.</span></span>",
          "<span class='tip'><strong>Necesită competență și sinceritate în dialogul cu copilul</strong><span class='tooltip-box'>Un climat de încredere permite abordarea firească și adecvată a curiozităților copilului.</span></span>",
          "<span class='tip'><strong>Poate greși prin autoritarism sau liberalism exagerat</strong><span class='tooltip-box'>Autoritarismul reprimă curiozitatea, iar liberalismul excesiv elimină reperele și limitele necesare.</span></span>",
          "<span class='tip'><strong>Are rol exclusiv biologic și informativ</strong><span class='tooltip-box'>Distractor: rolul familiei este și afectiv, moral și formativ.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care sunt <strong>dificultăți frecvente</strong> întâlnite la nivelul familiei în abordarea educației sexuale?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Indiferența față de importanța educației sexuale</strong><span class='tooltip-box'>Apare frecvent în medii defavorizate cultural sau marcate de lipsa informării.</span></span>",
          "<span class='tip'><strong>Incapacitatea părinților de a se raporta la problemele actuale ale copilului</strong><span class='tooltip-box'>Diferențele generaționale pot bloca dialogul eficient.</span></span>",
          "<span class='tip'><strong>Interzicerea totală a discuțiilor despre sexualitate</strong><span class='tooltip-box'>Motivată adesea religios sau moral, această strategie favorizează dezinformarea.</span></span>",
          "<span class='tip'><strong>Deschiderea și dialogul constant cu copilul</strong><span class='tooltip-box'>Distractor: aceasta este o strategie pozitivă, nu o dificultate.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Cum contribuie <strong>școala</strong> la realizarea educației sexuale?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Inițiază sistematic elevii în bazele fiziologice, psihologice și sociale ale sexualității</strong><span class='tooltip-box'>Școala asigură un cadru structurat și coerent de informare și formare.</span></span>",
          "<span class='tip'><strong>Își asumă rolul de îndrumător și consilier al părinților</strong><span class='tooltip-box'>Colaborarea școală–familie este esențială pentru intervenții educative coerente.</span></span>",
          "<span class='tip'><strong>Evita complet abordarea subiectului din motive de reținere profesională</strong><span class='tooltip-box'>Distractor: deși există rețineri, școala nu trebuie să evite acest rol.</span></span>",
          "<span class='tip'><strong>Completează și corectează influențele informale</strong><span class='tooltip-box'>Educația școlară poate contrabalansa informațiile incomplete sau eronate din alte surse.</span></span>",
        ],
        answer: [0, 1, 3],
      },

      {
        text: "Ce impact pot avea <strong>mass-media</strong> și <strong>mediul informal</strong> asupra educației sexuale?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Pot furniza informații insuficiente sau distorsionate</strong><span class='tooltip-box'>Conținuturile media pot supradimensiona sau trivializa sexualitatea.</span></span>",
          "<span class='tip'><strong>Pot induce percepții false sau dezechilibrate asupra sexualității</strong><span class='tooltip-box'>Industria pornografică sau mesajele senzaționaliste afectează reprezentările sănătoase.</span></span>",
          "<span class='tip'><strong>Pot avea un rol educativ dacă sunt corect selectate și ghidate</strong><span class='tooltip-box'>Filmele, emisiunile specializate sau apelul la experți pot sprijini educația sexuală.</span></span>",
          "<span class='tip'><strong>Sunt complet lipsite de influență asupra formării elevilor</strong><span class='tooltip-box'>Distractor: mediul informal are adesea cea mai mare influență.</span></span>",
        ],
        answer: [0, 1, 2],
      },
    ],
  },
  {
    id: "fped-u2-q29",
    title: "Educația sexuală. Modalități de informare",
    questions: [
      {
        text: "Ce caracterizează <strong>informarea nonverbală</strong> în contextul educației sexuale?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Include tot ceea ce vedem, auzim și sesizăm în viața cotidiană</strong><span class='tooltip-box'>Gesturile, imaginile din media, comportamentele adulților sau ale grupului de prieteni transmit mesaje despre sexualitate fără a fi explicite.</span></span>",
          "<span class='tip'><strong>Influențează sensibilizarea față de problematica sexualității</strong><span class='tooltip-box'>Expunerea repetată la anumite modele poate normaliza sau distorsiona percepția asupra sexualității.</span></span>",
          "<span class='tip'><strong>Are rol exclusiv informativ și nu formativ</strong><span class='tooltip-box'>Distractor: informarea nonverbală modelează atitudini, valori și conduite.</span></span>",
          "<span class='tip'><strong>Acționează adesea fără control educativ direct</strong><span class='tooltip-box'>Mesajele nonverbale nu sunt întotdeauna filtrate sau explicate de adulți.</span></span>",
        ],
        answer: [0, 1, 3],
      },

      {
        text: "Cum se definește <strong>informarea verbală familială</strong> în educația sexuală?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Este realizată în principal de părinți</strong><span class='tooltip-box'>Familia oferă primele explicații și norme privind viața intimă și sexuală.</span></span>",
          "<span class='tip'><strong>Se referă la reguli, cutume și norme de igienă</strong><span class='tooltip-box'>Informațiile privesc comportamentele considerate adecvate sau interzise.</span></span>",
          "<span class='tip'><strong>Este întotdeauna sistematică și științific fundamentată</strong><span class='tooltip-box'>Distractor: informarea familială este adesea difuză și bazată pe experiență personală.</span></span>",
          "<span class='tip'><strong>Influențează modul în care copilul își gestionează viața intimă</strong><span class='tooltip-box'>Mesajele familiei devin repere interne pentru copil.</span></span>",
        ],
        answer: [0, 1, 3],
      },

      {
        text: "Ce specific are <strong>informarea de ordin științific</strong> în educația sexuală?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Este realizată de persoane specializate</strong><span class='tooltip-box'>Profesori, medici sau asistenți sociali oferă informații validate științific.</span></span>",
          "<span class='tip'><strong>Presupune demersuri planificate și sistematice</strong><span class='tooltip-box'>Informațiile sunt structurate progresiv și adaptate vârstei elevilor.</span></span>",
          "<span class='tip'><strong>Exclude dimensiunea formativă și valorică</strong><span class='tooltip-box'>Distractor: informarea științifică poate susține și formarea atitudinilor responsabile.</span></span>",
          "<span class='tip'><strong>Corectează informațiile eronate din mediul informal</strong><span class='tooltip-box'>Educația școlară poate contrabalansa miturile sau dezinformarea.</span></span>",
        ],
        answer: [0, 1, 3],
      },

      {
        text: "Care sunt <strong>condiții esențiale</strong> pentru informarea elevilor de către profesori în educația sexuală?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Respectul și încrederea în relația profesor–elev</strong><span class='tooltip-box'>Dialogul trebuie să fie unul de la matur la matur, bazat pe empatie și deschidere.</span></span>",
          "<span class='tip'><strong>Manifestarea empatiei și a disponibilității de a asculta</strong><span class='tooltip-box'>Elevul trebuie să se simtă în siguranță să se confeseze.</span></span>",
          "<span class='tip'><strong>Impunerea unor judecăți morale rigide</strong><span class='tooltip-box'>Distractor: rigiditatea inhibă dialogul și încrederea.</span></span>",
          "<span class='tip'><strong>Clarificarea caracterului personal și intim al vieții sexuale</strong><span class='tooltip-box'>Elevul este responsabil pentru propriile decizii și reflecții.</span></span>",
        ],
        answer: [0, 1, 3],
      },

      {
        text: "Ce trebuie să conștientizeze elevul în raport cu <strong>activitatea erotico-sexuală</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Că este o dimensiune personală și intimă a vieții</strong><span class='tooltip-box'>Sexualitatea ține de identitatea și responsabilitatea individuală.</span></span>",
          "<span class='tip'><strong>Că este singurul responsabil pentru propriile acțiuni</strong><span class='tooltip-box'>Justificarea comportamentelor se face prin reflecție personală, nu prin raportare la alții.</span></span>",
          "<span class='tip'><strong>Că deciziile pot fi transferate altora</strong><span class='tooltip-box'>Distractor: responsabilitatea nu poate fi delegată.</span></span>",
          "<span class='tip'><strong>Că reflecția și sentimentele proprii sunt criterii esențiale de evaluare</strong><span class='tooltip-box'>Autocontrolul și asumarea sunt obiective centrale ale educației sexuale.</span></span>",
        ],
        answer: [0, 1, 3],
      },
    ],
  },
  {
    id: "fped-u2-q30",
    title: "Noile educații. Context și tipologii",
    questions: [
      {
        text: "Ce a determinat apariția conceptului de <strong>noile educații</strong> în plan educațional?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Analiza problematicii contemporane</strong><span class='tooltip-box'>Schimbările sociale, economice și culturale au generat noi nevoi educaționale.</span></span>",
          "<span class='tip'><strong>Identificarea marilor teme care solicită reflecție</strong><span class='tooltip-box'>Teme globale precum pacea, mediul sau drepturile omului impun răspunsuri educative.</span></span>",
          "<span class='tip'><strong>Necesitatea unor răspunsuri educaționale specifice</strong><span class='tooltip-box'>Educația se adaptează pentru a răspunde provocărilor actuale ale societății.</span></span>",
          "<span class='tip'><strong>Renunțarea la educația tradițională</strong><span class='tooltip-box'>Distractor: noile educații completează, nu elimină educația clasică.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Cum pot fi înțelese <strong>noile educații</strong> din perspectiva conținuturilor?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Ca potențări ale unor direcții educative existente</strong><span class='tooltip-box'>Ele dezvoltă și extind dimensiuni deja prezente în educație.</span></span>",
          "<span class='tip'><strong>Ca tipuri noi de conținut educativ</strong><span class='tooltip-box'>Răspund unor cerințe sociale recente și specifice.</span></span>",
          "<span class='tip'><strong>Ca reacții la transformările realității sociale</strong><span class='tooltip-box'>Educația se adaptează permanent contextului în care funcționează.</span></span>",
          "<span class='tip'><strong>Ca structuri rigide și definitive</strong><span class='tooltip-box'>Distractor: noile educații sunt flexibile și deschise schimbării.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care dintre următoarele sunt exemple de <strong>noile educații</strong> menționate în literatura pedagogică?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Educația pentru pace</strong><span class='tooltip-box'>Promovează nonviolența, cooperarea și înțelegerea între oameni.</span></span>",
          "<span class='tip'><strong>Educația ecologică</strong><span class='tooltip-box'>Vizează protejarea mediului și responsabilitatea față de natură.</span></span>",
          "<span class='tip'><strong>Educația pentru comunicare și mass media</strong><span class='tooltip-box'>Formează capacitatea de a analiza critic mesajele media.</span></span>",
          "<span class='tip'><strong>Educația exclusiv intelectuală</strong><span class='tooltip-box'>Distractor: aceasta aparține educației clasice, nu noilor educații.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce caracteristică definitorie au <strong>noile educații</strong> în raport cu dinamica socială?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Sunt supuse schimbării și reconfigurării</strong><span class='tooltip-box'>Unele pot dispărea, altele pot apărea în funcție de realitate.</span></span>",
          "<span class='tip'><strong>Răspund cerințelor și nevoilor actuale ale societății</strong><span class='tooltip-box'>Ele reflectă prioritățile unei epoci.</span></span>",
          "<span class='tip'><strong>Pot impune noi cerințe și conținuturi educative</strong><span class='tooltip-box'>Educația devine un instrument de adaptare socială.</span></span>",
          "<span class='tip'><strong>Au un conținut fix și imuabil</strong><span class='tooltip-box'>Distractor: caracterul lor este deschis și evolutiv.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "De ce sunt considerate <strong>noile educații</strong> relevante pentru educația contemporană?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Conectează educația la realitatea globală</strong><span class='tooltip-box'>Abordează teme precum democrația, drepturile omului sau dezvoltarea durabilă.</span></span>",
          "<span class='tip'><strong>Susțin adaptarea individului la schimbare</strong><span class='tooltip-box'>Pregătesc elevul pentru contexte sociale și profesionale dinamice.</span></span>",
          "<span class='tip'><strong>Contribuie la formarea unei personalități responsabile</strong><span class='tooltip-box'>Pun accent pe valori civice, morale și sociale.</span></span>",
          "<span class='tip'><strong>Exclud dimensiunea valorilor</strong><span class='tooltip-box'>Distractor: noile educații sunt profund axate pe valori.</span></span>",
        ],
        answer: [0, 1, 2],
      },
    ],
  },
  {
    id: "fped-u2-q31",
    title:
      "Educația pentru pace și respectarea drepturilor fundamentale ale omului",
    questions: [
      {
        text: "Care sunt <strong>scopurile generale ale educației pentru pace</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Promovarea dialogului și a cooperării</strong><span class='tooltip-box'>Educația pentru pace urmărește relații constructive între indivizi și comunități.</span></span>",
          "<span class='tip'><strong>Îmbunătățirea relațiilor dintre comunități</strong><span class='tooltip-box'>Pacea presupune colaborare și înțelegere reciprocă.</span></span>",
          "<span class='tip'><strong>Formarea persoanelor pentru apărarea păcii și a liniștii</strong><span class='tooltip-box'>Individul este pregătit să susțină activ valorile păcii.</span></span>",
          "<span class='tip'><strong>Impunerea forțată a conformismului social</strong><span class='tooltip-box'>Distractor: educația pentru pace se bazează pe convingere, nu constrângere.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce obiective specifice sunt vizate de <strong>educația pentru pace</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Achiziționarea de concepte legate de pace și cooperare</strong><span class='tooltip-box'>Noțiuni precum dezarmarea, echitatea sau nonviolența sunt esențiale.</span></span>",
          "<span class='tip'><strong>Formarea de aptitudini și însușiri de personalitate</strong><span class='tooltip-box'>Toleranța, receptivitatea și respectarea opiniilor celorlalți.</span></span>",
          "<span class='tip'><strong>Structurarea unor atitudini responsabile față de comunitate și umanitate</strong><span class='tooltip-box'>Solidaritatea și încrederea în semeni sunt valori centrale.</span></span>",
          "<span class='tip'><strong>Încurajarea competiției agresive între grupuri</strong><span class='tooltip-box'>Distractor: pacea exclude agresivitatea și ostilitatea.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care sunt cele <strong>două laturi ale educației pentru pace</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Combaterea ideilor și conceptelor care favorizează atitudini ostile</strong><span class='tooltip-box'>Vizează eliminarea propagandei agresive și războinice.</span></span>",
          "<span class='tip'><strong>Promovarea conduitelor pașnice și a respectului între indivizi</strong><span class='tooltip-box'>Se centrează pe empatie, înțelegere și dragoste.</span></span>",
          "<span class='tip'><strong>Neutralitatea totală față de conflicte</strong><span class='tooltip-box'>Distractor: educația pentru pace presupune poziționare activă.</span></span>",
          "<span class='tip'><strong>Acceptarea pasivă a violenței simbolice</strong><span class='tooltip-box'>Distractor: orice formă de violență este respinsă.</span></span>",
        ],
        answer: [0, 1],
      },

      {
        text: "Ce vizează <strong>educația pentru respectarea drepturilor fundamentale ale omului</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Conștientizarea drepturilor la viață, liberă exprimare și opinie</strong><span class='tooltip-box'>Educația urmărește informarea și responsabilizarea indivizilor.</span></span>",
          "<span class='tip'><strong>Respectarea propriei identități și a celor diferiți de noi</strong><span class='tooltip-box'>Diversitatea este valorizată ca principiu democratic.</span></span>",
          "<span class='tip'><strong>Eliminarea ideologiilor care promovează discriminarea și inegalitatea</strong><span class='tooltip-box'>Educația combate rasismul, xenofobia și supremația.</span></span>",
          "<span class='tip'><strong>Limitarea libertăților individuale în numele ordinii</strong><span class='tooltip-box'>Distractor: drepturile fundamentale protejează libertatea, nu o restrâng arbitrar.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Prin ce modalități se poate realiza eficient <strong>educația pentru pace și drepturile omului</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Propagarea documentelor internaționale privind drepturile omului</strong><span class='tooltip-box'>Declarații și convenții oferă repere normative universale.</span></span>",
          "<span class='tip'><strong>Crearea unui front atitudinal activ împotriva justificării conflictelor</strong><span class='tooltip-box'>Implică elevi, profesori, părinți și factori de decizie.</span></span>",
          "<span class='tip'><strong>Alinierea cu producții artistice și manifestări purtătoare de mesaje pacifiste</strong><span class='tooltip-box'>Arta și cultura pot transmite valori ale păcii.</span></span>",
          "<span class='tip'><strong>Indiferența față de mesajele publice conflictuale</strong><span class='tooltip-box'>Distractor: educația presupune implicare activă, nu pasivitate.</span></span>",
        ],
        answer: [0, 1, 2],
      },
    ],
  },
  {
    id: "fped-u2-q32",
    title: "Educația ecologică. Necesitate și semnificații",
    questions: [
      {
        text: "Care este <strong>scopul principal al educației ecologice</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Sensibilizarea omului față de ecosistemul în care trăiește</strong><span class='tooltip-box'>Educația ecologică urmărește conștientizarea relației dintre om și mediul natural.</span></span>",
          "<span class='tip'><strong>Optimizarea relației dintre om și natură</strong><span class='tooltip-box'>Vizează dezvoltarea unor conduite responsabile față de mediul înconjurător.</span></span>",
          "<span class='tip'><strong>Adaptarea activităților umane la limitele mediului</strong><span class='tooltip-box'>Activitatea umană trebuie corelată cu echilibrul ecologic.</span></span>",
          "<span class='tip'><strong>Exploatarea intensivă a resurselor naturale</strong><span class='tooltip-box'>Distractor: educația ecologică combate exploatarea nerațională.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce <strong>factori generează necesitatea educației ecologice</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Consecințele dezechilibrului dintre mediu și dezvoltare</strong><span class='tooltip-box'>Dezechilibrul produce efecte grave asupra naturii și societății.</span></span>",
          "<span class='tip'><strong>Industrializarea nerațională</strong><span class='tooltip-box'>Aceasta conduce la poluare și distrugerea mediului natural.</span></span>",
          "<span class='tip'><strong>Apariția unor boli generate de degradarea cadrului natural</strong><span class='tooltip-box'>Poluarea aerului apei și solului afectează sănătatea umană.</span></span>",
          "<span class='tip'><strong>Creșterea nivelului de confort tehnologic</strong><span class='tooltip-box'>Distractor: confortul tehnologic nu justifică degradarea mediului.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce semnifică termenul de <strong>„analfabetism ecologic”</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Lipsa cunoștințelor și a responsabilității față de mediu</strong><span class='tooltip-box'>Conduce la comportamente iresponsabile față de natură.</span></span>",
          "<span class='tip'><strong>Generarea unor conduite cu efecte negative pe termen lung</strong><span class='tooltip-box'>Efectele apar atât în prezent cât și în perspectivă.</span></span>",
          "<span class='tip'><strong>Ignorarea legăturii dintre acțiunile umane și consecințele ecologice</strong><span class='tooltip-box'>Omul nu anticipează impactul propriilor decizii asupra mediului.</span></span>",
          "<span class='tip'><strong>Specializarea exclusiv tehnică a individului</strong><span class='tooltip-box'>Distractor: specializarea nu implică automat analfabetism ecologic.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care sunt <strong>efecte posibile ale analfabetismului ecologic</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Alunecări de teren și inundații</strong><span class='tooltip-box'>Rezultate ale defrișărilor și gestionării defectuoase a mediului.</span></span>",
          "<span class='tip'><strong>Secetă și distrugerea stratului de ozon</strong><span class='tooltip-box'>Dezechilibre majore cauzate de activități umane necontrolate.</span></span>",
          "<span class='tip'><strong>Poluare radioactivă și degradarea solului</strong><span class='tooltip-box'>Consecințe grave cu impact asupra sănătății și ecosistemelor.</span></span>",
          "<span class='tip'><strong>Creșterea empatiei față de natură</strong><span class='tooltip-box'>Distractor: acesta este un efect al educației ecologice corecte.</span></span>",
        ],
        answer: [0, 1, 2],
      },
    ],
  },
  {
    id: "fped-u2-q33",
    title: "Alte noi educații",
    questions: [
      {
        text: "Ce caracterizează corect <strong>educația economică și casnică modernă</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Pregătirea pentru viața de familie și administrarea bunurilor personale</strong><span class='tooltip-box'>Vizează pregătirea tinerilor pentru o adecvare la lumea bunurilor și la lumea muncii. Poate fi concepută ca o pregătire pentru viața de familie, pentru administrarea bunurilor personale și pentru utilizarea bugetului personal.</span></span>",
          "<span class='tip'><strong>Instrumentalizarea tinerilor cu practici economice de bază</strong><span class='tooltip-box'>În condițiile în care viața economică este foarte dinamică, presupune instrumentalizarea tinerilor cu explicații adiacente, cu termeni de specialitate, cu practici economice de bază.</span></span>",
          "<span class='tip'><strong>Formarea atitudinilor și a gândirii economice fundamentale</strong><span class='tooltip-box'>Include atitudini corespunzătoare, o gândire economică fundamentală și un ideal economic. Constituie o ipostază a pregătirii generale.</span></span>",
          "<span class='tip'><strong>Doar teorie fără aplicabilitate</strong><span class='tooltip-box'>Distractor accentul este pe adecvare la practici economice și gestionarea resurselor, nu pe teorie izolată.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care enunțuri descriu corect <strong>educația pentru participare și democrație</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Democratizarea depinde de predispoziția indivizilor de a acționa</strong><span class='tooltip-box'>Gradul de democratizare a unei societăți este dat de predispoziția indivizilor de a acționa și reacționa, de a genera discuții, de a proiecta și anticipa.</span></span>",
          "<span class='tip'><strong>Se menține prin contribuția fiecărei persoane</strong><span class='tooltip-box'>Caracterul democratic al unei societăți se menține și se promovează prin intermediul fiecărei persoane.</span></span>",
          "<span class='tip'><strong>Formează individul să se implice în luarea deciziilor</strong><span class='tooltip-box'>Individul trebuie format pentru a își exprima poziția, pentru a se implica în luarea deciziilor și pentru a fi mereu treaz din punct de vedere civic.</span></span>",
          "<span class='tip'><strong>Încurajează pasivitatea civică</strong><span class='tooltip-box'>Distractor educația democratică presupune acțiune, reacțiune, dialog și implicare.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Ce include în principal educația în materie de populație <strong>(educația demografică)</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Informare despre dinamica populației și politica demografică</strong><span class='tooltip-box'>Are în vedere informarea indivizilor în chestiuni legate de dinamica populației și de politica demografică.</span></span>",
          "<span class='tip'><strong>Aspecte despre viața de familie și ocrotirea parentală</strong><span class='tooltip-box'>Vizează specificitatea vieții de familie și ocrotirea parentală.</span></span>",
          "<span class='tip'><strong>Abordarea problemelor controversate legate de planificare familială</strong><span class='tooltip-box'>Nu neglijează problemele controversate legate de planificarea familială și întreruperea sarcinilor.</span></span>",
          "<span class='tip'><strong>Ignorarea temelor sensibile</strong><span class='tooltip-box'>Distractor textul precizează că nu sunt neglijate problemele controversate.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Educația pentru comunicare și mass media urmărește:",
        multiple: true,
        options: [
          "<span class='tip'><strong>Gestionarea corectă și adecvată a mesajelor mediatice</strong><span class='tooltip-box'>Își propune să formeze personalitatea indivizilor pentru a gestiona corect și adecvat mesajele mediatice.</span></span>",
          "<span class='tip'><strong>Selectarea și adecvarea surselor informaționale</strong><span class='tooltip-box'>Vizează selectarea și adecvarea surselor informaționale în acord cu valorile adevărului, dreptății și frumuseții.</span></span>",
          "<span class='tip'><strong>Formarea personalității în raport cu mediul informațional</strong><span class='tooltip-box'>Accentul este pe formarea personalității pentru a funcționa responsabil în raport cu comunicarea publică și media.</span></span>",
          "<span class='tip'><strong>Preluarea automată a informațiilor fără criterii</strong><span class='tooltip-box'>Distractor obiectivul este selecția și adecvarea surselor pe baza unor valori, nu acceptarea automată.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care afirmații surprind corect ideea de bază a <strong>educației pentru schimbare</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Schimbarea este o transformare care trebuie pregătită și întâmpinată adecvat</strong><span class='tooltip-box'>Schimbarea nu este un dat, ci o stare, o transformare care trebuie receptată ca atare de către persoană și pentru care trebuie să existe pregătire.</span></span>",
          "<span class='tip'><strong>Formează personalitatea ca agent al schimbării</strong><span class='tooltip-box'>Are ca sarcină formarea personalității ca agent al schimbării și actor responsabil în calitatea schimbării.</span></span>",
          "<span class='tip'><strong>Reduce riscuri precum suficiența, imobilitatea și inactivitatea</strong><span class='tooltip-box'>Educația pentru schimbare poate contribui la formarea unei noi personalități, eliminându se riscuri precum suficiența, imobilitatea, inactivitatea.</span></span>",
          "<span class='tip'><strong>Încurajează evitarea schimbării</strong><span class='tooltip-box'>Distractor accentul este pe receptare, pregătire și responsabilitate față de schimbare.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care pași sunt menționați ca fiind utili în generarea <strong>comportamentului adecvat față de schimbare</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Sesizarea schimbării și pregătirea pentru întâmpinare</strong><span class='tooltip-box'>Primul pas este sesizarea schimbării și pregătirea pentru întâmpinarea acesteia.</span></span>",
          "<span class='tip'><strong>Evaluarea naturii schimbării și a sensurilor ei</strong><span class='tooltip-box'>Evaluarea naturii schimbării, a sensurilor acesteia în timp și spațiu.</span></span>",
          "<span class='tip'><strong>Crearea de situații generatoare de schimbare și modelarea traiectoriilor posibile</strong><span class='tooltip-box'>Crearea unor situații generatoare de schimbare și modelarea unor traiectorii posibile.</span></span>",
          "<span class='tip'><strong>Blocarea deliberată a adaptării</strong><span class='tooltip-box'>Distractor pașii vizează pregătire, evaluare și construcție de traiectorii, nu blocaj.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "<strong>Educația nutrițională</strong> își propune să formeze tânărul în legătură cu:",
        multiple: true,
        options: [
          "<span class='tip'><strong>Valoarea nutriției și selecția rațională a hranei</strong><span class='tooltip-box'>Își propune să îl informeze și să îl formeze pe tânăr în legătură cu valoarea nutriției, a selectării și dozării raționale a hranei.</span></span>",
          "<span class='tip'><strong>Pregătirea adecvată a hranei</strong><span class='tooltip-box'>Include pregătirea adecvată a acesteia ca parte a conduitei alimentare echilibrate.</span></span>",
          "<span class='tip'><strong>Identificarea elementelor autentice și îngrijirea organismului</strong><span class='tooltip-box'>Vizează identificarea elementelor autentice și îngrijirea propriului organism printr un regim alimentar echilibrat și adecvat.</span></span>",
          "<span class='tip'><strong>Ignorarea echilibrului alimentar</strong><span class='tooltip-box'>Distractor regimul alimentar echilibrat și adecvat este explicit menționat.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Educația pentru sănătate urmărește în principal:",
        multiple: true,
        options: [
          "<span class='tip'><strong>Încorporarea cunoștințelor despre boală, sănătate și profilaxie</strong><span class='tooltip-box'>Educația pentru sănătate trebuie să vizeze încorporarea unor cunoștințe specifice cu privire la boală, sănătate, profilaxie.</span></span>",
          "<span class='tip'><strong>Structurarea deprinderilor și conduitelor sanogene</strong><span class='tooltip-box'>Vizează structurarea unor deprinderi și conduite sanogene pentru asigurarea stării de sănătate.</span></span>",
          "<span class='tip'><strong>Formarea atitudinilor pentru păstrarea vieții și respectarea regulilor medicale</strong><span class='tooltip-box'>Include formarea unor atitudini și valori privind importanța păstrării vieții, respingerea stării de degradare și respectarea regulilor de prevenire sau a prescripțiilor medicale.</span></span>",
          "<span class='tip'><strong>Neglijarea prevenției</strong><span class='tooltip-box'>Distractor prevenția și regulile de prevenire sunt menționate explicit.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care enunțuri descriu corect <strong>educația pentru timpul liber</strong> ca nevoie socială?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Oamenii trebuie să învețe să se bucure de timpul liber</strong><span class='tooltip-box'>În condițiile în care timpul liber are tendința să crească, oamenii trebuie să învețe să se bucure de acesta.</span></span>",
          "<span class='tip'><strong>Fără pregătire, timpul liber poate deveni o povară</strong><span class='tooltip-box'>Fără o pregătire adecvată, timpul liber poate deveni o povară, un motiv al decăderii, al alunecării în plictiseală și inactivism.</span></span>",
          "<span class='tip'><strong>Vizează prevenirea plictiselii și a inactivismului</strong><span class='tooltip-box'>Problema este gestionarea timpului liber astfel încât să nu ducă la plictiseală și inactivism.</span></span>",
          "<span class='tip'><strong>Este doar divertisment fără rol formativ</strong><span class='tooltip-box'>Distractor accentul este pe educarea gestionării timpului liber și evitarea efectelor negative.</span></span>",
        ],
        answer: [0, 1, 2],
      },

      {
        text: "Care sunt direcții de acțiune menționate în <strong>educația pentru timpul liber</strong>?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Gestionarea temporalității pentru a dispune de timp liber</strong><span class='tooltip-box'>Obișnuirea indivizilor să își gestioneze mai bine temporalitatea pentru a dispune și de timp liber.</span></span>",
          "<span class='tip'><strong>Încărcarea timpului liber cu activități recreative și productive</strong><span class='tooltip-box'>Încărcarea timpului liber cu activități recreative și productive care să aducă bucurie și împliniri.</span></span>",
          "<span class='tip'><strong>Alternanțe și complementarități între activități</strong><span class='tooltip-box'>Realizarea unor alternanțe și complementarități adecvate între activitățile din timpul liber: fizice, spirituale, de plăcere, de întreținere, necesare, obligatorii.</span></span>",
          "<span class='tip'><strong>Corelarea cu practici formale sau cvasiformale și valorizarea socială</strong><span class='tooltip-box'>Corelarea activităților din timpul liber cu practici formale sau cvasiformale, în perspectiva valorizării la scară socială, prin diferite tipuri de asociații și școli ale femeilor, bătrânilor etc.</span></span>",
          "<span class='tip'><strong>Eliminarea oricărei organizări a timpului liber</strong><span class='tooltip-box'>Distractor textul insistă pe organizare, alternanțe și corelare socială.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },
    ],
  },
];

window.FPED_FLASHCARDS = {
  "fped-u1": [
    {
      id: "fped-u1-deck1",
      title: "FPED U1 Flashcards (template)",
      cards: [
        {
          front: "Front card",
          back: "Back card",
        },
      ],
    },
  ],
};
