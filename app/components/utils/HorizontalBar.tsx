import styles from "./HorizontalBar.module.css";

type HorizontalBarProps = {
  className?: string;
};

const HorizontalBar = ({ className = "" }: HorizontalBarProps) => {
  return (
    <div className={`${styles.bar} ${className}`.trim()} aria-hidden="true">
      <div className={styles.light} />
    </div>
  );
};

export default HorizontalBar;