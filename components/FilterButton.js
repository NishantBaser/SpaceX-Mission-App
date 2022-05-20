import React from "react";
import styles from "../styles/FilterButton.module.css";

export default function FilterButton({ active, text, onSelect }) {

    return (
        <button
            className={active ? styles.button_active : styles.button}
            onClick={onSelect}
        >
            {text}
        </button>
    )
}