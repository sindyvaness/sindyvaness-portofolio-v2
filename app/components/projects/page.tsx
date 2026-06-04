import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsPage.module.css";

type Project = {
	title: string;
	description: string;
	href: string;
	image: string;
	category: string;
};

const projects: Project[] = [
	{
		title: "Core Banking Platform",
		description: "Modernizacion de flujos financieros, integraciones y operaciones criticas de negocio.",
		href: "#core-banking-platform",
		image: "/images/hero.jpg",
		category: "Featured",
	},
	{
		title: "Insurance Claims Portal",
		description: "Portal interno para gestionar siniestros, validaciones y trazabilidad end-to-end.",
		href: "#insurance-claims-portal",
		image: "/images/build-process.png",
		category: "Enterprise",
	},
	{
		title: "CRM Automation Suite",
		description: "Automatizacion de procesos comerciales con paneles, reglas y seguimiento de leads.",
		href: "#crm-automation-suite",
		image: "/images/computer.png",
		category: "Automation",
	},
	{
		title: "Azure Integration Hub",
		description: "Conectores y APIs para sincronizar servicios, eventos y datos entre plataformas.",
		href: "#azure-integration-hub",
		image: "/images/hero.jpg",
		category: "Cloud",
	},
	{
		title: "Analytics Dashboard",
		description: "Visualizacion operativa con metricas accionables para equipos tecnicos y de negocio.",
		href: "#analytics-dashboard",
		image: "/images/build-process.png",
		category: "Data",
	},
	{
		title: "Customer Self-Service App",
		description: "Experiencia digital para consultas, solicitudes y seguimiento desde un solo lugar.",
		href: "#customer-self-service-app",
		image: "/images/computer.png",
		category: "Product",
	},
];

export default function ProjectsPage() {
	const [featuredProject, ...otherProjects] = projects;

	return (
		<section className={styles.projectsPage}>
			<div className={styles.introBlock}>
				<p className={styles.eyebrow}>Selected Work</p>
				<h2 className={styles.title}>Proyectos donde producto, arquitectura y ejecucion tuvieron que alinearse.</h2>
				<p className={styles.description}>
					Una seleccion de plataformas, portales y soluciones enterprise construidas para escalar,
					integrarse bien y resolver problemas reales.
				</p>
			</div>

			<div className={styles.grid}>
				<Link
					href={featuredProject.href}
					className={`${styles.card} ${styles.featuredCard}`}
					aria-label={`Abrir proyecto ${featuredProject.title}`}
				>
					<div className={styles.imageShell}>
						<Image
							src={featuredProject.image}
							alt={featuredProject.title}
							width={1200}
							height={800}
							priority
							className={styles.image}
						/>
					</div>

					<div className={styles.content}>
						<span className={styles.category}>{featuredProject.category}</span>
						<h3 className={styles.cardTitle}>{featuredProject.title}</h3>
						<p className={styles.cardDescription}>{featuredProject.description}</p>
						<span className={styles.cta}>View project</span>
					</div>
				</Link>

				<div className={styles.secondaryGrid}>
					{otherProjects.map((project) => (
						<Link
							key={project.title}
							href={project.href}
							className={styles.card}
							aria-label={`Abrir proyecto ${project.title}`}
						>
							<div className={styles.imageShell}>
								<Image
									src={project.image}
									alt={project.title}
									width={900}
									height={600}
									className={styles.image}
								/>
							</div>

							<div className={styles.content}>
								<span className={styles.category}>{project.category}</span>
								<h3 className={styles.cardTitle}>{project.title}</h3>
								<p className={styles.cardDescription}>{project.description}</p>
								<span className={styles.cta}>Open case study</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
