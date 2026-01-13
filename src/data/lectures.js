export const lectureData = [
    {
        time: "00:15",
        speaker: "Dr. Chen",
        text: "Today we'll examine the replication crisis in psychology, which emerged prominently around 2011.",
        type: "introduction",
        concepts: ["replication crisis"],
        citations: [],
        explainer: {
            type: "intent",
            label: "Motivation",
            text: "Setting the historical context to understand why current methodologies are being questioned."
        },
        // Simulated QA for Interview Mode
        qa: {
            question: "Can you tell me about a time you had to challenge established norms using data?",
            answer: "In my previous role, I identified that our standard retention model was flawed. I gathered 6 months of user data to demonstrate the discrepancy...",
            tags: ["Critical Thinking", "Data Driven"]
        }
    },
    {
        time: "00:35",
        speaker: "Dr. Chen",
        text: "The Open Science Collaboration attempted to replicate 100 psychology studies published in 2008. Only 36% of replications yielded significant results.",
        type: "empirical",
        concepts: ["Open Science Collaboration"],
        citations: ["OSC, 2015"],
        explainer: {
            type: "intuition",
            label: "The Big Picture",
            text: "Imagine re-running 100 successful experiments and failing 64 times. This signaled a systemic collapse in reliability."
        }
    },
    {
        time: "00:58",
        speaker: "Dr. Chen",
        text: "This connects to broader issues of publication bias and p-hacking, where researchers manipulate data analysis until they achieve statistical significance.",
        type: "connection",
        concepts: ["publication bias", "p-hacking"],
        citations: [],
        explainer: {
            type: "gap",
            label: "Bridging the Gap",
            text: "The implicit link here is that 'significance' (p < 0.05) is the currency for publication, creating an incentive to distort data."
        },
        tasks: [
            { text: "Review internal data for p-hacking signs", assignee: "@Team", priority: "high" }
        ],
        qa: {
            question: "How do you handle situations where the data contradicts your hypothesis?",
            answer: "Transparency is key. I document the divergence immediately and pivot to exploratory analysis to understand the 'why' behind the anomaly.",
            tags: ["Integrity", "Adaptability"]
        }
    },
    {
        time: "01:18",
        speaker: "Dr. Chen",
        text: "Ioannidis argued in his influential 2005 paper that most published research findings are false, particularly in fields with small sample sizes.",
        type: "literature",
        concepts: ["statistical power"],
        citations: ["Ioannidis, 2005"],
        explainer: {
            type: "intuition",
            label: "Intuition",
            text: "Low sample size = Noisy signal. Finding a 'pattern' in noise is likely a false alarm, yet these get published."
        }
    },
    {
        time: "01:42",
        speaker: "Graduate Student",
        text: "How does pre-registration of studies address this issue?",
        type: "question",
        concepts: ["pre-registration"],
        citations: [],
        explainer: {
            type: "intent",
            label: "Key Question",
            text: "Asking for the *mechanism* of the solution."
        }
    },
    {
        time: "01:50",
        speaker: "Dr. Chen",
        text: "Pre-registration requires researchers to specify their hypotheses and analysis plans before collecting data, preventing post-hoc hypothesis generation.",
        type: "methodology",
        concepts: ["pre-registration", "HARKing"],
        citations: [],
        explainer: {
            type: "intuition",
            label: "Analogy",
            text: "It's like calling your shot in pool before you shoot. You can't claim you 'meant' to hit that pocket after the fact."
        },
        tasks: [
            { text: "Draft pre-registration template", assignee: "@Sarah", priority: "medium" }
        ],
        qa: {
            question: "Describe your process for planning a complex project.",
            answer: "I start with a comprehensive 'pre-mortem' or pre-registration of our goals and metrics. This ensures alignment before any resources are committed.",
            tags: ["Project Management", "Planning"]
        }
    },
    {
        time: "02:15",
        speaker: "Dr. Chen",
        text: "However, Szollosi et al. 2020 critique that pre-registration may stifle exploratory research and scientific creativity.",
        type: "counterargument",
        concepts: ["exploratory research"],
        citations: ["Szollosi et al., 2020"],
        explainer: {
            type: "intent",
            label: "Nuance",
            text: "Introducing a trade-off: Rigor vs. Discovery. We don't want to stop finding new things just to be 'safe'."
        }
    },
    {
        time: "02:38",
        speaker: "Dr. Chen",
        text: "This tension between confirmatory and exploratory approaches remains central to contemporary debates in research methodology.",
        type: "synthesis",
        concepts: ["confirmatory research", "exploratory research"],
        citations: [],
        explainer: {
            type: "summary",
            label: "Cognitive Anchor",
            text: "We need both: Exploration to generate ideas, and Confirmation to test them. The crisis came from confusing the two."
        },
        tasks: [
            { text: "Schedule debate on Methodology", assignee: "@All", priority: "low" }
        ],
        qa: {
            question: "How do you balance innovation with reliability?",
            answer: "I allocate 70% of resources to proven, 'confirmatory' strategies, and 30% to 'exploratory' R&D. This portfolio approach manages risk while allowing for breakthroughs.",
            tags: ["Strategy", "Risk Management"]
        }
    },
];
