import React from "react";

const CATEGORIES = [
  {
    key: "subject",
    title: "1. 주제 선택",
    subtitle: "무엇을 상상할까요?",
    icon: "🎁",
    required: true,
    options: [
      "미래의 나의 직업",
      "미래 내가 발명한 물건",
      "미래에 유행할 간식",
      "미래 학교의 하루",
      "미래 반려동물",
      "미래 놀이공원",
      "미래 집",
      "미래 교통수단",
      "미래 옷",
      "미래 운동",
      "미래 병원",
      "미래 로봇 친구",
      "미래 여행지",
      "미래 카페",
      "미래 책가방",
      "미래 급식",
    ],
    placeholder: "예: 숙제를 정리해주는 책가방",
  },
  {
    key: "feature",
    title: "2. 특징 선택",
    subtitle: "어떤 특별한 기능이 있나요?",
    icon: "✨",
    required: true,
    options: [
      "날아다니는",
      "투명한",
      "접었다 펼 수 있는",
      "스스로 움직이는",
      "말할 수 있는",
      "감정을 알아차리는",
      "홀로그램이 나오는",
      "태양광으로 움직이는",
      "물속에서도 사용할 수 있는",
      "주머니에 들어가는",
      "로봇 팔이 달린",
      "색이 변하는",
      "냄새가 나는",
      "순간이동하는",
      "친환경 에너지를 쓰는",
      "사람을 도와주는",
    ],
    placeholder: "예: 생각을 읽고 변신하는",
  },
  {
    key: "place",
    title: "3. 장소 선택",
    subtitle: "어디에서 벌어지는 장면인가요?",
    icon: "🌆",
    required: true,
    options: [
      "2055년 미래 학교",
      "바다 위 도시",
      "우주 정거장",
      "하늘 도로",
      "로봇 마을",
      "미래 시장",
      "친환경 스마트홈",
      "미래 놀이공원",
      "달 기지",
      "해저 도시",
      "숲속 연구소",
      "미래 병원",
      "미래 편의점",
      "홀로그램 교실",
      "드론 정류장",
      "미래 축제장",
    ],
    placeholder: "예: 구름 위 도서관",
  },
  {
    key: "action",
    title: "4. 상황 선택",
    subtitle: "무슨 일이 일어나고 있나요?",
    icon: "🎬",
    required: true,
    options: [
      "친구들이 사용하는 모습",
      "사람들이 줄 서서 사 먹는 모습",
      "로봇이 도와주는 모습",
      "아이가 발표하는 모습",
      "가족이 함께 체험하는 모습",
      "도시 위를 날아가는 모습",
      "선생님이 설명하는 모습",
      "손님들이 신기해하는 모습",
      "동물이 함께 노는 모습",
      "기계가 작동하는 모습",
      "주인공이 처음 발견하는 모습",
      "미래 뉴스에 소개되는 모습",
      "광고 촬영을 하는 모습",
      "축제에서 공개되는 모습",
      "친구들이 함께 웃는 모습",
      "사람들이 놀라서 바라보는 모습",
    ],
    placeholder: "예: 아이들이 처음 사용해보고 놀라는 모습",
  },
  {
    key: "mood",
    title: "5. 분위기/색감 선택",
    subtitle: "어떤 느낌이면 좋을까요?",
    icon: "🌈",
    required: true,
    options: [
      "밝고 신나는",
      "따뜻하고 평화로운",
      "신비로운",
      "귀엽고 아기자기한",
      "웅장한",
      "재미있고 엉뚱한",
      "깨끗하고 희망적인",
      "파스텔톤",
      "네온 컬러",
      "초록색 친환경 느낌",
      "은색과 하늘색",
      "따뜻한 노란빛",
      "무지개색",
      "우주처럼 어두운 보라색",
      "반짝이는",
      "상큼한",
    ],
    placeholder: "예: 민트색과 분홍색이 어울리는",
  },
  {
    key: "style",
    title: "6. 스타일 선택",
    subtitle: "어떤 그림체로 만들까요?",
    icon: "🎨",
    required: true,
    options: [
      "귀여운 일러스트",
      "어린이 동화책 그림",
      "만화 스타일",
      "픽셀아트",
      "3D 캐릭터 느낌",
      "포스터 스타일",
      "수채화 느낌",
      "종이공예 느낌",
      "게임 아이템 그림",
      "미래 광고 포스터",
      "카드뉴스 표지",
      "스티커 디자인",
      "캐릭터 설정화",
      "장난감 패키지 느낌",
      "깔끔한 인포그래픽 느낌",
      "귀여운 캐릭터 굿즈 느낌",
    ],
    placeholder: "예: 귀여운 게임 캐릭터 스타일",
  },
  {
    key: "avoid",
    title: "7. 주의사항 선택",
    subtitle: "이미지에서 피하고 싶은 것을 골라요. 여러 개를 선택할 수 있어요.",
    icon: "🛡️",
    required: false,
    multiple: true,
    options: [
      "글자 없이",
      "실제 사람 얼굴 없이",
      "유명 캐릭터 없이",
      "무섭지 않게",
      "너무 복잡하지 않게",
      "밝은 화면으로",
      "위험한 장면 없이",
      "개인정보 없이",
      "어두운 분위기 없이",
      "폭력적인 장면 없이",
      "사진처럼 사실적이지 않게",
      "배경이 너무 비어 보이지 않게",
    ],
    placeholder: "예: 이상한 글자가 나오지 않게",
  },
];

const EXAMPLE_PRESETS = [
  {
    name: "미래 간식",
    emoji: "🍭",
    values: {
      subject: "미래에 유행할 간식",
      feature: "색이 변하는",
      place: "미래 시장",
      action: "사람들이 줄 서서 사 먹는 모습",
      mood: "밝고 신나는",
      style: "귀여운 일러스트",
      avoid: ["글자 없이", "무섭지 않게"],
    },
  },
  {
    name: "미래 직업",
    emoji: "🧑‍🚀",
    values: {
      subject: "미래의 나의 직업",
      feature: "홀로그램이 나오는",
      place: "우주 정거장",
      action: "아이가 발표하는 모습",
      mood: "신비로운",
      style: "포스터 스타일",
      avoid: ["실제 사람 얼굴 없이", "유명 캐릭터 없이"],
    },
  },
  {
    name: "미래 발명품",
    emoji: "💡",
    values: {
      subject: "미래 내가 발명한 물건",
      feature: "접었다 펼 수 있는",
      place: "홀로그램 교실",
      action: "친구들이 사용하는 모습",
      mood: "재미있고 엉뚱한",
      style: "만화 스타일",
      avoid: ["너무 복잡하지 않게", "글자 없이"],
    },
  },
];

function makePrompt(selections) {
  const subject = selections.subject || "미래의 상상 장면";
  const feature = selections.feature || "특별한";
  const place = selections.place || "2055년 미래 세상";
  const action = selections.action || "사람들이 체험하는 모습";
  const mood = selections.mood || "밝고 신나는";
  const style = selections.style || "귀여운 일러스트";
  const avoidList = Array.isArray(selections.avoid)
    ? selections.avoid
    : selections.avoid
    ? [selections.avoid]
    : ["글자 없이", "무섭지 않게"];
  const avoid = avoidList.join(", ");

  return `${place}에서 ${feature} ${subject}이/가 ${action}.
${mood} 느낌으로, ${style} 스타일로 그려줘.
${avoid} 표현해줘.`;
}

function runSelfTests() {
  console.assert(CATEGORIES.length === 7, "There should be 7 prompt categories");
  console.assert(CATEGORIES.every((category) => category.options.length >= 12), "Each category should have many options");
  console.assert(makePrompt({ subject: "미래 간식" }).includes("미래 간식"), "Prompt should include selected subject");
  console.assert(makePrompt({ avoid: ["글자 없이", "무섭지 않게"] }).includes("글자 없이, 무섭지 않게"), "Prompt should join multiple avoid options");
  console.assert(EXAMPLE_PRESETS.length >= 3, "There should be at least 3 preset examples");
}

runSelfTests();

export default function FutureImaginationPromptGenerator() {
  const [selections, setSelections] = React.useState({});
  const [customInputs, setCustomInputs] = React.useState({});
  const [copied, setCopied] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState(CATEGORIES[0].key);

  const activeIndex = CATEGORIES.findIndex((category) => category.key === activeCategory);
  const active = CATEGORIES[activeIndex] || CATEGORIES[0];
  const prompt = makePrompt(selections);
  const requiredDone = CATEGORIES.filter((category) => category.required).filter((category) => selections[category.key]).length;
  const requiredTotal = CATEGORIES.filter((category) => category.required).length;

  const chooseOption = (categoryKey, value) => {
    const category = CATEGORIES.find((item) => item.key === categoryKey);

    if (category?.multiple) {
      setSelections((prev) => {
        const current = Array.isArray(prev[categoryKey]) ? prev[categoryKey] : [];
        const next = current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value];
        return { ...prev, [categoryKey]: next };
      });
    } else {
      setSelections((prev) => ({ ...prev, [categoryKey]: value }));
    }

    setCopied(false);
  };

  const applyCustomInput = (categoryKey) => {
    const value = (customInputs[categoryKey] || "").trim();
    if (!value) return;
    chooseOption(categoryKey, value);
    setCustomInputs((prev) => ({ ...prev, [categoryKey]: "" }));
  };

  const goNext = () => {
    const next = Math.min(activeIndex + 1, CATEGORIES.length - 1);
    setActiveCategory(CATEGORIES[next].key);
  };

  const goPrev = () => {
    const prev = Math.max(activeIndex - 1, 0);
    setActiveCategory(CATEGORIES[prev].key);
  };

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      const textArea = document.createElement("textarea");
      textArea.value = prompt;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  const resetAll = () => {
    setSelections({});
    setCustomInputs({});
    setCopied(false);
    setActiveCategory(CATEGORIES[0].key);
  };

  const applyPreset = (preset) => {
    setSelections({ ...preset.values });
    setCopied(false);
    setActiveCategory("subject");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-violet-50 to-amber-50 text-gray-900">
      <header className="relative overflow-hidden border-b border-white/70 bg-white/70 backdrop-blur">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-black text-violet-700 shadow-sm">
              ✨ 6차시 활동 · 이미지 생성용 프롬프트 자판기
            </div>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">
              미래 상상 프롬프트 생성기
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              버튼을 눌러 나만의 미래 장면 프롬프트를 만들어 보세요.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white/80 p-4 shadow-sm border border-white">
            <div className="text-sm font-bold text-gray-500">필수 선택 진행도</div>
            <div className="mt-1 text-3xl font-black text-violet-600">
              {requiredDone}/{requiredTotal}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-5 p-4 md:p-6 lg:grid-cols-[1fr_420px]">
        <section className="space-y-5">
          <div className="rounded-[2rem] border border-white bg-white/80 p-4 shadow-sm">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {CATEGORIES.map((category, index) => {
                const selectedValue = selections[category.key];
                const selected = Array.isArray(selectedValue) ? selectedValue.length > 0 : Boolean(selectedValue);
                const isActive = category.key === activeCategory;
                return (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    className={`shrink-0 rounded-full px-4 py-3 font-black transition ${
                      isActive
                        ? "bg-violet-500 text-white shadow-lg shadow-violet-200"
                        : selected
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-100 text-gray-500 hover:bg-violet-100"
                    }`}
                  >
                    {selected ? "✅" : category.icon} {index + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white bg-white/85 p-5 shadow-xl md:p-7">
            <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex rounded-full bg-violet-100 px-4 py-2 font-black text-violet-700">
                  {active.icon} {active.title}
                </div>
                <h2 className="text-2xl font-black md:text-4xl">{active.subtitle}</h2>
                <p className="mt-2 text-gray-500">
                  마음에 드는 버튼을 고르거나 직접 입력을 사용할 수 있어요. 주의사항은 여러 개 선택할 수 있어요.
                </p>
              </div>
              <div className="rounded-2xl bg-amber-50 px-4 py-3 text-sm font-bold text-amber-700">
                현재 선택: {Array.isArray(selections[active.key]) ? (selections[active.key].length ? selections[active.key].join(", ") : "아직 없음") : selections[active.key] || "아직 없음"}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
              {active.options.map((option) => {
                const currentValue = selections[active.key];
                const selected = Array.isArray(currentValue) ? currentValue.includes(option) : currentValue === option;
                return (
                  <button
                    key={option}
                    onClick={() => chooseOption(active.key, option)}
                    className={`min-h-[72px] rounded-3xl border-2 p-3 text-center font-black leading-snug transition hover:-translate-y-1 hover:shadow-lg ${
                      selected
                        ? "border-violet-400 bg-violet-100 text-violet-800 shadow-violet-100"
                        : "border-sky-100 bg-white text-gray-800 hover:border-violet-300"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-3xl border border-dashed border-violet-200 bg-violet-50/70 p-4">
              <div className="mb-2 font-black text-violet-700">직접입력</div>
              <div className="flex flex-col gap-2 md:flex-row">
                <input
                  value={customInputs[active.key] || ""}
                  onChange={(event) => setCustomInputs((prev) => ({ ...prev, [active.key]: event.target.value }))}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") applyCustomInput(active.key);
                  }}
                  placeholder={active.placeholder}
                  className="flex-1 rounded-2xl border-2 border-white px-4 py-3 text-lg outline-none focus:border-violet-400"
                />
                <button
                  onClick={() => applyCustomInput(active.key)}
                  className="rounded-2xl bg-violet-500 px-6 py-3 font-black text-white transition hover:bg-violet-600"
                >
                  직접입력 적용
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-between gap-3">
              <button
                onClick={goPrev}
                disabled={activeIndex === 0}
                className="rounded-2xl bg-gray-100 px-5 py-3 font-black text-gray-700 transition hover:bg-gray-200 disabled:opacity-40"
              >
                ← 이전
              </button>
              <button
                onClick={goNext}
                disabled={activeIndex === CATEGORIES.length - 1}
                className="rounded-2xl bg-sky-500 px-5 py-3 font-black text-white transition hover:bg-sky-600 disabled:opacity-40"
              >
                다음 →
              </button>
            </div>
          </div>
        </section>

        <aside className="space-y-5 lg:sticky lg:top-4 lg:h-fit">
          <div className="rounded-[2rem] border border-white bg-white/85 p-5 shadow-xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="text-xl font-black text-violet-700">🪄 완성된 프롬프트</h2>
              <button
                onClick={resetAll}
                className="rounded-full bg-gray-100 px-3 py-2 text-sm font-black transition hover:bg-gray-200"
              >
                초기화
              </button>
            </div>
            <div className="rounded-3xl bg-gray-950 p-5 text-lg font-bold leading-relaxed text-white whitespace-pre-line shadow-inner">
              {prompt}
            </div>
            <button
              onClick={copyPrompt}
              className="mt-4 w-full rounded-3xl bg-violet-500 px-6 py-4 text-xl font-black text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-600"
            >
              {copied ? "복사 완료! ✅" : "프롬프트 복사하기"}
            </button>
            <p className="mt-3 text-sm text-gray-500">
              복사한 뒤 이미지 생성 AI 입력창에 붙여넣으면 됩니다.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white bg-white/75 p-5 shadow-sm">
            <h3 className="mb-3 font-black text-gray-800">🚀 빠른 예시 불러오기</h3>
            <div className="grid grid-cols-1 gap-2">
              {EXAMPLE_PRESETS.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => applyPreset(preset)}
                  className="rounded-2xl bg-amber-50 px-4 py-3 text-left font-black transition hover:bg-amber-100"
                >
                  {preset.emoji} {preset.name} 예시
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-sky-100 bg-sky-50 p-5 text-sm text-sky-900">
            <div className="mb-2 font-black">수업 진행 팁</div>
            <p>1번은 공통 주제로 함께 해보고, 2번부터는 자유롭게 조합하게 하면 좋아요.</p>
            <p className="mt-2">발표는 “제가 만든 미래 장면은 ○○입니다” 한 문장으로 충분해요.</p>
          </div>
        </aside>
      </main>
    </div>
  );
}
