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
		<section className={styles.work} id="projects">
			<div className={styles.header}>
				<h2>Highlighted Work</h2>
				<p>Los tres proyectos mas destacados se muestran primero.</p>
			</div>

			<div className={styles.rows}>
				{visibleProjects.map((project) => (
					<article key={project.title} className={styles.projectRow}>
						<div className={styles.media}>
							<Image
								src={project.image}
								alt={project.title}
								width={1200}
								height={760}
								className={styles.image}
							/>
						</div>

						<div className={styles.contentCard}>
							{project.featured && <span className={styles.badge}>Featured</span>}
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<small>{project.tech}</small>
						</div>
					</article>
				))}
			</div>

			{orderedProjects.length > DEFAULT_VISIBLE && (
				<div className={styles.actions}>
					<button type="button" onClick={() => setShowAll((prev) => !prev)} className={styles.toggleButton}>
						{showAll ? "Ver menos" : "Ver mas"}
					</button>
				</div>
			)}
		</section>
	);
};

export default Work;

