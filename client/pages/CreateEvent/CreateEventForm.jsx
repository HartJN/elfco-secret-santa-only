import styles from './CreateEvent.module.scss'

export default function CreateEventForm({
  name,
  setName,
  date,
  setDate,
  budget,
  setBudget,
  handleSubmit,
}) {
  return (
    <div className={styles.createEventContainer}>
      <h2 className={styles.secondaryHeading}>Create your Event</h2>
      <form className={styles.eventForm} onSubmit={handleSubmit}>
        <label htmlFor='name'>Event Name:</label>
        <input
          id='name'
          type='text'
          required
          value={name}
          name='name'
          onChange={(e) => setName(e.target.value)}
          placeholder='Event Name'
        />
        <label htmlFor='budget'>Budget:</label>
        <input
          id='budget'
          type='numeric'
          name='budget'
          required
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder='$'
        />
        <label htmlFor='date'>Draw Date:</label>
        <input
          id='date'
          type='date'
          name='date'
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder='Draw Date'
        />
        <button type='submit'>Create Your Event</button>
      </form>
      <img
        src='/server/public/assets/santa-small.PNG'
        alt='cartoon of santa'
        className={styles.santaImg}
      />
    </div>
  )
}
