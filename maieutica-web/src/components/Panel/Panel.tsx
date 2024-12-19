import styles from './Panel.module.css'

export interface PanelProps {
    title: string,
    colorPanel: string,
    subTitle: string,
    fontColor?: string
}

export function Panel(props: PanelProps) {
    const { title, colorPanel, subTitle, fontColor } = props

    const firstPartSubtitle = "Home > "

    return (
        <div className={styles.panel} style={{ backgroundColor: colorPanel, color: fontColor }}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subTitle}>{firstPartSubtitle + subTitle}</p>
        </div>
    )
}