[

    // HTML
    {trigger: "<span", replacement: "<span$0>$1</span>$2", options: "tA"},
    
    // Stenography
    {trigger: /(${morphism_prefix})m/i, replacement: "[[0]]morphism", options: "tA"},
    {trigger: /(${morphism_prefix})c/i, replacement: "[[0]]morphic", options: "tA"},

    // Obsidian
    {trigger: /(![a-z]+)/, replacement: ">[[[0]]]", options: "t"},
    {trigger: "tikzcd", replacement: "```tikz\n\\usepackage{tikz-cd, amsmath, amssymb}\\begin{document}\\begin{tikzcd}[every label/.append style={font=\\small}]\n$0\n\\end{tikzcd}\\end{document}\n```\n$1", options: "tA"},
    {trigger: "tikzsq", replacement: "```tikz\n\\usepackage{tikz-cd, amsmath, amssymb}\\begin{document}\\begin{tikzcd}[every label/.append style={font=\\small}]\n${0:FX} \\rar[\"${1:Ff}\"] \\dar[\"${2:\\phi_X}\"'] & ${3:FY} \\dar[\"${4:\\phi_Y}\"]\\\\\n${5:GX} \\rar[\"${6:Gf}\"'] & ${7:GY}\n\\end{tikzcd}\\end{document}\n```", options: "tA"},
    {trigger: "tikzbrace", replacement: "every matrix/.append style={left delimiter=\\{, right delimiter=\\}}", options: "mA"},
    {trigger: "tikznat", replacement: "```tikz\n\\usepackage{tikz-cd, amsmath, amssymb}\\begin{document}\\begin{tikzcd}[every label/.append style={font=\\small}]\n${0:\\mathcal{C}}\\rar[bend left=40, \"${1:F}\", \"\"'{name=U}]\\rar[bend right=40, \"${2:G}\"', \"\"{name=D}] & ${3:\\mathcal{D}}\n\\ar[Rightarrow, from=U, to=D, \"${4:\\phi}\"]\n\\end{tikzcd}\\end{document}\n```", options: "tA"},
    {trigger: "tikzadj", replacement: "```tikz\n\\usepackage{tikz-cd, amsmath, amssymb}\\begin{document}\\begin{tikzcd}[every label/.append style={font=\\small}]\n${0:\\mathcal{C}}\\rar[phantom, \"${1:\\bot}\"]\\rar[shift right=3, \"${2:R}\"'] & ${3:\\mathcal{D}}\\lar[shift right=3, \"${4:L}\"']\n\\end{tikzcd}\\end{document}\n```", options: "tA"},

    // Math mode
    {trigger: "MK", replacement: "$$$0$$$1", options: "tA"},
    {trigger: "mk", replacement: "$$0$", options: "tA"},
    {trigger: "dm", replacement: "$$\n$0\n$$", options: "tAw"},
    {trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},

    // Greek letters
    {trigger: "@a", replacement: "\\alpha", options: "mA"},
    {trigger: "@b", replacement: "\\beta", options: "mA"},
    {trigger: "@g", replacement: "\\gamma", options: "mA"},
    {trigger: "@G", replacement: "\\Gamma", options: "mA"},
    {trigger: "@d", replacement: "\\delta", options: "mA"},
    {trigger: "@D", replacement: "\\Delta", options: "mA"},
    {trigger: "@e", replacement: "\\epsilon", options: "mA"},
    {trigger: ":e", replacement: "\\varepsilon", options: "mA"},
    {trigger: "@z", replacement: "\\zeta", options: "mA"},
    {trigger: "@t", replacement: "\\theta", options: "mA"},
    {trigger: "@T", replacement: "\\Theta", options: "mA"},
    {trigger: ":t", replacement: "\\vartheta", options: "mA"},
    {trigger: "@i", replacement: "\\iota", options: "mA"},
    {trigger: "@k", replacement: "\\kappa", options: "mA"},
    {trigger: "@l", replacement: "\\lambda", options: "mA"},
    {trigger: "@L", replacement: "\\Lambda", options: "mA"},
    {trigger: "@s", replacement: "\\sigma", options: "mA"},
    {trigger: "@S", replacement: "\\Sigma", options: "mA"},
    {trigger: "@u", replacement: "\\upsilon", options: "mA"},
    {trigger: "@U", replacement: "\\Upsilon", options: "mA"},
    {trigger: "@o", replacement: "\\omega", options: "mA"},
    {trigger: "@O", replacement: "\\Omega", options: "mA"},
    {trigger: ":p", replacement: "\\varphi", options: "mA"},
    {trigger: "@p", replacement: "\\phi", options: "mA"},

    // Text environment
    {trigger: /txt/, replacement: "\\text{$0}$1", options: "mA"},
    {trigger: "\"", replacement: "\"$0\"$1", options: "mA"},
    {trigger: "''", replacement: "\"$0\"$1", options: "mA"},
    {trigger: "tss", replacement: "\\textsuperscript", options: "tA"},

    // Basic operations
    {trigger: "sr", replacement: "^2", options: "mA"},
    {trigger: "cb", replacement: "^3", options: "mA"},
    {trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA"},
    {trigger: "invs", replacement: "^{-1}", options: "mA"},

    // More operations
    {trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rm"},
    {trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rm"},
    {trigger: "([a-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rm", priority: -1},
    {trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rm", priority: 1},
    {trigger: "([a-z])tilde", replacement: "\\tilde{[[0]]}", options: "rm"},
    {trigger: "([A-Z])tilde", replacement: "\\widetilde{[[0]]}", options: "rm"},
    {trigger: "([a-zA-Z])und", replacement: "\\underline{[[0]]}", options: "rm"},
    {trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rm"},

    // Auto letter subscript
    {trigger: /([A-Za-z])(\d)/, replacement: "[[0]]_[[1]]", options: "mA", priority: -1},
    {trigger: /([A-Za-z])_(\d\d)/, replacement: "[[0]]_{[[1]]}", options: "mA"},
    {trigger: /\\hat{([A-Za-z])}(\d)/, replacement: "\\hat{[[0]]}_[[1]]", options: "rmA"},
    {trigger: /\\vec{([A-Za-z])}(\d)/, replacement: "\\vec{[[0]]}_[[1]]", options: "rmA"},
    {trigger: /\\mathbf{([A-Za-z])}(\d)/, replacement: "\\mathbf{[[0]]}_[[1]]", options: "rmA"},

    {trigger: "xnn", replacement: "x_n", options: "mA"},
    {trigger: "xii", replacement: "x_i", options: "mA"},
    {trigger: "xjj", replacement: "x_j", options: "mA"},
    {trigger: "xp1", replacement: "x_{n+1}", options: "mA"},
    {trigger: "ynn", replacement: "y_n", options: "mA"},
    {trigger: "yii", replacement: "y_i", options: "mA"},
    {trigger: "yjj", replacement: "y_j", options: "mA"},

    // Symbols
    {trigger: "ooo", replacement: "\\infty", options: "mA"},
    {trigger: "sum", replacement: "\\sum_{${0:i}=${1:1}}^{${2:N}} $3", options: "m"},
    {trigger: "prod", replacement: "\\prod_{${0:i}=${1:1}}^{${2:N}} $3", options: "m"},
    {trigger: "lim", replacement: "\\lim_{ ${0:n} \\to ${1:\\infty} } $2", options: "m"},
    {trigger: "o+", replacement: "\\oplus", options: "mA"},
    {trigger: "oxx", replacement: "\\otimes", options: "mA"},
    {trigger: "xx", replacement: "\\times", options: "mA"},
    {trigger: "**", replacement: "\\cdot", options: "mA"},

    {trigger: "!=", replacement: "\\neq", options: "mA"},
    {trigger: ">=", replacement: "\\geq", options: "mA"},
    {trigger: "<=", replacement: "\\leq", options: "mA"},
    {trigger: ">>", replacement: "\\gg", options: "mA"},
    {trigger: "<<", replacement: "\\ll", options: "mA"},
    {trigger: "sim=", replacement: "\\simeq", options: "mA"},

    // Arrows
    {trigger: "leftra", replacement: "\\leftrightarrow", options: "mA"},
    {trigger: "leftla", replacement: "\\leftleftarrows", options: "mA"},
    {trigger: "rightra", replacement: "\\rightrightarrows", options: "mA"},
    {trigger: "longra", replacement: "\\longrightarrow", options: "mA"},
    {trigger: "Longra", replacement: "\\Longrightarrow", options: "mA"},
    {trigger: "longla", replacement: "\\longleftarrow", options: "mA"},
    {trigger: "longmt", replacement: "\\longmapsto", options: "mA"},
    {trigger: "rightra", replacement: "\\longmapsto", options: "mA"},
    {trigger: "::", replacement: "\\colon $0\\to  $1", options: "mA"},
    {trigger: "ceq", replacement: "\\coloneqq", options: "mA"},
    {trigger: ":=", replacement: "\\coloneqq", options: "mA"},
    {trigger: "xra", replacement: "\\xrightarrow", options: "mA"},
    {trigger: /(\\[a-z]+)\^_/i, replacement: "\\overunderset{$0}{$1}{[[0]]}$2", options: "mA"},
    {trigger: /(\\[a-z]+)\^\^/i, replacement: "\\overset{$0}{[[0]]}$1", options: "mA"},
    {trigger: /(\\[a-z]+)__/i, replacement: "\\underset{$0}{[[0]]}$1", options: "mA"},

    // Sets
    {trigger: "\\", replacement: "\\setminus", options: "m"},
    {trigger: "sub!=", replacement: "\\subsetneq", options: "mA"},
    {trigger: "!sub=", replacement: "\\nsubseteq", options: "mA"},
    {trigger: "sub=", replacement: "\\subseteq", options: "mA"},
    {trigger: "sup=", replacement: "\\supseteq", options: "mA"},
    {trigger: ":n", replacement: "\\varnothing", options: "mA"},
    {trigger: "{", replacement: "\\{$0\\", options: "m"},

    // Fonts
    {trigger: "rm", replacement: "\\textrm{$0}", options: "mw"},
    {trigger: "bb", replacement: "\\mathbb{$0}", options: "m"},
    {trigger: "bf", replacement: "\\mathbf{$0}", options: "m"},
    {trigger: "opn", replacement: "\\operatorname{$0}", options: "mA"},
    {trigger: "cal", replacement: "\\mathcal{$0}", options: "m"},
    {trigger: "LL", replacement: "\\mathcal{L}", options: "mA"},
    {trigger: "HH", replacement: "\\mathcal{H}", options: "mA"},
    {trigger: "CC", replacement: "\\mathbb{C}", options: "mA"},
    {trigger: "RR", replacement: "\\mathbb{R}", options: "mA"},
    {trigger: /\\mathbb{R}([\da-z])/i, replacement: "\\mathbb{R}^[[0]]", options: "mA"},
    {trigger: "ZZ", replacement: "\\mathbb{Z}", options: "mA"},
    {trigger: /\\mathbb{Z}([+-])/, replacement: "\\mathbb{Z}^[[0]]", options: "mA"},
    {trigger: "NN", replacement: "\\mathbb{N}", options: "mA"},
    {trigger: "QQ", replacement: "\\mathbb{Q}", options: "mA"},
    {trigger: "BB", replacement: "\\mathcal{B}", options: "mA"},
    {trigger: "PP", replacement: "\\mathcal{P}", options: "mA"},
    {trigger: /\\\\([A-Za-z])/, replacement: "\\cat{[[0]]}", options: "mA"},
    {trigger: /\$\\\\([A-Za-z])/, replacement: "$\\cat{[[0]]}", options: "tA"},
    {trigger: /(?<!\$)\\\\([A-Za-z])/, replacement: "$\\cat{[[0]]}$", options: "tA"},
    {trigger: /(?<![\$\\])\\([A-Za-z])/, replacement: "$[[0]]$", options: "tA"},

    // Derivatives and integrals
    {trigger: "par", replacement: "\\frac{\\partial ${0:y}}{\\partial ${1:x}} $2", options: "m"},
    {trigger: /pa([A-Za-z])([A-Za-z])/, replacement: "\\frac{\\partial [[0]]}{\\partial [[1]]} ", options: "rm"},
    {trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "mA"},

    {trigger: "int", replacement: "\\int $0 \\, d${1:x} $2", options: "m"},
    {trigger: "dint", replacement: "\\int_{${0:0}}^{${1:1}} $2 \\, d${3:x} $4", options: "m"},
    {trigger: "oinf", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "m"},
    {trigger: "infi", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "m"},

    // Visual operations
    {trigger: "U", replacement: "\\underbrace{${VISUAL}}_{$0}", options: "mA"},
    {trigger: "O", replacement: "\\overbrace{${VISUAL} }^{$0}", options: "mA"},
    {trigger: "B", replacement: "\\underset{$0}{${VISUAL}}", options: "mA"},
    {trigger: "S", replacement: "\\overset{$0}{${VISUAL}}", options: "mA"},
    {trigger: "C", replacement: "\\cancel{${VISUAL}}", options: "mA"},
    {trigger: "K", replacement: "\\cancelto{$0}{${VISUAL}}", options: "mA"},
    {trigger: "|", replacement: "\\left. ${VISUAL} \\right|_$1", options: "mA"},

    // Environments
    {trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "MA"},
    {trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "MA"},
    {trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "MA"},
    {trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "MA"},
    {trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "MA"},
    {trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "M"},
    {trigger: "cases", replacement: "\\begin{cases}\n$0\n\\end{cases}", options: "MA"},
    {trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}", options: "MA"},
    {trigger: "array", replacement: "\\begin{array}\n$0\n\\end{array}", options: "MA"},

    {trigger: "pmat", replacement: "\\begin{pmatrix}$0\\end{pmatrix}", options: "nA"},
    {trigger: "bmat", replacement: "\\begin{bmatrix}$0\\end{bmatrix}", options: "nA"},
    {trigger: "Bmat", replacement: "\\begin{Bmatrix}$0\\end{Bmatrix}", options: "nA"},
    {trigger: "vmat", replacement: "\\begin{vmatrix}$0\\end{vmatrix}", options: "nA"},
    {trigger: "Vmat", replacement: "\\begin{Vmatrix}$0\\end{Vmatrix}", options: "nA"},
    {trigger: "matrix", replacement: "\\begin{matrix}$0\\end{matrix}", options: "nA"},
    {trigger: "cases", replacement: "\\begin{cases}$0\\end{cases}", options: "nA"},
    {trigger: "align", replacement: "\\begin{align}$0\\end{align}", options: "nA"},
    {trigger: "array", replacement: "\\begin{array}$0\\end{array}", options: "nA"},

    // Brackets
    {trigger: "avg", replacement: "\\langle $0 \\rangle $1", options: "mA"},
    {trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "mA", priority: 1},
    {trigger: "Norm", replacement: "\\lVert $0 \\rVert $1", options: "mA", priority: 1},
    {trigger: /([n\d])Norm/, replacement: "\\lVert $0 \\rVert_[[0]] $1", options: "mA", priority: 1},
    {trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA"},
    {trigger: "floor", replacement: "\\lfloor $0 \\rfloor $1", options: "mA"},
    {trigger: "mod", replacement: "|$0|$1", options: "mA"},
    {trigger: "(", replacement: "(${VISUAL})", options: "mA"},
    {trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
    {trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
    {trigger: "(", replacement: "($0)", options: "mA"},
    {trigger: "{", replacement: "{$0}", options: "mA"},
    {trigger: "[", replacement: "[$0]", options: "mA"},
    {trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
    {trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
    {trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
    {trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
    {trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA"},
    {trigger: "lr.", replacement: "\\left. $0 \\right|$1", options: "mA"},


    // Misc
    // {trigger: /([^'])\b([B-HJ-Zb-z])\b([\n\s.,?!:'])/, replacement: "[[0]]$[[1]]$[[2]]", options: "tA", description: "Automatically convert standalone letters in text to math (except a, A, I)"},
    // {trigger: "(${GREEK})([\\n\\s.,?!:'])", replacement: "$\\[[0]]$[[1]]", options: "rtAw", description: "Automatically convert Greek letters in text to math"},
    {trigger: /([A-Za-z]=\d+)([\n\s.,?!:'])/, replacement: "$[[0]]$[[1]]", options: "rtAw", description: "Automatically convert text of the form 'x=2' to maths"},
    {trigger: /([A-Za-z]=[A-Za-z][+-]\d+)([\n\s.,?!:'])/, replacement: "$[[0]]$[[1]]", options: "tAw", description: "Automatically convert text of the form 'x=n+1' to maths"},
    // {trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA", description: "Taylor expansion"},
    
    {trigger: /iden(\d)/, replacement: (match) => {
        const n = match[1];

        let arr = [];
        for (let j = 0; j < n; j++) {
            arr[j] = [];
            for (let i = 0; i < n; i++) {
                arr[j][i] = (i === j) ? 1 : 0;
            }
        }

        let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
        output = `\\begin{pmatrix}\n${output}\n\\end{pmatrix}`;
        return output;
    }, options: "mA", description: "N x N identity matrix"},
    
    ]
