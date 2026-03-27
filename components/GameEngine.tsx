"use client";
import { useState, useCallback } from "react";
import { Game } from "@/lib/games-data";

interface Problem {
  prompt: string;
  visual: string;
  answer: string | number;
  choices: (string | number)[];
  explanation: string;
}

function rnd(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function numChoices(correct: number, spread: number, count = 4): number[] {
  const result = new Set<number>([correct]);
  let attempts = 0;
  while (result.size < count && attempts < 200) {
    attempts++;
    const offset = rnd(1, Math.max(spread, 3));
    const candidate = correct + (Math.random() > 0.5 ? offset : -offset);
    if (candidate > 0 && candidate !== correct) result.add(candidate);
  }
  let extra = 1;
  while (result.size < count) { result.add(correct + extra); extra++; }
  return shuffle([...result]);
}

type Generator = () => Problem;

const GENERATORS: Record<string, Generator> = {
  "number-pop": () => {
    const count = rnd(1, 15);
    const emojis = ["🎈", "⭐", "🌸", "🍎", "🔵"];
    const emoji = emojis[rnd(0, emojis.length - 1)];
    return { prompt: "Count the objects and pick the right number!", visual: emoji.repeat(count), answer: count, choices: numChoices(count, 4), explanation: `There are ${count} ${emoji} — great counting!` };
  },
  "balloon-count": () => {
    const count = rnd(2, 12);
    const emojis = ["🎈", "🌟", "🍭", "🐣", "🦋"];
    const emoji = emojis[rnd(0, emojis.length - 1)];
    return { prompt: "How many can you count?", visual: emoji.repeat(count), answer: count, choices: numChoices(count, 3), explanation: `There are ${count}! Count them one by one.` };
  },
  "shape-sorter": () => {
    const qs = [
      { q: "How many sides does a triangle have?", a: 3, visual: "🔺", choices: [3, 4, 5, 6] as (number|string)[], exp: "A triangle has 3 sides!" },
      { q: "How many sides does a square have?", a: 4, visual: "⬛", choices: [3, 4, 5, 6] as (number|string)[], exp: "A square has 4 equal sides!" },
      { q: "What shape has no corners or sides?", a: "Circle", visual: "⭕", choices: ["Circle", "Triangle", "Square", "Rectangle"] as (number|string)[], exp: "A circle is perfectly round with no sides!" },
      { q: "How many sides does a pentagon have?", a: 5, visual: "⬠", choices: [4, 5, 6, 8] as (number|string)[], exp: "A pentagon has 5 sides!" },
      { q: "How many sides does a hexagon have?", a: 6, visual: "⬡", choices: [4, 5, 6, 7] as (number|string)[], exp: "A hexagon has 6 sides — like a honeycomb!" },
      { q: "Which shape has 4 equal sides and 4 right angles?", a: "Square", visual: "🟦", choices: ["Square", "Rectangle", "Triangle", "Circle"] as (number|string)[], exp: "A square has 4 equal sides and 4 right angles!" },
    ];
    const q = qs[rnd(0, qs.length - 1)];
    return { prompt: q.q, visual: q.visual, answer: q.a, choices: q.choices, explanation: q.exp };
  },
  "addition-quest": () => {
    const a = rnd(1, 10), b = rnd(1, 10), ans = a + b;
    return { prompt: `${a} + ${b} = ?`, visual: "⚔️", answer: ans, choices: numChoices(ans, 5), explanation: `${a} + ${b} = ${ans}. Keep going hero!` };
  },
  "carry-the-one": () => {
    const a = rnd(13, 59), b = rnd(13, 59), ans = a + b;
    return { prompt: `${a} + ${b} = ?`, visual: "1️⃣", answer: ans, choices: numChoices(ans, 15), explanation: `${a} + ${b} = ${ans}. Remember to carry the one!` };
  },
  "subtraction-safari": () => {
    const b = rnd(1, 10), ans = rnd(1, 10), a = ans + b;
    return { prompt: `${a} − ${b} = ?`, visual: "🦁", answer: ans, choices: numChoices(ans, 5), explanation: `${a} − ${b} = ${ans}!` };
  },
  "borrow-it": () => {
    const b = rnd(8, 35), ans = rnd(5, 35), a = ans + b;
    return { prompt: `${a} − ${b} = ?`, visual: "🔄", answer: ans, choices: numChoices(ans, 12), explanation: `${a} − ${b} = ${ans}. You borrowed correctly!` };
  },
  "number-line-jump": () => {
    const isAdd = Math.random() > 0.5;
    let a: number, b: number, ans: number, op: string;
    if (isAdd) { a = rnd(1, 12); b = rnd(1, 12); ans = a + b; op = "+"; }
    else { b = rnd(1, 8); ans = rnd(2, 12); a = ans + b; op = "−"; }
    return { prompt: `${a} ${op} ${b} = ?`, visual: "🐸", answer: ans, choices: numChoices(ans, 5), explanation: `${a} ${op} ${b} = ${ans}. The frog lands on ${ans}!` };
  },
  "pattern-wizard": () => {
    const steps = [2, 3, 4, 5, 10];
    const step = steps[rnd(0, steps.length - 1)];
    const start = rnd(1, 8) * step;
    const seq = [start, start+step, start+2*step, start+3*step, start+4*step];
    const missing = rnd(1, 3);
    const ans = seq[missing];
    const display = seq.map((n, i) => i === missing ? "___" : n).join("  →  ");
    return { prompt: `Find the missing number:\n${display}`, visual: "🧙", answer: ans, choices: numChoices(ans, step * 2), explanation: `Pattern grows by ${step} each step. Missing = ${ans}` };
  },
  "skip-count-stars": () => {
    const stepOpts = [2, 5, 10];
    const step = stepOpts[rnd(0, 2)];
    const start = rnd(1, 5) * step;
    const seq = [start, start+step, start+2*step, start+3*step, start+4*step];
    const idx = 3;
    const ans = seq[idx];
    const display = seq.map((n, i) => i === idx ? "___" : n).join("  →  ");
    return { prompt: `Skip count by ${step}s:\n${display}`, visual: "⭐", answer: ans, choices: numChoices(ans, step * 2), explanation: `Counting by ${step}s: the missing number is ${ans}` };
  },
  "times-table-rocket": () => {
    const a = rnd(1, 10), b = rnd(1, 10), ans = a * b;
    return { prompt: `${a} × ${b} = ?`, visual: "🚀", answer: ans, choices: numChoices(ans, 12), explanation: `${a} × ${b} = ${ans}. Blast off! 🚀` };
  },
  "multiplication-maze": () => {
    const a = rnd(2, 12), b = rnd(2, 12), ans = a * b;
    return { prompt: `${a} × ${b} = ?`, visual: "🌀", answer: ans, choices: numChoices(ans, 18), explanation: `${a} × ${b} = ${ans}. Path unlocked!` };
  },
  "division-dungeon": () => {
    const b = rnd(2, 10), ans = rnd(1, 10), a = ans * b;
    return { prompt: `${a} ÷ ${b} = ?`, visual: "🏰", answer: ans, choices: numChoices(ans, 5), explanation: `${a} ÷ ${b} = ${ans}. Door unlocked!` };
  },
  "factor-forest": () => {
    const nums = [12, 15, 16, 18, 20, 24, 28, 30, 36];
    const num = nums[rnd(0, nums.length - 1)];
    const factors: number[] = [];
    for (let i = 1; i <= num; i++) if (num % i === 0) factors.push(i);
    const ans = factors[rnd(0, factors.length - 1)];
    const notFactors: number[] = [];
    for (let i = 2; i <= num + 3; i++) if (num % i !== 0) notFactors.push(i);
    return { prompt: `Which number is a factor of ${num}?`, visual: "🌲", answer: ans, choices: shuffle([ans, ...shuffle(notFactors).slice(0, 3)]), explanation: `${ans} is a factor of ${num} because ${num} ÷ ${ans} = ${num / ans}` };
  },
  "fraction-pizza": () => {
    const denoms = [2, 3, 4, 6, 8];
    const denom = denoms[rnd(0, denoms.length - 1)];
    const numer = rnd(1, denom - 1);
    const ans = `${numer}/${denom}`;
    const wrongs: string[] = [];
    while (wrongs.length < 3) {
      const wN = rnd(1, denom); const wD = denoms[rnd(0, denoms.length - 1)];
      const w = `${wN}/${wD}`;
      if (w !== ans && !wrongs.includes(w)) wrongs.push(w);
    }
    return { prompt: `A pizza has ${denom} equal slices. ${numer} slice${numer > 1 ? "s are" : " is"} highlighted.\nWhich fraction represents the highlighted part?`, visual: "🍕".repeat(Math.min(denom, 6)), answer: ans, choices: shuffle([ans, ...wrongs]), explanation: `${numer} out of ${denom} slices = ${numer}/${denom}` };
  },
  "fraction-match": () => {
    const equivalents: [string, string, string][] = [
      ["1/2", "2/4", "3/6"], ["1/3", "2/6", "3/9"], ["2/3", "4/6", "6/9"],
      ["3/4", "6/8", "9/12"], ["1/4", "2/8", "3/12"], ["2/5", "4/10", "6/15"],
    ];
    const set = equivalents[rnd(0, equivalents.length - 1)];
    const ans = set[1];
    const wrongs = shuffle(["1/5", "2/7", "3/8", "5/9", "4/11"]).slice(0, 3);
    return { prompt: `Which fraction is equivalent to ${set[0]}?`, visual: "🃏", answer: ans, choices: shuffle([ans, ...wrongs]), explanation: `${set[0]} = ${set[1]} = ${set[2]}. Multiply top and bottom by the same number!` };
  },
  "decimal-dash": () => {
    const tenths = rnd(1, 9), whole = rnd(0, 5);
    const val = whole + tenths / 10;
    const ans = val.toFixed(1);
    const frac = whole > 0 ? `${whole} and ${tenths}/10` : `${tenths}/10`;
    const wrongs = [(val + 0.1).toFixed(1), (val + 0.2).toFixed(1), Math.max(0.1, val - 0.1).toFixed(1)].filter(w => w !== ans);
    return { prompt: `What is ${frac} written as a decimal?`, visual: "💨", answer: ans, choices: shuffle([ans, ...wrongs.slice(0, 3)]), explanation: `${frac} = ${ans}. Tenths go after the decimal point.` };
  },
  "geo-builder": () => {
    const qs = [
      { q: "A triangle has 3 sides. How many angles does it have?", a: 3, choices: [2, 3, 4, 5], exp: "Every triangle has 3 angles!" },
      { q: "What do the angles in a triangle add up to?", a: 180, choices: [90, 180, 270, 360], exp: "Triangle angles always sum to 180°!" },
      { q: "What do the angles in a rectangle add up to?", a: 360, choices: [180, 270, 360, 450], exp: "Any quadrilateral's angles add to 360°!" },
      { q: "How many right angles does a square have?", a: 4, choices: [1, 2, 3, 4], exp: "A square has 4 right angles (90° each)!" },
      { q: "How many sides does a regular hexagon have?", a: 6, choices: [4, 5, 6, 8], exp: "Hexa = 6! A hexagon has 6 sides." },
    ];
    const q = qs[rnd(0, qs.length - 1)];
    return { prompt: q.q, visual: "📐", answer: q.a, choices: q.choices as (number|string)[], explanation: q.exp };
  },
  "area-adventure": () => {
    const l = rnd(2, 12), w = rnd(2, 12), ans = l * w;
    return { prompt: `A rectangle is ${l} units long and ${w} units wide.\nWhat is its area?`, visual: "🗺️", answer: ans, choices: numChoices(ans, 15), explanation: `Area = length × width = ${l} × ${w} = ${ans} square units` };
  },
  "perimeter-patrol": () => {
    const l = rnd(3, 12), w = rnd(3, 12), ans = 2 * (l + w);
    return { prompt: `A rectangle is ${l} m long and ${w} m wide.\nWhat is its perimeter?`, visual: "🚜", answer: ans, choices: numChoices(ans, 15), explanation: `Perimeter = 2 × (length + width) = 2 × (${l} + ${w}) = ${ans} m` };
  },
  "angle-ace": () => {
    const angles = [
      { deg: rnd(10, 89), type: "Acute" }, { deg: 90, type: "Right" },
      { deg: rnd(91, 179), type: "Obtuse" }, { deg: 180, type: "Straight" },
    ];
    const a = angles[rnd(0, angles.length - 1)];
    return { prompt: `An angle measures ${a.deg}°. What type of angle is it?`, visual: "📏", answer: a.type, choices: ["Acute", "Right", "Obtuse", "Straight"], explanation: `${a.deg}° is ${a.type.toLowerCase()}. Acute<90°, Right=90°, Obtuse>90°<180°, Straight=180°` };
  },
  "math-story-quest": () => {
    type SFn = () => { q: string; ans: number; exp: string };
    const stories: SFn[] = [
      () => { const a = rnd(3, 15), b = rnd(2, 10); return { q: `Sam has ${a} apples. His friend gives him ${b} more. How many apples does Sam have now?`, ans: a+b, exp: `${a} + ${b} = ${a+b}` }; },
      () => { const a = rnd(10, 20), b = rnd(2, 9); return { q: `There are ${a} birds on a tree. ${b} fly away. How many birds are left?`, ans: a-b, exp: `${a} − ${b} = ${a-b}` }; },
      () => { const a = rnd(2, 8), b = rnd(2, 6); return { q: `There are ${a} bags with ${b} apples each. How many apples in total?`, ans: a*b, exp: `${a} × ${b} = ${a*b}` }; },
      () => { const b = rnd(2, 5), ans = rnd(2, 8), a = ans*b; return { q: `${a} students are split equally into ${b} groups. How many per group?`, ans, exp: `${a} ÷ ${b} = ${ans}` }; },
    ];
    const s = stories[rnd(0, stories.length - 1)]();
    return { prompt: s.q, visual: "📚", answer: s.ans, choices: numChoices(s.ans, 8), explanation: s.exp };
  },
  "market-math": () => {
    const items = [{ n: "apple", p: rnd(1, 5) }, { n: "book", p: rnd(3, 8) }, { n: "toy", p: rnd(5, 12) }];
    const item = items[rnd(0, items.length - 1)];
    const qty = rnd(2, 5), ans = item.p * qty;
    return { prompt: `One ${item.n} costs $${item.p}.\nHow much do ${qty} ${item.n}s cost?`, visual: "🏪", answer: ans, choices: numChoices(ans, 10), explanation: `$${item.p} × ${qty} = $${ans}` };
  },
  "place-value-palace": () => {
    const num = rnd(100, 9999);
    const places = [
      { name: "ones", value: num % 10 },
      { name: "tens", value: Math.floor(num / 10) % 10 },
      { name: "hundreds", value: Math.floor(num / 100) % 10 },
    ];
    if (num >= 1000) places.push({ name: "thousands", value: Math.floor(num / 1000) % 10 });
    const place = places[rnd(0, places.length - 1)];
    return { prompt: `In the number ${num}, what digit is in the ${place.name} place?`, visual: "🏰", answer: place.value, choices: numChoices(place.value, 3), explanation: `In ${num}, the ${place.name} digit is ${place.value}` };
  },
};

// Fallback for any unmapped slug
function getFallbackGenerator(game: Game): Generator {
  if (game.skills.includes("addition")) return GENERATORS["addition-quest"];
  if (game.skills.includes("multiplication")) return GENERATORS["times-table-rocket"];
  if (game.skills.includes("subtraction")) return GENERATORS["subtraction-safari"];
  if (game.skills.includes("division")) return GENERATORS["division-dungeon"];
  return GENERATORS["math-story-quest"];
}

const TOTAL_QUESTIONS = 10;

// ─── Game UI ──────────────────────────────────────────────────────────────────
export default function GameEngine({ game }: { game: Game }) {
  const generate = GENERATORS[game.slug] ?? getFallbackGenerator(game);

  const [problems, setProblems] = useState<Problem[]>(() =>
    Array.from({ length: TOTAL_QUESTIONS }, generate)
  );
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [streak, setStreak] = useState(0);

  const problem = problems[current];

  const handleAnswer = useCallback((choice: string | number) => {
    if (answered) return;
    setSelected(choice);
    setAnswered(true);
    const isCorrect = String(choice) === String(problem.answer);
    if (isCorrect) {
      setScore(s => s + 1);
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
  }, [answered, problem]);

  const handleNext = useCallback(() => {
    if (current + 1 >= TOTAL_QUESTIONS) {
      setDone(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  }, [current]);

  const handleRestart = useCallback(() => {
    setProblems(Array.from({ length: TOTAL_QUESTIONS }, generate));
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setDone(false);
    setStreak(0);
  }, [generate]);

  const pct = Math.round((current / TOTAL_QUESTIONS) * 100);

  // ── Game Over Screen ──
  if (done) {
    const pct = Math.round((score / TOTAL_QUESTIONS) * 100);
    const msg = pct === 100 ? "PERFECT! You're a math genius! 🏆" :
      pct >= 80 ? "Amazing work! Almost perfect! ⭐" :
      pct >= 60 ? "Great effort! Keep practicing! 💪" :
      "Good try! Practice makes perfect! 📚";
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 480, gap: "1.5rem", textAlign: "center", padding: "2rem" }}>
        <div style={{ fontSize: "4rem" }}>{pct === 100 ? "🏆" : pct >= 80 ? "⭐" : pct >= 60 ? "💪" : "📚"}</div>
        <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "2rem", color: "white" }}>
          Game Over!
        </h2>
        <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "3.5rem", background: "linear-gradient(135deg,#a78bfa,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {score}/{TOTAL_QUESTIONS}
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: 380 }}>{msg}</p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button onClick={handleRestart} className="btn-primary" style={{ fontSize: "1rem" }}>
            🔄 Play Again
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = answered && String(selected) === String(problem.answer);
  const isWrong = answered && String(selected) !== String(problem.answer);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, minHeight: 520 }}>
      {/* Header bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.5rem" }}>{game.icon}</span>
          <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            Q {current + 1} / {TOTAL_QUESTIONS}
          </span>
          {streak >= 3 && (
            <span style={{ background: "rgba(245,158,11,0.2)", border: "1px solid rgba(245,158,11,0.4)", color: "#f59e0b", padding: "2px 10px", borderRadius: "9999px", fontSize: "0.72rem", fontFamily: "Outfit", fontWeight: 700 }}>
              🔥 {streak} streak!
            </span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "white" }}>{score}</span>
          <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>pts</span>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 4, background: "rgba(255,255,255,0.07)" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${game.color}, #7c3aed)`, transition: "width 0.4s ease", borderRadius: "0 2px 2px 0" }} />
      </div>

      {/* Visual */}
      <div style={{ textAlign: "center", padding: "1.5rem 1rem 0.5rem", fontSize: "clamp(1.5rem, 4vw, 3rem)", letterSpacing: "0.1em", lineHeight: 1.4, wordBreak: "break-all", color: "white" }}>
        {problem.visual}
      </div>

      {/* Question */}
      <div style={{ textAlign: "center", padding: "0.5rem 1.5rem 1.5rem" }}>
        <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "white", lineHeight: 1.5, whiteSpace: "pre-wrap" }}>
          {problem.prompt}
        </p>
      </div>

      {/* Choices */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", padding: "0 1.5rem 1rem" }}>
        {problem.choices.map((choice, i) => {
          const isThisCorrect = String(choice) === String(problem.answer);
          const isThisSelected = String(choice) === String(selected);
          let bg = "rgba(255,255,255,0.07)";
          let border = "1px solid rgba(255,255,255,0.12)";
          let color = "white";
          if (answered) {
            if (isThisCorrect) { bg = "rgba(16,185,129,0.25)"; border = "1px solid #10b981"; color = "#34d399"; }
            else if (isThisSelected && !isThisCorrect) { bg = "rgba(239,68,68,0.25)"; border = "1px solid #ef4444"; color = "#fca5a5"; }
          }
          return (
            <button
              key={i}
              onClick={() => handleAnswer(choice)}
              disabled={answered}
              style={{
                padding: "0.9rem 1rem", borderRadius: "12px", border, background: bg, color,
                fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                cursor: answered ? "default" : "pointer", transition: "all 0.2s ease",
                transform: answered && isThisCorrect ? "scale(1.05)" : "scale(1)",
              }}
            >
              {isThisCorrect && answered ? "✅ " : isThisSelected && !isThisCorrect && answered ? "❌ " : ""}
              {choice}
            </button>
          );
        })}
      </div>

      {/* Explanation + Next */}
      {answered && (
        <div style={{ padding: "0 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ padding: "1rem", borderRadius: "12px", background: isCorrect ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)", border: `1px solid ${isCorrect ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}` }}>
            <p style={{ color: isCorrect ? "#34d399" : "#fca5a5", fontFamily: "Outfit", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>
              {isCorrect ? "🎉 Correct!" : "💡 Explanation:"}
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{problem.explanation}</p>
          </div>
          <button onClick={handleNext} className="btn-primary" style={{ alignSelf: "flex-end", padding: "0.65rem 1.5rem", fontSize: "0.9rem" }}>
            {current + 1 >= TOTAL_QUESTIONS ? "See Results 🏆" : "Next Question →"}
          </button>
        </div>
      )}
    </div>
  );
}
