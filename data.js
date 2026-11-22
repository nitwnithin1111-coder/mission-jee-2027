const FORMULAS_DATA = [
  // ==========================================
  // PHYSICS
  // ==========================================
  {
    id: "p1",
    subject: "physics",
    chapter: "Modern Physics",
    title: "Einstein's Photoelectric Equation",
    latex: "K_{\\text{max}} = h\\nu - \\phi_0 = eV_0",
    story: "Think of light as a machine-gun firing bullets (photons). Each photon hits one electron. The metal acts like a toll booth demanding a toll fee $\\phi_0$ (work function). Whatever energy is left over becomes the electron's kinetic speed. If photon energy is less than the toll fee, zero electrons escape—no matter how intense the light is!",
    funNote: "Kota Trap: Increasing intensity just increases the NUMBER of photo-electrons, NOT their maximum kinetic energy. Kinetic energy depends ONLY on frequency!",
    diagram: `<svg viewBox="0 0 240 100" class="w-full h-24 stroke-current text-indigo-400 fill-none">
      <rect x="20" y="70" width="200" height="15" fill="#334155" stroke="#64748b" rx="3"/>
      <text x="70" y="82" fill="#cbd5e1" font-size="9" font-family="sans-serif">Metal Surface (Work Function &phi;₀)</text>
      <path d="M40 10 L65 65" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
      <path d="M60 10 L85 65" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="45" y="25" fill="#fbbf24" font-size="10">Photon h&nu;</text>
      <circle cx="85" cy="65" r="4" fill="#60a5fa"/>
      <path d="M85 65 Q110 30 150 20" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
      <text x="120" y="30" fill="#38bdf8" font-size="10">e⁻ (K_max)</text>
    </svg>`
  },
  {
    id: "p2",
    subject: "physics",
    chapter: "Modern Physics",
    title: "Bohr's Quantization & Energy Levels",
    latex: "E_n = -\\frac{13.6 \\cdot Z^2}{n^2} \\text{ eV}, \\quad L = mvr = \\frac{nh}{2\\pi}",
    story: "Electrons aren't allowed to orbit anywhere they want; they are trapped on quantum stepping stones where their angular momentum is an integer multiple of $h/2\\pi$. The negative sign means the electron is bounded—it owes the nucleus energy. When $n \\to \\infty$, energy is 0 (the electron is finally free).",
    funNote: "Quick Trick: Ratio of energies $E_1 : E_2 : E_3 = -1 : -1/4 : -1/9$. Notice the gaps get squished together as $n$ goes up!",
    diagram: `<svg viewBox="0 0 200 100" class="w-full h-24 stroke-current text-slate-400 fill-none">
      <circle cx="100" cy="50" r="12" fill="#ef4444" stroke="#f87171"/>
      <text x="96" y="54" fill="#ffffff" font-size="10" font-weight="bold">+Z</text>
      <circle cx="100" cy="50" r="28" stroke="#64748b" stroke-dasharray="2,2"/>
      <circle cx="100" cy="50" r="44" stroke="#64748b" stroke-dasharray="2,2"/>
      <circle cx="128" cy="50" r="3" fill="#38bdf8"/>
      <text x="135" y="45" fill="#94a3b8" font-size="9">n=1 (-13.6eV)</text>
      <text x="145" y="70" fill="#94a3b8" font-size="9">n=2 (-3.4eV)</text>
    </svg>`
  },
  {
    id: "p3",
    subject: "physics",
    chapter: "Mechanics",
    title: "Work-Energy Theorem",
    latex: "W_{\\text{net}} = W_{\\text{conservative}} + W_{\\text{non-con}} + W_{\\text{pseudo}} = \\Delta K",
    story: "This is the most powerful weapon in mechanics. Never waste time integrating complicated paths if you can just tally up the work done by every single force in the universe and equate it to the change in kinetic energy $\\frac{1}{2}m(v_f^2 - v_i^2)$.",
    funNote: "Kota Trap: Don't forget pseudo force work if you are sitting in an accelerating non-inertial frame (like a lift or elevator)!",
    diagram: `<svg viewBox="0 0 200 80" class="w-full h-20 text-slate-400 fill-none">
      <path d="M20 70 L180 70" stroke="#475569" stroke-width="2"/>
      <rect x="40" y="45" width="30" height="25" fill="#3b82f6" rx="2"/>
      <text x="47" y="62" fill="#fff" font-size="10">m, v₁</text>
      <path d="M80 57 L110 57" stroke="#10b981" stroke-width="2"/>
      <text x="88" y="50" fill="#10b981" font-size="9">F_net</text>
      <rect x="140" y="45" width="30" height="25" fill="#6366f1" rx="2"/>
      <text x="147" y="62" fill="#fff" font-size="10">m, v₂</text>
    </svg>`
  },
  {
    id: "p4",
    subject: "physics",
    chapter: "Mechanics",
    title: "Moment of Inertia (Core Shapes)",
    latex: "I_{\\text{ring}} = MR^2, \\quad I_{\\text{disc}} = \\frac{1}{2}MR^2, \\quad I_{\\text{solid sphere}} = \\frac{2}{5}MR^2",
    story: "Moment of inertia is rotational laziness. The farther the mass is packed away from the center of rotation, the harder it is to spin. In a ring, 100% of the mass sits at distance $R$ (so $MR^2$). In a solid sphere, most mass is packed near the center, which is why it has the lowest fraction ($\\frac{2}{5}MR^2$).",
    funNote: "Rolling Race Question: If a ring, disc, and sphere race down an incline from rest, the solid sphere always wins because it has the lowest rotational inertia!",
    diagram: `<svg viewBox="0 0 240 70" class="w-full h-20 text-slate-400 fill-none">
      <circle cx="40" cy="35" r="22" stroke="#60a5fa" stroke-width="4"/>
      <text x="25" y="68" fill="#94a3b8" font-size="8">Ring (MR²)</text>
      <circle cx="120" cy="35" r="22" fill="#3b82f6" opacity="0.4" stroke="#60a5fa" stroke-width="2"/>
      <text x="102" y="68" fill="#94a3b8" font-size="8">Disc (1/2 MR²)</text>
      <circle cx="200" cy="35" r="22" fill="#6366f1" opacity="0.8" stroke="#818cf8" stroke-width="2"/>
      <text x="175" y="68" fill="#94a3b8" font-size="8">Sphere (2/5 MR²)</text>
    </svg>`
  },
  {
    id: "p5",
    subject: "physics",
    chapter: "Electrodynamics",
    title: "LCR Series Resonance & Quality Factor",
    latex: "\\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad Z_{\\text{min}} = R, \\quad Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}",
    story: "The inductor and capacitor are opposite rivals. The capacitor hates low frequencies; the inductor hates high frequencies. At the magic resonance frequency $\\omega_0$, their imaginary resistances (reactances) cancel each other out perfectly ($X_L = X_C$). The circuit becomes purely resistive, and current spikes to its absolute maximum!",
    funNote: "Why Q-factor matters: High Q means razor-sharp tuning (like tuning an FM radio without hearing static from neighboring stations).",
    diagram: null
  },
  {
    id: "p6",
    subject: "physics",
    chapter: "Thermodynamics",
    title: "First Law & Carnot Cycle Efficiency",
    latex: "\\Delta Q = \\Delta U + W, \\quad \\eta = 1 - \\frac{T_{\\text{cold}}}{T_{\\text{hot}}} = \\frac{W}{Q_{\\text{in}}}",
    story: "You can't win, and you can't even break even. Heat added ($\\Delta Q$) either warms up the internal kinetic vibration of molecules ($\\Delta U = nC_v\\Delta T$) or gets pushed out as piston work ($W$). A Carnot engine is the theoretical goddess of engines—efficiency depends solely on the temperature ratio of the source and sink.",
    funNote: "Trap: ALWAYS plug in temperatures in KELVIN ($T_K = T_C + 273.15$). Using Celsius will give you instant negative marks!",
    diagram: null
  },
  {
    id: "p7",
    subject: "physics",
    chapter: "Optics & Waves",
    title: "Young's Double Slit Fringe Width",
    latex: "\\beta = \\frac{\\lambda D}{d}, \\quad \\Delta x = d \\sin\\theta \\approx \\frac{yd}{D}",
    story: "Two ripples interfering on a pond. Bright fringes occur when the wave from one slit travels exactly an integer number of full wavelengths ($n\\lambda$) farther than the other. If you dip the whole setup in water of refractive index $\\mu$, wavelength shrinks to $\\lambda/\\mu$, so the fringe width squeezes together!",
    funNote: "Memory trick: Big $D$ (screen distance) is on TOP (big things up), tiny $d$ (slit gap) is on BOTTOM.",
    diagram: null
  },

  // ==========================================
  // CHEMISTRY
  // ==========================================
  {
    id: "c1",
    subject: "chemistry",
    chapter: "Physical Chemistry",
    title: "Nernst Equation (Electrochemistry)",
    latex: "E_{\\text{cell}} = E^0_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} Q \\quad \\text{at } 298\\text{ K}",
    story: "A battery produces voltage $E^0$ under pristine 1M standard conditions. As the reaction runs, products build up and reactants deplete, so reaction quotient $Q$ rises. The second term subtracts voltage until $E_{\\text{cell}} = 0$—at which point the battery is completely dead (equilibrium)!",
    funNote: "JEE Favorite: At equilibrium, $E_{\\text{cell}} = 0$, so $E^0_{\\text{cell}} = \\frac{0.0591}{n} \\log K_{\\text{eq}}$. Pure free marks if you remember this!",
    diagram: null
  },
  {
    id: "c2",
    subject: "chemistry",
    chapter: "Physical Chemistry",
    title: "First Order Kinetics & Half Life",
    latex: "k = \\frac{2.303}{t} \\log_{10}\\left(\\frac{A_0}{A_t}\\right), \\quad t_{1/2} = \\frac{0.693}{k}",
    story: "In first-order reactions (and all radioactive decays), the rate of decay depends only on how much you currently have. The half-life is completely INDEPENDENT of initial concentration. Whether you start with 1 kg or 1 gram, half of it disappears in the exact same time.",
    funNote: "Classic Shortcut: After $n$ half-lives, remaining amount is $A_0 / 2^n$. 75% completed = $2 \\times t_{1/2}$; 87.5% completed = $3 \\times t_{1/2}$; 99.9% completed $\\approx 10 \\times t_{1/2}$.",
    diagram: null
  },
  {
    id: "c3",
    subject: "chemistry",
    chapter: "Inorganic Chemistry",
    title: "Spin-Only Magnetic Moment",
    latex: "\\mu = \\sqrt{n(n + 2)} \\text{ B.M.}",
    story: "Each unpaired electron ($n$) is like a tiny spinning compass needle. If all electrons are paired in opposite spins, they cancel out (diamagnetic, $\\mu = 0$). If there are unpaired electrons, the compound gets pulled into magnetic fields (paramagnetic).",
    funNote: "Instant Calculation Hack: $n=1 \\to 1.73$; $n=2 \\to 2.83$; $n=3 \\to 3.87$; $n=4 \\to 4.90$; $n=5 \\to 5.92$. Notice the integer part ALWAYS matches $n$!",
    diagram: null
  },
  {
    id: "c4",
    subject: "chemistry",
    chapter: "Inorganic Chemistry",
    title: "Crystal Field Splitting (Octahedral vs Tetrahedral)",
    latex: "\\Delta_t = \\frac{4}{9} \\Delta_o, \\quad \\text{Octahedral: } t_{2g}^3 e_g^2",
    story: "When ligands approach a transition metal in an octahedron, they fly directly along the x, y, z axes. The $d_{x^2-y^2}$ and $d_{z^2}$ orbitals point right into their faces, so electrostatic repulsion kicks them high up into the high-energy $e_g$ set, while the off-axis $t_{2g}$ orbitals rest comfortably lower.",
    funNote: "Spectrochemical Series Shortcut: Carbon donors (CN⁻, CO) are ultra-strong field ligands; they force electrons to pair up even if they hate it!",
    diagram: `<svg viewBox="0 0 200 90" class="w-full h-24 text-slate-400 fill-none">
      <path d="M20 50 L50 50" stroke="#94a3b8" stroke-width="2"/>
      <text x="15" y="42" fill="#94a3b8" font-size="8">5 degenerate d</text>
      <path d="M70 50 L110 25" stroke="#64748b" stroke-dasharray="2,2"/>
      <path d="M70 50 L110 70" stroke="#64748b" stroke-dasharray="2,2"/>
      <path d="M120 25 L160 25" stroke="#ef4444" stroke-width="3"/>
      <text x="165" y="28" fill="#f87171" font-size="9">e_g (dx²-y², dz²)</text>
      <path d="M120 70 L170 70" stroke="#3b82f6" stroke-width="3"/>
      <text x="175" y="73" fill="#60a5fa" font-size="9">t_2g (dxy, dyz, dzx)</text>
      <path d="M140 28 L140 67" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="145" y="50" fill="#fbbf24" font-size="9">&Delta;_o</text>
    </svg>`
  },
  {
    id: "c5",
    subject: "chemistry",
    chapter: "Organic Chemistry",
    title: "SN1 vs SN2 Nucleophilic Substitution",
    latex: "\\text{Rate}_{\\text{SN1}} = k[R-X] \\text{ (2-step, carbocation)}, \\quad \\text{Rate}_{\\text{SN2}} = k[R-X][\\text{Nu}^-] \\text{ (1-step, backside)}",
    story: "SN1 is a polite breakup: the leaving group leaves first, leaving behind a flat, planar carbocation intermediate. The nucleophile can then attack from either side (racemization). SN2 is an ambush: the strong nucleophile kicks in from the exact back door while the leaving group is still attached, flipping the stereochemistry inside-out like an umbrella in a storm (Walden inversion).",
    funNote: "Substrate Preference: 3° favors SN1 (stable carbocation). 1° favors SN2 (no bulky groups blocking the backdoor).",
    diagram: null
  },
  {
    id: "c6",
    subject: "chemistry",
    chapter: "Organic Chemistry",
    title: "Aldol & Cannizzaro Test Condition",
    latex: "\\text{Aldol} \\iff \\ge 1 \\ \\alpha\\text{-H } (\\text{dil. NaOH}), \\quad \\text{Cannizzaro} \\iff \\text{Zero } \\alpha\\text{-H } (\\text{conc. 50\\% KOH})",
    story: "Aldol requires an acidic $\\alpha$-hydrogen so the base can pluck it off to make an enolate nucleophile. If an aldehyde (like formaldehyde or benzaldehyde) has ZERO $\\alpha$-hydrogens, it cannot do Aldol—instead, one molecule self-oxidizes to carboxylic acid and the other self-reduces to alcohol (Cannizzaro dismutation).",
    funNote: "Golden Rule: Benzaldehyde ($C_6H_5CHO$) + conc. KOH = Benzyl alcohol + Potassium benzoate!",
    diagram: null
  },

  // ==========================================
  // MATHEMATICS
  // ==========================================
  {
    id: "m1",
    subject: "math",
    chapter: "Coordinate Geometry",
    title: "Distance from Point to Line & Tangency",
    latex: "d = \\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}, \\quad \\text{Tangency to circle } x^2+y^2=r^2: \\ c^2 = r^2(1+m^2)",
    story: "Imagine dropping a plumb line straight onto the line $ax+by+c=0$. The numerator measures how far your point $(x_1, y_1)$ fails to satisfy the line equation. For a line $y = mx + c$ to touch a circle at exactly one point (tangent), the perpendicular distance from the center $(0,0)$ must equal the radius $r$.",
    funNote: "Parabola Tangent condition: For $y^2 = 4ax$, tangent is $y = mx + a/m$. Ellipse: $c^2 = a^2 m^2 + b^2$. Hyperbola: $c^2 = a^2 m^2 - b^2$.",
    diagram: `<svg viewBox="0 0 200 90" class="w-full h-24 text-slate-400 fill-none">
      <line x1="20" y1="80" x2="180" y2="20" stroke="#60a5fa" stroke-width="2"/>
      <circle cx="90" cy="20" r="4" fill="#f43f5e"/>
      <text x="96" y="20" fill="#fda4af" font-size="9">(x₁, y₁)</text>
      <line x1="90" y1="20" x2="114" y2="45" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="2,2"/>
      <text x="110" y="32" fill="#fb7185" font-size="8">d</text>
      <text x="30" y="70" fill="#93c5fd" font-size="8">ax + by + c = 0</text>
    </svg>`
  },
  {
    id: "m2",
    subject: "math",
    chapter: "Calculus",
    title: "Leibniz Rule for Differentiating Integrals",
    latex: "\\frac{d}{dx}\\int_{u(x)}^{v(x)} f(t) \\, dt = f(v(x))\\cdot v'(x) - f(u(x))\\cdot u'(x)",
    story: "You want to find the rate of change of an area whose fences are moving! Instead of integrating and then differentiating, plug the upper limit $v(x)$ into the function and multiply by the speed of the upper limit $v'(x)$, then subtract the lower limit equivalent.",
    funNote: "JEE Main loves this when combined with L'Hopital rule in 0/0 limit questions. When you see $\\lim_{x\\to 0} \\frac{\\int_0^{x^2} \\sin t \\, dt}{x^4}$, Leibniz is the ONLY sane path!",
    diagram: null
  },
  {
    id: "m3",
    subject: "math",
    chapter: "Calculus",
    title: "King's Property of Definite Integrals",
    latex: "\\int_a^b f(x) \\, dx = \\int_a^b f(a + b - x) \\, dx",
    story: "Flipping an area left-to-right doesn't change its total area! By replacing $x$ with $(a+b-x)$ and adding the new integral to the original integral ($2I$), nasty trigonometric terms or logarithms almost magically cancel into $1$.",
    funNote: "If the bounds are $0$ to $\\pi/2$ and the integrand is $\\frac{\\sin^n x}{\\sin^n x + \\cos^n x}$, answer is ALWAYS $(b-a)/2 = \\pi/4$ without writing any steps!",
    diagram: null
  },
  {
    id: "m4",
    subject: "math",
    chapter: "Vectors & 3D Geometry",
    title: "Shortest Distance Between Skew Lines",
    latex: "d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}",
    story: "Skew lines in 3D are non-parallel lines that never intersect (like two airplanes flying at different altitudes in different directions). The vector $\\vec{b}_1 \\times \\vec{b}_2$ gives the common perpendicular direction. Project the connecting vector $(\\vec{a}_2 - \\vec{a}_1)$ onto that direction, and boom: you have the shortest gap.",
    funNote: "Guaranteed 4 marks in JEE Main every single year. Memorize this determinant formula cold!",
    diagram: null
  },
  {
    id: "m5",
    subject: "math",
    chapter: "Algebra",
    title: "Bayes' Theorem (Conditional Probability)",
    latex: "P(A_i | B) = \\frac{P(A_i) P(B | A_i)}{\\sum_{j=1}^n P(A_j) P(B | A_j)}",
    story: "You observed an effect $B$ (e.g. a patient tested positive, or a defective bolt was drawn). Bayes' theorem works in reverse: it calculates the probability that this effect came from cause $A_i$. The numerator is the path probability through $A_i$; the denominator is the sum of all possible paths that could produce $B$.",
    funNote: "Tree Diagram Trick: Never write the full scary formula. Just draw a probability tree, find the path you care about, and divide it by the sum of all successful branches.",
    diagram: null
  },
  {
    id: "m6",
    subject: "math",
    chapter: "Algebra",
    title: "Properties of Determinants & Adjoints",
    latex: "|\\text{adj}(A)| = |A|^{n-1}, \\quad |\\text{adj}(\\text{adj}(A))| = |A|^{(n-1)^2}, \\quad A \\cdot \\text{adj}(A) = |A| I",
    story: "The adjoint of a matrix is its algebraic sidekick. For a $3 \\times 3$ matrix ($n=3$), taking the adjoint determinant raises $|A|$ to power $3-1 = 2$. Do it twice, and it gets raised to $(3-1)^2 = 4$.",
    funNote: "JEE Favorite: Questions asking for $|\\text{adj}(3A)|$. Remember that for an $n\\times n$ matrix, $|kA| = k^n |A|$!",
    diagram: null
  }
];
