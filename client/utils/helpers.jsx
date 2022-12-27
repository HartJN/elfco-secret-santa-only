import styles from '../pages/EventDetail/EventDetail.module.scss'

export const formatDate = (date) => {
  const newDate = new Date(date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }

  return newDate.toLocaleDateString('en-NZ', options)
}
export const trim = (name) => {
  if (typeof name !== 'string') return

  if (name.includes(' ')) {
    return (
      <span className={styles.nameWrapper}>
        {name.split(' ')[0]}
        <span className={styles.nameTooltip}>{name}</span>
      </span>
    )
  }
  return name
}
