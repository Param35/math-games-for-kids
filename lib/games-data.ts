export type Level = "level-1" | "level-2" | "level-3" | "level-4";
export type Skill =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "division"
  | "fractions"
  | "geometry"
  | "counting"
  | "word-problems"
  | "decimals"
  | "time"
  | "money"
  | "measurement"
  | "number-sense"
  | "algebra"
  | "mixed-operations";

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
  {
    slug: "decimals",
    name: "Decimals",
    description: "Tenths, hundredths, and decimal operations",
    color: "#06B6D4",
    gradient: "from-sky-400 to-cyan-500",
    icon: "🔟",
  },
  {
    slug: "time",
    name: "Time & Clocks",
    description: "Reading clocks, elapsed time, and calendars",
    color: "#A78BFA",
    gradient: "from-violet-300 to-indigo-400",
    icon: "🕐",
  },
  {
    slug: "money",
    name: "Money & Coins",
    description: "Counting coins, making change, and budgeting",
    color: "#F59E0B",
    gradient: "from-yellow-400 to-amber-500",
    icon: "💰",
  },
  {
    slug: "measurement",
    name: "Measurement",
    description: "Length, weight, volume, and units",
    color: "#34D399",
    gradient: "from-emerald-300 to-green-500",
    icon: "📏",
  },
  {
    slug: "number-sense",
    name: "Number Sense",
    description: "Number bonds, odd/even, rounding, comparing numbers",
    color: "#F43F5E",
    gradient: "from-rose-400 to-pink-600",
    icon: "🔢",
  },
  {
    slug: "algebra",
    name: "Algebra & Logic",
    description: "Basic algebra, patterns, order of operations",
    color: "#6366F1",
    gradient: "from-indigo-400 to-violet-600",
    icon: "🔡",
  },
  {
    slug: "mixed-operations",
    name: "Mixed Operations",
    description: "Combining addition, subtraction, multiplication, division",
    color: "#14B8A6",
    gradient: "from-teal-400 to-cyan-600",
    icon: "🧮",
  },
];

const BASE_GAMES: Game[] = [
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
    slug: "clock-reading",
    title: "Clock Reading",
    description: "What time does the clock show? Tell the time and win!",
    longDescription:
      "A friendly analog clock spins its hands and asks kids to read the time. Starting with whole hours and moving through half-hours and quarter-hours, this game builds clock-reading confidence step by step.",
    levels: ["level-1", "level-2"],
    skills: ["time"],
    ageRange: "Ages 5–8",
    color: "#A78BFA",
    icon: "🕐",
    difficulty: 1,
    featured: false,
  },
  {
    slug: "coin-collector",
    title: "Coin Collector",
    description: "Collect the right coins to make the exact amount!",
    longDescription:
      "Kids drag coins into a piggy bank to reach a target total. Starting with simple amounts and working up to making change, this game builds real money sense in young learners.",
    levels: ["level-1", "level-2"],
    skills: ["money", "counting"],
    ageRange: "Ages 5–8",
    color: "#F59E0B",
    icon: "🪙",
    difficulty: 1,
    featured: false,
  },
  {
    slug: "ruler-race",
    title: "Ruler Race",
    description: "Measure the objects and finish the race first!",
    longDescription:
      "Objects race across the screen and kids must measure them correctly using a virtual ruler. Introduces centimetres and inches in a fast-paced format that makes measurement memorable.",
    levels: ["level-2"],
    skills: ["measurement"],
    ageRange: "Ages 6–8",
    color: "#34D399",
    icon: "📏",
    difficulty: 2,
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
    slug: "time-traveller",
    title: "Time Traveller",
    description: "Travel through time by reading clocks and calendars!",
    longDescription:
      "Jump between different eras of history by solving time puzzles — reading clocks, calculating elapsed time, and answering calendar questions. Covers hours, minutes, days, weeks, and months.",
    levels: ["level-2", "level-3"],
    skills: ["time"],
    ageRange: "Ages 7–10",
    color: "#A78BFA",
    icon: "⏰",
    difficulty: 2,
    featured: false,
  },
  {
    slug: "shop-keeper",
    title: "Shop Keeper",
    description: "Run your own shop — count the money and give correct change!",
    longDescription:
      "Open your shop and serve customers! Kids add up the prices of items, take payment, and calculate the correct change to hand back. A brilliant real-world application of addition and subtraction.",
    levels: ["level-2", "level-3"],
    skills: ["money", "addition", "subtraction"],
    ageRange: "Ages 7–10",
    color: "#F59E0B",
    icon: "🏪",
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
    slug: "decimal-diner",
    title: "Decimal Diner",
    description: "Take orders and add up decimal prices at the diner!",
    longDescription:
      "Work as a waiter at a busy diner, adding up meal prices shown as decimals. Teaches addition of decimals in a warm, real-world setting that kids immediately understand.",
    levels: ["level-3", "level-4"],
    skills: ["decimals", "addition"],
    ageRange: "Ages 8–12",
    color: "#06B6D4",
    icon: "🍽️",
    difficulty: 3,
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
    skills: ["geometry", "measurement"],
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
    skills: ["geometry", "measurement"],
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
    skills: ["decimals", "fractions"],
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
    skills: ["word-problems", "money"],
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
  {
    slug: "weight-station",
    title: "Weight Station",
    description: "Balance the scales and learn about weight and mass!",
    longDescription:
      "Objects are placed on a balance scale and kids must figure out which side is heavier, or add weights to make it balance. Introduces grams, kilograms, and comparison of mass in a visual way.",
    levels: ["level-2", "level-3"],
    skills: ["measurement"],
    ageRange: "Ages 7–10",
    color: "#34D399",
    icon: "⚖️",
    difficulty: 2,
    featured: false,
  },
  {
    slug: "speed-tables",
    title: "Speed Tables",
    description: "Race the clock answering times tables as fast as you can!",
    longDescription:
      "A pure speed challenge — multiplication facts appear one by one and kids type answers as quickly and accurately as possible. Tracks personal bests and celebrates new records.",
    levels: ["level-3", "level-4"],
    skills: ["multiplication"],
    ageRange: "Ages 8–12",
    color: "#8B5CF6",
    icon: "⚡",
    difficulty: 3,
    featured: false,
  },
  {
    slug: "fraction-number-line",
    title: "Fraction Number Line",
    description: "Place fractions in the right spot on the number line!",
    longDescription:
      "Drag fraction cards onto the correct position on a number line. Develops the crucial understanding that fractions are numbers — not just pieces of a pizza — and helps kids compare and order them accurately.",
    levels: ["level-3", "level-4"],
    skills: ["fractions"],
    ageRange: "Ages 8–12",
    color: "#10B981",
    icon: "📍",
    difficulty: 3,
    featured: false,
  },
  {
    slug: "volume-quest",
    title: "Volume Quest",
    description: "Fill containers to the right volume and win the quest!",
    longDescription:
      "Pour liquids into different shaped containers and read the measurement markings. Covers millilitres and litres in everyday contexts like cooking, science, and water play.",
    levels: ["level-3", "level-4"],
    skills: ["measurement"],
    ageRange: "Ages 8–12",
    color: "#34D399",
    icon: "🧪",
    difficulty: 3,
    featured: false,
  },
];

// ── 15 High-Search-Volume Games (Number Sense, Algebra, Mixed Ops) ──────────

const EXTRA_GAMES: Game[] = [
  {
    slug: "number-bonds",
    title: "Number Bonds Blast",
    description: "Shoot the number that completes the bond to 10 or 20!",
    longDescription:
      "A space shooter where kids blast the correct number to complete each number bond. Bonds to 10 first, then 20. Number bonds are the single most searched kindergarten maths topic online — they are the foundation of all mental addition.",
    levels: ["level-1", "level-2"],
    skills: ["number-sense", "addition"],
    ageRange: "Ages 4–8",
    color: "#F43F5E",
    icon: "💥",
    difficulty: 1,
    featured: true,
  },
  {
    slug: "odd-even-sorter",
    title: "Odd & Even Sorter",
    description: "Sort the numbers into the odd and even bins — fast!",
    longDescription:
      "Fruit and vegetables tumble down a conveyor belt. Kids must sort them into odd and even baskets before they fall off the edge. Builds instant recognition of odd and even numbers from 1 to 100.",
    levels: ["level-1", "level-2"],
    skills: ["number-sense", "counting"],
    ageRange: "Ages 5–8",
    color: "#8B5CF6",
    icon: "🔁",
    difficulty: 1,
    featured: false,
  },
  {
    slug: "greater-or-less",
    title: "Greater or Less?",
    description: "Choose the correct sign — greater than, less than, or equal!",
    longDescription:
      "Two numbers appear on a balance scale. Kids drag the correct alligator mouth (>, <, =) between them. Covers single digits, double digits, three-digit numbers, decimals, and fractions as difficulty increases.",
    levels: ["level-1", "level-2", "level-3"],
    skills: ["number-sense", "counting"],
    ageRange: "Ages 5–10",
    color: "#06B6D4",
    icon: "⚖️",
    difficulty: 1,
    featured: false,
  },
  {
    slug: "rounding-roundup",
    title: "Rounding Roundup",
    description: "Round up the numbers and herd them to the right pen!",
    longDescription:
      "Numbers are cattle and kids are the ranch hand! Round numbers to the nearest 10, 100, or 1000 and herd them into the correct pen. One of the most consistently searched elementary maths topics — this game makes the rounding rule finally click.",
    levels: ["level-2", "level-3"],
    skills: ["number-sense"],
    ageRange: "Ages 7–10",
    color: "#F59E0B",
    icon: "🤠",
    difficulty: 2,
    featured: false,
  },
  {
    slug: "roman-numerals",
    title: "Roman Numeral Ruins",
    description: "Decode the Roman numerals carved into the ancient ruins!",
    longDescription:
      "An archaeology adventure! Kids explore ancient ruins and decode Roman numerals engraved on stones and columns. Covers I, V, X, L, C and their combinations. One of the most searched upper-elementary topics with very few good free games online.",
    levels: ["level-3", "level-4"],
    skills: ["number-sense", "counting"],
    ageRange: "Ages 8–12",
    color: "#A16207",
    icon: "🏛️",
    difficulty: 3,
    featured: false,
  },
  {
    slug: "order-of-operations",
    title: "Operation Order",
    description: "Solve equations in the right order — BODMAS rules the game!",
    longDescription:
      "A robot needs instructions in the right order to function. Solve multi-step equations using the correct order of operations (BODMAS/PEMDAS). Covers brackets, multiplication, division, addition, and subtraction. A highly searched upper-elementary topic.",
    levels: ["level-4"],
    skills: ["algebra", "mixed-operations"],
    ageRange: "Ages 10–12",
    color: "#6366F1",
    icon: "🤖",
    difficulty: 4,
    featured: false,
  },
  {
    slug: "negative-numbers",
    title: "Below Zero",
    description: "Dive below zero and explore negative numbers!",
    longDescription:
      "A deep-sea diving game where the ocean floor is below zero. Kids place negative numbers on a number line, compare negative and positive values, and solve simple addition and subtraction involving negatives. Temperature and banking contexts used throughout.",
    levels: ["level-4"],
    skills: ["number-sense", "counting"],
    ageRange: "Ages 10–12",
    color: "#0EA5E9",
    icon: "🌊",
    difficulty: 4,
    featured: false,
  },
  {
    slug: "percentage-planet",
    title: "Percentage Planet",
    description: "Find the percentage to power the rocket and escape the planet!",
    longDescription:
      "To fuel the rocket and escape Percentage Planet, kids must calculate percentages of amounts, convert between fractions, decimals, and percentages, and find percentage increases and decreases. One of the most searched upper-elementary and middle school maths topics.",
    levels: ["level-4"],
    skills: ["fractions", "decimals"],
    ageRange: "Ages 10–12",
    color: "#7C3AED",
    icon: "🪐",
    difficulty: 4,
    featured: false,
  },
  {
    slug: "3d-shape-explorer",
    title: "3D Shape Explorer",
    description: "Identify 3D shapes and count their faces, edges, and vertices!",
    longDescription:
      "Rotate and explore 3D shapes in an interactive model viewer. Identify cubes, spheres, cylinders, cones, pyramids, and prisms. Count faces, edges, and vertices. Connects 2D shape knowledge to three-dimensional geometry — a commonly searched curriculum topic.",
    levels: ["level-2", "level-3"],
    skills: ["geometry"],
    ageRange: "Ages 6–10",
    color: "#3B82F6",
    icon: "🎲",
    difficulty: 2,
    featured: false,
  },
  {
    slug: "prime-time",
    title: "Prime Time",
    description: "Sort the prime numbers from the composites before time runs out!",
    longDescription:
      "Numbers appear on screen at increasing speed. Kids must quickly sort them into prime or composite groups. Then, a factor tree mode lets them find prime factors step by step. Covers primes up to 100 and prime factorization.",
    levels: ["level-4"],
    skills: ["number-sense", "multiplication"],
    ageRange: "Ages 10–12",
    color: "#10B981",
    icon: "🔑",
    difficulty: 4,
    featured: false,
  },
  {
    slug: "algebra-island",
    title: "Algebra Island",
    description: "Solve for the missing letter and unlock the treasure chest!",
    longDescription:
      "On a tropical island, treasure chests are locked with algebra puzzles. Solve simple one-step equations (e.g. x + 4 = 9) and one-variable expressions. Introduces pre-algebra concepts in a story-driven format. One of the most searched middle school entry-level topics.",
    levels: ["level-4"],
    skills: ["algebra"],
    ageRange: "Ages 10–12",
    color: "#6366F1",
    icon: "🏝️",
    difficulty: 4,
    featured: false,
  },
  {
    slug: "mixed-maths-challenge",
    title: "Mixed Maths Challenge",
    description: "Spin the wheel — any operation could come up! Ready for anything?",
    longDescription:
      "A game show where the wheel spins to a random operation — addition, subtraction, multiplication, or division. Kids solve whatever comes up in a time-limited challenge. Builds the mental flexibility that standardised tests and real-world maths actually require.",
    levels: ["level-3", "level-4"],
    skills: ["mixed-operations"],
    ageRange: "Ages 8–12",
    color: "#14B8A6",
    icon: "🎡",
    difficulty: 3,
    featured: false,
  },
  {
    slug: "sequence-detective",
    title: "Sequence Detective",
    description: "Crack the code by completing the number sequence!",
    longDescription:
      "A detective agency with a twist — every case is solved by completing a tricky number sequence. Arithmetic sequences (add or subtract a fixed amount), geometric sequences (multiply), and Fibonacci-style patterns all appear. Builds algebraic thinking in a puzzle format.",
    levels: ["level-2", "level-3", "level-4"],
    skills: ["algebra", "counting"],
    ageRange: "Ages 6–12",
    color: "#F97316",
    icon: "🔍",
    difficulty: 2,
    featured: false,
  },
  {
    slug: "lightning-maths",
    title: "Lightning Maths",
    description: "Answer as fast as you can — race the lightning bolt!",
    longDescription:
      "A pure, adrenaline-driven mental maths speed game. Choose your level and operation, then solve as many problems as possible before the timer runs out. Beat your personal record each session. Proven to build maths fluency faster than any other format — and one of the most searched game types online.",
    levels: ["level-2", "level-3", "level-4"],
    skills: ["mixed-operations"],
    ageRange: "Ages 6–12",
    color: "#FBBF24",
    icon: "⚡",
    difficulty: 2,
    featured: true,
  },
  {
    slug: "compare-numbers",
    title: "Number Comparison Tower",
    description: "Stack numbers from smallest to largest — build the tallest tower!",
    longDescription:
      "Build a tower by stacking number blocks from smallest to largest. Covers whole numbers, decimals, fractions, and negative numbers at different difficulty settings. Develops number ordering fluency which underpins all four operations and is a constant source of parent and teacher searches.",
    levels: ["level-1", "level-2", "level-3"],
    skills: ["number-sense", "counting"],
    ageRange: "Ages 4–10",
    color: "#EC4899",
    icon: "🏗️",
    difficulty: 1,
    featured: false,
  },
];

// Game #50 — Symmetry Studio (high search volume geometry/art crossover topic)
const GAME_50: Game[] = [
  {
    slug: "symmetry-studio",
    title: "Symmetry Studio",
    description: "Draw the mirror image and complete the symmetrical design!",
    longDescription:
      "Kids are given half a shape, pattern, or picture and must draw the mirror image to complete it. Covers lines of symmetry, rotational symmetry, and reflective symmetry across all four quadrants. One of the most consistently searched geometry topics in primary school — and very few engaging free games exist for it.",
    levels: ["level-2", "level-3"],
    skills: ["geometry", "number-sense"],
    ageRange: "Ages 6–10",
    color: "#EC4899",
    icon: "🪞",
    difficulty: 2,
    featured: false,
  },
];

export const GAMES: Game[] = [...BASE_GAMES, ...EXTRA_GAMES, ...GAME_50];

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
