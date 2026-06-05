"use client";

import { useState } from "react";
import styles from "./Experience.module.css";

type ExperienceItem = {
	years: string;
	role: string;
	company: string;
	description: string;
	responsibilities: string[];
	achievements: string[];
};

const experienceItems: ExperienceItem[] = [
	{
		years: "2023 - 2026",
		role: "Senior .NET Developer",
		company: "Enterprise Finance Group",
		description: "Owner tecnico de servicios core para procesos criticos de negocio.",
		responsibilities: [
			"Diseño de APIs y servicios en .NET para operaciones financieras de alto volumen.",
			"Definicion de arquitectura, calidad de codigo y estandares de despliegue.",
			"Mentoria tecnica y soporte a equipos cross-functional.",
		],
		achievements: [
			"Reduccion de tiempos de respuesta en endpoints clave.",
			"Mejora de estabilidad en releases con pipelines y testing automatizado.",
		],
	},
	{
		years: "2020 - 2023",
		role: "Full Stack Developer",
		company: "Insurance Digital Lab",
		description: "Construccion de portales web para gestion de reclamos y autoservicio.",
		responsibilities: [
			"Implementacion frontend con React/Next.js y backend con .NET Core.",
			"Integracion con sistemas legacy y servicios de terceros.",
			"Optimizacion de consultas y procesos de negocio.",
		],
		achievements: [
			"Lanzamiento de portal de reclamos con mejora en adopcion interna.",
			"Disminucion de errores manuales en procesos operativos.",
		],
	},
	{
		years: "2018 - 2020",
		role: "Software Engineer",
		company: "CRM Solutions Co.",
		description: "Desarrollo de modulos y automatizaciones para plataformas comerciales.",
		responsibilities: [
			"Desarrollo de funcionalidades para CRM y flujos de ventas.",
			"Automatizacion de tareas con integraciones y eventos.",
			"Soporte tecnico en incidencias productivas.",
		],
		achievements: [
			"Entrega de modulos reutilizables para equipos de producto.",
			"Mejora en trazabilidad de leads y conversion.",
		],
	},
	{
		years: "2016 - 2018",
		role: "Junior Developer",
		company: "Tech Services Studio",
		description: "Participacion en proyectos web empresariales y mantenimiento evolutivo.",
		responsibilities: [
			"Implementacion de historias de usuario en backend y frontend.",
			"Correccion de bugs y mejoras de performance.",
			"Documentacion tecnica y soporte al equipo.",
		],
		achievements: [
			"Consolidacion de buenas practicas de desarrollo colaborativo.",
			"Contribucion a entregas continuas en varios proyectos.",
		],
	},
];

const Experience = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeItem = experienceItems[activeIndex];

	return (
		<section className={styles.experience} id="experience">
			<h2 className={styles.title}>Experience Timeline</h2>

			<div className={styles.timelineScroller}>
				<div className={styles.timeline}>
					{experienceItems.map((item, index) => (
						<button
							key={`${item.company}-${item.years}`}
							type="button"
							className={`${styles.point} ${index === activeIndex ? styles.pointActive : ""}`.trim()}
							onMouseEnter={() => setActiveIndex(index)}
							onFocus={() => setActiveIndex(index)}
							onClick={() => setActiveIndex(index)}
							aria-pressed={index === activeIndex}
							aria-label={`${item.years} ${item.role} at ${item.company}`}
						>
							<span className={styles.years}>{item.years}</span>
							<span className={styles.role}>{item.role}</span>
							<span className={styles.company}>{item.company}</span>
							<span className={styles.dot} aria-hidden="true" />
						</button>
					))}
				</div>
			</div>

			<article className={styles.detailCard}>
				<p className={styles.detailIntro}>{activeItem.description}</p>

				<h3 className={styles.detailTitle}>Responsibilities</h3>
				<ul className={styles.detailList}>
					{activeItem.responsibilities.map((responsibility) => (
						<li key={responsibility}>{responsibility}</li>
					))}
				</ul>

				<h3 className={styles.detailTitle}>Achievements</h3>
				<ul className={styles.detailList}>
					{activeItem.achievements.map((achievement) => (
						<li key={achievement}>{achievement}</li>
					))}
				</ul>
			</article>
		</section>
	);
};

export default Experience;