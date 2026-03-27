export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  icon: string;
  color: string;
  sections: { heading?: string; body: string }[];
  tips?: string[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "why-math-games-work",
    title: "Why Math Games Are More Effective Than Worksheets",
    excerpt: "Research shows that game-based learning increases math retention by up to 40%. Here's the neuroscience behind why play is the most powerful teacher.",
    category: "Research",
    readTime: "5 min read",
    date: "March 15, 2025",
    icon: "🧠",
    color: "#7c3aed",
    sections: [
      { body: "For generations, math practice meant sitting quietly at a desk, pencil in hand, working through row after row of problems on a worksheet. It worked for some kids — but for many, it bred tedium, anxiety, and an enduring belief that 'I'm just not a math person.' What if there's a dramatically better way?" },
      { heading: "What the Research Says", body: "A landmark 2019 study from Stanford University found that students who practiced math through games retained concepts 40% more effectively than those using traditional drills. Why? Because games engage the brain's dopamine system — the same reward circuitry activated by accomplishment and discovery. Every correct answer in a game triggers a small dopamine hit that says 'do that again.'" },
      { heading: "Immediate Feedback Changes Everything", body: "Worksheets are handed in, marked overnight, and returned the next day — by which point the child has long moved on. Games provide feedback in milliseconds. When a child taps the wrong answer and sees it flash red, their brain immediately links the action to the outcome. This tight feedback loop is the single most powerful factor in accelerating learning." },
      { heading: "Anxiety Reduction Is Real", body: "Math anxiety affects up to 50% of children and adults. The physical symptoms — racing heart, sweaty palms, mental freeze — are identical to other anxiety responses. Games reframe the context. A child who freezes when told 'it's a test' will happily answer the same question when it means their rocket blasts higher. The math content is identical; the emotional context changes everything." },
      { heading: "Flow State and Deep Learning", body: "Psychologist Mihaly Csikszentmihalyi described 'flow' as a state of total absorption in a challenging but achievable task. Video game designers engineer flow deliberately — increasing difficulty just fast enough to stay ahead of mastery. The best math games do the same, keeping children in the sweet spot between boredom (too easy) and frustration (too hard)." },
    ],
    tips: [
      "Choose games that match your child's current level — not too easy, not overwhelming",
      "Play alongside your child occasionally and let them explain the math to you",
      "Celebrate effort and strategy, not just correct answers",
      "Limit sessions to 15–20 minutes to maintain engagement",
    ],
  },
  {
    slug: "times-tables-guide",
    title: "The Complete Guide to Teaching Times Tables",
    excerpt: "From skip counting to the nines trick — a step-by-step parent's guide for making multiplication tables click for every type of learner.",
    category: "Guide",
    readTime: "8 min read",
    date: "March 8, 2025",
    icon: "✖️",
    color: "#06b6d4",
    sections: [
      { body: "Multiplication tables are the foundation of almost all higher math. A child who has fluent recall of their times tables can focus mental energy on understanding concepts rather than computing basic facts. Here's how to build that fluency without the tears." },
      { heading: "Start with Skip Counting", body: "Before formal multiplication, build the mental number patterns through skip counting. Count by 2s while clapping. Count by 5s while jumping. Count by 10s with finger taps. This muscular, rhythmic practice builds the neural pathways that multiplication facts will eventually slot into." },
      { heading: "The Order That Works", body: "Don't tackle times tables in order 1 through 12. Instead, start with 2s (already built from skip counting), then 10s (just add a zero), then 5s (halfway to 10s), then 1s (trivial once understood), then 11s (visual pattern through 9×11), then squares (3×3, 4×4 — memorable as perfect squares), and finally the remaining facts. By this point, only 15 unique facts remain!" },
      { heading: "Visual and Tactile Learners", body: "Many children struggle with rote memorization but excel at visual patterns. Show them that multiplication is just an array — 3×4 is a rectangle of dots, 3 rows with 4 in each row. Use graph paper to draw rectangles. Have them build arrays with LEGO bricks. The area model makes multiplication visual and spatial, not just symbolic." },
      { heading: "The Nines Trick That Blows Kids' Minds", body: "Hold up all 10 fingers. To multiply 9 × 4, fold down your 4th finger. You have 3 fingers to the left and 6 to the right: 36. This works for 9 × 1 through 9 × 10. Show this trick once and most kids will remember the nines table forever. The physical manipulation creates a memorable experience that abstract drill never does." },
      { heading: "Games Beat Flashcards", body: "Flashcards have their place, but the high-stakes feel of being quizzed triggers anxiety in many children. Games create the same repetition with much lower emotional stakes. Our Times Table Rocket game, for example, requires 10 correct multiplication facts to 'blast off' — giving the repetition needed for fluency in a context that feels like fun." },
    ],
    tips: [
      "Practice for 10 minutes daily rather than 1 hour weekly",
      "Master one table completely before moving to the next",
      "Use the commutative property: if you know 3×7, you know 7×3",
      "Make up silly rhymes: 'Six times eight fell off a plate — 48!'",
    ],
  },
  {
    slug: "math-anxiety-kids",
    title: "How to Help Your Child Overcome Math Anxiety",
    excerpt: "Up to 50% of students experience math anxiety. Discover the signs, causes, and proven strategies to rebuild confidence and make math fun again.",
    category: "Parenting",
    readTime: "6 min read",
    date: "February 28, 2025",
    icon: "❤️",
    color: "#ec4899",
    sections: [
      { body: "Your child understands the concept perfectly at home. But the moment a math test appears, they freeze. Their mind goes blank. They erase and re-erase until the paper tears. This isn't a learning disability — it's math anxiety, and it affects nearly half of all students at some point in their schooling." },
      { heading: "Recognizing Math Anxiety", body: "Math anxiety is a real, measurable psychological response. Signs include: avoidance of math homework, physical complaints (stomachaches, headaches) on math test days, negative self-talk ('I'm stupid at math'), tearfulness or frustration during math practice, and a marked contrast between their understanding in casual conversation vs. formal assessment." },
      { heading: "The Vicious Cycle", body: "Math anxiety creates a vicious cycle: anxiety impairs working memory (the mental scratchpad we use to hold numbers while calculating), which leads to errors, which confirms the child's belief that they're bad at math, which increases anxiety. Breaking this cycle requires addressing both the emotional response and the skill gap." },
      { heading: "What Parents Should Never Do", body: "Never say 'I was bad at math too — it runs in the family.' This normalizes a fixed mindset and removes the child's sense of agency. Avoid timed pressure drills at home if your child already shows anxiety. Don't compare siblings. And critically — never show your own math anxiety to your child. If you struggle, say 'I find this tricky too — let's figure it out together.'" },
      { heading: "Rebuilding Confidence: A Step-by-Step Approach", body: "Start several levels below where the anxiety is. If they're anxious about multiplication, go back to addition games where they feel competent. Rebuild the experience of success. Gradually increase challenge while keeping the emotional safety high. Use games rather than worksheets — the lower stakes dramatically reduce anxiety triggers." },
      { heading: "Growth Mindset Language", body: "Carol Dweck's research on growth mindset is particularly powerful for math anxious children. Replace 'I can't do this' with 'I can't do this yet.' Praise process: 'I love how you tried three different strategies' rather than 'You're so smart.' Normalize mistakes by sharing your own: 'Oops! I added wrong — let me try again.'" },
    ],
    tips: [
      "Create a 'calm corner' for math homework with minimal time pressure",
      "Start every session with problems you KNOW they can solve easily",
      "Talk about how mathematicians make mistakes constantly",
      "Consider speaking with their teacher — anxiety often needs a team approach",
    ],
  },
  {
    slug: "fractions-made-easy",
    title: "Fractions Made Easy: Visual Strategies for Kids",
    excerpt: "Fractions trip up more kids than almost any other topic. These visual, hands-on strategies make the abstract concept of fractions finally click.",
    category: "Teaching",
    readTime: "7 min read",
    date: "February 20, 2025",
    icon: "🍕",
    color: "#10b981",
    sections: [
      { body: "Ask most adults what they remember struggling with in elementary math, and fractions will be near the top of the list. Yet fractions are everywhere in real life — cooking, telling time, splitting bills, reading music. The problem isn't fractions; it's how they're typically taught." },
      { heading: "Start with Real Objects, Not Symbols", body: "The fraction '1/2' is a symbol. Before children encounter that symbol, they need dozens of physical experiences of halving: folding paper in half, cutting an apple in half, pouring half a glass of water. The symbol should come last — as a shorthand for an experience already deeply understood." },
      { heading: "Pizza, Chocolate Bars, and Pie", body: "Food is the best fraction manipulative in existence. When you cut a pizza into 8 slices and your child takes 3, pause. 'You have 3 out of 8 slices — that's three-eighths of the pizza. Can you write that?' The numerator (3) is how many you have; the denominator (8) is how many the whole thing was divided into." },
      { heading: "The Number Line Revelation", body: "Most children learn fractions only as parts of a shape (the pie model). But fractions also live on the number line, and understanding this is crucial for later work with decimals and percentages. Draw a number line from 0 to 1. Where does 1/2 go? Mark it. Where does 1/4 go? 3/4? This spatial understanding prevents later confusion about which fraction is larger." },
      { heading: "Equivalent Fractions: The Scaling Insight", body: "Children struggle with equivalent fractions because they look different but represent the same amount. The key insight: multiplying the numerator and denominator by the same number is just scaling — it's the same pizza, just cut into more pieces. 1/2 pizza and 2/4 pizza taste identical." },
      { heading: "Comparing Fractions Without Common Denominators", body: "Before formal methods, teach intuition. Is 3/4 or 2/3 bigger? Think: 3/4 means one piece missing from 4; 2/3 means one piece missing from 3. Missing a piece from a pizza cut in 4 means you're missing less (a smaller piece). So 3/4 is bigger. This reasoning develops number sense that procedural rules never do." },
    ],
    tips: [
      "Cook with fractions — halve recipes, double recipes, use measuring cups",
      "Keep a set of fraction bars or circles as physical manipulatives at home",
      "Play the fraction pizza and fraction match games to cement equivalence",
      "Don't rush to rules — spend extra time at the concrete (physical) stage",
    ],
  },
  {
    slug: "kindergarten-math-skills",
    title: "10 Essential Math Skills Every Kindergartener Needs",
    excerpt: "Before formal school math begins, these foundational skills set your child up for success. Here's how to build them through play and daily life.",
    category: "Early Learning",
    readTime: "4 min read",
    date: "February 12, 2025",
    icon: "🌱",
    color: "#f59e0b",
    sections: [
      { body: "Research in developmental mathematics is clear: the math skills a child brings to kindergarten are one of the strongest predictors of their long-term academic success. The good news? Building these skills is almost entirely about play, conversation, and everyday moments — not flashcards or drills." },
      { heading: "1. Counting with One-to-One Correspondence", body: "Many children can recite '1, 2, 3, 4, 5' but don't yet connect each number word to exactly one object. Practice by counting physical things — steps on the stairs, blueberries on the plate, ducks in the pond — touching each item as you count." },
      { heading: "2. Recognizing Numerals 0–10", body: "Can your child look at the number '7' and say 'seven'? This symbol recognition is separate from counting and needs its own practice. Number books, puzzles, and refrigerator magnets all help." },
      { heading: "3. Understanding 'More' and 'Less'", body: "Before formal comparison, children need language for it. 'Which pile has more? Which has less? Are they the same?' Comparing quantities of physical objects builds the intuition that number lines formalize later." },
      { heading: "4. Simple Shapes", body: "Circles, squares, triangles, rectangles — children should recognize and name these by sight. More importantly, they should be able to find them in the real world: the clock is a circle, the door is a rectangle, the sandwich is a triangle." },
      { heading: "5. Sorting and Patterns", body: "ABAB patterns (red, blue, red, blue) and sorting by color, size, or shape build the logical thinking that underlies all mathematical reasoning. Pattern recognition is the foundation of algebraic thinking." },
      { heading: "6–10: Building the Foundation", body: "Additional critical skills include: subitizing (recognizing small quantities without counting — seeing ●●● and knowing 'three' instantly), spatial reasoning (above/below, left/right, inside/outside), number conservation (understanding that 5 objects spread out is still 5), early addition through combining physical sets, and ordinal numbers (first, second, third, last)." },
    ],
    tips: [
      "Count everything in daily life — stairs, bites of food, cars passing",
      "Do puzzles together — they build spatial reasoning",
      "Point out numbers in the environment: street signs, prices, dates",
      "Sing counting songs and rhymes — rhythm aids memory",
    ],
  },
  {
    slug: "geometry-real-world",
    title: "Geometry Is Everywhere: Teaching Math Through the Real World",
    excerpt: "Shapes, angles, and areas are all around us. Here's how to turn everyday objects — buildings, food, nature — into geometry lessons kids love.",
    category: "Activities",
    readTime: "5 min read",
    date: "January 30, 2025",
    icon: "📐",
    color: "#3b82f6",
    sections: [
      { body: "One of the most powerful things any parent or teacher can do for a young mathematician is help them see math everywhere. Geometry is especially well-suited to this — because unlike algebra, you can literally point to it." },
      { heading: "Your Home is a Geometry Museum", body: "Start in the kitchen. The floor tiles are squares — count how many fit along one wall (area!). The cereal box is a rectangular prism. The can of tomatoes is a cylinder. The funnel is a cone. Name shapes, count sides, describe faces. This casual observation builds the vocabulary children need for formal geometry without any feeling of structured learning." },
      { heading: "Nature's Geometry", body: "Geometry didn't start with textbooks — it started with people observing the world. Honeycombs are perfect hexagons (the most efficient shape for packing). Spiderwebs are radial symmetry. Snowflakes have six-fold symmetry. Pine cones spiral in Fibonacci-sequence patterns. Take walks with your child and be geometry detectives." },
      { heading: "Architecture as a Classroom", body: "Look at buildings together. Point out columns (cylinders), arched doorways (semicircles), triangular roofs (triangular prisms), and windows (rectangles and sometimes hexagons or circles). Ask questions: 'Why do you think bridges are often made of triangles?' Because triangles are rigid — a fact with real engineering applications." },
      { heading: "Hands-On Area and Perimeter", body: "Let your child help measure a room before buying a rug. This is area applied: 'The room is 4 meters by 3 meters — we need 12 square meters of carpet.' Or measure the garden to calculate how much fencing you need: that's perimeter. Real constraints make abstract formulas immediately meaningful." },
      { heading: "Art as Geometry Practice", body: "Islamic geometric patterns, Celtic knots, and Mondrian-style grid art are all built on geometric principles. Have children create their own geometric art using a ruler and compass. Create tessellations (shapes that tile without gaps) — investigating why some shapes tile and others don't is genuine mathematical exploration." },
    ],
    tips: [
      "Keep a 'geometry journal' where your child sketches shapes they find in nature",
      "Build with magnetic tiles or LEGO — 3D geometry through construction",
      "Use Google Maps satellite view to find geometric shapes in urban planning",
      "Cook geometry: cut sandwiches in triangles vs. rectangles — same area?",
    ],
  },
];

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

export const ALL_BLOG_SLUGS = BLOG_ARTICLES.map((a) => a.slug);
