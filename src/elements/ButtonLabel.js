import styles from './ButtonLabel.module.css';

function ButtonLabel({ label, title, px = 32, onClick }) {
  return (
    <button
      className={styles.buttonLabel}
      style={{ paddingLeft: px, paddingRight: px }}
      aria-label="Buat Catatan"
      title={title}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ButtonLabel;
