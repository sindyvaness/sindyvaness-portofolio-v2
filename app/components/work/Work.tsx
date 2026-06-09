"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./Work.module.css";

type Project = {
	title: string;
	description: string;
	tech: string;
	image: string;
	featured?: boolean;
};

const projects: Project[] = [
	{
		title: "Core Banking APIs",
		description: "Microservicios para operaciones financieras criticas y seguras.",
		tech: ".NET 8, Azure, SQL Server",
		image: "/images/hero.jpg",
		featured: true,
	},
	{
		title: "Insurance Claims Platform",
		description: "Portal para reclamos con trazabilidad completa y reglas de negocio.",
		tech: "Next.js, .NET Core, REST",
		image: "/images/build-process.png",
		featured: true,
	},
	{
		title: "CRM Automation Suite",
		description: "Automatizacion de procesos comerciales y seguimiento de leads.",
		tech: "C#, React, Power Platform",
		image: "/images/computer.png",
		featured: true,
	},
	{
		title: "Customer Self-Service",
		description: "Canal digital para consultas y solicitudes de clientes.",
		tech: "React, TypeScript, Azure Functions",
		image: "/images/hero.jpg",
	},
	{
		title: "Internal Analytics Dashboard",
		description: "Visualizacion de metricas operativas para decisiones rapidas.",
		tech: "Next.js, Charting, API Gateway",
		image: "/images/build-process.png",
	},
	{
		title: "Integration Hub",
		description: "Conectores y sincronizacion entre sistemas legacy y cloud.",
		tech: ".NET, Event-driven, Azure Service Bus",
		image: "/images/computer.png",
	},
];

const DEFAULT_VISIBLE = 3;

const Work = () => {
	const [showAll, setShowAll] = useState(false);

	const orderedProjects = useMemo(
		() => [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))),
		[]
	);

	const visibleProjects = showAll ? orderedProjects : orderedProjects.slice(0, DEFAULT_VISIBLE);

	return (
		<section id="projects" className={styles.workSection} aria-labelledby="projects-heading">
			<div className={styles.sectionHeader}>
				<h2 id="projects-heading" className={styles.heading}>
					Systems built for scale, risk, and real operational use.
				</h2>

				<p className={styles.intro}>
					A focused set of enterprise deliveries across banking, insurance, CRM, analytics, and systems
					integration.
				</p>
				<p className={styles.kicker}>Selected Projects</p>
			</div>

			<div className={styles.projectsGrid}>
				{visibleProjects.map((project, index) => (
					<article
						key={project.title}
						className={`${styles.projectCard} ${project.featured ? styles.featuredCard : styles.standardCard}`}
					>
						<div className={styles.imageShell}>
							<Image
								src={project.image}
								alt={project.title}
								width={960}
								height={720}
								className={styles.projectImage}
							/>
							<div className={styles.imageOverlay} />
							<div className={styles.cardMeta}>
								<span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
								{project.featured ? <span className={styles.badge}>Featured</span> : null}
							</div>
						</div>

						<div className={styles.cardBody}>
							<h3 className={styles.projectTitle}>{project.title}</h3>
							<p className={styles.projectDescription}>{project.description}</p>
							<p className={styles.projectTech}>{project.tech}</p>
						</div>
					</article>
				))}
			</div>

			{orderedProjects.length > DEFAULT_VISIBLE ? (
				<div className={styles.actions}>
					<button type="button" className={styles.toggleButton} onClick={() => setShowAll((current) => !current)}>
						{showAll ? "Show fewer projects" : "Show all projects"}
					</button>
				</div>
			) : null}
		</section>
	);
};

export default Work;

