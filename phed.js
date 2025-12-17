// Mock data for Psihologia Educației (PHED)
// Structură ușor de editat: capitole → subcapitole → quizuri (id-uri)
// Întrebările sunt mock și pot fi înlocuite rapid după nevoie.

window.PHED_CONTENT = {
  capitole: [
    {
      id: "phed-u2",
      titlu: "U2. Dezvoltarea cognitivă și a limbajului",
      subcapitole: [
        {
          id: "phed-u2-s1",
          titlu: "Dezvoltarea cognitivă - J. Piaget",
          quizuri: ["phed-u2-q1", "phed-u2-q2", "phed-u2-q3"],
        },
        {
          id: "phed-u2-s2",
          titlu: "Dezvoltarea cognitivă - L. Vîgotski",
          quizuri: ["phed-u2-q4"],
        },
        {
          id: "phed-u2-s3",
          titlu: "Analiză comparativă Piaget și Vîgotski",
          quizuri: ["phed-u2-q5"],
        },
        {
          id: "phed-u2-s4",
          titlu: "Dezvoltarea limbajului",
          quizuri: ["phed-u2-q6", "phed-u2-q7"],
        },
      ],
    },
    {
      id: "phed-u3",
      titlu: "U3. Dezvoltarea socială, emoțională și morală",
      subcapitole: [
        {
          id: "phed-u3-s1",
          titlu: "Dezvoltarea socio-emoțională",
          quizuri: ["phed-u3-q1", "phed-u3-q2"],
        },
        {
          id: "phed-u3-s2",
          titlu: "Dezvoltarea morală",
          quizuri: ["phed-u3-q3", "phed-u3-q4", "phed-u3-q5"],
        },
      ],
    },
    {
      id: "phed-u5",
      titlu: "U5. Personalitatea elevului",
      subcapitole: [
        {
          id: "phed-u5-s1",
          titlu: "Personalitatea",
          quizuri: [
            "phed-u5-q1", // Q0. Definiții și concepte fundamentale
            "phed-u5-q2", // Q1. Niveluri de analiză a personalității
            "phed-u5-q3", // Q2. Abordări teoretice ale personalității
            "phed-u5-q4", // Q3. Structura personalității (STATIC)
            "phed-u5-q5", // Q4. Personalitatea ca sistem dinamic și interacționist
          ],
        },
        {
          id: "phed-u5-s2",
          titlu: "Temperamentul",
          quizuri: [
            "phed-u5-q6", // Q0. Definiții și trăsături
            "phed-u5-q7", // Q1. Temperamentul la adolescent și tânăr adult
            "phed-u5-q8", // Q2. Temperamentele în teoria lui Eysenck
          ],
        },
        {
          id: "phed-u5-s3",
          titlu: "Conceptul de sine",
          quizuri: [
            "phed-u5-q9", // Q0. Definiții și concepte asociate
            "phed-u5-q10", // Q1. Conceptul de sine la diferite vârste
            "phed-u5-q11", // Q2. Stima de sine (categorii de elevi – Woolfolk)
            "phed-u5-q12", // Q3. Feedbackul ca suport pentru stima de sine
            "phed-u5-q13", // Q4. Strategii și metode în sala de clasă
          ],
        },
      ],
    },
    {
      id: "phed-u6",
      titlu: "U6. Teoriile învățării",
      subcapitole: [
        { id: "phed-u6-s1", titlu: "Behaviorism", quizuri: ["phed-u6-q1"] },
        {
          id: "phed-u6-s2",
          titlu: "Constructivism și socio-constructivism",
          quizuri: ["phed-u6-q2"],
        },
      ],
    },
    {
      id: "phed-u7",
      titlu: "U7. Rolul factorilor non-cognitivi în învățare",
      subcapitole: [
        {
          id: "phed-u7-s1",
          titlu: "Motivație și mindset",
          quizuri: ["phed-u7-q1"],
        },
        {
          id: "phed-u7-s2",
          titlu: "Emoții și autoreglare afectivă",
          quizuri: ["phed-u7-q2"],
        },
      ],
    },
    {
      id: "phed-u8",
      titlu: "U8. Autoreglarea procesului de învățare",
      subcapitole: [
        {
          id: "phed-u8-s1",
          titlu: "Metacogniție și strategie",
          quizuri: ["phed-u8-q1"],
        },
        {
          id: "phed-u8-s2",
          titlu: "Monitorizare și feedback",
          quizuri: ["phed-u8-q2"],
        },
      ],
    },
    {
      id: "phed-u9",
      titlu: "U9. Ergonomia activității școlare",
      subcapitole: [
        {
          id: "phed-u9-s1",
          titlu: "Climat și spațiu de învățare",
          quizuri: ["phed-u9-q1"],
        },
        {
          id: "phed-u9-s2",
          titlu: "Factori de oboseală și prevenție",
          quizuri: ["phed-u9-q2"],
        },
      ],
    },
    {
      id: "phed-u10",
      titlu: "U10. Gestionarea grupului de elevi",
      subcapitole: [
        {
          id: "phed-u10-s1",
          titlu: "Dinamici de grup și roluri",
          quizuri: ["phed-u10-q1"],
        },
        {
          id: "phed-u10-s2",
          titlu: "Disciplină și managementul clasei",
          quizuri: ["phed-u10-q2"],
        },
      ],
    },
    {
      id: "phed-u11",
      titlu: "U11. Succes și eșec școlar",
      subcapitole: [
        {
          id: "phed-u11-s1",
          titlu: "Factori care susțin succesul",
          quizuri: ["phed-u11-q1"],
        },
        {
          id: "phed-u11-s2",
          titlu: "Intervenții pentru prevenirea eșecului",
          quizuri: ["phed-u11-q2"],
        },
      ],
    },
    {
      id: "phed-u13",
      titlu: "U13. Creativitatea",
      subcapitole: [
        {
          id: "phed-u13-s1",
          titlu: "Caracteristici ale creativității",
          quizuri: ["phed-u13-q1"],
        },
        {
          id: "phed-u13-s2",
          titlu: "Stimularea creativității la clasă",
          quizuri: ["phed-u13-q2"],
        },
      ],
    },
  ],
};

// Quizuri mock (câte unul per subcapitol, ușor de înlocuit)
window.PHED_QUIZ = [
  {
    id: "phed-u2-q1",
    title: "Concepte fundamentale Piaget",
    questions: [
      {
        text: "În teoria dezvoltării cognitive formulate de <strong>Jean Piaget</strong>, copilul este considerat un agent activ care își construiește cunoașterea prin interacțiunea cu mediul. Această construcție se realizează prin structuri mentale relativ stabile numite <strong>scheme</strong>. Definește termenul <strong>scheme</strong>.",
        options: [
          "<span class='tip'>Sunt structuri mentale prin care copilul organizează informațiile și experiențele despre lume<span class='tooltip-box'><strong>Prin acestea copilul</strong> interpretează situațiile noi folosindu-se de experiențele anterioare.<br><br><strong>Exemplu:</strong> un copil care știe ce este un câine va încerca inițial să numească orice animal cu patru picioare câine.</span></span>",
          "<span class='tip'>Reflexe înnăscute care dispar odată cu maturizarea<span class='tooltip-box'><strong>Reflexele</strong> sunt reacții automate prezente la naștere precum reflexul de supt sau de apucare.<br><br>Ele țin de maturizarea biologică și <strong>nu explică organizarea cognitivă</strong> descrisă de Piaget.</span></span>",
          "<span class='tip'>Tipare de comportament impuse de mediul social<span class='tooltip-box'>Această formulare trimite spre <strong>învățarea socială</strong> sau condiționare.<br><br>La Piaget, schemele <strong>nu sunt impuse</strong>, ci construite activ de copil.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Pe măsură ce copilul întâlnește situații noi, el încearcă mai întâi să le interpreteze folosind structurile mentale deja existente. Acest proces este esențial pentru adaptarea cognitivă. Definește <strong>asimilarea</strong>.",
        options: [
          "<span class='tip'>Procesul prin care informația nouă este integrată în schemele deja existente<span class='tooltip-box'><strong>Exemplu:</strong> copilul vede un cal și îl numește câine pentru că îl integrează în schema deja cunoscută.</span></span>",
          "<span class='tip'>Modificarea schemelor pentru a răspunde informației noi<span class='tooltip-box'>Aceasta descrie <strong>acomodarea</strong>, nu asimilarea.<br><br>Apare atunci când schema existentă nu mai este suficientă.</span></span>",
          "<span class='tip'>Învățarea prin imitație și limbaj<span class='tooltip-box'>Această explicație este mai apropiată de <strong>Vîgotski</strong>.<br><br>Asimilarea la Piaget nu presupune neapărat limbaj sau model social.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Există situații în care realitatea nu mai poate fi explicată prin schemele existente. În aceste cazuri apare necesitatea modificării structurilor cognitive. Definește <strong>acomodarea</strong>.",
        options: [
          "<span class='tip'>Repetarea experiențelor pentru consolidarea schemelor<span class='tooltip-box'>Repetarea poate întări o schemă existentă dar <strong>nu o modifică</strong>.<br><br>Acomodarea presupune schimbare structurală.</span></span>",
          "<span class='tip'>Procesul prin care schemele existente se schimbă pentru a se adapta informației noi<span class='tooltip-box'><strong>Exemplu:</strong> copilul învață că un cal nu este câine și creează o schemă separată.</span></span>",
          "<span class='tip'>Echilibrarea emoțională în relația cu mediul<span class='tooltip-box'>Această explicație ține de <strong>reglare emoțională</strong>.<br><br>Acomodarea este un proces cognitiv, nu afectiv.</span></span>",
        ],
        answer: 1,
      },
      {
        text: "Pentru ca experiențele să aibă sens, copilul nu doar adaugă informații noi ci le și leagă între ele într-un sistem coerent. Acest proces poartă numele de <strong>organizare</strong>. Ce presupune organizarea?",
        options: [
          "<span class='tip'>Procesul prin care copilul ordonează și relaționează informațiile și experiențele într-un sistem coerent<span class='tooltip-box'><strong>Exemplu:</strong> conectarea schemelor despre animale domestice și sălbatice.</span></span>",
          "<span class='tip'>Separarea experiențelor în funcție de emoții<span class='tooltip-box'>Aceasta ar descrie mai degrabă <strong>procesarea afectivă</strong>, nu organizarea cognitivă.</span></span>",
          "<span class='tip'>Învățarea prin repetiție mecanică<span class='tooltip-box'>Repetiția mecanică poate duce la memorare dar <strong>nu garantează organizarea logică</strong> a cunoașterii.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Piaget consideră că dezvoltarea cognitivă este ghidată de tendința organismului de a menține un echilibru între cerințele mediului și structurile cognitive. Acest proces global poartă numele de <strong>adaptare</strong>. Definește adaptarea.",
        options: [
          "<span class='tip'>Echilibrarea continuă dintre asimilare și acomodare pentru a face față mediului<span class='tooltip-box'><strong>Exemplu:</strong> copilul își ajustează gândirea atunci când experiențele noi contrazic așteptările inițiale.</span></span>",
          "<span class='tip'>Maturizarea biologică independentă de experiență<span class='tooltip-box'>Aceasta descrie <strong>maturizarea</strong> nu adaptarea cognitivă.<br><br>La Piaget experiența joacă un rol central.</span></span>",
          "<span class='tip'>Învățarea socială prin limbaj<span class='tooltip-box'>Această explicație este caracteristică <strong>teoriei socioculturale</strong> a lui Vîgotski.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u2-q2",
    title: "Stadiile dezvoltării cognitive",
    questions: [
      {
        text: "Jean Piaget descrie dezvoltarea cognitivă ca desfășurându-se în stadii calitativ diferite care se succed într-o ordine relativ invariantă. Care este succesiunea corectă a stadiilor dezvoltării cognitive?",
        options: [
          "<span class='tip'>Senzoriomotor, preoperator, operații concrete, operații formale<span class='tooltip-box'>Aceasta este succesiunea propusă de <strong>Jean Piaget</strong>.<br><br>Fiecare stadiu presupune o reorganizare calitativă a gândirii iar stadiile se construiesc unul pe baza celuilalt.</span></span>",
          "<span class='tip'>Preoperator, senzoriomotor, operații formale, operații concrete<span class='tooltip-box'>Această succesiune este incorectă deoarece <strong>stadiul senzoriomotor</strong> este primul cronologic.</span></span>",
          "<span class='tip'>Senzoriomotor, operații concrete, preoperator, operații formale<span class='tooltip-box'>Ordinea este greșită deoarece <strong>stadiul preoperator</strong> precedă operațiile concrete.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Primul stadiu al dezvoltării cognitive este stadiul senzoriomotor (0–2 ani). Care este caracteristica definitorie a acestui stadiu?",
        options: [
          "<span class='tip'>Cunoașterea se realizează prin simțuri și acțiune motorie<span class='tooltip-box'><strong>Stadiul senzoriomotor</strong> este caracterizat de inteligență preverbală și nonsimbolică.<br><br><strong>Exemplu:</strong> copilul explorează lumea prin apucare, supt, mișcare.</span></span>",
          "<span class='tip'>Utilizarea simbolurilor și a limbajului<span class='tooltip-box'>Aceasta este o caracteristică a <strong>stadiului preoperator</strong>, nu a celui senzoriomotor.</span></span>",
          "<span class='tip'>Raționament ipotetico deductiv<span class='tooltip-box'>Aceasta este o caracteristică specifică <strong>operațiilor formale</strong>.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "O achiziție cognitivă esențială care apare în stadiul senzoriomotor este permanența obiectului (~8 luni). Ce exprimă acest concept?",
        options: [
          "<span class='tip'>Înțelegerea faptului că obiectele continuă să existe chiar dacă nu sunt percepute<span class='tooltip-box'><strong>Permanența obiectului</strong> apare în jurul vârstei de 8 luni și marchează dezvoltarea reprezentărilor mentale.</span></span>",
          "<span class='tip'>Capacitatea de a utiliza simboluri și limbaj<span class='tooltip-box'>Aceasta apare ulterior în <strong>stadiul preoperator</strong>.</span></span>",
          "<span class='tip'>Capacitatea de a conserva cantitatea<span class='tooltip-box'>Conservarea este specifică <strong>stadiului operațiilor concrete</strong>.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Stadiul preoperator (2–7 ani) este caracterizat de apariția gândirii simbolice dar și de anumite limite cognitive. Care dintre următoarele este specific acestui stadiu?",
        options: [
          "<span class='tip'>Egocentrism cognitiv și animism<span class='tooltip-box'><strong>Egocentrismul</strong> presupune dificultatea de a adopta perspectiva altuia.<br><br><strong>Animismul</strong> constă în atribuirea de intenții sau viață obiectelor.</span></span>",
          "<span class='tip'>Conservarea și reversibilitatea<span class='tooltip-box'>Acestea sunt caracteristici ale <strong>operațiilor concrete</strong>.</span></span>",
          "<span class='tip'>Raționament abstract și logic formal<span class='tooltip-box'>Acestea sunt specifice <strong>operațiilor formale</strong>.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Stadiul operațiilor concrete (7–12 ani) marchează o schimbare importantă în modul de gândire al copilului. Care este achiziția centrală a acestui stadiu?",
        options: [
          "<span class='tip'>Conservarea și reversibilitatea operațiilor<span class='tooltip-box'><strong>Copilul</strong> înțelege că modificarea formei nu schimbă cantitatea și poate inversa mental o acțiune.</span></span>",
          "<span class='tip'>Gândire simbolică dominată de percepție<span class='tooltip-box'>Aceasta descrie <strong>stadiul preoperator</strong>.</span></span>",
          "<span class='tip'>Gândire ipotetico deductivă<span class='tooltip-box'>Aceasta apare în <strong>stadiul operațiilor formale</strong>.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ultimul stadiu descris de Piaget este stadiul operațiilor formale (12–16 ani). Ce îl diferențiază fundamental de stadiile anterioare?",
        options: [
          "<span class='tip'>Capacitatea de a gândi abstract și de a raționa ipotetic<span class='tooltip-box'><strong>Operațiile formale</strong> permit rezolvarea de probleme abstracte și utilizarea raționamentului deductiv.</span></span>",
          "<span class='tip'>Dependenta exclusivă de concret<span class='tooltip-box'>Aceasta este specifică <strong>operațiilor concrete</strong>.</span></span>",
          "<span class='tip'>Absența completă a egocentrismului<span class='tooltip-box'>Egocentrismul poate reapărea sub alte forme în adolescență.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u2-q3",
    title: "Caracteristici și limite ale teoriei lui Piaget",
    questions: [
      {
        text: "Teoria dezvoltării cognitive a lui Jean Piaget se înscrie într-o anumită perspectivă teoretică asupra cunoașterii. Din ce paradigmă face parte această teorie?",
        options: [
          "<span class='tip'>Constructivism cognitiv<span class='tooltip-box'><strong>Constructivismul cognitiv</strong> susține că individul își construiește activ cunoașterea prin interacțiunea cu mediul, pe baza structurilor cognitive proprii.</span></span>",
          "<span class='tip'>Behaviorism<span class='tooltip-box'>Behaviorismul explică învățarea prin condiționare și întărire, fără a analiza structurile mentale interne.</span></span>",
          "<span class='tip'>Constructivism social<span class='tooltip-box'>Constructivismul social este asociat cu <strong>Vîgotski</strong> și pune accent pe medierea socială și limbaj.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Un element definitoriu al teoriei lui Piaget este modul în care sunt concepute stadiile dezvoltării cognitive. Cum sunt acestea descrise?",
        options: [
          "<span class='tip'>Stadii universale, ierarhice și cumulative<span class='tooltip-box'><strong>Stadiile</strong> sunt universale, se succed într-o ordine relativ invariantă și fiecare îl include pe cel anterior.</span></span>",
          "<span class='tip'>Stadii independente care pot fi sărite<span class='tooltip-box'>La Piaget, stadiile <strong>nu pot fi sărite</strong> și nu apar aleator.</span></span>",
          "<span class='tip'>Stadii determinate exclusiv de educație<span class='tooltip-box'>Educația influențează ritmul, dar <strong>nu creează stadiile</strong> în viziunea lui Piaget.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "O altă limită a teoriei lui Piaget este legată de vârstele asociate stadiilor. Ce au evidențiat cercetările ulterioare?",
        options: [
          "<span class='tip'>Vârstele sunt orientative și pot varia<span class='tooltip-box'>Dezvoltarea cognitivă poate apărea mai devreme sau mai târziu, în funcție de experiență, context cultural și educație.</span></span>",
          "<span class='tip'>Vârstele sunt fixe și identice pentru toți copiii<span class='tooltip-box'>Această idee a fost infirmată de cercetările moderne.</span></span>",
          "<span class='tip'>Vârstele nu au nicio relevanță în dezvoltare<span class='tooltip-box'>Deși flexibile, vârstele rămân repere utile.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Teoria lui Piaget a fost criticată și pentru generalizarea concluziilor sale. La ce se referă această limită?",
        options: [
          "<span class='tip'>Generalizarea pe baza unui context cultural restrâns<span class='tooltip-box'>Piaget și-a bazat cercetările preponderent pe copii dintr-un context cultural specific, ceea ce ridică probleme de universalitate.</span></span>",
          "<span class='tip'>Lipsa oricărei baze empirice<span class='tooltip-box'>Teoria lui Piaget se bazează pe observații sistematice, inclusiv longitudinale.</span></span>",
          "<span class='tip'>Excluderea completă a diferențelor individuale<span class='tooltip-box'>Diferențele individuale sunt recunoscute, dar nu analizate în detaliu.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În ciuda limitelor sale, teoria lui Piaget rămâne relevantă. Care este una dintre contribuțiile majore ale acestei teorii?",
        options: [
          "<span class='tip'>Fundamentarea ideii de copil ca participant activ în învățare<span class='tooltip-box'>Piaget a schimbat perspectiva educațională, mutând accentul de pe transmiterea pasivă pe construcția activă a cunoașterii.</span></span>",
          "<span class='tip'>Eliminarea rolului educației în dezvoltare<span class='tooltip-box'>Educația rămâne importantă, chiar dacă nu determină stadiile.</span></span>",
          "<span class='tip'>Explicarea completă a influenței limbajului asupra dezvoltării<span class='tooltip-box'>Aceasta este mai degrabă contribuția lui Vîgotski.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u2-q4",
    title: "Dezvoltarea cognitivă la Vîgotski",
    questions: [
      {
        text: "Teoria dezvoltării cognitive a lui <strong>Lev Vîgotski</strong> pune accent pe un factor esențial care diferențiază această perspectivă de cea piagetiană. Care este acest factor central?",
        options: [
          "<span class='tip'>Rolul contextului sociocultural în dezvoltarea cognitivă<span class='tooltip-box'><strong>Vîgotski</strong> susține că dezvoltarea cognitivă este profund influențată de interacțiunile sociale, cultură și instrumentele simbolice ale comunității.</span></span>",
          "<span class='tip'>Maturizarea biologică ca factor determinant<span class='tooltip-box'>Această explicație este mai apropiată de perspectiva lui <strong>Piaget</strong>, unde maturizarea are un rol important.</span></span>",
          "<span class='tip'>Învățarea prin condiționare și întărire<span class='tooltip-box'>Aceasta este o explicație specifică <strong>behaviorismului</strong>.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În teoria lui Vîgotski, relația dintre învățare și dezvoltare este formulată diferit față de teoria lui Piaget. Cum este concepută această relație?",
        options: [
          "<span class='tip'>Învățarea precede și stimulează dezvoltarea<span class='tooltip-box'><strong>Vîgotski</strong> consideră că, prin învățare ghidată, copilul ajunge la niveluri superioare de dezvoltare.</span></span>",
          "<span class='tip'>Dezvoltarea este condiția prealabilă a învățării<span class='tooltip-box'>Aceasta este poziția clasică a lui <strong>Piaget</strong>.</span></span>",
          "<span class='tip'>Învățarea și dezvoltarea sunt complet independente<span class='tooltip-box'>Această idee nu este susținută de niciuna dintre cele două teorii.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Un concept central în teoria lui Vîgotski este <strong>zona proximei dezvoltări</strong>. Ce desemnează aceasta?",
        options: [
          "<span class='tip'>Distanța dintre ceea ce copilul poate face singur și ceea ce poate face cu ajutor<span class='tooltip-box'><strong>Zona proximei dezvoltări</strong> evidențiază potențialul de dezvoltare care poate fi activat prin sprijin extern.</span></span>",
          "<span class='tip'>Nivelul maxim de dezvoltare atins prin maturizare<span class='tooltip-box'>Aceasta ar descrie mai degrabă un prag biologic, nu conceptul lui Vîgotski.</span></span>",
          "<span class='tip'>Diferența dintre inteligența copilului și cea a adultului<span class='tooltip-box'>Conceptul nu se referă la comparații globale de inteligență.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Pentru a sprijini copilul în zona proximei dezvoltări, Vîgotski descrie un tip specific de intervenție educațională. Cum se numește aceasta?",
        options: [
          "<span class='tip'>Eșafodaj<span class='tooltip-box'><strong>Eșafodajul</strong> reprezintă sprijinul temporar oferit copilului, care este retras treptat pe măsură ce competența crește.</span></span>",
          "<span class='tip'>Condiționare operantă<span class='tooltip-box'>Aceasta este o tehnică behavioristă bazată pe recompense și pedepse.</span></span>",
          "<span class='tip'>Adaptare prin asimilare și acomodare<span class='tooltip-box'>Acești termeni sunt specifici teoriei lui <strong>Piaget</strong>.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În teoria lui Vîgotski, limbajul are un rol esențial în dezvoltarea cognitivă. Cum este explicată această funcție?",
        options: [
          "<span class='tip'>Limbajul funcționează ca instrument de gândire și autoreglare<span class='tooltip-box'><strong>Limbajul</strong> trece de la formă externă la limbaj interior, susținând rezolvarea de probleme și controlul comportamentului.</span></span>",
          "<span class='tip'>Limbajul este doar un mijloc de comunicare socială<span class='tooltip-box'>La Vîgotski, limbajul depășește funcția comunicativă.</span></span>",
          "<span class='tip'>Limbajul apare doar după dezvoltarea completă a gândirii<span class='tooltip-box'>Aceasta este o poziție opusă celei formulate de Vîgotski.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care este rolul adultului sau al covârstnicului mai competent în dezvoltarea cognitivă, conform lui Vîgotski?",
        options: [
          "<span class='tip'>Mediator al învățării și al dezvoltării<span class='tooltip-box'>Adultul ghidează copilul prin întrebări, explicații și modelare, facilitând progresul cognitiv.</span></span>",
          "<span class='tip'>Observator pasiv al maturizării copilului<span class='tooltip-box'>Această viziune nu este compatibilă cu teoria socioculturală.</span></span>",
          "<span class='tip'>Simplu furnizor de recompense și sancțiuni<span class='tooltip-box'>Aceasta este o abordare behavioristă.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u2-q5",
    title: "Piaget și Vîgotski analiză comparativă",
    questions: [
      {
        text: "În analiza comparativă a teoriilor dezvoltării cognitive, care sunt conceptele fundamentale centrale pentru fiecare autor?",
        options: [
          "<span class='tip'><strong>Piaget</strong> explică dezvoltarea prin mecanisme cognitive interne iar <strong>Vîgotski</strong> pune accent pe mediere socială și sprijin ghidat<span class='tooltip-box'><strong>Piaget:</strong> scheme, asimilare, acomodare<br><br><strong>Vîgotski:</strong> zona proximei dezvoltări, eșafodaj</span></span>",
          "<span class='tip'>Ambii explică dezvoltarea prin condiționare și recompensă<span class='tooltip-box'>Aceasta este o abordare behavioristă, nu specifică niciunuia dintre cei doi.</span></span>",
          "<span class='tip'>Ambii folosesc exclusiv noțiunea de stadii biologice<span class='tooltip-box'>Doar Piaget utilizează stadii strict delimitate.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Cum este înțeles sensul dezvoltării cognitive în cele două teorii?",
        options: [
          "<span class='tip'>La Piaget dezvoltarea precede învățarea iar la Vîgotski învățarea stimulează dezvoltarea<span class='tooltip-box'><strong>Piaget</strong> consideră că nivelul de dezvoltare condiționează ce poate fi învățat.<br><br><strong>Vîgotski</strong> susține că învățarea ghidată poate conduce dezvoltarea.</span></span>",
          "<span class='tip'>În ambele teorii învățarea este independentă de dezvoltare<span class='tooltip-box'>Această poziție nu este susținută de niciuna dintre teorii.</span></span>",
          "<span class='tip'>La ambii autori dezvoltarea este exclusiv biologică<span class='tooltip-box'>Aceasta ignoră rolul experienței și al mediului.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care este diferența esențială privind relația cu contextul social?",
        options: [
          "<span class='tip'>Piaget acordă un rol secundar socialului iar Vîgotski consideră interacțiunea socială fundamentală<span class='tooltip-box'><strong>Piaget</strong> vede socialul ca factor de echilibrare.<br><br><strong>Vîgotski</strong> consideră că mintea se dezvoltă prin societate.</span></span>",
          "<span class='tip'>Ambii autori exclud rolul socialului<span class='tooltip-box'>Aceasta este fals pentru ambele teorii.</span></span>",
          "<span class='tip'>Doar Piaget pune accent pe limbaj<span class='tooltip-box'>Rolul central al limbajului aparține teoriei lui Vîgotski.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Cum este definit egocentrismul în teoria lui Piaget și cum este reinterpretat din perspectiva lui Vîgotski?",
        options: [
          "<span class='tip'>Piaget îl vede ca limită cognitivă iar Vîgotski ca etapă funcțională a limbajului<span class='tooltip-box'><strong>Piaget</strong> definește egocentrismul ca dificultate a copilului de a se decentra și de a adopta perspectiva altuia.<br><br><strong>Vîgotski</strong> interpretează limbajul egocentric nu ca limită, ci ca <strong>instrument de autoreglare cognitivă</strong>, prin care copilul își ghidează acțiunile și gândirea în cursul activității, acesta fiind o etapă de tranziție către limbajul interior.</span></span>",
          "<span class='tip'>Ambii îl definesc ca trăsătură de personalitate stabilă<span class='tooltip-box'>Egocentrismul nu este considerat o trăsătură stabilă de personalitate în niciuna dintre teorii.</span></span>",
          "<span class='tip'>Vîgotski neagă existența egocentrismului<span class='tooltip-box'>Vîgotski nu neagă existența limbajului egocentric, ci îi atribuie o funcție diferită față de Piaget.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care sunt contribuțiile majore ale celor două teorii la psihologia educației?",
        options: [
          "<span class='tip'>Piaget a fundamentat copilul activ iar Vîgotski rolul educației ghidate<span class='tooltip-box'><strong>Piaget</strong> a schimbat perspectiva asupra copilului ca constructor al cunoașterii.<br><br><strong>Vîgotski</strong> a evidențiat rolul profesorului și al medierii sociale.</span></span>",
          "<span class='tip'>Ambii au eliminat rolul profesorului<span class='tooltip-box'>Aceasta este o interpretare greșită.</span></span>",
          "<span class='tip'>Ambii explică exclusiv dezvoltarea intelectuală fără aplicații educaționale<span class='tooltip-box'>Ambele teorii au implicații didactice majore.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care sunt limitele recunoscute ale celor două teorii?",
        options: [
          "<span class='tip'>Piaget este criticat pentru rigiditatea stadiilor iar Vîgotski pentru dificultatea operaționalizării zonei proximei dezvoltări<span class='tooltip-box'><strong>Piaget</strong> este criticat pentru rigiditatea stadiilor și pentru subestimarea capacităților cognitive ale copiilor.<br><br><strong>Vîgotski</strong> este criticat pentru dificultatea de a măsura și operaționaliza <strong>zona proximei dezvoltări</strong>, adică de a stabili obiectiv ce poate face copilul singur și ce poate realiza cu ajutor.</span></span>",
          "<span class='tip'>Ambii sunt lipsiți de suport empiric<span class='tooltip-box'>Ambele teorii se bazează pe cercetare.</span></span>",
          "<span class='tip'>Vîgotski neagă diferențele individuale<span class='tooltip-box'>Diferențele individuale sunt implicite în ZPD.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce implicații pentru activitatea didactică derivă din analiza comparativă a celor două teorii?",
        options: [
          "<span class='tip'>Adaptarea predării la nivelul elevului și utilizarea sprijinului ghidat<span class='tooltip-box'>Profesorul trebuie să țină cont atât de nivelul de dezvoltare cât și de potențialul elevului.</span></span>",
          "<span class='tip'>Predare uniformă indiferent de nivelul de dezvoltare<span class='tooltip-box'>Aceasta contrazice ambele teorii.</span></span>",
          "<span class='tip'>Excluderea interacțiunii sociale din învățare<span class='tooltip-box'>Interacțiunea este esențială mai ales în teoria lui Vîgotski.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u2-q6",
    title: "Dezvoltarea limbajului factori și baze",
    questions: [
      {
        text: "În psihologia educațională, limbajul este definit ca un sistem complex. Ce caracteristică esențială îl definește?",
        options: [
          "<span class='tip'>Sistem de simboluri și reguli de combinare specifice unei culturi<span class='tooltip-box'>Limbajul presupune atât <strong>simboluri</strong> cât și <strong>reguli convenționale</strong> de combinare, împărtășite cultural.</span></span>",
          "<span class='tip'>Ansamblu de reflexe verbale<span class='tooltip-box'>Aceasta este o interpretare reductivă, de tip behaviorist.</span></span>",
          "<span class='tip'>Capacitate exclusiv biologică<span class='tooltip-box'>Baza biologică este necesară, dar nu suficientă.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care sunt principalele seturi de convenții care structurează limbajul?",
        options: [
          "<span class='tip'>Fonologice, morfologice, sintactice, semantice și pragmatice<span class='tooltip-box'>Aceste seturi de convenții reglează sunetele forma cuvintelor sensul și adecvarea contextuală.</span></span>",
          "<span class='tip'>Doar fonologice și semantice<span class='tooltip-box'>Limbajul nu se reduce la sunete și sens.</span></span>",
          "<span class='tip'>Exclusiv gramaticale<span class='tooltip-box'>Gramatica este doar o parte a sistemului.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce reprezintă fonologia în structura limbajului?",
        options: [
          "<span class='tip'>Sistemul de sunete al unei limbi<span class='tooltip-box'>Unitatea de bază este <strong>fonemul</strong>, adică sunetul distinctiv.</span></span>",
          "<span class='tip'>Regulile de combinare a cuvintelor<span class='tooltip-box'>Aceasta descrie sintaxa.</span></span>",
          "<span class='tip'>Sensurile cuvintelor<span class='tooltip-box'>Aceasta descrie semantica.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce factor este considerat bază necesară pentru dezvoltarea limbajului?",
        options: [
          "<span class='tip'>Existența unui substrat biologic global de însușire a limbajului<span class='tooltip-box'>Copilul are o <strong>disponibilitate biologică</strong> pentru limbaj, comună speciei umane.</span></span>",
          "<span class='tip'>Învățarea formală timpurie<span class='tooltip-box'>Limbajul apare anterior școlarizării.</span></span>",
          "<span class='tip'>Expunerea la limbaj scris<span class='tooltip-box'>Limbajul oral precede limbajul scris.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "De ce este integritatea senzorială esențială pentru dezvoltarea limbajului?",
        options: [
          "<span class='tip'>Asigură recepția stimulilor verbali auditivi și vizuali<span class='tooltip-box'>Auzul și văzul permit imitarea și diferențierea sunetelor.</span></span>",
          "<span class='tip'>Influențează doar expresivitatea emoțională<span class='tooltip-box'>Rolul este funcțional, nu doar afectiv.</span></span>",
          "<span class='tip'>Are rol secundar în dezvoltare<span class='tooltip-box'>Deficiențele senzoriale pot afecta grav limbajul.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u2-q7",
    title: "Achiziția limbajului și regularități",
    questions: [
      {
        text: "Cercetările arată că, în ciuda diferențelor culturale, copiii urmează un tipar comun de achiziție a limbajului. Ce explică acest fapt?",
        options: [
          "<span class='tip'>Există regularități universale în modul de achiziție a limbajului<span class='tooltip-box'>Copiii din culturi diferite urmează secvențe similare de dezvoltare.</span></span>",
          "<span class='tip'>Limbajul este învățat aleator<span class='tooltip-box'>Achiziția limbajului urmează tipare clare.</span></span>",
          "<span class='tip'>Educația formală este decisivă<span class='tooltip-box'>Achiziția începe mult înainte de școală.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care este o regularitate bine documentată în achiziția vocabularului?",
        options: [
          "<span class='tip'>Sunt învățate mai ușor cuvintele auzite frecvent<span class='tooltip-box'>Frecvența utilizării favorizează memorarea.</span></span>",
          "<span class='tip'>Cuvintele rare se învață mai ușor<span class='tooltip-box'>Nu există suport empiric.</span></span>",
          "<span class='tip'>Vocabularul se dezvoltă independent de experiență<span class='tooltip-box'>Experiența este esențială.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "De ce este important contextul în care sunt învățate cuvintele?",
        options: [
          "<span class='tip'>Cuvintele sunt reținute mai bine în contexte semnificative<span class='tooltip-box'>Activitățile interesante facilitează achiziția limbajului.</span></span>",
          "<span class='tip'>Contextul nu influențează învățarea<span class='tooltip-box'>Contextul este decisiv.</span></span>",
          "<span class='tip'>Cuvintele izolate sunt memorate mai eficient<span class='tooltip-box'>Învățarea izolată este mai slabă.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce tip de interacțiune favorizează cel mai mult dezvoltarea limbajului?",
        options: [
          "<span class='tip'>Dialogul activ cu adultul<span class='tooltip-box'>Interacțiunea creează eșafodaje în dezvoltarea limbajului.</span></span>",
          "<span class='tip'>Expunerea pasivă la limbaj<span class='tooltip-box'>Pasivitatea este mai puțin eficientă.</span></span>",
          "<span class='tip'>Repetiția mecanică<span class='tooltip-box'>Repetiția fără sens este limitată.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Cum se dezvoltă vocabularul în raport cu gramatica?",
        options: [
          "<span class='tip'>Se dezvoltă simultan și interdependent<span class='tooltip-box'>Învățarea cuvintelor merge mână în mână cu regulile gramaticale.</span></span>",
          "<span class='tip'>Vocabularul precede complet gramatica<span class='tooltip-box'>Cele două procese sunt corelate.</span></span>",
          "<span class='tip'>Gramatica apare independent de vocabular<span class='tooltip-box'>Nu este susținut empiric.</span></span>",
        ],
        answer: 0,
      },
    ],
  },

  //U3
  {
    id: "phed-u3-q1",
    title: "Teoria ecologică a dezvoltării – Urie Bronfenbrenner",
    questions: [
      {
        text: "Teoria ecologică a dezvoltării propusă de Urie Bronfenbrenner explică dezvoltarea copilului prin:",
        options: [
          "<span class='tip'>Interacțiunea dintre individ și sisteme de mediu interconectate<span class='tooltip-box'>În acest context ecologic nu se referă la natură sau protecția mediului. Ecologia desemnează ansamblul mediilor sociale relaționale și instituționale în care copilul este integrat și care se influențează reciproc.</span></span>",
          "<span class='tip'>Maturizarea biologică exclusivă<span class='tooltip-box'>Aceasta ignoră influența contextelor sociale și relaționale.</span></span>",
          "<span class='tip'>Învățarea prin condiționare<span class='tooltip-box'>Aceasta aparține behaviorismului și nu explică rolul mediilor sociale multiple.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care variantă reprezintă corect ordinea sistemelor din teoria ecologică a dezvoltării (Bronfenbrenner)?",
        options: [
          "<span class='tip'><span class='tooltip-box'>Mediile cu interacțiune directă: copil, familie, școală, prieteni. Exemplu: relația zilnică cu părinții.</span><strong>Microsistem</strong></span> (contact direct) → <span class='tip'><span class='tooltip-box'>Relațiile dintre microsisteme. Exemplu: colaborarea dintre familie și școală.</span><strong>Mezosistem</strong></span> (legături) → <span class='tip'><span class='tooltip-box'>Influențe indirecte prin contexte în care copilul nu participă direct. Exemplu: programul de lucru al părintelui.</span><strong>Exosistem</strong></span> (influențe indirecte) → <span class='tip'><span class='tooltip-box'>Valori norme credințe legi culturale. Exemplu: așteptările culturale despre educație și disciplină.</span><strong>Macrosistem</strong></span> (valori) → <span class='tip'><span class='tooltip-box'>Dimensiunea timpului și schimbările de viață sau istorice. Exemplu: divorțul părinților sau mutarea într o altă țară.</span><strong>Cronosistem</strong></span> (timp)",
          "<span class='tip'><span class='tooltip-box'>Mediile cu interacțiune directă: copil, familie, școală, prieteni. Exemplu: relația zilnică cu părinții.</span><strong>Microsistem</strong></span> (contact direct) → <span class='tip'><span class='tooltip-box'>Influențe indirecte prin contexte în care copilul nu participă direct. Exemplu: programul de lucru al părintelui.</span><strong>Exosistem</strong></span> (influențe indirecte) → <span class='tip'><span class='tooltip-box'>Relațiile dintre microsisteme. Exemplu: colaborarea dintre familie și școală.</span><strong>Mezosistem</strong></span> (legături) → <span class='tip'><span class='tooltip-box'>Valori norme credințe legi culturale. Exemplu: așteptările culturale despre educație și disciplină.</span><strong>Macrosistem</strong></span> (valori) → <span class='tip'><span class='tooltip-box'>Dimensiunea timpului și schimbările de viață sau istorice. Exemplu: divorțul părinților sau mutarea într o altă țară.</span><strong>Cronosistem</strong></span> (timp)",
        ],
        answer: 0,
      },
      {
        text: "Microsistemul reprezintă:",
        options: [
          "<span class='tip'>Contextul imediat de viață al copilului<span class='tooltip-box'>Include familia, școala, prietenii și relațiile față în față.</span></span>",
          "<span class='tip'>Valorile generale ale societății<span class='tooltip-box'>Aceasta descrie macrosistemul.</span></span>",
          "<span class='tip'>Evenimentele istorice majore<span class='tooltip-box'>Acestea țin de cronosistem.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Mezosistemul se referă la:",
        options: [
          "<span class='tip'>Relațiile dintre microsisteme<span class='tooltip-box'>De exemplu, relația dintre familie și școală.</span></span>",
          "<span class='tip'>Instituții în care copilul nu este implicat direct<span class='tooltip-box'>Aceasta descrie exosistemul.</span></span>",
          "<span class='tip'>Structuri biologice ale copilului<span class='tooltip-box'>Nu fac parte din model.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Exosistemul influențează copilul prin:",
        options: [
          "<span class='tip'>Contexte sociale în care copilul nu participă direct<span class='tooltip-box'>De exemplu: locul de muncă al părinților, instituții comunitare.</span></span>",
          "<span class='tip'>Interacțiuni zilnice directe<span class='tooltip-box'>Aceasta este caracteristică microsistemului.</span></span>",
          "<span class='tip'>Valori culturale generale<span class='tooltip-box'>Aceasta este macrosistemul.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Macrosistemul include:",
        options: [
          "<span class='tip'>Valorile culturale, ideologiile și condițiile socioeconomice<span class='tooltip-box'>Definește cadrul larg al societății.</span></span>",
          "<span class='tip'>Relațiile copilului cu familia<span class='tooltip-box'>Acestea aparțin microsistemului.</span></span>",
          "<span class='tip'>Evenimentele din copilăria timpurie<span class='tooltip-box'>Aceasta ține de cronosistem.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce rol are cronosistemul în teoria ecologică a dezvoltării a lui Bronfenbrenner?",
        options: [
          "<span class='tip'><span class='tooltip-box'>Cronosistemul reprezintă dimensiunea timpului și modul în care schimbările sunt trăite diferit de-a lungul vieții. Include: momentul apariției unei tranziții, succesiunea schimbărilor, durata efectelor, contextul istoric al dezvoltării. Exemple: modul în care o mutare influențează diferit dezvoltarea în funcție de vârsta copilului; diferența dintre a crește înainte sau după apariția internetului; dezvoltarea într-o perioadă de pandemie față de una fără restricții.</span><strong>Dimensiunea timpului care traversează și modifică influențele celorlalte sisteme</strong></span>",
          "<span class='tip'><span class='tooltip-box'>Această variantă confundă cronosistemul cu macrosistemul. Valorile culturale și normele sociale aparțin macrosistemului, nu dimensiunii timpului.</span><strong>Cel mai exterior nivel al culturii și valorilor</strong></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u3-q2",
    title: "Teoria dezvoltării psihosociale – Erik Erikson",
    questions: [
      {
        text: "Modelul lui Erikson descrie dezvoltarea ca o succesiune de:",
        options: [
          "<span class='tip'>Crize psihosociale specifice fiecărei etape de viață<span class='tooltip-box'>Fiecare criză presupune un conflict între două tendințe opuse.</span></span>",
          "<span class='tip'>Stadii cognitive strict biologice<span class='tooltip-box'>Aceasta este perspectiva lui Piaget.</span></span>",
          "<span class='tip'>Niveluri de condiționare<span class='tooltip-box'>Aceasta aparține behaviorismului.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Rezolvarea pozitivă a crizelor psihosociale conduce la:",
        options: [
          "<span class='tip'>Dezvoltarea unor virtuți psihosociale<span class='tooltip-box'>Exemple: speranță, voință, competență, fidelitate.</span></span>",
          "<span class='tip'>Eliminarea completă a conflictelor viitoare<span class='tooltip-box'>Conflictele rămân parte a vieții.</span></span>",
          "<span class='tip'>Maturizare cognitivă automată<span class='tooltip-box'>Nu este un proces automat.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În primul an de viață (0–1 an), dezvoltarea copilului este organizată în jurul unei crize relaționale fundamentale, mediată de îngrijitorul principal și având ca rezultat o calitate de bază a eului. Care este această criză?",
        options: [
          "<span class='tip'><strong>Încredere vs neîncredere</strong><span class='tooltip-box'>Această criză apare în stadiul infantil (0–1 an) și este mediată de relația cu mama sau substitutul matern. Copilul învață dacă lumea este sigură și predictibilă în funcție de consistența îngrijirii. Rezultatul pozitiv este speranța. Exemplu: un copil ale cărui nevoi sunt satisfăcute constant va tolera mai ușor frustrarea și separarea.</span></span>",
          "<span class='tip'><strong>Autonomie vs îndoială și rușine</strong><span class='tooltip-box'>Această criză este specifică copilăriei mici (1–3 ani), când copilul începe să exerseze controlul personal.</span></span>",
          "<span class='tip'><strong>Inițiativă vs vinovăție</strong><span class='tooltip-box'>Această criză este specifică etapei 3–6 ani și vizează inițierea acțiunilor.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În copilăria mică (1–3 ani), dezvoltarea este centrată pe exersarea controlului personal în relația cu părinții și conduce la formarea unei calități fundamentale. Care este criza specifică acestei etape?",
        options: [
          "<span class='tip'><strong>Autonomie vs îndoială și rușine</strong><span class='tooltip-box'>Criza copilăriei mici este mediată de părinți. Copilul învață dacă poate acționa independent fără a fi rușinat sau pedepsit excesiv. Rezultatul pozitiv este voința. Exemplu: copilul este lăsat să mănânce singur și să aleagă, dezvoltând sentimentul controlului personal.</span></span>",
          "<span class='tip'><strong>Încredere vs neîncredere</strong><span class='tooltip-box'>Aceasta aparține stadiului infantil 0–1 an.</span></span>",
          "<span class='tip'><strong>Inițiativă vs vinovăție</strong><span class='tooltip-box'>Aceasta este specifică etapei 3–6 ani.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În copilăria mijlocie (3–6 ani), copilul începe să inițieze acțiuni și să își propună scopuri în mediul familial. Care este criza centrală a acestei etape?",
        options: [
          "<span class='tip'><strong>Inițiativă vs vinovăție</strong><span class='tooltip-box'>Copilul experimentează inițierea acțiunilor proprii. Reacțiile adulților pot susține inițiativa sau pot genera vinovăție. Rezultatul pozitiv este scopul. Exemplu: copilul inventează un joc și este încurajat să îl ducă la capăt.</span></span>",
          "<span class='tip'><strong>Autonomie vs îndoială și rușine</strong><span class='tooltip-box'>Aceasta aparține etapei 1–3 ani.</span></span>",
          "<span class='tip'><strong>Hărnicie vs inferioritate</strong><span class='tooltip-box'>Aceasta aparține etapei 6–12 ani.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În copilăria mare (6–12 ani), școala și grupul de egali devin contexte centrale ale dezvoltării. Care este criza psihosocială specifică acestei etape?",
        options: [
          "<span class='tip'><strong>Hărnicie și străduință vs inferioritate</strong><span class='tooltip-box'>Copilul este evaluat în funcție de performanță și efort. Succesul duce la competență, eșecul repetat la inferioritate. Exemplu: copilul învață că munca susținută poate duce la rezultate apreciate.</span></span>",
          "<span class='tip'><strong>Inițiativă vs vinovăție</strong><span class='tooltip-box'>Aceasta aparține etapei 3–6 ani.</span></span>",
          "<span class='tip'><strong>Identitate vs confuzie de rol</strong><span class='tooltip-box'>Aceasta aparține adolescenței.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În adolescență (12–18 ani), individul caută coerență între roluri valori și imagine de sine, fiind influențat de modele și covârstnici. Care este criza centrală?",
        options: [
          "<span class='tip'><strong>Identitate vs confuzie de rol</strong><span class='tooltip-box'>Adolescentul explorează roluri și valori pentru a construi un sine coerent. Rezultatul pozitiv este unitatea. Exemplu: alegerea unei direcții de viață și asumarea ei.</span></span>",
          "<span class='tip'><strong>Intimitate vs izolare</strong><span class='tooltip-box'>Aceasta aparține adultului tânăr.</span></span>",
          "<span class='tip'><strong>Hărnicie vs inferioritate</strong><span class='tooltip-box'>Aceasta aparține copilăriei mari.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În adultul tânăr (18–35 ani), relațiile apropiate devin centrale pentru dezvoltare. Care este criza specifică acestei etape?",
        options: [
          "<span class='tip'><strong>Intimitate vs izolare</strong><span class='tooltip-box'>Individul caută relații profunde fără a-și pierde identitatea. Rezultatul pozitiv este mutualitatea afectivă. Exemplu: construirea unei relații de cuplu bazate pe încredere și reciprocitate.</span></span>",
          "<span class='tip'><strong>Identitate vs confuzie de rol</strong><span class='tooltip-box'>Aceasta aparține adolescenței.</span></span>",
          "<span class='tip'><strong>Generativitate vs stagnare</strong><span class='tooltip-box'>Aceasta aparține adultului mijlociu.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În adultul mijlociu (35–55 ani), accentul se mută pe contribuția socială și responsabilitate. Care este criza psihosocială specifică?",
        options: [
          "<span class='tip'><strong>Generativitate vs stagnare</strong><span class='tooltip-box'>Adultul se implică în familie și profesie pentru a susține generațiile următoare. Rezultatul pozitiv este grija responsabilă. Exemplu: creșterea copiilor sau mentoratul profesional.</span></span>",
          "<span class='tip'><strong>Intimitate vs izolare</strong><span class='tooltip-box'>Aceasta aparține adultului tânăr.</span></span>",
          "<span class='tip'><strong>Integritate vs deznădejde</strong><span class='tooltip-box'>Aceasta aparține maturității.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În maturitate (55+), individul reflectează asupra propriei vieți și a sensului acesteia. Care este criza finală descrisă de Erikson?",
        options: [
          "<span class='tip'><strong>Integritatea eului vs deznădejde</strong><span class='tooltip-box'>Acceptarea propriei vieți ca având sens duce la înțelepciune. Regretul și neacceptarea duc la deznădejde. Exemplu: persoana își vede viața ca un întreg coerent.</span></span>",
          "<span class='tip'><strong>Generativitate vs stagnare</strong><span class='tooltip-box'>Aceasta aparține adultului mijlociu.</span></span>",
          "<span class='tip'><strong>Intimitate vs izolare</strong><span class='tooltip-box'>Aceasta aparține adultului tânăr.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u3-q3",
    title: "Dezvoltarea judecății morale – Jean Piaget",
    questions: [
      {
        text: "Stadiul premoral sau al anomiei morale (2–6 ani) se caracterizează prin:",
        options: [
          "<span class='tip'>Absența regulilor morale stabile<span class='tooltip-box'>Regulile sunt percepute ca simple rutine de joc.</span></span>",
          "<span class='tip'>Respect rigid față de reguli<span class='tooltip-box'>Aceasta apare în heteronomia morală.</span></span>",
          "<span class='tip'>Judecată bazată pe intenții<span class='tooltip-box'>Aceasta apare în autonomia morală.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Heteronomia morală (6–10 ani) presupune:",
        options: [
          "<span class='tip'><span class='tooltip-box'>Regulile sunt percepute ca fixe și impuse din exterior de adulți sau autoritate.</span>Reguli impuse de autoritate</span> și <span class='tip'><span class='tooltip-box'>Copilul crede că pedeapsa urmează automat încălcării regulii, iar gravitatea faptei depinde de consecințe.</span>justiție imanentă</span>",
          "<span class='tip'>Relativism moral<span class='tooltip-box'>Aceasta apare ulterior.</span></span>",
          "<span class='tip'>Absența vinovăției<span class='tooltip-box'>Aceasta caracterizează stadiul premoral.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Autonomia morală (10–12+ ani) este definită prin:",
        options: [
          "<span class='tip'>Evaluarea acțiunilor în funcție de intenții<span class='tooltip-box'>Regulile devin negociabile și contextuale.</span></span>",
          "<span class='tip'>Supunere față de autoritate<span class='tooltip-box'>Aceasta este heteronomia morală.</span></span>",
          "<span class='tip'>Judecată exclusiv pe consecințe<span class='tooltip-box'>Aceasta apare anterior.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u3-q4",
    title: "Dezvoltarea raționamentului moral – Lawrence Kohlberg",
    questions: [
      {
        text: "Piaget și Kohlberg studiază dezvoltarea morală, dar la niveluri diferite de analiză. Care formulare surprinde corect diferența dintre dezvoltarea judecății morale (Piaget) și dezvoltarea raționamentului moral (Kohlberg)?",
        options: [
          "<span class='tip'><span class='tooltip-box'>Piaget descrie cum se modifică modul de judecare morală odată cu dezvoltarea cognitivă: de la reguli impuse la reguli negociate, de la consecințe la intenții. Exemplu: copilul mic judecă gravitatea faptei după pagubă, nu după intenție.</span><strong>Piaget</strong></span> se concentrează pe <strong>judecata morală</strong>, iar <span class='tip'><span class='tooltip-box'>Kohlberg dezvoltă un model ierarhic în 3 niveluri și 6 stadii și analizează justificarea deciziilor morale pe baza dilemelor. Exemplu: două persoane pot lua aceeași decizie, dar din stadii morale diferite.</span><strong>Kohlberg</strong></span> se concentrează pe <strong>raționamentul moral</strong>.",
          "<span class='tip'><span class='tooltip-box'>Această variantă confundă teoriile. Piaget nu propune stadii morale pentru adulți, iar Kohlberg nu se limitează la copilărie.</span><strong>Piaget</strong></span> dezvoltă dileme morale pentru adulți, iar <span class='tip'><span class='tooltip-box'>Această afirmație este incorectă. Kohlberg nu se limitează la simple reguli impuse.</span><strong>Kohlberg</strong></span> descrie doar respectarea regulilor în copilărie.",
        ],
        answer: 0,
      },
      {
        text: "Nivelul preconvențional (4–9 ani) este caracterizat de:",
        options: [
          "<strong>Orientare externă asupra moralității</strong> (<span class='tip'>ascultare și pedeapsă<span class='tooltip-box'>Stadiul 1. Moralitatea este definită prin evitarea pedepsei. Binele și răul sunt judecate după consecințele fizice ale acțiunii. Exemplu: copilul consideră mai grav că a spart mai multe pahare din greșeală decât unul intenționat.</span></span>; <span class='tip'>propriile nevoi<span class='tooltip-box'>Stadiul 2. Corect este ceea ce aduce un beneficiu personal sau un schimb avantajos. Exemplu: copilul ajută doar dacă primește ceva în schimb.</span></span>)",
          "<strong>Respect față de norme sociale interne</strong>",
          "<strong>Principii etice universale</strong>",
        ],
        answer: 0,
      },
      {
        text: "Nivelul convențional (9–14 ani) presupune:",
        options: [
          "<strong>Conformare la norme și ordine socială</strong> (<span class='tip'>relații interpersonale<span class='tooltip-box'>Stadiul 3. Comportamentul moral este cel aprobat de ceilalți și care menține relațiile. Exemplu: copilul spune adevărul pentru a fi considerat bun.</span></span>; <span class='tip'>autoritate și ordine<span class='tooltip-box'>Stadiul 4. Corect este să respecți regulile și legile pentru menținerea ordinii sociale. Exemplu: respectarea regulilor școlii pentru că așa trebuie.</span></span>)",
          "<strong>Judecată autonomă bazată pe conștiință</strong>",
          "<strong>Absența regulilor</strong>",
        ],
        answer: 0,
      },
      {
        text: "Nivelul postconvențional (13+ ani) este definit prin:",
        options: [
          "<strong>Moralitate autonomă și reflexivă</strong> (<span class='tip'>contract social<span class='tooltip-box'>Stadiul 5. Legile sunt importante dar pot fi schimbate dacă sunt nedrepte. Accent pe drepturi individuale. Exemplu: contestarea unei legi care încalcă drepturi fundamentale.</span></span>; <span class='tip'>principii etice universale<span class='tooltip-box'>Stadiul 6. Deciziile morale sunt ghidate de principii internalizate și conștiință. Exemplu: încălcarea unei legi pentru a salva o viață.</span></span>)",
          "<strong>Supunere față de autoritate</strong>",
          "<strong>Evitarea sancțiunilor</strong>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u3-q5",
    title: "Diferențe de gen și dezvoltarea morală – Carol Gilligan",
    questions: [
      {
        text: "Carol Gilligan critică modelul lui Kohlberg deoarece:",
        options: [
          "<span class='tip'>Supraaccentuează justiția și ignoră etica grijii<span class='tooltip-box'>Modelul favorizează un tip de raționament asociat mai frecvent bărbaților.</span></span>",
          "<span class='tip'>Nu include suficiente stadii<span class='tooltip-box'>Critica nu vizează numărul stadiilor.</span></span>",
          "<span class='tip'>Ignoră complet dezvoltarea morală<span class='tooltip-box'>Aceasta este fals.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Etica grijii pune accent pe:",
        options: [
          "<span class='tip'>Responsabilitate, relații și nonviolență<span class='tooltip-box'>Judecata morală este centrată pe grijă față de ceilalți.</span></span>",
          "<span class='tip'>Aplicarea strictă a regulilor<span class='tooltip-box'>Aceasta caracterizează etica justiției.</span></span>",
          "<span class='tip'>Evitarea pedepselor<span class='tooltip-box'>Aceasta aparține nivelului preconvențional.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În etica grijii descrisă de Carol Gilligan, nivelul preconvențional este caracterizat de:",
        options: [
          "<strong>Supraviețuire individuală</strong> (<span class='tip'>interes personal<span class='tooltip-box'>La acest nivel, persoana își definește interesele în funcție de ceea ce trebuie făcut pentru a evita pierderea sau sancțiunea. Grija față de sine este prioritară și este legată de nevoia de siguranță. Exemplu: o persoană ia o decizie morală pentru a evita consecințe negative asupra propriei persoane.</span></span>)",
          "<strong>Sacrificiul de sine ca ideal moral</strong>",
          "<strong>Principiul nonviolenței și al armoniei</strong>",
        ],
        answer: 0,
      },
      {
        text: "În etica grijii, nivelul convențional este definit prin:",
        options: [
          "<strong>Sacrificiul de sine ca formă de bunătate</strong> (<span class='tip'>grija pentru ceilalți<span class='tooltip-box'>A fi bun înseamnă să arăți grijă față de ceilalți și să pui nevoile lor înaintea propriilor nevoi. Valoarea morală este asociată cu altruismul și abnegația. Exemplu: o persoană acceptă o situație dezavantajoasă pentru a nu răni pe cineva apropiat.</span></span>)",
          "<strong>Supraviețuire individuală</strong>",
          "<strong>Echilibru între sine și ceilalți</strong>",
        ],
        answer: 0,
      },
      {
        text: "Nivelul postconvențional al eticii grijii (Gilligan) este caracterizat de:",
        options: [
          "<strong>Principiul nonviolenței și al armoniei</strong> (<span class='tip'>echilibru relațional<span class='tooltip-box'>La acest nivel, persoana caută să rezolve conflictele dintre propriile interese și ale celorlalți prin înțelegere și responsabilitate reciprocă. Moralitatea se bazează pe evitarea răului atât față de sine cât și față de ceilalți. Exemplu: o decizie este luată astfel încât să minimizeze suferința tuturor părților implicate.</span></span>)",
          "<strong>Sacrificiul de sine ca ideal moral</strong>",
          "<strong>Orientarea exclusivă spre interes personal</strong>",
        ],
        answer: 0,
      },
    ],
  },
  //U5
  {
    id: "phed-u5-q1",
    title: "Personalitatea – definiții și caracteristici generale",
    questions: [
      {
        text: "Personalitatea nu este o realitate fixă, dată integral de la naștere. Cum se formează personalitatea?",
        options: [
          "<span class='tip'>Se construiește progresiv prin interacțiunea dintre factori biologici, psihologici, sociali și culturali<span class='tooltip-box'>Personalitatea rezultă din combinarea potențialului ereditar cu experiențele de viață, mediul social și contextul cultural de-a lungul timpului.</span></span>",
          "<span class='tip'>Este determinată exclusiv de ereditate și transmisă genetic fără influențe externe semnificative<span class='tooltip-box'>Textul menționează potențialul ereditar dar subliniază clar că personalitatea nu este dată integral de la naștere și nu se reduce la factori biologici.</span></span>",
          "<span class='tip'>Se formează complet în copilărie și rămâne neschimbată pe parcursul întregii vieți adulte<span class='tooltip-box'>Personalitatea este descrisă ca având o dezvoltare graduală, dinamică și adaptabilă la contexte noi.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Definește factorii care dau unicitatea personalității",
        options: [
          "<span class='tip'>Rezultă din potențialul ereditar, constituția fizică, istoria de viață, experiența acumulată și filozofia proprie<span class='tooltip-box'>Acești factori fac ca fiecare persoană să fie diferită chiar în contexte sociale similare.</span></span>",
          "<span class='tip'>Este determinată doar de mediul social și de influențele educaționale externe asupra individului<span class='tooltip-box'>Textul vorbește despre o combinație complexă de factori biologici, psihologici și experiențiali, nu despre un singur determinant.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "În structura personalității există componente cu ritmuri diferite de dezvoltare. Care sunt ele și cum se diferențiază?",
        options: [
          "<span class='tip'>Temperamentul apare de la naștere iar aptitudinile și caracterul se dezvoltă gradual<span class='tooltip-box'><strong>Temperamentul</strong> reprezintă baza înnăscută a reacțiilor iar <strong>aptitudinile și caracterul</strong> se modelează prin experiență, educație și contexte de viață.</span></span>",
          "<span class='tip'>Aptitudinile sunt complet înnăscute iar temperamentul și caracterul se formează exclusiv prin educație formală<span class='tooltip-box'>Această afirmație inversează relația descrisă în text și simplifică excesiv rolul experienței.</span></span>",
          "<span class='tip'>Toate componentele personalității apar simultan, complet structurate și identice ca ritm de dezvoltare<span class='tooltip-box'>Textul subliniază explicit existența unor ritmuri diferite de emergență și dezvoltare a componentelor.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Indiferent dacă este vorba de autocunoaștere sau de evaluarea realizată de alte persoane, care este scopul cunoașterii personalității?",
        options: [
          "<span class='tip'>Descrierea, explicarea și predicția comportamentelor pentru o mai bună înțelegere a relației persoanei cu mediul<span class='tooltip-box'>Textul precizează că această cunoaștere urmărește explicarea și anticiparea comportamentelor actuale sau viitoare, pentru a înțelege mai bine modul în care persoana se raportează la învățare, situații de criză sau diferite niveluri de solicitare.</span></span>",
          "<span class='tip'>Etichetarea definitivă a persoanei pe baza unor trăsături fixe, stabile și presupuse imuabile pe tot parcursul vieții<span class='tooltip-box'>Personalitatea este înțeleasă ca o structură <strong>dinamică și constructivă</strong>, care se formează și se transformă în timp.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u5-q2",
    title: "Niveluri de analiză a personalității",
    questions: [
      {
        text: "Analiza personalității se realizează pe mai multe paliere explicative. Care este ideea centrală a acestei abordări?",
        options: [
          "<span class='tip'>Personalitatea este explicată prin niveluri diferite de analiză, fiecare surprinzând un tip specific de determinare<span class='tooltip-box'>Abordarea personalității se realizează prin paliere explicative distincte: nivel genetic, nivel neurofiziologic și biochimic, nivel evoluționist și nivel de trăsătură. Niciun nivel nu este suficient singur; explicația completă apare prin corelarea lor.</span></span>",
          "<span class='tip'>Personalitatea poate fi explicată complet printr-un singur nivel fundamental<span class='tooltip-box'>Această poziție ignoră existența mai multor paliere explicative și diversitatea mecanismelor implicate.</span></span>",
          "<span class='tip'>Personalitatea este un construct abstract fără baze biologice sau psihologice clare<span class='tooltip-box'>Această afirmație este infirmată de abordările genetice, neurofiziologice, evoluționiste și ale trăsăturilor.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care dintre următoarele reprezintă paliere explicative valide în analiza personalității? (selectează toate variantele corecte)",
        multiple: true,
        options: [
          "<span class='tip'><strong>Nivel genetic</strong> – bază ereditară<span class='tooltip-box'>Explică predispozițiile biologice ale personalității pornind de la zestrea ereditară și modul diferit de activare a genelor. Exemplu: diferențe individuale în reactivitatea emoțională influențate de ereditate.</span></span>",
          "<span class='tip'><strong>Nivel neurofiziologic și biochimic</strong> – funcționare biologică<span class='tooltip-box'>Explică diferențele interindividuale prin activarea sistemului nervos, endocrin și a neurotransmițătorilor. Exemplu: variații ale nivelului de activare sau ale răspunsului la stres.</span></span>",
          "<span class='tip'><strong>Nivel evoluționist</strong> – adaptare de specie<span class='tooltip-box'>Explică trăsături comune oamenilor ca rezultat al selecției naturale și al valorii adaptive. Exemplu: altruismul ca comportament favorabil supraviețuirii grupului.</span></span>",
          "<span class='tip'><strong>Nivel de trăsătură</strong> – organizare individuală<span class='tooltip-box'>Explică personalitatea printr-o rețea de trăsături cardinale, principale și secundare, a căror organizare conferă unicitate individului. Exemplu: dominanța unei trăsături cardinale în comportament.</span></span>",
          "<span class='tip'><strong>Nivel astrologic</strong> – influența semnelor zodiacale<span class='tooltip-box'>Această abordare nu aparține niciunui palier explicativ valid în psihologia personalității și nu are fundament științific.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },
      {
        text: "Ce caracterizează nivelul genetic de analiză a personalității?",
        options: [
          "<span class='tip'>Explicarea diferențelor individuale pornind de la zestrea ereditară și activarea genelor<span class='tooltip-box'>Codul genetic este comun speciei, dar exprimarea și transcrierea lui diferă de la o persoană la alta.</span></span>",
          "<span class='tip'>Determinarea completă a personalității printr-un cod genetic identic pentru toți indivizii<span class='tooltip-box'>Deși ADN-ul este o rețea comună de molecule, exprimarea sa nu este identică.</span></span>",
          "<span class='tip'>Excluderea influenței mediului asupra dezvoltării psihologice<span class='tooltip-box'>Nivelul genetic explică predispoziții, nu comportamente fixe.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Nivelul neurofiziologic și biochimic explică personalitatea prin:",
        options: [
          "<span class='tip'>Funcționarea sistemului nervos, endocrin și a neurotransmițătorilor<span class='tooltip-box'>Aceste mecanisme sunt strâns legate de predispozițiile genetice și produc diferențe psihologice funcționale.</span></span>",
          "<span class='tip'>Transmiterea culturală a normelor și valorilor sociale dominante<span class='tooltip-box'>Aceasta aparține unui alt palier explicativ.</span></span>",
          "<span class='tip'>Structurarea trăsăturilor cardinale și secundare ale individului<span class='tooltip-box'>Aceasta este specifică nivelului trăsăturilor.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce aduce nivelul evoluționist în explicarea personalității?",
        options: [
          "<span class='tip'>Explicarea caracteristicilor comune oamenilor ca rezultat al selecției naturale<span class='tooltip-box'>Caracteristicile sunt transmise dacă au valoare adaptativă pentru specie, de exemplu comportamentele prosociale.</span></span>",
          "<span class='tip'>Diferențierea exclusivă a indivizilor pe baza experiențelor personale<span class='tooltip-box'>Aceasta nu surprinde dimensiunea comună, specifică speciei.</span></span>",
          "<span class='tip'>Reducerea personalității la mecanisme strict neurochimice<span class='tooltip-box'>Nivelul evoluționist operează cu categorii largi, nu cu mecanisme punctuale.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum este înțeles nivelul de trăsătură în analiza personalității?",
        options: [
          "<span class='tip'>Personalitatea este explicată printr-o rețea individuală de trăsături cu ponderi diferite<span class='tooltip-box'>Trăsăturile pot fi cardinale, principale sau secundare, iar poziția lor în rețea conferă unicitate persoanei.</span></span>",
          "<span class='tip'>Comportamentul este determinat de o singură trăsătură dominantă comună tuturor oamenilor<span class='tooltip-box'>Această afirmație ignoră organizarea ierarhică a trăsăturilor.</span></span>",
          "<span class='tip'>Trăsăturile sunt simple etichete fără legătură cu comportamentul real<span class='tooltip-box'>În acest nivel, trăsăturile sunt direct implicate în explicarea comportamentului.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u5-q3",
    title: "Abordări teoretice ale personalității",
    questions: [
      {
        text: "Abordările teoretice ale personalității diferă prin modul în care explică formarea și funcționarea acesteia. Care este ideea comună a acestor teorii?",
        options: [
          "<span class='tip'>Personalitatea este explicată prin modele teoretice diferite, fiecare punând accent pe mecanisme distincte ale dezvoltării<span class='tooltip-box'>Teoriile personalității diferă prin ceea ce consideră determinant: conflicte interne, învățare, autoreglare, trebuințe, cogniții sau trăsături stabile.</span></span>",
          "<span class='tip'>Există o singură teorie general acceptată care explică exhaustiv personalitatea umană<span class='tooltip-box'>Diversitatea teoriilor reflectă complexitatea personalității și pluralitatea mecanismelor explicative.</span></span>",
          "<span class='tip'>Personalitatea poate fi înțeleasă doar prin observația comportamentului exterior<span class='tooltip-box'>Multe teorii includ procese interne, conflicte, cogniții sau trebuințe.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care dintre următoarele reprezintă abordări teoretice valide ale personalității? (selectează toate variantele corecte)",
        multiple: true,
        options: [
          "<span class='tip'><strong>Teorii psihanalitice și neopsihanalitice</strong> – conflict intrapsihic (Freud, Jung, Adler, Horney, Fromm, Murray)<span class='tooltip-box'>Explică dezvoltarea personalității prin conflictul dintre dorințe, pulsiuni sau trebuințe interne și constrângerile mediului. Exemplu: importanța primilor ani de viață și a dezvoltării stadiale.</span></span>",
          "<span class='tip'><strong>Teorii behavioriste și socio-cognitive</strong> – învățare și feedback (Skinner, Rotter, Bandura)<span class='tooltip-box'>Explică personalitatea prin efectul întăririlor pozitive și negative asupra comportamentului și prin mecanisme de autoreglare. Exemplu: repetarea unui comportament ca urmare a recompensei.</span></span>",
          "<span class='tip'><strong>Teorii umaniste</strong> – auto-realizare (Rogers, Maslow)<span class='tooltip-box'>Pun accent pe autenticitate și pe trebuința intrinsecă a individului de a deveni cea mai bună versiune a sa. Exemplu: orientarea spre dezvoltare personală.</span></span>",
          "<span class='tip'><strong>Teorii cognitive</strong> – interpretare personală (Kelly)<span class='tooltip-box'>Văd individul ca un „savant naiv” care interpretează activ realitatea și construiește sens prin constructe personale. Exemplu: două persoane pot interpreta același eveniment în mod diferit.</span></span>",
          "<span class='tip'><strong>Teorii ale trăsăturilor</strong> – regularități comportamentale (Allport, Cattell, Eysenck, Costa și McCrae, Gray, Tellegen)<span class='tooltip-box'>Explică personalitatea prin trăsături stabile cu putere predictivă, grupate în factori. Exemplu: consistența comportamentului în situații variate.</span></span>",
          "<span class='tip'><strong>Teorii astrologice</strong> – influență cosmică<span class='tooltip-box'>Această abordare nu aparține teoriilor științifice ale personalității și nu oferă explicații validate empiric.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4],
      },

      {
        text: "Cum explică teoriile psihanalitice și neopsihanalitice dezvoltarea personalității?",
        options: [
          "<span class='tip'>Prin conflictul dintre dorințele interne ale persoanei și constrângerile mediului<span class='tooltip-box'>Dezvoltarea este stadială, primii ani de viață fiind esențiali, iar conflictele pot continua și la vârsta adultă.</span></span>",
          "<span class='tip'>Prin condiționări și întăriri aplicate exclusiv comportamentelor observabile<span class='tooltip-box'>Această explicație aparține abordărilor behavioriste.</span></span>",
          "<span class='tip'>Prin tendința conștientă a individului de auto-realizare și autenticitate personală<span class='tooltip-box'>Aceasta este specifică teoriilor umaniste.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce este specific teoriilor behavioriste și socio-cognitive în explicarea personalității?",
        options: [
          "<span class='tip'>Rolul feedbackului, al întăririlor și al autoreglării în formarea comportamentului<span class='tooltip-box'>Întăririle pozitive susțin repetarea comportamentului, iar cele negative conduc la evitarea lui; persoana se formează și prin autoreglare.</span></span>",
          "<span class='tip'>Accentul pe conflicte inconștiente și pulsiuni aflate în opoziție cu normele sociale<span class='tooltip-box'>Această explicație este caracteristică psihanalizei.</span></span>",
          "<span class='tip'>Explicarea personalității prin trăsături stabile, organizate factorial<span class='tooltip-box'>Aceasta aparține teoriilor trăsăturilor.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este perspectiva centrală a teoriilor umaniste asupra personalității?",
        options: [
          "<span class='tip'>Accentul pe autenticitate și trebuința de auto-realizare<span class='tooltip-box'>Indivizii au o nevoie intrinsecă de a deveni cea mai bună versiune a lor.</span></span>",
          "<span class='tip'>Modelarea comportamentului prin pedepse și recompense succesive<span class='tooltip-box'>Aceasta caracterizează abordările behavioriste.</span></span>",
          "<span class='tip'>Determinarea personalității prin ereditate și selecție naturală<span class='tooltip-box'>Aceasta aparține nivelului evoluționist.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum este explicată personalitatea în teoriile cognitive?",
        options: [
          "<span class='tip'>Prin interpretarea activă a realității și construirea de constructe personale<span class='tooltip-box'>Individul este văzut ca un „savant naiv” care interpretează constant experiențele pentru a da sens lumii.</span></span>",
          "<span class='tip'>Prin manifestarea unor trăsături stabile indiferent de situație<span class='tooltip-box'>Aceasta este perspectiva teoriilor trăsăturilor.</span></span>",
          "<span class='tip'>Prin conflicte interne între pulsiuni și interdicții sociale<span class='tooltip-box'>Aceasta aparține teoriilor psihanalitice.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce definesc teoriile trăsăturilor în explicarea personalității?",
        options: [
          "<span class='tip'>Trăsături stabile cu putere predictivă asupra comportamentelor viitoare<span class='tooltip-box'>Trăsăturile se grupează în factori și pot fi temperamentale, caracteriale sau aptitudinale.</span></span>",
          "<span class='tip'>Procese inconștiente care generează conflicte interne persistente<span class='tooltip-box'>Aceasta este specifică psihanalizei.</span></span>",
          "<span class='tip'>Formarea personalității exclusiv prin feedback social imediat<span class='tooltip-box'>Aceasta descrie parțial abordările behavioriste.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce idee comună susțin teoriile personalității în ciuda diferențelor dintre ele?",
        options: [
          "<span class='tip'>Personalitatea este un sistem relativ stabil de invarianți interni, constant în timp și transsituațional, dar totodată modelabil<span class='tooltip-box'>Personalitatea explică de ce o persoană reacționează similar în situații diferite sau în momente diferite ale vieții, dar permite și ajustarea exprimării trăsăturilor în funcție de cerințele mediului. Exemplu: o persoană introvertă poate manifesta comportamente mai sociale într un context profesional.</span></span>",
          "<span class='tip'>Personalitatea este complet determinată de contextul situațional imediat<span class='tooltip-box'>Această afirmație ignoră caracterul stabil și transsituațional al personalității.</span></span>",
          "<span class='tip'>Personalitatea este rigidă și nu se modifică după copilărie<span class='tooltip-box'>Teoriile subliniază explicit caracterul modelabil al personalității.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u5-q4",
    title: "Structura personalității (static)",
    questions: [
      {
        text: "În sens general, cum este definită personalitatea din perspectiva structurii sale?",
        options: [
          "<span class='tip'>Un sistem relativ stabil de trăsături interne, constante în timp și transsituaționale<span class='tooltip-box'>Personalitatea explică regularitatea comportamentului unei persoane în situații diferite și în momente diferite ale vieții.</span></span>",
          "<span class='tip'>Un ansamblu de reacții determinate exclusiv de contextul situațional imediat<span class='tooltip-box'>Această definiție ignoră caracterul stabil și intern al personalității.</span></span>",
          "<span class='tip'>Un set de comportamente izolate fără legătură între ele<span class='tooltip-box'>Structura personalității presupune organizare și coerență internă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care sunt componentele structurale ale personalității în sens larg?",
        options: [
          "<span class='tip'>Temperament + caracter + aptitudini (tot ce ține de stil, valori și capacități)<span class='tooltip-box'>Sensul larg include atât modul în care persoana reacționează (temperament), ce valori și reguli își asumă (caracter), cât și ce poate face eficient (aptitudini). Exemplu: un elev poate fi calm (temperament), responsabil (caracter) și foarte bun la matematică (aptitudine).</span></span>",
          "<span class='tip'>Doar temperamentul și reacțiile emoționale de moment<span class='tooltip-box'>Această variantă ignoră caracterul și aptitudinile, care fac parte din structura completă.</span></span>",
          "<span class='tip'>Exclusiv aptitudinile cognitive și performanțele școlare<span class='tooltip-box'>Aptitudinile sunt doar una dintre laturile personalității, nu întregul ei.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "La ce se referă personalitatea în sens restrâns?",
        options: [
          "<span class='tip'>Temperament + caracter (stilul de reacție și sistemul de valori)<span class='tooltip-box'>Sensul restrâns exclude aptitudinile (inclusiv inteligența) și se referă la modul relativ stabil în care persoana reacționează și se raportează la norme și valori. Exemplu: doi elevi pot avea aceeași inteligență (aptitudine), dar unul este impulsiv și perseverent, iar altul calm și conformist.</span></span>",
          "<span class='tip'>Întregul potențial cognitiv și intelectual al persoanei<span class='tooltip-box'>Aceasta descrie aptitudinile, iar inteligența este o aptitudine, nu parte din personalitatea în sens restrâns.</span></span>",
          "<span class='tip'>Totalitatea comportamentelor observabile într-un context dat<span class='tooltip-box'>Comportamentele punctuale nu definesc structura stabilă a personalității.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce rol au trăsăturile în structura personalității?",
        options: [
          "<span class='tip'>Permit descrierea și predicția comportamentului prin regularități stabile<span class='tooltip-box'>Trăsăturile au caracter relativ constant și explică de ce persoana reacționează similar în situații diferite.</span></span>",
          "<span class='tip'>Explică doar reacții emoționale de scurtă durată<span class='tooltip-box'>Trăsăturile nu sunt stări trecătoare.</span></span>",
          "<span class='tip'>Reprezintă etichete fără legătură cu comportamentul real<span class='tooltip-box'>În abordarea structurală, trăsăturile au valoare explicativă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum sunt organizate trăsăturile în structura personalității?",
        options: [
          "<span class='tip'>Ierarhic, conform teoriei trăsăturilor a lui Allport:<span class='tooltip-box'>Allport propune o organizare ierarhică a trăsăturilor, în funcție de rolul lor în structurarea personalității.</span></span> <span class='tip'><strong>trăsături cardinale</strong><span class='tooltip-box'>Trăsături dominante și rare, care organizează aproape întreaga personalitate. Exemplu: un profesor definit în toate situațiile de corectitudine morală.</span></span>, <span class='tip'><strong>trăsături principale</strong><span class='tooltip-box'>Trăsături centrale, frecvent observabile, care descriu stilul general al persoanei. Exemplu: conștiinciozitate, responsabilitate, perseverență.</span></span> și <span class='tip'><strong>trăsături secundare</strong><span class='tooltip-box'>Trăsături contextuale, slab exprimate, activate doar în anumite situații. Exemplu: timiditate doar în contexte sociale informale.</span></span>",
          "<span class='tip'>Toate trăsăturile au aceeași importanță și intensitate<span class='tooltip-box'>Această variantă ignoră ideea de ierarhie a trăsăturilor.</span></span>",
          "<span class='tip'>Trăsăturile apar izolat, fără relații între ele<span class='tooltip-box'>Structura personalității presupune organizare și relații între trăsături.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce proprietate fundamentală caracterizează structura personalității?",
        options: [
          "<span class='tip'>Stabilitate relativă în timp<span class='tooltip-box'>Stabilitatea nu înseamnă rigiditate, ci constanță a organizării interne.</span></span>",
          "<span class='tip'>Rigiditate completă și imposibilitate de ajustare<span class='tooltip-box'>Personalitatea nu este complet fixă.</span></span>",
          "<span class='tip'>Variabilitate totală de la o situație la alta<span class='tooltip-box'>Aceasta ar exclude ideea de structură.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u5-q5",
    title: "Personalitatea ca sistem dinamic și interacționist",
    questions: [
      {
        text: "Cum este înțeleasă personalitatea din perspectiva dinamică și interacționistă?",
        options: [
          "<span class='tip'>Ca rezultat al interacțiunii continue dintre trăsături interne și interpretarea situațiilor<span class='tooltip-box'>Personalitatea include invarianți relativ stabili, dar comportamentul apare din interacțiunea dintre predispozițiile persoanei și modul în care aceasta interpretează cognitiv și afectiv situațiile de viață.</span></span>",
          "<span class='tip'>Ca structură fixă de trăsături care determină direct comportamentul<span class='tooltip-box'>Această perspectivă ignoră rolul situației și al proceselor de interpretare.</span></span>",
          "<span class='tip'>Ca sumă a reacțiilor automate la stimuli externi<span class='tooltip-box'>Aceasta reduce personalitatea la mecanisme simple de tip stimul răspuns.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce limită majoră este atribuită teoriilor centrate exclusiv pe trăsături?",
        options: [
          "<span class='tip'>Simplificarea relației dintre trăsătură și comportament, fără a lua în considerare situația<span class='tooltip-box'>Atribuirea directă a comportamentului unei trăsături poate conduce la asumpții greșite dacă sunt ignorate împrejurările concrete.</span></span>",
          "<span class='tip'>Negarea completă a existenței trăsăturilor de personalitate<span class='tooltip-box'>Critica vizează exclusiv relația simplistă trăsătură–comportament.</span></span>",
          "<span class='tip'>Eliminarea rolului factorilor biologici în explicarea personalității<span class='tooltip-box'>Biologia nu este exclusă în perspectiva interacționistă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum este înțeleasă situația în perspectiva propusă de <span class='tip'>Mischel și Shoda<span class='tooltip-box'>Mischel, W., Shoda, Y. (1995). A Cognitive-Affective System Theory of Personality: Reconceptualizing Situations, Dispositions, Dynamics, and Invariance in Personality Structure. Psychological Review, 102(2), 246–268.</span></span>?",
        options: [
          "<span class='tip'>Ca rezultat al interpretării cognitive și afective realizate de individ<span class='tooltip-box'>Situația nu acționează direct asupra comportamentului, ci este mai întâi codificată cognitiv și afectiv. Acest cod interacționează cu predispozițiile de personalitate (sistemul de trăsături), influențând reacția. De aceea, comportamentul nu poate fi prezis doar din situație sau doar din trăsături, ci din interacțiunea dintre ele.</span></span>",
          "<span class='tip'>Ca un factor extern obiectiv, identic pentru toți indivizii<span class='tooltip-box'>Această viziune presupune reacții uniforme și ignoră interpretarea personală.</span></span>",
          "<span class='tip'>Ca un determinant complet independent de personalitate<span class='tooltip-box'>În perspectiva CAPS, situația și personalitatea sunt inseparabile în explicarea comportamentului.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "De ce a fost introdusă teoria CAPS (Cognitive-Affective Personality System) și ce aduce nou în explicarea personalității?",
        options: [
          "<span class='tip'>Propune o viziune dinamică, în care comportamentul rezultă din interacțiunea dintre trăsături și procese cognitive-afective<span class='tooltip-box'>Teoria CAPS a fost introdusă de Mischel și Shoda pentru a depăși limitele teoriilor strict centrate pe trăsături. Autorii arată că personalitatea nu acționează direct asupra comportamentului, ci prin unități cognitive și afective (coduri, așteptări, emoții, scopuri, autoreglare) care interacționează cu situațiile. Exemplu: aceeași persoană poate reacționa diferit la o critică, în funcție de modul în care o interpretează și de experiențele anterioare.</span></span>",
          "<span class='tip'>Susține că trăsăturile sunt suficiente pentru a prezice comportamentul în orice situație<span class='tooltip-box'>Aceasta este exact poziția criticată de Mischel și Shoda.</span></span>",
          "<span class='tip'>Reduce personalitatea la reacții automate de tip stimul răspuns<span class='tooltip-box'>CAPS respinge explicațiile simpliste și introduce procese cognitive și afective.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce afirmă teoria CAPS (Cognitive-Affective Personality System)?",
        options: [
          "<span class='tip'>Comportamentul rezultă din interacțiunea dintre predispozițiile de personalitate și un set de unități cognitive și afective<span class='tooltip-box'>Teoria CAPS, propusă de Mischel și Shoda, descrie personalitatea ca un sistem dinamic. Comportamentul nu este produs direct de trăsături, ci apare din interacțiunea dintre predispozițiile persoanei și unități interne precum interpretările situației, așteptările, emoțiile, scopurile și mecanismele de autoreglare, activate diferit în funcție de context.</span></span>",
          "<span class='tip'>Comportamentul este determinat direct și uniform de o trăsătură dominantă<span class='tooltip-box'>Aceasta este perspectiva simplificatoare criticată de Mischel și Shoda.</span></span>",
          "<span class='tip'>Situația nu joacă niciun rol în explicarea comportamentului<span class='tooltip-box'>CAPS pune accent tocmai pe interacțiunea dintre persoană și situație.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care dintre următoarele reprezintă unități componente ale sistemului CAPS (Cognitive-Affective Personality System)?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Coduri (encodări)</strong> – interpretări cognitive<span class='tooltip-box'>Constructe despre sine, ceilalți, evenimente și situații.</span></span>",
          "<span class='tip'><strong>Așteptări și credințe</strong> – anticiparea consecințelor<span class='tooltip-box'>Credințe despre lume, eficacitate de sine și rezultate ale acțiunilor.</span></span>",
          "<span class='tip'><strong>Afecte</strong> – răspunsuri emoționale<span class='tooltip-box'>Emoții, sentimente și reacții fiziologice asociate situațiilor.</span></span>",
          "<span class='tip'><strong>Scopuri și valori</strong> – orientarea acțiunii<span class='tooltip-box'>Obiective personale și sisteme de valori.</span></span>",
          "<span class='tip'><strong>Competențe de autoreglare</strong> – controlul comportamentului<span class='tooltip-box'>Planuri și strategii de organizare a acțiunii.</span></span>",
          "<span class='tip'><strong>Tipuri zodiacale</strong> – influențe cosmice<span class='tooltip-box'>Nu fac parte din teoria CAPS.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4],
      },

      {
        text: "Conform perspectivei interacționiste asupra personalității, formulată de <span class='tip'>Derlega și colaboratorii<span class='tooltip-box'>Derlega, V. J., Winstead, B. A., & Greene, K. (2008). Self-disclosure and starting a close relationship. In S. Sprecher, A. Wenzel, & J. Harvey (Eds.), Handbook of relationship initiation (pp. 153–174). Psychology Press.</span></span>, care dintre următoarele principii descriu corect relația dintre trăsături și situație?",
        multiple: true,
        options: [
          "<span class='tip'>Trăsăturile specifice se manifestă numai în situații relevante<span class='tooltip-box'>O trăsătură nu apare automat în orice context, ci doar în situații care activează acea predispoziție.</span></span>",
          "<span class='tip'>Orice trăsătură se manifestă mai ușor în anumite situații decât în altele<span class='tooltip-box'>Există contexte facilitatoare și contexte inhibitoare pentru exprimarea unei trăsături.</span></span>",
          "<span class='tip'>Trăsătura unei persoane poate schimba situația<span class='tooltip-box'>Individul influențează activ mediul prin comportamentele sale, modificând dinamica situației.</span></span>",
          "<span class='tip'>Indivizii caută activ situații concordante cu trăsăturile lor de personalitate<span class='tooltip-box'>Persoanele selectează, evocă sau chiar manipulează situațiile pentru a fi în acord cu trăsăturile lor.</span></span>",
          "<span class='tip'>Situațiile determină comportamentul identic pentru toți indivizii<span class='tooltip-box'>Această afirmație contrazice perspectiva interacționistă și ignoră diferențele individuale.</span></span>",
        ],
        answer: [0, 1, 2, 3],
      },
      {
        text: "Cum este descrisă relația dintre ereditate și mediu în dezvoltarea personalității?",
        options: [
          "<span class='tip'>Ereditatea furnizează substratul biologic, iar mediul îl modelează<span class='tooltip-box'>Interacțiunea dintre datul biologic și condițiile de mediu contribuie la dezvoltarea personalității.</span></span>",
          "<span class='tip'>Personalitatea este determinată exclusiv de factori genetici<span class='tooltip-box'>Mediul are un rol esențial.</span></span>",
          "<span class='tip'>Mediul anulează complet influența eredității<span class='tooltip-box'>Influențele sunt complementare.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u5-q6",
    title: "Temperamentul – definiții și trăsături generale",
    questions: [
      {
        text: "Ce este temperamentul în structura personalității?",
        options: [
          "<span class='tip'>Latura personalității responsabilă de reactivitatea emoțională, autoreglare, nivel de activism și sociabilitate<span class='tooltip-box'>Temperamentul descrie modul relativ stabil în care o persoană reacționează emoțional și energetic la stimuli, având o bază biologică.</span></span>",
          "<span class='tip'>Ansamblul valorilor morale, al convingerilor personale și al normelor internalizate care ghidează comportamentul în raport cu binele și răul<span class='tooltip-box'>Aceasta descrie caracterul, nu temperamentul.</span></span>",
          "<span class='tip'>Totalitatea abilităților cognitive generale și specifice, inclusiv inteligența, memoria și capacitatea de rezolvare a problemelor<span class='tooltip-box'>Aceasta se referă la aptitudini, nu la temperament.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este baza funcțională a temperamentului?",
        options: [
          "<span class='tip'>Particularitățile anatomo-fiziologice ale sistemului nervos și endocrin<span class='tooltip-box'>Temperamentul are o bază biologică, legată de funcționarea sistemului nervos și hormonal.</span></span>",
          "<span class='tip'>Experiențele educaționale, sociale și culturale acumulate pe parcursul dezvoltării individului<span class='tooltip-box'>Acestea influențează mai ales caracterul și stilurile de conduită.</span></span>",
          "<span class='tip'>Normele culturale dominante, valorile societății și modelele comportamentale transmise social<span class='tooltip-box'>Acestea aparțin macrosistemului social.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este relația dintre temperament și stabilitatea în timp?",
        options: [
          "<span class='tip'>Temperamentul este relativ stabil de-a lungul vieții, mai ales când intensitatea trăsăturilor este ridicată<span class='tooltip-box'>Predispozițiile temperamentale pot fi identificate timpuriu și tind să se mențină, deși exprimarea lor comportamentală se modifică.</span></span>",
          "<span class='tip'>Temperamentul se schimbă radical și complet de la o etapă de vârstă la alta, fără continuități semnificative<span class='tooltip-box'>Această afirmație ignoră stabilitatea relativă a predispozițiilor.</span></span>",
          "<span class='tip'>Temperamentul apare exclusiv în perioada adultă, odată cu maturizarea completă a personalității<span class='tooltip-box'>Temperamentul poate fi identificat încă din perioada de sugar.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum se manifestă temperamentul în comportament?",
        options: [
          "<span class='tip'>Ca o constelație de predispoziții care se exprimă diferit în funcție de context<span class='tooltip-box'>Temperamentul nu determină comportamente fixe, ci influențează stilul reacțiilor emoționale și energetice.</span></span>",
          "<span class='tip'>Ca un set rigid de reacții identice, invariabile și complet previzibile în toate situațiile de viață<span class='tooltip-box'>Aceasta contrazice ideea de adaptare contextuală.</span></span>",
          "<span class='tip'>Ca un tipar comportamental exclusiv învățat social, independent de orice bază biologică<span class='tooltip-box'>Temperamentul are o bază biologică.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este gradul de ereditate al temperamentului?",
        options: [
          "<span class='tip'>Temperamentul este considerat înalt eritabil<span class='tooltip-box'>Cercetările arată o contribuție genetică semnificativă în formarea predispozițiilor temperamentale.</span></span>",
          "<span class='tip'>Temperamentul este determinat aproape în totalitate de educație și experiențele sociale timpurii<span class='tooltip-box'>Educația influențează exprimarea, nu baza temperamentului.</span></span>",
          "<span class='tip'>Temperamentul nu are nicio componentă biologică și este complet modelat de mediu<span class='tooltip-box'>Această afirmație este infirmată de datele neurofiziologice.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum trebuie înțelese trăsăturile temperamentale din perspectiva adaptării?",
        options: [
          "<span class='tip'>Nu sunt bune sau rele în sine, ci adaptative sau dezadaptative în funcție de context<span class='tooltip-box'>O predispoziție temperamentală poate fi avantajoasă sau problematică în funcție de potrivirea cu situația.</span></span>",
          "<span class='tip'>Unele temperamente sunt în mod universal superioare altora și favorizează succesul indiferent de context<span class='tooltip-box'>Această perspectivă este eronată.</span></span>",
          "<span class='tip'>Temperamentele considerate negative conduc inevitabil la probleme de comportament și adaptare<span class='tooltip-box'>Exprimarea depinde de context și de capacitatea de autoreglare.</span></span>",
        ],
        answer: 0,
      },
    ],
  },

  {
    id: "phed-u5-q7",
    title:
      "Temperamentul în copilărie – tipare timpurii și stabilitate relativă",
    questions: [
      {
        text: "Ce este temperamentul în copilărie?",
        options: [
          "<span class='tip'>Latura personalității responsabilă de reactivitatea emoțională, nivelul de activitate, sociabilitate și autoreglare<span class='tooltip-box'>Temperamentul are bază biologică, poate fi observat încă din perioada de sugar și explică modul tipic în care copilul reacționează la stimuli.</span></span>",
          "<span class='tip'>Ansamblul valorilor morale și al normelor internalizate<span class='tooltip-box'>Aceasta descrie caracterul, nu temperamentul.</span></span>",
          "<span class='tip'>Nivelul general al inteligenței copilului<span class='tooltip-box'>Inteligența este o aptitudine, nu o dimensiune temperamentală.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce caracteristică definește cel mai bine temperamentul copilului?",
        options: [
          "<span class='tip'>Apare timpuriu și se menține relativ constant în timp<span class='tooltip-box'>Deși expresia comportamentală se poate modifica odată cu vârsta, predispozițiile temperamentale rămân relativ stabile.</span></span>",
          "<span class='tip'>Este complet modelat de educație și experiență<span class='tooltip-box'>Temperamentul are o componentă biologică importantă.</span></span>",
          "<span class='tip'>Se schimbă radical de la o etapă de vârstă la alta<span class='tooltip-box'>Stabilitatea este relativă, nu inexistentă.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Cum clasifică Thomas și Chess temperamentul copiilor?",
        options: [
          "<span class='tip'>În copii calmi/adaptabili, copii dificili și copii lenți/dificil de activat<span class='tooltip-box'>Clasificarea se bazează pe nouă criterii comportamentale, precum reactivitatea emoțională, adaptabilitatea și regularitatea rutinelor.</span></span>",
          "<span class='tip'>În copii inteligenți și mai puțin inteligenți<span class='tooltip-box'>Aceasta nu este o clasificare temperamentală.</span></span>",
          "<span class='tip'>În copii introverti și extraverti exclusiv<span class='tooltip-box'>Aceasta aparține altor modele teoretice.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Ce arată cercetările lui Kagan despre stabilitatea temperamentului?",
        options: [
          "<span class='tip'>Stabilitatea este mai mare la extremele temperamentale, iar manifestările moderate pot varia în timp<span class='tooltip-box'>De exemplu, copiii foarte inhibați care evită constant noutatea și cei foarte neinhibați care caută activ stimularea tind să își păstreze acest profil în timp, în timp ce copiii cu reacții moderate pot deveni mai inhibați sau mai deschiși pe parcursul dezvoltării.</span></span>",
          "<span class='tip'>Temperamentul rămâne identic pentru toți copiii de-a lungul vieții<span class='tooltip-box'>Aceasta contrazice datele longitudinale.</span></span>",
          "<span class='tip'>Temperamentul dispare odată cu creșterea copilului<span class='tooltip-box'>Temperamentul se menține, dar își modifică expresia.</span></span>",
        ],
        answer: 0,
      },
      {
        text: "Care este implicația educațională majoră a temperamentului copilului?",
        options: [
          "<span class='tip'>Comportamentele copilului trebuie înțelese în raport cu predispozițiile temperamentale<span class='tooltip-box'>Aceeași cerință educațională poate fi trăită diferit de copii cu temperamente diferite.</span></span>",
          "<span class='tip'>Temperamentul determină rigid succesul sau eșecul școlar<span class='tooltip-box'>Temperamentul influențează adaptarea, dar nu determină rezultate fixe.</span></span>",
          "<span class='tip'>Temperamentul poate fi eliminat prin educație corectă<span class='tooltip-box'>Temperamentul nu se elimină, ci se reglează și se adaptează.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u5-q8",
    title: "Temperamentele în teoria lui Eysenck",
    questions: [
      {
        text: "De ce este relevant modelul lui Eysenck în studiul temperamentului, după clasificările dezvoltative din copilărie?",
        options: [
          "<span class='tip'>Pentru că oferă un model dimensional cu bază neurofiziologică, care explică stabilitatea și variația temperamentului din adolescență până la vârsta adultă<span class='tooltip-box'>Eysenck leagă temperamentul de activarea corticală, limbică și hormonală, explicând de ce predispozițiile persistă, dar se exprimă diferit în contexte variate.</span></span>",
          "<span class='tip'>Pentru că se limitează la descrierea comportamentelor observabile, fără a lua în considerare mecanismele biologice sau diferențele individuale de activare<span class='tooltip-box'>Modelul lui Eysenck este explicativ și biologic fundamentat.</span></span>",
          "<span class='tip'>Pentru că a fost conceput exclusiv pentru a descrie temperamentul sugarilor și copiilor mici, fără relevanță pentru adolescenți sau adulți<span class='tooltip-box'>Modelul vizează în principal adolescența și vârsta adultă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care sunt dimensiunile temperamentale propuse de Eysenck?",
        options: [
          "<span class='tip'>Extraversie–introversie, nevrotism–stabilitate emoțională și psihoticism<span class='tooltip-box'>Model tridimensional fundamentat pe funcționarea sistemului nervos central, limbic și endocrin.</span></span>",
          "<span class='tip'>Emoționalitate, sociabilitate și activism, considerate dimensiuni comportamentale observabile în copilărie<span class='tooltip-box'>Acestea apar în alte modele temperamentale.</span></span>",
          "<span class='tip'>Inteligență generală, motivație intrinsecă și stil cognitiv, considerate trăsături centrale ale personalității<span class='tooltip-box'>Acestea nu sunt dimensiuni temperamentale la Eysenck.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce explică dimensiunea extraversie–introversie în teoria lui Eysenck?",
        options: [
          "<span class='tip'>Diferențe în nivelul de activare corticală bazală și modul de raportare la stimulare externă<span class='tooltip-box'>Extraverșii caută stimulare pentru a atinge nivelul optim de activare, în timp ce introverșii tind să evite suprastimularea.</span></span>",
          "<span class='tip'>Diferențe determinate exclusiv de educație, experiențe sociale și norme culturale interiorizate în timp<span class='tooltip-box'>Acestea nu explică baza neurofiziologică a dimensiunii.</span></span>",
          "<span class='tip'>Nivelul inteligenței generale și capacitatea de adaptare cognitivă la sarcini complexe<span class='tooltip-box'>Inteligența nu este o dimensiune temperamentala la Eysenck.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce caracterizează dimensiunea nevrotism–stabilitate emoțională?",
        options: [
          "<span class='tip'>Gradul de reactivitate emoțională și activarea sistemului limbic, mai ales în situații stresante<span class='tooltip-box'>Nevrotismul ridicat presupune reacții emoționale intense și instabilitate afectivă.</span></span>",
          "<span class='tip'>Preferința constantă pentru activități sociale și relații interpersonale extinse<span class='tooltip-box'>Aceasta ține de extraversie.</span></span>",
          "<span class='tip'>Nivelul empatiei morale și orientarea prosocială față de ceilalți<span class='tooltip-box'>Aceasta este mai apropiată de psihoticism scăzut.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce descrie dimensiunea psihoticism în teoria lui Eysenck?",
        options: [
          "<span class='tip'>Tendințe legate de agresivitate, impulsivitate, egocentrism și nivel redus de empatie<span class='tooltip-box'>Psihoticismul ridicat este asociat cu lipsa de empatie și comportamente dure, iar cel scăzut cu cooperare și sensibilitate față de ceilalți.</span></span>",
          "<span class='tip'>Gradul de anxietate și instabilitate emoțională în fața situațiilor stresante prelungite<span class='tooltip-box'>Aceasta aparține dimensiunii nevrotism.</span></span>",
          "<span class='tip'>Nivelul de activare corticală și preferința pentru stimulare socială intensă<span class='tooltip-box'>Aceasta este specifică extraversiei.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum se obțin temperamentele clasice în teoria lui Eysenck?",
        options: [
          "<span class='tip'>Prin combinarea dimensiunilor extraversie–introversie și nevrotism–stabilitate emoțională<span class='tooltip-box'>Sangvinic (extraversie + stabilitate), coleric (extraversie + nevrotism), flegmatic (introversie + stabilitate), melancolic (introversie + nevrotism).</span></span>",
          "<span class='tip'>Prin combinarea tuturor celor trei dimensiuni simultan, inclusiv psihoticismul, pentru a obține tipuri temperamentale clasice<span class='tooltip-box'>Psihoticismul nu intră în definirea temperamentelor clasice.</span></span>",
          "<span class='tip'>Prin observarea directă a comportamentului copilului mic în contexte familiale și educaționale timpurii<span class='tooltip-box'>Aceasta aparține clasificărilor dezvoltative.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce concluzie este esențială în interpretarea temperamentelor la Eysenck?",
        options: [
          "<span class='tip'>Nici dimensiunile temperamentale, nici temperamentele clasice nu sunt bune sau rele în sine, ci adaptative sau dezadaptative în funcție de context<span class='tooltip-box'>La fel ca sangvinicul sau melancolicul, extraversia sau nevrotismul pot fi avantajoase sau problematice în funcție de cerințele situației și de autoreglare.</span></span>",
          "<span class='tip'>Temperamentul determină rigid comportamentul, indiferent de context sau de capacitatea de autoreglare a persoanei<span class='tooltip-box'>Această perspectivă este respinsă de model.</span></span>",
          "<span class='tip'>Unele temperamente sunt în mod natural superioare altora și favorizează adaptarea în toate situațiile<span class='tooltip-box'>Această idee este explicit respinsă.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u5-q9",
    title: "Conceptul de sine – definiții și concepte asociate",
    questions: [
      {
        text: "Ce este conceptul de sine?",
        options: [
          "<span class='tip'>Imaginea mentală pe care o persoană o are despre sine, ca răspuns la întrebarea „cine sunt eu?”<span class='tooltip-box'>Conceptul de sine include percepția asupra abilităților, caracteristicilor personale, credințelor, atitudinilor, valorilor și așteptărilor proprii.</span></span>",
          "<span class='tip'>Evaluarea emoțională a valorii personale și a gradului de satisfacție față de sine<span class='tooltip-box'>Aceasta descrie stima de sine, nu conceptul de sine.</span></span>",
          "<span class='tip'>Totalitatea comportamentelor observabile ale unei persoane în contexte sociale variate<span class='tooltip-box'>Comportamentele nu sunt echivalente cu reprezentarea de sine.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Pe ce se bazează formarea conceptului de sine?",
        options: [
          "<span class='tip'>Pe conștiința de sine, reacțiile celorlalți, comparația socială și rolurile exercitate<span class='tooltip-box'>Conceptul de sine se construiește prin interacțiunea cu ceilalți, care funcționează ca „oglinzi sociale”.</span></span>",
          "<span class='tip'>Exclusiv pe trăsăturile temperamentale înnăscute<span class='tooltip-box'>Temperamentul influențează reacțiile, dar nu explică structura conceptului de sine.</span></span>",
          "<span class='tip'>Pe performanțele școlare și evaluările formale<span class='tooltip-box'>Acestea reprezintă doar o sursă parțială de feedback.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce este conștiința de sine?",
        options: [
          "<span class='tip'>Recunoașterea propriei identități ca individ distinct și autonom<span class='tooltip-box'>Apare în jurul vârstei de 1 an și jumătate, când copilul se recunoaște în oglindă și se identifică prin „eu”.</span></span>",
          "<span class='tip'>Capacitatea de a se evalua critic în raport cu ceilalți<span class='tooltip-box'>Aceasta apare mai târziu, odată cu comparația socială.</span></span>",
          "<span class='tip'>Capacitatea de autoreglare emoțională și comportamentală<span class='tooltip-box'>Aceasta este o funcție distinctă de conștiința de sine.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum evoluează conceptul de sine de-a lungul copilăriei?",
        options: [
          "<span class='tip'>De la simplu și concret la diferențiat, abstract și relativ stabil<span class='tooltip-box'>Inițial se bazează pe caracteristici fizice și acțiuni, ulterior pe trăsături psihice și roluri sociale.</span></span>",
          "<span class='tip'>Rămâne neschimbat după apariția conștiinței de sine<span class='tooltip-box'>Conceptul de sine continuă să se dezvolte și să se rafineze.</span></span>",
          "<span class='tip'>Este complet determinat de experiențele din primii ani de viață<span class='tooltip-box'>Dezvoltarea este continuă și influențată de contexte multiple.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce caracterizează conceptul de sine după vârsta de 10 ani?",
        options: [
          "<span class='tip'>Definirea prin roluri sociale, criterii autonome și capacitatea de a accepta perspective diferite<span class='tooltip-box'>Copiii devin mai critici față de sine și mai influențabili de feedbackul colegilor.</span></span>",
          "<span class='tip'>Menținerea unei imagini de sine constant pozitive și nerealiste<span class='tooltip-box'>Aceasta este specifică mai degrabă copilăriei mici.</span></span>",
          "<span class='tip'>Reducerea importanței relațiilor sociale în definirea de sine<span class='tooltip-box'>Influența grupului devine mai mare, nu mai mică.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce diferențiază fațeta publică de cea intimă a conceptului de sine?",
        options: [
          "<span class='tip'>Fațeta publică este afișată social, iar cea intimă este rezervată sinelui și persoanelor apropiate<span class='tooltip-box'>Odată cu vârsta, conceptul de sine devine mai nuanțat și diferențiat.</span></span>",
          "<span class='tip'>Fațeta publică este stabilă, iar cea intimă este complet schimbătoare<span class='tooltip-box'>Ambele pot varia, dar devin mai consistente în timp.</span></span>",
          "<span class='tip'>Fațeta intimă este lipsită de importanță în viața psihică<span class='tooltip-box'>Aceasta are un rol central în autoreglare și identitate.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u5-q10",
    title: "Conceptul de sine la diferite vârste",
    questions: [
      {
        text: "Care este un indicator esențial al apariției conștiinței de sine în jurul vârstei de 1 an și jumătate?",
        options: [
          "<span class='tip'>Recunoașterea propriei imagini și raportarea la sine ca individ distinct, inclusiv folosirea pronumelui personal „eu”<span class='tooltip-box'>Copilul se recunoaște în oglindă și în fotografii, atinge propria față când observă o pată și înțelege că imaginea reflectată îi aparține.</span></span>",
          "<span class='tip'>Reacția emoțională intensă la separarea de adult, asociată cu anxietate și nevoie crescută de reasigurare<span class='tooltip-box'>Aceasta ține de atașament, nu de conștiința de sine.</span></span>",
          "<span class='tip'>Capacitatea de a respecta reguli simple și de a imita comportamentele adulților în contexte sociale<span class='tooltip-box'>Respectarea regulilor nu indică recunoașterea sinelui.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum se caracterizează conceptul de sine la copiii între 2 ani jumătate și 6 ani?",
        options: [
          "<span class='tip'>Este definit prin judecăți categoriale simple, acțiuni concrete, preferințe declarate și o autoevaluare foarte ridicată<span class='tooltip-box'>Copiii se descriu prin ce sunt și ce pot face și își supraestimează competențele.</span></span>",
          "<span class='tip'>Este construit prin comparații sociale constante, evaluări critice și diferențieri clare între domenii<span class='tooltip-box'>Comparația socială apare mai târziu.</span></span>",
          "<span class='tip'>Este deja stabil și coerent, bazat pe roluri sociale bine definite și feedback internalizat<span class='tooltip-box'>Aceasta apare la vârste mai mari.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce rol joacă feedbackul adultului în formarea conceptului de sine la vârsta preșcolară?",
        options: [
          "<span class='tip'>Influențează redus comportamentul ulterior, deoarece copiii mențin o imagine de sine pozitivă și relativ nerealistă<span class='tooltip-box'>Copiii sunt puțin receptivi la feedback corectiv, iar comentariile adultului nu produc ajustări consistente ale conceptului de sine.</span></span>",
          "<span class='tip'>Produce ajustări rapide, realiste și stabile ale autoevaluării prin internalizarea evaluărilor adultului<span class='tooltip-box'>Această capacitate apare mai târziu.</span></span>",
          "<span class='tip'>Determină scăderi accentuate și persistente ale încrederii în sine în majoritatea situațiilor de învățare<span class='tooltip-box'>Nu este specific acestei etape.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum evoluează conceptul de sine între 7 și 10 ani?",
        options: [
          "<span class='tip'>Devine mai realist, se bazează pe comparații sociale și crește receptivitatea la feedback negativ<span class='tooltip-box'>Copiii încep să se raporteze la evaluările celorlalți și pot manifesta depreciere de sine.</span></span>",
          "<span class='tip'>Rămâne global și nerealist, fiind aproape complet neinfluențat de evaluările colegilor sau ale adulților<span class='tooltip-box'>Aceasta descrie copilăria mică.</span></span>",
          "<span class='tip'>Este construit exclusiv pe statut social stabil, fără oscilații sau conflicte interne<span class='tooltip-box'>Oscilațiile cresc odată cu vârsta.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum se realizează autoreglarea între 7 și 10 ani?",
        options: [
          "<span class='tip'>Prin limbaj internalizat, planificare, strategii conștiente și amânarea recompensei<span class='tooltip-box'>Copiii își pot organiza comportamentul și pot face planuri simple.</span></span>",
          "<span class='tip'>Prin reacții impulsive frecvente și dificultăți persistente de control comportamental<span class='tooltip-box'>Aceasta caracterizează etape mai timpurii.</span></span>",
          "<span class='tip'>Prin mecanisme complet automate, fără efort cognitiv sau monitorizare de sine<span class='tooltip-box'>Autoreglarea presupune efort conștient.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce se schimbă în conceptul de sine după vârsta de 10 ani?",
        options: [
          "<span class='tip'>Apar rolurile sociale, criteriile autonome și capacitatea de a accepta perspective diferite de ale propriei persoane<span class='tooltip-box'>Crește influența grupului de egali și spiritul critic față de sine.</span></span>",
          "<span class='tip'>Se menține o imagine de sine constant pozitivă, fără fluctuații sau conflicte interne<span class='tooltip-box'>Oscilațiile devin mai frecvente.</span></span>",
          "<span class='tip'>Dispare aproape complet influența feedbackului social asupra autoevaluării<span class='tooltip-box'>Influența colegilor crește.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "După vârsta de 14 ani, cum este structurat conceptul de sine în adolescență?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Competența academică</strong><span class='tooltip-box'>Evaluarea performanței școlare, global sau pe discipline, incluzând cât de bun este adolescentul și cât de mult îi place domeniul.</span></span>",
          "<span class='tip'><strong>Competența sportivă</strong><span class='tooltip-box'>Percepția asupra abilităților fizice, de mișcare și performanță sportivă.</span></span>",
          "<span class='tip'><strong>Acceptarea socială</strong><span class='tooltip-box'>Popularitatea și statutul în grupul de covârstnici.</span></span>",
          "<span class='tip'><strong>Înfățișarea fizică</strong><span class='tooltip-box'>Evaluată mai ales pe segmente ale corpului și intens influențată de comparațiile sociale.</span></span>",
          "<span class='tip'><strong>Conduita</strong><span class='tooltip-box'>Evaluarea propriului comportament din perspectiva normelor morale și sociale.</span></span>",
          "<span class='tip'><strong>Supunerea necondiționată față de autoritatea adultului și conformarea fără reflecție critică</strong><span class='tooltip-box'>Nu reprezintă o fațetă a conceptului de sine în adolescență.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4],
      },

      {
        text: "Cum se diferențiază stima de sine a fetelor și băieților în adolescență?",
        options: [
          "<span class='tip'>Fetele au o stimă de sine mai scăzută decât băieții în domeniul aspectului fizic și al competențelor atletice, dar mai ridicată în ceea ce privește conduita<span class='tooltip-box'>Diferențele apar mai ales în adolescență; stima de sine socială și academică este relativ apropiată între fete și băieți.</span></span>",
          "<span class='tip'>Băieții au o stimă de sine mai scăzută decât fetele în toate domeniile, inclusiv social, academic și fizic<span class='tooltip-box'>Această afirmație nu este susținută de date.</span></span>",
          "<span class='tip'>Nu există diferențe de gen în stima de sine nici în copilărie, nici în adolescență, indiferent de domeniu<span class='tooltip-box'>Diferențele devin vizibile în adolescență.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
  {
    id: "phed-u5-q11",
    title: "Stima de sine și acceptarea socială",
    questions: [
      {
        text: "Ce este stima de sine, în raport cu conceptul de sine?",
        options: [
          "<span class='tip'>Evaluarea valorii personale, construită pe baza conceptului de sine<span class='tooltip-box'>Conceptul de sine răspunde la „cine sunt?”, iar stima de sine la „ce simt despre mine?” și „cât valorez?”.</span></span>",
          "<span class='tip'>Totalitatea caracteristicilor personale descrise obiectiv, fără componentă evaluativă sau afectivă<span class='tooltip-box'>Aceasta descrie conceptul de sine.</span></span>",
          "<span class='tip'>Nivelul real al competențelor academice, măsurat prin rezultate și performanțe observabile în timp<span class='tooltip-box'>Stima de sine este evaluativă, nu performanțială.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Cum se formează stima de sine?",
        options: [
          "<span class='tip'>Prin acceptare socială, comparații cu alții și autoevaluări repetate<span class='tooltip-box'>Feedbackul social și percepția propriei valori sunt centrale în formarea stimei de sine.</span></span>",
          "<span class='tip'>Exclusiv prin succes școlar constant și note mari, fără rolul relațiilor sau al comparației sociale<span class='tooltip-box'>Succesul academic este doar un domeniu posibil.</span></span>",
          "<span class='tip'>Este complet determinată genetic și stabilă, fără influența experiențelor sociale și a feedbackului primit<span class='tooltip-box'>Stima de sine este modelabilă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Când este o persoană caracterizată de o stimă de sine înaltă?",
        options: [
          "<span class='tip'>Când există congruență între competența percepută și importanța acordată domeniului<span class='tooltip-box'>De exemplu, dacă un elev valorizează matematica și se percepe competent la matematică.</span></span>",
          "<span class='tip'>Când are performanțe ridicate în toate domeniile, indiferent ce domenii consideră importante pentru identitatea sa<span class='tooltip-box'>Nu este necesară excelența globală.</span></span>",
          "<span class='tip'>Când primește constant laude de la adulți și colegi, chiar și fără informații despre progres sau strategie<span class='tooltip-box'>Lauda fără conținut nu garantează stimă de sine sănătoasă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care este tendința generală a stimei de sine pe parcursul dezvoltării?",
        options: [
          "<span class='tip'>Este ridicată în copilăria mică și scade treptat odată cu comparațiile sociale<span class='tooltip-box'>Diferențele apar mai clar în adolescență.</span></span>",
          "<span class='tip'>Crește constant de la copilărie la adolescență, deoarece experiențele educaționale acumulate cresc automat încrederea în sine<span class='tooltip-box'>Datele empirice infirmă această idee.</span></span>",
          "<span class='tip'>Rămâne constantă indiferent de vârstă, pentru că valoarea personală nu este influențată de feedback sau de contextul social<span class='tooltip-box'>Stima de sine este dinamică.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce rol are acceptarea socială în stima de sine a adolescentului?",
        options: [
          "<span class='tip'>Devine mai importantă decât feedbackul adultului<span class='tooltip-box'>Grupul de covârstnici capătă un rol central în evaluarea de sine.</span></span>",
          "<span class='tip'>Este irelevantă pentru autoevaluare, deoarece adolescentul se bazează exclusiv pe criterii interne stabile și independente de grup<span class='tooltip-box'>Aceasta contrazice datele de dezvoltare.</span></span>",
          "<span class='tip'>Este compensată complet de succesul academic, astfel încât popularitatea și statutul în grup nu mai contează deloc<span class='tooltip-box'>Acceptarea socială rămâne un domeniu distinct.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care dintre următoarele reprezintă categorii de elevi în funcție de acceptarea socială (Woolfolk)?",
        multiple: true,
        options: [
          "<span class='tip'><strong>Elevi populari</strong><span class='tooltip-box'>Acceptați de grup; pot fi prosociali sau antisociali.</span></span>",
          "<span class='tip'><strong>Elevi respinși</strong><span class='tooltip-box'>Agresivi/impulsivi sau retrași/timizi.</span></span>",
          "<span class='tip'><strong>Elevi neglijați</strong><span class='tooltip-box'>Rețea socială minimă, dar fără respingere activă.</span></span>",
          "<span class='tip'><strong>Elevi controversați</strong><span class='tooltip-box'>Au atât trăsături apreciate, cât și respinse.</span></span>",
          "<span class='tip'><strong>Elevi medii</strong><span class='tooltip-box'>Adaptați, cu stimă de sine în limite normale.</span></span>",
          "<span class='tip'><strong>Elevi dominanți genetic</strong><span class='tooltip-box'>Nu este o categorie de acceptare socială.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4],
      },
    ],
  },
  {
    id: "phed-u5-q12",
    title: "Feedback, laudă și strategii pentru încrederea în sine",
    questions: [
      {
        text: "Ce rol are feedbackul în formarea și reglarea stimei de sine?",
        options: [
          "<span class='tip'>Contribuie la evaluarea valorii personale prin informații despre competență și progres<span class='tooltip-box'>Stima de sine se construiește prin feedback primit de la ceilalți, comparații sociale și autoevaluări succesive.</span></span>",
          "<span class='tip'>Determină rigid nivelul de inteligență al elevului, indiferent de efort sau de experiențele educaționale anterioare<span class='tooltip-box'>Inteligența este o aptitudine, nu rezultatul feedbackului.</span></span>",
          "<span class='tip'>Are efect doar emoțional și nu influențează deloc modul în care elevul își evaluează competența sau progresul<span class='tooltip-box'>Feedbackul influențează atât emoțiile, cât și autoevaluarea cognitivă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care tip de feedback s-a dovedit cel mai eficient pentru susținerea stimei de sine și a perseverenței?",
        options: [
          "<span class='tip'>Feedbackul centrat pe proces, cu accent pe strategie, efort și pașii care pot fi îmbunătățiți<span class='tooltip-box'>Este informativ, favorizează autoreglarea, emoțiile pozitive și ajustarea realistă a autoevaluării, chiar și în forma lui negativă.</span></span>",
          "<span class='tip'>Feedbackul centrat exclusiv pe persoană și etichete globale, aplicate indiferent de contextul sarcinii<span class='tooltip-box'>Poate duce la dependență de evaluare externă.</span></span>",
          "<span class='tip'>Feedbackul centrat doar pe rezultat final, fără discuție despre pașii, erorile și strategiile folosite<span class='tooltip-box'>Ignoră efortul și strategiile utilizate.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "De ce lauda poate avea efecte atât pozitive, cât și negative asupra stimei de sine?",
        options: [
          "<span class='tip'>Pentru că efectul depinde de conținutul și focalizarea ei, nu doar de intenția pozitivă a adultului<span class='tooltip-box'>Lauda centrată pe persoană poate rigidiza imaginea de sine, în timp ce lauda centrată pe proces susține învățarea și perseverența.</span></span>",
          "<span class='tip'>Pentru că elevii reacționează imprevizibil la orice apreciere, iar reacțiile nu pot fi înțelese prin tipul de feedback<span class='tooltip-box'>Reacțiile sunt explicabile prin tipul de feedback.</span></span>",
          "<span class='tip'>Pentru că lauda este eficientă doar la copiii mici și își pierde complet valoarea educațională după școala primară<span class='tooltip-box'>Lauda este relevantă la toate vârstele, dacă este formulată adecvat.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Care formulare susține cel mai bine dezvoltarea unei stime de sine sănătoase?",
        options: [
          "<span class='tip'>Ai ales o strategie bună și ai perseverat chiar când a fost greu<span class='tooltip-box'>Accentul este pus pe efort, strategie și control personal.</span></span>",
          "<span class='tip'>Ești foarte inteligent și mereu reușești, indiferent cât de grea este sarcina sau cât de mult ai exersat<span class='tooltip-box'>Aceasta poate crea presiune și evitare a eșecului.</span></span>",
          "<span class='tip'>Ești cel mai bun din clasă, iar ceilalți ar trebui să ia exemplu de la tine pentru că îi depășești constant<span class='tooltip-box'>Favorizează comparația socială rigidă.</span></span>",
        ],
        answer: 0,
      },

      {
        text: "Ce strategii pot folosi cadrele didactice pentru dezvoltarea încrederii în sine și a unui concept de sine robust? (selectează toate variantele corecte)",
        multiple: true,
        options: [
          "<span class='tip'><strong>Oportunitatea de a alege</strong> (autonomie)<span class='tooltip-box'>Exemplu: elevul alege între două teme sau între roluri diferite într un proiect.</span></span>",
          "<span class='tip'><strong>Activități cu reușită + complexitate graduală</strong> (scaffold)<span class='tooltip-box'>Exemplu: sarcini ușoare la început, apoi creșterea treptată a dificultății după ce apare competența.</span></span>",
          "<span class='tip'><strong>Monitorizarea progresului</strong> (progres)<span class='tooltip-box'>Exemplu: puncte pentru îmbunătățire, nu doar pentru nota finală.</span></span>",
          "<span class='tip'><strong>Obiective realiste și individualizate</strong> (personalizare)<span class='tooltip-box'>Exemplu: obiective diferențiate pentru elevi aflați la niveluri diferite, formulate concret și realizabil.</span></span>",
          "<span class='tip'><strong>Toleranță față de greșeli + corectare</strong> (revizuire)<span class='tooltip-box'>Exemplu: rescrierea unei lucrări după feedback, fără stigmatizare.</span></span>",
          "<span class='tip'><strong>Promovarea punctelor de vedere diferite</strong> (flexibilitate)<span class='tooltip-box'>Exemplu: dezbatere în care sunt valorizate argumente diferite și soluții alternative.</span></span>",
          "<span class='tip'><strong>Compararea publică a elevilor</strong> (presiune)<span class='tooltip-box'>Aceasta tinde să submineze încrederea în sine și să rigidizeze autoevaluarea.</span></span>",
        ],
        answer: [0, 1, 2, 3, 4, 5],
      },
      {
        text: "Cum poate profesorul sprijini elevul în situații de eșec?",
        options: [
          "<span class='tip'>Prin reîncadrare, exemple relevante și normalizarea dificultăților<span class='tooltip-box'>Exemplele istorice sau personale introduc flexibilitate cognitivă și reduc autocritica excesivă.</span></span>",
          "<span class='tip'>Prin ignorarea eșecului pentru a evita emoțiile negative<span class='tooltip-box'>Evitarea nu sprijină autoreglarea.</span></span>",
          "<span class='tip'>Prin sancționarea eșecului pentru creșterea motivației<span class='tooltip-box'>Aceasta favorizează anxietatea și evitarea.</span></span>",
        ],
        answer: 0,
      },
    ],
  },
];

// Deckuri mock pentru PHED – doar primul capitol populat ca exemplu
window.PHED_FLASHCARDS = {
  "phed-u2": [
    {
      id: "phed-u2-deck1",
      title: "U2 Flashcards",
      cards: [
        {
          front:
            "Explică conceptele fundamentale la Piaget și relația dintre ele",
          back: "La Piaget, copilul își construiește cunoașterea prin <span class='tip'><span class='tooltip-box'>Structuri mentale prin care copilul organizează și interpretează experiența.</span><strong>scheme</strong></span> care se schimbă prin două procese complementare: <span class='tip'><span class='tooltip-box'>Integrarea informației noi în schemele deja existente.</span><strong>asimilare</strong></span> și <span class='tip'><span class='tooltip-box'>Modificarea schemelor când informația nouă nu se potrivește.</span><strong>acomodare</strong></span>.<br><br>Între ele apare o tendință de <span class='tip'><span class='tooltip-box'>Căutarea unei stabilități între ce știe copilul deja și ce cere situația nouă.</span><strong>echilibrare</strong></span> iar rezultatul global este <span class='tip'><span class='tooltip-box'>Echilibrarea continuă dintre asimilare și acomodare pentru a face față mediului.</span><strong>adaptarea</strong></span> susținută de <span class='tip'><span class='tooltip-box'>Ordonarea și legarea experiențelor într-un sistem coerent.</span><strong>organizare</strong></span>.<br><br><strong>Exemplu:</strong> copilul numește calul câine prin asimilare apoi își schimbă schema prin acomodare.",
        },
        {
          front:
            "Care sunt stadiile dezvoltării cognitive la Piaget și ce le diferențiază esențial",
          back: "Piaget descrie o succesiune de stadii care apar în aceeași ordine, cu vârste orientative.<br><br>• <span class='tip'><span class='tooltip-box'><strong>0–2 ani</strong>. Cunoaștere prin simțuri și acțiune, inteligență preverbală.</span><strong>senzoriomotor</strong> (0–2 ani)</span> cu <span class='tip'><span class='tooltip-box'>Înțelegerea că obiectele există și când nu sunt văzute, apare în jurul a 8 luni.</span><strong>permanența obiectului</strong></span><br>• <span class='tip'><span class='tooltip-box'><strong>2–7 ani</strong>. Apar simbolurile și limbajul, dar gândirea este centrată pe percepție.</span><strong>preoperator</strong> (2–7 ani)</span> cu <span class='tip'><span class='tooltip-box'>Dificultatea de a adopta perspectiva altuia.</span><strong>egocentrism cognitiv</strong></span> și <span class='tip'><span class='tooltip-box'>Atribuirea de viață, intenții sau conștiință obiectelor neînsuflețite.</span><strong>animism</strong></span><br>• <span class='tip'><span class='tooltip-box'><strong>7–12 ani</strong>. Logică aplicată pe situații concrete.</span><strong>operații concrete</strong> (7–12 ani)</span> cu <span class='tip'><span class='tooltip-box'>Înțelege că forma se schimbă dar cantitatea rămâne aceeași.</span><strong>conservare</strong></span> și <span class='tip'><span class='tooltip-box'>Poate inversa mental o acțiune.</span><strong>reversibilitate</strong></span><br>• <span class='tip'><span class='tooltip-box'><strong>12–16 ani</strong>. Gândire abstractă și raționament ipotetic.</span><strong>operații formale</strong> (12–16 ani)</span>",
        },

        {
          front:
            "Care sunt caracteristicile centrale ale teoriei lui Piaget și care sunt limitele discutate frecvent",
          back: "Caracteristici: teoria este <span class='tip'><span class='tooltip-box'>Cunoașterea este construită activ de copil prin interacțiune cu mediul.</span><strong>constructivistă</strong></span> și propune <span class='tip'><span class='tooltip-box'>Stadii calitativ diferite care se succed într-o ordine stabilă și se construiesc unul pe baza celuilalt.</span><strong>dezvoltare stadială</strong></span>.<br><br>Limite frecvente: <span class='tip'><span class='tooltip-box'>Copiii pot manifesta competențe cognitive mai devreme dacă sarcinile sunt adaptate contextului.</span><strong>subestimarea capacităților</strong></span>, <span class='tip'><span class='tooltip-box'>Vârstele asociate stadiilor sunt orientative și mai flexibile decât schema clasică.</span><strong>rigiditatea stadiilor</strong></span> și <span class='tip'><span class='tooltip-box'>Concluziile au fost formulate pe baza unui context sociocultural restrâns, ceea ce ridică problema universalității lor.</span><strong>limitarea generalizării culturale</strong></span>.",
        },
        {
          front:
            "Explică dezvoltarea cognitivă la Vîgotski și diferența de principiu față de Piaget",
          back: "La Vîgotski, dezvoltarea este <span class='tip'><span class='tooltip-box'>Influențată decisiv de interacțiuni sociale, cultură și instrumente simbolice precum limbajul.</span><strong>sociocultural mediată</strong></span>.<br><br>Diferența de principiu este relația dintre învățare și dezvoltare: la Vîgotski <span class='tip'><span class='tooltip-box'>Învățarea ghidată poate precede și conduce dezvoltarea către niveluri superioare.</span><strong>învățarea stimulează dezvoltarea</strong></span>, spre deosebire de Piaget, unde <span class='tip'><span class='tooltip-box'>Dezvoltarea cognitivă atinsă prin maturizare condiționează ce poate fi învățat.</span><strong>dezvoltarea precede învățarea</strong></span>.",
        },
        {
          front:
            "Compară Piaget și Vîgotski pe ideile cheie și dă o implicație didactică",
          back: "Piaget pune accent pe <span class='tip'><span class='tooltip-box'>Scheme, asimilare, acomodare, adaptare.</span><strong>mecanisme cognitive interne</strong></span> și pe stadii ale dezvoltării. Vîgotski pune accent pe <span class='tip'><span class='tooltip-box'>Învățare mediată social, limbaj și sprijin educațional.</span><strong>mediere și context</strong></span> prin <span class='tip'><span class='tooltip-box'>Distanța dintre nivelul actual și cel potențial de dezvoltare.</span><strong>zona proximei dezvoltări</strong></span> și <span class='tip'><span class='tooltip-box'>Sprijin temporar oferit de adult sau coleg mai competent.</span><strong>eșafodaj</strong></span>.<br><br>Egocentrism: la Piaget este <span class='tip'><span class='tooltip-box'>Limită a gândirii centrate pe sine și dificultate de decentrări.</span><strong>limită cognitivă</strong></span>, iar la Vîgotski limbajul egocentric este <span class='tip'><span class='tooltip-box'>Vorbire cu sine care sprijină controlul și organizarea acțiunii.</span><strong>autoreglare</strong></span>.<br><br>Implicație didactică: <span class='tip'><span class='tooltip-box'>Profesorul adaptează sarcinile la nivelul actual de dezvoltare al elevului (Piaget)</span><strong>adaptare</strong></span> și <span class='tip'><span class='tooltip-box'>oferă sprijin ghidat, temporar, pentru a valorifica potențialul de dezvoltare (Vîgotski)</span><strong>ghidare</strong></span>.",
        },
        {
          front:
            "Definește dezvoltarea limbajului și precizează componentele esențiale ale sistemului de limbaj",
          back: "Dezvoltarea limbajului include forme <span class='tip'><span class='tooltip-box'>Limbaj oral și limbaj scris.</span><strong>verbale</strong></span> dar și dimensiuni <span class='tip'><span class='tooltip-box'>Mimică, gesturi, postură, privire.</span><strong>nonverbale</strong></span> și <span class='tip'><span class='tooltip-box'>Intonație, ritm, volum, pauze.</span><strong>paraverbale</strong></span>.<br><br>Ca sistem, limbajul se bazează pe convenții: <span class='tip'><span class='tooltip-box'>Sunete și foneme.</span><strong>fonologie</strong></span>, <span class='tip'><span class='tooltip-box'>Forma cuvintelor și morfeme.</span><strong>morfologie</strong></span>, <span class='tip'><span class='tooltip-box'>Combinarea cuvintelor în propoziții.</span><strong>sintaxă</strong></span>, <span class='tip'><span class='tooltip-box'>Sensuri ale cuvintelor și frazelor.</span><strong>semantică</strong></span>, <span class='tip'><span class='tooltip-box'>Adecvarea limbajului la context.</span><strong>pragmatică</strong></span>.",
        },
        {
          front:
            "Explică achiziția limbajului prin factori determinanți și regularități concrete de dezvoltare",
          back: "Factori determinanți: <span class='tip'><span class='tooltip-box'>Disponibilitate biologică generală pentru însușirea limbajului.</span><strong>substrat biologic</strong></span> și <span class='tip'><span class='tooltip-box'>Auz și văz funcționale pentru recepție și diferențiere.</span><strong>integritate senzorială</strong></span> plus <span class='tip'><span class='tooltip-box'>Stimulare verbală și interacțiune cu adulți.</span><strong>mediu sociocultural</strong></span>.<br><br>Repere de dezvoltare: la <strong>2 ani</strong></span><strong>~150 de cuvinte</strong></span> iar la <strong>6 ani</strong><strong>~8.000–14.000</strong></span>.<br><br>Regularități: se învață mai ușor cuvinte <span class='tip'><span class='tooltip-box'>Auzite des.</span><strong>frecvente</strong></span>, se rețin mai bine <span class='tip'><span class='tooltip-box'>În contexte și activități cu sens.</span><strong>în context</strong></span>, dialogul cu adultul este mai eficient decât <span class='tip'><span class='tooltip-box'>Expunerea pasivă.</span><strong>pasivitatea</strong></span>, iar <strong>vocabularul și gramatica se dezvoltă simultan și interdependent</strong></span>.",
        },
      ],
    },
  ],
  "phed-u3": [
    {
      id: "phed-u3-deck1",
      title: "U3 Flashcards",
      cards: [
        {
          front:
            "Explică teoria ecologică a dezvoltării la Bronfenbrenner și cum sunt organizate sistemele",
          back: "Bronfenbrenner explică dezvoltarea ca rezultat al relației dintre copil și <span class='tip'><span class='tooltip-box'>Modelul descrie contexte de mediu organizate pe niveluri, care se influențează reciproc, de la experiențe zilnice până la cultura societății.</span><strong>sisteme ecologice</strong></span>.<br><br>• <span class='tip'><strong>microsistem</strong> – relații directe și cotidiene<span class='tooltip-box'><strong>Ce este:</strong> cadrul social în care copilul petrece timp considerabil și unde apar interacțiuni față în față, cu influență bidirecțională.<br><br><strong>Exemplu:</strong> relația elev–profesor, regulile din familie, grupul de prieteni.</span></span><br>• <span class='tip'><strong>mezosistem</strong> – legături între contexte apropiate<span class='tooltip-box'><strong>Ce este:</strong> conexiunile dintre microsisteme, care pot sprijini sau bloca dezvoltarea prin coerență sau conflict.<br><br><strong>Exemplu:</strong> colaborarea familie–școală la teme și comportament, sau tensiunea dintre regulile de acasă și cele din clasă.</span></span><br>• <span class='tip'><strong>exosistem</strong> – influențe indirecte asupra copilului<span class='tooltip-box'><strong>Ce este:</strong> contexte sociale în care copilul nu are rol activ, dar care îi afectează viața prin efecte asupra adulților sau asupra resurselor disponibile.<br><br><strong>Exemplu:</strong> programul de muncă al părinților, accesul la bibliotecă, facilități de recreere, decizii administrative ale școlii.</span></span><br>• <span class='tip'><strong>macrosistem</strong> – valori și cadre sociale largi<span class='tooltip-box'><strong>Ce este:</strong> cultura și sistemul de valori al societății, ideologii, norme și condiții socioeconomice care structurează viața comunității.<br><br><strong>Exemplu:</strong> atitudini față de educație, credințe despre disciplină, inegalități de resurse în funcție de statut socioeconomic.</span></span><br>• <span class='tip'><strong>cronosistem</strong> – schimbări în timp și tranziții<span class='tooltip-box'><strong>Ce este:</strong> dimensiunea temporală a dezvoltării, evenimente de viață și schimbări socio-istorice care modifică celelalte sisteme și experiența copilului.<br><br><strong>Exemplu:</strong> divorțul părinților, mutarea în alt oraș, schimbarea școlii, perioade de criză socială care afectează familia și educația.</span></span>.",
        },

        {
          front:
            "Care este implicația didactică principală a teoriei ecologice pentru școală",
          back: "Implicația didactică este că elevul este influențat simultan de mai multe contexte, deci profesorul trebuie să țină cont de:<br><br>• <span class='tip'><span class='tooltip-box'>Relația directă: profesor, elev și climatul clasei.</span><strong>microsistemul școlar</strong></span><br>• <span class='tip'><span class='tooltip-box'>Colaborarea familie-școală și coerența mesajelor educaționale.</span><strong>mezosistem</strong></span><br>• <span class='tip'><span class='tooltip-box'>Factori indirecți, de exemplu programul părinților sau resursele comunității.</span><strong>exosistem</strong></span><br><strong>Ideea cheie:</strong> intervenția eficientă nu vizează doar elevul, ci și mediile relevante.",
        },

        {
          front:
            "Explică teoria dezvoltării psihosociale la Erikson ca model de crize și rezolvări",
          back: "Erikson descrie dezvoltarea prin <span class='tip'><span class='tooltip-box'>Conflicte psihosociale între două tendințe, rezolvate prin experiențe și relații.</span><strong>crize</strong></span> care apar de a lungul vieții și formează <span class='tip'><span class='tooltip-box'>Calități psihosociale dobândite prin rezolvare adaptativă.</span><strong>virtuți</strong></span>.<br><br><strong>Principiu:</strong> fiecare etapă poate sprijini sau vulnerabiliza etapele următoare, în funcție de cum este gestionată criza.",
        },

        {
          front:
            "Enumeră stadiile lui Erikson până la maturitate și spune conflictul central și vârstele orientative",
          back: "• <strong>0–1 an</strong>: <span class='tip'><span class='tooltip-box'>Conflictul central al stadiului constă în rezolvarea tensiunii dintre perceperea lumii ca sigură sau nesigură prin relația cu mama sau substitutul matern.</span><strong>încredere vs neîncredere</strong></span>, calitate dezvoltată: <span class='tip'><span class='tooltip-box'>Capacitatea de a avea așteptări pozitive față de lume pe baza experiențelor constante de grijă.</span><strong>speranța</strong></span>.<br>• <strong>1–3 ani</strong>: <span class='tip'><span class='tooltip-box'>Conflictul central dintre afirmarea autonomiei personale și apariția rușinii sau îndoielii atunci când controlul este excesiv limitat.</span><strong>autonomie vs îndoială și rușine</strong></span>, calitate dezvoltată: <span class='tip'><span class='tooltip-box'>Sentimentul că acțiunile proprii pot fi inițiate și susținute fără rușine excesivă.</span><strong>voința</strong></span>.<br>• <strong>3–6 ani</strong>: <span class='tip'><span class='tooltip-box'>Conflictul central dintre inițierea acțiunilor proprii și sentimentul de vinovăție generat de reacțiile mediului.</span><strong>inițiativă vs vinovăție</strong></span>, calitate dezvoltată: <span class='tip'><span class='tooltip-box'>Capacitatea de a formula și urmări scopuri fără inhibare internă.</span><strong>scopul</strong></span>.<br>• <strong>6–12 ani</strong>: <span class='tip'><span class='tooltip-box'>Conflictul central dintre dezvoltarea sentimentului de eficiență prin muncă și trăirea inferiorității în urma evaluării sociale.</span><strong>hărnicie, străduință vs inferioritate</strong></span>, calitate dezvoltată: <span class='tip'><span class='tooltip-box'>Convingerea că efortul personal duce la rezultate valoroase.</span><strong>competența</strong></span>.<br>• <strong>12–18 ani</strong>: <span class='tip'><span class='tooltip-box'>Conflictul central dintre construirea unei identități coerente și confuzia de roluri valori și așteptări.</span><strong>identitate vs confuzie de rol</strong></span>, calitate dezvoltată: <span class='tip'><span class='tooltip-box'>Coerența internă a sinelui și stabilitatea valorilor personale.</span><strong>unitatea</strong></span>.<br>• <strong>18–35 ani</strong>: <span class='tip'><span class='tooltip-box'>Conflictul central dintre capacitatea de angajament emoțional profund și tendința de izolare pentru protejarea sinelui.</span><strong>intimitate vs izolare</strong></span>, calitate dezvoltată: <span class='tip'><span class='tooltip-box'>Capacitatea de relaționare profundă fără pierderea identității personale.</span><strong>mutualitatea afectivă</strong></span>.<br>• <strong>35–55 ani</strong>: <span class='tip'><span class='tooltip-box'>Conflictul central dintre orientarea spre contribuție și grijă pentru ceilalți și stagnarea centrată pe sine.</span><strong>generativitate vs stagnare</strong></span>, calitate dezvoltată: <span class='tip'><span class='tooltip-box'>Orientarea către susținerea altora și a generațiilor următoare.</span><strong>grija responsabilă</strong></span>.<br>• <strong>55+ ani</strong>: <span class='tip'><span class='tooltip-box'>Conflictul central dintre acceptarea propriei vieți ca întreg coerent și trăirea regretului și a deznădejdii în fața limitelor și a apropierii sfârșitului vieții.</span><strong>integritatea eului vs deznădejde</strong></span>, calitate dezvoltată: <span class='tip'><span class='tooltip-box'>Capacitatea de a privi viața cu acceptare, sens și împăcare, integrând atât reușitele cât și eșecurile.</span><strong>înțelepciunea</strong></span>.",
        },
        {
          front:
            "Explică dezvoltarea judecății morale la Piaget și diferența dintre heteronomie și autonomie",
          back: "Piaget descrie trecerea de la moralitatea fără reguli internalizate, la moralitatea regulilor impuse din exterior, apoi la moralitatea cooperării și a intențiilor.<br><br>• <strong>2–6 ani</strong>: <span class='tip'><span class='tooltip-box'><strong>Premoral</strong> înseamnă înainte de moralitate. Etimologie: pre înseamnă înainte și moral se referă la reguli de conduită. Copilul nu folosește încă reguli morale stabile pentru a judeca.</span><strong>premoral</strong></span> sau <span class='tip'><span class='tooltip-box'><strong>Anomie</strong> înseamnă lipsa regulii. Etimologie: a înseamnă fără și nomos înseamnă lege, regulă. Regulile nu sunt trăite ca obligatorii și apar mai ales ca obiceiuri de joc sau cerințe locale.</span><strong>anomie morală</strong></span>.<br>• <strong>6–10 ani</strong>: <span class='tip'><span class='tooltip-box'><strong>Heteronomie</strong> înseamnă lege venită din afară. Etimologie: heteros înseamnă altul și nomos înseamnă lege regulă. Morala este centrată pe reguli fixe impuse de autoritate, iar respectarea lor contează mai mult decât intenția.</span><strong>heteronomie morală</strong></span> cu <span class='tip'><span class='tooltip-box'>Gravitatea faptei este judecată după consecințe, nu după intenție. Exemplu: copilul care sparge 5 farfurii din greșeală este considerat mai rău decât copilul care sparge 1 farfurie intenționat.</span><strong>justiție imanentă</strong></span>.<br>• <strong>10–12+ ani</strong>: <span class='tip'><span class='tooltip-box'><strong>Autonomie</strong> înseamnă lege proprie. Etimologie: autos înseamnă sine și nomos înseamnă lege regulă. Regulile sunt înțelese ca acorduri între oameni și pot fi negociate în funcție de echitate.</span><strong>autonomie morală</strong></span> cu accent pe <span class='tip'><span class='tooltip-box'>Intenția contează mai mult decât rezultatul accidental. Exemplu: cineva varsă din greșeală un pahar în timp ce ajută este judecat mai puțin sever decât cineva care strică intenționat un obiect chiar dacă paguba este mai mică.</span><strong>intenție</strong></span>.",
        },
        {
          front:
            "Explică nivelurile dezvoltării raționamentului moral la Kohlberg și descrie fiecare nivel",
          back: "• <strong>4–9 ani</strong>: <span class='tip'><span class='tooltip-box'>Regulile sunt stabilite de alții și respectate pentru a evita consecințe negative sau pentru beneficiu personal.</span><strong>preconvențional</strong></span> (S1: <span class='tip'><span class='tooltip-box'>Stadiul orientării spre ascultare și pedeapsă. Binele și răul sunt judecate în funcție de consecințele fizice ale acțiunii. Exemplu: un copil consideră că a spart din greșeală mai multe pahare este mai grav decât a spart unul intenționat.</span><strong>ascultare și pedeapsă</strong></span>; S2: <span class='tip'><span class='tooltip-box'>Stadiul orientării spre satisfacerea propriilor nevoi. Corect este ceea ce aduce un beneficiu personal sau un schimb avantajos. Exemplu: copilul ajută doar dacă primește ceva în schimb.</span><strong>propriile nevoi</strong></span>)<br>• <strong>9–14 ani</strong>: <span class='tip'><span class='tooltip-box'>Morala conformării la norme și a menținerii relațiilor și ordinii sociale.</span><strong>convențional</strong></span> (S3: <span class='tip'><span class='tooltip-box'>Stadiul orientării după relațiile interpersonale. Comportamentul bun este cel care îi ajută pe ceilalți și este aprobat social. Exemplu: un copil spune adevărul pentru a fi considerat bun de către ceilalți.</span><strong>relațiile interpersonale</strong></span>; S4: <span class='tip'><span class='tooltip-box'>Stadiul orientării după autoritate și ordine socială. Corect este să respecți regulile și legile pentru menținerea ordinii. Exemplu: respectarea regulilor școlii pentru că așa trebuie.</span><strong>autoritate și ordine</strong></span>)<br>• <strong>13+ ani</strong>: <span class='tip'><span class='tooltip-box'>Morala autonomiei și a principiilor morale alese conștient.</span><strong>postconvențional</strong></span> (S5: <span class='tip'><span class='tooltip-box'>Stadiul orientării după contractul social și drepturi individuale. Legile sunt importante dar pot fi schimbate dacă sunt nedrepte. Exemplu: o lege este respectată doar dacă protejează drepturile fundamentale.</span><strong>contract social</strong></span>; S6: <span class='tip'><span class='tooltip-box'>Stadiul orientării după principii etice universale internalizate. Deciziile morale sunt luate conform conștiinței personale. Exemplu: cineva încalcă o lege pentru a salva o viață.</span><strong>principii etice universale</strong></span>)",
        },
        {
          front:
            "Ce aduce Gilligan diferit față de Kohlberg când vorbește despre dezvoltarea morală",
          back: "Gilligan pornește de la critica faptului că teoria lui Kohlberg a fost construită în principal pe studii realizate pe băieți și bărbați, valorizând <span class='tip'><span class='tooltip-box'>Judecata morală bazată pe reguli abstracte, drepturi și principii impersonale.</span><strong>etica justiției</strong></span>, și propune ca alternativă <span class='tip'><span class='tooltip-box'>O perspectivă morală centrată pe relații, responsabilitate și evitarea producerii de rău.</span><strong>etica grijii</strong></span>.<br><br>Stadii orientative în etica grijii (Gilligan) în raport cu Kohlberg:<br>• <strong>Preconvențional</strong> <span class='tip'><span class='tooltip-box'>La Kohlberg: orientare spre pedeapsă și interes personal. La Gilligan: focalizare pe supraviețuire și protejarea sinelui într-un context relațional perceput ca amenințător. Exemplu: o persoană ia o decizie morală pentru a evita să fie rănită sau abandonată.</span>(Kohlberg vs Gilligan)</span><br>• <strong>Convențional</strong> <span class='tip'><span class='tooltip-box'>La Kohlberg: moralitatea conformării la norme și a aprobării sociale. La Gilligan: a fi moral înseamnă sacrificiu de sine și grijă pentru ceilalți, chiar cu cost personal. Exemplu: cineva acceptă o situație nedreaptă pentru a menține relația sau armonia.</span>(Kohlberg vs Gilligan)</span><br>• <strong>Postconvențional</strong> <span class='tip'><span class='tooltip-box'>La Kohlberg: orientare după principii etice universale și drepturi individuale. La Gilligan: echilibru între grija față de sine și față de ceilalți, cu accent pe responsabilitate și nonviolență. Exemplu: o decizie morală caută soluția care minimizează răul pentru toate persoanele implicate.</span>(Kohlberg vs Gilligan)</span>",
        },
      ],
    },
  ],
  "phed-u5": [
    {
      id: "phed-u5-deck1",
      title: "U5 Flashcards",
      cards: [
        {
          front:
            "Definește personalitatea ca sistem dinamic și modul ei de formare și cunoaștere",
          back: "Personalitatea reprezintă un <span class='tip'><strong>sistem dinamic și interacționist</strong><span class='tooltip-box'>Personalitatea nu este o realitate fixă, dată integral la naștere, ci se construiește progresiv prin interacțiunea continuă dintre factori biologici, psihologici, sociali și culturali, fiind relativ stabilă dar modelabilă pe parcursul vieții.<br><br><strong>Exemplu:</strong> aceeași predispoziție temperamentală poate conduce la autocontrol sau impulsivitate, în funcție de educație și contexte.</span></span>, ceea ce explică <span class='tip'><strong>unicitatea fiecărei persoane</strong><span class='tooltip-box'>Unicitatea personalității rezultă din combinarea potențialului ereditar, constituției fizice, istoriei de viață, experiențelor acumulate și filozofiei personale, combinație care diferă de la un individ la altul.<br><br><strong>Exemplu:</strong> persoane crescute în medii similare pot dezvolta valori și stiluri de viață diferite.</span></span>. <br><br>În structura personalității există <span class='tip'><strong>componente cu ritmuri diferite de dezvoltare</strong><span class='tooltip-box'>Temperamentul apare timpuriu și are bază biologică, în timp ce aptitudinile și caracterul se dezvoltă gradual prin educație, exercițiu și experiențe sociale.<br><br><strong>Exemplu:</strong> un copil cu reactivitate emoțională ridicată poate învăța treptat perseverența și autocontrolul.</span></span>. <br><br>Cunoașterea personalității are ca scop <span class='tip'><strong>descrierea, explicarea și predicția comportamentului</strong><span class='tooltip-box'>Analiza personalității urmărește să înțeleagă modul în care persoana relaționează cu mediul, nu să eticheteze rigid individul pe baza unor trăsături presupus imuabile.<br><br><strong>Exemplu:</strong> anticiparea modului în care o persoană reacționează la stres, eșec sau cooperare.</span></span>.",
        },
        {
          front:
            "Definește personalitatea ca structură în sens larg și restrâns",
          back: "<span class='tip'><strong>Sens larg</strong> = temperament + caracter + aptitudini<span class='tooltip-box'>În sens larg, personalitatea include totalitatea componentelor psihice relativ stabile: stilul de reacție emoțională și energetică, sistemul de valori și norme, precum și capacitățile și competențele individului.<br><br><strong>Exemplu:</strong> un elev poate fi calm sau impulsiv, responsabil sau conformist și performant sau slab la anumite discipline.</span></span><br><br><span class='tip'><strong>Sens restrâns</strong> = doar temperament și caracter<span class='tooltip-box'>În sens restrâns, personalitatea se referă doar la stilul de reacție și la sistemul de valori și reguli internalizate, excluzând aptitudinile și inteligența.<br><br><strong>Exemplu:</strong> doi elevi cu aceeași inteligență pot avea stiluri de reacție și orientări valorice diferite.</span></span>",
        },
        {
          front: "Menționează nivelurile de analiză ale personalității",
          back: "• <span class='tip'><strong>nivel genetic</strong> – bază ereditară<span class='tooltip-box'>Explică diferențele individuale pornind de la zestrea ereditară și de la modul diferit de activare și exprimare a genelor. Codul genetic este comun speciei, dar exprimarea lui variază între indivizi.<br><br><strong>Exemplu:</strong> predispoziții diferite pentru reactivitate emoțională sau sensibilitate la stres.</span></span><br>• <span class='tip'><strong>nivel neurofiziologic și biochimic</strong> – funcționare biologică<span class='tooltip-box'>Explică personalitatea prin funcționarea sistemului nervos central, limbic și endocrin, precum și prin rolul neurotransmițătorilor.<br><br><strong>Exemplu:</strong> niveluri diferite de activare corticală sau răspunsuri fiziologice diferite în situații stresante.</span></span><br>• <span class='tip'><strong>nivel evoluționist</strong> – adaptare de specie<span class='tooltip-box'>Explică trăsături comune oamenilor ca rezultat al selecției naturale și al valorii adaptive pentru specie.<br><br><strong>Exemplu:</strong> tendința spre cooperare și altruism ca mecanisme favorabile supraviețuirii grupului.</span></span><br>• <span class='tip'><strong>nivel de trăsătură</strong> – organizare individuală<span class='tooltip-box'>Explică personalitatea ca o rețea organizată de trăsături stabile, cu ponderi diferite, care conferă unicitate și putere predictivă.<br><br><strong>Exemplu:</strong> o trăsătură centrală precum conștiinciozitatea poate influența performanța în contexte variate.</span></span>",
        },
        {
          front:
            "Menționează tipurile de abordări teoretice ale personalității",
          back: "• <span class='tip'><strong>abordări psihanalitice și neopsihanalitice</strong> – conflict intrapsihic<span class='tooltip-box'>Explică personalitatea prin conflicte interne dintre pulsiuni, trebuințe și constrângeri sociale, cu accent pe importanța experiențelor timpurii și a dezvoltării stadiale.<br><br><strong>Exemplu:</strong> influența relației cu figurile parentale asupra structurii personalității adulte (Freud, Jung, Adler, Horney, Fromm).</span></span><br>• <span class='tip'><strong>abordări behavioriste și socio cognitive</strong> – învățare și autoreglare<span class='tooltip-box'>Explică personalitatea prin mecanisme de învățare, întăriri, feedback și autoreglare comportamentală, punând accent pe interacțiunea dintre comportament și mediu.<br><br><strong>Exemplu:</strong> comportamente consolidate prin recompensă sau modelare socială (Skinner, Rotter, Bandura).</span></span><br>• <span class='tip'><strong>abordări umaniste</strong> – auto realizare<span class='tooltip-box'>Pun accent pe autenticitate, experiența subiectivă și tendința naturală a individului spre dezvoltare personală și împlinire.<br><br><strong>Exemplu:</strong> orientarea spre sens, congruență și creștere personală (Rogers, Maslow).</span></span><br>• <span class='tip'><strong>abordări cognitive</strong> – interpretare personală<span class='tooltip-box'>Văd individul ca interpret activ al realității, care construiește sens prin scheme și constructe personale.<br><br><strong>Exemplu:</strong> aceeași situație este interpretată diferit de persoane diferite în funcție de constructele lor cognitive (Kelly).</span></span><br>• <span class='tip'><strong>abordări ale trăsăturilor</strong> – regularități comportamentale<span class='tooltip-box'>Descriu personalitatea prin trăsături relativ stabile, organizate factorial, cu valoare predictivă pentru comportamentele viitoare.<br><br><strong>Exemplu:</strong> consistența comportamentală explicată prin factori de personalitate (Allport, Cattell, Eysenck, Costa și McCrae).</span></span>",
        },
        {
          front: "Menționează rolul și organizarea trăsăturilor la Allport",
          back: "<span class='tip'><strong>Rolul trăsăturilor</strong> – descriere și predicție comportamentală<span class='tooltip-box'>Trăsăturile permit descrierea regularităților comportamentale și predicția reacțiilor unei persoane în situații diferite.<br><br><strong>Exemplu:</strong> o persoană consecvent responsabilă tinde să respecte sarcinile indiferent de context.</span></span><br><br><span class='tip'><strong>Organizarea trăsăturilor</strong><span class='tooltip-box'>Allport propune o organizare ierarhică a trăsăturilor în funcție de rolul lor în structurarea personalității.</span></span> – ierarhică (<span class='tip'><strong>trăsături cardinale</strong><span class='tooltip-box'>Trăsături dominante, rare, care organizează aproape întreaga personalitate.<br><br><strong>Exemplu:</strong> ambiția extremă care ghidează toate deciziile de viață.</span></span>, <span class='tip'><strong>trăsături principale</strong><span class='tooltip-box'>Trăsături centrale, frecvent observabile, care definesc stilul general al persoanei.<br><br><strong>Exemplu:</strong> sociabilitate, perseverență, responsabilitate.</span></span>, <span class='tip'><strong>trăsături secundare</strong><span class='tooltip-box'>Trăsături contextuale, slab exprimate, activate doar în anumite situații.<br><br><strong>Exemplu:</strong> timiditate manifestată doar în contexte sociale noi.</span></span>)",
        },
        {
          front:
            "Definește CAPS (cognitive-affect personality system) și contribuția sa (Mischel și Shoda, 1995)",
          back: "<span class='tip'><strong>CAPS (cognitive-affect personality system)</strong> – personalitatea ca sistem dinamic<span class='tooltip-box'>CAPS explică personalitatea ca un sistem dinamic de procese cognitive și afective care interacționează cu situațiile pentru a produce comportamentul. Spre deosebire de teoriile centrate exclusiv pe trăsături, care presupun că trăsăturile acționează direct asupra comportamentului, CAPS arată că trăsăturile influențează comportamentul prin interpretări, emoții, scopuri și autoreglare activate contextual.<br><br><strong>Exemplu:</strong> aceeași persoană poate reacționa calm sau defensiv la critică, în funcție de modul în care o interpretează și de scopurile active.</span></span><br><br><span class='tip'><strong>Unități CAPS (cognitive-affect personality system)</strong><span class='tooltip-box'>Unități interne care interacționează între ele și cu situațiile, generând tipare stabile, dar dependente de context.</span></span><br>• <span class='tip'><strong>Coduri (encodări)</strong><span class='tooltip-box'>Constructe cognitive despre sine, ceilalți, evenimente și situații, interne sau externe.<br><br><strong>Exemplu:</strong> interpretarea unei observații ca atac personal, versus feedback constructiv.</span></span><br>• <span class='tip'><strong>Așteptări și credințe</strong><span class='tooltip-box'>Credințe despre lume, consecințele comportamentelor și eficacitatea de sine.<br><br><strong>Exemplu:</strong> convingerea că efortul duce la progres susține perseverența după eșec.</span></span><br>• <span class='tip'><strong>Afecte</strong><span class='tooltip-box'>Emoții, sentimente și reacții fiziologice asociate situațiilor.<br><br><strong>Exemplu:</strong> anxietate și tensiune corporală înainte de o evaluare.</span></span><br>• <span class='tip'><strong>Scopuri</strong><span class='tooltip-box'>Obiective și proiecte personale care direcționează comportamentul.<br><br><strong>Exemplu:</strong> dorința de a învăța versus dorința de a evita eșecul.</span></span><br>• <span class='tip'><strong>Sistem de valori</strong><span class='tooltip-box'>Principii și criterii personale care orientează alegerile și prioritățile.<br><br><strong>Exemplu:</strong> alegerea cooperării pentru că relațiile sunt valorizate.</span></span><br>• <span class='tip'><strong>Competențe și abilități de autoreglare</strong><span class='tooltip-box'>Planuri și strategii de control al acțiunii, emoțiilor și atenției.<br><br><strong>Exemplu:</strong> stabilirea pașilor de lucru și amânarea recompensei pentru finalizarea unei sarcini.</span></span>",
        },
        {
          front: "Definește relația dintre ereditate și mediu în personalitate",
          back: "<span class='tip'><strong>Relația ereditate–mediu</strong> – ereditatea oferă predispoziții, mediul modelează exprimarea lor. Nici ereditatea, nici mediul nu determină singure personalitatea.<span class='tooltip-box'>Personalitatea se dezvoltă prin interacțiunea continuă dintre predispozițiile biologice moștenite și influențele mediului, care pot amplifica, tempera sau redirecționa aceste predispoziții.<br><br><strong>Exemplu:</strong> un copil cu reactivitate emoțională ridicată poate deveni impulsiv sau, într un mediu structurat, poate învăța autoreglarea.</span></span>",
        },
        {
          front:
            "Definește temperamentul, baza sa și modul de manifestare și adaptare",
          back: "Temperamentul reprezintă <span class='tip'><strong>latura reactivă a personalității</strong><span class='tooltip-box'>Temperamentul descrie modul caracteristic în care o persoană reacționează emoțional și energetic, nivelul de activitate, sociabilitatea și capacitatea de autoreglare, fără a include inteligența sau valorile morale.<br><br><strong>Exemplu:</strong> două persoane pot avea aceleași capacități cognitive, dar reacții emoționale diferite.</span></span>, având un <span class='tip'><strong>substrat biologic</strong><span class='tooltip-box'>Baza funcțională a temperamentului este dată de particularități anatomo fiziologice ale sistemului nervos și endocrin, nu de educație sau norme culturale.<br><br><strong>Exemplu:</strong> diferențe individuale în reactivitatea sistemului nervos la stres.</span></span>. <br><br>Temperamentul este <span class='tip'><strong>relativ stabil în timp</strong><span class='tooltip-box'>Temperamentul se menține relativ constant de-a lungul vieții, mai ales când trăsăturile sunt intense, chiar dacă exprimarea comportamentală se poate modifica odată cu vârsta.</span></span>, are o <span class='tip'><strong>ereditate înaltă</strong><span class='tooltip-box'>Temperamentul este considerat înalt eritabil, cu o contribuție genetică semnificativă, mediul influențând în special reglarea și exprimarea predispozițiilor.<br><br><strong>Exemplu:</strong> gemenii pot prezenta reacții emoționale similare chiar în contexte diferite.</span></span> și se manifestă ca <span class='tip'><strong>predispoziții contextuale</strong><span class='tooltip-box'>Temperamentul nu determină comportamente fixe, ci o constelație de predispoziții care se exprimă diferit în funcție de situație.<br><br><strong>Exemplu:</strong> aceeași persoană poate fi energică într-un context familiar și rezervată într-unul nou.</span></span>, fiind <span class='tip'><strong>adaptativ sau dezadaptativ</strong><span class='tooltip-box'>Trăsăturile temperamentale nu sunt bune sau rele în sine, ci devin adaptative sau dezadaptative în funcție de context și de capacitatea de autoreglare.<br><br><strong>Exemplu:</strong> impulsivitatea poate fi utilă în situații de reacție rapidă, dar problematică în contexte ce cer control.</span></span>.",
        },
        {
          front:
            "Explică temperamentul în copilărie: definiție, stabilitate, tipare și implicații educaționale",
          back: "Temperamentul în copilărie reprezintă <span class='tip'><strong>latura reactivă timpurie</strong><span class='tooltip-box'>Temperamentul copilului se referă la reactivitatea emoțională, nivelul de activitate, sociabilitate și autoreglare. Nu se confundă cu inteligența sau cu valorile morale.<br><br><strong>Exemplu:</strong> un copil poate fi foarte activ și emoțional intens indiferent de nivelul său cognitiv.</span></span> și are ca o <span class='tip'><strong>caracteristică esențială apariția timpurie și stabilitatea relativă</strong><span class='tooltip-box'>Temperamentul apare încă din perioada de sugar și se menține relativ constant de a lungul dezvoltării, deși modul de exprimare comportamentală se poate modifica odată cu vârsta.<br><br><strong>Exemplu:</strong> un copil inhibat poate deveni mai sociabil, dar rămâne mai rezervat comparativ cu alții.</span></span>.<br><br><span class='tip'><strong>Tipare temperamentale</strong> – Thomas și Chess<span class='tooltip-box'>Thomas și Chess clasifică copiii în trei tipuri temperamentale pe baza regularității, adaptabilității și reactivității emoționale.<br><br><strong>Exemplu:</strong> copil calm adaptabil, copil dificil cu reacții intense, copil lent care se adaptează greu la schimbări.</span></span><br>• <span class='tip'><strong>copii calmi adaptabili</strong><span class='tooltip-box'>Ritmuri regulate, adaptare ușoară, reacții emoționale moderate.<br><br><strong>Exemplu:</strong> acceptă schimbările fără opoziție majoră.</span></span><br>• <span class='tip'><strong>copii dificili</strong><span class='tooltip-box'>Reactivitate emoțională ridicată, adaptare dificilă, ritmuri neregulate.<br><br><strong>Exemplu:</strong> reacții intense la frustrare sau schimbare.</span></span><br>• <span class='tip'><strong>copii lenți, dificil de activat</strong><span class='tooltip-box'>Nivel scăzut de activitate, reacții emoționale slabe, adaptare lentă.<br><br><strong>Exemplu:</strong> evită noutatea și au nevoie de timp pentru acomodare.</span></span><br><br><span class='tip'><strong>Stabilitatea temperamentului</strong> – stabilitate mai mare la extremele temperamentale<span class='tooltip-box'>Cercetările lui Kagan arată că stabilitatea temperamentului este mai mare la extremele temperamentale, în timp ce manifestările moderate pot varia în timp.<br><br><strong>Exemplu:</strong> copiii foarte inhibați sau foarte dezinhibați tind să își păstreze profilul reactiv.</span></span><br><br><span class='tip'><strong>Implicație educațională</strong> – adaptarea cerințelor la predispozițiile temperamentale<span class='tooltip-box'>Comportamentele copilului trebuie înțelese în raport cu predispozițiile temperamentale, iar cerințele educaționale adaptate acestora, nu folosite pentru etichetare sau predicții rigide.<br><br><strong>Exemplu:</strong> aceeași sarcină este formulată diferit pentru copii cu temperamente diferite.</span></span>",
        },
        {
          front:
            "Explică modelul temperamentului la Eysenck, dimensiuni, baze și temperamentele clasice",
          back: "<span class='tip'><strong>Relevanță</strong></span> – <span class='tip'><strong>model dimensional cu bază neurofiziologică</strong><span class='tooltip-box'>Modelul lui Eysenck explică temperamentul prin dimensiuni continue fundamentate pe mecanisme neurofiziologice de activare, permițând înțelegerea stabilității și variației temperamentului din adolescență până la vârsta adultă.<br><br><strong>Exemplu:</strong> diferențe stabile în nivelul de activare explică preferința pentru stimulare intensă sau redusă.</span></span> și <span class='tip'><strong>adaptativ contextual</strong><span class='tooltip-box'>Dimensiunile temperamentale (extraversie/introversie, nevrotism/stabilitate emoțională, psihoticism) și temperamentele clasice (sangvinic, coleric, flegmatic, melancolic) nu sunt bune sau rele în sine, ci devin adaptative sau dezadaptative în funcție de context și de capacitatea de autoreglare.<br><br><strong>Exemplu:</strong> extraversia poate fi avantajoasă în contexte sociale, dar dezavantajoasă în situații ce cer inhibiție.</span></span><br><br><span class='tip'><strong>Dimensiuni</strong><span class='tooltip-box'>Eysenck propune trei dimensiuni temperamentale majore: extraversie/introversie, nevrotism/stabilitate emoțională și psihoticism.</span></span><br>• <span class='tip'><strong>Extraversie/introversie</strong> – activare corticală bazală<span class='tooltip-box'>Diferențe în nivelul de activare corticală bazală și în raportarea la stimularea externă. Extraverșii caută stimulare pentru a atinge nivelul optim, introverșii tind să evite suprastimularea.<br><br><strong>Exemplu:</strong> extravertul preferă contexte sociale intense, introvertul preferă activități mai liniștite.</span></span><br>• <span class='tip'><strong>Nevrotism/stabilitate emoțională</strong> – reactivitate limbică<span class='tooltip-box'>Gradul de reactivitate emoțională și activarea sistemului limbic, mai ales în situații stresante. Nevrotismul ridicat presupune emoții intense și instabilitate afectivă.<br><br><strong>Exemplu:</strong> reacții puternice la critică și revenire mai lentă la calm.</span></span><br>• <span class='tip'><strong>Psihoticism</strong> – duritate și empatie scăzută<span class='tooltip-box'>Tendințe spre agresivitate, impulsivitate, egocentrism și empatie redusă. Scorurile scăzute indică cooperare și sensibilitate socială.<br><br><strong>Exemplu:</strong> comportament dur și lipsă de considerare pentru impactul asupra altora.</span></span><br><br><span class='tip'><strong>Temperamente clasice</strong><span class='tooltip-box'>Temperamentele clasice se obțin prin combinarea a două dimensiuni: extraversie/introversie și nevrotism/stabilitate emoțională. Dimensiunea psihoticism nu intră în formarea temperamentelor clasice.</span></span><br>O combinație între Extraversie/introversie - Nevrotism/stabilitate emoțională<br><span class='tip'><span class='tooltip-box'><strong>Exemplu:</strong> sangvinic extraversie plus stabilitate, coleric extraversie plus nevrotism, flegmatic introversie plus stabilitate, melancolic introversie plus nevrotism.</span></span>",
        },
        {
          front:
            "Explică conceptul de sine: definiție, formare și structura generală",
          back: "Conceptul de sine reprezintă <span class='tip'><strong>imaginea mentală despre sine</strong><span class='tooltip-box'>Conceptul de sine răspunde la întrebarea „cine sunt eu?” și include percepțiile, credințele și descrierile pe care o persoană le are despre propria identitate, fără a include evaluarea valorii personale.<br><br><strong>Exemplu:</strong> a te percepe ca fiind sociabil, timid sau perseverent.</span></span>, construit pe baza <span class='tip'><strong>conștiinței de sine</strong><span class='tooltip-box'>Conștiința de sine reprezintă recunoașterea propriei identități ca individ distinct și autonom și constituie fundamentul dezvoltării conceptului de sine.<br><br><strong>Exemplu:</strong> copilul se recunoaște în oglindă și folosește pronumele „eu”.</span></span> și a <span class='tip'><strong>interacțiunilor sociale</strong><span class='tooltip-box'>Reacțiile celorlalți, comparațiile sociale și rolurile asumate contribuie la formarea modului în care persoana se percepe pe sine.<br><br><strong>Exemplu:</strong> feedbackul profesorilor și relațiile cu colegii influențează imaginea de sine.</span></span>. <br><br>Conceptul de sine are o <span class='tip'><strong>structură diferențiată</strong><span class='tooltip-box'>Conceptul de sine nu este unitar, ci include mai multe fațete și roluri, care pot varia în funcție de contextul social și relațional.<br><br><strong>Exemplu:</strong> o persoană se poate percepe diferit în mediul școlar și în cel familial.</span></span>, incluzând o <span class='tip'><strong>fațetă publică</strong><span class='tooltip-box'>Fațeta publică este imaginea de sine afișată social și adaptată contextelor.</span></span> și o <span class='tip'><strong>fațetă intimă</strong><span class='tooltip-box'>Fațeta intimă este rezervată sinelui și persoanelor apropiate și poate conține trăiri sau evaluări mai puțin vizibile social.</span></span>.",
        },
        {
          front: "Explică evoluția conceptului de sine la diferite vârste",
          back: "<span class='tip'><strong>În jur de 1 an și jumătate</strong> – apariția conștiinței de sine<span class='tooltip-box'>Apare recunoașterea propriei identități ca individ distinct, inclusiv recunoașterea propriei imagini și folosirea pronumelui personal „eu”.<br><br><strong>Exemplu:</strong> copilul se recunoaște în oglindă și spune „eu”.</span></span><br><br><span class='tip'><strong>Între 2 ani jumătate și 6 ani</strong> – sine concret și nerealist pozitiv<span class='tooltip-box'>Conceptul de sine este definit prin acțiuni concrete, judecăți simple și preferințe declarate, cu o autoevaluare foarte ridicată și lipsa comparațiilor sociale reale. <br><br><strong>Rolul feedbackului adultului:</strong> influență redusă, deoarece copilul menține o imagine de sine pozitivă chiar și în fața evaluărilor negative.<br><br><strong>Exemplu:</strong> „sunt cel mai bun”, „pot orice”, indiferent de performanță.</span></span><br><br><span class='tip'><strong>Între 7 și 10 ani</strong> – conceptul de sine devine mai realist<span class='tooltip-box'>Conceptul de sine se bazează tot mai mult pe comparații sociale și feedback, devenind mai realist și diferențiat. <br><br><strong>Autoreglare:</strong> apare controlul conștient al comportamentului prin limbaj internalizat, planificare și strategii deliberate, inclusiv capacitatea de a amâna recompensa.<br><br><strong>Exemplu:</strong> copilul se compară cu colegii și își ajustează așteptările față de sine.</span></span><br><br><span class='tip'><strong>După vârsta de 10 ani</strong> – roluri sociale și perspective multiple<span class='tooltip-box'>Conceptul de sine include roluri sociale distincte și criterii autonome de evaluare, precum și capacitatea de a accepta perspective diferite de cea proprie.<br><br><strong>Exemplu:</strong> copilul înțelege că poate fi perceput diferit de profesori și de colegi.</span></span><br><br><span class='tip'><strong>După 14 ani adolescență</strong> – sine multidimensional<span class='tooltip-box'>Conceptul de sine se structurează pe mai multe domenii: competență academică, acceptare socială, conduită, competență sportivă și înfățișare fizică. <br><br><strong>Diferențe de gen:</strong> fetele tind să aibă o stimă de sine mai scăzută în domeniul aspectului fizic și al competențelor atletice, dar mai ridicată în ceea ce privește conduita.<br><br><strong>Exemplu:</strong> adolescentul se evaluează diferit în funcție de domeniul vieții.</span></span>",
        },
        {
          front:
            "Definește stima de sine: ce este, cum se formează și cum evoluează",
          back: "Stima de sine reprezintă <span class='tip'><strong>evaluarea afectivă a valorii personale</strong><span class='tooltip-box'>Stima de sine este felul în care o persoană se evaluează pe sine la nivel emoțional, construită pe baza conceptului de sine. Nu este același lucru cu nivelul real al competențelor sau cu descrierea obiectivă a trăsăturilor.<br><br><strong>Exemplu:</strong> doi elevi cu rezultate similare pot avea stime de sine foarte diferite.</span></span>, formată prin <span class='tip'><strong>acceptare socială, comparații și autoevaluări</strong><span class='tooltip-box'>Stima de sine se construiește prin reacțiile celorlalți, comparațiile cu alții și autoevaluările repetate, influențate de feedback și experiențe relaționale, nu doar de succesul școlar.<br><br><strong>Exemplu:</strong> sprijinul colegilor poate susține stima de sine chiar când apar dificultăți academice.</span></span>. <br><br>O stimă de sine înaltă apare când există <span class='tip'><strong>congruență între competența percepută și importanța domeniului</strong><span class='tooltip-box'>Stima de sine nu cere performanță maximă în toate domeniile, ci potrivire între cât de competent te simți și cât contează domeniul pentru tine.<br><br><strong>Exemplu:</strong> un elev poate avea stimă de sine bună dacă se simte competent într-un domeniu pe care îl valorizează.</span></span>, iar în dezvoltare stima de sine este <span class='tip'><strong>mai ridicată în copilăria mică și scade relativ odată cu comparațiile sociale</strong><span class='tooltip-box'>Copilul mic tinde să se supraevalueze, iar odată cu școala și comparațiile sociale, autoevaluarea devine mai realistă și poate apărea o scădere relativă a stimei de sine.<br><br><strong>Exemplu:</strong> școlarul devine mai critic față de sine decât preșcolarul.</span></span>.",
        },
        {
          front:
            "Explică acceptarea socială raportată la stima de sine: rol în adolescență și categorii de elevi (Woolfolk)",
          back: "În adolescență, <span class='tip'><strong>acceptarea socială devine un predictor major al stimei de sine</strong><span class='tooltip-box'>Odată cu creșterea importanței grupului de egali, statutul și apartenența influențează stima de sine mai mult decât feedbackul adultului.<br><br><strong>Exemplu:</strong> respingerea de către colegi poate afecta stima de sine chiar la elevi cu rezultate bune.</span></span>, iar elevii pot fi descriși prin <span class='tip'><strong>categorii de acceptare socială</strong><span class='tooltip-box'>Woolfolk descrie categorii frecvente de status social în grup: populari, respinși, neglijați, controversați și medii.</span></span>:<br>• <span class='tip'><strong>elevi populari</strong><span class='tooltip-box'>Sunt acceptați de grup și pot fi prosociali sau uneori dominanți antisociali, dar au vizibilitate socială ridicată.<br><br><strong>Exemplu:</strong> sunt invitați des și influențează activitățile grupului.</span></span><br>• <span class='tip'><strong>elevi respinși</strong><span class='tooltip-box'>Sunt evitați activ de colegi, uneori din cauza agresivității impulsive sau a retragerii accentuate.<br><br><strong>Exemplu:</strong> colegii nu îi aleg în echipe și îi exclud din jocuri.</span></span><br>• <span class='tip'><strong>elevi neglijați</strong><span class='tooltip-box'>Au o rețea socială minimă, sunt rar menționați, dar nu sunt respinși activ.<br><br><strong>Exemplu:</strong> stau singuri, dar nu provoacă antipatie directă.</span></span><br>• <span class='tip'><strong>elevi controversați</strong><span class='tooltip-box'>Sunt simultan apreciați și respinși, având combinații de trăsături valorizate și problematice.<br><br><strong>Exemplu:</strong> pot fi carismatici, dar conflictuali.</span></span><br>• <span class='tip'><strong>elevi medii</strong><span class='tooltip-box'>Sunt adaptați, fără extreme de popularitate sau respingere, cu integrare relativ stabilă în grup.<br><br><strong>Exemplu:</strong> au câțiva prieteni și interacțiuni normale în clasă.</span></span>",
        },

        {
          front:
            "Explică rolul feedbackului, a laudei și strategiile educaționale pentru încrederea în sine",
          back: "Feedbackul are rol de <span class='tip'><strong>reglare a stimei de sine</strong><span class='tooltip-box'>Feedbackul susține formarea și reglarea stimei de sine prin informații despre competență, progres și pași de îmbunătățire. Nu fixează rigid valoarea personală și nu determină inteligența.<br><br><strong>Exemplu:</strong> elevul își ajustează percepția despre sine pe baza progresului observat, nu doar a rezultatului final.</span></span>, fiind cel mai eficient când este <span class='tip'><strong>centrat pe proces</strong><span class='tooltip-box'>Feedbackul centrat pe proces pune accent pe strategie, efort și pașii concreți care pot fi îmbunătățiți, susținând perseverența și motivația.<br><br><strong>Exemplu:</strong> „Ai încercat mai multe variante și ai corectat greșelile pe parcurs.”</span></span>. <br><br>Lauda are un <span class='tip'><strong>efect condiționat de formulare</strong><span class='tooltip-box'>Lauda poate sprijini sau fragiliza stima de sine în funcție de conținut: lauda globală, centrată pe persoană, poate duce la dependență de validare și evitare a eșecului, iar lauda specifică, centrată pe proces, susține dezvoltarea.<br><br><strong>Exemplu:</strong> „Ai perseverat și ai ales o strategie eficientă” versus „Ești foarte inteligent.”</span></span>, iar formularea optimă pune accent pe <span class='tip'><strong>strategie și efort</strong><span class='tooltip-box'>Formulările orientate spre strategie, efort și perseverență susțin cel mai bine încrederea în sine și autoreglarea.<br><br><strong>Exemplu:</strong> „Ai ales o strategie bună și ai continuat chiar când a fost dificil.”</span></span>. <br><br>Profesorul poate construi un <span class='tip'><strong>climat educațional de sprijin</strong><span class='tooltip-box'>Strategii eficiente: oportunitatea de a alege, activități cu reușită și complexitate graduală, monitorizarea progresului, obiective realiste și individualizate, toleranță față de greșeli cu corectare, promovarea punctelor de vedere diferite. Compararea publică este contraindicată.<br><br><strong>Exemplu:</strong> sarcini diferențiate și feedback individualizat pe pași de îmbunătățire.</span></span> și poate gestiona eșecul prin <span class='tip'><strong>reîncadrare și normalizare</strong><span class='tooltip-box'>Sprijinul în eșec se face prin reîncadrare cognitivă, exemple relevante și normalizarea dificultăților, nu prin sancționare sau ignorare.<br><br><strong>Exemplu:</strong> „E normal să fie greu la început, hai să vedem ce pas putem schimba.”</span></span>.",
        },
      ],
    },
  ],
};
