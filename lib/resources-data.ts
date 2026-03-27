export interface DownloadableResource {
  slug: string;
  title: string;
  desc: string;
  fullDesc: string;
  icon: string;
  tag: string;
  tagColor: string;
  pages: number;
  gradeRange: string;
  content: ResourceContent;
}

export interface ResourceContent {
  subtitle: string;
  sections: ResourceSection[];
}

export interface ResourceSection {
  heading: string;
  type: "table" | "grid" | "list" | "chart" | "flashcards";
  data: string[][] | string[] | Record<string, string[] | string[][]>;
}

export const DOWNLOADABLE_RESOURCES: DownloadableResource[] = [
  {
    slug: "common-core-standards",
    title: "Common Core Math Standards",
    desc: "Full K–6 math standards breakdown with learning objectives for each grade level.",
    fullDesc: "A complete reference guide covering all Common Core Math Standards from Kindergarten through Grade 6. Use this as a planning tool, parent communication resource, or curriculum alignment checklist.",
    icon: "📋",
    tag: "Standards",
    tagColor: "#7c3aed",
    pages: 2,
    gradeRange: "K–6",
    content: {
      subtitle: "Complete Learning Objectives by Grade Level",
      sections: [
        {
          heading: "Kindergarten — Counting & Operations",
          type: "list",
          data: [
            "Count to 100 by ones and tens",
            "Count forward from any given number",
            "Write numbers from 0–20",
            "Understand the relationship between numbers and quantities",
            "Compare two groups of objects (more, less, equal)",
            "Fluently add and subtract within 5",
            "Identify and describe shapes (squares, circles, triangles, rectangles)",
            "Describe objects using position words (above, below, beside, in front, behind)",
          ],
        },
        {
          heading: "Grade 1 — Number & Operations in Base Ten",
          type: "list",
          data: [
            "Count to 120 starting at any number",
            "Understand place value (tens and ones)",
            "Add within 100 using concrete models",
            "Subtract multiples of 10 from multiples of 10",
            "Measure lengths of objects using non-standard units",
            "Tell and write time in hours and half-hours",
            "Organize and represent data with up to three categories",
            "Distinguish between defining and non-defining attributes of shapes",
          ],
        },
        {
          heading: "Grade 2 — Measurement & Data",
          type: "list",
          data: [
            "Fluently add and subtract within 100",
            "Add up to four two-digit numbers",
            "Understand place value to the hundreds",
            "Measure and estimate lengths using standard units",
            "Relate addition and subtraction to length",
            "Tell time to the nearest 5 minutes",
            "Solve word problems involving dollar bills, quarters, dimes, nickels, and pennies",
            "Partition circles and rectangles into halves, thirds, and fourths",
          ],
        },
        {
          heading: "Grade 3 — Multiplication & Fractions",
          type: "list",
          data: [
            "Interpret products and quotients of whole numbers",
            "Fluently multiply and divide within 100",
            "Solve problems involving the four operations",
            "Understand unit fractions on a number line",
            "Explain equivalence of fractions and compare fractions",
            "Tell time to the nearest minute",
            "Measure and estimate liquid volumes and masses",
            "Understand concepts of area using unit squares",
            "Recognize and classify polygons",
          ],
        },
        {
          heading: "Grade 4 — Multi-digit Arithmetic",
          type: "list",
          data: [
            "Generalize place value for multi-digit whole numbers",
            "Fluently add and subtract multi-digit numbers",
            "Multiply a whole number of up to four digits by a one-digit number",
            "Find factors and multiples for numbers 1–100",
            "Compare two fractions with different numerators and different denominators",
            "Add and subtract fractions with like denominators",
            "Multiply a fraction by a whole number",
            "Convert measurements within a single system",
            "Draw and identify lines and angles",
          ],
        },
        {
          heading: "Grade 5 — Fractions & Decimals",
          type: "list",
          data: [
            "Write and interpret numerical expressions",
            "Analyze patterns and relationships",
            "Understand the place value system to thousandths",
            "Perform operations with multi-digit numbers and decimals",
            "Add, subtract, multiply, and divide fractions",
            "Convert measurement units within given system",
            "Represent and interpret data on a line plot",
            "Understand properties of two-dimensional figures",
            "Graph points on a coordinate plane",
          ],
        },
        {
          heading: "Grade 6 — Ratios & Early Algebra",
          type: "list",
          data: [
            "Understand ratio concepts and use ratio reasoning",
            "Apply understanding of multiplication and division to divide fractions",
            "Compute fluently with multi-digit numbers and decimals",
            "Find greatest common factor and least common multiple",
            "Apply and extend understanding of numbers to negative numbers",
            "Write and evaluate expressions with variables",
            "Understand solving equations and inequalities",
            "Represent and analyze quantitative relationships",
            "Solve problems involving area, surface area, and volume",
          ],
        },
      ],
    },
  },
  {
    slug: "times-tables-chart",
    title: "Times Tables Practice Chart",
    desc: "Printable multiplication chart for 1×1 through 12×12. Perfect for refrigerator display.",
    fullDesc: "A beautiful, color-coded 12×12 multiplication chart with practice exercises. Designed to be printed and displayed where your child can reference it while playing games and doing homework.",
    icon: "📊",
    tag: "Printable",
    tagColor: "#06b6d4",
    pages: 1,
    gradeRange: "2–5",
    content: {
      subtitle: "Complete 12×12 Multiplication Reference Chart",
      sections: [
        {
          heading: "Full Times Table Chart (1–12)",
          type: "chart",
          data: {
            headers: ["×", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            rows: [
              ["1", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
              ["2", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24"],
              ["3", "3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"],
              ["4", "4", "8", "12", "16", "20", "24", "28", "32", "36", "40", "44", "48"],
              ["5", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60"],
              ["6", "6", "12", "18", "24", "30", "36", "42", "48", "54", "60", "66", "72"],
              ["7", "7", "14", "21", "28", "35", "42", "49", "56", "63", "70", "77", "84"],
              ["8", "8", "16", "24", "32", "40", "48", "56", "64", "72", "80", "88", "96"],
              ["9", "9", "18", "27", "36", "45", "54", "63", "72", "81", "90", "99", "108"],
              ["10", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100", "110", "120"],
              ["11", "11", "22", "33", "44", "55", "66", "77", "88", "99", "110", "121", "132"],
              ["12", "12", "24", "36", "48", "60", "72", "84", "96", "108", "120", "132", "144"],
            ],
          },
        },
        {
          heading: "Quick Tricks to Remember",
          type: "list",
          data: [
            "× 1: Any number times 1 equals itself (identity property)",
            "× 2: Double the number (same as adding it to itself)",
            "× 5: Count by 5s — the answer always ends in 0 or 5",
            "× 9: Fingers trick! Fold down the Nth finger — left digits = tens, right digits = ones",
            "× 10: Just add a zero to the end of the number",
            "× 11: Up to 9×11, repeat the digit (e.g., 4×11=44). For 10–12, add the digits",
            "Squares: 1,4,9,16,25,36,49,64,81,100,121,144 — memorize these!",
            "Commutative: 6×7 = 7×6 — knowing one fact gives you two!",
          ],
        },
        {
          heading: "Daily Practice Challenges",
          type: "list",
          data: [
            "Monday: Practice all × 2 and × 5 facts (20 total)",
            "Tuesday: Practice all × 3 and × 4 facts",
            "Wednesday: Practice all × 6 and × 7 facts",
            "Thursday: Practice all × 8 and × 9 facts",
            "Friday: Mixed quiz — 20 random facts timed in 2 minutes",
            "Weekend: Play Times Table Rocket game to reinforce the week's learning",
          ],
        },
      ],
    },
  },
  {
    slug: "math-anxiety-guide",
    title: "Parent's Math Anxiety Guide",
    desc: "How to model a positive math attitude and support your child's learning at home.",
    fullDesc: "A research-backed guide for parents on recognizing and reducing math anxiety. Includes conversation starters, daily routines, and strategies to build a positive math environment at home.",
    icon: "❤️",
    tag: "Guide",
    tagColor: "#ec4899",
    pages: 2,
    gradeRange: "All Ages",
    content: {
      subtitle: "Building a Positive Math Environment at Home",
      sections: [
        {
          heading: "Signs Your Child May Have Math Anxiety",
          type: "list",
          data: [
            "Avoids or delays math homework more than other subjects",
            "Physical symptoms on math test days (stomachache, headache)",
            "Says 'I'm stupid at math' or 'Math is not for me'",
            "Cries or has meltdowns during math practice",
            "Understands concepts at home but freezes during tests",
            "Takes much longer than expected on simple calculations",
            "Refuses to attempt problems declaring 'it's too hard' immediately",
            "Shows dramatic performance drop in timed math activities",
          ],
        },
        {
          heading: "7 Proven Strategies for Parents",
          type: "list",
          data: [
            "1. NEVER say 'I was bad at math too' — this creates a fixed mindset",
            "2. Praise process, not results: 'I love how you kept trying different methods'",
            "3. Start each session with 2–3 problems you KNOW they can solve (build confidence first)",
            "4. Remove time pressure from home practice — let them think without a clock",
            "5. Play math games together — games lower emotional stakes dramatically",
            "6. Talk about famous people who struggled with math before succeeding",
            "7. Communicate with their teacher — anxiety needs a team approach",
          ],
        },
        {
          heading: "Daily Conversation Starters (Use These!)",
          type: "list",
          data: [
            "'If we split this pizza equally between us, how many slices do we each get?'",
            "'We have $20 — if this toy costs $13, how much change will we get?'",
            "'How many minutes until bedtime? Can you work that out?'",
            "'This recipe makes 24 cookies but we only want 12 — how do we change it?'",
            "'I counted 27 cars in the parking lot — can you double that?'",
            "'Which is the better deal — 3 for $5 or 2 for $3?'",
          ],
        },
        {
          heading: "Creating a Positive Math Environment",
          type: "list",
          data: [
            "Post the times table chart somewhere visible (not threatening, just available)",
            "Keep a jar of beans/coins for counting and problem-solving games",
            "Play board games involving numbers (Monopoly, Yahtzee, Uno)",
            "Cook together and involve your child in measuring and doubling recipes",
            "Point out math in the real world: 'Look — that building is a rectangular prism!'",
            "Celebrate small wins specifically: 'You got all your 7× facts right!'",
            "Normalize mistakes: 'Oops, I added wrong. Let me try again. It happens!'",
          ],
        },
      ],
    },
  },
  {
    slug: "classroom-game-guide",
    title: "Classroom Game Integration Guide",
    desc: "A teacher's guide to using math games during center time, transitions, and early finisher activities.",
    fullDesc: "A practical guide for K–6 teachers on integrating digital and physical math games into the classroom. Includes rotation schedules, differentiation strategies, and assessment ideas.",
    icon: "🏫",
    tag: "Teachers",
    tagColor: "#f59e0b",
    pages: 2,
    gradeRange: "K–6",
    content: {
      subtitle: "Integrating Math Games Into Your Classroom Routine",
      sections: [
        {
          heading: "When to Use Math Games in Your Schedule",
          type: "list",
          data: [
            "Morning Warm-Up (5 min): One quick game question on the board as students settle",
            "Math Centers (15–20 min): Rotate groups through digital game stations weekly",
            "Transitions (3–5 min): Quick mental math game while moving between subjects",
            "Early Finishers: Game library bookmarked on classroom devices for fast finishers",
            "Review Days: Whole-class competitive game mode before assessments",
            "Reward Time: Friday afternoon game time as a class reward for meeting goals",
          ],
        },
        {
          heading: "Suggested Weekly Center Rotation",
          type: "list",
          data: [
            "Monday Center: Counting & Number Sense games (Number Pop, Balloon Count)",
            "Tuesday Center: Addition & Subtraction games (Addition Quest, Subtraction Safari)",
            "Wednesday Center: Multiplication games (Times Table Rocket, Multiplication Maze)",
            "Thursday Center: Fractions & Decimals (Fraction Pizza, Decimal Dash)",
            "Friday Center: Geometry or Word Problems (Geo Builder, Math Story Quest)",
            "Tip: Keep groups to 2–3 students per device for peer collaboration",
          ],
        },
        {
          heading: "Differentiation Strategies",
          type: "list",
          data: [
            "Below level: Assign Level 1 (Kindergarten) games regardless of grade — build fluency first",
            "On level: Use grade-appropriate level games aligned to current unit",
            "Above level: Challenge with the next level up or mixed operation games",
            "ELL students: Counting and visual games require less language — great entry point",
            "Pair struggling students with confident peers for collaborative play",
            "Use game screenshots as discussion prompts: 'How did you solve that?'",
          ],
        },
        {
          heading: "Quick Assessment Ideas Using Game Results",
          type: "list",
          data: [
            "Ask students to write 3 problems from the game in their math journal",
            "Have them explain their strategy for one game question verbally",
            "Use game categories as exit ticket topics: 'Write your own addition story problem'",
            "Track which types of questions students consistently get wrong — reteach those concepts",
            "Use game performance as conversation starter at parent conferences",
            "Have students teach a game rule to a partner — teaching deepens understanding",
          ],
        },
      ],
    },
  },
  {
    slug: "fraction-visual-models",
    title: "Fraction Visual Models",
    desc: "Printable fraction bars, circles, and number lines for hands-on fraction exploration.",
    fullDesc: "A complete set of visual fraction models including fraction bars (halves through twelfths), fraction circles, and number lines from 0 to 1. Print, cut, and use for hands-on fraction exploration.",
    icon: "🍕",
    tag: "Printable",
    tagColor: "#10b981",
    pages: 2,
    gradeRange: "2–5",
    content: {
      subtitle: "Visual Models for Understanding Fractions",
      sections: [
        {
          heading: "Fraction Bars — Cut and Compare",
          type: "list",
          data: [
            "1 whole  ████████████████████████████████",
            "1/2      ████████████████  |  ████████████████",
            "1/3      ██████████  |  ██████████  |  ██████████",
            "1/4      ████████  |  ████████  |  ████████  |  ████████",
            "1/5      ██████  |  ██████  |  ██████  |  ██████  |  ██████",
            "1/6      █████  |  █████  |  █████  |  █████  |  █████  |  █████",
            "1/8      ████ | ████ | ████ | ████ | ████ | ████ | ████ | ████",
            "1/10     ███|███|███|███|███|███|███|███|███|███",
            "1/12     ██|██|██|██|██|██|██|██|██|██|██|██",
          ],
        },
        {
          heading: "Key Fraction Equivalences to Know",
          type: "list",
          data: [
            "1/2  =  2/4  =  3/6  =  4/8  =  5/10  =  6/12",
            "1/3  =  2/6  =  3/9  =  4/12",
            "2/3  =  4/6  =  6/9  =  8/12",
            "1/4  =  2/8  =  3/12",
            "3/4  =  6/8  =  9/12",
            "1/5  =  2/10",
            "2/5  =  4/10",
            "3/5  =  6/10",
            "4/5  =  8/10",
          ],
        },
        {
          heading: "Number Line: From 0 to 1",
          type: "list",
          data: [
            "0 ────────────────────────────────── 1",
            "Halves:    0 ─────── 1/2 ─────── 1",
            "Fourths:   0 ── 1/4 ── 2/4 ── 3/4 ── 1",
            "Eighths:   0 ─ 1/8 ─ 2/8 ─ 3/8 ─ 4/8 ─ 5/8 ─ 6/8 ─ 7/8 ─ 1",
            "Thirds:    0 ──────── 1/3 ──────── 2/3 ──────── 1",
            "Sixths:    0 ─ 1/6 ─ 2/6 ─ 3/6 ─ 4/6 ─ 5/6 ─ 1",
            "Tip: Use a ruler to measure 10cm, then mark each fraction as that many centimetres",
          ],
        },
        {
          heading: "Practice Activities",
          type: "list",
          data: [
            "Cut out the fraction bars and sort them from smallest to largest piece",
            "Find two fraction bars that make exactly 1 whole when combined",
            "Which is larger — 3/4 or 2/3? Use fraction bars to find out visually",
            "How many 1/6 pieces equal 1/2? Count with your fraction bars",
            "Place 3/8 on the number line — is it closer to 0, 1/2, or 1?",
            "Find three different fractions equal to 1/2 using the equivalence chart",
          ],
        },
      ],
    },
  },
  {
    slug: "math-vocabulary-cards",
    title: "Math Vocabulary Cards",
    desc: "Illustrated math word wall cards for grades K–5. Perfect for ESL and visual learners.",
    fullDesc: "A comprehensive set of illustrated math vocabulary cards covering key terms from Kindergarten through Grade 5. Each card includes the term, a child-friendly definition, and a visual example.",
    icon: "📝",
    tag: "Printable",
    tagColor: "#3b82f6",
    pages: 3,
    gradeRange: "K–5",
    content: {
      subtitle: "Essential Math Vocabulary — K through Grade 5",
      sections: [
        {
          heading: "Numbers & Operations (K–2)",
          type: "list",
          data: [
            "ADD (+) — To combine two or more numbers to find the total. Example: 3 + 4 = 7",
            "SUBTRACT (−) — To take one number away from another. Example: 9 − 3 = 6",
            "SUM — The answer when you add numbers together. '3 + 5 = 8, the SUM is 8'",
            "DIFFERENCE — The answer when you subtract. '10 − 4 = 6, the DIFFERENCE is 6'",
            "EQUAL (=) — Having the same value. '5 + 3 is EQUAL to 8'",
            "ODD — A number that cannot be divided equally by 2. (1, 3, 5, 7, 9…)",
            "EVEN — A number that can be divided equally by 2. (2, 4, 6, 8, 10…)",
            "PLACE VALUE — The value of a digit based on its position. In 34: 3=tens, 4=ones",
          ],
        },
        {
          heading: "Multiplication & Division (Grades 3–4)",
          type: "list",
          data: [
            "MULTIPLY (×) — To add a number to itself a certain number of times. 3 × 4 = 12",
            "DIVIDE (÷) — To split into equal groups. 12 ÷ 3 = 4",
            "PRODUCT — The answer when you multiply. '3 × 4 = 12, the PRODUCT is 12'",
            "QUOTIENT — The answer when you divide. '12 ÷ 3 = 4, the QUOTIENT is 4'",
            "FACTOR — A number that divides evenly into another. Factors of 12: 1,2,3,4,6,12",
            "MULTIPLE — A number in a skip-counting sequence. Multiples of 3: 3,6,9,12,15…",
            "ARRAY — Objects arranged in equal rows and columns to show multiplication",
            "REMAINDER — What is left over after dividing equally. '13 ÷ 4 = 3 remainder 1'",
          ],
        },
        {
          heading: "Fractions & Decimals (Grades 3–5)",
          type: "list",
          data: [
            "FRACTION — A part of a whole, written as numerator/denominator. Example: 3/4",
            "NUMERATOR — The top number of a fraction — how many parts you have",
            "DENOMINATOR — The bottom number — how many equal parts the whole is split into",
            "EQUIVALENT FRACTIONS — Different fractions that represent the same amount. 1/2 = 2/4",
            "DECIMAL — A number with digits after the decimal point. 0.5 = one half",
            "PERCENT (%) — Parts per hundred. 50% = 50/100 = 1/2",
            "MIXED NUMBER — A whole number and a fraction together. Example: 2 and 3/4",
            "IMPROPER FRACTION — Numerator larger than denominator. Example: 7/4",
          ],
        },
        {
          heading: "Geometry & Measurement (Grades K–5)",
          type: "list",
          data: [
            "PERIMETER — The total distance around the outside of a shape",
            "AREA — The amount of space inside a shape, measured in square units",
            "VOLUME — The amount of space inside a 3D object, measured in cubic units",
            "ANGLE — The space between two lines that meet at a point, measured in degrees",
            "ACUTE — An angle smaller than 90 degrees",
            "OBTUSE — An angle larger than 90 degrees",
            "SYMMETRY — A shape has symmetry if it looks the same on both sides of a line",
            "PARALLEL — Lines that never meet, always the same distance apart",
            "PERPENDICULAR — Lines that meet at a right angle (90°)",
          ],
        },
      ],
    },
  },
];

export function getResourceBySlug(slug: string): DownloadableResource | undefined {
  return DOWNLOADABLE_RESOURCES.find((r) => r.slug === slug);
}

export const ALL_RESOURCE_SLUGS = DOWNLOADABLE_RESOURCES.map((r) => r.slug);
