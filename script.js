
      const subjects = [
        {
          id: "fph",
          name: "FPH (Fundamentele Psihologiei)",
          symbol: "🧠",
          pdf: "docs/fph.pdf",
          capitole: [],
          topics: [],
        },
        {
          id: "fped",
          name: "FPED (Fundamentele Pedagogiei)",
          symbol: "📚",
          pdf: "docs/fped.pdf",
          topics: [
            {
              id: "fped-t1",
              title: "Modele de învățare",
              question: {
                text: "Învățarea prin descoperire pune accent pe:",
                options: [
                  "Memorare mecanică",
                  "Explorare și experimentare",
                  "Exerciții repetitive",
                ],
                answer: 1,
              },
            },
            {
              id: "fped-t2",
              title: "Evaluare formativă",
              question: {
                text: "Evaluarea formativă urmărește:",
                options: [
                  "Clasarea studenților",
                  "Îmbunătățirea continuă a învățării",
                  "Stabilirea unei note finale",
                ],
                answer: 1,
              },
            },
          ],
        },
        {
          id: "pdezv",
          name: "PDEZV (Psihologia Dezvoltării)",
          symbol: "🌱",
          pdf: "docs/pdezv.pdf",
          topics: [
            {
              id: "pdezv-t1",
              title: "Etape de dezvoltare",
              question: {
                text: "O etapă centrală la Piaget este:",
                options: [
                  "Operațiilor formale",
                  "Motivației extrinseci",
                  "Învățării sociale",
                ],
                answer: 0,
              },
            },
            {
              id: "pdezv-t2",
              title: "Atașament",
              question: {
                text: "Stilul de atașament securizant se caracterizează prin:",
                options: [
                  "Evitarea constantă a adultului",
                  "Confort la întoarcerea adultului",
                  "Indiferență totală",
                ],
                answer: 1,
              },
            },
          ],
        },
        {
          id: "phed",
          name: "PHEd (Psihologia Educației)",
          symbol: "🎓",
          pdf: "docs/phed.pdf",
          capitole: [],
          topics: [],
        },
        {
          id: "pedcom",
          name: "PedCom (Pedagogia comunicării)",
          symbol: "💬",
          pdf: "docs/pedcom.pdf",
          topics: [
            {
              id: "pedcom-t1",
              title: "Ascultare activă",
              question: {
                text: "Ascultarea activă presupune:",
                options: [
                  "Doar auzirea mesajului",
                  "Parafrazare și clarificare",
                  "Intervenții permanente",
                ],
                answer: 1,
              },
            },
            {
              id: "pedcom-t2",
              title: "Feedback eficient",
              question: {
                text: "Feedback-ul constructiv este de obicei:",
                options: [
                  "Specific și orientat spre soluție",
                  "General și ambiguu",
                  "Întotdeauna negativ",
                ],
                answer: 0,
              },
            },
          ],
        },
        {
          id: "lr",
          name: "Limba Română",
          symbol: "📖",
          pdf: "docs/lr.pdf",
          topics: [
            {
              id: "lr-t1",
              title: "Analiză de text",
              question: {
                text: "O analiză literară riguroasă include:",
                options: [
                  "Doar rezumatul textului",
                  "Temă, motive, structură și limbaj",
                  "Ignorarea contextului autorului",
                ],
                answer: 1,
              },
            },
            {
              id: "lr-t2",
              title: "Gramatică",
              question: {
                text: "Alege varianta corectă:",
                options: [
                  "Sunt sigur că voi reuși",
                  "Sunt sigur că voi reuși-voi",
                  "Sigur sunt că voi reuși",
                ],
                answer: 0,
              },
            },
          ],
        },
      ];

      const startBtn = document.getElementById("startBtn");
      const intro = document.getElementById("intro");
      const map = document.getElementById("map");
      const cards = document.querySelectorAll(".card");
      const detailOverlay = document.getElementById("detailOverlay");
      const closeDetail = document.getElementById("closeDetail");
      const detailTitle = document.getElementById("detailTitle");
      const detailDesc = document.getElementById("detailDesc");
      const pdfLink = document.getElementById("pdfLink");
      const topicsContainer = document.getElementById("topicsContainer");
      const capitoleContainer = document.getElementById("capitoleContainer");
      const subjectProgressLabel = document.getElementById("subjectProgress");
      const subjectProgressBar = document.getElementById("subjectProgressBar");
      const backToList = document.getElementById("backToList");
      const subjectProgressWrap = document.getElementById(
        "subjectProgressWrap"
      );
      const quizPanel = document.getElementById("quizPanel");
      const quizPanelTitle = document.getElementById("quizPanelTitle");
      const quizPanelContent = document.getElementById("quizPanelContent");
      const quizPanelFeedback = document.getElementById("quizPanelFeedback");
      const quizPanelSubmit = document.getElementById("quizPanelSubmit");
      const quizPanelRestart = document.getElementById("quizPanelRestart");
      const quizPanelBack = document.getElementById("quizPanelBack");

      let progressStore = loadProgress();
      let flashState = loadFlashState();
      let currentTopic = null;
      let currentSubject = null;
      let currentQuizListEl = null;
      let currentQuestions = [];
      let quizCompleted = false;
      let lastCompletedTopicId = null;
      let barObserver = null;
      let floatingTooltip = null;

      const subjectBars = {
        fph: { base: "#b32d2d", glow: "rgba(239, 107, 107, 0.8)" },
        fped: { base: "#a85b00", glow: "rgba(226, 141, 26, 0.8)" },
        pdezv: { base: "#8a9152", glow: "rgba(190, 200, 130, 0.8)" },
        phed: { base: "#b02672", glow: "rgba(223, 95, 168, 0.8)" },
        pedcom: { base: "#4636ad", glow: "rgba(123, 107, 240, 0.8)" },
        lr: { base: "#1e65c5", glow: "rgba(77, 141, 240, 0.8)" },
      };

      if (startBtn) {
        startBtn.addEventListener("click", () => {
          intro.classList.add("hidden");
          map.classList.add("visible");
        });
      } else {
        map.classList.add("visible");
      }

      cards.forEach((card) => {
        card.addEventListener("click", () => {
          const subjectId = card.dataset.id;
          openDetail(subjectId);
        });
      });

      closeDetail.addEventListener("click", () => closeModal(true));
      detailOverlay.addEventListener("click", (e) => {
        if (e.target === detailOverlay) closeModal(true);
      });
      quizPanelSubmit.addEventListener("click", submitQuizAnswer);
      quizPanelRestart.addEventListener("click", restartQuiz);
      quizPanelBack.addEventListener("click", goBackToSubcap);
      backToList.addEventListener("click", goBackToSubcap);

      renderCardProgress();

      function loadProgress() {
        try {
          return JSON.parse(localStorage.getItem("subjectProgressV1")) || {};
        } catch (e) {
          return {};
        }
      }

      function saveProgress() {
        localStorage.setItem(
          "subjectProgressV1",
          JSON.stringify(progressStore)
        );
      }

      function loadFlashState() {
        try {
          return JSON.parse(localStorage.getItem("fphFlashDeckV1")) || {};
        } catch (e) {
          return {};
        }
      }

      function saveFlashState() {
        localStorage.setItem("fphFlashDeckV1", JSON.stringify(flashState));
      }

      function resetAllProgress() {
        progressStore = {};
        flashState = {};
        saveProgress();
        saveFlashState();
        renderCardProgress();
        lastCompletedTopicId = null;
        if (currentSubject && detailOverlay.classList.contains("show")) {
          if (currentSubject.id === "fph") {
            renderCapitole(currentSubject);
          } else {
            renderTopics(currentSubject);
          }
          applySubjectBar(currentSubject);
        }
      }

      function resetModalContent() {
        topicsContainer.innerHTML = "";
        capitoleContainer.innerHTML = "";
        cards.forEach((c) => c.classList.remove("zoomed"));
        topicsContainer.classList.add("hidden");
        capitoleContainer.classList.remove("hidden");
        quizPanel.classList.add("hidden");
        quizPanelContent.innerHTML = "";
        quizPanelFeedback.textContent = "";
        quizPanelSubmit.classList.remove("hidden");
        quizPanelRestart.classList.add("hidden");
        quizPanelBack.classList.remove("hidden");
        currentQuestions = [];
        currentTopic = null;
        currentQuizListEl = null;
        quizPanel.classList.add("hidden");
        quizPanel.classList.remove("show", "exit", "complete");
        pdfLink.classList.remove("hidden");
        backToList.classList.add("hidden");
        document.body.style.overflow = "";
      }

      function closeModal(animated = true) {
        if (!detailOverlay.classList.contains("show")) return;
        const modalEl = detailOverlay.querySelector(".modal");
        const finish = () => {
          detailOverlay.classList.remove("show");
          if (modalEl) modalEl.classList.remove("closing");
          resetModalContent();
        };
        if (animated && modalEl) {
          modalEl.classList.add("closing");
          setTimeout(finish, 320);
        } else {
          finish();
        }
      }

      function getTopicProgress(topicId) {
        return progressStore[topicId] ?? 0;
      }

      function setTopicProgress(topicId, value) {
        const currentVal = progressStore[topicId] ?? 0;
        progressStore[topicId] = Math.max(currentVal, value);
        saveProgress();
        renderCardProgress();
        if (currentSubject && detailOverlay.classList.contains("show")) {
          applySubjectBar(currentSubject);
          if (currentSubject.id === "fph") {
            rerenderFphCapitolePreserveState(currentSubject);
          } else if (currentQuizListEl && currentQuizListEl.dataset.quizIds) {
            const ids = currentQuizListEl.dataset.quizIds
              .split(",")
              .filter(Boolean);
            currentQuizListEl.innerHTML = renderInlineQuizList(
              currentSubject,
              ids
            );
            wireInlineQuizButtons(currentQuizListEl, currentSubject);
          }
        }
      }

      function subjectAverage(subject) {
        ensureFphData(subject);
        if (!subject.topics || !subject.topics.length) return 0;
        const total = subject.topics.reduce(
          (sum, t) => sum + getTopicProgress(t.id),
          0
        );
        return Math.round(total / subject.topics.length);
      }

      function renderCardProgress() {
        cards.forEach((card) => {
          const subject = subjects.find((s) => s.id === card.dataset.id);
          ensureFphData(subject);
          const percent = subject ? subjectAverage(subject) : 0;
          const bar = card.querySelector(".progress-bar");
          const label = card.querySelector(".progress-label");
          if (bar) {
            bar.style.cssText = `${barStyleFor(
              subject?.id
            )} width:${percent}%;`;
            const wrap = bar.parentElement;
            if (wrap) {
              let val = wrap.querySelector(".progress-value");
              if (!val) {
                val = document.createElement("div");
                val.className = "progress-value";
                wrap.appendChild(val);
              }
              val.textContent = `${percent}%`;
            }
          }
          if (label) label.textContent = `Parcurs ${percent}%`;
        });
      }

      function openDetail(subjectId) {
        const subject = subjects.find((s) => s.id === subjectId);
        currentSubject = subject;
        if (!subject) return;
        document.body.style.overflow = "hidden";
        ensureFphData(subject);
        detailTitle.textContent = `${subject.symbol} ${subject.name}`;
        detailDesc.textContent =
          "Selectează capitolele și subcapitolele pentru a deschide quizurile aferente. Progresul se salvează local.";
        detailDesc.classList.add("hidden");
        applySubjectBar(subject);
        backToList.classList.add("hidden");
        pdfLink.classList.remove("hidden");
        if (subjectProgressWrap) subjectProgressWrap.classList.add("hidden");
        pdfLink.href = subject.pdf;
        pdfLink.textContent = subject.pdf ? "Deschide PDF" : "PDF neatașat";
        if (subject.id === "fph" && subject.capitole) {
          topicsContainer.classList.add("hidden");
          capitoleContainer.classList.remove("hidden");
          renderCapitole(subject);
        } else {
          topicsContainer.classList.remove("hidden");
          capitoleContainer.classList.add("hidden");
          capitoleContainer.innerHTML = "";
          renderTopics(subject);
        }
        detailOverlay.classList.add("show");
      }

      function renderCapitole(subject) {
        ensureFphData(subject);
        if (!subject.capitole || !subject.capitole.length) {
          capitoleContainer.innerHTML = `<div class="empty">Nu există capitole definite încă.</div>`;
          return;
        }

        capitoleContainer.innerHTML = subject.capitole
          .map((capitol, idx) => {
            const allTopicIds = capitol.subcapitole.flatMap(
              (s) => s.quizuri || []
            );
            const capProgress =
              allTopicIds.length > 0
                ? Math.round(
                    allTopicIds.reduce(
                      (sum, id) => sum + getTopicProgress(id),
                      0
                    ) / allTopicIds.length
                  )
                : 0;

            return `
              <div class="capitol" data-capitol="${capitol.id}">
                  <div class="capitol-header">
                    <div style="flex:1; display:flex; align-items:center; gap:8px; min-width:0; width:100%;">
                      <div class="pill pill-course" style="background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.12); width:100%; justify-content:space-between;">
                        <span style="font-size:1.1rem;">📑</span>
                        <span style="font-weight:800; flex:1; min-width:0;">${
                          capitol.titlu
                        }</span>
                        <span class="pill-percent ${pillColorClass(
                          capProgress
                        )}"><span class="pill-val">${capProgress}%</span> <span class="pill-ico">${pillIcon(
              capProgress
            )}</span></span>
                      </div>
                    </div>
                    <div class="capitol-actions" style="justify-content:flex-end;">
                    <button class="quiz-btn toggle-btn" data-toggle="${
                      capitol.id
                    }">
                      <span>Subcapitole</span>
                      <span class="chevron">🔽</span>
                    </button>
                  </div>
                  </div>
                <div class="subcap-list collapsible" id="${capitol.id}-subs">
                  ${capitol.subcapitole
                    .map((s) => {
                      const quizIds = s.quizuri || [];
                      const completedAll = quizIds.length
                        ? quizIds.every((id) => getTopicProgress(id) === 100)
                        : false;
                      return `
                      <div class="subcap">
                        <div class="subcap-header">
                          <div class="subcap-title">
                            <span class="subcap-status ${
                              completedAll ? "done" : ""
                            }">${completedAll ? "✓" : ""}</span>
                            <span>${s.titlu}</span>
                          </div>
                          <button class="quiz-btn toggle-btn secondary" data-quiz-ids="${quizIds.join(
                            ","
                          )}">
                            <span>QUIZURI</span>
                            <span class="chevron">🔽</span>
                          </button>
                        </div>
                        <div class="subcap-quiz-list collapsible" data-quiz-list="${
                          s.id
                        }" data-quiz-ids="${quizIds.join(",")}"></div>
                      </div>
                    `;
                    })
                    .join("")}
                  ${renderDeckRow(capitol.id)}
                </div>
              </div>
            `;
          })
          .join("");

        capitoleContainer.querySelectorAll("[data-toggle]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const targetId = btn.dataset.toggle;
            const list = document.getElementById(`${targetId}-subs`);
            if (list) {
              const willExpand = !list.classList.contains("expanded");
              // close all other capitole
              capitoleContainer
                .querySelectorAll(".subcap-list.expanded")
                .forEach((el) => {
                  if (el !== list) {
                    el.classList.remove("expanded");
                    el.querySelectorAll(".subcap-quiz-list").forEach((s) =>
                      s.classList.remove("expanded")
                    );
                  }
                });
              capitoleContainer
                .querySelectorAll(".capitol .chevron")
                .forEach((c) => (c.style.transform = "rotate(0deg)"));
              if (willExpand) {
                list.classList.add("expanded");
                setChevron(btn, true);
              } else {
                list.classList.remove("expanded");
                setChevron(btn, false);
                // closing the capitol collapses all its subcapitole/quiz lists
                list
                  .querySelectorAll(".subcap-quiz-list")
                  .forEach((el) => el.classList.remove("expanded"));
                list
                  .querySelectorAll(".subcap .chevron")
                  .forEach((c) => (c.style.transform = "rotate(0deg)"));
              }
              topicsContainer.classList.add("hidden");
              quizPanel.classList.add("hidden");
            }
          });
        });

        capitoleContainer.querySelectorAll("[data-quiz-ids]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const ids = btn.dataset.quizIds.split(",").filter(Boolean);
            const quizList =
              btn.closest(".subcap")?.querySelector(".subcap-quiz-list") ||
              btn.nextElementSibling;
            if (quizList) {
              const willExpand = !quizList.classList.contains("expanded");
              // close siblings within the same capitol
              const parentCapitol = quizList.closest(".capitol");
              if (parentCapitol) {
                parentCapitol
                  .querySelectorAll(".subcap-quiz-list.expanded")
                  .forEach((el) => {
                    if (el !== quizList) el.classList.remove("expanded");
                  });
                parentCapitol
                  .querySelectorAll(".subcap .chevron")
                  .forEach((c) => (c.style.transform = "rotate(0deg)"));
              }
              quizList.innerHTML = renderInlineQuizList(subject, ids);
              quizList.dataset.quizIds = ids.join(",");
              if (willExpand) {
                quizList.classList.add("expanded");
                setChevron(btn, true);
                requestAnimationFrame(() =>
                  scrollListIntoViewIfHidden(quizList)
                );
              } else {
                quizList.classList.remove("expanded");
                setChevron(btn, false);
              }
            }
            topicsContainer.classList.add("hidden");
            wireInlineQuizButtons(quizList, subject);
          });
        });

        // leagă flashcard-urile pentru fiecare capitol
        capitoleContainer
          .querySelectorAll(".deck-row")
          .forEach((row) => wireDeckRow(row, row.dataset.deckCapitol));

        wireTooltips(capitoleContainer);
      }

      function renderTopics(subject, topicIds) {
        ensureFphData(subject);
        const list = topicIds
          ? subject.topics.filter((t) => topicIds.includes(t.id))
          : subject.topics;

        if (!list.length) {
          topicsContainer.innerHTML = `<div class="empty">Nu există topicuri definite încă.</div>`;
          return;
        }

        topicsContainer.innerHTML = list
          .map((topic) => {
            const percent = getTopicProgress(topic.id);
            const barStyle = barStyleFor(subject.id);
            return `
              <div class="topic">
            <div>
              <strong>${topic.title}</strong>
              <div class="meta">Răspuns corect: ${percent}%</div>
              <div class="progress">
                <div class="progress-bar" data-target="${percent}" style="width:${percent}%; ${barStyle}"></div>
                <div class="progress-value">${percent}%</div>
              </div>
            </div>
            <button class="quiz-btn" data-topic="${topic.id}">START QUIZ</button>
          </div>
        `;
          })
          .join("");

        updateBarWidths(topicsContainer, false);
        topicsContainer.querySelectorAll(".quiz-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const topicId = btn.dataset.topic;
            const topic = subject.topics.find((t) => t.id === topicId);
            openQuiz(subject, topic);
          });
        });
      }

      function renderInlineQuizList(subject, ids) {
        const list = ids.length
          ? subject.topics.filter((t) => ids.includes(t.id))
          : [];
        if (!list.length) {
          return `<div class="empty">Nu există quizuri pentru acest subcapitol.</div>`;
        }
        return list
          .map((topic) => {
            const percent = getTopicProgress(topic.id);
            const barStyle = barStyleFor(subject.id);
            return `
            <div class="topic" data-topic-container="${topic.id}" style="margin-top:12px;">
              <div>
                <strong>${topic.title}</strong>
                <div class="meta">Răspuns corect: ${percent}%</div>
                <div class="progress">
                  <div class="progress-bar" data-target="${percent}" style="width:${percent}%; ${barStyle}"></div>
                  <div class="progress-value">${percent}%</div>
                </div>
              </div>
              <button class="quiz-btn" style="padding: 10px;" data-topic="${topic.id}">START QUIZ</button>
            </div>
          `;
        })
        .join("");
    }

    function getDecksForCapitol(capitolId) {
      return (window.FPH_FLASHCARDS && window.FPH_FLASHCARDS[capitolId]) || [];
    }

    function ensureDeckState(deckId, cardCount) {
      const initQueue = Array.from({ length: cardCount }, (_, i) => i);
      const st = flashState[deckId];
      if (
        !st ||
        !Array.isArray(st.queue) ||
        !Array.isArray(st.done) ||
        st.total !== cardCount ||
        !Array.isArray(st.statuses)
      ) {
        flashState[deckId] = {
          queue: initQueue.slice(),
          done: [],
          total: cardCount,
          statuses: Array(cardCount).fill("red"),
        };
      } else {
        // curăță indecși invalizi și reinițializează dacă s-au pierdut toate
        flashState[deckId].queue = st.queue.filter((i) => i < cardCount);
        flashState[deckId].done = st.done.filter((i) => i < cardCount);
        flashState[deckId].statuses = st.statuses.slice(0, cardCount);
        while (flashState[deckId].statuses.length < cardCount) {
          flashState[deckId].statuses.push("red");
        }
        if (!flashState[deckId].queue.length && flashState[deckId].done.length !== cardCount) {
          flashState[deckId].queue = initQueue.slice();
          flashState[deckId].done = [];
          flashState[deckId].statuses = Array(cardCount).fill("red");
        }
      }
      return flashState[deckId];
    }

    function renderDeckBoxes(capitolId) {
      const decks = getDecksForCapitol(capitolId);
      if (!decks.length) return "";
      return decks
        .map((deck) => {
          const state = ensureDeckState(deck.id, deck.cards.length);
          // curăță coada de indecși invalizi și păstrează doar cei necompletați
          const total = deck.cards.length;
          state.queue = (state.queue || []).filter((i) => i < total);
          const doneSet = new Set(state.done || []);
          state.queue = state.queue.filter((i) => !doneSet.has(i));
          if (!state.queue.length && doneSet.size < total) {
            // reinițializează cu toți necompletați
            const all = Array.from({ length: total }, (_, i) => i).filter(
              (i) => !doneSet.has(i)
            );
            state.queue = all;
          }
          const remaining = state.queue.length;
          const currentIdx = state.queue[0];
          const card = currentIdx != null ? deck.cards[currentIdx] : null;
          const completed = remaining === 0;
          const statuses = state.statuses || [];
          const counts = {
            red: statuses.filter((s) => s === "red").length,
            yellow: statuses.filter((s) => s === "yellow").length,
            green: statuses.filter((s) => s === "green").length,
          };
          const deckClass = "deck-box deck-primary deck-as-subcap";
          const score = total > 0 ? Math.round((counts.green / total) * 100) : 0;
          return `
            <div class="${deckClass}" data-deck-id="${deck.id}" data-capitol="${capitolId}">
              ${
                completed
                  ? `<div class="deck-empty">Ai parcurs toate cardurile.<br><button class="deck-btn good deck-reset" data-deck="${deck.id}">Reia deck-ul</button></div>
                      <div class="deck-counts" style="justify-content:center;">
                        <span class="deck-dot red">Nu am știut: ${counts.red}</span>
                        <span class="deck-dot yellow">Mai am scăpări: ${counts.yellow}</span>
                        <span class="deck-dot green">Îl știu: ${counts.green}</span>
                      </div>`
                  : `
              <div class="deck-score" style="text-align:center;">
                <span class="deck-score-pill">Card ${doneSet.size + 1} din ${total}</span>
              </div>
              <div class="flip-card">
                <div class="flip-face flip-front">
                  <div class="deck-front-area">
                    <div class="deck-term">${card?.front || ""}</div>
                    <div class="deck-score">Scor: <span class="deck-score-pill">${score}%</span></div>
                    <div class="deck-counts" style="justify-content:center;">
                      <span class="deck-dot red">${counts.red}</span>
                      <span class="deck-dot yellow">${counts.yellow}</span>
                      <span class="deck-dot green">${counts.green}</span>
                    </div>
                    <button class="deck-btn reveal" data-deck="${deck.id}">Afișează răspunsul</button>
                  </div>
                </div>
                <div class="flip-face flip-back">
                  <div class="deck-card">
                    <div class="deck-back">${card?.back || ""}</div>
                    <div class="deck-actions-controls">
                      <button class="deck-btn again" data-deck="${deck.id}">Nu am știut</button>
                      <button class="deck-btn hard" data-deck="${deck.id}">Mai am scăpări</button>
                      <button class="deck-btn good" data-deck="${deck.id}">Îl știu</button>
                    </div>
                  </div>
                </div>
              </div>`
              }
            </div>
          `;
        })
        .join("");
    }

    function renderDeckRow(capitolId) {
      const decks = getDecksForCapitol(capitolId);
      if (!decks.length) return "";
      return `<div class="deck-row" data-deck-capitol="${capitolId}">${renderDeckBoxes(capitolId)}</div>`;
    }

    function refreshDeckRow(capitolId) {
      const row = capitoleContainer.querySelector(
        `.deck-row[data-deck-capitol='${capitolId}']`
      );
      if (!row) return;
      row.innerHTML = renderDeckBoxes(capitolId);
      wireDeckRow(row, capitolId);
      saveFlashState();
      wireTooltips(row);
    }

    function handleDeckAction(deckId, capitolId, action) {
      const decks = getDecksForCapitol(capitolId);
      const deck = decks.find((d) => d.id === deckId);
      if (!deck) return;
      const state = ensureDeckState(deckId, deck.cards.length);
      if (action === "reset") {
        state.queue = Array.from({ length: deck.cards.length }, (_, i) => i);
        state.done = [];
        state.statuses = Array(deck.cards.length).fill("red");
        saveFlashState();
        refreshDeckRow(capitolId);
        return;
      }
      if (!state.queue.length) return;
      const current = state.queue.shift();
      const setStatus = (label) => {
        if (state.statuses && current < state.statuses.length) {
          state.statuses[current] = label;
        }
      };
      if (action === "again") {
        setStatus("red");
        state.queue.splice(Math.min(2, state.queue.length), 0, current);
      } else if (action === "hard") {
        setStatus("yellow");
        state.queue.splice(Math.min(5, state.queue.length), 0, current);
      } else if (action === "good") {
        setStatus("green");
        if (!state.done.includes(current)) state.done.push(current);
      }
      flashState[deckId] = state;
      saveFlashState();
      refreshDeckRow(capitolId);
    }

    function wireDeckRow(row, capitolId) {
      if (!row) return;
      row.querySelectorAll(".deck-box").forEach((box) => {
        box.classList.remove("revealed");
        const deckId = box.dataset.deckId;
        const revealBtn = box.querySelector(".deck-btn.reveal");
        const actionsRow = box.querySelector(".deck-actions-controls");
        if (revealBtn) {
          revealBtn.addEventListener("click", () => {
            box.classList.add("revealed");
            if (actionsRow) {
              actionsRow.classList.remove("hidden");
            }
          });
        }
        const again = box.querySelector(".deck-btn.again");
        const hard = box.querySelector(".deck-btn.hard");
        const good = box.querySelector(".deck-btn.good");
        const reset = box.querySelector(".deck-reset");
        if (again)
          again.addEventListener("click", () =>
            handleDeckAction(deckId, capitolId, "again")
          );
        if (hard)
          hard.addEventListener("click", () =>
            handleDeckAction(deckId, capitolId, "hard")
          );
        if (good)
          good.addEventListener("click", () =>
            handleDeckAction(deckId, capitolId, "good")
          );
        if (reset)
          reset.addEventListener("click", () =>
            handleDeckAction(deckId, capitolId, "reset")
          );
      });
    }

    function wireInlineQuizButtons(container, subject) {
      if (!container) return;
      container.querySelectorAll("[data-topic]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const topicId = btn.dataset.topic;
            const topic = subject.topics.find((t) => t.id === topicId);
            openQuiz(subject, topic, container);
          });
        });
        updateBarWidths(container, false);
      }

      function scrollListIntoViewIfHidden(listEl) {
        if (!listEl) return;
        const modal = detailOverlay.querySelector(".modal");
        if (!modal) return;
        const modalRect = modal.getBoundingClientRect();
        const listRect = listEl.getBoundingClientRect();
        const offset = 112; // 12px padding + ~100px extra to nudge higher
        const isAboveView = listRect.top < modalRect.top + 12;
        if (isAboveView) {
          const targetTop =
            modal.scrollTop + (listRect.top - modalRect.top) - offset;
          modal.scrollTo({
            top: Math.max(targetTop, 0),
            behavior: "smooth",
          });
        }
      }

      function setChevron(btn, expanded) {
        const chev = btn.querySelector(".chevron");
        if (!chev) return;
        chev.style.transform = expanded ? "rotate(180deg)" : "rotate(0deg)";
      }

      function barStyleFor(subjectId) {
        const style = subjectBars[subjectId] || subjectBars.fph;
        return `--bar-base:${style.base}; --bar-glow:${style.glow};`;
      }

      function pillColorClass(val) {
        if (val >= 100) return "green";
        if (val >= 60) return "yellow";
        if (val >= 10) return "orange";
        return "red";
      }

      function pillIcon(val) {
        if (val >= 100) return "✅";
        if (val >= 60) return "💡";
        if (val >= 10) return "🤓";
        return "💤";
      }

      function wireTooltips(scope = document) {
        const tips = scope.querySelectorAll(".tip");
        tips.forEach((tip) => {
          const box = tip.querySelector(".tooltip-box");
          if (!box) return;
          let floating = null;
          const show = () => {
            const rect = tip.getBoundingClientRect();
            if (!floatingTooltip) {
              floatingTooltip = document.createElement("div");
              floatingTooltip.className = "tooltip-floating";
              document.body.appendChild(floatingTooltip);
            }
            floating = floatingTooltip;
            floating.innerHTML = box.innerHTML;
            const bRect = floating.getBoundingClientRect();
            let left = rect.left + rect.width / 2 - bRect.width / 2;
            left = Math.max(
              8,
              Math.min(left, window.innerWidth - bRect.width - 8)
            );
            let top = rect.top - bRect.height - 8;
            if (top < 8) top = rect.bottom + 8;
            floating.style.left = `${left}px`;
            floating.style.top = `${top}px`;
            floating.style.display = "block";
            floating.style.opacity = "1";
          };
          const hide = () => {
            if (floatingTooltip) {
              floatingTooltip.style.display = "none";
              floatingTooltip.style.opacity = "0";
            }
          };
          tip.addEventListener("mouseenter", show);
          tip.addEventListener("mousemove", show);
          tip.addEventListener("mouseleave", hide);
        });
      }

      function applySubjectBar(subject) {
        if (!subject) return;
        const avg = subjectAverage(subject);
        subjectProgressLabel.textContent = `Parcurs ${avg}%`;
        if (subjectProgressBar) {
          subjectProgressBar.style.cssText = `width:${avg}%; ${barStyleFor(
            subject.id
          )}`;
        }
      }

      function updateBarWidths(container, animate, onlyTopicId) {
        if (!container) return;
        const bars = container.querySelectorAll(".progress-bar[data-target]");
        bars.forEach((bar) => {
          if (onlyTopicId) {
            const parentTopic = bar.closest("[data-topic-container]");
            if (
              !parentTopic ||
              parentTopic.dataset.topicContainer !== onlyTopicId
            )
              return;
          }
          const target = Number(bar.dataset.target || 0);
          const progressWrap = bar.parentElement;
          if (progressWrap) {
            let valEl = progressWrap.querySelector(".progress-value");
            if (!valEl) {
              valEl = document.createElement("div");
              valEl.className = "progress-value";
              progressWrap.appendChild(valEl);
            }
            valEl.textContent = `${target}%`;
            const pillColor = progressWrap
              .closest(".pill-course")
              ?.querySelector(".pill-percent");
            if (pillColor) {
              const match = pillColor.textContent.match(/(\d+)/);
              const val = match ? Number(match[1]) : 0;
              pillColor.classList.remove("red", "orange", "yellow", "green");
              pillColor.classList.add(pillColorClass(val));
              const ico = pillColor.querySelector(".pill-ico");
              const valSpan = pillColor.querySelector(".pill-val");
              if (ico) ico.textContent = pillIcon(val);
              if (valSpan) valSpan.textContent = `${val}%`;
            }
          }
          if (animate) {
            bar.style.width = "0%";
            bar.offsetHeight; // reflow
            requestAnimationFrame(() => {
              bar.style.width = `${target}%`;
            });
          } else {
            bar.style.width = `${target}%`;
          }
        });
      }

      function ensureFphData(subject) {
        if (!subject || subject.id !== "fph") return;
        const data = window.FPH_CONTENT || {};
        if (!subject.capitole?.length) {
          subject.capitole = data.capitole || [];
        }
        if (!subject.topics?.length) {
          subject.topics = data.topics || [];
        }
      }

      function rerenderFphCapitolePreserveState(subject) {
        if (!subject || subject.id !== "fph") return;
        const openCapitole = new Set(
          Array.from(
            capitoleContainer.querySelectorAll(".subcap-list.expanded")
          ).map((el) => el.id?.replace("-subs", ""))
        );
        const openSubcaps = new Set(
          Array.from(
            capitoleContainer.querySelectorAll(".subcap-quiz-list.expanded")
          ).map((el) => el.dataset.quizList)
        );
        renderCapitole(subject);
        // re-open previous states
        capitoleContainer.querySelectorAll(".subcap-list").forEach((el) => {
          const id = el.id?.replace("-subs", "");
          if (id && openCapitole.has(id)) {
            el.classList.add("expanded");
            const btn = capitoleContainer.querySelector(
              `[data-toggle='${id}']`
            );
            if (btn) setChevron(btn, true);
          }
        });
        capitoleContainer
          .querySelectorAll(".subcap-quiz-list")
          .forEach((el) => {
            const id = el.dataset.quizList;
            if (id && openSubcaps.has(id)) {
              el.classList.add("expanded");
              const btn = el.previousElementSibling;
              if (btn?.classList.contains("toggle-btn")) setChevron(btn, true);
              if (el.dataset.quizIds) {
                const ids = el.dataset.quizIds.split(",").filter(Boolean);
                el.innerHTML = renderInlineQuizList(subject, ids);
                wireInlineQuizButtons(el, subject);
              }
            }
          });
      }

      function shuffleIndices(len) {
        const arr = Array.from({ length: len }, (_, i) => i);
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      }

      function launchConfetti() {
        const container = detailOverlay.querySelector(".modal");
        if (!container) return;
        for (let i = 0; i < 16; i++) {
          const c = document.createElement("div");
          c.className = "confetti";
          c.style.left = `${Math.random() * 100}%`;
          c.style.background = i % 2 ? "#ffb703" : "#6be8f7";
          c.style.animationDelay = `${Math.random() * 0.2}s`;
          container.appendChild(c);
          setTimeout(() => c.remove(), 1000);
        }
      }

      function addEmojiPop(targetEl) {
        if (!targetEl) return;
        const rect = targetEl.getBoundingClientRect();
        const containerRect = detailOverlay.getBoundingClientRect();
        const emoji = document.createElement("div");
        emoji.className = "emoji-pop";
        emoji.textContent = "🎉";
        emoji.style.left = `${Math.min(
          rect.left + rect.width / 2 - containerRect.left,
          containerRect.width - 24
        )}px`;
        emoji.style.top = `${rect.top - containerRect.top - 10}px`;
        detailOverlay.appendChild(emoji);
        setTimeout(() => emoji.remove(), 900);
      }

      function highlightCompletedTopic(listEl, topicId) {
        if (!listEl || !topicId) return;
        const item = listEl.querySelector(
          `[data-topic-container='${topicId}']`
        );
        if (!item) return;
        item.classList.add("completed-highlight");
        setTimeout(() => item.classList.remove("completed-highlight"), 900);
      }

      function openQuiz(subject, topic, sourceListEl) {
        currentTopic = topic;
        currentSubject = subject;
        currentQuizListEl = sourceListEl || null;
        if (!topic || !(topic.question || topic.questions)) return;
        const questions =
          topic.questions || (topic.question ? [topic.question] : []);
        currentQuestions = questions;
        quizPanelTitle.textContent = `${topic.title}`;
        quizPanelContent.innerHTML = questions
          .map((q, qIdx) => {
            const isMulti = Array.isArray(q.answer);
            const inputType = isMulti ? "checkbox" : "radio";
            const order = shuffleIndices(q.options.length);
            const optionsHtml = order
              .map(
                (idx) => `
                <label class="choice">
                  <input type="${inputType}" name="q-${qIdx}" value="${idx}"> ${q.options[idx]}
                </label>
              `
              )
              .join("");
            return `
              <div class="quiz-question" data-q="${qIdx}">
                <h4>${q.text}</h4>
                ${optionsHtml}
              </div>
            `;
          })
          .join('<hr class="quiz-sep">');
        quizPanelContent.scrollTop = 0;
        const modalEl = detailOverlay.querySelector(".modal");
        if (modalEl) modalEl.scrollTo({ top: 0, behavior: "auto" });
        quizPanelFeedback.className = "feedback info";
        quizPanelFeedback.textContent =
          "Răspunde la toate întrebările și trimite pentru validare.";
        quizPanel.classList.remove("hidden", "exit", "complete");
        requestAnimationFrame(() => quizPanel.classList.add("show"));
        quizPanelSubmit.classList.remove("hidden");
        quizPanelRestart.classList.add("hidden");
        quizPanelBack.classList.remove("hidden");
        quizPanelBack.textContent = "← Înapoi";
        quizPanelBack.classList.remove("split", "primary");
        quizPanelBack.classList.add("secondary");
        quizPanelRestart.classList.remove("split", "primary");
        quizPanelRestart.classList.add("secondary");
        quizCompleted = false;
        capitoleContainer.classList.add("hidden");
        topicsContainer.classList.add("hidden");
        pdfLink.classList.add("hidden");
        backToList.classList.remove("hidden");
      }

      function submitQuizAnswer() {
        if (!currentTopic || !currentQuestions.length) return;
        let answeredAll = true;
        let correctCount = 0;

        // clear previous state
        quizPanelContent.querySelectorAll(".choice").forEach((c) => {
          c.classList.remove("correct", "incorrect");
        });
        quizPanelContent.querySelectorAll(".quiz-question").forEach((q) => {
          q.classList.remove("q-correct", "q-incorrect");
        });

        currentQuestions.forEach((q, idx) => {
          const inputs = Array.from(
            quizPanelContent.querySelectorAll(`input[name='q-${idx}']:checked`)
          );
          const isMulti = Array.isArray(q.answer);
          if (!inputs.length) {
            answeredAll = false;
            return;
          }
          let isCorrect = false;
          if (isMulti) {
            const answerSet = new Set(q.answer);
            const selectedVals = inputs.map((i) => Number(i.value));
            const hasAll = selectedVals.every((v) => answerSet.has(v));
            const noExtras = selectedVals.length === answerSet.size;
            isCorrect = hasAll && noExtras;
            inputs.forEach((inp) => {
              const label = inp.closest(".choice");
              if (!label) return;
              label.classList.add(
                answerSet.has(Number(inp.value)) ? "correct" : "incorrect"
              );
            });
          } else {
            const selected = inputs[0];
            const val = Number(selected.value);
            isCorrect = val === q.answer;
            const label = selected.closest(".choice");
            if (label) {
              label.classList.add(isCorrect ? "correct" : "incorrect");
            }
          }
          if (isCorrect) correctCount += 1;
          const questionWrapper = inputs[0]?.closest(".quiz-question");
          if (questionWrapper) {
            questionWrapper.classList.add(
              isCorrect ? "q-correct" : "q-incorrect"
            );
          }
        });

        if (!answeredAll) {
          quizPanelFeedback.className = "feedback info";
          quizPanelFeedback.textContent =
            "Completează toate întrebările înainte de a trimite.";
          quizPanelFeedback.style.display = "block";
          return;
        }

        const allCorrect = correctCount === currentQuestions.length;
        const newVal = allCorrect ? 100 : 50;
        setTopicProgress(currentTopic.id, newVal);

        quizPanelFeedback.className = allCorrect
          ? "feedback success"
          : "feedback info";
        quizPanelFeedback.textContent = allCorrect
          ? `Perfect! ${correctCount}/${currentQuestions.length} corecte.`
          : `${correctCount}/${currentQuestions.length} corecte. Corectează răspunsurile marcate și retrimite.`;
        quizPanelFeedback.style.display = "block";

        if (allCorrect) {
          quizPanelSubmit.classList.add("hidden");
          quizPanelRestart.classList.remove("hidden");
          quizPanelBack.classList.remove("hidden");
          quizPanelBack.textContent = "Întoarce-te la QUIZuri";
          quizPanelRestart.textContent = "Reia QUIZul";
          quizPanelBack.classList.add("split");
          quizPanelRestart.classList.add("split");
          quizPanelBack.classList.remove("secondary");
          quizPanelBack.classList.add("primary");
          quizPanelRestart.classList.remove("primary");
          quizPanelRestart.classList.add("secondary");
          quizCompleted = true;
          lastCompletedTopicId = currentTopic?.id || null;
        } else {
          quizPanelSubmit.classList.remove("hidden");
          quizPanelRestart.classList.add("hidden");
          quizPanelBack.classList.remove("hidden");
          quizPanelBack.textContent = "← Înapoi";
          quizPanelBack.classList.remove("split");
          quizPanelRestart.classList.remove("split");
          quizPanelBack.classList.remove("primary");
          quizPanelBack.classList.add("secondary");
          quizCompleted = false;
          lastCompletedTopicId = null;
        }
      }

      function restartQuiz() {
        if (currentSubject && currentTopic) {
          openQuiz(currentSubject, currentTopic, currentQuizListEl);
        }
      }

      function goBackToSubcap() {
        if (quizCompleted) {
          quizPanel.classList.remove("show");
          quizPanel.classList.add("complete");
          launchConfetti();
          setTimeout(() => {
            quizPanel.classList.add("hidden");
            quizPanel.classList.remove("complete", "show", "exit");
          }, 300);
        } else {
          quizPanel.classList.remove("show");
          quizPanel.classList.add("exit");
          setTimeout(() => {
            quizPanel.classList.add("hidden");
            quizPanel.classList.remove("exit", "show", "complete");
          }, 220);
        }
        quizPanelContent.innerHTML = "";
        quizPanelFeedback.textContent = "";
        quizPanelSubmit.classList.remove("hidden");
        quizPanelRestart.classList.add("hidden");
        quizPanelBack.classList.remove("hidden");
        quizPanelBack.textContent = "← Înapoi";
        quizPanelBack.classList.remove("split");
        quizPanelRestart.classList.remove("split");
        quizPanelBack.classList.remove("primary");
        quizPanelBack.classList.add("secondary");
        const lastTopicId = currentTopic
          ? currentTopic.id
          : lastCompletedTopicId;
        currentQuestions = [];
        currentTopic = null;
        pdfLink.classList.remove("hidden");
        backToList.classList.add("hidden");
        // keep subcap/quiz list open
        let workingQuizList = currentQuizListEl;
        if (currentQuizListEl) {
          const subcapId = currentQuizListEl.dataset.quizList;
          const refreshed =
            subcapId &&
            capitoleContainer.querySelector(`[data-quiz-list='${subcapId}']`);
          workingQuizList = refreshed || currentQuizListEl;
          workingQuizList.classList.add("expanded");
          const toggleBtn = workingQuizList.previousElementSibling;
          if (toggleBtn) setChevron(toggleBtn, true);
          const ancestorCollapsible = workingQuizList.closest(".collapsible");
          if (ancestorCollapsible)
            ancestorCollapsible.classList.add("expanded");
          if (refreshed && refreshed.dataset.quizIds) {
            const ids = refreshed.dataset.quizIds.split(",").filter(Boolean);
            refreshed.innerHTML = renderInlineQuizList(currentSubject, ids);
            wireInlineQuizButtons(refreshed, currentSubject);
          }
        }

        if (currentSubject && currentSubject.id !== "fph") {
          topicsContainer.classList.remove("hidden");
          capitoleContainer.classList.add("hidden");
          renderTopics(currentSubject);
          if (quizCompleted && lastTopicId) {
            updateBarWidths(topicsContainer, true, lastTopicId);
          }
          if (lastTopicId) {
            const targetBtn = topicsContainer.querySelector(
              `[data-topic='${lastTopicId}']`
            );
            const targetItem = targetBtn ? targetBtn.closest(".topic") : null;
            (targetItem || targetBtn || topicsContainer).scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        } else {
          capitoleContainer.classList.remove("hidden");
          if (quizCompleted && workingQuizList) {
            const topicId = lastCompletedTopicId;
            const targetItem =
              workingQuizList.querySelector(
                `[data-topic-container='${topicId}']`
              ) || workingQuizList;
            targetItem.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            setTimeout(() => {
              highlightCompletedTopic(workingQuizList, topicId);
              const item =
                workingQuizList.querySelector(
                  `[data-topic-container='${topicId}']`
                ) || workingQuizList;
              item.classList.add("completed-highlight");
              setTimeout(
                () => item.classList.remove("completed-highlight"),
                1900
              );
              addEmojiPop(item);
              updateBarWidths(workingQuizList, true, topicId);
            }, 320);
          } else if (lastTopicId && workingQuizList) {
            const targetItem =
              workingQuizList.querySelector(
                `[data-topic-container='${lastTopicId}']`
              ) || workingQuizList;
            targetItem.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      }

      document.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;
        if (detailOverlay.classList.contains("show")) {
          closeModal(true);
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.shiftKey && (e.key === "q" || e.key === "Q")) {
          e.preventDefault();
          resetAllProgress();
        }
      });
    
