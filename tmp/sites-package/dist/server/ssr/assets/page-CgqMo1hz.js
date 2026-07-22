import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var projects = [
	{
		number: "01",
		title: "Ebik Device Repair",
		summary: "A responsive service website that helps students request laptop and phone repairs through a clear, approachable booking experience.",
		tags: [
			"Responsive Web",
			"Service UX",
			"Deployment"
		],
		className: "cream",
		eyebrow: "Service platform / Live",
		href: "https://ebik.vercel.app/"
	},
	{
		number: "02",
		title: "SmartWarm",
		summary: "An IoT-based warm-up game system combining interactive LED challenges with a simple interface for engaging group activities.",
		tags: [
			"IoT",
			"Arduino",
			"Interactive UI"
		],
		className: "keepr",
		eyebrow: "Final year project / Live",
		href: "https://smartwarm.site/"
	},
	{
		number: "03",
		title: "Piex Jury Platform",
		summary: "A jury management platform designed around participant flow, efficient scoring workflows and transparent results for live events.",
		tags: [
			"PHP",
			"SQL",
			"Scoring UX"
		],
		className: "paws",
		eyebrow: "Event platform / Live",
		href: "https://spexpmj.infinityfreeapp.com/index.php"
	},
	{
		number: "04",
		title: "IDS + IPS Monitor",
		summary: "A network-security dashboard in development for real-time intrusion visibility, alert triage and coordinated threat response.",
		tags: [
			"Cybersecurity",
			"Monitoring",
			"In progress"
		],
		className: "fieldops",
		eyebrow: "Security system / In progress",
		href: "#contact"
	},
	{
		number: "05",
		title: "Donexa",
		summary: "A streamer-donation concept that lets supporters attach videos or images to create more memorable, interactive livestream moments.",
		tags: [
			"Product Design",
			"Media",
			"In progress"
		],
		className: "cream",
		eyebrow: "Creator platform / In progress",
		href: "#contact"
	}
];
var experience = [
	[
		"Jan 2024 - Jan 2026",
		"IT Technician",
		"AJ Technology",
		"Johor Bahru"
	],
	[
		"Apr 2022 - Mar 2023",
		"Junior Engineer",
		"Kyocera",
		"Johor Bahru"
	],
	[
		"May 2021 - Apr 2022",
		"Store Management Trainee",
		"Original Classic",
		"Johor Bahru"
	],
	[
		"Jun 2020 - May 2021",
		"Store Management Trainee",
		"Gatti (M) Sdn. Bhd.",
		"Johor Bahru"
	]
];
var technologies = [
	"HTML",
	"CSS",
	"JavaScript",
	"PHP",
	"SQL",
	"C/C++",
	"Java",
	"Python",
	"React",
	"Node.js",
	"Firebase",
	"Arduino",
	"IoT",
	"Git",
	"GitHub",
	"Visual Studio Code",
	"NetBeans",
	"VMware",
	"Cisco",
	"Figma",
	"Canva"
];
var achievements = [
	[
		"2026",
		"Best Overall Project - SPEX",
		"Politeknik Mersing · Gold, Faculty of Information Technology"
	],
	[
		"2026",
		"Best Software Development Project - PIEX",
		"Faculty of Information Technology · Best overall project"
	],
	[
		"2025",
		"Top 9 Finalist - PPKOMP",
		"International-level competition"
	],
	[
		"2025",
		"Silver Award - Data Hackathon",
		"National-level competition"
	],
	[
		"2022",
		"Gold Award - Innotech",
		"National-level competition"
	],
	[
		"Leadership",
		"Chairperson of PPJTMK",
		"Student Association, Information & Communication Technology Department"
	],
	[
		"Leadership",
		"Secretary of JPP",
		"Student Representative Committee, Kolej Komuniti"
	]
];
var credentials = [
	[
		"Credential",
		"CompTIA Data+",
		"Verified professional certification",
		"/pdf/comptia-data-plus.pdf"
	],
	[
		"Academic",
		"Academic Transcript",
		"Official academic record and course results",
		"/pdf/academic-transcript.pdf"
	],
	[
		"Profile",
		"Professional Resume",
		"Experience, education, skills and achievements",
		"/pdf/alsa-resume.pdf"
	]
];
function ThemeButton() {
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("alsa-theme");
		const next = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
		setDark(next);
		document.documentElement.dataset.theme = next ? "dark" : "light";
	}, []);
	function toggleTheme() {
		const next = !dark;
		setDark(next);
		document.documentElement.dataset.theme = next ? "dark" : "light";
		localStorage.setItem("alsa-theme", next ? "dark" : "light");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: "icon-button theme-button",
		type: "button",
		onClick: toggleTheme,
		"aria-label": `Switch to ${dark ? "light" : "dark"} mode`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "theme-icon",
			"aria-hidden": "true"
		})
	});
}
function ProjectVisual({ className, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `project-visual ${className}`,
		role: "img",
		"aria-label": `${title} interface preview`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mock-browser",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mock-top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mock-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mock-kicker" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mock-title" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mock-copy" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mock-button" })
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "visual-label",
			children: title
		})]
	});
}
function ChatPanel({ onClose }) {
	function sendMessage(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const name = String(form.get("name") || "A portfolio visitor");
		const message = String(form.get("message") || "I'd like to work together.");
		window.location.href = `mailto:alsanudinnnn@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(message)}`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "chat-panel",
		role: "dialog",
		"aria-modal": "false",
		"aria-labelledby": "chat-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "chat-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "Start a conversation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "chat-title",
				children: "What can I build for you?"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "icon-button close-button",
				type: "button",
				onClick: onClose,
				"aria-label": "Close contact panel",
				children: "×"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: sendMessage,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "chat-name",
					children: "Your name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "chat-name",
					name: "name",
					autoComplete: "name",
					required: true,
					placeholder: "How should I address you?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "chat-message",
					children: "Project details"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "chat-message",
					name: "message",
					required: true,
					rows: 4,
					placeholder: "A quick note about your idea, timeline, or goals."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "button button-dark send-button",
					type: "submit",
					children: ["Send via email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "↗"
					})]
				})
			]
		})]
	});
}
function Home() {
	const [chatOpen, setChatOpen] = (0, import_react.useState)(false);
	const contributionCells = Array.from({ length: 154 }, (_, index) => {
		const value = (index * 17 + Math.floor(index / 7) * 11) % 13;
		return value < 5 ? 0 : value < 8 ? 1 : value < 11 ? 2 : 3;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip-link",
			href: "#main",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "site-header",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "brand",
					href: "#top",
					"aria-label": "Alsa home",
					children: ["ALSA", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Primary navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#projects",
							children: "Projects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#experience",
							children: "Experience"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#about",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeButton, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero section-shell",
					id: "top",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-profile",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "portrait",
								"aria-label": "Alsa monogram portrait",
								role: "img",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AZ" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "portrait-line one" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "portrait-line two" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "portrait-line three" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "profile-name",
								children: ["Alsa Nudin ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "verified",
									"aria-label": "Verified",
									children: "✓"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "profile-links",
								"aria-label": "Contact links",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:alsanudinnnn@gmail.com",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://github.com/alsanudinnnn-cmd/",
									target: "_blank",
									rel: "noreferrer",
									children: "GitHub"
								})]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hero-kicker",
									children: "IT professional · Johor, Malaysia"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["Full-Stack Developer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "— building practical digital experiences" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hero-description",
									children: "I turn ideas into reliable web products, technical systems and connected experiences. My background spans software development, IT support, database management and IoT—with a practical focus on solutions people can use confidently."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hero-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "button button-dark",
										href: "/pdf/alsa-resume.pdf",
										download: true,
										children: ["Download resume ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "↓"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "text-link",
										href: "#projects",
										children: ["Explore selected work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "→"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-index",
							"aria-hidden": "true",
							children: "01 / 08"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section-shell content-section",
					id: "projects",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Selected work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Projects" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Web, IoT and security products shaped around clear workflows and real-world needs." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "project-grid",
						children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "project-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: project.href,
									target: project.href.startsWith("http") ? "_blank" : void 0,
									rel: project.href.startsWith("http") ? "noreferrer" : void 0,
									"aria-label": `View ${project.title}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectVisual, {
										className: project.className,
										title: project.title
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "project-meta",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.number }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.eyebrow })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: project.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.summary }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "tag-row",
									children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tag }, tag))
								})
							]
						}, project.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section-shell content-section",
					id: "experience",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Industry journey"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Experience" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Technical problem-solving supported by engineering discipline, customer care and hands-on operations." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "timeline",
						role: "list",
						children: experience.map(([date, role, company, place], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "timeline-row",
							role: "listitem",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "timeline-number",
									children: ["0", index + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { children: date }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: role }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: company })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "place",
									children: place
								})
							]
						}, `${role}-${date}`))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section-shell content-section split-section",
					id: "about",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "split-title",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Toolbox"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Technologies" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The tools span development, infrastructure, design and connected hardware. The goal stays constant: dependable work with a clear purpose." })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "tech-cloud",
						children: technologies.map((tech, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: index < 4 ? "featured" : "",
							children: tech
						}, tech))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section-shell education-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Education"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Built on a practical foundation." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "education-detail",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { children: "Dec 2023 - Jan 2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Diploma in Information Technology (Software & Development)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Politeknik Mersing · Johor" })] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "education-detail",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { children: "Apr 2020 - Dec 2022" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Certificate in Information Technology" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Kolej Komuniti Cawangan Gelang Patah · Johor" })] })]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section-shell content-section certifications",
					id: "achievements",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Recognition & leadership"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Achievements" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Competition results and leadership responsibilities that reflect initiative, teamwork and consistent delivery." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "certificate-list",
						children: achievements.map(([date, title, issuer], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { children: date }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `certificate-mark mark-${index % 2 + 1}`,
								"aria-hidden": "true",
								children: "AZ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: issuer })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "certificate-arrow",
								"aria-hidden": "true",
								children: "↗"
							})
						] }, title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section-shell content-section certifications",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Verified documents"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Credentials" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Professional and academic documents available for review." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "certificate-list",
						children: credentials.map(([date, title, issuer, href], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { children: date }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `certificate-mark mark-${index % 2 + 1}`,
								"aria-hidden": "true",
								children: "AZ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: issuer })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "certificate-arrow",
								href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": `Open ${title}`,
								children: "↗"
							})
						] }, title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section-shell content-section outside",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "outside-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "How I work"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Curious, practical and always learning." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I enjoy moving between code, hardware and user experience—understanding the real problem first, then choosing the right tools. I use AI as a professional tool to accelerate good thinking, never as a replacement for it." })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "outside-art",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "art-label",
								children: "IDEAS / SYSTEMS / PEOPLE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "art-circle" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "art-type",
								children: "A"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section-shell contribution-section",
					"aria-labelledby": "contribution-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contribution-copy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "The practice"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "contribution-title",
							children: "Learning through every build."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "contribution-grid",
						role: "img",
						"aria-label": "A pattern representing consistent technical learning and project work",
						children: contributionCells.map((level, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `level-${level}` }, index))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section-shell contact-section content-section",
					id: "contact",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Have a project in mind?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Let's build something useful." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm open to web development, IT support, IoT and software projects where thoughtful execution can make a real difference." })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-options",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:alsanudinnnn@gmail.com",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "contact-icon",
									"aria-hidden": "true",
									children: "@"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "alsanudinnnn@gmail.com" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
									"aria-hidden": "true",
									children: "→"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setChatOpen(true),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "contact-icon",
									"aria-hidden": "true",
									children: "+"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Let's talk" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tell me about your project" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
									"aria-hidden": "true",
									children: "→"
								})
							]
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "site-footer section-shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Muhamad Alsanudin" }), " · Building and learning · Johor, Malaysia"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Designed & built with care ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026" })] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "scroll-top",
			href: "#top",
			"aria-label": "Back to top",
			children: "↑"
		}),
		chatOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatPanel, { onClose: () => setChatOpen(false) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "chat-trigger",
			type: "button",
			onClick: () => setChatOpen((value) => !value),
			"aria-expanded": chatOpen,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "chat-dot",
				"aria-hidden": "true"
			}), " Chat with Alsa"]
		})
	] });
}
//#endregion
export { Home as default };
