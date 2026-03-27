export type Level = "level-1" | "level-2" | "level-3" | "level-4";
export type Skill =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "division"
  | "fractions"
  | "geometry"
  | "counting"
  | "word-problems";

export interface Game {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  levels: Level[];
  skills: Skill[];
  ageRange: string;
  color: string;
  icon: string;
  difficulty: number; // 1-4
  featured: boolean;
}

export interface LevelInfo {
  slug: Level;
  name: string;
  subtitle: string;
  ageRange: string;
  color: string;
  gradient: string;
  icon: string;
  description: string;
}

export interface SkillInfo {
  slug: Skill;
  name: string;
  description: string;
  color: string;
  gradient: string;
  icon: string;
}

export const LEVELS: LevelInfo[] = [
  {
    slug: "level-1",
    name: "Kindergarten Math",
    subtitle: "Level 1",
    ageRange: "Ages 4–6",
    color: "#10B981",
    gradient: "from-emerald-400 to-teal-500",
    icon: "🌱",
    description:
      "Spark early curiosity with counting, shapes, and simple patterns — the perfect foundation for young learners.",
  },
  {
    slug: "level-2",
    name: "Early Elementary",
    subtitle: "Level 2",
    ageRange: "Ages 6–8",
    color: "#3B82F6",
    gradient: "from-blue-400 to-indigo-500",
    icon: "🚀",
    description:
      "Build confidence with addition, subtraction, and number patterns in a fun, game-based environment.",
  },
  {
    slug: "level-3",
    name: "Mid Elementary",
    subtitle: "Level 3",
    ageRange: "Ages 8–10",
    color: "#8B5CF6",
    gradient: "from-violet-500 to-purple-600",
    icon: "⚡",
    description:
      "Level up with multiplication, division, fractions, and intro geometry through exciting challenges.",
  },
  {
    slug: "level-4",
    name: "Upper Elementary",
    subtitle: "Level 4",
    ageRange: "Ages 10–12",
    color: "#F59E0B",
    gradient: "from-amber-400 to-orange-500",
    icon: "🏆",
    description:
      "Master advanced fractions, geometry, decimals, and real-world word problems to become a math champion.",
  },
];

export const SKILLS: SkillInfo[] = [
  {
    slug: "addition",
    name: "Addition",
    description: "Sums, carrying, and multi-digit addition",
    color: "#06B6D4",
    gradient: "from-cyan-400 to-blue-500",
    icon: "➕",
  },
  {
    slug: "subtraction",
    name: "Subtraction",
    description: "Differences, borrowing, and number lines",
    color: "#EC4899",
    gradient: "from-pink-400 to-rose-500",
    icon: "➖",
  },
  {
    slug: "multiplication",
    name: "Multiplication",
    description: "Times tables, arrays, and skip counting",
    color: "#8B5CF6",
    gradient: "from-violet-400 to-purple-600",
    icon: "✖️",
  },
  {
    slug: "division",
    name: "Division",
    description: "Equal groups and long division intro",
    color: "#F59E0B",
    gradient: "from-amber-400 to-orange-500",
    icon: "➗",
  },
  {
    slug: "fractions",
    name: "Fractions",
    description: "Parts of a whole, comparing, simplifying",
    color: "#10B981",
    gradient: "from-emerald-400 to-teal-500",
    icon: "🍕",
  },
  {
    slug: "geometry",
    name: "Geometry",
    description: "Shapes, area, perimeter, and angles",
    color: "#3B82F6",
    gradient: "from-blue-400 to-indigo-500",
    icon: "📐",
  },
  {
    slug: "counting",
    name: "Counting & Numbers",
    description: "Counting, place value, and number sense",
    color: "#EF4444",
    gradient: "from-red-400 to-rose-500",
    icon: "🔢",
  },
  {
    slug: "word-problems",
    name: "Word Problems",
    description: "Real-world math stories and reasoning",
    color: "#F97316",
    gradient: "from-orange-400 to-amber-500",
    icon: "📖",
  },
];

export const GAMES: Game[] = [
  {
    slug: "number-pop",
    title: "Number Pop",
    description: "Pop the balloons in the right counting order!",
    longDescription:
      "In Number Pop, kids tap colorful balloons to count from 1 to 20. Each correct pop earns stars and unlocks a celebration animation. A perfect intro to number sequencing for the youngest learners.",
    levels: ["level-1"],
    skills: ["counting"],
    ageRange: "Ages 4–6",
    color: "#10B981",
    icon: "🎈",
    difficulty: 1,
    featured: true,
  },
  {
    slug: "shape-sorter",
    title: "Shape Sorter",
    description: "Drag shapes into the matching holes before time runs out!",
    longDescription:
      "Shape Sorter challenges young learners to identify circles, squares, triangles, and rectangles, sorting them into the correct slots. Bright animations celebrate every match.",
    levels: ["level-1"],
    skills: ["geometry"],
    ageRange: "Ages 4–6",
    color: "#3B82F6",
    icon: "🔷",
    difficulty: 1,
    featured: false,
  },
  {
    slug: "balloon-count",
    title: "Balloon Count",
    description: "Count the balloons and type the right number!",
    longDescription:
      "Clusters of colorful balloons float on screen. Kids count the balloons and enter the number. With fun sound effects and confetti rewards, counting has never been more joyful.",
    levels: ["level-1"],
    skills: ["counting"],
    ageRange: "Ages 4–6",
    color: "#EC4899",
    icon: "🟣",
    difficulty: 1,
    featured: false,
  },
  {
    slug: "addition-quest",
    title: "Addition Quest",
    description: "Help the hero solve addition puzzles to cross the bridge!",
    longDescription:
      "A brave little knight needs your help! Solve addition problems to build bridges and reach the treasure chest. Numbers go up to 20, perfect for early-elementary learners.",
    levels: ["level-2"],
    skills: ["addition"],
    ageRange: "Ages 6–8",
    color: "#06B6D4",
    icon: "⚔️",
    difficulty: 2,
    featured: true,
  },
  {
    slug: "subtraction-safari",
    title: "Subtraction Safari",
    description: "Subtract animals from the herd to feed the lion!",
    longDescription:
      "On the African plains, animals roam in groups. Solve subtraction problems to feed hungry creatures and advance through the safari. Numbers up to 20, with vivid wildlife animations.",
    levels: ["level-2"],
    skills: ["subtraction"],
    ageRange: "Ages 6–8",
    color: "#F59E0B",
    icon: "🦁",
    difficulty: 2,
    featured: false,
  },
  {
    slug: "number-line-jump",
    title: "Number Line Jump",
    description: "Jump along the number line to land on the answer!",
    longDescription:
      "A frog hops along a giant number line. Click the correct landing spot by solving addition or subtraction problems. Develops deep number sense and operation fluency.",
    levels: ["level-2"],
    skills: ["addition", "subtraction"],
    ageRange: "Ages 6–8",
    color: "#10B981",
    icon: "🐸",
    difficulty: 2,
    featured: true,
  },
  {
    slug: "pattern-wizard",
    title: "Pattern Wizard",
    description: "Complete the magical number pattern to unlock the spell!",
    longDescription:
      "A young wizard needs to finish number patterns to cast spells. Kids identify skip-counting sequences and fill in missing numbers. Introduces multiplication concepts through patterns.",
    levels: ["level-2"],
    skills: ["counting"],
    ageRange: "Ages 6–8",
    color: "#8B5CF6",
    icon: "🧙",
    difficulty: 2,
    featured: false,
  },
  {
    slug: "times-table-rocket",
    title: "Times Table Rocket",
    description: "Answer multiplication facts to blast off into space!",
    longDescription:
      "Fuel your rocket by answering times-table questions. The faster and more accurately you answer, the higher the rocket flies. Covers all multiplication facts from 1×1 to 10×10.",
    levels: ["level-3"],
    skills: ["multiplication"],
    ageRange: "Ages 8–10",
    color: "#8B5CF6",
    icon: "🚀",
    difficulty: 3,
    featured: true,
  },
  {
    slug: "division-dungeon",
    title: "Division Dungeon",
    description: "Solve division problems to unlock dungeon doors!",
    longDescription:
      "Trapped in a dungeon, only division can free you! Solve equal-sharing puzzles and basic long-division problems to open doors and find the exit. Covers divisors 1–10.",
    levels: ["level-3"],
    skills: ["division"],
    ageRange: "Ages 8–10",
    color: "#6B7280",
    icon: "🏰",
    difficulty: 3,
    featured: false,
  },
  {
    slug: "fraction-pizza",
    title: "Fraction Pizza",
    description: "Cut the pizza into equal slices to match the fraction!",
    longDescription:
      "A hungry pizza chef needs fractions to fulfill orders. Drag the cutter to divide pizzas into halves, thirds, quarters, and eighths. A deliciously visual introduction to fractions.",
    levels: ["level-3"],
    skills: ["fractions"],
    ageRange: "Ages 8–10",
    color: "#EF4444",
    icon: "🍕",
    difficulty: 3,
    featured: true,
  },
  {
    slug: "multiplication-maze",
    title: "Multiplication Maze",
    description: "Navigate the maze by answering multiplication questions!",
    longDescription:
      "A top-down maze game where every turn is gated by a multiplication question. Choose the right answer to take the correct path and reach the exit. Multiple difficulty configurations.",
    levels: ["level-3"],
    skills: ["multiplication"],
    ageRange: "Ages 8–10",
    color: "#F97316",
    icon: "🌀",
    difficulty: 3,
    featured: false,
  },
  {
    slug: "geo-builder",
    title: "Geo Builder",
    description: "Construct 2D shapes and learn their properties!",
    longDescription:
      "Drag and snap points to build triangles, quadrilaterals, and polygons. The game reveals each shape's perimeter, area, and angle sum. A hands-on geometry sandbox.",
    levels: ["level-3"],
    skills: ["geometry"],
    ageRange: "Ages 8–10",
    color: "#3B82F6",
    icon: "📐",
    difficulty: 3,
    featured: false,
  },
  {
    slug: "carry-the-one",
    title: "Carry the One",
    description: "Master multi-digit addition with carrying!",
    longDescription:
      "Step-by-step column addition with visual carrying helpers. Each problem is shown with animated place-value blocks, making carrying intuitive and easy to understand.",
    levels: ["level-2", "level-3"],
    skills: ["addition"],
    ageRange: "Ages 7–9",
    color: "#06B6D4",
    icon: "1️⃣",
    difficulty: 2,
    featured: false,
  },
  {
    slug: "borrow-it",
    title: "Borrow It!",
    description: "Learn subtraction with borrowing using animated place-value blocks!",
    longDescription:
      "Visual place-value blocks animate the borrowing process in multi-digit subtraction. Kids watch as tens transform into ones and solve the problems step-by-step.",
    levels: ["level-2", "level-3"],
    skills: ["subtraction"],
    ageRange: "Ages 7–9",
    color: "#EC4899",
    icon: "🔄",
    difficulty: 2,
    featured: false,
  },
  {
    slug: "skip-count-stars",
    title: "Skip Count Stars",
    description: "Collect stars by skip-counting by 2s, 5s, and 10s!",
    longDescription:
      "A shooting-star game where kids jump between numbers, skip-counting to collect constellations. Builds the mental math foundation needed for multiplication tables.",
    levels: ["level-2"],
    skills: ["counting", "multiplication"],
    ageRange: "Ages 6–8",
    color: "#F59E0B",
    icon: "⭐",
    difficulty: 2,
    featured: false,
  },
  {
    slug: "factor-forest",
    title: "Factor Forest",
    description: "Find all the factors hiding in the forest!",
    longDescription:
      "Animals in the forest hold factor pairs. Find every factor of a number by tapping the right animals. Introduces prime numbers, composite numbers, and factorization trees.",
    levels: ["level-4"],
    skills: ["multiplication", "division"],
    ageRange: "Ages 10–12",
    color: "#10B981",
    icon: "🌲",
    difficulty: 4,
    featured: false,
  },
  {
    slug: "fraction-match",
    title: "Fraction Match",
    description: "Match equivalent fractions before the timer runs out!",
    longDescription:
      "A memory-card game where kids flip tiles to match equivalent fractions (e.g., 1/2 = 2/4 = 4/8). Builds deep understanding of fraction equivalence and simplification.",
    levels: ["level-3", "level-4"],
    skills: ["fractions"],
    ageRange: "Ages 8–12",
    color: "#A78BFA",
    icon: "🃏",
    difficulty: 3,
    featured: true,
  },
  {
    slug: "area-adventure",
    title: "Area Adventure",
    description: "Calculate areas to map the magical kingdom!",
    longDescription:
      "Explore a kingdom and calculate the area of each region using length × width. Progress from simple rectangles to composite shapes as you unlock new zones on the map.",
    levels: ["level-4"],
    skills: ["geometry"],
    ageRange: "Ages 10–12",
    color: "#3B82F6",
    icon: "🗺️",
    difficulty: 4,
    featured: false,
  },
  {
    slug: "perimeter-patrol",
    title: "Perimeter Patrol",
    description: "Fence the farm by calculating the correct perimeter!",
    longDescription:
      "A farmer needs fencing! Kids calculate the perimeter of various fields — rectangles, triangles, and irregular polygons — and order the right amount of fencing material.",
    levels: ["level-4"],
    skills: ["geometry"],
    ageRange: "Ages 10–12",
    color: "#F97316",
    icon: "🚜",
    difficulty: 4,
    featured: false,
  },
  {
    slug: "decimal-dash",
    title: "Decimal Dash",
    description: "Race to place decimals on the number line!",
    longDescription:
      "A fast-paced racing game where kids place decimal numbers (tenths and hundredths) on a number line. Develops decimal number sense and connects fractions to decimal notation.",
    levels: ["level-4"],
    skills: ["fractions"],
    ageRange: "Ages 10–12",
    color: "#06B6D4",
    icon: "💨",
    difficulty: 4,
    featured: false,
  },
  {
    slug: "math-story-quest",
    title: "Math Story Quest",
    description: "Read the story, solve the hidden math problem!",
    longDescription:
      "An illustrated adventure story where math problems are embedded in the narrative. Kids must decode real-world scenarios using addition, subtraction, multiplication, and division.",
    levels: ["level-3", "level-4"],
    skills: ["word-problems"],
    ageRange: "Ages 8–12",
    color: "#8B5CF6",
    icon: "📚",
    difficulty: 3,
    featured: true,
  },
  {
    slug: "market-math",
    title: "Market Math",
    description: "Buy and sell at the market — make change and count coins!",
    longDescription:
      "Run your own market stall! Kids calculate totals, make change, and manage a budget. Combines multi-digit addition, subtraction, and multiplication in a real-world commerce context.",
    levels: ["level-4"],
    skills: ["word-problems"],
    ageRange: "Ages 10–12",
    color: "#F59E0B",
    icon: "🏪",
    difficulty: 4,
    featured: false,
  },
  {
    slug: "place-value-palace",
    title: "Place Value Palace",
    description: "Build the palace by placing digits in the right columns!",
    longDescription:
      "A majestic palace is built block by block. Kids drag digits into ones, tens, hundreds, and thousands columns. Includes comparing and ordering multi-digit numbers.",
    levels: ["level-2", "level-3"],
    skills: ["counting"],
    ageRange: "Ages 6–10",
    color: "#EF4444",
    icon: "🏰",
    difficulty: 2,
    featured: false,
  },
  {
    slug: "angle-ace",
    title: "Angle Ace",
    description: "Identify and measure angles to defeat the geometry boss!",
    longDescription:
      "A boss-battle geometry game! Kids identify acute, obtuse, right, and reflex angles, then use a virtual protractor to measure them. Unlocks new boss levels on completion.",
    levels: ["level-4"],
    skills: ["geometry"],
    ageRange: "Ages 10–12",
    color: "#8B5CF6",
    icon: "📏",
    difficulty: 4,
    featured: false,
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find((g) => g.slug === slug);
}

export function getGamesByLevel(level: Level): Game[] {
  return GAMES.filter((g) => g.levels.includes(level));
}

export function getGamesBySkill(skill: Skill): Game[] {
  return GAMES.filter((g) => g.skills.includes(skill));
}

export function getFeaturedGames(): Game[] {
  return GAMES.filter((g) => g.featured);
}

export function getLevelInfo(slug: Level): LevelInfo | undefined {
  return LEVELS.find((l) => l.slug === slug);
}

export function getSkillInfo(slug: Skill): SkillInfo | undefined {
  return SKILLS.find((s) => s.slug === slug);
}

export const ALL_GAME_SLUGS = GAMES.map((g) => g.slug);
